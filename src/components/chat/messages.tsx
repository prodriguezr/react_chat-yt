import { MessagesHeader } from './messages_header';
import { MessagesFooter } from './messages_footer';
import { MessagesChat } from './messages_chat';

export const Messages = () => {
  return (
    <article className="grid grid-rows-[auto_1fr_auto] h-screen">
      <MessagesHeader />
      <MessagesChat />
      <MessagesFooter />
    </article>
  );
};
