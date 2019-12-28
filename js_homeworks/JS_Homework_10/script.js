let icons = document.getElementsByClassName("icon-password");
for (let i = 0; i < icons.length; i++){
	icons[i].onclick = () => {
		if(icons[i].classList.contains("fa-eye")){
			icons[i].previousElementSibling.type = "text";
			icons[i].classList.remove("fa-eye");
			icons[i].classList.add("fa-eye-slash");
		}else{
			icons[i].previousElementSibling.type = "password";
			icons[i].classList.remove("fa-eye-slash");
			icons[i].classList.add("fa-eye");
		}
	}
}

let comparing_inputs = document.getElementById('btnSubmit');
let inputs = document.getElementsByTagName('input');

let error = document.createElement('p');
error.innerText = "You need to enter the identical values";
error.style.color = "red";

comparing_inputs.onclick = () => {
	if(inputs[0].value === inputs[1].value){
		error.remove();
		alert("You are welcome");
	}else{
		inputs[1].parentElement.append(error);
	}
}