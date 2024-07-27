import { useEffect, useState } from 'react';
import { Contact } from './contact';
import { ContactSearch } from './contact_search';
import { IContact } from '@/interfaces';

export const Contacts = () => {
  const [contactList, setContactList] = useState<IContact[]>([]);

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch(
        'https://randomuser.me/api?results=15&nat=mx'
      );
      const { results } = await response.json();

      //eslint-disable-next-line
      const data = results.map((c: any) => {
        return {
          uid: c.uuid,
          displayName: `${c.name.first} ${c.name.last}`,
          photoURL: c.picture.thumbnail,
          lastMessage: "Hi! I'm " + c.name.first,
        };
      });

      setContactList(data);
    };

    getContacts();
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] w-[200px] h-screen">
      <section className="border-b p-4">
        <h2 className="text-md font-bold text-gray-700 mb-2">Contacts</h2>
        <ContactSearch />
      </section>
      <section className="overflow-y-auto scrollbar-none hover:scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-600">
        {contactList.map((contact) => (
          <Contact key={contact.uid} {...contact} />
        ))}
      </section>
    </div>
  );
};
