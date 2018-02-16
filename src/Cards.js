import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import krasnodar from "./assets/krasnodar.png";
import mineralwater from "./assets/mineral-water.png";
import adler from "./assets/adler.png";
import saint from "./assets/saint.png";
import krim from "./assets/krim.png";
import barcelona from "./assets/barcelona.png";
import flagru from "./assets/flagru.svg";

const Image = styled.img`
  height: 212px;
  border-radius: 8px 8px 0 0;
  width: 100%;
  @media screen and (max-width: 576px) {
    height: 176px;
  }
`;

const Cards = styled.div`
  background: #f8fcff;
  padding-top: 56px;

  @media screen and (max-width: 576px) {
    padding-bottom: 25px;
  }
`;

const Card = styled.a`
  color: #00b0dd;
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
`;

const CardInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-bottom: 12px;
  background: white;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  color: #5b5b5c;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 4px;

  @media screen and (max-width: 576px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Country = styled.div`
  text-transform: uppercase;
  color: #a0b0b9;
  line-height: 20px;
  font-size: 12px;
`;

const Right = styled.div``;

const Price = styled.a`
  color: #00ace2;
  font-size: 22px;
  display: inline-block;
  line-height: 32px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const FlagImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const Date = styled.aside`
  color: #a0b0b9;
  line-height: 20px;
  font-size: 12px;
`;

export default function() {
  return (
    <Cards>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Card>
              <Image src={krasnodar} alt="krasnodar" title="Краснодар" />
              <CardInfo>
                <Left>
                  <FlagImage src={flagru} />
                  <div>
                    <Title>Краснодар</Title>
                    <Country>РОССИЯ</Country>
                  </div>
                </Left>
                <Right>
                  <Price>Найти от 1 212₽</Price>
                  <Date>18 марта</Date>
                </Right>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card>
              <Image src={adler} />
              <CardInfo>
                <Left>
                  <FlagImage src={flagru} />
                  <div>
                    <Title>Сочи (адлер)</Title>
                    <Country>РОССИЯ</Country>
                  </div>
                </Left>
                <Right>
                  <Price>Найти от 1 334₽</Price>
                  <Date>27 марта</Date>
                </Right>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card>
              <Image src={saint} />
              <CardInfo>
                <Left>
                  <FlagImage src={flagru} />
                  <div>
                    <Title>Санкт-Петербург</Title>
                    <Country>РОССИЯ</Country>
                  </div>
                </Left>
                <Right>
                  <Price>Найти от 1 508₽</Price>
                  <Date>29 февраля</Date>
                </Right>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card>
              <Image src={mineralwater} />
              <CardInfo>
                <Left>
                  <FlagImage src={flagru} />
                  <div>
                    <Title>Минеральные Воды</Title>
                    <Country>РОССИЯ</Country>
                  </div>
                </Left>
                <Right>
                  <Price>Найти от 2 074₽</Price>
                  <Date>13 марта</Date>
                </Right>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card>
              <Image src={krim} />
              <CardInfo>
                <Left>
                  <FlagImage src={flagru} />
                  <div>
                    <Title>Симферополь (Крым)</Title>
                    <Country>КРЫМ</Country>
                  </div>
                </Left>
                <Right>
                  <Price>Найти от 2 407₽</Price>
                  <Date>13 марта</Date>
                </Right>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card>
              <Image src={barcelona} />
              <CardInfo>
                <Left>
                  <FlagImage src={flagru} />
                  <div>
                    <Title>Барселона</Title>
                    <Country>ИСПАНИЯ</Country>
                  </div>
                </Left>
                <Right>
                  <Price>Найти от 4 247₽</Price>
                  <Date>24 марта</Date>
                </Right>
              </CardInfo>
            </Card>
          </div>
        </div>
      </div>
    </Cards>
  );
}
