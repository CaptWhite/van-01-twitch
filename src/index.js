
import { getTwitch} from './services/twitch.js'
import { getYoutube } from './services/youtube.js'
import { writeFile} from './services/file-system.js'
import { resetApp} from './services/resetApp.js'
import { renderVideos} from './components/renderVideos.js'
import { renderButton} from './components/renderButton.js'
import { renderForm } from './components/renderForm.js'
import { MEDIA, CHANNEL} from './datos/params.js'
import { getSecretsFile, getSecretsUrl } from './helpers/getSecrets.js'



async function getTwitchAPI() {
  const media = document.getElementById(MEDIA).value
  const channel = document.getElementById(CHANNEL).value
  let videos = []
  if (media == '' || channel == '') return 
  if (media == 'twitch')  videos = await getTwitch(keys, channel)
  if (media == 'youtube')  videos = await getYoutube(keys, channel)

  renderVideos(videos)
  renderButton('buttonFile', 'Grabar BAT', 'submit1', {channel, videos}, writeFile); 
  renderButton('buttonFile', 'Reset', 'submit2', {}, resetApp); 
} 
  //const keys = await getSecretsFile();
  const keys = getSecretsUrl()
  renderForm(getTwitchAPI)
