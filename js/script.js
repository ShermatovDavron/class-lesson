class Car{
    constructor(name,color, speed){
        this.name = name
        this.color = color
        this.speed = speed
    }
    calcSpeed(){
        return this.speed * 100
    }
}
class Spark extends Car{
    constructor(name, color, isAirbag, extraBallon){
        super(name,color)
        this.isAirbag = isAirbag
        this.extraBallon = extraBallon
    }
    logger(){
        console.log(
            `Name of car ${this.name}, color is ${this.color}. Is air bag there ${this.isAirbag}`            
        )
    }
}

const aboutcar = new Spark('spark', 'White', true, 5)

aboutcar.logger()
console.log(aboutcar.calcSpeed())