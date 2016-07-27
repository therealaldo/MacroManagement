'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/users/action_creators';

// TODO: style the login flow to match the app's style guidelines
class WelcomeView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.messageBox }>
          <Image
            style={ styles.badge }
            source={ imageMap['badge'] }
          />
          <Text style={ styles.subtitle }>"We Sweat the Small Stuff for You"</Text>
        </View>
        <TouchableHighlight
          style={ styles.signInButton }
          underlayColor='#949494'
          onPress={ this.props.login }>
          <Text style={ styles.buttonText }>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const imageMap = {
  "badge": require('../img/mmlogo.png'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 100,
    width: 250,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Italic'
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#26a65b',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f4f4f4',
    fontFamily: 'OpenSans-Semibold',
    fontSize: 18
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    users: state.users
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView);
