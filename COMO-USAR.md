# 🚀 Cómo Usar la Plataforma

## 📱 Acceso Rápido

### Opción 1: Abrir Localmente
1. Descarga todos los archivos del proyecto
2. Abre `index-mejorado.html` en tu navegador
3. ¡Listo! La plataforma funciona sin servidor

### Opción 2: Servidor Local (Opcional)
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server

# Luego abre: http://localhost:8000/index-mejorado.html
```

## 📖 Guía de Uso

### En Desktop/Laptop

1. **Abrir la plataforma**
   - Doble click en `index-mejorado.html`
   - O arrastra el archivo al navegador

2. **Navegar por temas**
   - Menú lateral siempre visible
   - Click en una unidad para expandir
   - Click en un tema para ver contenido

3. **Explorar un tema**
   - **Pestaña Teoría**: Lee conceptos y definiciones
   - **Pestaña Visualización**: Interactúa con animaciones
   - **Pestaña Laboratorio**: Ejecuta código Python

4. **Usar el laboratorio**
   - Click en "💻 Abrir en Laboratorio"
   - Modifica el código si quieres
   - Click en "▶ Ejecutar"
   - Ve los resultados en la sección "Salida"

### En Móvil/Tablet

1. **Abrir la plataforma**
   - Abre `index-mejorado.html` en tu navegador móvil
   - Espera a que cargue (primera vez puede tardar)

2. **Abrir el menú**
   - Toca el botón ☰ (hamburguesa) arriba a la izquierda
   - El menú se desliza desde la izquierda

3. **Seleccionar tema**
   - Toca una unidad para expandir
   - Toca un tema específico
   - El menú se cierra automáticamente

4. **Navegar por pestañas**
   - Las pestañas están verticales en móvil
   - Toca cada pestaña para cambiar de vista

5. **Usar el laboratorio**
   - El panel ocupa toda la pantalla en móvil
   - Toca "✕" para cerrar
   - Usa zoom si necesitas ver mejor el código

## 🎯 Funciones Principales

### Menú de Navegación
```
📋 Listas Ligadas (6 temas)
  ├── Lista Simplemente Ligada
  ├── Lista Doblemente Ligada
  ├── Lista Circular
  ├── Lista con Registro Cabeza
  ├── Multilistas
  └── Listas en Python

