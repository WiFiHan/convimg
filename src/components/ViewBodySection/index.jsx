import { useEffect, useState } from "react";
//import "./ViewBodySection.css";
import "../MainBodySection/MainBodySection.css"
import IMG from "../../assets/images/man in front of st basil 20.jpg";
import { preprocessImage, convertImage } from "../../apis/api";

export const ViewBodySection = () => {
  //Assign const variable uploadedImage to "before"
  const input_prompt = sessionStorage.getItem("inputPrompt");

  const [convertedImage, setConvertedImage] = useState(
    sessionStorage.getItem("convertedImage")
  );
  const [uploadedImage, setUploadedImage] = useState(
    sessionStorage.getItem("uploadedImage")
  );
  const [input_content, setInputContent] = useState("");
  const [re_input_prompt, setReInputPrompt] = useState("");

  const handleFileReUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedExtensions = ["png", "jpeg", "jpg"];
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop().toLowerCase();
  
      if (allowedExtensions.includes(fileExtension)) {
        const reader = new FileReader();
        reader.onload = function () {
          const uploadingImage = reader.result;
          sessionStorage.setItem("uploadedImage", uploadingImage);
          setUploadedImage(uploadingImage);
        };
        reader.readAsDataURL(file);
      } else {
        alert("png, jpeg, jpg 확장자 파일만 업로드 가능합니다.");
        event.target.value = null;
      }
    }
  };

  const handleReConvertClick = () => {
    setReInputPrompt(input_content);
    // convertImage(uploadedImage, re_input_prompt);
    preprocessImage(uploadedImage);
    // convertImage(uploadedImage, sessionStorage.getItem('mask'), "photo of man, sitting in front of beach");
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputContent(value);
  };

  const handleDownLoadClick = () => {
    if (convertedImage) {
      const downloadLink = document.createElement("a");
      downloadLink.href = convertedImage;
      downloadLink.download = input_prompt;
      downloadLink.click();
    } else {
      alert("변환된 이미지가 없습니다. <배경 다시 변환>을 시도해주세요.");
    }
  };

  return (
    <div className='section' style={{transform: 'translate(0, -150px)'}}>
      <div style={{height:'700px'}}>
        <div className="content" style={{ height: "650px" }}>
          <div className="bg-img">
            <div>
              <div className="main-font">이미지 배경 변환기</div>
            </div>
            <div className='container'>
              <img 
              src={uploadedImage} 
              className="section-img" 
              style={{width : "450px", margin : "0px"}}
              />
              <img
              src={sessionStorage.getItem("convertedImage")}
              className="section-img"
              style={{width : "450px", margin : "0px"}}
              />
            </div>
            <div className='container'>
              <p style={{margin: "0 200px 0"}}>before</p>
              <p style={{margin: "0 200px 0"}}>after</p>
            </div>
            <div className='container'>
            <p>{input_prompt}</p>
              <input
                type="text"
                id="text"
                className="textbox"
                placeholder="다른 프롬프트를 입력해보세요."
                onChange={handleInputChange}
                style={{ width: "900px" }}
              />
            </div>
            <div className='container'>
              <label for="file" className="label-upload" >
                <button className="box-font filebox" style={{ width: "250px", margin: "40px auto 0" }} onClick={handleDownLoadClick}>
                다운로드
                </button>
              </label>
              <label for="file" className="label-upload" >
                <button className="box-font filebox" style={{ width: "250px", margin: "40px auto 0" }} onClick={handleDownLoadClick}>
                공유하기
                </button>
              </label>
              <label for="file" className="label-upload">
                <button className="box-font filebox" style={{ width: "250px", margin: "40px auto  0" }} onClick={handleReConvertClick}>
                배경 다시 변환
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBodySection;
