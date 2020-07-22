import React from 'react';

import SignIn from './pages/Signin';
import SingUp from './pages/Signup';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    {/* <SingUp /> */}
    <GlobalStyle />
  </>
);

export default App;
