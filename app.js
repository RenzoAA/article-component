let btnSocial = document.getElementById('btn-social');
btnSocial.addEventListener('click',socialMediaOpen);

function socialMediaOpen(){
    if(btnSocial){
        document.querySelector('.user-icons').classList.toggle('visible-icons');
    }
}