import * as S from './styles';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function GridItem(props) {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  const event_id = 'whopper-event'; // 임시값. 서버에서 넘겨 받을 예정
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/event-detail/${event_id}`);
  };
  const handleHeartClick = (e) => {
    e.preventDefault();
    //setClicked(!clicked);

    setClicked(!clicked);
    if (!clicked) {
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);
    }
    //alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
  };
  /*
  useEffect(() => {
    if (clicked)
      alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
  }, [clicked]);
  */
  return (
    <>
      <S.GridItemContainer>
        <S.GridInnerContainer>
          <S.GridOverlay visible={props.isEnd}></S.GridOverlay>
        </S.GridInnerContainer>
        <S.GridInnerContainer>
          <S.GridImage src={props.img} onClick={handleClick} />
          <S.FirstRow>
            <S.EventName>6월 와퍼 할인 이벤트</S.EventName>
            <S.HeartIcon
              src={clicked ? '/img/clicked-heart.png' : '/img/heart.png'}
              onClick={handleHeartClick}
            />
          </S.FirstRow>
          <S.SecondRow>버거킹</S.SecondRow>
          <S.ThirdRow>D-5{'     '}조회 130회</S.ThirdRow>
        </S.GridInnerContainer>
      </S.GridItemContainer>
    </>
  );
}

export default GridItem;
