import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

const InquiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 5;
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
    width: 100%;
    height: 100%;
  }
`;

const InquiryCollection = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    padding-left: 0;
    margin-right: 2rem;
  }
`;
const InquiryRow = styled.div`
  display: flex;
  margin: 10px 0;
  display: flex;
  border-bottom: 0.7px solid lightgray;
  padding-bottom: 0.5rem;
  margin-right: 10rem;
  label {
    &:nth-child(1) {
      width: 10rem;
      height: 2.5rem;
      text-align: center;
      border: 1px solid black;
      padding-top: 0.4rem;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    border-bottom: 0.7px solid lightgray;
    padding-bottom: 0.5rem;
    margin-right: 1rem;
    label {
      &:nth-child(1) {
        width: 8rem;
        text-align: center;
        border: 1px solid black;
        margin-right: 2rem;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const common = css`
  font-family: 'Jua', sans-serif;
  font-size: 1.3rem;
  margin: 1rem;
  outline: none;
  background-color: #eee;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
    border: none;
  }
`;

const ButtonWrap = styled.button`
  ${common}
  width:13rem;
  height: 4rem;

  @media screen and (max-width: 768px) {
    width: 9rem;
    height: 3rem;
    font-size: 1rem;
  }
`;
const Button = styled.button`
  ${common}
  width:7rem;
  height: 4rem;

  @media screen and (max-width: 768px) {
    width: 4rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const View = ({ view }) => {
  const history = useHistory();
  console.log('뷰', view);
  return (
    <>
      {view.length > 0 && (
        <InquiryWrapper>
          <InquiryCollection>
            <InquiryRow>
              <label>작성자</label>
              <label>{view[0].userId}</label>
            </InquiryRow>
            <InquiryRow>
              <label>카테고리</label>
              <label>{view[0].category}</label>
            </InquiryRow>
            <InquiryRow>
              <label>제목</label>
              <label>{view[0].title}</label>
            </InquiryRow>
            <InquiryRow>
              <label>등록일</label>
              <label>{view[0].createdAt}</label>
            </InquiryRow>
            <InquiryRow>
              <label>내용</label>
              <label>{view[0].contents}</label>
            </InquiryRow>
          </InquiryCollection>
          <ButtonWrapper>
            <ButtonWrap onClick={() => history.goBack()}>
              목록으로 돌아가기
            </ButtonWrap>
          </ButtonWrapper>
        </InquiryWrapper>
      )}
    </>
  );
};

const ViewTable = ({ data }) => {
  return (
    <>
      <View view={data} key={data._id} />
    </>
  );
};

export default ViewTable;
