/** @format */

import React from 'react';
import Part from './Part';

const Content = (props) =>
  props.parts.map((part, i) => (
    <Part key={i} name={part.name} exercises={part.exercises} />
  ));

export default Content;
