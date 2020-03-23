# MERN FooDaTy

## 1. Introducción
	
La aplicación sirve para obtener datos de los partidos en los clubes de football 		pequeños de modo que sea posible tener un registro de las estadísticas de los jugadores y servir como sistema que identifique a que equipo pertenece el jugador.

## 2. Tema

Sera una aplicacion web orientada a toma de datos de partidos de football de forma manual y centralización de estos datos

## 3. Planteamiento del problema

Para obtener los datos de los jugadores de las ligas menores se utiliza software que hace uso de comandos para registrarlos lo que es poco amigable al usuario y no cuenta con respaldos de estos datos. Por otra parte el jugador que juega con un club se identifica con una tarjeta  física la cual es el medio de transferencia del jugador entre equipos.

## 4. Justificación

Con la finalidad de facilitar la obtención de datos para los equipos debido a que la venta o renta de jugadores es lo que mantiene a los clubes pequeños a flote y para facilitar el intercambio de jugadores por medio de la aplicación.

## 5. Estado del arte

Actualmente las aplicaciones funcionan en computadoras donde se registran los pases buenos del jugador, los pases efectivos y demás estadísticas con un mouse lo que dificulta la velocidad a la que tienen que ser obtenidos los datos y puede resultar en errores humanos mas fácilmente ya que esto es mientras el partido va en curso. Con la aplicación se agregara una interfaz que facilite la toma de datos de manera mas rápida y el diseño esta orientado para su uso en dispositivos como tablets para hacer que la toma de estos datos sea mas ágil

## 6. Objetivo general
Obtener y guardar los datos relevantes de los jugadores por equipo

## 7.Objetivos específicos
* Asignar los jugadores a otros equipos cuando hay un intercambio centralizando la 	información
* Tener los datos de los jugadores en la nube para evitar la perdida de datos 
* Facilitar la escritura de estos datos con la interfaz y utilizando dispositivos que 			permiten seleccionar al jugador de manera mas rápida

## 8. Modelo de negocio

| **Socios claves** - Clubes de football pequeños- Grupos de instagram donde se hable de footballEntrenadores de equipos departamentales/regionales- Universidades | **Actividades claves** Desarrollar aplicaciónComunicar la aplicación con los equipos de football | **Propuesta de valor** El software actualmente utilizado para la toma de datos de los equipos de football tiene una curva de aprendizaje debido a la velocidad que hay que utilizarla, la aplicación aumentara la velocidad de la toma de datos, también guardara los datos en la nube evitando perdida de estos datos y facilitara el intercambio de jugadores para reemplazar el manejo de las tarjetas de identificación | **Relación con el cliente** Asistencia por canal de soporte utilizando LiveChat                                                 | **Segmento de clientes** - Clubes de Football pequeños- Equipos UniversitariosCopas de football Entrenadores |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                  | **Recursos claves** - Desarrolladores- Servidor que soporte nodejs y mongodb                     |                                                                                                                                                                                                                                                                                                                                                                                                                             | **Canales** - Redes sociales - Publicidad en Playstore - Eventos para mostrar a los clubes de universidades/barrios el software |                                                                                                              |
| **Estructura de coste** Desarrollo del aplicativo web Servidor en Heroku o AWS                                                                                        |                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                 | **Fuentes de Ingreso** La aplicación web tendrá un costo por uso(membresia)                                                     |

## 9. Mockups

https://www.figma.com/file/jHfLUo4zPcPqpen3PL9ioQ/DataPanel?node-id=0%3A1

## 10. Descripción de la aplicación
	
La aplicación web guarda información en una base de datos NOSQL, los equipos, los jugadores, el servidor se encarga de entregar y guardar los datos el front-end estará hecho utilizando react con material-ui y el backend utilizando express.js con mongoose para la conexión a la base de datos, el motor de base de datos será mongoDB
