// Edit author URLs here. Publication entries only need a matching data-author key.
window.AUTHOR_LINKS = Object.freeze({
  'qi-wang': 'https://qiwang233.github.io/',
  'tianyi-wang': 'https://wangskyone.github.io/',
  'hongdi-yang': 'https://github.com/Young2647',
  'chengyang-li': 'https://lichy2004.github.io/',
  'shikun-ban': 'https://scholar.google.com/citations?user=cVQDX5UAAAAJ&hl=en',
  'yurun-chen': 'https://scholar.google.com/scholar?q=%22Yurun+Chen%22+robotics',
  'yizhong-ge': 'https://scholar.google.com/scholar?q=%22Yizhong+Ge%22+robotics',
  'jason-qin': 'https://asonin.github.io/',
  'chengtai-li': 'https://scholar.google.com/citations?user=vYL7B1UAAAAJ&hl=en',
  'wentao-zhu': 'https://wentao.live/about.html',
  'yuan-xu': 'https://xy02-05.github.io/',
  'youheng-shi': 'https://github.com/shiyouheng',
  'yizhou-wang': 'https://cfcs.pku.edu.cn/wangyizhou/',
  'kaiyi-xiong': 'https://github.com/honghongbear',
  'lei-qian': 'https://qll-ccdd.github.io/',
  'zhenxuan-wu': 'https://github.com/atcpigeon',
  'gaozheng-li': 'https://github.com/Gozier130',
  'jingya-wang': 'https://faculty.sist.shanghaitech.edu.cn/faculty/wangjingya/',
  'jingyi-yu': 'https://www.yu-jingyi.com/',
  'zhuo-su': 'https://suzhuo.github.io/',
  'lan-xu': 'https://www.xu-lan.com/'
});

document.querySelectorAll('[data-author]').forEach((authorElement) => {
  const authorUrl = window.AUTHOR_LINKS[authorElement.dataset.author];

  if (authorUrl) {
    authorElement.href = authorUrl;
  }
});
