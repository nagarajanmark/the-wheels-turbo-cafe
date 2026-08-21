"use client";

import React, { useState } from "react";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { SectionHeading } from "../ui/SectionHeading";
import { LightboxModal } from "../ui/LightboxModal";
import { GALLERY_ITEMS, PARALLAX_MATRIX_IMAGES, GalleryItem } from "@/data/galleryData";
import { Maximize2 } from "lucide-react";

import ThreeDParallaxGallery from "../ui/3d-parallax-unfurling-gallery";

export const HomeGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTags = ["ALL", "THE GARAGE", "THE FOOD", "THE MACHINES", "THE MOMENTS"];

  const filteredItems =
    activeFilter === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.tag === activeFilter);

  return (
    <section className="relative bg-turbo-black text-performance-white select-none">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-racing-grid opacity-20 pointer-events-none" />

      {/* 1. Header Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 relative z-10">
        <SectionHeading
          sectorNumber="06"
          tag="VISUAL ARCHIVE & 3D MATRIX"
          title={
            <>
              THE PADDOCK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                GALLERY ARCHIVE.
              </span>
            </>
          }
          subtitle="Scroll down to experience our 3D parallax paddock matrix, followed by the complete curated visual vault of Coimbatore's premier racing cafe."
        />
      </div>

      {/* 2. 3D Parallax Unfurling Gallery Matrix (Desktop Only to ensure instant mobile speed) */}
      <div className="w-full relative my-8 hidden md:block">
        <ThreeDParallaxGallery images={PARALLAX_MATRIX_IMAGES} height="240vh" />
      </div>

      {/* 3. Filterable Masonry Vault */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 md:pb-36 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 border-b border-white/10 pb-4 sm:pb-6">
          <div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-performance-white tracking-wide">
              FILTER ARCHIVE BY CATEGORY
            </h3>
            <p className="text-xs sm:text-sm text-metallic-silver mt-0.5 sm:mt-1">
              Explore garage ambience, artisanal menu items, racing tributes, and fan moments.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 no-scrollbar" role="group" aria-label="Gallery category filters">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-racing font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-300 shrink-0 ${
                activeFilter === tag
                  ? "bg-gradient-to-r from-racing-red to-turbo-orange text-white shadow-[0_0_15px_rgba(225,6,0,0.5)] border-t border-white/30"
                  : "bg-garage-black text-metallic-silver hover:text-white border border-white/10 hover:border-racing-red/50"
              }`}
              data-cursor-hover
              data-cursor-text="FILTER"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Masonry Asymmetrical Composition Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`${item.colSpan || "col-span-12 md:col-span-6"} group cursor-pointer relative rounded-2xl overflow-hidden bg-garage-black border border-metallic-silver/20 hover:border-racing-red/70 transition-all duration-500 shadow-xl flex flex-col h-full`}
              data-cursor-hover
              data-cursor-text="ZOOM"
              role="button"
              tabIndex={0}
              aria-label={`View full image: ${item.title}`}
            >
              <div className="relative overflow-hidden w-full h-full flex-1 min-h-[220px] sm:min-h-[280px]">
                <ImagePlaceholder
                  src={item.imageSrc}
                  alt={item.altText || item.title}
                  label={item.imageLabel}
                  aspectRatio={item.aspectRatio}
                  badgeText={item.tag}
                  className="w-full h-full min-h-full"
                />

                {/* Hover Reveal Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-turbo-black via-turbo-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-racing font-bold text-velocity-yellow tracking-widest uppercase">
                        {item.tag}
                      </span>
                      <h3 className="font-display font-black text-base sm:text-lg md:text-xl text-performance-white uppercase">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-metallic-silver/80 line-clamp-1 mt-0.5 sm:mt-1 font-sans">
                        {item.caption}
                      </p>
                    </div>

                    <div className="p-2 sm:p-3 rounded-full bg-racing-red text-white shadow-lg shrink-0 ml-3 sm:ml-4">
                      <Maximize2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          category={selectedItem.tag}
          caption={selectedItem.caption}
          imageSrc={selectedItem.imageSrc}
          imageLabel={selectedItem.imageLabel}
        />
      )}
    </section>
  );
};
