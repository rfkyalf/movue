import {
  ComputerDesktopIcon,
  DeviceTabletIcon,
  TvIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/vue/24/outline';

export const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';
export const IMAGE_ENDPOINT_MEDIUM = 'https://image.tmdb.org/t/p/w342';
export const IMAGE_ENDPOINT_SMALL = 'https://image.tmdb.org/t/p/w154';

export const DEVICE_LIST = [
  {
    icon: DevicePhoneMobileIcon,
    title: 'Smartphones',
    desc: 'MoVue is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.',
  },
  {
    icon: DeviceTabletIcon,
    title: 'Tablets',
    desc: 'MoVue works seamlessly on Android and iOS tablets, providing an immersive viewing experience on larger screens.',
  },
  {
    icon: TvIcon,
    title: 'Smart TV',
    desc: 'Enjoy MoVue directly on your Smart TV through our native app or built-in casting features for maximum comfort.',
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Laptops',
    desc: 'MoVue is accessible on all major web browsers, offering high-quality streaming on your laptop or desktop.',
  },
];

export const FAQ_LIST = [
  {
    question: 'What is MoVue?',
    answer:
      'MoVue is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'Is MoVue free to use?',
    answer:
      'Yes, MoVue offers a free version with limited features and a premium version with additional content.',
  },
  {
    question: 'How do I create an account?',
    answer:
      'You don’t need to create an account to use MoVue. Just start watching content right away!',
  },
  {
    question: 'What devices are supported?',
    answer:
      'MoVue supports web browsers, smartphones, tablets, smart TVs, and streaming devices like Chromecast.',
  },
  {
    question: 'Is there an offline mode?',
    answer:
      'Currently, MoVue does not support offline downloads. You can stream content online at any time.',
  },
  {
    question: 'How can I report issues or bugs?',
    answer:
      'You can contact our support team via the "Help & Support" section on our website.',
  },
  {
    question: 'Is parental control available?',
    answer:
      'Yes, MoVue provides parental control settings to restrict content based on age ratings.',
  },
  {
    question: 'How often is new content added?',
    answer:
      'New content is added weekly, including movies, TV shows, and exclusive MoVue Originals.',
  },
];

export const PLAN_LIST = [
  {
    id: 1,
    name: 'Basic Plan',
    description:
      'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
    monthlyPrice: '9.99',
    yearlyPrice: '99.99',
  },
  {
    id: 2,
    name: 'Standard Plan',
    description:
      'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
    monthlyPrice: '12.99',
    yearlyPrice: '129.99',
  },
  {
    id: 3,
    name: 'Premium Plan',
    description:
      'Access to the widest selection of movies and shows, including all new releases and Offline Viewing.',
    monthlyPrice: '14.99',
    yearlyPrice: '149.99',
  },
];

export const NAV_LIST = [
  { name: 'Home', href: '/' },
  {
    name: 'Movies',
    href: '/movies',
  },
  {
    name: 'TV Shows',
    href: '/shows',
  },
];
