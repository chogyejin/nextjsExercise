import { useRouter } from 'next/dist/client/router';
import { Menu } from 'semantic-ui-react';

export default function Gnb() {
  const router = useRouter();
  console.log(router);

  let activeItem;

  if (router.pathname === '/') {
    activeItem = 'home';
  } else if (router.pathname === '/about') {
    activeItem = 'about';
  }

  //location.href나 <a> 이용하여 이동 시 페이지가 전부 새로고침됨. -> SPA 장점 사라짐
  function goLink(e: any, data: any) {
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={goLink}
      />
    </Menu>
  );
}
