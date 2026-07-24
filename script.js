javascript
/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    const inicio =
        document.getElementById("inicio");

    const carta =
        document.getElementById("carta");

    const musica =
        document.getElementById("musica");


    // Ocultar pantalla inicial
    inicio.style.display = "none";


    // Mostrar carta
    carta.classList.remove("oculto");


    // Reproducir música
    musica.play().catch(() => {

        console.log(
            "El navegador necesita interacción del usuario."
        );

    });


    // Ir suavemente a la carta
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================
   CONTADOR DE RELACIÓN
========================= */

const fechaInicio =
    new Date(
        2025,
        5,
        24,
        0,
        0,
        0
    );


function actualizarContador() {

    const ahora =
        new Date();


    let años =
        ahora.getFullYear()
        -
        fechaInicio.getFullYear();


    let meses =
        ahora.getMonth()
        -
        fechaInicio.getMonth();


    if (
        ahora.getDate()
        <
        fechaInicio.getDate()
    ) {

        meses--;

    }


    if (meses < 0) {

        años--;

        meses += 12;

    }


    const fechaTemporal =
        new Date(
            fechaInicio
        );


    fechaTemporal.setFullYear(
        fechaInicio.getFullYear()
        +
        años
    );


    fechaTemporal.setMonth(
        fechaInicio.getMonth()
        +
        años * 12
        +
        meses
    );


    let diferencia =
        ahora
        -
        fechaTemporal;


    const dias =
        Math.floor(
            diferencia
            /
            (
                1000
                *
                60
                *
                60
                *
                24
            )
        );


    const horas =
        Math.floor(
            (
                diferencia
                %
                (
                    1000
                    *
                    60
                    *
                    60
                    *
                    24
                )
            )
            /
            (
                1000
                *
                60
                *
                60
            )
        );


    const minutos =
        Math.floor(
            (
                diferencia
                %
                (
                    1000
                    *
                    60
                    *
                    60
                )
            )
            /
            (
                1000
                *
                60
            )
        );


    const segundos =
        Math.floor(
            (
                diferencia
                %
                (
                    1000
                    *
                    60
                )
            )
            /
            1000
        );


    document.getElementById(
        "tiempo"
    ).innerHTML =

        años
        +
        " año(s), "
        +
        meses
        +
        " mes(es), "
        +
        dias
        +
        " día(s)<br>"
        +
        horas
        +
        " horas, "
        +
        minutos
        +
        " minutos y "
        +
        segundos
        +
        " segundos ❤️";

}


setInterval(
    actualizarContador,
    1000
);


actualizarContador();



/* =========================
   CORAZONES FLOTANDO
========================= */

function crearCorazon() {

    const corazon =
        document.createElement(
            "div"
        );


    corazon.classList.add(
        "corazon"
    );


    const corazones = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞"
    ];


    corazon.innerHTML =
        corazones[
            Math.floor(
                Math.random()
                *
                corazones.length
            )
        ];


    corazon.style.left =
        Math.random()
        *
        100
        +
        "vw";


    corazon.style.animationDuration =
        Math.random()
        *
        5
        +
        5
        +
        "s";


    corazon.style.fontSize =
        Math.random()
        *
        20
        +
        15
        +
        "px";


    document.body.appendChild(
        corazon
    );


    setTimeout(
        () => {

            corazon.remove();

        },

        10000
    );

}


setInterval(
    crearCorazon,
    500
);
