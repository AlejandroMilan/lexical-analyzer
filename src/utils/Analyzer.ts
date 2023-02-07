import Dictionary, { Component } from "./dictionary";
import SentenceCutter from "./SentenceCutter";

export class Analyzer {
  static translateSentence(sentence: string): string {
    const sentenceArray = SentenceCutter.cutSentence(sentence);
    return sentenceArray
      .map((word) => Dictionary.getComponent(word).token)
      .join(" ");
  }
}

export default Analyzer;
