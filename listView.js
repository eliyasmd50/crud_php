function listViewFunction (){
  let currentPage = 1;

  function loadUsers(page) {
      $.ajax({
          url: 'http://localhost/employee_operations/view.php',
          method: 'GET',
          data: { page: page },
          dataType: 'json',
          success: function(response) {
            console.log(response);

              const userList = $('#user-list');
              userList.empty(); 
              
              const data = response.data;
                data.forEach(user => {
                  userList.append(`<tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone_number}</td>
                    <td>${user.position}</td>
                    <td>
                    <button class="updateButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></button>
                    <button class="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                    </td>
                </tr>`);
              });
  
              setupPagination(response.totalPages, response.currentPage);
          },
          error: function(xhr, status, error) {
            debugger;
              console.error('Error fetching data:', xhr.responseText);
          }
      });
  }
  
  function setupPagination(totalPages, currentPage) {
      const paginationControls = $('#pagination-controls');
      paginationControls.empty(); // Clear previous controls
  
      for (let page = 1; page <= totalPages; page++) {
          const button = $(`<button>${page}</button>`);
          button.prop('disabled', page === currentPage);
          button.click(function() {
              loadUsers(page);
          });
          paginationControls.append(button);
      }
  }
  
  $(document).ready(function() {
      loadUsers(currentPage); // Load initial data
  });
}
