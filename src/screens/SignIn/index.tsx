import React from 'react';
import {
  Brand,
  Title,
  Container,
  Content,
  ForgotPasswordLabel,
  ForgotPasswordButton,
} from './styles';
import {
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import brandImg from '@assets/brand.png';

export function SignIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Content>
            <Brand source={brandImg} />

            <Title>Login</Title>

            <Input
              type="secondary"
              autoCorrect={false}
              placeholder="E-mail"
              autoCapitalize="none"
            />
            <Input
              type="secondary"
              placeholder="Senha"
              secureTextEntry
            />

            <ForgotPasswordButton>
              <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
            </ForgotPasswordButton>

            <Button
              title="Entrar"
              onPress={() => { }}
            />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}

