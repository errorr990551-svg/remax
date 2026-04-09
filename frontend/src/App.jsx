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

import StainlessSteel from './assets/pages/products/pipes/StainlessSteel.jsx'
import AboutUs from './assets/pages/AboutUs.jsx'
import CarbonSteel from './assets/pages/products/pipes/CarbonSteel.jsx'
import Hastelloy from './assets/pages/products/pipes/Hastelloy.jsx'
import Incoloy from './assets/pages/products/pipes/Incoloy.jsx'
import Monel from './assets/pages/products/pipes/Monel.jsx'
import Titanium from './assets/pages/products/pipes/Titanium.jsx'
import Tantalum from './assets/pages/products/pipes/Tantalum.jsx'
import Aluminium from './assets/pages/products/pipes/Aluminium.jsx'
import Duplex from './assets/pages/products/pipes/Duplex.jsx'
import Nickel from './assets/pages/products/pipes/Nickel.jsx'
import AlloySteel from './assets/pages/products/pipes/AlloySteel.jsx'
import MildSteel from './assets/pages/products/pipes/MildSteel.jsx'
import Copper from './assets/pages/products/pipes/Copper.jsx'
import Brass from './assets/pages/products/pipes/Brass.jsx'
import StainlessSteelTube from './assets/pages/products/tubes/StainlessSteelTube.jsx'
import CarbonSteelTube from './assets/pages/products/tubes/CarbonSteelTube.jsx'
import HastelloyTube from './assets/pages/products/tubes/HastelloyTube.jsx'
import IncoloyTube from './assets/pages/products/tubes/IncoloyTube.jsx'
import MonelTube from './assets/pages/products/tubes/MonelTube.jsx'
import TitaniumTube from './assets/pages/products/tubes/TitaniumTube.jsx'
import TantalumTube from './assets/pages/products/tubes/TantalumTube.jsx'
import AluminiumTube from './assets/pages/products/tubes/AluminiumTube.jsx'
import DuplexSteelTube from './assets/pages/products/tubes/DuplexSteelTube.jsx'
import NickelTube from './assets/pages/products/tubes/NickelTube.jsx'
import AlloySteelTube from './assets/pages/products/tubes/AlloySteelTube.jsx'
import CopperTube from './assets/pages/products/tubes/CopperTube.jsx'
import BrassTube from './assets/pages/products/tubes/BrassTube.jsx'
import Quality from './assets/pages/Quality.jsx'
import ChemicalComposition from './assets/pages/tech-info/ChemicalComposition.jsx'
import MechanicalProperties from './assets/pages/tech-info/MechanicalProperties.jsx'
import WeightChart from './assets/pages/tech-info/WeightChart.jsx'

import Certification from './assets/pages/Certification.jsx'
import CareerPage from './assets/pages/Career.jsx'
import DimensionChart from './assets/pages/tech-info/DimensionChart.jsx'
import HardoxPlate from './assets/pages/products/plates/HardoxPlate.jsx'
import CortenSteelPlate from './assets/pages/products/plates/CortenSteelPlate.jsx'
import BoilerQualityPlate from './assets/pages/products/plates/BoilerQualityPlate.jsx'
import ManganesePlate from './assets/pages/products/plates/ManganesePlate.jsx'
import NickelAlloyPlate from './assets/pages/products/plates/NickelAlloyPlate.jsx'
import ChromeMolyPlate from './assets/pages/products/plates/ChromeMolyPlate.jsx'
import PressureVesselPlate from './assets/pages/products/plates/PressureVesselPlate.jsx'
import StainlessSteelPlate from './assets/pages/products/plates/StainlessSteelPlate.jsx'
import CarbonSteelPlate from './assets/pages/products/plates/CarbonSteelPlate.jsx'
import OffshoreSteelPlate from './assets/pages/products/plates/OffshoreSteelPlate.jsx'
import QuendPlates from './assets/pages/products/plates/QuendPlates.jsx'
import QuardPlates from './assets/pages/products/plates/QuardPlate.jsx'
import AluminiumPlate from './assets/pages/products/plates/AluminiumPlate.jsx'
import ChequeredPlate from './assets/pages/products/plates/ChequeredPlate.jsx'
import ButtWeldElbowFittings from './assets/pages/products/buttWeldFittings/ButtWeldElbowFittings.jsx'
import Elbow180 from './assets/pages/products/buttWeldFittings/Elbow180.jsx'
import Elbow90 from './assets/pages/products/buttWeldFittings/Elbow90.jsx'
import Elbow45 from './assets/pages/products/buttWeldFittings/Elbow45.jsx'
import ButtWeldBendsFittings from './assets/pages/products/buttWeldFittings/ButtWeldBendsFittings.jsx'
import ButtWeldTeeFittings from './assets/pages/products/buttWeldFittings/ButtWeldTeeFittings.jsx'
import Seo from './assets/pages/Seo.jsx'
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

