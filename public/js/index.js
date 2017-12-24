var socket = io();

socket.on('connect', function() {
  console.log('Connected to the server');

  socket.emit('createMessage', {
    from: 'Adam',
    text: 'Yes, you sucks big dicks, big time'
  });

});

socket.on('newMessage', function(message) {
  console.log('New Message from ' + message.from + '.');
  console.log(message);
});
socket.on('disconnect', function() {
  console.log('Disconnected from server')
});
