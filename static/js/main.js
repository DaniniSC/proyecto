$(document).ready(function(){
	var desdeinput = $('#date1');
	var hastainput = $('#date2');
	var desde = $(desdeinput).val();
	var hasta = $(hastainput).val();
	//var container = $('form').length>0 ? $('form').parent() : "body";
	var options={
		format: 'dd/mm/yyyy',
		//container: container,
		todayHighlight: true,
		autoclose: true,
	};
	//Despliega datepicker
	desdeinput.datepicker(options);
	hastainput.datepicker(options);
	

	//Función obtener XML
	$('#obtenerXML').click(function(){
		$('.divBtn').append('<p>'+ desde + hasta + '</p>');
	})

	function do_ajax(target, object) {
		$('.btn').prop( "disabled", true );
		$(object).addClass('loading');
		$(object).text(target);
		$.ajax({
		    type : "GET",
		    url : target,
			success : function(json) {
				$(object).removeClass('loading');
				$(object).text(JSON.stringify(json, undefined, 4));
				console.log(json);
				$('.btn').prop( "disabled", false );
			},
			error : function(xhr,errmsg,err) {
				$(object).removeClass('loading');
				$(object).text(xhr.status + ": " + xhr.responseText);
			    console.error(xhr.status + ": " + xhr.responseText);
			    $('.btn').prop( "disabled", false );
			}
		});
	};
});

