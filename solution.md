## Return Negative

```js
const makeNegative = (num) => {
    if (num <= 0) {console.log(num)}
    else {console.log(num * -1)}
}
```

## Sum of Positive

```js

//I had a lot of help from Ashley and the community on this one.
//I was stubborn and insisted on using a higher order function
//instead of a for loop.

const addPositive = nums.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
       return accumulator + currentValue
    } else {
       return accumulator
    }
}
); console.log(addPositive)
```

## Function 2

```js
const squareValue = (num) => console.log(num**2)
```

## Sum Arrays

```js
const addArray = nums.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0
)
```

## Reversed Strings

```js
const reverseString = (str) => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i]
    } console.log(newString)
}
```
