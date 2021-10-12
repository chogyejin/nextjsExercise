//id별 상세페이지
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IList } from '..';
import Item from '../../src/component/Item';

const Post = () => {
  const router = useRouter();
  const { id } = router.query; //useRouter로 query를 받음(props와 유사)
  const [item, setItem] = useState<IList>({
    api_featured_image: '',
    brand: '',
    category: '',
    created_at: '',
    currency: '',
    description: '',
    id: 0,
    image_link: '',
    name: '',
    price: '',
    price_sign: '',
    product_api_url: '',
    product_colors: [],
    product_link: '',
    product_type: '',
    rating: 0,
    tag_list: [],
    updated_at: '',
    website_link: '',
  });

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  //id가 있고 id>0 이면 데이터 호출하는 useEffect
  useEffect(() => {
    if (Number(id) && Number(id) > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
