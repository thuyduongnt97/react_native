import * as Types from '../constants/ActionTypes'

export const actFetchLinks = (links) =>{
    return {
        type : Types.FETCH_LINK,
        links
    }
}