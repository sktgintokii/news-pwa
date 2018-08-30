import React, { Component } from 'react';
import withNews from '../enhancers/withNews';
import NewsCard from '../components/NewsCard';

class Home extends Component {
  state = {
    headlines: [],
  };

  componentDidMount() {
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
