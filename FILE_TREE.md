# File Tree: pumpwatch-mobile

**Generated:** 2026-04-08
**Root Path:** `pumpwatch-mobile`
**Based on:** Kasuwa feature-based architecture pattern + PumpWatch Stitch designs

---

## Design System Reference

Before reading the tree, these are the three governing rules baked into
every file in this project. Violating any of them breaks the design contract.

| Rule | Enforcement |
|---|---|
| **No-Line Rule** | Zero `borderWidth` for sectioning. Tonal background shifts only. |
| **No-Shadow Rule** | Only `box-shadow: 0 12px 32px rgba(25,28,29,0.06)` for floating elements. Never `elevation > 4` on inline cards. |
| **Font Rule** | `Manrope-*` for prices/headlines only. `Inter-*` for all data/body text. Never mix. |

---

## Full Tree

```
pumpwatch-mobile/
│
├── 📄 app.config.js                      Expo config — name, icons, permissions, plugins
├── 📄 package.json                       Dependencies + scripts
├── 📄 tsconfig.json                      Strict TS, baseUrl "."
│
├── 📁 api/
│   └── 📄 api.ts                         Axios instance — Bearer token injection,
│                                          silent 401 refresh with queue, SecureStore
│
├── 📁 app/                               Expo Router file-based routes
│   ├── 📄 _layout.tsx                    Root layout — providers stack:
│   │                                      GestureHandler → SafeArea → QueryClient
│   │                                      → AuthProvider → Stack navigator.
│   │                                      Font loading + SplashScreen guard.
│   │
│   ├── 📄 index.tsx                      Root redirect:
│   │                                        isAuthenticated → /(tabs)/
│   │                                        else           → /(auth)/sign-in
│   │
│   ├── 📁 (auth)/                        Auth group — no tab bar, fade animation
│   │   ├── 📄 _layout.tsx                Stack with headerShown:false, animation:'fade'
│   │   ├── 📄 sign-in.tsx                "Welcome Back" screen
│   │   │                                  Mobile-only layout (no split panel).
│   │   │                                  Logo anchor → 36px headline → SignInForm.
│   │   │                                  Destination Rule: no top app bar.
│   │   ├── 📄 sign-up.tsx                "Fuel intelligence redefined." screen
│   │   │                                  Editorial block: 52px Manrope hero +
│   │   │                                  secondary accent + 2-col bento cards.
│   │   │                                  Form in surfaceContainerLowest card
│   │   │                                  (rounded-[32px], ambient shadow).
│   │   └── 📄 forgot-password.tsx        Reset password — email input → sent state
│   │
│   ├── 📁 (tabs)/                        Authenticated bottom-tab navigator
│   │   ├── 📄 _layout.tsx                Tab bar config:
│   │   │                                  - No border (No-Line Rule)
│   │   │                                  - Active chip: primaryFixed pill
│   │   │                                  - 4 tabs: Map / Search / History / Profile
│   │   ├── 📄 index.tsx                  Map tab → composes ActionHeader +
│   │   │                                  FuelGradeFilterBar + MapView +
│   │   │                                  BottomSheetModal(StationCard list)
│   │   ├── 📄 search.tsx                 Search tab → soft-fill search bar +
│   │   │                                  StationCard results list
│   │   ├── 📄 history.tsx                History tab → ActionHeader +
│   │   │                                  ReportHistoryScreen
│   │   └── 📄 profile.tsx                Profile tab → ActionHeader +
│   │                                      ProfileFavoritesScreen
│   │
│   └── 📁 (feature-screens)/             Deep-link / pushed screens (no tab bar)
│       └── 📁 stations/
│           └── 📄 station-details.tsx    Route: ?stationId=xxx
│                                          Wraps ActionHeader(showBack) +
│                                          StationDetailScreen
│
├── 📁 components/
│   └── 📁 ui/                            Shared, design-system-aware primitives.
│       │                                  These are layout/interaction shells only —
│       │                                  NO business logic, NO API calls.
│       │
│       ├── 📄 text.tsx                   Base Text — Inter default, onSurface color.
│       │                                  All other components use this, never RN Text.
│       │
│       ├── 📄 screen.tsx                 SafeAreaView wrapper (background color,
│       │                                  safe edges). fullBleed prop for map screens.
│       │
│       ├── 📄 action-header.tsx          Glassmorphic top app bar (surface/80 bg).
│       │                                  Props: showBack | showSearch | avatarUri.
│       │                                  No bottom border — tonal shift creates edge.
│       │
│       ├── 📄 auth-input.tsx             Soft-fill input (surfaceContainerHigh bg).
│       │                                  No border default. 2px primary bottom-only
│       │                                  indicator on focus. Trailing icon slot.
│       │                                  rightSlot prop for "Forgot password?" link.
│       │
│       ├── 📄 button.tsx                 Three variants:
│       │                                    primary   — #003f87 bg, onPrimary text
│       │                                    secondary — secondaryFixed bg (Report btn,
│       │                                                most tactile, thumb-optimised)
│       │                                    ghost     — transparent, primary text
│       │
│       ├── 📄 tab-header.tsx             Editorial tab header — micro-label (uppercase
│       │                                  wide tracking) + 34px Manrope title.
│       │
│       └── 📄 action-header.tsx          (see above)
│
├── 📁 context/
│   └── 📄 AuthContext.tsx                React context + provider.
│                                          Stores user + tokens in state.
│                                          saveSession() writes to SecureStore.
│                                          clearSession() wipes SecureStore + state.
│                                          useAuth() hook — throws outside provider.
│
├── 📁 features/                          Feature-based modules. Each feature owns
│   │                                      its types, components, screens, services.
│   │                                      Cross-feature imports go upward through
│   │                                      shared/ or components/ui/ only.
│   │
│   ├── 📁 auth/
│   │   ├── 📄 types.ts                   SignInPayload, SignUpPayload, AuthUser,
│   │   │                                  AuthTokens, AuthResponse
│   │   ├── 📁 components/
│   │   │   ├── 📄 sign-in-form.tsx       Controlled form → useSignIn mutation.
│   │   │   │                              On success: router.replace('/(tabs)/').
│   │   │   └── 📄 sign-up-form.tsx       Controlled form → useSignUp mutation.
│   │   └── 📁 services/
│   │       ├── 📄 mutations.ts           useSignIn, useSignUp, useSignOut,
│   │       │                              useRefreshToken
│   │       └── 📄 queries.ts             useMe — AUTH_KEYS.me query key
│   │
│   ├── 📁 stations/
│   │   ├── 📄 types.ts                   FuelGrade, FuelPrice, Station,
│   │   │                                  StationListItem, NearbyStationsQuery,
│   │   │                                  PriceReportPayload
│   │   ├── 📁 components/
│   │   │   ├── 📄 price-capsule-pin.tsx  Signature map pin component.
│   │   │   │                              Horizontal pill (rounded-full).
│   │   │   │                              Active: expands, primary bg + tint glow.
│   │   │   │                              Inactive: surfaceContainerLowest + shadow.
│   │   │   │
│   │   │   ├── 📄 station-card.tsx       Station list card used in map bottom sheet
│   │   │   │                              and favorites. No borders. Price chip uses
│   │   │   │                              rounded-sm (4px) nested visual language.
│   │   │   │                              isPriceDrop → secondaryContainer chip.
│   │   │   │
│   │   │   ├── 📄 fuel-grade-filter-bar.tsx  Horizontal scroll filter (Regular /
│   │   │   │                              Mid-Grade / Premium / Diesel / E85).
│   │   │   │                              Active: primary pill + shadow.
│   │   │   │                              Inactive: ghost border (outlineVariant 15%).
│   │   │   │
│   │   │   └── 📄 price-report-sheet.tsx  Inline price report form.
│   │   │                                  Grade selector (rounded-sm chips) +
│   │   │                                  numeric price input + secondary Report btn.
│   │   │
│   │   ├── 📁 screens/
│   │   │   ├── 📄 station-detail.tsx     Station details screen logic.
│   │   │   │                              Hero card (rounded-[32px]) → price grid
│   │   │   │                              → PriceReportSheet (toggle).
│   │   │   └── 📄 nearby-map.tsx         (stub — logic lives in app/(tabs)/index.tsx
│   │   │                                  to co-locate MapView with its bottom sheet)
│   │   │
│   │   └── 📁 services/
│   │       ├── 📄 queries.ts             useNearbyStations, useStationDetail,
│   │       │                              useFavoriteStations — STATION_KEYS
│   │       └── 📄 mutations.ts           useReportPrice, useToggleFavorite
│   │
│   ├── 📁 reports/
│   │   ├── 📄 types.ts                   PriceReport, ReportStatus,
│   │   │                                  ReportHistoryStats
│   │   ├── 📁 components/
│   │   │   └── 📄 report-history-entry.tsx  Single timeline card.
│   │   │                                  Grade badge: rounded-sm (4px), uppercase.
│   │   │                                  Price: Manrope-ExtraBold 28px.
│   │   │                                  Status pill: secondaryContainer if verified.
│   │   │
│   │   ├── 📁 screens/
│   │   │   └── 📄 report-history.tsx     Full Report History screen.
│   │   │                                  "Account Activity" editorial header +
│   │   │                                  stats chips (verifiedReports, savings).
│   │   │                                  Chronological timeline grouped by date.
│   │   │                                  Decorative 1px left line + green dot per entry.
│   │   │
│   │   └── 📁 services/
│   │       ├── 📄 queries.ts             useMyReportHistory, useMyReportStats
│   │       └── 📄 mutations.ts           useDeleteReport
│   │
│   └── 📁 profile/
│       ├── 📄 types.ts                   UserProfile
│       ├── 📁 components/
│       │   └── 📄 profile-header.tsx     Profile display card.
│       │                                  "Premium Member" micro-label + 40px name
│       │                                  + location row + stats blocks (reports/rank).
│       │                                  Decorative ambient circle (primary, 4% opacity).
│       │
│       ├── 📁 screens/
│       │   └── 📄 profile-favorites.tsx  Profile + Favorites screen.
│       │                                  ProfileHeader → Favorites list (StationCards)
│       │                                  → Account settings rows (tonal, no dividers).
│       │
│       └── 📁 services/
│           ├── 📄 queries.ts             useProfile — PROFILE_KEYS.me
│           └── 📄 mutations.ts           useUpdateProfile
│
├── 📁 shared/
│   └── 📁 theme/                         Single source of truth for all design tokens.
│       │                                  Import from 'shared/theme' everywhere —
│       │                                  never hardcode hex values in components.
│       │
│       ├── 📄 colors.ts                  All color tokens from DESIGN.md.
│       │                                  Organized by role: primary/secondary/tertiary
│       │                                  surface hierarchy (lowest→highest), outline.
│       │
│       ├── 📄 typography.ts              FontFamily (Manrope/Inter variants),
│       │                                  FontSize scale (displayLg→labelSm),
│       │                                  LineHeight, LetterSpacing constants.
│       │
│       ├── 📄 textStyles.ts              Composed text style presets —
│       │                                  displayLg (hero prices), headlineLg,
│       │                                  bodyMd, labelCapsWide, etc.
│       │                                  Import and spread into StyleSheet.
│       │
│       └── 📄 index.ts                   Barrel: re-exports Colors, FontFamily,
│                                          FontSize, LineHeight, LetterSpacing,
│                                          TextStyles
│
├── 📁 lib/
│   └── 📄 utils.ts                       cn() — merges StyleSheet style arrays,
│                                          filters falsy values (undefined/false/null)
│
└── 📁 utils/
    ├── 📄 constants.ts                   API_BASE_URL, SECURE_STORE_KEYS,
    │                                      MAP_DEFAULTS, QUERY_STALE_TIME
    └── 📄 helpers.ts                     GRADE_LABELS map, formatPrice(),
                                           formatReportTime(), isPriceDrop(), clamp()
```

