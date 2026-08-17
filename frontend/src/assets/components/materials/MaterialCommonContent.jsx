import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, ArrowRight, FileText, Send, Layers } from 'lucide-react';
import api from '../../services/api.js';

const MaterialCommonContent = ({ material }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    requirements: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/contact', {
        ...formData,
        material: material.name,
        page_url: window.location.href
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Overview Section */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Material Specification & Overview</h2>
        <p className="text-slate-600 leading-relaxed mb-6">{material.overview}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
          <div>
            <span className="text-xs uppercase text-slate-500 font-semibold block">UNS Designation</span>
            <span className="text-base font-bold text-slate-800">{material.unsNumber}</span>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-500 font-semibold block">Governing Standard</span>
            <span className="text-base font-bold text-slate-800">{material.governingStandard}</span>
          </div>
        </div>
      </section>

      {/* Chemical Composition Table */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Chemical Composition (wt %)</h2>
        <p className="text-xs text-slate-500 mb-4">Governing specification limits per ASTM / ASME standards. Actual values provided on EN 10204 3.1 MTC.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-xs font-bold text-slate-900 uppercase">
              <tr>
                <th className="p-3">Element</th>
                <th className="p-3">Specification Limit / Composition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {material.chemicalComposition.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="p-3 font-medium text-slate-900">{row.element}</td>
                  <td className="p-3 font-semibold text-[#D71920]">{row.a105 || row.lf2 || row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mechanical Properties Table */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Mechanical Properties</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-xs font-bold text-slate-900 uppercase">
              <tr>
                <th className="p-3">Property</th>
                <th className="p-3">Specification Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {material.mechanicalProperties.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="p-3 font-medium text-slate-900">{row.property}</td>
                  <td className="p-3 font-semibold text-slate-800">{row.a105 || row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pressure-Temperature Ratings */}
      {material.ptRatings && material.ptRatings.length > 0 && (
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pressure-Temperature Rating Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs font-bold text-slate-900 uppercase">
                <tr>
                  <th className="p-3">Service Temp</th>
                  <th className="p-3">Class 150</th>
                  <th className="p-3">Class 300</th>
                  <th className="p-3">Class 600</th>
                  <th className="p-3">Class 900</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {material.ptRatings.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-3 font-medium text-slate-900">{row.tempC}</td>
                    <td className="p-3">{row.class150}</td>
                    <td className="p-3">{row.class300}</td>
                    <td className="p-3">{row.class600}</td>
                    <td className="p-3">{row.class900}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Primary Applications */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Primary Industry Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {material.applications.map((app, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
              <CheckCircle className="w-5 h-5 text-[#D71920] shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium text-sm">{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reciprocal Internal Links Hub */}
      {material.relatedLinks && (
        <section className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#D71920]" /> Related Products & Industry Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {material.relatedLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.url}
                className="flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors text-sm font-medium text-slate-200"
              >
                <span>{link.title}</span>
                <ArrowRight className="w-4 h-4 text-[#D71920]" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Procurement Questions</h2>
        <div className="space-y-4">
          {material.faqs.map((faq, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-base font-bold text-slate-900 mb-2">Q: {faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form CTA Block */}
      <section className="bg-slate-50 border-2 border-[#D71920] p-6 md:p-8 rounded-2xl">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-[#D71920] font-bold text-xs uppercase tracking-wider block mb-1">Direct Factory Pricing</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Get Quote in 30 Minutes for {material.name}</h2>
            <p className="text-slate-600 text-sm mt-1">Written commercial offer with Mill Test Certificate guarantee.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl text-center border border-emerald-200">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold">Quote Request Received!</h3>
              <p className="text-sm text-emerald-700 mt-1">Our sales engineering team will respond within 30 minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 text-sm bg-white rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3 text-sm bg-white rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  placeholder="Business Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 text-sm bg-white rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 text-sm bg-white rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                />
              </div>
              <textarea
                required
                rows="3"
                placeholder="Specify size (NPS), pressure rating, quantity, and standard..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full p-3 text-sm bg-white rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Submitting...' : 'Request Written Quote'}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default MaterialCommonContent;
