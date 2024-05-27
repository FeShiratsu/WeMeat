import style from '../CSS/payMeth.module.css'
function PayMethod({name,img}){
    return (
        <div className={style.pMeth}>
            <img src={img}></img>
            <p>{name}</p>
            <p className={style.test}>baba</p>
        </div>
    );
}
export default PayMethod