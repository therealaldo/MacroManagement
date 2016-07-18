'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Alert, ProgressViewIOS, ScrollView, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/rss_feed/action_creators';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'react-native-button';

class DashboardView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
    users: PropTypes.object,
    meals: PropTypes.object,
    rssFeed: PropTypes.object
  };

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
          <View style={ styles.progressContainer }>
             <Text style={ styles.containerTitle }>Progress</Text>
             <ProgressViewIOS style={ styles.progressView } progress={ 0.5 }
              progressTintColor='#efbe14' />
             <View style={ styles.calorieInfo }>
               <Text style={ styles.containerText }>1250/2500 calories</Text>
               <Text style={ styles.containerText }>50%</Text>
             </View>
          </View>
          <Button style={ styles.nextMealButton } onPress={ Actions.weeklyPlan }>
            <View style={ styles.nextMealContainer }>
              <View style={ styles.nextMealButtonContainer }>
                <View style={ styles.nextMealButtonText }>
                  <Text style={ styles.containerTitle }>Upcoming Meal</Text>
                  <Text style={ styles.containerText }>Chicken Alfredo Pasta</Text>
                </View>
                <View style={ styles.nextMealButtonIcon }>
                  <Icon name='ios-arrow-forward' size={ 30 } style={ styles.forwardIcon } />
                </View>
              </View>
            </View>
          </Button>
          <View style={ styles.articleContainer }>
            <Image style={ styles.articleImage } source={ imageMap['articleImageUrl'] } />
            <Text style={ styles.articleTitle }>Best Juices for the Summer</Text>
          </View>

          <View style={ styles.articleContainer }>
            <Image style={ styles.articleImage } source={ imageMap['articleImageUrl'] } />
            <Text style={ styles.articleTitle }>Best Juices for the Summer</Text>
          </View>
          <View style={ styles.articleContainer }>
            <Image style={ styles.articleImage } source={ imageMap['articleImageUrl'] } />
            <Text style={ styles.articleTitle }>Best Juices for the Summer</Text>
          </View>
          <View style={ styles.articleContainer }>
            <Image style={ styles.articleImage } source={ imageMap['articleImageUrl'] } />
            <Text style={ styles.articleTitle }>Best Juices for the Summer</Text>
          </View>
          <View style={ styles.articleContainer }>
            <Image style={ styles.articleImage } source={ imageMap['articleImageUrl'] } />
            <Text style={ styles.articleTitle }>Best Juices for the Summer</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const imageMap = {
  "articleImageUrl": require('../img/articleImage.jpeg'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  progressContainer: {
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    marginTop: 80,
    padding: 10,
  },
  containerTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    marginBottom: 15,
  },
  progressView: {
    marginBottom: 15
  },
  calorieInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerText: {
    fontFamily: 'OpenSans',
    fontSize: 16,
  },
  nextMealContainer: {
    marginTop: 10,
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
  },
  nextMealButton: {
    flex: 1,
  },
  nextMealButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextMealButtonText: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  nextMealButtonIcon: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  articleContainer: {
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    overflow: 'hidden',
    paddingBottom: 15,
    marginBottom: 10,
  },
  articleImage: {
    height: 200,
    marginBottom: 15
  },
  articleTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    paddingLeft: 10
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    users: state.users,
    meals: state.meals,
    rssFeed: state.rssFeed
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
