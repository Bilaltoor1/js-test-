// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// const arr = [];
// fruits.forEach(function (item, index) {
//     if (item.length <= 5) {
//         arr.push(item)
//     } else {
//         console.log(item)
//     }
// });
// const sortArr = fruits.indexOf();
// console.log(sortArr);


// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
//
// // Filter array items based on search criteria (query)
// function filterItems(arr, query) {
//     return arr.filter(function (el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     })
// }
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const findValue = numbers.reduce((acc, num) => acc += num);
console.log(findValue);
const filterValue = numbers.filter(item => item >= 5);
console.log(filterValue);
const mapped = filterValue.map(item => item * 2);
console.log(mapped);
const total = mapped.reduce(function (acc, num) {
    return acc += num
});
console.log(total)

//
// const totalValue  = function (arr){
//     arr.filter(item=> item >=5).map(item=>item*2).reduce((acc ,item)=>{
//         acc+=item
//     }
// }

