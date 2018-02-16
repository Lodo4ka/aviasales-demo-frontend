import React from "react";
import styled, { css } from "styled-components";
import "flexboxgrid2";
import compas from "./assets/compas.svg";
import edit from "./assets/edit.svg";
import planet from "./assets/planet.svg";
import palma from "./assets/palma.svg";
import bag from "./assets/bag.svg";
import culture from "./assets/culture.svg";
import bar from "./assets/bar.svg";
import kids from "./assets/kids.svg";
import planetsmall from "./assets/planetsmall.svg";

const Destination = styled.div`
  background: #f8fcff;
  padding-top: 40px;
`;

const MainImage = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  display: flex;
`;

const Title = styled.h2`
  font-weight: 700;
  color: #4a4a4a;
  text-align: center;
  line-height: 24px;
  font-size: 20px;
  margin-bottom: 56px;
`;

const City = styled.div`
  margin-top: 5px;
  margin-left: 8px;
  font-size: 20px;
  color: #00ace2;
  display: inline-block;
  font-weight: 400;
  position: relative;
  &:after {
    content: "";
    background-image: url(${edit});
    margin-left: 5px;
    margin-top: 5px;
    width: 15px;
    height: 15px;
    position: absolute;
    background-repeat: no-repeat;
  }
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 576px) {
    display: block;
    text-align: center;
  }
`;

const TitleSection = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 48px;
`;

const ImageFirst = styled.img`
  height: 65px;
  margin-bottom: -10px;
  margin-top: -8px;
`;

const Link = styled.a`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 24px;
  color: #00ace2;
`;

const ButtonCard = styled.button`
  border: none;
  background: none;
  text-align: center;
`;

export default function() {
  return (
    <Destination>
      <TitleSection>
        <MainImage src={compas} alt="compas" />
      </TitleSection>
      <div className="container">
        <div className="row">
          <div className="
              col-xs-offset-1
              col-xs-10
              col-sm-offset-2
              col-sm-8
              col-lg-offset-4
              col-lg-4">
            <Title>
              Популярные направления перелетов из города
              <City>Москва</City>
            </Title>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-4 col-sm-2">
            <ButtonCard>
              <ImageFirst src={planet} />
              <Link>
                куда <br />угодно
              </Link>
            </ButtonCard>
          </div>
          <div className="col-xs-4 col-sm-2">
            <ButtonCard>
              <Image src={palma} />
              <Link>
                солнце <br />и море
              </Link>
            </ButtonCard>
          </div>
          <div className="col-xs-4 col-sm-2">
            <ButtonCard>
              <Image src={bag} />
              <Link>
                шопинг,<br /> город
              </Link>
            </ButtonCard>
          </div>
          <div className="col-xs-4 col-sm-2">
            <ButtonCard>
              <Image src={culture} />
              <Link>
                культура <br />и история
              </Link>
            </ButtonCard>
          </div>
          <div className="col-xs-4 col-sm-2">
            <ButtonCard>
              <Image src={bar} />
              <Link>
                ночная <br />жизнь
              </Link>
            </ButtonCard>
          </div>
          <div className="col-xs-4 col-sm-2">
            <ButtonCard>
              <Image src={kids} />
              <Link>
                отдых <br />с детьми
              </Link>
            </ButtonCard>
          </div>
        </div>
      </div>
    </Destination>
  );
}
