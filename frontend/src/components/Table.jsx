import React from 'react';

function Table({ data }) {
    return (
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
    );
}

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

export default Table;