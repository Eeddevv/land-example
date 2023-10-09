// const form = document.querySelector('.form-order')
// form.addEventListener('submit', sendFormByEmail)

// function sendFormByEmail(event) {
// 	event.preventDefault()

// 	const recipient = 'example@example.com' //
// 	const subject = 'Новая заявка'

// 	const name = document.querySelector('.name').value
// 	const phoneNumber = document.querySelector('.number').value
// 	const productName = document.title
// 	const sendStatus = document.querySelector('.send-status')

// 	const data = {
// 		name: name,
// 		phoneNumber: phoneNumber,
// 		productName: productName
// 	}

// 	const jsonData = JSON.stringify(data)

// 	const xhr = new XMLHttpRequest()

// 	const url = 'https://example.com/sendmail' // Заменить на URL, на котором идёт обработка отправки

// 	xhr.open('POST', url, true)

// 	xhr.setRequestHeader('Content-Type', 'application/json')

// 	xhr.onload = function () {
// 		if (xhr.status === 200) {
// 			sendStatus.innerHTML = 'Wysłano pomyślnie. Menedżer wkrótce się z Tobą skontaktuje'
// 			name.value = ''
// 			phoneNumber.value = ''
// 		} else {
// 			sendStatus.innerHTML = 'Wystąpił błąd. Spróbuj ponownie'
// 		}
// 	}

// 	xhr.send(jsonData)
// }
