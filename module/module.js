export let a = 1;
export class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    say (){
        console.log(this.name)
    }
}