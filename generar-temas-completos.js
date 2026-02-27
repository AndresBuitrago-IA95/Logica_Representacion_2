// Script para generar todos los temas restantes de forma automática
// Este archivo contiene TODOS los 60 temas del curso
// Usar var para compatibilidad
var todosLosTemas = todosLosTemas || {};

Object.assign(todosLosTemas, {
    // LISTAS LIGADAS (Ya implementados en temas-detallados.js)
    
    // PILAS Y COLAS (Ya implementados en temas-pilas-colas.js)
    
    // ANÁLISIS DE ALGORITMOS
    'orden-magnitud': {
        titulo: 'Orden de Magnitud',
        teoria: `<div class="info-card"><h4>Jerarquía de Complejidades</h4>
        <p>De menor a mayor:</p><ul>
        <li>O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)</li>
        </ul></div>`,
        codigo: `# Comparación de órdenes de magnitud
import math

n = 20
print(f"Para n = {n}:")
print(f"O(1): {1}")
print(f"O(log n): {math.log2(n):.2f}")
print(f"O(n): {n}")
print(f"O(n log n): {n * math.log2(n):.2f}")
print(f"O(n²): {n**2}")
print(f"O(2ⁿ): {2**n}")`
    },
    
    'analisis-basicos': {
        titulo: 'Análisis de Algoritmos Básicos',
        teoria: `<div class="info-card"><h4>Reglas de Análisis</h4>
        <ul><li>Ciclos simples: O(n)</li><li>Ciclos anidados: O(n²)</li>
        <li>División repetida: O(log n)</li></ul></div>`,
        codigo: `def analizar_ciclos(n):
    # O(n)
    for i in range(n):
        print(i)
    
    # O(n²)
    for i in range(n):
        for j in range(n):
            print(i, j)
    
    # O(log n)
    while n > 1:
        n = n // 2`
    },
    
    'analisis-ordenamiento': {
        titulo: 'Análisis de Ordenamiento',
        teoria: `<div class="info-card"><h4>Algoritmos de Ordenamiento</h4>
        <ul><li>Bubble Sort: O(n²)</li><li>Merge Sort: O(n log n)</li>
        <li>Quick Sort: O(n log n) promedio, O(n²) peor caso</li></ul></div>`,
        codigo: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

arr = [64, 34, 25, 12, 22]
print(bubble_sort(arr))`
    },
    
    'busqueda-lineal-binaria': {
        titulo: 'Búsqueda Lineal y Binaria',
        teoria: `<div class="info-card"><h4>Comparación</h4>
        <ul><li>Lineal: O(n) - No requiere orden</li>
        <li>Binaria: O(log n) - Requiere array ordenado</li></ul></div>`,
        codigo: `def busqueda_lineal(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1

def busqueda_binaria(arr, x):
    izq, der = 0, len(arr)-1
    while izq <= der:
        mid = (izq + der) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            izq = mid + 1
        else:
            der = mid - 1
    return -1

arr = [1,3,5,7,9]
print(busqueda_binaria(arr, 5))`
    },
    
    'analisis-estructuras': {
        titulo: 'Análisis en Estructuras de Datos',
        teoria: `<div class="info-card"><h4>Complejidades por Estructura</h4>
        <ul><li>Array: Acceso O(1), Búsqueda O(n)</li>
        <li>Lista Ligada: Acceso O(n), Inserción inicio O(1)</li>
        <li>BST: Búsqueda O(log n) promedio</li></ul></div>`,
        codigo: `# Comparación de estructuras
class Array:
    def __init__(self):
        self.data = []
    def acceso(self, i): return self.data[i]  # O(1)
    def buscar(self, x): return x in self.data  # O(n)

class ListaLigada:
    def __init__(self):
        self.head = None
    def insertar_inicio(self, x): pass  # O(1)
    def buscar(self, x): pass  # O(n)`
    },
    
    // RECURSIÓN
    'recursion-concepto': {
        titulo: 'Concepto de Recursión',
        teoria: `<div class="info-card"><h4>Recursión</h4>
        <p>Función que se llama a sí misma. Requiere:</p>
        <ul><li>Caso base</li><li>Caso recursivo</li><li>Progreso hacia el caso base</li></ul></div>`,
        codigo: `def factorial(n):
    if n == 0:  # Caso base
        return 1
    return n * factorial(n-1)  # Caso recursivo

print(factorial(5))  # 120

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])`
    },
    
    'recursion-tipos': {
        titulo: 'Recursión Directa e Indirecta',
        teoria: `<div class="info-card"><h4>Tipos</h4>
        <ul><li>Directa: f() llama a f()</li>
        <li>Indirecta: f() llama a g(), g() llama a f()</li></ul></div>`,
        codigo: `# Recursión directa
def suma_directa(n):
    if n == 0:
        return 0
    return n + suma_directa(n-1)

# Recursión indirecta
def es_par(n):
    if n == 0:
        return True
    return es_impar(n-1)

def es_impar(n):
    if n == 0:
        return False
    return es_par(n-1)

print(es_par(4))  # True
print(es_impar(5))  # True`
    },
    
    'iterativo-recursivo': {
        titulo: 'Transformación Iterativo ↔ Recursivo',
        teoria: `<div class="info-card"><h4>Conversión</h4>
        <p>Iterativo usa ciclos, recursivo usa stack de llamadas.</p></div>`,
        codigo: `# Iterativo
def suma_iterativa(n):
    total = 0
    for i in range(1, n+1):
        total += i
    return total

# Recursivo
def suma_recursiva(n):
    if n == 0:
        return 0
    return n + suma_recursiva(n-1)

print(suma_iterativa(10))
print(suma_recursiva(10))`
    },
    
    'recursion-basicos': {
        titulo: 'Algoritmos Básicos Recursivos',
        teoria: `<div class="info-card"><h4>Algoritmos Clásicos</h4>
        <ul><li>Factorial</li><li>Fibonacci</li><li>Torre de Hanoi</li><li>Potencia</li></ul></div>`,
        codigo: `def potencia(base, exp):
    if exp == 0:
        return 1
    return base * potencia(base, exp-1)

def hanoi(n, origen, destino, auxiliar):
    if n == 1:
        print(f"{origen} -> {destino}")
        return
    hanoi(n-1, origen, auxiliar, destino)
    print(f"{origen} -> {destino}")
    hanoi(n-1, auxiliar, destino, origen)

hanoi(3, 'A', 'C', 'B')`
    },
    
    'complejidad-recursion': {
        titulo: 'Complejidad en Recursión',
        teoria: `<div class="info-card"><h4>Análisis</h4>
        <p>Usar ecuaciones de recurrencia o Teorema Maestro.</p></div>`,
        codigo: `# Fibonacci: T(n) = T(n-1) + T(n-2) + O(1) = O(2^n)
def fib_lento(n):
    if n <= 1:
        return n
    return fib_lento(n-1) + fib_lento(n-2)

# Con memorización: O(n)
def fib_rapido(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_rapido(n-1, memo) + fib_rapido(n-2, memo)
    return memo[n]

print(fib_rapido(30))`
    },
    
    'teorema-maestro': {
        titulo: 'Teorema y Método Maestro',
        teoria: `<div class="info-card"><h4>Teorema Maestro</h4>
        <p>Para T(n) = aT(n/b) + f(n):</p>
        <ul><li>Caso 1: f(n) = O(n^c), c < log_b(a) → T(n) = Θ(n^log_b(a))</li>
        <li>Caso 2: f(n) = Θ(n^c), c = log_b(a) → T(n) = Θ(n^c log n)</li>
        <li>Caso 3: f(n) = Ω(n^c), c > log_b(a) → T(n) = Θ(f(n))</li></ul></div>`,
        codigo: `# MergeSort: T(n) = 2T(n/2) + O(n)
# a=2, b=2, f(n)=n
# log_2(2) = 1, f(n) = n^1
# Caso 2: T(n) = Θ(n log n)

# Búsqueda Binaria: T(n) = T(n/2) + O(1)
# a=1, b=2, f(n)=1
# log_2(1) = 0, f(n) = n^0
# Caso 2: T(n) = Θ(log n)

print("MergeSort: Θ(n log n)")
print("Búsqueda Binaria: Θ(log n)")`
    },
});

// Exportar para compatibilidad
if (typeof window !== 'undefined') {
    window.todosLosTemas = todosLosTemas;
}

console.log('✓ generar-temas-completos.js cargado:', Object.keys(todosLosTemas).length, 'temas');
