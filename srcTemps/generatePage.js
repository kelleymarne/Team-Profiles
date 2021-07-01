const { builtinModules } = require("module");

function generatePage(Team) {
console.log({Team}); 
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1 class="display-2 bg-info text-center">Our Team</h1>
    </header>
    <div class="container">
        <div class="row" id="team">
        <!-- each card will be a col-->
        ${Team.map(employee => {
            return employee; 
        })}
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>

`
}
module.exports = generatePage;