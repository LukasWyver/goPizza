import { TextInput } from 'react-native';
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor: type === 'primary' ? theme.colors.secondary[900] : theme.colors.primary[50],
})) <Props>`
    width: 100%;
    border-radius: 12px;
    height: ${RFValue(56)}px;
    font-size: ${RFValue(14)}px;
    background-color: transparent;

    padding: ${RFValue(7)}px 0;
    padding-left: ${RFValue(20)}px;
    margin-bottom: ${RFValue(16)}px;

    ${({ theme, type }) => css`
      font-family: ${theme.fonts.text};
      border: 1px solid ${theme.colors.shape};
      color: ${type === 'primary' ? theme.colors.secondary[900] : theme.colors.title }
    `};
`;