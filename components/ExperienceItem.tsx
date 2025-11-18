
import React from 'react';
import { Building, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  title: string;
  period: string;
  duties: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, title, period, duties }) => {
  return (
    <div className="relative pl-4 border-l-2 border-gray-200">
       <div className="absolute -left-[10px] top-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-white"></div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 mt-1 mb-3 gap-x-4 gap-y-1">
            <div className="flex items-center">
                <Building size={14} className="mr-2 text-gray-500"/>
                <span>{company}</span>
            </div>
            <div className="flex items-center">
                <Calendar size={14} className="mr-2 text-gray-500"/>
                <span>{period}</span>
            </div>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {duties.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
