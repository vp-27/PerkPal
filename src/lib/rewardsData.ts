// Centralized State & Mock Data for PerkPal

export interface RewardProgram {
  id: string;
  name: string;
  category: 'Airlines' | 'Hotels' | 'Credit Cards' | 'Dining & Coffee' | 'Retail' | 'Rideshare';
  logoCode: string;
  brandColor: string; // hex or tailwind class
  badgeBg: string;
  points: number;
  pointsName: string;
  centsPerPoint: number; // e.g. 1.8 means 1 point = $0.018
  valueUsd: number;
  expiresIn: string;
  expiresDays: number; // days until expiration; 999 = never
  isExpiringSoon: boolean;
  status: 'connected' | 'syncing' | 'error' | 'reconnect_needed';
  lastSynced: string;
  accountNumberMask: string;
  tier: string;
  notes?: string;
  barcode?: string;
}

export interface GiftCard {
  id: string;
  name: string;
  brand: string;
  logoCode: string;
  color: string;
  balance: number;
  originalBalance: number;
  cardNumber: string;
  pin: string;
  barcode: string;
  expiresIn: string;
  isExpiringSoon: boolean;
  lastUsed?: string;
}

export interface WarrantyItem {
  id: string;
  productName: string;
  brand: string;
  category: 'Electronics' | 'Appliances' | 'Home' | 'Gadgets';
  coverageType: 'AppleCare+' | 'Manufacturer Warranty' | 'Store Guarantee';
  purchaseDate: string;
  expirationDate: string;
  expiresDays: number;
  isExpiringSoon: boolean;
  serialNumber?: string;
  notes?: string;
  claimUrl?: string;
}

export interface RewardGoal {
  id: string;
  title: string;
  targetProgram: string;
  targetPoints: number;
  currentPoints: number;
  progressPercent: number;
  category: string;
  estimatedCashValue: number;
  badge: string;
}

export interface TransferBonusOffer {
  id: string;
  fromProgram: string;
  toProgram: string;
  standardRatio: string;
  bonusPercent: number;
  effectiveRatio: string;
  expiresInDays: number;
  endsDate: string;
  category: 'Airline' | 'Hotel' | 'Retail';
  tag: string;
  highlight: string;
}

export interface RewardTransaction {
  id: string;
  date: string;
  program: string;
  description: string;
  type: 'earn' | 'redeem' | 'transfer' | 'expired';
  amount: number;
  unit: string;
  dollarValue?: number;
}

export interface DemoPersona {
  id: string;
  name: string;
  tagline: string;
  email: string;
  avatarUrl: string;
  tier: string;
  totalPoints: number;
  netWorthUsd: number;
  homeAirport: string;
  favoriteProgram: string;
}

export interface ExpiringRadarItem {
  id: string;
  type: 'reward' | 'giftcard' | 'warranty';
  title: string;
  brand: string;
  category: string;
  detail: string;
  rewardValue: string;
  expiresDays: number;
  expiresIn: string;
  isUrgent: boolean; // <= 7 days
  badgeText: string;
  notes?: string;
  barcode?: string;
  originalItem: RewardProgram | GiftCard | WarrantyItem;
}

export interface RewardsMetrics {
  totalNetWorth: number;
  programsValue: number;
  giftCardsValue: number;
  totalPoints: number;
  programsCount: number;
  giftCardsCount: number;
  warrantiesCount: number;
  expiringCount: number;
  categoryTotals: Record<string, { points: number; valueUsd: number }>;
}

export const DEMO_PERSONAS: Record<string, DemoPersona> = {
  alex: {
    id: 'alex',
    name: 'Alex Mercer',
    tagline: 'Everyday Perks & Tech Warranty Vault',
    email: 'alex.mercer@perkpal.com',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    tier: 'Gold Member',
    totalPoints: 164800,
    netWorthUsd: 2894.20,
    homeAirport: 'JFK - New York',
    favoriteProgram: "Domino's Pizza Rewards",
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah Chen',
    tagline: 'Dining, Coffee & Retail Maximizer',
    email: 'sarah.chen@perkpal.com',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    tier: 'Platinum Circle',
    totalPoints: 126480,
    netWorthUsd: 1680.9,
    homeAirport: 'SFO - San Francisco',
    favoriteProgram: 'Starbucks Rewards',
  },
};

