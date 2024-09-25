import path, { dirname } from "path"
/** define address / path of root folder */ // mendefinisikan letak foldernya
const ROOT_DIRECTORY = `${path.join(__dirname, `../`)}`

/**
 * __dirname: mendapatkan posisi dari folder 
 * pada file ini (config.ts). -> pada folder "src"
 * "../" -> mundur satu folder ke belakang
*/

export { ROOT_DIRECTORY }