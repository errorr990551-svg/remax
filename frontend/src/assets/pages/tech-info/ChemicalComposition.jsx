import React from 'react';
import { Home, ChevronRight, FileText } from 'lucide-react';

const ChemicalComposition = () => {
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
            <span className="text-[#D71920] font-medium">Chemical Composition</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Chemical Composition</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Text */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
            <FileText className="text-[#D71920]" /> Overview
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The chemical composition table presents the percentage limits of alloying elements for various stainless steel grades, including carbon, manganese, phosphorus, sulfur, silicon, chromium, nickel, molybdenum, nitrogen, and stabilizing elements such as titanium or columbium where applicable.
          </p>
          <p className="text-slate-600 leading-relaxed">
            These compositional ranges define the corrosion resistance, strength, weldability, and high-temperature performance of each grade. Elements like chromium and nickel primarily enhance corrosion resistance and toughness, while molybdenum improves resistance to pitting and crevice corrosion. Low-carbon variants (L grades) are specified to reduce carbide precipitation during welding. This data acts as a critical reference for material selection, ensuring compliance with international standards and suitability for specific mechanical, chemical, and environmental service conditions.
          </p>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 bg-[#0F172A] border-b border-slate-700">
            <h3 className="text-lg font-bold text-white">CHEMICAL COMPOSITION ( IN PERCENTAGE )</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center">
              <thead className="bg-slate-100 text-[#0F172A]">
                <tr>
                  <th className="px-3 py-3 border-r border-slate-200 min-w-[80px]">Grade</th>
                  <th className="px-3 py-3 border-r border-slate-200">C (Max)</th>
                  <th className="px-3 py-3 border-r border-slate-200">Mn (Max)</th>
                  <th className="px-3 py-3 border-r border-slate-200">P (Max)</th>
                  <th className="px-3 py-3 border-r border-slate-200">S (Max)</th>
                  <th className="px-3 py-3 border-r border-slate-200">Si (Max)</th>
                  <th className="px-3 py-3 border-r border-slate-200">Cr</th>
                  <th className="px-3 py-3 border-r border-slate-200">Ni</th>
                  <th className="px-3 py-3 border-r border-slate-200">Mo</th>
                  <th className="px-3 py-3 border-r border-slate-200">Nitrogen (Max)</th>
                  <th className="px-3 py-3 min-w-[150px]">Cu/ Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { g: '301', c: '0.15', mn: '2.00', p: '0.045', s: '0.030', si: '1.00', cr: '16.00 - 18.00', ni: '6.00 - 8.00', mo: '-', n: '0.10', other: '-' },
                  { g: '304', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '8.00- 10.50', mo: '-', n: '0.10', other: '-' },
                  { g: '304L', c: '0.030', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '8.00- 12.00', mo: '-', n: '0.10', other: '-' },
                  { g: '310S', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '1.50', cr: '24.00- 26.00', ni: '19.00 - 22.00', mo: '-', n: '-', other: '-' },
                  { g: '316', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '16.00 - 18.00', ni: '10.00 - 14.00', mo: '2.00 - 3.00', n: '0.10', other: '-' },
                  { g: '316L', c: '0.030', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '16.00 - 18.00', ni: '10.00 - 14.00', mo: '2.00 - 3.00', n: '0.10', other: '-' },
                  { g: '317', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '11.00 - 14.00', mo: '3.00 - 4.00', n: '0.10', other: '-' },
                  { g: '317L', c: '0.030', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '11.00 - 15.00', mo: '3.00 - 4.00', n: '0.10', other: '-' },
                  { g: '321', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '17.00 - 19.00', ni: '9.00 - 12.00', mo: '-', n: '0.10', other: 'Ti 5x(C+N) Min or 0.70 max' },
                  { g: '347', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '17.00 - 19.00', ni: '9.00 - 13.00', mo: '-', n: '-', other: 'Cb= 10x ( C Min ) or 1.00 Max' },
                  { g: '409', c: '0.08', mn: '1.00', p: '0.040', s: '0.010', si: '1.00', cr: '10.50 - 11.75', ni: '0.50', mo: '-', n: '-', other: 'Ti= 6x (C+ N ) Min or 0.70 Max' },
                  { g: '409M', c: '0.03', mn: '0.8-1.2', p: '0.030', s: '0.030', si: '0.40-0.75', cr: '11.00- 12.00', ni: '1.5 max.', mo: '-', n: '-', other: 'Ti= 6x (C) Min or 0.70 Max' },
                  { g: '410S', c: '0.08', mn: '1.00', p: '0.040', s: '0.030', si: '1.00', cr: '11.50- 13.50', ni: '0.60', mo: '-', n: '-', other: '-' },
                  { g: '410', c: '0.15', mn: '1.00', p: '0.040', s: '0.030', si: '1.00', cr: '11.50- 13.50', ni: '0.75', mo: '-', n: '-', other: '-' },
                  { g: '420', c: '0.35', mn: '0.50', p: '0.035', s: '0.015', si: '0.50', cr: '12.00 - 13.00', ni: '0.2-0.3', mo: '-', n: '-', other: '-' },
                  { g: '430', c: '0.12', mn: '1.00', p: '0.040', s: '0.030', si: '1.00', cr: '16.00 - 18.00', ni: '0.75', mo: '-', n: '-', other: '-' },
                  { g: 'JSL AUS', c: '0.08', mn: '7.0-8.0', p: '0.070', s: '0.030', si: '0.75', cr: '15.50 - 16.50', ni: '4.25 - 4.75', mo: '-', n: '-', other: 'Cu: 0.9 - 1.10' },
                  { g: 'JS- 203', c: '0.08', mn: '9.25-10.25', p: '0.070', s: '0.030', si: '0.75', cr: '14.25 - 15.25', ni: '2.25 - 2.75', mo: '-', n: '-', other: 'Cu: 1.60- 2.0' },
                  { g: '301M', c: '0.10', mn: '4.5-5.5', p: '0.060', s: '0.030', si: '0.75', cr: '14.50 - 15.50', ni: '6.0 - 7.0', mo: '-', n: '-', other: 'Cu: 1.70- 1.90' }
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-3 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.g}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.c}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.mn}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.p}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.s}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.si}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.cr}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.ni}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.mo}</td>
                    <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.n}</td>
                    <td className="px-3 py-2 text-slate-700">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 text-xs text-slate-500 italic">
            * Thickness of 1.27mm & below will have elongation of 20% min.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChemicalComposition;