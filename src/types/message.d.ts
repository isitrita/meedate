export interface MessageProps {
  text: string;
  sender: string;
}

export interface MessageData {
  time: number;
  text: string;
  sender: string; // Use a string for sender ID
}

