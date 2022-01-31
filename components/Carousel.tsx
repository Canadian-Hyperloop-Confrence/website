import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import useScreenSize from '../hooks/screen-size';

const Clickable = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  // right: 390px;
  ${Clickable} {
    margin-right: 16px;
    margin-left: 16px;
  }
  overflow-x: hidden;
  padding-bottom: 16px;
  max-width: calc(min(850px, 100vw));
`;

const CarouselLeft = styled.img.attrs({ src: '/carousel-left.svg'})`
  cursor: pointer;
  position: absolute;
  left: -70px;
  top: 50%;
`;

const CarouselRight = styled.img.attrs({ src: '/carousel-right.svg'})`
  cursor: pointer;
  position: absolute;
  right: -70px;
  top: 50%;
`;

const Parent = styled.div`
  position: relative;
`;

function getThree<T>(array: Array<T>, centerIndex: number): Array<T> {
  if (centerIndex === 0 ) {
    return [array[array.length-1] , array[centerIndex], array[(centerIndex + 1) % array.length]]
  }
  return [array[centerIndex-1] , array[centerIndex], array[(centerIndex + 1) % array.length]]
}

function CarouselItemContainer({
  children,
  onSelected,
}: {
  children: React.ReactNode,
  onSelected: () => void,
}): React.ReactElement {
  return (
    <Clickable onClick={onSelected}>
      {children}
    </Clickable>
  );
}

function scrollDirection(deltaX: number): 'right' | 'left' | '' {
  if (deltaX > 15 && deltaX < 30) return 'right';
  else if (deltaX < -15 && deltaX > -30) return 'left';
  else return '';
}

function Carousel<T>({
  Component,
  items
} : {
  Component: React.FunctionComponent<{item: T}>,
  items: Array<T>
}): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { width: windowWidth } = useScreenSize();

  const handleItemSelected = (index: number) => () => {
    console.log(index);
    setActiveIndex(index);
  }

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex])

  const moveCarousel = useCallback((direction: 'left' | 'right' | '') => {
    switch (direction) {
      case 'right':
        setActiveIndex((prev) => (prev + 1) % items.length);
        break;
      case 'left':
        setActiveIndex((prev) => {
          const newValue = prev - 1;
          if (newValue === -1) {
            return items.length - 1
          }
          return newValue
        });
        break;
    }
  }, [setActiveIndex]);
  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      const {
        deltaX
      } = e;
      // console.log(deltaX)
      const direction = scrollDirection(deltaX);
      moveCarousel(direction);
    }
    let touchStart = 0;
    let touchEnd = 0;
    const handleSwipe = () => {
      if (touchStart < touchEnd) {
        moveCarousel('left')
      }
      if (touchEnd < touchStart) {
        moveCarousel('right')
      }
    }
    const handleSwipeStart = (e: TouchEvent) => {
      touchStart = e.changedTouches[0].screenX;
    }
    const handleSwipeEnd = (e: TouchEvent) => {
      touchEnd = e.changedTouches[0].screenX;
      handleSwipe()
    }
    if (containerRef.current) {
      containerRef.current.addEventListener('wheel', handleWheel);
      containerRef.current.addEventListener('touchstart', handleSwipeStart);
      containerRef.current.addEventListener('touchend', handleSwipeEnd);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleWheel);
        containerRef.current.removeEventListener('touchstart', handleSwipeStart);
        containerRef.current.removeEventListener('touchend', handleSwipeEnd);

      }
    }
  }, [items, moveCarousel])

  const carouselElements = useMemo(() => items.map((item, index) => (
    <CarouselItemContainer
      key={index}
      onSelected={handleItemSelected(index)}
    >
      <Component item={item} />
    </CarouselItemContainer>
  )), [items]);

  const carouselItems = useMemo(() => getThree(carouselElements, activeIndex), [activeIndex, carouselElements]);
  return (
    <Parent>
      <Container ref={containerRef}>
        {carouselItems}
      </Container>
      { windowWidth > 1000 && (<>
        <CarouselLeft  onClick={() => moveCarousel('left')}/>
        <CarouselRight onClick={() => moveCarousel('right')} />
      </>)}
    </Parent>
  );
};

export default Carousel;
