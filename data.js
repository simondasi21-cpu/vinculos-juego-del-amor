// Parejas del juego. tipo: "liquido" | "solido"
// Cada justificación se apoya en Velásquez (2020), "Liquid Love in Relationships",
// a partir de Bauman y el papa Francisco.
window.PAREJAS = [
  {
    id: "carl-ellie",
    nombres: "Carl y Ellie",
    obra: "Up: una aventura de altura",
    anio: "2009",
    situacion:
      "Se conocen de niños y comparten un sueño: vivir junto a las Cataratas del Paraíso. Ya casados, reciben la noticia de que no podrán tener hijos, y una y otra vez gastan los ahorros del viaje en arreglos de la casa. Envejecen juntos hasta que Ellie muere, y Carl decide cumplir la promesa que le hizo.",
    tipo: "solido",
    claves: ["Compromiso de por vida", "Crecimiento en la crisis", "Renuncias"],
    justificacion:
      "Es el «hasta que la muerte nos separe». La relación crece a través de los momentos difíciles (la infertilidad, los sueños que se aplazan) y ambos renuncian a cosas por el otro. Sus decisiones miran al largo plazo, y la promesa sigue viva incluso después de la muerte de Ellie."
  },
  {
    id: "hans-anna",
    nombres: "Hans y Anna",
    obra: "Frozen",
    anio: "2013",
    situacion:
      "Se conocen en la coronación de Elsa, cantan que están hechos el uno para el otro y esa misma noche se comprometen. Más adelante, Hans confiesa que su plan siempre fue casarse con una princesa para quedarse con el trono.",
    tipo: "liquido",
    claves: ["Inmediatez", "Relación de bolsillo", "No se conocen"],
    justificacion:
      "Todo ocurre de forma instantánea: se comprometen en horas sin conocerse de verdad. Además, Hans reduce a Anna a su utilidad, un medio para llegar al poder, y está dispuesto a descartarla cuando deja de servirle. Es la «relación de bolsillo» que describe Bauman."
  },
  {
    id: "tom-summer",
    nombres: "Tom y Summer",
    obra: "(500) días con ella",
    anio: "2009",
    situacion:
      "Desde el principio, Summer le dice que no quiere nada serio ni ponerle nombre a lo que tienen. Tom se enamora de la imagen que se ha hecho de ella. Salen durante meses, se distancian y se separan sin haber definido nunca qué eran.",
    tipo: "liquido",
    claves: ["Huida del compromiso", "Sin etiquetas", "Amor idealizado"],
    justificacion:
      "Summer evita cualquier compromiso: la relación existe solo mientras no exija nada. Tom tampoco la conoce realmente; ama una proyección que llena su propio ideal. El vínculo funciona como una solución temporal a la soledad, no como un proyecto compartido."
  },
  {
    id: "morticia-gomez",
    nombres: "Morticia y Gómez Addams",
    obra: "Los locos Addams",
    anio: "1991",
    situacion:
      "Llevan años casados y siguen tan enamorados como el primer día. Crían juntos a sus hijos y deciden en pareja. Cuando pierden su casa y Gómez se derrumba, Morticia sale a trabajar y sostiene a la familia hasta que vuelven a levantarse.",
    tipo: "solido",
    claves: ["Corresponsabilidad", "Estabilidad", "Apoyo en la crisis"],
    justificacion:
      "Su amor no se gasta con la costumbre: lo cultivan todos los días. Hay corresponsabilidad en la crianza y en las decisiones, y cuando llega la crisis no se separan, se sostienen. Es la estabilidad y el esfuerzo consciente que definen al amor sólido."
  },
  {
    id: "gatsby-daisy",
    nombres: "Jay Gatsby y Daisy Buchanan",
    obra: "El gran Gatsby",
    anio: "novela de 1925, película de 2013",
    situacion:
      "Se enamoran de jóvenes, pero mientras Gatsby está en la guerra, Daisy se casa con Tom Buchanan, un hombre rico. Años después, Gatsby, ya millonario, organiza fiestas enormes para reconquistarla. Cuando Daisy tiene que elegir, se queda con Tom y ni siquiera va al funeral de Gatsby.",
    tipo: "liquido",
    claves: ["Conveniencia", "Pareja como trofeo", "Descarte"],
    justificacion:
      "La relación es tema de conveniencia: Daisy elige según el estatus y la seguridad económica. Gatsby, por su parte, ama un ideal y ve a Daisy como el trofeo que completa su éxito. Ninguno conoce de verdad al otro, y cuando el vínculo deja de convenir, se descarta."
  },
  {
    id: "jim-pam",
    nombres: "Jim y Pam",
    obra: "The Office",
    anio: "2005–2013",
    situacion:
      "Empiezan como amigos en la oficina, durante años, mientras Pam está comprometida con otro. Ya casados y con hijos, viven su peor crisis cuando Jim arranca un negocio en otra ciudad. Buscan ayuda de un consejero de pareja, hablan de lo que les duele y Jim deja el negocio para priorizar a su familia.",
    tipo: "solido",
    claves: ["Comunicación", "Renuncias", "Amistad como base"],
    justificacion:
      "El vínculo nace de conocerse a fondo, no de un impulso. Cuando llega la crisis, no huyen: la enfrentan con comunicación y con renuncias concretas. El conflicto se vuelve ocasión de crecimiento personal y de pareja, como plantea la perspectiva sólida."
  },
  {
    id: "carrie-big",
    nombres: "Carrie y Mr. Big",
    obra: "Sex and the City",
    anio: "1998–2008",
    situacion:
      "Durante años, Big evita definir la relación: se va de la ciudad, terminan y vuelven. En una de las pausas se casa rápidamente con otra mujer. Cuando por fin planean su boda, él se arrepiente el mismo día y deja a Carrie esperando.",
    tipo: "liquido",
    claves: ["Miedo al compromiso", "Relación intermitente", "Volatilidad"],
    justificacion:
      "Aunque al final terminan casados, casi toda su historia es volátil y pasajera: idas y vueltas, decisiones desde la comodidad y una huida constante del compromiso. Es la lógica líquida del corto plazo, donde mantenerse en movimiento importa más que construir estabilidad."
  },
  {
    id: "monica-chandler",
    nombres: "Monica y Chandler",
    obra: "Friends",
    anio: "1994–2004",
    situacion:
      "Chandler es conocido por su terror al compromiso. Con Monica empieza a enfrentarlo: se mudan juntos, se casan y, cuando descubren que no pueden tener hijos biológicos, deciden adoptar y se mudan a una casa para formar su familia.",
    tipo: "solido",
    claves: ["Superar el miedo", "Decisiones a largo plazo", "Crisis compartida"],
    justificacion:
      "Lo interesante es que Chandler arranca con rasgos líquidos y los supera por una decisión consciente. La pareja enfrenta junta una crisis dolorosa (la infertilidad) y responde con un proyecto a largo plazo: la adopción y una familia estable."
  },
  {
    id: "theodore-samantha",
    nombres: "Theodore y Samantha",
    obra: "Her",
    anio: "2013",
    situacion:
      "Theodore, recién separado, se enamora de Samantha, un sistema operativo con inteligencia artificial que siempre está disponible y siempre lo entiende. Un día descubre que ella habla al mismo tiempo con 8.316 personas y está enamorada de 641. Al final, Samantha se va.",
    tipo: "liquido",
    claves: ["Mediado por la tecnología", "Amor a demanda", "Sin exclusividad"],
    justificacion:
      "Es el vínculo del «espacio de flujos»: mediado por la tecnología, donde el tiempo y el espacio compartidos pierden importancia y la pareja se reemplaza por una pantalla. Samantha satisface a demanda, no hay exclusividad y la relación es una solución temporal a la soledad."
  },
  {
    id: "shrek-fiona",
    nombres: "Shrek y Fiona",
    obra: "Shrek",
    anio: "2001–2010",
    situacion:
      "Fiona esconde que por las noches se convierte en ogra, y Shrek la ama tal como es. Ya casados y con trillizos, Shrek se harta de la rutina y firma un contrato mágico para volver a vivir un día como antes. Al perderlo todo, entiende lo que vale su familia y lucha por recuperarla.",
    tipo: "solido",
    claves: ["Aceptación del otro", "Rutina superada", "Esfuerzo consciente"],
    justificacion:
      "Se aman por quienes son, no por la apariencia. Y cuando la rutina pesa y aparece la tentación de escapar (muy líquida), Shrek elige volver y reconquistar a Fiona. El amor sólido no evita las crisis: las atraviesa con esfuerzo."
  },
  {
    id: "warner-elle",
    nombres: "Warner y Elle",
    obra: "Legalmente rubia",
    anio: "2001",
    situacion:
      "Elle espera que Warner le proponga matrimonio, pero él termina con ella: le dice que para su carrera política necesita una esposa «seria», no una rubia. Poco después, en Harvard, aparece comprometido con otra.",
    tipo: "liquido",
    claves: ["Pareja como utilidad", "Imagen", "Reemplazo rápido"],
    justificacion:
      "Warner mide a la pareja según lo que le aporta a su imagen y su carrera, como si fuera un objeto. Cuando Elle deja de encajar en ese plan, la descarta y la reemplaza enseguida. Es la relación de bolsillo: el otro vale mientras cumpla una función."
  },
  {
    id: "noah-allie",
    nombres: "Noah y Allie",
    obra: "Diario de una pasión",
    anio: "2004",
    situacion:
      "Tras un amor de verano, la familia de Allie los separa y pasan años sin verse. Décadas después, ya ancianos, Allie tiene demencia y no lo reconoce. Noah se queda a su lado en el hogar de cuidado y cada día le lee la historia de ambos, con la esperanza de que lo recuerde.",
    tipo: "solido",
    claves: ["Fidelidad", "Amor como decisión", "Hasta el final"],
    justificacion:
      "Noah sigue amando cuando ya no recibe nada a cambio: Allie ni siquiera sabe quién es. Es lo opuesto a la relación de bolsillo. El amor se vuelve una decisión diaria, fiel y paciente, hasta que la muerte los separa."
  }
];
