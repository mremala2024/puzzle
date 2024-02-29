<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monty Hall Problem</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Monty Hall Problem</h1>
        <div id="chat">
            <div class="chat-box" id="chatBox"></div>
            <input type="text" id="userInput" placeholder="Type your response here..." onkeydown="if(event.keyCode==13) sendMessage()">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
