import style from '../CSS/menuItem.module.css'

function MenuItem({img,itemName,description}){
    return(
        <div className={style.menuItem}>
            <img src={img}></img>
            <div className={style.text}>
                <p className={style.title}>{itemName}</p>
                <p className={style.desc}>{description}</p>
            </div>

        </div>
    );
}
export default MenuItem