import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";
import { fadeInUp, staggerContainer, staggerItem, viewportConfigMobile } from "~/lib/animations";

export interface MediaItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  title: string;
  description: string;
  equipment: string;
  poster?: string; // Optional poster image for videos
}

interface VerticalMediaGalleryProps {
  t: TranslationKey;
  mediaItems: MediaItem[];
}

export function VerticalMediaGallery({ t, mediaItems }: VerticalMediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-50px" });

  // Auto-hide controls after 3 seconds
  useEffect(() => {
    if (showControls && isPlaying) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showControls, isPlaying]);

  const currentMedia = mediaItems[currentIndex];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-scroll thumbnail into view when currentIndex changes (but not on initial load)
  useEffect(() => {
    if (thumbnailContainerRef.current && !isInitialLoad) {
      const container = thumbnailContainerRef.current;
      const thumbnails = container.querySelectorAll('button');
      const currentThumbnail = thumbnails[currentIndex];
      
      if (currentThumbnail) {
        const containerRect = container.getBoundingClientRect();
        const thumbnailRect = currentThumbnail.getBoundingClientRect();
        
        // Check if thumbnail is out of view
        if (thumbnailRect.bottom > containerRect.bottom || thumbnailRect.top < containerRect.top) {
          // Calculate the scroll position within the container
          const containerScrollTop = container.scrollTop;
          const thumbnailOffsetTop = (currentThumbnail as HTMLElement).offsetTop;
          const containerHeight = container.clientHeight;
          
          // Scroll within the container only
          container.scrollTo({
            top: thumbnailOffsetTop - (containerHeight / 2),
            behavior: 'smooth'
          });
        }
      }
    }
  }, [currentIndex, isInitialLoad]);

  // Mark initial load as complete after component mounts
  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setIsPlaying(false);
  };

  const handleMediaInteraction = () => {
    setShowControls(true);
    if (currentMedia.type === 'video') {
      handlePlayPause();
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="media-gallery"
      className="relative py-16 lg:py-24 bg-gray-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigMobile}
    >
      {/* Industrial background with diagonal elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Dynamic diagonal shapes */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-red-600 opacity-10"
          style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 20% 100%)" }}
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white opacity-5"
          style={{ clipPath: "polygon(0% 0%, 80% 0%, 50% 100%, 0% 100%)" }}
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />

        {/* Industrial grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-red-600 text-white px-6 py-2 font-black text-sm uppercase tracking-widest relative">
              <div style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }} className="absolute inset-0 bg-red-600"></div>
              <span className="relative z-10">EQUIPMENT IN ACTION</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 uppercase leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block">SEE OUR</span>
            <span className="block text-red-600 stroke-white stroke-2">LIFTS WORKING</span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-white/90 max-w-3xl mx-auto font-bold uppercase tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Real projects, real results
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Vertical Media Player - TikTok Style */}
          <div className="lg:col-span-7">
            <motion.div
              className="relative bg-black border-4 border-red-600 mx-auto max-w-sm lg:max-w-md"
              style={{ aspectRatio: "9/16" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Corner industrial accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-600 z-20"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white z-20"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0 overflow-hidden"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={handleMediaInteraction}
                >
                  {currentMedia.type === 'video' ? (
                    <video
                      ref={videoRef}
                      src={currentMedia.src}
                      poster={currentMedia.poster || currentMedia.src.replace(/\.(mp4|webm|mov)$/i, '.jpg')}
                      className="w-full h-full object-cover cursor-pointer"
                      loop
                      playsInline
                      preload="metadata"
                      onEnded={() => setIsPlaying(false)}
                    />
                  ) : (
                    <img
                      src={currentMedia.src}
                      alt={currentMedia.title}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  )}

                  {/* Media Controls Overlay */}
                  <AnimatePresence>
                    {showControls && (
                      <motion.div
                        className="absolute inset-0 bg-black/30 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {currentMedia.type === 'video' && (
                          <motion.button
                            onClick={handlePlayPause}
                            className="w-16 h-16 bg-red-600/80 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isPlaying ? (
                              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            )}
                          </motion.button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <motion.button
                      onClick={handlePrevious}
                      className="ml-2 w-10 h-10 bg-black/60 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(220, 38, 38, 0.8)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <motion.button
                      onClick={handleNext}
                      className="mr-2 w-10 h-10 bg-black/60 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(220, 38, 38, 0.8)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Media info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-white text-sm font-black uppercase tracking-wide mb-1">
                        {currentMedia.title}
                      </h4>
                      <p className="text-white/80 text-xs uppercase tracking-wider">
                        {currentMedia.equipment}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Sidebar with thumbnails and info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Current media details */}
            <motion.div
              className="bg-black border-l-4 border-red-600 p-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-black uppercase tracking-wide mb-1">
                    {currentMedia.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wide mb-2">
                    {currentMedia.description}
                  </p>
                  <div className="bg-red-600 text-white px-3 py-1 text-xs font-black uppercase tracking-wider inline-block">
                    {currentMedia.equipment}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Thumbnail grid with scrollable container */}
            <div className="relative">
              {/* Industrial header for thumbnails */}
              <motion.div
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600"></div>
                  <span className="text-white text-sm font-black uppercase tracking-wider">
                    GALLERY ({mediaItems.length})
                  </span>
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider">
                  SCROLL TO VIEW ALL
                </div>
              </motion.div>

              {/* Scrollable thumbnail container */}
              <motion.div
                ref={thumbnailContainerRef}
                className="relative max-h-96 overflow-y-auto border border-red-600/20 bg-black/20"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfigMobile}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#dc2626 rgba(0,0,0,0.2)'
                }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 p-3">
                  {mediaItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      variants={staggerItem}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsPlaying(false);
                        setShowControls(true);
                      }}
                      className={`relative group overflow-hidden border-2 transition-all duration-300 ${
                        index === currentIndex 
                          ? 'border-red-600 shadow-lg shadow-red-600/30' 
                          : 'border-white/20 hover:border-red-600/50'
                      }`}
                      style={{ aspectRatio: "9/16" }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          poster={item.poster || item.src.replace(/\.(mp4|webm|mov)$/i, '.jpg')}
                          className="w-full h-full object-cover"
                          muted
                          preload="metadata"
                          playsInline
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {/* Overlay */}
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-red-600/20' 
                          : 'bg-black/40 group-hover:bg-red-600/20'
                      }`}>
                        {item.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${
                              index === currentIndex ? 'bg-red-600' : 'bg-black/60 group-hover:bg-red-600'
                            }`}>
                              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Current indicator */}
                      {index === currentIndex && (
                        <motion.div 
                          className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 border-2 border-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 30% 100%, 0% 100%)" }}
                        />
                      )}

                      {/* Item info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                        <p className="text-white text-xs font-bold uppercase tracking-wide truncate">
                          {item.title}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Gradient fade indicator for scroll (bottom only) */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Progress indicator */}
            <motion.div 
              className="flex justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-red-600 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  style={{ clipPath: "polygon(20% 0%, 80% 20%, 100% 80%, 80% 100%, 20% 80%, 0% 20%)" }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom action bar */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="bg-red-600 border-4 border-black p-6 relative overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-1/4 h-full bg-black opacity-20"
              style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 30% 100%)" }}
            />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-white text-xl md:text-2xl font-black uppercase mb-2">
                  READY TO START YOUR PROJECT?
                </h3>
                <p className="text-white/90 uppercase tracking-wide text-sm">
                  GET THE SAME PROFESSIONAL RESULTS
                </p>
              </div>
              
              <motion.a
                href="#contact"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 font-black text-lg uppercase tracking-widest relative overflow-hidden group border-2 border-black hover:border-gray-800 transition-all duration-200"
                style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">GET STARTED</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}