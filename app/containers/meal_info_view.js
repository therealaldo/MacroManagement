'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicatorIOS
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/meals/action_creators';
import Icon from 'react-native-vector-icons/Ionicons';
import HTMLView from 'react-native-htmlview';
import api from '../utils/api';

class MealInfoView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={ styles.container }>
        { this.props.meals.isFetching ?
          <ActivityIndicatorIOS style={ styles.spinner }
            animating={ this.props.meals.isFetching }
            color='#e9e9e9'
            size="large" /> :
          <View style={ styles.infoContainer }>
            <View style={ styles.imageContainer }>
              <Image style={ styles.mealPhoto }  source={{ uri: this.props.meals.mealInfo.image }} />
            </View>
            <View style={ styles.nameContainer }>
              <Text>{ this.props.meals.mealInfo.name }</Text>
              <Text>Cook Time: { this.props.meals.mealInfo.readyIn } min.</Text>
              <Text>Servings: { this.props.meals.mealInfo.servings }</Text>
            </View>

          </View>
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  infoContainer: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
  },
  imageContainer: {
    height: 200,
  },
  mealPhoto: {
    height: 200,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7
  },
  nameContainer: {
    height: 100,
    padding: 10
  },
  spinner: {
    flex: 1
  },
  tabView: {
    height: 100,
    marginBottom: 100
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    meals: state.meals,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MealInfoView);
