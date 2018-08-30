import React, { Component } from 'react';
import withNews from '../enhancers/withNews';
import NewsCard from '../components/NewsCard';

class Home extends Component {
  state = {
    headlines: [{
      author: 'NBC Chicago',
      description: 'An Amber Alert was canceled in Indiana a little more than an hour after it was issued early Thursday for three young children reported missing and believed to be " in extreme danger."',
      publishedAt: '2018-08-30T13:23:04Z',
      source: {
        id: null,
        name: 'Nbcchicago.com',
      },
      title: 'Amber Alert Issued in Indiana for 3 Missing Children',
      url: 'https://www.nbcchicago.com/news/local/amber-alert-indiana-sturgis-michigan-fernando-cruz-492073151.html',
      urlToImage: 'https://media.nbcchicago.com/images/1200*675/fernando+cruz+amber+alert.png',
    }],
  };

  componentDidMount() {
    this.props.fetchCachedHeadlines({
      country: 'us',
    })
      .then((articles) => {
        this.setState({ headlines: articles });
      });

    this.props.fetchHeadlines({
      country: 'us',
    })
      .then((articles) => {
        this.setState({ headlines: articles });
      });
  }

  render() {
    return (
      <div>
        {this.state.headlines.map((headline, i) =>
          <NewsCard key={i}
            source={headline.source.name}
            title={headline.title}
            description={headline.description}
            url={headline.url}
            imgUrl={headline.urlToImage}
            publishedAt={headline.publishedAt}
          />
        )}
      </div>
    );
  }
}

export default withNews(Home);
