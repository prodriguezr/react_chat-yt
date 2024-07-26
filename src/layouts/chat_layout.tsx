import { Contacts, Messages, Profile } from '@/components/chat';

export const ChatLayout = () => {
  return (
    <div className="grid grid-cols-[2fr_5fr_2fr] h-screen">
      <Contacts />
      <Messages />
      <Profile />
    </div>
  );
};
