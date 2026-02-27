# 🗺️ Mapa de Ubicación de Todos los Temas

## 📍 Guía Rápida de Ubicación

### 📁 temas-detallados.js (10 temas)
```
Listas Ligadas:
├── lista-simple ✅
├── lista-doble ✅
├── lista-circular ✅
├── lista-cabeza ✅
├── multilistas ✅
└── listas-python ✅

Pilas (inicio):
├── pilas-concepto ✅
├── pilas-operaciones ✅
├── pilas-listas ✅
└── (cierre del objeto)
```

### 📁 temas-pilas-colas.js (5 temas)
```
Pilas y Colas:
├── n-pilas ✅
├── colas-concepto ✅
├── colas-nc ✅
├── colas-circulares ✅
├── colas-listas ✅
└── n-colas ✅
```

### 📁 temas-analisis.js (6 temas)
```
Análisis de Algoritmos:
├── costo-computacional ✅
├── notacion-asintotica ✅
├── big-o-omega-theta ✅
├── orden-magnitud ✅
├── analisis-basicos ✅
├── analisis-ordenamiento ✅
├── busqueda-lineal-binaria ✅
└── analisis-estructuras ✅
```

### 📁 generar-temas-completos.js (6 temas)
```
Recursión (básicos):
├── recursion-concepto ✅
├── recursion-tipos ✅
├── iterativo-recursivo ✅
├── recursion-basicos ✅
├── complejidad-recursion ✅
└── teorema-maestro ✅
```

### 📁 app.js (33 temas con teoría completa)
```
Recursión (avanzados):
├── merge-quick-sort ✅ (en unidad 'recursion')
├── quick-mom-select ✅ (en unidad 'recursion')
└── multiplicacion-rapida ✅ (en unidad 'recursion')

Árboles y Grafos (12 temas):
├── grafos-concepto ✅ (en unidad 'arboles-grafos')
├── fleury ✅ (en unidad 'arboles-grafos')
├── hamiltonianos ✅ (en unidad 'arboles-grafos')
├── bfs-dfs ✅ (en unidad 'arboles-grafos')
├── dijkstra-floyd ✅ (en unidad 'arboles-grafos')
├── arboles-concepto ✅ (en unidad 'arboles-grafos')
├── tipos-arboles ✅ (en unidad 'arboles-grafos')
├── arboles-extendidos ✅ (en unidad 'arboles-grafos')
├── prim-kruskal ✅ (en unidad 'arboles-grafos')
├── bst ✅ (en unidad 'arboles-grafos')
├── avl ✅ (en unidad 'arboles-grafos')
└── heap ✅ (en unidad 'arboles-grafos')

Programación Dinámica (8 temas):
├── pd-concepto ✅ (en unidad 'dinamica')
├── pd-vs-recursion ✅ (en unidad 'dinamica')
├── pd-aproximaciones ✅ (en unidad 'dinamica')
├── pd-identificacion ✅ (en unidad 'dinamica')
├── pd-fibonacci ✅ (en unidad 'dinamica')
├── pd-mochila ✅ (en unidad 'dinamica')
├── pd-lcs ✅ (en unidad 'dinamica')
└── pd-monedas ✅ (en unidad 'dinamica')

NP Completitud (8 temas):
├── np-clases ✅ (en unidad 'np')
├── np-reducciones ✅ (en unidad 'np')
├── np-tsp ✅ (en unidad 'np')
├── np-sat ✅ (en unidad 'np')
├── np-hamiltoniano ✅ (en unidad 'np')
├── np-independiente ✅ (en unidad 'np')
├── np-cobertura ✅ (en unidad 'np')
└── np-p-vs-np ✅ (en unidad 'np')
```

## 🔍 Cómo Encontrar un Tema Específico

### Por Archivo JavaScript

