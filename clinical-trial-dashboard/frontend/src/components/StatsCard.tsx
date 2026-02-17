import React from 'react';

interface StatsCardProps {
    label: string;
    value: number;
    color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, color }) => {
    return (
        <div className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 ${color} hover:shadow-md transition-shadow`}>
            <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider">{label}</p>
            <p className="text-3xl font-black text-gray-800">{value}</p>
        </div>
    );
};

export default StatsCard;
