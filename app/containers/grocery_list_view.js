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
import * as actionCreators from '../actions/grocery_lists/action_creators';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import GroceryList from '../components/grocery_list';

class GroceryListView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    groceryLists: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.fetchGroceryList(this.props.users.userId);
  }

  handleKeywordChange(e) {
    this.props.setGroceryListKeyword(e.nativeEvent.text.trim());
  }

  handleSubmitEdit(e) {
    this.props.newEmptyList(this.props.users.userId, this.props.groceryLists.groceryListKeyword);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.groceryListInputContainer }>
          <TextInput style={ styles.groceryListInput }
            value={ this.props.groceryLists.groceryListKeyword }
            onChange={ this.handleKeywordChange.bind(this) }
            onSubmitEditing={ this.handleSubmitEdit.bind(this) }
            placeholder='Add a grocery list' />
          <ScrollView style={ styles.groceryListContainer }>
            <GroceryList data={ this.props.groceryLists }
              viewGroceryList={ this.props.viewGroceryList }
              removeList={ this.props.removeList } />
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
  groceryListInputContainer: {
    marginTop: 80,
    flex: 1
  },
  groceryListInput: {
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
    groceryLists: state.groceryLists,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListView);
