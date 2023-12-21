window.addEventListener("DOMContentLoaded", ()=>{
       
    getFooter()
    async function getFooter(){
        try {   
            const divTemp = document.createElement('div');
            const footerContainer = document.querySelector('footer');
            const request = await fetch('components/Footer/footer.html',{method: 'GET'});
            const res = await request.text();
            divTemp.innerHTML = res;
            footerContainer.appendChild(divTemp.querySelector('.content'));
           
        } catch (error) {
            console.log(error);
        }
    }
    
})

