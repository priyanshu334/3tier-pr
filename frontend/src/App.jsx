import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/messages")
      .then((res) => setMessages(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Hello 3-Tier DevOps 🚀</h1>

      {messages.map((msg) => (
        <div key={msg.id}>
          <h2>{msg.message}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
