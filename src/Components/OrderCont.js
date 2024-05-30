import styles from '../CSS/ordercont.module.css'
import { useState } from 'react'
import { EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react'
import Button from './Button';
import right from '../Images/right.png'
import left from '../Images/left.png'
import {createItemJS} from '../Objects/OrderItem'

function OrderContainer({ items, color, counter, setCounter, title,AddCart }) {//map the items, update here or main

    const [swiper, setSwiper] = useState();
    const [pass, setPass] = useState("");


    function setStyle(counter) {
        switch (counter) {
            case 0:
                return styles.Panel1

            case 1:
                return styles.Panel2

            case 2:
                return styles.Panel3
        }
    }

    function nextSlide(){
        console.log(counter)
        if(swiper.activeIndex==2){
            swiper.slideTo(0);
            return
        }
        swiper.slideNext()
    }

    function prevSlide(){
        if(swiper.activeIndex==0){
            swiper.slideTo(2);
            return
        }
        swiper.slidePrev()
    }
    return (
        <div className={styles.merger}>
            <img onClick={prevSlide} id='back'  className={styles.arrows} src={left}></img>
            <div className={styles.container}>
            <div className={styles.container}>
                <p className={styles.cat}>{title}</p>
                <Swiper  onInit={(swiper) => setSwiper(swiper)}  onSlideChange={(value) => setCounter(value.activeIndex)} modules={EffectFade}  slidesPerView={1} className={styles.swiper}>
                    <img  className={styles.arrows} src={left}></img>
                    {
                        items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={items[counter].image} alt='Slider' className='slide-item'></img>
                            </SwiperSlide>
                        ))
                    }
                    <img  className={styles.arrows} src={left}></img>
                </Swiper>
                <p className={styles.title}>{items[counter].nome}</p>
                <p className={styles.price}>{items[counter].price}U$</p>
                <p className={styles.desc}>{items[counter].desc}</p>
                <button onClick={() => AddCart(items[counter])} className={styles.cart}>Add to cart</button>
            </div>
            </div>
            <img onClick={nextSlide} id='next' className={styles.arrows} src={right}></img>
        </div>
    );
}


/*

        <div className={styles.container}>
            <img onClick={()=>{movePanel("back")}} className={styles.arrows} src={left}></img>
            <div  className={styles.orderCont} style={{ backgroundColor: `#${color}` }}>
                <Swiper navigation slidesPerView={1} pagination={{clickable:false}} className={styles.swiper}>
                    {
                        items.map((item)=>(
                            <SwiperSlide key={item.id}>
                                <img src= {burg} alt='Slider' className='slide-item'></img>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <p className={styles.title}>{items[counter].nome}</p>
                <p className={styles.desc}>{items[counter].desc}</p>
            </div>
            <img onClick={()=>{movePanel("forward")}} className={styles.arrows} src={right}></img>
        </div>
*/

export default OrderContainer