import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton.tsx';

class SplashScreen extends React.Component<{navigation: any}> {
  render() {
    let {navigation} = this.props;

    return (
        <View style={styles.pageContainer}>
          <ActionButton onPress={() => navigation.navigate('Task4')} title={'Click to next screen'} backgroundColor={'#ffec00'} />
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
