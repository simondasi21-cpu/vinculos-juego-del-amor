(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const NOMBRE_TIPO = { liquido: "amor líquido", solido: "amor sólido" };

  const pantallas = {
    inicio: $("#pantalla-inicio"),
    juego: $("#pantalla-juego"),
    final: $("#pantalla-final")
  };

  const estado = {
    parejas: [],
    indice: 0,
    jugadores: [],   // [{ nombre, puntos }]
    turno: 0,
    respuestas: [],  // [{ pareja, elegido, acierto, jugador }]
    respondida: false
  };

  function barajar(lista) {
    const copia = lista.slice();
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function mostrar(nombre) {
    Object.entries(pantallas).forEach(([k, el]) => { el.hidden = k !== nombre; });
    window.scrollTo({ top: 0 });
  }

  // ---------- Inicio ----------

  const form = $("#form-inicio");
  const camposEquipos = $("#campos-equipos");

  form.addEventListener("change", (e) => {
    if (e.target.name === "modo") camposEquipos.hidden = e.target.value !== "equipos";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = new FormData(form);
    if (datos.get("modo") === "equipos") {
      estado.jugadores = [
        { nombre: (datos.get("eq1") || "").trim() || "Equipo 1", puntos: 0 },
        { nombre: (datos.get("eq2") || "").trim() || "Equipo 2", puntos: 0 }
      ];
    } else {
      estado.jugadores = [{ nombre: "Puntos", puntos: 0 }];
    }
    iniciar();
  });

  function iniciar() {
    estado.parejas = barajar(window.PAREJAS);
    estado.indice = 0;
    estado.turno = 0;
    estado.respuestas = [];
    estado.jugadores.forEach((j) => { j.puntos = 0; });
    mostrar("juego");
    pintarPareja();
  }

  // ---------- Juego ----------

  const opciones = $("#opciones");
  const resultado = $("#resultado");

  function pintarMarcador() {
    const cont = $("#puntos");
    cont.innerHTML = "";
    estado.jugadores.forEach((j, i) => {
      const caja = document.createElement("div");
      caja.className = "punto-caja" + (estado.jugadores.length > 1 && i === estado.turno ? " activo" : "");
      caja.innerHTML = '<span class="p-nombre"></span><span class="p-valor"></span>';
      caja.querySelector(".p-nombre").textContent = j.nombre;
      caja.querySelector(".p-valor").textContent = j.puntos;
      cont.appendChild(caja);
    });
  }

  function pintarPareja() {
    const p = estado.parejas[estado.indice];
    const total = estado.parejas.length;
    estado.respondida = false;

    $("#txt-progreso").textContent = `Pareja ${estado.indice + 1} de ${total}`;
    $("#barra").style.width = `${(estado.indice / total) * 100}%`;

    const turno = $("#turno");
    if (estado.jugadores.length > 1) {
      turno.hidden = false;
      turno.textContent = `Turno de ${estado.jugadores[estado.turno].nombre}`;
    } else {
      turno.hidden = true;
    }
    pintarMarcador();

    $("#obra").textContent = p.obra;
    $("#anio").textContent = `(${p.anio})`;
    $("#pareja").textContent = p.nombres;
    $("#situacion").textContent = p.situacion;

    opciones.classList.remove("respondida");
    opciones.querySelectorAll(".btn-opcion").forEach((b) => {
      b.classList.remove("elegida");
      b.disabled = false;
      b.removeAttribute("aria-pressed");
    });
    resultado.hidden = true;
    resultado.classList.remove("entra");
  }

  function responder(tipo) {
    if (estado.respondida || pantallas.juego.hidden) return;
    estado.respondida = true;

    const p = estado.parejas[estado.indice];
    const acierto = tipo === p.tipo;
    const jugador = estado.jugadores[estado.turno];
    if (acierto) jugador.puntos += 1;
    estado.respuestas.push({ pareja: p, elegido: tipo, acierto, jugador: jugador.nombre });

    opciones.classList.add("respondida");
    opciones.querySelectorAll(".btn-opcion").forEach((b) => {
      b.disabled = true;
      if (b.dataset.tipo === tipo) {
        b.classList.add("elegida");
        b.setAttribute("aria-pressed", "true");
      }
    });

    const quien = estado.jugadores.length > 1 ? `${jugador.nombre} gana un punto.` : "Ganan un punto.";
    $("#veredicto").textContent = acierto ? `¡Correcto! ${quien}` : "No esta vez.";
    $("#respuesta").textContent = acierto
      ? `Es ${NOMBRE_TIPO[p.tipo]}.`
      : `La respuesta correcta es ${NOMBRE_TIPO[p.tipo]}.`;

    const claves = $("#claves");
    claves.innerHTML = "";
    p.claves.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      claves.appendChild(li);
    });
    $("#justificacion").textContent = p.justificacion;

    const ultima = estado.indice === estado.parejas.length - 1;
    $("#btn-siguiente").textContent = ultima ? "Ver resultados" : "Siguiente pareja";

    pintarMarcador();
    $("#barra").style.width = `${((estado.indice + 1) / estado.parejas.length) * 100}%`;

    resultado.dataset.tipo = p.tipo;
    resultado.hidden = false;
    void resultado.offsetWidth; // reinicia la animación
    resultado.classList.add("entra");
    resultado.focus({ preventScroll: true });
    resultado.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  }

  function siguiente() {
    if (!estado.respondida) return;
    if (estado.jugadores.length > 1) estado.turno = (estado.turno + 1) % estado.jugadores.length;
    estado.indice += 1;
    if (estado.indice >= estado.parejas.length) {
      terminar();
    } else {
      pintarPareja();
      window.scrollTo({ top: 0 });
      $("#tarjeta").focus?.();
    }
  }

  opciones.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-opcion");
    if (btn) responder(btn.dataset.tipo);
  });
  $("#btn-siguiente").addEventListener("click", siguiente);

  document.addEventListener("keydown", (e) => {
    if (pantallas.juego.hidden || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (!estado.respondida && k === "l") responder("liquido");
    else if (!estado.respondida && k === "s") responder("solido");
    else if (estado.respondida && (k === "enter" || k === " ") && document.activeElement === resultado) {
      e.preventDefault();
      siguiente();
    }
  });

  // ---------- Final ----------

  function mensajeFinal(aciertos, total) {
    const r = aciertos / total;
    if (r === 1) return "Perfecto. Distinguen muy bien un vínculo que se descarta de uno que se construye.";
    if (r >= 0.75) return "Muy bien. Reconocen casi siempre las señales del amor líquido y del sólido.";
    if (r >= 0.5) return "Van por buen camino. Repasen las parejas en las que fallaron: ahí están las claves.";
    return "El amor líquido a veces se disfraza de romance. Repasen las justificaciones y vuelvan a intentarlo.";
  }

  function terminar() {
    const total = estado.parejas.length;
    const cab = $("#final-puntaje");
    cab.innerHTML = "";

    if (estado.jugadores.length > 1) {
      const [a, b] = estado.jugadores;
      $("#final-etiqueta").textContent = "Resultado por equipos";
      const cont = document.createElement("div");
      cont.className = "final-equipos";
      estado.jugadores.forEach((j) => {
        const d = document.createElement("div");
        d.className = "final-equipo";
        d.innerHTML = '<span class="fe-nombre"></span><span class="fe-valor"></span>';
        d.querySelector(".fe-nombre").textContent = j.nombre;
        d.querySelector(".fe-valor").textContent = j.puntos;
        cont.appendChild(d);
      });
      cab.appendChild(cont);
      const aciertos = a.puntos + b.puntos;
      let ganador;
      if (a.puntos === b.puntos) ganador = "Empate.";
      else ganador = `Gana ${a.puntos > b.puntos ? a.nombre : b.nombre}.`;
      $("#final-mensaje").textContent = `${ganador} Entre los dos acertaron ${aciertos} de ${total}. ${mensajeFinal(aciertos, total)}`;
    } else {
      const aciertos = estado.jugadores[0].puntos;
      $("#final-etiqueta").textContent = "Acertaron";
      cab.innerHTML = `${aciertos}<small> de ${total}</small>`;
      $("#final-mensaje").textContent = mensajeFinal(aciertos, total);
    }

    const repaso = $("#repaso");
    repaso.innerHTML = "";
    estado.respuestas.forEach((r) => {
      const li = document.createElement("li");
      const equipo = estado.jugadores.length > 1 ? ` (${r.jugador})` : "";
      li.innerHTML = '<span class="r-nombre"></span><span class="r-detalle"></span><span class="r-tipo"></span>';
      li.querySelector(".r-nombre").textContent = r.pareja.nombres;
      li.querySelector(".r-detalle").textContent =
        (r.acierto ? "Acertaron" : `Respondieron ${NOMBRE_TIPO[r.elegido]}`) + equipo;
      const t = li.querySelector(".r-tipo");
      t.textContent = r.pareja.tipo === "liquido" ? "Líquido" : "Sólido";
      t.classList.add(r.pareja.tipo);
      repaso.appendChild(li);
    });

    mostrar("final");
  }

  $("#btn-reiniciar").addEventListener("click", () => mostrar("inicio"));
})();
