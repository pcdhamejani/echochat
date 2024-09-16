import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ChatPage = (props) => {
  const groups = props.groups;
  const { groupName } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const foundGroup = groups.find(g => g.name.replace(/\s+/g, '-').toLowerCase() === groupName);
    if (foundGroup) {
      setGroup(foundGroup);
    } else {
      // Redirect to the main page if the group is not found
      navigate('/');
    }
  }, [groupName, groups, navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: 'You',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  if (!group) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chat-page">
      <div className="chat-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← {/* Unicode left arrow */}
        </button>
        <h2>{group.name}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-timestamp">{message.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">
          → {/* Unicode right arrow */}
        </button>
      </form>
    </div>
  );
};

export default ChatPage;