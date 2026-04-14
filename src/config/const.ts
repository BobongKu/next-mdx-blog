export const baseDomain = 'https://bobong.blog';

export const blogName = 'Bobong Blog';
export const blogDesc =
  '보안 취약점 분석, 웹 해킹, 인프라 보안 기술 블로그 | Web Hacking & Infosec';
export const blogAuthor = 'Bobong';
export const blogKeywords = [
  '보안',
  '웹 해킹',
  '취약점 분석',
  '정보보안',
  'infosec',
  'web hacking',
  'penetration testing',
  'CTF',
  'cybersecurity',
];

export const CATEGORY_COLORS: Record<string, { active: string; palette: string }> = {
  'basic skill': { active: '#e0f2fe', palette: '#e0f2fe,#7dd3fc,#0ea5e9' },
  'advanced skill': { active: '#fecdd3', palette: '#fecdd3,#fda4af,#e11d48' },
  development: { active: '#fef08a', palette: '#fef08a,#fde047,#eab308' },
  etc: { active: '#dcfce7', palette: '#dcfce7,#86efac,#22c55e' },
  all: { active: '#e3e3e3', palette: '#f8fafc,#f1f5f9,#cbd5e1' },
  default: { active: '#e3e3e3', palette: '#f8fafc,#f1f5f9,#cbd5e1' },
};

export const getCategoryColors = (category: string) => {
  return CATEGORY_COLORS[category.toLowerCase()] || CATEGORY_COLORS['default'];
};
