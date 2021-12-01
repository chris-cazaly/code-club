function fizzBuzz(n){
    let numbers = [...Array(n).keys()].map(number => number + 1 )
    return numbers.reduce((result, element) => {
        if((element) % 3 == 0){
            return result + "Fizz";
        }else{
            return result + element;
        }
    },"");
}

module.exports = fizzBuzz;

// 1 + 2 + 3 = 1 + (2 + 3) = (1 + 2) + 3 = 6 = (1 + 3) + 2
// S for all s1, s2 in S, s1 + s2 in S