// Round Bar Imports
import StainlessSteelBar from './assets/pages/products/roundBar/StainlessSteelBar.jsx';
import CarbonSteelBar from './assets/pages/products/roundBar/CarbonSteelBar.jsx';
import AlloySteelBar from './assets/pages/products/roundBar/AlloySteelBar.jsx';
import DuplexSteelBar from './assets/pages/products/roundBar/DuplexSteelBar.jsx';
import NickelAlloyBar from './assets/pages/products/roundBar/NickelAlloyBar.jsx';


import ScrollToTop from './assets/components/common/ScrollToTop.jsx'


function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/quality' element={<Quality/>} />
        <Route path='/certification' element={<Certification/>} />
        <Route path='/career' element={<CareerPage/>} />
        <Route path='/seo' element={<Seo/>} />



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


        
        <Route path='/products/pipes/stainless-steel-pipes' element={<StainlessSteel />} />
        <Route path='/products/pipes/carbon-steel-pipes' element={<CarbonSteel />} />
        <Route path='/products/pipes/hastelloy-pipes' element={<Hastelloy />} />
        <Route path='/products/pipes/incoloy-pipe' element={<Incoloy />} />
        <Route path='/products/pipes/monel-pipe' element={<Monel />} />
        <Route path='/products/pipes/titanium-pipe' element={<Titanium />} />
        <Route path='/products/pipes/tantalum-pipe' element={<Tantalum />} />
        <Route path='/products/pipes/aluminium-pipe' element={<Aluminium />} />
        <Route path='/products/pipes/duplex-steel-superduplex-steel-pipe' element={<Duplex />} />
        <Route path='/products/pipes/nickel-pipe' element={<Nickel />} />
        <Route path='/products/pipes/alloy-steel-pipes' element={<AlloySteel/>} />
        <Route path='/products/pipes/mild-steel-pipes' element={<MildSteel/>} />
        <Route path='/products/pipes/copper-pipes' element={<Copper />} />
        <Route path='/products/pipes/brass-pipes' element={<Brass />} />



        <Route path='/products/tubes/stainless-steel-tubes' element={<StainlessSteelTube />} />
        <Route path='/products/tubes/carbon-steel-tubes' element={<CarbonSteelTube />} />
        <Route path='/products/tubes/hastelloy-tubes' element={<HastelloyTube />} />
        <Route path='/products/tubes/incoloy-tubes' element={<IncoloyTube/>} />
        <Route path='/products/tubes/monel-tubes' element={<MonelTube />} />
        <Route path='/products/tubes/titanium-tubes' element={<TitaniumTube />} />
        <Route path='/products/tubes/hastelloy-tubes' element={<HastelloyTube />} />
        <Route path='/products/tubes/tantalum-tubes' element={<TantalumTube />} />
        <Route path='/products/tubes/aluminium-tubes' element={<AluminiumTube />} />
        <Route path='/products/tubes/duplex-steel-super-duplex-steel-tube' element={<DuplexSteelTube />} />
        <Route path='/products/tubes/nickel-tube' element={<NickelTube />} />
        <Route path='/products/tubes/alloy-steel-tube' element={<AlloySteelTube />} />
        <Route path='/products/tubes/copper-tube' element={<CopperTube />} />
        <Route path='/products/tubes/brass-tube' element={<BrassTube />} />



        <Route path='/products/plates/hardox-plate' element={<HardoxPlate/>} />
        <Route path='/products/plates/corten-steel-plate' element={<CortenSteelPlate/>} />
        <Route path='/products/plates/boiler-quality-plate' element={<BoilerQualityPlate/>} />
        <Route path='/products/plates/manganese-plate' element={<ManganesePlate/>} />
        <Route path='/products/plates/nickel-alloy-plate' element={<NickelAlloyPlate/>} />
        <Route path='/products/plates/chrome-moly-plate' element={<ChromeMolyPlate/>} />
        <Route path='/products/plates/pressure-vessel-plate' element={<PressureVesselPlate/>} />
        <Route path='/products/plates/stainless-steel-plate' element={<StainlessSteelPlate/>} />
        <Route path='/products/plates/carbon-steel-plate' element={<CarbonSteelPlate/>} />
        <Route path='/products/plates/offshore-steel-plate' element={<OffshoreSteelPlate/>} />
        <Route path='/products/plates/quend-plate' element={<QuendPlates/>} />
        <Route path='/products/plates/quard-plate' element={<QuardPlates/>} />
        <Route path='/products/plates/aluminium-plate' element={<AluminiumPlate/>} />
        <Route path='/products/plates/chequered-plate' element={<ChequeredPlate/>} />



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

        {/* Round Bar */}
        <Route path='/products/round-bar/stainless-steel-bar' element={<StainlessSteelBar />} />
        <Route path='/products/round-bar/carbon-steel-bar' element={<CarbonSteelBar />} />
        <Route path='/products/round-bar/alloy-steel-bar' element={<AlloySteelBar />} />
        <Route path='/products/round-bar/duplex-steel-bar' element={<DuplexSteelBar />} />
        <Route path='/products/round-bar/nickel-alloy-bar' element={<NickelAlloyBar />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App