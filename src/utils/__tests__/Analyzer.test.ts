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
});
