import React from 'react';
import AddrItem from './AddrItem';

const AddrItemList =({list}) =>{
    const addr_list = list.map((addr,index)=>(
        <AddrItem key={index} {...addr}/>
    ));

    return(
        <>{addr_list}</>
    )
}

export default AddrItemList;