import AppError from "../common/app-error";
import Status from "../common/status-code";
import Database from "../frameworks/services/db.service";
import getRank from "../use-cases/get-rank";
import GetWords from "../use-cases/get-words";

const db = new Database();

interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export default {
  words: async () => {
    const words = new GetWords(db);
    const data = await words.wordsList();
    return [data, 200];
  },

  ranks: async ({ body }: TypedRequestBody<{ score: number }>) => {
    const score = body.score;

    if (!score && score < 0)
      throw new AppError("score is required", Status.BAD_REQUEST);

    if (isNaN(score) || score < 0)
      throw new AppError("score must be a integer number", Status.BAD_REQUEST);

    const rank = new getRank(db);
    const data = await rank.currentRank(score);
    return [{ rank: data.toFixed(1) }, 200];
  },

  notFound: () => {
    return [{ message: "Why are you here?" }, Status.NOT_FOUND];
  },
};
