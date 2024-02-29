// Existing JavaScript functions and variables

function selectDoor(doorNum) {
    if (!selectedDoor) {
        selectedDoor = doorNum;

        // Simulate revealing what's behind the door
        const hasPrize = prizeDoor === selectedDoor;
        const imageSrc = hasPrize ? "car.png" : "goat.png";
        document.getElementById('door' + selectedDoor).src = imageSrc;

        // Open one of the other doors with a goat
        let goatDoor;
        do {
            goatDoor = Math.floor(Math.random() * 3) + 1;
        } while (goatDoor === selectedDoor || goatDoor === prizeDoor);

        // Highlight the selected door and the revealed goat door
        document.getElementById('door' + selectedDoor).classList.add('selected');
        document.getElementById('door' + goatDoor).classList.add('goat');

        // Offer switch or keep choice
        setTimeout(() => {
            let switchDoor = confirm('Do you want to switch doors?');
            if (switchDoor) {
                let remainingDoor = [1, 2, 3].filter(d => d !== selectedDoor && d !== goatDoor)[0];
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
    chatHistory.push({ sender: "bot", message: resultMessage });
    displayChat();
}
