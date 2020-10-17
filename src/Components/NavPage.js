import React from "react";
import { Button, Flex, Box } from "rebass";
import { withRouter } from "react-router";

function NavPage(props) {
  const { history } = props;
  return (
    <Flex justifyContent="center" height="100%" className="bg">
      <Flex flexDirection="column" mt={100} width="100%">
        <Box p={10} width="100%">
          <Button
            variant="primary"
            fontSize={30}
            width="100%"
            onClick={() => history.push("/raid")}
          >
            Рейд
          </Button>
        </Box>
        <Box p={10} width="100%">
          <Button
            variant="primary"
            fontSize={30}
            width="100%"
            onClick={() => history.push("/result")}
          >
            Счёт
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default withRouter(NavPage);
