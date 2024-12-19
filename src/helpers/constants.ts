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
