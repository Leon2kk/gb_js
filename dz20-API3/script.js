function getRandomImage(){    
    const accessKey = 'zEiAAUP4B6RBfYNTlH0-hrA0KoHr5sVBntEX9o23UkM';
    let url = 'https://api.unsplash.com/photos/random/?client_id=' + accessKey;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let imageUrl = data.urls.regular
        let imgElement = document.querySelector('.image')       
        imgElement.setAttribute('src', imageUrl)
        if (data.width >= data.height)
        {
            imgElement.setAttribute('width', '800')
            imgElement.setAttribute('height', 'auto')
        }
        else
        {
            imgElement.setAttribute('height', '700')
            imgElement.setAttribute('width', 'auto')
        }
        imgElement.setAttribute('alt', data.alt_description)
        document.querySelector('.author').innerHTML = data.user.name
        document.querySelector('.likes').innerHTML = "(всего голосов: " + data.likes + ")"
        if (data.liked_by_user)
        {
            document.querySelector('.youlike').innerHTML = "Вы уже лайкали"        
        } 
        else{
            let linklike = `<a href="#" click="postLike(https://api.unsplash.com/photos/${data.id}/like)" class="setLike">Лайк</>`;
            document.querySelector('.youlike').innerHTML = linklike;
        }
    })
    .catch(error => {
        console.error('Не удалось получить изображение:', error)
    });
}

const postLike = async (url = '') => {
     const response = await fetch(url, {
      // должна быть oauth авторизация для лайка
      method: 'POST',
    });
    return response.json(); 
  }

getRandomImage();
