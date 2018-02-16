import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import aeroplane from "./assets/aeroplane.png";
import mail from "./assets/mail.svg";
import list from "./assets/list.svg";

const Article = styled.section`
  padding-top: 20px;
  padding-bottom: 24px;
  background: #fff;
`;

const Top = styled.div`
  display: flex;
`;

const Title = styled.h3`
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
  margin: 0px;
  padding-left: 10px;
`;

const Main = styled.p`
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const Link = styled.a`
  display: inline-block;
  margin-left: 5px;
  color: #00ace2;
  &:hover {
    cursor: pointer;
  }
`;

export default function() {
  return (
    <Article>
      <div className="container">
        <div class="row">
          <div className="col-xs-12">
            <Top>
              <img src={aeroplane} title="aeroplane" alt="aeroplane" />
              <Title>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</Title>
            </Top>
            <Main>
              Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
              самолет по сотням авиакомпаний и находим за считанные минуты самые
              дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
              нашим поиском, который совершенно бесплатно сравнивает цены на
              авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
              смысла ходить в авиакассы, обзванивать агентства — дешевый билет
              находится на расстоянии клика. На нашем сайте вы можете подобрать
              дешевые билеты на самолет в Европу, Азию и на другие континенты.
              Мы написали для вас простую инструкцию о том, как пользоваться
              поиском и экономить на перелетах от 1000 до 20 000 руб в год.{" "}
              <Link>Подробнее</Link>
            </Main>
          </div>

          <div className="col-xs-12">
            <Top>
              <img src={mail} title="aeroplane" alt="aeroplane" />
              <Title>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</Title>
            </Top>
            <Main>
              Электронный авиабилет — это, по сути, обычный билет на самолет, но
              только в менее привычном для путешественника виде. Вся информация
              об авиаперелете (данные пассажира, маршрут следования) хранится в
              электронной базе, а пассажир получает на руки маршрут-квитанцию.
              Некоторые пассажиры, купив авиабилет онлайн и получив
              маршрут-квитанцию, удивлены ее видом — это обыкновенный лист
              формата А4, на котором распечатана вся информация о предстоящем
              перелете. Однако это действительно официальный документ,
              подтверждающий договор между авиаперевозчиком и пассажиром. При
              регистрации на рейс пассажир должен предъявить маршрут-квитанцию
              вместе с удостоверением личности точно так же, как предъявляют
              обыкновенный бумажный билет. Следует отметить, что электронный
              билет, приобретенный онлайн, стоит дешевле своего бумажного
              аналога. <Link>Подробнее</Link>
            </Main>
          </div>
          <div className="col-xs-12">
            <Top>
              <img src={list} alt="" title="" />
              <Title>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</Title>
            </Top>
            <Main>
              Есть масса путеводителей по странам, но ни одного о том, как
              провести время в самолете. Для того, чтобы сделать ваш перелет
              максимально комфортным, мы написали 20 советов о подготовке к
              путешествию. Ведь настоящее путешествие начинается со слов «Добро
              пожаловать на борт нашего самолета»! <Link>Подробнее</Link>
            </Main>
          </div>
        </div>
      </div>
    </Article>
  );
}
