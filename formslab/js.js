const dragItems = document.querySelectorAll('.drag-item');
const dropBoxes = document.querySelectorAll('.drop-box');
const checkAnswersButton = document.getElementById('check-answers');
const feedback = document.getElementById('feedback');

// Add drag start event listeners to each draggable item
dragItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

// Add drag over and drop event listeners to each drop box
dropBoxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
    box.addEventListener('dragleave', dragLeave);
});

// Add event listener for the check answers button
checkAnswersButton.addEventListener('click', checkAnswers);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.style.opacity = '0.5';
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('dragover');
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    const dropZoneId = e.target.id;
    const dropZone = document.getElementById(dropZoneId);

    // Append the dragged item to the drop box
    dropZone.appendChild(draggedElement);
    draggedElement.style.opacity = '1';
    e.target.classList.remove('dragover');
}

function dragLeave(e) {
    e.target.classList.remove('dragover');
}

function checkAnswers() {
    let correctCount = 0;
    let totalItems = 0;

    dragItems.forEach(item => {
        const correctDropZone = item.getAttribute('data-drop-zone');
        const actualDropZone = item.parentElement.id;

        // Check if the item is in the correct drop zone
        if (actualDropZone === correctDropZone) {
            if (item.getAttribute('data-correct') === 'true') {
                correctCount++;
                item.style.backgroundColor = 'green';
            } else {
                item.style.backgroundColor = 'red';
            }
        } else {
            item.style.backgroundColor = 'red';
        }
        totalItems++;
    });

    // Provide feedback
    feedback.textContent = `You got ${correctCount} out of ${totalItems} correct.`;
}