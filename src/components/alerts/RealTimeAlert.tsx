import {Alert} from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle';
import React, {useEffect, useState} from "react";
import Pusher from 'pusher-js';
import pusherConfig from "../../../lib/pusher";

const pusher = new Pusher(pusherConfig.key, {cluster: pusherConfig.cluster,});
const channel = pusher.subscribe(pusherConfig.channel);

const RealTimeAlert: React.FC = () => {
    const [updates, setUpdates] = useState<string[]>([]);

    useEffect(() => {
        const handleNewRequest = (data: { data: string }) => {
            setUpdates((prev) => [data.data, ...prev].slice(0, 1)); // Keep only the latest 10 messages
        };

        channel.bind(pusherConfig.event, handleNewRequest);

        return () => {
            channel.unbind(pusherConfig.event, handleNewRequest); // Clean up the event binding on unmount
        };
    }, []);

    return (
        <div style={{ margin: "0 auto", }}>
            <div style={{ position: "absolute", top: 0, right: 0, zIndex: 999, width: '50%' }} >
                {updates.map((data, index) => (
                    <Alert variant="filled" severity="success">
                        <AlertTitle sx={{textAlign: "left"}}>New user created!</AlertTitle>
                        <span><b>name:</b> {JSON.parse(data).name} &nbsp;</span>
                        <span><b>age:</b> {JSON.parse(data).age} &nbsp;</span>
                        <span><b>is active:</b> {JSON.parse(data).isActive.toString()} &nbsp;</span>
                        <span><b>created:</b> {JSON.parse(data).createdAt} &nbsp;</span>
                    </Alert>
                ))}
            </div>

        </div>
    );
}

export default RealTimeAlert;