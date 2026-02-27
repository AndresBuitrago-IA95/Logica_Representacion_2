// Visualizaciones interactivas para estructuras de datos

class ListaLigadaViz {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.lista = [];
    }
    
    insertar(valor) {
        this.lista.unshift(valor);
        this.render();
        this.explicar(`Se insertó ${valor} al inicio. La cabeza ahora apunta a ${valor}.`);
    }
    
    eliminar() {
        if (this.lista.length > 0) {
            const eliminado = this.lista.shift();
            this.render();
            this.explicar(`Se eliminó ${eliminado} del inicio. ${this.lista.length > 0 ? `La nueva cabeza es ${this.lista[0]}` : 'La lista está vacía'}.`);
        }
    }
    
    buscar(valor) {
        const index = this.lista.indexOf(valor);
        this.render(index);
        if (index !== -1) {
            this.explicar(`Elemento ${valor} encontrado en la posición ${index}. Se recorrieron ${index + 1} nodos.`);
        } else {
            this.explicar(`Elemento ${valor} no encontrado. Se recorrieron todos los ${this.lista.length} nodos.`);
        }
    }
    
    render(highlightIndex = -1) {
        const canvas = this.container.querySelector('.viz-canvas');
        canvas.innerHTML = '';
        
        if (this.lista.length === 0) {
            canvas.innerHTML = '<p style="color: #666;">Lista vacía</p>';
            return;
        }
        
        this.lista.forEach((valor, index) => {
            const node = document.createElement('div');
            node.className = 'node';
            if (index === highlightIndex) {
                node.classList.add('highlight');
            }
            node.textContent = valor;
            canvas.appendChild(node);
            
            if (index < this.lista.length - 1) {
                const arrow = document.createElement('div');
                arrow.className = 'arrow';
                canvas.appendChild(arrow);
            }
        });
        
        const nullNode = document.createElement('div');
        nullNode.style.padding = '1rem';
        nullNode.style.color = '#666';
        nullNode.textContent = 'NULL';
        canvas.appendChild(nullNode);
    }
    
    explicar(mensaje) {
        const explanation = this.container.querySelector('.explanation-box p');
        if (explanation) {
            explanation.textContent = mensaje;
        }
    }
}

class PilaViz {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.pila = [];
    }
    
    apilar(valor) {
        this.pila.push(valor);
        this.render();
        this.explicar(`PUSH: Se apiló ${valor}. Tamaño: ${this.pila.length}. Complejidad: O(1)`);
    }
    
    desapilar() {
        if (this.pila.length > 0) {
            const eliminado = this.pila.pop();
            this.render();
            this.explicar(`POP: Se desapiló ${eliminado}. ${this.pila.length > 0 ? `Nueva cima: ${this.pila[this.pila.length - 1]}` : 'Pila vacía'}. Complejidad: O(1)`);
        } else {
            this.explicar('ERROR: No se puede desapilar de una pila vacía (Stack Underflow)');
        }
    }
    
    cima() {
        if (this.pila.length > 0) {
            this.render(this.pila.length - 1);
            this.explicar(`PEEK: La cima es ${this.pila[this.pila.length - 1]}. Complejidad: O(1)`);
        } else {
            this.explicar('La pila está vacía');
        }
    }
    
    render(highlightIndex = -1) {
        const canvas = this.container.querySelector('.viz-canvas');
        const stackContainer = canvas.querySelector('.stack-container') || document.createElement('div');
        stackContainer.className = 'stack-container';
        stackContainer.innerHTML = '';
        
        if (this.pila.length === 0) {
            stackContainer.innerHTML = '<p style="color: #666; text-align: center;">Pila vacía</p>';
        } else {
            // Mostrar de arriba hacia abajo (último elemento arriba)
            for (let i = this.pila.length - 1; i >= 0; i--) {
                const item = document.createElement('div');
                item.className = 'stack-item';
                if (i === highlightIndex) {
                    item.style.background = '#FFD700';
                    item.style.color = '#333';
                }
                item.textContent = this.pila[i];
                if (i === this.pila.length - 1) {
                    item.textContent += ' ← CIMA';
                }
                stackContainer.appendChild(item);
            }
        }
        
        canvas.innerHTML = '';
        canvas.appendChild(stackContainer);
    }
    
    explicar(mensaje) {
        const explanation = this.container.querySelector('.explanation-box p');
        if (explanation) {
            explanation.textContent = mensaje;
        }
    }
}

