import { useEffect, useRef } from 'react';
import { ContactMesage } from './contact_message';

export const MessagesChat = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-gradient-to-br from-purple-200 via-indigo-300 to-indigo-400 overflow-y-auto"
    >
      {Array.from({ length: 2000 }).map((_, index) => (
        <div key={index}>
          <ContactMesage
            photoURL="https://randomuser.me/api/portraits/thumb/women/13.jpg"
            message="blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah"
            time="10:00 PM"
            isCurrentUser={false}
          />
          <ContactMesage
            photoURL="https://randomuser.me/api/portraits/men/59.jpg"
            message="Qué tanto blah blah?"
            time="right now"
            isCurrentUser={true}
          />
        </div>
      ))}
    </main>
  );
};
