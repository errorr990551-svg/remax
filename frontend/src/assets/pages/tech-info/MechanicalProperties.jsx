import React from 'react';
import { Home, ChevronRight, Settings } from 'lucide-react';

const MechanicalProperties = () => {
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
            <span className="text-[#D71920] font-medium">Mechanical Properties</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Mechanical Properties</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Text */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
            <Settings className="text-[#D71920]" /> Overview
          </h2>
          <p className="text-slate-600 leading-relaxed">
            The mechanical properties table outlines the minimum tensile strength, yield strength, percentage elongation, and maximum hardness values for various stainless steel grades. These properties indicate the material’s ability to withstand applied loads, resist permanent deformation, and maintain ductility during forming and fabrication processes.
          </p>
          <p className="text-slate-600 leading-relaxed mt-2">
            Tensile and yield strength values (expressed in MPa) define the stress limits of each grade, while elongation percentages reflect flexibility and formability over a 50 mm gauge length. Hardness values, given in Brinell Hardness Number (BHN) and Rockwell B scale (Rb), represent resistance to surface indentation and wear. This data serves as a reliable reference for engineers and designers when selecting suitable stainless steel grades for structural, pressure-bearing, and high-performance applications.
          </p>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 bg-[#0F172A] border-b border-slate-700">
            <h3 className="text-lg font-bold text-white">MECHANICAL PROPERTIES</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-[#0F172A]">
                <tr>
                  <th className="px-6 py-3 border-r border-slate-200">Grade</th>
                  <th className="px-6 py-3 border-r border-slate-200">Tensile Strength Mpa, (Min)</th>
                  <th className="px-6 py-3 border-r border-slate-200">Yield Strength Mpa, (Min)</th>
                  <th className="px-6 py-3 border-r border-slate-200">% Age Elongation in 50mm gauge length min</th>
                  <th className="px-6 py-3 border-r border-slate-200" colSpan="2">Hardness (Max)</th>
                </tr>
                <tr className="bg-slate-200">
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th className="px-6 py-2 border-r border-slate-300 text-center">BHN</th>
                   <th className="px-6 py-2 text-center">Rb</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { g: '301', t: '515', y: '205', e: '40', bhn: '217', rb: '95' },
                  { g: '304', t: '515', y: '205', e: '40', bhn: '201', rb: '92' },
                  { g: '304L', t: '485', y: '170', e: '40', bhn: '201', rb: '92' },
                  { g: '310S', t: '515', y: '205', e: '40', bhn: '217', rb: '95' },
                  { g: '316', t: '515', y: '205', e: '40', bhn: '217', rb: '95' },
                  { g: '316L', t: '485', y: '170', e: '40', bhn: '217', rb: '95' },
                  { g: '317', t: '515', y: '205', e: '35', bhn: '217', rb: '95' },
                  { g: '317L', t: '515', y: '205', e: '40', bhn: '217', rb: '95' },
                  { g: '321', t: '515', y: '205', e: '40', bhn: '217', rb: '95' },
                  { g: '347', t: '515', y: '205', e: '40', bhn: '201', rb: '92' },
                  { g: '409', t: '380', y: '170', e: '20', bhn: '179', rb: '88' },
                  { g: '409M', t: '430', y: '275', e: '20', bhn: '187', rb: '90' },
                  { g: '410S', t: '415', y: '205', e: '22', bhn: '183', rb: '89' },
                  { g: '410', t: '450', y: '205', e: '20', bhn: '217', rb: '89' },
                  { g: '420', t: '700( max )', y: '-', e: '15', bhn: '217', rb: '95' },
                  { g: '430', t: '450', y: '205', e: '22', bhn: '183', rb: '89' },
                  { g: 'JSL AUS', t: '515', y: '205', e: '40', bhn: '217', rb: '95' },
                  { g: 'JS- 203', t: '515', y: '205', e: '40', bhn: '217', rb: '95' },
                  { g: '301M', t: '515', y: '205', e: '40', bhn: '217', rb: '95' }
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-6 py-3 font-bold text-[#D71920] border-r border-slate-200">{row.g}</td>
                    <td className="px-6 py-3 text-slate-700 border-r border-slate-200">{row.t}</td>
                    <td className="px-6 py-3 text-slate-700 border-r border-slate-200">{row.y}</td>
                    <td className="px-6 py-3 text-slate-700 border-r border-slate-200">{row.e}</td>
                    <td className="px-6 py-3 text-slate-700 border-r border-slate-200 text-center">{row.bhn}</td>
                    <td className="px-6 py-3 text-slate-700 text-center">{row.rb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MechanicalProperties;