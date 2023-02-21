import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export type TypeProps = 'primary' | 'secondary';

type Props = { 
    type: TypeProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    border-radius: 12px;
    min-height: ${RFValue(56)}px;
    max-height: ${RFValue(56)}px;

    align-items: center;
    justify-content: center;

    background-color: ${({theme, type }) => type === 'primary' ? theme.colors.primary[800] : theme.colors.success[900]};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.text};
`;

export const Load = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.colors.title,
}))``;
