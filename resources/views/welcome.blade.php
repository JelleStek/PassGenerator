<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>Create New Password</title>
</head>
<body>
    <div class="container">
        <h1>Generate Password</h1>
        <div class="password">
            <p id="pass">Password</p>
        </div>
        <input type="number" id="amount">
        <a id="btn" class="btn">Generate</a>
        <p id="amountText"></p>
    </div>
    <script src="{{asset('/js/app.js')}}"></script>
</body>
</html>