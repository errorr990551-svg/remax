import React from 'react';
import { Home, ChevronRight, Grid } from 'lucide-react';

const DimensionChart = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-slate-400">Tech Info</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Dimension Chart</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Dimension Chart</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Text */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
            <Grid className="text-[#D71920]" /> Overview
          </h2>
          <p className="text-slate-600 leading-relaxed">
            The dimension chart provides detailed technical specifications of pipes across a wide range of nominal sizes and schedules. It includes critical parameters such as outside diameter, inside diameter, wall thickness, cross-sectional metal area, internal flow area, moment of inertia, section modulus, weight per foot (pipe and water), and external surface area. These values are presented for various standard schedules (STD, XS, XXS, Schedule 10S, 40, 40S, 80, 80S, 160, etc.) for carbon steel and stainless-steel pipes. This chart serves as a comprehensive reference for engineers, designers, and fabricators to accurately select pipes based on mechanical strength, pressure handling capacity, flow requirements, and structural performance in industrial piping systems.
          </p>
        </div>

        {/* Data Table Container */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 bg-[#0F172A] border-b border-slate-700">
            <h3 className="text-lg font-bold text-white">Pipe Dimensions & Weights</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-center whitespace-nowrap">
              <thead className="bg-slate-100 text-[#0F172A]">
                <tr>
                  <th rowSpan="3" className="px-3 py-2 border border-slate-300 bg-slate-200">Pipe Size (in)</th>
                  <th rowSpan="3" className="px-3 py-2 border border-slate-300">Outside Diam. (in)</th>
                  <th colSpan="2" className="px-3 py-2 border border-slate-300">Identification</th>
                  <th rowSpan="3" className="px-3 py-2 border border-slate-300">Wall Thickness (t) (in)</th>
                  <th rowSpan="3" className="px-3 py-2 border border-slate-300">Inside Diameter (d) (in)</th>
                  <th colSpan="8" className="px-3 py-2 border border-slate-300">Properties</th>
                </tr>
                <tr>
                  <th className="px-3 py-2 border border-slate-300">Steel</th>
                  <th className="px-3 py-2 border border-slate-300">Stainless Sched. No.</th>
                  <th className="px-3 py-2 border border-slate-300">Area of Metal (in²)</th>
                  <th className="px-3 py-2 border border-slate-300">Transverse Internal Area (in²)</th>
                  <th className="px-3 py-2 border border-slate-300">Moment of Inertia (in⁴)</th>
                  <th className="px-3 py-2 border border-slate-300">Weight Pipe (lb/ft)</th>
                  <th className="px-3 py-2 border border-slate-300">Weight Water (lb/ft)</th>
                  <th className="px-3 py-2 border border-slate-300">Ext. Surface (ft²/ft)</th>
                  <th className="px-3 py-2 border border-slate-300">Section Modulus (in³)</th>
                </tr>
                <tr>
                  <th className="px-3 py-2 border border-slate-300">Iron Pipe Size</th>
                  <th className="px-3 py-2 border border-slate-300">Sched. No.</th>
                  <th className="px-3 py-2 border border-slate-300"></th>
                  <th className="px-3 py-2 border border-slate-300"></th>
                  <th className="px-3 py-2 border border-slate-300"></th>
                  <th className="px-3 py-2 border border-slate-300"></th>
                  <th className="px-3 py-2 border border-slate-300"></th>
                  <th className="px-3 py-2 border border-slate-300"></th>
                  <th className="px-3 py-2 border border-slate-300"></th>
                </tr>
              </thead>
              <tbody>
                {/* 1/8 Inch */}
                <tr className="border-b border-slate-200"><td rowSpan="3" className="border border-slate-200 bg-slate-50 font-bold">1/8</td><td rowSpan="3" className="border border-slate-200">0.405</td><td>STD</td><td>10S</td><td>0.049</td><td>0.307</td><td>0.0548</td><td>0.0740</td><td>0.00088</td><td>0.19</td><td>0.032</td><td>0.106</td><td>0.00437</td></tr>
                <tr className="border-b border-slate-200"><td>XS</td><td>40S</td><td>0.068</td><td>0.269</td><td>0.0720</td><td>0.0568</td><td>0.00106</td><td>0.24</td><td>0.025</td><td>0.106</td><td>0.00523</td></tr>
                <tr className="border-b border-slate-200"><td></td><td>80S</td><td>0.095</td><td>0.215</td><td>0.0925</td><td>0.0364</td><td>0.00122</td><td>0.31</td><td>0.016</td><td>0.106</td><td>0.00602</td></tr>

                {/* 1/4 Inch */}
                <tr className="bg-slate-50/50 border-b border-slate-200"><td rowSpan="3" className="border border-slate-200 bg-slate-50 font-bold">1/4</td><td rowSpan="3" className="border border-slate-200">0.540</td><td>STD</td><td>10S</td><td>0.065</td><td>0.410</td><td>0.0970</td><td>0.1320</td><td>0.00279</td><td>0.33</td><td>0.057</td><td>0.141</td><td>0.01032</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>XS</td><td>40S</td><td>0.088</td><td>0.364</td><td>0.1250</td><td>0.1041</td><td>0.00331</td><td>0.42</td><td>0.045</td><td>0.141</td><td>0.01227</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td></td><td>80S</td><td>0.119</td><td>0.302</td><td>0.1574</td><td>0.0716</td><td>0.00377</td><td>0.54</td><td>0.031</td><td>0.141</td><td>0.01395</td></tr>

                {/* 3/8 Inch */}
                <tr className="border-b border-slate-200"><td rowSpan="3" className="border border-slate-200 bg-slate-50 font-bold">3/8</td><td rowSpan="3" className="border border-slate-200">0.675</td><td>STD</td><td>10S</td><td>0.065</td><td>0.545</td><td>0.1246</td><td>0.2333</td><td>0.00586</td><td>0.42</td><td>0.101</td><td>0.178</td><td>0.01736</td></tr>
                <tr className="border-b border-slate-200"><td>XS</td><td>40S</td><td>0.091</td><td>0.493</td><td>0.1670</td><td>0.1910</td><td>0.00729</td><td>0.57</td><td>0.083</td><td>0.178</td><td>0.02160</td></tr>
                <tr className="border-b border-slate-200"><td></td><td>80S</td><td>0.126</td><td>0.423</td><td>0.2173</td><td>0.1405</td><td>0.00862</td><td>0.74</td><td>0.061</td><td>0.178</td><td>0.02554</td></tr>

                 {/* 1/2 Inch */}
                <tr className="bg-slate-50/50 border-b border-slate-200"><td rowSpan="4" className="border border-slate-200 bg-slate-50 font-bold">1/2</td><td rowSpan="4" className="border border-slate-200">0.840</td><td></td><td>5S</td><td>0.065</td><td>0.710</td><td>0.1583</td><td>0.3959</td><td>0.01197</td><td>0.54</td><td>0.172</td><td>0.220</td><td>0.02849</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>STD</td><td>40S</td><td>0.109</td><td>0.622</td><td>0.2503</td><td>0.3040</td><td>0.01709</td><td>0.85</td><td>0.132</td><td>0.220</td><td>0.04069</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>XS</td><td>80S</td><td>0.147</td><td>0.546</td><td>0.3200</td><td>0.2340</td><td>0.02008</td><td>1.09</td><td>0.102</td><td>0.220</td><td>0.04780</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>XXS</td><td></td><td>0.294</td><td>0.252</td><td>0.5043</td><td>0.050</td><td>0.02424</td><td>1.71</td><td>0.022</td><td>0.220</td><td>0.05772</td></tr>

                {/* 1 Inch */}
                <tr className="border-b border-slate-200"><td rowSpan="4" className="border border-slate-200 bg-slate-50 font-bold">1</td><td rowSpan="4" className="border border-slate-200">1.315</td><td></td><td>5S</td><td>0.065</td><td>1.185</td><td>0.2553</td><td>1.1029</td><td>0.04999</td><td>0.87</td><td>0.478</td><td>0.344</td><td>0.07603</td></tr>
                <tr className="border-b border-slate-200"><td>STD</td><td>40S</td><td>0.133</td><td>1.049</td><td>0.4939</td><td>0.8640</td><td>0.08734</td><td>1.68</td><td>0.375</td><td>0.344</td><td>0.1328</td></tr>
                <tr className="border-b border-slate-200"><td>XS</td><td>80S</td><td>0.179</td><td>0.957</td><td>0.6388</td><td>0.7190</td><td>0.1056</td><td>2.17</td><td>0.312</td><td>0.344</td><td>0.1606</td></tr>
                <tr className="border-b border-slate-200"><td>XXS</td><td></td><td>0.358</td><td>0.599</td><td>1.0760</td><td>0.282</td><td>0.1405</td><td>3.66</td><td>0.122</td><td>0.344</td><td>0.2136</td></tr>
                
                {/* 2 Inch */}
                <tr className="bg-slate-50/50 border-b border-slate-200"><td rowSpan="4" className="border border-slate-200 bg-slate-50 font-bold">2</td><td rowSpan="4" className="border border-slate-200">2.375</td><td></td><td>5S</td><td>0.065</td><td>2.245</td><td>0.4717</td><td>3.958</td><td>0.3149</td><td>1.61</td><td>1.721</td><td>0.622</td><td>0.2652</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>STD</td><td>40S</td><td>0.154</td><td>2.067</td><td>1.075</td><td>3.355</td><td>0.6657</td><td>3.65</td><td>1.45</td><td>0.622</td><td>0.5606</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>XS</td><td>80S</td><td>0.218</td><td>1.939</td><td>1.477</td><td>2.953</td><td>0.8679</td><td>5.02</td><td>1.28</td><td>0.622</td><td>0.7309</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>XXS</td><td></td><td>0.436</td><td>1.503</td><td>2.656</td><td>1.774</td><td>1.311</td><td>9.03</td><td>0.77</td><td>0.622</td><td>1.104</td></tr>

                 {/* 4 Inch */}
                <tr className="border-b border-slate-200"><td rowSpan="5" className="border border-slate-200 bg-slate-50 font-bold">4</td><td rowSpan="5" className="border border-slate-200">4.500</td><td></td><td>5S</td><td>0.083</td><td>4.334</td><td>1.152</td><td>14.75</td><td>2.810</td><td>3.92</td><td>6.39</td><td>1.178</td><td>1.249</td></tr>
                <tr className="border-b border-slate-200"><td>STD</td><td>40S</td><td>0.237</td><td>4.026</td><td>3.174</td><td>12.73</td><td>7.233</td><td>10.79</td><td>5.50</td><td>1.178</td><td>3.214</td></tr>
                <tr className="border-b border-slate-200"><td>XS</td><td>80S</td><td>0.337</td><td>3.826</td><td>4.407</td><td>11.50</td><td>9.610</td><td>14.98</td><td>4.98</td><td>1.178</td><td>4.271</td></tr>
                <tr className="border-b border-slate-200"><td>120</td><td></td><td>0.438</td><td>3.624</td><td>5.595</td><td>10.31</td><td>11.65</td><td>19.00</td><td>4.47</td><td>1.178</td><td>5.178</td></tr>
                <tr className="border-b border-slate-200"><td>XXS</td><td></td><td>0.674</td><td>3.152</td><td>8.101</td><td>7.80</td><td>15.28</td><td>27.54</td><td>3.38</td><td>1.178</td><td>6.791</td></tr>

                {/* 12 Inch */}
                <tr className="bg-slate-50/50 border-b border-slate-200"><td rowSpan="5" className="border border-slate-200 bg-slate-50 font-bold">12</td><td rowSpan="5" className="border border-slate-200">12.75</td><td>STD</td><td>40S</td><td>0.375</td><td>12.000</td><td>14.58</td><td>113.10</td><td>279.3</td><td>49.56</td><td>49.00</td><td>3.338</td><td>43.8</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>XS</td><td>80S</td><td>0.500</td><td>11.750</td><td>19.24</td><td>108.43</td><td>361.5</td><td>65.42</td><td>46.92</td><td>3.338</td><td>56.7</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>80</td><td></td><td>0.688</td><td>11.374</td><td>26.03</td><td>101.64</td><td>475.1</td><td>88.63</td><td>44.04</td><td>3.338</td><td>74.6</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>120</td><td></td><td>1.000</td><td>10.750</td><td>36.91</td><td>90.76</td><td>641.6</td><td>125.49</td><td>39.33</td><td>3.338</td><td>100.7</td></tr>
                <tr className="bg-slate-50/50 border-b border-slate-200"><td>XXS</td><td></td><td>1.312</td><td>10.126</td><td>47.14</td><td>80.53</td><td>781.1</td><td>160.27</td><td>34.89</td><td>3.338</td><td>122.6</td></tr>
                
                {/* 24 Inch */}
                <tr className="border-b border-slate-200"><td rowSpan="5" className="border border-slate-200 bg-slate-50 font-bold">24</td><td rowSpan="5" className="border border-slate-200">24.00</td><td>STD</td><td>20</td><td>0.375</td><td>23.250</td><td>27.83</td><td>424.56</td><td>1942.0</td><td>94.62</td><td>183.95</td><td>6.283</td><td>161.9</td></tr>
                <tr className="border-b border-slate-200"><td>XS</td><td></td><td>0.500</td><td>23.000</td><td>36.91</td><td>415.48</td><td>2549.5</td><td>125.49</td><td>179.87</td><td>6.283</td><td>212.5</td></tr>
                <tr className="border-b border-slate-200"><td>80</td><td></td><td>1.219</td><td>21.562</td><td>87.17</td><td>365.22</td><td>5672.0</td><td>296.58</td><td>158.26</td><td>6.283</td><td>472.8</td></tr>
                <tr className="border-b border-slate-200"><td>140</td><td></td><td>1.812</td><td>20.376</td><td>126.31</td><td>326.08</td><td>7825.0</td><td>429.39</td><td>141.17</td><td>6.283</td><td>652.1</td></tr>
                <tr className="border-b border-slate-200"><td>160</td><td></td><td>2.344</td><td>19.312</td><td>159.41</td><td>292.98</td><td>9455.9</td><td>542.13</td><td>126.84</td><td>6.283</td><td>787.9</td></tr>

              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 text-xs text-slate-500">
            Note: Dimensions and weights are for reference only. Please consult standard specifications for critical applications.
          </div>
        </div>

      </div>
    </div>
  );
};

export default DimensionChart;