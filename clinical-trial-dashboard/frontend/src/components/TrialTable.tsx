import React from 'react';
import type { Trial } from '../api/trialApi';
import StatusBadge from './StatusBadge';

interface TrialTableProps {
    trials: Trial[];
    loading: boolean;
}

const TrialTable: React.FC<TrialTableProps> = ({ trials, loading }) => {
    return (
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-6 py-4 font-semibold text-gray-600">ID</th>
                            <th className="px-6 py-4 font-semibold text-gray-600">Trial Name</th>
                            <th className="px-6 py-4 font-semibold text-gray-600">Phase</th>
                            <th className="px-6 py-4 font-semibold text-gray-600">Status</th>
                            <th className="px-6 py-4 font-semibold text-gray-600">Sponsor</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Loading trial data...</td>
                            </tr>
                        ) : trials.length > 0 ? (
                            trials.map((trial) => (
                                <tr key={trial.id} className="hover:bg-blue-50/30 transition-colors cursor-pointer group">
                                    <td className="px-6 py-4 text-gray-400 font-mono text-sm">#{trial.id}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{trial.name}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                                            {trial.phase}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={trial.status} />
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{trial.sponsor}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-gray-500 italic">No trials found matching your search.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrialTable;
