const wrapTovar = document.querySelector('#wrap-tovar');
const imgTovar = wrapTovar.querySelector('.tovar');
const small = wrapTovar.querySelector('.small');

function changePhoto(e){
    //closest
    let link = e.target.closest('a');
    
    if(link){
        let path = link.getAttribute('href');
        imgTovar.src = path;
    }
  
    e.preventDefault();
}

small.addEventListener('click', changePhoto);