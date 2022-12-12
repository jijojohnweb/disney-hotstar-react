import React from 'react'
import styled from 'styled-components'
import VerticalCard from './VerticalCard'

// 168.35px is the card width
// 1rem(10px in html tag) is the gap between cards
// total length to scroll is 178.35px 

const CarouselTray = ({ data }) => {
  return (
    <CarouselTrayContainer>
      <h1>Latest</h1>
      <div className="controls">
        <div className='container'>
          <div className="slider">
            {data && data.map((item) => {
              return (
                <VerticalCard title={item.title || item.name} description={item.overview} image={item.poster} />
              )
            })}
          </div>
        </div>
        <div className="left"></div>
        <div className="right"></div>
      </div>

    </CarouselTrayContainer>
  )
}
const CarouselTrayContainer = styled.div`
  --left-space : 4.7rem;
  .container {
    display: flex;
    position: relative;
    overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
  }
  .slider {
    display: flex;
    padding-left: var(--left-space);
    padding-right: var(--left-space);
    gap: 1rem;
  }

  .left,.right {
    --size: 3rem;
    /* background-color: white; */
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .left::before {
    content: "";
    position: absolute;
    border-left: 2px solid red;
    border-bottom: 2px solid red;
    height: calc(10px);
    width: calc(10px);
    transform: rotate(50deg);
    margin-left: 8%;
  }
  .right::before {
    content: "";
    position: absolute;
    border-left: 2px solid red;
    border-bottom: 2px solid red;
    height: calc(10px);
    width: calc(10px);
    transform: rotate(225deg);
    margin-right: 8%;
  }
  /* position left and right arrows */
  .left {
    position: absolute;
    top: 50%;
    left: 1%;
  }
  .right {
    position: absolute;
    top: 50%;
    right: 1%;
  }
  /* fade effect */
  .controls {
    position: relative;
  }
  .controls::before,.controls::after {
    content: "";
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    z-index: 1;
  }
  .controls::before {
    left: 0;
    background: linear-gradient(to left, transparent, black)

    
  }
  .controls::after {
    right: 0;
    background: linear-gradient(to right, transparent, black)
  }

  @media only screen and (max-width: 768px){
    .left,.left::before,.left::after,
    .right,.right::before,.right::after,
    .controls::before,.controls::after {
      display: none;
    }

    .slider {
    padding-left: 10px;
    padding-right: 10px;
    gap: 0.4rem;
  }

  }
  @media only screen and (max-width: 426px) {
    
  }
  `;

export default CarouselTray
