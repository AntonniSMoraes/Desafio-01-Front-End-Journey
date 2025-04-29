import * as S from './styles';

export const Button = ({color, dimensions, text='', handleClick}) => {
    return (
        <S.Wrapper 
            background={color}
            dimensions={dimensions}
            onClick={handleClick}
        >
            <span>{text}</span>
        </S.Wrapper>
    );
}