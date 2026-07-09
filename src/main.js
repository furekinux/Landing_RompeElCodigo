//  CAPTURA Y SELECTORES DEL DOM
// =========================================================================

// Modales del Sistema
const modalPrograma = document.getElementById("program-modal");
const fondoModalPrograma = document.getElementById("program-modal-backdrop");
const cerrarModalPrograma = document.getElementById("program-modal-close");

// Elementos de la Barra de Navegación del Header
const enlaceProgramasHeader = document.getElementById("nav-link-inicio");
const enlaceNosotrosHeader = document.getElementById("nav-link-nosotros");
const enlaceCronogramaHeader = document.getElementById("nav-link-cronograma");
const botonPreRegistroHeader = document.getElementById(
  "navbar-btn-postulacion",
);

// Botones de Acción de Portada (CTA)
const botonHeroInscribirse = document.getElementById("hero-btn-apply");
const botonHeroExplorar = document.getElementById("hero-btn-explore");
const tarjetaHeroDescubrir = document.getElementById("hero-discover-card");
const heroCenterContent = document.querySelector(".hero-center-content");

const seccionNavegacion = [
  { id: "inicio", link: enlaceProgramasHeader },
  { id: "nosotros", link: enlaceNosotrosHeader }, // Corregido: "metodologia" -> "nosotros"
  { id: "postulacion", link: enlaceCronogramaHeader },
];

// Carrusel de Programas / Carrusel Horizontal
const carruselContenedor = document.getElementById(
  "programs-carousel-container",
);
const botonCarruselIzquierda = document.getElementById("carousel-btn-left");
const botonCarruselDerecha = document.getElementById("carousel-btn-right");

// Carrusel de Mentores
const mentoresCarouselWrapper = document.getElementById(
  "mentors-carousel-wrapper",
);
const botonMentoresIzquierda = document.getElementById(
  "mentor-carousel-btn-left",
);
const botonMentoresDerecha = document.getElementById(
  "mentor-carousel-btn-right",
);

// Elementos de Notificaciones Flotantes (Toasts)
const toastFlotante = document.getElementById("global-toast");
const textoToastFlotante = document.getElementById("global-toast-text");

// Elemento del panel dinámico de métricas (Estadísticas Dinámicas)
const panelMétricasDetalle = document.getElementById("stats-dynamic-detail");

// Selector del programa en el formulario (si existe en algún momento, de lo contrario null)
const selectorPrograma = document.getElementById("selector-programa");

// Datos de los Programas Académicos para el modal dinámico
const PROGRAMAS = [
  {
    id: "software-dev",
    titulo: "Desarrollo de Software con Python apoyado por IA",
    subtitulo: "Módulo Técnico - 80 horas de inmersión práctica",
    descripcion:
      "Ideal si deseas iniciarte en programación desde cero. Aprende lógica y estructuras de datos, control de versiones con Git/GitHub, bases de datos relacionales con SQL, APIs y despliegue inicial en la nube. Todo ello optimizado con herramientas de inteligencia artificial bajo un marco ético.",
    duracion: "80 horas",
    proyeccionSalarial: "Alta demanda en roles Jr. de Desarrollo",
    urlImagen: "./Assets/SalonClases.jpeg",
    competencias: [
      "Lógica de Programación y Estructura de Datos",
      "Bases de Datos con SQL",
      "Git & GitHub para Control de Versiones",
      "Creación de APIs REST con Python",
      "Uso de IA como Copiloto de Desarrollo",
    ],
    mentores: ["Cristian Díaz Tovar"],
  },
  {
    id: "ai-engineering",
    titulo: "Marcos de trabajo ágiles",
    subtitulo: "Agilidad aplicada: Equipos, Flujo y Mejora Continua - 40 horas",
    descripcion:
      "Especialmente diseñado para perfiles con interés en la gestión de proyectos, equipos o producto. Domina los marcos de trabajo ágiles Scrum y Kanban, métricas de flujo de valor, acuerdos de equipo, facilitación de ceremonias ágiles y fundamentos de Product Ops con simulaciones reales.",
    duracion: "40 horas",
    proyeccionSalarial: "Gestión Ágil de Proyectos y Product Management",
    urlImagen: "./Assets/MetodologiasAgiles.JPEG",
    competencias: [
      "Marcos Scrum & Kanban",
      "Métricas de Flujo y Eficiencia",
      "Facilitación y Gestión de Equipos",
      "Fundamentos de Product Operations",
      "Simulación de Sprints y Retrospectivas",
    ],
    mentores: ["Francisco Capone", "Wilfredo Acosta"],
  },
  {
    id: "english",
    titulo: "Comunicación estratégica",
    subtitulo: "Comunicación Técnica y Storytelling de Negocios - 40 horas",
    descripcion:
      "Para quienes presentan ideas técnicas, demos de producto o interactúan con clientes y stakeholders. Traduce conceptos técnicos complejos en valor de negocio a través de Storytelling, Pitch y manejo ágil de Q&A. Incluye talleres intensivos de oratoria presencial.",
    duracion: "40 horas",
    proyeccionSalarial: "Liderazgo Técnico y Consultoría Tech",
    urlImagen: "./Assets/HabilidadesBlandas.jpg",
    competencias: [
      "Storytelling Técnico y Demos de Producto",
      "Estructura de Pitch de Negocios & Q&A",
      "Inteligencia Emocional y Manejo de Estrés",
      "Cultura de Feedback e Interacción Estratégica",
      "Talleres Prácticos de Oratoria y Expresión",
    ],
    mentores: ["Wilfredo Acosta", "Javier Arratia"],
  },
  {
    id: "adaptive",
    titulo: "Postulación a Múltiples Programas",
    subtitulo: "Preguntas Frecuentes - Flexibilidad de aprendizaje",
    descripcion:
      "Al postular podrás elegir más de un programa. Durante el proceso de selección evaluaremos si tu perfil se ajusta a la exigencia académica requerida para cursar más de uno simultáneamente o de forma consecutiva. Te invitamos a postularte y retar tu potencial.",
    duracion: "Variable por Cohorte",
    proyeccionSalarial: "Doble o Triple Certificación Técnica",
    urlImagen: "./Assets/EntradaCampus.png",
    competencias: [
      "Flexibilidad Horaria y Autogestión",
      "Certificación Académica Múltiple",
      "Evaluación y Mentoría Personalizada",
      "Ruta de Aprendizaje Adaptativa",
      "Acceso Completo a la Comunidad Tech",
    ],
    mentores: ["Equipo Académico Campuslands"],
  },
];

