import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, Upload, ShieldCheck, Clock } from 'lucide-react';

const CityHeroQuoteForm = ({ city, state, pageUrl }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    product: 'Weld Neck Flange',
    size_class: '',
    grade: 'ASTM A105 Carbon Steel',
    quantity: '',
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
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.product || !formData.size_class || !formData.quantity) {
      alert('Please fill in flange type, size/class, and quantity.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) {
      // Honeypot hit
      return;
    }
    setLoading(true);
    // Simulate submission / send to API
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-slate-200 text-center">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Quote Request Received</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Thank you, <span className="font-semibold">{formData.name}</span>. Our engineering sales desk in Mumbai has logged your enquiry for <span className="font-semibold">{city}</span>. We will email your written line-by-line quote within one working day.
        </p>
        <div className="bg-slate-50 p-4 rounded-lg text-left text-xs text-slate-500 space-y-1 mb-6">
          <p><span className="font-semibold text-slate-700">Flange:</span> {formData.product} ({formData.size_class})</p>
          <p><span className="font-semibold text-slate-700">Material:</span> {formData.grade}</p>
          <p><span className="font-semibold text-slate-700">Quantity:</span> {formData.quantity}</p>
          <p><span className="font-semibold text-slate-700">Email:</span> {formData.email}</p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setStep(1); }}
          className="text-sm font-semibold text-[#D71920] hover:underline"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-slate-200 text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">Quick Written Quote</span>
          <h3 className="text-lg font-extrabold text-slate-900">
            {step === 1 ? 'Step 1: Flange Specifications' : 'Step 2: Delivery & Contact'}
          </h3>
        </div>
        <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
          Step {step} of 2
        </span>
      </div>

      <form data-rfq="hero" onSubmit={step === 1 ? handleNext : handleSubmit}>
        {/* Hidden SEO & attribution fields */}
        <input type="hidden" name="page_url" value={pageUrl || ''} />
        <input type="hidden" name="city" value={city || ''} />
        <input type="hidden" name="state" value={state || ''} />
        <input type="hidden" name="form_id" value="hero" />
        <input type="hidden" name="page_type" value="city" />
        {/* Honeypot trap */}
        <input 
          type="text" 
          name="website" 
          value={formData.website} 
          onChange={handleChange} 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off" 
        />

        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Flange Type <span className="text-red-500">*</span>
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent bg-slate-50"
              >
                <option value="Weld Neck Flange">Weld Neck Flange (WNRF/WNRTJ)</option>
                <option value="Slip On Flange">Slip On Flange (SORF/SOFF)</option>
                <option value="Blind Flange">Blind Flange (BLRF/BLFF)</option>
                <option value="Socket Weld Flange">Socket Weld Flange</option>
                <option value="Threaded Flange">Threaded Flange (NPT/BSPT)</option>
                <option value="Lap Joint Flange">Lap Joint Flange (with Stub End)</option>
                <option value="Spectacle Blind">Spectacle Blind / Spade / Spacer</option>
                <option value="Plate Flange">Plate Flange / Table D/E/F</option>
                <option value="Custom Project Flange">Custom / Drawing Matched Flange</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nominal Size & Pressure Class <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="size_class"
                placeholder="e.g. 2 inch Class 150 or DN100 PN16"
                value={formData.size_class}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Material / Grade <span className="text-red-500">*</span>
              </label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent bg-slate-50"
              >
                <option value="ASTM A105 Carbon Steel">ASTM A105 Carbon Steel</option>
                <option value="ASTM A350 LF2 (Low Temp)">ASTM A350 LF2 (Low Temp)</option>
                <option value="Stainless Steel 304 / 304L">Stainless Steel 304 / 304L</option>
                <option value="Stainless Steel 316 / 316L">Stainless Steel 316 / 316L</option>
                <option value="Duplex 2205 (UNS S31803 / S32205)">Duplex 2205</option>
                <option value="Super Duplex 2507 (UNS S32750)">Super Duplex 2507</option>
                <option value="Alloy Steel ASTM A182 F11 / F22">Alloy Steel F11 / F22</option>
                <option value="Alloy Steel ASTM A182 F91">Alloy Steel F91</option>
                <option value="IS 2062 Carbon Steel">IS 2062 Carbon Steel (Plate)</option>
                <option value="Other Grade">Other (Specify in notes)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="e.g. 50 nos or 2 tonnes"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full mt-3 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-md"
            >
              Next: Delivery & Contact Details
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Firm"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Delivery Location / Site <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="delivery_location"
                placeholder={`Site location in ${city}`}
                value={formData.delivery_location}
                onChange={handleChange}
                required
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Additional Notes / Schedule / Facing
              </label>
              <textarea
                name="message"
                rows={2}
                placeholder="Mention facing (RF/FF/RTJ), schedule/bore, test requirements..."
                value={formData.message}
                onChange={handleChange}
                className="w-full text-sm px-3.5 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D71920] focus:border-transparent resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1 transition"
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition shadow-md disabled:opacity-75"
              >
                {loading ? 'Processing...' : 'Get Written Quote'}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </form>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1">
          <Clock size={12} className="text-slate-400" /> Reply within 1 working day
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck size={12} className="text-slate-400" /> Direct from Mumbai Forge
        </span>
      </div>
    </div>
  );
};

export default CityHeroQuoteForm;
