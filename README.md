# Backend - Platform Learning

## Tecnologías

- Prisma
- NestJS
- PostgreSQL
- JWT

## Requerimientos

- Docker
- Node.js
- pnpm

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/emiperez997/platform-learning.git
```

2. Instalar dependencias con `pnpm install`

```bash
pnpm install
```

3. Crear el archivo `.env` con el siguiente contenido

```bash
DATABASE_URL=
JWT_SECRET=
```

4. Iniciar el servidor de base de datos con `docker-compose up -d` (En caso de no usar una base de datos en la nube)

```bash
docker-compose up -d
```

5. Ejecutar `prisma migrate dev` para crear la base de datos

```bash
prisma migrate dev
```

6. Iniciar el servidor de backend con `pnpm run start`

```bash
pnpm run start
```

## Funcionalidades

### Usuarios

- Obtener todos los Usuarios
- Registro de Usuarios
- Modificación de Usuarios
- Borrado de Usuarios

### Profesores

- Obtener todos los Profesores
- Registro de Profesores
- Modificación de Profesores
- Borrado de Profesores

### Cursos

- Obtener todos los Cursos
- Registro de Cursos
- Modificación de Cursos
- Borrado de Cursos

### Inscripciones

- Obtener todas las Inscripciones
- Registro de Inscripciones
- Modificación de Inscripciones
- Borrado de Inscripciones

## Autor

- [Emiliano Perez](https://github.com/emiperez997)
