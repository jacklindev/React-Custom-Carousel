import React, { Children, useCallback } from "react";

import SvgArrowLeft from "../../Assets/svgs/arrow_left.svg";
import SvgArrowRight from "../../Assets/svgs/arrow_right.svg";

import { useCarousel } from "./useCarousel";

import "./style.scss";

const Carousel = ({
  visibleCount = 1,
  renderArrowPrev,
  renderArrowNext,
  children
}) => {
  const { styles, handlePrevClick, handleNextClick } = useCarousel({
    visibleCount,
    totalCount: Children.count(children)
  });

  const renderItems = useCallback(() => {
    return (
      <div className="custom-slider-container">
        <ul className="custom-slider-items" style={styles.ul}>
          {Children.map(children, (item, index) => {
            const slideProps = {
              key: `itemKey ${index}`,
              className: "custom-slider-items-li",
              style: styles.li
            };

            return <li {...slideProps}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }, [children, styles]);

  const renderLeftArrow = useCallback(() => {
    return (
      <div className="custom-slider-prev" onClick={handlePrevClick}>
        {renderArrowPrev || <img src={SvgArrowLeft} alt="svg-arrow-left" />}
      </div>
    );
  }, [renderArrowPrev, handlePrevClick]);

  const renderRightArrow = useCallback(() => {
    return (
      <div className="custom-slider-next" onClick={handleNextClick}>
        {renderArrowNext || <img src={SvgArrowRight} alt="svg-arrow-right" />}
      </div>
    );
  }, [renderArrowNext, handleNextClick]);

  return (
    <div className="custom-slider">
      {renderLeftArrow()}
      {renderItems()}
      {renderRightArrow()}
    </div>
  );
};

export default Carousel;
