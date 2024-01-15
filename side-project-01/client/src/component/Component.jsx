import React, { useState } from "react";
import axios from "axios";

const Component = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      // 서버 엔드포인트에 파일 전송
      const response = await axios.post("/upload", formData);
      // 서버로부터 받은 데이터 활용
      const data = response.data.data;
      console.log(data);

      // TODO: 화면에 데이터를 표시하거나 다른 작업 수행
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default Component;
