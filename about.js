console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted');
}

let pic = document.querySelector('#pic')
pic.addEventListener('mouseover', () => {
	alert('You are awesome!')
})


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);