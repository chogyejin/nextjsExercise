//id별 상세페이지
import axios from 'axios';
import { IList } from '..';
import Item from '../../src/component/Item';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { Loader } from 'semantic-ui-react';

interface IItem {
  item: IList;
  name: string;
}

const Post = ({ item, name }: IItem) => {
  const router = useRouter();
  console.log(router.isFallback); //dev에선 처음 진입 true, 그 이후 false로 바뀜

  if (router.isFallback) {
    //fallback(대비책) 일 때는 로딩 화면 분기 처리
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

//paths를 이용해 html 정적 생성(.next/server/pages/detail/) -> 렌더링 빠름
export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl as string;
  const res = await axios.get(apiUrl);
  const data: IList[] = res.data;

  return {
    // paths: [
    //   { params: { id: '740' } },
    //   { params: { id: '730' } },
    //   { params: { id: '729' } },
    // ],
    //첫 화면에 보이는 정도만 정적 생성(paths는 객체를 담은 배열)
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
    //true면 처음 접속시 백그라운드에서 html 정적 생성 -> 두 번째 접속부터 빠름
    //false면 없는 페이지 대응 X
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name, //Nodejs 환경
    },
  };
}

//dev에서는 getStaticPaths, getStaticProps가 요청할 때마다 호출
export default Post;
