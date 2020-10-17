import React, { useState, useEffect, useCallback } from "react";
import { Heading, Flex } from "rebass";
import Field from "./Field";
import NavBar from "./NavBar";

function Result() {
  const [points, setPoints] = useState("");
  const [weapons, setWeapons] = useState("");
  const [gold, setGold] = useState("");
  const [iron, setIron] = useState("");
  const [stock, setStock] = useState("");
  const [valk, setValk] = useState("");
  const [gangAbilities, setGangAbilities] = useState("");
  const [result, setResult] = useState("");
  const reset = useCallback(() => {
    setPoints("");
    setWeapons("");
    setGold("");
    setIron("");
    setStock("");
    setValk("");
    setGangAbilities("");
  }, []);
  const calcValc = (val) => {
    switch (val) {
      case "0":
      case "1":
        return 0;
      case "2":
        return 1;
      case "3":
        return 2;
      case "4":
        return 4;
      case "5":
        return 7;
      case "6":
        return 10;
      case "7":
        return 15;
      default:
        return 15;
    }
  };
  const calcWeapons = (val) => {
    switch (val) {
      case "10":
      case "9":
        return 6;
      case "8":
      case "7":
      case "6":
        return 4;
      case "5":
      case "4":
      case "3":
        return 2;
      case "2":
      case "1":
      case "0":
        return 0;
      default:
        return 6;
    }
  };
  useEffect(() => {
    if (
      !!points &&
      !!weapons &&
      !!gold &&
      !!iron &&
      !!stock &&
      !!valk
    ) {
      const actuatStock = Math.floor(parseInt(stock) / 2);
      const result =
        parseInt(points) +
        calcWeapons(weapons) +
        parseInt(gold) +
        parseInt(iron) +
        actuatStock +
        calcValc(valk) +
        (isNaN(parseInt(gangAbilities)) ? 0 : parseInt(gangAbilities));
      setResult(result);
    } else {
      setResult("");
    }
  }, [weapons, valk, result, points, gold, iron, stock, gangAbilities]);

  return (
    <Flex flexDirection="column" height="100%">
      <NavBar reset={reset} />
      <Flex p={10} flexDirection="column" flexShrink={0} mt={60}>
        <Field
          label="Очки"
          name="points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          required
        />
        <Field
          label="Вооружение"
          name="weapons"
          value={weapons}
          onChange={(e) => setWeapons(e.target.value)}
          required
        />
        <Field
          label="Золото"
          name="gold"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
          required
        />
        <Field
          label="Железо"
          name="iron"
          value={iron}
          onChange={(e) => setIron(e.target.value)}
          required
        />
        <Field
          label="Скот"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <Field
          label="Валькирии"
          name="valk"
          value={valk}
          onChange={(e) => setValk(e.target.value)}
          required
        />
        <Field
          label="Способности отряда"
          name="gangAbilities"
          value={gangAbilities}
          onChange={(e) => setGangAbilities(e.target.value)}
        />
      </Flex>
      <Flex p={10} alignItems="center" justifyContent="center" flexShrink={0}>
        {result === "" ? (
          <Heading fontSize={20} color="red">
            Заполни все необходимые поля!
          </Heading>
        ) : (
          <Heading fontSize={95} color="primary">
            {result}
          </Heading>
        )}
      </Flex>
    </Flex>
  );
}

export default Result;
