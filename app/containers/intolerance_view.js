'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  InteractionManager
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/intolerances/action_creators';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import IntoleranceList from '../components/intolerance_list';

class IntoleranceView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    intolerances: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
  };

  handleKeywordChange(e) {
    this.props.setIntoleranceKeyword(e.nativeEvent.text.trim());
  }

  handleSubmitEdit(e) {
    this.props.addIntolerance(this.props.users.userId, this.props.intolerances.intoleranceKeyword);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.intoleranceInputContainer }>
          <TextInput style={ styles.intoleranceInput }
            value={ this.props.intolerances.intoleranceKeyword }
            onChange={ this.handleKeywordChange.bind(this) }
            onSubmitEditing={ this.handleSubmitEdit.bind(this) }
            placeholder='Add an intolerance' />
          <ScrollView style={ styles.intoleranceListContainer }>
            <IntoleranceList data={ this.props.intolerances }
              removeIntolerance={ this.props.removeIntolerance.bind(this) } />
          </ScrollView>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    backgroundColor: '#26a65b'
  },
  intoleranceInputContainer: {
    marginTop: 80,
    flex: 1
  },
  intoleranceInput: {
    height: 50,
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 7,
    marginBottom: 15,
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    intolerances: state.intolerances,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IntoleranceView);
