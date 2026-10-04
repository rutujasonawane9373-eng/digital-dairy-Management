/**
 * DIGITAL DAIRY MANAGEMENT SYSTEM
 * Local Sample Data - Realistic procurement, quality, telemetry & financial records
 * Note: Pure local data representation for college viva and UI demonstration.
 */

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string;
  category?: 'core' | 'operations' | 'admin';
}

export interface KpiMetric {
  id: string;
  title: string;
  value: string;
  unit?: string;
  subtitle: string;
  icon: string;
  trend: string;
  trendDirection: 'up' | 'down' | 'neutral';
  colorTheme: 'emerald' | 'sky' | 'amber' | 'rose' | 'indigo' | 'slate';
  progressValue?: number;
}

export interface MilkIntakeRecord {
  id: string;
  farmerId: string;
  farmerName: string;
  cluster: string;
  avatarUrl: string;
  cattleType: 'Cow' | 'Buffalo';
  quantityLiters: number;
  fatPercent: number;
  snfPercent: number;
  ratePerLiter: number;
  totalAmount: number;
  collectionTime: string;
  shift: 'Morning' | 'Evening';
  status: 'Approved' | 'Pending Audit' | 'Rejected';
}

export interface PaymentActivity {
  id: string;
  farmerId: string;
  farmerName: string;
  bankName: string;
  accountLastFour?: string;
  utrNumber: string;
  amount: number;
  paymentMode: 'UPI Auto-Pay' | 'NEFT' | 'IMPS' | 'Cash';
  status: 'Settled' | 'Processing' | 'On Hold';
  timestamp: string;
}

export interface DailyCollectionTrend {
  day: string;
  fullDate: string;
  cowVolume: number;
  buffaloVolume: number;
  totalVolume: number;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/', category: 'core' },
  { id: 'farmers', label: 'Farmers', icon: 'groups', href: '#farmers', badge: '482', category: 'core' },
  { id: 'milk-collection', label: 'Milk Collection', icon: 'water_drop', href: '#milk-collection', badge: 'LIVE', category: 'operations' },
  { id: 'milk-quality', label: 'Milk Quality', icon: 'biotech', href: '#milk-quality', category: 'operations' },
  { id: 'payments', label: 'Payments', icon: 'payments', href: '#payments', badge: 'Due', category: 'operations' },
  { id: 'customers', label: 'Customers', icon: 'storefront', href: '#customers', category: 'operations' },
  { id: 'products', label: 'Products', icon: 'inventory_2', href: '#products', category: 'operations' },
  { id: 'orders', label: 'Orders', icon: 'local_shipping', href: '#orders', category: 'operations' },
  { id: 'reports', label: 'Reports', icon: 'analytics', href: '#reports', category: 'admin' },
  { id: 'settings', label: 'Settings', icon: 'settings', href: '#settings', category: 'admin' },
];

export const COOPERATIVE_INFO = {
  name: 'Digital Dairy Management System',
  shortName: 'Digital Dairy',
  tagline: 'Cooperative Milk Collection & Telemetry OS',
  branch: 'Central Chilling Center (Gate #2)',
  location: 'Anand Milk Cooperative Zone, Gujarat',
  activeShift: 'Morning Shift',
  shiftTiming: '06:00 AM – 11:30 AM',
  connectedEquipment: {
    weighScale: 'ESSAE DS-215 (Calibrated & Connected)',
    fatAnalyzer: 'MilkoScan Auto-Analyzer (Online)',
    tempSensor: 'Silo Tank #1: 3.8°C (Optimal)',
  },
  manager: {
    name: 'Rajesh Sharma',
    role: 'Dairy Manager & Quality Officer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDClP_vAM7sCB6t1vrws4CnLyUMEe4KPBseRyOaZOIrH-IloPi-5-_DWeNMcoT2_j-MHTTWHas8JDFEAgHBkNinurTgQu1Jk_KB05wJoBvT3penyrZfvNu_1GyJjwTzowUq0l8SQZj5YM3ec_1kb6pxQcOll7pPHV9eLaKX_0RSeWv4fAzbdVwNT3ilUAvRBW-wuHx7TbeTwOsBjnswYy6dF_rUvDjvSXLz8xhpfcshu1PXE1xBc8JVNw',
    email: 'rajesh.sharma@digitaldairy.in',
  },
};

