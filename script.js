//Sintaxis básica

    //Tipos de datos
    //1. undefined (no esta definido)
            let indefinido
            console.log(indefinido);

    //2. Booleano
        let boolv = true;
        console.log(boolv);

        let boolf = false;
        console.log(boolf);
      
    //3. Numerico
        let number = 83;
        console.log(number);

        let number2 = 3.33;
        console.log(number2);

    //4. Cadena de texto
        let cadena = "Hola, esto es una cadena de texto.";
        console.log(cadena);
        let cadena2 = "Hola, esto es mi tarea.";
        console.log(cadena2);
    
    //5. Nulos
        let datoNulo = null;
        console.log(datoNulo);
    
    //6. Objetos
        //ej1
        let persona = {
            nombre: "Livni",
            edad: 29,
            mascota: "gato",
            saludar: function (){
                alert("hola soy Livni")
            }
        };
      
        console.log(persona.nombre); 
        console.log(persona.edad); 
        console.log(persona.mascota);

        //ej2
        let barco = {
            marca: "Kukulkan",
            modelo: "Gc-1051",
            capacidad: 2500,
            saludar: function (){
                alert("hola soy un barco")
            }
          };
          
        console.log(barco.marca);
        console.log(barco.modelo); 
        console.log(barco.capacidad); 

        //utilizando var

        //ej3

        var producto = {
            nombre: "Teléfono",
            precio: 299.99,
            marca: "Samsung",
            enStock: true
          };
          
          console.log(producto.marca); // Sintaxis de punto
          console.log(producto['marca']); // Sintaxis corchete
  
       //Desestructuracion
       
       var libro = {
            titulo: "JavaScript for Beginners",
            autor: "John Smith",
            publicado: 2021
        };
      
      const {autor} = libro;   



    //7. Arreglos
        let frutas = ["manzana", "naranja", "plátano", "uva"];
        
        console.log(frutas[0]); // Se visualiza: manzana
        console.log(frutas[2]); // Se visualiza: plátano
        console.log(frutas.length); // Se visualiza: 4

        //metodos

        //Push agrega uno o mas elementos
        let frutas2 = ["manzana", "naranja"];
        frutas2.push("plátano", "uva");
        console.log(frutas); // Salida: ["manzana", "naranja", "plátano", "uva"]

        //Pop elimina el ultimo elemento y lo devuelve
        let frutas3 = ["manzana", "naranja", "plátano", "uva"];
        let frutaEliminada = frutas3.pop();
        console.log(frutas); // Salida: ["manzana", "naranja", "plátano"]
        console.log(frutaEliminada); // Salida: uva

        //Unshift agrega uno o mas elementos al inicio y devuelve la nueva longitud
        let frutas4 = ["manzana", "naranja"];
        frutas4.unshift("plátano", "uva");
        console.log(frutas4); // Salida: ["plátano", "uva", "manzana", "naranja"]

        //Shift elimina el primer elemento del arreglo
        let frutas5 = ["plátano", "uva", "manzana", "naranja"];
        let fruta5Eliminada = frutas5.shift();
        console.log(frutas); // Salida: ["uva", "manzana", "naranja"]
        console.log(frutaEliminada); // Salida: plátano


        let animales = ["perro", "gato", "elefante", "tigre", "león"];

        console.log(animales[1]); // Se visualiza: gato
        console.log(animales[3]); // Se visualiza: tigre
        console.log(animales.length); // Se visualiza: 5
    
    //Concatenacion
        const nombre = 'Livni';
        const apellido = 'Martinez'
        
        console.log(nombre + ' ' + apellido);

        let nom = "Livni", antiguedad = 10883;
        console.log(nom+antiguedad);

    //Array

    let array = [1, 2, 3, 'Livni'];
    console.log(array);


    //Operadores matematicos
    
    //Algebraicos
    let resultadoSuma = 5 + 3;
    console.log(resultadoSuma); //Se visualiza 8

    let resultadoMultiplicacion = 4 * 6;
    console.log(resultadoMultiplicacion); //Se visualiza 24

    //NaN NUMBER A NUMBER

    //Divison por 0
    let resultado = 10 / 0;
    console.log(resultado); // Salida: NaN

    //Operacion invalida

    let numero = NaN;
    let resultado2 = numero + 5;
    console.log(resultado2); // Salida: NaN

    //MATH

    //Floor redondea hacia abajo al entero más cercano.

    let num = 3.7;
    let numeroRedondeado = Math.floor(num);
    console.log(numeroRedondeado); // Salida: 3

    //Max para obtener el valor máximo de un conjunto de números.

    let numero1 = 3;
    let numero2 = 7;
    let numero3 = 5;

    let maximo = Math.max(numero1, numero2, numero3);
    console.log(maximo); // Salida: 7

    //INCREMENTOS

    //INCREMENTO DE UN NUMERO
    let contador = 5;
    contador++;
    console.log(contador); // Salida: 6

    //INCREMENTO DE UNA EXPRESION
    let x = 3;
    let y = 2;
    let resul = x++ + y;
    console.log(resul); // Salida: 5
    console.log(x); // Salida: 4

    //UTILIZANDO XOR

    let a = true;
    let b = false;

    let resp = a ^ b;
    console.log(resp); // Salida: true

    //UTILIZANDO AND

    let L = 5;
    let M = 10;

    let respuesta = x > 0 && y < 20;
    console.log(respuesta); // Salida: true