1. **Listas Ligadas** → `temas-detallados.js`
2. **Pilas y Colas** → `temas-detallados.js` + `temas-pilas-colas.js`
3. **Análisis** → `temas-analisis.js`
4. **Recursión básica** → `generar-temas-completos.js`
5. **Recursión avanzada** → `app.js` (unidad 'recursion')
6. **Árboles y Grafos** → `app.js` (unidad 'arboles-grafos')
7. **Programación Dinámica** → `app.js` (unidad 'dinamica')
8. **NP Completitud** → `app.js` (unidad 'np')

### Por ID de Tema

```javascript
// Buscar en navegacion.js, sección estructuraCurso
const estructuraCurso = {
    'listas': {
        subtemas: [
            { id: 'lista-simple', ... },
            { id: 'lista-doble', ... },
            // etc.
        ]
    },
    // ...
}
```

## 📝 Formato de Cada Tema

Todos los temas siguen esta estructura:

```javascript
'id-del-tema': {
    titulo: 'Nombre del Tema',
    teoria: `
        <div class="info-card">
            <h4>Título</h4>
            <p>Contenido...</p>
            <ul><li>Puntos...</li></ul>
        </div>
    `,
    visualizacion: 'tipo-viz' | null,
    codigo: `# Código Python ejecutable
def funcion():
    pass

# Ejemplo de uso
funcion()`
}
```

## 🎯 Temas con Visualización Interactiva

Los siguientes temas tienen visualización completa:

1. `lista-simple` → ListaLigadaViz
2. `lista-doble` → ListaLigadaViz (adaptada)
3. `lista-circular` → ListaLigadaViz (adaptada)
4. `pilas-concepto` → PilaViz
5. `pilas-operaciones` → PilaViz
6. `pilas-listas` → PilaViz
7. `colas-concepto` → ColaViz
8. `colas-nc` → ColaViz
9. `colas-circulares` → ColaViz
10. `colas-listas` → ColaViz
11. `analisis-ordenamiento` → OrdenamientoViz
12. `merge-quick-sort` → OrdenamientoViz
13. `bst` → ArbolBinarioViz
14. `bfs-dfs` → (en desarrollo)
15. `dijkstra-floyd` → (en desarrollo)

## 🔧 Cómo Agregar un Nuevo Tema

1. **Elegir archivo apropiado**:
   - Temas de listas → `temas-detallados.js`
   - Temas de pilas/colas → `temas-pilas-colas.js`
   - Temas de análisis → `temas-analisis.js`
   - Otros → `generar-temas-completos.js`

2. **Agregar entrada**:
```javascript
'nuevo-tema': {
    titulo: 'Título',
    teoria: `<div class="info-card">...</div>`,
    visualizacion: null,
    codigo: `# Python code`
}
```

3. **Registrar en navegacion.js**:
```javascript
subtemas: [
    { id: 'nuevo-tema', titulo: 'Título' }
]
```

4. **Opcional: Agregar visualización**:
```javascript
// En navegacion.js, función inicializarVisualizacionTema
case 'nuevo-tema':
    // código de visualización
    break;
```

## 📊 Resumen por Archivo

| Archivo | Temas | Líneas | Estado |
|---------|-------|--------|--------|
| temas-detallados.js | 10 | ~800 | ✅ Completo |
| temas-pilas-colas.js | 5 | ~600 | ✅ Completo |
| temas-analisis.js | 8 | ~500 | ✅ Completo |
| generar-temas-completos.js | 6 | ~300 | ✅ Completo |
| app.js (unidades) | 31 | ~1500 | ✅ Completo |
| **TOTAL** | **60** | **~3700** | **✅ 100%** |

## 🎓 Para Desarrolladores

Si necesitas modificar o extender un tema:

1. Localiza el archivo usando esta guía
2. Busca el ID del tema
3. Modifica la sección correspondiente
4. Recarga `index-mejorado.html`
5. Los cambios se reflejan automáticamente

## 💡 Tips

- Usa Ctrl+F para buscar por ID de tema
- Los IDs usan kebab-case: `lista-simple`, `pilas-concepto`
- La teoría usa HTML con clases CSS predefinidas
- El código Python debe ser ejecutable sin dependencias externas
- Las visualizaciones son opcionales pero recomendadas

---

✅ **Todos los 60 temas están implementados y documentados**
