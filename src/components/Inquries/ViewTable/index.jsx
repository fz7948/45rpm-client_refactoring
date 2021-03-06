import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  questionUpdateReq,
  questionReplyReq,
  questionReplyUpdateReq,
} from '../../../modules/question';
import {
  closeModal,
  alertAnswerUpdateModal,
  alertAnswerReplyModal,
  answerUpdateModalStart,
} from '../../../modules/modal';
import AlertModal from '../../common/Modal/AlertModal';
import {
  InquiryWrapper,
  InputDetailStyle,
  InputDetailText,
  InquiryCollection,
  InquiryRow,
  ButtonWrap,
  ButtonWrapper,
  DivDetailText,
} from './styles';

const View = ({ view }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { admin, token, isType, alertCheck } = useSelector(
    ({ user, modal }) => ({
      token: user.token,
      admin: user.admin,
      isType: modal.isType,
      alertCheck: modal.alertCheck,
    }),
  );

  useEffect(() => {
    if (view.reply) {
      setDetailReply(view[0].reply.replyText);
    }
  }, []);

  const [detailID, setDetailID] = useState(view[0].userId);
  const [detailCategory, setDetailCategory] = useState(view[0].category);
  const [detailTitle, setDetailTitle] = useState(view[0].title);
  const [detailCreatedAt, setDetailCreatedAt] = useState(view[0].createdAt);
  const [detailContent, setDetailCotent] = useState(view[0].contents);
  const [detailReply, setDetailReply] = useState(view[0].reply);
  const [detailReplyCheck, setDetailReplyCheck] = useState(view[0].replyCheck);
  const [inputType, setinputType] = useState(false);

  const handleChangeID = useCallback(
    (e) => {
      setDetailID(e.view[0].userId);
    },
    [detailID],
  );

  const handleChangeCategory = useCallback(
    (e) => {
      setDetailCategory(e.target.value);
    },
    [detailCategory],
  );

  const handleChangeTitle = useCallback(
    (e) => {
      setDetailTitle(e.target.value);
    },
    [detailTitle],
  );

  const handleChangeCreatedAt = useCallback(
    (e) => {
      setDetailCreatedAt(e.view[0].createdAt);
    },
    [detailCreatedAt],
  );

  const handleChangeContent = useCallback(
    (e) => {
      setDetailCotent(e.target.value);
    },
    [detailContent],
  );

  const handleChangeReply = useCallback(
    (e) => {
      setDetailReply(e.target.value);
    },
    [detailReply],
  );

  const shutModal = () => {
    dispatch(closeModal());
  };

  const detailUpdateStart = () => {
    dispatch(answerUpdateModalStart());
    setinputType(true);
  };

  const detailUpdateEnd = () => {
    dispatch(questionUpdateReq(view[0]._id, detailTitle, detailContent, token));
    dispatch(alertAnswerUpdateModal());
    setinputType(false);
  };

  const detailReplyHandler = () => {
    if (detailReplyCheck === false) {
      setDetailReplyCheck(true);
      dispatch(questionReplyReq(token, view[0]._id, detailReply, true));
    }
    if (detailReplyCheck === true) {
      setDetailReplyCheck(true);
      dispatch(questionReplyUpdateReq(token, view[0]._id, detailReply, true));
    }
    dispatch(alertAnswerReplyModal());
  };

  return (
    <>
      {isType === 'alertAnswerUpdate' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'?????? ?????????????????????.'}
        />
      )}
      {isType === 'alertAnswerStart' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'?????? ????????? ?????? ????????????.'}
        />
      )}
      {isType === 'alertAnswerReply' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'?????? ?????????????????????.'}
        />
      )}
      {admin ? (
        <InquiryWrapper>
          <InquiryCollection>
            <InquiryRow>
              <label> ????????? </label>
              <InputDetailStyle
                type="text"
                value={detailID}
                onChange={handleChangeID}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> ???????????? </label>
              <InputDetailStyle
                type="text"
                value={detailCategory}
                onChange={handleChangeCategory}
                readOnly
              />
            </InquiryRow>

            <InquiryRow>
              <label> ????????? </label>
              <InputDetailStyle
                date
                type="text"
                value={detailCreatedAt}
                onChange={handleChangeCreatedAt}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> ?????? </label>
              <InputDetailStyle
                type="text"
                value={detailTitle}
                onChange={handleChangeTitle}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label>??????</label>
              <DivDetailText
                dangerouslySetInnerHTML={{ __html: detailContent }}
              ></DivDetailText>
            </InquiryRow>
            <InquiryRow>
              <label>??????</label>
              <InputDetailText
                type="text"
                value={detailReply}
                onChange={handleChangeReply}
              />
            </InquiryRow>
          </InquiryCollection>
          <ButtonWrapper>
            <ButtonWrap onClick={() => history.push('/inquiry')}>
              ???????????? ????????????
            </ButtonWrap>
            <ButtonWrap onClick={detailReplyHandler}> ???????????? </ButtonWrap>
          </ButtonWrapper>
        </InquiryWrapper>
      ) : (
        <InquiryWrapper>
          <InquiryCollection>
            <InquiryRow>
              <label> ????????? </label>
              <InputDetailStyle
                type="text"
                value={detailID}
                onChange={handleChangeID}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> ???????????? </label>
              <InputDetailStyle
                type="text"
                value={detailCategory}
                onChange={handleChangeCategory}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> ????????? </label>
              <InputDetailStyle
                type="text"
                value={detailCreatedAt}
                onChange={handleChangeCreatedAt}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> ?????? </label>
              {inputType ? (
                <InputDetailStyle
                  update
                  type="text"
                  value={detailTitle}
                  onChange={handleChangeTitle}
                />
              ) : (
                <InputDetailStyle
                  update
                  type="text"
                  value={detailTitle}
                  onChange={handleChangeTitle}
                  readOnly
                />
              )}
            </InquiryRow>
            <InquiryRow>
              <label>??????</label>
              {inputType ? (
                <InputDetailText
                  type="text"
                  value={detailContent}
                  onChange={handleChangeContent}
                />
              ) : (
                <DivDetailText
                  dangerouslySetInnerHTML={{ __html: detailContent }}
                ></DivDetailText>
              )}
            </InquiryRow>
            {detailReply.length === 0 && (
              <InquiryRow replyReady>
                <label>?????? ?????????</label>
                <InputDetailText
                  ready
                  type="text"
                  value="????????? ???????????? ????????????. ????????? ?????????????????? !"
                  onChange={handleChangeReply}
                  readOnly
                />
              </InquiryRow>
            )}
            {detailReply.length !== 0 && (
              <InquiryRow replyConfirm>
                <label>?????? ??????</label>
                <InputDetailText
                  type="text"
                  value={detailReply}
                  onChange={handleChangeReply}
                  readOnly
                />
              </InquiryRow>
            )}
          </InquiryCollection>
          <ButtonWrapper>
            <ButtonWrap onClick={() => history.push('/inquiry')}>
              ???????????? ????????????
            </ButtonWrap>
            {inputType ? (
              <ButtonWrap onClick={detailUpdateEnd}> ???????????? </ButtonWrap>
            ) : (
              <ButtonWrap onClick={detailUpdateStart}> ???????????? </ButtonWrap>
            )}
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
