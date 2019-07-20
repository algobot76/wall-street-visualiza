import axios from 'axios';
import News from '../api/news/news';

export function FreeApiNewsRequest(url, company) {
  axios
    .get(url)
    .then(function (response) {
      // handle success
      let responseData = response.data.data;
      let articlesArray = [];

      responseData.forEach(eachNews => {
        const jsonDate = JSON.stringify(eachNews.date);
        const Split = jsonDate.split(',');
        const SecondSplit = Split[1].split('');
        const day = SecondSplit[1] + SecondSplit[2];
        const month = SecondSplit[4] + SecondSplit[5] + SecondSplit[6];
        const year =
          SecondSplit[8] + SecondSplit[9] + SecondSplit[10] + SecondSplit[11];
        const numberMonth = getMonth(month);
        const publishedDate = year + '-' + numberMonth + '-' + day;

        let newData = {
          title: eachNews.title,
          description: eachNews.title,
          url: eachNews.news_url,
          publishedAt: publishedDate,
          sentiment: eachNews.sentiment,
          image: eachNews.image_url,
        };
        articlesArray.push(newData);
      });



      News.insert({ company: company, articles: articlesArray });

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      //  console.log("success");
    });
}

function getMonth(month) {
  if (month === 'Jan') return '01';
  else if (month === 'Feb') return '02';
  else if (month === 'Mar') return '03';
  else if (month === 'Apr') return '04';
  else if (month === 'May') return '05';
  else if (month === 'Jun') return '06';
  else if (month === 'Jul') return '07';
  else if (month === 'Aug') return '08';
  else if (month === 'Sep') return '09';
  else if (month === 'Oct') return '10';
  else if (month === 'Nov') return '11';
  else return '12';
}
