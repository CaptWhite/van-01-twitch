
export const getSecretsFile = async  () => {
    const filename =  './.env'
    let response = await fetch(filename)
    let data = await response.text(); 
    const lines = data.split('\n');
    const secrets = {}
    for (let line of lines) {
        var sec = line.split('=')
        secrets[sec[0]] = sec[1]
    }
    return secrets
    //     }
};



export function getSecretsUrl() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const TWcli = urlParams.get('TWcli');
    const TWsct = urlParams.get('TWsct');
    const YTapi = urlParams.get('YTapi');
    return {'TWcli':TWcli, 'TWsct':TWsct, 'YTapi':YTapi}
  }
  
