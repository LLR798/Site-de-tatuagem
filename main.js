/*  ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: DE TRÊS BARRAS NA VERTICAL E X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICER EM UM ITEM DO MENU, ESCONDER O MENU */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* MUDAR O HEADER DA PÁGINA QUANDO DER O SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // SCROLL É MAIOR QUE A ALTURA DO HEADER 
    header.classList.add('scroll')
  } else {
    // MENOR QUE A ALTURA DO HEADER
    header.classList.remove('scroll')
  }
}

/* TRAININGS CAROUSEL SWIPER */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLLREVEAL: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #training header, #training .training
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
)

/* BOTÃO VOLTAR PARA O TOPO */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >=900) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO CONFORME A SELEÇÃO NA PÁGINA */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop(),
  activateMenuAtCurrentSection()
})


