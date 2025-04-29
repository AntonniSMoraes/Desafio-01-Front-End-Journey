import { useState } from 'react';
import seta from '../../res/image/seta.png';
import { CircleButton } from '../../components/circleButton';
import { colors } from '../../constants/format';
import * as S from './styles';

const buttonDimensions = {
  width: '50px',
  height: '50px',
}

export const WhoWeAre = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderTitle>
                    <S.HeaderText style={{color: colors.mediumText}}>01.</S.HeaderText>
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
            <p>We are a team of dedicated professionals.</p>
        </S.Wrapper>
    );
}