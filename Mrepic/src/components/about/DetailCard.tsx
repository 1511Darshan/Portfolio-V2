'use client';

import { motion } from 'framer-motion';
import { FaExpand } from 'react-icons/fa';
import type { AboutNode } from '@/app/about/page';

interface DetailCardProps {
  item: AboutNode;
  category: string;
  onClose: () => void;
}

export default function DetailCard({ item, category, onClose }: DetailCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed right-4 md:right-10 top-32 md:top-40 w-full max-w-md z-50 pointer-events-auto"
    >
      <div className="bg-card border border-card-border overflow-hidden flex flex-col shadow-lg relative rounded-lg">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted"
        >
          <span className="text-lg">×</span>
        </button>

        {/* Header */}
        <div className="p-6 border-b border-card-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 border border-card-border text-muted-foreground bg-background rounded">
              {item.emoji ? (
                <span className="text-base">{item.emoji}</span>
              ) : (
                <item.icon size={16} />
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {category}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-foreground leading-tight">{item.title}</h2>
          {item.subtitle && <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>}
          {item.period && <p className="text-xs text-muted-foreground mt-1">{item.period}</p>}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {/* Stats/Details */}
          {item.details && item.details.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {item.details.map((detail, i) => (
                <div key={i} className="bg-background border border-card-border p-3 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">{detail.label}</div>
                  <div className="text-lg font-semibold text-foreground">{detail.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Fun Fact */}
          {item.funFact && (
            <div className="border-l-2 border-card-border pl-4">
              <p className="text-sm text-muted-foreground italic">"{item.funFact}"</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
