class Texto {
  constructor() {
    this.x=230;
    this.y=270;
    this.Posx = 620;
    this.Posy =[];
    this.Posy[0] = 60;
    this.Posy[1]= 200;
    this.Posy[2]= 340;
    this.Presione= []; //booleana
    this.tipografia=[];
    this.tipografia[0]= loadFont('tipografias/IMPACTFUL.ttf');
    this.tipografia[1]= loadFont('tipografias/LilitaOne-Regular.ttf');
  }
  Encuadre() {
    this.Fondo(600, 0, 400, 600);
    this.Contenedor(0, 0, 1000, 6); // arriba
    this.Contenedor(0, 594, 1000, 6); // abajo
    this.Contenedor(0, 0, 6, 600);  //izquierda
    this.Contenedor(1000, 0, 6, 600); // derecha
    this.Decoraciondetexto(12, this.tipografia[0], color (0));
    text("PRESIONA 4 PARA REDUCIR LOS TEXTOS", 640, 580);
    if (mouseX > 900 && mouseX < 960 && mouseY > 570 && mouseY < 580 ){
    this.Decoraciondetexto(9, this.tipografia[0], color (100,0,0));
    }else {
    this.Decoraciondetexto(9, this.tipografia[0], color (230,0,0));
    }
    text("OFF SONIDO", 900, 580);
  }
  Textos() {
    const textos = [
      'Nuestra historia comienza con Alicia,\n' + 'pasando el día con su hermana, al aire\n' +'libre junto a el río.', //P1
      'De repente....\n' +'Un conejo, vestido y parlante, llama su\n' +'atención!!',
      'Alicia lo observa, hasta que lo ve ir a\n' +'una madriguera cerca del bosque.', //P1
      'Cayó por un túnel hasta una\n' + 'habitación llena de puertas, todas\ncerradas..', //P2
      'Solo se abría la más pequeña\n' + 'y Alicia, no cabía por ella.', // P2
      'Crecio hasta el techo, y al no saber\n'+ 'que hacer, Alicia inundó la habitacion\n'+ 'con sus lagrimas.', //P3
      'El conejo pasó y se le cayó el abanico.\n'+ 'Ella lo tomó y se abanicó. Disminuyó su\n'+ 'tamaño y cayó al agua, que ahora era\nun inmenso mar.', //P3
      'Llegó a una playa donde nuevamente\n'+ 'vio al conejo correr con prisa hacia\n'+'el bosque...', //P4
      'Se sumergió en el bosque y, de golpe,\n'+ 'se hizo de noche.', //P5
      'Perdida, se encontró de frente con\n'+ 'un sendero dividido en dos caminos...',
      'De la nada, un gato con una sonrisa\n' + 'amplia le planteó sus dos posibilidades\n'+'antes de desaparecer.', //P5
      'Llego a la casa del sombrerero, pero....\n'+'parece que no esta en casa', //P6
      'El sector de noche terminó y volvió\n'+'a ser de día.', //P7
      'Se encontró al sombrerero junto\n' + 'con la liebre tomando el té.',
      'Pero no le pareció que estuvieran\n'+ 'muy cuerdos...', //P7
      'El té que tomó la hizo sentirse\n'+ 'extraña...Se olvidó por completo\n'+'de su realidad.', //P8
      'Se quedó festejando junto con\n'+'sus nuevos amigos todos los NO\n'+  'cumpleaños, por siempre.', //P8
      'La noche volvió a surgir de repente...', //P9
      'Una sonrisita, similar a la del gato,\n'+'se percibe en el fondo del ambiente.',
      'Una puerta aparece de la nada,\n'+'suspendida en el aire sobre un árbol.', //P9
      'Su tamaño disminuyó grotescamente...\n'+'quedó del tamaño perfecto para\n'+'pasar por la ex pequeña puerta.', //P10
      'Caminó por un laberinto, siguiendo\n' + 'el intrincado camino, hasta que\n' + 'llegó al lugar donde una multitud\n' + 'se amontonaba.', //P11
      'Una mujer enojada con una carta\n' + 'mandó a retener la por un hurto.\n' + 'Resulta ser la reina de este lugar!',
      'Miró a Alicia y, sin opción, la invitó\n' + 'a verla jugar al críquet para\n' + 'calmarse por el robo..', //P11
      'La reina jugaba al croquet y ordenaba\n' + 'cortar la cabeza a quien la venciera.\n' + 'El conejo estaba junto a ella, como si\n' + 'quisiera escapar de ese lugar.', //P12
      'Después del juego, iniciaria un juicio\n'+'y la invitaron a Alicia como testigo,\n'+'aunque no tenía detalles sobre el'+'\nhecho.', //P12
      'La reina acusaba a una de sus cartas\n'+'de haberse comido su tartaleta.', //P13
      'Subieron algunos testigos y dejaron\n'+'"evidencias" en contra de la jota.',
      'LA REINA PIDIO SU EJECUCIÓN!!', //P13
      'La reina enfureció con Alicia por\n'+'defender al acusado...', //p14
      'Dio la orden, y se lanzaron todas\n'+'las soldado-cartas hacia ella.', //p14
      'Alicia se despierta nuevamente\n'+'junto al río.', //p15
      'Su hermana llega de nadar, y le\n'+'comienza a relatar su sueño.',
      'Al atravesar la abertura, se encontró\n'+'una vez más en la habitación de las\n'+'puertas y los dos caminos.', //p20
      'Se deberá encontrar las tres duplas\n'+'de puertas según la elección del camino\n'+'que se quiera continuar. Si se eligió el\n'+'camino de "Cómeme", hay que buscar las\n'+'tres duplas de la puerta que tiene un\n'+'muffin. En cambio, si se eligió "Bébeme",\n'+'las tres duplas de la botella.',
      'OJO! Si buscas las tres duplas opuestas,\n'+'se volverá automáticamente al menú.\n'+'De encontrar las tres correctas, se\n'+'continuará con la aventura.',
    ];
    return textos;
  }
  Textosboton() {
    const textoboton=[
      'SEGUIRLO', 'COMER', 'BEBER', 'NADAR\n'+'A LA ORILLA',
      'IR DETRAS..', 'SoMbReReRo', 'LiEbRe', 'EL OTRO\n'+'CAMINO..',
      'QUEDARSE\n'+'A TOMAR TÉ', 'ESTAN MUY\n'+'LOCOS:IRTE', 'FIN..',
      'INGRESAR..', 'METERSE', 'VER JUGAR\n'+'A LA REINA', 'QUE INICIE\n'+'EL JUICIO..',
      'ES INJUSTO,\n'+'INTERVENIR', 'ES UN\n'+'SUEÑO', 'ES LA\n'+'REALIDAD', 'FIN..',
      'VOLVER', 'INSTRUCCIONES', 'Empezar', 'Creditos',
      ]
      return textoboton;
  }

