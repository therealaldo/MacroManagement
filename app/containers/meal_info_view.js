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
import SafariView from 'react-native-safari-view';
import api from '../utils/api';

class MealInfoView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
  };

  handleLinkPress(url) {
    SafariView.isAvailable()
    .then(SafariView.show({
      url: url,
      tintColor: '#26a65b'
    }))
    .catch(error => {
      return;
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.props.meals.isFetching ?
          <ActivityIndicatorIOS style={ styles.spinner }
            animating={ this.props.meals.isFetching }
            color='#e9e9e9'
            size="large" /> :
          <ScrollView>
            <View style={ styles.infoContainer }>
              <View style={ styles.imageContainer }>
                <Image style={ styles.mealPhoto }  source={{ uri: this.props.meals.mealInfo.image }} />
              </View>
              <View style={ styles.nameContainer }>
                <Text style={ styles.mealTitle }>{ this.props.meals.mealInfo.name }</Text>
                <View style={ styles.nameDetails }>
                  <Text style={ styles.details }>Cook Time: { this.props.meals.mealInfo.readyIn } min.</Text>
                  <Text style={ styles.details }>Servings: { this.props.meals.mealInfo.servings }</Text>
                </View>
              </View>
              <View style={ styles.summaryContainer }>
                <Text style={ styles.sectionTitle }>Summary</Text>
                <HTMLView value={ this.props.meals.mealInfo.summary }
                  onLinkPress={(url) => this.handleLinkPress(url)}
                  stylesheet={ styles.summaryContent } />
              </View>
              <View style={ styles.ingredientsContainer }>
                <Text style={ styles.sectionTitle }>Ingredients</Text>
              </View>
              <View style={ styles.directionsContainer }>
                <Text style={ styles.sectionTitle }>Directions</Text>
              </View>
            </View>
          </ScrollView>
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
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    overflow: 'hidden'
  },
  imageContainer: {
    height: 200,
  },
  mealPhoto: {
    height: 200,
  },
  nameContainer: {
    height: 100,
    padding: 10
  },
  mealTitle: {
    fontSize: 20,
    fontFamily: 'OpenSans-Semibold',
    marginBottom: 5
  },
  nameDetails: {
    flexDirection: 'row',
  },
  details: {
    fontFamily: 'OpenSans',
    marginRight: 15
  },
  summaryContent: {
    flex: 1
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
