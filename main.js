// Hide the output cards
document.getElementById('output').style.visibility = 'hidden';

function work() {

    // Replace Bootstrap "Success" with "Warning" when reporting an error
    function showError() {
        document.getElementById('result').innerHTML = "Error: please contact administrator";
        document.getElementById('results-card').classList.remove("bg-success");
        document.getElementById('results-card').classList.add("bg-warning");
    }

    // Find the radio option selected
    let rbs;
    function radioSelect(rbs) {
        let selectedInput;
        for (const rb of rbs) {
            if (rb.checked) {
                selectedInput = rb.value;
                break;
            }
        }
        return selectedInput;
    }

    function getAnswer(origMass, maths, conversion ) {

        // Round answers to specified digits
        function roundToXDigits(value, digits) {
            if(!digits){
                digits = 4;
            }
            value = value * Math.pow(10, digits);
            value = Math.round(value);
            value = value / Math.pow(10, digits);
            return value;
        }

        switch(maths) {
            case "times":
                var temp = origMass * conversion;
                var answer = roundToXDigits(temp);
                return answer;
                break;
            case "divide":
                var temp = origMass / conversion;
                var answer = roundToXDigits(temp);
                return answer;
                break;
        }
        return answer;
    }

    // Store the input field  in a variable
    let inputValue = document.getElementById('inputField').value;

    // Check which input radio button is selected
    rbs = document.querySelectorAll('input[name="input"]')
    let inputUnit = radioSelect(rbs);

    // Check which output radio button is selected
    rbs = document.querySelectorAll('input[name="output"]')
    let outputUnit = radioSelect(rbs);

    // concatenate them
    calculation = inputUnit.replace("input-", "") + ' to ' + outputUnit.replace("output-", "");

    // choose the correct mathematical function
    let answer;
    let ounces;
    let grams;
    switch(calculation) {

        case "grams to kilograms":
            answer = getAnswer(inputValue, "divide", 1000);
            document.getElementById('result').innerHTML = answer + "kg";
            break;
        
        case "kilograms to grams":
            answer = getAnswer(inputValue, "times", 1000);
            document.getElementById('result').innerHTML = answer + "g";
            break;
        
        case "pounds to ounces":
            answer = getAnswer(inputValue, "times", 16);
            document.getElementById('result').innerHTML = answer + "oz";
            break;

        case "ounces to pounds":
            answer = getAnswer(inputValue, "divide", 16);
            document.getElementById('result').innerHTML = answer + "lbs";
            break;

        case "grams to ounces":
            answer = getAnswer(inputValue, "divide", 28.34952);
            document.getElementById('result').innerHTML = answer + "oz";
            break;
        
        case "ounces to grams":
            answer = getAnswer(inputValue, "times", 28.34952);
            document.getElementById('result').innerHTML = answer + "g";
            break;

        case "ounces to kilograms":
            ounces = getAnswer(inputValue, "times", 28.34952);
            answer = getAnswer(ounces, "divide", 1000);
            document.getElementById('result').innerHTML = answer + "kg";
            break;
        
        case "kilograms to ounces":
            grams = getAnswer(inputValue, "times", 1000);
            answer = getAnswer(grams, "divide", 28.34952);
            document.getElementById('result').innerHTML = answer + "oz";
            break

        case "grams to pounds":
            ounces = getAnswer(inputValue, "divide", 28.34952);
            answer = getAnswer(ounces, "divide", 16);
            document.getElementById('result').innerHTML = answer + "lbs";
            break;
        
        case "pounds to grams":
            ounces = getAnswer(inputValue, "times", 16);
            answer = getAnswer(ounces, "times", 28.34952);
            document.getElementById('result').innerHTML = answer + "g";
            break;

        default:
            showError();
    }
        // Show the output cards
        document.getElementById('output').style.visibility = 'visible';
}

    // Listen for the click of the button
    const calcEl = document.getElementById('calculate');
    calcEl.onclick = work;