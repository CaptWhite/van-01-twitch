import { pYoutube} from '../datos/params.js'

const getUserId = async ( channelName ) => { 
  const sel = pYoutube.options.filter( opt => opt.value == channelName)
  return sel[0].idYT
  };
  
const getVideos = async ( apikey, userId ) => { 
  const API_KEY = apikey
  const url = `https://youtube.googleapis.com/youtube/v3/search?channelId=${userId}&maxResults=20&key=${API_KEY}&part=snippet&order=date&pageToken=`

  const resp = await fetch(url,  {method: "GET"})
  const data = await resp.json ( )
  return data.items 
};

export  const getYoutube = async (keys, channel) => {
  const {YTapi: apikey} = keys 
  const userId = await getUserId(channel)
  const items = await getVideos(apikey, userId)

  const videos = items.map(video => ( {
    "thumbnail_url": video.snippet.thumbnails.high.url,
    "title": video.snippet.title,
    "view_count": '',
    "published_at": video.snippet.publishedAt,
    "url": 'https://www.youtube.com/watch?v='+video.id.videoId
  }))
  return videos
}
  