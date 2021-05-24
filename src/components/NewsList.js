import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    const apikey = '4770a2be4ab342078f5e967167706d88';
    const newsurl = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apikey}`;
    return axios.get(newsurl);
  }, [category]);


  // 대기 중일때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생 !</NewsListBlock>
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )

}

export default NewsList;