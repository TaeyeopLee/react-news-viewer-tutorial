import React, { useState } from 'react';
import NewsList from './components/NewsList';
import axios from 'axios';

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const apikey = '4770a2be4ab342078f5e967167706d88'
  //     const newsurl = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey='
  //     const response = await axios.get(newsurl+apikey);
  //     setData(response.data);
  //   }
  //   catch (e) {
  //     console.error(e);
  //   }
  // }

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  //   </div>
  // );
  return <NewsList />;
};

export default App;
