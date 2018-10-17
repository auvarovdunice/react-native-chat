import io from 'socket.io-client';
 
const socket = io('http://192.168.1.127:3001');

export default socket;