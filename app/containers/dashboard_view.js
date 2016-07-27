'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ProgressViewIOS,
  ScrollView,
  ActivityIndicatorIOS
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/rss_feed/action_creators';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'react-native-button';
import RssList from '../components/rss_list';
import SafariView from 'react-native-safari-view';

class DashboardView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    rssFeed: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.getRss();
  }

  handleRssView(url) {
    SafariView.isAvailable()
    .then(SafariView.show({
      url: url,
      readerMode: true,
      tintColor: '#26a65b'
    }))
    .catch(error => {
      return;
    })
  }

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
          { this.props.rssFeed.isFetching ?
            <ActivityIndicatorIOS style={ styles.spinner }
              animating={ this.props.rssFeed.isFetching }
              color='#e9e9e9'
              size='large' /> :
            <RssList data={ this.props.rssFeed.rssFeed } handleRssView={ this.handleRssView } />
          }
        </ScrollView>
      </View>
    );
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
  progressContainer: {
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    marginTop: 80,
    padding: 10,
    marginBottom: 10
  },
  containerTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
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
  spinner: {
    flex: 1,
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
