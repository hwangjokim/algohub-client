import Arrow from "@/common/component/Carousel/Arrow";
import CarouselItem from "@/common/component/Carousel/Item";
import {
  carouselStyle,
  sliderWrapperStyle,
} from "@/common/component/Carousel/index.css";
import {
  type HTMLAttributes,
  type MutableRefObject,
  createContext,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  length: number;
}

type CarouselContextType = {
  length: number;
  currentIndex: number;
  itemRef: MutableRefObject<HTMLDivElement | null>;
};

export const CarouselContext = createContext<CarouselContextType>(
  {} as CarouselContextType,
);

const Carousel = ({ length, children }: CarouselProps) => {
  /** 인덱스: 0 ~ length - 1 */
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) => (prev + 4 < length ? prev + 4 : length - 1));
      });

      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handlePrev = () => {
    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) => (prev - 4 >= 0 ? prev - 4 : 0));
      });

      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <CarouselContext.Provider value={{ length, currentIndex, itemRef }}>
      <div className={carouselStyle}>
        <Arrow position="left" onClick={handlePrev} />

        <div className={sliderWrapperStyle}>{children}</div>

        <Arrow position="right" onClick={handleNext} />
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
