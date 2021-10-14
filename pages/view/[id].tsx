//id별 상세페이지
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IList } from '..';
import Item from '../../src/component/Item';
import { Loader } from 'semantic-ui-react';
import { GetServerSidePropsContext } from 'next';

interface IItem {
  item: IList;
}

const Post = ({ item }: IItem) => {
  return <div>{item && <Item item={item} />}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params.id;
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
