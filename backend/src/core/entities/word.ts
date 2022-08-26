export default class Word {
  id: number;
  word: string;
  pos: string;

  constructor(id: number, word: string, pos: string) {
    this.id = id;
    this.word = word;
    this.pos = pos;
  }

}