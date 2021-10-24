import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  function checkLogin() {
    axios.get('/api/isLogin').then((res) => {
      if (res.status == 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        //로그인 안됨
        router.push('/login');
      }
    });
  }

  function logout() {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      <div>admin</div>
      <div>{isLogin && <Button onClick={logout}>로그아웃</Button>} </div>
    </>
  );
}
