let inputField = document.querySelector('.inputField');
let addButton = document.querySelector('.button');

let parent = document.querySelector('.container');


addButton.addEventListener('click', function (e) {
    e.preventDefault();
    let taskString = inputField.value;
    let div = document.createElement('div');
    div.classList.add('task');
    console.log(div);
    let tick = document.createElement('input');
    tick.type = 'checkbox';
    let task = document.createElement('label');
    task.innerHTML = taskString;
    let img = document.createElement('img');
    img.src = 'close.png';
    img.id = 'close';

    div.appendChild(tick);
    div.appendChild(task);
    div.appendChild(img);


    parent.appendChild(div);
    deletion();

})


function deletion() {
    let delButton = document.querySelectorAll('#close');
    delButton.forEach(function (delButn) {
        delButn.addEventListener('click', function () {
            let taskDiv = delButn.parentElement;
            console.log('Hello');
            taskDiv.remove(); // Remove the task div when close button is clicked
        });
    });

}
deletion();