class ColaViz {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.cola = [];
    }
    
    encolar(valor) {
        this.cola.push(valor);
        this.render();
        this.explicar(`ENQUEUE: Se encoló ${valor} al final. Tamaño: ${this.cola.length}. Complejidad: O(1)`);
    }
    
    desencolar() {
        if (this.cola.length > 0) {
            const eliminado = this.cola.shift();
            this.render();
            this.explicar(`DEQUEUE: Se desencoló ${eliminado} del frente. ${this.cola.length > 0 ? `Nuevo frente: ${this.cola[0]}` : 'Cola vacía'}. Complejidad: O(1)`);
        } else {
            this.explicar('ERROR: No se puede desencolar de una cola vacía (Queue Underflow)');
        }
    }
    
    frente() {
        if (this.cola.length > 0) {
            this.render(0);
            this.explicar(`FRONT: El frente es ${this.cola[0]}. Complejidad: O(1)`);
        } else {
            this.explicar('La cola está vacía');
        }
    }
    
    render(highlightIndex = -1) {
        const canvas = this.container.querySelector('.viz-canvas');
        canvas.innerHTML = '';
        
        if (this.cola.length === 0) {
            canvas.innerHTML = '<p style="color: #666;">Cola vacía</p>';
            return;
        }
        
        const label1 = document.createElement('div');
        label1.textContent = 'FRENTE →';
        label1.style.fontWeight = 'bold';
        label1.style.color = 'var(--udea-verde)';
        canvas.appendChild(label1);
        
        this.cola.forEach((valor, index) => {
            const item = document.createElement('div');
            item.className = 'queue-item';
            item.style.display = 'inline-block';
            item.style.margin = '0.5rem';
            if (index === highlightIndex) {
                item.style.background = '#FFD700';
                item.style.color = '#333';
            }
            item.textContent = valor;
            canvas.appendChild(item);
        });
        
        const label2 = document.createElement('div');
        label2.textContent = '← FINAL';
        label2.style.fontWeight = 'bold';
        label2.style.color = 'var(--udea-verde)';
        canvas.appendChild(label2);
    }
    
    explicar(mensaje) {
        const explanation = this.container.querySelector('.explanation-box p');
        if (explanation) {
            explanation.textContent = mensaje;
        }
    }
}


class ArbolBinarioViz {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.raiz = null;
    }
    
    insertar(valor) {
        if (this.raiz === null) {
            this.raiz = { valor, izq: null, der: null };
            this.explicar(`Se insertó ${valor} como raíz del árbol.`);
        } else {
            this.insertarRecursivo(this.raiz, valor);
            this.explicar(`Se insertó ${valor} en el árbol. Complejidad promedio: O(log n)`);
        }
        this.render();
    }
    
    insertarRecursivo(nodo, valor) {
        if (valor < nodo.valor) {
            if (nodo.izq === null) {
                nodo.izq = { valor, izq: null, der: null };
            } else {
                this.insertarRecursivo(nodo.izq, valor);
            }
        } else {
            if (nodo.der === null) {
                nodo.der = { valor, izq: null, der: null };
            } else {
                this.insertarRecursivo(nodo.der, valor);
            }
        }
    }
    
    buscar(valor) {
        const encontrado = this.buscarRecursivo(this.raiz, valor);
        if (encontrado) {
            this.explicar(`✓ Elemento ${valor} encontrado en el árbol.`);
        } else {
            this.explicar(`✗ Elemento ${valor} NO encontrado en el árbol.`);
        }
    }
    
    buscarRecursivo(nodo, valor) {
        if (nodo === null) return false;
        if (nodo.valor === valor) return true;
        if (valor < nodo.valor) return this.buscarRecursivo(nodo.izq, valor);
        return this.buscarRecursivo(nodo.der, valor);
    }
    
    inorden() {
        const resultado = [];
        this.inordenRecursivo(this.raiz, resultado);
        this.explicar(`Recorrido Inorden (Izq-Raíz-Der): ${resultado.join(', ')}`);
    }
    
    inordenRecursivo(nodo, resultado) {
        if (nodo !== null) {
            this.inordenRecursivo(nodo.izq, resultado);
            resultado.push(nodo.valor);
            this.inordenRecursivo(nodo.der, resultado);
        }
    }
    
    render() {
        const canvas = this.container.querySelector('.viz-canvas');
        canvas.innerHTML = '';
        
        if (this.raiz === null) {
            canvas.innerHTML = '<p style="color: #666;">Árbol vacío</p>';
            return;
        }
        
        const treeDiv = document.createElement('div');
        treeDiv.style.textAlign = 'center';
        treeDiv.innerHTML = this.renderNodo(this.raiz);
        canvas.appendChild(treeDiv);
    }
    
    renderNodo(nodo, nivel = 0) {
        if (nodo === null) return '';
        
        let html = '<div style="display: inline-block; margin: 1rem;">';
        html += `<div class="tree-node">${nodo.valor}</div>`;
        
        if (nodo.izq || nodo.der) {
            html += '<div style="display: flex; justify-content: center; gap: 2rem;">';
            html += `<div>${this.renderNodo(nodo.izq, nivel + 1)}</div>`;
            html += `<div>${this.renderNodo(nodo.der, nivel + 1)}</div>`;
            html += '</div>';
        }
        
        html += '</div>';
        return html;
    }
    
    explicar(mensaje) {
        const explanation = this.container.querySelector('.explanation-box p');
        if (explanation) {
            explanation.textContent = mensaje;
        }
    }
}

