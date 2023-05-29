const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.querySelector(".navbar")
toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('active');
})

function submit(event) {
    event.preventDefault();
  }


const animate1 = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }else{
            entry.target.classList.remove('animate');
        }
    })
},{
    threshold:0.5
});

for(let i = 0; i < animate1.length; i++){
    const el = animate1[i];
    observer.observe(el);
}