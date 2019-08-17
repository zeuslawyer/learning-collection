import React from 'react';

/**
 * @param {{ link: { description: any; url: any; }; }} props
 */
function Link(props) {
  return (
    <>
      <div>
        {props.link.description} ({props.link.url})
      </div>
    </>
  );
}

export default Link;
