import React from 'react';
import { motion } from "framer-motion";

const Footer = () => (
  <motion.div
    className="w-full text-center mt-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1.2 }}
  >
    <p className="text-gray-400 text-sm md:text-base">
      Select a challenge you want to take
    </p>
    <div className="flex justify-center mt-4 space-x-2">
      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
    </div>
  </motion.div>
);

export default Footer;
