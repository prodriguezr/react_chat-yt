import { cn } from '@/lib/utils';

interface ContactMessageProps {
  message: string;
  time: string;
  photoURL: string;
  isCurrentUser: boolean;
}

export const ContactMesage = ({
  message,
  time,
  photoURL,
  isCurrentUser,
}: ContactMessageProps) => {
  return (
    <article
      className={cn('p-4 flex flex-row items-center gap-x-2 max-w-[100%]', {
        'justify-end': isCurrentUser,
      })}
    >
      {!isCurrentUser && (
        <img
          src={photoURL}
          alt="Profile photo URL"
          className="size-10 aspect-square rounded-full"
        />
      )}
      <div className="flex items-start">
        <div
          className={cn('relative max-w-md p-4 rounded-lg shadow-lg ml-2', {
            'bg-indigo-500': isCurrentUser,
            'bg-white': !isCurrentUser,
          })}
        >
          <p
            className={cn('text-[10px]', {
              'text-white': isCurrentUser,
              'text-gray-800': !isCurrentUser,
            })}
          >
            {message}
          </p>
          <p
            className={cn('mt-1 text-[8px] text-right', {
              'text-white': isCurrentUser,
              'text-gray-800': !isCurrentUser,
            })}
          >
            {time}
          </p>
          {!isCurrentUser && (
            <div className="absolute transform size-5 origin-center top-1/2 -left-2 -translate-y-1/2 right-2 bg-white rotate-45"></div>
          )}
        </div>
      </div>
    </article>
  );
};
