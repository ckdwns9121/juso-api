import React from 'react';
import styles from './AddrItem.module.scss';

const AddrItem =(props)=>{
    return(
        <div className={styles['item']}>
            <div className={styles['addr1']}> 
                {props.jibunAddr}
            </div>
            <div className={styles['sub']}>
                <div className={styles['addr-box']}>
                    도로명
                </div>
                <div className={styles['addr2']}>
                    {props.roadAddr}
                </div>
            </div>
        </div>
    )
}
export default AddrItem;