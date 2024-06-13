// this is a custom react function to make usage of the <details> HTML tag within docusaurus v3.
// Usage:
// 
// # At top of file add:
//
// import Details from '@site/src/components/Details';
// 
// # Use the following syntax:
//
// <Details summary="Click to expand!">
//  This is the detailed content that was hidden and is now visible.
// </Details>


import React from 'react';

const Details = ({ summary, children }) => (
  <details>
    <summary>{summary}</summary>
    {children}
  </details>
);

export default Details;