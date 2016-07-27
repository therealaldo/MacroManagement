'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class TermsServiceView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
          <View style={ styles.scrollContainer }>
            <Text style={ styles.titleText }>
              1. Terms
            </Text>
            <Text style={ styles.text }>
              By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.
            </Text>
            <Text style={ styles.titleText }>
              2. Use License
            </Text>
            <Text style={ styles.text }>
              a.Permission is granted to temporarily download one copy of the materials (information or software) on Macro Management's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              i.modify or copy the materials;
              ii.use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
              iii.attempt to decompile or reverse engineer any software contained on Macro Management's web site;
              iv.remove any copyright or other proprietary notations from the materials; or
              v.transfer the materials to another person or "mirror" the materials on any other server.
              b.This license shall automatically terminate if you violate any of these restrictions and may be terminated by Macro Management at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </Text>
            <Text style={ styles.titleText }>
              3. Disclaimer
            </Text>
            <Text style={ styles.text }>
              a.The materials on Macro Management's web site are provided "as is". Macro Management makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Macro Management does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
            </Text>
            <Text style={ styles.titleText }>
              4. Limitations
            </Text>
            <Text style={ styles.text }>
              In no event shall Macro Management or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Macro Management's Internet site, even if Macro Management or a Macro Management authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </Text>
            <Text style={ styles.titleText }>
              5. Revisions and Errata
            </Text>
            <Text style={ styles.text }>
              The materials appearing on Macro Management's web site could include technical, typographical, or photographic errors. Macro Management does not warrant that any of the materials on its web site are accurate, complete, or current. Macro Management may make changes to the materials contained on its web site at any time without notice. Macro Management does not, however, make any commitment to update the materials.
            </Text>
            <Text style={ styles.titleText }>
              6. Links
            </Text>
            <Text style={ styles.text }>
              Macro Management has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Macro Management of the site. Use of any such linked web site is at the user's own risk.
            </Text>
            <Text style={ styles.titleText }>
              7. Site Terms of Use Modifications
            </Text>
            <Text style={ styles.text }>
              Macro Management may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
            </Text>
            <Text style={ styles.titleText }>
              8. Governing Law
            </Text>
            <Text style={ styles.text }>
              Any claim relating to Macro Management's web site shall be governed by the laws of the State of Florida without regard to its conflict of law provisions.
              General Terms and Conditions applicable to Use of a Web Site.
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
  titleText: {
    marginBottom: 10,
    fontFamily: 'OpenSans-Semibold'
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

export default connect(mapStateToProps)(TermsServiceView);
