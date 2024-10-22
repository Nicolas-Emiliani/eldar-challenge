import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, InputTextareaModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  post = { title: '', body: '' };
  visible: boolean = false;
  public ref?: DynamicDialogRef<PostsComponent>;

  showDialog() {
      this.visible = true;
  }

  hideDialog() {
    this.visible = false;
    console.log(this.post);
  }

  onSubmit() {
    this.ref?.close(this.post);
    console.log(this.post);
  }
}
