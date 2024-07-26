import { Login, Register } from '@/components/auth';

export const AuthLayout = () => {
  return (
    <main className=" bg-gradient-to-br from-purple-600 via-indigo-900 to-indigo-800">
      <div className="min-h-screen grid md:grid-cols-2 place-content-center md:place-items-center container">
        <Login />
        <Register />
      </div>
    </main>
  );
};
