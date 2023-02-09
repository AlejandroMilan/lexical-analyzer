interface CutSeparator {
  key: string;
  cutKey: string;
  cutReplace: string;
}

export const cutSeparators: CutSeparator[] = [
  {
    key: ";",
    cutKey: "__comma__",
    cutReplace: "__comma__;",
  },
  {
    key: "{",
    cutKey: "__keyOpen__",
    cutReplace: "__keyOpen__{",
  },
  {
    key: "}",
    cutKey: "__keyClose__",
    cutReplace: "__keyClose__}",
  },
  {
    key: "[",
    cutKey: "__bracketOpen__",
    cutReplace: "[__bracketOpen__",
  },
  {
    key: "]",
    cutKey: "__bracketClose__",
    cutReplace: "__bracketClose__]",
  },
  {
    key: "(",
    cutKey: "__parenthesisOpen__",
    cutReplace: "(__parenthesisOpen__",
  },
  {
    key: ")",
    cutKey: "__parenthesisClose__",
    cutReplace: "__parenthesisClose__)",
  },
];

export class SentenceCutter {
  static cutSentence(sentence: string): string[] {
    let result: any = sentence;

    cutSeparators.forEach((separator) => {
      result = result.replaceAll(separator.key, separator.cutReplace);
      result = result.split(separator.cutKey).join(" ");
    });

    result = result.split(/ |\n/).filter((element: string) => !!element);

    return result;
  }
}

export default SentenceCutter;
