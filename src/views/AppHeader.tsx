import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from '@aws-amplify/ui-react';
import NavMenu from '../components/NavMenu';
import colors from '../const/colors';
import LoginModal from '../components/Modals/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.light,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15vh',
    maxHeight: '150px',
    width: '100%',
    zIndex: 10000,
  },
});

const AppHeader = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={styles.container} >
      <Image
        alt="High Score Games logo"
        src={require('../../assets/logo.png')}
        backgroundColor="initial"
        height="100%"
        width="auto"
        opacity="100%"
      />
      <NavMenu setShowLogin={setShowLogin} />
      <LoginModal setShowLogin={setShowLogin} showLogin={showLogin} />
    </View>
  );
};

export default AppHeader;
