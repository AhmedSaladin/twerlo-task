import Word from "../entities/word";

export interface IActivityService {
  getRank(score: number): Promise<number>;

  getWords(): Promise<Word[]>;
}