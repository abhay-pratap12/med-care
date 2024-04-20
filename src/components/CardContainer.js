import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';

const CardContainer = () => {

    const userTracker = useSelector((store) => store.userTrack);
  const user = useSelector((store)=>store.user)
  console.log("user",userTracker)
  const [datat,setDatat] = useState(null)
//   const [trackdata,setTrackdata] = useState()
  
  const {userTrack} = userTracker

//   const filterUserTracker = userTrack.filter((r)=>user.userId == r._document.data.value.mapValue.fields.uId.stringValue)

//   console.log(filterUserTracker)

//   const trackdata = filterUserTracker[0]

const trackdata = [];

   userTrack.map((x)=>trackdata.push(x._document.data.value.mapValue.fields.track.stringValue))
  console.log("data",trackdata)

const calAvg = (trackdata) =>{
const sum = trackdata.reduce((acc, curr)=> acc + curr)
return sum / trackdata.length
}

const data = calAvg()
const func = (data)=>{
    if(data >0 && data<100 ){
    const obj1 = {
        dietTips:[
            "Focus on whole foods such as fruits, vegetables, lean proteins, whole grains, and healthy fats.",
            "Limit processed foods, sugary snacks, and beverages high in added sugars .Pay attention to portion sizes to avoid overeating, which can lead to spikes in blood sugar levels.",
            "Choose complex carbohydrates with a low glycemic index (GI), such as whole grains, legumes, and non-starchy vegetables.",
            "Be mindful of the quantity and quality of carbohydrates consumed at each meal, and spread them evenly throughout the day."
         
        ],
    
    }
    }
    
    if(data > 100){
        const obj2 = {
            dietTips:[
                "Follow a balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.",
            "Choose foods with a low glycemic index (GI) to help prevent blood sugar spikes. Examples include non-starchy vegetables, whole grains, legumes, and lean proteins.",
                "Limit or avoid foods high in refined carbohydrates, added sugars, and saturated fats, such as sugary snacks, processed foods, fried foods, and sugary beverages."
             
             
            ],
    }}
}

console.log("track",trackdata)

if(trackdata){

}

  return (
    <div className='m-32 font-semibold text-xl'>
        <h2 className='my-10'>What excersise to follow ?</h2>
        <Card />
        <h2 className='my-10'>What excersise to Diet you should follow ?</h2>
        <Card />
        <h2 className='my-10'>Youtube recommendation</h2>
        <Card />
    </div>
  )
}

export default CardContainer