//서버 오류
//개발 모드에서는 로그 보여줌(어디서 에러 났다)
//프로덕션 모드로 확인
//npm run build -> npm run start
//에러가 발생했을 때 서버쪽으로 에러를 보내는 작업을 동반 -> 정적으로 최적화 되어있지 않음

import { NextPageContext } from 'next';

interface ErrorComponentProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorComponentProps) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
