import { useState, useEffect } from "react";
import socket from "../../lib/socket";

const RealTimeUpdates = () => {
    const [updates, setUpdates] = useState<any[]>([]);

    useEffect(() => {
        socket.on("newData", (data) => {
            setUpdates((prev) => [data, ...prev].slice(0, 5));
        });

        return () => {
            socket.off("newData");
        };
    }, []);

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Real-Time Updates</h2>
            <ul>
                {updates.map((update, index) => (
                    <li key={index} className="py-1">
                        {update.name} (Age: {update.age}) - Active: {update.isActive ? "Yes" : "No"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RealTimeUpdates;