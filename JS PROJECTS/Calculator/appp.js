console.log("Calculator App")
const clearAll = () => {
    // console.log("Clear")
    let result = document.getElementById('result');
    result.value = "";
}


const getNum = (number) => {

    let result = document.getElementById('result');
    // console.log(result)
    // console.log(number);
    result.value = result.value + number
}


const calculateAnswer = () => {
    console.log("Calculating");
    let result = document.getElementById('result');
    let calculation = result.value;
    // console.log(calculation);

    try {
        let answer = eval(calculation);
        result.value = answer;
        console.log(answer)

    }
    catch {

        let error = "E"
        result.value = error;
    }
}







