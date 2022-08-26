import Word from "../entities/word";

export interface IWordService {
  getWords(): Promise<Word[]>
}