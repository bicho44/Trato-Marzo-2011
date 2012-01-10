// Scroll
$(".scroll")
    .scrollable({ circular: true, next: '.sig', prev: '.ant' })
    .click(function() {$(this).data("scrollable").next();})
    .navigator();

//$(".sig").click(function(){
//    $(".scroll").data("scrollable").next();
//});
//
//$(".ant").click(function(){
//    $(".scroll").data("scrollable").prev();
//});

$(":date").dateinput({
	format: 'dd/mm/yyyy',	// the format displayed for the user
	selectors: true             	// whether month/year dropdowns are shown
});

$(":date:first").data("dateinput").change(function() {	
	// we use it's value for the seconds input min option
	$(":date:last").data("dateinput").setMin(this.getValue(), true);
        
});