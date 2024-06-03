import { podcastTransferModel } from "../models/transfer-podcast-model"
import {repoPodcast} from "../repositories/podcast-repository"
import { statusCode } from "../utils/status-code"

export const serviceListEp = async (): Promise<podcastTransferModel> => {

    let responseFormate: podcastTransferModel = {
        statusCode: 0,
        body: [],
    }
    
    const data = await repoPodcast()

    responseFormate = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NoContent,
        body: data
    }


    return responseFormate
}