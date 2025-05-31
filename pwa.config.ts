import type { Config } from './types';

export default {
  id: '/',
  name: 'Catatan Filsafat',
  shortName: 'Filsafat',
  description: 'Temukan esai, analisis, dan refleksi filosofis yang akan memperluas wawasan Anda tentang pertanyaan-pertanyaan mendasar dalam hidup.',
  direction: 'auto',
  language: 'id-ID',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Esai Reflektif',
      shortName: 'Esai Reflektif',
      description: 'Esai Reflektif',
      url: '/search/label/Esai Reflektif?utm_source=homescreen',
    },
    {
      name: 'Tokoh Filsuf',
      shortName: 'Tokoh Filsuf',
      description: 'Tokoh Filsuf',
      url: '/search/label/Tokoh Filsuf?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: 'bf3b6b51-e521-462c-8137-86f8ab0efba8',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.onenews.my.id/',
} satisfies Config;
