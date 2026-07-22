import axios from 'axios';

const BASE_URL = 'http://localhost:8080/usr/home';

export const loginApi = async (loginId, loginPw) => {
    try {
        const params = new URLSearchParams();
        params.append('loginId', loginId);
        params.append('loginPw', loginPw);

        console.log(' 로그인 요청 시도:', { loginId, loginPw });

        const response = await axios.post(`${BASE_URL}/doLogin`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log(' 로그인 응답 성공:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {

            console.error(' 서버 응답 에러 Status:', error.response.status);
            console.error(' 서버 응답 Data:', error.response.data);
        } else if (error.request) {

            console.error(' 응답 없음 (CORS 차단 또는 서버 다운):', error.request);
        } else {
            console.error(' 요청 설정 에러:', error.message);
        }
        throw error;
    }
};