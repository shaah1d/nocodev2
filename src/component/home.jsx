"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState } from "react";
import { UploadCloud, CheckCircle } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      <BackgroundBeams />
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 mb-6 drop-shadow-lg relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI-Powered Drag & Drop Web Builder
      </motion.h1>
      
      <motion.p
        className="text-lg text-gray-700 mb-8 max-w-2xl text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Effortlessly create stunning web pages by dragging and dropping pre-built components.
        Customize styles and generate clean, responsive code instantly!
      </motion.p>
      
      
       
        <FileUpload/>
        <PlaceholdersAndVanishInput/>
        

      
      
      
      
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="shadow-lg rounded-3xl p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl relative z-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};





export default HomePage;
