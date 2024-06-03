import fs from "fs"
import path from "path"
import { podcastModel } from "../models/podacast-model"

const pathData = path.join(__dirname, "../repositories/podcast.json")

export const repoPodcast = async (podcastName?: string ): Promise<podcastModel[]> =>{
    const language = "utf-8"

    const rawData = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: podcastModel) => podcast.podcastName === podcastName)
    }


    return jsonFile
}