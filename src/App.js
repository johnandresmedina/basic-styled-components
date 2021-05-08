import styled from "styled-components";

import Header from "components/common/Header";
import Link from "components/common/Link";
import Rotate360 from "components/common/Rotate360";
import Image from "components/common/Image";
import logo from "./logo.svg";

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <Rotate360>
          <Image src={logo} alt="logo" />
        </Rotate360>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org">Learn React</Link>
      </Header>
    </AppContainer>
  );
};

export default App;
