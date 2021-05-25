import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from './ModalStyle';
import styled from 'styled-components';
import { FaExclamation } from 'react-icons/fa';

const AlertCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -55px;
  left: 170px;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 1rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
`;

const AlertIcon = styled.div`
  font-size: 20px;
  color: red;
  position: relative;
  bottom: 20px;
`;

const AlertFont = styled.div`
  position: relative;
  bottom: 13px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
`;

const AlertModal = ({ openModal, closeModal, comment }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(openModal);

  useEffect(() => {
    if (localVisible && !openModal) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(openModal);
  }, [localVisible, openModal]);

  if (!animate && !localVisible) return null;

  return (
    <>
      <ModalBack disappear={!openModal}>
        <div className="modal_outsider" onClick={closeModal}></div>
        <ModalBox disappear={!openModal} alert>
          <AlertCloseBtn onClick={closeModal}>X</AlertCloseBtn>
          <AlertIcon>
            <FaExclamation />
          </AlertIcon>
          <AlertFont>{comment}</AlertFont>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default AlertModal;