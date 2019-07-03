import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';
import NewsModal from '../components/NewsModal';
import { fetchCompanies, fetchNews } from '../actions';

const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-bottom: 0.25rem;
`;

function Visualiza() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
    dispatch(fetchNews());
  }, []);

  const names = useSelector(state => state.companies.names);
  const company = useSelector(state => state.companies.selectedCompany);
  const data = useSelector(state => state.companies.data);
  const startIndex = useSelector(state => state.chart.startIndex);
  const endIndex = useSelector(state => state.chart.endIndex);
  const news = useSelector(state => state.news.news);

  const filteredData = data.find(item => item.company === company);
  let startDate = '';
  let endDate = '';
  if (filteredData) {
    startDate = filteredData['prices'][startIndex]['date'];
    endDate = filteredData['prices'][endIndex]['date'];
  }
  const filteredNews = news.find(item => item.company === company);
  const newsEntries = [];
  if (filteredNews) {
    const startDate = new Date(filteredData['prices'][startIndex]['date']);
    const endDate = new Date(filteredData['prices'][endIndex]['date']);
    filteredNews['articles'].forEach(article => {
      const currDate = new Date(article['publishedAt']);
      if (
        currDate.getTime() >= startDate.getTime() &&
        currDate.getTime() <= endDate.getTime()
      ) {
        newsEntries.push(article);
      }
    });
  }

  return (
    <div className="section has-background-light">
      <div className="columns">
        <Sidebar names={names} />
        <div className="column">
          <Title>{company}</Title>
          <NewsModal
            buttonName="News"
            title={
              startDate && endDate
                ? `News from ${startDate} to ${endDate}`
                : 'News'
            }
            content={newsEntries}
          />
          <Chart data={filteredData ? filteredData.prices : []} />
        </div>
      </div>
    </div>
  );
}

export default Visualiza;
