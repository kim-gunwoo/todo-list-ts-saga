import React from "react";
import styled from "styled-components";
import TodoContainer from "components/TodoContainer";

function App() {
  return (
    <Container>
      <TodoContainer />
    </Container>
  );
}

const Container = styled.div``;

export default App;
