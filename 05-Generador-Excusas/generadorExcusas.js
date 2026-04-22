// Paso #1 Obtener el arreglo de Excusas
const columnaA = [
  "En cuanto se me cayó el internet",
  "En cuanto terminé de entender el tema",
  "En cuanto se descompuso mi laptop",
  "Apenas me responda el asesor",
  "Cuando por fin se sincronice el equipo",
  "Cuando logre recuperar el archivo",
  "En cuanto se calme la carga de materias",
  "Apenas termine las demás entregas",
  "Cuando arregle el problema con la plataforma",
  "En cuanto tenga acceso a la biblioteca digital"
];

const columnaB = [
  "del documento final",
  "del archivo de respaldo",
  "del proyecto en equipo",
  "del código fuente",
  "de la simulación",
  "de la investigación",
  "de los resultados",
  "de la presentación",
  "del repositorio",
  "del archivo comprimido"
];

const columnaC = [
  "que no se guardó correctamente",
  "que se corrompió al exportar",
  "que solo tenía el compañero",
  "que quedó en otra computadora",
  "que no sube al sistema",
  "que la plataforma no reconoce",
  "que estaba en la nube y desapareció",
  "que se envió vacío",
  "que quedó en versión preliminar",
  "que pide un formato distinto"
];

// Paso #2 Determinar un valor (indice) para cada columna de las excusas
const posicionA = Math.floor(Math.random()*columnaA.length);
const posicionB = Math.floor(Math.random()*columnaB.length);
const posicionC = Math.floor(Math.random()*columnaC.length);

// Paso #3 Armar mi excusa: Concatenando los textos
const laExcusa = columnaA[posicionA] + " " + columnaB[posicionB] + " " + columnaC[posicionC]

// Paso #4 Insertar la excusa en el documento HTML
document.getElementById("excusa").textContent = laExcusa;