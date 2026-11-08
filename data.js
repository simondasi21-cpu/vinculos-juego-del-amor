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
  },

  // ===================== PELÍCULAS: AMOR SÓLIDO =====================
  {
    id: "bob-helen",
    nombres: "Bob y Helen Parr",
    obra: "Los Increíbles",
    anio: "2004 y 2018",
    situacion:
      "Bob extraña su vida de superhéroe y empieza a hacer misiones a escondidas, diciendo que va al trabajo. Cuando Helen lo descubre, en lugar de irse, sale a rescatarlo y enfrentan juntos al villano. Años después, Bob se queda en casa cuidando a los niños para que Helen pueda trabajar.",
    tipo: "solido",
    claves: ["Corresponsabilidad", "Perdón", "Equipo"],
    justificacion:
      "La mentira de Bob abre una crisis real, pero la pareja no se rompe: la atraviesan con perdón y trabajo en equipo. Luego se reparten las cargas del hogar para que los dos crezcan. Es corresponsabilidad y renuncia pensando en la familia, no en el capricho de cada uno."
  },
  {
    id: "westley-buttercup",
    nombres: "Westley y Buttercup",
    obra: "La princesa prometida",
    anio: "1987",
    situacion:
      "Westley responde a todo lo que Buttercup le pide con un «como desees». Se va a buscar fortuna para casarse con ella y le llega la noticia de que murió. Años después vuelve, y supera piratas, gigantes y pantanos para rescatarla de un matrimonio arreglado con el príncipe Humperdinck.",
    tipo: "solido",
    claves: ["Fidelidad", "Esfuerzo", "Constancia"],
    justificacion:
      "Su amor resiste el tiempo, la distancia y la creencia de que el otro había muerto. Westley no busca satisfacción inmediata: se esfuerza durante años para construir un futuro juntos. Es la duración y la constancia que definen la perspectiva sólida."
  },
  {
    id: "aragorn-arwen",
    nombres: "Aragorn y Arwen",
    obra: "El señor de los anillos",
    anio: "2001–2003",
    situacion:
      "Arwen es una elfa inmortal y Aragorn, un hombre mortal. Su padre le pide que se vaya con su pueblo a las Tierras Imperecederas, lejos de la guerra. Arwen decide quedarse y renunciar a la inmortalidad para compartir una vida mortal con Aragorn.",
    tipo: "solido",
    claves: ["Renuncia", "Decisión definitiva", "Compromiso de por vida"],
    justificacion:
      "La renuncia es el centro de esta historia: Arwen entrega algo inmenso, su inmortalidad, para unirse a Aragorn. No es un impulso, es una decisión pensada para toda la vida. Es exactamente lo contrario de mantener siempre una puerta de salida abierta."
  },
  {
    id: "walle-eva",
    nombres: "WALL·E y EVA",
    obra: "WALL·E",
    anio: "2008",
    situacion:
      "Cuando EVA se apaga después de encontrar una planta, WALL·E la cuida durante días: la protege de la lluvia y la lleva a todas partes, aunque ella no responde. Al final, cuando él queda dañado y pierde la memoria, EVA lo repara y no se rinde hasta que vuelve a reconocerla.",
    tipo: "solido",
    claves: ["Cuidado", "Paciencia", "Reciprocidad"],
    justificacion:
      "Los dos aman sin recibir nada a cambio en los momentos más difíciles: primero WALL·E cuida a una EVA inmóvil, y luego ella lo cuida a él. El vínculo se basa en el cuidado paciente y mutuo, no en la utilidad ni en la gratificación inmediata."
  },
  {
    id: "homer-marge",
    nombres: "Homero y Marge",
    obra: "Los Simpson: la película",
    anio: "2007",
    situacion:
      "Después de que Homero pone en peligro a toda la ciudad y se niega a ayudar, Marge se va con los niños y le deja un mensaje grabado sobre el video de su boda. Homero entiende que tiene que cambiar, regresa a Springfield y arriesga su vida para salvar a su familia.",
    tipo: "solido",
    claves: ["Crisis como crecimiento", "Cambio personal", "Familia"],
    justificacion:
      "La crisis es grave y Marge pone un límite claro. Pero en vez de terminar, la ruptura obliga a Homero a crecer: reconoce su egoísmo y cambia por su familia. El conflicto lleva al crecimiento personal y de pareja, como plantea el amor sólido."
  },
  {
    id: "tiana-naveen",
    nombres: "Tiana y Naveen",
    obra: "La princesa y el sapo",
    anio: "2009",
    situacion:
      "Naveen es un príncipe despreocupado que solo quiere divertirse y piensa casarse con una chica rica para resolver su falta de dinero. Al conocer a Tiana cambia: está dispuesto a casarse con otra si con eso consigue el dinero para el restaurante de ella. Al final, eligen quedarse juntos aunque eso signifique seguir siendo sapos.",
    tipo: "solido",
    claves: ["Transformación", "Renuncia", "Proyecto compartido"],
    justificacion:
      "Naveen empieza con una lógica líquida (el placer y la conveniencia), pero el amor lo transforma en alguien capaz de renunciar por el sueño de Tiana. Los dos eligen el vínculo por encima de la comodidad y luego construyen juntos el restaurante."
  },
  {
    id: "peeta-katniss",
    nombres: "Peeta y Katniss",
    obra: "Los juegos del hambre",
    anio: "2012–2015",
    situacion:
      "Peeta ama a Katniss desde niño y la protege una y otra vez en los juegos. Después de que el Capitolio lo tortura y le hace creer que ella es su enemiga, los dos pasan años sanando poco a poco. Al final viven juntos y forman una familia.",
    tipo: "solido",
    claves: ["Constancia", "Sanar juntos", "Amor que madura"],
    justificacion:
      "No es un amor fácil ni instantáneo: crece a través del trauma, la guerra y una larga recuperación. Los dos tienen paciencia con las heridas del otro. El vínculo madura con el tiempo y termina en un proyecto estable de vida."
  },
  {
    id: "harry-sally",
    nombres: "Harry y Sally",
    obra: "Cuando Harry conoció a Sally",
    anio: "1989",
    situacion:
      "Se conocen en un viaje en carro y no se caen bien. Durante doce años se cruzan una y otra vez, hasta que se vuelven mejores amigos y se conocen a fondo, con defectos y manías. Después de una pelea fuerte, Harry reconoce que quiere pasar el resto de su vida con ella.",
    tipo: "solido",
    claves: ["Conocerse de verdad", "Amistad como base", "Largo plazo"],
    justificacion:
      "El amor nace de conocer de verdad al otro, con todo lo que no es perfecto. No hay idealización ni prisa: hay años de amistad, conflictos y reconciliación. Y la decisión final mira explícitamente al largo plazo: el resto de la vida."
  },
  {
    id: "ron-hermione",
    nombres: "Ron y Hermione",
    obra: "Harry Potter",
    anio: "2001–2011",
    situacion:
      "Son amigos desde los once años y discuten por casi todo. En plena guerra, Ron abandona al grupo, se arrepiente y regresa a pedir perdón. Al final de la saga aparecen casados, llevando a sus hijos al tren de Hogwarts.",
    tipo: "solido",
    claves: ["Amistad como base", "Perdón", "Familia"],
    justificacion:
      "Su relación se construye durante años de amistad, peleas y reconciliaciones. Cuando Ron falla, vuelve y asume su error, y Hermione lo perdona. Las crisis no los separan; los hacen crecer hasta formar una familia estable."
  },
  {
    id: "kristoff-anna",
    nombres: "Kristoff y Anna",
    obra: "Frozen II",
    anio: "2019",
    situacion:
      "Después de lo que vivió con Hans, Anna va con calma. Kristoff lleva tiempo intentando pedirle matrimonio, pero respeta que ella esté concentrada en salvar a su hermana. Cuando llega el momento difícil, solo le dice que está ahí y le pregunta qué necesita. Al final le propone matrimonio.",
    tipo: "solido",
    claves: ["Paciencia", "Respeto", "Apoyo"],
    justificacion:
      "Es el contraste perfecto con Hans: aquí no hay prisa ni interés escondido. Kristoff respeta los tiempos y las prioridades de Anna y la apoya sin exigir. El compromiso llega después de conocerse de verdad, no en una sola noche."
  },
  {
    id: "tony-pepper",
    nombres: "Tony Stark y Pepper Potts",
    obra: "Avengers: Endgame",
    anio: "2019",
    situacion:
      "Después de años de altibajos, Tony y Pepper están casados y tienen una hija, Morgan. Cuando aparece la posibilidad de deshacer la tragedia de la mitad del universo, lo deciden juntos. Pepper lucha a su lado en la batalla final y lo acompaña hasta su último momento.",
    tipo: "solido",
    claves: ["Hasta el final", "Decisiones juntos", "Familia"],
    justificacion:
      "La relación pasa de la inestabilidad a un compromiso maduro: matrimonio, una hija y decisiones tomadas en pareja. Pepper no se va en el momento más duro; acompaña a Tony hasta la muerte. Es el «hasta que la muerte nos separe» llevado al límite."
  },
  {
    id: "jake-neytiri",
    nombres: "Jake y Neytiri",
    obra: "Avatar: el camino del agua",
    anio: "2022",
    situacion:
      "Quince años después de conocerse, Jake y Neytiri tienen cuatro hijos. Para proteger a su familia, dejan su hogar y empiezan de cero con otro pueblo. Cuando pierden a su hijo mayor, el dolor es enorme, pero lo enfrentan juntos.",
    tipo: "solido",
    claves: ["Renuncia", "Familia", "Dolor compartido"],
    justificacion:
      "Ponen a la familia por encima de su comodidad: renuncian a su hogar para protegerla. Y ante la peor pérdida posible, se sostienen en lugar de separarse. El amor sólido se mide justamente en esos momentos de dolor compartido."
  },
  {
    id: "elizabeth-darcy",
    nombres: "Elizabeth Bennet y el señor Darcy",
    obra: "Orgullo y prejuicio",
    anio: "2005",
    situacion:
      "La primera vez que Darcy le propone matrimonio, Elizabeth lo rechaza porque lo cree arrogante. Él reflexiona sobre sus errores y, sin decirle nada, resuelve en secreto el escándalo que amenazaba a la familia de ella. Elizabeth también reconoce que lo juzgó mal.",
    tipo: "solido",
    claves: ["Conocerse de verdad", "Cambio personal", "Humildad"],
    justificacion:
      "Los dos tienen que superar su orgullo y sus prejuicios para conocer al otro de verdad. Darcy actúa por el bien de Elizabeth sin esperar nada a cambio. El vínculo nace del crecimiento personal de ambos, no de una atracción superficial."
  },
  {
    id: "hazel-gus",
    nombres: "Hazel y Gus",
    obra: "Bajo la misma estrella",
    anio: "2014",
    situacion:
      "Se conocen en un grupo de apoyo para jóvenes con cáncer. Gus usa el deseo que le concede una fundación para llevar a Hazel a Ámsterdam a conocer a su escritor favorito. Cuando el cáncer de él regresa, Hazel lo acompaña en cada etapa de la enfermedad.",
    tipo: "solido",
    claves: ["Acompañar", "Entrega", "Amor en la fragilidad"],
    justificacion:
      "Saben que su tiempo puede ser corto y aun así se comprometen por completo. Gus entrega su deseo por la felicidad de Hazel, y ella no huye cuando la enfermedad empeora. Es un amor que acompaña en la fragilidad, lo opuesto al amor que se va cuando deja de ser cómodo."
  },
  {
    id: "sam-molly",
    nombres: "Sam y Molly",
    obra: "Ghost: la sombra del amor",
    anio: "1990",
    situacion:
      "Sam nunca le dice «te amo» a Molly; siempre responde «igualmente». Después de que lo asesinan, se queda como fantasma para protegerla del peligro, buscando la forma de comunicarse con ella. Antes de irse, por fin le dice lo que siente.",
    tipo: "solido",
    claves: ["Protección", "Fidelidad", "Más allá de la muerte"],
    justificacion:
      "El amor de Sam sigue incluso después de la muerte y se expresa en cuidar a Molly, no en recibir. Además crece: aprende a decir lo que antes le costaba. Es un vínculo fiel, que no se descarta cuando las circunstancias cambian."
  },
  {
    id: "holly-gerry",
    nombres: "Holly y Gerry",
    obra: "Posdata: te amo",
    anio: "2007",
    situacion:
      "Gerry muere de un tumor cerebral siendo joven. Antes de morir, prepara una serie de cartas que Holly va recibiendo durante el año siguiente, con pequeñas tareas que la ayudan a superar el duelo y a volver a vivir.",
    tipo: "solido",
    claves: ["Buscar el bien del otro", "Duelo", "Entrega"],
    justificacion:
      "Gerry piensa en el bienestar de Holly más allá de su propia vida. Su amor no busca retenerla, sino ayudarla a seguir adelante. Querer el bien del otro, incluso cuando uno ya no estará, es lo contrario de reducir a la pareja a lo que nos da."
  },
  {
    id: "reina-golfo",
    nombres: "Reina y Golfo",
    obra: "La dama y el vagabundo",
    anio: "1955",
    situacion:
      "Golfo es un perro callejero que presume de su libertad y de no tener dueño ni compromisos. Al conocer a Reina empieza a cambiar: arriesga su vida para salvar al bebé de la familia de ella. Al final se queda con Reina y forman una familia con cachorros.",
    tipo: "solido",
    claves: ["Transformación", "Compromiso", "Familia"],
    justificacion:
      "Golfo representa al principio la libertad sin ataduras, muy líquida. Pero elige el compromiso: protege a los que Reina ama y se queda para formar un hogar estable. La historia muestra que se puede pasar de la huida del compromiso a un vínculo sólido."
  },
  {
    id: "rocky-adrian",
    nombres: "Rocky y Adrian",
    obra: "Rocky",
    anio: "1976–2006",
    situacion:
      "Adrian es tímida y Rocky es un boxeador sin futuro, y se apoyan cuando nadie más cree en ellos. Se casan, y cuando Adrian queda en coma tras dar a luz, Rocky no se separa de su cama. Décadas después, ya viudo, sigue visitando su tumba.",
    tipo: "solido",
    claves: ["Apoyo mutuo", "Fidelidad", "Hasta la muerte"],
    justificacion:
      "Los dos crecen gracias al otro: el apoyo mutuo los saca de su soledad. El vínculo se mantiene en la enfermedad y continúa incluso después de la muerte de Adrian. Es fidelidad a lo largo de toda una vida."
  },
  {
    id: "guido-dora",
    nombres: "Guido y Dora",
    obra: "La vida es bella",
    anio: "1997",
    situacion:
      "Guido conquista a Dora con humor y se casan. Durante la Segunda Guerra Mundial, Guido y su hijo, judíos, son deportados a un campo de concentración. Dora no es judía, pero exige subir al mismo tren para no separarse de ellos.",
    tipo: "solido",
    claves: ["Renuncia extrema", "Fidelidad", "Familia"],
    justificacion:
      "Dora renuncia a su propia seguridad para no abandonar a su familia. No hay cálculo de conveniencia: hay una entrega total. Es quizá el ejemplo más extremo de que el amor sólido incluye renuncias por el otro."
  },
  {
    id: "bridget-mark",
    nombres: "Bridget Jones y Mark Darcy",
    obra: "El diario de Bridget Jones",
    anio: "2001",
    situacion:
      "Bridget es desordenada, dice cosas inapropiadas y siente que nunca es suficiente. Mark, un abogado serio, le dice que le gusta tal y como es. A pesar de los malentendidos, él la defiende cuando otros la juzgan y busca una relación seria con ella.",
    tipo: "solido",
    claves: ["Aceptación", "Seriedad", "Conocer al otro"],
    justificacion:
      "Mark no busca a una pareja perfecta para su imagen: acepta a Bridget con sus defectos. Su interés es estable y comprometido, y la respeta. Es el contraste directo con Daniel Cleaver, que solo buscaba diversión."
  },

  // ===================== PELÍCULAS: AMOR LÍQUIDO =====================
  {
    id: "ryan-alex",
    nombres: "Ryan Bingham y Alex",
    obra: "Amor sin escalas",
    anio: "2009",
    situacion:
      "Ryan viaja todo el año despidiendo empleados y da conferencias sobre vivir con una «mochila vacía», sin cargar relaciones ni compromisos. Conoce a Alex, otra viajera frecuente, y empiezan a verse entre aeropuertos. Cuando él decide buscarla en serio, descubre que ella está casada y tiene hijos: él era solo una escapada.",
    tipo: "liquido",
    claves: ["Sin ataduras", "Encuentros de paso", "Relación como escape"],
    justificacion:
      "Ryan convierte la huida del compromiso en filosofía de vida. Para Alex, la relación es un paréntesis que no toca su vida real. Los encuentros en aeropuertos son la imagen perfecta del amor líquido: siempre en movimiento, sin tiempo ni espacio compartido."
  },
  {
    id: "ben-andie",
    nombres: "Ben y Andie",
    obra: "Cómo perder a un hombre en 10 días",
    anio: "2003",
    situacion:
      "Andie es periodista y necesita salir con un hombre para escribir un artículo sobre cómo espantarlo en diez días. Ben es publicista y apostó que puede enamorar a cualquier mujer en diez días para ganarse una cuenta importante. Cada uno empieza la relación por su propio interés.",
    tipo: "liquido",
    claves: ["Pareja como medio", "Apuesta", "Engaño"],
    justificacion:
      "Aunque al final se enamoran de verdad, la relación nace como un negocio: cada uno usa al otro para avanzar en su carrera. Es la relación de bolsillo en estado puro, donde la pareja vale por la utilidad que tiene. Lo valioso viene después, cuando dejan de usarse."
  },
  {
    id: "nick-amy",
    nombres: "Nick y Amy Dunne",
    obra: "Perdida",
    anio: "2014",
    situacion:
      "Su matrimonio se ve perfecto desde afuera, pero ninguno es quien dice ser. Nick le es infiel a Amy, y Amy finge su propia desaparición para culparlo. Al final siguen casados, no por amor, sino porque les conviene mantener su imagen pública.",
    tipo: "liquido",
    claves: ["Apariencias", "No se conocen", "Conveniencia"],
    justificacion:
      "Es un matrimonio que existe solo como imagen. Ninguno conoce de verdad al otro, y el vínculo se mantiene por conveniencia, no por amor. Muestra que la estructura del matrimonio no basta: sin entrega real, la relación sigue siendo líquida por dentro."
  },
  {
    id: "scarlett-rhett",
    nombres: "Scarlett O'Hara y Rhett Butler",
    obra: "Lo que el viento se llevó",
    anio: "1939",
    situacion:
      "Scarlett se casa tres veces: la primera para darle celos a Ashley, el hombre que idealiza; la segunda para conseguir dinero y salvar su plantación; la tercera con Rhett, mientras sigue pensando en Ashley. Cuando por fin se da cuenta de que ama a Rhett, él ya se cansó y se va.",
    tipo: "liquido",
    claves: ["Matrimonio por conveniencia", "Amor idealizado", "Tarde para comprometerse"],
    justificacion:
      "Scarlett usa el matrimonio como herramienta: para dar celos, para conseguir dinero o seguridad. Mientras tanto, ama un ideal que no existe. Nunca se entrega de verdad a quien tiene al lado, y cuando quiere hacerlo, el vínculo ya está roto."
  },
  {
    id: "mia-sebastian",
    nombres: "Mia y Sebastian",
    obra: "La La Land",
    anio: "2016",
    situacion:
      "Mia quiere ser actriz y Sebastian quiere abrir su club de jazz. Se enamoran y se apoyan, pero cuando sus carreras empiezan a avanzar, la relación pasa a segundo plano. Se separan, y cinco años después Mia está casada con otro; se cruzan en el club de él y solo imaginan lo que pudo haber sido.",
    tipo: "liquido",
    claves: ["Proyecto individual primero", "Relación como etapa", "Sin compromiso"],
    justificacion:
      "Es la más discutible y vale la pena debatirla. Se quieren de verdad, pero cada uno pone su proyecto individual por encima del proyecto común, y la relación queda como una etapa bonita del pasado. Bauman señala justamente ese individualismo que hace del amor algo temporal."
  },
  {
    id: "joel-clementine",
    nombres: "Joel y Clementine",
    obra: "Eterno resplandor de una mente sin recuerdos",
    anio: "2004",
    situacion:
      "Después de una pelea, Clementine se somete a un procedimiento para borrar a Joel de su memoria. Cuando él lo descubre, decide hacer lo mismo. A mitad del borrado, Joel se arrepiente e intenta esconder sus recuerdos de ella para no perderla.",
    tipo: "liquido",
    claves: ["Borrar al otro", "Descarte", "Huir del dolor"],
    justificacion:
      "Borrar a la pareja de la memoria es la imagen más literal del descarte: cuando duele, se elimina, como un archivo. La película abre al final una puerta a lo sólido, cuando eligen volver a intentarlo conociendo sus defectos, pero lo que la define es la tentación de deshacerse del otro."
  },
  {
    id: "danny-sandy",
    nombres: "Danny y Sandy",
    obra: "Vaselina (Grease)",
    anio: "1978",
    situacion:
      "Tienen un romance de verano. Al empezar las clases, Danny finge que no le importa Sandy para no quedar mal frente a sus amigos. A lo largo del año, los dos intentan cambiar quiénes son para encajar en lo que el otro y su grupo esperan.",
    tipo: "liquido",
    claves: ["Romance de verano", "Imagen", "Apariencias"],
    justificacion:
      "El vínculo empieza como un amor de verano y se mueve por la imagen: importa más qué pensarán los amigos que la persona. Para estar juntos, cada uno cambia su apariencia en vez de conocer y aceptar al otro como es."
  },
  {
    id: "bridget-daniel",
    nombres: "Bridget Jones y Daniel Cleaver",
    obra: "El diario de Bridget Jones",
    anio: "2001",
    situacion:
      "Daniel es el jefe de Bridget: encantador, coqueto y divertido. Empiezan una relación llena de mensajes y escapadas, pero él evita cualquier conversación seria. Un día Bridget llega a su apartamento y encuentra a otra mujer, con la que él termina comprometiéndose.",
    tipo: "liquido",
    claves: ["Diversión sin compromiso", "Infidelidad", "Reemplazo"],
    justificacion:
      "Daniel busca la diversión del momento, no un vínculo. Cuando algo nuevo le resulta más atractivo, reemplaza a Bridget sin dudarlo. Es la volatilidad y el descarte propios del amor líquido."
  },
  {
    id: "caleb-ava",
    nombres: "Caleb y Ava",
    obra: "Ex Machina",
    anio: "2014",
    situacion:
      "Caleb, un programador, es invitado a evaluar a Ava, una inteligencia artificial. En sus conversaciones, Ava le muestra interés y él se enamora. Al final, Ava usa esos sentimientos para que él la ayude a escapar, y lo deja encerrado.",
    tipo: "liquido",
    claves: ["Mediado por la tecnología", "Pareja como medio", "Manipulación"],
    justificacion:
      "Caleb cree vivir un vínculo, pero para Ava él es solo un instrumento para conseguir su libertad. Cuando cumple su función, lo descarta. Además, es una relación mediada por la tecnología, donde no se sabe quién es realmente el otro."
  },
  {
    id: "emma-adam",
    nombres: "Emma y Adam",
    obra: "Sin compromiso",
    anio: "2011",
    situacion:
      "Emma es una médica sin tiempo para el amor. Le propone a Adam, un amigo, tener una relación solo física, con reglas claras: nada de sentimientos, nada de planes, nada de celos. Cuando Adam se enamora, Emma se aleja para no comprometerse.",
    tipo: "liquido",
    claves: ["Reglas para no comprometerse", "Placer sin vínculo", "Miedo"],
    justificacion:
      "El título lo dice todo: la relación se diseña para evitar el compromiso. El otro se vuelve fuente de satisfacción sin exigencias. Aunque al final terminan juntos, la mayor parte de la historia muestra el miedo a comprometerse típico del amor líquido."
  },
  {
    id: "wickham-lydia",
    nombres: "Wickham y Lydia",
    obra: "Orgullo y prejuicio",
    anio: "2005",
    situacion:
      "Lydia, de quince años, se escapa con el encantador oficial Wickham sin estar casados, poniendo en riesgo la reputación de toda su familia. Wickham no tenía intención de casarse con ella; solo acepta cuando el señor Darcy le paga sus deudas.",
    tipo: "liquido",
    claves: ["Impulso", "Interés económico", "Sin responsabilidad"],
    justificacion:
      "Lydia actúa por impulso y Wickham, por capricho e interés. El matrimonio solo ocurre porque alguien le paga. Es el contraste directo con Elizabeth y Darcy en la misma película: un vínculo nacido del capricho y sostenido por conveniencia."
  },
  {
    id: "willoughby-marianne",
    nombres: "Willoughby y Marianne",
    obra: "Sensatez y sentimientos",
    anio: "1995",
    situacion:
      "Willoughby rescata a Marianne bajo la lluvia y la conquista con poesía y paseos. Todos esperan que le proponga matrimonio, pero un día se va sin explicación. Después se sabe que se comprometió con una mujer muy rica porque perdió su herencia.",
    tipo: "liquido",
    claves: ["Conveniencia", "Abandono", "Interés económico"],
    justificacion:
      "Willoughby elige la seguridad económica por encima del vínculo y abandona a Marianne sin dar la cara. La relación era real para ella, pero para él se volvió descartable apenas dejó de convenirle."
  },
  {
    id: "rose-cal",
    nombres: "Rose y Cal",
    obra: "Titanic",
    anio: "1997",
    situacion:
      "La familia de Rose está en bancarrota, y su madre la empuja a comprometerse con Cal, un hombre muy rico. Cal la trata como una posesión: le regala un diamante enorme, controla lo que hace y lo que lee. Cuando el barco se hunde, intenta sobornar a la tripulación para salvarse.",
    tipo: "liquido",
    claves: ["Matrimonio por conveniencia", "Pareja como posesión", "Sin amor"],
    justificacion:
      "Es un compromiso de conveniencia: dinero para la familia de ella y una esposa de adorno para él. Cal reduce a Rose a un objeto que se posee, y en el momento decisivo se salva a sí mismo. Tiene la forma de un compromiso sólido, pero por dentro es pura utilidad."
  },
  {
    id: "encantador-fiona",
    nombres: "El Príncipe Encantador y Fiona",
    obra: "Shrek 2",
    anio: "2004",
    situacion:
      "El Príncipe Encantador llega tarde a rescatar a Fiona y descubre que ya está casada con Shrek. Su madre, el Hada Madrina, planea que él se haga pasar por Shrek y use una poción de amor para que Fiona se enamore de él y así heredar el reino.",
    tipo: "liquido",
    claves: ["Interés", "Amor forzado", "Pareja como medio"],
    justificacion:
      "El Príncipe no ama a Fiona: la quiere por el reino. Además intenta fabricar el amor con una poción, sin conocerla ni ganarse su confianza. La pareja se reduce a un medio para obtener poder."
  },
  {
    id: "regina-aaron",
    nombres: "Regina y Aaron",
    obra: "Chicas pesadas",
    anio: "2004",
    situacion:
      "Regina terminó con Aaron hace tiempo. Cuando se entera de que a Cady, su nueva rival, le gusta él, vuelve con Aaron solo para quitárselo, y lo besa frente a todos en una fiesta.",
    tipo: "liquido",
    claves: ["Capricho", "Pareja como trofeo", "Competencia"],
    justificacion:
      "Regina no vuelve por amor sino por capricho y competencia: Aaron es un trofeo para demostrar poder. El vínculo depende de lo que le aporta a su imagen, y no hay ningún interés real en la persona."
  },
  {
    id: "julianne-michael",
    nombres: "Julianne y Michael",
    obra: "La boda de mi mejor amigo",
    anio: "1997",
    situacion:
      "Julianne y Michael hicieron un pacto: si a los 28 años seguían solteros, se casarían entre ellos. Poco antes de esa fecha, Michael le anuncia que se casa con otra. Solo entonces Julianne decide que lo ama, e intenta sabotear la boda.",
    tipo: "liquido",
    claves: ["Amor como plan B", "Solución a la soledad", "Posesión"],
    justificacion:
      "El pacto trata al otro como un plan de respaldo contra la soledad. Julianne solo lo valora cuando está a punto de perderlo, y en vez de buscar su bien, intenta arruinar su felicidad. Es el amor como solución temporal, no como entrega."
  },
  {
    id: "giselle-edward",
    nombres: "Giselle y el príncipe Edward",
    obra: "Encantada: la historia de Giselle",
    anio: "2007",
    situacion:
      "En el reino animado de Andalasia, Giselle y el príncipe Edward se conocen, cantan juntos y deciden casarse al día siguiente. Ya en Nueva York, Giselle conoce a Robert, que le explica que la gente primero sale y se conoce antes de comprometerse.",
    tipo: "liquido",
    claves: ["Inmediatez", "Amor idealizado", "No se conocen"],
    justificacion:
      "Comprometerse con alguien a quien conociste hace unas horas es amor de cuento, pero también es pura instantaneidad: no conocen de verdad al otro. La propia película lo cuestiona cuando Giselle descubre que el amor necesita tiempo."
  },
  {
    id: "duque-satine",
    nombres: "El Duque y Satine",
    obra: "Moulin Rouge",
    anio: "2001",
    situacion:
      "El Duque acepta financiar el espectáculo del Moulin Rouge a cambio de tener a Satine solo para él. Le exige exclusividad, controla con quién habla y, cuando sospecha que ella ama a otro, se vuelve celoso y violento.",
    tipo: "liquido",
    claves: ["Pareja como posesión", "Transacción", "Control"],
    justificacion:
      "Para el Duque, Satine es algo que se compra: dinero a cambio de una persona. No le interesa conocerla ni que ella lo ame; le interesa poseerla. Es la reducción de la pareja a objeto de satisfacción personal."
  },
  {
    id: "dan-alice",
    nombres: "Dan y Alice",
    obra: "Closer",
    anio: "2004",
    situacion:
      "Dan conoce a Alice por accidente en la calle y empiezan a vivir juntos. Al poco tiempo, se obsesiona con Anna, una fotógrafa, y deja a Alice por ella. Las parejas se cruzan, se engañan y se reemplazan unas a otras durante años.",
    tipo: "liquido",
    claves: ["Reemplazo", "Infidelidad", "Volatilidad"],
    justificacion:
      "Las relaciones circulan constantemente: siempre hay alguien nuevo que parece más interesante. Nadie se compromete del todo y las parejas se intercambian. Es el «espacio de flujos» de Bauman aplicado al amor."
  },
  {
    id: "gaston-bella",
    nombres: "Gastón y Bella",
    obra: "La Bella y la Bestia",
    anio: "1991",
    situacion:
      "Gastón decide que se casará con Bella porque es la chica más bonita del pueblo, y por eso la merece. Organiza la boda antes de preguntarle. Cuando ella lo rechaza, intenta forzarla amenazando a su padre.",
    tipo: "liquido",
    claves: ["Pareja como trofeo", "Ego", "No la conoce"],
    justificacion:
      "Gastón no conoce ni le interesa conocer a Bella: la quiere como trofeo para su ego. La reduce a su apariencia y a lo que ella aporta a su imagen. Es la relación de bolsillo: el otro como objeto de satisfacción personal."
  }
];
