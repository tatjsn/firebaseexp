import React from 'react';
import Markdown from 'remarkable';

const md = new Markdown();

export default ({ children }) =>
  <div dangerouslySetInnerHTML={{ __html: md.render(children) }} />
