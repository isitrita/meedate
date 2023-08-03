interface MessageProps {
  text: string;
  sender: string;
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  // Create a mapping of sender IDs to sides
  const senderToSide: { [sender: string]: "left" | "right" } = {
    // Replace 'senderID1', 'senderID2', etc. with actual sender IDs and their corresponding sides
    senderID1: "left",
    senderID2: "right",
    // Add more sender IDs and their corresponding sides as needed
  };

  return (
    <div
      className={`${
        senderToSide[sender] === "left"
          ? "bg-blue-200 self-start"
          : "bg-gray-200 self-end"
      } p-2 rounded-md`}
    >
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default Message;
