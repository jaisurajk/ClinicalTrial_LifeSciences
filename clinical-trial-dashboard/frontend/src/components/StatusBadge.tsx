import React from 'react';
import { Beaker, CheckCircle, XCircle, Play, Users } from 'lucide-react';

interface StatusBadgeProps {
    status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const getStatusIcon = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active': return <Play className="text-green-500" size={18} />;
            case 'completed': return <CheckCircle className="text-blue-500" size={18} />;
            case 'terminated': return <XCircle className="text-red-500" size={18} />;
            case 'recruiting': return <Users className="text-orange-500" size={18} />;
            default: return <Beaker className="text-gray-500" size={18} />;
        }
    };

    return (
        <div className="flex items-center gap-2 font-medium">
            {getStatusIcon(status)}
            <span className="capitalize">{status}</span>
        </div>
    );
};

export default StatusBadge;
