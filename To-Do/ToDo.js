
$(document).ready(function() {

  $(".add").click(function() {
    var newTaskInput = $("#input-box").val();
    if(newTaskInput.trim() !== "") {
      var newListItem = $("<li></li>").text(newTaskInput);
      var submitBtn = $("<button class='submit-small'></button>").text("Submit");
      newListItem.append(submitBtn);
      $("#list-container").append(newListItem);
      $("#input-box").val("");
    }

    submitBtn.click(function() {
      
  });
  });

  $(document).on('click', '.submit-small', function() {
    $(this).closest('li').remove();
});

  $(".remove").click(function() {
    $("#list-container").empty();
    
  });
});
