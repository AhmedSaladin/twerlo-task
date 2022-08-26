export interface IRankService {
  getRank(score: number): Promise<number>;
}