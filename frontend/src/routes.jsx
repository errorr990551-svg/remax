/* eslint-disable react-refresh/only-export-components -- route config module, not a component file */
import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { newFlangePagesData } from './assets/data/newFlangePagesData.js';
import { lazyPage } from './lazyPage.jsx';

// Every page is its own chunk so a visit only downloads the code (and data files) that page needs.
const Home = lazyPage(() => import('./assets/pages/Home.jsx'));
const ContactUs = lazyPage(() => import('./assets/pages/ContactUs.jsx'));
const SocketWeldFittingsCategory = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldFittingsCategory.jsx'));
const ForgedFittingsCategory = lazyPage(() => import('./assets/pages/products/forgedFittings/ForgedFittingsCategory.jsx'));
const AlloySteelPipes = lazyPage(() => import('./assets/pages/products/pipes/AlloySteelPipes.jsx'));
const BoilerQualityPlate = lazyPage(() => import('./assets/pages/productDetails/BoilerQualityPlate.jsx'));
const HardoxPlate = lazyPage(() => import('./assets/pages/productDetails/HardoxPlate.jsx'));
const PipeFittingsManufacturerIndia = lazyPage(() => import('./assets/pages/PipeFittingsManufacturerIndia.jsx'));
const ButtweldFittingsExporterIndia = lazyPage(() => import('./assets/pages/ButtweldFittingsExporterIndia.jsx'));
const WhereWeExport = lazyPage(() => import('./assets/pages/WhereWeExport.jsx'));
const ExportHubPage = lazyPage(() => import('./assets/pages/ExportHubPage.jsx'));
const ExportCityPage = lazyPage(() => import('./assets/pages/ExportCityPage.jsx'));
const WeldNeck = lazyPage(() => import('./assets/pages/products/flanges/WeldNeck.jsx'));
const SlipOn = lazyPage(() => import('./assets/pages/products/flanges/SlipOn.jsx'));
const SocketWeld = lazyPage(() => import('./assets/pages/products/flanges/SocketWeld.jsx'));
const Threaded = lazyPage(() => import('./assets/pages/products/flanges/Threaded.jsx'));
const Blind = lazyPage(() => import('./assets/pages/products/flanges/Blind.jsx'));
const LapJoint = lazyPage(() => import('./assets/pages/products/flanges/LapJoint.jsx'));
const LongWeldNeck = lazyPage(() => import('./assets/pages/products/flanges/LongWeldNeck.jsx'));
const SpectacleBlind = lazyPage(() => import('./assets/pages/products/flanges/SpectacleBlind.jsx'));
const FlangesCategoryHub = lazyPage(() => import('./assets/pages/products/flanges/FlangesCategoryHub.jsx'));
const CommercialFlangePage = lazyPage(() => import('./assets/pages/products/flanges/CommercialFlangePage.jsx'));
const AboutUs = lazyPage(() => import('./assets/pages/AboutUs.jsx'));
const Blogs = lazyPage(() => import('./assets/pages/Blogs.jsx'));
const ForgedVsCast = lazyPage(() => import('./assets/pages/blogs/ForgedVsCast.jsx'));
const PipeFlangesGuide = lazyPage(() => import('./assets/pages/blogs/PipeFlangesGuide.jsx'));
const StainlessSteelGrades = lazyPage(() => import('./assets/pages/blogs/StainlessSteelGrades.jsx'));
const OilAndGasFittings = lazyPage(() => import('./assets/pages/blogs/OilAndGasFittings.jsx'));
const ButtWeldFittingsGuide = lazyPage(() => import('./assets/pages/blogs/ButtWeldFittingsGuide.jsx'));
const AlloySteelPowerGen = lazyPage(() => import('./assets/pages/blogs/AlloySteelPowerGen.jsx'));
const Hardox400Vs450 = lazyPage(() => import('./assets/pages/blogs/Hardox400Vs450.jsx'));
const FlangePressureClassGuide = lazyPage(() => import('./assets/pages/blogs/FlangePressureClassGuide.jsx'));
const WeldNeckVsSlipOn = lazyPage(() => import('./assets/pages/blogs/WeldNeckVsSlipOn.jsx'));
const AsmeB165VsB1647 = lazyPage(() => import('./assets/pages/blogs/AsmeB165VsB1647.jsx'));
const A105VsA350LF2 = lazyPage(() => import('./assets/pages/blogs/A105VsA350LF2.jsx'));
const MtcEN10204Guide = lazyPage(() => import('./assets/pages/blogs/MtcEN10204Guide.jsx'));
const IbrFittingsGuide = lazyPage(() => import('./assets/pages/blogs/IbrFittingsGuide.jsx'));
const DuplexVsSuperDuplex = lazyPage(() => import('./assets/pages/blogs/DuplexVsSuperDuplex.jsx'));
const FlangeFaceTypesGuide = lazyPage(() => import('./assets/pages/blogs/FlangeFaceTypesGuide.jsx'));
const OilGasLanding = lazyPage(() => import('./assets/pages/OilGasLanding.jsx'));
const PipeDimensions = lazyPage(() => import('./assets/pages/tech-info/PipeDimensions.jsx'));
const ExportUAE = lazyPage(() => import('./assets/pages/ExportUAE.jsx'));
const ExportUSA = lazyPage(() => import('./assets/pages/ExportUSA.jsx'));
const BrochureGating = lazyPage(() => import('./assets/pages/BrochureGating.jsx'));
const Quality = lazyPage(() => import('./assets/pages/Quality.jsx'));
const ChemicalComposition = lazyPage(() => import('./assets/pages/tech-info/ChemicalComposition.jsx'));
const MechanicalProperties = lazyPage(() => import('./assets/pages/tech-info/MechanicalProperties.jsx'));
const WeightChart = lazyPage(() => import('./assets/pages/tech-info/WeightChart.jsx'));
const Certification = lazyPage(() => import('./assets/pages/Certification.jsx'));
const CareerPage = lazyPage(() => import('./assets/pages/Career.jsx'));
const DimensionChart = lazyPage(() => import('./assets/pages/tech-info/DimensionChart.jsx'));
const ButtWeldElbowFittings = lazyPage(() => import('./assets/pages/products/buttWeldFittings/ButtWeldElbowFittings.jsx'));
const Elbow180 = lazyPage(() => import('./assets/pages/products/buttWeldFittings/Elbow180.jsx'));
const Elbow90 = lazyPage(() => import('./assets/pages/products/buttWeldFittings/Elbow90.jsx'));
const Elbow45 = lazyPage(() => import('./assets/pages/products/buttWeldFittings/Elbow45.jsx'));
const ButtWeldBendsFittings = lazyPage(() => import('./assets/pages/products/buttWeldFittings/ButtWeldBendsFittings.jsx'));
const ButtWeldTeeFittings = lazyPage(() => import('./assets/pages/products/buttWeldFittings/ButtWeldTeeFittings.jsx'));
const ReducingTee = lazyPage(() => import('./assets/pages/products/buttWeldFittings/ReducingTee.jsx'));
const StraightTee = lazyPage(() => import('./assets/pages/products/buttWeldFittings/StraightTee.jsx'));
const ButtWeldReducersFittings = lazyPage(() => import('./assets/pages/products/buttWeldFittings/ButtWeldReducersFittings.jsx'));
const ConcentricReducer = lazyPage(() => import('./assets/pages/products/buttWeldFittings/ConcentricReducer.jsx'));
const EccentricReducer = lazyPage(() => import('./assets/pages/products/buttWeldFittings/EccentricReducer.jsx'));
const OvalCaps = lazyPage(() => import('./assets/pages/products/buttWeldFittings/OvalCaps.jsx'));
const SocketWeldCoupling = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldCoupling.jsx'));
const SocketWeldUnion = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldUnion.jsx'));
const SocketWeldElbow = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldElbow.jsx'));
const SocketWeldTee = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldTee.jsx'));
const SocketWeldLateralTee = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldLateralTee.jsx'));
const SocketWeldCross = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldCross.jsx'));
const SocketWeldCap = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldCap.jsx'));
const SocketWeldReducerInsert = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldReducerInsert.jsx'));
const SocketWeldNipple = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldNipple.jsx'));
const SocketWeldBushing = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldBushing.jsx'));
const SocketWeldPlug = lazyPage(() => import('./assets/pages/products/socketWeldFittings/SocketWeldPlug.jsx'));
const MarketArea = lazyPage(() => import('./assets/pages/MarketArea.jsx'));
const CityPage = lazyPage(() => import('./assets/pages/CityPage.jsx'));
const CityPageStrategy = lazyPage(() => import('./assets/pages/CityPageStrategy.jsx'));
const StateHubPage = lazyPage(() => import('./assets/pages/StateHubPage.jsx'));
const MarketAreaIndex = lazyPage(() => import('./assets/pages/MarketAreaIndex.jsx'));
const CarbonSteelFlanges = lazyPage(() => import('./assets/pages/materials/CarbonSteelFlanges.jsx'));
const SS304Flanges = lazyPage(() => import('./assets/pages/materials/SS304Flanges.jsx'));
const SS316Flanges = lazyPage(() => import('./assets/pages/materials/SS316Flanges.jsx'));
const SS321347Flanges = lazyPage(() => import('./assets/pages/materials/SS321347Flanges.jsx'));
const Duplex2205Flanges = lazyPage(() => import('./assets/pages/materials/Duplex2205Flanges.jsx'));
const SuperDuplex2507Flanges = lazyPage(() => import('./assets/pages/materials/SuperDuplex2507Flanges.jsx'));
const SuperDuplexZeron100Flanges = lazyPage(() => import('./assets/pages/materials/SuperDuplexZeron100Flanges.jsx'));
const AlloySteelF11F22Flanges = lazyPage(() => import('./assets/pages/materials/AlloySteelF11F22Flanges.jsx'));
const AlloySteelF91Flanges = lazyPage(() => import('./assets/pages/materials/AlloySteelF91Flanges.jsx'));
const Inconel625Flanges = lazyPage(() => import('./assets/pages/materials/Inconel625Flanges.jsx'));
const HastelloyC276Flanges = lazyPage(() => import('./assets/pages/materials/HastelloyC276Flanges.jsx'));
const Monel400Flanges = lazyPage(() => import('./assets/pages/materials/Monel400Flanges.jsx'));
const AsmeB165Standard = lazyPage(() => import('./assets/pages/standards/AsmeB165Standard.jsx'));
const AsmeB1647Standard = lazyPage(() => import('./assets/pages/standards/AsmeB1647Standard.jsx'));
const En10921Standard = lazyPage(() => import('./assets/pages/standards/En10921Standard.jsx'));
const Din2501Standard = lazyPage(() => import('./assets/pages/standards/Din2501Standard.jsx'));
const JisB2220Standard = lazyPage(() => import('./assets/pages/standards/JisB2220Standard.jsx'));
const Bs10Bs4504Standard = lazyPage(() => import('./assets/pages/standards/Bs10Bs4504Standard.jsx'));
const OilAndGasIndustry = lazyPage(() => import('./assets/pages/industries/OilAndGasIndustry.jsx'));
const PharmaceuticalIndustry = lazyPage(() => import('./assets/pages/industries/PharmaceuticalIndustry.jsx'));
const PowerGenerationIndustry = lazyPage(() => import('./assets/pages/industries/PowerGenerationIndustry.jsx'));
const WaterInfrastructureIndustry = lazyPage(() => import('./assets/pages/industries/WaterInfrastructureIndustry.jsx'));
const MarineIndustry = lazyPage(() => import('./assets/pages/industries/MarineIndustry.jsx'));
const ChemicalProcessingIndustry = lazyPage(() => import('./assets/pages/industries/ChemicalProcessingIndustry.jsx'));
const NotFound = lazyPage(() => import('./assets/pages/NotFound.jsx'));

