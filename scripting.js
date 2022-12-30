$('#send').on('click', function(e) {
    e.preventDefault();
    var subject = $('#subject').val();
    var body = $('#body').val();

    console.log("mailto:test@example.com?subject=" + subject + "&body=" + body)
  });