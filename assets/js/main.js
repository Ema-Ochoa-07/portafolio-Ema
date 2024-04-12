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

// function sendEmail(){

//     (function(){
//         emailjs.init("mEM0k1SRHzeKj_zJs")
//     })();
//     let params = {
//         user_name: document.querySelector("#user_name").value,
//         last_name: document.querySelector("#last_name").value,
//         user_email: document.querySelector("#user_email").value,
//         user_subject: document.querySelector("#user_subject").value,
//         user_message: document.querySelector("#user_message").value,
//     };
//     let serviceId = "service_oorclp3"
//     let templateId = "template_wxoia4j"

//     emailjs.send('serviceId','templateId', params)
//     .then(res =>{
//         alert("Mensaje enviado correctamente");
//     })
//     .catch();
// }



/*=============== DARK LIGTH MODE===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme ='ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line': 'ri-sun-line'

if(selectedTheme){
    themeButton.document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bsx-moon' ? 'add': 'remove'](iconTheme)

    addEventListener('click', () =>{
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    }
)
}