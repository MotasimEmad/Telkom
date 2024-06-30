const BASE_URL = 'http://192.168.1.40:8000/api/v1';

const endpoints = {
    // Services
    getServices: `${BASE_URL}/get_services`,
    getTopServices: `${BASE_URL}/get_top_services`,
    getServiceById: `${BASE_URL}/get_service_by_id?id=`,
    // Settings
    getSettings: `${BASE_URL}/settnigs`,
    // Messages
    sendMessage: `${BASE_URL}/send_message`,
};

export default endpoints;
