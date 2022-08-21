const stopWatchView = document.querySelector('#stop-watch-view');
console.log('id', stopWatchView);

const pTag = document.querySelector('p');
console.log('pTag:', pTag);
const myClass = document.querySelector('my-class');
console.log('myClass');

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

const allListItem = document.querySelectorAll('.list-item');
console.log(allListItem);

let counter = 1
allListItem.forEach(function (listItem) {
    console.log('List item', listItem);
    listItem.innerHTML = counter++;

});

const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (value) {
    console.log(value);
});