---

## Screen → Feature → Route Mapping

| Screen (stitch design) | Expo Router route | Feature screen / component |
|---|---|---|
| `login/` | `app/(auth)/sign-in.tsx` | `features/auth/components/sign-in-form.tsx` |
| `sign_up/` | `app/(auth)/sign-up.tsx` | `features/auth/components/sign-up-form.tsx` |
| `nearby_stations_map/` | `app/(tabs)/index.tsx` | `features/stations/components/*` |
| `station_details_report/` | `app/(feature-screens)/stations/station-details.tsx` | `features/stations/screens/station-detail.tsx` |
| `profile_favorites/` | `app/(tabs)/profile.tsx` | `features/profile/screens/profile-favorites.tsx` |
| `report_history/` | `app/(tabs)/history.tsx` | `features/reports/screens/report-history.tsx` |

---

## Data Flow per Feature

```
api/api.ts  ←──────────────────────────────────────────────────────┐
  (axios, token injection, 401 refresh)                            │
                                                                    │
features/{feature}/services/queries.ts   (useQuery wrappers)       │
features/{feature}/services/mutations.ts (useMutation wrappers) ───┘
       │
       ▼
features/{feature}/screens/{screen}.tsx   (data fetching, state)
       │
       ▼
features/{feature}/components/{component}.tsx   (pure UI)
       │
       ▼
components/ui/{primitive}.tsx   (Text, Button, AuthInput…)
       │
       ▼
shared/theme/{colors,typography,textStyles}.ts   (design tokens)
```

