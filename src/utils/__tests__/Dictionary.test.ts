import Dictionary from "../dictionary";

describe("Diccionario", () => {
  test("holaMundo123 debe ser identificador", () => {
    const result = Dictionary.getComponent("holaMundo123");
    expect(result.token).toBe("identifier");
  });

  test("holaMundo debe ser identificador", () => {
    const result = Dictionary.getComponent("holaMundo");
    expect(result.token).toBe("identifier");
  });

  test("Mundo debe ser identificador", () => {
    const result = Dictionary.getComponent("Mundo");
    expect(result.token).toBe("identifier");
  });

  test("MUNDO debe ser identificador", () => {
    const result = Dictionary.getComponent("MUNDO");
    expect(result.token).toBe("identifier");
  });

  test("int debe ser tipo de dato", () => {
    const result = Dictionary.getComponent("int");
    expect(result.token).toBe("type");
  });

  test("{ debe ser delimitador", () => {
    const result = Dictionary.getComponent("{");
    expect(result.token).toBe("delimiter");
  });

  test("} debe ser delimitador", () => {
    const result = Dictionary.getComponent("}");
    expect(result.token).toBe("delimiter");
  });

  test("[ debe ser delimitador", () => {
    const result = Dictionary.getComponent("[");
    expect(result.token).toBe("delimiter");
  });

  test("] debe ser delimitador", () => {
    const result = Dictionary.getComponent("]");
    expect(result.token).toBe("delimiter");
  });

  test("; debe ser delimitador", () => {
    const result = Dictionary.getComponent(";");
    expect(result.token).toBe("delimiter");
  });

  test("+ debe ser operador", () => {
    const result = Dictionary.getComponent("+");
    expect(result.token).toBe("operator");
  });

  test("- debe ser operador", () => {
    const result = Dictionary.getComponent("+");
    expect(result.token).toBe("operator");
  });

  test("* debe ser operador", () => {
    const result = Dictionary.getComponent("*");
    expect(result.token).toBe("operator");
  });

  test("/ debe ser operador", () => {
    const result = Dictionary.getComponent("/");
    expect(result.token).toBe("operator");
  });

  test("< debe ser operador", () => {
    const result = Dictionary.getComponent("<");
    expect(result.token).toBe("operator");
  });

  test("> debe ser operador", () => {
    const result = Dictionary.getComponent(">");
    expect(result.token).toBe("operator");
  });

  test("== debe ser operador", () => {
    const result = Dictionary.getComponent("==");
    expect(result.token).toBe("operator");
  });

  test("!= debe ser operador", () => {
    const result = Dictionary.getComponent("!=");
    expect(result.token).toBe("operator");
  });

  test("if debe ser palabra reservada", () => {
    const result = Dictionary.getComponent("if");
    expect(result.token).toBe("reservedWord");
  });

  test("else debe ser palabra reservada", () => {
    const result = Dictionary.getComponent("else");
    expect(result.token).toBe("reservedWord");
  });

  test("0 debe ser número", () => {
    const result = Dictionary.getComponent(0);
    expect(result.token).toBe("number");
  });
});
