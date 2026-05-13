import { motion } from "framer-motion";

const Eligibility = () => (
  <section id="eligibility" className="py-24 px-6 bg-white scroll-mt-20">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-iim-navy">Admissions Eligibility</h2>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-iim-gold">
            <span className="font-bold text-iim-gold">01</span>
            <p className="text-gray-700">Bachelor's Degree with minimum 50% marks.</p>
          </div>
          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-iim-gold">
            <span className="font-bold text-iim-gold">02</span>
            <p className="text-gray-700">Minimum 2 Years of professional work experience. </p>
          </div>
        </div>
      </div>

      <div className="bg-iim-navy p-10 rounded-3xl text-white shadow-2xl">
        <h3 className="text-iim-gold font-bold uppercase tracking-widest text-sm mb-4">Important Dates</h3>
        <div className="space-y-2">
          <p className="text-4xl font-bold">31st July 2026</p>
          <p className="text-gray-400">Final Application Deadline </p>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">Admissions Helpline:</p>
          <p className="text-2xl font-bold">+91 98765 43210</p>
        </div>
      </div>
    </div>
  </section>
);



export default Eligibility;