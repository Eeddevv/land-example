import { CURRENT_DATE, END_DATE } from './date.js'

//Название продукта и более подбробное название
const PRODUCT_NAME = 'LAMPA SOLARNA KINKIET'
const PRODUCT_SUBTITLE = 'LAMPA SOLARNA LED ELEWACYJNA ŚCIENNA KINKIET'
//Новая цена
const CURRENT_PRICE = 174
//Старая цена
const OLD_PRICE = 348

const productName = document.querySelectorAll('.product__title')
const productSubtitle = document.querySelectorAll('.product__subtitle')
const currentPrice = document.querySelectorAll('.current_price')
const oldPrice = document.querySelectorAll('.old_price')
const currentDate = document.querySelectorAll('.current-date')
const endDate = document.querySelectorAll('.last-date')

document.title = PRODUCT_NAME

function changeContent(value, change) {
	change.forEach(item => {
		item.innerHTML = value
	})
}



changeContent(PRODUCT_NAME, productName)
changeContent(PRODUCT_SUBTITLE, productSubtitle)
changeContent(CURRENT_PRICE, currentPrice)
changeContent(OLD_PRICE, oldPrice)
changeContent(CURRENT_DATE, currentDate)
changeContent(END_DATE, endDate)

const orderBtns = document.querySelectorAll('.order-button')
orderBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		console.log('ok')
		e.preventDefault()
		openmodal()
	})
})
const closeModal = document.querySelector('.close')
closeModal.addEventListener('click', (e) => {
	e.preventDefault()
	closemodal()
})
let modal = document.querySelector('#modal')

function openmodal() {
	modal.classList.add("modal-open")
	document.body.style.overflow = 'hidden'
}

function closemodal() {
	modal.classList.remove("modal-open")
	document.body.style.overflow = 'visible'

}