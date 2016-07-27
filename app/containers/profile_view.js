'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/users/action_creators';
import { Actions } from 'react-native-router-flux';
import SettingsList from 'react-native-settings-list';
import Button from 'react-native-button';

class ProfileView extends React.Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    intolerances: PropTypes.object.isRequired,
    groceryLists: PropTypes.object.isRequired,
  };

  handleLogout() {
    this.props.logout();
    Actions.welcome({ type: 'reset' });
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.profileInfo }>
          <Text style={ styles.heading }>Email Address</Text>
          <Text>{ this.props.users.email }</Text>
        </View>
        <View style={ styles.settingsContainer }>
          <View style={ styles.listContainer }>
            <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
              <SettingsList.Item title='Food Intolerances' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ Actions.intolerances } />
              <SettingsList.Item title='Grocery Lists' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ () =>  Alert.alert('Saved Grocery Lists pressed') } />
            </SettingsList>
          </View>
        </View>
        <Button containerStyle={ styles.logOutButtonContainer } style={ styles.logOutButtonText }
          onPress={ this.handleLogout.bind(this) }>
          Log Out
        </Button>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileInfo: {
    marginTop: 80,
    marginBottom: 10,
    padding: 10,
    height: 65,
    backgroundColor: '#e9e9e9',
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#999',
    justifyContent: 'space-between',
  },
  heading: {
    color: '#666',
    fontFamily: 'OpenSans-Semibold',
    fontSize: 14
  },
  settingsContainer: {
    overflow: 'hidden',
    marginBottom: 10,
  },
  listContainer: {
    borderStyle: 'solid',
    borderRadius: 7,
    overflow: 'hidden',
    flex: 1,
  },
  logOutButtonContainer: {
    backgroundColor: '#c62733',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  logOutButtonText: {
    color: '#e9e9e9',
  },
});

function mapStateToProps(state) {
  return {
    users: state.users,
    intolerances: state.intolerances,
    groceryLists: state.groceryLists
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
