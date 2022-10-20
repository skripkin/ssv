import styled from "styled-components";
import * as Icon from "../icons";
import { colors } from "src/constants";

export const Container = styled.div`
  width: 400px;
  height: 500px;
  padding-top: 20px;

  background: ${colors.white};
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

  color: ${colors.black};

  & .us-map-contact-title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    color: ${colors.black};
  }

  & .us-map-contact-subtitle {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    color: ${colors.black}
    width: 300px;
  }
`;

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  margin-left: 10%;
  margin-top: 8%;
  padding: 12px 20px;
  height: 46px;
  width: 290px;
  border: 2px solid black;
  border-radius: 40px;
  background-color: ${colors.white};
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  margin-left: 10%;
  margin-top: 12%;
  padding: 12px 20px;
  width: 290px;
  height: 47px;
  background: ${colors.internationalOrange};
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
  color: ${colors.black};
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
  color: ${colors.black};
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
  color: ${colors.black};
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
