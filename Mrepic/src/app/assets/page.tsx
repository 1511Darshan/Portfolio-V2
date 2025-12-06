'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import DiffusionBackground from '@/app/social/components/diffusion/DiffusionBackground';
import { AssetCard } from './components/AssetCard';
import { AssetDashboard } from './components/AssetDashboard';
import { AssetViewer } from './components/AssetViewer';

type PexelsImage = {
  id: string;
  src: string;
  alt: string;
  photographer: string;
  photographer_url: string;
};

type PexelsResponse = {
  page: number;
  per_page: number;
  photos: PexelsImage[];
  total_results: number;
  next_page?: string;
};

export default function AssetsPage() {
  const [query, setQuery] = useState<string>('nature');
  const [data, setData] = useState<PexelsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PexelsImage | null>(null);

  const items = useMemo(() => (data?.photos ?? []), [data]);

  const fetchAssets = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    setData(null); // Clear previous data immediately
    try {
      const params = new URLSearchParams({ 
        query: searchQuery,
        per_page: '80'
      });
      const res = await fetch(`/api/pexels-assets?${params.toString()}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: PexelsResponse = await res.json();
      setData(json);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Failed to load';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial images on mount
    fetchAssets('nature');
  }, []);

  return (
    <>
      <DiffusionBackground />
      
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Gallery</h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl">Browse and view beautiful images from Pexels. Enter a search term to explore.</p>
        </div>

        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchAssets(query)}
            placeholder="Search images..."
            className="flex-1 px-4 py-2 bg-card border border-card-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/30"
          />
          <button
            onClick={() => fetchAssets(query)}
            disabled={loading}
            className="px-6 py-2 bg-foreground text-background rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && (
          <div className="p-4 mb-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3">
            <span className="text-sm">Error: {error}</span>
          </div>
        )}

        {items.length > 0 ? (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
            {items.map((item) => (
              <AssetCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedItem(item)} 
              />
            ))}
          </div>
        ) : (
          !loading && (
            <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
               <div className="w-16 h-16 mb-4 rounded-full bg-card border border-card-border flex items-center justify-center">
                  <span className="text-2xl">🖼️</span>
               </div>
               <h3 className="text-lg text-foreground mb-2">No images found</h3>
               <p className="text-sm text-muted-foreground">Try a different search term.</p>
            </div>
          )
        )}
      </main>

      <AnimatePresence>
        {selectedItem && (
          <AssetViewer 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
