import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { toArray } from 'rxjs/internal/operators/toArray';

import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { PageEvent } from '../../../models/paginator.interface';
import { PostsComponent } from '@shared/modals/posts/posts.component';

import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-data-posts',
  standalone: true,
  imports: [
    DividerModule,
    PaginatorModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DividerModule,
    InputTextareaModule,
    MenuModule,
    ToastModule,
    RippleModule,
    DialogModule,
    PostsComponent,
  ],
  providers: [MessageService, DialogService],
  templateUrl: './data-posts.component.html',
  styleUrl: './data-posts.component.scss',
})
export class DataPostsComponent {
  @ViewChild(PostsComponent) postsComponent!: PostsComponent;
  public data$!: Observable<any[]>;
  public filteredPosts: any[] = [];
  public posts: any[] = [];
  public searchTerm: string = '';
  public authRole: string = '';
  public items: MenuItem[] | undefined;
  public visible: boolean = false;
  public ref: DynamicDialogRef | undefined;

  public currentPage: number = 1;
  public postsPerPage: number = 5;
  public totalPosts: number = 0;
  public first: number = 0;
  public rows: number = 0;

  constructor(
    public apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.accountRole();
    this.initializeMenuItems();
    this.loadPosts();
  }

  private loadPosts(): void {
    this.data$ = this.apiService.getPosts().pipe(toArray());
    this.data$.subscribe((posts) => {
      this.posts = posts[0];
      this.filteredPosts = posts[0];
      this.totalPosts = posts[0].length;
      this.rows = Math.ceil(this.totalPosts / this.postsPerPage);
    });
  }

  private initializeMenuItems(): void {
    this.items = [
      {
        label: 'Documents',
        items: [
          {
            label: 'Create',
            icon: 'pi pi-plus',
            command: () => this.showDialog(),
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.logout(),
          },
        ],
      },
    ];
  }

  private logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  showDialog() {
    this.postsComponent.showDialog();
  }

  accountRole(): boolean {
    this.authRole = this.authService.getUserRole();
    return this.authRole === 'admin';
  }

  filterPosts(): void {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredPosts = this.posts.filter((post) => {
      const titleMatches = post.title.toLowerCase().includes(searchTerm);
      const bodyMatches = post.body.toLowerCase().includes(searchTerm);
      return titleMatches || bodyMatches;
    });
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPosts = this.filteredPosts.length;
    this.rows = Math.ceil(this.totalPosts / this.postsPerPage);
    this.currentPage = 1;
  }

  onPageChange(event: PageEvent): void {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? this.postsPerPage;
    this.currentPage = Math.floor(this.first / this.postsPerPage) + 1;
  }

  getPaginatedPosts(): any[] {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
  }

  modifyPost(postId: number, updatedPost: any): void {
    const index = this.posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
      this.posts[index] = { ...this.posts[index], ...updatedPost };
      this.filterPosts();
    } else {
      console.error(`Post with id ${postId} not found.`);
    }
  }

  deletePost(postId: number): void {
    const index = this.posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
      this.filterPosts();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Content deleted',
      });
    } else {
      console.error(`Post with id ${postId} not found.`);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Could not delete content',
      });
    }
  }
}
