import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  ShieldCheck, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2,
  Construction,
  ScrollText,
  Users,
  MapPin
} from "lucide-react";
import heroBg from "@assets/generated_images/dark_architectural_blueprint_texture_background.png";
import projectImg1 from "@assets/generated_images/luxury_high_rise_building_redevelopment.png";
import projectImg2 from "@assets/generated_images/professional_structural_engineer_inspection.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0F172A] text-white high-authority">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent z-10" />
        
        <div className="container relative z-20 px-6 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
              <span className="px-4 py-1.5 border border-white/20 text-white bg-white/5 text-xs font-bold tracking-[0.3em] uppercase rounded-none backdrop-blur-sm">
                Established 1984
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[1]">
              Engineering Safety.<br />
              <span className="text-white">
                Building Trust.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Architects, Civil & Structural Engineers, and Project Management Consultants delivering excellence in redevelopment.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white font-bold h-16 px-10 text-lg rounded-none shadow-lg transition-all hover:scale-105" asChild>
                <a href="#services">Get Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 hover:bg-white/10 text-white h-16 px-10 text-lg rounded-none backdrop-blur-md transition-all hover:scale-105" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#1E3A5F]" />
                <h2 className="text-[#1E3A5F] font-bold tracking-[0.3em] uppercase text-xs">Legacy</h2>
              </motion.div>
              <motion.h3 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-10 text-[#1F2933] leading-tight tracking-tighter">
                Forty Years of<br/><span className="italic font-serif font-normal text-[#1E3A5F]">Structural Integrity</span>
              </motion.h3>
              <motion.div variants={fadeInUp} className="space-y-8 text-[#4B5563] text-xl leading-relaxed font-light">
                <p>
                  Established in 1984, <span className="text-[#1F2933] font-medium">MASS ENGINEERING</span> has evolved into a premier authority in structural safety and redevelopment.
                </p>
                <p>
                  With decades of experience across Mumbai, Navi Mumbai, and the MMR region, we specialize in structural audits, repairs, and end-to-end redevelopment consultancy.
                </p>
                <div className="grid grid-cols-2 gap-12 pt-10 border-t border-gray-200">
                  <div>
                    <div className="text-5xl font-bold text-[#1E3A5F] mb-2">40+</div>
                    <div className="text-xs text-[#6B7280] uppercase tracking-widest font-bold">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-[#1E3A5F] mb-2">100+</div>
                    <div className="text-xs text-[#6B7280] uppercase tracking-widest font-bold">Iconic Projects</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative aspect-square md:aspect-auto md:h-[700px] overflow-hidden group shadow-2xl border border-gray-100"
            >
              <div className="absolute inset-0 bg-white/80 z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img 
                src={projectImg1} 
                alt="Mass Engineering History" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 border-2 border-[#1E3A5F]/20 m-6 z-20 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                 <span className="text-[#1E3A5F] font-bold tracking-widest uppercase text-sm border-b border-[#1E3A5F] pb-2 group-hover:opacity-0 transition-opacity">Our Heritage</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="py-24 bg-zinc-50 dark:bg-[#151516]">
        <div className="container px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Core Services</h3>
            <p className="text-muted-foreground text-lg">Comprehensive engineering solutions tailored for housing societies, developers, and government bodies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Structural Audit",
                desc: "Byelaw 77 compliance, Stability Certification, and non-destructive testing for old & high-risk buildings."
              },
              {
                icon: Building2,
                title: "Redevelopment",
                desc: "End-to-end consultancy, tendering, contractor selection, and liaisoning with BMC, MHADA, MMRDA."
              },
              {
                icon: Construction,
                title: "Repairs & Rehab",
                desc: "Advanced RCC strengthening, corrosion treatment, waterproofing, and structural restoration."
              },
              {
                icon: Users,
                title: "PMC Services",
                desc: "Project Management Consultancy ensuring execution excellence, timeline adherence, and quality control."
              },
              {
                icon: FileCheck,
                title: "Liaisoning",
                desc: "Regulatory approvals and seamless coordination with CIDCO, NMMC, and MAHA RERA authorities."
              },
              {
                icon: ScrollText,
                title: "Tendering",
                desc: "Transparent contractor selection, negotiation, and detailed BOQ preparation for societies."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white rounded-none group">
                  <CardContent className="p-8 flex flex-col items-start h-full">
                    <div className="p-3 bg-secondary/10 text-secondary mb-6 rounded-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-primary">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{service.desc}</p>
                    <div className="mt-6 pt-6 border-t border-border w-full flex items-center text-sm font-medium text-primary cursor-pointer group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURAL AUDIT DEEP DIVE */}
      <section id="expertise" className="py-24 bg-[#1C1C1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover' }} />
        <div className="container px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">Technical Excellence</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Advanced Structural Audit Expertise</h3>
              <ul className="space-y-6">
                {[
                  "NDT: Rebound Hammer, UPV, Half-Cell Potential",
                  "Moisture Detection & Carbonation Testing",
                  "Detailed BOQ & Stability Certification",
                  "Compliance-ready, society-friendly reports",
                  "Mandatory audit expertise for 30+ year old buildings"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-10 bg-white text-black hover:bg-gray-200 rounded-none px-8 py-6" asChild>
                <a href="#contact">Request an Audit</a>
              </Button>
            </div>
            <div className="order-1 md:order-2 h-[500px] relative">
              <img 
                src={projectImg2} 
                alt="Audit Inspection" 
                className="w-full h-full object-cover opacity-90" 
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 hidden md:block w-64">
                <p className="text-black font-bold text-2xl leading-tight">State-of-the-art NDT Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">Why Choose Mass Engineering</h2>
            <h3 className="text-4xl font-bold text-primary">The Authority in Redevelopment</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {[
              { title: "40+ Years Legacy", text: "Four decades of unblemished track record in Mumbai & MMR." },
              { title: "Deep Expertise", text: "Specialized knowledge in structural health and rehabilitation." },
              { title: "Regulatory Mastery", text: "Strong grasp of BMC, MHADA, and RERA regulations." },
              { title: "Transparent Process", text: "Ethical, clear, and documented processes for societies." },
              { title: "Society-First Approach", text: "We prioritize the safety and residents above all." },
              { title: "End-to-End Ownership", text: "From initial audit to final occupation certificate." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 hover:bg-zinc-50 transition-colors">
                <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-zinc-50">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white p-12 shadow-2xl shadow-gray-200/50">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Contact Us</h3>
              <p className="text-muted-foreground mb-8">
                Ready to discuss your society's redevelopment or structural needs? 
                Reach out to our expert team.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Vashi Office</h4>
                    <p className="text-muted-foreground">Navi Mumbai, Maharashtra</p>
                    <p className="font-medium mt-2 text-primary">9545730344 / 7718015513</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Vasai Office</h4>
                    <p className="text-muted-foreground">Vasai, Palghar</p>
                    <p className="font-medium mt-2 text-primary">83900 69083 / 93210 99506 / 88560 03576</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 border border-primary/10">
              <h4 className="font-bold text-xl mb-6">Send us a Message</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full p-3 bg-white border border-border focus:outline-none focus:border-secondary transition-colors" />
                  <input type="text" placeholder="Last Name" className="w-full p-3 bg-white border border-border focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-white border border-border focus:outline-none focus:border-secondary transition-colors" />
                <input type="text" placeholder="Phone Number" className="w-full p-3 bg-white border border-border focus:outline-none focus:border-secondary transition-colors" />
                <textarea rows={4} placeholder="How can we help?" className="w-full p-3 bg-white border border-border focus:outline-none focus:border-secondary transition-colors"></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-6 font-semibold">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
