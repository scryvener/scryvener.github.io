$('#send').on('click', function(e) {
    e.preventDefault();
    subject = $('#subject').val();
    body = $('#body').val();

    console.log("mailto:test@example.com?subject=" + subject + "&body=" + body)
  });