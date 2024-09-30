function updateFunction() {
  $(document).ready(function() {

    $('#user-list').on('click', '.editButton', function() {
        const row = $(this).closest('tr');
        const userId = row.data('id');
        $('#updateUserId').val(userId);
        $('#updateName').val(row.find('td:nth-child(1)').text());
        $('#updateEmail').val(row.find('td:nth-child(2)').text());
        $('#updatePhone').val(row.find('td:nth-child(3)').text());
        $('#updatePosition').val(row.find('td:nth-child(4)').text());
        $('#updateModal').show();
    });
  
    $('#updateButton').click(function() {
        const userId = $('#updateUserId').val();
        const userData = {
            id: userId,
            name: $('#updateName').val(),
            email: $('#updateEmail').val(),
            phone: $('#updatePhone').val(),
            position: $('#updatePosition').val()
        };
  
        $.ajax({
            url: 'http://localhost/employee_operations/update.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                alert('User updated successfully!');
                $('#updateModal').hide();
                loadUsers();
            },
            error: function(xhr, status, error) {
                console.error('Error updating user:', xhr.responseText);
            }
        });
    });
  
  
  });
  
}
