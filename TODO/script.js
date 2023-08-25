let inputField = document.querySelector('.inputField');
let addButton = document.querySelector('.button');


addButton.addEventListener('click', function(e)
{
    e.preventDefault();
    let taskString=inputField.value;
    let div=document.createElement('div');
    div.classList.add('task');
    console.log(div);
    let tick=document.createElement('input');
    tick.type='checkbox';
    let task=document.createElement('label');
    task.innerHTML=taskString;
    console.log(tick);
    console.log(task);
    div.appendChild(tick);
    div.appendChild(task);
    let parent=document.querySelector('.container');
    parent.appendChild(div);



})
