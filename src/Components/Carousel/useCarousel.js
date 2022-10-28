import { useState, useMemo, useCallback } from "react";

export const useCarousel = ({ visibleCount, totalCount }) => {
  const [selected, setSelected] = useState(0);

  const styles = useMemo(() => {
    return {
      ul: {
        transform: `translate3d(-${(100 / visibleCount) * selected}%, 0px, 0px)`
      },
      li: {
        minWidth: visibleCount > 0 ? `${100 / visibleCount}%` : "100%"
      }
    };
  }, [visibleCount, selected]);

  const handlePrevClick = useCallback(() => {
    setSelected((prev) => {
      if (prev === 0) {
        return totalCount - visibleCount;
      }

      return prev - 1;
    });
  }, [totalCount, visibleCount]);

  const handleNextClick = useCallback(() => {
    setSelected((prev) => {
      if (prev === totalCount - visibleCount) {
        return 0;
      }

      return prev + 1;
    });
  }, [totalCount, visibleCount]);

  return {
    styles,
    handlePrevClick,
    handleNextClick
  };
};
