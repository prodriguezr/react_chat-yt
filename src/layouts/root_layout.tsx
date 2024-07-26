import { ChatLayout } from './chat_layout';
import { AuthLayout } from './auth_layout';

export const RootLayout = () => {
  const user = true;

  return <div>{user ? <ChatLayout /> : <AuthLayout />}</div>;
};
