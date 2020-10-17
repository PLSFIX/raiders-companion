import React from "react";
import { Button, Flex } from "rebass";
import { withRouter } from "react-router";

function NavBar({ history, reset }) {
  return (
    <Flex
      sx={{
        padding: 10,
        justifyContent: "space-between",
        flexShrink: 0,
        position: "fixed",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Button variant="outline" color="white" onClick={() => history.goBack()}>
        Назад
      </Button>
      <Button variant="secondary" onClick={reset}>
        Сбросить
      </Button>
    </Flex>
  );
}

export default withRouter(NavBar);