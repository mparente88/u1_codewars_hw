const makeNegative = (num) => {
    if (num <= 0) {console.log(num)}
    else {console.log(num * -1)}
}

//makeNegative(1)
//makeNegative(9)
//makeNegative(0)
//makeNegative(4.02)

nums = [
    1,
    -4,
    7,
    12,
    9,
]

const addPositive = nums.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
       return accumulator + currentValue
    } else {
       return accumulator
    }
}
); console.log(addPositive)

const squareValue = (num) => console.log(num**2)

squareValue(4)

const addArray = nums.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0
); 
console.log(addArray)

const reverseString = (str) => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i]
    } console.log(newString)
}

reverseString("hello")
reverseString("world")