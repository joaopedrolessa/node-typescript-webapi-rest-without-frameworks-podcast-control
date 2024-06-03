import { repoPodcast } from "../repositories/podcast-repository"
import { podcastTransferModel } from "../models/transfer-podcast-model"
import { statusCode } from "../utils/status-code"



export const serviceFilterEp = async (podcastName: string | undefined): Promise<podcastTransferModel> => {

    //definir interface
    let responseFormate: podcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //buscar dados
    const querrystring = podcastName?.split("?p=")[1] || ""
    const data = await repoPodcast(querrystring)

    //verificar se tem conteudo
    responseFormate.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NoContent
    responseFormate.body = data

    return responseFormate
}