class OrdenamientoViz {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.array = [];
        this.comparaciones = 0;
        this.intercambios = 0;
    }
    
    generar(cantidad = 8) {
        this.array = Array.from({length: cantidad}, () => Math.floor(Math.random() * 100) + 1);
        this.comparaciones = 0;
        this.intercambios = 0;
        this.render();
        this.explicar('Array generado aleatoriamente. Listo para ordenar.');
    }
    
    async bubbleSort() {
        this.comparaciones = 0;
        this.intercambios = 0;
        const n = this.array.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                this.comparaciones++;
                this.render(j, j + 1);
                await this.sleep(500);
                
                if (this.array[j] > this.array[j + 1]) {
                    [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
                    this.intercambios++;
                    this.render(j, j + 1);
                    await this.sleep(500);
                }
            }
        }
        
        this.render();
        this.explicar(`Bubble Sort completado. Comparaciones: ${this.comparaciones}, Intercambios: ${this.intercambios}. Complejidad: O(n²)`);
    }
    
    async quickSort(inicio = 0, fin = this.array.length - 1) {
        if (inicio >= fin) return;
        
        const pivotIndex = await this.partition(inicio, fin);
        await this.quickSort(inicio, pivotIndex - 1);
        await this.quickSort(pivotIndex + 1, fin);
        
        if (inicio === 0 && fin === this.array.length - 1) {
            this.explicar(`Quick Sort completado. Comparaciones: ${this.comparaciones}. Complejidad promedio: O(n log n)`);
        }
    }
    
    async partition(inicio, fin) {
        const pivot = this.array[fin];
        let i = inicio - 1;
        
        for (let j = inicio; j < fin; j++) {
            this.comparaciones++;
            this.render(j, fin);
            await this.sleep(300);
            
            if (this.array[j] < pivot) {
                i++;
                [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
                this.intercambios++;
                this.render(i, j);
                await this.sleep(300);
            }
        }
        
        [this.array[i + 1], this.array[fin]] = [this.array[fin], this.array[i + 1]];
        this.intercambios++;
        return i + 1;
    }
    
    render(highlight1 = -1, highlight2 = -1) {
        const canvas = this.container.querySelector('.viz-canvas');
        canvas.innerHTML = '';
        
        this.array.forEach((valor, index) => {
            const bar = document.createElement('div');
            bar.style.width = '40px';
            bar.style.height = `${valor * 2}px`;
            bar.style.background = 'var(--udea-verde)';
            bar.style.margin = '0 2px';
            bar.style.display = 'inline-block';
            bar.style.verticalAlign = 'bottom';
            bar.style.position = 'relative';
            bar.style.transition = 'all 0.3s';
            
            if (index === highlight1 || index === highlight2) {
                bar.style.background = '#FFD700';
            }
            
            const label = document.createElement('div');
            label.textContent = valor;
            label.style.position = 'absolute';
            label.style.top = '-20px';
            label.style.width = '100%';
            label.style.textAlign = 'center';
            label.style.fontSize = '0.8rem';
            label.style.fontWeight = 'bold';
            
            bar.appendChild(label);
            canvas.appendChild(bar);
        });
        
        const stats = document.createElement('div');
        stats.style.marginTop = '1rem';
        stats.style.textAlign = 'center';
        stats.innerHTML = `<strong>Comparaciones:</strong> ${this.comparaciones} | <strong>Intercambios:</strong> ${this.intercambios}`;
        canvas.appendChild(stats);
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    explicar(mensaje) {
        const explanation = this.container.querySelector('.explanation-box p');
        if (explanation) {
            explanation.textContent = mensaje;
        }
    }
}

// Función auxiliar para crear contenedores de visualización
function crearVisualizacion(tipo, titulo, containerId) {
    return `
        <div class="visualization-container" id="${containerId}">
            <h3>${titulo}</h3>
            <div class="viz-canvas"></div>
            <div class="viz-controls" id="${containerId}-controls"></div>
            <div class="explanation-box">
                <div class="step-indicator">Paso a paso</div>
                <p>Interactúa con los controles para ver cómo funciona.</p>
            </div>
        </div>
    `;
}
