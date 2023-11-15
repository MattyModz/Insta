import { describe, it, expect } from "@jest/globals";
import getInstagramPostDate from "./TimestampHelper";

describe("getInstagramPostDate", () => {
  it("returns the correct formatted date for various timestamps", () => {
    const nowTimestamp = Math.floor(Date.now() / 1000);
    const oneMinuteAgo = nowTimestamp - 60;
    const oneHourAgo = nowTimestamp - 3600;
    const oneDayAgo = nowTimestamp - 86400;
    const oneWeekAgo = nowTimestamp - 604800;

    expect(getInstagramPostDate(nowTimestamp)).toEqual("NOW");
    expect(getInstagramPostDate(oneMinuteAgo)).toEqual("1 MINUTES AGO");
    expect(getInstagramPostDate(oneHourAgo)).toEqual("1 HOURS AGO");
    expect(getInstagramPostDate(oneDayAgo)).toEqual("1 DAYS AGO");
    expect(getInstagramPostDate(oneWeekAgo)).toEqual("1 WEEKS AGO");

    expect(getInstagramPostDate("invalidTimestamp")).toEqual(null);
  });
});
