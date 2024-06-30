import { applyMode, Mode } from "@cloudscape-design/global-styles";
import Scene from "./components/scene";
import { Container, Grid, Input } from "@cloudscape-design/components";
import Chat from "./components/chat";
import { useState } from "react";

applyMode(Mode.Dark);

function App() {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Grid disableGutters gridDefinition={[{ colspan: 8 }, { colspan: 4 }]}>
        <Container disableContentPaddings>
          <Scene />
        </Container>
        <Container disableContentPaddings>
          <Input
            value={value}
            onChange={(newValue) => setValue(newValue.detail.value)}
            placeholder="GroqのAPIキーを入力"
          />
          <Chat groqKey={value} />
        </Container>
      </Grid>
    </>
  );
}

export default App;
