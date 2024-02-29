let chatHistory = []; // Array to store chat history
let prizeDoor;
let selectedDoor;

function setupGame() {
    prizeDoor = Math.floor(Math.random() * 3) + 1; // Randomly assign prize to one of the doors
    selectedDoor = null;
    chatHistory.push({ sender: "bot", message: "Welcome to the Monty Hall Problem Bot! Let's play the game. You are presented with three doors, behind one of which is a prize. Choose a door by typing 1, 2, or 3." });
    displayChat();
}

function processUserInput(userInput) {
    if (!selectedDoor) {
        selectedDoor = parseInt(userInput);
        if (isNaN(selectedDoor) || selectedDoor < 1 || selectedDoor > 3) {
            chatHistory.push({ sender: "bot", message: "Please enter a valid choice (1, 2, or 3)." });
            displayChat();
            return;
        }
        // Simulate revealing what's behind the selected door
        const hasPrize = prizeDoor === selectedDoor;
        const resultMessage = hasPrize ? "You won the prize!" : "Sorry, you didn't win the prize. Better luck next time!";
        chatHistory.push({ sender: "bot", message: resultMessage });
        displayChat();
    } else {
        chatHistory.push({ sender: "bot", message: "You've already selected a door. Please wait for the game to finish." });
        displayChat();
    }
}

function displayChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = '';
    chatHistory.forEach(message => {
        const chatMessage = document.createElement('div');
        chatMessage.className = message.sender;
        chatMessage.textContent = message.message;
        chatBox.appendChild(chatMessage);
    });
    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Initialize the chat when the page loads
window.onload = setupGame;