export const legacyProductRedirects = {
  // Legacy Flange Product Details redirects
  '/product-details/weldneck-flange': '/products/flanges/weld-neck-flange/',
  '/product-details/weldneck-flange/': '/products/flanges/weld-neck-flange/',
  '/product-details/blind-flange': '/products/flanges/blind-flange/',
  '/product-details/blind-flange/': '/products/flanges/blind-flange/',
  '/product-details/socket-weld-flange': '/products/flanges/socket-weld-flange/',
  '/product-details/socket-weld-flange/': '/products/flanges/socket-weld-flange/',
  '/product-details/threaded-flange': '/products/flanges/threaded-flange/',
  '/product-details/threaded-flange/': '/products/flanges/threaded-flange/',
  '/product-details/slip-on-flange': '/products/flanges/slip-on-flange/',
  '/product-details/slip-on-flange/': '/products/flanges/slip-on-flange/',
  '/product-details/stub-end-flange': '/products/flanges/lap-joint-flange/',
  '/product-details/stub-end-flange/': '/products/flanges/lap-joint-flange/',

  // General products category redirect
  '/products': '/products/flanges/',
  '/products/': '/products/flanges/',
  '/products/buttweld-fittings': '/products/buttweld-fittings/butt-weld-elbow-fittings/',
  '/products/buttweld-fittings/': '/products/buttweld-fittings/butt-weld-elbow-fittings/',
  '/materials': '/materials/carbon-steel-flanges/',
  '/materials/': '/materials/carbon-steel-flanges/',
  '/industries': '/industries/oil-and-gas/',
  '/industries/': '/industries/oil-and-gas/',
  '/product-details': '/product-details/boiler-quality-plate/',
  '/product-details/': '/product-details/boiler-quality-plate/',
  '/tech-info': '/tech-info/dimension-chart/',
  '/tech-info/': '/tech-info/dimension-chart/',
  '/about': '/about-us/',
  '/about/': '/about-us/',
  '/certificates': '/certification/',
  '/certificates/': '/certification/',

  // Obsolete Plates redirects (to active plate pages)
  '/products/plates/quend-plate': '/product-details/hardox-plate/',
  '/products/plates/quend-plate/': '/product-details/hardox-plate/',
  '/products/plates/quard-plate': '/product-details/hardox-plate/',
  '/products/plates/quard-plate/': '/product-details/hardox-plate/',
  '/products/plates/hardox-plate': '/product-details/hardox-plate/',
  '/products/plates/hardox-plate/': '/product-details/hardox-plate/',
  '/products/plates/manganese-plate': '/product-details/hardox-plate/',
  '/products/plates/manganese-plate/': '/product-details/hardox-plate/',
  '/products/plates/chequered-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/chequered-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/aluminium-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/aluminium-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/boiler-quality-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/boiler-quality-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/carbon-steel-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/carbon-steel-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/corten-steel-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/corten-steel-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/stainless-steel-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/stainless-steel-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/nickel-alloy-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/nickel-alloy-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/chrome-moly-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/chrome-moly-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/pressure-vessel-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/pressure-vessel-plate/': '/product-details/boiler-quality-plate/',
  '/products/plates/offshore-steel-plate': '/product-details/boiler-quality-plate/',
  '/products/plates/offshore-steel-plate/': '/product-details/boiler-quality-plate/',

  // Obsolete Pipes redirects (to active /products/pipes/alloy-steel-pipes/)
  '/products/pipes/aluminium-pipe': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/aluminium-pipe/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/stainless-steel-pipes': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/stainless-steel-pipes/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/carbon-steel-pipes': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/carbon-steel-pipes/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/hastelloy-pipes': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/hastelloy-pipes/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/incoloy-pipe': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/incoloy-pipe/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/monel-pipe': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/monel-pipe/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/titanium-pipe': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/titanium-pipe/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/tantalum-pipe': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/tantalum-pipe/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/duplex-steel-superduplex-steel-pipe': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/duplex-steel-superduplex-steel-pipe/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/nickel-pipe': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/nickel-pipe/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/mild-steel-pipes': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/mild-steel-pipes/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/copper-pipes': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/copper-pipes/': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/brass-pipes': '/products/pipes/alloy-steel-pipes/',
  '/products/pipes/brass-pipes/': '/products/pipes/alloy-steel-pipes/',

  // Obsolete Tubes redirects (to active /products/pipes/alloy-steel-pipes/)
  '/products/tubes/copper-tube': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/copper-tube/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/tantalum-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/tantalum-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/stainless-steel-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/stainless-steel-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/carbon-steel-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/carbon-steel-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/hastelloy-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/hastelloy-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/incoloy-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/incoloy-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/monel-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/monel-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/titanium-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/titanium-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/aluminium-tubes': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/aluminium-tubes/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/duplex-steel-super-duplex-steel-tube': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/duplex-steel-super-duplex-steel-tube/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/nickel-tube': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/nickel-tube/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/alloy-steel-tube': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/alloy-steel-tube/': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/brass-tube': '/products/pipes/alloy-steel-pipes/',
  '/products/tubes/brass-tube/': '/products/pipes/alloy-steel-pipes/'
};

