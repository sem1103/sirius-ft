window.addEventListener("DOMContentLoaded", ()=>{
       
    getFooter()
    async function getFooter(){
        try {   
            const divTemp = document.createElement('div');
            const footerContainer = document.querySelector('.feedback__form');
            const request = await fetch('components/FeedbackForm/feedbackForm.html',{method: 'GET'});
            const res = await request.text();
            divTemp.innerHTML = res;
            footerContainer.appendChild(divTemp.querySelector('.content'));
            placeholderCreate()
           
        } catch (error) {
            console.log(error);
        }
    }

    function placeholderCreate(){
        let inputs = Array.from(document.querySelectorAll('.feedback__form input'));
    let textArea = document.querySelector('.feedback__form textarea');
    let placeholders = document.querySelectorAll('label span')
    inputs.push(textArea);
    inputs.forEach((item, index) => {

        item.addEventListener('focus', () => {
            inputs.forEach((elem, ind) => {
                if (!elem.value) placeholders[ind].classList.remove('has__value');
            })
            placeholders[index].classList.add('has__value');
        });



        item.addEventListener('blur', () => {
            inputs.forEach((elem, ind) => {
                if (!elem.value) placeholders[ind].classList.remove('has__value');
            })
        })

        })
    createMusk()
    }

    function createMusk(){
        let eventCalllback = function (e) {
            let el = e.target,
                clearVal = el.dataset.phoneClear,
                pattern = el.dataset.phonePattern,
                matrix_def = "+7(___) ___-__-__",
                matrix = pattern ? pattern : matrix_def,
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = e.target.value.replace(/\D/g, "");
            if (clearVal !== 'false' && e.type === 'blur') {
                if (val.length < matrix.match(/([\_\d])/g).length) {
                    e.target.value = '';
                    return;
                }
            }
            if (def.length >= val.length) val = def;
            e.target.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
        }
        let phone_inputs = document.querySelectorAll('[data-phone-pattern]');
        for (let elem of phone_inputs) {
            for (let ev of ['input', 'blur', 'focus']) {
                elem.addEventListener(ev, eventCalllback);
            }
        }
    }
    
})

