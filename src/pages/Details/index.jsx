import { Button } from "../../components/button";
import { Container } from "./styles";

export function Details() {
  return (
    <>
      <Container>
        <h1>Rocket Notes</h1>
        <Button title="Botão 1" />
        <Button title="Botão 2" loading />
      </Container>
    </>
  )
}