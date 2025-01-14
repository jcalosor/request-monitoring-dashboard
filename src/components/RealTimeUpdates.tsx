import { useState, useEffect } from "react";
import Pusher from 'pusher-js';
import pusherConfig from "../../lib/pusher";

const pusher = new Pusher(pusherConfig.key, {cluster: pusherConfig.cluster,});
const channel = pusher.subscribe(pusherConfig.channel);

const RealTimeUpdates = () => {
    const [updates, setUpdates] = useState<string[]>([]);

    useEffect(() => {
        const handleNewRequest = (data: { data: string }) => {
            console.log(data.data);
            setUpdates((prev) => [data.data, ...prev].slice(0, 10)); // Keep only the latest 10 messages
        };

        channel.bind(pusherConfig.event, handleNewRequest);

        return () => {
            channel.unbind(pusherConfig.event, handleNewRequest); // Clean up the event binding on unmount
        };
    }, []);

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Real-Time Updates</h2>
            <ul>
                {updates.map((data, index) => (
                    <li key={index} className="border-b py-2">
                        <span><b>name:</b> {JSON.parse(data).name} &nbsp;</span>
                        <span><b>age:</b> {JSON.parse(data).age} &nbsp;</span>
                        <span><b>is active:</b> {JSON.parse(data).isActive.toString()} &nbsp;</span>
                        <span><b>created:</b> {JSON.parse(data).createdAt} &nbsp;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RealTimeUpdates;
