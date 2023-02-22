import React, { useState } from 'react';
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

import { useAuth } from '@hooks/auth';

import brandImg from '@assets/brand.png';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLogging } = useAuth();

  function handleSignIn(){
    signIn(email, password);
  }

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
              onChangeText={setEmail}
            />
            <Input
              type="secondary"
              placeholder="Senha"
              secureTextEntry
              onChangeText={setPassword}
            />

            <ForgotPasswordButton>
              <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
            </ForgotPasswordButton>

            <Button
              title="Entrar"
              onPress={handleSignIn}
              isLoading={isLogging}
            />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}

