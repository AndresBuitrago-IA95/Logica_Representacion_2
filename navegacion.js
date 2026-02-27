// Sistema de navegación mejorado con subtemas

// Estructura de navegación con subtemas
const estructuraCurso = {
    'listas': {
        titulo: 'Listas Ligadas',
        icono: '📋',
        subtemas: [
            { id: 'lista-simple', titulo: 'Lista Simplemente Ligada' },
            { id: 'lista-doble', titulo: 'Lista Doblemente Ligada' },
            { id: 'lista-circular', titulo: 'Lista Circular' },
            { id: 'lista-cabeza', titulo: 'Lista con Registro Cabeza' },
            { id: 'multilistas', titulo: 'Multilistas' },
            { id: 'listas-python', titulo: 'Listas en Python' }
        ]
    },
    'pilas-colas': {
        titulo: 'Pilas y Colas',
        icono: '📚',
        subtemas: [
            { id: 'pilas-concepto', titulo: 'Concepto de Pilas (LIFO)' },
            { id: 'pilas-operaciones', titulo: 'Operaciones: Push, Pop, Peek' },
            { id: 'pilas-listas', titulo: 'Pilas con Listas Ligadas' },
            { id: 'n-pilas', titulo: 'N-Pilas' },
            { id: 'colas-concepto', titulo: 'Concepto de Colas (FIFO)' },
            { id: 'colas-nc', titulo: 'Colas No Circulares' },
            { id: 'colas-circulares', titulo: 'Colas Circulares' },
            { id: 'colas-listas', titulo: 'Colas con Listas Ligadas' },
            { id: 'n-colas', titulo: 'Arreglo con N-Colas' }
        ]
    },
    'analisis': {
        titulo: 'Análisis de Algoritmos',
        icono: '📊',
        subtemas: [
            { id: 'costo-computacional', titulo: 'Costo Temporal y Espacial' },
            { id: 'notacion-asintotica', titulo: 'Notación Asintótica' },
            { id: 'big-o-omega-theta', titulo: 'Big O, Omega y Theta' },
            { id: 'orden-magnitud', titulo: 'Orden de Magnitud' },
            { id: 'analisis-basicos', titulo: 'Análisis de Algoritmos Básicos' },
            { id: 'analisis-ordenamiento', titulo: 'Análisis de Ordenamiento' },
            { id: 'busqueda-lineal-binaria', titulo: 'Búsqueda Lineal y Binaria' },
            { id: 'analisis-estructuras', titulo: 'Análisis en Estructuras de Datos' }
        ]
    },
    'recursion': {
        titulo: 'Recursión',
        icono: '🔄',
        subtemas: [
            { id: 'recursion-concepto', titulo: 'Concepto de Recursión' },
            { id: 'recursion-tipos', titulo: 'Recursión Directa e Indirecta' },
            { id: 'iterativo-recursivo', titulo: 'Transformación Iterativo ↔ Recursivo' },
            { id: 'recursion-basicos', titulo: 'Algoritmos Básicos Recursivos' },
            { id: 'complejidad-recursion', titulo: 'Complejidad en Recursión' },
            { id: 'teorema-maestro', titulo: 'Teorema y Método Maestro' },
            { id: 'merge-quick-sort', titulo: 'MergeSort y QuickSort' },
            { id: 'quick-mom-select', titulo: 'QuickSelect y MomSelect' },
            { id: 'multiplicacion-rapida', titulo: 'Multiplicación Rápida' }
        ]
    },
    'arboles-grafos': {
        titulo: 'Árboles y Grafos',
        icono: '🌳',
        subtemas: [
            { id: 'grafos-concepto', titulo: 'Concepto de Grafo' },
            { id: 'fleury', titulo: 'Algoritmo de Fleury (Euler)' },
            { id: 'hamiltonianos', titulo: 'Ciclos Hamiltonianos' },
            { id: 'bfs-dfs', titulo: 'BFS y DFS' },
            { id: 'dijkstra-floyd', titulo: 'Dijkstra y Floyd' },
            { id: 'arboles-concepto', titulo: 'Concepto de Árbol' },
            { id: 'tipos-arboles', titulo: 'Tipos de Árboles' },
            { id: 'arboles-extendidos', titulo: 'Árboles Extendidos' },
            { id: 'prim-kruskal', titulo: 'Prim y Kruskal (MST)' },
            { id: 'bst', titulo: 'Árbol Binario de Búsqueda' },
            { id: 'avl', titulo: 'Árboles AVL' },
            { id: 'heap', titulo: 'Heap y HeapSort' }
        ]
    },
    'dinamica': {
        titulo: 'Programación Dinámica',
        icono: '⚡',
        subtemas: [
            { id: 'pd-concepto', titulo: 'Concepto de Programación Dinámica' },
            { id: 'pd-vs-recursion', titulo: 'PD vs Recursión' },
            { id: 'pd-aproximaciones', titulo: 'Aproximaciones (Top-Down/Bottom-Up)' },
            { id: 'pd-identificacion', titulo: 'Identificación y Construcción' },
            { id: 'pd-fibonacci', titulo: 'Problema: Fibonacci' },
            { id: 'pd-mochila', titulo: 'Problema: Mochila 0/1' },
            { id: 'pd-lcs', titulo: 'Problema: LCS' },
            { id: 'pd-monedas', titulo: 'Problema: Cambio de Monedas' }
        ]
    },
    'np': {
        titulo: 'NP Completitud',
        icono: '🧩',
        subtemas: [
            { id: 'np-clases', titulo: 'Clases P, NP, NP-Completo' },
            { id: 'np-reducciones', titulo: 'Métodos de Reducciones' },
            { id: 'np-tsp', titulo: 'Problema del Viajante (TSP)' },
            { id: 'np-sat', titulo: 'SAT y 3-SAT' },
            { id: 'np-hamiltoniano', titulo: 'Ciclos Hamiltonianos' },
            { id: 'np-independiente', titulo: 'Conjunto Independiente' },
            { id: 'np-cobertura', titulo: 'Cobertura de Vértices' },
            { id: 'np-p-vs-np', titulo: 'P vs NP' }
        ]
    }
};

