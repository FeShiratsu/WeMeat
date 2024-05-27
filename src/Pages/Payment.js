import style from '../CSS/payment.module.css'
import Input from '../Components/Input';
import PayMethod from '../Components/PayMethod';
import credit from '../Images/credit.png'
import add from '../Images/add.png'
import Button from '../Components/Button';
function Payment(){
    return(
        <main className={style.payment}>
            <PayMethod img={add} name="Add new payment mode"></PayMethod>
            <PayMethod img={credit} name="My Credit card"></PayMethod>
            <p className={style.p}>My Address</p>
            <Input nameASs="City"></Input>
            <Input nameASs="Address"></Input>
            <Input nameASs="Reference"></Input>
            <Button text="Order"></Button>
        </main>
    );
}
export default Payment