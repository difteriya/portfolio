let user_input = document.querySelector('#priceInput');

user_input.onfocus = () => user_input.style.borderColor = "green";
user_input.onblur = () => {
	if(!(+user_input.value < 0))
    user_input.style.borderColor = "";
}

let div = document.createElement('div');
let span = document.createElement('span');
let button = document.createElement('button');

let err = document.createElement('p');
err.innerText = "Please enter correct price";

user_input.onchange = () => {
	if(+user_input.value >= 0){
		err.remove();
		span.innerText = `Current Price : ${user_input.value}`;
		div.appendChild(span);
		button.innerText = 'X';
		button.onclick = () => {
			user_input.value = "";
			user_input.style.backgroundColor = "";
			button.parentElement.remove();
		}
		div.appendChild(button);
		document.body.insertBefore(div, document.body.children[0]);
		user_input.style.backgroundColor = 'green';
	}else{
		user_input.style.borderColor = "red";
		user_input.style.backgroundColor = "";
		document.body.appendChild(err);
		if(button.parentElement)
        button.parentElement.remove();
	}
}


