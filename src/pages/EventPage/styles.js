import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterButton = styled.img`
  position: absolute;
  right: 1.067rem;
  bottom: 0;
  width: 1.233rem;
  height: 1.233rem;
`;

export const CategoryUnderLine = styled.div`
  width: 100%;
  height: 0;
  margin-top: 0.533rem;
  border: 0.067rem solid #f0f0f0;
`;

export const BlackOverlay = styled.div`
  display: ${(props) => (props.visible ? '' : 'none')};
  position: fixed;
  width: 25rem;
  height: 100%;
  background: rgba(64, 64, 64, 0.49);
  z-index: 100;
`;

export const FilterContainer = styled.div`
  position: fixed;
  background: white;
  //top: 13.733rem;
  bottom: 0;
  width: 25rem;
  height: 74.87%;
  //height: 40.533rem;
  //height: 100%;
  //height: 70.2133vw;
  border-radius: 1rem 1rem 0 0;
  //display: ${(props) => (props.visible ? 'flex' : 'none')};
  display: flex;
  transform: ${(props) =>
    props.visible ? 'translateX(0)' : 'translateY(100%)'};
  transition: transform 0.3s ease-in-out;
  //-ms-overflow-style: none;
  flex-direction: column;
  z-index: 200;
  overflow-y: scroll;
  //-ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TextAndButton = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 1.733rem;
  margin-right: 1.067rem;
  margin-left: 1.067rem;
  margin-bottom: 1.267rem;
`;

export const TopText = styled.div`
  position: absolute;
  left: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 1.267rem;
  color: black;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 0;
  width: 1.6rem;
  height: 1.6rem;
`;

export const TopGreyLine = styled.div`
  width: 25rem;
  height: 0;
  background: #d3d3d3;
  border: 0.01px solid #d3d3d3;
  margin-top: 1.267rem;
  margin-bottom: 1.1rem;
`;
export const BottomGreyLine = styled.div`
  width: 25rem;
  height: 0;
  background: #d3d3d3;
  border: 0.01px solid #d3d3d3;
`;
export const FilterItemContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};

  flex-direction: row;
  width: 100%;
  padding-top: 1.133rem;
  padding-right: 0.633rem;
  padding-left: 0.633rem;
  padding-bottom: 5rem;
  flex-flow: wrap;
`;
export const FilterItem = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9667rem;
  padding: 0.867rem 1.5rem;
  //background: #eeeeee;
  border-radius: 3.333rem;
  margin: 0.467rem 0.433rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  //align-items: center;
  //align-items: flex-end;
`;

export const Button = styled.button`
  width: 9.067rem;
  height: 2.8rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: white;
  display: ${(props) => (props.visible ? '' : 'none')};
  background: ${(props) => (props.disabled ? '#b3b3b3' : '#f40552')};
  border-radius: 0.667rem;
  border: none;
  margin-top: 1.333rem;
  margin-bottom: 1.333rem;
  margin-left: 15rem;
`;

export const NoEventMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 20rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.933rem;
`;
