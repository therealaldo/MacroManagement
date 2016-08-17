'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class PrivacyPolicyView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
          <View style={ styles.scrollContainer }>
            <Text style={ styles.text }>
              Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.
            </Text>
            <Text style={ styles.text }>
              Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
            </Text>
            <Text style={ styles.text }>
              We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.
            </Text>
            <Text style={ styles.text }>
              We will only retain personal information as long as necessary for the fulfillment of those purposes.
            </Text>
            <Text style={ styles.text }>
              We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.
            </Text>
            <Text style={ styles.text }>
              Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.
            </Text>
            <Text style={ styles.text }>
              We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.
            </Text>
            <Text style={ styles.text }>
              We will make readily available to customers information about our policies and practices relating to the management of personal information.
            </Text>
            <Text style={ styles.text }>
              We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26a65b',
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  scrollContainer: {
    marginTop: 80,
    borderRadius: 7,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: '#e9e9e9',
    padding: 10
  },
  text: {
    marginBottom: 30,
    fontFamily: 'OpenSans'
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes
  };
};

export default connect(mapStateToProps)(PrivacyPolicyView);
