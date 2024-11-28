import { Container } from "@mui/material";
import React from "react";
import Terminal from "./Terminal";
import Window from "../../components/AppWindow";

export default function TerminalLayout() {
  return (
    <div>
      <Container>
        <Window title={"Terminal"}  >
          <Terminal />
        </Window>
      </Container>
    </div>
  );
}
