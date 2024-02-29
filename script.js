let prizeDoor;
let selectedDoor;
let doorStatus = []; // To keep track of door statuses (0 for closed, 1 for opened)

function setupGame() {
    // Randomly assign prize to one of the doors
    prizeDoor = Math.floor(Math.random() * 3) + 1;
    selectedDoor = null;
    doorStatus = [0, 0, 0]; // Initialize all doors as closed

    // Reset door appearance
    for (let i = 1; i <= 3; i++) {
        document.getElementById('door' + i).src = "closed_door.jpg";
    }
}

function selectDoor(doorNum) {
    if (!selectedDoor && doorStatus[doorNum - 1] === 0) { // Check if the door is not already opened
        selectedDoor = doorNum;

        // Simulate revealing what's behind the door
        const hasPrize = prizeDoor === selectedDoor;
        const imageSrc = hasPrize ? "car.png" : "goat.png";
        document.getElementById('door' + selectedDoor).src = imageSrc;

        // Update door status
        doorStatus[selectedDoor - 1] = 1;

        // Offer switch or keep choice
        setTimeout(() => {
            let switchDoor = confirm('Do you want to switch doors?');
            if (switchDoor) {
                let remainingDoor = [1, 2, 3].filter(d => d !== selectedDoor && doorStatus[d - 1] === 0)[0];
                selectedDoor = remainingDoor;
                showResult();
            } else {
                showResult();
            }
        }, 500);
    }
}

function showResult() {
    const resultMessage = selectedDoor === prizeDoor ? "Congratulations! You won the prize!" : "Sorry, you didn't win the prize. Better luck next time!";
    alert(resultMessage);
}

// Initialize the game when the page loads
window.onload = setupGame;
