# Eldar Challenge
Aplicación web con autenticación avanzada, manejo de roles, y una arquitectura optimizada para proyectos escalables.


# Proyecto Angular - Aplicación de Gestión de Publicaciones

Este proyecto es una aplicación Angular que permite a los usuarios gestionar publicaciones. Los usuarios pueden crear, modificar, eliminar y buscar publicaciones. La aplicación está diseñada con un enfoque en la modularidad y la reutilización de componentes.





## Estructura del Proyecto

/proyecto-angular/
*  ├── /src/ │ 
*            ├── /app/│   
*                     ├── /components/ #.Componentes reutilizables
*                     ├── /services/ #.Servicios para la lógica de negocio y API
*                     ├── /models/ #.Modelos de datos
*                     ├── /core/ #.Módulos centrales y servicios de autenticación
*                     ├── /shared/ #.Componentes y servicios compartidos
*                     ├── app.module.ts #.Módulo raíz de la aplicación
*                     └── app.component.ts #.Componente raíz de la aplicación
*           ├── /assets/ #.Archivos estáticos como imágenes y estilos 
*           ├── /environments/ #.Configuraciones de entorno para desarrollo y producción 
*           └── index.html #.Archivo HTML principal 
*  ├── angular.json #.Configuración de Angular CLI 
*  ├── package.json #.Dependencias y scripts del proyecto 
*  └── README.md #.Documentación del proyecto

## Lista de dependencias

-  @angular/animations
-  auth0/angular-jwt
-  ngrx/effects
-  ngrx/store
-  rxjs
-  primeng
-  primeicons

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://angular.io/cli) (instalable globalmente con `npm install -g @angular/cli`)





## Instalación

1. **Clona el repositorio**:

-  git clone https://github.com/Nicolas-Emiliani/eldar-challenge.git
-  cd eldar-challenge

2. **Instala las dependencias**:

-  npm install

3. **Ejecución de la Aplicación**:
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

-  ng serve

Esto iniciará un servidor de desarrollo y podrás acceder a la aplicación en http://localhost:4200/.





#.**Pruebas**:

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

-  ng test

Esto ejecutará las pruebas unitarias definidas en el proyecto y mostrará un informe en la consola.

#.Para ejecutar las pruebas de extremo a extremo (e2e), utiliza:

-  ng e2e

Esto ejecutará las pruebas e2e y abrirá la aplicación en un navegador.





#.**Despliegue**:

Para crear una versión de producción de la aplicación, utiliza el siguiente comando:

-  ng build --prod

Esto generará una carpeta dist/ con los archivos listos para ser desplegados en un servidor.





#.**Contribuciones**:

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit (git commit -m 'Añadir nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request.


Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Para preguntas o comentarios, por favor contacta a nico_emiliani@hotmail.com.
