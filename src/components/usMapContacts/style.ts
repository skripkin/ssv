import styled from 'styled-components';
import * as Icon from '../icons';
import { colors } from 'src/constants';

export const Container = styled.div`
  width: 400px;
  height: 500px;
  background: ${colors.white};
  box-shadow: 4px -4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 468px) {
    width: 100%;
    height: 270px;
  }
`;

export const Components = styled.div`
  align-items: center;
  white-space: nowrap;

  @media (max-width: 468px) {
    display: none;
  }
`;

export const Contact = styled.div`
  margin-left: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  width: 327px;
  height: 50px;
  padding-bottom: 20px;

  
  @media (max-width: 468px) {
    justify-content: center;
    margin-left: 0;
    width: 100%;
    padding-bottom: 10px;
  }

  color: ${colors.black};

  & .us-map-contact-title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${colors.black};

    
  @media (max-width: 468px) {
    display: none;
  }
  }

  & .us-map-contact-subtitle {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${colors.black}
    width: 300px;
    
  @media (max-width: 468px) {
    display: none;
  }
  }
`;

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
  padding: 12px 20px;
  height: 46px;
  width: 290px;
  border: 2px solid black;
  border-radius: 40px;
  background-color: ${colors.white};

  @media (max-width: 468px) {
    justify-content: space-evenly;
    margin: auto;
    height: 65px;
  }
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: 45px;
  padding: 12px 20px;
  width: 290px;
  height: 47px;
  background: ${colors.internationalOrange};
  border-radius: 53px;

  @media (max-width: 468px) {
    justify-content: center;
    margin: auto;
    margin-top: 25px;
    height: 65px;
  }
`;

export const Title = styled.p`
  margin-left: 50px;
  padding-top: 30px;
  width: 238.31px;
  height: 35.78px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 21px;
  color: ${colors.black};
  padding-bottom: 20px;

  @media (max-width: 468px) {
    display: none;
  }
`;

export const Title2 = styled.p`
  padding-top: 30px;
  width: 100%;
  height: 35.78px;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 21px;
  color: ${colors.black};
  padding-bottom: 20px;

  @media (min-width: 468px) {
    display: none;
  }
`;

export const ContactUsButtonTitle = styled.p`
  height: 22px;
  width: 150px;
  margin-right: auto;
  font-family: 'Fasthand';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 104.41%;
  color: ${colors.black};

  @media (max-width: 468px) {
    display: none;
    margin: auto;
  }
`;

export const FindUsButtonTitle = styled.p`
  height: 22px;
  width: 150px;
  margin-right: auto;
  font-family: 'Fasthand';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 104.41%;
  color: ${colors.black};

  @media (max-width: 468px) {
    display: none;
  }
`;

export const Arrow = styled(Icon.Arrow2)`
  width: 20px;
  height: 25px;
  margin-right: 4px;

  @media (max-width: 468px) {
    display: none;
  }
`;

export const Watsapp = styled(Icon.Watsapp)`
  width: 30px;
  height: 30px;
  margin-right: 4px;

  @media (max-width: 468px) {
    width: 45px;
    height: 45px;
  }
`;

export const Instagramm = styled(Icon.Instagramm)`
  width: 30px;
  height: 30px;

  @media (max-width: 468px) {
    width: 45px;
    height: 45px;
  }
`;

export const Gis2 = styled(Icon.Gis2)`
  width: 60px;
  height: 25px;
  padding-left: 12px;

  @media (max-width: 468px) {
    width: 104px;
    height: 45px;
    padding: unset;
  }
`;
