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
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


const toogle_moon = document.querySelector('.toogle__moon')
const body = document.querySelector('body')

toogle_moon.onclick = function(){
    toogle_moon.classList.toggle('active')
    body.classList.toggle('active')
}