export const KPI_DATA: KpiMetric[] = [
  {
    id: 'total-farmers',
    title: 'Total Farmers',
    value: '482',
    subtitle: '318 Delivered Today (66% Turnout)',
    icon: 'groups',
    trend: '+14 Registered This Month',
    trendDirection: 'up',
    colorTheme: 'emerald',
    progressValue: 66,
  },
  {
    id: 'milk-collection',
    title: "Today's Milk Collection",
    value: '3,428.5',
    unit: 'Liters',
    subtitle: 'Cow: 1,890 L • Buffalo: 1,538.5 L',
    icon: 'water_drop',
    trend: '+8.4% vs Yesterday',
    trendDirection: 'up',
    colorTheme: 'sky',
  },
  {
    id: 'today-revenue',
    title: "Today's Revenue",
    value: '₹1,48,260',
    unit: 'INR',
    subtitle: 'Avg Rate ₹43.20/L Across Batches',
    icon: 'currency_rupee',
    trend: '+12.3% vs Last Week',
    trendDirection: 'up',
    colorTheme: 'emerald',
  },
  {
    id: 'pending-payments',
    title: 'Pending Payments',
    value: '₹38,450',
    unit: 'INR',
    subtitle: '18 Farmers Pending Final Settlement',
    icon: 'schedule',
    trend: 'Due this Friday (Auto-UPI)',
    trendDirection: 'neutral',
    colorTheme: 'rose',
  },
  {
    id: 'total-customers',
    title: 'Total Customers',
    value: '145',
    subtitle: '82 Retail Booths • 63 B2B Dairies',
    icon: 'storefront',
    trend: '99.2% Order Fulfillment',
    trendDirection: 'up',
    colorTheme: 'indigo',
  },
  {
    id: 'total-products',
    title: 'Total Products',
    value: '12',
    unit: 'SKUs',
    subtitle: 'Pasteurized, Paneer, Ghee, Butter, Dahi',
    icon: 'inventory_2',
    trend: 'All Warehouses Stocked',
    trendDirection: 'up',
    colorTheme: 'amber',
  },
];

export const QUALITY_SUMMARY = {
  cowLiters: 1890.0,
  cowPercent: 55.1,
  buffaloLiters: 1538.5,
  buffaloPercent: 44.9,
  avgFat: 4.8,
  avgSnf: 8.6,
  avgRate: 43.20,
  laboratoryGrade: 'Grade A Certified',
  chillingTempCelsius: 3.8,
  purityPassRate: '100% Passed (Zero Adulteration)',
};

export const COLLECTION_TRENDS: DailyCollectionTrend[] = [
  { day: 'Mon', fullDate: 'Sep 29', cowVolume: 1720, buffaloVolume: 1400, totalVolume: 3120 },
  { day: 'Tue', fullDate: 'Sep 30', cowVolume: 1790, buffaloVolume: 1450, totalVolume: 3240 },
  { day: 'Wed', fullDate: 'Oct 01', cowVolume: 1750, buffaloVolume: 1430, totalVolume: 3180 },
  { day: 'Thu', fullDate: 'Oct 02', cowVolume: 1820, buffaloVolume: 1490, totalVolume: 3310 },
  { day: 'Fri', fullDate: 'Oct 03', cowVolume: 1810, buffaloVolume: 1480, totalVolume: 3290 },
  { day: 'Sat', fullDate: 'Oct 04', cowVolume: 1860, buffaloVolume: 1520, totalVolume: 3380 },
  { day: 'Sun', fullDate: 'Today', cowVolume: 1890, buffaloVolume: 1538.5, totalVolume: 3428.5 },
];

