import React from 'react';

import Blogs from '../components/Blog';

const Homepage = ({blogs}) => {
  return (
    <div>
      <Blogs blogs={blogs} />   
    </div>
  )
}

export default Homepage