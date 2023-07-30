import { useEffect, useState } from "react";
import { Modal } from "../../Modal";
import "../MainBodySection.css";

export const Section1 = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log(isModalOpen);
  };

  let section = {
    background:"gray",
  }

  let content = {
    height: 400,
  }

  let box_font = {
    fontSize: 28,
    backgroundColor: 'white',
  }
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className="section" style={section}>
      <div className="content" style={content}>
        <div className="bg-img">
          <div>
            <div>
              <div className="main-font">asdf완벽한 사진 편집</div>
              <div className="sub-font">피드 사진과 비즈니스 사진을 간단하게 편집하세요</div>
            </div>
            <div class="filebox">
              <label for="file" id="box-font" className="main-font">이미지 업로드</label> 
              <input type="file" id="file"/>
            </div>
          </div>
          <button onClick={openModal}>Open Modal</button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
