/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Scripts para el Proyecto EduMath                                                                         */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Autor: Magallanes López Carlos Gabriel                                                                                                                                    */
/* Versión del Proyecto: 1.0                                                                                                                                                 */
/* Correo: cgmagallanes23@gmail.com                                                                                                                                          */
/* Ultima Modificación: 09/05/2026                                                                                                                                           */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/

// i18n - Traducciones
const translations = {
    es: {
        // Nav
        navGrades:          "Grados",
        navHowTo:           "Cómo Jugar",
        navScreenshots:     "Capturas",
        navDownload:        "Descargar",
        // Hero
        heroBadge:          "🌟 Juego Educativo · 1° a 6° Grado",
        heroT1:             "Aventura",
        heroT2:             "Matemática",
        heroT3:             "🚀 Aventura Matemática Espacial — EduMath",
        heroDesc:           "¡Viaja por el cosmos resolviendo operaciones matemáticas! Gana estrellas ⭐, desbloquea rangos de astronauta y conviértete en el mejor matemático del universo.",
        heroBtn1:           "⬇ ¡Jugar Gratis!",
        heroBtn2:           "¿Cómo Jugar?",
        // Grades Section
        gradesTag:          "🎓 Niveles de Dificultad",
        gradesTitle:        "¡Elige tu <span>Grado!</span>",
        gradesSub:          "Cada grado tiene problemas diseñados especialmente para tu edad. ¡El juego crece contigo!",
        grade1Name:         "1° Grado",
        grade1Ops:          "Suma y Resta · Números 1-20",
        grade2Name:         "2° Grado",
        grade2Ops:          "Suma y Resta · Números 10-50",
        grade3Name:         "3° Grado",
        grade3Ops:          "+ - × · Números 10-60",
        grade4Name:         "4° Grado",
        grade4Ops:          "+ - × ÷ · Números 20-100",
        grade5Name:         "5° Grado",
        grade5Ops:          "Cuatro operaciones · 100-500",
        grade6Name:         "6° Grado",
        grade6Ops:          "Cuatro operaciones · 500-1500",
        // How To Play Section
        howtoTag:           "🎮 Instrucciones",
        howtoTitle:         "¿Cómo <span>Jugar</span>?",
        howtoSub:           "¡Súper fácil! En menos de un minuto ya estás resolviendo problemas espaciales.",
        step1Title:         "Abre el Juego",
        step1Desc:          "Haz doble clic en EduMath.exe. Espera la pantalla de bienvenida animada y presiona ENTER.",
        step2Title:         "Elige tu Grado",
        step2Desc:          "Haz clic en tu grado escolar. ¡Hay 6 niveles de dificultad, del 1° al 6° grado!",
        step3Title:         "¡Resuelve!",
        step3Desc:          "Escribe tu respuesta con el teclado y presiona ENTER. ¡10 preguntas por ronda!",
        step4Title:         "Gana Estrellas",
        step4Desc:          "Cada respuesta correcta te da una estrella ⭐. ¡Acumula estrellas y sube de rango astronauta!",
        controlsTitle:      "⌨️ Controles del Juego",
        ctrl1Label:         "Teclas 0-9",
        ctrl1Desc:          "Escribir respuesta",
        ctrl2Label:         "Enter",
        ctrl2Desc:          "Enviar respuesta",
        ctrl3Label:         "Backspace",
        ctrl3Desc:          "Borrar dígito",
        // Screenshots Section
        screensTag:         "📸 Vista Previa",
        screensTitle:       "Así se <span>Ve el Juego</span>",
        ss1Label:           "🌟 Pantalla de Bienvenida",
        ss2Label:           "🎓 Selección de Grado",
        ss3Label:           "✅ ¡Respuesta Correcta!",
        ss4Label:           "❌ Respuesta Incorrecta",
        ss5Label:           "🏆 Pantalla de Resultados",
        robotTitle:         "¡Tu Robot Guía te acompaña siempre!",
        robotDesc:          "Se pone feliz 😄 cuando aciertas y triste 😢 cuando te equivocas",
        // Ranks Section
        ranksTag:           "🏆 Sistema de Logros",
        ranksTitle:         "¿Qué <span>Rango</span> obtienes?",
        ranksSub:           "Según tu desempeño en cada ronda, recibirás un título especial de astronauta.",
        rank1Pct:           "90% — 100%",
        rank1Name:          "Astronauta Experto",
        rank1Msg:           "¡ASTRONAUTA EXPERTO! — El mejor del universo 🌟",
        rank2Pct:           "70% — 89%",
        rank2Name:          "Explorador Espacial",
        rank2Msg:           "¡EXPLORADOR ESPACIAL! — ¡Vas muy bien! ⭐",
        rank3Pct:           "50% — 69%",
        rank3Name:          "Cadete en Entrenamiento",
        rank3Msg:           "¡CADETE EN ENTRENAMIENTO! — Sigue así 💙",
        rank4Pct:           "0% — 49%",
        rank4Name:          "¡Sigue Practicando!",
        rank4Msg:           "¡SIGUE PRACTICANDO! — Cada error es aprendizaje 🔥",
        // Download Section
        dlTag:              "🆓 Totalmente Gratis",
        dlTitle:            "¡Descarga <span>EduMath</span>!",
        dlDesc:             "Sin instalaciones complicadas. Solo descarga, haz doble clic y ¡a jugar! Compatible con Windows.",
        dlBtn:              "🚀 Descargar EduMath.exe",
        chip1:              "🪟 Windows",
        chip1Val:           "10/11",
        chip2:              "🖥️ Pantalla",
        chip2Val:           "1000×700+",
        chip3:              "💾 Solo",
        chip3Val:           "~30 MB",
        chip4:              "⚡",
        chip4Val:           "Sin instalación",
        chip5:              "🔊 Con",
        chip5Val:           "sonido",
        // Footer
        footerMade:         "Hecho con 💛 para estudiantes de primaria",
        // Lang Button
        langBtn:            "🌐 English"
    },
    en: {
        // Nav
        navGrades:          "Grades",
        navHowTo:           "How to Play",
        navScreenshots:     "Screenshots",
        navDownload:        "Download",
        // Hero
        heroBadge:          "🌟 Educational Game · 1st to 6th Grade",
        heroT1:             "Space",
        heroT2:             "Math",
        heroT3:             "🚀 Space Math Adventure — EduMath",
        heroDesc:           "Travel through the cosmos solving math operations! Earn stars ⭐, unlock astronaut ranks and become the best mathematician in the universe.",
        heroBtn1:           "⬇ Play for Free!",
        heroBtn2:           "How to Play?",
        // Grades Section
        gradesTag:          "🎓 Difficulty Levels",
        gradesTitle:        "Choose your <span>Grade!</span>",
        gradesSub:          "Each grade has problems designed especially for your age. The game grows with you!",
        grade1Name:         "1st Grade",
        grade1Ops:          "Addition & Subtraction · Numbers 1-20",
        grade2Name:         "2nd Grade",
        grade2Ops:          "Addition & Subtraction · Numbers 10-50",
        grade3Name:         "3rd Grade",
        grade3Ops:          "+ - × · Numbers 10-60",
        grade4Name:         "4th Grade",
        grade4Ops:          "+ - × ÷ · Numbers 20-100",
        grade5Name:         "5th Grade",
        grade5Ops:          "Four operations · 100-500",
        grade6Name:         "6th Grade",
        grade6Ops:          "Four operations · 500-1500",
        // How To Play Section
        howtoTag:           "🎮 Instructions",
        howtoTitle:         "How to <span>Play</span>?",
        howtoSub:           "Super easy! In less than a minute you'll be solving space problems.",
        step1Title:         "Open the Game",
        step1Desc:          "Double-click EduMath.exe. Wait for the animated welcome screen and press ENTER.",
        step2Title:         "Choose your Grade",
        step2Desc:          "Click on your school grade. There are 6 difficulty levels, from 1st to 6th grade!",
        step3Title:         "Solve It!",
        step3Desc:          "Type your answer with the keyboard and press ENTER. 10 questions per round!",
        step4Title:         "Earn Stars",
        step4Desc:          "Every correct answer gives you a star ⭐. Collect stars and rank up as an astronaut!",
        controlsTitle:      "⌨️ Game Controls",
        ctrl1Label:         "Keys 0-9",
        ctrl1Desc:          "Type answer",
        ctrl2Label:         "Enter",
        ctrl2Desc:          "Submit answer",
        ctrl3Label:         "Backspace",
        ctrl3Desc:          "Delete digit",
        // Screenshots Section
        screensTag:         "📸 Preview",
        screensTitle:       "See how the <span>Game Looks</span>",
        ss1Label:           "🌟 Welcome Screen",
        ss2Label:           "🎓 Grade Selection",
        ss3Label:           "✅ Correct Answer!",
        ss4Label:           "❌ Wrong Answer",
        ss5Label:           "🏆 Results Screen",
        robotTitle:         "Your Robot Guide is always with you!",
        robotDesc:          "It gets happy 😄 when you're right and sad 😢 when you make a mistake",
        // Ranks Section
        ranksTag:           "🏆 Achievement System",
        ranksTitle:         "What <span>Rank</span> do you get?",
        ranksSub:           "Based on your performance each round, you'll receive a special astronaut title.",
        rank1Pct:           "90% — 100%",
        rank1Name:          "Expert Astronaut",
        rank1Msg:           "EXPERT ASTRONAUT! — The best in the universe 🌟",
        rank2Pct:           "70% — 89%",
        rank2Name:          "Space Explorer",
        rank2Msg:           "SPACE EXPLORER! — You're doing great! ⭐",
        rank3Pct:           "50% — 69%",
        rank3Name:          "Cadet in Training",
        rank3Msg:           "CADET IN TRAINING! — Keep it up 💙",
        rank4Pct:           "0% — 49%",
        rank4Name:          "Keep Practicing!",
        rank4Msg:           "KEEP PRACTICING! — Every mistake is a lesson 🔥",
        // Download Section
        dlTag:              "🆓 Completely Free",
        dlTitle:            "Download <span>EduMath</span>!",
        dlDesc:             "No complicated setup. Just download, double-click and play! Compatible with Windows.",
        dlBtn:              "🚀 Download EduMath.exe",
        chip1:              "🪟 Windows",
        chip1Val:           "10/11",
        chip2:              "🖥️ Screen",
        chip2Val:           "1000×700+",
        chip3:              "💾 Only",
        chip3Val:           "~30 MB",
        chip4:              "⚡",
        chip4Val:           "No install",
        chip5:              "🔊 With",
        chip5Val:           "sound",
        // Footer
        footerMade:         "Made with 💛 for elementary students",
        // Lang Button
        langBtn:            "🌐 Español"
    }
};

