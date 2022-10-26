import { Dispatch, SetStateAction, FC } from 'react';
import { Amplify } from 'aws-amplify';
import {
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Authenticator, Button, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';
import useResponsiveWeb from '../../hooks/useResponsiveWeb';
import colors from '../../const/colors';

Amplify.configure(awsExports);

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 'calc(500px + 4rem)',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  desktopLogin: {
    borderRadius: 12,
    boxShadow: `0 0 10px ${colors.dark}`,
    marginTop: '5rem',
    padding: '2rem',
    maxHeight: 'calc(400px + 4rem)',
  },
  banner: {
    marginBottom: '2rem',
  },
  closeButton: {
    width: '8rem',
    marginTop: '2rem',
    alignSelf: 'flex-end',
  }
});

interface LoginProps {
  showLogin: boolean;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginModal: FC<LoginProps> = ({ showLogin, setShowLogin }) => {
  const isDesktop = useResponsiveWeb();

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => setShowLogin(false)}
      visible={showLogin}
      transparent
      style={styles.modal}
    >
      <View style={[styles.login, isDesktop && styles.desktopLogin]}>
        <ScrollView>
          {!isDesktop && (
            <Image
              alt="High Score Games logo"
              src={require('../../../assets/logo.png')}
              backgroundColor="initial"
              width="100%"
              height="auto"
              opacity="100%"
              style={styles.banner}
            />
          )}
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user?.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
          <Button
            onClick={() => setShowLogin(false)}
            style={styles.closeButton}
          >
            Close
          </Button>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default LoginModal;
