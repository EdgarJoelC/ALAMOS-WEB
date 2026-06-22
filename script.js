document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // 1. EFECTO CAMALEÓN (DIRECTO AL BODY)
    // =====================================================
    const secciones = document.querySelectorAll('.sticky-section');
    const body = document.body;
    
    body.style.transition = "background-color 0.8s ease, color 0.8s ease";

    const observerOptions = {
        threshold: 0.2,
        rootMargin: "-10% 0px -50% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgColor = entry.target.getAttribute('data-color');
                const textColor = entry.target.getAttribute('data-text');

                if (bgColor) body.style.backgroundColor = bgColor;
                if (textColor) body.style.color = textColor;
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

        if (closeBtn) closeBtn.addEventListener("click", closeMenu);
        navLinks.forEach(link => link.addEventListener("click", closeMenu));
    }
});


// =====================================================
// 3. EXPERIENCIA CORPORATIVA
// =====================================================
let experienciaActivada = false;

function activarExperiencia() {
    if (experienciaActivada) return;
    experienciaActivada = true;

    const audio = document.getElementById('audio-corp');
    const mensaje = document.getElementById('mensaje-extendido');
    const video = document.getElementById('video-logo-anim');
    const boton = document.querySelector('.scroll-trigger-container');

    if (mensaje) mensaje.classList.add('reveal-active');

    if (boton) {
        boton.style.transition = "opacity 0.6s ease";
        boton.style.opacity = "0";
        setTimeout(() => { boton.style.display = "none"; }, 600);
    }

    if (audio) {
        audio.volume = 0;
        audio.play().catch(() => {});
        let volumen = 0;
        const fade = setInterval(() => {
            if (volumen < 1) {
                volumen += 0.05;
                audio.volume = Math.min(volumen, 1);
            } else {
                clearInterval(fade);
            }
        }, 100);
    }

    if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
        video.onended = () => video.pause();
    }

    setTimeout(() => {
        if (mensaje) {
            mensaje.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 400);
}

// =====================================================
// 4. ANIMACIÓN DE LÍNEAS CRECIENTES
// =====================================================
const observadorLineas = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.width = "150px"; 
        } else {
            entrada.target.style.width = "80px"; 
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.linea-creciente').forEach(linea => observadorLineas.observe(linea));