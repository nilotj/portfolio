
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};
