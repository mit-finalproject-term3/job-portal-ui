import React from 'react';
import { Link } from 'react-router-dom';
import { List, Card } from 'antd';
import { BackTop } from 'antd';
import { Button } from 'antd';

const data = [
  {
    _id: 1,
    title: 'Full stack developer',
    sallary: '100000',
    description: '2 years experience necessary',
    poster: './posters/ferris.png'
  },
  {
    title: 'Junior developer',
    sallary: '65000',
    description: 'expert in ruby and rails.',
    poster: './posters/bridget-jones.png'
  },
  {
    title: 'Junior developer ',
    sallary: '65000',
    description: 'a front end junior developr with one yer experience',
    poster: './posters/50-first-dates.png'
  },
  {
    title: 'Software developer',
    sallary: '120000',
    description: 'with more than four years experience',
    poster: './posters/matilda.png'
  }
];

const Top = () => (
  <div>
    <br />
    <h2>Top Page</h2>
    <br />
    <div className="mainpic_div">
      <img src="mainpic.jpg" alt="mainpic" className="mainpic" />
    </div>
    <br />
    <h1>Current Opportunities</h1>
    <br />
    <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card className="card" title={item.title}>
            <h4>sallary:</h4>
            <p>{item.sallary}</p>
            <h4>description:</h4>
            <p>{item.description}</p>
            <br />
            <Button type="primary">
              <Link to="/mainpage">details</Link>
            </Button>
          </Card>
        </List.Item>
      )}
    />
    <BackTop />
  </div>
);

export default Top;
export { data };
