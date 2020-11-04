import React from "react";
import { observer } from "mobx-react-lite";
import { Heading, Flex, Button } from "rebass";
import Field from "./Field";
import NavBar from "./NavBar";
import { useRootStore } from "../Models/Root";

const Result = observer(() => {
  const { Results } = useRootStore();
  const onChnage = (field) => (e) => {
    Results.editField(field, e.target.value);
  };

  return (
    <Flex flexDirection="column" height="100%">
      <NavBar reset={Results.resetGame} />
      <Flex p={10} flexDirection="column" flexShrink={0} mt={60}>
        <Field
          label="Очки"
          name="points"
          value={Results.points}
          onChange={onChnage("points")}
          required
        />
        <Field
          label="Подношения"
          name="offerings"
          value={Results.offerings}
          onChange={onChnage("offerings")}
          required
        />
        <Field
          label="Вооружение"
          name="weapons"
          value={Results.weapons}
          onChange={onChnage("weapons")}
          required
        />
        <Field
          label="Золото"
          name="gold"
          value={Results.gold}
          onChange={onChnage("gold")}
          required
        />
        <Field
          label="Железо"
          name="iron"
          value={Results.iron}
          onChange={onChnage("iron")}
          required
        />
        <Field
          label="Скот"
          name="stock"
          value={Results.stock}
          onChange={onChnage("stock")}
          required
        />
        <Field
          label="Валькирии"
          name="valk"
          value={Results.valk}
          onChange={onChnage("valk")}
          required
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
      <Flex p={10} alignItems="center" justifyContent="center" flexShrink={0}>
        {Results.gameResult === null ? (
          <Heading fontSize={20} color="red">
            Заполни все необходимые поля!
          </Heading>
        ) : (
          <Heading fontSize={95} color="primary">
            {Results.gameResult}
          </Heading>
        )}
      </Flex>
    </Flex>
  );
});

export default Result;