export const optionARedirects = {
  '/naharlagun': '/itanagar/',
  '/naharlagun/': '/itanagar/',
  '/pasighat': '/market-area/arunachal-pradesh/',
  '/pasighat/': '/market-area/arunachal-pradesh/',
  '/tawang': '/market-area/arunachal-pradesh/',
  '/tawang/': '/market-area/arunachal-pradesh/',
  '/ziro': '/market-area/arunachal-pradesh/',
  '/ziro/': '/market-area/arunachal-pradesh/'
};

const SitemapRedirect = () => {
  useEffect(() => {
    window.location.href = '/sitemap.xml';
  }, []);
  return null;
};

export const appRoutes = (
  <>
    {/* Core Pages */}
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<ContactUs />} />
    <Route path='/contact/' element={<ContactUs />} />
    <Route path='/about-us' element={<AboutUs />} />
    <Route path='/about-us/' element={<AboutUs />} />
    <Route path='/quality' element={<Quality />} />
    <Route path='/quality/' element={<Quality />} />
    <Route path='/certification' element={<Certification />} />
    <Route path='/certification/' element={<Certification />} />
    <Route path='/certificates' element={<Navigate to="/certification/" replace />} />
    <Route path='/certificates/' element={<Navigate to="/certification/" replace />} />
    <Route path='/career' element={<CareerPage />} />
    <Route path='/career/' element={<CareerPage />} />
    <Route path='/brochure' element={<BrochureGating />} />
    <Route path='/brochure/' element={<BrochureGating />} />

    {/* Commercial & Technical Landing Pages */}
    <Route path='/oil-gas-pipe-fittings' element={<OilGasLanding />} />
    <Route path='/oil-gas-pipe-fittings/' element={<OilGasLanding />} />
    <Route path='/tech-info/pipe-dimensions' element={<PipeDimensions />} />
    <Route path='/tech-info/pipe-dimensions/' element={<PipeDimensions />} />
    <Route path='/export/uae' element={<ExportUAE />} />
    <Route path='/export/uae/' element={<ExportUAE />} />
    <Route path='/export/usa' element={<ExportUSA />} />
    <Route path='/export/usa/' element={<ExportUSA />} />

    {/* Categories */}
    <Route path='/products/socket-weld-fittings' element={<SocketWeldFittingsCategory />} />
    <Route path='/products/socket-weld-fittings/' element={<SocketWeldFittingsCategory />} />
    <Route path='/products/forged-fittings' element={<ForgedFittingsCategory />} />
    <Route path='/products/forged-fittings/' element={<ForgedFittingsCategory />} />
    <Route path='/products/pipes/alloy-steel-pipes' element={<AlloySteelPipes />} />
    <Route path='/products/pipes/alloy-steel-pipes/' element={<AlloySteelPipes />} />
    <Route path='/product-details/boiler-quality-plate' element={<BoilerQualityPlate />} />
    <Route path='/product-details/boiler-quality-plate/' element={<BoilerQualityPlate />} />
    <Route path='/product-details/hardox-plate' element={<HardoxPlate />} />
    <Route path='/product-details/hardox-plate/' element={<HardoxPlate />} />
    <Route path='/pipe-fittings-manufacturer-india' element={<PipeFittingsManufacturerIndia />} />
    <Route path='/pipe-fittings-manufacturer-india/' element={<PipeFittingsManufacturerIndia />} />
    <Route path='/buttweld-fittings-exporter-india' element={<ButtweldFittingsExporterIndia />} />
    <Route path='/buttweld-fittings-exporter-india/' element={<ButtweldFittingsExporterIndia />} />

    {/* Blog Index & Posts */}
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/blogs/' element={<Blogs />} />
    <Route path='/blogs/forged-vs-cast-fittings' element={<ForgedVsCast />} />
    <Route path='/blogs/forged-vs-cast-fittings/' element={<ForgedVsCast />} />
    <Route path='/blogs/pipe-flanges-guide' element={<PipeFlangesGuide />} />
    <Route path='/blogs/pipe-flanges-guide/' element={<PipeFlangesGuide />} />
    <Route path='/blogs/stainless-steel-grades-explained' element={<StainlessSteelGrades />} />
    <Route path='/blogs/stainless-steel-grades-explained/' element={<StainlessSteelGrades />} />
    <Route path='/blogs/oil-and-gas-pipe-fittings-guide' element={<OilAndGasFittings />} />
    <Route path='/blogs/oil-and-gas-pipe-fittings-guide/' element={<OilAndGasFittings />} />
    <Route path='/blogs/butt-weld-fittings-guide' element={<ButtWeldFittingsGuide />} />
    <Route path='/blogs/butt-weld-fittings-guide/' element={<ButtWeldFittingsGuide />} />
    <Route path='/blogs/alloy-steel-power-gen-guide' element={<AlloySteelPowerGen />} />
    <Route path='/blogs/alloy-steel-power-gen-guide/' element={<AlloySteelPowerGen />} />

    <Route path='/blogs/hardox-400-vs-450' element={<Hardox400Vs450 />} />
    <Route path='/blogs/hardox-400-vs-450/' element={<Hardox400Vs450 />} />
    <Route path='/blogs/flange-pressure-class-guide' element={<FlangePressureClassGuide />} />
    <Route path='/blogs/flange-pressure-class-guide/' element={<FlangePressureClassGuide />} />
    <Route path='/blogs/weld-neck-vs-slip-on-flange' element={<WeldNeckVsSlipOn />} />
    <Route path='/blogs/weld-neck-vs-slip-on-flange/' element={<WeldNeckVsSlipOn />} />
    <Route path='/blogs/asme-b16-5-vs-b16-47' element={<AsmeB165VsB1647 />} />
    <Route path='/blogs/asme-b16-5-vs-b16-47/' element={<AsmeB165VsB1647 />} />
    <Route path='/blogs/a105-vs-a350-lf2' element={<A105VsA350LF2 />} />
    <Route path='/blogs/a105-vs-a350-lf2/' element={<A105VsA350LF2 />} />
    <Route path='/blogs/mtc-en10204-explained' element={<MtcEN10204Guide />} />
    <Route path='/blogs/mtc-en10204-explained/' element={<MtcEN10204Guide />} />
    <Route path='/blogs/ibr-approved-fittings-guide' element={<IbrFittingsGuide />} />
    <Route path='/blogs/ibr-approved-fittings-guide/' element={<IbrFittingsGuide />} />
    <Route path='/blogs/duplex-vs-super-duplex' element={<DuplexVsSuperDuplex />} />
    <Route path='/blogs/duplex-vs-super-duplex/' element={<DuplexVsSuperDuplex />} />
    <Route path='/blogs/flange-face-types' element={<FlangeFaceTypesGuide />} />
    <Route path='/blogs/flange-face-types/' element={<FlangeFaceTypesGuide />} />

    {/* Tech Info */}
    <Route path='/tech-info/chemical-composition' element={<ChemicalComposition />} />
    <Route path='/tech-info/chemical-composition/' element={<ChemicalComposition />} />
    <Route path='/tech-info/mechanical-properties' element={<MechanicalProperties />} />
    <Route path='/tech-info/mechanical-properties/' element={<MechanicalProperties />} />
    <Route path='/tech-info/weight-chart' element={<WeightChart />} />
    <Route path='/tech-info/weight-chart/' element={<WeightChart />} />
    <Route path='/tech-info/dimension-chart' element={<DimensionChart />} />
    <Route path='/tech-info/dimension-chart/' element={<DimensionChart />} />
    <Route path='/tech-info/dimensions' element={<Navigate to="/tech-info/dimension-chart/" replace />} />
    <Route path='/tech-info/dimensions/' element={<Navigate to="/tech-info/dimension-chart/" replace />} />

    {/* Flanges Category Hub & Types */}
    <Route path='/products/flanges' element={<FlangesCategoryHub />} />
    <Route path='/products/flanges/' element={<FlangesCategoryHub />} />
    <Route path='/products/flanges/weld-neck-flange' element={<WeldNeck />} />
    <Route path='/products/flanges/weld-neck-flange/' element={<WeldNeck />} />
    <Route path='/products/flanges/slip-on-flange' element={<SlipOn />} />
    <Route path='/products/flanges/slip-on-flange/' element={<SlipOn />} />
    <Route path='/products/flanges/socket-weld-flange' element={<SocketWeld />} />
    <Route path='/products/flanges/socket-weld-flange/' element={<SocketWeld />} />
    <Route path='/products/flanges/threaded-flange' element={<Threaded />} />
    <Route path='/products/flanges/threaded-flange/' element={<Threaded />} />
    <Route path='/products/flanges/blind-flange' element={<Blind />} />
    <Route path='/products/flanges/blind-flange/' element={<Blind />} />
    <Route path='/products/flanges/lap-joint-flange' element={<LapJoint />} />
    <Route path='/products/flanges/lap-joint-flange/' element={<LapJoint />} />
    <Route path='/products/flanges/long-weld-neck-flange' element={<LongWeldNeck />} />
    <Route path='/products/flanges/long-weld-neck-flange/' element={<LongWeldNeck />} />
    <Route path='/products/flanges/spectacle-blind-flange' element={<SpectacleBlind />} />
    <Route path='/products/flanges/spectacle-blind-flange/' element={<SpectacleBlind />} />

    {/* 52 New Commercial Flange Pages */}
    {Object.keys(newFlangePagesData).map((pathKey) => {
      const noSlash = pathKey.endsWith('/') ? pathKey.slice(0, -1) : pathKey;
      const slash = pathKey.endsWith('/') ? pathKey : `${pathKey}/`;
      return (
        <React.Fragment key={pathKey}>
          <Route path={slash} element={<CommercialFlangePage />} />
          <Route path={noSlash} element={<CommercialFlangePage />} />
        </React.Fragment>
      );
    })}

    {/* Buttweld Fittings */}
    <Route path='/products/buttweld-fittings/butt-weld-elbow-fittings' element={<ButtWeldElbowFittings />} />
    <Route path='/products/buttweld-fittings/butt-weld-elbow-fittings/' element={<ButtWeldElbowFittings />} />
    <Route path='/products/buttweld-fittings/180-elbow' element={<Elbow180 />} />
    <Route path='/products/buttweld-fittings/180-elbow/' element={<Elbow180 />} />
    <Route path='/products/buttweld-fittings/90-elbow' element={<Elbow90 />} />
    <Route path='/products/buttweld-fittings/90-elbow/' element={<Elbow90 />} />
    <Route path='/products/buttweld-fittings/45-elbow' element={<Elbow45 />} />
    <Route path='/products/buttweld-fittings/45-elbow/' element={<Elbow45 />} />
    <Route path='/products/buttweld-fittings/butt-weld-bends-fittings' element={<ButtWeldBendsFittings />} />
    <Route path='/products/buttweld-fittings/butt-weld-bends-fittings/' element={<ButtWeldBendsFittings />} />
    <Route path='/products/buttweld-fittings/butt-weld-tee-fittings' element={<ButtWeldTeeFittings />} />
    <Route path='/products/buttweld-fittings/butt-weld-tee-fittings/' element={<ButtWeldTeeFittings />} />
    <Route path='/products/buttweld-fittings/reducing-tee' element={<ReducingTee />} />
    <Route path='/products/buttweld-fittings/reducing-tee/' element={<ReducingTee />} />
    <Route path='/products/buttweld-fittings/straight-tee' element={<StraightTee />} />
    <Route path='/products/buttweld-fittings/straight-tee/' element={<StraightTee />} />
    <Route path='/products/buttweld-fittings/butt-weld-reducers-fittings' element={<ButtWeldReducersFittings />} />
    <Route path='/products/buttweld-fittings/butt-weld-reducers-fittings/' element={<ButtWeldReducersFittings />} />
    <Route path='/products/buttweld-fittings/concentric-reducer' element={<ConcentricReducer />} />
    <Route path='/products/buttweld-fittings/concentric-reducer/' element={<ConcentricReducer />} />
    <Route path='/products/buttweld-fittings/eccentric-reducer' element={<EccentricReducer />} />
    <Route path='/products/buttweld-fittings/eccentric-reducer/' element={<EccentricReducer />} />
    <Route path='/products/buttweld-fittings/oval-caps' element={<OvalCaps />} />
    <Route path='/products/buttweld-fittings/oval-caps/' element={<OvalCaps />} />

    {/* Socket Weld Fittings */}
    <Route path='/products/socket-weld-fittings/socket-weld-coupling-fittings' element={<SocketWeldCoupling />} />
    <Route path='/products/socket-weld-fittings/socket-weld-coupling-fittings/' element={<SocketWeldCoupling />} />
    <Route path='/products/socket-weld-fittings/socket-weld-union-fittings' element={<SocketWeldUnion />} />
    <Route path='/products/socket-weld-fittings/socket-weld-union-fittings/' element={<SocketWeldUnion />} />
    <Route path='/products/socket-weld-fittings/socket-weld-elbow-fittings' element={<SocketWeldElbow />} />
    <Route path='/products/socket-weld-fittings/socket-weld-elbow-fittings/' element={<SocketWeldElbow />} />
    <Route path='/products/socket-weld-fittings/socket-weld-tee-fittings' element={<SocketWeldTee />} />
    <Route path='/products/socket-weld-fittings/socket-weld-tee-fittings/' element={<SocketWeldTee />} />
    <Route path='/products/socket-weld-fittings/socket-weld-lateral-tee-fittings' element={<SocketWeldLateralTee />} />
    <Route path='/products/socket-weld-fittings/socket-weld-lateral-tee-fittings/' element={<SocketWeldLateralTee />} />
    <Route path='/products/socket-weld-fittings/socket-weld-cross-fittings' element={<SocketWeldCross />} />
    <Route path='/products/socket-weld-fittings/socket-weld-cross-fittings/' element={<SocketWeldCross />} />
    <Route path='/products/socket-weld-fittings/socket-weld-cap-fittings' element={<SocketWeldCap />} />
    <Route path='/products/socket-weld-fittings/socket-weld-cap-fittings/' element={<SocketWeldCap />} />
    <Route path='/products/socket-weld-fittings/socket-weld-reducer-insert-fittings' element={<SocketWeldReducerInsert />} />
    <Route path='/products/socket-weld-fittings/socket-weld-reducer-insert-fittings/' element={<SocketWeldReducerInsert />} />
    <Route path='/products/socket-weld-fittings/socket-weld-nipple-fittings' element={<SocketWeldNipple />} />
    <Route path='/products/socket-weld-fittings/socket-weld-nipple-fittings/' element={<SocketWeldNipple />} />
    <Route path='/products/socket-weld-fittings/socket-weld-bushing-fittings' element={<SocketWeldBushing />} />
    <Route path='/products/socket-weld-fittings/socket-weld-bushing-fittings/' element={<SocketWeldBushing />} />
    <Route path='/products/socket-weld-fittings/socket-weld-plug-fittings' element={<SocketWeldPlug />} />
    <Route path='/products/socket-weld-fittings/socket-weld-plug-fittings/' element={<SocketWeldPlug />} />

    {/* Sitemap & Dynamic City Pages */}
  
    {/* Material Grade Pages */}
    <Route path='/materials/carbon-steel-flanges' element={<CarbonSteelFlanges />} />
    <Route path='/materials/carbon-steel-flanges/' element={<CarbonSteelFlanges />} />
    <Route path='/materials/stainless-steel-304-flanges' element={<SS304Flanges />} />
    <Route path='/materials/stainless-steel-304-flanges/' element={<SS304Flanges />} />
    <Route path='/materials/stainless-steel-316-flanges' element={<SS316Flanges />} />
    <Route path='/materials/stainless-steel-316-flanges/' element={<SS316Flanges />} />
    <Route path='/materials/stainless-steel-321-347-flanges' element={<SS321347Flanges />} />
    <Route path='/materials/stainless-steel-321-347-flanges/' element={<SS321347Flanges />} />
    <Route path='/materials/duplex-2205-flanges' element={<Duplex2205Flanges />} />
    <Route path='/materials/duplex-2205-flanges/' element={<Duplex2205Flanges />} />
    <Route path='/materials/super-duplex-2507-flanges' element={<SuperDuplex2507Flanges />} />
    <Route path='/materials/super-duplex-2507-flanges/' element={<SuperDuplex2507Flanges />} />
    <Route path='/materials/super-duplex-zeron-100-flanges' element={<SuperDuplexZeron100Flanges />} />
    <Route path='/materials/super-duplex-zeron-100-flanges/' element={<SuperDuplexZeron100Flanges />} />
    <Route path='/materials/alloy-steel-f11-f22-flanges' element={<AlloySteelF11F22Flanges />} />
    <Route path='/materials/alloy-steel-f11-f22-flanges/' element={<AlloySteelF11F22Flanges />} />
    <Route path='/materials/alloy-steel-f91-flanges' element={<AlloySteelF91Flanges />} />
    <Route path='/materials/alloy-steel-f91-flanges/' element={<AlloySteelF91Flanges />} />
    <Route path='/materials/inconel-625-flanges' element={<Inconel625Flanges />} />
    <Route path='/materials/inconel-625-flanges/' element={<Inconel625Flanges />} />
    <Route path='/materials/hastelloy-c276-flanges' element={<HastelloyC276Flanges />} />
    <Route path='/materials/hastelloy-c276-flanges/' element={<HastelloyC276Flanges />} />
    <Route path='/materials/monel-400-flanges' element={<Monel400Flanges />} />
    <Route path='/materials/monel-400-flanges/' element={<Monel400Flanges />} />

    {/* Standards Pages */}
    <Route path='/standards/asme-b16-5' element={<AsmeB165Standard />} />
    <Route path='/standards/asme-b16-5/' element={<AsmeB165Standard />} />
    <Route path='/standards/asme-b16-47' element={<AsmeB1647Standard />} />
    <Route path='/standards/asme-b16-47/' element={<AsmeB1647Standard />} />
    <Route path='/standards/en-1092-1' element={<En10921Standard />} />
    <Route path='/standards/en-1092-1/' element={<En10921Standard />} />
    <Route path='/standards/din-2501' element={<Din2501Standard />} />
    <Route path='/standards/din-2501/' element={<Din2501Standard />} />
    <Route path='/standards/jis-b2220' element={<JisB2220Standard />} />
    <Route path='/standards/jis-b2220/' element={<JisB2220Standard />} />
    <Route path='/standards/bs-10-bs-4504' element={<Bs10Bs4504Standard />} />
    <Route path='/standards/bs-10-bs-4504/' element={<Bs10Bs4504Standard />} />

    {/* Industry Pages */}
    <Route path='/industries/oil-and-gas' element={<OilAndGasIndustry />} />
    <Route path='/industries/oil-and-gas/' element={<OilAndGasIndustry />} />
    <Route path='/industries/pharmaceutical' element={<PharmaceuticalIndustry />} />
    <Route path='/industries/pharmaceutical/' element={<PharmaceuticalIndustry />} />
    <Route path='/industries/power-generation' element={<PowerGenerationIndustry />} />
    <Route path='/industries/power-generation/' element={<PowerGenerationIndustry />} />
    <Route path='/industries/water-infrastructure' element={<WaterInfrastructureIndustry />} />
    <Route path='/industries/water-infrastructure/' element={<WaterInfrastructureIndustry />} />
    <Route path='/industries/marine' element={<MarineIndustry />} />
    <Route path='/industries/marine/' element={<MarineIndustry />} />
    <Route path='/industries/chemical-processing' element={<ChemicalProcessingIndustry />} />
    <Route path='/industries/chemical-processing/' element={<ChemicalProcessingIndustry />} />

    {/* Global Export Routes */}
    <Route path='/export' element={<WhereWeExport />} />
    <Route path='/export/' element={<WhereWeExport />} />
    <Route path='/export/:countrySlug' element={<ExportHubPage />} />
    <Route path='/export/:countrySlug/' element={<ExportHubPage />} />
    <Route path='/export/:countrySlug/:citySlug' element={<ExportCityPage />} />
    <Route path='/export/:countrySlug/:citySlug/' element={<ExportCityPage />} />

    {/* Market Area Index & State Hubs */}
    <Route path='/market-area' element={<MarketAreaIndex />} />
    <Route path='/market-area/' element={<MarketAreaIndex />} />
    <Route path='/market-area/andhra-pradesh' element={<StateHubPage forcedKey="ap_hub" />} />
    <Route path='/market-area/andhra-pradesh/' element={<StateHubPage forcedKey="ap_hub" />} />
    <Route path='/market-area/arunachal-pradesh' element={<StateHubPage forcedKey="ar_hub" />} />
    <Route path='/market-area/arunachal-pradesh/' element={<StateHubPage forcedKey="ar_hub" />} />

    {/* 10 Strategy City Pages */}
    <Route path='/visakhapatnam' element={<CityPageStrategy forcedKey="vizag" />} />
    <Route path='/visakhapatnam/' element={<CityPageStrategy forcedKey="vizag" />} />
    <Route path='/vijayawada' element={<CityPageStrategy forcedKey="vijayawada" />} />
    <Route path='/vijayawada/' element={<CityPageStrategy forcedKey="vijayawada" />} />
    <Route path='/guntur' element={<CityPageStrategy forcedKey="guntur" />} />
    <Route path='/guntur/' element={<CityPageStrategy forcedKey="guntur" />} />
    <Route path='/nellore' element={<CityPageStrategy forcedKey="nellore" />} />
    <Route path='/nellore/' element={<CityPageStrategy forcedKey="nellore" />} />
    <Route path='/kurnool' element={<CityPageStrategy forcedKey="kurnool" />} />
    <Route path='/kurnool/' element={<CityPageStrategy forcedKey="kurnool" />} />
    <Route path='/itanagar' element={<CityPageStrategy forcedKey="itanagar" />} />
    <Route path='/itanagar/' element={<CityPageStrategy forcedKey="itanagar" />} />
    <Route path='/naharlagun' element={<Navigate to="/itanagar/" replace />} />
    <Route path='/naharlagun/' element={<Navigate to="/itanagar/" replace />} />
    <Route path='/pasighat' element={<Navigate to="/market-area/arunachal-pradesh/" replace />} />
    <Route path='/pasighat/' element={<Navigate to="/market-area/arunachal-pradesh/" replace />} />
    <Route path='/tawang' element={<Navigate to="/market-area/arunachal-pradesh/" replace />} />
    <Route path='/tawang/' element={<Navigate to="/market-area/arunachal-pradesh/" replace />} />
    <Route path='/ziro' element={<Navigate to="/market-area/arunachal-pradesh/" replace />} />
    <Route path='/ziro/' element={<Navigate to="/market-area/arunachal-pradesh/" replace />} />
    <Route path='/sitemap' element={<SitemapRedirect />} />
    <Route path='/sitemap.xml' element={<SitemapRedirect />} />

    {/* Legacy Product Redirects */}
    {Object.entries(legacyProductRedirects).map(([oldPath, newPath]) => (
      <Route key={oldPath} path={oldPath} element={<Navigate to={newPath} replace />} />
    ))}

    <Route path='/:cityName' element={<CityPage />} />
    <Route path='/:cityName/' element={<CityPage />} />
    <Route path='/:stateName/:cityName' element={<CityPage />} />
    <Route path='/:stateName/:cityName/' element={<CityPage />} />

    {/* 404 Catch-All */}
    <Route path='*' element={<NotFound />} />

  </>
);
