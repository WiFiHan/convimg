import {KakaoShareButton} from "./KakaoShare"

export const Share = ({convertedImage}) => {

  return (
    // Rendered only when propped variable: isOpen = true
    true && (
      <div>
        This is Share Button
        <KakaoShareButton convertedImage={convertedImage}></KakaoShareButton>
        
      </div>
    )
  );
};

export default Share;