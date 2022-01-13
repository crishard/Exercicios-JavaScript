//classic function 
function hi (){
    console.log("hi");
};

// function expression

const bobJob = function(){
    console.log('bobJob');
};
bobJob();

//Arrow function
const functionArrow = (params) => {
    console.log("Arrow Function");
};
functionArrow();

//in object
const  obj = {
    talk(){
        console.log("talking");
    }
};

obj.talk();