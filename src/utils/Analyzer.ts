import Dictionary, { Component } from "./dictionary";
import SentenceCutter from "./SentenceCutter";

export class Analyzer {
  static translateSentence(sentence: string): string {
    const sentenceArray = SentenceCutter.cutSentence(sentence);
    console.log({ sentenceArray })
    return sentenceArray
      .map((word) => Dictionary.getComponent(word).token)
      .join(" ");
  }

  static translateSentenceToComponent(sentence: string): Component[] {
    const sentenceArray = SentenceCutter.cutSentence(sentence);
    return sentenceArray.map((word) => Dictionary.getComponent(word));
  }
}

export default Analyzer;
