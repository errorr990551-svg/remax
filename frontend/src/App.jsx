import { useEffect } from 'react'
import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/common/Navbar.jsx'
import Home from './assets/pages/Home.jsx'
import Footer from './assets/components/common/Footer.jsx'
import ContactUs from './assets/pages/ContactUs.jsx'



import WeldNeck from './assets/pages/products/flanges/WeldNeck.jsx'
import SlipOn from './assets/pages/products/flanges/SlipOn.jsx'
import SocketWeld from './assets/pages/products/flanges/SocketWeld.jsx'
import Threaded from './assets/pages/products/flanges/Threaded.jsx'
import Blind from './assets/pages/products/flanges/Blind.jsx'
import LapJoint from './assets/pages/products/flanges/LapJoint.jsx'
import LongWeldNeck from './assets/pages/products/flanges/LongWeldNeck.jsx'
import SpectacleBlind from './assets/pages/products/flanges/SpectacleBlind.jsx'


import AboutUs from './assets/pages/AboutUs.jsx'
import Blogs from './assets/pages/Blogs.jsx'
import ForgedVsCast from './assets/pages/blogs/ForgedVsCast.jsx'
import PipeFlangesGuide from './assets/pages/blogs/PipeFlangesGuide.jsx'
import StainlessSteelGrades from './assets/pages/blogs/StainlessSteelGrades.jsx'
import OilAndGasFittings from './assets/pages/blogs/OilAndGasFittings.jsx'
import ButtWeldFittingsGuide from './assets/pages/blogs/ButtWeldFittingsGuide.jsx'
import AlloySteelPowerGen from './assets/pages/blogs/AlloySteelPowerGen.jsx'

import Quality from './assets/pages/Quality.jsx'
import ChemicalComposition from './assets/pages/tech-info/ChemicalComposition.jsx'
import MechanicalProperties from './assets/pages/tech-info/MechanicalProperties.jsx'
import WeightChart from './assets/pages/tech-info/WeightChart.jsx'

import Certification from './assets/pages/Certification.jsx'
import CareerPage from './assets/pages/Career.jsx'
import DimensionChart from './assets/pages/tech-info/DimensionChart.jsx'

import ButtWeldElbowFittings from './assets/pages/products/buttWeldFittings/ButtWeldElbowFittings.jsx'
import Elbow180 from './assets/pages/products/buttWeldFittings/Elbow180.jsx'
import Elbow90 from './assets/pages/products/buttWeldFittings/Elbow90.jsx'
import Elbow45 from './assets/pages/products/buttWeldFittings/Elbow45.jsx'
import ButtWeldBendsFittings from './assets/pages/products/buttWeldFittings/ButtWeldBendsFittings.jsx'
import ButtWeldTeeFittings from './assets/pages/products/buttWeldFittings/ButtWeldTeeFittings.jsx'

import ReducingTee from './assets/pages/products/buttWeldFittings/ReducingTee.jsx'
import StraightTee from './assets/pages/products/buttWeldFittings/StraightTee.jsx'
import ButtWeldReducersFittings from './assets/pages/products/buttWeldFittings/ButtWeldReducersFittings.jsx'
import ConcentricReducer from './assets/pages/products/buttWeldFittings/ConcentricReducer.jsx'
import EccentricReducer from './assets/pages/products/buttWeldFittings/EccentricReducer.jsx'
import OvalCaps from './assets/pages/products/buttWeldFittings/OvalCaps.jsx'
import SocketWeldCoupling from './assets/pages/products/socketWeldFittings/SocketWeldCoupling.jsx'
import SocketWeldUnion from './assets/pages/products/socketWeldFittings/SocketWeldUnion.jsx'
import SocketWeldElbow from './assets/pages/products/socketWeldFittings/SocketWeldElbow.jsx'
import SocketWeldTee from './assets/pages/products/socketWeldFittings/SocketWeldTee.jsx'
import SocketWeldLateralTee from './assets/pages/products/socketWeldFittings/SocketWeldLateralTee.jsx'
import SocketWeldCross from './assets/pages/products/socketWeldFittings/SocketWeldCross.jsx'
import SocketWeldCap from './assets/pages/products/socketWeldFittings/SocketWeldCap.jsx'
import SocketWeldReducerInsert from './assets/pages/products/socketWeldFittings/SocketWeldReducerInsert.jsx'
import SocketWeldNipple from './assets/pages/products/socketWeldFittings/SocketWeldNipple.jsx'
import SocketWeldBushing from './assets/pages/products/socketWeldFittings/SocketWeldBushing.jsx'
import SocketWeldPlug from './assets/pages/products/socketWeldFittings/SocketWeldPlug.jsx'




