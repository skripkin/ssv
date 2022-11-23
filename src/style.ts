import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 1989px;
  width: 100%;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90vh;
  overflow: auto;
  z-index: 10;
`;

export const CrossButton = styled.button`
  display: block;
  position: sticky;
  top: 12px;
  margin-left: auto;
  margin-right: 12px;
  padding: 8px;
  z-index: 10;
`;

export const HeaderLogo = styled.div`
  position: relative;
  margin-left: 10%;
  align-items: center;
  max-width: 1140px;
  z-index: 100;
`;

export const Fond = styled.div`
  margin-top: -90px;
  position: relative;
`;

export const Applic = styled.div``;

export const CloudBackground = styled.div`
  position: absolute;
  margin-top: 20%;
  z-index: 20;
  width: 100%;
`;

export const UsBenefits = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: baseline;
  margin: 20px auto;
  z-index: 100;
`;

export const PhotoSlide = styled.div``;

export const TextInTheMiddle = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  margin-top: 200px;
  p {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
  }
`;

export const CardsStep = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 74px 9% 210px;
`;

export const OurReview = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  margin: 0 auto 90px;
`;

export const SliderSlide = styled.div`
  margin: 0 auto 128px;
  max-width: 1140px;
  width: 100%;
`;

export const LeaveFeedbackButton = styled.div`
  width: 215px;
  height: 53px;
  text-align: center;
  margin: 0 auto 115px;
  display: block;
`;

export const Map = styled.div`
  background-image: url('../map.jpg');
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding: 100px 0 29px;
`;

export const UsMap_Contacts = styled.div`
  margin-left: 60%;
`;
