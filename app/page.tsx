"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Book, Feather, Users, Globe, ArrowRight, BookOpen, Scroll, Heart, Star, CheckCircle, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

const LOGO_SRC = "/logo.jpeg"; 

function ParallaxLayer({ speed = -100, children, className = "" }: { speed?: number; children: React.ReactNode; className?: string; }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

function CourseCard({ icon: Icon, title, description, topics }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string; topics: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl border border-ibn-brown/20 bg-gradient-to-br from-white/50 to-ibn-cream/30 p-8 hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-ibn-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-ibn-brown/10 group-hover:bg-ibn-brown/20 transition-colors">
            <Icon className="h-6 w-6 text-ibn-brown" />
          </div>
          <h3 className="text-xl font-semibold text-ibn-brown">{title}</h3>
        </div>
        <p className="text-ibn-brown/70 mb-4">{description}</p>
        <ul className="space-y-2">
          {topics.map((topic, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ibn-brown/60">
              <CheckCircle className="h-4 w-4 mt-0.5 text-ibn-accent flex-shrink-0" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Page() {
  const [year] = useState(() => new Date().getFullYear());

 const courses = [
    {
      icon: BookOpen,
      title: "Qur'an Studies",
      description: "Master the divine revelation with precision and understanding",
      topics: [
        "Qa'idah Madaniyyah - Foundation reading",
        "Tajweed - Rules of recitation",
        "Hifdh - Memorization program",
        "Tafseer - Qur'anic Exegesis"
      ]
    },
    {
      icon: Scroll,
      title: "Qur'anic Sciences",
      description: "Deep dive into the sciences of the Qur'an",
      topics: [
        "Uloom al-Qur'an - Sciences of the Qur'an",
        "History of revelation and compilation",
        "Principles of interpretation",
        "Miraculous nature of the Qur'an"
      ]
    },
    {
      icon: Globe,
      title: "Arabic Language",
      description: "From basics to advanced grammar and rhetoric",
      topics: [
        "Nahw - Arabic Grammar",
        "Sarf - Arabic Morphology",
        "Balaghah - Arabic Rhetoric",
        "Madinah University Arabic Curriculum"
      ]
    },
    {
      icon: Book,
      title: "Islamic Jurisprudence",
      description: "Comprehensive study of Islamic law and methodology",
      topics: [
        "Fiqh - Islamic Jurisprudence",
        "Usool al-Fiqh - Principles of Jurisprudence",
        "Fara'id - Islamic Inheritance Law",
        "Contemporary applications"
      ]
    },
    {
      icon: BookOpen,
      title: "Hadith Sciences",
      description: "Study of prophetic traditions and their sciences",
      topics: [
        "Mustalah al-Hadith - Science of Hadith",
        "Tareekh as-Sunnah - History of Sunnah Compilation",
        "Authentication methodology",
        "Major hadith collections"
      ]
    },
    {
      icon: Heart,
      title: "Seerah & History",
      description: "The blessed life of Prophet Muhammad ﷺ and Islamic history",
      topics: [
        "Comprehensive prophetic biography",
        "Lives of the Companions",
        "Islamic civilization",
        "Contemporary lessons"
      ]
    }
  ];

  return (
    <main className="selection:bg-ibn-brown selection:text-ibn-cream">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-lg supports-[backdrop-filter]:bg-ibn-cream/80 bg-ibn-cream/90 border-b border-ibn-brown/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={LOGO_SRC} alt="Ibn Rajab Academy" className="h-12 w-auto" width={48} height={48} />
            <div className="hidden sm:block">
              <div className="font-bold text-lg tracking-wider text-ibn-brown">IBN RAJAB</div>
              <div className="text-xs tracking-[0.3em] text-ibn-accent">ACADEMY</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hero" className="text-ibn-brown/70 hover:text-ibn-brown transition-colors">Home</a>
            <a href="#courses" className="text-ibn-brown/70 hover:text-ibn-brown transition-colors">Courses</a>
            <a href="#methodology" className="text-ibn-brown/70 hover:text-ibn-brown transition-colors">Methodology</a>
            <a href="#instructors" className="text-ibn-brown/70 hover:text-ibn-brown transition-colors">Instructors</a>
            <a href="#enroll" className="text-ibn-brown/70 hover:text-ibn-brown transition-colors">Enroll</a>
          </nav>
          <a 
            href="https://skool.com/ibn-rajab-academy-5287" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-ibn-brown text-ibn-cream px-5 py-2.5 rounded-full hover:bg-ibn-brown-dark transition-colors shadow-md"
          >
            <span>Join Now</span>
            <ExternalLink className="h-3.5 w-3.5"/>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-[100vh] overflow-hidden bg-gradient-to-b from-ibn-cream via-white to-ibn-cream">
        <div className="absolute inset-0">
          <ParallaxLayer speed={-120} className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 h-96 w-96 bg-radial-gradient rounded-full blur-3xl opacity-30" 
                 style={{background: 'radial-gradient(circle, rgba(91,47,42,0.2) 0%, transparent 70%)'}} />
          </ParallaxLayer>
          <ParallaxLayer speed={-60} className="absolute inset-0 opacity-20">
            <div className="absolute bottom-20 right-20 h-80 w-80 bg-radial-gradient rounded-full blur-3xl opacity-30" 
                 style={{background: 'radial-gradient(circle, rgba(139,90,60,0.2) 0%, transparent 70%)'}} />
          </ParallaxLayer>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-ibn-accent/30 bg-white/60 backdrop-blur px-4 py-2 text-xs tracking-wide text-ibn-brown mb-8">
              <Feather className="h-3.5 w-3.5 text-ibn-accent" /> 
              <span>Authentic Knowledge • Expert Instruction • Modern Platform</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-ibn-brown mb-6">
              Classical Knowledge.
              <span className="block text-ibn-accent mt-2">Modern Experience.</span>
            </h1>
            
            <p className="text-lg text-ibn-brown/70 max-w-2xl mx-auto mb-10">
              Join Ibn Rajab Academy&apos;s premium online madrasa. Learn Qur&apos;an, Arabic, and Islamic sciences 
              from qualified instructors in an engaging, interactive environment.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://skool.com/ibn-rajab-academy-5287" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ibn-brown text-ibn-cream px-8 py-4 rounded-full text-base font-medium hover:bg-ibn-brown-dark transition-all transform hover:scale-105 shadow-lg"
              >
                Enroll Now 
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#courses" 
                className="inline-flex items-center gap-2 border-2 border-ibn-brown/30 text-ibn-brown px-8 py-4 rounded-full text-base font-medium hover:bg-white/60 hover:border-ibn-brown/50 transition-all"
              >
                Explore Courses 
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <ParallaxLayer speed={-40}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, delay: 0.2 }} 
              className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {[
                { icon: Users, title: "Live Classes", text: "3-4 interactive sessions weekly with expert instructors" },
                { icon: Globe, title: "Global Access", text: "Join from anywhere with recordings for all time zones" },
                { icon: Star, title: "Structured Path", text: "Progressive curriculum from foundations to advanced" },
              ].map((feature, i) => (
                <div key={i} className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-ibn-brown/10 hover:shadow-lg transition-all">
                  <feature.icon className="h-8 w-8 text-ibn-accent mb-3" />
                  <h3 className="font-semibold text-ibn-brown mb-2">{feature.title}</h3>
                  <p className="text-sm text-ibn-brown/60">{feature.text}</p>
                </div>
              ))}
            </motion.div>
          </ParallaxLayer>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="relative py-24 md:py-32 bg-gradient-to-b from-ibn-cream to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-ibn-brown mb-4"
            >
              Comprehensive Curriculum
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-ibn-brown/70"
            >
              Our courses are designed to take you from foundational knowledge to advanced understanding, 
              following the traditional methodology with modern pedagogical excellence.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="relative py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-ibn-brown mb-6"
              >
                Our Teaching Methodology
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4 text-ibn-brown/70"
              >
                <p>
                  Ibn Rajab Academy combines classical Islamic pedagogy with modern educational technology 
                  to create an immersive learning experience.
                </p>
                <p>
                  Our instructors bring years of traditional training and teaching experience, ensuring 
                  authentic transmission of knowledge with engaging delivery.
                </p>
                <div className="pt-6 space-y-3">
                  {[
                    "Small cohort sizes for personalized attention",
                    "Regular assessments and progress tracking",
                    "Office hours for additional support",
                    "Community engagement through Skool platform"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-ibn-accent flex-shrink-0" />
                      <span className="text-ibn-brown/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ibn-brown/10 to-ibn-accent/10 p-12 border border-ibn-brown/10">
                <div className="h-full w-full rounded-2xl bg-white/50 backdrop-blur flex items-center justify-center">
                  <div className="text-center">
                    <Scroll className="h-24 w-24 text-ibn-accent mx-auto mb-4" />
                    <p className="text-ibn-brown font-semibold text-lg">Traditional Texts</p>
                    <p className="text-ibn-brown/60 text-sm mt-2">Modern Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section id="instructors" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-ibn-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-ibn-brown mb-4"
            >
              Learn from Qualified Instructors
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-ibn-brown/70"
            >
              Our teachers hold ijāzāt and have years of experience in traditional Islamic education. 
              Led by Ustādh Tayyib Mohammad, our team ensures authentic knowledge transmission.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ustādh Tayyib Mohammad", role: "Lead Instructor", specialties: "Qur'an, Arabic, Fiqh" },
              { name: "Guest Instructors", role: "Specialized Topics", specialties: "Various Islamic Sciences" },
              { name: "Teaching Assistants", role: "Student Support", specialties: "Office Hours & Mentorship" }
            ].map((instructor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-ibn-brown/10 text-center hover:shadow-lg transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-ibn-brown/20 to-ibn-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-ibn-brown" />
                </div>
                <h3 className="text-lg font-semibold text-ibn-brown mb-1">{instructor.name}</h3>
                <p className="text-ibn-accent text-sm mb-3">{instructor.role}</p>
                <p className="text-ibn-brown/60 text-sm">{instructor.specialties}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="enroll" className="relative py-24 md:py-32 bg-gradient-to-br from-ibn-brown to-ibn-brown-dark">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ibn-cream mb-6"
          >
            Begin Your Journey Today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ibn-cream/80 max-w-2xl mx-auto mb-10"
          >
            Join our vibrant community on Skool and start learning from qualified instructors. 
            New cohorts begin monthly with flexible scheduling options.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="https://skool.com/ibn-rajab-academy-5287" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ibn-cream text-ibn-brown px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-xl"
            >
              Enroll on Skool
              <ExternalLink className="h-5 w-5" />
            </a>
            <a 
              href="mailto:info@ibnrajabacademy.com"
              className="inline-flex items-center gap-2 border-2 border-ibn-cream/30 text-ibn-cream px-8 py-4 rounded-full text-base font-medium hover:bg-ibn-cream/10 transition-all"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-ibn-cream/50 mt-6"
          >
            Questions? Email us at info@ibnrajabacademy.com
          </motion.p>
        </div>
      </section>

      {/* SPONSORSHIP SECTION */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-ibn-cream to-white">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ibn-accent/10 mb-6">
              <Heart className="h-8 w-8 text-ibn-accent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-ibn-brown mb-4">
              Support Students of Knowledge
            </h2>
            
            <p className="text-ibn-brown/70 max-w-2xl mx-auto mb-8">
              Help us ensure that financial constraints never prevent sincere students from accessing authentic Islamic education. 
              Your sponsorship can transform a life through knowledge.
            </p>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-ibn-brown/10 shadow-lg max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ibn-accent mb-2">$100</div>
                  <div className="text-sm text-ibn-brown/60">Sponsors one month of classes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ibn-accent mb-2">$300</div>
                  <div className="text-sm text-ibn-brown/60">Sponsors a full quarter</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ibn-accent mb-2">$850</div>
                  <div className="text-sm text-ibn-brown/60">Sponsors a student for one year</div>
                </div>
              </div>
              
              <div className="text-ibn-brown/70 mb-6">
                <p className="text-sm italic">
                  &ldquo;The best of people are those who are most beneficial to others.&rdquo; - Prophet Muhammad ﷺ
                </p>
              </div>
              
            <a
             href="mailto:info@ibnrajabacademy.com"
              className="inline-flex items-center gap-2 bg-[#5b2f2a] text-[#f1e9de] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#5b2f2a]/90 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5b2f2a]/40"
              aria-label="Email Ibn Rajab Academy to sponsor a student"
            >
              <Mail className="h-5 w-5" />
              Sponsor a Student
            </a>
              
              <p className="text-xs text-ibn-brown/50 mt-4">
                100% of donations go directly to student scholarships
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ibn-brown-dark py-12 border-t border-ibn-brown">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image src={LOGO_SRC} alt="Ibn Rajab Academy" className="h-10 w-auto opacity-80" width={40} height={40} />
              <div>
                <div className="text-sm text-ibn-cream/70">© {year} Ibn Rajab Academy</div>
                <div className="text-xs text-ibn-cream/50">A subsidiary of 9alam Developments Inc.</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="mailto:info@ibnrajabacademy.com" className="text-sm text-ibn-cream/60 hover:text-ibn-cream transition-colors">
                info@ibnrajabacademy.com
              </a>
              <a 
                href="https://skool.com/ibn-rajab-academy-5287" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ibn-cream/60 hover:text-ibn-cream transition-colors inline-flex items-center gap-1"
              >
                Join on Skool
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}