import styled from 'styled-components';
import * as Icon from '../icons';
import { colors } from 'src/constants';

export const Container = styled.div`
  width: 400px;
  height: 500px;
  background: ${colors.white};
  box-shadow: 4px -4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 470px) {
    width: 100%;
    height: 310px;
  }
`;

export const Components = styled.div`
  align-items: center;
  white-space: nowrap;

  @media (max-width: 470px) {
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

  
  @media (max-width: 470px) {
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

    
  @media (max-width: 470px) {
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
    
  @media (max-width: 470px) {
    display: none;
  }
  }
`;

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  height: 46px;
  width: 130px;
  border: 2px solid black;
  border-radius: 40px;
  margin-right: 12px;
  background: ${colors.white};

    @media (max-width: 470px) {
    justify-content: center;
    margin: auto;
    width: 70%;
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  height: 46px;
  width: 130px;
  border: 2px solid black;
  border-radius: 40px;
  margin-left: 12px;
  background: ${colors.white};

    @media (max-width: 470px) {
    justify-content: center;
    margin: auto;
    margin-top: 25px;
    width: 70%;
`;

export const Button3 = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: auto;
  width: 290px;
  height: 47px;
  background: ${colors.internationalOrange};
  border-radius: 53px;
  border: 2px solid black;

  @media (max-width: 470px) {
    justify-content: center;
    margin: auto;
    margin-top: 25px;
    width: 70%;
  }
`;

export const Title = styled.p`
  margin-left: 50px;
  padding-top: 30px;
  width: 240px;
  height: 36px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 21px;
  color: ${colors.black};
  padding-bottom: 20px;

  @media (max-width: 470px) {
    display: none;
  }
`;

export const ResponciveTitle = styled.p`
  padding-top: 30px;
  width: 100%;
  height: 36px;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 21px;
  color: ${colors.black};
  padding-bottom: 20px;

  @media (min-width: 470px) {
    display: none;
  }
`;

export const ContactUsButtonTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 21px;
  text-align: center;
  margin-top: 10px;
  }

  @media (max-width: 470px) {
    display: none;
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
  line-height: 105%;
  color: ${colors.black};

  @media (max-width: 470px) {
    display: none;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 25px;

  @media (max-width: 470px) {
    display: unset;
  }
`;

export const WatsApp = styled(Icon.Watsapp)`
  width: 35px;
  height: 35px;
  margin: auto;
  @media (max-width: 470px) {
    width: 40px;
    height: 40px;
  }
`;

export const ButtonLink1 = styled.a`
  text-decoration: none;

  @media (min-width: 470px) {
    display: none;
  }
`;

export const B1Title = styled.p``;

export const ButtonLink2 = styled.a`
  text-decoration: none;

  @media (min-width: 470px) {
    display: none;
  }
`;

export const ButtonLink3 = styled.a`
  text-decoration: none;

  @media (min-width: 470px) {
    display: none;
  }
`;

export const Instagramm = styled(Icon.Instagramm)`
  width: 35px;
  height: 35px;
  margin: auto;

  @media (max-width: 470px) {
    width: 40px;
    height: 40px;
  }
`;

export const Gis2 = styled(Icon.Gis2)`
  width: 80px;
  height: 35px;
  padding-left: 12px;

  @media (max-width: 470px) {
    width: 104px;
    height: 45px;
    padding: unset;
  }
`;
