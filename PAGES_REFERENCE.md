# All Pages Reference

All pages have been created and are located in the following directories:

## 📁 Directory Structure

```
src/pages/
├── auth/                    # Authentication Pages
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── ForgotPasswordPage.tsx
│   └── VerifyEmailPage.tsx
│
├── public/                  # Public Pages
│   ├── Homepage.tsx
│   ├── GalleryPage.tsx
│   ├── ArtworkDetailPage.tsx
│   ├── ArtistProfilePage.tsx
│   ├── ArtistsDirectoryPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
│
├── user/                    # User Account Pages
│   ├── UserDashboard.tsx
│   ├── UserProfilePage.tsx
│   ├── FavoritesPage.tsx
│   ├── FollowingPage.tsx
│   ├── OrderHistoryPage.tsx
│   └── AddressBookPage.tsx
│
├── artist/                  # Artist Pages
│   ├── ArtistDashboard.tsx
│   ├── MyArtworksPage.tsx
│   ├── UploadArtPage.tsx
│   ├── EditArtPage.tsx
│   ├── ArtworkStatsPage.tsx
│   ├── OrdersManagementPage.tsx
│   ├── OrderDetailsPage.tsx
│   ├── EarningsPage.tsx
│   ├── SalesAnalyticsPage.tsx
│   └── CommissionRequestsPage.tsx
│
├── ecommerce/               # E-commerce Pages
│   ├── ShoppingCartPage.tsx
│   ├── CheckoutPage.tsx
│   └── OrderConfirmationPage.tsx
│
├── discovery/               # Discovery Pages
│   ├── CategoriesPage.tsx
│   ├── SearchResultsPage.tsx
│   ├── CollectionsPage.tsx
│   ├── NewArrivalsPage.tsx
│   └── PopularPage.tsx
│
├── community/               # Community Pages
│   ├── NotificationsPage.tsx
│   ├── ActivityFeedPage.tsx
│   ├── MessagesPage.tsx
│   └── ReviewsPage.tsx
│
└── support/                 # Support Pages
    ├── HelpCenterPage.tsx
    ├── ShippingInfoPage.tsx
    ├── ReturnsPolicyPage.tsx
    ├── PrivacyPolicyPage.tsx
    └── TermsOfServicePage.tsx
```

## 🔗 All Routes

### Authentication
- `/login` - LoginPage
- `/register` - RegisterPage
- `/forgot-password` - ForgotPasswordPage
- `/verify-email` - VerifyEmailPage

### Public
- `/home` - Homepage
- `/gallery` - GalleryPage
- `/artwork/:id` - ArtworkDetailPage
- `/artists` - ArtistsDirectoryPage
- `/artists/:id` - ArtistProfilePage
- `/about` - AboutPage
- `/contact` - ContactPage

### User Account
- `/dashboard` - UserDashboard
- `/profile` - UserProfilePage
- `/favorites` - FavoritesPage
- `/following` - FollowingPage
- `/orders` - OrderHistoryPage
- `/addresses` - AddressBookPage

### Artist
- `/artist/dashboard` - ArtistDashboard
- `/artist/artworks` - MyArtworksPage
- `/artist/upload` - UploadArtPage
- `/artist/edit/:id` - EditArtPage
- `/artist/stats/:id` - ArtworkStatsPage
- `/artist/orders` - OrdersManagementPage
- `/artist/orders/:id` - OrderDetailsPage
- `/artist/earnings` - EarningsPage
- `/artist/analytics` - SalesAnalyticsPage
- `/artist/commissions` - CommissionRequestsPage

### E-commerce
- `/cart` - ShoppingCartPage
- `/checkout` - CheckoutPage
- `/order-confirmation` - OrderConfirmationPage

### Discovery
- `/categories` - CategoriesPage
- `/categories/:category` - CategoriesPage (with category filter)
- `/search` - SearchResultsPage
- `/collections` - CollectionsPage
- `/new-arrivals` - NewArrivalsPage
- `/popular` - PopularPage

### Community
- `/notifications` - NotificationsPage
- `/activity` - ActivityFeedPage
- `/messages` - MessagesPage
- `/reviews` - ReviewsPage

### Support
- `/help` - HelpCenterPage
- `/shipping` - ShippingInfoPage
- `/returns` - ReturnsPolicyPage
- `/privacy` - PrivacyPolicyPage
- `/terms` - TermsOfServicePage

## ✅ Verification

All pages are:
- ✅ Created and saved in their respective directories
- ✅ Imported in `src/App.tsx`
- ✅ Routed correctly
- ✅ Using consistent styling (same as front page)
- ✅ No compilation errors

## 🚀 How to Access

1. Start your dev server: `npm run dev`
2. Navigate to any route above (e.g., `http://localhost:5173/login`)
3. All pages use the same Navbar and Footer components
4. All pages follow the same design system with gradients and styling

