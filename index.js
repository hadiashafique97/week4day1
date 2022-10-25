console.log('first commit')


// FUNCTION 1 commit changes to git hub 
const logNumbers = () => {
    for(i = 1 ; i<= 20; i++){
       console.log(i) 
    }
}
logNumbers()

//FUNCTION 2 commit to git hub write a forloop that will log only the even numbers 0 to 200

const logEven = () => {
    for (i = 0; i <= 200; i++){

        if(i % 2 == 0 && i !== 0){
            console.log(i)
        }
    }
}
logEven()


//FUNCTION 3 commit to github fizzbuzz

const getMyNumbers = () => {
    for( i = 0; i<= 100; i++){
        if( i % 5 === 0 && i % 3 === 0){
            console.log( i +' fizzbuzz')
        }else if( i % 5 === 0){
            console.log( i + ' fizz')
        }else if(i % 3 === 0){
            console.log( i + ' buzz')
        }
    }
}
getMyNumbers()


//FUNCTION 4 commit to github

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee [2] += 1
console.log(plantee)

wolfy[3]= "gotham City"
console.log(wolfy)

dart[3] += ' Hawkings'
console.log(dart)

// wolfy[0] = "GameBoy"
wolfy.shift()
wolfy.unshift('Gameboy')
console.log(wolfy)


// Yell at the Ninja Turtles

let myTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

const yellMyTurtles= (arr)=>{
for( const element of arr){
    console.log(element.toUpperCase())
}
}
yellMyTurtles(myTurtles)