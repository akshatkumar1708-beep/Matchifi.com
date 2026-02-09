"use client";

import { motion } from "framer-motion";

const profiles = [
  {
    name: "Aditi Sharma",
    age: 22,
    city: "Delhi",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Neha Verma",
    age: 24,
    city: "Mumbai",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Pooja Singh",
    age: 23,
    city: "Bangalore",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Anjali Gupta",
    age: 25,
    city: "Pune",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 flex justify-between items-center px-8 md:px-16 py-4 bg-black/60 backdrop-blur-md border-b border-white/10"
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 cursor-pointer"
        >
          💖 Matchify
        </motion.h1>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest text-gray-400">
          {['Home', 'Explore', 'Profile'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ color: "#ec4899", scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-pink-400 transition-colors duration-300"
            >
              {item}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-full transition-all shadow-lg shadow-pink-500/20"
          >
            Get Started
          </motion.button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="grid grid-cols-2 gap-10 px-16 py-20 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-6xl font-bold leading-tight mb-6">
            Find Real <span className="text-pink-400">Connections</span><br />
            Not Just Matches
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8">
            A modern dating platform to meet genuine people and build meaningful relationships.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition text-lg font-semibold shadow-xl"
          >
            Start Exploring
          </motion.button>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.img
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Hero"
            className="w-[420px] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* PROFILE SECTION */}
      <section className="px-16 pb-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Meet New People 💕
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-4 gap-10"
        >
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center cursor-pointer backdrop-blur-sm"
            >
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                src={p.img}
                alt={p.name}
                className="w-36 h-36 rounded-full mx-auto border-4 border-pink-500 mb-4 object-cover"
              />

              <h4 className="text-2xl font-semibold">
                {p.name}, {p.age}
              </h4>
              <p className="text-gray-400 mb-6">{p.city}</p>

              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-5 py-2 rounded-full border border-gray-500 hover:bg-gray-700 transition"
                >
                  Skip
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#db2777" }}
                  whileTap={{ scale: 0.9 }}
                  className="px-6 py-2 rounded-full bg-pink-500 transition font-semibold"
                >
                  ❤️ Like
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400">
        © 2026 Matchify · Premium Dating Web · Built with Next.js
      </footer>
    </div>
  );
}
