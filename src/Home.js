import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>

        <div className='home__container'>
            <img 
            className='home__image'
            src='https://www.aspirantsoftsolutions.com/img/amazon-web-services.jpg'
            alt=''
            />
            <div className='home__row'>
                <Product 
                id='001'
                title='Style Wear ' 
                price={42.09} 
                image='https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg' 
                rating={5}
                />
                <Product 
                id='002'
                title='Kitchen Needs' 
                price='19.99' 
                image='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg' 
                rating={5}/>

            </div>
            <div className='home__row'>
                <Product 
                id='003'               
                title='Makeup Touchup' 
                price='10.98' 
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg' 
                rating={4}/>

                <Product 
                id='004'
                title='Electronics' 
                price='6.79' 
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg' 
                rating={2}/>

                <Product 
                id='006'
                title='Toy Kingdom' 
                price='9.99' 
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg' 
                rating={3}/>
            </div>
            <div className='home__row'>
            <Product 
                id='006'
                title='Kitchen Favorities' 
                price='20.0' 
                image='https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg' 
                rating={4}/>
            </div>

            <div className='home__row'>
                <Product 
                id='006'
                title='Home Refresh ideas ' 
                price='22.04' 
                image='https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg' 
                rating={4}/>
                
                <Product 
                id='006'
                title=' Your Fitness Needs ' 
                price='30.0' 
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg' 
                rating={4}/>

                <Product 
                id='006'
                title=' Foot wears ' 
                price='22.04' 
                image='https://www.solesinmotion.ca/wp-content/uploads/2020/09/Brooks-Levitate-4-Womens-V1.jpg' 
                rating={4}/>
                
                <Product 
                id='006'
                title='  Dress up ' 
                price='30.0' 
                image='https://m.media-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/BROWSE/L0/MOBILE/HERO/DRESS_EDIT/SUM23_L0_MOB_HERO_02._SX414_QL85_.jpg'
                rating={4}/>

            </div>

        </div>      

    </div>
  )
}

export default Home
