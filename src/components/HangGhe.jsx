import React, { Component } from 'react'
import {connect} from  'react-redux'
import { datGheAction } from '../redux/actions/BaiTapDatVeAction'
class HangGhe extends Component {
    renderGhe = () =>{
        let{hangGhe} = this.props
        return hangGhe.danhSachGhe.map((ghe,key) =>{
       
            let cssGheDaDat = "";
            let disable = false;
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon'
                disable = true
            }

            let cssGheDangChon = "";
            let indexGheDangDat = this.props.stateGhe.gheDaDat.findIndex(gheDangDat => gheDangDat.soGhe == ghe.soGhe)
            if(indexGheDangDat !== -1){
                cssGheDangChon = "gheDangChon"
            }


            return <button  onClick={() =>{
                this.props.datGhe(ghe)
            }} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} key={key}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHangGhe = () =>{
        return <span className='rowNumber'>{this.props.hangGhe.danhSachGhe.map((tenHang,key) =>{
            return <button className='rowNumber'>{tenHang.soGhe}</button>
        })}</span>
    }
    renderHangGhe = () =>{
        let{hangGhe} = this.props
        if(this.props.soHangGhe ==0){
            return <div>
            {hangGhe.hang}{this.renderSoHangGhe ()}
        </div> 
        }else{
            return <div>
                {hangGhe.hang}{this.renderGhe()}
            </div> 
        }
    }

  render() {
      let{hangGhe} = this.props
    return (
      <div className='text-light text-left ml-5 mt-2' style={{fontSize:30}}>
          {this.renderHangGhe()}
      </div>
    )
  }
}




const mapStateToProps = (rootReducer) =>{
    return{
        stateGhe: rootReducer.BaiTapDatVeReducer
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        datGhe : (ghe) =>{
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)