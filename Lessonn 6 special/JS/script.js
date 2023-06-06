// let arr = [1, 2, 3, 4, 5, 6]
// //proverka na massiv
// console.log(arr);
// console.log(typeof (arr), Array.isArray(arr));

// // massiv s raznimi tipami dannix
// let arr2 = [1, 'hi', true]
// console.log(arr2);

// //slojniy massiv
// let arr3 = [[1, 2, 3], 4, 5, 6, [7, 8]]
// console.log(arr3);
// console.log(arr[0], arr[arr.length - 1]);




// let arr =[1,2,4,5,6]


// console.log(arr.length);
// //perviy element i posledniy
// console.log(arr[0], arr[arr.length -1]);



let arr = [1, 2, 3, 4, 5]
let obj = {
    car: 'Matiz',
    name: 'Otabek',

}
arr.unshift(0, 10) //dobavlaet v nachale
arr.unshift(obj)
arr.push(6, 20) // dobavlayet v konce
arr.push(obj)
arr.pop(obj) // udalaet v konce
arr.shift(obj) // udalaet s nachala
arr.sort((a, b) => a - b) // sortiruet
//  arr.reverse() // obratnaya sortirovka
console.log(obj);
console.log(arr);


// let ask = confirm('вопрос который хотите задать')
// сделать конфирм купить машину
// если да то в модальнои окне показать список имен машин
// пример 1) джентра 2) Жугили 3) Кобольт
// каждая машины будет соответсвовать номеру
// т.е. я могу написать в модальное окно либо название машины либо номер
// и тогда она выдаст мне саму машину и скажет вы точно хотите купить ее ?
// если да то поздравляете. если нет то скажите что будем рады увидеть в

// let ask = confirm('Xotite kupit mashinu')
// let vibor = prompt('AA , BB , CC')
// if (vibor == 'AA' || vibor == 1) {
//     console.log('sleduyushiy vopros');
//     let vibor2 = prompt('vi tochno xotite kupit')
//     if (vibor2 == 'да') {
//         console.log('spasibo za pokupku');
//         confirm('Spasibo za pokupku')
//     } else (
//         confirm('Poka Poka')
//     )
// }
// if (vibor == 'BB' || vibor == 2) {
//     console.log('sleduyushiy vopros');
//     let vibor2 = prompt('vi tochno xotite kupit')
//     if (vibor2 == 'да') {
//         console.log('spasibo za pokupku');
//         confirm('Spasibo za pokupku')
//     } else (
//         confirm('Poka Poka')
//     )
// }
// if (vibor == 'CC' || vibor == 3) {
//     console.log('sleduyushiy vopros');
//     let vibor2 = prompt('vi tochno xotite kupit')
//     if (vibor2 == 'да') {
//         console.log('spasibo za pokupku');
//         confirm('Spasibo za pokupku')
//     } else (
//         confirm('Poka Poka')
//     )
// }