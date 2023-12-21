window.addEventListener('DOMContentLoaded', ()=>{
    
   
        
    getHeader()

   
  

    async function getHeader(){
        try {   
            const divTemp = document.createElement('div');
            const headerContainer = document.querySelector('header');
            const request = await fetch('components/Header/header.html',{method: 'GET'});
            const res = await request.text();
            divTemp.innerHTML = res;
            let menuList = divTemp.querySelectorAll('nav > ul > li');
            menuList.forEach(item => {
                let submenu = item.querySelector('.submenu');
                if (submenu) item.classList.add('has__submenu')
            })
            headerContainer.appendChild(divTemp.querySelector('nav'));
          
        } catch (error) {
            console.log(error);
        }
    }

    function burgerMenuHandler(){
        document.querySelector('body').classList.toggle('active__burger');
    }
    window.burgerMenuHandler = burgerMenuHandler
})

