import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, FileText, Send } from 'lucide-react';
import api from '../../services/api.js';

const CityFullRfqForm = ({ city, state, pageUrl }) => {
  const [formData, setFormData] = useState({
    product: 'Weld Neck Flange',
    size_class: '',
    grade: 'ASTM A105 Carbon Steel',
    quantity: '',
    facing: 'Raised Face (RF)',
    standard: 'ASME B16.5',
    required_by: '',
    testing: [],
    name: '',
    company: '',
    email: '',
    phone: '',
    delivery_location: city || '',
    message: '',
    website: '' // honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => {
        const testing = checked 
          ? [...prev.testing, value]
          : prev.testing.filter(item => item !== value);
        return { ...prev, testing };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website) return;
    setLoading(true);

    try {
      await api.post('/contact', {
        name: formData.name,
        company: formData.company || 'Not Provided',
        email: formData.email,
        phone: formData.phone,
        location: formData.delivery_location || city,
        product_name: `${formData.product} (${formData.size_class || 'Standard'})`,
        standard: formData.standard,
        message: `[CITY FULL RFQ - ${city}${state ? ', ' + state : ''}]\nProduct: ${formData.product}\nSize/Class: ${formData.size_class}\nGrade: ${formData.grade}\nFacing: ${formData.facing}\nStandard: ${formData.standard}\nRequired By: ${formData.required_by || 'Standard'}\nTesting / Certification: ${formData.testing.join(', ') || 'Standard MTC'}\nDelivery Location: ${formData.delivery_location || city}\nNotes: ${formData.message || 'None'}`,
        page_url: pageUrl || window.location.href
      });
    } catch (err) {
      console.error('Full RFQ submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div id="rfq" className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-200 text-center max-w-3xl mx-auto my-8">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Complete RFQ Received</h3>
        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
          Thank you for submitting your detailed requirement for <span className="font-bold text-slate-900">{city}</span>. Our technical estimation desk in Mumbai is reviewing your parameters. You will receive an official line-by-line commercial quote and MTC compliance confirmation by email within one working day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold px-6 py-3 rounded-lg transition"
        >
          Submit Another RFQ
        </button>
      </div>
    );
  }

  return (
    <div id="rfq" className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <div className="bg-slate-900 text-white px-6 sm:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">Direct Factory Quotation</span>
          <h3 className="text-xl sm:text-2xl font-extrabold">Complete Request for Quotation (RFQ)</h3>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <Clock size={16} className="text-[#D71920]" />
          <span>Written quote within one working day</span>
        </div>
      </div>

      <form data-rfq="rfq" onSubmit={handleSubmit} className="p-6 sm:p-10 text-slate-800 space-y-6">
        {/* Hidden SEO & attribution inputs */}
        <input type="hidden" name="page_url" value={pageUrl || ''} />
        <input type="hidden" name="city" value={city || ''} />
        <input type="hidden" name="state" value={state || ''} />
        <input type="hidden" name="form_id" value="rfq" />
        <input type="hidden" name="page_type" value="city" />
        {/* Honeypot */}
        <input 
          type="text" 
          name="website" 
          value={formData.website} 
          onChange={handleChange} 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off" 
        />

        {/* Section 1: Flange Specifications */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-4">
            1. Flange Specification & Dimensions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Flange Type <span className="text-red-500">*</span>
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] bg-slate-50"
              >
                <option value="Weld Neck Flange">Weld Neck Flange (WNRF / WNRTJ)</option>
                <option value="Slip On Flange">Slip On Flange (SORF / SOFF)</option>
                <option value="Blind Flange">Blind Flange (BLRF / BLFF)</option>
                <option value="Socket Weld Flange">Socket Weld Flange</option>
                <option value="Threaded Flange">Threaded Flange (NPT / BSPT)</option>
                <option value="Lap Joint Flange">Lap Joint Flange (with Stub End)</option>
                <option value="Spectacle Blind">Spectacle Blind / Spade / Spacer</option>
                <option value="Plate Flange">Plate Flange (IS 6392 / Table D/E/F)</option>
                <option value="Long Weld Neck">Long Weld Neck (LWN)</option>
                <option value="Custom Project Flange">Custom / Drawing Matched</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nominal Size & Pressure Class <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="size_class"
                placeholder="e.g. 1/2&quot; to 24&quot; Class 150/300/600"
                value={formData.size_class}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Material Grade <span className="text-red-500">*</span>
              </label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] bg-slate-50"
              >
                <option value="ASTM A105 Carbon Steel">ASTM A105 Carbon Steel</option>
                <option value="ASTM A350 LF2 (Class 1 Low Temp)">ASTM A350 LF2 (Low Temp -46°C)</option>
                <option value="Stainless Steel 304 / 304L">Stainless Steel 304 / 304L</option>
                <option value="Stainless Steel 316 / 316L">Stainless Steel 316 / 316L</option>
                <option value="Stainless Steel 321 / 347">Stainless Steel 321 / 347</option>
                <option value="Duplex 2205 (UNS S31803 / S32205)">Duplex 2205</option>
                <option value="Super Duplex 2507 (UNS S32750)">Super Duplex 2507</option>
                <option value="Alloy Steel ASTM A182 F11 / F22">Alloy Steel F11 / F22</option>
                <option value="Alloy Steel ASTM A182 F91">Alloy Steel F91</option>
                <option value="Inconel / Monel / Hastelloy">Nickel Alloy (Inconel / Monel / Hastelloy)</option>
                <option value="IS 2062 Grade E250 / E350">IS 2062 Carbon Steel</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Facing Type
              </label>
              <select
                name="facing"
                value={formData.facing}
                onChange={handleChange}
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] bg-slate-50"
              >
                <option value="Raised Face (RF)">Raised Face (RF)</option>
                <option value="Flat Face (FF)">Flat Face (FF)</option>
                <option value="Ring Type Joint (RTJ)">Ring Type Joint (RTJ)</option>
                <option value="Tongue & Groove">Tongue & Groove</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Governing Standard / Drilling
              </label>
              <select
                name="standard"
                value={formData.standard}
                onChange={handleChange}
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] bg-slate-50"
              >
                <option value="ASME B16.5 (up to 24&quot;)">ASME B16.5 (up to 24&quot;)</option>
                <option value="ASME B16.47 Series A / MSS SP-44">ASME B16.47 Series A (MSS SP-44)</option>
                <option value="ASME B16.47 Series B / API 605">ASME B16.47 Series B (API 605)</option>
                <option value="EN 1092-1 / DIN (PN6 to PN100)">EN 1092-1 / DIN (PN6 to PN100)</option>
                <option value="BS 10 Table D / E / F">BS 10 Table D / E / F</option>
                <option value="IS 6392 (Table 1 to 17)">IS 6392</option>
                <option value="AWWA C207">AWWA C207</option>
                <option value="Custom Project Drawing">Customer Project Drawing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Number of pieces or weight"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Testing & Compliance */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-3">
            2. Testing, Certification & Schedule Requirements
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {[
              'EN 10204 3.1 MTC',
              'PMI Testing',
              'Ultrasonic Test (UT)',
              'Hardness Test',
              'NACE MR0175/0103',
              'Third-Party Inspection'
            ].map(test => (
              <label key={test} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer bg-slate-50 p-2.5 rounded-lg border border-slate-200 hover:border-slate-300">
                <input
                  type="checkbox"
                  value={test}
                  checked={formData.testing.includes(test)}
                  onChange={handleChange}
                  className="rounded text-[#D71920] focus:ring-[#D71920]"
                />
                <span className="leading-tight">{test}</span>
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Required Delivery Date (Optional)
              </label>
              <input
                type="date"
                name="required_by"
                value={formData.required_by}
                onChange={handleChange}
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Delivery Destination / Site in {city} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="delivery_location"
                placeholder={`Destination address / plant location in ${city}`}
                value={formData.delivery_location}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Contact & Submission */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-4">
            3. Purchaser & Commercial Details
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Contact Person <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Company / Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Official Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Contact number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Detailed Requirements, BOQ Items or Project Line List
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Paste schedule items, drawing notes, heat treatment codes, or special packing requirements here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] resize-none"
            />
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            • Written quotes by email within one working day · No unsolicited telephone calls · Data confidentiality guaranteed
          </p>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-[#D71920] hover:bg-[#b5141a] text-white font-bold px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition shadow-lg shrink-0 disabled:opacity-75"
          >
            {loading ? 'Submitting...' : 'Submit RFQ for Written Quote'}
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CityFullRfqForm;