// Guardar la referencia del programa activo del modal
let programaSeleccionadoID = "software-dev";

// 3. FUNCIONES AUXILIARES (Utilidades limpias)
// =========================================================================

// Lanza una alerta flotante amigable al usuario
function mostrarNotificacion(mensaje) {
  if (!toastFlotante || !textoToastFlotante) return;
  textoToastFlotante.innerText = mensaje;

  toastFlotante.style.transform = "translateY(0)";
  toastFlotante.style.opacity = "1";
  toastFlotante.style.pointerEvents = "auto";

  setTimeout(() => {
    toastFlotante.style.transform = "translateY(80px)";
    toastFlotante.style.opacity = "0";
    toastFlotante.style.pointerEvents = "none";
  }, 4000);
}

// Desplazamiento suave de la pantalla hacia la sección deseada
function desplazarHacia(idSeccion) {
  const seccion = document.getElementById(idSeccion);
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function seleccionarNavActivo(idActivo) {
  seccionNavegacion.forEach((item) => {
    if (!item.link) return;
    item.link.classList.toggle("active", item.id === idActivo);
  });
}

function actualizarEstadoScroll() {
  if (heroCenterContent) {
    heroCenterContent.classList.toggle(
      "scroll-transition",
      window.scrollY > 24,
    );
  }

  let seccionActiva = seccionNavegacion[0].id;
  seccionNavegacion.forEach((item) => {
    const seccion = document.getElementById(item.id);
    if (!seccion) return;
    if (window.scrollY + window.innerHeight * 0.25 >= seccion.offsetTop) {
      seccionActiva = item.id;
    }
  });

  seleccionarNavActivo(seccionActiva);
}

// 4. INTERACCIONES DINÁMICAS (Hover de estadísticas y Carruseles)
// =========================================================================

function configurarCarruselPorBotones(
  contenedor,
  botonIzquierda,
  botonDerecha,
  separacion = 24,
) {
  if (!contenedor || !botonIzquierda || !botonDerecha) return;

  const obtenerPaso = () => {
    const primerElemento = contenedor.querySelector(
      ".program-card, .testimonial-reel-card",
    );
    if (primerElemento) {
      return primerElemento.clientWidth + separacion;
    }
    return 324;
  };

  botonIzquierda.addEventListener("click", () => {
    contenedor.scrollBy({
      left: -obtenerPaso(),
      behavior: "smooth",
    });
  });

  botonDerecha.addEventListener("click", () => {
    contenedor.scrollBy({
      left: obtenerPaso(),
      behavior: "smooth",
    });
  });
}

function configurarCarrusel() {
  configurarCarruselPorBotones(
    carruselContenedor,
    botonCarruselIzquierda,
    botonCarruselDerecha,
    32,
  );
}

function configurarMentoresCarrusel() {
  configurarCarruselPorBotones(
    mentoresCarouselWrapper,
    botonMentoresIzquierda,
    botonMentoresDerecha,
    24,
  );
}

function configurarMentoresCards() {
  const mentorCards = document.querySelectorAll(".testimonial-reel-card");
  if (!mentorCards.length) return;

  mentorCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-expanded");
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.classList.toggle("is-expanded");
      }
    });
  });
}

