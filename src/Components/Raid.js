import React from "react";
import { observer } from "mobx-react-lite";
import { Heading, Flex, Button } from "rebass";
import Field from "./Field";
import NavBar from "./NavBar";
import { useRootStore } from "../Models/Root";

const Results = observer(() => {
  const { Results } = useRootStore();
  const onChnage = (field) => (e) => {
    Results.editField(field, e.target.value);
  }

  return (
    <Flex flexDirection="column" height="100%">
      <NavBar reset={Results.resetRaid} />
      <Flex p={10} flexDirection="column" flexShrink={0} mt={60}>
        <Field
          label="Вооружение"
          name="weapons"
          value={Results.weapons}
          onChange={onChnage("weapons")}
          required
        />
        <Field
          label="Сила отряда"
          name="gang"
          value={Results.gang}
          onChange={onChnage("gang")}
          required
        />
        <Field
          label="Кубики"
          name="dice"
          value={Results.dice}
          onChange={onChnage("dice")}
        />
        {Results.gangAbilities.map((field, index) => (
          <Field
            key={`gangAbilities${index}`}
            label="Способности отряда"
            name={`gangAbilities${index}`}
            value={Results.gangAbilities[index]}
            onChange={(e) => Results.editGangAbility(index, e.target.value)}
          />
        ))}
        <Flex justifyContent="center" mt={10}>
          <Button variant="primary" mr={2} onClick={Results.removeGangAbility}>
            - способность
          </Button>
          <Button variant="primary" onClick={Results.addGangAbility}>
            + способность
          </Button>
        </Flex>
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
        {Results.raidResult === null ? (
          <Heading fontSize={20} color="red">
            Заполни все необходимые поля!
          </Heading>
        ) : (
          <Heading fontSize={150} color="primary">
            {Results.raidResult}
          </Heading>
        )}
      </Flex>
    </Flex>
  );
});

export default Results;