const INITIAL_PROGRAMS: RewardProgram[] = [
  {
    id: 'dominos',
    name: "Domino's Piece of the Pie",
    category: 'Dining & Coffee',
    logoCode: 'DP',
    brandColor: '#006491',
    badgeBg: 'bg-sky-700',
    points: 60,
    pointsName: 'Points',
    centsPerPoint: 30.0,
    valueUsd: 18.00,
    expiresIn: '3 days',
    expiresDays: 3,
    isExpiringSoon: true,
    status: 'connected',
    lastSynced: '10 minutes ago',
    accountNumberMask: '•••• 4120',
    tier: 'Piece of the Pie Rewards',
    barcode: '992019482103',
    notes: '60 points ready to redeem for a FREE Medium 2-Topping Pizza. Expires in 3 days!',
  },
  {
    id: 'tacobell',
    name: 'Taco Bell Rewards',
    category: 'Dining & Coffee',
    logoCode: 'TB',
    brandColor: '#702283',
    badgeBg: 'bg-purple-700',
    points: 2150,
    pointsName: 'Points',
    centsPerPoint: 0.25,
    valueUsd: 5.38,
    expiresIn: '12 days',
    expiresDays: 12,
    isExpiringSoon: true,
    status: 'connected',
    lastSynced: '2 hours ago',
    accountNumberMask: '•••• 8911',
    tier: 'Fire Tier Member',
    barcode: '401928491028',
    notes: '1 Fire Reward ready: Free Cheesy Gordita Crunch or Chalupa Cravings box item.',
  },
  {
    id: 'starbucks',
    name: 'Starbucks Rewards',
    category: 'Dining & Coffee',
    logoCode: 'SB',
    brandColor: '#006241',
    badgeBg: 'bg-emerald-600',
    points: 420,
    pointsName: 'Stars',
    centsPerPoint: 4.5,
    valueUsd: 18.90,
    expiresIn: '18 days',
    expiresDays: 18,
    isExpiringSoon: true,
    status: 'connected',
    lastSynced: '5 minutes ago',
    accountNumberMask: '•••• 1120',
    tier: 'Gold Member',
    barcode: '84920194829104',
    notes: '150 Stars ready for handcrafted beverage or breakfast sandwich.',
  },
  {
    id: 'target',
    name: 'Target Circle 360',
    category: 'Retail',
    logoCode: 'TG',
    brandColor: '#CC0000',
    badgeBg: 'bg-red-600',
    points: 54.80,
    pointsName: 'Circle Cash ($)',
    centsPerPoint: 100,
    valueUsd: 54.80,
    expiresIn: '22 days',
    expiresDays: 22,
    isExpiringSoon: true,
    status: 'connected',
    lastSynced: '4 hours ago',
    accountNumberMask: '•••• 7731',
    tier: 'Circle 360 VIP',
    barcode: '19284019284910',
    notes: '$10 birthday coupon + $44.80 earnings ready for in-store barcode scan.',
  },
  {
    id: 'chipotle',
    name: 'Chipotle Rewards',
    category: 'Dining & Coffee',
    logoCode: 'CP',
    brandColor: '#451400',
    badgeBg: 'bg-amber-950',
    points: 1625,
    pointsName: 'Points',
    centsPerPoint: 0.75,
    valueUsd: 12.19,
    expiresIn: '45 days',
    expiresDays: 45,
    isExpiringSoon: false,
    status: 'connected',
    lastSynced: '1 day ago',
    accountNumberMask: '•••• 3098',
    tier: 'Guac & Chips Ready',
    barcode: '309819283741',
    notes: '1,250 points unlocks a Free Burrito or Bowl. 1 Free Guac side unlocked.',
  },
  {
    id: 'delta',
    name: 'Delta SkyMiles',
    category: 'Airlines',
    logoCode: 'DL',
    brandColor: '#002244',
    badgeBg: 'bg-blue-600',
    points: 74250,
    pointsName: 'Miles',
    centsPerPoint: 1.35,
    valueUsd: 1002.38,
    expiresIn: 'Never (Activity Protected)',
    expiresDays: 999,
    isExpiringSoon: false,
    status: 'connected',
    lastSynced: '12 minutes ago',
    accountNumberMask: '•••• 8821',
    tier: 'Platinum Medallion',
    barcode: '0062849174258821',
    notes: 'Free Comfort+ upgrades and priority bag check active.',
  },
  {
    id: 'chase',
    name: 'Chase Ultimate Rewards',
    category: 'Credit Cards',
    logoCode: 'CH',
    brandColor: '#117ACA',
    badgeBg: 'bg-sky-600',
    points: 86400,
    pointsName: 'Points',
    centsPerPoint: 1.85,
    valueUsd: 1598.40,
    expiresIn: 'Never (Card Open)',
    expiresDays: 999,
    isExpiringSoon: false,
    status: 'connected',
    lastSynced: '1 hour ago',
    accountNumberMask: '•••• 4019',
    tier: 'Sapphire Reserve Member',
    notes: 'Dining 3X rewards active. Seamless travel redemption.',
  },
  {
    id: 'marriott',
    name: 'Marriott Bonvoy',
    category: 'Hotels',
    logoCode: 'MB',
    brandColor: '#8E2800',
    badgeBg: 'bg-amber-800',
    points: 48500,
    pointsName: 'Points',
    centsPerPoint: 0.84,
    valueUsd: 407.40,
    expiresIn: '11 months',
    expiresDays: 330,
    isExpiringSoon: false,
    status: 'connected',
    lastSynced: '3 hours ago',
    accountNumberMask: '•••• 9144',
    tier: 'Titanium Elite',
    notes: '4PM guaranteed late checkout and lounge access.',
  },
];

