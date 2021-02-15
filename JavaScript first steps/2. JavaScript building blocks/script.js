'use script';


/**
 * 1. Variable
 */

// randomNumber는 수학적 알고리즘을 통해 계산해 1과 100사이의 임의의 수를 지정한다 .
let randomNumber = Math.floor(Math.random() * 100) + 1;

// 각각 HTML에서 결과 문장을 저장하는 기준으로 저장되고, 코드상에서 나중에 문장에 추가되도록 사용된다.
/*
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
*/
// querySelector() : 특정 정보(필요한 요소를 추출하는 CSS selector)를 가져오는 역할
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

// 다음의 입력과 버튼을 받고, 추측된 값을 나중에 받도록 하는 역할을 한다.
/*
    <label for="guessField">Enter a guess: </label>
    <input type="text" id="guessField" class="guessField">
    <input type="submit" value="Submit guess" class="guessSubmit">
 */
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

// (얼마나 많은 추측을 했는지) 추측 개수와, 아직은 있지않은 버튼을 리셋하는 변수가 있다.
let guessCount = 1;
let resetButton;

guessField.focus();

/**
 * 2. Function & if
 */

function checkGuess() {
    // userGuess 변수 선언, 텍스트 필드에서 입력된 현재 값들을 변수의 값으로 저장
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    // userGuess 값을 마지막 guesses 문장을 추가하고, 끝에 공백을 더함
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congraturations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! GAME OVER !!!';
        setGameOver();
    }
    // 숫자도 맞추지 못하고 파례가 남았을 때 
    else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    // 다음 숫자 추측 과정
    guessCount++;
    guessField.value = '';  // 값에 상관없이 텍스트필드를 공란으로 만듬
    guessField.focus();     // 커서를 위치시켜 다음 값이 입력될 수 있도록 한다.
}


/**
 * 3. Event           : 코드가 실행되기 위한 응답으로 브라우저 상에서 일어나는 액션이다.
 *  - event listeners : 이벤트가 발생하여 발생한 이벤트를 처리하는 것
 *  - event handlers  : 이벤트가 발생했을때 실행되는 코드 블록
 */
// guessSubmit 버튼에 event listener를 추가
// NOTE : addEventListener() 에서는 함수의 '()'가 필요없다.
guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    // disabled 의 속성을 true 로함으로써 작동되지 않도록 한다. (essential!)
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button'); // create <button> element
    resetButton.textContent = 'Start new game';     // 'Start new game'라고 표시
    document.body.appendChild(resetButton);         // 현재 HTML 아래쪽에 추가
    resetButton.addEventListener('click', resetGame);
}


function resetGame() {
    guessCount = 1;

    // 표시된 모든 정보를 모두 초기화한다.
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let paras_list of resetParas) {
        paras_list.textContent = '';
    }

    // 코드상에서 초기화버튼을 제거한다.
    resetButton.parentNode.removeChild(resetButton);

    // form 작성을 위해 text를 입력하는 곳을 비워두고 커서를 위치 시킨다.
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    // lastResult 변수 상의 문장 배경색을 제거한다.
    lastResult.style.backgroundColor = 'white';

    // 임의의 수를 다시 지정함으로, 앞의 randomNumber와 중복되지 않도록 다시 설정한다.
    randomNumber = Math.floor(Math.random * 100) + 1;
}
