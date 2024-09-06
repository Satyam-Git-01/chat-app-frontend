import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import socket from '../services/socketio';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 20px;
  border: 1px solid #ccc;
`;

const MessagesList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string, sentByUser: boolean }[]>([]);

  useEffect(() => {
    socket.on('messageFromServer', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, { text: message, sentByUser: false }]);
    });
  }, []);

  const sendMessage = (message: string) => {
    socket.emit('messageFromClient', message);
    setMessages((prevMessages) => [...prevMessages, { text: message, sentByUser: true }]);
  };

  return (
    <ChatContainer>
      <MessagesList>
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg.text} sentByUser={msg.sentByUser} />
        ))}
      </MessagesList>
      <MessageInput sendMessage={sendMessage} />
    </ChatContainer>
  );
};

export default ChatWindow;
