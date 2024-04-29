import Background from "./Component/Background/Background";
import LiveBG from "./Component/LiveBG/LiveBG";
import Welcome from "./Component/Welcome/Welcome";
import Test from "./Component/test/test";
import Text from "./Component/Text/Text";

function App() {
  return (
    <>
      <LiveBG />
      {/* <Background /> */}
      <Text />

      <Welcome />
      {/* <Test /> */}
    </>
  );
}

export default App;