import React from 'react';

function FooterMenuItem(props) {
  const { text } = props;

  return (
    <div className="h-10 group">
      <a href="#">{text}</a>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
}

export default FooterMenuItem;
