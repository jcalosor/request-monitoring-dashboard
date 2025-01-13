const config = {
    api_port: process.env.REQUEST_MONITOR_API_PORT || "4000",
    base_url: process.env.REQUEST_MONITOR_URL || "http://localhost",
};

export default config;