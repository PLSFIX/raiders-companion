import React, { useState, useEffect, useCallback } from "react";
import { Heading, Flex } from "rebass";
import Field from "./Field";
import NavBar from "./NavBar";

function Raid() {
  const [dice, setDice] = useState("");
  const [weapons, setWeapons] = useState("");
  const [gang, setGang] = useState("");
  const [gangAbilities, setGangAbilities] = useState("");
  const [result, setResult] = useState("");
  const reset = useCallback(() => {
    setDice("");
    setWeapons("");
    setGang("");
    setGangAbilities("");
  }, []);
  useEffect(() => {
    if (!!weapons && !!gang) {
      const result =
        (isNaN(parseInt(dice)) ? 0 : parseInt(dice)) +
        parseInt(weapons) +
        parseInt(gang) +
        (isNaN(parseInt(gangAbilities)) ? 0 : parseInt(gangAbilities));
      setResult(result);
    } else {
      setResult("");
    }
  }, [dice, weapons, gang, gangAbilities, result]);

  return (
    <Flex flexDirection="column" height="100%">
      <NavBar reset={reset} />
      <Flex p={10} flexDirection="column" flexShrink={0} mt={60}>
        <Field
          label="Вооружение"
          name="weapons"
          value={weapons}
          onChange={(e) => setWeapons(e.target.value)}
          required
        />
        <Field
          label="Сила отряда"
          name="gang"
          value={gang}
          onChange={(e) => setGang(e.target.value)}
          required
        />
        <Field
          label="Кубики"
          name="dice"
          value={dice}
          onChange={(e) => setDice(e.target.value)}
        />
        <Field
          label="Способности отряда"
          name="gangAbilities"
          value={gangAbilities}
          onChange={(e) => setGangAbilities(e.target.value)}
        />
      </Flex>
      <Flex
        sx={{
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          margin: "auto",
        }}
      >
        {result === "" ? (
          <Heading fontSize={20} color="red">
            Заполни все необходимые поля!
          </Heading>
        ) : (
          <Heading fontSize={150} color="primary">
            {result}
          </Heading>
        )}
      </Flex>
    </Flex>
  );
}

export default Raid;
