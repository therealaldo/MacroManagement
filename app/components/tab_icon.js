'use strict';

import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const propTypes = {
  selected: PropTypes.string,
  title: PropTypes.string,
};

class TabIcon extends React.Component {
  <Text style={{ color: this.props.selected ? 'red' : 'black'}}>{ this.props.title }</Text>
};

TabIcon.propTypes = propTypes;

export default TabIcon;
