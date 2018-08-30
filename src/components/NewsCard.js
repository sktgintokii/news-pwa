import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import NoPhoto from '../images/no-photo.jpg';

const ellipsis = `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Anchor = styled.a`
  text-decoration: inherit;
  color: inherit;
`;

const Card = styled.div`
  padding: 10px;
  margin: 10px;
  box-shadow: rgb(204, 204, 204) 0px 1px 2px;
  display: grid;
  grid-template-areas: "image title"
                       "image footer";
  grid-template-rows: 64px 20px;
  grid-template-columns: 96px 1fr;
  column-gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: image;
`;

const Title = styled.h4`
  grid-area: title;
  margin: 0;
  overflow: auto;
`;

const Footer = styled.div`
  grid-area: footer;
  text-align: end;
  ${ellipsis}
`;

const NewsCard = (props) => {
  const {
    source,
    title,
    url,
    imgUrl,
    publishedAt,
  } = props;

  return (
    <Anchor href={url}>
      <Card>
        <Image alt={title} src={imgUrl || NoPhoto} />
        <Title>{title}</Title>
        <Footer>{source} - {dayjs(publishedAt).format('YYYY/MM/DD')}</Footer>
      </Card>
    </Anchor>
  );
};

NewsCard.propTypes = {
  source: propTypes.string,
  title: propTypes.string,
  url: propTypes.string,
  imgUrl: propTypes.string,
  publishedAt: propTypes.string,
};

export default NewsCard;
