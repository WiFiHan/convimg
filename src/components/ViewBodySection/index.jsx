import { useEffect, useState } from "react";
import "./ViewBodySection.css";
import IMG from "../../assets/images/man in front of st basil 20.jpg";
import { convertImage } from "../../apis/convimg";

export const ViewBodySection = () => {
  //Assign const variable uploadedImage to "before"
  const input_prompt = sessionStorage.getItem("inputPrompt");

  const [convertedImage, setConvertedImage] = useState(
    sessionStorage.getItem("convertedImage")
  );
  const [reUploadedImage, setReUploadedImage] = useState(null);
  const [re_input_prompt, setReInputPrompt] = useState("");

  const handleFileReUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const uploadedImage = reader.result;
        sessionStorage.setItem("uploadedImage", uploadedImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReConvertClick = () => {
    convertImage(reUploadedImage, re_input_prompt);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setReInputPrompt(value);
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
      <div class="view-container-one">
        <div class="temp-box">
          <p class="font-size-30">배경 변환이 완료되었습니다.</p>
          <br></br>
        </div>
      </div>

      <div class="view-container-3">
        <div class="temp-box-3">
          <img src={IMG} className="section-img" />
          <p>Before</p>
        </div>
        <div class="temp-box-3">
          <img src={IMG} className="section-img" />
          <p>After</p>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <p>{input_prompt}</p>
      <input
        className="input-reprompt"
        placeholder="다른 프롬프트를 입력해보세요."
        onChange={handleInputChange}
      />

      <div class="view-container-3">
        <div class="temp-box-3">
          <button className="btn-download" onClick={handleDownLoadClick}>
            다운로드
          </button>
        </div>
        <div class="temp-box-3">
          <label htmlFor="fileInput" className="btn-upload">
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
        <div class="temp-box-3">
          <button className="btn-reconv" onClick={handleReConvertClick}>
            배경 다시 변환
          </button>
        </div>
      </div>
    </view>
  );
};

export default ViewBodySection;
