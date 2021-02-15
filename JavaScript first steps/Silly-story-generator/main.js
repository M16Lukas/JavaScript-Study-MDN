'use strict';

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname'); // "Enter custom name:" 텍스트 필드 값 저장
const randomize = document.querySelector('.randomize');   // "Generate random story" 버튼 오브젝트 저장
const story = document.querySelector('.story');           // <p> element는 story 변수에 저장, 해당 element에는 랜덤한 이야기 복사

function randomValueFromArray(array){                     // 배열을 가져와서 배열이 가진 항목 중 하나를 랜덤하게 반환
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// 2. RAW TEXT STRINGS

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);  
  let yItem = randomValueFromArray(insertY);  
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature =  Math.round((94 - 32) / 1.8) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}