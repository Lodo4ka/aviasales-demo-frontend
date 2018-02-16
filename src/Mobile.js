import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import raiting from "./assets/raiting.svg";
import apple from "./assets/apple.svg";
import wf from "./assets/wf.svg";
import android from "./assets/android.svg";
import backgroundImage from "./assets/backgroundImage.png";

const Mobile = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  padding-top: 24px;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 20px;
`;

const Rating = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 56px;
`;

const RaitingImg = styled.img`
  width: 70px;
  height: 10px;
`;

const Img = styled.img`
  margin-right: 8px;
`;

const MainImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 237px;
  height: 312px;

  @media screen and (max-width: 576px) {
    width: 162px;
    height: 213px;
  }
`;

const Feedback = styled.span`
  margin-left: 12px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #fff;
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 50px;
`;

const Download = styled.div`
  font-weight: normal;
  line-height: 24px
  font-size: 14px;
  color: #ffffff;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default function() {
  return (
    <Mobile>
      <div className="container">
        <Wrapper>
          <MainImage src={backgroundImage} alt="backgroundImage" />
          <div className="row">
            <div className="col-xs-12 col-md-offset-4 col-md-8">
              <Title>Скачай мобильное приложение Aviasales.ru</Title>
              <Rating>
                <RaitingImg src={raiting} alt="rating" />
                <Feedback>Более 103 000 оценок</Feedback>
              </Rating>
            </div>
          </div>
          <div className="col-xs-offset-6 col-xs-6 col-md-offset-4 col-md-8">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <Download>
                  <Img src={apple} alt="iphone" title="iphone" />
                  <Text>iPhone или iPad</Text>
                </Download>
              </div>
              <div className="col-xs-12 col-md-4">
                <Download>
                  <Img src={android} alt="android" title="android" />
                  <Text>Android</Text>
                </Download>
              </div>
              <div className="col-xs-12 col-md-4">
                <Download>
                  <Img src={wf} alt="wf" title="wf" />
                  <Text>Windows Phone</Text>
                </Download>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </Mobile>
  );
}
