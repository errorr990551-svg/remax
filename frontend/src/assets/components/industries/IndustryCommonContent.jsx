import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle, ArrowRight, Building2, Send } from 'lucide-react';
import api from '../../services/api.js';

const IndustryCommonContent = ({ industry }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      await api.post('/contact', {
        ...formData,
        message: `[INDUSTRY INQUIRY - ${industry.name}] Requirements: ${formData.requirements}`,
        industry: industry.name,
        product_name: industry.name,
        page_url: window.location.href
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.response?.data?.message || 'Failed to submit inquiry. Please check your connection and try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Sector Overview */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Sector Overview</h2>
        <p className="text-slate-600 leading-relaxed">{industry.overview}</p>
      </section>

      {/* Operating Challenges */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Critical Operating Challenges & Design Constraints</h2>
        <div className="space-y-3">
          {industry.challenges.map((c, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-red-50/40 rounded-xl border border-red-100">
              <ShieldCheck className="w-5 h-5 text-[#D71920] shrink-0 mt-0.5" />
              <span className="text-slate-800 text-sm font-medium">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Materials Matrix */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Recommended Material Grade Selection Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-xs font-bold text-slate-900 uppercase">
              <tr>
                <th className="p-3">Material Grade</th>
                <th className="p-3">Specific Application & Fluid Service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {industry.recommendedMaterials.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="p-3 font-bold text-[#D71920]">{row.grade}</td>
                  <td className="p-3 font-medium text-slate-800">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended Flange Configurations */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Recommended Flange Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {industry.recommendedFlanges.map((flange, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center font-semibold text-slate-800 text-sm">
              {flange}
            </div>
          ))}
        </div>
      </section>

      {/* Engineering, QA & Project Compliance Specifications (Fixes M7 Thin Content) */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Quality Assurance, Testing & Specification Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 text-sm leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">Material Traceability & Metallurgical Testing</h3>
            <p>
              Every flange manufactured for {industry.name} is forged from 100% prime tested steel billets with complete melt-heat traceability. Remax Forge performs Spectro chemical analysis, tensile testing, yield strength verification, elongation measurement, and Brinell or Vickers hardness checks according to ASTM A105, A182, A350, and ASME Section II standards.
            </p>
            <p>
              For critical fluid handling and high-pressure duties, we execute Positive Material Identification (PMI) testing using calibrated XRF analyzers, Charpy V-notch impact testing at design minimum temperatures (down to -46°C for A350 LF2 or cryogenic conditions for austenitic alloys), and grain size examination compliant with ASTM E112.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">Hydrostatic, NDT & Third-Party Inspection</h3>
            <p>
              Non-destructive examination (NDE) procedures including 100% Ultrasonic Testing (UT) for internal defect detection, Liquid Penetrant Inspection (LPI), and Magnetic Particle Inspection (MPI) are conducted per ASME Section V specifications.
            </p>
            <p>
              Every dispatch is accompanied by an EN 10204 Type 3.1 Mill Test Certificate (MTC) detailing complete chemical, mechanical, and heat-treatment batch records. Independent third-party inspection (TPI) by global authorities including Lloyd&apos;s Register, Bureau Veritas, DNV-GL, TÜV, and SGS is routinely facilitated upon project requisition.
            </p>
          </div>
        </div>
      </section>

      {/* Reciprocal Links */}
      {industry.relatedLinks && (
        <section className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#D71920]" /> Recommended Material & Product Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industry.relatedLinks.map((link, idx) => (
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

      {/* Industry FAQs */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Industry FAQs</h2>
        <div className="space-y-4">
          {industry.faqs.map((faq, idx) => (
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
            <span className="text-[#D71920] font-bold text-xs uppercase tracking-wider block mb-1">Sector Specific Inquiry</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Request Quote for {industry.name}</h2>
            <p className="text-slate-600 text-sm mt-1">Get customized technical offer with full certification in 30 minutes.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl text-center border border-emerald-200">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold">Request Received!</h3>
              <p className="text-sm text-emerald-700 mt-1">Our sales engineering team will reach out within 30 minutes.</p>
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
                placeholder="Specify project scope, material requirements, standards, and quantities..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full p-3 text-sm bg-white rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
              ></textarea>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs font-medium text-center">
                  {errorMessage}
                </div>
              )}

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

export default IndustryCommonContent;
