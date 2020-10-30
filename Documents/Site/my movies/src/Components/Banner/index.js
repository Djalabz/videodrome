import React from 'react';
import './index.css';
import goodbadbanner from '../../Assets/Images/goodbadBanner.webp'
import suspiriabanner from '../../Assets/Images/suspiriaBanner.webp'
import odyssey2banner from '../../Assets/Images/odyssey2Banner.webp'
import barrybanner from '../../Assets/Images/barryBanner.webp'
import bladerunnerbanner from '../../Assets/Images/bladerunnerBanner.webp'
import memoriesmurderbanner from '../../Assets/Images/memoriesmurderBanner.webp'
import prophetbanner from '../../Assets/Images/prophetBanner.webp'
import therewillbebloodbanner from '../../Assets/Images/therewillbebloodBanner.webp'
import enterthevoidbanner from '../../Assets/Images/enterthevoidBanner.webp'
import wailingbanner from '../../Assets/Images/wailingBanner.webp'
import tenantbanner from '../../Assets/Images/tenantBanner.webp'
import lahainebanner from '../../Assets/Images/lahaineBanner.webp'
import lockstockbanner from '../../Assets/Images/lockstockBanner.webp'
import escapebanner from '../../Assets/Images/escapefromnyBanner.webp'
import handmaidenbanner from '../../Assets/Images/handmaidenBanner.webp'

const Banner=() => {

const bannerArray = [handmaidenbanner, escapebanner, lockstockbanner, lahainebanner, tenantbanner, wailingbanner, goodbadbanner, enterthevoidbanner, suspiriabanner, odyssey2banner, barrybanner, bladerunnerbanner, memoriesmurderbanner, prophetbanner, therewillbebloodbanner]
const randomIndex = Math.floor(Math.random() * bannerArray.length);
const selectedPicture = bannerArray[randomIndex];


  return (
<div  className='Banner'>
    <img src={selectedPicture} alt="Alrigh Alright"/>
      <div className='BannerText'>
      <p>MANAGE YOUR MOVIE COLLECTION<br></br>THE SMART WAY</p>
        <div className='BannerStart'>
          <button>GET STARTED</button>
        </div>
    </div>
</div>
  )
};


export default Banner;