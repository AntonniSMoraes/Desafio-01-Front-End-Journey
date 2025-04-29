import * as S from './styles';

export const CircleButton = ({name, color, dimensions, click}) => {
    return (
        <S.Wrapper onClick={click} color={color} dimensions={dimensions}>
            {name}
        </S.Wrapper>
    );
}