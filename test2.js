$(document).ready(function(){
	$(".btn-danger").on("click", function(){
		$("#modWind").modal("show");
    // var textMod = $("btn-danger").text(),
		$(this).closest(".row").addClass("del");
    var $textMod = $(".del").text();
    console.log($textMod),
    $(".modal-body").text($textMod+'?'),
    $textMod = '';
	});


	$("#Delete").on("click", function(){
		console.log('accept'),
		$(".del").hide(),
		$('#modWind').modal('hide'),
        $.ajax({
               dataType: "json",
               url: "obrabotchik.json",
               data: "name",
               success: function(data){
               		console.log(data);
               }             			 
    	});
        $("tr").removeClass("del");
    });

    $(".noDelete").on("click", function(){
    	console.log("reject"),
    	$("#modWind").modal("hide"),

    	$("tr").removeClass("del"); 
    });	
});