📚 Pilas y Colas (9 temas)
📊 Análisis de Algoritmos (8 temas)
🔄 Recursión (9 temas)
🌳 Árboles y Grafos (12 temas)
⚡ Programación Dinámica (8 temas)
🧩 NP Completitud (8 temas)
```

### Pestañas por Tema

#### 📖 Teoría
- Definiciones claras
- Explicación de métodos
- Complejidades (O, Ω, Θ)
- Ventajas y desventajas
- Aplicaciones prácticas

#### 🎨 Visualización
- Animaciones interactivas
- Controles para probar operaciones
- Explicaciones paso a paso
- Indicadores visuales

#### 💻 Laboratorio
- Código Python completo
- Botón "Abrir en Laboratorio"
- Editor con syntax highlighting
- Ejecución en tiempo real

### Laboratorio Python

**Botones disponibles:**
- **▶ Ejecutar**: Corre el código Python
- **🗑 Limpiar**: Borra código y salida
- **📋 Copiar**: Copia código al portapapeles
- **✕ Cerrar**: Cierra el panel del laboratorio

**Tips:**
- Puedes modificar el código antes de ejecutar
- Los errores se muestran en la sección de salida
- Primera ejecución puede tardar (carga Pyodide)

## 🎨 Visualizaciones Interactivas

### Lista Ligada
- **Insertar**: Agrega elemento al inicio
- **Eliminar**: Quita primer elemento
- **Buscar**: Encuentra elemento (se resalta)

### Pila
- **Push**: Apilar elemento
- **Pop**: Desapilar elemento
- **Peek**: Ver cima sin eliminar

### Cola
- **Enqueue**: Encolar al final
- **Dequeue**: Desencolar del frente
- **Front**: Ver frente sin eliminar

### Ordenamiento
- **Generar Array**: Crea array aleatorio
- **Bubble Sort**: Ordena con animación O(n²)
- **Quick Sort**: Ordena con animación O(n log n)

### Árbol Binario
- **Insertar**: Agrega nodo al árbol
- **Buscar**: Encuentra nodo
- **Inorden**: Muestra recorrido Izq-Raíz-Der

## 📱 Tips para Móviles

### Navegación
- Desliza desde la izquierda para abrir menú (en algunos navegadores)
- Toca fuera del menú para cerrarlo
- Usa scroll vertical para ver todo el contenido

### Laboratorio
- Rota el dispositivo a horizontal para más espacio
- Usa zoom con dos dedos si necesitas
- El teclado aparece automáticamente al tocar el editor

### Rendimiento
- Primera carga puede tardar (descarga Pyodide ~30MB)
- Después funciona offline
- Cierra pestañas innecesarias para mejor rendimiento

## 🔧 Solución de Problemas

### "No carga en móvil"
**Solución:**
- Verifica conexión a internet (primera vez)
- Usa navegador actualizado (Chrome, Safari, Firefox)
- Limpia caché del navegador
- Espera 30 segundos (carga de Pyodide)

### "El código no se ejecuta"
**Solución:**
- Espera mensaje "Pyodide cargado correctamente" en consola
- Verifica que el código no tenga errores de sintaxis
- Recarga la página si es necesario

### "El menú no se abre en móvil"
**Solución:**
- Toca el botón ☰ en la esquina superior izquierda
- Verifica que JavaScript esté habilitado
- Prueba en otro navegador

### "Las visualizaciones no funcionan"
**Solución:**
- Verifica que estés en la pestaña "Visualización"
- Algunos temas no tienen visualización (es normal)
- Recarga la página

### "Texto muy pequeño en móvil"
**Solución:**
- Usa zoom con dos dedos
- Rota a horizontal
- El texto es de 16px mínimo (estándar)

## 💡 Consejos de Estudio

### Para Aprender Mejor
1. **Lee la teoría primero** (pestaña Teoría)
2. **Mira la visualización** (pestaña Visualización)
3. **Ejecuta el código** (pestaña Laboratorio)
4. **Modifica el código** y experimenta
5. **Toma notas** de conceptos importantes

### Para Preparar Exámenes
1. Revisa todos los temas de una unidad
2. Practica con el código de cada tema
3. Entiende las complejidades (O, Ω, Θ)
4. Memoriza ventajas y desventajas
5. Practica implementaciones

### Para Laboratorios
1. Lee el código de ejemplo
2. Entiende cada línea
3. Modifica y experimenta
4. Copia el código a tu IDE
5. Agrega tus propias pruebas

## 🎓 Recursos Adicionales

### Archivos de Documentación
- `README.md` - Información general
- `GUIA-USO.md` - Guía detallada
- `TODOS-LOS-TEMAS.md` - Lista de temas
- `MAPA-TEMAS.md` - Ubicación de temas
- `RESPONSIVE-DESIGN.md` - Info de diseño móvil

### Archivos de Código
- `index-mejorado.html` - Página principal
- `styles.css` - Estilos
- `navegacion.js` - Navegación
- `temas-*.js` - Contenido de temas

## 📞 Soporte

### Problemas Técnicos
1. Revisa esta guía primero
2. Verifica requisitos del navegador
3. Limpia caché y recarga
4. Prueba en otro navegador

### Sugerencias
- Los temas están completos y probados
- El código es ejecutable y funcional
- Las visualizaciones son interactivas
- El diseño es responsive

## ✅ Checklist de Uso

Antes de empezar, verifica:
- [ ] Navegador actualizado
- [ ] JavaScript habilitado
- [ ] Conexión a internet (primera vez)
- [ ] Archivos descargados completos
- [ ] `index-mejorado.html` abierto

Durante el uso:
- [ ] Menú lateral visible/accesible
- [ ] Temas se cargan correctamente
- [ ] Pestañas funcionan
- [ ] Código se ejecuta
- [ ] Visualizaciones responden

## 🎯 Objetivos de Aprendizaje

Con esta plataforma podrás:
- ✅ Entender estructuras de datos
- ✅ Analizar complejidad de algoritmos
- ✅ Implementar algoritmos en Python
- ✅ Visualizar funcionamiento paso a paso
- ✅ Practicar con código ejecutable
- ✅ Prepararte para exámenes
- ✅ Completar laboratorios

---

💚 **¡Disfruta aprendiendo con la plataforma de la UdeA!**

🎓 **¡Éxito en Lógica y Representación II!**
