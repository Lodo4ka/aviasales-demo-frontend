import React from "react";
import styled from "styled-components";
import vk from "./assets/vk.svg";
import fb from "./assets/fb.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import viber from "./assets/viber.svg";
import appstorebtn from "./assets/appstorebtn.svg";
import googleplaybtn from "./assets/googleplaybtn.svg";
import windowsstorebtn from "./assets/windowsstorebtn.svg";

const Footer = styled.footer`
  background: #fff;
  padding-top: 32px;
  padding-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  margin-top: 31px;
  flex-wrap: wrap;
`;

const AppFlex = Row.extend`
  flex-direction: column;
  margin-top: 16px;
  align-items: center;
`;

const Column = styled.div`
  flex-basis: 50%;
`;

const Title = styled.h6`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin: 0px 0px 16px 0px;
`;

const Text = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin-top: 0px;
  margin-bottom: 8px;
  margin-right: 12px;
`;
const Copyright = Text.extend`
  text-align: center;
  margin-top: 24px 0 0 0;
  font-size: 12px;
  color: #5b5b5c;
  margin-top: 0px;
  margin-bottom: 8px;
  margin-right: 12px;
`;

const AppText = Text.extend`
  text-align: center;
  margin-top: 24px;
`;

const Link = styled.a`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin-top: 16px;
  display: block;
  transition: 0.3s;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    color: #fd8a27;
    text-decoration: none;
  }
`;

const Line = styled.div`
  height: 1px;
  border: 1px solid #e0e6e8;
  margin: 24px 0;
`;

const Img = styled.img`
  margin-right: 0;
`;

const AppImg = styled.a`
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Row>
              <Column>
                <Title>СТРАНЫ</Title>
                <Link>Россия</Link>
                <Link>Таиланд</Link>
                <Link>Черногория</Link>
                <Link>Кипр</Link>
                <Link>Болгария</Link>
                <Link>Грузия</Link>
                <Link>Все страны →</Link>
              </Column>
              <Column>
                <Title>ГОРОДА</Title>
                <Link>Москва</Link>
                <Link>Санкт-Петербург</Link>
                <Link>Симферополь</Link>
                <Link>Адлер</Link>
                <Link>Екатеринбург</Link>
                <Link>Лондон</Link>
                <Link>Все города →</Link>
              </Column>
            </Row>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <Row next>
              <Column>
                <Title>АВИАКОМПАНИИ</Title>
                <Link>Air Berlin</Link>
                <Link>Air France</Link>
                <Link>Alitalia</Link>
                <Link>Air Baltic</Link>
                <Link>Emirates</Link>
                <Link>KLM</Link>
                <Link>Все авиакомпании →</Link>
              </Column>
              <Column>
                <Title>АЭРОПОРТЫ</Title>
                <Link>Шереметьево</Link>
                <Link>Курумоч</Link>
                <Link>Домодедово</Link>
                <Link>Толмачево</Link>
                <Link>Владивосток</Link>
                <Link>Гамбург</Link>
                <Link>Все аэропорты →</Link>
              </Column>
            </Row>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <Row>
              <Column>
                <Title>НАПРАВЛЕНИЯ</Title>
                <Link>MOW – SIP</Link>
                <Link>MOW – AER</Link>
                <Link>MOW – TIV</Link>
                <Link>MOW – MRV</Link>
                <Link>LED – MOW</Link>
                <Link>MOW – BKK</Link>
              </Column>
              <Column>
                <Title>СЕРВИСЫ</Title>
                <Link>Горящие авиабилеты</Link>
                <Link>Календарь низких цен</Link>
                <Link>Карта низких цен</Link>
                <Link>Спецпредложения</Link>
                <Link>Таблица цен</Link>
                <Link>Блог</Link>
                <Link>Помощь</Link>
              </Column>
            </Row>
          </div>

          <div className="col-xs-12">
            <Line />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <Row>
              <Link>О компании</Link>
              <Link>Партнёрская программа</Link>
              <Link>Реклама</Link>
              <Link>Вакансии</Link>
              <Link>Помощь</Link>
              <Link>Правила</Link>
              <Link>White Label авиабилеты</Link>
            </Row>
          </div>

          <div className="col-xs-12">
            <Row>
              <Link>
                <Img src={vk} alt="" title="" /> Вконтакте
              </Link>
              <Link>
                <Img src={fb} alt="" title="" /> Фейсбук
              </Link>
              <Link>
                <Img src={instagram} alt="" title="" /> Инстаграм
              </Link>
              <Link>
                <Img src={twitter} alt="" title="" /> Твиттер
              </Link>
              <Link>
                <Img src={viber} alt="" title="" /> Вайбер
              </Link>
            </Row>
          </div>

          <div className="col-xs-12">
            <AppText>Поиск и бронирование отелей</AppText>
            <AppFlex>
              <AppImg>
                <Img footer src={appstorebtn} alt="" title="" />
              </AppImg>
              <AppImg>
                <Img footer src={googleplaybtn} alt="" title="" />
              </AppImg>
              <AppImg>
                <Img footer src={windowsstorebtn} alt="" title="" />
              </AppImg>
            </AppFlex>
          </div>

          <div className="col-xs-12">
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </div>
        </div>
      </div>
    </Footer>
  );
}
