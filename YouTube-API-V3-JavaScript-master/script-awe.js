import { getSecretsFile, getSecretsUrl } from '../src/helpers/getSecrets.js'

const keys = await getSecretsUrl();
const {YTapi: YOUTUBE_API_KEY} = keys ;

async function main(query) {
    console.log("Ready to get Youtube data!");
    const CHANNELID = 'UCHwtud9tX_26eNKyZVoKfjA'
    //const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`;
    const url = `https://youtube.googleapis.com/youtube/v3/search?channelId=${CHANNELID}&maxResults=5&key=${YOUTUBE_API_KEY}&part=snippet&pageToken=`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
 
    /* 
    const videos = []
    maxResults = 50
    let nextPageToken = ''
    while (nextPageToken != 'fin') {
        itemResponse = queries(youtube, nextPageToken)
      }
      



    while nextPageToken != 'fin':
        itemResponse = queries(youtube, nextPageToken)
        if 'nextPageToken' in itemResponse:
            nextPageToken = itemResponse['nextPageToken']
        else: 
            nextPageToken = 'fin'
        busqueda(itemResponse)
    grabarExcel()    
    print(f'Lista {CHANNEL} finalizada')   



    const queries = (youtube, nextPageToken) => {
        const CHANNELID = 'UCHwtud9tX_26eNKyZVoKfjA'
        const url = `https://www.googleapis.com/youtube/v3/search? key=${YOUTUBE_API_KEY}& type=video& part=snippet& q=${query}`;
        const url = `https://youtube.googleapis.com/youtube/v3/search?& channelId=${CHANNELID}&maxResults=5 &key=${YOUTUBE_API_KEY} part=snippet& q=${query} pageToken=''
    request = youtube.search().list(
        part="id,snippet",
        channelId=CHANNELID,               UCHwtud9tX_26eNKyZVoKfjA
        type='video',                      video
        pageToken = nextPageToken,         nextPageToken
        maxResults=maxResults
    )
    response = request.execute()
    return response */
    return data;
  }
  
  main("JavaScript");