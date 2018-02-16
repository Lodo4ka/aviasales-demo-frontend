import React from "react";
import styled, { css } from "styled-components";
import "flexboxgrid2";
import logo from "./assets/logo.svg";
import calendarheader from "./assets/calendarheader.svg";
import aero from "./assets/aero.svg";
import arrow from "./assets/arrow.svg";
import dropdown from "./assets/dropdown.svg";

const Header = styled.header`
  display: flex;
  padding-bottom: 88px;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );

  @media (max-width: 768px) {
    padding-bottom: 122px;
  }
  @media (max-width: 992px) {
    padding-bottom: 254px;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  margin-top: 47px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-top: 83px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
    margin-top: 215px;
  }
`;

// *************

const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const InputLine = styled.div`
  position: relative;
  flex-grow: 1;
  lex-basis: 100%;
  margin-top: 2px;
  background-color: #fff;
  padding: 18px 16px;
`;

const FirstInputLine = styled.div`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  position: relative;
  flex-grow: 1;
  lex-basis: 100%;
  margin-top: 2px;
  background-color: #fff;
  padding: 18px 16px;
`;

const Input = styled.input`
  border: none;
  width: 200px;
  font-size: 16px;
  line-height: 20px;
`;

/* **************** */

const Select = styled.select``;

const SearchButton = styled.button`
  margin-top: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 24px;
  line-height: 28px;
  font-weight: 900;
  color: #fff;
  background-color: #ff9241;

  &:after {
    content: "";
    position: relative;
    top: 2px;
    display: inline-block;
    width: 26px;
    height: 21px;
    background-image: url(${aero});
  }
`;

const Mow = styled.span`
  position: absolute;
  right: 43px;
  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
`;

const LogoLink = styled.a`
  display: inline-block;
  margin-top: 12px;
`;

const Arrow = styled.button`
  position: absolute;
  right: 16px;
  display: inline-block;
  width: 16px;
  height: 18px;
  border: none;
  background: none;
  background-image: url(${arrow});
`;

const Completed = styled.span`
  position: absolute;
  right: 43px;
  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
`;

const Date = styled.div`
  display: flex;
`;

const DateWrap = InputLine.extend`
  &:first-of-type {
    margin-right: 2px;
    border-radius: 0;
  }
`;

const DateInputBtn = styled.button`
  position: absolute;
  right: 16px;
  border: none;
  width: 17px;
  height: 20px;
  background: none;
  background-image: url(${calendarheader});
`;

const DateInput = Input.extend`
  width: 100px;
`;

const PassengerButton = styled.button`
  margin-top: 2px;
  padding: 18px 16px;
  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: left;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-color: #fff;
`;

const Value = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
`;

const ValueAdd = styled.span`
  color: #a0b0b9;
`;

const SearchButtonTitle = styled.span`
  margin-right: 16px;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12">
            <LogoLink>
              <img src={logo} alt="logo" className="AviaLogo" />
            </LogoLink>
            <Title>Поиск дешевых авиабилетов</Title>
          </div>

          <div className="col-xs-12 col-sm-offset-1 col-sm-10">
            <Form>
              <FirstInputLine>
                <Input type="text" placeholder="Москва" />
                <Mow>MOW</Mow>
                <Arrow />
              </FirstInputLine>
              <InputLine>
                <Input
                  type="text"
                  name="to"
                  placeholder="Город прибытия"
                  value=""
                />
                <Completed />
              </InputLine>

              <Date>
                <DateWrap>
                  <DateInput type="text" placeholder="Туда" />
                  <DateInputBtn />
                </DateWrap>
                <DateWrap>
                  <DateInput type="text" placeholder="Обратно" />
                  <DateInputBtn />
                </DateWrap>
              </Date>
              <PassengerButton>
                <Value>1 пассажир, </Value>
                <ValueAdd>эконом</ValueAdd>
              </PassengerButton>
              <SearchButton>
                <SearchButtonTitle>Найти билеты</SearchButtonTitle>
              </SearchButton>
            </Form>
          </div>
        </div>
      </div>
    </Header>
  );
}
