$('.tabs-content li:not(:first)').hide();
$('.tabs').click((e) => {
	$(".active").removeClass("active");
	$(e.target).addClass("active");
	$('#tabContent li').hide();
	$(`#tabContent li[data-content=${e.target.dataset.content}]`).show()
})