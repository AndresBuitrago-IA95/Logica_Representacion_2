# 📝 Plantilla para Agregar Nuevos Temas

## Paso 1: Agregar en `temas-detallados.js`

```javascript
'id-del-tema': {
    titulo: 'Nombre del Tema',
    teoria: `
        <div class="info-card">
            <h4>Definición</h4>
            <p>Explicación clara del concepto...</p>
        </div>
        <div class="info-card">
            <h4>Operaciones Principales</h4>
            <ul>
                <li><strong>metodo1():</strong> O(n) - Descripción</li>
                <li><strong>metodo2():</strong> O(1) - Descripción</li>
            </ul>
        </div>
    `,
    visualizacion: 'tipo-viz', // o null si no tiene
    codigo: \`# Código Python completo
class MiEstructura:
    def __init__(self):
        pass
    
    def metodo1(self):
        """Documentación del método"""
        pass

# Ejemplo de uso
estructura = MiEstructura()
print("Resultado:", estructura.metodo1())\`
},
```

## Paso 2: Agregar visualización (opcional)

En `navegacion.js`, función `inicializarVisualizacionTema`:

```javascript
case 'id-del-tema':
    container.innerHTML = crearVisualizacion('tipo', 'Título', \`viz-\${temaId}-container\`);
    // ... código de inicialización
    break;
```

## Paso 3: Verificar en `estructuraCurso`

Asegúrate de que el tema esté listado en `navegacion.js`:

```javascript
'unidad': {
    titulo: 'Nombre Unidad',
    icono: '📋',
    subtemas: [
        { id: 'id-del-tema', titulo: 'Nombre del Tema' }
    ]
}
```

¡Listo! El tema aparecerá automáticamente en el menú.
