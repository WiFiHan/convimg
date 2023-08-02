import { useEffect, useState } from "react";
import { Modal } from "../../Modal";
import "../MainBodySection.css";
import { convertImage, preprocessImage } from "../../../apis/api";

export const Section1 = () => {
  const [files, setFiles] = useState([]);
  const [Dragging, setDragging] = useState(false);
  const [convertedImage, setConvertedImage] = useState(
    sessionStorage.getItem("convertedImage")
  );
  const [uploadedImage, setUploadedImage] = useState(
    sessionStorage.getItem("uploadedImage")
  );
  const [isUploaded, setIsUploaded] = useState(false);
  const [input_content, setInputContent] = useState("");

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

  const handleObtainMask = () => {
    preprocessImage(uploadedImage);
  };

  const handleConvertClick = async () => {
    await convertImage(
      uploadedImage,
      sessionStorage.getItem("mask"),
      "photo of man, standing on the beach"
    );
    window.location.href = "/view";
  };

  const uploadFile = (file) => {
    const reader = new FileReader();
    reader.onload = async function () {
      const uploadingImage = reader.result;
      setUploadedImage(uploadingImage);
      sessionStorage.setItem("uploadedImage", uploadingImage);
      console.log(uploadedImage);
      await preprocessImage(uploadedImage);
      setIsUploaded(true);
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
      {!isUploaded ? (
        <>
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
                  <div className="sub-font">
                    사진을 다양한 배경으로 바꿔보세요
                  </div>
                  <div className="sub-font">
                    배경 변환을 위해 이미지를 업로드하세요
                  </div>
                </div>
                <label for="file" className="label-upload">
                  <div className="box-font filebox">이미지 업로드</div>
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleUploadClick}
                />
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="content" style={{ height: "650px" }}>
          <div className="bg-img">
            <div>
              <div className="main-font">이미지 배경 변환기</div>
            </div>
            <div className="container">
              <img src={uploadedImage} className="section-img" />
              <img
                src={sessionStorage.getItem("mask")}
                className="section-img"
              />
            </div>
            <div>
              <input
                type="text"
                id="text"
                className="textbox"
                placeholder="text prompt"
                style={{ width: "900px" }}
              ></input>
            </div>
            <div className="container">
              <label for="file" className="label-upload">
                <div
                  className="box-font filebox"
                  style={{ width: "250px", margin: "40px auto 0 0" }}
                >
                  배경 변환
                </div>
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleConvertClick}
              />

              <label for="file" className="label-upload">
                <div className="box-font filebox" style={{ width: "250px" }}>
                  마스크 수정
                </div>
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleUploadClick}
              />

              <label for="file" className="label-upload">
                <div
                  className="box-font filebox"
                  style={{ width: "250px", margin: "40px 0 0 auto" }}
                >
                  이미지 업로드
                </div>
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleUploadClick}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;

{
  /* <button onClick={openModal}>Open Modal</button>
<Modal isOpen={isModalOpen} onClose={closeModal} /> */
}
