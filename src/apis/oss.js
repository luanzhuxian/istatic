import fecth from '../assets/js/fetch-config'

/**
 * 获取文件列表
 * @return {Promise<*>}
 */
export const getFiles = (prefixe) => fecth.get(`/api/file?prefixe=${prefixe}`)
/**
 * 上传文件
 * @param data {object}
 * @return {Promise<*>}
 */
export const uploadFiles = (dir, data) => fecth.post(`/api/file?dir=${dir}`, data, { type: 'FormData' })
/**
 * 创建目录
 * @param dirname {string}
 * @return {Promise<*>}
 */
export const createDir = (dirname) => fecth.post(`/api/create/dir/${dirname}`)