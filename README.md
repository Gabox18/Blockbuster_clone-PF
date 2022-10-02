![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Final Project - Henry Blockbuster

<img width="400" src="./Logo.png" />

## Resumen:

- Se desarrollara una réplica de la página Blockbuster, el usuario tendrá acceso
a series y películas.

## Horarios y Fechas.

El proyecto tendrá una duración máxima de tres semanas de creacion

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```

## Enunciado

La idea general es crear una aplicación en la cual se puedan visualizar informacion y rentar una gran cantidad de series/peliculas junto con información relevante de las mismas utilizando la api externa [IMDB](https://www.imdb.com/)--Modificar-- y a partir de ella poder, entre otras cosas:

- Rentar peliculas
- Filtrarlas / Ordenarlas
- Agregar productos al Shop

#### Tecnologías Utilizadas

- [ ] React
- [ ] TypeScript
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Base de datos

- [ ] Actuará en el diseño e implementación de la BD al desarrollo web, creando sus
distintas relaciones y el nombre.

## Backend

- [ ] La capa de servicios es responsable de consultar y almacenar la información de
forma íntegra, consistente y segura en la base de datos, implementando también
gran parte de la plataforma. 
- [ ] Los servicios son expuestos mediante una API para poder consultar por una o
varias veces por los integrantes. Nuestros servicios están implementados por la
tecnología de TypeScritp. 

## Frontend 

- [ ] La capa de presentación es la responsable de mostrar la información de forma
clara y ordenada, para casa solución, puede haber varias capas de presentación
corriendo en la plataforma web.

## Alcance

- [ ] Landing Page: contendrá un componente de log-in el cual permitirá el acceso a
la pagina principal ya sea registrándose como usuario nuevo o existente.

- [ ] Configuración de Cuenta: El usuario podrá administrar la información personal
de su cuenta.

- [ ] Home: Se mostrarán las diferentes películas/series.

## Maquetado con Figma

 <img width="800" src="./Guia-PF.png" />

## Funcionalidades

- [ ] Creación de cuenta.
- [ ] Búsqueda.
- [ ] Filtros (genero, rating, a-z).
- [ ] Agregar al carro.
- [ ] Rentar – pasarela de pago.
- [ ] Calificar película.

## Estructura del Proyecto

La estructura del Proyecto cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `Henry_Blockbuster`

El contenido de `client` fue creado usando: Create React App.

## Equipo de desarrollo

- [Abimael Rueda](https://www.linkedin.com/in/abimael-rueda-galindo-4b131b244/)
- [Franco Selvarolo](https://www.linkedin.com/in/francoselvarolo/)
- [Lucas Pedreira](https://www.linkedin.com/in/lucas-pedreira-66a15123a/)
- [Gabriel Suarez](https://www.linkedin.com/in/gabriel-suarez-7357931b3/)
- [Agustin mollo](https://www.linkedin.com/in/agustin-mollo-a3584b243/)
- [Santiago Hubert](https://www.linkedin.com/in/santiago-hubert/)
- [Gabriel Ferrer](https://www.linkedin.com/in/gabriel-ferrer-b25639224/)

