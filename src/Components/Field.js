import React from "react";
import { Flex, Box, Text } from "rebass";
import { Label, Input } from "@rebass/forms";

function Field({ label, name, required, value, onChange }) {
  return (
    <Flex alignItems="center" flexShrink={0} my={10}>
      <Box width="100%">
        <Label
          htmlFor="points"
          sx={{
            fontSize: 22,
            lineHeight: 1.2,
          }}
        >
          {label}
        </Label>
        {!required && (
          <Text color="#4b00ff85" fontSize={15}>
            Если есть
          </Text>
        )}
      </Box>
      <Input
        id="name"
        name="name"
        type="number"
        pattern="[0-9]*"
        fontSize={30}
        value={value}
        onChange={onChange}
      />
    </Flex>
  );
}

export default Field;