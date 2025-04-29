import * as S from './styles';
import logo from '../../res/image/logo.svg';
import folio from '../../res/image/folio.svg';
import { Button } from '../button';


const buttonDimensions = {
    width: '14rem',
    height: '5rem'
};

export const Header = () => {
    return (
        <S.Wrapper>
            <S.Logo>
                <S.Bubble>
                    <img src={logo} alt="Logo" />
                </S.Bubble>
                <img src={folio} alt="folio" />
                <S.Bubble style={{width: '6px', height: '6px', borderRadius: '0'}}/>
            </S.Logo>
            <S.Nav>
                <ul>
                    <li>About</li>
                    <li>Work</li>
                    <li>Services</li>
                    <li>Jobs</li>
                </ul>
            </S.Nav>
            <Button handleClick={null} text='Contact Us' dimensions={buttonDimensions}/>
        </S.Wrapper>
    );
}