export async function writeFile(videos, channel) {
    let areaText = '';
    videos.forEach((video) => {
        let { url, title} = video;
        areaText += `
  rem ${title}
  "c:\\\\Program Files\\Youtube-dl\\youtube-dl.exe" ${url}
  pause`
    })
    const options = {
        types: [
          {
            suggestedName: `${channel}.bat`,
            description: "Batch files",
            accept: {
              "text/plain": [".bat"],
            },
          },
        ],
      };
      
      const handle = await window.showSaveFilePicker(options);
      const writable = await handle.createWritable();
      
      await writable.write(areaText);
      await writable.close();
  }
  