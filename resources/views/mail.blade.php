<!DOCTYPE html>
<html>
<head>
    <title>Новое сообщение с сайта</title>
</head>
<body>
    <h1>Новый запрос с сайта</h1>
    <p><strong>Имя:</strong> {{ $name }}</p>
    <p><strong>Email:</strong> {{ $email }}</p>
    @if($phone)
        <p><strong>Телефон:</strong> {{ $phone }}</p>
    @endif
</body>
</html>