const INITIAL_GIFTCARDS: GiftCard[] = [
  {
    id: 'gc-1',
    name: 'Amazon eGift Balance',
    brand: 'Amazon',
    logoCode: 'AMZ',
    color: '#FF9900',
    balance: 65.00,
    originalBalance: 100.00,
    cardNumber: '6014 9920 1844 7219',
    pin: '8491',
    barcode: '40092817441092',
    expiresIn: 'Never',
    isExpiringSoon: false,
    lastUsed: 'Yesterday ($35.00 purchase)',
  },
  {
    id: 'gc-2',
    name: 'Starbucks Digital Card',
    brand: 'Starbucks',
    logoCode: 'SBUX',
    color: '#006241',
    balance: 24.50,
    originalBalance: 50.00,
    cardNumber: '6122 8410 9923 1045',
    pin: '1092',
    barcode: '84920194829104',
    expiresIn: 'Never',
    isExpiringSoon: false,
    lastUsed: '3 days ago ($6.50 cold brew)',
  },
  {
    id: 'gc-3',
    name: 'Target Shopping Card',
    brand: 'Target',
    logoCode: 'TGT',
    color: '#CC0000',
    balance: 40.00,
    originalBalance: 50.00,
    cardNumber: '4890 1204 8831 9204',
    pin: '3341',
    barcode: '19284019284910',
    expiresIn: 'Never',
    isExpiringSoon: false,
    lastUsed: '1 week ago ($10.00 household)',
  },
  {
    id: 'gc-4',
    name: 'Sephora eGift Card',
    brand: 'Sephora',
    logoCode: 'SP',
    color: '#000000',
    balance: 50.00,
    originalBalance: 50.00,
    cardNumber: '9940 1824 5510 3391',
    pin: '7721',
    barcode: '9940182455103391',
    expiresIn: 'Never',
    isExpiringSoon: false,
    lastUsed: 'Ready for in-store or online checkout',
  },
];

