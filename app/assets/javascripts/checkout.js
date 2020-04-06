function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(document).ready(function(){
	$('.address_list').click(function(){
		$('#payment').attr('href', "payment?address_id="+$(this).attr("id"));
		$('.address_list').css({background:'#fff'});
		$('.address_list').css({border: '1px solid #eaeaec'})
		$('.address_list').removeClass("new_1");
		$(this).css({background: '#f4fdfb'});
		$(this).css({border: '1px solid #b9f0e5'});
		$(this).addClass("new_1")
	});

	$('.address_list').first().css({background:'#f4fdfb'})
	$('.address_list').first().css({border: '1px solid #b9f0e5'})
})
