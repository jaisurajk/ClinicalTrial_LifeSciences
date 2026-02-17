import React from 'react';
import { Beaker, Search } from 'lucide-react';

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <header className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <Beaker className="text-white" size={24} />
                </div>
                <h1 className="text-xl font-bold tracking-tight text-gray-800">TrialVault Dashboard</h1>
            </div>
            <div className="flex items-center gap-3 w-96">
                <Search className="text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search trials, sponsors..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
        </header>
    );
};

export default Header;
