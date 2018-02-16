import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import calendar from "./assets/calendar.svg";
import russia from "./assets/flag ru.svg";
import armenia from "./assets/flag am.svg";
import moldova from "./assets/flag md.svg";

const Price = styled.div`
  background: #f8fcff;
  padding-top: 32px;
`;

const ImageCalendar = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  margin: 0 auto;
`;

const Top = styled.div`
  text-align: center;
  display: inline;
  @media screen and (max-width: 576px) {
    display: block;
  }
`;

const PriceCard = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
const Line = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
`;
const Card = styled.div`
  border-bottom: 1px dashed #e4e7e8;
  padding-bottom: 23px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const LastCard = styled.div`
  border-bottom: none;
  padding-bottom: 23px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  color: #5b5b5c;
  font-weight: 700;
  vertical-align: top;
  font-weight: 700;
  line-height: 32px;
  font-size: 22px;
`;

const Flag = styled.img`
  display: flex;
  margin: 0;
`;

const Country = styled.span`
  margin-top: 5px;
  text-transform: uppercase;
  color: #a0b0b9;
  font-size: 12px;
`;

const From = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  flex-basis: 60%;
`;

const LinkPrice = styled.a`
  padding-left: 10px;
  color: #00ace2;
  text-decoration: none;
  flex-basis: 40%;
  text-align: right;
`;

const Info = styled.p`
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  text-align: center;
`;

const Small = styled.p`
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export default function() {
  return (
    <Price>
      <div className="container">
        <div className="row">
          <div className="
              col-xs-offset-1
              col-xs-10
              col-sm-offset-2
              col-sm-8
              col-lg-8">
            <Top>
              <ImageCalendar src={calendar} alt="calendar" />
              <Title>Лучшие цены на авиабилеты за последний месяц</Title>
            </Top>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-4 around-lg">
              <Card>
                <Flag src={russia} alt="russia" />
                <Title>
                  Симферопль (Крым)<br />
                  <Country>КРЫМ</Country>
                </Title>

                <PriceCard>
                  <Line>
                    <From>Из Москвы</From>
                    <LinkPrice>от 4 813₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Санкт-Петербурга</From>
                    <LinkPrice>от 7 857₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Новосибирска</From>
                    <LinkPrice>от 15 127₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Екатеринбурга</From>
                    <LinkPrice>от 9 275₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Челябинска</From>
                    <LinkPrice>от 9 148₽</LinkPrice>
                  </Line>
                </PriceCard>
              </Card>
            </div>
            <div className="col-xs-12 col-lg-4 around-lg">
              <Card>
                <Flag src={armenia} alt="armenia" />
                <Title>
                  Ереван<br />
                  <Country>АРМЕНИЯ</Country>
                </Title>

                <PriceCard>
                  <Line>
                    <From>Из Москвы</From>
                    <LinkPrice>от 6 758₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Санкт-Петербурга</From>
                    <LinkPrice>от 9 932₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Сочи</From>
                    <LinkPrice>от 11 951₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Краснодара</From>
                    <LinkPrice>от 11 741₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Ростова-на-Дону</From>
                    <LinkPrice>от 11 956₽</LinkPrice>
                  </Line>
                </PriceCard>
              </Card>
            </div>
            <div className="col-xs-12 col-lg-4 around-lg">
              <LastCard>
                <img src={moldova} alt="russia" />
                <Title>
                  Кишинёв<br />
                  <Country>МОЛДАВИЯ</Country>
                </Title>

                <PriceCard>
                  <Line>
                    <From>Из Москвы</From>
                    <LinkPrice>от 8 319₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Санкт-Петербурга</From>
                    <LinkPrice>от 10 800</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Краснодара</From>
                    <LinkPrice>от 12 098₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Сургута</From>
                    <LinkPrice>от 16 277₽</LinkPrice>
                  </Line>
                  <Line>
                    <From>Из Нового Уренгоя</From>
                    <LinkPrice>от 15 987₽</LinkPrice>
                  </Line>
                </PriceCard>
              </LastCard>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8  col-lg-8">
              <Info>
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
                стран мира. Поиск и сравнение цен на авиабилеты среди 100
                агентств и 728 авиакомпаний.
              </Info>
              <Small>
                Цены, найденные пользователями за последние 48 часов, не
                являются офертой.
              </Small>
            </div>
          </div>
        </div>
      </div>
    </Price>
  );
}
