
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.



var student = {
    
    nome: "Matteo",
    cognome: "Fruianu",
    eta: 32


}

console.log(student);



for ( key in student ) {

    console.log(student[key]);

}

var students = [

{

    nome: "Matteo",
    cognome: "Fruianu",
    eta: 32

},

{

    nome: "Camilla",
    cognome: "Sotgiu",
    eta: 30

},

{

    nome: "Antonello",
    cognome: "Camboni",
    eta: 31

},

{

    nome: "Flora",
    cognome: "Pilo",
    eta: 22

},



]


for (var i = 0; i < students.length; i++) {

    console.log( students[i].nome + " " + students[i].cognome);
}






































