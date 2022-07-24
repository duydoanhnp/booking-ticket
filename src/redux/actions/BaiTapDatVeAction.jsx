import { DAT_GHE, XOA_GHE } from "../types/BaiTapDatVeType"

export const datGheAction = (ghe) => {
    return{
        type: DAT_GHE,
        ghe
    }
}


export const xoaGheAction = (soGhe) =>{
    return{
        type: XOA_GHE,
        soGhe
    }
}


