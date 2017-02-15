var answer = 0;

// Function Definitions

// 1. Write a function called add that takes two arguments and adds them together, returning the result

// 2. Write a function called subtract that takes two arguments and subtracts them from each other, returning the result

// 3. Write a function called multiply that takes two arguments and multiplies them other, returning the result

// 4. Write a function called divide that takes two arguments and divides them from each other, returning the result



// Event Handlers
document.querySelector('#calc').addEventListener('click', function(e) {
    var calcFunction = e.target.id,
        number1 = Number(document.querySelector('#number1').value),
        number2 = Number(document.querySelector('#number2').value);

    answer = window[calcFunction](number1, number2);

    document.querySelector('#answer').innerHTML = answer;
});