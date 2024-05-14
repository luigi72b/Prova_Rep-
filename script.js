/* 
    Tema :Array

 */

    let colore = "Blue";
    let colori = ["Rosso","Nero","Bianco"];

    let Persone = [];

    console.log(typeof Persone);
    console.log(colori[0]);

    colori.push("Verde");
    console.log(colori);

    let text = colori.join('-');
    console.log(text);

    colori.forEach(elemento => {
        console.log(elemento);
    });

    let num = [1,2,3,4,5,6,7,8,9,10];

    //let a = num[0]; 
    //let b = num[1];

    // DESTRCTURING
    let [a,b,...c] = num;

    console.log(a);
    console.log(b);
    console.log(c);
