// Replace 'YOUR_API_KEY' with your actual Pexels API key
 const apiKey = 'HD6H7V2ntuv92VFcSnG6EQ3t8OYVP4hsVXjkbZDVEr3dV1wZsOnliBif';
const apiUrl = 'https://api.pexels.com/v1/popular?per_page=50'; // Adjust per_page as needed

let img = document.querySelector('#randomImage');
// Fetch popular photos from Pexels
fetch(apiUrl, {
  headers: {
    Authorization: apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    // Choose a random photo from the list
    const randomIndex = Math.floor(Math.random() * data.photos.length);
    const randomPhoto = data.photos[randomIndex];

    const imageUrl = randomPhoto.src.medium;
  
    img.src = imageUrl;
    
  })
  .catch(error => console.error('Error fetching image:', error));


  let next=document.querySelector('#next');
  console.log(next);
  next.addEventListener('click',function(){
    fetch(apiUrl, {
        headers: {
          Authorization: apiKey
        }
      })
        .then(response => response.json())
        .then(data => {
          // Choose a random photo from the list
          const randomIndex = Math.floor(Math.random() * data.photos.length);
          const randomPhoto = data.photos[randomIndex];
      
          const imageUrl = randomPhoto.src.medium;
         

          img.src = imageUrl;
          
        })
        .catch(error => console.error('Error fetching image:', error));
  })