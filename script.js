let questions = [
    {
        "question": "Warum sind It Berufe nötig?",
        "answer_1": "Um Häuser zu bauen ",
        "answer_2": "Um Tiere zu züchten",
        "answer_3": "Um die Welt voran zu bringen",
        "answer_4": "Für die Eidechsen",
        "right_answer": 3
    },
    {
        "question": "Welches Tier geht auf 4 Beinen?",
        "answer_1": "Pinguin ",
        "answer_2": "Elefant",
        "answer_3": "Strauß",
        "answer_4": "Känguru",
        "right_answer": 2
    },
    {
        "question": "Welche Mahlzeit gilt als Frühstück?",
        "answer_1": "Menemen ",
        "answer_2": "Königsberger Klöpse",
        "answer_3": "Schweinebraten",
        "answer_4": "Big tasty Bacon mit extra Zwiebeln",
        "right_answer": 1
    },
    {
        "question": "Welche Sportart verdient am meisten Geld im Durchschnitt?",
        "answer_1": "Tennis ",
        "answer_2": "Basketball",
        "answer_3": "Hokey",
        "answer_4": "Fußball",
        "right_answer": 4
    },
    {
        "question": "Was kann man lesen?",
        "answer_1": "Bücher ",
        "answer_2": "Tiere",
        "answer_3": "Flaschen",
        "answer_4": "Eidechsen",
        "right_answer": 1
    },
    {
        "question": "Was kann man essen?",
        "answer_1": "Bücher ",
        "answer_2": "Tiere",
        "answer_3": "Flaschen",
        "answer_4": "Türen",
        "right_answer": 1
    },
];

let currentquestion = 0;


function init() {
    document.getElementById('max-question').innerHTML = questions.length;
    showquestion();

}

function showquestion() {
    let question = questions[currentquestion];
    document.getElementById('head-question').innerHTML = question['question'];

    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];


}

function answer(selection) {
    let question = questions[currentquestion];
    console.log('Selected answer is', selection);
    let selectedAnswerNumber = selection.slice(-1);
    console.log('SelectedAnswerNumber is', selectedAnswerNumber);
    let rightAnswer = question['right_answer'];
    console.log('rightAnswerNuber is', rightAnswer);

    let numberOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedAnswerNumber == rightAnswer) {
        console.log('Richtige Antwort !')
    //parent.Node heisst den darüber liegenden Element zu bearbeiten bg-success ist eine bootstrap vorgefertigte Klasse // 
        document.getElementById(selection).parentNode.classList.add('bg-success');

    } else {
        console.log('Falsche Antwort!')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(numberOfRightAnswer).parentNode.classList.add('bg-success');
    }
}