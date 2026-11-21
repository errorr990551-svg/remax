import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

// ASME B16.5, inches. OD, bolt circle and drilling cross-checked in two published B16.5 tables; thickness from one.
// [NPS, OD, min. thickness, bolt circle, holes, hole dia]
const CLASS_150 = [
  ['1/2', '3.50', '0.38', '2.38', 4, '0.62'], ['3/4', '3.88', '0.44', '2.75', 4, '0.62'], ['1', '4.25', '0.50', '3.12', 4, '0.62'],
  ['1-1/4', '4.62', '0.56', '3.50', 4, '0.62'], ['1-1/2', '5.00', '0.62', '3.88', 4, '0.62'], ['2', '6.00', '0.69', '4.75', 4, '0.75'],
  ['2-1/2', '7.00', '0.81', '5.50', 4, '0.75'], ['3', '7.50', '0.88', '6.00', 4, '0.75'], ['3-1/2', '8.50', '0.88', '7.00', 8, '0.75'],
  ['4', '9.00', '0.88', '7.50', 8, '0.75'], ['5', '10.00', '0.88', '8.50', 8, '0.88'], ['6', '11.00', '0.94', '9.50', 8, '0.88'],
  ['8', '13.50', '1.06', '11.75', 8, '0.88'], ['10', '16.00', '1.12', '14.25', 12, '1.00'], ['12', '19.00', '1.19', '17.00', 12, '1.00'],
  ['14', '21.00', '1.31', '18.75', 12, '1.12'], ['16', '23.50', '1.38', '21.25', 16, '1.12'], ['18', '25.00', '1.50', '22.75', 16, '1.25'],
  ['20', '27.50', '1.62', '25.00', 20, '1.25'], ['22', '29.50', '1.75', '27.25', 20, '1.38'], ['24', '32.00', '1.81', '29.50', 20, '1.38'],
];
const CLASS_300 = [
  ['1/2', '3.75', '0.50', '2.62', 4, '0.62'], ['3/4', '4.62', '0.56', '3.25', 4, '0.75'], ['1', '4.88', '0.62', '3.50', 4, '0.75'],
  ['1-1/4', '5.25', '0.69', '3.88', 4, '0.75'], ['1-1/2', '6.12', '0.75', '4.50', 4, '0.88'], ['2', '6.50', '0.81', '5.00', 8, '0.75'],
  ['2-1/2', '7.50', '0.94', '5.88', 8, '0.88'], ['3', '8.25', '1.06', '6.62', 8, '0.88'], ['3-1/2', '9.00', '1.12', '7.25', 8, '0.88'],
  ['4', '10.00', '1.19', '7.88', 8, '0.88'], ['5', '11.00', '1.31', '9.25', 8, '0.88'], ['6', '12.50', '1.38', '10.62', 12, '0.88'],
  ['8', '15.00', '1.56', '13.00', 12, '1.00'], ['10', '17.50', '1.81', '15.25', 16, '1.12'], ['12', '20.50', '1.94', '17.75', 16, '1.25'],
  ['14', '23.00', '2.06', '20.25', 20, '1.25'], ['16', '25.50', '2.19', '22.50', 20, '1.38'], ['18', '28.00', '2.31', '24.75', 24, '1.38'],
  ['20', '30.50', '2.44', '27.00', 24, '1.38'], ['22', '33.00', '2.57', '29.25', 24, '1.62'], ['24', '36.00', '2.69', '32.00', 24, '1.62'],
];
const HEAD = ['Nominal size (NPS)', 'Flange OD (in)', 'Min. thickness (in)', 'Bolt circle (in)', 'No. of bolt holes', 'Bolt hole dia. (in)'];

const LINKS = [
  ['/standards/asme-b16-5/', 'ASME B16.5 standard overview', 'Scope, pressure classes, facings and materials.'],
  ['/standards/asme-b16-47/', 'ASME B16.47 large-diameter flanges', 'NPS 26 and above, Series A and Series B.'],
  ['/products/flanges/weld-neck-flange/', 'Weld neck flange', 'Hub and bore details for butt-welded joints.'],
  ['/products/flanges/slip-on-flange/', 'Slip-on flange', 'Uses, ends and ordering notes for slip-on flanges.'],
  ['/products/flanges/blind-flange/', 'Blind flange', 'Closures for pipe ends and nozzles.'],
  ['/tech-info/pipe-dimensions/', 'Pipe dimensions and schedules', 'Pipe OD and wall thickness by schedule (ASME B36.10M / B36.19M).'],
  ['/tech-info/dimension-chart/', 'Pipe properties chart', 'Metal area, moment of inertia and weight per foot by schedule.'],
  ['/tech-info/weight-chart/', 'Weight chart', 'Approximate weights for estimating freight and handling.'],
];

const Table = ({ title, rows }) => (
  <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-10">
    <h2 className="px-6 py-4 bg-[#0F172A] text-lg font-bold text-white">{title}</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-center whitespace-nowrap">
        <thead className="bg-slate-100 text-[#0F172A]">
          <tr>{HEAD.map((h) => <th key={h} scope="col" className="px-3 py-2 border border-slate-300">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="odd:bg-white even:bg-slate-50">
              {r.map((c, i) => i === 0
                ? <th key={i} scope="row" className="px-3 py-2 border border-slate-200 font-bold">{c}</th>
                : <td key={i} className="px-3 py-2 border border-slate-200">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const FlangeDimensionCharts = () => (
  <div className="min-h-screen bg-slate-50 pt-20 font-sans">
    <div className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-300 mb-4">
          <Link to="/" aria-label="Home" className="hover:text-white"><Home size={14} aria-hidden="true" /></Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>Tech Info</span>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page" className="text-white font-medium">Flange Dimension Charts</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Flange Dimension Charts (ASME B16.5)</h1>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10 space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-[#0F172A]">How to Read These Flange Dimension Tables</h2>
        <p>ASME B16.5 sets the dimensions of pipe flanges from NPS 1/2 to NPS 24 in pressure classes 150, 300, 400, 600, 900, 1500 and 2500. The two tables below give the Class 150 and Class 300 figures buyers ask for most: flange outside diameter, minimum flange thickness, bolt circle diameter and the number and size of bolt holes. All values are in inches, the units in which B16.5 tables are usually quoted.</p>
        <p>For a given size and class, the outside diameter, bolt circle and drilling are the same for weld neck, slip-on, socket weld, threaded, lap joint and blind flanges, so any two of them bolt together. Thickness and hub dimensions vary by flange type; the thickness column here is for weld neck flanges. Each bolt hole is 1/8 inch larger than the bolt it takes, so a 0.62 in hole takes a 1/2 in bolt.</p>
        <p>Flanges above NPS 24 are covered by ASME B16.47, whose Series A and Series B drillings differ from each other. Use these tables to check fit-up and to prepare an enquiry. For design and inspection, work from the current edition of the standard.</p>
      </section>

      <Table title="ASME B16.5 Class 150 Flange Dimensions (inches)" rows={CLASS_150} />
      <Table title="ASME B16.5 Class 300 Flange Dimensions (inches)" rows={CLASS_300} />

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-6">More Dimension Charts and Flange Pages</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {LINKS.map(([to, name, note]) => (
            <li key={to}>
              <Link to={to} className="font-semibold text-[#B3141A] hover:underline">{name}</Link>
              <p className="text-sm text-slate-600">{note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

export default FlangeDimensionCharts;
