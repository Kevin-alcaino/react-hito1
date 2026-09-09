# 📄 Hito 1 - React - Pizzeria Il Tomaco.

## 🧠 Descripción del proyecto.

Aplicación web desarrollada en React y Vite para la pizzería "Il Tomaco", este proyecto permite visualizar una carta de diversas pizzas que se pueden gestionar con un carro de compras dinámico. Conceptos utilizados:

**`1`** Componentes y Modularización
Estructura basada en componentes: Separación lógica en Navbar, Header, Hero, CardPizza y Footer para mantener código reutilizable y limpio.

Props: Envío de datos dinámicos como imágenes, nombres, descripciones y precios desde App hacia cada tarjeta de pizza.

**`2`** Gestión de Estados y Eventos
useState: Utilizado para gestionar de forma reactiva el estado del carrito de compras (cart), permitiendo agregar productos dinámicamente.

Manipulación de arreglos (.reduce()): Empleado para calcular el monto total acumulado de los productos seleccionados en el carrito.

**`3`** Utilidades y Formato
Formato de moneda chilena (toLocaleString('es-CL')): Función auxiliar para mostrar los precios correctamente formateados en pesos chilenos (CLP).

## 🛠 Tecnologías implementadas

* **`React`** Librería JavaScript para la construcción de interfaces de usuario.
* **`Vite`** Entorno de desarrollo rápido y empaquetador para producción.
* **`Bootstrao`** Framework CSS para componentes adaptativos y estilizados.
* **`CSS`** Estilos personalizados de diseño, grillas y control visual.
* **`Git & GitHub`** Control de versiones y despliegue continuo.
* **`Vercel`** Plataforma de despliegue cloud.

## 🏗️ Estructura del proyecto.

```text
📦 pizzeria-il-tomaco
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┃ ┣ 📜 carbonara.png
 ┃ ┃ ┣ 📜 caprichoza.png
 ┃ ┃ ┣ 📜 margarita.png
 ┃ ┃ ┣ 📜 marina.png
 ┃ ┃ ┣ 📜 prociutto.png
 ┃ ┃ ┣ 📜 veggie.png
 ┃ ┃ ┗ 📜 hero.png
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 CardPizza.jsx
 ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┃ ┣ 📜 Header.jsx
 ┃ ┃ ┣ 📜 Hero.jsx
 ┃ ┃ ┗ 📜 Navbar.jsx
 ┃ ┣ 📜 App.css
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.css
 ┃ ┗ 📜 main.jsx
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 vite.config.js
 ┗ 📜 README.md
 ```

## 🔗 Links.
Actualmente estoy trabajando en: [Hito 1 - React - Pizzeria Il Tomaco](https://react-hito1.vercel.app/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kevin-alcaino.github.io/Kevin-alcaino.io/)

## 🙋‍♂️ Autor.
© 2026. Kevin Alcaino.
