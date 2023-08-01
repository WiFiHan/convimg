import { useEffect, useState } from "react";
import "./ViewBodySection.css";
import IMG from "../../assets/images/man in front of st basil 20.jpg";
import { convertImage } from "../../apis/api";

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
      const reader = new FileReader();
      reader.onload = function () {
        const uploadingImage = reader.result;
        setUploadedImage(uploadingImage);
        sessionStorage.setItem("uploadedImage", uploadedImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReConvertClick = () => {
    setReInputPrompt(input_content);
    convertImage(uploadedImage, re_input_prompt);
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
    <view>
      <div className='section'>
        <div className='content'>
          <div className='main-container-one'>
            <div className='temp-box' style={{left : "25%", transform: "translate(0%, -120%)"}}>
              <p class="font-size-30">배경 변환이 완료되었습니다.</p>
            </div>
          </div>
          
          <div className='main-container-2'>
            <div class="temp-box" style={{transform: "translate(0%, -30%)"}}>
              <img src={uploadedImage} className="section-img" />
              <p>Before</p>
            </div>
            <div class="temp-box" style={{transform: "translate(0%, -30%)"}}>
              <img src={IMG} className="section-img" />
              <p>After</p>
            </div>
          </div>
        </div>
        <div className='content'>
          <div style={{transform: "translate(0%, 1150%)", }}>
            <p>{input_prompt}</p>
            <input
              className="input-reprompt"
              placeholder="다른 프롬프트를 입력해보세요."
              onChange={handleInputChange}
            />
          </div>
          <div className='view-container-3'style={{transform: "translate(0%, 270%)" }}>
            <div class="temp-box-3">
              <button className="btn-download" onClick={handleDownLoadClick} style={{
              paddingLeft: '60px',paddingRight: '60px'}}>
                다운로드
              </button>
            </div>
            <div class="temp-box-3" style={{transform: "translate(0%, 10%)" }}>
              <label htmlFor="fileInput" className="btn-upload" style={{background : 'white', 
              paddingLeft: '25px',paddingRight: '25px', padding:"23px"}}>
                다른 이미지 업로드
              </label>
              <input
                accept="image/*"
                multiple
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileReUpload}
              />
            </div>
            <div class="temp-box-3" >
              <button className="btn-reconv" onClick={handleReConvertClick} style={{background : 'white',
              paddingLeft: '40px',paddingRight: '40px'}}>
                배경 다시 변환
              </button>
            </div>
          </div>
        </div>
      </div>
    </view>
  );
};

export default ViewBodySection;
