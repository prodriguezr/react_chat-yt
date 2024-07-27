import { Button } from '../ui';

export const Profile = () => {
  return (
    <div className="p-4 text-center">
      <img
        src="https://randomuser.me/api/portraits/men/59.jpg"
        alt="Sabino Gonçalves"
        className="rounded-full shadow-md object-cover w-24 h-24 mx-auto border-gray-100 border-2"
      />
      {/* <h2 className="text-md font-bold text-gray-600">Profile</h2> */}
      <p className="py-2 text-gray-600 font-bold">Sabino Gonçalves</p>
      <p className="text-indigo-900 text-md">john.doe@domain.com</p>
      <Button className="mt-2 w-full text-[12px] bg-indigo-700 hover:bg-indigo-900">
        Logout
      </Button>
    </div>
  );
};
