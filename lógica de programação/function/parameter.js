//no parameter 
function pop(){
    console.log(arguments);
    console.log(arguments[1]);
};

pop("pop", "pip", 0, 38, 90);

// ex 2
function pop(){
   let total = 0;

   for (let agument in arguments){
       total += 1;
   }
   console.log(total);
};

pop(1, 4, 0, 38, 90);

//with parameter
function pop(a, b, c){
    console.log(a, b, c);
};

pop("pop", "pip", 0, 38, 90);


// standard value 

function pop(a, b = 2, c = 6){
    console.log(a + b+ c);
};

pop(38, 90);


// attribution via destructuring
function test({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
//literal object 

// ob = {nome: "Crislân", sobrenome: "Torres", idade: 21}
test({nome: "Crislân", sobrenome: "Torres", idade: 21});

//******************************************************************/

// with array
function func({valor1, valor2, valor3}){
    console.log(valor1, valor2,valor3);
}
//literal object 

// ob = {nome: "Crislân", sobrenome: "Torres", idade: 21}
func(["Crislân", "Torres", 21]);
