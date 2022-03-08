
function check() {
    let score = 0;
    let q1_right_answer = document.getElementById('q1_right_answer');
    let q2_right_answer = document.getElementById('q2_right_answer');
    let q3_right_answer = document.getElementById('q3_right_answer');

    if (q1_right_answer.checked) {
        score++;
        alert('Answer of Q1 is Right')
    }

    else {
        alert('Answer of Q1 is wrong')
    }

    if (q2_right_answer.checked) {
        score++;
        alert('Answer of Q2 is Right')
    }

    else {
        alert('Answer of Q2 is wrong')
    }

    if (q3_right_answer.checked) {
        score++;
        alert('Answer of Q3 is Right')
    }

    else {
        alert('Answer of Q3 is wrong')
    }






    alert(`Your score is ${score}`)

}