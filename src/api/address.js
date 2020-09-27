import axios from 'axios';

const URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const KEY= 'devU01TX0FVVEgyMDIwMDgyMzIxNTAzMDExMDA4OTU=';

export const searchAddress= async (serach) =>{

    const query = `${URL}?confmKey=${KEY}&currentPage=1&countPerPage=10&keyword=${serach}&resultType=json`;
    const res = await axios.get(query);
    console.log(res);
    return res.data.results.juso;

}