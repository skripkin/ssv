import styled from 'styled-components';
import UsMapContacts from './components/usMapContacts';

export const Container = styled.div`
  height: 100vh;
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
  align-items: center;
  z-index: 100;
  svg {
    fill: white;
  }
`;

export const Fond = styled.div`
  margin-top: -90px;
  position: relative;
`;

export const CloudBackground = styled.div`
  position: absolute;
  margin-top: 200px;
  z-index: 20;
  width: 100%;
`;

export const UsBenefits = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: baseline;
  margin: 20px auto 47px;
  z-index: 100;
`;

export const TextInTheMiddle = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  margin-top: 100px;
  p {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
  }
`;

export const CardsStep = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 74px auto 100px;
`;

export const OurReview = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  margin: 50px auto 90px;
`;

export const SliderSlide = styled.div`
  margin: 40px auto 64px;
  width: 100%;
`;

export const LeaveFeedbackButton = styled.div`
  width: 215px;
  height: 53px;
  text-align: center;
  margin: 64px auto 57px;
  display: block;
`;

export const MapContainer = styled.div`
  background-image: url('../map.jpg');
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 87px;
`;

export const Map = styled.div`
  display: flex;
  max-width: min(100% - 48px, 1158px);
  margin: 0 auto;
  min-height: 700px;
`;

export const StyledMapContacts = styled(UsMapContacts)`
  svg {
    fill: black;
    width: 36px;
    height: 35px;
  }
`;

export const UsMap_Contacts = styled.div`
  display: inline-block;
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 23px;
`;
