'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, SegmentedControlIOS, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/trends/action_creators';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import DWChart from '../components/dw_chart';
import MAChart from '../components/ma_chart';

class TrendsView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    trends: PropTypes.object.isRequired,
    setAnalysisFilter: PropTypes.func.isRequired
  };

  handleFilterChange(e) {
    this.props.setAnalysisFilter(e.nativeEvent.selectedSegmentIndex);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.filterContainer }>
          <SegmentedControlIOS values={['Days', 'Weeks', 'Months', 'All']}
            tintColor='#e9e9e9' selectedIndex={ this.props.trends.selectedIndex }
            onChange={ this.handleFilterChange.bind(this) } />
        </View>
        <ScrollView>
          <View style={ styles.charts }>
            <View style={ styles.chartContainer }>
            <Text style={ styles.chartTitleText }>Calorie Intake</Text>
            { this.props.trends.userMealData < 5 ?
              <View>
                <Text>You need at least 5 days of data to use this</Text>
              </View> :
              <DWChart style={ styles.chart } imageUri={ this.props.trends.imageUri } />
            }
            </View>
            <View style={ styles.chartContainer }>
              <Text style={ styles.chartTitleText }>Calorie Progress</Text>
              { this.props.trends.userMealData < 5 ?
                <View>
                  <Text>You need at least 5 days of data to use this</Text>
                </View> :
                <DWChart style={ styles.chart } imageUri={ this.props.trends.imageUri } />
              }
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
  chartContainer: {
    height: 260,
    backgroundColor: '#e9e9e9',
    justifyContent: 'space-around',
    borderRadius: 7,
    marginBottom: 10,
    padding: 10,
  },
  chartTitleText: {
    fontFamily: 'OpenSans',
    fontSize: 20,
  },
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
