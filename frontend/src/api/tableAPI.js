import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/table';

export const fetchTableData = async (type = 'LIVE') => {
    try {
        const response = await axios.get(`${BASE_URL}?type=${type}`);
        return response.data;
    } catch (error) {
        console.error("데이터 로드 실패:", error);
        return [];
    }
};