import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Privacy = ({ setShowPolicy }) => {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className="!p-6 fixed inset-0 z-9999 bg-[#0000006c] flex items-center justify-center"
    >
      <StyledWrapper>
        <div className="card">
          <div className="card-wrapper">
            <div className="card-icon">
              <div className="icon-cart-box">
                <svg viewBox="0 0 512 512" width={25} height={25} xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" fill="#ffffff" />
                </svg>
              </div>
            </div>
            <div className="card-content">
              <div className="card-title-wrapper">
                <span className="card-title">Privacy</span>
                <span className="card-action" onClick={() => setShowPolicy(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </span>
              </div>
              <div className="card-text">
                <p className="text-lg">
                  This website values your privacy. Please review our privacy policy to understand how we protect your personal information.
                </p>
              </div>
              <Link to={'/privacy-policy'} type="button" className="btn-accept">Read More</Link>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </motion.div>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 420px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .card-wrapper {
    display: flex;
    align-items: center;
  }

  .card-icon {
    flex: 0 0 60px;
    text-align: center;
  }

  .icon-cart-box {
    background-color: #2196f3;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-content {
    flex: 1;
    padding-left: 20px;
  }

  .card-title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
  }

  .card-action {
    cursor: pointer;
    fill: rgba(0, 0, 0, 0.4);
    transition: fill 0.3s ease;
  }

  .card-action:hover {
    fill: rgba(0, 0, 0, 0.8);
  }

  .card-text {
    font-size: 0.9em;
    color: #757575;
    padding: 15px 0;
  }

  .btn-accept {
    display: inline-block;
    font-size: 1em;
    font-weight: 600;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #2196f3;
    color: white;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn-accept:hover {
    background-color: #1976d2;
  }
`;

export default Privacy;
