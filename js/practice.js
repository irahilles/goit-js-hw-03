// // -----------------------------------------Прості задачі---------------------------------

// // Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
// function ShowElements (arr) {
//     for (let i=0; i<arr.length; i++){
//         console.table(arr[i]);
//     }
// }
// ShowElements([20,30,25,156,85]);
// // Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.
// function findPairElement (array){
//     for (let i = 0; i< array.length; i++){
//         if(array[i]%2===0){
//             console.log(array[i]);
//         }
//     }
// }
// findPairElement([1,2,3,4,5,6,7,8,9,10]);
// // Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.
// function findBiggerElement (arr, max){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>max){
//             console.log(arr[i]);
//         }
//     }
// }
// findBiggerElement([25,34,785,1,96,235], 150);
// // Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
// function findSum (arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i]; 
//     }
//     return sum;
// }
// console.log(findSum([20, 5, 5]));
// // Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.
// function findElem(array, elem) {
//     let count = 0;
//     for(let i = 0; i<array.length; i++){
//         if (array[i] === elem){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findElem(['Ira','Ivan','Baker','Adam'], 'Baker'));
// // Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.
// function deleteNum(numbers){
//     let result = [];
//     for(let i=0; i<numbers.length; i++){
// if (numbers[i]>=0){
// result.push(numbers[i]);
// }
//     }
//     return result;
// }
// console.log(deleteNum([-1,-2,5,6,-8,12,4]));
// // Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.
// function changeString (arr){
//     for (let i = 0; i<arr.length; i++){
//         if (arr[i].length<6) {
//            arr[i] = arr[i].toLowerCase();
// //         } else {
// //          arr[i] = arr[i].toUpperCase();  
// //         }
// //     }
// //     return arr;
// // }
// // console.log(changeString(['Partyka', 'Hilles', 'Wonderful', 'Apple']));
// // // Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.
// // function findNotPair(num){
// //    let notPairNum = [];
// //     for (let i = 0; i<num.length; i++){
// //       if (i%2 !== 0){
// //         notPairNum.push(num[i]);
// //       }
// //     }
// //     return notPairNum;
// // }
// // console.log(findNotPair([1,2,3,4,5,6,7,8,9]));
// // Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.
// // function multiplyIndex(num){
// //     let res = [];
// //     for(let i = 0; i<num.length; i++){
// //        res.push(num[i]*i); 
// //     }
// //     return res;
// // }
// // console.log(multiplyIndex([5,2,3,4,6]));
// // // Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.
// // function showDivision(numbers){
// //     let result = [];
// //     for(let i = 0; i<numbers.length; i++){
// //         if(numbers[i]%3 === 0){
// //             result.push(numbers[i]);
// //         }
// //     }
// //     return result;
// // }
// // console.log(showDivision([2,3,8,9,12,4,5,6]));
// // ------------------------Середні задачі-----------------------

// // Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// function matchArr (arr1, arr2){
//     let res = [];
//     for (let i = 0; i<arr1.length; i++){
//         if(arr2.includes(arr1[i])){
//             res.push(arr1[i]);
//         }
//     }
//     return res;
// }
// console.log(matchArr([5,85,46,71,20,10], [2,85,71,56,10]));
// // Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.
// function excludeArr (arr1,arr2){
//     let res = [];
//     for (let i = 0; i<arr1.length; i++){
//         if(!arr2.includes(arr1[i])){
//             res.push(arr1[i])
//         }
//     }
//     return res;
// }
// console.log(excludeArr([5,85,46,71,20,10], [2,85,71,56,10]));
// Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// function findMinElement(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]; 
//         }
//     }
//     return min; 
// }
// console.log(findMinElement([20,54,30,12,85]));

// // Напиши функцію яка приймає масив та знаходить максимальний елемент.
// function findMinElement(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]; 
//         }
//     }
//     return max; 
// }
// console.log(findMinElement([20,54,30,12,85]));
// // Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.
// function findBiggerElem(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]; 
//     }
//     let middle = sum / arr.length;
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > middle) {
//             res.push(arr[i]); 
//         }
//     }
//     return res;
// }
// console.log(findBiggerElem([2,5,3]));
// // Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.
// function biggerThanIndex(arr){
//     let res =[];
//     for(let i = 0;i<arr.length;i++){
// if(arr[i]>i){
//     res.push(arr[i]);
// }
//     }
//     return res;
// }
// console.log(biggerThanIndex([1,0,2,3,5,7]));

// // Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.
// function removeMinElement(arr) {
//     let minIndex = 0; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i; 
//         }
//     }
//     arr.splice(minIndex, 1); 
//     return arr; 
// }
// console.log(removeMinElement([5,8,6]));

// // Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.

// function nonFive(start,end){
//     let res =[];
//     for(let i=start; i<=end; i++){
//         if (!i.toString().includes('5')) {
//             res.push(i); 
//         }
//     }
//     return res;
// }
// console.log(nonFive(1,6));

// ---------------------------------------Складні----------------------------------------
// Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.
function moveNumbers(arr){
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]); 
        } else {
            odd.push(arr[i]);  
        }
    }
    return even.concat(odd);
}
console.log(moveNumbers([1,2,3,4,5,6,7,8,9]));
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.
// Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.
// Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.
// Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.