import { useEffect, useState, useRef } from "react";
import { Modal } from "../../Modal";
import "../MainBodySection.css";
import { convertImage, preprocessImage } from "../../../apis/api";
import loadingSpinner from "../../../assets/gifs/loadingSpinner.gif";
import { Share } from "../../Share";

export const Section1 = () => {
  const [files, setFiles] = useState([]);
  const [Dragging, setDragging] = useState(false);
  const [convertedImage, setConvertedImage] = useState(
    sessionStorage.getItem("convertedImage")
  );
  const [uploadedImage, setUploadedImage] = useState(
    sessionStorage.getItem("uploadedImage")
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [input_content, setInputContent] = useState("");
  const canvasRef = useRef(null);
  const [canvasTag, setCanvasTag] = useState([]);


  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputContent(value);
  };

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

  const handleConvertClick = async () => {
    setIsConverting(true);
    const convertedImage = await convertImage(
      uploadedImage,
      sessionStorage.getItem("mask"),
      input_content
    );
    if (convertedImage) {
      setIsConverted(true);
      window.location.href = "/view";
    }
  };

  const uploadFile = async (file) => {
    // Check the file extension
    const allowedExtensions = ["png", "jpeg", "jpg"];
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      alert("png, jpeg, jpg 확장자 파일만 업로드 가능합니다.");
      setFiles([]);
      return;
    }

    const reader = new FileReader();
    reader.onload = async function () {
      const uploadingImage = reader.result;
      console.log(uploadingImage);
      sessionStorage.setItem("uploadedImage", uploadingImage);
      setIsUploading(true);
      await preprocessImage(uploadingImage);
      setUploadedImage(uploadingImage);
      setIsUploaded(true);
    };
    reader.readAsDataURL(file);
    console.log(reader.result);
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

    const ctx = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = uploadedImage;
    image.onload = function() {
      ctx.drawImage(image, -50, 0);
    };
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div
      className="section"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      style={{ margin: "50px 0 150px 0" }}
    >
      {!isUploading ? (
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
          <div style={{ height: "340px" }}>
            <div className="content">
              <div className="bg-img" style={{ width: '1000px'}}>
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
          </div>
        </>
      ) : (

        <div style={{height:'700px'}}>
          <div className="content">
            <div className="bg-img">
              <div>
                <div className="main-font">이미지 배경 변환기</div>
              </div>

            {!isUploaded ? (<img src={loadingSpinner} alt="loadingSpinner" style={{margin: '0 auto 0 auto'}}/>) : (<>
              <div className="container">
                <img src={uploadedImage} className="section-img" style={{width : "450px", margin : "0px"}} />
                <img
                  src={sessionStorage.getItem("mask")}
                  className="section-img"
                  style={{width : "450px", margin : "0px"}}
                />
              </div>

                  {isConverting && !isConverted ? (
                    <img src={loadingSpinner} alt="loadingSpinner" />
                  ) : (
                    <></>
                  )}
              <div>
                <input
                  type="text"
                  id="text"
                  className="textbox"
                  placeholder="text prompt"
                  onChange={handleInputChange}
                  style={{ width: "900px" }}
                ></input>
              </div></>)}
              <div className="container">
                <label for="file" className="label-upload">
                  <button className="box-font filebox" onClick={handleConvertClick}>
                      배경 변환
                  </button>
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleUploadClick}
                />
                <label for="file" className="label-upload">
                  <div className="box-font filebox" >
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
        </div>
      )}
      <br />
      <br />
      <br />

    </div>
  );
};

export default Section1;
