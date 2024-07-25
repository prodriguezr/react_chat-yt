import { Login, Register } from '@/components/auth';

export const RootLayout = () => {
  const user = false;

  return (
    <div>
      {user ? (
        <h1>Welcome back!</h1>
      ) : (
        <div className="h-screen bg-orange-400 grid grid-cols-2 place-content-center p-4 gap-6">
          <Login />
          <Register />
        </div>
      )}
    </div>
  );
};
