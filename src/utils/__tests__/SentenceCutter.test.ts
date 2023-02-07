import SentenceCutter from "../SentenceCutter";

describe("Sentence cutter", () => {
  test("int a;", () => {
    const result = SentenceCutter.cutSentence("int a;");
    const expected = ["int", "a", ";"];
    expect(result).toEqual(expected);
  });

  test("if (foo == bar)", () => {
    const result = SentenceCutter.cutSentence('if (foo == "bar") {');
    const expected = ["if", "(", "foo", "==", '"bar"', ")", "{"];
    expect(result).toEqual(expected);
  });

  test("if (foo == bar){", () => {
    const result = SentenceCutter.cutSentence('if (foo == "bar"){');
    const expected = ["if", "(", "foo", "==", '"bar"', ")", "{"];
    expect(result).toEqual(expected);
  });

  test('if (foo == "bar") { a = 1 }', () => {
    const result = SentenceCutter.cutSentence('if (foo == "bar") { a = 1 }');
    const expected = [
      "if",
      "(",
      "foo",
      "==",
      '"bar"',
      ")",
      "{",
      "a",
      "=",
      "1",
      "}",
    ];
    expect(result).toEqual(expected);
  });
});
