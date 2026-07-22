import React, { useState } from 'react';
import { loginApi } from '../api/memberAPI';
import './LoginModal.css';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    if (!isOpen) return null; // 모달이 닫혀있으면 렌더링하지 않음

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            const result = await loginApi(loginId, loginPw);

            // "S-1"로 시작하는 성공 메시지인 경우
            if (result.startsWith('S-1')) {
                alert(result); // 환영 메시지 출력
                onLoginSuccess(result); // 부모 컴포넌트에 알림
                onClose(); // 모달 닫기
            } else {
                // "F-1"~"F-4" 오류 메시지를 팝업 내부 에러 창에 표시
                setErrorMsg(result);
            }
        } catch (error) {
            setErrorMsg('로그인 중 에러가 발생했습니다.');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>로그인</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>아이디</label>
                        <input
                            type="text"
                            value={loginId}
                            onChange={(e) => setLoginId(e.target.value)}
                            placeholder="아이디 입력"
                        />
                    </div>
                    <div className="input-group">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            value={loginPw}
                            onChange={(e) => setLoginPw(e.target.value)}
                            placeholder="비밀번호 입력"
                        />
                    </div>

                    {errorMsg && <div className="error-msg">{errorMsg}</div>}

                    <button type="submit" className="submit-btn">로그인</button>
                </form>
            </div>
        </div>
    );
}