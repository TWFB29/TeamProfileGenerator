function htmlLayout(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team Profile Generator</title>
        <style>
            h5 {
                background-color: powderblue;
            }
            h6 {
                background-color: red;
            }
            #boxes{
                display: inline-block;
            }
        </style>
    </head>
    
    <body>
    
        <div class="container">
            <div class="row">
                <div class="col-12 jumbotron mb-3">
                    <h1 class="text-center">Team Profiles</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-10 justify-content-evenly" id="boxes">
${data}
                </div>
            </div>
        </div>
    </body>
    </html> `;
  }

  module.exports = htmlLayout;
