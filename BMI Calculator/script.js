const form=document.querySelector('form');
form.addEventListener('submit',function(event)
{
    event.preventDefault();
    let weight=parseInt(document.querySelector('#weight').value);
    let height=parseInt(document.querySelector('#height').value);
    let result=document.querySelector('#result');
    let desc=document.querySelector('#desc');
    
    if(isNaN(height) || height <= 0)
    {
        result.innerHTML="Please Enter Valid Height";
    }
    else if(isNaN(weight) || weight <= 0)
    {
        result.innerHTML="Please Enter Valid Weight";
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`${bmi}`;
        if(bmi<18.8)
        {
            desc.innerHTML="Under Weight";
        }
        else if(bmi>18.8 &&bmi<24)
        {
            desc.innerHTML="Normal weight";
        }
        else{
            desc.innerHTML="Over weight";
        }
        
    }



})