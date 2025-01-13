// Function to add a message to the chat window
function addMessage(sender, message) {
    const messageElement = $('<div></div>').addClass('message').addClass(sender).text(message);

    if (sender === 'bot') {
        messageElement.addClass('p-2 bg-blue-500 text-white rounded-lg mb-2');
    } else {
        messageElement.addClass('p-2 bg-gray-300 text-black rounded-lg mb-2');
    }

    $('#chat-output').append(messageElement);
    $('#chat-output').scrollTop($('#chat-output')[0].scrollHeight); // Auto-scroll to bottom
}

// Send Button click event
$('#send-button').click(function() {
    const userMessage = $('#user-input').val().trim();

    if (userMessage === "") return;

    // Add user message to the chat
    addMessage('user', userMessage);
    $('#user-input').val(""); // Clear input field

    // Simulate bot response after a brief delay
    setTimeout(function() {
        const botResponse = getBotResponse(userMessage);
        addMessage('bot', botResponse);
    }, 1000);
});

// Function to generate a basic bot response (You can replace this with an API call or advanced logic)
function getBotResponse(userMessage) {
    const responses = {
        "hi": "Hello! How can I help you today?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
    };

    const message = userMessage.toLowerCase();
    return responses[message] || "Sorry, I didn't understand that.";
}

// Enter key press event
$('#user-input').keypress(function(e) {
    if (e.which === 13) { // Enter key
        $('#send-button').click();
    }
});