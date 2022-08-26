import { IRankService } from "../core/contracts/rank.contract";


export default class GetRank {
  constructor(private rankService: IRankService) { }

  async currentRank(score: number) {
    const rank = await this.rankService.getRank(score);
    return rank
  }
}