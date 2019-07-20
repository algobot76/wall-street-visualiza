const axios = require('axios');
const fs = require('fs');
const companies = require('../imports/startup/seeds/companies');
const token = require('../config').stockNewsApi.token;

const URL = 'https://stocknewsapi.com/api/v1';
const items = 50;

(async () => {
  try {
    const news = [];
    for (const company of companies) {
      const ticker = company.symbol;
      console.log(`Fetching news for ${ticker}`);
      const res = await axios.get(URL, {
        params: {
          tickers: ticker,
          items,
          token
        }
      });
      const data = res.data.data;
      const newsEntry = {
        company: ticker,
        articles: data.map(article => ({
          title: article.title,
          description: article.text,
          url: article.news_url,
          image: article.image_url,
          publishedAt: convertDate(article.date)
        }))
      };
      news.push(newsEntry);
    }
    fs.writeFileSync(
      './imports/startup/seeds/news.json',
      JSON.stringify(news),
      'utf8'
    );
    console.log('seeds/news.json has been updated!');
  } catch (err) {
    console.log(err.message);
  }
})();

const convertDate = dateString => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};
