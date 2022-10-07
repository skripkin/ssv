import styled from "styled-components";
import * as Icon from "../icons";

export const Container = styled.div`
  width: 401.46px;
  height: 501.59px;
  left: 1135.94px;
  top: 3726.49px;
  padding-top: 20px;

  background: #ffffff;
  box-shadow: 4px -4px 10px rgba(0, 0, 0, 0.5);
`;

export const Components = styled.div`
  align-items: center;
`;

export const Contact = styled.div`
  margin-left: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  width: 160px;
  height: 50px;
  padding-bottom: 30px;

  color: #000000;

  & .us-map-contact-title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    color: #000000;
  }

  & .us-map-contact-subtitle {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    color: #000000;
    width: 300px;
  }
`;

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  margin-left: 35px;
  margin-top: 20px;
  padding: 12px 20px;
  height: 46px;
  width: 290px;
  border: 2px solid black;
  border-radius: 40px;
  background-color: white;
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  margin-left: 35px;
  margin-top: 50px;
  padding: 12px 20px;
  width: 290px;
  height: 47px;
  left: 1171px;
  top: 4085.3px;
  background: #fe5313;
  border-radius: 53px;
`;

export const Title = styled.p`
  margin-left: 30px;
  width: 238.31px;
  height: 35.78px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 21px;
  color: #000000;
  padding-bottom: 20px;
`;

export const ContactUsButtonTitle = styled.p`
  height: 22px;
  width: 150px;
  margin-right: auto;
  font-family: "Fasthand";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 104.41%;
  color: #000000;
`;

export const FindUsButtonTitle = styled.p`
  height: 22px;
  width: 150px;
  margin-right: auto;
  font-family: "Fasthand";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 104.41%;
  color: #000000;
`;

export const Arrow = styled(Icon.Arrow2)`
  width: 20px;
  hight: 25px;
  margin-right: 4px;
`;

export const Watsapp = styled(Icon.Watsapp)`
  width: 30px;
  hight: 30px;
  margin-right: 4px;
`;

export const Instagramm = styled(Icon.Instagramm)`
  width: 30px;
  hight: 30px;
`;

export const Gis2 = styled(Icon.Gis2)`
  width: 60px;
  hight: 25px;
  padding-left: 12px;
`;
