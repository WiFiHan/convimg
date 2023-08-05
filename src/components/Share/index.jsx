import { KakaoShareButton } from "./KakaoShare";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

export const Share = ({ imageUrl }) => {
  const currentUrl = "http://localhost:3000";

  return (
    // Rendered only when propped variable: isOpen = true
    true && (
      <div>
        <KakaoShareButton imageUrl={imageUrl}></KakaoShareButton>
        <FacebookShareButton style={{ marginRight: "20px" }} url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <FacebookMessengerShareButton
          style={{ marginRight: "20px" }}
          url={currentUrl}
        >
          <FacebookMessengerIcon
            size={48}
            round={true}
            borderRadius={24}
          ></FacebookMessengerIcon>
        </FacebookMessengerShareButton>
        <TwitterShareButton style={{ marginRight: "20px" }} url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        <LineShareButton url={currentUrl}>
          <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
        </LineShareButton>
      </div>
    )
  );
};

export default Share;
