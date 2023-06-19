const loadLib = async () => {
    return {}
}

let libCache
let isReq

const getLib = async () => {
    if (libCache) return libCache
    if (isReq) return isReq

    try {
        isReq = loadLib()
        const res = await isReq
        libCache = res

    } catch (error) {
        isReq = null
        throw error
    }
}
