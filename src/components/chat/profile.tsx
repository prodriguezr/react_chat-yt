import { useAuth, useUser } from 'reactfire';
import { Button } from '../ui';

export const Profile = () => {
  const auth = useAuth();
  const { data: user } = useUser();

  const onLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className="p-4 text-center">
      {user && user.photoURL ? (
        <>
          <img
            src={user?.photoURL ?? '/avatar.jpg'}
            alt="Sabino Gonçalves"
            className="rounded-full shadow-md object-cover w-24 h-24 mx-auto border-gray-100 border-2"
          />
          <p className="py-2 text-gray-600 font-bold">
            {user?.displayName ?? 'No Name'}
          </p>
          <p className="text-indigo-900 text-md">{user?.email}</p>
          <Button
            onClick={onLogout}
            className="mt-2 w-full text-[12px] bg-indigo-700 hover:bg-indigo-900"
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <p>Loading user profile...</p>
        </>
      )}
    </div>
  );
};
