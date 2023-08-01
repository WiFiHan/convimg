import { useEffect, useState } from "react";
import { Modal } from "../../Modal";
import "../MainBodySection.css";

export const Section1 = () => {
  const [files, setFiles] = useState([]);
  const [Dragging, setDragging] = useState(false);
  const handleDrop = (event) => {
    setDragging(false);
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files.length > 0) {
      setFiles([...files]);
      const file = files[0];
      uploadFile(file);
    }
  };

  const uploadFile = (file) => {
    const reader = new FileReader();
    reader.onload = function () {
      const uploadingImage = reader.result;
      sessionStorage.setItem("uploadedImage", uploadingImage);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    setDragging(true);
    event.preventDefault();
  };

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    const temp_files = [];
    temp_files.push(file);
    setFiles(temp_files);
    if (file) uploadFile(file);
  };

  const handleDragLeave = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setDragging(false);
    event.preventDefault();
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log(isModalOpen);
  };

  return (
    <div
      className="section"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <div className={Dragging ? "uploading" : "none"}>
        <div
          className="main-font"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          파일을 여기에 놓으세요
        </div>
      </div>
      <div className="content">
        <div className="bg-img">
          <div>
            <div>
              <div className="main-font">이미지 배경 변환기</div>
              <div className="sub-font">사진을 다양한 배경으로 바꿔보세요</div>
              <div className="sub-font">
                배경 변환을 위해 이미지를 업로드하세요
              </div>
            </div>
            <div class="filebox">
              <div class="line">
                <label for="file" className="box-font">
                  이미지 업로드
                </label>
                <input type="file" id="file" onChange={handleUploadClick} />
              </div>
            </div>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
          {/* <button onClick={openModal}>Open Modal</button>
          <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
        </div>
      </div>
    </div>
  );
};

export default Section1;
