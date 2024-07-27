interface ContactProps {
  displayName: string;
  photoURL: string;
  lastMessage: string;
}

export const Contact = ({
  displayName,
  photoURL,
  lastMessage,
}: ContactProps) => {
  return (
    <article className="flex gap-x-2 items-center py-2 px-4 border-b hover:bg-gray-300 cursor-pointer">
      <img
        src={photoURL}
        alt={displayName}
        className="w-10 aspect-square rounded-md"
      />
      <div className="text-xs flex-1 min-w-0">
        <h2 className="font-semibold">{displayName}</h2>
        <p className="text-gray-500 italic truncate">{lastMessage}</p>
      </div>
    </article>
  );
};
