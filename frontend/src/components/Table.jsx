import React, { useState } from 'react';
import { loginApi } from '../api/memberAPI';

function Table({ data }) {
    // 모달 상태 및 로그인 정보
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');

    // 로그인 제출
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            const result = await loginApi(loginId, loginPw);

            if (typeof result === 'string' && result.startsWith('S-1')) {
                alert(result);
                setLoggedInUser(loginId);
                setIsModalOpen(false);
                setLoginId('');
                setLoginPw('');
            } else {
                setErrorMsg(result || '로그인에 실패했습니다.');
            }
        } catch (error) {
            setErrorMsg('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <div style={{ width: '100%', position: 'relative' }}>
            {/* 상단 로그인 버튼 / 사용자 영역 */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
                {loggedInUser ? (
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                        👤 {loggedInUser} 님
                    </span>
                ) : (
                    <button
                        onClick={() => setIsModalOpen(true)}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#333',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600'
                        }}
                    >
                        로그인
                    </button>
                )}
            </div>

            {/* 테이블 영역 */}
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        tableLayout: 'fixed',
                        fontSize: '13px'
                    }}
                >
                    <colgroup>
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '38%' }} />
                        <col style={{ width: '17%' }} />
                        <col style={{ width: '12%' }} />
                        <col style={{ width: '7%' }} />
                        <col style={{ width: '7%' }} />
                        <col style={{ width: '7%' }} />
                        <col style={{ width: '7%' }} />
                    </colgroup>

                    <thead>
                        <tr style={{ borderTop: '2px solid #333', borderBottom: '1px solid #ddd', color: '#666' }}>
                            <th style={thStyle}>순위</th>
                            <th style={{ ...thStyle, textAlign: 'left' }}>방송정보</th>
                            <th style={{ ...thStyle, textAlign: 'left' }}>분류</th>
                            <th style={thStyle}>방송시간</th>
                            <th style={thStyle}>시청률</th>
                            <th style={thStyle}>판매량</th>
                            <th style={thStyle}>매출액</th>
                            <th style={thStyle}>상품수</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={item.id || index} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ ...tdStyle, color: '#ff9900', fontWeight: 'bold' }}>
                                        {index + 1}
                                    </td>

                                    <td style={{ ...tdStyle, textAlign: 'left', fontWeight: '500' }} title={item.title}>
                                        <div style={ellipsisStyle}>{item.title}</div>
                                    </td>

                                    <td style={{ ...tdStyle, textAlign: 'left', color: '#666' }} title={item.category}>
                                        <div style={ellipsisStyle}>{item.category}</div>
                                    </td>

                                    <td style={{ ...tdStyle, color: '#666' }}>
                                        {item.broadcastTime}
                                    </td>

                                    <td style={tdStyle}>{item.views}</td>
                                    <td style={tdStyle}>{item.sales}</td>
                                    <td style={tdStyle}>{item.revenue}</td>
                                    <td style={tdStyle}>{item.productCount}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" style={{ ...tdStyle, padding: '40px 0', color: '#999' }}>
                                    데이터가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* 로그인 팝업 모달 */}
            {isModalOpen && (
                <div style={modalOverlayStyle} onClick={() => setIsModalOpen(false)}>
                    <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                        <button style={closeBtnStyle} onClick={() => setIsModalOpen(false)}>
                            &times;
                        </button>
                        <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>로그인</h3>

                        <form onSubmit={handleLoginSubmit}>
                            <div style={{ marginBottom: '12px', textAlign: 'left' }}>
                                <label style={labelStyle}>아이디</label>
                                <input
                                    type="text"
                                    value={loginId}
                                    onChange={(e) => setLoginId(e.target.value)}
                                    placeholder="아이디를 입력하세요"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                                <label style={labelStyle}>비밀번호</label>
                                <input
                                    type="password"
                                    value={loginPw}
                                    onChange={(e) => setLoginPw(e.target.value)}
                                    placeholder="비밀번호를 입력하세요"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            {errorMsg && (
                                <div style={{ color: '#e74c3c', fontSize: '12px', marginBottom: '12px', textAlign: 'left' }}>
                                    {errorMsg}
                                </div>
                            )}

                            <button type="submit" style={submitBtnStyle}>
                                로그인
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

// 기존 스타일
const thStyle = {
    padding: '12px 6px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontWeight: '600'
};

const tdStyle = {
    padding: '14px 6px',
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap'
};

const ellipsisStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

// 모달 전용 인라인 스타일
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '8px',
    width: '300px',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
};

const closeBtnStyle = {
    position: 'absolute',
    top: '12px',
    right: '16px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#888'
};

const labelStyle = {
    display: 'block',
    fontSize: '12px',
    color: '#666',
    marginBottom: '4px'
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '13px'
};

const submitBtnStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px'
};

export default Table;