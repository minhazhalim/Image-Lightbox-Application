class Lightbox {
     static activate(){
          document.body.insertAdjacentHTML('beforeend',`
               <div class="lightbox" id="lightbox" style="display:none;">
                    <div class="lightbox__inner">
                    <button type="button" class="lightbox__close">&times;</button>
                    <div class="lightbox__content"></div>
                    </div>
               </div>
          `);
          const lightbox = document.querySelector('#lightbox');
          const buttonClose = lightbox.querySelector('.lightbox__close');
          const content = lightbox.querySelector('.lightbox__content');
          const closeLightbox = () => {
               lightbox.style.display = 'none';
               content.innerHTML = '';
          };
          lightbox.addEventListener('mousedown',event => {
               if(event.target.matches('#lightbox')){
                    closeLightbox();
               }
          });
          buttonClose.addEventListener('click',() => {
               closeLightbox();
          });
     }
     static show(htmlOrElement){
          const content = document.querySelector('#lightbox .lightbox__content');
          document.querySelector('#lightbox').style.display = null;
          if(typeof htmlOrElement === 'string'){
               content.innerHTML = htmlOrElement;
          }else{
               content.innerHTML = '';
               content.appendChild(htmlOrElement);
          }
     }
}
Lightbox.activate();
Lightbox.show('<p>lightbox contents</p>');