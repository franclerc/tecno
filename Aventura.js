class Aventura {
  constructor() {
    this.estado= 0;
    this.p = 18; // cantidad de img de fondo
    this.fondo = [];
    // carga de pantallas de fondo
    for (let i = 0; i < this.p; i++) {
      this.fondo[i] = loadImage('img/Fondo' + i + '.png');
    }

    this.texto = new Texto();
    this.minijuego = new Minijuego();
    this.boton = [];
    this.boton[0] = new Boton(220, 240, 170, 40); //boton 1 menu (estado 0)
    this.boton[1] = new Boton(220, 330, 170, 40); //boton 2 menu (estado 0)
    this.boton[2] = new Boton(220, 510, 170, 40); //boton creditos (estado 17)
    this.boton[3] = new Boton(10, 550, 100, 40);  //boton pantalla 1,3,4,6,8,9,10,11,12,13,15
    this.boton[4] = new Boton(400, 380, 100, 40); //boton pantalla 2,7
    this.boton[5] = new Boton(100, 380, 100, 40); //boton pantalla 2,7
    this.boton[6] = new Boton(380, 320, 100, 40); //boton pantalla 5
    this.boton[7] = new Boton(120, 320, 100, 40); //boton pantalla 5
    this.boton[8] = new Boton(490, 550, 100, 40); //boton pantalla 14,16
    // cargar sonido de fondo
    this.sonido = createAudio('sonido/fondo.wav');
    this.Reproducirsonido();
  }

  dibujar() {
    if (this.estado == '0') {  // menu
      background(0);
      image(this.fondo[0], 0, 0);
      this.boton[0].dibujar(220, 390, 240, 280);
      this.boton[1].dibujar(220, 390, 330, 370);
      this.texto.Encuadre();
      const textoboton = this.texto.Textosboton();
      this.texto.Botonesx2(textoboton[21], textoboton[22], 230, 270, 230, 360, 30);
    }
    if (this.estado == '1') {
      background(0);
     image(this.fondo[1], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX3(textos[0], textos[1], textos[2]);
      this.texto.Botonesx1(textoboton[0], 23, 575, 15, color (255, 224, 248));
    }
    if (this.estado == '2') {    // despues de este estado viene el, minijuego
      background(0);
      image(this.fondo[2], 0, 0);
      this.boton[5].dibujar(100, 200, 380, 420);
      this.boton[4].dibujar(400, 500, 380, 420);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX2(textos[3], textos[4], 620, 60, 200);
      this.texto.Botonesx2(textoboton[1], textoboton[2], 120, 405, 425, 405, 15);
    }
    if (this.estado == '3') {
      background(0);
      image(this.fondo[3], 0, 0);
      this.boton[8].dibujar(490, 590, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX2(textos[5], textos[6], 620, 60, 200);
      this.texto.Botonesx1(textoboton[3], 495, 567, 15, color (255, 224, 248));
    }
    if (this.estado == '4') {
      background(0);
      image(this.fondo[4], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX1(textos[7]);
      this.texto.Botonesx1(textoboton[4], 18, 575, 15, color (255, 224, 248));
    }
    if (this.estado == '5') {
      background(0);
      image(this.fondo[5], 0, 0);
      this.boton[6].dibujar(380, 480, 320, 360);
      this.boton[7].dibujar(120, 220, 320, 360);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX3(textos[8], textos[9], textos[10]);
      this.texto.Botonesx2(textoboton[5], textoboton[6], 380, 345, 144, 345, 15);
    }
    if (this.estado == '6') {
      background(0);
      image(this.fondo[6], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX1(textos[11]);
      this.texto.Botonesx1(textoboton[7], 25, 566, 15, color (255, 224, 248));
    }
    if (this.estado == '7') {
      background(0);
      image(this.fondo[7], 0, 0);
      this.boton[4].dibujar(400, 500, 380, 420);
      this.boton[5].dibujar(100, 200, 380, 420);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX3(textos[12], textos[13], textos[14]);
      this.texto.Botonesx2(textoboton[8], textoboton[9], 103, 397, 405, 397, 15);
    }
    if (this.estado == '8') { // 1ER FINAL DE AVENTURA GRAFICA..
      background(0);
      image(this.fondo[8], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX2(textos[15], textos[16], 620, 60, 200);
      this.texto.Botonesx1(textoboton[10], 33, 580, 30, color (255, 224, 248));
     
    }
    if (this.estado == '9') {
      background(0);
      image(this.fondo[9], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX3(textos[17], textos[18], textos[19]);
      this.texto.Botonesx1(textoboton[11], 20, 575, 15, color (255, 224, 248));
    }
    if (this.estado == '10') {
      background(0);
      image(this.fondo[10], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX1(textos[20]);
      this.texto.Botonesx1(textoboton[12], 25, 575, 15, color (255, 224, 248));
    }
    if (this.estado == '11') {
      background(0);
      image(this.fondo[11], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX3(textos[21], textos[22], textos[23]);
      this.texto.Botonesx1(textoboton[13], 18, 566, 15, color (255, 224, 248));
    }
    if (this.estado == '12') {
      background(0);
      image(this.fondo[12], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX2(textos[24], textos[25], 620, 60, 200);
      this.texto.Botonesx1(textoboton[14], 18, 566, 15, color (255, 224, 248));
    }
    if (this.estado == '13') {
      background(0);
      image(this.fondo[13], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX3(textos[26], textos[27], textos[28]);
      this.texto.Botonesx1(textoboton[15], 15, 566, 15, color (255, 224, 248));
    }
    if (this.estado == '14') {
      background(0);
      image(this.fondo[14], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      this.boton[8].dibujar(490, 590, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX2(textos[29], textos[30], 620, 60, 200);
      this.texto.Botonesx2(textoboton[16], textoboton[17], 30, 566, 500, 566, 15);
    }
    if (this.estado == '15') { // 2do final : es un sueño
      background(0);
      image(this.fondo[15], 0, 0);
      this.boton[3].dibujar(10, 110, 550, 590);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX2(textos[31], textos[32], 620, 60, 200);
      this.texto.Botonesx1(textoboton[18], 33, 580, 30, color (255, 224, 248));
    
    }                                                                                          
    if (this.estado == '16') { //3er final : NO es un sueño....sin textos xb
      background(0);
      image(this.fondo[16], 0, 0);
      this.boton[8].dibujar(490, 590, 550, 590);
      const textoboton = this.texto.Textosboton();
      this.texto.PantallasSinTexto(textoboton[18], 513, 580);
     
    }
    if (this.estado == '17') {  // creditos
      background(0);
      image(this.fondo[17], 0, 0);
      this.boton[2].dibujar(220, 390, 510, 550);
      const textoboton = this.texto.Textosboton();
      this.texto.PantallasSinTexto(textoboton[19], 245, 540);
    }
    if (this.estado == '18') {  // estado de minijuego parte 1: comeme
      background(0);
      this.minijuego.dibujar();
      this.minijuego.PuertaCondicion();
      const textoboton = this.texto.Textosboton();
      const pasarDeEstado = this.minijuego.pasarDeEstado;
      if (pasarDeEstado[2] == true) {
        this.estado= '10';
      }
      if (pasarDeEstado[3] == true) {
        this.estado= '0';
      }
      const textos = this.texto.Textos();
     
      this.texto.TextoenPantallaX2(textos[34], textos[35], 620, 140, 350);
      this.texto.Botonesx1(textoboton[20], 670, 70, 30, color (47, 118, 42));
    } // estado cerrado

    if (this.estado == '19') {  // minijuego parte :2 Bebeme
      background(0);
      this.minijuego.dibujar();
      this.minijuego. PuertaCondicion()
        const pasarDeEstado = this.minijuego.pasarDeEstado;
      if (pasarDeEstado[0] == true) {
        this.estado= '0';
      }
      if (pasarDeEstado[1] == true) {
        this.estado= '3';
      }
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX2(textos[34], textos[35], 620, 140, 350);
      this.texto.Botonesx1(textoboton[20], 670, 70, 30, color (47, 118, 42));
    } // estado cerrado

    if (this.estado == '20') {
      background(0);
      image(this.fondo[2], 0, 0);
      this.boton[5].dibujar(100, 200, 380, 420);
      this.boton[4].dibujar(400, 500, 380, 420);
      const textos = this.texto.Textos();
      const textoboton = this.texto.Textosboton();
      this.texto.TextoenPantallaX1(textos[33]);
      this.texto.Botonesx2(textoboton[1], textoboton[2], 120, 405, 425, 405, 15);
    }
  }// dibujar cerrado

  PasardeEstado() {
    if (this.estado== '0') {
      if (this.toqueAqui(220, 390, 240, 280)) {
        this.estado='1';
        this.reiniciarPresione();
      } else  if (this.toqueAqui(220, 390, 330, 370)) {
        this.estado='17';
        this.reiniciarPresione();
      }
    } else if (this.estado== '17') {
      if (this.toqueAqui(220, 390, 510, 550)) {
        this.estado = '0';
        this.reiniciarPresione();
      }
    } else if (this.estado== '1') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '2';
        this.reiniciarPresione();
      }
    } else if (this.estado== '2') {
      if (this.toqueAqui(400, 500, 380, 420)) {
        this.estado = '19';
        this.reiniciarPresione();
        this.Reiniciarvariables();
      } else if (this.toqueAqui(100, 200, 380, 420)) {
        this.estado = '18';
        this.reiniciarPresione();
        this.Reiniciarvariables();
      }
    } else if (this.estado== '3') {
      if (this.toqueAqui(490, 590, 550, 590)) {
        this.estado = '4';
        this.reiniciarPresione();
      }
    } else if (this.estado== '4') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '5';
        this.reiniciarPresione();
      }
    } else if (this.estado== '5') {
      if (this.toqueAqui(120, 210, 320, 360)) {
        this.estado = '7';
        this.reiniciarPresione();
      } else if (this.toqueAqui(380, 480, 320, 360)) {
        this.estado = '6';
        this.reiniciarPresione();
      }
    } else if (this.estado== '6') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '7';
        this.reiniciarPresione();
      }
    } else if (this.estado== '7') {
      if (this.toqueAqui(400, 500, 380, 420)) {
        this.estado = '9';
        this.reiniciarPresione();
      } else if (this.toqueAqui(100, 200, 380, 420)) {
        this.estado = '8';
        this.reiniciarPresione();
      }
    } else if (this.estado== '8') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '0';
        this.reiniciarPresione();
      }
    } else if (this.estado== '9') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '20';
        this.reiniciarPresione();
      }
    } else if (this.estado== '20') {
      if (this.toqueAqui(400, 150, 380, 420)) {
        this.estado = '19';
        this.Reiniciarvariables();
        this.reiniciarPresione();
      } else if (this.toqueAqui(100, 200, 380, 420)) {
        this.estado = '18';
        this.Reiniciarvariables();
        this.reiniciarPresione();
      }
    } else if (this.estado== '10') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '11';
        this.reiniciarPresione();
      }
    } else if (this.estado== '11') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '12';
        this.reiniciarPresione();
      }
    } else if (this.estado== '12') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '13';
        this.reiniciarPresione();
      }
    } else if (this.estado== '13') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '14';
        this.reiniciarPresione();
      }
    } else if (this.estado== '14') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '15';
        this.reiniciarPresione();
      } else if (this.toqueAqui(490, 590, 550, 590)) {
        this.estado = '16';
        this.reiniciarPresione();
      }
    } else if (this.estado== '15') {
      if (this.toqueAqui(10, 110, 550, 590)) {
        this.estado = '0';
        this.reiniciarPresione();
      }
    } else if (this.estado== '16') {
      if (this.toqueAqui(490, 590, 550, 590)) {
        this.estado = '0';
        this.reiniciarPresione();
      }
    } 
   if (this.toqueAqui(900,960,570,580)){  // para apagar sonido si se quiere hacer. 
    this.Apagarsonido();
    }else if (this.toqueAqui(900,960,570,580)){
     this.Reproducirsonido();
    }
  }// cerrado abrir cambiar de estado

  Abrirpuerta() {
    this.minijuego.Abrirpuerta();
  }

  Condiciontexto() {
    this.texto.Condiciontexto();
  }

  reiniciarPresione() {
    this.texto.reiniciarPresione();
  }

  toqueAqui(x1, y1, x2, y2) {   // coordenadas para pasar de estado..
    return mouseX > x1 && mouseX < y1 && mouseY > x2 && mouseY < y2
  }

  Reproducirsonido() {
    this.sonido.loop(true);
  }
  
  Apagarsonido(){
   this.sonido.stop();
  }

  Reiniciarvariables() {
    this.minijuego.Reiniciarvariables();
  }
}// clase cerrada
