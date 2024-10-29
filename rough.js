document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const dropzone1 = document.getElementById('dropzone1');
    const resultModal = document.getElementById('resultModal');
    const modalMessage = document.getElementById('modalMessage');
    const exitButton = document.getElementById('exitButton');
    const actionButton = document.getElementById('actionButton');

    // Dragging functionality
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    dropzone1.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow drop
    });

    dropzone1.addEventListener('drop', (e) => {
        const draggedItem = document.querySelector('.dragging');
        if (draggedItem && draggedItem.id === 'item1') {
            // Correct item dropped
            modalMessage.textContent = "Correct! Well done.";
            actionButton.textContent = "Next Level";
            actionButton.onclick = nextLevel;
            showModal();
        } else {
            // Incorrect item dropped
            modalMessage.textContent = "Try Again!";
            actionButton.textContent = "Retry";
            actionButton.onclick = hideModal;
            showModal();
        }
    });

    // Modal handling
    exitButton.addEventListener('click', () => {
        window.close(); // Or redirect to a different page
    });

    function showModal() {
        resultModal.style.display = 'block';
    }

    function hideModal() {
        resultModal.style.display = 'none';
    }

    function nextLevel() {
        // Add transition effect and redirect to the next level
        document.getElementById('transition-overlay').classList.remove('hidden');
        setTimeout(() => {
            // Redirect or load the next level here
            window.location.href = 'next-level.html'; // Change as needed
        }, 2000); // Adjust timeout for transition effect
    }
});
