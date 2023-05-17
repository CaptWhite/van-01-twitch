import { removeButton } from "../components/renderButton.js"
import { removeVideos } from "../components/renderVideos.js"

export function resetApp() {
    removeVideos()
    removeButton('buttonFile', 'submit1')
    removeButton('buttonFile', 'submit2')
}