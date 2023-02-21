import React from 'react';
import { Container, Load, Title, TypeProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
  onPress: () => void;
}

export function Button({
  title,
  type = 'primary',
  isLoading = false,
  onPress,
  ...rest }: Props) {
  return (
    <Container
      {...rest}
      type={type}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
}