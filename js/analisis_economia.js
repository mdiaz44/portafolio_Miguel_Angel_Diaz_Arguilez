/*==================================================
        ANALISIS ECONOMIA - JAVASCRIPT
==================================================*/


document.addEventListener("DOMContentLoaded", function () {


    /*==================================================
                    ELEMENTOS
    ==================================================*/

    const searchInput = document.getElementById("searchInput");

    const cards = document.querySelectorAll(".document-card");

    const filters = document.querySelectorAll(".filter");

    const topBtn = document.getElementById("topBtn");


    /*==================================================
                FILTROS Y BUSCADOR
    ==================================================*/

    let currentCategory = "todos";


    function filterCards() {

        const searchText = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


        cards.forEach(card => {

            const categoryElement =
                card.querySelector(".category");


            const category =
                categoryElement
                    ? Array.from(categoryElement.classList)
                    : [];


            const cardText =
                card.innerText.toLowerCase();


            /*------------------------------------------
                    COMPROBAR CATEGORIA
            ------------------------------------------*/

            let categoryMatch = false;


            if (currentCategory === "todos") {

                categoryMatch = true;

            } else {

                categoryMatch =
                    category.includes(currentCategory);

            }


            /*------------------------------------------
                    COMPROBAR BUSQUEDA
            ------------------------------------------*/

            const searchMatch =
                searchText === "" ||
                cardText.includes(searchText);


            /*------------------------------------------
                    MOSTRAR / OCULTAR
            ------------------------------------------*/

            if (categoryMatch && searchMatch) {

                card.style.display = "flex";

                setTimeout(() => {

                    card.style.opacity = "1";

                    card.style.transform =
                        "translateY(0)";

                }, 10);

            } else {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(20px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    }


    /*==================================================
                    CLICK EN FILTROS
    ==================================================*/

    filters.forEach(button => {

        button.addEventListener("click", function () {


            /*------------------------------------------
                    QUITAR ACTIVE
            ------------------------------------------*/

            filters.forEach(btn => {

                btn.classList.remove("active");

            });


            /*------------------------------------------
                    ACTIVAR BOTON
            ------------------------------------------*/

            this.classList.add("active");


            /*------------------------------------------
                    OBTENER CATEGORIA
            ------------------------------------------*/

            currentCategory =
                this.dataset.category;


            /*------------------------------------------
                    APLICAR FILTRO
            ------------------------------------------*/

            filterCards();

        });

    });


    /*==================================================
                    BUSCADOR
    ==================================================*/

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            filterCards();

        });

    }


    /*==================================================
                BOTON VOLVER ARRIBA
    ==================================================*/

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                topBtn.style.display = "flex";

            } else {

                topBtn.style.display = "none";

            }

        });


        topBtn.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /*==================================================
            ANIMACION DE TARJETAS
    ==================================================*/

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {

                threshold: 0.12

            }

        );


    cards.forEach(card => {

        observer.observe(card);

    });


    /*==================================================
                EFECTO HOVER DE BOTONES
    ==================================================*/

    const documentButtons =
        document.querySelectorAll(".document-btn");


    documentButtons.forEach(button => {


        button.addEventListener(
            "mouseenter",
            function () {

                this.style.transform =
                    "translateY(-3px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                this.style.transform =
                    "translateY(0)";

            }
        );

    });


    /*==================================================
                ANIMACION INICIAL
    ==================================================*/

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";


        setTimeout(() => {

            card.style.transition =
                "opacity .5s ease, transform .5s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 100 + (index * 100));

    });


    /*==================================================
                MENSAJE DE CONSOLA
    ==================================================*/

    console.log(
        "%cPortafolio de Economía",
        "color:#0066FF;font-size:18px;font-weight:bold;"
    );

    console.log(
        "Investigaciones económicas cargadas:",
        cards.length
    );


});