import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="tabla">
      <div class="columna">
        <div class="fila">Nombre</div>
        <div class="fila">Willian</div>
        <div class="fila">Darcy</div>
        <div class="fila">Julián</div>
        <div class="fila">Mariana</div>
      </div>
      <div class="columna">
        <div class="fila">Apellido</div>
        <div class="fila">Orozco</div>
        <div class="fila">Castaño</div>
        <div class="fila">Baldovino</div>
        <div class="fila">Muñoz</div>
      </div>
      <div class="columna">
        <div class="fila">Correo</div>
        <div class="fila">Elicardenas1986@gmail.com</div>
        <div class="fila">xxxxx@hotmail.com</div>
        <div class="fila">juliandbf14@gmail.com</div>
        <div class="fila">xxxxx@hotmail.com</div>
      </div>
      <div class="columna">
        <div class="fila">Celular</div>
        <div class="fila">3173119645</div>
        <div class="fila">3152161113</div>
        <div class="fila">3218780907</div>
        <div class="fila">3003231132</div>
      </div>
    </div>
      <img alt="Build" src="Pantallazo.png" />
      <img alt="Run" src="pantallazoStart.png" />
      <h4>¿Qué es Babel?</h4>
      <p>Babel es un transcompilador de JavaScript gratuito y de código abierto que se utiliza principalmente
        para convertir el código ECMAScript 2015+ (ES6 +) en una versión de JavaScript compatible con versiones 
        anteriores que puede ser ejecutada por motores JavaScript más antiguos . Babel es una herramienta 
        popular para usar las funciones más nuevas del lenguaje de programación JavaScript. [3]</p>
      <h4>¿Qué es WebPack?</h4>
      <p>Webpack es un paquete de módulos JavaScript de código abierto. Está hecho principalmente para 
        JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los 
        cargadores correspondientes. [7] webpack toma módulos con dependencias y genera activos estáticos 
        que representan esos módulos.</p>
      <h4>¿Que hacen en React?</h4>
      <p>Los desarrolladores pueden usar las nuevas características del lenguaje JavaScript utilizand 
        Babel para convertir su código fuente en versiones de JavaScript que los navegadores en evolución 
        pueden procesar.
        <br></br>
        Webpack toma las dependencias y genera un gráfico de dependencia que permite a los desarrolladores 
        web utilizar un enfoque modular para sus propósitos de desarrollo de aplicaciones web.</p>
    </div>
  );
}

export default App;