export const RECENT_INTAKES: MilkIntakeRecord[] = [
  {
    id: 'INT-901',
    farmerId: '#F-104',
    farmerName: 'Ramesh Patel',
    cluster: 'Gokul Dairy Cluster',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRVQR2H-GGerm-8izaLVjzbf7V1P8tqzqCr6qQ6L6EXW8UlCC3mqEJ9IfKGuFZWlCrbHq_UVFsULDQm8_lViHegJKwr4G442dEOPEruV0GIC-5OjQHHw8vTETD8x3D-tHYulR9ey7z1f15fU18HlTsApjXzPrxCR7ixhPUXxKVRUCS18gN11Lky0Gy6-jRJ2iJk1TI6hXSq-sZKrCycSZKDstCnjn1HrcjAEycXd6bf9i2GFmCNPw3Nw',
    cattleType: 'Buffalo',
    quantityLiters: 18.5,
    fatPercent: 6.8,
    snfPercent: 9.1,
    ratePerLiter: 54.40,
    totalAmount: 1006.40,
    collectionTime: '07:42 AM',
    shift: 'Morning',
    status: 'Approved',
  },
  {
    id: 'INT-902',
    farmerId: '#F-089',
    farmerName: 'Sunita Devi',
    cluster: 'Anand Cooperative Wing',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlrlyW-Yu4iw5EkmqCTzExcspJYvJSj3BK5zM-UdUnxW2pT9WJrmTkCJlFX_s--LYHjkJrI8UKW4VrerA8CpUlBqchqCd6TW4tPVz-VakYhf2a9YihJ_g52IebmWpVOlXdNfZ_N4WI0nUCfXltqI2QQCOdyg24tfwxbyAOUJlQVZZxM6aukxYfxhrVel6TDndvssyKmyLQShJYBiNZSyFLYwiudsrzS169alBlyy4vY_Z5jMuvVhuUpQ',
    cattleType: 'Cow',
    quantityLiters: 14.0,
    fatPercent: 4.2,
    snfPercent: 8.5,
    ratePerLiter: 38.50,
    totalAmount: 539.00,
    collectionTime: '07:38 AM',
    shift: 'Morning',
    status: 'Approved',
  },
  {
    id: 'INT-903',
    farmerId: '#F-212',
    farmerName: 'Vikram Singh',
    cluster: 'Shri Krishna Farm',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu4dpqjFzsR3KWw2NsJZkIAz1fTjhCmOnvTDLNpEM4wtHTmiL5TXDj9Tu6L_9Lro07tP5p5kPq23PTL7kE-sbpBdLjXY7nOd67jOOg2GZkb56h-_iDwFPHjRFOCDXUQfPxjqLQXaQWunyVOxvhdNLSdrALj5sfoC9xwTbes0Smqm8bFvV6Eol2-zeZm8_yZSTEudoyEdbrAlBF4wRSao7dgzNxVUvuMH_WAe93UY_P6YTmdN-KK970Yg',
    cattleType: 'Buffalo',
    quantityLiters: 22.0,
    fatPercent: 7.1,
    snfPercent: 9.3,
    ratePerLiter: 56.80,
    totalAmount: 1249.60,
    collectionTime: '07:31 AM',
    shift: 'Morning',
    status: 'Approved',
  },
  {
    id: 'INT-904',
    farmerId: '#F-305',
    farmerName: 'Meena Choudhary',
    cluster: 'Navapura Society',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    cattleType: 'Cow',
    quantityLiters: 26.5,
    fatPercent: 4.5,
    snfPercent: 8.7,
    ratePerLiter: 41.20,
    totalAmount: 1091.80,
    collectionTime: '07:22 AM',
    shift: 'Morning',
    status: 'Approved',
  },
  {
    id: 'INT-905',
    farmerId: '#F-078',
    farmerName: 'Suresh Jadhav',
    cluster: 'Kheda Khurd Union',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    cattleType: 'Cow',
    quantityLiters: 31.0,
    fatPercent: 4.0,
    snfPercent: 8.4,
    ratePerLiter: 37.80,
    totalAmount: 1171.80,
    collectionTime: '07:15 AM',
    shift: 'Morning',
    status: 'Approved',
  },
  {
    id: 'INT-906',
    farmerId: '#F-144',
    farmerName: 'Anita Deshmukh',
    cluster: 'Ambika Puram Sector',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    cattleType: 'Buffalo',
    quantityLiters: 16.0,
    fatPercent: 6.9,
    snfPercent: 9.2,
    ratePerLiter: 55.20,
    totalAmount: 883.20,
    collectionTime: '07:08 AM',
    shift: 'Morning',
    status: 'Approved',
  },
];

export const RECENT_PAYMENTS: PaymentActivity[] = [
  {
    id: 'PAY-881',
    farmerId: '#F-044',
    farmerName: 'Kailash Meena',
    bankName: 'SBI Rural A/c ••8842',
    utrNumber: 'SBI920194881',
    amount: 8450.00,
    paymentMode: 'NEFT',
    status: 'Settled',
    timestamp: '07:45 AM',
  },
  {
    id: 'PAY-882',
    farmerId: '#F-132',
    farmerName: 'Pooja Sharma',
    bankName: 'Bank of Baroda ••3109',
    utrNumber: 'BOB920188432',
    amount: 4120.00,
    paymentMode: 'UPI Auto-Pay',
    status: 'Settled',
    timestamp: '07:35 AM',
  },
  {
    id: 'PAY-883',
    farmerId: '#F-176',
    farmerName: 'Harish Verma',
    bankName: 'HDFC Kisan A/c ••9021',
    utrNumber: 'HDF920172176',
    amount: 6890.00,
    paymentMode: 'IMPS',
    status: 'Settled',
    timestamp: '07:20 AM',
  },
  {
    id: 'PAY-884',
    farmerId: '#F-201',
    farmerName: 'Suman Patil',
    bankName: 'PNB Dairy A/c ••5512',
    utrNumber: 'PNB920165201',
    amount: 3240.00,
    paymentMode: 'UPI Auto-Pay',
    status: 'Processing',
    timestamp: '07:10 AM',
  },
  {
    id: 'PAY-885',
    farmerId: '#F-062',
    farmerName: 'Rajeshwari Rathore',
    bankName: 'Canara Bank ••4471',
    utrNumber: 'CAN920150062',
    amount: 9150.00,
    paymentMode: 'NEFT',
    status: 'Settled',
    timestamp: '06:55 AM',
  },
];

export const REVENUE_BREAKDOWN = {
  dailyProcurement: 148260.00,
  commercialWholesale: 184320.00,
  netOperatingMargin: 36060.00,
  paymentMethods: [
    { name: 'Direct UPI Auto-Pay', percent: 68, amount: '₹1,00,816.80', color: 'bg-emerald-600' },
    { name: 'Core NEFT / RTGS', percent: 24, amount: '₹35,582.40', color: 'bg-sky-600' },
    { name: 'Cash Counter Settlement', percent: 8, amount: '₹11,860.80', color: 'bg-amber-500' },
  ],
};
