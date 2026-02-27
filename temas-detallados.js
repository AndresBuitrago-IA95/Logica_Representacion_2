// Contenido detallado para cada tema individual
const temasDetallados = {
    // LISTAS LIGADAS - Temas individuales
    'lista-simple': {
        titulo: 'Lista Simplemente Ligada',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Estructura lineal donde cada nodo contiene un dato y un puntero al siguiente nodo.</p>
                <p><strong>Estructura del Nodo:</strong></p>
                <pre>class Nodo:
    dato: cualquier tipo
    siguiente: Nodo | None</pre>
            </div>
            <div class="info-card">
                <h4>Operaciones Principales</h4>
                <ul>
                    <li><strong>insertar_inicio(dato):</strong> O(1) - Crea nuevo nodo, apunta a cabeza actual, actualiza cabeza</li>
                    <li><strong>insertar_final(dato):</strong> O(n) - Recorre hasta el último nodo, agrega nuevo</li>
                    <li><strong>insertar_posicion(dato, pos):</strong> O(n) - Recorre hasta pos-1, inserta</li>
                    <li><strong>eliminar_inicio():</strong> O(1) - Mueve cabeza al siguiente</li>
                    <li><strong>eliminar_final():</strong> O(n) - Recorre hasta penúltimo, elimina último</li>
                    <li><strong>buscar(dato):</strong> O(n) - Recorre comparando cada nodo</li>
                    <li><strong>mostrar():</strong> O(n) - Recorre e imprime todos los nodos</li>
                </ul>
            </div>
        `,
        visualizacion: 'lista-simple-viz',
        codigo: `class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None

class ListaSimple:
    def __init__(self):
        self.cabeza = None
        self.tamano = 0
    
    def insertar_inicio(self, dato):
        """O(1) - Inserción al inicio"""
        nuevo = Nodo(dato)
        nuevo.siguiente = self.cabeza
        self.cabeza = nuevo
        self.tamano += 1
        print(f"✓ Insertado {dato} al inicio")
    
    def insertar_final(self, dato):
        """O(n) - Inserción al final"""
        nuevo = Nodo(dato)
        if not self.cabeza:
            self.cabeza = nuevo
        else:
            actual = self.cabeza
            while actual.siguiente:
                actual = actual.siguiente
            actual.siguiente = nuevo
        self.tamano += 1
        print(f"✓ Insertado {dato} al final")
    
    def insertar_posicion(self, dato, pos):
        """O(n) - Inserción en posición específica"""
        if pos == 0:
            self.insertar_inicio(dato)
            return
        
        nuevo = Nodo(dato)
        actual = self.cabeza
        for _ in range(pos - 1):
            if not actual:
                print("✗ Posición fuera de rango")
                return
            actual = actual.siguiente
        
        nuevo.siguiente = actual.siguiente
        actual.siguiente = nuevo
        self.tamano += 1
        print(f"✓ Insertado {dato} en posición {pos}")
    
    def eliminar_inicio(self):
        """O(1) - Eliminación del inicio"""
        if not self.cabeza:
            print("✗ Lista vacía")
            return None
        dato = self.cabeza.dato
        self.cabeza = self.cabeza.siguiente
        self.tamano -= 1
        print(f"✓ Eliminado {dato} del inicio")
        return dato
    
    def buscar(self, dato):
        """O(n) - Búsqueda lineal"""
        actual = self.cabeza
        pos = 0
        while actual:
            if actual.dato == dato:
                print(f"✓ Encontrado {dato} en posición {pos}")
                return pos
            actual = actual.siguiente
            pos += 1
        print(f"✗ {dato} no encontrado")
        return -1
    
    def mostrar(self):
        """O(n) - Mostrar todos los elementos"""
        if not self.cabeza:
            return "Lista vacía"
        elementos = []
        actual = self.cabeza
        while actual:
            elementos.append(str(actual.dato))
            actual = actual.siguiente
        return " → ".join(elementos) + " → NULL"

# Demostración
lista = ListaSimple()
lista.insertar_inicio(3)
lista.insertar_inicio(2)
lista.insertar_inicio(1)
lista.insertar_final(4)
print("\\nLista:", lista.mostrar())
print(f"Tamaño: {lista.tamano}")
lista.buscar(3)
lista.eliminar_inicio()
print("Después de eliminar:", lista.mostrar())`
    },

    'lista-doble': {
        titulo: 'Lista Doblemente Ligada',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Cada nodo tiene dos punteros: uno al siguiente y otro al anterior, permitiendo recorrido bidireccional.</p>
                <p><strong>Estructura del Nodo:</strong></p>
                <pre>class NodoDoble:
    dato: cualquier tipo
    siguiente: NodoDoble | None
    anterior: NodoDoble | None</pre>
                <p><strong>Ventajas:</strong> Recorrido en ambas direcciones, eliminación más eficiente</p>
                <p><strong>Desventajas:</strong> Mayor uso de memoria (dos punteros por nodo)</p>
            </div>
            <div class="info-card">
                <h4>Operaciones Principales</h4>
                <ul>
                    <li><strong>insertar_inicio(dato):</strong> O(1) - Actualiza cabeza y enlaces bidireccionales</li>
                    <li><strong>insertar_final(dato):</strong> O(1) con cola, O(n) sin cola</li>
                    <li><strong>eliminar_nodo(nodo):</strong> O(1) - Actualiza enlaces de vecinos</li>
                    <li><strong>recorrer_adelante():</strong> O(n) - Desde cabeza hasta NULL</li>
                    <li><strong>recorrer_atras():</strong> O(n) - Desde cola hasta NULL</li>
                </ul>
            </div>
        `,
        visualizacion: 'lista-doble-viz',
        codigo: `class NodoDoble:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None
        self.anterior = None

class ListaDoble:
    def __init__(self):
        self.cabeza = None
        self.cola = None
        self.tamano = 0
    
    def insertar_inicio(self, dato):
        """O(1) - Inserción al inicio"""
        nuevo = NodoDoble(dato)
        if not self.cabeza:
            self.cabeza = self.cola = nuevo
        else:
            nuevo.siguiente = self.cabeza
            self.cabeza.anterior = nuevo
            self.cabeza = nuevo
        self.tamano += 1
        print(f"✓ Insertado {dato} al inicio")
    
    def insertar_final(self, dato):
        """O(1) - Inserción al final con puntero cola"""
        nuevo = NodoDoble(dato)
        if not self.cola:
            self.cabeza = self.cola = nuevo
        else:
            nuevo.anterior = self.cola
            self.cola.siguiente = nuevo
            self.cola = nuevo
        self.tamano += 1
        print(f"✓ Insertado {dato} al final")
    
    def eliminar_nodo(self, dato):
        """O(n) búsqueda + O(1) eliminación"""
        actual = self.cabeza
        while actual:
            if actual.dato == dato:
                # Caso: nodo en el medio
                if actual.anterior:
                    actual.anterior.siguiente = actual.siguiente
                else:  # Es la cabeza
                    self.cabeza = actual.siguiente
                
                if actual.siguiente:
                    actual.siguiente.anterior = actual.anterior
                else:  # Es la cola
                    self.cola = actual.anterior
                
                self.tamano -= 1
                print(f"✓ Eliminado {dato}")
                return True
            actual = actual.siguiente
        print(f"✗ {dato} no encontrado")
        return False
    
    def mostrar_adelante(self):
        """O(n) - Recorrido hacia adelante"""
        if not self.cabeza:
            return "Lista vacía"
        elementos = []
        actual = self.cabeza
        while actual:
            elementos.append(str(actual.dato))
            actual = actual.siguiente
        return " ⇄ ".join(elementos)
    
    def mostrar_atras(self):
        """O(n) - Recorrido hacia atrás"""
        if not self.cola:
            return "Lista vacía"
        elementos = []
        actual = self.cola
        while actual:
            elementos.append(str(actual.dato))
            actual = actual.anterior
        return " ⇄ ".join(elementos)

# Demostración
lista = ListaDoble()
lista.insertar_final(1)
lista.insertar_final(2)
lista.insertar_final(3)
lista.insertar_inicio(0)
print("\\nAdelante:", lista.mostrar_adelante())
print("Atrás:", lista.mostrar_atras())
lista.eliminar_nodo(2)
print("Después de eliminar 2:", lista.mostrar_adelante())`
    },
    
    'lista-circular': {
        titulo: 'Lista Circular',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>El último nodo apunta al primero, formando un ciclo. Puede ser simple o doble.</p>
                <p><strong>Característica clave:</strong> No hay NULL al final, último.siguiente = cabeza</p>
                <p><strong>Aplicaciones:</strong> Round-robin scheduling, buffers circulares, listas de reproducción</p>
            </div>
            <div class="info-card">
                <h4>Operaciones Principales</h4>
                <ul>
                    <li><strong>insertar(dato):</strong> O(1) - Mantener el enlace circular</li>
                    <li><strong>recorrer():</strong> O(n) - Cuidado con ciclo infinito, usar contador</li>
                    <li><strong>eliminar(dato):</strong> O(n) - Actualizar enlace circular si es necesario</li>
                </ul>
                <p><strong>Precaución:</strong> Siempre verificar condición de parada para evitar ciclos infinitos</p>
            </div>
        `,
        visualizacion: 'lista-circular-viz',
        codigo: `class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None

class ListaCircular:
    def __init__(self):
        self.cabeza = None
        self.tamano = 0
    
    def insertar_final(self, dato):
        """O(n) - Inserción manteniendo circularidad"""
        nuevo = Nodo(dato)
        if not self.cabeza:
            self.cabeza = nuevo
            nuevo.siguiente = nuevo  # Apunta a sí mismo
        else:
            actual = self.cabeza
            # Recorrer hasta el último nodo
            while actual.siguiente != self.cabeza:
                actual = actual.siguiente
            actual.siguiente = nuevo
            nuevo.siguiente = self.cabeza  # Mantener circularidad
        self.tamano += 1
        print(f"✓ Insertado {dato}")
    
    def eliminar(self, dato):
        """O(n) - Eliminación manteniendo circularidad"""
        if not self.cabeza:
            print("✗ Lista vacía")
            return False
        
        actual = self.cabeza
        anterior = None
        
        # Caso especial: eliminar cabeza
        if actual.dato == dato:
            # Si es el único nodo
            if actual.siguiente == self.cabeza:
                self.cabeza = None
            else:
                # Encontrar el último nodo
                ultimo = self.cabeza
                while ultimo.siguiente != self.cabeza:
                    ultimo = ultimo.siguiente
                ultimo.siguiente = self.cabeza.siguiente
                self.cabeza = self.cabeza.siguiente
            self.tamano -= 1
            print(f"✓ Eliminado {dato}")
            return True
        
        # Buscar en el resto de la lista
        anterior = actual
        actual = actual.siguiente
        while actual != self.cabeza:
            if actual.dato == dato:
                anterior.siguiente = actual.siguiente
                self.tamano -= 1
                print(f"✓ Eliminado {dato}")
                return True
            anterior = actual
            actual = actual.siguiente
        
        print(f"✗ {dato} no encontrado")
        return False
    
    def mostrar(self):
        """O(n) - Mostrar con indicador de circularidad"""
        if not self.cabeza:
            return "Lista vacía"
        
        elementos = []
        actual = self.cabeza
        while True:
            elementos.append(str(actual.dato))
            actual = actual.siguiente
            if actual == self.cabeza:
                break
        return " → ".join(elementos) + " → (vuelve a " + str(self.cabeza.dato) + ")"
    
    def recorrer_n_veces(self, n):
        """Demostración de recorrido circular"""
        if not self.cabeza:
            return []
        
        elementos = []
        actual = self.cabeza
        for _ in range(n):
            elementos.append(actual.dato)
            actual = actual.siguiente
        return elementos

# Demostración
lista = ListaCircular()
lista.insertar_final(1)
lista.insertar_final(2)
lista.insertar_final(3)
lista.insertar_final(4)
print("\\nLista circular:", lista.mostrar())
print("Recorrer 10 elementos:", lista.recorrer_n_veces(10))
lista.eliminar(2)
print("Después de eliminar 2:", lista.mostrar())`
    },

    
    'lista-cabeza': {
        titulo: 'Lista con Registro Cabeza',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Lista que usa un nodo especial (cabeza/header) que no contiene datos útiles, solo apunta al primer elemento real.</p>
                <p><strong>Ventajas:</strong></p>
                <ul>
                    <li>Simplifica operaciones (no hay casos especiales para lista vacía)</li>
                    <li>Inserción y eliminación más uniformes</li>
                    <li>Puede almacenar metadata (tamaño, última modificación)</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Operaciones Principales</h4>
                <ul>
                    <li><strong>insertar(dato):</strong> O(1) al inicio, O(n) al final</li>
                    <li><strong>eliminar(dato):</strong> O(n) - Búsqueda + eliminación</li>
                    <li><strong>obtener_tamano():</strong> O(1) si se almacena en cabeza</li>
                </ul>
            </div>
        `,
        visualizacion: 'lista-cabeza-viz',
        codigo: `class Nodo:
    def __init__(self, dato=None):
        self.dato = dato
        self.siguiente = None

class ListaConCabeza:
    def __init__(self):
        # Nodo cabeza especial (no contiene datos útiles)
        self.cabeza = Nodo()
        self.cabeza.tamano = 0  # Metadata en la cabeza
    
    def insertar_inicio(self, dato):
        """O(1) - Inserción después de la cabeza"""
        nuevo = Nodo(dato)
        nuevo.siguiente = self.cabeza.siguiente
        self.cabeza.siguiente = nuevo
        self.cabeza.tamano += 1
        print(f"✓ Insertado {dato}")
    
    def insertar_final(self, dato):
        """O(n) - Inserción al final"""
        nuevo = Nodo(dato)
        actual = self.cabeza
        while actual.siguiente:
            actual = actual.siguiente
        actual.siguiente = nuevo
        self.cabeza.tamano += 1
        print(f"✓ Insertado {dato} al final")
    
    def eliminar(self, dato):
        """O(n) - Eliminación simplificada"""
        actual = self.cabeza
        while actual.siguiente:
            if actual.siguiente.dato == dato:
                actual.siguiente = actual.siguiente.siguiente
                self.cabeza.tamano -= 1
                print(f"✓ Eliminado {dato}")
                return True
            actual = actual.siguiente
        print(f"✗ {dato} no encontrado")
        return False
    
    def esta_vacia(self):
        """O(1) - Verificación simplificada"""
        return self.cabeza.siguiente is None
    
    def obtener_tamano(self):
        """O(1) - Tamaño almacenado en cabeza"""
        return self.cabeza.tamano
    
    def mostrar(self):
        """O(n) - Mostrar elementos (sin la cabeza)"""
        if self.esta_vacia():
            return "Lista vacía"
        elementos = []
        actual = self.cabeza.siguiente  # Saltar la cabeza
        while actual:
            elementos.append(str(actual.dato))
            actual = actual.siguiente
        return " → ".join(elementos)

# Demostración
lista = ListaConCabeza()
print("¿Está vacía?", lista.esta_vacia())
lista.insertar_inicio(3)
lista.insertar_inicio(2)
lista.insertar_inicio(1)
lista.insertar_final(4)
print("\\nLista:", lista.mostrar())
print("Tamaño:", lista.obtener_tamano())
lista.eliminar(2)
print("Después de eliminar 2:", lista.mostrar())
print("Tamaño:", lista.obtener_tamano())`
    },
    
    'multilistas': {
        titulo: 'Multilistas',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p>Estructura donde cada nodo puede pertenecer a múltiples listas simultáneamente mediante varios punteros.</p>
                <p><strong>Aplicaciones:</strong></p>
                <ul>
                    <li>Matrices dispersas (sparse matrices)</li>
                    <li>Bases de datos relacionales en memoria</li>
                    <li>Grafos con múltiples relaciones</li>
                    <li>Sistemas de archivos con múltiples índices</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Ejemplo: Estudiantes y Cursos</h4>
                <p>Un estudiante puede estar en múltiples cursos, y un curso tiene múltiples estudiantes.</p>
                <ul>
                    <li><strong>Lista por estudiante:</strong> Todos los cursos de un estudiante</li>
                    <li><strong>Lista por curso:</strong> Todos los estudiantes de un curso</li>
                </ul>
            </div>
        `,
        visualizacion: 'multilistas-viz',
        codigo: `class NodoEstudiante:
    def __init__(self, nombre, id):
        self.nombre = nombre
        self.id = id
        self.siguiente_estudiante = None
        self.cursos = None  # Lista de cursos del estudiante

class NodoCurso:
    def __init__(self, nombre, codigo):
        self.nombre = nombre
        self.codigo = codigo
        self.siguiente_curso = None
        self.estudiantes = None  # Lista de estudiantes en el curso

class NodoInscripcion:
    def __init__(self, estudiante, curso):
        self.estudiante = estudiante
        self.curso = curso
        self.siguiente_por_estudiante = None
        self.siguiente_por_curso = None

class Multilista:
    def __init__(self):
        self.estudiantes = None
        self.cursos = None
    
    def agregar_estudiante(self, nombre, id):
        """Agregar estudiante a la lista principal"""
        nuevo = NodoEstudiante(nombre, id)
        nuevo.siguiente_estudiante = self.estudiantes
        self.estudiantes = nuevo
        print(f"✓ Estudiante {nombre} agregado")
        return nuevo
    
    def agregar_curso(self, nombre, codigo):
        """Agregar curso a la lista principal"""
        nuevo = NodoCurso(nombre, codigo)
        nuevo.siguiente_curso = self.cursos
        self.cursos = nuevo
        print(f"✓ Curso {nombre} agregado")
        return nuevo
    
    def inscribir(self, estudiante, curso):
        """Inscribir estudiante en curso (multilista)"""
        inscripcion = NodoInscripcion(estudiante, curso)
        
        # Agregar a la lista de cursos del estudiante
        inscripcion.siguiente_por_estudiante = estudiante.cursos
        estudiante.cursos = inscripcion
        
        # Agregar a la lista de estudiantes del curso
        inscripcion.siguiente_por_curso = curso.estudiantes
        curso.estudiantes = inscripcion
        
        print(f"✓ {estudiante.nombre} inscrito en {curso.nombre}")
    
    def cursos_de_estudiante(self, estudiante):
        """Listar cursos de un estudiante"""
        cursos = []
        actual = estudiante.cursos
        while actual:
            cursos.append(actual.curso.nombre)
            actual = actual.siguiente_por_estudiante
        return cursos
    
    def estudiantes_de_curso(self, curso):
        """Listar estudiantes de un curso"""
        estudiantes = []
        actual = curso.estudiantes
        while actual:
            estudiantes.append(actual.estudiante.nombre)
            actual = actual.siguiente_por_curso
        return estudiantes

# Demostración
ml = Multilista()

# Crear estudiantes
juan = ml.agregar_estudiante("Juan", 1)
maria = ml.agregar_estudiante("María", 2)
pedro = ml.agregar_estudiante("Pedro", 3)

# Crear cursos
logica = ml.agregar_curso("Lógica y Representación II", "LOG2")
calculo = ml.agregar_curso("Cálculo III", "CAL3")

# Inscripciones
print("\\n--- Inscripciones ---")
ml.inscribir(juan, logica)
ml.inscribir(juan, calculo)
ml.inscribir(maria, logica)
ml.inscribir(pedro, calculo)

# Consultas
print("\\n--- Consultas ---")
print(f"Cursos de Juan: {ml.cursos_de_estudiante(juan)}")
print(f"Cursos de María: {ml.cursos_de_estudiante(maria)}")
print(f"Estudiantes en Lógica: {ml.estudiantes_de_curso(logica)}")
print(f"Estudiantes en Cálculo: {ml.estudiantes_de_curso(calculo)}")`
    },
    
    'listas-python': {
        titulo: 'Listas en Python',
        teoria: `
            <div class="info-card">
                <h4>Listas Nativas de Python</h4>
                <p>Python implementa listas como arrays dinámicos (no listas ligadas), optimizadas para acceso aleatorio.</p>
                <p><strong>Características:</strong></p>
                <ul>
                    <li>Tamaño dinámico automático</li>
                    <li>Acceso O(1) por índice</li>
                    <li>Pueden contener tipos mixtos</li>
                    <li>Implementadas en C para eficiencia</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Métodos Principales</h4>
                <ul>
                    <li><strong>append(x):</strong> O(1) amortizado - Agregar al final</li>
                    <li><strong>insert(i, x):</strong> O(n) - Insertar en posición i</li>
                    <li><strong>remove(x):</strong> O(n) - Eliminar primera ocurrencia</li>
                    <li><strong>pop([i]):</strong> O(1) al final, O(n) en medio</li>
                    <li><strong>index(x):</strong> O(n) - Buscar posición</li>
                    <li><strong>count(x):</strong> O(n) - Contar ocurrencias</li>
                    <li><strong>sort():</strong> O(n log n) - Ordenar in-place</li>
                    <li><strong>reverse():</strong> O(n) - Invertir in-place</li>
                    <li><strong>extend(iterable):</strong> O(k) - Agregar múltiples elementos</li>
                    <li><strong>clear():</strong> O(1) - Vaciar lista</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>List Comprehensions</h4>
                <p>Forma concisa y eficiente de crear listas:</p>
                <pre>[expresion for item in iterable if condicion]</pre>
                <p>Más rápido que bucles tradicionales y más legible.</p>
            </div>
        `,
        visualizacion: null,
        codigo: `# Métodos básicos de listas en Python
lista = [1, 2, 3, 4, 5]
print("Lista inicial:", lista)

# Agregar elementos
lista.append(6)  # O(1) amortizado
print("Después de append(6):", lista)

lista.insert(0, 0)  # O(n) - insertar al inicio
print("Después de insert(0, 0):", lista)

lista.extend([7, 8, 9])  # O(k) donde k es tamaño del iterable
print("Después de extend([7,8,9]):", lista)

# Eliminar elementos
lista.remove(5)  # O(n) - elimina primera ocurrencia
print("Después de remove(5):", lista)

ultimo = lista.pop()  # O(1) - elimina y retorna último
print(f"Pop retornó {ultimo}, lista:", lista)

primero = lista.pop(0)  # O(n) - elimina y retorna índice 0
print(f"Pop(0) retornó {primero}, lista:", lista)

# Búsqueda y conteo
pos = lista.index(4)  # O(n)
print(f"\\nPosición de 4: {pos}")

lista.append(3)
cuenta = lista.count(3)  # O(n)
print(f"Cantidad de 3's: {cuenta}")

# Ordenamiento y reversión
lista_desordenada = [5, 2, 8, 1, 9]
lista_desordenada.sort()  # O(n log n) - in-place
print(f"\\nOrdenada: {lista_desordenada}")

lista_desordenada.reverse()  # O(n) - in-place
print(f"Invertida: {lista_desordenada}")

# List Comprehensions
cuadrados = [x**2 for x in range(10)]
print(f"\\nCuadrados: {cuadrados}")

pares = [x for x in range(20) if x % 2 == 0]
print(f"Pares: {pares}")

# Comprehension anidada (matriz)
matriz = [[i*j for j in range(5)] for i in range(5)]
print(f"\\nMatriz 5x5:")
for fila in matriz:
    print(fila)

# Slicing (rebanado)
lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(f"\\nLista: {lista}")
print(f"lista[2:5]: {lista[2:5]}")  # Elementos 2, 3, 4
print(f"lista[:3]: {lista[:3]}")    # Primeros 3
print(f"lista[7:]: {lista[7:]}")    # Desde 7 hasta el final
print(f"lista[::2]: {lista[::2]}")  # Cada 2 elementos
print(f"lista[::-1]: {lista[::-1]}")  # Invertida

# Operaciones útiles
print(f"\\nLongitud: {len(lista)}")
print(f"Mínimo: {min(lista)}")
print(f"Máximo: {max(lista)}")
print(f"Suma: {sum(lista)}")
print(f"¿3 está en lista?: {3 in lista}")

# Copiar listas
copia_superficial = lista.copy()  # o lista[:]
print(f"\\nCopia: {copia_superficial}")

# Limpiar
lista.clear()
print(f"Después de clear(): {lista}")`
    },

    
    // PILAS Y COLAS - Temas individuales
    'pilas-concepto': {
        titulo: 'Concepto de Pilas (LIFO)',
        teoria: `
            <div class="info-card">
                <h4>Definición</h4>
                <p><strong>Pila (Stack):</strong> Estructura de datos lineal que sigue el principio LIFO (Last In, First Out).</p>
                <p>El último elemento en entrar es el primero en salir, como una pila de platos.</p>
            </div>
            <div class="info-card">
                <h4>Operaciones Fundamentales</h4>
                <ul>
                    <li><strong>Push (Apilar):</strong> O(1) - Agregar elemento a la cima</li>
                    <li><strong>Pop (Desapilar):</strong> O(1) - Eliminar y retornar elemento de la cima</li>
                    <li><strong>Peek/Top (Ver cima):</strong> O(1) - Ver elemento de la cima sin eliminarlo</li>
                    <li><strong>isEmpty:</strong> O(1) - Verificar si está vacía</li>
                    <li><strong>size:</strong> O(1) - Obtener cantidad de elementos</li>
                </ul>
            </div>
            <div class="info-card">
                <h4>Aplicaciones Reales</h4>
                <ul>
                    <li>Evaluación de expresiones matemáticas (notación postfija)</li>
                    <li>Verificación de paréntesis balanceados</li>
                    <li>Función "Deshacer" en editores</li>
                    <li>Navegación del navegador (historial atrás/adelante)</li>
                    <li>Llamadas recursivas (call stack)</li>
                    <li>Algoritmos de backtracking</li>
                </ul>
            </div>
        `,
        visualizacion: 'pila-viz',
        codigo: `class Pila:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """O(1) - Apilar elemento"""
        self.items.append(item)
        print(f"✓ Push: {item} → Cima")
    
    def pop(self):
        """O(1) - Desapilar elemento"""
        if self.is_empty():
            raise IndexError("Pop de pila vacía")
        item = self.items.pop()
        print(f"✓ Pop: {item} ← Cima")
        return item
    
    def peek(self):
        """O(1) - Ver cima sin eliminar"""
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
        """Visualizar pila"""
        if self.is_empty():
            return "Pila vacía"
        return " | ".join(str(x) for x in reversed(self.items)) + " ← CIMA"

# Demostración
print("=== Demostración de Pila LIFO ===\\n")
pila = Pila()

# Apilar elementos
pila.push(1)
pila.push(2)
pila.push(3)
pila.push(4)

print(f"\\nPila: {pila.mostrar()}")
print(f"Tamaño: {pila.size()}")
print(f"Cima: {pila.peek()}")

# Desapilar
print("\\n--- Desapilando ---")
pila.pop()
pila.pop()

print(f"\\nPila: {pila.mostrar()}")
print(f"Nueva cima: {pila.peek()}")

# Aplicación: Verificar paréntesis balanceados
def parentesis_balanceados(expresion):
    """Verificar si los paréntesis están balanceados"""
    pila = Pila()
    pares = {'(': ')', '[': ']', '{': '}'}
    
    for char in expresion:
        if char in pares.keys():
            pila.push(char)
        elif char in pares.values():
            if pila.is_empty():
                return False
            if pares[pila.pop()] != char:
                return False
    
    return pila.is_empty()

print("\\n=== Aplicación: Paréntesis Balanceados ===")
expresiones = [
    "({[]})",
    "({[})",
    "((()))",
    "((())",
    "{[()()]}"
]

for exp in expresiones:
    resultado = "✓ Balanceado" if parentesis_balanceados(exp) else "✗ No balanceado"
    print(f"{exp}: {resultado}")`
    },
    
    'pilas-operaciones': {
        titulo: 'Operaciones: Push, Pop, Peek',
        teoria: `
            <div class="info-card">
                <h4>Push (Apilar)</h4>
                <p><strong>Complejidad:</strong> O(1)</p>
                <p><strong>Descripción:</strong> Agrega un elemento a la cima de la pila.</p>
                <p><strong>Pasos:</strong></p>
                <ol>
                    <li>Crear nuevo nodo/elemento</li>
                    <li>Colocarlo en la cima</li>
                    <li>Actualizar puntero de cima</li>
                    <li>Incrementar contador de tamaño</li>
                </ol>
            </div>
            <div class="info-card">
                <h4>Pop (Desapilar)</h4>
                <p><strong>Complejidad:</strong> O(1)</p>
                <p><strong>Descripción:</strong> Elimina y retorna el elemento de la cima.</p>
                <p><strong>Pasos:</strong></p>
                <ol>
                    <li>Verificar que no esté vacía (Stack Underflow)</li>
                    <li>Guardar elemento de la cima</li>
                    <li>Mover cima al siguiente elemento</li>
                    <li>Decrementar contador de tamaño</li>
                    <li>Retornar elemento guardado</li>
                </ol>
            </div>
            <div class="info-card">
                <h4>Peek/Top (Ver Cima)</h4>
                <p><strong>Complejidad:</strong> O(1)</p>
                <p><strong>Descripción:</strong> Retorna el elemento de la cima sin eliminarlo.</p>
                <p><strong>Uso:</strong> Cuando necesitas consultar el próximo elemento a procesar sin modificar la pila.</p>
            </div>
        `,
        visualizacion: 'pila-operaciones-viz',
        codigo: `class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None

class PilaConLista:
    """Implementación de pila con lista ligada"""
    def __init__(self):
        self.cima = None
        self.tamano = 0
    
    def push(self, dato):
        """O(1) - Apilar con lista ligada"""
        nuevo = Nodo(dato)
        nuevo.siguiente = self.cima
        self.cima = nuevo
        self.tamano += 1
        print(f"✓ PUSH: {dato}")
        self._mostrar_estado()
    
    def pop(self):
        """O(1) - Desapilar con lista ligada"""
        if self.is_empty():
            raise IndexError("Stack Underflow: Pila vacía")
        
        dato = self.cima.dato
        self.cima = self.cima.siguiente
        self.tamano -= 1
        print(f"✓ POP: {dato}")
        self._mostrar_estado()
        return dato
    
    def peek(self):
        """O(1) - Ver cima"""
        if self.is_empty():
            return None
        print(f"✓ PEEK: {self.cima.dato}")
        return self.cima.dato
    
    def is_empty(self):
        """O(1) - Verificar si está vacía"""
        return self.cima is None
    
    def size(self):
        """O(1) - Obtener tamaño"""
        return self.tamano
    
    def _mostrar_estado(self):
        """Mostrar estado actual de la pila"""
        if self.is_empty():
            print("   Estado: [VACÍA]")
        else:
            elementos = []
            actual = self.cima
            while actual:
                elementos.append(str(actual.dato))
                actual = actual.siguiente
            print(f"   Estado: {' | '.join(elementos)} ← CIMA")
        print(f"   Tamaño: {self.tamano}\\n")

# Demostración detallada
print("=== Demostración de Operaciones ===\\n")
pila = PilaConLista()

# Serie de operaciones
print("1. Push(10)")
pila.push(10)

print("2. Push(20)")
pila.push(20)

print("3. Push(30)")
pila.push(30)

print("4. Peek()")
cima = pila.peek()
print(f"   Cima actual: {cima}\\n")

print("5. Pop()")
pila.pop()

print("6. Push(40)")
pila.push(40)

print("7. Pop()")
pila.pop()

print("8. Pop()")
pila.pop()

# Aplicación: Convertir decimal a binario
def decimal_a_binario(numero):
    """Convertir número decimal a binario usando pila"""
    if numero == 0:
        return "0"
    
    pila = PilaConLista()
    
    while numero > 0:
        residuo = numero % 2
        pila.push(residuo)
        numero = numero // 2
    
    binario = ""
    while not pila.is_empty():
        binario += str(pila.pop())
    
    return binario

print("\\n=== Aplicación: Decimal a Binario ===")
numeros = [10, 25, 42, 100]
for num in numeros:
    binario = decimal_a_binario(num)
    print(f"{num} en binario: {binario}")`
    },
    
    'pilas-listas': {
        titulo: 'Pilas con Listas Ligadas',
        teoria: `
            <div class="info-card">
                <h4>Implementación con Lista Ligada</h4>
                <p>La pila se implementa usando una lista simplemente ligada donde:</p>
                <ul>
                    <li>La cima es la cabeza de la lista</li>
                    <li>Push = insertar al inicio</li>
                    <li>Pop = eliminar del inicio</li>
                    <li>Todas las operaciones son O(1)</li>
                </ul>
                <p><strong>Ventajas:</strong></p>
                <ul>
                    <li>Tamaño dinámico (no hay overflow)</li>
                    <li>Uso eficiente de memoria</li>
                    <li>No necesita redimensionamiento</li>
                </ul>
                <p><strong>Desventajas:</strong></p>
                <ul>
                    <li>Overhead de punteros</li>
                    <li>Peor localidad de caché que arrays</li>
                </ul>
            </div>
        `,
        visualizacion: 'pila-lista-viz',
        codigo: `class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None

class PilaLigada:
    def __init__(self, capacidad_maxima=None):
        self.cima = None
        self.tamano = 0
        self.capacidad_maxima = capacidad_maxima
    
    def push(self, dato):
        """O(1) - Insertar al inicio de la lista"""
        if self.capacidad_maxima and self.tamano >= self.capacidad_maxima:
            raise OverflowError(f"Stack Overflow: Capacidad máxima {self.capacidad_maxima}")
        
        nuevo = Nodo(dato)
        nuevo.siguiente = self.cima
        self.cima = nuevo
        self.tamano += 1
    
    def pop(self):
        """O(1) - Eliminar del inicio de la lista"""
        if self.is_empty():
            raise IndexError("Stack Underflow")
        
        dato = self.cima.dato
        self.cima = self.cima.siguiente
        self.tamano -= 1
        return dato
    
    def peek(self):
        """O(1) - Ver primer elemento"""
        if self.is_empty():
            return None
        return self.cima.dato
    
    def is_empty(self):
        return self.cima is None
    
    def is_full(self):
        if self.capacidad_maxima is None:
            return False
        return self.tamano >= self.capacidad_maxima
    
    def mostrar(self):
        elementos = []
        actual = self.cima
        while actual:
            elementos.append(str(actual.dato))
            actual = actual.siguiente
        return " → ".join(elementos) if elementos else "VACÍA"

# Comparación: Array vs Lista Ligada
class PilaArray:
    def __init__(self, capacidad=10):
        self.items = []
        self.capacidad = capacidad
    
    def push(self, dato):
        if len(self.items) >= self.capacidad:
            raise OverflowError("Stack Overflow")
        self.items.append(dato)
    
    def pop(self):
        if not self.items:
            raise IndexError("Stack Underflow")
        return self.items.pop()
    
    def peek(self):
        return self.items[-1] if self.items else None

# Demostración
print("=== Pila con Lista Ligada ===")
pila_ligada = PilaLigada()

for i in range(1, 6):
    pila_ligada.push(i * 10)
    print(f"Push {i*10}: {pila_ligada.mostrar()}")

print(f"\\nCima: {pila_ligada.peek()}")
print(f"Tamaño: {pila_ligada.tamano}")

print("\\n--- Desapilando ---")
while not pila_ligada.is_empty():
    dato = pila_ligada.pop()
    print(f"Pop {dato}: {pila_ligada.mostrar()}")

# Aplicación: Invertir cadena
def invertir_cadena(cadena):
    pila = PilaLigada()
    for char in cadena:
        pila.push(char)
    
    invertida = ""
    while not pila.is_empty():
        invertida += pila.pop()
    
    return invertida

print("\\n=== Invertir Cadena ===")
texto = "HOLA MUNDO"
print(f"Original: {texto}")
print(f"Invertida: {invertir_cadena(texto)}")`
    },
};

// Cerrar el objeto temasDetallados
console.log('Temas detallados cargados:', Object.keys(temasDetallados).length);
