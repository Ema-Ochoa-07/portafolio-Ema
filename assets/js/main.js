/*=============== ABRIR MENÚ ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })    
}

/*=============== CERRAR MENÚ ===============*/
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}


/*== CERRAR MENÚ CADA VEZ QUE SE HAGA CLICK EN ALGUNA OPCIÓN ==*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
          navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== EMAIL JS===============*/

const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_wxoia4j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      document.getElementById('contact-form').reset()
        swal.fire({
            title: "Felicitaciones!!",
            text: "Se envió el mensaje correctamente!!",
            icon: "success",
            confirmButtonText: "Aceptar",
            customClass: {
                container: 'custom-container',
                confirmButton: 'custom-confirm-button',
                icon: 'custom-icon'
            }
        })
    }, (err) => {
      btn.value = 'Send Email';
      document.getElementById('contact-form').reset()
        swal.fire({
            title: "Ups!!",
            text: "Ocurrió un error, intenta nuevamente!!",
            icon: "warning",
            confirmButtonText: "Aceptar",
            customClass: {
                container: 'custom-container',
                confirmButton: 'custom-confirm-button',
                icon: 'custom-icon'                
            }
        })
    });
});

        /*=============== DARK MODE ===============*/

        const toogle_moon = document.querySelector('.toogle__moon')
        const body = document.querySelector('body')

        // Verificar el estado del modo oscuro en el localStorage al cargar la página
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark')
            toogle_moon.innerHTML = '<i class="ri-moon-line"></i>'
        } else {
            body.classList.remove('dark')
            toogle_moon.innerHTML = '<i class="ri-sun-fill"></i>'
        }

        toogle_moon.addEventListener("click", function() {
            let theBody = body.classList.toggle('dark')

            // Cambiar ícono
            if (body.classList.contains('dark')) {
                toogle_moon.innerHTML =  '<i class="ri-moon-line"></i>'
                localStorage.setItem('darkMode', 'true')
            } else {
                toogle_moon.innerHTML = '<i class="ri-sun-fill"></i>'
                localStorage.setItem('darkMode', 'false')
            }
        });

