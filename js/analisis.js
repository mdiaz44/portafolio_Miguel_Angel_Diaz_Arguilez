/*==================================================
            BUSCADOR DE DOCUMENTOS
==================================================*/

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".document-card");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});


/*==================================================
            FILTROS
==================================================*/

const filters = document.querySelectorAll(".filter");

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.textContent.trim().toLowerCase();

        cards.forEach(card => {

            const badge = card.querySelector(".category");

            const text = badge.textContent.toLowerCase();

            if (category === "todos") {

                card.style.display = "flex";

            }

            else if (text.includes(category)) {

                card.style.display = "flex";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});


/*==================================================
        BOTON VOLVER ARRIBA
==================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================================
        ANIMACION DE ENTRADA
==================================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

cards.forEach(card=>{

    observer.observe(card);

});


/*==================================================
        EFECTO HOVER SUAVE
==================================================*/

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".35s";

    });

});


/*==================================================
        EFECTO EN LOS BOTONES
==================================================*/

const buttons=document.querySelectorAll(".document-btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-3px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});


/*==================================================
        APARICION PROGRESIVA
==================================================*/

window.addEventListener("load",()=>{

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*120);

    });

});


/*==================================================
        MENSAJE EN CONSOLA
==================================================*/

console.log(

"%cPortafolio desarrollado por Miguel Angel Diaz Arguilez",

"color:#0066FF;font-size:18px;font-weight:bold;"

);