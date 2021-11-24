function fizzBuzz(n){
    let numbers = [...Array(n).keys()].map((num) => num + 1);
    console.log(numbers);

 const mapsNumbers = numbers.map(element => {
        return fizzBuzzSingle(element)
    }).join("")
    
    return mapsNumbers;
}

function fizzBuzzSingle(element) {
    if(element % 3 == 0){
        return "Fizz";
    }else{
        return element;
    }
}

// return (element%3 && "fizz"
// || element)
module.exports = fizzBuzz;
