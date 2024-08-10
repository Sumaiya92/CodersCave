document.addEventListener('DOMContentLoaded', () => {
    const socket = io('http://localhost:3006');
    const messageForm = document.getElementById('send-container');
    const messageInput = document.getElementById('message-input');
    const messageContainer = document.getElementById('message-container');

    const name = prompt("Enter your name to join:");
    appendMessage('You joined');
    socket.emit('new-user', name);

    socket.on('chat-message', data => {
        appendMessage(`${data.name}: ${data.message}`);
    });

    socket.on('user-connected', name => {
        appendMessage(`${name} connected`);
    });

    socket.on('user-disconnected', name => {
        appendMessage(`${name} disconnected`);
    });

    messageForm.addEventListener('submit', e => {
        e.preventDefault();
        const message = messageInput.value;
        appendMessage(`You: ${message}`);
        socket.emit('send-chat-message', message);
        messageInput.value = '';
    });

    function appendMessage(message, isUserMessage = false) {
        const messageElement = document.createElement('div');
        
        messageElement.className = `p-2 mb-2 rounded-lg text-sm ${
            isUserMessage ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-900 self-start'
        }`;
    
        messageElement.innerText = message;
        messageContainer.appendChild(messageElement);
    
        // Auto-scroll to the latest message
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
    
});
