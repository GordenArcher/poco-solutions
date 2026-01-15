import React from 'react';
import styled from 'styled-components';

const Hamburger = ({ openSide, isSideOpen }) => {
  return (
    <StyledWrapper>
      <div>
        <input id="checkbox2" type="checkbox" checked={isSideOpen} readOnly />
        <label className="toggle toggle2" htmlFor="checkbox2" onClick={openSide}>
          <div id="bar4" className={`bars ${isSideOpen ? 'rotate45' : ''}`} />
          <div id="bar5" className={`bars ${isSideOpen ? 'scaleX0' : ''}`} />
          <div id="bar6" className={`bars ${isSideOpen ? 'rotateNeg45' : ''}`} />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #checkbox2 {
    display: none;
  }

  .toggle2 {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition-duration: .5s;
  }

  .bars {
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 6px;
    transition-duration: .5s;
  }

.scaleX0 {
  transform: translateX(50px); /* Moves it completely out of view */
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.rotate45 {
  transform: rotate(45deg) translate(11px, 10px);
  transition: transform 0.3s ease;
}

.rotateNeg45 {
  transform: rotate(-45deg) translate(11px, -10px);
  transition: transform 0.3s ease;
}
`;

export default Hamburger;
