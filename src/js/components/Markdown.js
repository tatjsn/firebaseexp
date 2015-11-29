import React from 'react';
import Remarkable from 'remarkable';

const md = new Remarkable();

export default ({ children }) =>
  <div dangerouslySetInnerHTML={{ __html: md.render(children) }} />
