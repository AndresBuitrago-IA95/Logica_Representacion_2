// Inicialización de Pyodide
let pyodide;

async function initPyodide() {
    try {
        pyodide = await loadPyodide();
        console.log('Pyodide cargado correctamente');
    } catch (error) {
        console.error('Error al cargar Pyodide:', error);
    }
}

initPyodide();

// Contenido de las unidades
const unidades = {
    'listas': {
        titulo: 'Listas Ligadas',
        semanas: 'Semanas 1-3 (Feb 9, 16, 23)',
        descripcion: 'Estructuras de datos fundamentales para almacenar colecciones de elementos.',
        teoria: `
            <div class="info-card">
                <h4>¿Qué es una Lista Ligada?</h4>
                <p>Una lista ligada es una estructura de datos lineal donde cada elemento (nodo) contiene:</p>
                <ul>
                    <li><strong>Dato:</strong> El valor almacenado</li>
                    <li><strong>Enlace:</strong> Referencia al siguiente nodo</li>
                </ul>
                <p><strong>Ventajas:</strong> Inserción y eliminación eficientes O(1) al inicio, tamaño dinámico.</p>
                <p><strong>Desventajas:</strong> Acceso secuencial O(n), mayor uso de memoria por los punteros.</p>
            </div>
            <div class="info-card">
                <h4>Tipos de Listas Ligadas</h4>
                <ul>
                    <li><strong>Simplemente ligada:</strong> Cada nodo apunta al siguiente</li>
                    <li><strong>Doblemente ligada:</strong> Cada nodo apunta al siguiente y al anterior</li>
                    <li><strong>Circular:</strong> El último nodo apunta al primero</li>
                    <li><strong>Con cabeza:</strong> Nodo especial que facilita operaciones</li>
                </ul>
            </div>
            <div class="complexity-badge">Complejidad Temporal: Inserción O(1), Búsqueda O(n)</div>
        `,
        temas: [
            'Listas simplemente ligadas',
            'Listas doblemente ligadas',
            'Listas con registro cabeza',
            'Listas circulares',
            'Multilistas',
            'Listas en Python'
        ],
        laboratorio: 'Laboratorio 1 - 10%',
        visualizacion: true,
        ejemplos: [
            {
                titulo: 'Lista Simplemente Ligada',
                codigo: `class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None

class ListaLigada:
    def __init__(self):
        self.cabeza = None
    
    def insertar_inicio(self, dato):
        nuevo = Nodo(dato)
        nuevo.siguiente = self.cabeza
        self.cabeza = nuevo
    
    def insertar_final(self, dato):
        nuevo = Nodo(dato)
        if not self.cabeza:
            self.cabeza = nuevo
            return
        actual = self.cabeza
        while actual.siguiente:
            actual = actual.siguiente
        actual.siguiente = nuevo
    
    def buscar(self, dato):
        actual = self.cabeza
        posicion = 0
        while actual:
            if actual.dato == dato:
                return posicion
            actual = actual.siguiente
            posicion += 1
        return -1
    
    def eliminar(self, dato):
        if not self.cabeza:
            return False
        if self.cabeza.dato == dato:
            self.cabeza = self.cabeza.siguiente
            return True
        actual = self.cabeza
        while actual.siguiente:
            if actual.siguiente.dato == dato:
                actual.siguiente = actual.siguiente.siguiente
                return True
            actual = actual.siguiente
        return False
    
    def mostrar(self):
        actual = self.cabeza
        elementos = []
        while actual:
            elementos.append(str(actual.dato))
            actual = actual.siguiente
        return " -> ".join(elementos) + " -> NULL"

# Pruebas
lista = ListaLigada()
lista.insertar_inicio(3)
lista.insertar_inicio(2)
lista.insertar_inicio(1)
print("Lista:", lista.mostrar())
print("Buscar 2:", lista.buscar(2))
lista.eliminar(2)
print("Después de eliminar 2:", lista.mostrar())`
            }
        ]
    },
    'pilas-colas': {
        titulo: 'Pilas y Colas',
        semanas: 'Semanas 4-5 (Marzo 2, 9)',
        descripcion: 'Estructuras de datos basadas en LIFO y FIFO.',
        teoria: `
            <div class="info-card">
                <h4>Pilas (Stack) - LIFO</h4>
                <p><strong>Last In, First Out:</strong> El último elemento en entrar es el primero en salir.</p>
                <ul>
                    <li><strong>Push:</strong> Agregar elemento a la cima - O(1)</li>
                    <li><strong>Pop:</strong> Eliminar elemento de la cima - O(1)</li>
                    <li><strong>Peek/Top:</strong> Ver elemento de la cima sin eliminarlo - O(1)</li>
                </ul>
                <p><strong>Aplicaciones:</strong> Evaluación de expresiones, recursión, deshacer/rehacer, navegación del navegador.</p>
            </div>
            <div class="info-card">
                <h4>Colas (Queue) - FIFO</h4>
                <p><strong>First In, First Out:</strong> El primer elemento en entrar es el primero en salir.</p>
                <ul>
                    <li><strong>Enqueue:</strong> Agregar elemento al final - O(1)</li>
                    <li><strong>Dequeue:</strong> Eliminar elemento del frente - O(1)</li>
                    <li><strong>Front:</strong> Ver elemento del frente - O(1)</li>
                </ul>
                <p><strong>Aplicaciones:</strong> Sistemas de impresión, procesamiento de tareas, BFS en grafos.</p>
            </div>
            <div class="complexity-badge">Todas las operaciones básicas: O(1)</div>
        `,
        temas: [
            'Concepto de pilas y LIFO',
            'Operaciones: apilar, desapilar y cima',
            'Pilas con Listas Ligadas',
            'N-Pilas',
            'Concepto de colas y FIFO',
            'Colas No Circulares (CNC)',
            'Colas Circulares (CC)',
            'Colas con Listas Ligadas',
            'Arreglo con N-Colas'
        ],
        laboratorio: 'Laboratorio 2 - 15%',
        visualizacion: true,
        ejemplos: [
            {
                titulo: 'Pila con Lista',
                codigo: `class Pila:
    def __init__(self):
        self.items = []
    
    def apilar(self, item):
        self.items.append(item)
        print(f"Apilado: {item}")
    
    def desapilar(self):
        if not self.esta_vacia():
            return self.items.pop()
        raise IndexError("Pila vacía")
    
    def cima(self):
        if not self.esta_vacia():
            return self.items[-1]
        return None
    
    def esta_vacia(self):
        return len(self.items) == 0
    
    def tamano(self):
        return len(self.items)

# Ejemplo: Verificar paréntesis balanceados
def parentesis_balanceados(expresion):
    pila = Pila()
    pares = {'(': ')', '[': ']', '{': '}'}
    
    for char in expresion:
        if char in pares.keys():
            pila.apilar(char)
        elif char in pares.values():
            if pila.esta_vacia():
                return False
            if pares[pila.desapilar()] != char:
                return False
    
    return pila.esta_vacia()

print(parentesis_balanceados("({[]})"))  # True
print(parentesis_balanceados("({[})"))   # False

# Cola
from collections import deque

class Cola:
    def __init__(self):
        self.items = deque()
    
    def encolar(self, item):
        self.items.append(item)
    
    def desencolar(self):
        if not self.esta_vacia():
            return self.items.popleft()
        raise IndexError("Cola vacía")
    
    def frente(self):
        if not self.esta_vacia():
            return self.items[0]
        return None
    
    def esta_vacia(self):
        return len(self.items) == 0

cola = Cola()
cola.encolar(1)
cola.encolar(2)
cola.encolar(3)
print("Desencolado:", cola.desencolar())
print("Frente:", cola.frente())`
            }
        ]
    },
    'analisis': {
        titulo: 'Análisis de Algoritmos',
        semanas: 'Semanas 6-7 (Marzo 16, 23)',
        descripcion: 'Evaluación de eficiencia y complejidad computacional.',
        teoria: `
            <div class="info-card">
                <h4>Notación Asintótica</h4>
                <p>Describe el comportamiento de un algoritmo cuando el tamaño de entrada crece hacia el infinito.</p>
                <ul>
                    <li><strong>Big O (O):</strong> Cota superior (peor caso). Ejemplo: O(n²) significa que el tiempo no excederá cn² para alguna constante c</li>
                    <li><strong>Big Omega (Ω):</strong> Cota inferior (mejor caso). Ejemplo: Ω(n) significa que el tiempo será al menos cn</li>
                    <li><strong>Big Theta (Θ):</strong> Cota ajustada (caso promedio). Ejemplo: Θ(n log n) significa que el tiempo está entre c₁n log n y c₂n log n</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Orden de Complejidad (de menor a mayor)</h4>
                <ul>
                    <li><strong>O(1):</strong> Constante - Acceso a array, operaciones aritméticas</li>
                    <li><strong>O(log n):</strong> Logarítmica - Búsqueda binaria, árboles balanceados</li>
                    <li><strong>O(n):</strong> Lineal - Búsqueda lineal, recorrido de array</li>
                    <li><strong>O(n log n):</strong> Lineal-logarítmica - MergeSort, HeapSort, QuickSort (promedio)</li>
                    <li><strong>O(n²):</strong> Cuadrática - Bubble Sort, Selection Sort, Insertion Sort</li>
                    <li><strong>O(2ⁿ):</strong> Exponencial - Subconjuntos, Fibonacci recursivo</li>
                    <li><strong>O(n!):</strong> Factorial - Permutaciones, Traveling Salesman (fuerza bruta)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Métodos de Análisis</h4>
                <ul>
                    <li><strong>Contar operaciones básicas:</strong> Identificar la operación más costosa y contar cuántas veces se ejecuta</li>
                    <li><strong>Análisis de ciclos:</strong> Un ciclo de 1 a n es O(n), ciclos anidados se multiplican</li>
                    <li><strong>Recursión:</strong> Usar el Teorema Maestro o ecuaciones de recurrencia</li>
                    <li><strong>Complejidad espacial:</strong> Memoria adicional usada (variables, estructuras, stack de recursión)</li>
                </ul>
            </div>
            <div class="complexity-badge">Búsqueda Lineal: O(n) | Búsqueda Binaria: O(log n)</div>
        `,
        temas: [
            'Costo computacional temporal y espacial',
            'Notación asintótica y propiedades',
            'Big Oh, Big Omega, Big Theta',
            'Orden de magnitud',
            'Análisis de algoritmos básicos',
            'Análisis de ordenamiento',
            'Búsqueda lineal y binaria',
            'Análisis en estructuras de datos'
        ],
        laboratorio: 'Laboratorio 3 - 10%',
        visualizacion: true,
        ejemplos: [
            {
                titulo: 'Comparación de Búsquedas',
                codigo: `import time

def busqueda_lineal(arr, objetivo):
    """O(n) - Recorre todo el array en el peor caso"""
    comparaciones = 0
    for i in range(len(arr)):
        comparaciones += 1
        if arr[i] == objetivo:
            return i, comparaciones
    return -1, comparaciones

def busqueda_binaria(arr, objetivo):
    """O(log n) - Divide el espacio de búsqueda a la mitad"""
    izq, der = 0, len(arr) - 1
    comparaciones = 0
    
    while izq <= der:
        comparaciones += 1
        medio = (izq + der) // 2
        
        if arr[medio] == objetivo:
            return medio, comparaciones
        elif arr[medio] < objetivo:
            izq = medio + 1
        else:
            der = medio - 1
    
    return -1, comparaciones

# Comparación
arr = list(range(1, 1001))  # Array de 1 a 1000
objetivo = 999

pos, comp_lineal = busqueda_lineal(arr, objetivo)
print(f"Búsqueda Lineal: {comp_lineal} comparaciones")

pos, comp_binaria = busqueda_binaria(arr, objetivo)
print(f"Búsqueda Binaria: {comp_binaria} comparaciones")

print(f"\\nMejora: {comp_lineal / comp_binaria:.2f}x más rápida")

# Análisis de complejidad de ciclos
def ejemplo_O_n(n):
    """O(n) - Un solo ciclo"""
    suma = 0
    for i in range(n):
        suma += i
    return suma

def ejemplo_O_n2(n):
    """O(n²) - Ciclos anidados"""
    suma = 0
    for i in range(n):
        for j in range(n):
            suma += i * j
    return suma

def ejemplo_O_log_n(n):
    """O(log n) - División repetida"""
    count = 0
    while n > 1:
        n = n // 2
        count += 1
    return count

print(f"\\nO(log 1000) = {ejemplo_O_log_n(1000)} iteraciones")`
            }
        ]
    },
    'recursion': {
        titulo: 'Recursión',
        semanas: 'Semanas 8-10 (Abril 6, 13, 20)',
        descripcion: 'Técnicas recursivas y algoritmos de divide y vencerás.',
        teoria: `
            <div class="info-card">
                <h4>¿Qué es la Recursión?</h4>
                <p>Una función es recursiva cuando se llama a sí misma. Toda función recursiva debe tener:</p>
                <ul>
                    <li><strong>Caso base:</strong> Condición de parada que evita recursión infinita</li>
                    <li><strong>Caso recursivo:</strong> Llamada a sí misma con un problema más pequeño</li>
                    <li><strong>Progreso:</strong> Cada llamada debe acercarse al caso base</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Tipos de Recursión</h4>
                <ul>
                    <li><strong>Directa:</strong> La función se llama a sí misma directamente (factorial, fibonacci)</li>
                    <li><strong>Indirecta:</strong> A llama a B, B llama a A (funciones mutuamente recursivas)</li>
                    <li><strong>De cola:</strong> La llamada recursiva es la última operación (optimizable)</li>
                    <li><strong>Múltiple:</strong> Más de una llamada recursiva (árbol de recursión)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Teorema Maestro</h4>
                <p>Para recurrencias de la forma: T(n) = aT(n/b) + f(n)</p>
                <ul>
                    <li><strong>Caso 1:</strong> Si f(n) = O(n^c) donde c < log_b(a), entonces T(n) = Θ(n^log_b(a))</li>
                    <li><strong>Caso 2:</strong> Si f(n) = Θ(n^c log^k n) donde c = log_b(a), entonces T(n) = Θ(n^c log^(k+1) n)</li>
                    <li><strong>Caso 3:</strong> Si f(n) = Ω(n^c) donde c > log_b(a), entonces T(n) = Θ(f(n))</li>
                </ul>
                <p><strong>Ejemplo MergeSort:</strong> T(n) = 2T(n/2) + O(n) → a=2, b=2, f(n)=n → Caso 2 → T(n) = Θ(n log n)</p>
            </div>
            <div class="info-card">
                <h4>Algoritmos de Ordenamiento</h4>
                <ul>
                    <li><strong>MergeSort:</strong> Divide y conquista, siempre O(n log n), estable, requiere O(n) espacio extra</li>
                    <li><strong>QuickSort:</strong> Divide por pivote, O(n log n) promedio, O(n²) peor caso, in-place</li>
                    <li><strong>QuickSelect:</strong> Encuentra el k-ésimo elemento más pequeño en O(n) promedio</li>
                </ul>
            </div>
            <div class="complexity-badge">MergeSort: Θ(n log n) | QuickSort: O(n log n) promedio, O(n²) peor caso</div>
        `,
        temas: [
            'Concepto de recursión',
            'Recursión directa e indirecta',
            'Transformación iterativo a recursivo',
            'Algoritmos básicos recursivos',
            'Complejidad en recursión',
            'Teorema y Método Maestro',
            'MergeSort y QuickSort',
            'QuickSelect y MomSelect',
            'Multiplicación rápida'
        ],
        laboratorio: 'Laboratorio 4 - 10%',
        parcial: 'Parcial 1 - 10%',
        visualizacion: true,
        ejemplos: [
            {
                titulo: 'Recursión Completa',
                codigo: `# Factorial - Recursión simple
def factorial(n):
    """Caso base: 0! = 1, Recursivo: n! = n * (n-1)!"""
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print("5! =", factorial(5))

# Fibonacci - Recursión múltiple (ineficiente)
def fibonacci_recursivo(n):
    """T(n) = T(n-1) + T(n-2) + O(1) → O(2^n)"""
    if n <= 1:
        return n
    return fibonacci_recursivo(n-1) + fibonacci_recursivo(n-2)

# Fibonacci con memorización (eficiente)
def fibonacci_memo(n, memo={}):
    """O(n) con memorización"""
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

print("Fib(10):", fibonacci_memo(10))

# MergeSort - Divide y conquista
def merge_sort(arr):
    """T(n) = 2T(n/2) + O(n) → O(n log n)"""
    if len(arr) <= 1:
        return arr
    
    medio = len(arr) // 2
    izq = merge_sort(arr[:medio])
    der = merge_sort(arr[medio:])
    
    return merge(izq, der)

def merge(izq, der):
    resultado = []
    i = j = 0
    
    while i < len(izq) and j < len(der):
        if izq[i] <= der[j]:
            resultado.append(izq[i])
            i += 1
        else:
            resultado.append(der[j])
            j += 1
    
    resultado.extend(izq[i:])
    resultado.extend(der[j:])
    return resultado

arr = [64, 34, 25, 12, 22, 11, 90]
print("Original:", arr)
print("Ordenado:", merge_sort(arr))

# QuickSort
def quick_sort(arr):
    """Promedio: O(n log n), Peor caso: O(n²)"""
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    izq = [x for x in arr if x < pivot]
    medio = [x for x in arr if x == pivot]
    der = [x for x in arr if x > pivot]
    
    return quick_sort(izq) + medio + quick_sort(der)

print("QuickSort:", quick_sort([3, 6, 8, 10, 1, 2, 1]))

# Torre de Hanoi
def hanoi(n, origen, destino, auxiliar):
    """T(n) = 2T(n-1) + 1 → O(2^n)"""
    if n == 1:
        print(f"Mover disco 1 de {origen} a {destino}")
        return
    hanoi(n-1, origen, auxiliar, destino)
    print(f"Mover disco {n} de {origen} a {destino}")
    hanoi(n-1, auxiliar, destino, origen)

print("\\nTorre de Hanoi (3 discos):")
hanoi(3, 'A', 'C', 'B')`
            }
        ]
    },
    'arboles-grafos': {
        titulo: 'Árboles y Grafos',
        semanas: 'Semanas 11-13 (Abril 27, Mayo 4, 11)',
        descripcion: 'Estructuras no lineales y algoritmos de grafos.',
        teoria: `
            <div class="info-card">
                <h4>Grafos - Conceptos Fundamentales</h4>
                <p>Un grafo G = (V, E) consiste en un conjunto de vértices V y aristas E.</p>
                <ul>
                    <li><strong>Dirigido:</strong> Las aristas tienen dirección (A→B ≠ B→A)</li>
                    <li><strong>No dirigido:</strong> Las aristas son bidireccionales</li>
                    <li><strong>Ponderado:</strong> Las aristas tienen pesos/costos</li>
                    <li><strong>Grado:</strong> Número de aristas conectadas a un vértice</li>
                    <li><strong>Camino:</strong> Secuencia de vértices conectados</li>
                    <li><strong>Ciclo:</strong> Camino que empieza y termina en el mismo vértice</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Algoritmos de Recorrido</h4>
                <ul>
                    <li><strong>BFS (Breadth-First Search):</strong> Explora por niveles usando cola. O(V + E). Encuentra camino más corto en grafos no ponderados</li>
                    <li><strong>DFS (Depth-First Search):</strong> Explora en profundidad usando pila/recursión. O(V + E). Útil para detectar ciclos y componentes conexas</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Caminos Más Cortos</h4>
                <ul>
                    <li><strong>Dijkstra:</strong> Un origen a todos los destinos. O((V + E) log V) con heap. No funciona con pesos negativos</li>
                    <li><strong>Floyd-Warshall:</strong> Todos los pares de vértices. O(V³). Funciona con pesos negativos (sin ciclos negativos)</li>
                    <li><strong>Bellman-Ford:</strong> Un origen, detecta ciclos negativos. O(VE)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Árboles - Propiedades</h4>
                <p>Un árbol es un grafo conexo acíclico. Propiedades:</p>
                <ul>
                    <li>Exactamente un camino entre cualquier par de nodos</li>
                    <li>n nodos → n-1 aristas</li>
                    <li>Agregar una arista crea un ciclo</li>
                    <li><strong>Árbol binario:</strong> Cada nodo tiene máximo 2 hijos</li>
                    <li><strong>Árbol binario completo:</strong> Todos los niveles llenos excepto posiblemente el último</li>
                    <li><strong>Árbol binario perfecto:</strong> Todos los niveles completamente llenos</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Árbol Binario de Búsqueda (BST)</h4>
                <p>Para cada nodo: todos los valores en el subárbol izquierdo < nodo < todos los valores en el subárbol derecho</p>
                <ul>
                    <li><strong>Búsqueda:</strong> O(log n) promedio, O(n) peor caso</li>
                    <li><strong>Inserción:</strong> O(log n) promedio, O(n) peor caso</li>
                    <li><strong>Eliminación:</strong> O(log n) promedio, O(n) peor caso</li>
                    <li><strong>Recorridos:</strong> Inorden (Izq-Raíz-Der), Preorden (Raíz-Izq-Der), Postorden (Izq-Der-Raíz)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Árboles AVL (Balanceados)</h4>
                <p>BST auto-balanceado donde la diferencia de altura entre subárboles izquierdo y derecho es máximo 1.</p>
                <ul>
                    <li><strong>Factor de balance:</strong> altura(izq) - altura(der) ∈ {-1, 0, 1}</li>
                    <li><strong>Rotaciones:</strong> Simple izquierda/derecha, Doble izquierda-derecha/derecha-izquierda</li>
                    <li><strong>Complejidad garantizada:</strong> O(log n) para búsqueda, inserción y eliminación</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Heap (Montículo)</h4>
                <p>Árbol binario completo que satisface la propiedad de heap:</p>
                <ul>
                    <li><strong>Max-Heap:</strong> Cada padre ≥ sus hijos (raíz es el máximo)</li>
                    <li><strong>Min-Heap:</strong> Cada padre ≤ sus hijos (raíz es el mínimo)</li>
                    <li><strong>Inserción:</strong> O(log n) - Agregar al final y "subir"</li>
                    <li><strong>Extracción:</strong> O(log n) - Remover raíz y "bajar"</li>
                    <li><strong>HeapSort:</strong> O(n log n) - Construir heap y extraer repetidamente</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Árbol Expandido Mínimo (MST)</h4>
                <p>Subgrafo que conecta todos los vértices con el mínimo peso total.</p>
                <ul>
                    <li><strong>Prim:</strong> Crece el árbol desde un vértice. O(E log V) con heap</li>
                    <li><strong>Kruskal:</strong> Ordena aristas y agrega si no forma ciclo. O(E log E)</li>
                </ul>
            </div>
            <div class="complexity-badge">BFS/DFS: O(V+E) | Dijkstra: O((V+E)log V) | HeapSort: O(n log n)</div>
        `,
        temas: [
            'Concepto de grafo y propiedades',
            'Algoritmo de Fleury (ciclos de Euler)',
            'Ciclos Hamiltonianos',
            'BFS y DFS',
            'Dijkstra y Floyd (caminos cortos)',
            'Concepto de árbol',
            'Tipos de árboles',
            'Árboles extendidos',
            'Prim y Kruskal (árbol expandido mínimo)',
            'Árbol binario de búsqueda',
            'Árboles AVL',
            'Heap y HeapSort'
        ],
        laboratorio: 'Laboratorio 5 - 15%',
        visualizacion: true,
        ejemplos: [
            {
                titulo: 'Grafos y Árboles Completo',
                codigo: `from collections import deque
import heapq

# BFS - Búsqueda en Anchura
def bfs(grafo, inicio):
    """O(V + E) - Explora por niveles"""
    visitados = set([inicio])
    cola = deque([inicio])
    recorrido = []
    
    while cola:
        nodo = cola.popleft()
        recorrido.append(nodo)
        
        for vecino in grafo.get(nodo, []):
            if vecino not in visitados:
                visitados.add(vecino)
                cola.append(vecino)
    
    return recorrido

# DFS - Búsqueda en Profundidad
def dfs(grafo, inicio, visitados=None):
    """O(V + E) - Explora en profundidad"""
    if visitados is None:
        visitados = set()
    
    visitados.add(inicio)
    recorrido = [inicio]
    
    for vecino in grafo.get(inicio, []):
        if vecino not in visitados:
            recorrido.extend(dfs(grafo, vecino, visitados))
    
    return recorrido

grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("BFS desde A:", bfs(grafo, 'A'))
print("DFS desde A:", dfs(grafo, 'A'))

# Dijkstra - Camino más corto
def dijkstra(grafo, inicio):
    """O((V + E) log V) con heap"""
    distancias = {nodo: float('inf') for nodo in grafo}
    distancias[inicio] = 0
    heap = [(0, inicio)]
    visitados = set()
    
    while heap:
        dist_actual, nodo_actual = heapq.heappop(heap)
        
        if nodo_actual in visitados:
            continue
        
        visitados.add(nodo_actual)
        
        for vecino, peso in grafo[nodo_actual].items():
            distancia = dist_actual + peso
            
            if distancia < distancias[vecino]:
                distancias[vecino] = distancia
                heapq.heappush(heap, (distancia, vecino))
    
    return distancias

grafo_ponderado = {
    'A': {'B': 4, 'C': 2},
    'B': {'A': 4, 'C': 1, 'D': 5},
    'C': {'A': 2, 'B': 1, 'D': 8, 'E': 10},
    'D': {'B': 5, 'C': 8, 'E': 2},
    'E': {'C': 10, 'D': 2}
}

print("\\nDijkstra desde A:", dijkstra(grafo_ponderado, 'A'))

# Árbol Binario de Búsqueda
class NodoArbol:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None

class BST:
    def __init__(self):
        self.raiz = None
    
    def insertar(self, valor):
        """O(log n) promedio"""
        if not self.raiz:
            self.raiz = NodoArbol(valor)
        else:
            self._insertar_recursivo(self.raiz, valor)
    
    def _insertar_recursivo(self, nodo, valor):
        if valor < nodo.valor:
            if nodo.izq is None:
                nodo.izq = NodoArbol(valor)
            else:
                self._insertar_recursivo(nodo.izq, valor)
        else:
            if nodo.der is None:
                nodo.der = NodoArbol(valor)
            else:
                self._insertar_recursivo(nodo.der, valor)
    
    def buscar(self, valor):
        """O(log n) promedio"""
        return self._buscar_recursivo(self.raiz, valor)
    
    def _buscar_recursivo(self, nodo, valor):
        if nodo is None:
            return False
        if nodo.valor == valor:
            return True
        if valor < nodo.valor:
            return self._buscar_recursivo(nodo.izq, valor)
        return self._buscar_recursivo(nodo.der, valor)
    
    def inorden(self):
        """Izq - Raíz - Der (orden ascendente)"""
        resultado = []
        self._inorden_recursivo(self.raiz, resultado)
        return resultado
    
    def _inorden_recursivo(self, nodo, resultado):
        if nodo:
            self._inorden_recursivo(nodo.izq, resultado)
            resultado.append(nodo.valor)
            self._inorden_recursivo(nodo.der, resultado)

bst = BST()
for valor in [50, 30, 70, 20, 40, 60, 80]:
    bst.insertar(valor)

print("\\nInorden BST:", bst.inorden())
print("Buscar 40:", bst.buscar(40))

# Heap (Min-Heap con heapq)
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 3)
heapq.heappush(heap, 7)
heapq.heappush(heap, 1)

print("\\nMin-Heap:", heap)
print("Extraer mínimo:", heapq.heappop(heap))
print("Nuevo mínimo:", heap[0])`
            }
        ]
    },
    'dinamica': {
        titulo: 'Programación Dinámica',
        semanas: 'Semanas 14-15 (Mayo 18, 25)',
        descripcion: 'Optimización mediante memorización y tabulación.',
        teoria: `
            <div class="info-card">
                <h4>¿Qué es Programación Dinámica?</h4>
                <p>Técnica de optimización que resuelve problemas complejos dividiéndolos en subproblemas más simples y almacenando sus soluciones para evitar recalcularlas.</p>
                <p><strong>Características clave:</strong></p>
                <ul>
                    <li><strong>Subestructura óptima:</strong> La solución óptima contiene soluciones óptimas de subproblemas</li>
                    <li><strong>Subproblemas superpuestos:</strong> Los mismos subproblemas se resuelven múltiples veces</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Aproximaciones de Programación Dinámica</h4>
                <ul>
                    <li><strong>Top-Down (Memorización):</strong> Recursión + caché. Resuelve subproblemas según se necesitan</li>
                    <li><strong>Bottom-Up (Tabulación):</strong> Iterativo. Resuelve todos los subproblemas de menor a mayor</li>
                </ul>
                <p><strong>Comparación:</strong></p>
                <ul>
                    <li>Top-Down: Más intuitivo, puede ser más eficiente si no todos los subproblemas se necesitan</li>
                    <li>Bottom-Up: Más eficiente en espacio, evita overhead de recursión</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Problemas Clásicos</h4>
                <ul>
                    <li><strong>Fibonacci:</strong> F(n) = F(n-1) + F(n-2). Recursivo: O(2ⁿ), DP: O(n)</li>
                    <li><strong>Mochila 0/1:</strong> Maximizar valor con peso limitado. O(nW) donde n=items, W=capacidad</li>
                    <li><strong>Subsecuencia común más larga (LCS):</strong> O(mn) donde m,n son longitudes de cadenas</li>
                    <li><strong>Camino mínimo en matriz:</strong> O(mn) para matriz m×n</li>
                    <li><strong>Partición de subconjuntos:</strong> ¿Se puede dividir en dos subconjuntos de igual suma? O(n×sum)</li>
                    <li><strong>Cambio de monedas:</strong> Mínimo número de monedas para dar cambio. O(n×amount)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Pasos para Resolver con DP</h4>
                <ul>
                    <li><strong>1. Identificar:</strong> ¿Tiene subestructura óptima y subproblemas superpuestos?</li>
                    <li><strong>2. Definir estado:</strong> ¿Qué representa dp[i] o dp[i][j]?</li>
                    <li><strong>3. Encontrar recurrencia:</strong> ¿Cómo se relaciona dp[i] con estados anteriores?</li>
                    <li><strong>4. Caso base:</strong> ¿Cuáles son los valores iniciales?</li>
                    <li><strong>5. Orden de cálculo:</strong> ¿En qué orden llenar la tabla?</li>
                    <li><strong>6. Respuesta final:</strong> ¿Dónde está la solución en la tabla?</li>
                </ul>
            </div>
            <div class="complexity-badge">Reduce O(2ⁿ) a O(n) o O(n²) típicamente</div>
        `,
        temas: [
            'Concepto de programación dinámica',
            'Programación dinámica vs recursión',
            'Aproximaciones de la programación dinámica',
            'Identificación y construcción de soluciones'
        ],
        parcial: 'Parcial 2 - 15%',
        visualizacion: true,
        ejemplos: [
            {
                titulo: 'Programación Dinámica Completa',
                codigo: `# 1. Fibonacci - Comparación
def fib_recursivo(n):
    """O(2^n) - Muy ineficiente"""
    if n <= 1:
        return n
    return fib_recursivo(n-1) + fib_recursivo(n-2)

def fib_memo(n, memo={}):
    """Top-Down: O(n) tiempo, O(n) espacio"""
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

def fib_dp(n):
    """Bottom-Up: O(n) tiempo, O(n) espacio"""
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

def fib_optimizado(n):
    """Bottom-Up optimizado: O(n) tiempo, O(1) espacio"""
    if n <= 1:
        return n
    prev2, prev1 = 0, 1
    for _ in range(2, n + 1):
        actual = prev1 + prev2
        prev2, prev1 = prev1, actual
    return prev1

print("Fibonacci(10):", fib_dp(10))

# 2. Problema de la Mochila 0/1
def mochila(pesos, valores, capacidad):
    """
    O(n×W) donde n=items, W=capacidad
    dp[i][w] = valor máximo con primeros i items y capacidad w
    """
    n = len(pesos)
    dp = [[0] * (capacidad + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacidad + 1):
            # No tomar el item i
            dp[i][w] = dp[i-1][w]
            
            # Tomar el item i (si cabe)
            if pesos[i-1] <= w:
                dp[i][w] = max(dp[i][w], 
                              valores[i-1] + dp[i-1][w - pesos[i-1]])
    
    return dp[n][capacidad]

pesos = [2, 3, 4, 5]
valores = [3, 4, 5, 6]
capacidad = 8
print(f"\\nMochila - Valor máximo: {mochila(pesos, valores, capacidad)}")

# 3. Subsecuencia Común Más Larga (LCS)
def lcs(s1, s2):
    """
    O(m×n) donde m,n son longitudes
    dp[i][j] = longitud de LCS de s1[0:i] y s2[0:j]
    """
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

s1 = "ABCDGH"
s2 = "AEDFHR"
print(f"LCS de '{s1}' y '{s2}': {lcs(s1, s2)}")

# 4. Cambio de Monedas
def cambio_monedas(monedas, cantidad):
    """
    O(n×cantidad) - Mínimo número de monedas
    dp[i] = mínimo número de monedas para cantidad i
    """
    dp = [float('inf')] * (cantidad + 1)
    dp[0] = 0
    
    for i in range(1, cantidad + 1):
        for moneda in monedas:
            if moneda <= i:
                dp[i] = min(dp[i], dp[i - moneda] + 1)
    
    return dp[cantidad] if dp[cantidad] != float('inf') else -1

monedas = [1, 5, 10, 25]
cantidad = 63
print(f"\\nCambio de {cantidad}: {cambio_monedas(monedas, cantidad)} monedas")

# 5. Subsecuencia Creciente Más Larga (LIS)
def lis(arr):
    """
    O(n²) - Longitud de subsecuencia creciente más larga
    dp[i] = longitud de LIS que termina en arr[i]
    """
    n = len(arr)
    dp = [1] * n
    
    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

arr = [10, 9, 2, 5, 3, 7, 101, 18]
print(f"LIS de {arr}: {lis(arr)}")

# 6. Camino Mínimo en Matriz
def camino_minimo(matriz):
    """
    O(m×n) - Suma mínima desde (0,0) hasta (m-1,n-1)
    Solo se puede mover derecha o abajo
    """
    m, n = len(matriz), len(matriz[0])
    dp = [[0] * n for _ in range(m)]
    
    dp[0][0] = matriz[0][0]
    
    # Primera fila
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + matriz[0][j]
    
    # Primera columna
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + matriz[i][0]
    
    # Resto de la matriz
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = matriz[i][j] + min(dp[i-1][j], dp[i][j-1])
    
    return dp[m-1][n-1]

matriz = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
print(f"\\nCamino mínimo en matriz: {camino_minimo(matriz)}")`
            }
        ]
    },
    'np': {
        titulo: 'NP Completitud',
        semanas: 'Semana 16 (Junio 1)',
        descripcion: 'Problemas computacionalmente difíciles y teoría de complejidad.',
        teoria: `
            <div class="info-card">
                <h4>Clases de Complejidad</h4>
                <ul>
                    <li><strong>P (Polynomial):</strong> Problemas que se pueden resolver en tiempo polinomial O(n^k). Ejemplo: ordenamiento, búsqueda binaria, caminos más cortos</li>
                    <li><strong>NP (Nondeterministic Polynomial):</strong> Problemas cuya solución se puede verificar en tiempo polinomial. Todos los problemas P están en NP</li>
                    <li><strong>NP-Completo:</strong> Los problemas más difíciles de NP. Si uno se resuelve en P, todos los NP se pueden resolver en P</li>
                    <li><strong>NP-Hard:</strong> Al menos tan difícil como los problemas NP-Completos, pero no necesariamente en NP</li>
                </ul>
                <p><strong>Pregunta del millón:</strong> ¿P = NP? Aún sin resolver. Premio de $1,000,000 del Clay Mathematics Institute.</p>
            </div>
            <div class="info-card">
                <h4>Problemas NP-Completos Clásicos</h4>
                <ul>
                    <li><strong>SAT (Satisfacibilidad Booleana):</strong> Primer problema probado NP-Completo (Cook-Levin, 1971)</li>
                    <li><strong>3-SAT:</strong> SAT con cláusulas de exactamente 3 literales</li>
                    <li><strong>Problema del Viajante (TSP):</strong> Encontrar el ciclo más corto que visita todas las ciudades</li>
                    <li><strong>Ciclo Hamiltoniano:</strong> ¿Existe un ciclo que visita cada vértice exactamente una vez?</li>
                    <li><strong>Conjunto Independiente:</strong> Encontrar el mayor conjunto de vértices sin aristas entre ellos</li>
                    <li><strong>Cobertura de Vértices:</strong> Mínimo conjunto de vértices que toca todas las aristas</li>
                    <li><strong>Clique:</strong> Encontrar el subgrafo completo más grande</li>
                    <li><strong>Coloración de Grafos:</strong> ¿Se puede colorear con k colores sin vértices adyacentes del mismo color?</li>
                    <li><strong>Partición:</strong> ¿Se puede dividir un conjunto en dos con igual suma?</li>
                    <li><strong>Mochila (versión decisión):</strong> ¿Existe un subconjunto con valor ≥ V y peso ≤ W?</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Reducciones Polinomiales</h4>
                <p>Problema A se reduce a B (A ≤_p B) si podemos resolver A usando un algoritmo para B en tiempo polinomial.</p>
                <p><strong>Uso:</strong> Para probar que B es NP-Completo:</p>
                <ul>
                    <li>1. Mostrar que B está en NP (verificación polinomial)</li>
                    <li>2. Reducir un problema NP-Completo conocido a B</li>
                </ul>
                <p><strong>Ejemplos de reducciones:</strong></p>
                <ul>
                    <li>3-SAT ≤_p Conjunto Independiente</li>
                    <li>Conjunto Independiente ≤_p Cobertura de Vértices</li>
                    <li>Ciclo Hamiltoniano ≤_p TSP</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Estrategias para Problemas NP</h4>
                <p>Como no hay solución polinomial conocida, usamos:</p>
                <ul>
                    <li><strong>Algoritmos exactos exponenciales:</strong> Fuerza bruta, backtracking, branch and bound</li>
                    <li><strong>Algoritmos aproximados:</strong> Solución cercana al óptimo en tiempo polinomial (ej: 2-aproximación para cobertura de vértices)</li>
                    <li><strong>Heurísticas:</strong> Soluciones prácticas sin garantías (ej: algoritmos genéticos, simulated annealing)</li>
                    <li><strong>Casos especiales:</strong> Resolver eficientemente para instancias particulares</li>
                    <li><strong>Programación dinámica:</strong> Pseudo-polinomial para algunos problemas (ej: mochila)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Ciclos de Euler vs Hamiltonianos</h4>
                <ul>
                    <li><strong>Ciclo Euleriano:</strong> Recorre cada arista exactamente una vez. Existe si todos los vértices tienen grado par. Algoritmo de Fleury: O(E²) o O(E) con optimización. Problema en P</li>
                    <li><strong>Ciclo Hamiltoniano:</strong> Visita cada vértice exactamente una vez. No hay criterio simple. Problema NP-Completo</li>
                </ul>
            </div>
            <div class="complexity-badge">TSP fuerza bruta: O(n!) | Aproximación: O(n²) con 2× óptimo</div>
        `,
        temas: [
            'Problemas NP completitud',
            'Métodos de reducciones',
            'Pares más cercanos',
            'Secuencia creciente más larga',
            'Reducciones de dureza elementales',
            'Ciclos Hamiltonianos',
            'Conjunto independiente',
            'Cobertura de vértices',
            'Condición de Satisfacción (SAT)',
            'Problemas P vs NP'
        ],
        trabajo: 'Trabajo Final - 10%',
        exposicion: 'Exposición - 5%',
        ejemplos: [
            {
                titulo: 'Problemas NP-Completos',
                codigo: `from itertools import permutations, combinations

# 1. Problema del Viajante (TSP) - Fuerza Bruta O(n!)
def tsp_fuerza_bruta(grafo, inicio):
    """NP-Completo - Fuerza bruta O(n!)"""
    vertices = list(grafo.keys())
    vertices.remove(inicio)
    
    min_camino = float('inf')
    mejor_ruta = None
    
    for perm in permutations(vertices):
        costo_actual = 0
        k = inicio
        
        for j in perm:
            if j not in grafo[k]:
                costo_actual = float('inf')
                break
            costo_actual += grafo[k][j]
            k = j
        
        if inicio in grafo[k]:
            costo_actual += grafo[k][inicio]
        else:
            costo_actual = float('inf')
        
        if costo_actual < min_camino:
            min_camino = costo_actual
            mejor_ruta = [inicio] + list(perm) + [inicio]
    
    return mejor_ruta, min_camino

grafo_tsp = {
    'A': {'B': 10, 'C': 15, 'D': 20},
    'B': {'A': 10, 'C': 35, 'D': 25},
    'C': {'A': 15, 'B': 35, 'D': 30},
    'D': {'A': 20, 'B': 25, 'C': 30}
}

ruta, costo = tsp_fuerza_bruta(grafo_tsp, 'A')
print(f"TSP - Mejor ruta: {' -> '.join(ruta)}")
print(f"Costo mínimo: {costo}")

# 2. Ciclo Hamiltoniano - Backtracking
def ciclo_hamiltoniano(grafo, inicio):
    """NP-Completo - Backtracking"""
    n = len(grafo)
    camino = [inicio]
    visitados = {inicio}
    
    def backtrack():
        if len(camino) == n:
            # Verificar si hay arista de regreso al inicio
            return camino[-1] in grafo and inicio in grafo[camino[-1]]
        
        ultimo = camino[-1]
        for vecino in grafo.get(ultimo, []):
            if vecino not in visitados:
                camino.append(vecino)
                visitados.add(vecino)
                
                if backtrack():
                    return True
                
                camino.pop()
                visitados.remove(vecino)
        
        return False
    
    if backtrack():
        return camino + [inicio]
    return None

grafo_ham = {
    'A': ['B', 'C', 'D'],
    'B': ['A', 'C'],
    'C': ['A', 'B', 'D'],
    'D': ['A', 'C']
}

ciclo = ciclo_hamiltoniano(grafo_ham, 'A')
print(f"\\nCiclo Hamiltoniano: {' -> '.join(ciclo) if ciclo else 'No existe'}")

# 3. Conjunto Independiente Máximo - Fuerza Bruta
def conjunto_independiente_max(grafo):
    """NP-Completo - Probar todos los subconjuntos O(2^n)"""
    vertices = list(grafo.keys())
    max_conjunto = []
    
    # Probar todos los subconjuntos
    for r in range(len(vertices), 0, -1):
        for subconjunto in combinations(vertices, r):
            # Verificar si es independiente
            es_independiente = True
            for v1 in subconjunto:
                for v2 in subconjunto:
                    if v1 != v2 and v2 in grafo.get(v1, []):
                        es_independiente = False
                        break
                if not es_independiente:
                    break
            
            if es_independiente:
                return list(subconjunto)
    
    return max_conjunto

grafo_ind = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}

conjunto = conjunto_independiente_max(grafo_ind)
print(f"\\nConjunto Independiente Máximo: {conjunto}")

# 4. Cobertura de Vértices - Aproximación 2x
def cobertura_vertices_aprox(aristas):
    """Algoritmo de aproximación 2x del óptimo - O(E)"""
    cobertura = set()
    aristas_restantes = set(aristas)
    
    while aristas_restantes:
        # Tomar una arista arbitraria
        u, v = aristas_restantes.pop()
        cobertura.add(u)
        cobertura.add(v)
        
        # Remover todas las aristas cubiertas
        aristas_restantes = {(a, b) for a, b in aristas_restantes 
                            if a not in {u, v} and b not in {u, v}}
    
    return cobertura

aristas = [('A', 'B'), ('B', 'C'), ('C', 'D'), ('D', 'A'), ('A', 'C')]
cobertura = cobertura_vertices_aprox(aristas)
print(f"\\nCobertura de Vértices (aprox): {cobertura}")

# 5. SAT - 3-SAT Solver simple
def evaluar_3sat(clausulas, asignacion):
    """Verificar si una asignación satisface todas las cláusulas"""
    for clausula in clausulas:
        satisfecha = False
        for literal in clausula:
            var = abs(literal)
            valor = asignacion.get(var, False)
            # Si literal es negativo, negar el valor
            if (literal > 0 and valor) or (literal < 0 and not valor):
                satisfecha = True
                break
        if not satisfecha:
            return False
    return True

# Ejemplo: (x1 OR x2 OR x3) AND (¬x1 OR x2 OR ¬x3) AND (x1 OR ¬x2 OR x3)
clausulas_3sat = [
    [1, 2, 3],      # x1 OR x2 OR x3
    [-1, 2, -3],    # ¬x1 OR x2 OR ¬x3
    [1, -2, 3]      # x1 OR ¬x2 OR x3
]

asignacion = {1: True, 2: True, 3: False}
print(f"\\n3-SAT satisfecho: {evaluar_3sat(clausulas_3sat, asignacion)}")

# 6. Partición de Conjunto - Programación Dinámica (Pseudo-polinomial)
def puede_particionar(nums):
    """O(n × sum) - Pseudo-polinomial"""
    total = sum(nums)
    if total % 2 != 0:
        return False
    
    objetivo = total // 2
    dp = [False] * (objetivo + 1)
    dp[0] = True
    
    for num in nums:
        for i in range(objetivo, num - 1, -1):
            dp[i] = dp[i] or dp[i - num]
    
    return dp[objetivo]

conjunto = [1, 5, 11, 5]
print(f"\\n¿Se puede particionar {conjunto}? {puede_particionar(conjunto)}")`
            }
        ]
    }
};

