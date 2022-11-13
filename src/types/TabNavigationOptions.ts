import { ReactNode } from 'react';

type TabNavigationOptions = {
  renderIcon(): ReactNode;
  title?: string;
};

export default TabNavigationOptions;