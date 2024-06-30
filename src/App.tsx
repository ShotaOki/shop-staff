import { applyMode, Mode } from "@cloudscape-design/global-styles";
import Scene from "./components/scene";
import { Container, Grid } from "@cloudscape-design/components";
import Chat from "./components/chat";

applyMode(Mode.Dark);

function App() {
  return (
    <>
      <Grid disableGutters gridDefinition={[{ colspan: 8 }, { colspan: 4 }]}>
        <Container disableContentPaddings>
          <Scene />
        </Container>
        <Container disableContentPaddings>
          <Chat />
        </Container>
      </Grid>
    </>
  );
}

export default App;
