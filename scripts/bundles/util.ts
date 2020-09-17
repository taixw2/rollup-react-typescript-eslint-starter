import fs from 'fs'

export const JSONLoad = (jsonFilePath: string): { [k: string]: unknown } => {
  try {
    return JSON.parse(fs.readFileSync(jsonFilePath).toString('utf8'))
  } catch (error) {
    throw new Error('jsonFile: ' + jsonFilePath + ' \nerror: \n' + error)
  }
}
