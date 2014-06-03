$(document).ready(function(){

	//menu header

	$("#menu-home a").click(function( event ){
		event.preventDefault();

		var link = $(this).attr("href");

		$("#header").addClass("saida");

		setInterval(function(){
			window.location.href = link; 

		},900);
		
	});

	//slide portifolio

	var tamUl = $("#slide-port ul").length;

	for (var i = tamUl; i > 0; i--) {
		n = i;
		$("#nav-slide-port a.voltarSlide").after("<a href='#'' name='numerico'>0"+n+"</a>")
	};

	$("#nav-slide-port a").eq(1).addClass("ativado");

	$("#nav-slide-port a").each(function(){

		var ind = $(this).index();
		var classe = $(this).attr("class");
		var indSele = $("#slide-port ul.selecionado").index();

		ind = ind - 1;

		$(this).click(function(event){
			event.preventDefault();
			var indSele = $("#slide-port ul.selecionado").index();
			var name = $(this).attr("name");

			if(name === "numerico"){

				$("#nav-slide-port a").removeClass();
				$(this).addClass("ativado");

				$("#slide-port ul.selecionado").addClass("removendo");
				$("#slide-port ul").removeClass("selecionado");

				setTimeout(function(){
					$("#slide-port ul").removeClass();
					$("#slide-port ul").eq(ind).addClass("selecionado");

				},800);

			} 
		});

		$(this).click(function(event){
			event.preventDefault();
			var indAti = $("#nav-slide-port a.ativado").index();
			var indSele = $("#slide-port ul.selecionado").index();
			var rm = indAti - 1;
			var rmS = indSele - 1;

			if(classe === "voltarSlide"){

				if(indAti > 1){
					$("#nav-slide-port a").removeClass("ativado");
					$("#nav-slide-port a").eq(rm).addClass("ativado");

					$("#slide-port ul.selecionado").addClass("removendo");
					$("#slide-port ul").removeClass("selecionado");

					setTimeout(function(){
						$("#slide-port ul").removeClass();
						$("#slide-port ul").eq(rmS).addClass("selecionado");

					},800);

				} 
			} 
		});

		$(this).click(function(event){
			event.preventDefault();
			var indAti = $("#nav-slide-port a.ativado").index();
			var indSele = $("#slide-port ul.selecionado").index();
			var tam = $("#nav-slide-port a").length;
			var ad = indAti + 1;
			var adS = indSele + 1;

			if(classe === "passarSlide"){
				var mov = tam -2;
				if(indAti < mov){
					$("#nav-slide-port a").removeClass("ativado");
					$("#nav-slide-port a").eq(ad).addClass("ativado");

					$("#slide-port ul.selecionado").addClass("removendo");
					$("#slide-port ul").removeClass("selecionado");

					setTimeout(function(){
						$("#slide-port ul").removeClass();
						$("#slide-port ul").eq(adS).addClass("selecionado");

					},800);

				}
			}
		});
	});


	// Image Portifólio
	galeria("#slide-port");
		
});

function galeria ( idSlider ) {
	$(idSlider).find("ul li a").click(function( event ){
		event.preventDefault();
		console.log('sss')

		var src = $(this).find("img").attr("src");

		$(".mask-port").addClass("ativado");

		$(".mask-port").find("img").attr("src", src);
	});

	$(".mask-port").find(".fexar").click(function( event ){
		event.preventDefault();
		$(".mask-port").removeClass("ativado");
	})
}
