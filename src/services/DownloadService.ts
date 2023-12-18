import axios from 'axios';

export const downloadFileStream = async (url: string): Promise<NodeJS.ReadableStream> => {
    try {
        const response = await axios.get(url, { responseType: 'stream' });
        return response.data;
    } catch (error) {
        throw new Error(`Download failed: ${error}`);
    }
};