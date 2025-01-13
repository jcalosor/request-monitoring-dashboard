import dotenv from 'dotenv';
import { useState, useEffect } from "react";
import Pusher from 'pusher-js';

dotenv.config();

const pusher = new Pusher(process.env.PUSH_APP_KEY || "test", {
    cluster: process.env.PUSH_APP_CLUSTER || "api"
});

const channel = pusher.subscribe(process.env.PUSH_CHANNEL || 'request_monitor');

const RealTimeUpdates = () => {
    const [updates, setUpdates] = useState<string[]>([]);

    useEffect(() => {
        const handleNewRequest = (data: { message: string }) => {
            setUpdates((prev) => [data.message, ...prev].slice(0, 10)); // Keep only the latest 10 messages
        };

        channel.bind('new_request', handleNewRequest);

        return () => {
            channel.unbind('new_request', handleNewRequest); // Clean up the event binding on unmount
        };
    }, []);

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Real-Time Updates</h2>
            <ul>
                {updates.map((message, index) => (
                    <li key={index} className="border-b py-2">
                        {message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RealTimeUpdates;
