import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import pobeda from "./assets/pobeda.png";
import lufthansa from "./assets/lufthansa.png";
import certif from "./assets/certif.png";

const Offers = styled.section`
  padding-top: 24px;
  padding-top: 24px;
  background: linear-gradient(106.41deg, #00b0de -42.02%, #196ebd 57.98%);

  @media screen and (max-width: 576px) {
    padding-top: 16px;
    padding-bottom: 24px;
    background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  }
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 576px) {
    margin-bottom: 24px;
    font-size: 28px;
  }
`;

const Card = styled.div`
  margin-bottom: 12px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: #cd2027;
  padding: 12px 16px;
`;

const CardName = styled.div`
  font-size: 16px;
  line-height: 38px;
  color: #fff;
  &:after {
    background-size: 38px 38px;
    background-repeat: no-repeat;
    background-image: url(${certif});
    background-position: 50% 50%;
    z-index: 2;
  }
`;

const CardInfo = styled.div`
  background: #fff;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Img = styled.img`
  width: 122px;
  margin-top: 22px;
`;

const Price = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5c5c5c;
  text-align: right;
  margin: 18px 0 0 0;
`;

const Span = styled.span`
  font-size: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Day = styled.p`
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
  margin: 10px 0 0 0;
`;

const Description = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #242424;
  margin-top: 17px;
`;

const PriceWrapper = styled.div``;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
  margin-top: 27px;
  margin-bottom: 16px;
  padding: 10px 92px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Certificate = styled.img``;

const Link = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: underline;
`;

const UnderText = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0;
`;

export default function() {
  return (
    <Offers>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
          <div className="col-xs-12 col-md-4">
            <Card>
              <CardHeader>
                <CardName>Билеты от 499 рублей!</CardName>
              </CardHeader>
              <CardInfo>
                <Wrapper>
                  <Img src={pobeda} alt="pobeda" />
                  <PriceWrapper>
                    <Price>
                      от{" "}
                      <Span>
                        499 ₽<br />
                      </Span>
                      <Day>Осталось 45 дней</Day>
                    </Price>
                  </PriceWrapper>
                </Wrapper>
                <Description>
                  Билеты от 499 рублей!Специальное предложение от авиакомпании
                  Победа
                </Description>
                <Button>Узнать подробности</Button>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12 col-md-4">
            <Card>
              <CardHeader>
                <CardName>В Нью-Йорк от 20 680 ₽</CardName>
              </CardHeader>
              <CardInfo>
                <Wrapper>
                  <Img src={lufthansa} alt="pobeda" />
                  <PriceWrapper>
                    <Price>
                      от{" "}
                      <Span>
                        499 ₽<br />
                      </Span>
                      <Day>Осталось 19 дней</Day>
                    </Price>
                  </PriceWrapper>
                </Wrapper>
                <Description>
                  Из Москвы в США от 20680 рублей! Специальное<br /> предложение
                  от авиакомпании Lufthansa
                </Description>
                <Button>Узнать подробности</Button>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12 col-md-4">
            <Card>
              <CardHeader>
                <CardName>Билеты от 20 360 рублей!</CardName>
              </CardHeader>
              <CardInfo>
                <Wrapper>
                  <Img src={lufthansa} alt="pobeda" />
                  <PriceWrapper>
                    <Price>
                      от{" "}
                      <Span>
                        499 ₽<br />
                      </Span>
                      <Day>Осталось 19 дней</Day>
                    </Price>
                  </PriceWrapper>
                </Wrapper>
                <Description>
                  Из Москвы в США от 22360 рублей! Специальное<br /> предложение
                  от авиакомпании Lufthansa
                </Description>
                <Button>Узнать подробности</Button>
              </CardInfo>
            </Card>
          </div>
          <div className="col-xs-12">
            <Text>
              <Link>Смотреть все спецпредложения</Link>
              <UnderText>* средняя цена по направлению</UnderText>
            </Text>
          </div>
        </div>
      </div>
    </Offers>
  );
}
