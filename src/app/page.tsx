'use client'

import React, { useState } from "react";
import RequestHistory from "../components/RequestHistory";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import RealTimeAlert from "../components/alerts/RealTimeAlert";

const Dashboard = () => {

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Sidebar */}
            <div className="w-1/5 bg-white shadow-lg">
                <div className="p-6">
                    <div className="logo container mx-auto">
                        <Logo />
                    </div>
                    <Navigation />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-4/5 p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Dashboard Cards - @todo: this should all be separate components. */}
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Earnings Report</h2>
                        <p className="text-2xl font-bold">$586</p>
                        <p className="text-sm text-gray-500">Your total earnings</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Users</h2>
                        <p className="text-2xl font-bold">36k</p>
                        <p className="text-sm text-gray-500">Total users</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Clicks</h2>
                        <p className="text-2xl font-bold">1M</p>
                        <p className="text-sm text-gray-500">Total clicks</p>
                    </div>
                </div>
                <div className="mt-6">
                    <RealTimeAlert />
                    <RequestHistory />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
