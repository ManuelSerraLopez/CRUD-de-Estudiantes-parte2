
export class Estudiante {
    static contador = 1;
  
    constructor(nombre, edad, nivel, calificaciones = {}) {
      this.id = Estudiante.contador++;
      this.nombre = nombre;
      this.edad = edad;
      this.nivel = nivel;
      this.calificaciones = calificaciones; 
    }
  }
  