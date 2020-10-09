import React, { useState, useEffect, createRef } from "react";

import { dataDummy } from "../../utils/dataDummy";

import {
  CarouselContainer,
  ControlDotsContainer,
  ControlArrowContainer,
  ImageCarouselContainer,
} from "./carousel.styled";

const Carousel = () => {
  const [onControlDots, setOnControlDots] = useState("control-dots-off");
  const [translateCard, setTranslateCard] = useState(0);
  const [dotsRefs, setDotsRefs] = useState([]);
  const [idxCard, setIndexCard] = useState(0);
  const [onButtonLeft, setOnButtonLeft] = useState(false);
  const [onButtonRight, setOnButtonRight] = useState(true);

  const dataLength = dataDummy.length;

  useEffect(() => {
    setDotsRefs((dotsRefs) =>
      Array(dataLength)
        .fill()
        .map((e, i) => dotsRefs[i] || createRef())
    );

    if (dotsRefs.length > 0) {
      switch (idxCard) {
        case 0:
          setTranslateCard(0);
          setOnButtonLeft(false);
          setOnButtonRight(true);
          break;
        case 1:
          setTranslateCard(-300);
          setOnButtonLeft(true);
          setOnButtonRight(true);
          break;
        case 2:
          setTranslateCard(-600);
          setOnButtonLeft(true);
          setOnButtonRight(true);
          break;
        case 3:
          setTranslateCard(-900);
          setOnButtonLeft(true);
          setOnButtonRight(false);
        default:
      }
    }
  }, [idxCard]);

  console.log(onButtonLeft);
  console.log(onButtonRight);

  const ControlDots = ({ data }) =>
    data.map((elem, idx) => {
      return idxCard === 0 ? (
        <div
          key={`control-dots-${idx}`}
          id={idx}
          className={`${idx === 0 ? "control-dots-on" : onControlDots}`}
          ref={dotsRefs[idx]}
          onClick={() => {
            setIndexCard(idx);
          }}
        />
      ) : (
        <div
          key={`control-dots-${idx}`}
          id={idx}
          className={`${idx === idxCard ? "control-dots-on" : onControlDots}`}
          ref={dotsRefs[idx]}
          onClick={() => {
            setIndexCard(idx);
          }}
        />
      );
    });

  const ImageCarousel = ({ data }) =>
    data.map((elem, idx) => (
      <div className="image-card">
        <div className="circle-image">
          <p>{idx + 1}</p>
        </div>
        <img key={idx} className="carousel-image" src={elem.img} />
      </div>
    ));

  const ControlArrowLeft = () =>
   (
    !onButtonLeft ? (
      <div className={`control-arrow-left-off`} />
    ) : (
      <div className={`control-arrow-left-on`} onClick={() => {
        setIndexCard(idxCard-1)
      }}/>
    )
   ) ;

    const ControlArrowRight = () => (
      !onButtonRight ? ( <div className="control-arrow-right-off" />) : ( <div className="control-arrow-right-on" onClick={() => {
        setIndexCard(idxCard+1)
      }}  />)
    )
  return (
    <CarouselContainer>
      <div className="controls-section">
        <p className="controls-title">
          Nuestras<span className="controls-title-emphasis"> Raquetas</span>
        </p>
        <p className="controls-description">
          Conoce nuestras raquetas y aprende a jugar Tennis como un profesional.
        </p>
        <ControlDotsContainer>
          <ControlDots data={dataDummy} />
        </ControlDotsContainer>
        <ControlArrowContainer>
          <ControlArrowLeft />
          <ControlArrowRight />
        </ControlArrowContainer>
      </div>
      <ImageCarouselContainer translatePosX={translateCard}>
        <ImageCarousel data={dataDummy} />
      </ImageCarouselContainer>
    </CarouselContainer>
  );
};

export default Carousel;
