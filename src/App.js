// src/App.js (리액트 앱 파일)

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://port-0-ht-test-eu1k2llkqouw2h.sel4.cloudtype.app//api/data') // Express 서버의 포트 번호를 여기에 기입
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('API 요청에 실패했습니다:', error);
      });
  }, []);

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default App;
