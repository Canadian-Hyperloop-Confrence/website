import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

const Clickable = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 390px;
  ${Clickable} {
    margin-right: 8px;
    margin-left: 8px;
  }
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 16px;
`;


function getFive<T>(array: Array<T>, centerIndex: number): Array<T> {
  if (centerIndex === 0 ) {
    return [array[array.length-2], array[array.length-1] , array[centerIndex], array[(centerIndex + 1) % array.length], array[(centerIndex + 2) % array.length]]
  }
  if (centerIndex === 1) {
    return [array[array.length-1], array[0] , array[centerIndex], array[(centerIndex + 1) % array.length], array[(centerIndex + 2) % array.length]]
  }
  return [array[centerIndex-2], array[centerIndex-1] , array[centerIndex], array[(centerIndex + 1) % array.length], array[(centerIndex + 2) % array.length]]
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

function Carousel<T>({
  Component,
  items
} : {
  Component: React.FunctionComponent<{item: T}>,
  items: Array<T>
}): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleItemSelected = (index: number) => () => {
    console.log(index);
    setActiveIndex(index);
  }
  const carouselElements = useMemo(() => items.map((item, index) => (
    <CarouselItemContainer
      key={index}
      onSelected={handleItemSelected(index)}
    >
      <Component item={item} />
    </CarouselItemContainer>
  )), [items]);

  const carouselItems = useMemo(() => getFive(carouselElements, activeIndex), [activeIndex, carouselElements]);
  return (
    <Container>
      {carouselItems}
    </Container>
  );
};

export default Carousel;
