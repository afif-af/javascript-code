const personMethods={
    eat(){
        console.log(`person is eating`);
        },
    
    sleep(){
            console.log(`perso is sleeping`);
        },
    
}


function Person(name,age){
    let person={};

    person.name=name;
    person.age=age;

   person.eat =personMethods.eat;
   person.sleep=personMethods.sleep;
    
    return person;
}

const sakib =Person("sakib",23);
const tamim=Person("tamim0",34);

