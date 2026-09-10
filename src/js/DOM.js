const formulario = document.querySelector('#formulario-tarea');
		const entrada = document.querySelector('#entrada-tarea');
		const lista = document.querySelector('#lista-tareas');
		const contador = document.querySelector('#contador');

		formulario.addEventListener('submit', function (evento) {
			evento.preventDefault();

			const texto = entrada.value.trim();
			if (texto === '') {
				return;
			}

			const tarea = document.createElement('li');
			const nombre = document.createElement('span');
			const botonEliminar = document.createElement('button');

			nombre.textContent = texto;
			botonEliminar.textContent = 'Eliminar';
			botonEliminar.type = 'button';

			tarea.append(nombre, botonEliminar);
			lista.appendChild(tarea);

			entrada.value = '';
			entrada.focus();
			actualizarContador();
		});

		lista.addEventListener('click', function (evento) {
			const elemento = evento.target;
			const tarea = elemento.closest('li');

			if (elemento.tagName === 'BUTTON') {
				tarea.remove();
			} else if (tarea) {
				tarea.classList.toggle('completada');
			}

			actualizarContador();
		});

		function actualizarContador() {
			const pendientes = lista.querySelectorAll('li:not(.completada)').length;
			contador.textContent = pendientes;
		}