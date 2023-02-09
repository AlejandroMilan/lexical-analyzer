import Analyzer from "../Analyzer";

describe("Analyzer", () => {
  test("int a; debe ser: type identifier delimiter", () => {
    const result = Analyzer.translateSentence("int a;");
    expect(result).toBe("type identifier delimiter");
  });

  test('if (foo == "bar") { a = 1 } debe ser: reservedWord delimiter identifier operator constant delimiter delimiter identifier operator number delimiter', () => {
    const result = Analyzer.translateSentence('if (foo == "bar") { a = 1 }');
    expect(result).toBe(
      "reservedWord delimiter identifier operator constant delimiter delimiter identifier operator number delimiter"
    );
  });

  test('if con salto de línea debe ser: reservedWord', () => {
    const result = Analyzer.translateSentence('\nif');
    expect(result).toBe(
      "reservedWord"
    );
  });

  test('int i;\nif debe ser: type identifier delimiter reservedWord', () => {
    const result = Analyzer.translateSentence('int i;\nif');
    expect(result).toBe(
      "type identifier delimiter reservedWord"
    );
  });

  test('i = "hola mundo" debe ser: identifier operator constant', () => {
    const result = Analyzer.translateSentence('i = "hola mundo"');
    expect(result).toBe(
      "identifier operator constant"
    );
  });
});
