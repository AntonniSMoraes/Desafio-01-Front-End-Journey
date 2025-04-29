import React from 'react';
import * as S from './styes';
import pc from '../../res/image/pc.png';
import { Button } from '../../components/button';


const buttonDimensions = {
  width: '180px',
  height: '60px',
}

export const Home = () => {
  return (
    <S.Wrapper>
        <S.LeftSide>
            <S.Title>Stand Out<br/> from The<br/>Crowd.</S.Title>
            <S.Text>Agency is a full-service agency, busy designing<br/>
                and building beautiful digital products, brands,<br/>
                and experiences.</S.Text>
                <Button handleClick={null} color={'primary'} text='Get Started' dimensions={buttonDimensions}/>
        </S.LeftSide>
        <S.PcImage src={pc} alt="pc-image" />
    </S.Wrapper>
  );
}