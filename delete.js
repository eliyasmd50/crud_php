function deleteFunction(){
  $('#user-list').on('click', '.deleteButton', function () {
    debugger;
    const row = $(this).closest('tr');
    const userId = row.data('id');
  
    if (confirm('Are you sure you want to delete this user?')) {
        $.ajax({
            url: 'http://localhost/employee_operations/delete.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ id: userId }),
            success: function(response) {
                alert('User deleted successfully!');
                loadUsers();
            },
            error: function(xhr, status, error) {
                console.error('Error deleting user:', xhr.responseText);
            }
        });
    }
  })

}

