import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div<{ sentByUser: boolean }>`
  background-color: ${({ sentByUser }) => (sentByUser ? '#DCF8C6' : '#FFF')};
  border-radius: 20px;
  padding: 10px;
  margin: 5px;
  align-self: ${({ sentByUser }) => (sentByUser ? 'flex-end' : 'flex-start')};
  max-width: 60%;
`;

interface MessageBubbleProps {
  message: string;
  sentByUser: boolean;
}
const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sentByUser }) => {
  return <MessageContainer sentByUser={sentByUser}>{message}</MessageContainer>;
};

export default MessageBubble;


