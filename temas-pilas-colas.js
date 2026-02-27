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
