import { Contact } from './contact';
import { ContactSearch } from './contact_search';

export const Contacts = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] w-[200px] h-screen">
      <section className="border-b p-4">
        <h2 className="text-md font-bold text-gray-700 mb-2">Contacts</h2>
        <ContactSearch />
      </section>
      <section className="overflow-y-auto scrollbar-none hover:scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-600">
        {Array.from({ length: 15 }).map((_, index) => (
          <Contact key={index} />
        ))}
      </section>
    </div>
  );
};