// Función para cargar contenido de unidad
function cargarUnidad(unidadKey) {
    const unidad = unidades[unidadKey];
    const content = document.getElementById('content');
    
    let temasHTML = unidad.temas.map(tema => `<li>${tema}</li>`).join('');
    
    let ejemplosHTML = unidad.ejemplos.map((ejemplo, index) => `
        <div class="example-box">
            <h4>${ejemplo.titulo}</h4>
            <button class="btn-lab" onclick="cargarEjemplo('${unidadKey}', ${index})">
                💻 Probar en Laboratorio
            </button>
        </div>
    `).join('');
    
    let evaluacionHTML = '';
    if (unidad.laboratorio) evaluacionHTML += `<p><strong>📝 ${unidad.laboratorio}</strong></p>`;
    if (unidad.parcial) evaluacionHTML += `<p><strong>📝 ${unidad.parcial}</strong></p>`;
    if (unidad.trabajo) evaluacionHTML += `<p><strong>📝 ${unidad.trabajo}</strong></p>`;
    if (unidad.exposicion) evaluacionHTML += `<p><strong>📝 ${unidad.exposicion}</strong></p>`;
    
    // Agregar visualización interactiva si está disponible
    let visualizacionHTML = '';
    if (unidad.visualizacion) {
        visualizacionHTML = `
            <h3>🎨 Visualización Interactiva</h3>
            <div id="viz-${unidadKey}"></div>
        `;
    }
    
    content.innerHTML = `
        <div class="unit-content">
            <h2>${unidad.titulo}</h2>
            <p><em>${unidad.semanas}</em></p>
            <p>${unidad.descripcion}</p>
            
            <h3>📖 Teoría</h3>
            ${unidad.teoria || '<p>Contenido teórico en desarrollo...</p>'}
            
            <h3>📚 Temas</h3>
            <ul class="topic-list">
                ${temasHTML}
            </ul>
            
            ${visualizacionHTML}
            
            <h3>💡 Ejemplos Interactivos</h3>
            ${ejemplosHTML}
            
            <h3>📊 Evaluación</h3>
            ${evaluacionHTML}
        </div>
    `;
    
    // Inicializar visualización según el tipo de unidad
    if (unidad.visualizacion) {
        setTimeout(() => inicializarVisualizacion(unidadKey), 100);
    }
    
    // Actualizar navegación activa
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-unit="${unidadKey}"]`).classList.add('active');
}

// Función para inicializar visualizaciones según el tipo
function inicializarVisualizacion(unidadKey) {
    const container = document.getElementById(`viz-${unidadKey}`);
    if (!container) return;
    
    switch(unidadKey) {
        case 'listas':
            container.innerHTML = crearVisualizacion('lista', '📋 Lista Ligada Interactiva', `viz-lista-${unidadKey}`);
            setTimeout(() => {
                const viz = new ListaLigadaViz(`viz-lista-${unidadKey}`);
                const controls = document.getElementById(`viz-lista-${unidadKey}-controls`);
                controls.innerHTML = `
                    <input type="number" id="input-lista" class="viz-input" placeholder="Valor" value="10">
                    <button class="viz-btn" onclick="window.listaViz.insertar(parseInt(document.getElementById('input-lista').value))">Insertar</button>
                    <button class="viz-btn" onclick="window.listaViz.eliminar()">Eliminar Primero</button>
                    <button class="viz-btn" onclick="window.listaViz.buscar(parseInt(document.getElementById('input-lista').value))">Buscar</button>
                `;
                window.listaViz = viz;
                viz.insertar(5);
                viz.insertar(10);
                viz.insertar(15);
            }, 100);
            break;
            
        case 'pilas-colas':
            container.innerHTML = `
                ${crearVisualizacion('pila', '📚 Pila Interactiva (LIFO)', `viz-pila-${unidadKey}`)}
                ${crearVisualizacion('cola', '🎫 Cola Interactiva (FIFO)', `viz-cola-${unidadKey}`)}
            `;
            setTimeout(() => {
                const pilaViz = new PilaViz(`viz-pila-${unidadKey}`);
                const colaViz = new ColaViz(`viz-cola-${unidadKey}`);
                
                document.getElementById(`viz-pila-${unidadKey}-controls`).innerHTML = `
                    <input type="number" id="input-pila" class="viz-input" placeholder="Valor" value="5">
                    <button class="viz-btn" onclick="window.pilaViz.apilar(parseInt(document.getElementById('input-pila').value))">Apilar (Push)</button>
                    <button class="viz-btn" onclick="window.pilaViz.desapilar()">Desapilar (Pop)</button>
                    <button class="viz-btn" onclick="window.pilaViz.cima()">Ver Cima (Peek)</button>
                `;
                
                document.getElementById(`viz-cola-${unidadKey}-controls`).innerHTML = `
                    <input type="number" id="input-cola" class="viz-input" placeholder="Valor" value="5">
                    <button class="viz-btn" onclick="window.colaViz.encolar(parseInt(document.getElementById('input-cola').value))">Encolar (Enqueue)</button>
                    <button class="viz-btn" onclick="window.colaViz.desencolar()">Desencolar (Dequeue)</button>
                    <button class="viz-btn" onclick="window.colaViz.frente()">Ver Frente (Front)</button>
                `;
                
                window.pilaViz = pilaViz;
                window.colaViz = colaViz;
            }, 100);
            break;
            
        case 'recursion':
        case 'analisis':
            container.innerHTML = crearVisualizacion('ordenamiento', '📊 Algoritmos de Ordenamiento', `viz-sort-${unidadKey}`);
            setTimeout(() => {
                const sortViz = new OrdenamientoViz(`viz-sort-${unidadKey}`);
                const controls = document.getElementById(`viz-sort-${unidadKey}-controls`);
                controls.innerHTML = `
                    <button class="viz-btn" onclick="window.sortViz.generar(10)">Generar Array</button>
                    <button class="viz-btn" onclick="window.sortViz.bubbleSort()">Bubble Sort O(n²)</button>
                    <button class="viz-btn" onclick="window.sortViz.quickSort()">Quick Sort O(n log n)</button>
                `;
                window.sortViz = sortViz;
                sortViz.generar(8);
            }, 100);
            break;
            
        case 'arboles-grafos':
            container.innerHTML = crearVisualizacion('arbol', '🌳 Árbol Binario de Búsqueda', `viz-arbol-${unidadKey}`);
            setTimeout(() => {
                const arbolViz = new ArbolBinarioViz(`viz-arbol-${unidadKey}`);
                const controls = document.getElementById(`viz-arbol-${unidadKey}-controls`);
                controls.innerHTML = `
                    <input type="number" id="input-arbol" class="viz-input" placeholder="Valor" value="50">
                    <button class="viz-btn" onclick="window.arbolViz.insertar(parseInt(document.getElementById('input-arbol').value))">Insertar</button>
                    <button class="viz-btn" onclick="window.arbolViz.buscar(parseInt(document.getElementById('input-arbol').value))">Buscar</button>
                    <button class="viz-btn" onclick="window.arbolViz.inorden()">Recorrido Inorden</button>
                `;
                window.arbolViz = arbolViz;
            }, 100);
            break;
    }
}

// Función para cargar ejemplo en el laboratorio
function cargarEjemplo(unidadKey, ejemploIndex) {
    const ejemplo = unidades[unidadKey].ejemplos[ejemploIndex];
    const codeEditor = document.getElementById('codeEditor');
    const labPanel = document.getElementById('labPanel');
    
    codeEditor.value = ejemplo.codigo;
    labPanel.classList.add('active');
}

// Event listeners para navegación
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const unit = e.target.getAttribute('data-unit');
        cargarUnidad(unit);
    });
});

// Event listener para cerrar laboratorio
document.getElementById('closeLabBtn').addEventListener('click', () => {
    document.getElementById('labPanel').classList.remove('active');
});

// Event listener para ejecutar código
document.getElementById('runBtn').addEventListener('click', async () => {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('output');
    
    if (!pyodide) {
        output.textContent = 'Cargando Python... Por favor espera.';
        return;
    }
    
    output.textContent = 'Ejecutando...';
    
    try {
        // Redirigir stdout
        await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);
        
        // Ejecutar código del usuario
        await pyodide.runPythonAsync(code);
        
        // Obtener salida
        const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
        output.textContent = stdout || 'Ejecución completada sin salida.';
    } catch (error) {
        output.textContent = `Error:\n${error.message}`;
    }
});

// Event listener para limpiar código
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('codeEditor').value = '';
    document.getElementById('output').textContent = '';
});
