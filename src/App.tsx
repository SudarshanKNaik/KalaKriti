import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Authentication Pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";

// Public Pages
import Homepage from "./pages/public/Homepage";
import GalleryPage from "./pages/public/GalleryPage";
import ArtworkDetailPage from "./pages/public/ArtworkDetailPage";
import ArtistProfilePage from "./pages/public/ArtistProfilePage";
import ArtistsDirectoryPage from "./pages/public/ArtistsDirectoryPage";
import AboutPage from "./pages/public/AboutPage";
import ContactPage from "./pages/public/ContactPage";

// User Account Pages
import UserDashboard from "./pages/user/UserDashboard";
import UserProfilePage from "./pages/user/UserProfilePage";
import FavoritesPage from "./pages/user/FavoritesPage";
import FollowingPage from "./pages/user/FollowingPage";
import OrderHistoryPage from "./pages/user/OrderHistoryPage";
import AddressBookPage from "./pages/user/AddressBookPage";

// Artist Pages
import ArtistDashboard from "./pages/artist/ArtistDashboard";
import MyArtworksPage from "./pages/artist/MyArtworksPage";
import UploadArtPage from "./pages/artist/UploadArtPage";
import EditArtPage from "./pages/artist/EditArtPage";
import ArtworkStatsPage from "./pages/artist/ArtworkStatsPage";
import OrdersManagementPage from "./pages/artist/OrdersManagementPage";
import OrderDetailsPage from "./pages/artist/OrderDetailsPage";
import EarningsPage from "./pages/artist/EarningsPage";
import SalesAnalyticsPage from "./pages/artist/SalesAnalyticsPage";
import CommissionRequestsPage from "./pages/artist/CommissionRequestsPage";

// E-commerce Pages
import ShoppingCartPage from "./pages/ecommerce/ShoppingCartPage";
import CheckoutPage from "./pages/ecommerce/CheckoutPage";
import OrderConfirmationPage from "./pages/ecommerce/OrderConfirmationPage";

// Discovery Pages
import CategoriesPage from "./pages/discovery/CategoriesPage";
import SearchResultsPage from "./pages/discovery/SearchResultsPage";
import CollectionsPage from "./pages/discovery/CollectionsPage";
import NewArrivalsPage from "./pages/discovery/NewArrivalsPage";
import PopularPage from "./pages/discovery/PopularPage";

// Community Pages
import NotificationsPage from "./pages/community/NotificationsPage";
import ActivityFeedPage from "./pages/community/ActivityFeedPage";
import MessagesPage from "./pages/community/MessagesPage";
import ReviewsPage from "./pages/community/ReviewsPage";

// Support Pages
import HelpCenterPage from "./pages/support/HelpCenterPage";
import ShippingInfoPage from "./pages/support/ShippingInfoPage";
import ReturnsPolicyPage from "./pages/support/ReturnsPolicyPage";
import PrivacyPolicyPage from "./pages/support/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/support/TermsOfServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Authentication Routes */}
          <Route path="/auth" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />

          {/* Public Routes */}
          <Route path="/home" element={<Homepage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
          <Route path="/artists" element={<ArtistsDirectoryPage />} />
          <Route path="/artists/:id" element={<ArtistProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* User Account Routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/following" element={<FollowingPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/addresses" element={<AddressBookPage />} />

          {/* Artist Routes */}
          <Route path="/artist/dashboard" element={<ArtistDashboard />} />
          <Route path="/artist/artworks" element={<MyArtworksPage />} />
          <Route path="/artist/upload" element={<UploadArtPage />} />
          <Route path="/artist/edit/:id" element={<EditArtPage />} />
          <Route path="/artist/stats/:id" element={<ArtworkStatsPage />} />
          <Route path="/artist/orders" element={<OrdersManagementPage />} />
          <Route path="/artist/orders/:id" element={<OrderDetailsPage />} />
          <Route path="/artist/earnings" element={<EarningsPage />} />
          <Route path="/artist/analytics" element={<SalesAnalyticsPage />} />
          <Route path="/artist/commissions" element={<CommissionRequestsPage />} />

          {/* E-commerce Routes */}
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

          {/* Discovery Routes */}
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<CategoriesPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/popular" element={<PopularPage />} />

          {/* Community Routes */}
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/activity" element={<ActivityFeedPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />

          {/* Support Routes */}
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/shipping" element={<ShippingInfoPage />} />
          <Route path="/returns" element={<ReturnsPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