---

## Design Token Quick Reference

### Colors (from `shared/theme/colors.ts`)

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#003f87` | Navigation, CTAs, headlines, wordmark |
| `primaryContainer` | `#0056b3` | Gradient end on primary buttons |
| `secondary` | `#006e25` | Price drops, savings, verified badges — "Vibe Green" |
| `secondaryFixed` | `#83fc8e` | Secondary / Report button background |
| `secondaryContainer` | `#80f98b` | Price-drop chip fill, verified status pill |
| `tertiary` | `#722b00` | Alert / low-stock indicators only |
| `background` | `#f8f9fa` | App background — base layer |
| `surfaceContainerLowest` | `#ffffff` | Cards — "pops" against background |
| `surfaceContainerLow` | `#f3f4f5` | Lower-priority blocks, bento cards |
| `surfaceContainerHigh` | `#e7e8e9` | Soft-fill input background |
| `surfaceContainerHighest` | `#e1e3e4` | Headers — "physically closest" to user |
| `onSurface` | `#191c1d` | Primary text |
| `onSurfaceVariant` | `#424752` | Secondary text, addresses, metadata |
| `outline` | `#727784` | Placeholder text, inactive icons |
| `outlineVariant` | `#c2c6d4` | Ghost border at 15% opacity only |

### Typography

