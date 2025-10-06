import React from 'react';
import { motion } from "framer-motion";

const Header = () => (
  <motion.div
    className="w-full text-center mb-12"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-white mb-4 tracking-wide">
      <span className="block font-serif font-bold text-4xl md:text-6xl mb-2">Celestia '25</span>
      <span className="block font-serif font-bold text-2xl md:text-4xl text-yellow-300">Djinn's Eclipse</span>
    </h1>
    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
  </motion.div>
);

export default Header;
