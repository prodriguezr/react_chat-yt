export const Contact = () => {
  return (
    <article className="flex gap-x-2 items-center py-2 px-4 border-b hover:bg-gray-300 cursor-pointer">
      <img
        src="https://randomuser.me/api/portraits/men/59.jpg"
        alt="Sabino Gonçalves"
        className="w-10 aspect-square rounded-md"
      />
      <div className="text-xs">
        <h2 className="font-semibold">Sabino Gonçalves</h2>
        <p className="text-gray-500 italic">
          Lorem ipsum dolor sit amet adipisicin...
        </p>
      </div>
    </article>
  );
};
