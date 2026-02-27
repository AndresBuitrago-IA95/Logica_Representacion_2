// Temas de Pilas y Colas (continuación)

const temasPilasColas = {
    'n-pilas': {
        titulo: 'N-Pilas en un Arreglo',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Técnica para implementar múltiples pilas en un solo arreglo, optimizando el uso de memoria.</p>
                <p><strong>Estrategias:</strong></p>
                <ul>
                    <li><strong>División fija:</strong> Cada pila tiene espacio fijo (puede desperdiciar memoria)</li>
                    <li><strong>División dinámica:</strong> Las pilas crecen según necesidad (más complejo)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Dos Pilas en un Arreglo</h4>
                <p>Caso especial eficiente:</p>
                <ul>
                    <li>Pila 1 crece desde el inicio (índice 0)</li>
                    <li>Pila 2 crece desde el final (índice n-1)</li>
                    <li>Overflow solo cuando se encuentran</li>
                    <li>Uso óptimo del espacio</li>
                </ul>
            </div>
        `,
        visualizacion: 'n-pilas-viz',
        codigo: `class DosPilas:
    """Dos pilas en un solo arreglo"""
    def __init__(self, capacidad):
        self.arr = [None] * capacidad
        self.capacidad = capacidad
        self.cima1 = -1  # Pila 1 crece hacia la derecha
        self.cima2 = capacidad  # Pila 2 crece hacia la izquierda
    
    def push1(self, dato):
        """Push en pila 1"""
        if self.cima1 + 1 == self.cima2:
            raise OverflowError("Stack Overflow")
        self.cima1 += 1
        self.arr[self.cima1] = dato
        print(f"✓ Push1({dato})")
    
    def push2(self, dato):
        """Push en pila 2"""
        if self.cima1 + 1 == self.cima2:
            raise OverflowError("Stack Overflow")
        self.cima2 -= 1
        self.arr[self.cima2] = dato
        print(f"✓ Push2({dato})")
    
    def pop1(self):
        """Pop de pila 1"""
        if self.cima1 == -1:
            raise IndexError("Pila 1 vacía")
        dato = self.arr[self.cima1]
        self.cima1 -= 1
        print(f"✓ Pop1() = {dato}")
        return dato
    
    def pop2(self):
        """Pop de pila 2"""
        if self.cima2 == self.capacidad:
            raise IndexError("Pila 2 vacía")
        dato = self.arr[self.cima2]
        self.cima2 += 1
        print(f"✓ Pop2() = {dato}")
        return dato
    
    def mostrar(self):
        """Visualizar ambas pilas"""
        pila1 = [str(self.arr[i]) for i in range(self.cima1 + 1)]
        pila2 = [str(self.arr[i]) for i in range(self.cima2, self.capacidad)]
        print(f"Pila1: [{', '.join(pila1)}]")
        print(f"Pila2: [{', '.join(pila2)}]")
        print(f"Espacio libre: {self.cima2 - self.cima1 - 1}\\n")

# Demostración
print("=== Dos Pilas en un Arreglo ===\\n")
pilas = DosPilas(10)

pilas.push1(1)
pilas.push1(2)
pilas.push1(3)
pilas.mostrar()

pilas.push2(10)
pilas.push2(20)
pilas.push2(30)
pilas.mostrar()

pilas.pop1()
pilas.pop2()
pilas.mostrar()

# N-Pilas con división fija
class NPilasFijas:
    """N pilas con división fija del arreglo"""
    def __init__(self, n_pilas, capacidad_total):
        self.n = n_pilas
        self.capacidad_total = capacidad_total
        self.capacidad_por_pila = capacidad_total // n_pilas
        self.arr = [None] * capacidad_total
        self.cimas = [-1] * n_pilas
    
    def push(self, num_pila, dato):
        """Push en pila específica"""
        if num_pila < 0 or num_pila >= self.n:
            raise ValueError("Número de pila inválido")
        
        if self.cimas[num_pila] + 1 >= self.capacidad_por_pila:
            raise OverflowError(f"Pila {num_pila} llena")
        
        inicio = num_pila * self.capacidad_por_pila
        self.cimas[num_pila] += 1
        self.arr[inicio + self.cimas[num_pila]] = dato
        print(f"✓ Push en pila {num_pila}: {dato}")
    
    def pop(self, num_pila):
        """Pop de pila específica"""
        if num_pila < 0 or num_pila >= self.n:
            raise ValueError("Número de pila inválido")
        
        if self.cimas[num_pila] == -1:
            raise IndexError(f"Pila {num_pila} vacía")
        
        inicio = num_pila * self.capacidad_por_pila
        dato = self.arr[inicio + self.cimas[num_pila]]
        self.cimas[num_pila] -= 1
        print(f"✓ Pop de pila {num_pila}: {dato}")
        return dato

print("\\n=== 3 Pilas en un Arreglo ===\\n")
tres_pilas = NPilasFijas(3, 12)

tres_pilas.push(0, 1)
tres_pilas.push(0, 2)
tres_pilas.push(1, 10)
tres_pilas.push(1, 20)
tres_pilas.push(2, 100)
tres_pilas.push(2, 200)

tres_pilas.pop(0)
tres_pilas.pop(1)
tres_pilas.pop(2)`
    },
    
    'colas-concepto': {
        titulo: 'Concepto de Colas (FIFO)',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p><strong>Cola (Queue):</strong> Estructura de datos lineal que sigue el principio FIFO (First In, First Out).</p>
                <p>El primer elemento en entrar es el primero en salir, como una fila de personas.</p>
            </div>
            <div class="info-card">
                <h4>Operaciones Fundamentales</h4>
                <ul>
                    <li><strong>Enqueue (Encolar):</strong> O(1) - Agregar elemento al final</li>
                    <li><strong>Dequeue (Desencolar):</strong> O(1) - Eliminar y retornar elemento del frente</li>
                    <li><strong>Front (Ver frente):</strong> O(1) - Ver elemento del frente sin eliminarlo</li>
                    <li><strong>Rear (Ver final):</strong> O(1) - Ver elemento del final</li>
                    <li><strong>isEmpty:</strong> O(1) - Verificar si está vacía</li>
                    <li><strong>size:</strong> O(1) - Obtener cantidad de elementos</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Aplicaciones Reales</h4>
                <ul>
                    <li>Sistemas de impresión (cola de trabajos)</li>
                    <li>Procesamiento de tareas (task scheduling)</li>
                    <li>BFS en grafos</li>
                    <li>Buffers de comunicación</li>
                    <li>Simulación de sistemas de atención</li>
                    <li>Manejo de solicitudes en servidores</li>
                </ul>
            </div>
        `,
        visualizacion: 'cola-viz',
        codigo: `class Cola:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        """O(1) - Encolar al final"""
        self.items.append(item)
        print(f"✓ Enqueue: {item}")
    
    def dequeue(self):
        """O(n) con lista Python - Eliminar del frente"""
        if self.is_empty():
            raise IndexError("Dequeue de cola vacía")
        item = self.items.pop(0)
        print(f"✓ Dequeue: {item}")
        return item
    
    def front(self):
        """O(1) - Ver frente"""
        if self.is_empty():
            return None
        return self.items[0]
    
    def rear(self):
        """O(1) - Ver final"""
        if self.is_empty():
            return None
        return self.items[-1]
    
    def is_empty(self):
        """O(1) - Verificar si está vacía"""
        return len(self.items) == 0
    
    def size(self):
        """O(1) - Obtener tamaño"""
        return len(self.items)
    
    def mostrar(self):
        """Visualizar cola"""
        if self.is_empty():
            return "Cola vacía"
        return "FRENTE → " + " | ".join(str(x) for x in self.items) + " ← FINAL"

# Demostración
print("=== Demostración de Cola FIFO ===\\n")
cola = Cola()

# Encolar elementos
cola.enqueue(1)
cola.enqueue(2)
cola.enqueue(3)
cola.enqueue(4)

print(f"\\nCola: {cola.mostrar()}")
print(f"Tamaño: {cola.size()}")
print(f"Frente: {cola.front()}")
print(f"Final: {cola.rear()}")

# Desencolar
print("\\n--- Desencolando ---")
cola.dequeue()
cola.dequeue()

print(f"\\nCola: {cola.mostrar()}")
print(f"Nuevo frente: {cola.front()}")

# Aplicación: Simulación de atención al cliente
from collections import deque

class SistemaAtencion:
    def __init__(self):
        self.cola = deque()
        self.numero_ticket = 1
    
    def llegar_cliente(self, nombre):
        """Cliente llega y recibe ticket"""
        ticket = self.numero_ticket
        self.numero_ticket += 1
        self.cola.append((ticket, nombre))
        print(f"✓ Cliente {nombre} recibió ticket #{ticket}")
        return ticket
    
    def atender_siguiente(self):
        """Atender al siguiente cliente"""
        if not self.cola:
            print("✗ No hay clientes en espera")
            return None
        ticket, nombre = self.cola.popleft()
        print(f"✓ Atendiendo a {nombre} (ticket #{ticket})")
        return (ticket, nombre)
    
    def clientes_en_espera(self):
        """Mostrar clientes en espera"""
        if not self.cola:
            return "No hay clientes en espera"
        return f"{len(self.cola)} clientes: " + ", ".join(f"{n}(#{t})" for t, n in self.cola)

print("\\n=== Simulación de Atención al Cliente ===\\n")
sistema = SistemaAtencion()

# Clientes llegan
sistema.llegar_cliente("Juan")
sistema.llegar_cliente("María")
sistema.llegar_cliente("Pedro")
sistema.llegar_cliente("Ana")

print(f"\\n{sistema.clientes_en_espera()}\\n")

# Atender clientes
sistema.atender_siguiente()
sistema.atender_siguiente()

print(f"\\n{sistema.clientes_en_espera()}")`
    },
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = temasPilasColas;
}

    
    'colas-nc': {
        titulo: 'Colas No Circulares (CNC)',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Cola implementada con arreglo donde los índices avanzan linealmente sin reutilizar espacio.</p>
                <p><strong>Problema:</strong> Desperdicio de espacio cuando el frente avanza.</p>
                <p><strong>Variables:</strong></p>
                <ul>
                    <li><strong>frente:</strong> Índice del primer elemento</li>
                    <li><strong>final:</strong> Índice del último elemento</li>
                    <li>Cuando frente > final, la cola está vacía</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Operaciones</h4>
                <ul>
                    <li><strong>enqueue(x):</strong> O(1) - arr[++final] = x</li>
                    <li><strong>dequeue():</strong> O(1) - return arr[frente++]</li>
                    <li><strong>Limitación:</strong> Cuando final llega al límite, no se puede agregar más aunque haya espacio al inicio</li>
                </ul>
            </div>
        `,
        visualizacion: 'cola-nc-viz',
        codigo: `class ColaNoCircular:
    def __init__(self, capacidad):
        self.arr = [None] * capacidad
        self.capacidad = capacidad
        self.frente = 0
        self.final = -1
        self.tamano = 0
    
    def enqueue(self, dato):
        """O(1) - Encolar"""
        if self.final + 1 >= self.capacidad:
            raise OverflowError("Cola llena (no circular)")
        
        self.final += 1
        self.arr[self.final] = dato
        self.tamano += 1
        print(f"✓ Enqueue: {dato} en posición {self.final}")
    
    def dequeue(self):
        """O(1) - Desencolar"""
        if self.is_empty():
            raise IndexError("Cola vacía")
        
        dato = self.arr[self.frente]
        self.arr[self.frente] = None  # Limpiar
        self.frente += 1
        self.tamano -= 1
        print(f"✓ Dequeue: {dato} de posición {self.frente-1}")
        return dato
    
    def front(self):
        if self.is_empty():
            return None
        return self.arr[self.frente]
    
    def is_empty(self):
        return self.tamano == 0
    
    def is_full(self):
        return self.final + 1 >= self.capacidad
    
    def mostrar(self):
        """Visualizar cola y espacio desperdiciado"""
        visual = []
        for i in range(self.capacidad):
            if i < self.frente:
                visual.append("X")  # Espacio desperdiciado
            elif i <= self.final:
                visual.append(str(self.arr[i]))
            else:
                visual.append("_")  # Espacio libre
        
        print(f"Array: [{' | '.join(visual)}]")
        print(f"Frente: {self.frente}, Final: {self.final}")
        print(f"Desperdiciado: {self.frente}, Usado: {self.tamano}, Libre: {self.capacidad - self.final - 1}\\n")

# Demostración del problema
print("=== Cola No Circular - Problema de Desperdicio ===\\n")
cola = ColaNoCircular(8)

# Encolar elementos
for i in range(1, 6):
    cola.enqueue(i * 10)
cola.mostrar()

# Desencolar algunos
print("--- Desencolando 3 elementos ---")
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.mostrar()

# Intentar encolar más
print("--- Encolando más elementos ---")
cola.enqueue(60)
cola.enqueue(70)
cola.enqueue(80)
cola.mostrar()

# Ahora está "llena" aunque hay espacio al inicio
print("--- Intentando encolar más ---")
try:
    cola.enqueue(90)
except OverflowError as e:
    print(f"✗ Error: {e}")
    print("¡Hay 3 espacios libres al inicio pero no se pueden usar!\\n")

cola.mostrar()`
    },
    
    'colas-circulares': {
        titulo: 'Colas Circulares (CC)',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Cola que reutiliza el espacio del arreglo de forma circular, resolviendo el problema de las colas no circulares.</p>
                <p><strong>Ventaja:</strong> Uso eficiente del espacio - cuando final llega al límite, continúa desde el inicio.</p>
            </div>
            <div class="info-card">
                <h4>Implementación</h4>
                <p><strong>Aritmética modular:</strong></p>
                <ul>
                    <li><strong>enqueue:</strong> final = (final + 1) % capacidad</li>
                    <li><strong>dequeue:</strong> frente = (frente + 1) % capacidad</li>
                    <li><strong>Condición llena:</strong> (final + 1) % capacidad == frente</li>
                    <li><strong>Condición vacía:</strong> frente == final (con contador)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Estrategias para Detectar Cola Llena</h4>
                <ul>
                    <li><strong>Opción 1:</strong> Dejar un espacio vacío (desperdicia 1 posición)</li>
                    <li><strong>Opción 2:</strong> Usar contador de elementos (más eficiente)</li>
                    <li><strong>Opción 3:</strong> Usar bandera booleana</li>
                </ul>
            </div>
        `,
        visualizacion: 'cola-circular-viz',
        codigo: `class ColaCircular:
    def __init__(self, capacidad):
        self.arr = [None] * capacidad
        self.capacidad = capacidad
        self.frente = 0
        self.final = 0
        self.tamano = 0
    
    def enqueue(self, dato):
        """O(1) - Encolar con aritmética modular"""
        if self.is_full():
            raise OverflowError("Cola circular llena")
        
        self.arr[self.final] = dato
        self.final = (self.final + 1) % self.capacidad
        self.tamano += 1
        print(f"✓ Enqueue: {dato} en posición {(self.final - 1) % self.capacidad}")
    
    def dequeue(self):
        """O(1) - Desencolar con aritmética modular"""
        if self.is_empty():
            raise IndexError("Cola circular vacía")
        
        dato = self.arr[self.frente]
        self.arr[self.frente] = None
        pos_anterior = self.frente
        self.frente = (self.frente + 1) % self.capacidad
        self.tamano -= 1
        print(f"✓ Dequeue: {dato} de posición {pos_anterior}")
        return dato
    
    def front(self):
        if self.is_empty():
            return None
        return self.arr[self.frente]
    
    def rear(self):
        if self.is_empty():
            return None
        return self.arr[(self.final - 1) % self.capacidad]
    
    def is_empty(self):
        return self.tamano == 0
    
    def is_full(self):
        return self.tamano == self.capacidad
    
    def mostrar(self):
        """Visualizar cola circular"""
        visual = []
        for i in range(self.capacidad):
            if self.arr[i] is not None:
                marcador = ""
                if i == self.frente and i == (self.final - 1) % self.capacidad:
                    marcador = "F/R"
                elif i == self.frente:
                    marcador = "F"
                elif i == (self.final - 1) % self.capacidad:
                    marcador = "R"
                visual.append(f"{self.arr[i]}{marcador}")
            else:
                visual.append("_")
        
        print(f"Array circular: [{' | '.join(visual)}]")
        print(f"Frente: {self.frente}, Final: {self.final}, Tamaño: {self.tamano}\\n")

# Demostración de reutilización de espacio
print("=== Cola Circular - Reutilización de Espacio ===\\n")
cola = ColaCircular(6)

# Encolar elementos
print("--- Fase 1: Encolar 4 elementos ---")
for i in range(1, 5):
    cola.enqueue(i * 10)
cola.mostrar()

# Desencolar algunos
print("--- Fase 2: Desencolar 3 elementos ---")
for _ in range(3):
    cola.dequeue()
cola.mostrar()

# Encolar más (reutilizando espacio)
print("--- Fase 3: Encolar 4 elementos más (reutiliza espacio) ---")
for i in range(5, 9):
    cola.enqueue(i * 10)
cola.mostrar()

# Demostrar que está llena
print("--- Fase 4: Intentar encolar en cola llena ---")
try:
    cola.enqueue(100)
except OverflowError as e:
    print(f"✗ Error: {e}\\n")

# Desencolar todo
print("--- Fase 5: Desencolar todo ---")
while not cola.is_empty():
    cola.dequeue()
cola.mostrar()

# Aplicación: Buffer circular
class BufferCircular:
    """Buffer circular para streaming de datos"""
    def __init__(self, capacidad):
        self.buffer = ColaCircular(capacidad)
    
    def escribir(self, dato):
        """Escribir dato (sobrescribe si está lleno)"""
        if self.buffer.is_full():
            self.buffer.dequeue()  # Eliminar el más antiguo
        self.buffer.enqueue(dato)
    
    def leer_todo(self):
        """Leer todos los datos disponibles"""
        datos = []
        while not self.buffer.is_empty():
            datos.append(self.buffer.dequeue())
        return datos

print("\\n=== Aplicación: Buffer Circular ===")
buffer = BufferCircular(5)

# Simular streaming
print("Escribiendo datos al buffer...")
for i in range(8):
    buffer.escribir(f"dato_{i}")
    print(f"  Escribió: dato_{i}")

print(f"\\nLeyendo buffer: {buffer.leer_todo()}")`
    },
    
    'colas-listas': {
        titulo: 'Colas con Listas Ligadas',
        teoria: `
            <div class="info-card">
                <h4>Implementación con Lista Ligada</h4>
                <p>Cola implementada con lista simplemente ligada donde:</p>
                <ul>
                    <li><strong>Frente:</strong> Cabeza de la lista (para dequeue O(1))</li>
                    <li><strong>Final:</strong> Cola de la lista (para enqueue O(1))</li>
                    <li>Se mantienen dos punteros: frente y final</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Ventajas vs Arreglo</h4>
                <ul>
                    <li>✅ Tamaño dinámico (no hay overflow)</li>
                    <li>✅ No desperdicia espacio</li>
                    <li>✅ Enqueue y Dequeue siempre O(1)</li>
                    <li>❌ Overhead de punteros</li>
                    <li>❌ Peor localidad de caché</li>
                </ul>
            </div>
        `,
        visualizacion: 'cola-lista-viz',
        codigo: `class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None

class ColaLigada:
    def __init__(self):
        self.frente = None
        self.final = None
        self.tamano = 0
    
    def enqueue(self, dato):
        """O(1) - Insertar al final de la lista"""
        nuevo = Nodo(dato)
        
        if self.is_empty():
            # Primer elemento
            self.frente = self.final = nuevo
        else:
            # Agregar al final
            self.final.siguiente = nuevo
            self.final = nuevo
        
        self.tamano += 1
        print(f"✓ Enqueue: {dato}")
    
    def dequeue(self):
        """O(1) - Eliminar del frente de la lista"""
        if self.is_empty():
            raise IndexError("Cola vacía")
        
        dato = self.frente.dato
        self.frente = self.frente.siguiente
        
        # Si la cola queda vacía, actualizar final
        if self.frente is None:
            self.final = None
        
        self.tamano -= 1
        print(f"✓ Dequeue: {dato}")
        return dato
    
    def front(self):
        """O(1) - Ver frente"""
        if self.is_empty():
            return None
        return self.frente.dato
    
    def rear(self):
        """O(1) - Ver final"""
        if self.is_empty():
            return None
        return self.final.dato
    
    def is_empty(self):
        return self.frente is None
    
    def size(self):
        return self.tamano
    
    def mostrar(self):
        """Visualizar cola"""
        if self.is_empty():
            return "Cola vacía"
        
        elementos = []
        actual = self.frente
        while actual:
            elementos.append(str(actual.dato))
            actual = actual.siguiente
        
        return "FRENTE → " + " → ".join(elementos) + " ← FINAL"

# Demostración
print("=== Cola con Lista Ligada ===\\n")
cola = ColaLigada()

# Encolar elementos
print("--- Encolando ---")
for i in range(1, 6):
    cola.enqueue(i * 10)
    print(f"    {cola.mostrar()}")

print(f"\\nTamaño: {cola.size()}")
print(f"Frente: {cola.front()}")
print(f"Final: {cola.rear()}")

# Desencolar
print("\\n--- Desencolando ---")
for _ in range(3):
    cola.dequeue()
    print(f"    {cola.mostrar()}")

# Mezclar operaciones
print("\\n--- Mezclando operaciones ---")
cola.enqueue(60)
print(f"    {cola.mostrar()}")
cola.dequeue()
print(f"    {cola.mostrar()}")
cola.enqueue(70)
cola.enqueue(80)
print(f"    {cola.mostrar()}")

# Comparación de implementaciones
from collections import deque

print("\\n=== Comparación de Implementaciones ===")
print("\\n1. Lista Python (ineficiente):")
print("   - enqueue: O(1) con append()")
print("   - dequeue: O(n) con pop(0)")

print("\\n2. collections.deque (eficiente):")
print("   - enqueue: O(1) con append()")
print("   - dequeue: O(1) con popleft()")
print("   - Implementada con lista doblemente ligada")

print("\\n3. Cola con Lista Ligada (nuestra):")
print("   - enqueue: O(1)")
print("   - dequeue: O(1)")
print("   - Control total de la implementación")

# Uso de deque
cola_deque = deque()
cola_deque.append(1)
cola_deque.append(2)
cola_deque.append(3)
print(f"\\nDeque: {list(cola_deque)}")
print(f"Dequeue: {cola_deque.popleft()}")
print(f"Deque: {list(cola_deque)}")`
    },
    
    'n-colas': {
        titulo: 'Arreglo con N-Colas',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Técnica para implementar múltiples colas en un solo arreglo.</p>
                <p><strong>Estrategias:</strong></p>
                <ul>
                    <li><strong>División fija:</strong> Cada cola tiene espacio fijo</li>
                    <li><strong>División dinámica:</strong> Las colas comparten espacio dinámicamente</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Dos Colas en un Arreglo</h4>
                <p>Implementación eficiente:</p>
                <ul>
                    <li>Cola 1: Crece de izquierda a derecha</li>
                    <li>Cola 2: Crece de derecha a izquierda</li>
                    <li>Overflow solo cuando se encuentran</li>
                </ul>
            </div>
        `,
        visualizacion: 'n-colas-viz',
        codigo: `class DosColas:
    """Dos colas en un solo arreglo"""
    def __init__(self, capacidad):
        self.arr = [None] * capacidad
        self.capacidad = capacidad
        
        # Cola 1: crece hacia la derecha
        self.frente1 = 0
        self.final1 = -1
        self.tamano1 = 0
        
        # Cola 2: crece hacia la izquierda
        self.frente2 = capacidad - 1
        self.final2 = capacidad
        self.tamano2 = 0
    
    def enqueue1(self, dato):
        """Encolar en cola 1"""
        if self.final1 + 1 == self.frente2:
            raise OverflowError("Colas llenas")
        
        self.final1 += 1
        self.arr[self.final1] = dato
        self.tamano1 += 1
        print(f"✓ Enqueue1({dato})")
    
    def enqueue2(self, dato):
        """Encolar en cola 2"""
        if self.final2 - 1 == self.final1:
            raise OverflowError("Colas llenas")
        
        self.final2 -= 1
        self.arr[self.final2] = dato
        self.tamano2 += 1
        print(f"✓ Enqueue2({dato})")
    
    def dequeue1(self):
        """Desencolar de cola 1"""
        if self.tamano1 == 0:
            raise IndexError("Cola 1 vacía")
        
        dato = self.arr[self.frente1]
        self.frente1 += 1
        self.tamano1 -= 1
        
        # Resetear si queda vacía
        if self.tamano1 == 0:
            self.frente1 = 0
            self.final1 = -1
        
        print(f"✓ Dequeue1() = {dato}")
        return dato
    
    def dequeue2(self):
        """Desencolar de cola 2"""
        if self.tamano2 == 0:
            raise IndexError("Cola 2 vacía")
        
        dato = self.arr[self.frente2]
        self.frente2 -= 1
        self.tamano2 -= 1
        
        # Resetear si queda vacía
        if self.tamano2 == 0:
            self.frente2 = self.capacidad - 1
            self.final2 = self.capacidad
        
        print(f"✓ Dequeue2() = {dato}")
        return dato
    
    def mostrar(self):
        """Visualizar ambas colas"""
        visual = []
        for i in range(self.capacidad):
            if self.frente1 <= i <= self.final1:
                visual.append(f"C1:{self.arr[i]}")
            elif self.final2 <= i <= self.frente2:
                visual.append(f"C2:{self.arr[i]}")
            else:
                visual.append("_")
        
        print(f"Array: [{' | '.join(visual)}]")
        print(f"Cola1: Tamaño={self.tamano1}, Cola2: Tamaño={self.tamano2}")
        print(f"Espacio libre: {self.final2 - self.final1 - 1}\\n")

# Demostración
print("=== Dos Colas en un Arreglo ===\\n")
colas = DosColas(12)

# Operaciones en ambas colas
print("--- Encolando en ambas colas ---")
colas.enqueue1(10)
colas.enqueue1(20)
colas.enqueue1(30)
colas.mostrar()

colas.enqueue2(100)
colas.enqueue2(200)
colas.enqueue2(300)
colas.mostrar()

print("--- Desencolando ---")
colas.dequeue1()
colas.dequeue2()
colas.mostrar()

print("--- Encolando más ---")
colas.enqueue1(40)
colas.enqueue1(50)
colas.enqueue2(400)
colas.enqueue2(500)
colas.mostrar()

# N-Colas con división fija
class NColasFijas:
    """N colas con división fija"""
    def __init__(self, n_colas, capacidad_total):
        self.n = n_colas
        self.capacidad_total = capacidad_total
        self.capacidad_por_cola = capacidad_total // n_colas
        self.arr = [None] * capacidad_total
        
        # Arrays de frentes y finales
        self.frentes = [i * self.capacidad_por_cola for i in range(n_colas)]
        self.finales = [i * self.capacidad_por_cola - 1 for i in range(n_colas)]
        self.tamanos = [0] * n_colas
    
    def enqueue(self, num_cola, dato):
        """Encolar en cola específica"""
        if num_cola < 0 or num_cola >= self.n:
            raise ValueError("Número de cola inválido")
        
        if self.tamanos[num_cola] >= self.capacidad_por_cola:
            raise OverflowError(f"Cola {num_cola} llena")
        
        inicio = num_cola * self.capacidad_por_cola
        self.finales[num_cola] += 1
        self.arr[self.finales[num_cola]] = dato
        self.tamanos[num_cola] += 1
        print(f"✓ Enqueue en cola {num_cola}: {dato}")
    
    def dequeue(self, num_cola):
        """Desencolar de cola específica"""
        if num_cola < 0 or num_cola >= self.n:
            raise ValueError("Número de cola inválido")
        
        if self.tamanos[num_cola] == 0:
            raise IndexError(f"Cola {num_cola} vacía")
        
        dato = self.arr[self.frentes[num_cola]]
        self.frentes[num_cola] += 1
        self.tamanos[num_cola] -= 1
        print(f"✓ Dequeue de cola {num_cola}: {dato}")
        return dato

print("\\n=== 3 Colas en un Arreglo ===\\n")
tres_colas = NColasFijas(3, 15)

# Usar las 3 colas
tres_colas.enqueue(0, 1)
tres_colas.enqueue(0, 2)
tres_colas.enqueue(1, 10)
tres_colas.enqueue(1, 20)
tres_colas.enqueue(2, 100)
tres_colas.enqueue(2, 200)

print()
tres_colas.dequeue(0)
tres_colas.dequeue(1)
tres_colas.dequeue(2)`
    }
};
