// types/safari-packages.ts

export interface PackageImages {
    featured: string;
    gallery: string[];
  }
  
  export interface ItineraryItem {
    time: string;
    activities: string[];
  }
  
  export interface BookingInfo {
    minimumPax: number;
    maximumPax: number;
    cancellationPolicy: string;
    paymentTerms: string;
  }
  
  export interface SafariPackage {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: PackageImages;
    duration: string;
    styles: string[];
    location: string;
    groupSize: string;
    startingPrice: number;
    currency: string;
    season: string;
    difficulty?: string;
    highlights: string[];
    itinerary: ItineraryItem[];
    inclusions: string[];
    exclusions: string[];
    whatToBring?: string[];
    bookingInfo: BookingInfo;
    categories: string[];
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  // Simplified version for listing/preview components
  export interface SafariPackagePreview {
    id: string;
    title: string;
    shortDescription: string;
    images: {
      featured: string;
    };
    duration: string;
    styles: string[];
    location: string;
    groupSize: string;
    startingPrice: number;
    currency: string;
    season: string;
    highlights?: string[];
    featured: boolean;
  }
  
  // Filter options for package search/filtering
  export interface PackageFilters {
    styles?: string[];
    categories?: string[];
    priceRange?: {
      min: number;
      max: number;
    };
    duration?: string[];
    season?: string[];
    difficulty?: string[];
  }
  
  // API response types
  export interface PackageResponse {
    packages: SafariPackage[];
    total: number;
    page: number;
    limit: number;
  }
  
  export interface PackagePreviewResponse {
    packages: SafariPackagePreview[];
    total: number;
    page: number;
    limit: number;
  }
  
  // Enum types for better type safety
  export enum PackageStyle {
    LUXURY = "Luxury",
    MID_LUXURY = "Mid-Luxury", 
    ADVENTURE = "Adventure",
    CULTURAL = "Cultural",
    CULINARY = "Culinary",
    WILDLIFE = "Wildlife",
    PHOTOGRAPHY = "Photography",
    FAMILY = "Family",
    HONEYMOON = "Honeymoon",
    ECO_TOURISM = "Eco-Tourism"
  }
  
  export enum PackageCategory {
    WILDLIFE = "Wildlife",
    CULTURAL = "Cultural", 
    ADVENTURE = "Adventure",
    CULINARY = "Culinary",
    DAY_TRIP = "Day Trip",
    MULTI_DAY = "Multi-Day",
    LUXURY = "Luxury",
    BUDGET = "Budget",
    PHOTOGRAPHY = "Photography",
    FAMILY = "Family"
  }
  
  export enum PackageDifficulty {
    EASY = "Easy",
    MODERATE = "Moderate", 
    CHALLENGING = "Challenging",
    MODERATE_TO_CHALLENGING = "Moderate to Challenging",
    EASY_TO_MODERATE = "Easy to Moderate"
  }
  
  export enum PackageSeason {
    YEAR_ROUND = "Year-round",
    DRY_SEASON = "Apr-Sep",
    PEAK_SEASON = "Jun-Oct", 
    WET_SEASON = "Oct-Apr",
    BEST_VIEWING = "Jul-Oct"
  }
  
  // Form types for package creation/editing
  export interface CreatePackageForm {
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: {
      featured: string;
      gallery: string[];
    };
    duration: string;
    styles: PackageStyle[];
    location: string;
    groupSize: string;
    startingPrice: number;
    currency: string;
    season: string;
    difficulty?: PackageDifficulty;
    highlights: string[];
    itinerary: ItineraryItem[];
    inclusions: string[];
    exclusions: string[];
    whatToBring?: string[];
    bookingInfo: BookingInfo;
    categories: PackageCategory[];
    featured: boolean;
  }
  
  export interface UpdatePackageForm extends Partial<CreatePackageForm> {
    id: string;
  }
  
  // Hook return types
  export interface UsePackagesResult {
    packages: SafariPackage[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
  }
  
  export interface UsePackageResult {
    package: SafariPackage | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
  }
  
  // Search and sorting types
  export interface PackageSearchParams {
    query?: string;
    filters?: PackageFilters;
    sortBy?: 'price' | 'duration' | 'title' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
    page?: number;
    limit?: number;
  }
  
  export interface PackageSortOption {
    label: string;
    value: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
  }
  
  // Booking related types
  export interface BookingRequest {
    packageId: string;
    guestCount: number;
    preferredDate: string;
    guestInfo: {
      name: string;
      email: string;
      phone: string;
      specialRequests?: string;
    };
  }
  
  export interface BookingResponse {
    bookingId: string;
    packageId: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    totalPrice: number;
    currency: string;
  }
  
  // Utility types
  export type PackageId = string;
  export type PackageSlug = string;
  
  // Component prop types
  export interface PackageCardProps {
    package: SafariPackagePreview;
    onViewDetails?: (packageId: string) => void;
    onBook?: (packageId: string) => void;
    className?: string;
  }
  
  export interface PackageDetailProps {
    package: SafariPackage;
    onBook?: (packageId: string) => void;
    onBack?: () => void;
  }
  
  export interface PackageListProps {
    packages: SafariPackagePreview[];
    loading?: boolean;
    error?: string | null;
    onViewDetails?: (packageId: string) => void;
    onLoadMore?: () => void;
    hasMore?: boolean;
  }
  
  // Constants for validation
  export const PACKAGE_CONSTANTS = {
    MIN_PRICE: 1,
    MAX_PRICE: 50000,
    MIN_TITLE_LENGTH: 10,
    MAX_TITLE_LENGTH: 100,
    MIN_DESCRIPTION_LENGTH: 50,
    MAX_DESCRIPTION_LENGTH: 1000,
    MAX_HIGHLIGHTS: 10,
    MAX_INCLUSIONS: 20,
    MAX_EXCLUSIONS: 15,
    MAX_GALLERY_IMAGES: 10
  } as const;