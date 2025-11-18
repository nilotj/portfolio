
import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

interface HeaderProps {
  name: string;
  contact: ContactInfo;
}

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
      {icon}
      <span>{text}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
};

export const Header: React.FC<HeaderProps> = ({ name, contact }) => {
  return (
    <header className="mb-10 text-center border-b pb-8 border-gray-200">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{name}</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
        <ContactItem icon={<Mail size={16} />} text={contact.email} href={`mailto:${contact.email}`} />
        <ContactItem icon={<Phone size={16} />} text={contact.phone} href={`tel:${contact.phone.replace(/\D/g, '')}`} />
        <ContactItem icon={<Linkedin size={16} />} text={contact.linkedin} href={`https://${contact.linkedin}`} />
        <ContactItem icon={<MapPin size={16} />} text={contact.location} />
      </div>
    </header>
  );
};
