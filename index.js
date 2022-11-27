import readline from "readline";

// Definimos las constantes 
const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

// Titulo del ejercicio:

console.log("Clasroom Manager \n", "Introduce los siguientes numeros para:")

// 1. Mostrar en formato tabla a los alumnos:

async function print_tabla_alumnos(students){
  console.table(students);
};

// 2. Mostrar por consola la cantidad de alumnos que hay en clase:
// Funcion que calcula el numero de alumnos de clase 

async function print_numero_alumnos(students){
  console.log(students.length);
};

// 3. Mostrar por consola todos los nombres de los alumnos 
// funcion que itera sobre una array de alumnos y printea sus nombres. 

async function print_nombre_alumnos(students){
  students.find(object => {
    console.log(object.name)
  });
};


// 4. Eliminar el último alumno de clase 
// Funcion para eliminar el ultimo alumno del array:

async function remove_last_alumno(students){
  students.pop();
};

// 5. Eliminar un alumno aleatorio de clase. 

async function remove_random_alumno(students){
  students.sort(function() { return 0.5 - Math.random();}).pop();
};

// 6. Funcion para obtener los datos de las chicas:
// Iteramos sobre los elementos del array y si es chica printeamos los datos:

async function print_datos_chicas(students){
  for (let i = 0; i < students.length; i++) {
    if (students[i]['gender'] == 'female'){
      console.log(students[i]);
    };
  };
}


// 7. Funcion para obtener el numero de chicos y el de chicas por separado:
// Iteramos sobre los elementos del array, si es chica sumamos 1 al contador de chichas y si es chico sumamos 1 al de chicos
// luego printeamos los dos.

async function print_numero_chicas_chicos(students){
  let contador_chicas = 0
  let contador_chicos = 0

  for (let i = 0; i < students.length; i++) {
    if (students[i]['gender'] === 'female'){
      contador_chicas++;
    }
    else if (students[i]['gender'] === 'male'){
      contador_chicos++;
    }
  };

  console.log('chicos ->', contador_chicos)
  console.log('chicas ->', contador_chicas)
}


// 8. Funcion que comprueba si todos los alumnos de la clase son chicas:

async function print_todo_son_chicas(students){
  if (students.every( v => v.gender === 'female')){
      console.log(true)
  } else {
      console.log(false)
 }
}

// 9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
// Iteramos sobre students y printeamos el nombre de los que tienen entre 20 y 25 años.

async function print_edad_entre_20_25(students){
  for (let i = 0; i < students.length; i++) {
    if (students[i]['age'] >= 20 && students[i]['age'] <= 25){
      console.log(students[i]['name']);
    };
  };
}

// 10.  Añadir un alumno nuevo con los siguientes datos:
//  • nombre aleatorio.
//  • edad aleatoria entre 20 y 50 años.
//  • género aleatorio.
//  • listado de calificaciones vacío.

async function add_nuevo_alumno_random(students){
  let gender = availableGenders[Math.floor(Math.random() * 2)]; // sacado de aquí: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

  if (gender == 'female'){
    var name = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)] // sacado del mismo sitio que el genero
  }
  else {
    var name = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)] // sacado del mismo sitio que el genero
  }
  const alumno = {
    age: Math.floor(Math.random() * (31) + 20), // sacado de aquí: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    examScores: [],
    gender: gender,
    name: name 
  };

  students.push(alumno);
  console.log('Includo student ->', alumno)
};

// 11. Mostrar por consola el nombre de la persona más joven de la clase.
// Para eso iteraremos por todods los objetos del array y almacenaremos el nombre de la persona más joven de forma que si hay alguien más joven se sobreescribe

async function print_alumno_mas_joven(students){
  let edad_minima = students[0]['age']
  let mas_joven = students[0]['name']

  for (let i = 0; i < students.length; i++) {
    if (students[i]['age'] < edad_minima){
      edad_minima = students[i]['age'];
      mas_joven = students[i]['name'];
    };
  };

  console.log('Persona mas joven ->', mas_joven)
};

// 12. Mostrar por consola la edad media de todos los alumnos de la clase.
// iteramos sobre la lista de alumnos y almacenamos las edades.

async function print_edad_media(students){
  let edad_media = 0
  for (let i = 0; i < students.length; i++) {
    edad_media += students[i]['age'];
  };
  console.log('La media de las edades es ->', edad_media/students.length)
};

// 13. Mostrar por consola la edad media de todas las chicas de la clase.
// iteramos sobre la lista de alumnos y almacenamos las edades de las chicas y el numero de chicas y luego hacemos la media.

async function print_edad_media_chicas(students){
  let edad_minima = 0
  let chicas = 0
  for (let i = 0; i < students.length; i++) {
    if (students[i]['gender'] === 'female'){ 
      edad_minima += students[i]['age'];
      chicas += 1
      }
    };
  console.log('La media de las edades de las chicas es ->', edad_minima/chicas)
};

// 14. Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas
// iteramos sobre todos los estudiantes y vamos añadiendo una nota aleatoria a cada uno entre 0 y 10

async function add_random_nota(students){
  for (let i = 0; i < students.length; i++) {
    students[i]['examScores'].push(Math.floor(Math.random() * 11));
  };
};


// 15. Ordenar el array de alumnos alfabéticamente según su nombre.

async function sort_students_by_name(students){
  students.sort((a, b) => a.name.localeCompare(b.name))
}

// 16. Obtener el alumno con mejores notas:
// Iteramos sobre todos los alumnos y sumamos todas sus notas y guardamos en una variable el alumno con mejores notas:

async function print_alumno_mejores_notas(students){
  let mejor = students[0]['examScores'].reduce((a, b) => a + b, 0) // sacado de internet
  let nombre = students[0]['name']
  for (let i = 0; i < students.length; i++) {
    if (students[i]['examScores'].reduce((a, b) => a + b, 0) > mejor){
      mejor = students[i]['examScores'].reduce((a, b) => a + b, 0)
      nombre = students[i]['name']
    }
  };
  console.log('El mejor estudiante es ->', nombre)

}
// 17. Obtener alumno con nota media mas alta:
// Iteramos sobre todos los alumnos y sumamos todas sus notas y guardamos en una variable el alumno con mejores notas:

async function print_alumno_mejor_media(students){
  let mejor = students[0]['examScores'].reduce((a, b) => a + b, 0)/students[0]['examScores'].length // sacado de internet
  let nombre = students[0]['name']
  for (let i = 0; i < students.length; i++) {
    if (students[i]['examScores'].reduce((a, b) => a + b, 0) / students[i]['examScores'].length > mejor){
      mejor = students[i]['examScores'].reduce((a, b) => a + b, 0) / students[i]['examScores'].length
      nombre = students[i]['name']
    }
  };
  console.log('El mejor estudiante es ->', nombre)
  console.log('Con una media de ->', mejor)
}

async function show_info(){
  console.log(
      "\n",
      "0  -> Exit \n",
      "1  -> Mostrar una tabla con alumnos \n",
      "2  -> Mostrar los alumnos que hay en clase \n",
      "3  -> Mostrar todos los nombres de los alumnos \n",
      "4  -> Eliminar el ultimo alumno de clase \n",
      "5  -> Eliminar un alumno aleatorio de clase \n",
      "6  -> Mostrar datos chicas \n",
      "7  -> Mostrar numero chicos y chicas \n",
      "8  -> Mostrar si todos los alumnos son chicas \n",
      "9  -> Mostrar alumnos entre 20 y 25 años \n",
      "10 -> Añadir un nuevo alumno aleatorio \n",
      "11 -> Mostrar persona más joven \n",
      "12 -> Mostrar media edad \n",
      "13 -> Mostrar media edad chicas \n",
      "14 -> Añadir nota aleatoria alumnos \n",
      "15 -> Ordenar array de alumnos alfabéticamente \n",
      "EXTRA: \n",
      "16 -> Mostrar alumno con mejores notas \n",
      "17 -> Mostrar alumno con mejor media \n",
    )
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function isInt(str) {
  // returns a boolean
  return /^[0-9]+$/.test(str);
}

function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    rl.question("Introduce el número: ", (num) => {
      rl.pause();
      if (isInt(num)) {
        num = Number.parseInt(num);
        resolve(num);
      } else {
        reject("Debes introducir un número");
      }
    });
  });

  return promise;
}


async function main(){

  while (true){
    
    try {
      var num = await getNumberFromConsole();
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
 
    
    switch (num) {
      
      case 0:
      // 0- la aplicación se cierra.
        process.exit()

      case 1:
      //1- Mostrar en formato de tabla todos los alumnos.
        await print_tabla_alumnos(students);
        break;

      case 2:
      // 2- Mostrar por consola la cantidad de alumnos que hay en clase.
        await print_numero_alumnos(students);
        break;

      case 3:
      // 3- Mostrar por consola todos los nombres de los alumnos.
        await print_nombre_alumnos(students);
        break;

      case 4:
      // 4- Eliminar el último alumno de la clase.
        await remove_last_alumno(students);
        console.log("Ultimo alumno eliminado! \n");
        break;

      case 5:
      // 5- Eliminar un alumno aleatoriamente de la clase.
        await remove_random_alumno(students);
        console.log("Alumno aleatorio eliminado! \n");
        break;

      case 6:
      // 6- Mostrar por consola todos los datos de los alumnos que son chicas.
        await print_datos_chicas(students);
        break;

      case 7:
      // 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
        await print_numero_chicas_chicos(students);
        break;
    
      case 8:
      // 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
        await print_todo_son_chicas(students);
        break;

      case 9:
      // 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
        await print_edad_entre_20_25(students);
        break;
      
      case 10:
      // 10- Añadir un alumno nuevo.
        await add_nuevo_alumno_random(students);
        break;

      case 11:
      // 11- Mostrar por consola el nombre de la persona más joven de la clase.
       await print_alumno_mas_joven(students);
       break;

      case 12:
      // 12- Mostrar por consola la edad media de todos los alumnos de la clase.
        await print_edad_media(students);
        break;

      case 13:
      // 13- Mostrar por consola la edad media de las chicas de la clase.
        await print_edad_media_chicas(students);
        break;

      case 14:
      // 14- Añadir nueva nota a los alumnos.
        await add_random_nota(students);
        console.log('Nota aleatoria añadida a cada alumno')
        break;

      case 15:
      // 15- Ordenar el array de alumnos alfabéticamente según su nombre.
        await sort_students_by_name(students);
        console.log('Alumnos ordenados alfabeticamente')
        console.log(students)
        break;

      case 16:
      // 16- Mostrar el alumno de la clase con las mejores notas.
        await print_alumno_mejores_notas(students);
        break;

      case 17:
      // 17- Mostrar la nota media más alta de la clase y el nombre del alumno al que pertenece.
        await print_alumno_mejor_media(students);
        break;
        
      default:
        console.log('Input erroneo, por favor, introduce alguno de los siguientes: \n'); await show_info()
    }
  }}



show_info()
main()
