import React from 'react';
import "./Home.css";
import Product from './Product'
import Slider from './Slider';

function Home() {
    return (
            <div className="home__container">
                {/* <ImageSlider images={[
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Phase-4/9A/D18532030_Jupiter2020_Phase4_Redmi9A_DesktopHero_1500x600._CB416344028_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Phase-4/9A/D18532030_Jupiter2020_Phase4_Redmi9A_DesktopHero_1500x600._CB416344028_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Phase-4/9A/D18532030_Jupiter2020_Phase4_Redmi9A_DesktopHero_1500x600._CB416344028_.jpg"
                ]} /> */}
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Phase-4/9A/D18532030_Jupiter2020_Phase4_Redmi9A_DesktopHero_1500x600._CB416344028_.jpg" alt="amazon img" />
            
                <div className="home__row">
                    <Product 
                    id = "54545454" title="Up to 40% off | Festive deals on top mobiles and accessories" price={1} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg" rating={5}/>
                    
                    <Product title="Up to 60% off | Deals on electronics ending soon" price={220.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg" rating={1}/>

                    <Product 
                    id = "54545474" title="Up to 75% off | Finale offers on TVs & appliances" price={2055.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg" rating={4}/>
                    
                </div>
                <div className="home__row">
                    <Product 
                    id = "54545455" title="Under ₹599 | Pocket-friendly fashion" price={499} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg" rating={3}/>

                    <Product 
                    id = "54545452" title="Up to 80% off | Home & kitchen" price={29660.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg" rating={5}/>
                </div>
            </div>
    );
}

export default Home;
