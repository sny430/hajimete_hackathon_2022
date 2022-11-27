import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CustomHead from '../components/customhead'
import { useContext } from 'react'
import { clickProp } from './_app'


export default function Gamepage() {
  const {clickedObj, setClickedObj} = useContext(clickProp)
    return (
      <div className='{styles.container}'>
         <CustomHead/>

          <div className = "boxborder">
           <ul>
              <div> 
               <div className = "questionbox"></div>
               <div className = "scorebox"></div>
              </div>
              <div className = "displaybox">
                
              <img src="/1.png" className = "cardbox1" id="1" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/2.png" className = "cardbox2" id="2" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/3.png" className = "cardbox3" id="3" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/4.png" className = "cardbox4" id="4" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/5.png" className = "cardbox5" id="5" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
              </div>
           </ul>
          </div>


         

      </div>
        
        
       

    )


}






