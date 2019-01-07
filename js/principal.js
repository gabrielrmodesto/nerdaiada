var btn = document.querySelector("#btnEnvio");

btn.addEventListener("click", function(){
	swal({
		title: "Muito obrigado",
		text: "Logo irei responder sua mensagem",
		button: "OK"
	});
});

const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
	item.addEventListener('click', scrollToId);
});
function getScrollToHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}
function scrollToId(event) {
	event.preventDefault();
	const section = getScrollToHref(event.target) - 50;
	scrollToPosition(section);
}

function scrollToPosition(section){
	window.scroll({
		top: section,
		behavior: "smooth"
	});
}