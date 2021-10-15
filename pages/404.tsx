//빌드타임에 정적 생성
import { Icon } from 'semantic-ui-react';

export default function Error404() {
  return (
    <div
      style={{
        fontSize: 30,
        textAlign: 'center',
        padding: '200px 100px 150px 0',
      }}>
      <Icon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}
