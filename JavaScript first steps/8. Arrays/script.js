'use strict';

// 1. 배열이란?
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

// 다중배열
let random = ['tree', 795, [0, 1, 2]];
console.log(random[2][2]);

// length : 배열의 갯수
console.log(shopping.length);   // return 5

let sequence = [1, 2, 2, 3, 4, 5, 15];
for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}


// 2. 유용한 배열 method

// 문자열을 배열로 변환하기
// split()
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(myArray);               // return ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]


// 배열을 문자열로 변환하기
// join() : 구분자 지정 가능
let myNewString = myArray.join(',');
console.log(myNewString);           // return Manchester,London,Liverpool,Birmingham,Leeds,Carlisle

// toString() : 구분자 지정 불가능
let myToString = myArray.toString();
console.log(myToString);            // return Manchester,London,Liverpool,Birmingham,Leeds,Carlisle


// 배열에 item 을 추가하고 제거하기
// push() : 배열 맨 끝에 item 추가
myArray.push('Cardiff');
console.log(myArray);               // return ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"]

// pop() : 배열 맨 끝에 item 제거
myArray.pop();
console.log(myArray);               // return ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]

// unshift() : 배열 제일 처음 부분의 item을 추가
myArray.unshift('Edinburgh');
console.log(myArray);               // return ["Edinburgh", "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]

// shift() : 배열 제일 처음 부분의 item을 제거
myArray.shift();
console.log(myArray);               // return ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
