import React, { Component } from "react";
import {connect} from 'react-redux'
import { xoaGheAction } from "../redux/actions/BaiTapDatVeAction";
class ThongTinDatGhe extends Component {
  renderTongTien = () =>{
    let sum = 0;
    for(let index of this.props.stateGheDaDat.gheDaDat){
      sum += index.gia
    }
    return sum
  }
  render() {
    console.log(this.props);
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        <span className="ml-3 text-light" style={{ fontSize: "30px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span className="ml-3 text-light" style={{ fontSize: "30px" }}>
          Ghế đang đặt
        </span>
        <br />
        <button style={{ marginLeft: "0" }} className="ghe"></button>
        <span className="ml-3 text-light" style={{ fontSize: "30px" }}>
          Ghế chưa đặt
        </span>
        <div className="mt-5">
            <table className="table" border="2">
                <thead>
                    <tr className="text-light" style={{fontSize:"35px"}}>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.stateGheDaDat.gheDaDat.map((ghe,key) =>{
                     return <tr className="text-warning" style={{fontSize: "30px"}} key={key}>
                        <td>{ghe.soGhe}</td>
                        <td>{ghe.gia.toLocaleString()}</td>
                        <td>
                          <button onClick={() =>{
                            this.props.xoaGhe(ghe.soGhe)
                          }} className="btn btn-danger">Xóa</button>
                        </td>
                     </tr>
                   })}
                   <tr className="text-light" style={{fontSize: "30px"}}>
                     <td></td>
                     <td>Tổng tiền:</td>
                     <td>{this.renderTongTien().toLocaleString()}</td>
                   </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (rootReducer) =>{
    return{
      stateGheDaDat : rootReducer.BaiTapDatVeReducer
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
      xoaGhe : (soGhe) =>{
        dispatch(xoaGheAction(soGhe))
       
        }
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)
