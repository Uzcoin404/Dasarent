const btnOrder   = document.querySelector('.btn-order')
const modalOrder = document.querySelector('.modal-order')
const closebtnModal = document.querySelector('.modal-order .btn-burger');
const formModalOrder = modalOrder.querySelector('form')

formModalOrder.addEventListener('submit',function(){
    modalOrder.classList.remove('open')
})

btnOrder.addEventListener('click',function(e){
    e.preventDefault()
    modalOrder.classList.add('open')
    const name = btnOrder.getAttribute('data-name')
    const photo = btnOrder.getAttribute('data-photo')
    
    const inputName = modalOrder.querySelector('[name="order-name"]')
    const inputPhoto = modalOrder.querySelector('[name="order-photo"]')
    
    inputName.value = name
    inputPhoto.value = photo
})
closebtnModal.addEventListener('click',function (e) {
    e.preventDefault()
    modalOrder.classList.remove('open')
})
