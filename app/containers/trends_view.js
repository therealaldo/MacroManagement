'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, SegmentedControlIOS, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/trends/action_creators';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

class TrendsView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    trends: PropTypes.object.isRequired,
    setAnalysisFilter: PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.filterContainer }>
          <SegmentedControlIOS values={['Days', 'Weeks', 'Months', 'All']}
            tintColor='#e9e9e9' selectedIndex={ this.props.trends.selectedIndex }
            onChange={ this.props.setAnalysisFilter } />
        </View>
        <ScrollView>
          <View style={ styles.charts }>
            <View style={ styles.chartContainer }>
              <Text style={ styles.chartTitleText }>Calorie Intake</Text>

            </View>

            <View style={ styles.chartContainer }>
              <Text style={ styles.chartTitleText }>Calorie Progress</Text>

            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  filterContainer: {
    marginBottom: 10,
    marginTop: 80,
  },
  charts: {

  },
  chartContainer: {
    height: 260,
    backgroundColor: '#e9e9e9',
    padding: 15,
    justifyContent: 'space-around',
    borderRadius: 7,
    marginBottom: 10,
  },
  chartTitleText: {
    fontFamily: 'OpenSans',
    fontSize: 20,
  },
  chart: {
    height: 200,
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    users: state.users,
    meals: state.meals,
    trends: state.trends
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TrendsView);
