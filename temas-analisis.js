// Temas de Análisis de Algoritmos

const temasAnalisis = {
    'costo-computacional': {
        titulo: 'Costo Computacional Temporal y Espacial',
        teoria: `
            <div class="info-card">
                <h4>Costo Temporal</h4>
                <p>Mide el tiempo de ejecución de un algoritmo en función del tamaño de entrada.</p>
                <ul>
                    <li><strong>Tiempo real:</strong> Depende del hardware (no útil para análisis)</li>
                    <li><strong>Número de operaciones:</strong> Independiente del hardware</li>
                    <li><strong>Operación básica:</strong> La operación más ejecutada (comparaciones, asignaciones)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Costo Espacial</h4>
                <p>Mide la memoria adicional requerida por el algoritmo.</p>
                <ul>
                    <li><strong>Espacio fijo:</strong> Variables, constantes (independiente de n)</li>
                    <li><strong>Espacio variable:</strong> Estructuras dinámicas, recursión</li>
                    <li><strong>In-place:</strong> O(1) espacio adicional</li>
                    <li><strong>Out-of-place:</strong> O(n) o más espacio adicional</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Casos de Análisis</h4>
                <ul>
                    <li><strong>Mejor caso:</strong> Entrada más favorable (Ω)</li>
                    <li><strong>Caso promedio:</strong> Entrada típica (Θ)</li>
                    <li><strong>Peor caso:</strong> Entrada más desfavorable (O) - Más usado</li>
                </ul>
            </div>
        `,
        visualizacion: null,
        codigo: `import time
import sys

# Análisis de Costo Temporal
def busqueda_lineal(arr, objetivo):
    """
    Mejor caso: O(1) - elemento en primera posición
    Peor caso: O(n) - elemento al final o no existe
    Promedio: O(n/2) = O(n)
    """
    comparaciones = 0
    for i in range(len(arr)):
        comparaciones += 1
        if arr[i] == objetivo:
            return i, comparaciones
    return -1, comparaciones

def busqueda_binaria(arr, objetivo):
    """
    Mejor caso: O(1) - elemento en el medio
    Peor caso: O(log n) - elemento no existe
    Promedio: O(log n)
    """
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

# Demostración de costos
print("=== Análisis de Costo Temporal ===\\n")
arr = list(range(1, 1001))

# Mejor caso búsqueda lineal
pos, comp = busqueda_lineal(arr, 1)
print(f"Búsqueda Lineal - Mejor caso (primer elemento):")
print(f"  Comparaciones: {comp}\\n")

# Peor caso búsqueda lineal
pos, comp = busqueda_lineal(arr, 1000)
print(f"Búsqueda Lineal - Peor caso (último elemento):")
print(f"  Comparaciones: {comp}\\n")

# Búsqueda binaria
pos, comp = busqueda_binaria(arr, 1000)
print(f"Búsqueda Binaria - Peor caso:")
print(f"  Comparaciones: {comp}\\n")

# Análisis de Costo Espacial
def suma_iterativa(n):
    """O(1) espacio - solo variables locales"""
    suma = 0
    for i in range(1, n + 1):
        suma += i
    return suma

def suma_recursiva(n):
    """O(n) espacio - stack de recursión"""
    if n == 0:
        return 0
    return n + suma_recursiva(n - 1)

def generar_array(n):
    """O(n) espacio - crea array de tamaño n"""
    return [i for i in range(n)]

print("=== Análisis de Costo Espacial ===\\n")

n = 100
print(f"suma_iterativa({n}):")
print(f"  Espacio: O(1) - solo variables locales\\n")

print(f"suma_recursiva({n}):")
print(f"  Espacio: O(n) - {n} llamadas en el stack\\n")

arr = generar_array(n)
print(f"generar_array({n}):")
print(f"  Espacio: O(n) - array de {n} elementos")
print(f"  Tamaño real: {sys.getsizeof(arr)} bytes\\n")

# Comparación de algoritmos de ordenamiento
def bubble_sort_analisis(arr):
    """
    Tiempo: O(n²) en todos los casos
    Espacio: O(1) - in-place
    """
    n = len(arr)
    comparaciones = 0
    intercambios = 0
    
    for i in range(n):
        for j in range(n - i - 1):
            comparaciones += 1
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                intercambios += 1
    
    return comparaciones, intercambios

def merge_sort_analisis(arr):
    """
    Tiempo: O(n log n) en todos los casos
    Espacio: O(n) - requiere array auxiliar
    """
    if len(arr) <= 1:
        return arr, 0
    
    medio = len(arr) // 2
    izq, comp_izq = merge_sort_analisis(arr[:medio])
    der, comp_der = merge_sort_analisis(arr[medio:])
    
    resultado, comp_merge = merge_con_conteo(izq, der)
    return resultado, comp_izq + comp_der + comp_merge

def merge_con_conteo(izq, der):
    resultado = []
    i = j = comparaciones = 0
    
    while i < len(izq) and j < len(der):
        comparaciones += 1
        if izq[i] <= der[j]:
            resultado.append(izq[i])
            i += 1
        else:
            resultado.append(der[j])
            j += 1
    
    resultado.extend(izq[i:])
    resultado.extend(der[j:])
    return resultado, comparaciones

print("\\n=== Comparación de Algoritmos ===\\n")
arr_test = [64, 34, 25, 12, 22, 11, 90, 88, 45, 50]

# Bubble Sort
arr_bubble = arr_test.copy()
comp, inter = bubble_sort_analisis(arr_bubble)
print(f"Bubble Sort (n={len(arr_test)}):")
print(f"  Comparaciones: {comp}")
print(f"  Intercambios: {inter}")
print(f"  Espacio: O(1)\\n")

# Merge Sort
arr_merge = arr_test.copy()
resultado, comp = merge_sort_analisis(arr_merge)
print(f"Merge Sort (n={len(arr_test)}):")
print(f"  Comparaciones: {comp}")
print(f"  Espacio: O(n)")`
    },
};

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = temasAnalisis;
}

    
    'notacion-asintotica': {
        titulo: 'Notación Asintótica y Propiedades',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Describe el comportamiento de un algoritmo cuando n tiende a infinito, ignorando constantes y términos de menor orden.</p>
                <p><strong>Ejemplo:</strong> 3n² + 5n + 10 = O(n²)</p>
            </div>
            <div class="info-card">
                <h4>Propiedades</h4>
                <ul>
                    <li><strong>Transitividad:</strong> Si f=O(g) y g=O(h), entonces f=O(h)</li>
                    <li><strong>Reflexividad:</strong> f=O(f)</li>
                    <li><strong>Simetría (Θ):</strong> Si f=Θ(g), entonces g=Θ(f)</li>
                    <li><strong>Suma:</strong> O(f) + O(g) = O(max(f,g))</li>
                    <li><strong>Producto:</strong> O(f) × O(g) = O(f×g)</li>
                </ul>
            </div>
        `,
        visualizacion: null,
        codigo: `# Ejemplos de Notación Asintótica

def ejemplo_O_1():
    """O(1) - Constante"""
    x = 5
    y = 10
    z = x + y
    return z

def ejemplo_O_n(n):
    """O(n) - Lineal"""
    suma = 0
    for i in range(n):
        suma += i
    return suma

def ejemplo_O_n2(n):
    """O(n²) - Cuadrática"""
    suma = 0
    for i in range(n):
        for j in range(n):
            suma += i * j
    return suma

def ejemplo_O_log_n(n):
    """O(log n) - Logarítmica"""
    count = 0
    while n > 1:
        n = n // 2
        count += 1
    return count

def ejemplo_O_n_log_n(arr):
    """O(n log n) - Lineal-logarítmica"""
    # MergeSort es O(n log n)
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = ejemplo_O_n_log_n(arr[:mid])
    right = ejemplo_O_n_log_n(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Propiedades
print("=== Propiedades de Notación Asintótica ===\\n")

print("1. Suma de complejidades:")
print("   O(n) + O(n²) = O(max(n, n²)) = O(n²)")
print("   Ejemplo: búsqueda O(n) + ordenamiento O(n²) = O(n²)\\n")

print("2. Producto de complejidades:")
print("   O(n) × O(log n) = O(n log n)")
print("   Ejemplo: n iteraciones, cada una con búsqueda binaria\\n")

print("3. Ignorar constantes:")
print("   5n² + 3n + 100 = O(n²)")
print("   Solo importa el término dominante\\n")

print("4. Términos dominantes:")
print("   n³ + n² + n + 1 = O(n³)")
print("   n³ crece más rápido que los demás\\n")

# Demostración práctica
import time

def medir_tiempo(func, *args):
    inicio = time.time()
    resultado = func(*args)
    fin = time.time()
    return fin - inicio

print("=== Medición Práctica ===\\n")

tamaños = [100, 1000, 10000]
for n in tamaños:
    t1 = medir_tiempo(ejemplo_O_n, n)
    t2 = medir_tiempo(ejemplo_O_n2, n)
    print(f"n = {n}:")
    print(f"  O(n): {t1:.6f}s")
    print(f"  O(n²): {t2:.6f}s")
    print(f"  Ratio: {t2/t1:.2f}x\\n")`
    },
    
    'big-o-omega-theta': {
        titulo: 'Big O, Big Omega y Big Theta',
        teoria: `
            <div class="info-card">
                <h4>Big O (O) - Cota Superior</h4>
                <p>f(n) = O(g(n)) si existe c > 0 y n₀ tal que f(n) ≤ c·g(n) para todo n ≥ n₀</p>
                <p><strong>Significado:</strong> El algoritmo NO será peor que esto (peor caso)</p>
                <p><strong>Ejemplo:</strong> Búsqueda lineal es O(n)</p>
            </div>
            <div class="info-card">
                <h4>Big Omega (Ω) - Cota Inferior</h4>
                <p>f(n) = Ω(g(n)) si existe c > 0 y n₀ tal que f(n) ≥ c·g(n) para todo n ≥ n₀</p>
                <p><strong>Significado:</strong> El algoritmo NO será mejor que esto (mejor caso)</p>
                <p><strong>Ejemplo:</strong> Búsqueda lineal es Ω(1)</p>
            </div>
            <div class="info-card">
                <h4>Big Theta (Θ) - Cota Ajustada</h4>
                <p>f(n) = Θ(g(n)) si f(n) = O(g(n)) Y f(n) = Ω(g(n))</p>
                <p><strong>Significado:</strong> Cota exacta (todos los casos)</p>
                <p><strong>Ejemplo:</strong> MergeSort es Θ(n log n)</p>
            </div>
        `,
        visualizacion: null,
        codigo: `# Ejemplos de Big O, Omega y Theta

def busqueda_lineal_analisis(arr, objetivo):
    """
    Mejor caso (Ω): O(1) - elemento en primera posición
    Peor caso (O): O(n) - elemento al final o no existe
    NO tiene Θ porque mejor ≠ peor caso
    """
    for i in range(len(arr)):
        if arr[i] == objetivo:
            return i
    return -1

def suma_array(arr):
    """
    Todos los casos (Θ): O(n)
    Siempre recorre todo el array
    Θ(n) porque Ω(n) = O(n) = n
    """
    suma = 0
    for elemento in arr:
        suma += elemento
    return suma

def merge_sort(arr):
    """
    Todos los casos (Θ): O(n log n)
    Siempre divide y conquista igual
    Θ(n log n) en mejor, promedio y peor caso
    """
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def quick_sort(arr):
    """
    Mejor caso (Ω): O(n log n) - pivote siempre en el medio
    Peor caso (O): O(n²) - pivote siempre el menor/mayor
    Promedio: O(n log n)
    NO tiene Θ porque mejor ≠ peor caso
    """
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Tabla comparativa
print("=== Comparación de Notaciones ===\\n")
print("Algoritmo              | Ω (mejor) | O (peor)  | Θ (exacto)")
print("-" * 65)
print("Búsqueda Lineal       | Ω(1)      | O(n)      | -")
print("Búsqueda Binaria      | Ω(1)      | O(log n)  | -")
print("Suma de Array         | Ω(n)      | O(n)      | Θ(n)")
print("Bubble Sort           | Ω(n)      | O(n²)     | -")
print("Merge Sort            | Ω(n log n)| O(n log n)| Θ(n log n)")
print("Quick Sort            | Ω(n log n)| O(n²)     | -")
print("Insertion Sort        | Ω(n)      | O(n²)     | -")
print("Heap Sort             | Ω(n log n)| O(n log n)| Θ(n log n)")

# Ejemplos prácticos
print("\\n=== Ejemplos Prácticos ===\\n")

arr = list(range(1, 11))
print(f"Array: {arr}\\n")

print("1. Búsqueda Lineal:")
print(f"   Mejor caso: buscar {arr[0]} → 1 comparación (Ω(1))")
print(f"   Peor caso: buscar 100 → {len(arr)} comparaciones (O(n))\\n")

print("2. Suma de Array:")
print(f"   Siempre recorre {len(arr)} elementos → Θ(n)\\n")

print("3. Merge Sort:")
print(f"   Siempre divide log n veces y merge n elementos → Θ(n log n)\\n")

# Demostración de Quick Sort
print("4. Quick Sort:")
mejor_caso = list(range(1, 9))  # Balanceado
peor_caso = list(range(1, 9))   # Ya ordenado

import time

inicio = time.time()
quick_sort(mejor_caso)
tiempo_mejor = time.time() - inicio

inicio = time.time()
quick_sort(peor_caso)
tiempo_peor = time.time() - inicio

print(f"   Mejor caso (balanceado): {tiempo_mejor:.6f}s")
print(f"   Peor caso (ordenado): {tiempo_peor:.6f}s")`
    },
};
