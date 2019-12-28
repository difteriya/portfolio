let tabs = document.getElementById('tabs');
let tab_content = document.getElementById('tabContent');

for (let i = 0; i < tab_content.children.length; i++){
	tabs.children[i].dataset.index = i;
	if(i)
        tab_content.children[i].hidden = true;
}

tabs.onclick = e => {
	tabs.querySelector(".active").classList.toggle("active");
	tab_content.querySelector("li:not([hidden])").hidden = true;
	e.target.classList.toggle("active");
	tab_content.children[e.target.dataset.index].hidden = false;
}
