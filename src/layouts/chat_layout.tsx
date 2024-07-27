import { Contacts, Messages, Profile } from '@/components/chat';

export const ChatLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_5fr_1fr] h-screen">
      <Contacts />
      <Messages />
      <Profile />
    </div>
  );
};
