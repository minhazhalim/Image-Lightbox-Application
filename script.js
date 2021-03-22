const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const images = document.querySelectorAll('img');
images.forEach(image => {
     image.addEventListener('click',event => {
          lightbox.classList.add('active');
          const picture = document.createElement('img');
          picture.src = image.src;
          while(lightbox.firstChild){
               lightbox.removeChild(lightbox.firstChild);
          }
          lightbox.appendChild(picture);
     });
});
lightbox.addEventListener('click',event => {
     if(event.target !== event.currentTarget){
          return;
     }
     lightbox.classList.remove('active');
});