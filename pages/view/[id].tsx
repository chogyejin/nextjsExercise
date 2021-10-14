//id별 상세페이지
import axios from 'axios';
import { IList } from '..';
import Item from '../../src/component/Item';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface IItem {
  item: IList;
}

const Post = ({ item }: IItem) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      <Item item={item} />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}

export default Post;
