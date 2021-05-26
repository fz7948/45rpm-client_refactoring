import React, { useEffect, useState } from 'react';
import '../../pages/sass/Header.scss';
import {
  loginModal,
  registerModal,
  closeModal,
  alertOpenModal,
  alertCloseModal,
} from '../../modules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';
import AlertModal from './AlertModal';

const Header = () => {
  const { checkModal, isType, login, alertCheck } = useSelector(
    ({ modal, auth }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      login: auth.login,
    }),
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(loginModal());
  };

  const openRegisterModal = () => {
    dispatch(registerModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={() => history.push('/')}>
          45RPM
        </div>
        <div className="buttonWrapper">
          <div className="signIn" onClick={openLoginModal}>
            로그인
          </div>
          <div className="signUp" onClick={openRegisterModal}>
            회원가입
          </div>
        </div>
        {isType === 'login' && (
          <LoginModal open={checkModal} close={shutModal}></LoginModal>
        )}
        {isType === 'register' && (
          <RegisterModal open={checkModal} close={shutModal}></RegisterModal>
        )}
      </header>
    </>
  );
};

export default Header;
