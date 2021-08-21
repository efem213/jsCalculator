let result = 0;
      let operators = ['divide', 'multiply', 'subtract', 'add'];
      let workingOperation = "";

      function updateDisplay(int) {
        let display = document.getElementById("display");
        let secondaryDisplay = document.getElementById("secondaryDisplay"); 
        
        if(display.innerHTML === "0" && operators.indexOf(int) === -1 ) {
          if (int === "decimal") {
            display.innerHTML = "0.";
          } else if (int === "negative-value") {
            display.innerHTML = -1 * display.innerHTML
          } else if(display.innerHTML.indexOf("-1") > -1) {
            display.innerHTML =  display.innerHTML.slice(1, display.innerHTML.length);
          }
          
          else {
            display.innerHTML = int;
          }

        } else if (operators.indexOf(int) >= 0) {
          //console.log("It is working")

          if (result === display.innerHTML) {
            //Operand button pressed twice exeception
            workingOperation = int;
          } else if( workingOperation === "") {
            //Dealing without an operand
            workingOperation = int;
            result = display.innerHTML;
            secondaryDisplay.innerHTML= result;
            display.innerHTML = 0;
          }
          
          else {
            //Dealing with a set an operand
            result = calculate(result, display.innerHTML, workingOperation);
            secondaryDisplay.innerHTML = result;
            display.innerHTML = 0;
            workingOperation = int;
          }

        } else if (int === "equals") {
          //console.log(result, "<= result", display.innerHTML, "<= display.innerHTML", workingOperation, "<= working operations")
          display.innerHTML = calculate(result, display.innerHTML, workingOperation);
          result = 0;
          workingOperation = ""
          secondaryDisplay.innerHTML = result
        } else if (int === "decimal") {
          //console.log("decimal is clicked")
            if (display.innerHTML.indexOf(".") === -1) {
              display.innerHTML += "."
            } 
          //console.log("decimal is clicked")
        } else if (int === "negative-value") {
          console.log("negative-value has been selected")
          if(display.innerHTML.indexOf("-1") === -1) {
            display.innerHTML = -1 * display.innerHTML
          } else if(display.innerHTML.indexOf("-1") > -1) {
            display.innerHTML =  display.innerHTML.slice(1, display.innerHTML.length);
          }
        }
        
        
        else {
          display.innerHTML += int;
        }

      }
      function updateAC () {
          let secondaryDisplay = document.getElementById("secondaryDisplay");
        display.innerHTML = "0";
        result = 0;
        display.innerHTML = 0;
        secondaryDisplay.innerHTML = 0;
      }
      function calculate (firstNumber, secondNumber, operator) {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber); 
          if ( operator === "add") {
            return firstNumber + secondNumber
          } else if ( operator === "subtract") {
            return firstNumber - secondNumber
          } else if (operator === "divide") {
            return firstNumber / secondNumber
          } else if (operator === "multiply") {
            return firstNumber * secondNumber
          }
      }
  