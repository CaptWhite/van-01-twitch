
const getAuthotization = async ( clientId, clientSecret ) => {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`
    let resp = await fetch(url,  {method: "POST"})
    const { access_token, _, __ } = await resp.json ( )
    return `Bearer ${access_token}`
  }
  
const getUserId = async ( clientId, token, user ) => { 
    const url = `https://api.twitch.tv/helix/users?login=${user}`
    let headers = { "authorization": token, "Client-Id": clientId };
    const resp = await fetch(url,  {headers, method: "GET"})
    const data = await resp.json ( )
    return data.data[0].id
  };
  
const getVideos = async (clientId, token, userId ) => { 
    const url = `https://api.twitch.tv/helix/videos?${new URLSearchParams({ user_id: userId, first: 50 }).toString()}`
    let headers = { "authorization": token, "Client-Id": clientId };
    const resp = await fetch(url,  {headers, method: "GET"})
    const data = await resp.json ( )
    return data.data 
  };

export  const getTwitch = async (keys, channel ) => {
  const {TWcli: clientId, TWsct:clientSecret} = keys 
  const token = await getAuthotization(clientId, clientSecret)
  const userId = await getUserId(clientId, token, channel)
  const videos = await getVideos(clientId, token, userId)
  return videos
}