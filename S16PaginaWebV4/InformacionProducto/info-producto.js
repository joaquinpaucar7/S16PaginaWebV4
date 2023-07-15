const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let ValueByDefault = parseInt(inputQuantity.value)

//FUNCIONES CLICK

btnIncrement.addEventListener('click',()=> {
    
    ValueByDefault +=1
    inputQuantity.value = ValueByDefault
})
btnDecrement.addEventListener('click',()=> {
    if(ValueByDefault ===1){
        return
    }
    ValueByDefault -=1
    inputQuantity.value = ValueByDefault
})

//TOGGLE
//CONSTANTE TOGGLE TITTLES
const toggleDescription = document.querySelector('.tittle-description')
const toggleAdditionalInformation = document.querySelector('.tittle-additional-information')
const toggleReviews = document.querySelector('.tittle-reviews')
 
//CONSTANTE CONTENIDO TEXTO
const contentDescription = document.querySelector('.text-description')
const contentAdditionalInformation = document.querySelector('.text-additional-information')
const contentReviews = document.querySelector('.text-reviews')

//FUNCIONES TOOGLE
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () => {
    contentReviews.classList.toggle('hidden');
});
