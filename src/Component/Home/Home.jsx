import React from 'react'
import "./Home.css"
import Card from '../Card/card'
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa3 from "../../assets/villa3.jpg"
import village from "../../assets/village.avif"
import village1 from "../../assets/village1.avif"
import village2 from "../../assets/village2.avif"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski.avif"
import ski2 from "../../assets/ski.avif"
import roomhouse from"../../assets/roomhouse.avif"
import roomhouse1 from"../../assets/roomhouse1.avif"
import roomhouse2 from"../../assets/roomhouse2.avif"
import roomnew from "../../assets/roomnew.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain2.avif"
import old from "../../assets/old.avif"
import old1 from "../../assets/old1.avif"
import old2 from "../../assets/old2.avif"
import huthouse from "../../assets/huthouse.jpg"
import huthouse1 from "../../assets/huthouse1.jpg"
import huthouse2 from "../../assets/huthouse2.jpg"
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import poolhouse from "../../assets/poolhouse.jpg"
import poolhouse2 from "../../assets/poolhouse2.jpg"


function Home() {
  return (
    <div  id='home'>
    <Card image1 ={house} image2 ={house1} image3={house2} title={"38HK Villa in Jhansi"} price={"20,000"}/>
     <Card image1 ={farmhouse} image2 ={farmhouse1} image3={farmhouse2} title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
   <Card image1 ={villa} image2 ={villa1} image3={villa3}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
   <Card image1 ={village} image2 ={village1} image3={village2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
   <Card image1 ={ski} image2 ={ski1} image3={ski2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
   <Card image1 ={roomhouse} image2 ={roomhouse1} image3={roomhouse2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
   <Card image1 ={roomnew} image2 ={roomnew1} image3={roomnew2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
   <Card image1 ={mountain} image2 ={mountain1} image3={mountain2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
 <Card image1 ={huthouse} image2 ={huthouse1} image3={huthouse2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
 <Card image1 ={hut1} image2 ={hut2} image3={hut3}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
 <Card image1 ={old} image2 ={old1} image3={old2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
 <Card image1 ={poolhouse} image2 ={poolhouse2}  title={"38HK farmhouse in Jhansi"} price={"300,000"}/>
 
 
 

    </div>
  )
}

export default Home
