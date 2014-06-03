$(document).ready(function(){

	$("#aliga").each(function(){

		var jqxhr = $.getJSON( "scripts/membros.json", function() {

		})
		  .done(function( data ) {

		  	function ciclo (ciclo_name, div_name) {
		  		
		  		$.each( ciclo_name, function( key, val ) {
		  			var image = "images/freelas/"+val.imagem;
			    	var cont = "<dl><dt><img src='"+image+"' alt=''></dt><dd><h4>"+val.nome+"</h4><h5>"+val.oquefaz+"</h5><span class='cont-dt' id='id_resumo'>"+val.resumo+"</span><span class='cont-dt' id='id_url'>"+val.url+"</span><span class='cont-dt' id='id_portifolio'>"+val.portifolio+"</span></dd></dl>";
			    	$(div_name).find(".freelances").append(cont)

			    });
		  	};

		  	ciclo(data.progetos, progetos);
		  	ciclo(data.criacao, criacao);
		  	ciclo(data.desenvolvimento, desenvolvimento);

		  })
		  .fail(function() {
		    console.log( "error" );
		  });

	});

});

setTimeout(function(){
	$(document).ready(function(){
		$(".freelances dl").click(function(){
			var sNome = $(this).find("h4").html();
			var sImage = $(this).find("dt img").attr("src");
			var sOquefaz = $(this).find("h5").html();
			var sResumo = $(this).find("#id_resumo").html();
			var sUrl = $(this).find("#id_url").html();
			var sPort = $(this).find("#id_portifolio").html();

			if(sPort.length != 0){
				var aPort = sPort.split(',');
				var aPortL = aPort.length;

				$(".sect-portfolio-freela").addClass("com-port");

				for(i=0; i < aPortL; i++){
					var addPort = "<li><a href='#'><img src='images/port/"+aPort[i]+"' alt=''></a></li>"
					$(".sect-portfolio-freela ul").append(addPort);
				}

			} else {
				$(".sect-portfolio-freela").removeClass("com-port");
			}

			$("html, body").animate({ scrollTop: "0px" });		
			
			$(".mask-aliga").addClass("ativado");
			$(".mask-aliga").find(".sect-resumo-freela > img").attr("src", sImage);
			$(".header-article-single").find("h3").append("<span>"+sNome+"</span>");
			$(".header-article-single").find("p").append("<span>"+sOquefaz+"</span>");
			$(".sect-resumo-freela").find("article > p").append("<span>"+sResumo+"</span>");
			

			if(sUrl != 0){
				$(".sect-resumo-freela").find("article > a").addClass("com-link").attr("href", sUrl);
			} else{
				$(".sect-resumo-freela").find("article > a").removeClass("com-link");
			}

			setTimeout(function(){
				galeria(".sect-portfolio-freela");
			},100);

		})
	});

},100);



