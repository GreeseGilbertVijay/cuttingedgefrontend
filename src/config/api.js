const API_BASE_URL = 'https://spincobackend.onrender.com'; // Change this based on your server

export const fetchParagraphData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/paragraph`);
        if (!response.ok) throw new Error('Failed to fetch data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching paragraph data:', error);
        return null;
    }
};

export const fetchLatestVersion = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/version`);
        if (!response.ok) throw new Error('Failed to fetch version data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching version data:', error);
        return null;
    }
};
