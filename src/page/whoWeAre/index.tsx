import { useEffect, useState } from 'react';
import seta from '../../res/image/seta.png';
import logo from '../../res/image/logo.svg';
import desktop from '../../res/image/desktop.png';
import { CircleButton } from '../../components/circleButton';
import { colors } from '../../constants/format';
import * as S from './styles';
import { Button } from '../../components/button';

const buttonDimensions = {
  width: '50px',
  height: '50px',
}

export const WhoWeAre = () => {
    const [clicked, setClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 700);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const lista = 
        <S.Nav>
            <ul>
                <li>2017</li>
                <li>2018</li>
                <li>2019</li>
                <li>2020</li>
                <li>2021</li>
            </ul>
        </S.Nav>

    return (
        <S.Wrapper>
            <div style={{width: '20%', display: 'flex', flexDirection: 'column', gap: '20rem'}}>
                <S.Logo>
                        <img src={logo} alt="Logo" />
                </S.Logo>
                {!isMobile && lista}
            </div>
            <div style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <S.Header>
                    <S.HeaderTitle>
                        <S.HeaderText style={{color: colors.mediumText, paddingRight:'4rem'}}>01.</S.HeaderText>
                        <S.HeaderText style={{color: colors.buttonText}}>Who We Are</S.HeaderText>
                    </S.HeaderTitle>
                    <S.HeaderButton>
                        <CircleButton 
                            click={() => setClicked(!clicked)}
                            name={<img src={seta} alt="seta" />}
                            color={clicked ? colors.primary : colors.background}
                            dimensions={buttonDimensions}/>
                        <CircleButton 
                            click={() => setClicked(!clicked)}
                            name={
                                <img src={seta} alt="seta" style={{
                                    transform: 'rotate(180deg)'
                                }}/>
                            }
                            color={!clicked ? colors.primary : colors.background}
                            dimensions={buttonDimensions}/>
                    </S.HeaderButton>
                </S.Header>
                <S.Title style={{paddingLeft: '8rem'}}>We Make Designs that<br/> Lead and Inspire.</S.Title>
                <img src={desktop} alt='desktop' />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12rem',
                }}>
                    <S.TextBox>
                        <S.Title style={{fontSize: '2rem'}}> 
                            A design team building a curated<br/>
                            marketplace for UI designers
                        </S.Title>
                        <S.HeaderText style={{
                            color: colors.mediumText,
                            lineHeight: '2rem',
                            paddingBottom: '2rem',
                        }}>
                            4,404 curated design resources to energize your creative<br/>
                            workflow. We're a growing family of 334,531 designers<br/>
                            and makers from around the world 
                        </S.HeaderText>
                        <Button 
                            dimensions={{width: '140px', height: '60px'}}
                            color={'primary'}
                            handleClick={() => {}}
                            text='Contact Us'
                        />
                    </S.TextBox>
                    <S.TextBox style={{alignItems: 'center'}}>
                        <S.Title style={{
                            fontSize: '12rem',
                            margin: '0',
                            padding: '0',
                        }}>
                            28
                        </S.Title>
                        <S.HeaderText style={{
                            margin: '0',
                            padding: '0',
                            color: colors.buttonText,
                        }}>
                            Biggest Branding
                        </S.HeaderText>
                    </S.TextBox>
                </div>
                                
            </div>
            
        </S.Wrapper>
    );
}