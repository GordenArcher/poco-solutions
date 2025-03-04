import styled from 'styled-components';

const Button = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="btn">{text}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    color: #103e91;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #103e91;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 17px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 1s;
    overflow: hidden;
    z-index: 10;
  }

  .btn:hover {
    color: white;
  }

  .btn::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: #103e91;
    z-index: -1;
    transition: all 1s;
  }

  .btn:hover::before {
    width: 160%;
  }`;

export default Button;
