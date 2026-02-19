"use client";

import { useCallback, useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Play } from "lucide-react";
import { X } from "lucide-react";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const screenSize = useScreenSize();

  const openModal = () => {
    if (screenSize >= 1280) {
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="bg-muted/30 absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] xl:hidden" />
        </div>

        <video
          className="absolute hidden w-full xl:block"
          autoPlay
          muted
          loop
          src="/videos/showreel.mp4"
        ></video>

        <div className="absolute inset-0 hidden bg-black/50 xl:block" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-6 text-sm tracking-[0.3em] uppercase xl:text-white"
          >
            Freelance basé à Nice
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground mb-8 text-5xl font-medium tracking-tight text-balance md:text-7xl lg:text-8xl xl:text-white"
          >
            Motion Designer
            <br />
            <span className="text-muted-foreground">&</span> Monteur Video
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-muted-foreground mx-auto mb-12 max-w-xl text-lg md:text-xl xl:text-white"
          >
            &ldquo;Get busy living or get busy dying.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="group cursor-pointer gap-3 rounded-full px-8 py-6 text-base xl:hidden"
              onClick={openModal}
            >
              <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
              Voir le Showreel
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="border-foreground/20 flex h-10 w-6 justify-center rounded-full border-2 xl:border-white">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-foreground/40 mt-2 h-3 w-1 rounded-full xl:bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="bg-foreground/80 absolute inset-0 backdrop-blur-sm"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 w-full max-w-5xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Close button */}
              <motion.button
                className="bg-background/10 text-background hover:bg-background/20 absolute -top-12 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-colors"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Video */}
              <div className="bg-foreground/20 aspect-video overflow-hidden rounded-xl">
                <video
                  src="/videos/showreel.mp4"
                  className="h-full w-full object-contain"
                  controls
                  playsInline
                  autoPlay
                  preload="none"
                />
              </div>

              <p className="text-background/50 mt-4 text-center text-sm">
                Showreel 2025
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Banner;
