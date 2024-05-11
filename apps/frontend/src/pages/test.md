import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [mess, setMess] = useState<string>();

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connected');
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log('Received message', message.data);
      setMessages((m) => [...m, message.data]);
    };
    return () => {
      socket.close();
    }
  }, []);

  if (socket) {
    return (
      <div>
        <input onChange={(e)=>{
          setMess(e.target.value);
        }}></input>
        <button
          onClick={() => {
            socket.send("get data from input");
          }}  
        >Send</button>
        {messages}
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    );
  }
}

export default App;