// Generar menú de navegación
window.generarMenu = function() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) {
        console.error('❌ Elemento navMenu no encontrado');
        return;
    }
    
    navMenu.innerHTML = '';
    
    Object.keys(estructuraCurso).forEach(unidadKey => {
        const unidad = estructuraCurso[unidadKey];
        const li = document.createElement('li');
        li.className = 'has-subtemas';
        
        const link = document.createElement('a');
        link.href = '#';
        link.setAttribute('data-unit', unidadKey);
        link.textContent = `${unidad.icono} ${unidad.titulo}`;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSubtemas(li);
            cargarUnidad(unidadKey);
        });
        
        li.appendChild(link);
        
        // Crear subtemas
        if (unidad.subtemas && unidad.subtemas.length > 0) {
            const subtemasUl = document.createElement('ul');
            subtemasUl.className = 'subtemas-list';
            
            unidad.subtemas.forEach(subtema => {
                const subLi = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = '#';
                subLink.setAttribute('data-tema', subtema.id);
                subLink.textContent = subtema.titulo;
                subLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    cargarTema(subtema.id);
                });
                subLi.appendChild(subLink);
                subtemasUl.appendChild(subLi);
            });
            
            li.appendChild(subtemasUl);
        }
        
        navMenu.appendChild(li);
    });
}

// Toggle subtemas
function toggleSubtemas(li) {
    const wasExpanded = li.classList.contains('expanded');
    
    // Cerrar todos los demás
    document.querySelectorAll('.nav-menu li.has-subtemas').forEach(item => {
        item.classList.remove('expanded');
        const subtemas = item.querySelector('.subtemas-list');
        if (subtemas) subtemas.classList.remove('active');
    });
    
    // Toggle el actual
    if (!wasExpanded) {
        li.classList.add('expanded');
        const subtemas = li.querySelector('.subtemas-list');
        if (subtemas) subtemas.classList.add('active');
    }
}

