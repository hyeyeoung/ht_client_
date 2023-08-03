import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [fileName1, setFileName1] = useState('');
  const [fileName2, setFileName2] = useState('');

  const handleFileChange1 = (event) => {
    const selectedFile = event.target.files[0];
    setFile1(selectedFile);
    setFileName1(selectedFile.name);
  };

  const handleFileChange2 = (event) => {
    const selectedFile = event.target.files[0];
    setFile2(selectedFile);
    setFileName2(selectedFile.name);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('fileName1', fileName1);
    formData.append('file2', file2);
    formData.append('fileName2', fileName2);

    try {
      const res = await axios.post(
        'https://hairthon-vxfof.run-asia-northeast1.goorm.site/aaa', // send files to the API
        formData
      );

      setData(res.data);
    } catch (error) {
      console.error('API 요청에 실패했습니다:', error);
    }
  };

  return (
    <div>
      <h1>JSON 데이터</h1>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange1} />
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange2} />
        <button onClick={handleUpload}>이미지 업로드</button>
      </div>
      <ul>
        {Object.keys(data).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {data[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// import axios from 'axios';
// function App() {
//   const [data, setData] = useState({});
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setFileName(selectedFile.name);
//   };
//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('fileName', fileName);
//     try {
//       const res = await axios.post(
//         'https://hairthon-vxfof.run-asia-northeast1.goorm.site/dl_Img ', // send file to flask
//         formData
//       );
//       setData(res.data); // Set the received data from the server
//     } catch (error) {
//       console.error('API 요청에 실패했습니다:', error);
//     }
//   };
//   return (
//     <div>
//       <h1>JSON 데이터</h1>
//       <div>
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//         <button onClick={handleUpload}>업로드</button>
//       </div>
//       <ul>
//         {Object.keys(data).map((key) => (
//           <li key={key}>
//             <strong>{key}:</strong> {data[key]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;