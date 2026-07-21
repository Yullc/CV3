import React from 'react';

const Table = ({ data }) => {
    return (
        <div style={{ padding: '10px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid #333', color: '#666', padding: '12px 8px' }}>
                        <th style={{ width: '60px', textAlign: 'center' }}>순위</th>
                        <th>방송정보</th>
                        <th>분류</th>
                        <th>방송시간</th>
                        <th>시청률</th>
                        <th>판매량</th>
                        <th>매출액</th>
                        <th>상품수</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={item.id || index} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#ff9800', padding: '14px 8px' }}>
                                    {index + 1}
                                </td>
                                <td style={{ fontWeight: '500', padding: '14px 8px' }}>{item.title}</td>
                                <td style={{ color: '#555', padding: '14px 8px' }}>{item.category}</td>
                                <td style={{ color: '#555', padding: '14px 8px' }}>{item.broadcastTime}</td>
                                <td style={{ padding: '14px 8px' }}>🔒 {item.views}</td>
                                <td style={{ padding: '14px 8px' }}>🔒 {item.sales}</td>
                                <td style={{ padding: '14px 8px' }}>🔒 {item.revenue}</td>
                                <td style={{ padding: '14px 8px' }}>{item.productCount}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" style={{ textAlign: 'center', padding: '40px 0', color: '#888' }}>
                                불러올 데이터가 없습니다. 백엔드 서버가 켜져 있는지 확인해 주세요!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;