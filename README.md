
# Solemne I: Recreación de obra en p5.js

## Sensaciones mixtas (1916)
**Autor:** Kazimir Malévich  
**Movimiento:** Vanguardia rusa / Suprematismo  
---

## Descripción de la obra

La obra *Sensaciones mixtas* (1916) pertenece al movimiento suprematista, desarrollado por Kazimir Malévich. Este movimiento se centra en la abstracción geométrica, utilizando formas simples como rectángulos, líneas y planos de color para expresar sensaciones más allá de la representación figurativa.

En esta obra se observan múltiples figuras geométricas superpuestas, con predominancia de colores como **rojo, negro, amarillo y azul**, organizadas en una composición dinámica y equilibrada.

---

## Proceso de trabajo
## Metodología utilizada
Usando los codigos de referencia en la pagina p5.js me guie y oriente tambien con tutoriales por internet.
El trabajo se desarrolló combinando **metodología análoga y digital**, lo que permitió complementar precisión técnica con comprensión espacial de la obra.

### Análogo

- Imprimí la imagen original  
- Analicé visualmente las proporciones y relaciones entre las formas  
- Marqué referencias de posición directamente sobre la impresión  
- Registré coordenadas aproximadas (X, Y) en un cuaderno  
- Utilicé este proceso para entender la estructura general antes de programar  

### Digital

- Importé la imagen en **Adobe Illustrator**  
- Utilicé la **regla (rulers)** para ubicar posiciones más precisas  
- Medí distancias y proporciones entre elementos  
- Utilicé la herramienta **cuentagotas** para obtener colores fieles  
- Complementé la medición análoga con datos más exactos  

Este cruce entre ambos métodos permitió reducir errores y mejorar la fidelidad de la recreación.
### Dificultades
- Mantener proporciones exactas entre las figuras
- Traducir correctamente las rotaciones a p5.js
- Ordenar las capas de dibujo
- Ajustar los colores, considerando variaciones de pantalla
### Soluciones
- Combiné medición análoga y digital
- Utilicé push() y pop() para controlar transformaciones
- Organicé el código según orden de dibujo (de fondo a frente)
- Realicé iteraciones constantes comparando con la imagen original

### Conclusión

Este ejercicio permitió comprender cómo una imagen puede descomponerse en elementos básicos y traducirse a código. No se trató solo de copiar la imagen, sino de interpretarla, analizar su estructura y reconstruirla digitalmente.
La combinación de métodos análogos y digitales fue clave: el trabajo manual permitió entender la composición, mientras que las herramientas digitales aportaron precisión. Esto evidencia que el proceso no es automático, sino interpretativo y progresivo.
El desarrollo fue iterativo: observar, medir, programar, corregir y ajustar, lo que permitió acercarse gradualmente a una versión fiel de la obra original.

### Elección de la obra

Elegí esta obra porque representa claramente los principios del suprematismo: uso de figuras simples, composición abstracta y énfasis en el color. Además, su estructura geométrica la hacía adecuada para ser traducida a código mediante p5.js.

---

### Análisis de la obra

Para analizar la imagen identifiqué:

- **Formas:** rectángulos, líneas, cuadrados y un círculo  
- **Colores predominantes:** rojo, negro, amarillo, azul y gris  
- **Composición:** superposición de elementos con distintas inclinaciones  
- **Jerarquía visual:** el rectángulo rojo inclinado es el elemento principal  

También observé que varias figuras están rotadas, lo que implicó usar transformaciones en el código.

---

### Traducción a coordenadas (X, Y)

Primero definí un **canvas proporcional a la imagen original**.

Luego:

- Ubique cada figura usando referencias visuales  
- Usé `rect()`, `ellipse()` y `line()`  
- Apliqué `translate()` y `rotate()` para las figuras inclinadas  
- Ajusté posiciones manualmente hasta lograr una composición similar  
## Documentación visual
### Imagen original
![kasimir](https://github.com/user-attachments/assets/a6f4bae4-5711-4a94-b382-eecd77ea37bb)

### Resultado final
<img width="506" height="502" alt="Captura de pantalla 2026-04-09 221131" src="https://github.com/user-attachments/assets/54f60619-429d-473e-873c-6fcfee2b267e" />