const INITIAL_WARRANTIES: WarrantyItem[] = [
  {
    id: 'war-1',
    productName: 'Sony WH-1000XM5 ANC Headphones',
    brand: 'Sony',
    category: 'Electronics',
    coverageType: 'Manufacturer Warranty',
    purchaseDate: 'Oct 20, 2024',
    expirationDate: 'Oct 20, 2026',
    expiresDays: 24,
    isExpiringSoon: true,
    serialNumber: 'SN-SXM5-89104',
    notes: '2-Year limited warranty covers driver hardware and battery replacement. File claim before expiry if headband or battery degrades.',
    claimUrl: 'https://sony.com/electronics/support',
  },
  {
    id: 'war-2',
    productName: 'MacBook Pro 16" (M3 Max)',
    brand: 'Apple',
    category: 'Electronics',
    coverageType: 'AppleCare+',
    purchaseDate: 'Nov 15, 2024',
    expirationDate: 'Nov 15, 2027',
    expiresDays: 340,
    isExpiringSoon: false,
    serialNumber: 'C02G901AKL83',
    notes: 'Unlimited accidental damage repairs and 24/7 priority Apple technical support. Battery service covered below 80%.',
    claimUrl: 'https://checkcoverage.apple.com',
  },
  {
    id: 'war-3',
    productName: 'Dyson V15 Detect Cordless Vacuum',
    brand: 'Dyson',
    category: 'Appliances',
    coverageType: 'Manufacturer Warranty',
    purchaseDate: 'Mar 10, 2025',
    expirationDate: 'Mar 10, 2027',
    expiresDays: 150,
    isExpiringSoon: false,
    serialNumber: 'DY-V15-449102',
    notes: '2-Year Dyson official motor and laser head guarantee. Free replacement filters and brush bars included.',
    claimUrl: 'https://dyson.com/support',
  },
  {
    id: 'war-4',
    productName: 'Instant Pot Pro Plus 6-Qt Smart Multi-Cooker',
    brand: 'Instant Pot',
    category: 'Appliances',
    coverageType: 'Manufacturer Warranty',
    purchaseDate: 'May 12, 2025',
    expirationDate: 'May 12, 2027',
    expiresDays: 210,
    isExpiringSoon: false,
    serialNumber: 'IP-PRO-9811',
    notes: 'Covers heating element, lid safety lock, and microprocessor circuit board.',
    claimUrl: 'https://instantbrands.com/support',
  },
];

const INITIAL_GOALS: RewardGoal[] = [
  {
    id: 'goal-1',
    title: 'Free Pizza Party Night',
    targetProgram: "Domino's Piece of the Pie",
    targetPoints: 60,
    currentPoints: 60,
    progressPercent: 100,
    category: 'Dining',
    estimatedCashValue: 18.00,
    badge: 'Ready to Claim!',
  },
  {
    id: 'goal-2',
    title: 'Free Handcrafted Holiday Beverage',
    targetProgram: 'Starbucks Rewards',
    targetPoints: 150,
    currentPoints: 420,
    progressPercent: 100,
    category: 'Dining & Coffee',
    estimatedCashValue: 18.90,
    badge: '2 Drinks Ready',
  },
  {
    id: 'goal-3',
    title: '$100 Amazon Tech Shopping Balance',
    targetProgram: 'Amazon Gift Card',
    targetPoints: 100,
    currentPoints: 65.00,
    progressPercent: 65,
    category: 'Shopping',
    estimatedCashValue: 100.00,
    badge: '$35 to target',
  },
];

const INITIAL_BONUSES: TransferBonusOffer[] = [
  {
    id: 'bonus-1',
    fromProgram: 'American Express MR',
    toProgram: 'Virgin Atlantic Flying Club',
    standardRatio: '1:1',
    bonusPercent: 30,
    effectiveRatio: '1,000 : 1,300 miles',
    expiresInDays: 6,
    endsDate: 'Sep 30, 2026',
    category: 'Airline',
    tag: '30% Bonus',
    highlight: 'Best for Delta domestic & Air France flights to Europe',
  },
  {
    id: 'bonus-2',
    fromProgram: 'Chase Ultimate Rewards',
    toProgram: 'Marriott Bonvoy',
    standardRatio: '1:1',
    bonusPercent: 50,
    effectiveRatio: '1,000 : 1,500 points',
    expiresInDays: 14,
    endsDate: 'Oct 8, 2026',
    category: 'Hotel',
    tag: '50% Bonus',
    highlight: 'Massive bonus on luxury resort redemptions worldwide',
  },
  {
    id: 'bonus-3',
    fromProgram: 'Capital One Miles',
    toProgram: 'Air France / KLM Flying Blue',
    standardRatio: '1:1',
    bonusPercent: 20,
    effectiveRatio: '1,000 : 1,200 miles',
    expiresInDays: 20,
    endsDate: 'Oct 14, 2026',
    category: 'Airline',
    tag: '20% Promo',
    highlight: 'One-way promo rewards to Paris for under 15,000 miles',
  },
  {
    id: 'bonus-4',
    fromProgram: 'Citi ThankYou Points',
    toProgram: 'Wyndham Rewards',
    standardRatio: '1:1',
    bonusPercent: 20,
    effectiveRatio: '1,000 : 1,200 points',
    expiresInDays: 28,
    endsDate: 'Oct 22, 2026',
    category: 'Hotel',
    tag: '20% Boost',
    highlight: 'Great value for Vacasa luxury vacation rental cabins',
  },
];

