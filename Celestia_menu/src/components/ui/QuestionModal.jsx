import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuestionModal = ({ isOpen, onClose, question, number }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white text-gray-900 rounded-2xl p-6 w-11/12 max-w-lg shadow-lg relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            onClick={onClose}
          >
            ×
          </button>
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">
            Question {number}
          </h2>
          <p className="text-gray-800 leading-relaxed">{question}</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default QuestionModal;