// 5. MODAL DETALLADO DE PROGRAMAS (Apertura y Cierre)
// =========================================================================

const modalTitulo = document.getElementById("p-modal-title");
const modalSubtitulo = document.getElementById("p-modal-subtitle");
const modalDescripcion = document.getElementById("p-modal-description");
const modalDuracion = document.getElementById("p-modal-duration");
const modalSalario = document.getElementById("p-modal-salary");
const modalListaCompetencias = document.getElementById("p-modal-skills-list");
const modalListaMentores = document.getElementById("p-modal-mentors-list");
const modalImagen = document.getElementById("p-modal-image");
const modalBotonAplicarInner = document.getElementById("p-modal-apply-btn");

function abrirModalPrograma(idPrograma) {
  const programa = PROGRAMAS.find((p) => p.id === idPrograma);
  if (
    !programa ||
    !modalTitulo ||
    !modalSubtitulo ||
    !modalDescripcion ||
    !modalDuracion ||
    !modalSalario ||
    !modalImagen ||
    !modalListaCompetencias ||
    !modalListaMentores ||
    !modalPrograma
  )
    return;

  programaSeleccionadoID = idPrograma;

  // Actualizar contenido de los textos en el modal
  modalTitulo.innerText = programa.titulo;
  modalSubtitulo.innerText = programa.subtitulo;
  modalDescripcion.innerText = programa.descripcion;
  modalDuracion.innerText = programa.duracion;
  modalSalario.innerText = programa.proyeccionSalarial;
  modalImagen.src = programa.urlImagen;
  modalImagen.alt = programa.titulo;

  // Limpiar e insertar nuevas competencias (Habilidades / Skills)
  modalListaCompetencias.innerHTML = "";
  programa.competencias.forEach((competencia) => {
    const elementoLista = document.createElement("li");
    elementoLista.className = "modal-competency-item";
    elementoLista.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: var(--color-sky-blue);"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${competencia}</span>
    `;
    modalListaCompetencias.appendChild(elementoLista);
  });

  // Limpiar e insertar mentores
  modalListaMentores.innerHTML = "";
  programa.mentores.forEach((mentor) => {
    const contenedorMentor = document.createElement("div");
    contenedorMentor.className = "modal-mentor-item";
    contenedorMentor.innerHTML = `
      <span class="modal-mentor-dot"></span>
      <span>${mentor}</span>
    `;
    modalListaMentores.appendChild(contenedorMentor);
  });

  // Mostrar el modal
  modalPrograma.classList.add("show");
  document.body.style.overflow = "hidden"; // Detener scroll de fondo
}

function cerrarModal() {
  if (modalPrograma) {
    modalPrograma.classList.remove("show");
    document.body.style.overflow = "auto"; // Restaurar scroll normal
  }
}

function configurarModalEventos() {
  const tarjetaDesarrollo = document.getElementById(
    "program-card-software-dev",
  );
  const tarjetaIA = document.getElementById("program-card-ai-engineering");
  const tarjetaIngles = document.getElementById("program-card-english");
  const tarjetaAdaptativas = document.getElementById("program-card-adaptive");

  if (tarjetaDesarrollo)
    tarjetaDesarrollo.addEventListener("click", () =>
      abrirModalPrograma("software-dev"),
    );
  if (tarjetaIA)
    tarjetaIA.addEventListener("click", () =>
      abrirModalPrograma("ai-engineering"),
    );
  if (tarjetaIngles)
    tarjetaIngles.addEventListener("click", () =>
      abrirModalPrograma("english"),
    );
  if (tarjetaAdaptativas)
    tarjetaAdaptativas.addEventListener("click", () =>
      abrirModalPrograma("adaptive"),
    );

  if (cerrarModalPrograma)
    cerrarModalPrograma.addEventListener("click", cerrarModal);
  if (fondoModalPrograma)
    fondoModalPrograma.addEventListener("click", cerrarModal);

  if (modalBotonAplicarInner) {
    modalBotonAplicarInner.addEventListener("click", () => {
      if (selectorPrograma) {
        selectorPrograma.value = programaSeleccionadoID;
      }
      cerrarModal();
      desplazarHacia("postulacion");
      const programaObj = PROGRAMAS.find(
        (p) => p.id === programaSeleccionadoID,
      );
      mostrarNotificacion(
        `Iniciando postulación en: ${programaObj ? programaObj.titulo : ""}`,
      );
    });
  }
}

function configurarModalPoliticas() {
  const modalPoliticas = document.getElementById("policies-modal");
  const cerrarModalPoliticas = document.getElementById("policies-modal-close");
  const fondoModalPoliticas = document.getElementById(
    "policies-modal-backdrop",
  );

  const linkPrivacidad = document.getElementById("footer-link-privacidad");
  const linkTerminos = document.getElementById("footer-link-terminos");

  const botonesTabs = document.querySelectorAll(".policy-tab-btn");
  const panelesTabs = document.querySelectorAll(".policy-tab-pane");

  function abrirModal(tabInicial) {
    if (modalPoliticas) {
      modalPoliticas.classList.add("show");
      document.body.style.overflow = "hidden";
      activarTab(tabInicial);
    }
  }

  function cerrar() {
    if (modalPoliticas) {
      modalPoliticas.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  }

  function activarTab(tabId) {
    botonesTabs.forEach((btn) => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    panelesTabs.forEach((pane) => {
      if (pane.id === `policy-content-${tabId}`) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });
  }

  if (linkPrivacidad) {
    linkPrivacidad.addEventListener("click", (e) => {
      e.preventDefault();
      abrirModal("privacidad");
    });
  }

  if (linkTerminos) {
    linkTerminos.addEventListener("click", (e) => {
      e.preventDefault();
      abrirModal("terminos");
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cerrar();
    }
  });

  if (cerrarModalPoliticas) {
    cerrarModalPoliticas.addEventListener("click", cerrar);
  }

  if (fondoModalPoliticas) {
    fondoModalPoliticas.addEventListener("click", cerrar);
  }

  botonesTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabTarget = btn.getAttribute("data-tab");
      activarTab(tabTarget);
    });
  });
}

// 9. ARRANQUE E INICIALIZACIÓN DE LA APLICACIÓN
// =========================================================================

function iniciarAplicacion() {
  // Activar todos los eventos dinámicos interactivos
  // configurarHoverEstadisticas(); // Comentado porque no hay definicion en el snippet
  configurarCarrusel();
  configurarMentoresCarrusel();
  configurarMentoresCards();
  configurarModalEventos();
  // configurarWhatsAppEventos(); // Comentado
  // configurarTestimoniosVideos(); // Comentado
  // configurarReproductorVideo(); // Comentado
  // configurarMiniGaleria(); // Comentado
  configurarModalPoliticas();

  // Enlazar clics de la barra de navegación del Header estándar (Scroll suave)
  if (enlaceProgramasHeader)
    enlaceProgramasHeader.addEventListener("click", () =>
      desplazarHacia("inicio"),
    );
  if (enlaceNosotrosHeader)
    enlaceNosotrosHeader.addEventListener(
      "click",
      () => desplazarHacia("nosotros"), // MODIFICACIÓN SOLICITADA
    );
  if (enlaceCronogramaHeader)
    enlaceCronogramaHeader.addEventListener("click", () =>
      desplazarHacia("postulacion"),
    );
  if (botonPreRegistroHeader)
    botonPreRegistroHeader.addEventListener("click", () =>
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfsaddZB-6TpueTyVQSOxBAgX-oehBQBmMsXfofgWRZzPAw5g/viewform?usp=sharing&ouid=100294761082486334027",
        "_blank",
      ),
    );

  // Acciones secundarias en botones y secciones interactivas
  if (botonHeroInscribirse)
    botonHeroInscribirse.addEventListener("click", () =>
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfsaddZB-6TpueTyVQSOxBAgX-oehBQBmMsXfofgWRZzPAw5g/viewform?usp=sharing&ouid=100294761082486334027",
        "_blank",
      ),
    );
  if (botonHeroExplorar)
    botonHeroExplorar.addEventListener("click", () =>
      window.open(
        "https://drive.google.com/file/d/1nAq04ka66F56Y1ZeOHHbJSPxYIaWoOA2/view?usp=sharing",
      ),
    );
  if (tarjetaHeroDescubrir)
    tarjetaHeroDescubrir.addEventListener("click", () =>
      desplazarHacia("metodologia"),
    );

  // Efectos de scroll y navegación
  actualizarEstadoScroll();
  window.addEventListener("scroll", actualizarEstadoScroll);
}

// Inicializar el sistema en cuanto se tiene cargado el DOM
window.addEventListener("DOMContentLoaded", iniciarAplicacion);
