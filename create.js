function createFunction(){
  $(document).ready(function() {
    $('#create').click(function() {
      $('.overlay').show();
      $('#success').text('');
    });
  
  
    $('.close').click(function() {
      $('.overlay').hide();
      $('#form')[0].reset(); 
    });
  
    $(window).click(function(event) {
      if ($(event.target).is('.overlay')) {
        $('.overlay').hide();
        $('#form')[0].reset();
      }
    });
  
  
    $('#form').on('submit', function(e) {
      e.preventDefault(); 
  
      if (validateInputs()) {
        const employeeData = {
          employee_name: $('#employee_name').val(),
          email: $('#email').val(),
          phone: $('#phone').val(),
          position: $('#position').val()
      }
  
        $.ajax({
          type: 'POST',
          url: 'http://localhost/employee_operations/create.php',
          contentType: 'application/json',
          data: JSON.stringify(employeeData),
          success: function(response) {
            $data = JSON.parse(response);
            $('#success').text($data.message);
            $('#form')[0].reset(); 
          },
          error: function(xhr, status, error) {
            console.error('Error:', xhr.responseText);
          }
        });
      }
    });
  
  
    function validateInputs() {
      let isValid = true;
  
    const employee_nameValue = employee_name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const positionValue = position.value.trim();
  
    if (employee_nameValue === "") {
      setError(employee_name, "Username is required");
      isValid = false;
    } else {
      setSuccess(employee_name);
    }
  
    if (emailValue === "") {
      setError(email, "Email is required");
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
      isValid = false;
    } else {
      setSuccess(email);
    }
  
    if (phoneValue === "") {
      setError(phone, "phone Number is required");
      isValid = false;
    } else if (phoneValue.length < 10) {
      setError(phone, "Phone Number must be at least 10 character.");
      isValid = false;
    } else {
      setSuccess(phone);
    }
  
    if (positionValue === "") {
      setError(position, "Please Enter The position");
      isValid = false;
    } else {
      setSuccess(position);
    }
  
    console.log(isValid);
      return isValid;
    }
  });
  
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
  
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };
  
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
  
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };
  
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
}