  Botonesx1(b1, Posx, Posy, tam, micolor) {                                // PARA 1 SOLO BOTON
    this.Decoraciondetexto(tam, this.tipografia[0], micolor);
    text(b1, Posx, Posy);
  }

  Botonesx2(b1, b2, Posx, Posy, Posx2, Posy2, tam) {                                       // PARA 2 SOLO BOTON
    this.Decoraciondetexto(tam, this.tipografia[0], color (255, 224, 248)); // 15
    text(b1, Posx, Posy);
    text(b2, Posx2, Posy2);
  }

  TextoenPantallaX3(t1, t2, t3) {                                 // PARA 3 TEXTOS EN PANTALLA
    this.Encuadre();
    if (this.Presione[0] == true) {
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 255));
    } else {
      this.Decoraciondetexto(25, this.tipografia[0], color (80));
      text('1', 620, 60);
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 0));
    }
    text(t1, this.Posx, this.Posy[0]);
    if (this.Presione[1] == true) {
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 255));
    } else {
      this.Decoraciondetexto(25, this.tipografia[0], color (80));
      text('2', 620, 200);
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 0));
    }
    text(t2, this.Posx, this.Posy[1]);
    if (this.Presione[2] == true) {
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 255));
    } else {
      this.Decoraciondetexto(25, this.tipografia[0], color (80));
      text('3', 620, 340);
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 0));
    }
    text(t3, this.Posx, this.Posy[2]);
  }

  TextoenPantallaX2(t1, t2, Posx, Posy0, Posy1) {                           // PARA 2 TEXTOS EN PANTALLA
    this.Encuadre();
    if (this.Presione[0] == true) {
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 255));
    } else {
      this.Decoraciondetexto(25, this.tipografia[0], color (80));
      text('1', 620, Posy0);
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 0));
    }
    text(t1, Posx, Posy0);
    if (this.Presione[1] == true) {
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 255));
    } else {
      this.Decoraciondetexto(25, this.tipografia[0], color (80));
      text('2', 620, Posy1);
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 0));
    }
    text(t2, Posx, Posy1);
  }

  TextoenPantallaX1(t1) {                                            // PARA 1 TEXTOS EN PANTALLA
    this.Encuadre();
    if (this.Presione[0] == true) {
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 255));
    } else {
      this.Decoraciondetexto(25, this.tipografia[0], color (80));
      text('1', 620, 60);
      this.Decoraciondetexto(20, this.tipografia[1], color (80, 0));
    }
    text(t1, this.Posx, this.Posy[0]);
  }

  PantallasSinTexto(b1, Posx, Posy) {                                                    // PARA 1 BOTON SIN TEXTOS.
    this.Encuadre();
    this.Decoraciondetexto(30, this.tipografia[0], color (255, 224, 248));
    text(b1, Posx, Posy);
  }

  DecoracionTexto() {
    this.Decoraciondetexto(10, this.tipografia[0], color (255, 224, 248));
  }

  Condiciontexto() {
    if (key == '1') {
      this.Presione[0] = true;
    } else if (key == '2') {
      this.Presione[1] = true;
    } else if (key == '3') {
      this.Presione[2] = true;
    } else if (key == '4') {
      this.Presione[0] = false;
      this.Presione[1] = false;
      this.Presione[2] = false;
    }
  }
  Decoraciondetexto(tam, tipografia, micolor) {
    textFont(tipografia);
    textSize( tam );
    fill(micolor);
  }

  reiniciarPresione() {
    this.Presione[0] = false;
    this.Presione[1] = false;
    this.Presione[2] = false;
  }

  Contenedor(Posx, Posy, Ancho, Alto) {
    push();
    noStroke();
    fill(211, 211, 186);
    rect(Posx, Posy, Ancho, Alto);
    pop();
  }

  Fondo(Posx, Posy, Ancho, Alto) {
    push();
    fill(255, 255, 229);
    rect(Posx, Posy, Ancho, Alto);
    pop();
  }
}
