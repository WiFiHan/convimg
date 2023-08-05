import { useEffect } from "react";
// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

export const KakaoShareButton = () => {
  // 배포한 자신의 사이트
  const realUrl = "http://localhost:3000";
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = window.location.href;

  // 재랜더링시에 실행되게 해준다.
  useEffect(()=>{
      // init 해주기 전에 clean up 을 해준다.
      Kakao.cleanup();
      // 자신의 js 키를 넣어준다. 
      Kakao.init('1fd8fac05d9b8bfb0c795184c8ec47fe'); // 카카오 API 키를 여기에 넣으세요.
      // 잘 적용되면 true 를 뱉는다.
      console.log(Kakao.isInitialized());
  },[]);

  const shareKakao = () => {
      Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
              title: '배경 변환 결과',
              description: 'ToAnywhere로 이미지 배경을 바꿔보세요!',
            //   imageUrl:
            //   'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
              link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
              },
          },
          buttons: [
              {
                  title: '나도 테스트해보기',
                  link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                  },
              },
          ],
      });
  };
    
  return (
      <>
          <button 
              className='grey-btn'
              onClick={() => {
                  shareKakao();
              }}
          >
              카카오톡 공유하기
          </button>
      </>
  );
};

export default KakaoShareButton;