const input = document.querySelector('.input');
const addButton = document.querySelector('.add');
const lists = document.querySelector('.lists');

const colors = ['lightgreen', 'lightblue', 'lightsalmon', 'lightslategray'];

const todos = [];

function addList() {
    let inputValue = input.value;
    const list = document.createElement('li');
    list.className = 'list';
    list.innerText = inputValue;
    list.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    lists.appendChild(list);
    saveItem(list);
}

function saveItem(todo) {
    todos.push(todo);
    console.log(todos);
    localStorage.setItem('lists', todos);
}

addButton.addEventListener('click', addList);

console.log(localStorage.getItem('lists').split(','));

localStorage.getItem('lists').split(',').map(item => {
    JSON.parse(item);
})