const BASE_URL = 'https://dashboard.telkom.ae/api/v1';

const endpoints = {
    // Services
    getServices: `${BASE_URL}/get_services`,
    getTopServices: `${BASE_URL}/get_top_services`,
    getServiceById: `${BASE_URL}/get_service_by_id?id=`,
    // Settings
    getSettings: `${BASE_URL}/settings`,
    // Messages
    sendMessage: `${BASE_URL}/send_message`,
};

export default endpoints;
