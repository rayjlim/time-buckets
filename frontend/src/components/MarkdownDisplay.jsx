/* eslint-disable react/no-danger */
// @ts-ignore
import React from 'react';
import PropTypes from 'prop-types';

import { marked } from 'marked';

const renderer = {

  code(code, escaped = true) {
    const output = escaped ? code : escape(code);
    return `<pre><code>${output}</code></pre>\n`;
  },
};

marked.use({ renderer });

const MarkdownDisplay = ({ source }) => {
  let output = '';
  try {
    // console.log(source);
    const newText = source.replace(/<br \/>/g, '\n');
    output = marked(newText);
  } catch (err) {
    console.log(err);
  }
  return <div dangerouslySetInnerHTML={{ __html: output }} />;
};

export default MarkdownDisplay;

MarkdownDisplay.propTypes = {
  source: PropTypes.string.isRequired,
};
