import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
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

export default function Home() {
  const [list, setList] = useState<IList[]>([]);
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      //console.log(res.data) // setList()가 비동기적이라 바로 console 출력 X
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>호빵맨</title>
      </Head>
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
  );
}
