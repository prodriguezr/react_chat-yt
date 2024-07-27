import { Button } from '@/components/ui/button';
import { BiSmile } from 'react-icons/bi';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

export const MessagesFooter = () => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleMessage = async () => {
    if (!message) return;

    console.log(message);

    setMessage('');
    setShowEmojiPicker(false);
  };

  const handleEmoji = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <footer className="bg-transparent flex flex-row w-full gap-x-2 my-2">
      <div className="relative">
        <Button
          className="bg-indigo-700 hover:bg-indigo-900"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
          <BiSmile className="text-xl" />
        </Button>
        <div className="absolute bottom-12">
          <EmojiPicker open={showEmojiPicker} onEmojiClick={handleEmoji} />
        </div>
      </div>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="w-full px-2 text-xs bg-transparent focus:outline-none bg-gray-300"
      />
      <Button
        onClick={handleMessage}
        className="bg-indigo-700 hover:bg-indigo-900"
      >
        Send
      </Button>
    </footer>
  );
};
