import { compose, withHandlers } from 'recompose';
import qs from 'query-string';

import request from '../utils/request';
import constants from '../utils/constants';

export default compose(
  withHandlers({
    // https://newsapi.org/docs/endpoints/top-headlines
    fetchHeadlines: () => ({
      pageSize = 20,
      page = 0,
      ...params,
    } = {}) => {
      const endpoint = `https://newsapi.org/v2/top-headlines`;
      const queries = {
        ...params,
        pageSize,
        page,
        apiKey: constants.newsApiKey,
      };
      return request(`${endpoint}?${qs.stringify(queries)}`)
        .then(res => res.articles)
        .catch(() => []);
    },
  }),
);
