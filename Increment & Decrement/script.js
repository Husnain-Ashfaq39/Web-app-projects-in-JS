let output=document.querySelector('.output');
let plus=document.querySelector('.plus');
let minus=document.querySelector('.minus');

plus.addEventListener('click', function(e){
    e.preventDefault();
    let num=output.innerHTML;
    num++;
    output.innerHTML=num;
})
minus.addEventListener('click', function(e){
    e.preventDefault();
    let num=output.innerHTML;
    num--;
    output.innerHTML=num;
})