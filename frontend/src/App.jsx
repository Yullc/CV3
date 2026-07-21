import React, { useState, useEffect } from 'react';
import { fetchTableData } from './api/tableApi';
import Table from './components/Table';

function App() {
    const [type, setType] = useState('LIVE');
    const [tableData, setTableData] = useState([]);

    // type(라방/홈쇼핑)이 바뀔 때마다 백엔드 API 재호출
    useEffect(() => {
        const getData = async () => {
            const data = await fetchTableData(type);
            setTableData(data);
        };
        getData();
    }, [type]);

    return (
        <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
                14개 홈쇼핑 방송의 랭킹을 확인해보세요.
            </h3>

            {/* 상단 유형 필터 버튼 */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <button
                    onClick={() => setType('LIVE')}
                    style={{
                        padding: '6px 16px',
                        borderRadius: '20px',
                        border: type === 'LIVE' ? '2px solid #ffb800' : '1px solid #e0e0e0',
                        backgroundColor: type === 'LIVE' ? '#fffdf0' : '#fff',
                        fontWeight: type === 'LIVE' ? 'bold' : 'normal',
                        cursor: 'pointer'
                    }}
                >
                    라방
                </button>
                <button
                    onClick={() => setType('HOME')}
                    style={{
                        padding: '6px 16px',
                        borderRadius: '20px',
                        border: type === 'HOME' ? '2px solid #ffb800' : '1px solid #e0e0e0',
                        backgroundColor: type === 'HOME' ? '#fffdf0' : '#fff',
                        fontWeight: type === 'HOME' ? 'bold' : 'normal',
                        cursor: 'pointer'
                    }}
                >
                    홈쇼핑
                </button>
            </div>

            {/* 테이블 표시 */}
            <Table data={tableData} />
        </div>
    );
}

export default App;