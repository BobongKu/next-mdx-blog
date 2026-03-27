import IconGithub from '@/components/icon/Github';

export const RESUME_DATA = {
  name: 'Bobong',
  initials: 'Bo',
  oldLink: 'https://notion-next-x-bobongkus-projects.vercel.app/',
  location: '대한민국 서울특별시',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: 'White H4cker 😎',
  summary:
    '화이트 해커로 활동하며 웹, 모바일, AD, IoT 등 다양한 분야의 모의해킹을 수행하고 있습니다. 또한, 정보보안 관련 지식을 정리하여 블로그에 공유하고 있습니다.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/42234678?v=4',
  contact: {
    email: 'jhbgjy7@gmail.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/BobongKu',
        icon: IconGithub,
      },
    ],
  },
  skills: ['Web Hacking', 'Mobile Hacking', 'Reversing', 'AD Pentest', 'IoT Pentest', 'Next.js'],
  awards: ['2020 KUCIS 대학정보보호동아리 공로상', '2023 사이버호남컨퍼런스 웹 취약점 대회 장려상',],
  team: 'SOTI(Security Over Tech&Info)',
  bucketlist: ['정보보안기사 취득', 'Defcon 본선 진출', 'CVE 10개 등록']
} as const;
