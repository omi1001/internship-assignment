const LeadForm = () => (
  <section id="apply" className="py-24 bg-slate-50 scroll-mt-20">
    <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-iim-navy">Get in Touch</h2>
        <p className="text-gray-500 mt-2">Fill the form to download the program brochure. [cite: 5, 12]</p>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none" required />
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none" required />
        <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none" required />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Current Designation" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none" required />
          <input type="text" placeholder="Experience (Years)" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none" required />
        </div>
       <button className="w-full bg-iim-gold text-white py-5 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:bg-iim-navy hover:text-white hover:scale-[1.02] active:scale-95">
  Apply Now
</button>
      </form>
    </div>
  </section>
);

export default LeadForm;