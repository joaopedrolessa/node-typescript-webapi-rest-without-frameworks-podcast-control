import {IncomingMessage, ServerResponse} from 'http'
import {serviceListEp} from '../services/list-ep-services'
import { serviceFilterEp } from '../services/filter-ep-service'
import { contentType } from '../utils/content-type'
import { podcastTransferModel } from '../models/transfer-podcast-model'

const defaultContente = {'Content-Type': contentType.JSON}

export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {

    const content: podcastTransferModel = await serviceListEp()

    res.writeHead(content.statusCode,defaultContente)
    res.write(JSON.stringify(content.body))

    res.end()
}


export const getFilterEp = async(req : IncomingMessage, res: ServerResponse) =>{


    const content: podcastTransferModel = await serviceFilterEp(req.url)

    res.writeHead(content.statusCode,defaultContente)
        res.write(JSON.stringify(content.body))
    
    res.end()
}