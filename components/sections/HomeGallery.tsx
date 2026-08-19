"use client";

import React, { useState } from "react";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { SectionHeading } from "../ui/SectionHeading";
import { LightboxModal } from "../ui/LightboxModal";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";
import { Maximize2, Flame } from "lucide-react";

export const HomeGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTags = ["ALL", "THE GARAGE", "THE FOOD", "THE MACHINES", "THE MOMENTS", "THE FANS"];

  const filteredItems =
    activeFilter === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.tag === activeFilter);

  return (
    <section className="relative py-24 md:py-36 bg-turbo-black text-performance-white overflow-hidden select-none">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-racing-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-turbo-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          sectorNumber="06"
          tag="VISUAL ARCHIVE"
          title={
            <>
              THE PADDOCK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                GALLERY ARCHIVE.
              </span>
            </>
          }
          subtitle="A cinematic glimpse into our Coimbatore paddock—where horsepower, culinary craftsmanship, and petrolhead camaraderie converge."
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-xs font-racing font-bold tracking-widest uppercase transition-all duration-300 shrink-0 ${
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
        <div className="grid grid-cols-12 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`${item.colSpan || "col-span-12 md:col-span-6"} group cursor-pointer relative rounded-2xl overflow-hidden bg-garage-black border border-metallic-silver/20 hover:border-racing-red/70 transition-all duration-500 shadow-xl`}
              data-cursor-hover
              data-cursor-text="ZOOM"
            >
              <div className="relative overflow-hidden">
                <ImagePlaceholder
                  src={item.imageSrc}
                  alt={item.altText || item.title}
                  label={item.imageLabel}
                  aspectRatio={item.aspectRatio}
                  badgeText={item.tag}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Reveal Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-turbo-black via-turbo-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-racing font-bold text-velocity-yellow tracking-widest uppercase">
                        {item.tag}
                      </span>
                      <h4 className="font-display font-black text-lg md:text-xl text-performance-white uppercase">
                        {item.title}
                      </h4>
                      <p className="text-xs text-metallic-silver/80 line-clamp-1 mt-1 font-sans">
                        {item.caption}
                      </p>
                    </div>

                    <div className="p-3 rounded-full bg-racing-red text-white shadow-lg shrink-0 ml-4">
                      <Maximize2 className="w-4 h-4" />
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
