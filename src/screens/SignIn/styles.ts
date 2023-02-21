import styled from "styled-components/native";
import { Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.primary[900], theme.colors.primary[800]],
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + RFValue(48)
  }
})`
  width: 100%;
  padding: 0 ${RFValue(32)}px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  font-size: ${RFValue(32)}px;
  margin-bottom: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.title};
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${RFValue(340)}px;
  margin: ${RFValue(10)}px 0;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + RFValue(32) : RFValue(32)}px;
`;

export const ForgotPasswordButton = styled(TouchableOpacity).attrs({
  activityOpacity: 0.7,
})`
  align-self: flex-end;
  margin-bottom: ${RFValue(20)}px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.text};
`;