const INITIAL_TRANSACTIONS: RewardTransaction[] = [
  {
    id: 'tx-1',
    date: 'Today, 2:15 PM',
    program: 'Starbucks Rewards',
    description: 'Earned on Venti Iced Shaken Espresso',
    type: 'earn',
    amount: 14,
    unit: 'Stars',
    dollarValue: 0.63,
  },
  {
    id: 'tx-2',
    date: 'Yesterday, 8:40 PM',
    program: "Domino's Piece of the Pie",
    description: 'Earned 10 points on 2 Medium Pizzas',
    type: 'earn',
    amount: 10,
    unit: 'Points',
    dollarValue: 3.00,
  },
  {
    id: 'tx-3',
    date: 'Sep 21, 2026',
    program: 'Target Circle 360',
    description: 'Earned 1% cash earnings on home essentials',
    type: 'earn',
    amount: 4.80,
    unit: 'USD',
    dollarValue: 4.80,
  },
  {
    id: 'tx-4',
    date: 'Sep 18, 2026',
    program: 'Amazon eGift Balance',
    description: 'Redeemed on Book & Tech Accessories',
    type: 'redeem',
    amount: 35.00,
    unit: 'USD',
    dollarValue: 35.00,
  },
];


const STORAGE_KEYS = {
  PROGRAMS: 'perkpal_programs_v3',
  GIFTCARDS: 'perkpal_giftcards_v3',
  WARRANTIES: 'perkpal_warranties_v3',
  GOALS: 'perkpal_goals_v3',
  BONUSES: 'perkpal_bonuses_v3',
  TRANSACTIONS: 'perkpal_transactions_v3',
  ACTIVE_PERSONA: 'perkpal_active_persona',
  SETTINGS: 'perkpal_settings',
};

// Dispatch helper for real-time reactivity across tabs / components
const notifyStateChange = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('perkpal_data_updated'));
  }
};