// Detección y Aplicación de Idioma
function detectLanguage() {                                                                                                           
    const saved = localStorage.getItem('lang');                                                // Obtener el Lenguaje del Local Storage
    if (saved) return saved;                                                                   // Si se obtuvo el Lenguaje del Local Storage Retornar
    const browserLang = navigator.language || navigator.userLanguage;                          // Obtener el Lenguaje del Browser
    return browserLang.startsWith('es') ? 'es' : 'en';                                         // Español si es es-*, inglés para todo lo demás
}

// Aplicar traducciones al DOM
function applyLanguage(lang) {                         
    const translation = translations[lang];                                                     // Obtener Traducción según el Lenguaje
    document.querySelectorAll('[data-i18n]').forEach(element => {                               // Recorrer Elementos con Atributo data-i18n
        const key = element.getAttribute('data-i18n');                                          // Obtener Atributo data-i18n
        if (translation[key]) element.textContent = translation[key];                           // Reemplazar Texto con Traducción Correspondiente
    });
    document.documentElement.setAttribute('lang', lang);                                        // Actualizar Atributo lang del HTML para Accesibilidad
    const btn = document.getElementById('langToggleBtn');                                       // Obtener el Botón por su ID
    if (btn) btn.textContent = translation.langBtn;                                             // Actualizar Texto del Botón al Idioma Opuesto
    localStorage.setItem('lang', lang);                                                         // Guardar Idioma Seleccionado en localStorage
}

