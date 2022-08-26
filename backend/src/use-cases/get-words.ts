import { IWordService } from "../core/contracts/word.contract";
import Word from "../core/entities/word";

interface listType {
  [key: string]: boolean;
}

export default class GetWords {
  constructor(private wordsService: IWordService) {}

  async wordsList() {
    const list = await this.wordsService.getWords();
    const listTypes: listType = this.list();

    if (list.length == 0) return [];

    const result = [];

    for (let i = 0; i < list.length; i++) {
      const element:Word  = list[i]!;

      if (result.length == 4) break;

      if (!listTypes?.[element["pos"]]) {
        listTypes[element["pos"]] = true;
        result.push(element);
      }
    }

    for (let i = 0; i < 6; i++) {
      const number = this.generateRandomNumber(14);
      const element = list[number];
      result.push(element);
    }

    return result;
  }

  private generateRandomNumber(max: number) {
    const random = Math.random();
    return Math.round(random * max);
  }

  private list() {
    return {
      noun: false,
      verb: false,
      adjective: false,
      adverb: false,
    };
  }
}
