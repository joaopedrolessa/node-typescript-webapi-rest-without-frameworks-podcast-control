import * as http from "http";
import {getFilterEp, getListEpisodes} from './controllers/podcast-controller'
import { routs } from "./routs/routs";
import { httpMethods } from "./utils/http-methods";
  
    export const app = async (request: http.IncomingMessage, response:http.ServerResponse) => {

        const baseUrl = request.url?.split("?") [0]

        if(request.method === httpMethods.GET && baseUrl === routs.LIST) {
            await getListEpisodes(request, response)
        }

        if(request.method === httpMethods.GET && baseUrl === routs.EPISODE){
            await getFilterEp(request, response)
        }
    }
