import {
  FC,
  Dispatch,
  SetStateAction,
  useState
} from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  Divider,
} from '@aws-amplify/ui-react';
import { View, StyleSheet } from 'react-native';
import { FiMenu } from 'react-icons/fi';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  container: {
    position: 'unset',
    overflow: 'visible',
    marginRight: '3rem',
  },
  triggerButton: {
    borderColor: colors.light,
    backgroundColor: colors.dark,
    color: 'white',
    padding: '1rem',
  }
});

interface NavMenuProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const NavMenu: FC<NavMenuProps> = ({ setShowLogin }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <Menu
        isOpen={showMenu}
        menuAlign="end"
        trigger={
          <MenuButton
            size="large"
            style={styles.triggerButton}
            onClick={() => setShowMenu(true)}
          >
            <FiMenu />
          </MenuButton>
        }
      >
        <MenuItem onClick={() => setShowMenu(false)}>
          Start Game
        </MenuItem>
        <MenuItem onClick={() => setShowMenu(false)}>
          High Scores
        </MenuItem>
        <MenuItem onClick={() => setShowMenu(false)}>
          Past Games
        </MenuItem>

        <Divider />

        <MenuButton
          onClick={() => {
            setShowLogin(true);
            setShowMenu(false);
          }}
        >
          Log In
        </MenuButton>
        <MenuButton onClick={() => setShowMenu(false)}>Log Out</MenuButton>
      </Menu>
    </View>
  );
};

export default NavMenu;
