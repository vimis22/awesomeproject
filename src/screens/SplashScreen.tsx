import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import BlackNormalText from '../components/resuable_components/BlackNormalText.tsx';

class SplashScreen extends React.Component<{navigation: any}> {
  render() {
    let {navigation} = this.props;

    return (
        <View style={styles.pageContainer}>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Task1')}>
            <BlackNormalText text={'Click to next screen'} />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#330099',
  },
  buttonContainer: {
    backgroundColor: '#ffec00',
    borderRadius: 10,
    padding: 10,
  },
});

export default SplashScreen;
