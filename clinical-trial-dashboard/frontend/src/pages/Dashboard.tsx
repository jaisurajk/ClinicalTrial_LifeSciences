import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import TrialTable from '../components/TrialTable';
import { getTrials } from '../api/trialApi';
import type { Trial } from '../api/trialApi';

const Dashboard: React.FC = () => {
    const [trials, setTrials] = useState<Trial[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const loadTrials = async () => {
            try {
                const data = await getTrials();
                setTrials(data);
            } catch (error) {
                console.error('Error loading trials:', error);
            } finally {
                setLoading(false);
            }
        };
        loadTrials();
    }, []);

    const filteredTrials = trials.filter(trial =>
        trial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trial.sponsor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const stats = [
        { label: 'Active Trials', value: trials.filter(t => t.status === 'Active').length, color: 'border-green-500' },
        { label: 'Recruiting', value: trials.filter(t => t.status === 'Recruiting').length, color: 'border-orange-500' },
        { label: 'Completed', value: trials.filter(t => t.status === 'Completed').length, color: 'border-blue-500' },
        { label: 'Terminated', value: trials.filter(t => t.status === 'Terminated').length, color: 'border-red-500' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <main className="p-8 max-w-7xl mx-auto flex-1 w-full">
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Clinical Trial Overview</h2>
                    <p className="text-gray-500">Monitor and manage all current clinical research programs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, i) => (
                        <StatsCard key={i} {...stat} />
                    ))}
                </div>

                <TrialTable trials={filteredTrials} loading={loading} />
            </main>

            <footer className="p-8 text-center text-gray-400 text-sm border-t border-gray-100 mt-12 bg-white">
                &copy; 2026 Jaisuraj Kaleeswaran. All rights reserved.
            </footer>
        </div>
    );
};

export default Dashboard;
