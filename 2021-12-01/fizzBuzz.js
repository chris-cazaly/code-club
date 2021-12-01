function fizzBuzz(n){
    let numbers = [...Array(n).keys()].map(number => number + 1 )
    return numbers.reduce((result, element) => {
        //elemitate this `if` without using `?:` nor `switch` nor `try catch`
        if((element) % 3 == 0){
            return result + "Fizz";
        }else{
            return result + element;
        }
    },"");
}

module.exports = fizzBuzz;

// 1 -> "1"
// 2 -> "12"
// 3 -> "12Fizz"
// 4 -> "12Fizz4"

fish = { 1:"1", 2:"12", 3:"12Fizz" }
console.log(fish[3])

fred = ["","1", "12","12Fizz"]
console.log(fred[3])