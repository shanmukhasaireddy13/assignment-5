import React from 'react';
import headerImg from '../assets/header_img.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto mb-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Headline & CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100 text-sm font-semibold text-gray-700 mb-6">
              <span>🚀</span>
              <span>Complete IT Solution Provider Since 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-gray-900">
              Transform Your
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Ideas</span>
              <span className="mx-2">Into</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital</span>
              <br/>
              Reality
            </h1>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">Explore Our Services →</button>
              <button className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow border">Get Free Consultation</button>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="text-green-500">✔</span> 100% Client Satisfaction</div>
              <div className="flex items-center gap-2"><span className="text-green-500">✔</span> Secure & Scalable</div>
              <div className="flex items-center gap-2"><span className="text-green-500">✔</span> 24/7 Support</div>
            </div>
          </div>
          {/* Right: Floating Stat Cards */}
          <div className="relative h-[360px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200 via-purple-200 to-cyan-200 opacity-40 blur-3xl" />
            <div className="absolute top-4 right-6 bg-white rounded-2xl shadow-xl p-4 w-60">
              <div className="text-sm text-gray-500">Web Development</div>
              <div className="text-indigo-600 font-extrabold text-lg">+10 Projects</div>
            </div>
            <div className="absolute bottom-8 right-16 bg-white rounded-2xl shadow-xl p-4 w-56">
              <div className="text-sm text-gray-500">Fast Delivery</div>
              <div className="text-indigo-600 font-extrabold">On Time</div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 bg-white rounded-2xl shadow-xl p-4 w-56">
              <div className="text-sm text-gray-500">Mobile Apps</div>
              <div className="text-indigo-600 font-extrabold">+4 Apps</div>
            </div>
          </div>
        </div>


        {/* Stats Strip */}
        <section className="w-full max-w-6xl mx-auto mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/90 p-6 rounded-2xl shadow-lg">
            {[
              { num: '10+', label: 'Web Projects' },
              { num: '4+', label: 'Android Apps' },
              { num: '1', label: 'CRM Project' },
              { num: '2025', label: 'Founded Year' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">{item.num}</div>
                <div className="text-gray-500 uppercase tracking-wide text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About + Highlights */}
        <section className="w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-2xl p-8 shadow-xl">
            <span className="text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">About AppDost</span>
            <h2 className="text-4xl font-extrabold mt-4 text-gray-900">Your Trusted Partner for Complete Digital Transformation</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a full-service IT solutions provider specializing in web and mobile development, UI/UX, and cloud. Our team delivers market‑ready products with fast turnaround and 24/7 support.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: 'User‑Centric Design', d: 'Intuitive, delightful interfaces.' },
                { t: 'Cutting‑Edge Technology', d: 'Modern stacks for scale.' },
                { t: 'Client‑Focused Approach', d: 'Your success is our priority.' },
              ].map((f, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border">
                  <div className="font-semibold text-gray-800">{f.t}</div>
                  <div className="text-gray-600 text-sm">{f.d}</div>
                </div>
              ))}
            </div>
            <button className="mt-6 inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700">Discover Our Services →</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{v:'100%',l:'Client Satisfaction'},{v:'15+',l:'Projects Delivered'},{v:'24/7',l:'Support Available'},{v:'Fast',l:'Turnaround Time'}].map((s,i)=>(
              <div key={i} className="bg-white/90 p-6 rounded-2xl shadow-xl text-center">
                <div className="text-3xl font-extrabold text-indigo-600">{s.v}</div>
                <div className="text-gray-600">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="w-full max-w-7xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">Services We Offer</h2>
          <p className="text-center text-gray-600 mt-2">From apps to cloud, end‑to‑end delivery.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {t:'Android App Development',p:['Native & Hybrid Apps','Play Store Deployment','Maintenance & Support']},
              {t:'Web Development',p:['Responsive Design','E‑commerce Solutions','Progressive Web Apps']},
              {t:'UI/UX Development',p:['User Research','Wireframing','Brand Identity']},
              {t:'CRM Software',p:['Custom Development','Integration Services','Training & Support']},
              {t:'Cloud Solutions',p:['AWS, Azure, GCP','Migration Services','Performance Tuning']},
              {t:'Cybersecurity',p:['Security Audits','Penetration Testing','Compliance']}
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl border card-hover">
                <div className="text-xl font-bold text-gray-900 mb-2">{card.t}</div>
                <ul className="space-y-1 text-gray-600 list-disc list-inside">
                  {card.p.map((x,idx)=>(<li key={idx}>{x}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="w-full mt-16 bg-gradient-to-br from-indigo-500 to-purple-600 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Our Development Process</h2>
            <div className="mt-10 space-y-6">
              {['Discovery & Planning','Design & Prototype','Development & Testing','Deployment & Support'].map((step,i)=>(
                <div key={i} className="bg-white rounded-2xl p-5 shadow flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">{i+1}</div>
                  <div className="font-semibold text-gray-900">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full max-w-7xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">Our Featured Projects</h2>
          <p className="text-center text-gray-600 mt-2">Real solutions for real businesses.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 'BEU Mate - Bihar Engineering', 'Devskillquest', 'The Weddings Chapter' ].map((name,i)=>(
              <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100"/>
                <div className="p-5">
                  <div className="font-bold text-lg text-gray-900">{name}</div>
                  <div className="text-gray-600 text-sm mt-1">A modern platform built with scalable tech.</div>
                  <button className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm">Website →</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700">View All Projects →</button>
          </div>
        </section>

        {/* Open Source */}
        <section className="w-full max-w-7xl mx-auto mt-16 mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">Open Source & Innovation Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 'DeepFake Detection', 'NooBot', 'EduTools', 'DialogFlow Chatbot' ].map((name,i)=>(
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-xl font-bold text-gray-900">{name}</div>
                <p className="text-gray-600 text-sm mt-2">Cutting-edge exploration and tooling.</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-xl text-sm">View on GitHub →</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
