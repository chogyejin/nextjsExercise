//id별 상세페이지
import axios from 'axios';
import { IList } from '..';
import Item from '../../src/component/Item';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import Head from 'next/head';

interface IItem {
  item: IList;
  name: string;
}

const Post = ({ item, name }: IItem) => {
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
  return {
    paths: [
      { params: { id: '740' } },
      { params: { id: '730' } },
      { params: { id: '729' } },
    ],
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
  const aa = process.env.nn;
  return {
    props: {
      item: data,
      name: process.env.name, //Nodejs 환경
    },
  };
}

export default Post;
