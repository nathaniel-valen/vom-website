document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Collect form data
    const formData = new FormData(this);
    
    // Create object to store form values
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
  
    // Sending email with form data
    Email.send({
      SecureToken : "2396ad7c-86b7-49d7-9c5d-badb59b0cd1e",
      To : 'nathaniel.valen17@gmail.com',
      From : "nathaniel.valen17@gmail.com",
      Subject : "Website VOM",
      Body : `Name: ${formValues.name}<br>Email: ${formValues.email}<br>Message: ${formValues.message}`
    }).then(
      message => alert(message)
    );
  });
  