// Crear Botón Flotante de Cambio de Idioma
function createLangButton() {                                                                    
    const btn = document.createElement('button');                                                // Creamos el Elemento
    btn.id = 'langToggleBtn';                                                                    // ID para aplicar estilos desde CSS
    btn.addEventListener('click', () => {                                                        // Agregamos el Callback para el Botón
        const current = localStorage.getItem('lang') || detectLanguage();                        // Obtener Lenguaje Actual
        const next = current === 'es' ? 'en' : 'es';                                             // Alternar entre Español e Inglés
        applyLanguage(next);                                                                     // Aplicamos el Lenguaje
    });
    document.body.appendChild(btn);                                                              // Agregar Botón al Documento
}

// Efecto Fade In al hacer Scroll
const observer = new IntersectionObserver((entries) => {                                           // Instanciar Observador Intersección, Detección Elementos en Viewport 
    entries.forEach(entry => {                                                                     // Para Cada Elemento Detectado en el Viewport
        if (entry.isIntersecting){                                                                 // Si esta en Viewport
            entry.target.classList.add('visible');                                                 // Agregar Clase 'visible' para Efecto Fade In
            observer.unobserve(entry.target);                                                      // Dejar de Observar el Elemento para Mejorar Rendimiento
        }                         
    });
}, {threshold: 0.1});                                                                              // Configuración del Observador: Activar cuando el 10% del Elemento sea Visible

// Observar Elementos de la Clase 'Fade-In' para Activar Efecto al Entrar en el Viewport
const fadeInElements = document.querySelectorAll('.fade-in');                                      // Seleccionar Todos los Elementos con Clase 'reveal' 
fadeInElements.forEach(element => observer.observe(element));                                      // Observar Cada Elemento para Activar Efecto Fade In al Entrar en el Viewport  

// Inicialización 
createLangButton();                                                                              // Creación del Botón del Lenguaje
applyLanguage(detectLanguage());                                                                 // Aplicación del Lenguaje

/*****************************************************************************************************************************************************************************/
