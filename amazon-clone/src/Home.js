import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='home-image'
            src='https://imgs.search.brave.com/6NWz1gyTdplwK6mAW6nEGMZkjY4J8F2M1LM17nntqOg/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9tc3Bv/d2VydXNlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvYW1hem9uLXBy/aW1lLXZpZGVvLTEu/anBn'
            />
            <div className='home-row'>
                <Product
                id="6845"
                title ="Boult Audio AirBass Propods X TWS Earbuds, 32H Playtime, Fast Charging Type-C"
                price= {80}
                image="https://m.media-amazon.com/images/I/61LL4tCXoYL._AC_UL480_FMwebp_QL65_.jpg"
                rating={3}
                />

                <Product
                  id="11353"
                  title="Cosmic Byte H11 Gaming Wired Headset with Microphone (Black/Orange, Pack Of 1)"
                  price={150}
                  image="https://m.media-amazon.com/images/I/617tTpCvQ4L._SX679_.jpg"
                  rating={4}                
                />
            </div>
            <div className='home-row'>
            <Product
            id="5325"
            title="Relaxed Fit Linen-blend shorts"
            price={100}
            image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcf%2F17%2Fcf17d92f68c240bc295874d620a58cf84fbf03dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            rating={5}
            />
                <Product
                id="963"
                title="Patterned resort shirt"
                price={50}
                image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F39%2F8b%2F398b18ae0814cbb2ed45bda30a641bf451bfa11f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
                rating={3}
                />
                <Product
                id="8513"
                title="V-neck slip dress"
                price={100}
                image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4b%2F3a%2F4b3ab9c1cb572d5a0fe587c36ac14fa5b2166ca5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                rating={5}
                />
            </div>
            <div className='home-row'>
            <Product
            id="54484"
            title="Apple iPhone 13 Pro (128GB) - Silver"
            price={1000}
            image="https://m.media-amazon.com/images/I/61i8Vjb17SL._SX679_.jpg"
            rating={5}
            />
                
            </div>
        </div>
    </div>
  )
}

export default Home