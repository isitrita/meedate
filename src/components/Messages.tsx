"use client";

import React, { useEffect, useRef } from "react";
import { MessageData } from "@/types/message";
import Message from "./Message";

interface MessagesProps {
  messages: MessageData[];
}

// ... (import statements and interfaces)

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [displayedIndex, setDisplayedIndex] = React.useState<number>(0);
  const [allMessagesDisplayed, setAllMessagesDisplayed] =
    React.useState<boolean>(false);

  useEffect(() => {
    // Scroll to the bottom of the message container when new messages are added
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [displayedIndex]);

  useEffect(() => {
    // Show messages with delay on different sides
    const displayTimeout = setTimeout(() => {
      const nextIndex = Math.min(displayedIndex + 1, messages.length);
      setDisplayedIndex(nextIndex);

      // Check if all messages have been displayed
      if (nextIndex === messages.length) {
        setAllMessagesDisplayed(true);
      }
    }, 1000);

    // Clear timeout when component unmounts or messages change
    return () => {
      clearTimeout(displayTimeout);
    };
  }, [messages, displayedIndex]);

  const displayedMessages = messages.slice(0, displayedIndex);

  // If all messages have been displayed, prevent further updates
  if (allMessagesDisplayed) {
    return (
      <div
        ref={messageContainerRef}
        className="flex flex-col space-y-2 p-2 h-96 overflow-y-scroll"
      >
        {displayedMessages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            sender={message.sender}
          />
        ))}
      </div>
    );
  }

  // Otherwise, continue normal rendering and updating
  return null;
};

export default Messages;
