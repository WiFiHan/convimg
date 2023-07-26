import { useEffect, useState } from "react";
import { Modal } from "../../Modal";
import "../MainBodySection.css";

export const Section1 = () => {
  // The way MODAL is rendered differs from vanilla HTML
  // You have to use MODAL Component which is defined at src/components/Modal/index.jsx

  // const open = () => {
  //   document.querySelector(".modal").classList.remove("hidden");
  // }
  // const close = () => {
  //   document.querySelector(".modal").classList.add("hidden");
  // }
  // const section1Action = () => {
  //   document.querySelector(".openBtn").addEventListener("click", open);
  //   document.querySelector(".closeBtn").addEventListener("click", close);
  //   document.querySelector(".bg").addEventListener("click", close);
  // }

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log(isModalOpen);
  };

  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div id="header-wrapper" className="flex justify-between bg-base-100">
      This is Section1: src/components/MainBodySection/Section1/index.jsx
      <div>
        <section>
          <div>
            <div class="main_page_txt padding">
              <h1>완벽한 사진 편집</h1>
              <div>피드 사진과 비즈니스 사진을 간단하게 편집하세요</div>
            </div>
            <div class="img_upload_box">
              <label for="imageInput" class="upload-label">
                이미지 업로드
              </label>
              <input type="file" id="imageInput" accept="image/*" />
              <div>text</div>
            </div>
          </div>
        </section>
        <div>
          ----------------------------------------------------------------
        </div>
        <button onClick={openModal}>Open Modal</button>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Section1;
