import WelcomeToOracle from "./WelcomeToOracle";

export default function Second({ renderEFX }) {
  return <>{renderEFX && <WelcomeToOracle />}</>;
}
