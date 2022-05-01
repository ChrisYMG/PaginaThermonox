document.querySelectorAll('.boton__acordeon').forEach(button =>{
    button.addEventListener('click', () =>{
        button.classList.toggle('boton__acordeon--activo');
    });
});