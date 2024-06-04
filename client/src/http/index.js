import { SERV_CONN, BUCKET_CONN } from "../utils/const";

export const getMain = async () => {
    return await fetch(`${SERV_CONN}`)
        .then(resp => resp.json());
}

export const getPrice = async () => {
    return await fetch(`${SERV_CONN}/price`)
        .then(resp => resp.json());
}

export const getPriceGroup = async (type) => {
    return await fetch(`${SERV_CONN}/price/${type}`)
        .then(resp => resp.json());
}

export const getPriceItem = async (id) => {
    return await fetch(`${SERV_CONN}/item/${id}`)
        .then(resp => resp.json());
}

export const getEvents = async () => {
    return await fetch(`${SERV_CONN}/events`)
        .then(resp => resp.json());
}

export const getAbout = async () => {
    return await fetch(`${SERV_CONN}/about`)
        .then(resp => resp.json());
}

export const getPic = async (path) => {
    if(path) {
        // const res = await fetch(`http://${SERV_CONN + '/photo/?imgpath=' + path}`)
        //const res = await fetch(BUCKET_CONN + path, {mode: 'no-cors'})
       // const blobImg = await res.blob()
       // return URL.createObjectURL(blobImg)
	return BUCKET_CONN + path
    }
}
