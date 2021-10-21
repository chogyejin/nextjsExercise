import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';

//받아올 객체 배열에 들어가는 프로퍼티들의 타입 지정
export interface IList {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_colors: string[];
  product_link: string;
  product_type: string;
  rating: number;
  tag_list: string[];
  updated_at: string;
  website_link: string;
}

interface Props {
  list: IList[];
}

export default function Home({ list }: Props) {
  //isLoading true면 로딩 jsx, false면 상품 jsx
  return (
    <div>
      <Head>
        <title>호빵맨</title>
      </Head>

      <div>
        <Header as="h3" style={{ paddingTop: 40 }}>
          Best 상품
        </Header>
        <Divider />
        {/* list 0에서 9까지 */}
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        {/* 9부터 끝까지 */}
        <ItemList list={list.slice(9)} />
      </div>
    </div>
  );
}

//정적 생성해서 Home에 {list}로 props 전달
export async function getStaticProps() {
  const apiUrl = process.env.apiUrl as string;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
