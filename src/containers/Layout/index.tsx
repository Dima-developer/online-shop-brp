import React, { FC } from 'react';
import NavBlock from '../NavBlock';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBlock />
      {children}
    </div>
  );
};
export default Layout;