// Cargar tema individual
window.cargarTema = function(temaId) {
    const tema = temasDetallados[temaId];
    if (!tema) {
        console.error('Tema no encontrado:', temaId);
        return;
    }
    
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <div class="unit-content">
            <div class="tema-header">
                <h2>${tema.titulo}</h2>
                <p>Teoría, visualización y práctica</p>
            </div>
            
            <div class="tabs">
                <button class="tab active" data-tab="teoria">📖 Teoría</button>
                <button class="tab" data-tab="visualizacion">🎨 Visualización</button>
                <button class="tab" data-tab="laboratorio">💻 Laboratorio</button>
            </div>
            
            <div class="tab-content active" id="teoria-content">
                ${tema.teoria}
            </div>
            
            <div class="tab-content" id="visualizacion-content">
                <div id="viz-${temaId}"></div>
            </div>
            
            <div class="tab-content" id="laboratorio-content">
                <div class="example-box">
                    <h4>Código Completo</h4>
                    <button class="btn-lab" onclick="cargarCodigoTema('${temaId}')">
                        💻 Abrir en Laboratorio
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Activar tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            
            tab.classList.add('active');
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(`${tabName}-content`).classList.add('active');
            
            // Inicializar visualización si es necesario
            if (tabName === 'visualizacion' && tema.visualizacion) {
                setTimeout(() => inicializarVisualizacionTema(temaId), 100);
            }
        });
    });
    
    // Actualizar navegación activa
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-tema="${temaId}"]`)?.classList.add('active');
}

// Cargar código del tema en el laboratorio
window.cargarCodigoTema = function(temaId) {
    const tema = temasDetallados[temaId];
    if (tema && tema.codigo) {
        const codeEditor = document.getElementById('codeEditor');
        const labPanel = document.getElementById('labPanel');
        codeEditor.value = tema.codigo;
        labPanel.classList.add('active');
    }
}

// Inicializar visualización específica del tema
window.inicializarVisualizacionTema = function(temaId) {
    const container = document.getElementById(`viz-${temaId}`);
    if (!container) return;
    
    // Implementar visualizaciones específicas según el tema
    switch(temaId) {
        case 'lista-simple':
            container.innerHTML = crearVisualizacion('lista', '📋 Lista Simplemente Ligada', `viz-${temaId}-container`);
            setTimeout(() => {
                const viz = new ListaLigadaViz(`viz-${temaId}-container`);
                const controls = document.getElementById(`viz-${temaId}-container-controls`);
                controls.innerHTML = `
                    <input type="number" id="input-${temaId}" class="viz-input" placeholder="Valor" value="10">
                    <button class="viz-btn" onclick="window.vizActual.insertar(parseInt(document.getElementById('input-${temaId}').value))">Insertar Inicio</button>
                    <button class="viz-btn" onclick="window.vizActual.eliminar()">Eliminar Inicio</button>
                    <button class="viz-btn" onclick="window.vizActual.buscar(parseInt(document.getElementById('input-${temaId}').value))">Buscar</button>
                `;
                window.vizActual = viz;
                viz.insertar(5);
                viz.insertar(10);
                viz.insertar(15);
            }, 100);
            break;
            
        case 'pilas-concepto':
        case 'pilas-operaciones':
            container.innerHTML = crearVisualizacion('pila', '📚 Pila (LIFO)', `viz-${temaId}-container`);
            setTimeout(() => {
                const viz = new PilaViz(`viz-${temaId}-container`);
                const controls = document.getElementById(`viz-${temaId}-container-controls`);
                controls.innerHTML = `
                    <input type="number" id="input-${temaId}" class="viz-input" placeholder="Valor" value="5">
                    <button class="viz-btn" onclick="window.vizActual.apilar(parseInt(document.getElementById('input-${temaId}').value))">Push (Apilar)</button>
                    <button class="viz-btn" onclick="window.vizActual.desapilar()">Pop (Desapilar)</button>
                    <button class="viz-btn" onclick="window.vizActual.cima()">Peek (Ver Cima)</button>
                `;
                window.vizActual = viz;
            }, 100);
            break;
            
        case 'colas-concepto':
        case 'colas-nc':
            container.innerHTML = crearVisualizacion('cola', '🎫 Cola (FIFO)', `viz-${temaId}-container`);
            setTimeout(() => {
                const viz = new ColaViz(`viz-${temaId}-container`);
                const controls = document.getElementById(`viz-${temaId}-container-controls`);
                controls.innerHTML = `
                    <input type="number" id="input-${temaId}" class="viz-input" placeholder="Valor" value="5">
                    <button class="viz-btn" onclick="window.vizActual.encolar(parseInt(document.getElementById('input-${temaId}').value))">Enqueue (Encolar)</button>
                    <button class="viz-btn" onclick="window.vizActual.desencolar()">Dequeue (Desencolar)</button>
                    <button class="viz-btn" onclick="window.vizActual.frente()">Front (Ver Frente)</button>
                `;
                window.vizActual = viz;
            }, 100);
            break;
            
        case 'bst':
            container.innerHTML = crearVisualizacion('arbol', '🌳 Árbol Binario de Búsqueda', `viz-${temaId}-container`);
            setTimeout(() => {
                const viz = new ArbolBinarioViz(`viz-${temaId}-container`);
                const controls = document.getElementById(`viz-${temaId}-container-controls`);
                controls.innerHTML = `
                    <input type="number" id="input-${temaId}" class="viz-input" placeholder="Valor" value="50">
                    <button class="viz-btn" onclick="window.vizActual.insertar(parseInt(document.getElementById('input-${temaId}').value))">Insertar</button>
                    <button class="viz-btn" onclick="window.vizActual.buscar(parseInt(document.getElementById('input-${temaId}').value))">Buscar</button>
                    <button class="viz-btn" onclick="window.vizActual.inorden()">Inorden</button>
                `;
                window.vizActual = viz;
            }, 100);
            break;
            
        default:
            container.innerHTML = '<p style="color: #666; text-align: center; padding: 2rem;">Visualización en desarrollo para este tema.</p>';
    }
}

// Botón copiar código
document.getElementById('copyBtn')?.addEventListener('click', () => {
    const code = document.getElementById('codeEditor').value;
    navigator.clipboard.writeText(code).then(() => {
        alert('Código copiado al portapapeles');
    });
});

// Inicializar menú al cargar
document.addEventListener('DOMContentLoaded', () => {
    generarMenu();
});


// ========================================
// FUNCIONALIDAD RESPONSIVE PARA MÓVILES
// ========================================

// Detectar si es móvil
function esMobile() {
    return window.innerWidth <= 768;
}

// Toggle del menú móvil
document.getElementById('menuToggle')?.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Cerrar menú al hacer click en overlay
document.getElementById('overlay')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

// Cerrar menú al seleccionar un tema en móvil
const cerrarMenuMobile = () => {
    if (esMobile()) {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    }
};

// Modificar la función cargarTema para cerrar menú en móvil
const cargarTemaOriginal = window.cargarTema;
window.cargarTema = function(temaId) {
    cargarTemaOriginal(temaId);
    cerrarMenuMobile();
};

// Modificar la función cargarUnidad para cerrar menú en móvil
const cargarUnidadOriginal = window.cargarUnidad;
window.cargarUnidad = function(unidadKey) {
    cargarUnidadOriginal(unidadKey);
    cerrarMenuMobile();
};

// Actualizar al cambiar tamaño de ventana para cerrar menú si se agranda
window.addEventListener('resize', () => {
    if (!esMobile()) {
        // Cerrar menú en desktop
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    }
});

// Inicializar al cargar
window.addEventListener('DOMContentLoaded', () => {
    
    // Prevenir zoom en inputs en iOS
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.fontSize = '16px';
        });
    }
});

// Mejorar experiencia táctil
if ('ontouchstart' in window) {
    // Agregar clase para dispositivos táctiles
    document.body.classList.add('touch-device');
    
    // Mejorar clicks en botones
    document.addEventListener('touchstart', function() {}, {passive: true});
}

// Prevenir scroll del body cuando el menú está abierto
const sidebar = document.getElementById('sidebar');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            if (sidebar.classList.contains('active') && esMobile()) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    });
});

observer.observe(sidebar, { attributes: true });

// Optimizar rendimiento en móviles
if (esMobile()) {
    // Reducir animaciones en móviles antiguos
    const isOldMobile = /Android [1-4]|iPhone OS [1-9]/.test(navigator.userAgent);
    if (isOldMobile) {
        document.body.classList.add('reduce-animations');
    }
}

console.log('🎨 Responsive design activado');
console.log('📱 Modo:', esMobile() ? 'Móvil' : 'Desktop');
