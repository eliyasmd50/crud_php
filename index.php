<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="Style.css">
  <title>Document</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script defer src="./create.js"></script>
  <script defer src="./listView.js"></script>
  <script defer src="./delete.js"></script>
  <script defer src="./update.js"></script>
  <script>
    $(document).ready(function() {
      $('#create').click(function() {
        $('.overlay').show();
        $('#success').text('');
        $('#create-dynamic-content').load('create.html', function() {
          createFunction();
        });
      });
    });

    $(document).ready(function() {
      $('#refresh').click(function() {
        $('#view-dynamic-content').load('retrive.html', function() {
          listViewFunction();
        })
      })
    })

    $(document).ready(function() {
      $('#user-list').on('click', 'button.deleteButton', function () {
        deleteFunction();
      })
    })
    $(document).ready(function() {
      $('#user-list').on('click', 'button.updateButton', function () {
        updateFunction();
      })
    })
  </script>
</head>

<body>
  <h1>Employee Dashborad</h1>
  <button id="refresh">Get Employee Details</button>
  <button id="create">Create</button>

  <div class="overlay">
    <div id="create-dynamic-content"></div>
  </div>

  <div id="view-user-list">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Employee Details</h5>
            <div id="view-dynamic-content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>