import axios from 'axios';
import { Meteor } from 'meteor/meteor';

const TOP_HEADLINES_URL = 'https://newsapi.org/v2/top-headlines';

export function getTopHeadlines() {
  const category = 'business';
  const country = 'us';
  let apiKey =
    process.env.NODE_ENV === 'development'
      ? Meteor.settings.newsApiKey
      : process.env.NEWS_API_KEY;

  return new Promise((resolve, reject) => {
    console.log('Getting top headlines from News API');
    axios
      .get(TOP_HEADLINES_URL, { params: { category, country, apiKey } })
      .then(res => {
        console.log('Successfully fetched top headlines');
        const data = res.data;
        const articles = data.articles;
        resolve(
          articles.map(article => ({
            title: article.title,
            description: article.description,
            image: article.urlToImage,
            url: article.url
          }))
        );
      })
      .catch(err => {
        console.log('Failed to fetch top headlines');
        reject(err);
      });
  });
}
