<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>Generate New Password</title>
</head>
<body>
    <div class="container">
        <h1>Generate Password</h1>
        <p class="h-message">Never share your passwords. Online security is important.</p>
        <div class="password">
            <p id="pass">PassGenerator</p>
        </div>
        <a id="btn" class="btn">Generate</a>
        <div class="amount">
            <h4>Choose length</h4>
            <label for="12">
                12
                <input type="checkbox" name="12" id="ten">
            </label>
            <label for="32">
                32
                <input type="checkbox" name="32" id="thirty">
            </label>
            <label for="64">
                64
                <input type="checkbox" name="64" id="sixty">
            </label>
        </div>
    </div>
    <p class="disclaimer">We do not share or save any generated password, view our full <a target="_blank" href="github.com">sourcecode</a>.</p>
    <script src="{{asset('/js/checkbox.js')}}"></script>
    <script src="{{asset('/js/app.js')}}"></script>
</body>
</html>