'use strict';

import React from 'react';
import { Text } from 'react-native';

const propTypes = {
  selected: PropTypes.string,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  <Text style={{ color: this.props.selected ? 'red' : 'black'}}>{ this.props.title }</Text>
};

TabIcon.propTypes = propTypes;

export default TabIcon;
