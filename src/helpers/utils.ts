import moment from 'moment';

export const formatToUSDate = (dateString: string) => {
  if (!dateString) return '';
  return moment(dateString).format('MMM D, YYYY');
};

export const formatRuntime = (runtime: number) => {
  if (!runtime || runtime < 0) return '0m';
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours > 0 ? `${hours}h ` : ''}${
    minutes > 0 ? `${minutes}m` : ''
  }`.trim();
};

export const formatDollar = (amount: number) => {
  if (isNaN(amount)) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
