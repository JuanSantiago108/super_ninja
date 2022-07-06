class Ninja{
    constructor(fullname, health=100,speed=3, strength=3){
        this.fullname = fullname
        this.health = health
        this.speed = speed
        this.strength=strength
    }
    sayName(){
        console.log("The fullname is", this.fullname)
    }
    showStats(){
        console.log("these are the stats", this.health, this.speed, this.strength)
    }
    drinkSake(){
        console.log("add 10 health", this.health +10 )
    }
}

const newNinja = new Ninja("Chris", 95, 100, 9000);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
console.log(newNinja)

//==================================================//

class Sensei extends Ninja{
    constructor(fullname,health=200,speed=10, strength=10, wisdom= 10){
        super(fullname,health,speed,strength)
        this.wisdom = wisdom;
    }
    showStats(){
        super.showStats()
        console.log("This is the wisdom stat",this.wisdom)
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const newSensei = new Sensei("Master Juan");
newSensei.sayName();
newSensei.showStats();
newSensei.drinkSake();
// newSensei.speakWisdom();
console.log(newSensei)