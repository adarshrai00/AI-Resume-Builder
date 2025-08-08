import React from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaFileAlt, FaMagic, FaBolt, FaStar, FaUsers, FaAward, FaShieldAlt } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div data-theme="cupcake" className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">💼</div>
        <div className="absolute top-32 right-16 text-4xl opacity-20 animate-pulse">📄</div>
        <div className="absolute bottom-32 left-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute bottom-20 right-32 text-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}>🚀</div>

        <div className="text-center px-4 md:px-0 max-w-4xl relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className="text-7xl mb-6">🤖</div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              AI-Powered Resume Builder
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-base-content/80 max-w-2xl mx-auto leading-relaxed">
              Create a professional, ATS-friendly resume in seconds — just by describing yourself.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm opacity-70">
              <span className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full">
                ✅ No Sign-up Required
              </span>
              <span className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full">
                ⚡ 30-Second Generation
              </span>
              <span className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full">
                🎯 ATS Optimized
              </span>
            </div>

            <Link 
              to="/create" 
              className="btn btn-primary btn-lg text-lg px-8 py-4 shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 rounded-full border-2 border-primary/20 hover:border-primary/40"
            >
              <FaMagic className="mr-3" />
              Generate My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-100 border-y border-base-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-base-content/70">Resumes Created</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">95%</div>
              <div className="text-base-content/70">Success Rate</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30s</div>
              <div className="text-base-content/70">Average Time</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl md:text-5xl font-bold text-warning mb-2">4.9★</div>
              <div className="text-base-content/70">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-base-200/50 to-base-100">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-5xl mb-4">⭐</div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Why ResumeGenie?
            </h2>
            <p className="text-xl md:text-2xl text-base-content/70">Features that make us stand out</p>
          </div>
          
          <div className="grid gap-8 px-6 md:px-20 md:grid-cols-4">
            <div className="group p-8 bg-gradient-to-br from-base-100 to-base-100/50 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-primary/10 hover:border-primary/30">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <FaRobot className="relative text-5xl mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered</h3>
              <p className="text-center text-base-content/70 leading-relaxed">
                Just describe yourself — we'll write the perfect resume tailored to your experience.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-base-100 to-base-100/50 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-secondary/10 hover:border-secondary/30">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <FaFileAlt className="relative text-5xl mx-auto mb-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">ATS Friendly</h3>
              <p className="text-center text-base-content/70 leading-relaxed">
                Your resume will pass automated screenings and reach human recruiters.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-base-100 to-base-100/50 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-accent/10 hover:border-accent/30">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <FaMagic className="relative text-5xl mx-auto mb-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Instant Export</h3>
              <p className="text-center text-base-content/70 leading-relaxed">
                Get professional PDF resumes instantly with one click download.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-base-100 to-base-100/50 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-warning/10 hover:border-warning/30">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warning/10 to-warning/5 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <FaBolt className="relative text-5xl mx-auto mb-6 text-warning group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Fast & Simple</h3>
              <p className="text-center text-base-content/70 leading-relaxed">
                No sign-up required. Start building your resume right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">🎨</div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent mb-4">
              Professional Templates
            </h2>
            <p className="text-xl md:text-2xl text-base-content/70">Choose from beautiful, ATS-optimized designs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <div className="text-8xl text-white/90">📄</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Professional</h3>
                <p className="text-base-content/70">Clean, minimalist design perfect for corporate roles</p>
              </div>
            </div>

            <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                <div className="text-8xl text-white/90">🎨</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Creative Designer</h3>
                <p className="text-base-content/70">Eye-catching layout for creative professionals</p>
              </div>
            </div>

            <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                <div className="text-8xl text-white/90">💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Executive Suite</h3>
                <p className="text-base-content/70">Sophisticated design for senior positions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-gradient-to-br from-base-100 to-base-200/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-xl text-base-content/70">Simple steps to your dream job</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 md:px-20">
            <div className="relative">
              <div className="step step-primary text-lg font-semibold py-6 px-8 bg-gradient-to-r from-primary to-primary/80 text-primary-content shadow-lg hover:shadow-xl transition-all duration-300 rounded-full min-w-48 text-center">
                📝 Describe Yourself
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
            </div>

            <div className="hidden md:block text-primary/30 text-2xl animate-pulse">→</div>

            <div className="relative">
              <div className="step step-secondary text-lg font-semibold py-6 px-8 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-content shadow-lg hover:shadow-xl transition-all duration-300 rounded-full min-w-48 text-center">
                ✨ AI Writes It
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-warning rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="hidden md:block text-primary/30 text-2xl animate-pulse">→</div>

            <div className="relative">
              <div className="step step-accent text-lg font-semibold py-6 px-8 bg-gradient-to-r from-accent to-accent/80 text-accent-content shadow-lg hover:shadow-xl transition-all duration-300 rounded-full min-w-48 text-center">
                🎨 Customize
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="hidden md:block text-primary/30 text-2xl animate-pulse">→</div>

            <div className="relative">
              <div className="step step-success text-lg font-semibold py-6 px-8 bg-gradient-to-r from-success to-success/80 text-success-content shadow-lg hover:shadow-xl transition-all duration-300 rounded-full min-w-48 text-center">
                📄 Download PDF
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/create" 
              className="btn btn-outline btn-primary btn-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              Start Building Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">💬</div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-warning to-error bg-clip-text text-transparent mb-4">
              Success Stories
            </h2>
            <p className="text-xl md:text-2xl text-base-content/70">Join thousands who landed their dream jobs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-base-100 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👩‍💻</div>
                <div>
                  <h4 className="font-bold">Sarah Chen</h4>
                  <p className="text-sm text-base-content/70">Software Engineer @ Google</p>
                </div>
              </div>
              <div className="mb-4">
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
              </div>
              <p className="text-base-content/80 italic">
                "ResumeGenie helped me land my dream job at Google! The AI perfectly captured my experience and skills."
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👨‍💼</div>
                <div>
                  <h4 className="font-bold">Marcus Johnson</h4>
                  <p className="text-sm text-base-content/70">Marketing Manager @ Meta</p>
                </div>
              </div>
              <div className="mb-4">
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
              </div>
              <p className="text-base-content/80 italic">
                "Amazing tool! Created my resume in minutes and got 3 interview calls within a week."
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👩‍🔬</div>
                <div>
                  <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-sm text-base-content/70">Data Scientist @ Microsoft</p>
                </div>
              </div>
              <div className="mb-4">
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
              </div>
              <p className="text-base-content/80 italic">
                "The ATS optimization feature is incredible. My resume now gets past all automated screenings!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">💎</div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-success to-info bg-clip-text text-transparent mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl md:text-2xl text-base-content/70">Choose the plan that works for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-base-100 p-8 rounded-3xl shadow-xl border-2 border-base-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold text-primary mb-4">$0</div>
                <p className="text-base-content/70 mb-6">Perfect for getting started</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> 1 Resume per month</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Basic templates</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> PDF download</li>
                </ul>
                <button className="btn btn-outline btn-primary w-full">Get Started</button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-xl text-white transform scale-105 border-2 border-primary">
              <div className="text-center">
                <div className="badge badge-warning mb-4">MOST POPULAR</div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-4">$9.99</div>
                <p className="opacity-90 mb-6">Best value for job seekers</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Unlimited resumes</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Premium templates</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> ATS optimization</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Cover letter generator</li>
                </ul>
                <button className="btn btn-warning w-full text-black">Choose Pro</button>
              </div>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-xl border-2 border-base-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-accent mb-4">$29.99</div>
                <p className="text-base-content/70 mb-6">For teams and agencies</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Everything in Pro</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Team collaboration</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-success mr-2">✓</span> Custom branding</li>
                </ul>
                <button className="btn btn-outline btn-accent w-full">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🎯</div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse">💼</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-bounce" style={{animationDelay: '1s'}}>🚀</div>
        </div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join over 500 successful job seekers who've transformed their careers with AI-powered resumes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Link to="/create" className="btn btn-warning btn-lg flex-1 text-black hover:scale-105 transition-transform shadow-xl">
              🚀 Create My Resume
            </Link>
            <Link to="/templates" className="btn btn-outline btn-lg flex-1 text-white hover:bg-white hover:text-primary transition-all">
              📋 View Templates
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <span className="flex items-center gap-2">
              <FaShieldAlt /> 100% Secure & Private
            </span>
            <span className="flex items-center gap-2">
              <FaAward /> Money-back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <FaUsers /> 500+ Happy Users
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-16 bg-gradient-to-t from-base-300 to-base-200 text-base-content border-t border-base-content/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="text-3xl">🤖</div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ResumeGenie
                </span>
              </div>
              <p className="text-base-content/70 leading-relaxed">
                <strong>Built with ❤️ using AI & React</strong><br />
                Empowering careers through intelligent resume building
              </p>
            </div>
            
            <div className="text-center">
              <span className="footer-title text-lg font-bold text-primary mb-4 block">Quick Links</span>
              <div className="flex flex-col gap-3">
                <Link to="/" className="link link-hover text-base-content/80 hover:text-primary transition-colors">🏠 Home</Link>
                <Link to="/create" className="link link-hover text-base-content/80 hover:text-primary transition-colors">✨ Create Resume</Link>
                <Link to="/contact" className="link link-hover text-base-content/80 hover:text-primary transition-colors">📞 Contact</Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-3xl mb-4">💼</div>
              <p className="text-sm text-base-content/60">
                © 2024 ResumeGenie. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center md:justify-end gap-4">
                <span className="text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer">🐦</span>
                <span className="text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer">💼</span>
                <span className="text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer">📧</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;