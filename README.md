<div align="center">
  <img src="/React.png" alt="Lecciones" width="500" />
  <h1>Aprendiendo React.</h1>
  <p>Aprendiendo React a Base de Proyectos.</p>
</div>

## Primeros Pasos en React

### Que es React

React es una Librería de JavaScript para construir interfaces de usuario. React es agnóstico a la plataforma, por lo que se pueden construir interfaces para multiples plataformas. Por lo que se puede usar react sin ReactDom

> [!NOTE]
> ReactDOM es el enfocado en la Web, Mientras que React Native es para plataformas como Móviles,Desktop, VR, Consolas etc.

### Uso de React sin empaquetador

React no deja de ser JavaScript por lo que es posible ejecutar React sin un empaquetador o un compilador.

```js
// Código de react en JS vanilla
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const reactDom = document.getElementById("app");
const root = ReactDOM.createRoot(reactDom);

const button = React.createElement("button", { class: "btn blue" }, "Me gusta");
const button1 = React.createElement(
  "button",
  { class: "btn blue" },
  "Me gusta2"
);
const button2 = React.createElement(
  "button",
  { class: "btn blue" },
  "Me gusta3"
);

const main = React.createElement("main", { class: "flex f-col center" }, [
  button,
  button1,
  button2,
]);

root.render(main);
```

### La razón JSX en React

React se usa con la sintaxis de JSX y un compilador de código para hacer la DX (Experiencia de Desarrollo) mejor.

> [!NOTE]
> React se usa con SWC o Babel para transformar JSX a código JavaScript y VITE como empaquetador

```js
// Código anterior de React con JSX
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const reactDom = document.getElementById("app");
const root = ReactDOM.createRoot(reactDom);

function App() {
  return (
    <main className="flex f-col center">
      <button className="btn blue">Me gusta</button>
      <button className="btn blue">Me gusta2</button>
      <button className="btn blue">Me gusta3</button>
    </main>
  );
}

root.render(<App />);
```

## Conceptos Principales en React

### Virtual DOM

El Virtual DOM es una representación abstracta del DOM real. React usa el Virtual DOM para comparar la representación anterior del DOM con la actual y solo actualiza los elementos que han cambiado. Esto mejora el rendimiento de la aplicación.

### Props

Las props son propiedades que se pueden pasar a un componente para personalizar su comportamiento.

> [!NOTE]
> Incluso se pueden pasar funciones o elementos.

```jsx
function ComponenteHijo(props) {
  return (
    <div>
      <h1>Hola, {props.nombre}</h1>
    </div>
  );
}
```

```jsx
function ComponentePadre() {
  return (
    <div>
      <ComponenteHijo nombre="Juan" />
    </div>
  );
}
```

#### Children

En React, `children` es una prop especial que se usa para pasar contenido a un componente. Es como un contenedor que puede contener cualquier tipo de elemento HTML, componentes de React o incluso texto.

```jsx
function ComponentePadre() {
  return (
    <div>
      <p>Este es un párrafo</p>
      <ComponenteHijo>Este es el contenido del componente hijo</ComponenteHijo>
    </div>
  );
}

function ComponenteHijo(props) {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
}
```

### Evaluaciones en JSX

Las evaluaciones en JSX son expresiones que se pueden evaluar dentro de las etiquetas JSX.

### Hooks

Los Hooks son funciones especiales que permiten usar funcionalidades de React sin tener que escribir una clase.

#### useState

`useState` es un hook de React que nos permite actualizar el estado de un componente. Es una función que recibe un valor inicial como argumento y devuelve dos valores:

- El estado actual[0]: Es el valor actual del estado.
- Un setter[1]: Es una función que se usa para actualizar el estado.

```jsx
import React, { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  function aumentarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>El valor actual del contador es: {contador}</p>
      <button onClick={aumentarContador}>Aumentar contador</button>
    </div>
  );
}

export default App;
```

> La línea const [contador, setContador] = useState(0); define el estado del componente. contador es el nombre de la variable que se usa para almacenar el valor actual del estado, y setContador es la función que se usa para actualizarlo.
> La función aumentarContador aumenta el valor del contador en 1.
> El componente muestra el valor actual del contador y un botón para aumentarlo
