import styled from 'styled-components';
import UsMapContacts from './components/usMapContacts';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  position: relative;
`;

export const Fond = styled.div`
  height: 100%;
  margin-top: -90px;
  @media (max-width: 830px) {
    margin-top: -100px;
  }
  @media (max-width: 828px) {
    margin-top: -130px;
  }
`;

export const HeaderLogo = styled.div`
  position: relative;
  top: 90px;
  align-items: center;
  z-index: 100;
  svg {
    fill: white;
  }
  @media (max-width: 830px) {
    top: 100px;
  }
  @media (max-width: 828px) {
    top: 130px;
  }
`;

export const CloudBackground = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  bottom: -70px;
  overflow: hidden;
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
  margin: 74px auto 100px;

  @media (max-width: 1220px) {
    flex-wrap: wrap;
  }

  @media (max-width: 498px) {
    padding: unset;
  }
`;

export const OurReview = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  margin: 50px auto 60px;
`;

export const SliderSlide = styled.div`
  margin: 0 auto 64px;
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

export const UsMapContactsContainer = styled.div`
  display: inline-block;
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 23px;

  @media (max-width: 470px) {
    width: 100%;
  }
`;