import ScrollToTop from './assets/components/common/ScrollToTop.jsx'
import ProductMenuModal from './assets/components/common/ProductMenuModal.jsx'
import MarketArea from './assets/pages/MarketArea.jsx'
import CityPage from './assets/pages/CityPage.jsx'
import SEOManager from './assets/components/common/SEOManager.jsx'

const SitemapRedirect = () => {
  useEffect(() => {
    window.location.href = '/sitemap.xml';
  }, []);
  return null;
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <SEOManager />
      <Navbar />
      <ProductMenuModal />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/forged-vs-cast-fittings' element={<ForgedVsCast />} />
        <Route path='/blogs/pipe-flanges-guide' element={<PipeFlangesGuide />} />
        <Route path='/blogs/stainless-steel-grades-explained' element={<StainlessSteelGrades />} />
        <Route path='/blogs/oil-and-gas-pipe-fittings-guide' element={<OilAndGasFittings />} />
        <Route path='/blogs/butt-weld-fittings-guide' element={<ButtWeldFittingsGuide />} />
        <Route path='/blogs/alloy-steel-power-gen-guide' element={<AlloySteelPowerGen />} />
        <Route path='/quality' element={<Quality/>} />
        <Route path='/certification' element={<Certification/>} />
        <Route path='/career' element={<CareerPage/>} />
        
        <Route path='/market-area' element={<MarketArea/>} />



        <Route path='tech-info/chemical-composition' element={<ChemicalComposition/>} />
        <Route path='tech-info/mechanical-properties' element={<MechanicalProperties/>} />
        <Route path='tech-info/weight-chart' element={<WeightChart/>} />
        <Route path='tech-info/dimensions' element={<DimensionChart/>} />



        <Route path='/products/flanges/weld-neck-flange' element={<WeldNeck />} />
        <Route path='/products/flanges/slip-on-flange' element={<SlipOn />} />
        <Route path='/products/flanges/socket-weld-flange' element={<SocketWeld />} />
        <Route path='/products/flanges/threaded-flange' element={<Threaded />} />
        <Route path='/products/flanges/blind-flange' element={<Blind />} />
        <Route path='/products/flanges/lap-joint-flange' element={<LapJoint />} />
        <Route path='/products/flanges/long-weld-neck-flange' element={<LongWeldNeck />} />
        <Route path='/products/flanges/spectacle-blind-flange' element={<SpectacleBlind />} />






        <Route path='/products/buttweld-fittings/butt-weld-elbow-fittings' element={<ButtWeldElbowFittings/>} />
        <Route path='/products/buttweld-fittings/180-elbow' element={<Elbow180/>} />
        <Route path='/products/buttweld-fittings/90-elbow' element={<Elbow90/>} />
        <Route path='/products/buttweld-fittings/45-elbow' element={<Elbow45/>} />
        <Route path='/products/buttweld-fittings/butt-weld-bends-fittings' element={<ButtWeldBendsFittings/>} />
        <Route path='/products/buttweld-fittings/butt-weld-tee-fittings' element={<ButtWeldTeeFittings/>} />
        <Route path='/products/buttweld-fittings/reducing-tee' element={<ReducingTee/>} />
        <Route path='/products/buttweld-fittings/straight-tee' element={<StraightTee/>} />
        <Route path='/products/buttweld-fittings/butt-weld-reducers-fittings' element={<ButtWeldReducersFittings/>} />
        <Route path='/products/buttweld-fittings/concentric-reducer' element={<ConcentricReducer/>} />
        <Route path='/products/buttweld-fittings/eccentric-reducer' element={<EccentricReducer/>} />
        <Route path='/products/buttweld-fittings/oval-caps' element={<OvalCaps/>} />




        <Route path='/products/socket-weld-fittings/socket-weld-coupling-fittings' element={<SocketWeldCoupling/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-union-fittings' element={<SocketWeldUnion/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-elbow-fittings' element={<SocketWeldElbow/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-tee-fittings' element={<SocketWeldTee/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-lateral-tee-fittings' element={<SocketWeldLateralTee/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-cross-fittings' element={<SocketWeldCross/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-cap-fittings' element={<SocketWeldCap/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-reducer-insert-fittings' element={<SocketWeldReducerInsert/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-nipple-fittings' element={<SocketWeldNipple/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-bushing-fittings' element={<SocketWeldBushing/>} />
        <Route path='/products/socket-weld-fittings/socket-weld-plug-fittings' element={<SocketWeldPlug/>} />


        <Route path='/sitemap' element={<SitemapRedirect />} />
        <Route path='/sitemap.xml' element={<SitemapRedirect />} />
        <Route path='/:cityName' element={<CityPage/>} />
        <Route path='/:stateName/:cityName' element={<CityPage/>} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App