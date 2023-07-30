import { useEffect, useState } from "react";
import { Modal } from "../../Modal";
import "../MainBodySection.css";

export const Section1 = () => {
  const [files, setFiles] = useState([])
  const handleDrop = (event) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files.length > 0) {
      setFiles([...files]);
    }
  }
  const handleDragOver = (event) => {
    event.preventDefault()
  }
  const handleDragStart = (event) => {
      event.dataTransfer.setData("text/plain", event.target.id)
  }
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log(isModalOpen);
  };

  // let box_font = {
  //   fontSize: 28,
  //   backgroundColor: 'white',
  // }
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className="section">
      <div className="content">
        <div className="bg-img">
          <div>
            <div>
              <div className="main-font">완벽한 사진 편집</div>
              <div className="sub-font">사진을 다양한 배경으로 바꿔보세요</div>
              <div className="sub-font">배경 변환을 위해 이미지를 업로드하세요</div>
            </div>
            <div class="filebox" onDrop = {handleDrop} onDragOver = {handleDragOver}>
              <div class="line" draggable="true" onDragStart={handleDragStart}>
                <label for="file" className="box-font">이미지 업로드</label> 
                <input type="file" id="file"/>
              </div>
            </div>
          </div>
          <button onClick={openModal}>Open Modal</button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        {/* <div className="d-flex justify-content-center align-content-center file-upload">
          <div>
            <p className="book-upload">Upload a book to start swap</p>
            <p className="save-cost">save cost of buying new books by book swapping</p>
            <div className="file-upload-area m-10" onDragOver={handleDragOver} onDrop={handleDrop} >
              <div className="card-body d-flex align-items-center justify-content-center m-2 scan-div" style={{ minHeight: "372px" }} draggable = "true" onDragStart={handleDragStart}>
                <div className='file-upload-div'>
                  <ul>
                    {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                    <h5 class="card-title scan-book">Tap here to scan a book</h5>
                    <div className="d-flex align-items-center justify-content-center" >
                      <h5 className="isbn">ISBN format</h5>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section1;
