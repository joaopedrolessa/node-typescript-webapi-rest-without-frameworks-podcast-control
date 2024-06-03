import { podcastModel } from "./podacast-model";

export interface podcastTransferModel {
    statusCode: number,
    body: podcastModel[]
}