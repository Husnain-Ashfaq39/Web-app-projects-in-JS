let inputField = document.querySelector('.search-input');
let search_button = document.querySelector('.search-button');
let profile=document.querySelector('#profile');
let naam=document.querySelector('#name');
let loc=document.querySelector('#loc');
let b=document.querySelector('#bio');
let f=document.querySelector('#f');
let f1=document.querySelector('#f1');



search_button.addEventListener('click', function (e) {
    if (inputField.value != null) {
        fetch(`https://api.github.com/users/${inputField.value}`)
            .then(response => response.json()
            )
            .then(data => {
                profile.src=`${data.avatar_url}`;
                naam.innerHTML=data.name;
                loc.innerHTML=data.location;
                b.innerHTML=data.bio;
                f.innerHTML=data.followers
                f1.innerHTML=data.following;
                
            })

            .catch(function (error) {
                alert("Error: No users found");
            })
    }
    else {

    }
})

