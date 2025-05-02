import { useState } from 'react';
import { CircleButton } from '../../components/circleButton';
import { colors } from '../../constants/format';
import seta from '../../res/image/seta.png';
import logo from '../../res/image/logo.svg';
import * as S from './styles';

const buttonDimensions = {
    width: '50px',
    height: '50px',
  }

export const WhatWeDo = () => {
    const [clicked, setClicked] = useState(false);
    
    return (
        <S.Wrapper>
            <div style={{display: 'flex', width: '100%'}}>
                <div style={{width: '20%', display: 'flex', flexDirection: 'column', gap: '20rem'}}>
                    <S.Logo>
                            <img src={logo} alt="Logo" />
                    </S.Logo>
                </div>
                <div style={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <S.Header>
                        <S.HeaderTitle>
                            <S.HeaderText style={{color: colors.primary, paddingRight:'4rem'}}>02.</S.HeaderText>
                            <S.HeaderText style={{color: colors.primary}}>What We Do</S.HeaderText>
                        </S.HeaderTitle>
                        <S.HeaderButton>
                            <CircleButton 
                                click={() => setClicked(!clicked)}
                                name={<img src={seta} alt="seta" style={{
                                    filter: clicked ? 'invert(1) brightness(0.5)' : 'none'
                                }}/>}
                                color={clicked ? 'white' : colors.background}
                                dimensions={buttonDimensions}/>
                            <CircleButton 
                                click={() => setClicked(!clicked)}
                                name={
                                    <img src={seta} alt="seta" style={{
                                        transform: 'rotate(180deg)',
                                        filter: !clicked ? 'invert(1) brightness(0.5)' : 'none'
                                    }}/>}
                                color={!clicked ? 'white' : colors.background}
                                dimensions={buttonDimensions}/>
                        </S.HeaderButton>
                    </S.Header>
                </div>
            </div>
            <S.Title style={{
                color: colors.background,
                marginLeft: '-10rem',
                letterSpacing: '-0.25rem',
            }}>We Make Designs that Lead<br /> and Inspire.</S.Title>
            
        </S.Wrapper>
    );
}