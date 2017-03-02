import React from 'react';

const MoreInfoComponent = (props) =>
  <div className="more-info group">
    <div className={`more-info__content${props.isOpen ? ' more-info-open' : ''}`}>
      {props.children}
    </div>
  </div>;

export default MoreInfoComponent;