import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
     headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '26ff6d511fmshb9a61a8e38426ccp1a2cccjsn697dd230d5f4'
  }   
    });
    return data;
}
