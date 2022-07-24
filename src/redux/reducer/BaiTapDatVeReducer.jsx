import { DAT_GHE, XOA_GHE } from "../types/BaiTapDatVeType"

const stateDefault = {
    gheDaDat : [
    ],
}

export const BaiTapDatVeReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case XOA_GHE :{
            state.gheDaDat = state.gheDaDat.filter(ghe => ghe.soGhe !== action.soGhe)
            return {...state}
        }
        case DAT_GHE :{
            let newArr = [...state.gheDaDat]
            let indexSoGhe = newArr.findIndex(ghe=>ghe.soGhe == action.ghe.soGhe)
            if(indexSoGhe !== -1){
                newArr.splice(indexSoGhe, 1)
            }else{
                newArr.push(action.ghe)
            }
            state.gheDaDat = newArr
            return{...state}
        }
        default:return state
    }
}