const fs = require('fs');
const files = ['Slide1.tsx', 'Slide2.tsx', 'Slide3.tsx', 'Slide4.tsx', 'Slide5.tsx', 'Slide6.tsx'];
files.forEach(f => {
  let p = 'b:/PHARMACOM POSTS/METRICAS PHARMACOM/PADRAO APRESENTAÇÃO/src/components/' + f;
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/const H = mobile \? 1900 : 1080;/g, 'const H = mobile ? 1440 : 1080;');
  fs.writeFileSync(p, content);
});
