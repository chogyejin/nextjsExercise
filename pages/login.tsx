import axios from 'axios';
import { Router, useRouter } from 'next/dist/client/router';
import { Button, Form } from 'semantic-ui-react';

export default function Login() {
  const router = useRouter();
  function login() {
    axios.post('/api/login').then((res) => {
      if (res.status == 200) {
        //로그인 성공
        router.push('/admin');
      }
    });
  }
  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form>
        <Form.Field inline>
          <input type="text" placeholder="아이디 입력" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="비밀번호 입력" />
        </Form.Field>
        <Button
          style={{ backgroundColor: 'skyblue', color: 'white' }}
          onClick={login}>
          로그인
        </Button>
      </Form>
    </div>
  );
}
