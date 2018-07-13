(function($) {
  $.fn.addX = function() {
    this.append('<span class="close">\u00D7 </span>');
  }
})(jQuery);

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {

}


$("document").ready(function() {

  $("li").each(function() {
    $(this).addX();
    console.log(this);
  })

  $(".addButton").click(function() {
    let toAdd = $("#inputActivity").val();
    if (toAdd == '')
      alert("Wprowadz nazwe aktywnosci!");
    else {
      $("#toDoList").append('<li class="">' + toAdd + '</li>');
      $("#inputActivity").val('');
      $("li:last").addX();
    }
  })



  $(document).on('click', '.close', function() {
    $(this).parent().fadeOut(1000);
  })

  $(document).on('click', 'li', function() {
    $(this).toggleClass("done");
    let newPlace = $("li:last");
    if ($(this).hasClass("done"))
      $(this).insertAfter(newPlace);

  })

  $('ul').sortable({
    helper: 'clone'
  });


})
