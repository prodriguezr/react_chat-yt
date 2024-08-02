import { ChatLayout } from './chat_layout';
import { AuthLayout } from './auth_layout';
import { useSigninCheck } from 'reactfire';
import { userLoadingStore } from '@/store/loading_store';

export const RootLayout = () => {
  const { status, data: signInCheckResult } = useSigninCheck();
  const { loading } = userLoadingStore();

  if (status == 'loading') return <span>Loading ...</span>;

  return (
    <div>
      {signInCheckResult.signedIn && !loading ? <ChatLayout /> : <AuthLayout />}
    </div>
  );
};
