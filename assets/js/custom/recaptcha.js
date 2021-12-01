(function() {
    document.getElementById("contact-form").addEventListener("send-message-button", function(event) {
        if (!grecaptcha.getResponse()) {
            event.preventDefault();
            grecaptcha.execute();
        } 
      });
  })();