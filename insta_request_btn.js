var heading5 = document.querySelector('h5');

var btn = document.querySelector('#buttonr');

var like = document.querySelector('#like');


flag=0;


like.addEventListener('click', function(){

    if(flag==0){
        like.style.color='red';
        flag=1;
    }
    else{
        like.style.color='white';
        flag=0;
    }
})


// -----------------------------------------------------------


btn.addEventListener('click', function(){

    if(flag==0){
        heading5.style.color='green';
        heading5.innerHTML='you are friends'
        btn.innerHTML='remove friend'

        flag=1;
    }
    else{
        heading5.style.color='red';
        heading5.innerHTML='add friend request'
        btn.innerHTML='add request'
        flag=0;
    }
})
    


