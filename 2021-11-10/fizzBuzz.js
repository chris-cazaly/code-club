function fizzBuzz(n){
    let numbers = [...Array(n).keys()].map((num) => num + 1);
    console.log(numbers);

    numbers = numbers.reduce((result, element) => {
        if(element % 3 == 0){
            return result + "Fizz";
        }else{
            return result + element;
        }
    }, "");
    
    return numbers;
}

module.exports = fizzBuzz;