| Style | Font | Size | Usage |
|---|---|---|---|
| `displayLg` | Manrope ExtraBold | 56px | Hero price on report card |
| `displaySm` | Manrope ExtraBold | 40px | Secondary price display |
| `headlineLg` | Manrope ExtraBold | 32px | Screen headings ("Welcome Back") |
| `headlineSm` | Manrope Bold | 24px | Wordmark, station name |
| `bodyMd` | Inter | 14px | Station address, description |
| `bodySm` | Inter | 12px | Timestamps, helper text |
| `labelCapsWide` | Inter SemiBold | 10px | Micro-labels ("ACCOUNT ACTIVITY") |

---

## Files Still Needed (not scaffolded — implement as you build)

These follow the same pattern as their siblings above.

| File | What it should contain |
|---|---|
| `app/(auth)/__tests__/sign-in.test.tsx` | RTL render + form submit test |
| `app/(auth)/__tests__/sign-up.test.tsx` | RTL render + validation test |
| `features/auth/components/__tests__/sign-in-form.test.tsx` | Unit tests for SignInForm |
| `features/stations/components/__tests__/station-card.test.tsx` | Snapshot + interaction |
| `features/reports/components/__tests__/report-history-entry.test.tsx` | Snapshot |
| `components/ui/__tests__/button.test.tsx` | Renders all 3 variants |
| `components/ui/__tests__/auth-input.test.tsx` | Focus state, label, icon |
| `assets/fonts/Manrope-Regular.ttf` | Download from fonts.google.com/specimen/Manrope |
| `assets/fonts/Manrope-Bold.ttf` | " |
| `assets/fonts/Manrope-ExtraBold.ttf` | " |
| `assets/fonts/Inter-Regular.ttf` | Download from fonts.google.com/specimen/Inter |
| `assets/fonts/Inter-Medium.ttf` | " |
| `assets/fonts/Inter-SemiBold.ttf` | " |
| `assets/images/icon.png` | 1024×1024, #003f87 background |
| `assets/images/splash-screen.png` | White/blue PumpWatch wordmark |
| `shared/data/` | Mock data JSON for dev/testing |
| `context/LocationContext.tsx` | Wraps expo-location, exposes coords |
| `babel.config.js` | `babel-preset-expo` + reanimated plugin |
| `jest.config.js` | `jest-expo` preset |

---

## Key Conventions

**Imports** — always use the barrel from `shared/theme`:
```ts
import { Colors, TextStyles, FontFamily } from '../../shared/theme';
```

**No hardcoded hex** — every color reference must come from `Colors.*`.

**No RN `<Text>` directly** — use `components/ui/text.tsx` which sets the
Inter baseline. Override `fontFamily` and `fontSize` via `style` prop.

**Shadow shorthand** — all ambient shadows must use exactly:
```ts
shadowColor: Colors.onSurface,
shadowOffset: { width: 0, height: 12 },
shadowOpacity: 0.06,
shadowRadius: 32,
elevation: 3,
```
Floating FABs (Report button) may use `elevation: 8` maximum.

**No `borderWidth` for sectioning** — if you need to separate two areas,
change `backgroundColor` between them. The only permitted `borderWidth` is
the 2px primary bottom indicator on `AuthInput` during focus, and the
`borderWidth: 3` ring on the timeline dot in `ReportHistoryEntry`.
