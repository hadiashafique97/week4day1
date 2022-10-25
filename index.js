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



