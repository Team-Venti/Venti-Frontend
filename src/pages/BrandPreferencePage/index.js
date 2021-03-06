import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './styles';
import PreferenceItem from '../../components/PreferenceItem/index';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';

function BrandPreferencePage() {
  const [brandList, setBrandList] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const handleBrandImageClick = (e) => {
    if (brandList.includes(e.target.id)) {
      console.log('중복');
      setBrandList(brandList.filter((element) => element !== e.target.id));
      console.log(brandList.length);
    } else {
      setBrandList([...brandList, e.target.id]);
    }
    console.log(brandList);
  };
  const subscribeBrands = async () => {
    try {
      setError(null);
      setLoading(true);
      const params = {
        brand_id: brandList,
      };
      const res = await axios.post(
        API_BASE_URL + '/api/guest/mybrands/',
        params,
        {
          headers: {
            Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
          },
        }
      );

      console.log(res.data);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  const handleClickButton = () => {
    subscribeBrands();
    alert('선호 브랜드 등록이 완료되었습니다!');
    localStorage.removeItem(ACCESS_TOKEN);
    history.push('/log-in');
  };
  const getBrands = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await axios.get(API_BASE_URL + '/api/guest/brand_list/');

      console.log(res.data);
      setResponse(res.data.brand);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBrands();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  console.log(response);
  return (
    <S.MainContainer>
      <S.Exp>
        <name>이벤티</name>님이<br></br>선호하시는 브랜드를 알려주세요
        <br></br>
        <text>선택한 브랜드의 이벤트를 알림으로 받을 수 있어요</text>
      </S.Exp>
      <S.GridWrapper>
        {response.map((brand) => {
          return (
            <PreferenceItem
              id={brand.id}
              name={brand.name}
              img={brand.brand_logo_url}
              onClick={handleBrandImageClick}
            ></PreferenceItem>
          );
        })}
      </S.GridWrapper>
      <S.OpacityBox />
      <S.SelectButton
        disabled={brandList.length === 0}
        onClick={handleClickButton}
      >
        선택완료
      </S.SelectButton>
    </S.MainContainer>
  );
}

export default BrandPreferencePage;
