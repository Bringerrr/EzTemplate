import React, { useState } from 'react';
import { connect } from 'react-redux';
import { notification, Form, Button } from 'antd';
import { onInputChange } from '../../helpers';
import { Labeled, Input } from '../../components';
import { postSignIn } from '../../state/auth/api';
import { signInSuccess } from '../../state/auth/actions';

const SignIn = (props) => {
  const signIn = async () => {
    const data = { email: email.toLowerCase(), password };
    try {
      const response = await postSignIn(data);

      if (response) {
        signInSuccess(response);
      }
    } catch (e) {
      notification.error({
        message: 'User with such email is not registered.',
      });
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Form>
        <Labeled title={'Имейл'}>
          <Input></Input>
        </Labeled>

        <Labeled title={'Профиль'}>
          <Input type="password"></Input>
        </Labeled>

        <Button>Войти</Button>
      </Form>
    </div>
  );
};

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  {
    signInSuccess,
  }
)(SignIn);
