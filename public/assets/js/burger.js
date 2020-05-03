$(function() {
  // submit button, for adding burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
          burger_name: $("#newburger").val().trim(),
          devoured: 0
        };
        
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            location.reload();
          });
    });

    // devour button for changing devour status
    $(".devourBurger").on("click", function(event) {
        var id = $(this).data("id");
        var devouredState= {
          devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
        }).then(function() {
            location.reload();
          });
    });
});