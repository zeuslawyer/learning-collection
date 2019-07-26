// this HOC is not really needed, as the link can be implemented inside playlistitems.js
// but practice....!

import React from 'react';
import { Link } from 'react-router-dom';

const withLink = WrappedComponent => {
  return props => {
    const newProps = {
      ...props,
      video: {
        ...props.video,
        title: <Link to={`/${props.video.id}`}>{props.video.title}</Link>
      }
    };

    return <WrappedComponent {...newProps} />;
  };
};

export default withLink;
