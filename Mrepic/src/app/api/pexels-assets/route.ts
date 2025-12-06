import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const PEXELS_API_KEY = 'z5Jwsq0SC93JncIhLne1iCKZhjpMOhulGogRgcHRxDo9uHEBM0ls3tck';

type PexelsPhoto = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};

type PexelsApiResponse = {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page?: string;
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || 'nature';
    const perPage = parseInt(searchParams.get('per_page') || '80', 10);

    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;
    
    console.log('[Pexels API] Request:', url);
    console.log('[Pexels API] Auth Header Present:', !!PEXELS_API_KEY);
    
    const response = await fetch(url, {
      headers: {
        'Authorization': PEXELS_API_KEY,
      },
      cache: 'no-store'
    });

    console.log('[Pexels API] Status:', response.status);

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      let errorBody = '';
      
      if (contentType?.includes('application/json')) {
        const json = await response.json();
        errorBody = JSON.stringify(json);
      } else {
        errorBody = await response.text();
      }
      
      console.error('[Pexels API] Error:', response.status, errorBody);
      throw new Error(`API returned ${response.status}: ${errorBody}`);
    }

    const data = await response.json() as PexelsApiResponse;

    // Transform Pexels data to match our format
    const transformedPhotos = data.photos.map((photo) => ({
      id: String(photo.id),
      src: photo.src.large,
      alt: photo.alt || 'Image from Pexels',
      photographer: photo.photographer,
      photographer_url: photo.photographer_url,
    }));

    console.log('[Pexels API] Success! Returned', transformedPhotos.length, 'photos');

    return NextResponse.json({
      page: data.page,
      per_page: data.per_page,
      photos: transformedPhotos,
      total_results: data.total_results,
      next_page: data.next_page,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch from Pexels';
    console.error('[Pexels API] Catch Error:', message);
    
    return NextResponse.json(
      { error: message, details: 'Check server logs for details' },
      { status: 500 }
    );
  }
}