export const RewardsStore = {
  // Programs
  getPrograms: (): RewardProgram[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROGRAMS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Error loading programs', e);
    }
    RewardsStore.savePrograms(INITIAL_PROGRAMS);
    return INITIAL_PROGRAMS;
  },

  savePrograms: (programs: RewardProgram[]) => {
    localStorage.setItem(STORAGE_KEYS.PROGRAMS, JSON.stringify(programs));
    notifyStateChange();
  },

  addProgram: (program: Omit<RewardProgram, 'id'>) => {
    const programs = RewardsStore.getPrograms();
    const newProg: RewardProgram = {
      ...program,
      id: `prog-${Date.now()}`,
    };
    programs.unshift(newProg);
    RewardsStore.savePrograms(programs);
    return newProg;
  },

  unlinkProgram: (id: string) => {
    const programs = RewardsStore.getPrograms().filter(p => p.id !== id);
    RewardsStore.savePrograms(programs);
  },

  syncProgram: (id: string): Promise<RewardProgram> => {
    return new Promise((resolve) => {
      const programs = RewardsStore.getPrograms();
      const idx = programs.findIndex(p => p.id === id);
      if (idx !== -1) {
        programs[idx].status = 'syncing';
        RewardsStore.savePrograms(programs);

        setTimeout(() => {
          const fresh = RewardsStore.getPrograms();
          const target = fresh.find(p => p.id === id);
          if (target) {
            target.status = 'connected';
            target.lastSynced = 'Just now';
            RewardsStore.savePrograms(fresh);
            resolve(target);
          }
        }, 1000);
      }
    });
  },

  syncAll: (): Promise<void> => {
    return new Promise((resolve) => {
      const programs = RewardsStore.getPrograms();
      programs.forEach(p => (p.status = 'syncing'));
      RewardsStore.savePrograms(programs);

      setTimeout(() => {
        const fresh = RewardsStore.getPrograms();
        fresh.forEach(p => {
          p.status = 'connected';
          p.lastSynced = 'Just now';
        });
        RewardsStore.savePrograms(fresh);
        resolve();
      }, 1200);
    });
  },

  // Gift Cards
  getGiftCards: (): GiftCard[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GIFTCARDS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Error loading gift cards', e);
    }
    RewardsStore.saveGiftCards(INITIAL_GIFTCARDS);
    return INITIAL_GIFTCARDS;
  },

  saveGiftCards: (cards: GiftCard[]) => {
    localStorage.setItem(STORAGE_KEYS.GIFTCARDS, JSON.stringify(cards));
    notifyStateChange();
  },

  addGiftCard: (card: Omit<GiftCard, 'id'>) => {
    const cards = RewardsStore.getGiftCards();
    const newCard: GiftCard = {
      ...card,
      id: `gc-${Date.now()}`,
    };
    cards.unshift(newCard);
    RewardsStore.saveGiftCards(cards);
    return newCard;
  },

  spendGiftCard: (id: string, amount: number): boolean => {
    const cards = RewardsStore.getGiftCards();
    const card = cards.find(c => c.id === id);
    if (!card || card.balance < amount) return false;

    card.balance = +(card.balance - amount).toFixed(2);
    card.lastUsed = `Today ($${amount.toFixed(2)} spent)`;
    RewardsStore.saveGiftCards(cards);

    RewardsStore.addTransaction({
      date: 'Just now',
      program: card.name,
      description: `Spent $${amount.toFixed(2)} in-store/online`,
      type: 'redeem',
      amount: amount,
      unit: 'USD',
      dollarValue: amount,
    });
    return true;
  },

  // Warranties
  getWarranties: (): WarrantyItem[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WARRANTIES);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Error loading warranties', e);
    }
    RewardsStore.saveWarranties(INITIAL_WARRANTIES);
    return INITIAL_WARRANTIES;
  },

  saveWarranties: (warranties: WarrantyItem[]) => {
    localStorage.setItem(STORAGE_KEYS.WARRANTIES, JSON.stringify(warranties));
    notifyStateChange();
  },

  addWarranty: (warranty: Omit<WarrantyItem, 'id'>) => {
    const warranties = RewardsStore.getWarranties();
    const newWarranty: WarrantyItem = {
      ...warranty,
      id: `war-${Date.now()}`,
    };
    warranties.unshift(newWarranty);
    RewardsStore.saveWarranties(warranties);
    return newWarranty;
  },

  deleteWarranty: (id: string) => {
    const warranties = RewardsStore.getWarranties().filter(w => w.id !== id);
    RewardsStore.saveWarranties(warranties);
  },

  // Expiration Radar Helper: returns chronological urgent items across all sources
  getExpiringRadarItems: (): ExpiringRadarItem[] => {
    const programs = RewardsStore.getPrograms();
    const giftCards = RewardsStore.getGiftCards();
    const warranties = RewardsStore.getWarranties();

    const radarList: ExpiringRadarItem[] = [];

    // 1. Programs expiring
    programs.forEach(p => {
      if (p.expiresDays < 60 && p.expiresDays > 0) {
        let rewardValue = `$${p.valueUsd.toFixed(2)}`;
        let badgeText = `${p.points.toLocaleString()} ${p.pointsName}`;
        if (p.id === 'dominos') {
          rewardValue = 'Free Medium Pizza';
          badgeText = '60 Points Ready';
        } else if (p.id === 'tacobell') {
          rewardValue = 'Free Gordita Crunch';
          badgeText = 'Fire Tier Reward';
        } else if (p.id === 'starbucks') {
          rewardValue = 'Handcrafted Drink';
          badgeText = `${p.points} Stars`;
        } else if (p.id === 'target') {
          rewardValue = `$${p.valueUsd.toFixed(2)} Cash`;
          badgeText = 'Circle Earnings';
        }

        radarList.push({
          id: `radar-prog-${p.id}`,
          type: 'reward',
          title: p.name,
          brand: p.name,
          category: p.category,
          detail: p.notes || `Expires in ${p.expiresIn}`,
          rewardValue,
          expiresDays: p.expiresDays,
          expiresIn: p.expiresIn,
          isUrgent: p.expiresDays <= 7,
          badgeText,
          notes: p.notes,
          barcode: p.barcode,
          originalItem: p,
        });
      }
    });

    // 2. Gift cards expiring
    giftCards.forEach(g => {
      if (g.isExpiringSoon) {
        radarList.push({
          id: `radar-gc-${g.id}`,
          type: 'giftcard',
          title: g.name,
          brand: g.brand,
          category: 'Gift Card',
          detail: `Balance: $${g.balance.toFixed(2)} • Card: •••• ${g.cardNumber.slice(-4)}`,
          rewardValue: `$${g.balance.toFixed(2)}`,
          expiresDays: 14,
          expiresIn: g.expiresIn,
          isUrgent: true,
          badgeText: `$${g.balance.toFixed(2)} Balance`,
          barcode: g.barcode,
          originalItem: g,
        });
      }
    });

    // 3. Warranties expiring
    warranties.forEach(w => {
      if (w.isExpiringSoon || w.expiresDays <= 60) {
        radarList.push({
          id: `radar-war-${w.id}`,
          type: 'warranty',
          title: w.productName,
          brand: w.brand,
          category: w.coverageType,
          detail: w.notes || `Coverage ends in ${w.expiresDays} days`,
          rewardValue: 'Coverage Ending',
          expiresDays: w.expiresDays,
          expiresIn: `${w.expiresDays} days`,
          isUrgent: w.expiresDays <= 7,
          badgeText: `${w.expiresDays} Days Left`,
          notes: w.notes,
          originalItem: w,
        });
      }
    });

    // Sort ascending by days remaining
    return radarList.sort((a, b) => a.expiresDays - b.expiresDays);
  },

  // Goals
  getGoals: (): RewardGoal[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GOALS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Error loading goals', e);
    }
    return INITIAL_GOALS;
  },

  // Bonuses
  getBonuses: (): TransferBonusOffer[] => {
    return INITIAL_BONUSES;
  },

  // Transactions
  getTransactions: (): RewardTransaction[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Error loading transactions', e);
    }
    RewardsStore.saveTransactions(INITIAL_TRANSACTIONS);
    return INITIAL_TRANSACTIONS;
  },

  saveTransactions: (txs: RewardTransaction[]) => {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(txs));
    notifyStateChange();
  },

  addTransaction: (tx: Omit<RewardTransaction, 'id'>) => {
    const txs = RewardsStore.getTransactions();
    const newTx: RewardTransaction = {
      ...tx,
      id: `tx-${Date.now()}`,
    };
    txs.unshift(newTx);
    RewardsStore.saveTransactions(txs.slice(0, 20));
  },

  // Summary Metrics
  getMetrics: (): RewardsMetrics => {
    const programs = RewardsStore.getPrograms();
    const cards = RewardsStore.getGiftCards();
    const warranties = RewardsStore.getWarranties();

    const programsValue = programs.reduce((acc, p) => acc + p.valueUsd, 0);
    const giftCardsValue = cards.reduce((acc, c) => acc + c.balance, 0);
    const totalNetWorth = +(programsValue + giftCardsValue).toFixed(2);

    const totalPoints = programs.reduce((acc, p) => acc + p.points, 0);
    const expiringProgramsCount = programs.filter(p => p.isExpiringSoon).length;
    const expiringGiftCardsCount = cards.filter(c => c.isExpiringSoon).length;
    const expiringWarrantiesCount = warranties.filter(w => w.isExpiringSoon).length;

    const categoryTotals: Record<string, { points: number; valueUsd: number }> = {};
    programs.forEach(p => {
      if (!categoryTotals[p.category]) {
        categoryTotals[p.category] = { points: 0, valueUsd: 0 };
      }
      categoryTotals[p.category].points += p.points;
      categoryTotals[p.category].valueUsd += p.valueUsd;
    });

    return {
      totalNetWorth,
      programsValue: +programsValue.toFixed(2),
      giftCardsValue: +giftCardsValue.toFixed(2),
      totalPoints,
      programsCount: programs.length,
      giftCardsCount: cards.length,
      warrantiesCount: warranties.length,
      expiringCount: expiringProgramsCount + expiringGiftCardsCount + expiringWarrantiesCount,
      categoryTotals,
    };
  },

  // Reset to fresh demo state
  resetAll: () => {
    localStorage.removeItem(STORAGE_KEYS.PROGRAMS);
    localStorage.removeItem(STORAGE_KEYS.GIFTCARDS);
    localStorage.removeItem(STORAGE_KEYS.WARRANTIES);
    localStorage.removeItem(STORAGE_KEYS.GOALS);
    localStorage.removeItem(STORAGE_KEYS.TRANSACTIONS);
    RewardsStore.savePrograms(INITIAL_PROGRAMS);
    RewardsStore.saveGiftCards(INITIAL_GIFTCARDS);
    RewardsStore.saveWarranties(INITIAL_WARRANTIES);
    RewardsStore.saveTransactions(INITIAL_TRANSACTIONS);
    notifyStateChange();
  },
};
