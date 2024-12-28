// script.js
    const buttons = document.querySelectorAll('.btn');
    const sound = document.getElementById('button-sound');
    const input = document.getElementById('screen-input');
    const cancel = document.getElementById('clear');
    const one=document.getElementById('one');
    const two=document.getElementById('two');
    const three=document.getElementById('three');
    const four=document.getElementById('four');
    const five=document.getElementById('five');
    const six=document.getElementById('six');
    const seven=document.getElementById('seven');
    const eight=document.getElementById('eight');
    const nine=document.getElementById('nine');
    const zero=document.getElementById('zero');
    const answer=document.getElementById('ans');
    const addition=document.getElementById('add');
    const subtraction=document.getElementById('subtract');
    const multiply=document.getElementById('multiply');
    const divide=document.getElementById('divide');
    const sq=document.getElementById('sq');
    const backspace=document.getElementById('backspace');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset and play the sound
            sound.currentTime = 0; // Rewind to the start
            sound.play();
        });
    });

    one.addEventListener('click', function (event) {
        input.value+='1';
    });
    two.addEventListener('click', function (event) {
        input.value+='2';
    });
    three.addEventListener('click', function (event) {
        input.value+='3';
    }); 
    four.addEventListener('click', function (event) {
        input.value+='4';
    });
    five.addEventListener('click', function (event) {
        input.value+='5';
    });
    six.addEventListener('click', function (event) {
        input.value+='6';
    });
    seven.addEventListener('click', function (event) {
        input.value+='7';
    }); 
    eight.addEventListener('click', function (event) {
        input.value+='8';
    });
    nine.addEventListener('click', function (event) {
        input.value+='9';
    });
    zero.addEventListener('click', function (event) {
        input.value+='0';
    });
    cancel.addEventListener('click', function (event) {
        input.value='';
    });

    addition.addEventListener('click', function (event) {
        if (input.value.slice(-1) === '+' ||input.value.slice(-1) === '-' ||input.value.slice(-1) === '*' || input.value.slice(-1) === '/' || input.value == '')
            {
               console.log("Operator '*' already present"); // Optional: handle as desired
           } else {
               input.value += '+';
           }
    }); 

    subtraction.addEventListener('click', function (event) {    
        if (input.value.slice(-1) === '+' ||input.value.slice(-1) === '-' ||input.value.slice(-1) === '*' || input.value.slice(-1) === '/' || input.value == '')
            {
               console.log("Operator '*' already present"); // Optional: handle as desired
           } else {
               input.value += '-';
           } 
    });

    multiply.addEventListener('click', function (event) {
        if (input.value.slice(-1) === '+' ||input.value.slice(-1) === '-' ||input.value.slice(-1) === '*' || input.value.slice(-1) === '/' || input.value == '')
            {
               console.log("Operator '*' already present"); // Optional: handle as desired
           } else {
               input.value += '*';
           }
    });

    divide.addEventListener('click', function (event) {
        if (input.value.slice(-1) === '+' ||input.value.slice(-1) === '-' ||input.value.slice(-1) === '*' || input.value.slice(-1) === '/' || input.value == '')
            {
               console.log("Operator '/' already present"); // Optional: handle as desired
           } else {
               input.value += '/';
           }
    });

   // Event listener for square operator
    sq.addEventListener('click', function (event) {
    // Check if the last two characters are already '**'
    if (input.value.slice(-1) === '+' ||input.value.slice(-1) === '-' ||input.value.slice(-1) === '*' || input.value.slice(-1) === '/' || input.value == '' ||input.value.slice(-2) === '**' || input.value == '')
     {
        console.log("Operator '**' already present"); // Optional: handle as desired
    } else {
        input.value += '**';
    }
    });


    backspace.addEventListener('click', function (event) {
        input.value=input.value.slice(0,-1);
    }); 
    
    answer.addEventListener('click', function (event) {
        if (input.value == ''){

        }
        else{
           evaluateExpression(input.value);
        }
    }); 
   
    function evaluateExpression(expression) {
        try {
          let result = eval(expression);
          input.value = result;
        } catch (error) {
          alert("Invalid expression")
          input.value = '';
        }
      }
      
