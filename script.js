document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // 1. EFECTO CAMALEÓN (VERSIÓN LIMPIA CON VARIABLES CSS)
    // =====================================================

    const secciones = document.querySelectorAll('.sticky-section');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "-50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const bgColor = entry.target.getAttribute('data-color');
                const textColor = entry.target.getAttribute('data-text');

                if (bgColor) {
                    document.documentElement.style
                        .setProperty('--bg-dinamico', bgColor);
                }

                if (textColor) {
                    document.documentElement.style
                        .setProperty('--text-dinamico', textColor);
                }
            }
        });
    }, observerOptions);

    secciones.forEach(section => observer.observe(section));


    // =====================================================
    // 2. MENÚ HAMBURGUESA COMPLETO
    // =====================================================

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const closeBtn = document.querySelector(".close-btn");

    if (hamburger && navMenu) {

        const closeMenu = () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        };

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", closeMenu);
        }

        navLinks.forEach(link =>
            link.addEventListener("click", closeMenu)
        );
    }
});


// =====================================================
// 3. EXPERIENCIA CORPORATIVA (VERSIÓN PREMIUM CONTROLADA)
// =====================================================

let experienciaActivada = false;

function activarExperiencia() {

    if (experienciaActivada) return;
    experienciaActivada = true;

    const audio = document.getElementById('audio-corp');
    const mensaje = document.getElementById('mensaje-extendido');
    const video = document.getElementById('video-logo-anim');
    const boton = document.querySelector('.scroll-trigger-container');

    // Activar sección expandida
    if (mensaje) {
        mensaje.classList.add('reveal-active');
    }

    // Ocultar botón suavemente
    if (boton) {
        boton.style.transition = "opacity 0.6s ease";
        boton.style.opacity = "0";
        setTimeout(() => {
            boton.style.display = "none";
        }, 600);
    }

    // AUDIO con fade-in elegante
    if (audio) {
        audio.volume = 0;
        audio.play().catch(() => {});

        let volumen = 0;
        const fade = setInterval(() => {
            if (volumen < 1) {
                volumen += 0.05;
                audio.volume = volumen;
            } else {
                clearInterval(fade);
            }
        }, 100);
    }

    // VIDEO solo una vez y se congela al final
    if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});

        video.onended = () => {
            video.pause();
        };
    }

    // Scroll elegante centrado
    setTimeout(() => {
        if (mensaje) {
            mensaje.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, 400);
}
const observadorLineas = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('expandir');
        }
    });
});
document.querySelectorAll('.linea-creciente').forEach(linea => observadorLineas.observe(linea));