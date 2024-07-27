import { Button } from '@/components/ui/button';
import { BiWindowClose } from 'react-icons/bi';

export const MessagesHeader = () => {
  return (
    <header className="border-b p-4 flex items-center gap-x-2">
      <img
        src="https://randomuser.me/api/portraits/thumb/women/13.jpg"
        alt="Susana Soto"
        className="size-16 aspect-square rounded-md"
      />
      <div className="ml-2 flex-1">
        <p className="text-md font-semibold">Susana Soto</p>
        <p className="text-xs text-gray-500 ml-auto">Online</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button className="size-16 bg-transparent cursor-pointer bg-indigo-700 hover:bg-indigo-900">
          <BiWindowClose className="text-6xl bg-indigo-700 hover:bg-indigo-900" />
        </Button>
      </div>
    </header>
  );
};
