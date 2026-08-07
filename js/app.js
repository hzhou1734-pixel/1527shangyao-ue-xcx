
// ===== Data Models =====
const drugsData = [
  { id:1, name:'静注人免疫球蛋白(pH4)', spec:'武汉中原瑞德生物制品', spec2:'2.5g/50ml/瓶', img:'images/drug1.jpg', category:'immunoglobulin', stock:'3家在售', indications:'1. 原发性免疫球蛋白缺乏症，如X联锁低免疫球蛋白血症，常见变异性免疫缺陷病，免疫球蛋白G亚型缺陷病等。<br>2. 继发性免疫球蛋白缺陷病，如重症感染，新生儿败血症等。<br>3. 自身免疫性疾病，如原发性血小板减少性紫癜，川崎病等。', usage:'静脉滴注或以5%葡萄糖溶液稀释后静脉滴注。开始滴注速度为1.0ml/分钟（约20滴/分钟），持续15分钟后若无不良反应，可逐渐加快速度。最快滴注速度不得超过3.0ml/分钟（约60滴/分钟）。', contraindications:'1. 对人免疫球蛋白过敏或有其他严重过敏史者。<br>2. 有抗IgA抗体的选择性IgA缺乏者。<br>3. 本品仅供静脉输注用。', precautions:'1. 本品专供静脉输注，应在有抢救条件的医疗机构使用。<br>2. 本品呈现混浊、沉淀、异物或瓶身有裂纹、过期失效等情况不得使用。<br>3. 开瓶后应一次用完，未用完部分应废弃。<br>4. 运输及贮存过程中严禁冻结。', merchants:[1,2,3] },
  { id:2, name:'静注人免疫球蛋白(pH4)', spec:'四川远大蜀阳药业', spec2:'2.5g/瓶', img:'images/drug2.jpg', category:'immunoglobulin', stock:'2家在售', indications:'1. 原发性免疫球蛋白缺乏症，如X联锁低免疫球蛋白血症，常见变异性免疫缺陷病，免疫球蛋白G亚型缺陷病等。<br>2. 继发性免疫球蛋白缺陷病，如重症感染，新生儿败血症等。<br>3. 自身免疫性疾病，如原发性血小板减少性紫癜，川崎病等。', usage:'静脉滴注或以5%葡萄糖溶液稀释后静脉滴注。开始滴注速度为1.0ml/分钟（约20滴/分钟），持续15分钟后若无不良反应，可逐渐加快速度。', contraindications:'1. 对人免疫球蛋白过敏或有其他严重过敏史者。<br>2. 有抗IgA抗体的选择性IgA缺乏者。', precautions:'1. 本品专供静脉输注，应在有抢救条件的医疗机构使用。<br>2. 本品呈现混浊、沉淀、异物或瓶身有裂纹、过期失效等情况不得使用。', merchants:[2,4] },
  { id:3, name:'人血白蛋白', spec:'瑞士杰特贝林生物制品', spec2:'10g(20% 50ml)', img:'images/drug3.jpg', category:'albumin', stock:'4家在售', indications:'1. 失血创伤、烧伤引起的休克。<br>2. 脑水肿及损伤引起的颅压升高。<br>3. 肝硬化及肾病引起的水肿或腹水。<br>4. 低蛋白血症的补充。<br>5. 新生儿高胆红素血症。', usage:'静脉滴注。用量视病情而定，一般每次5~10g，每日1次或每8小时1次。滴注速度每分钟不超过2ml为宜。', contraindications:'1. 对白蛋白有严重过敏者。<br>2. 高血压患者、急性心脏病者慎用。', precautions:'1. 本品开启后应一次输注完毕，不得分次或给第二人输用。<br>2. 输注过程中如发现不适反应，应立即停止输用。<br>3. 严重贫血、心力衰竭者应慎用。', merchants:[1,2,3,7] },
  { id:4, name:'人血白蛋白', spec:'山东泰邦生物制品', spec2:'10g(20% 50ml)', img:'images/drug4.jpg', category:'albumin', stock:'3家在售', indications:'1. 失血创伤、烧伤引起的休克。<br>2. 脑水肿及损伤引起的颅压升高。<br>3. 肝硬化及肾病引起的水肿或腹水。<br>4. 低蛋白血症的补充。', usage:'静脉滴注。用量视病情而定，一般每次5~10g。滴注速度每分钟不超过2ml为宜。', contraindications:'1. 对白蛋白有严重过敏者。<br>2. 高血压患者慎用。', precautions:'1. 本品开启后应一次输注完毕。<br>2. 输注过程中如发现不适反应，应立即停止输用。', merchants:[1,3,5] },
  { id:5, name:'人血白蛋白', spec:'四川远大蜀阳药业', spec2:'10g(20% 50ml)', img:'images/drug5.jpg', category:'albumin', stock:'2家在售', indications:'1. 失血创伤、烧伤引起的休克。<br>2. 脑水肿及损伤引起的颅压升高。<br>3. 肝硬化及肾病引起的水肿或腹水。', usage:'静脉滴注。用量视病情而定，一般每次5~10g。', contraindications:'1. 对白蛋白有严重过敏者。', precautions:'1. 本品开启后应一次输注完毕，不得分次使用。', merchants:[3,6] },
  { id:6, name:'人血白蛋白', spec:'武汉中原瑞德生物制品', spec2:'20% 50ml', img:'images/drug6.jpg', category:'albumin', stock:'3家在售', indications:'1. 失血创伤、烧伤引起的休克。<br>2. 脑水肿及损伤引起的颅压升高。<br>3. 低蛋白血症的补充。', usage:'静脉滴注。用量视病情而定，一般每次5~10g。滴注速度每分钟不超过2ml为宜。', contraindications:'1. 对白蛋白有严重过敏者。', precautions:'1. 本品开启后应一次输注完毕。', merchants:[1,5,7] },
  { id:7, name:'人血白蛋白(安博灵)', spec:'瑞士杰特贝林生物制品', spec2:'10g(20% 50ml)', img:'images/drug3.jpg', category:'albumin', stock:'5家在售', indications:'1. 失血创伤、烧伤引起的休克。<br>2. 脑水肿及损伤引起的颅压升高。<br>3. 肝硬化及肾病引起的水肿或腹水。<br>4. 低蛋白血症的补充。<br>5. 新生儿高胆红素血症。', usage:'静脉滴注。用量视病情而定，一般每次5~10g。', contraindications:'1. 对白蛋白有严重过敏者。<br>2. 高血压患者慎用。', precautions:'1. 本品开启后应一次输注完毕。<br>2. 严重贫血、心力衰竭者应慎用。', merchants:[1,2,4,5,7] },
  { id:8, name:'破伤风人免疫球蛋白', spec:'华兰生物工程', spec2:'250IU/瓶', img:'', emoji:'💉', emojiBg:'#fff', category:'immunoglobulin', stock:'2家在售', indications:'主要用于预防和治疗破伤风感染，特别适用于对破伤风类毒素过敏的患者。', usage:'臀部肌肉注射。预防剂量：250IU，治疗剂量：3000~6000IU。', contraindications:'1. 对人免疫球蛋白过敏者禁用。<br>2. 严重血小板减少者禁用。', precautions:'1. 本品仅供肌肉注射，不可静脉输注。<br>2. 注射后局部可有轻微红肿，一般自行消退。', merchants:[4,7] },
  { id:9, name:'人凝血因子VIII', spec:'上海莱士血液制品', spec2:'200IU/瓶', img:'', emoji:'🧪', emojiBg:'#fff', category:'factor', stock:'1家在售', indications:'主要用于甲型血友病患者出血的治疗和预防。', usage:'静脉滴注。剂量根据出血严重程度和患者体重计算。', contraindications:'1. 对本品过敏者禁用。', precautions:'1. 配制后应立即使用。<br>2. 输注速度不宜过快。', merchants:[7] },
  { id:10, name:'人凝血酶原复合物', spec:'华兰生物工程', spec2:'300IU/瓶', img:'', emoji:'💊', emojiBg:'#fff', category:'factor', stock:'1家在售', indications:'主要用于凝血因子II、VII、IX、X缺乏所致的出血。', usage:'静脉滴注。用量视病情和所需提升的凝血因子水平而定。', contraindications:'1. 对本品过敏者禁用。', precautions:'1. 配制后应立即使用。<br>2. 使用期间注意监测凝血功能。', merchants:[7] },
  { id:11, name:'人纤维蛋白原', spec:'上海莱士血液制品', spec2:'0.5g/瓶', img:'', emoji:'🩸', emojiBg:'#fff', category:'factor', stock:'2家在售', indications:'主要用于先天性或获得性纤维蛋白原减少症所致的出血。', usage:'静脉滴注。用量视病情而定，一般每次1~2g。', contraindications:'1. 对本品过敏者禁用。<br>2. 血栓性静脉炎者禁用。', precautions:'1. 配制后应立即使用。<br>2. 使用期间注意监测纤维蛋白原水平。', merchants:[5,6] },
  { id:12, name:'乙型肝炎人免疫球蛋白', spec:'四川远大蜀阳药业', spec2:'200IU/瓶', img:'', emoji:'🧬', emojiBg:'#fff', category:'immunoglobulin', stock:'3家在售', indications:'主要用于乙型肝炎的被动免疫预防，包括母婴阻断等。', usage:'肌肉注射。预防剂量：200IU，母婴阻断：新生儿出生后24小时内注射。', contraindications:'1. 对人免疫球蛋白过敏者禁用。', precautions:'1. 本品仅供肌肉注射。<br>2. 应尽早注射，越早效果越好。', merchants:[2,4,8] },
  { id:13, name:'狂犬病人免疫球蛋白', spec:'华兰生物工程', spec2:'200IU/瓶', img:'', emoji:'🔬', emojiBg:'#fff', category:'immunoglobulin', stock:'2家在售', indications:'主要用于狂犬病暴露后的被动免疫，与狂犬病疫苗联合使用。', usage:'伤口周围浸润注射。剂量按20IU/kg体重计算。', contraindications:'1. 对人免疫球蛋白过敏者禁用。', precautions:'1. 注射前须做皮试。<br>2. 不得与疫苗在同一部位注射。', merchants:[1,5] }
];

const merchantsData = [
  { id:1, name:'仁济诊所(浦东店)', addr:'浦东新区张杨路500号', phone:'021-5888-XXXX', hours:'08:00-22:00', distance:'580m', distNum:0.58, icon:'🏥', iconBg:'var(--orange-light)', certified:true, drugs:[1,3,4,6,7], tags:['静注人免疫球蛋白','人血白蛋白'], drugCount:5, is24h:false, hero:'images/store1.svg', heroList:['images/store1.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg'] },
  { id:2, name:'国大诊所(徐汇店)', addr:'徐汇区漕溪北路200号', phone:'021-5466-XXXX', hours:'07:30-22:30', distance:'1.2km', distNum:1.2, icon:'🏪', iconBg:'var(--primary-light)', certified:true, drugs:[1,2,3,7], tags:['人血白蛋白','静注人免疫球蛋白'], drugCount:4, is24h:false, hero:'images/store2.svg', heroList:['images/store2.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg'] },
  { id:3, name:'益丰诊所(静安店)', addr:'静安区南京西路1200号', phone:'021-6299-XXXX', hours:'08:00-21:30', distance:'2.1km', distNum:2.1, icon:'🏥', iconBg:'#E8F0FE', certified:true, drugs:[1,3,5], tags:['人血白蛋白','静注人免疫球蛋白'], drugCount:2, is24h:false, hero:'images/store3.svg', heroList:['images/store3.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg'] },
  { id:4, name:'老百姓诊所(长宁店)', addr:'长宁区天山路800号', phone:'021-5207-XXXX', hours:'08:30-21:00', distance:'2.8km', distNum:2.8, icon:'🏪', iconBg:'#FFF3E8', certified:true, drugs:[2,7], tags:['人血白蛋白'], drugCount:2, is24h:false, hero:'images/store4.svg', heroList:['images/store4.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg'] },
  { id:5, name:'华氏诊所(杨浦店)', addr:'杨浦区控江路1500号', phone:'021-6519-XXXX', hours:'24小时营业', distance:'3.5km', distNum:3.5, icon:'🏥', iconBg:'#F3E8FC', certified:true, drugs:[4,6,7,11,13], tags:['静注人免疫球蛋白','人血白蛋白'], drugCount:6, is24h:true, hero:'images/store5.svg', heroList:['images/store5.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg','images/cert-gmp.svg'] },
  { id:6, name:'海王星辰诊所(虹口店)', addr:'虹口区四川北路1800号', phone:'021-6541-XXXX', hours:'08:00-22:00', distance:'4.2km', distNum:4.2, icon:'🏪', iconBg:'#E8FCF3', certified:true, drugs:[5,11], tags:['人血白蛋白'], drugCount:3, is24h:false, hero:'images/store6.svg', heroList:['images/store6.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg'] },
  { id:7, name:'第一医药诊所(黄浦店)', addr:'黄浦区南京东路600号', phone:'021-6322-XXXX', hours:'07:00-23:00', distance:'5.0km', distNum:5.0, icon:'🏥', iconBg:'#FCE8E8', certified:true, drugs:[3,6,7,8,9,10], tags:['静注人免疫球蛋白','人血白蛋白','凝血因子'], drugCount:5, is24h:false, hero:'images/store7.svg', heroList:['images/store7.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg','images/cert-gmp.svg'] },
  { id:8, name:'复美诊所(普陀店)', addr:'普陀区曹杨路800号', phone:'021-5290-XXXX', hours:'08:30-21:30', distance:'5.8km', distNum:5.8, icon:'🏪', iconBg:'#E8F0FE', certified:true, drugs:[12], tags:['人血白蛋白'], drugCount:1, is24h:false, hero:'images/store8.svg', heroList:['images/store8.svg','images/promo-main.png'], certs:['images/cert-business.svg','images/cert-pharma.svg'] }
];

// Current selected drug/merchant for detail & appointment context
let currentDrugId = 1;
let currentMerchantId = 1;

// ===== State =====
let currentPage = 'home';
let pageHistory = ['home'];
let isLoggedIn = false;
const USER_SESSION_KEY = 'sygo_user_session';
function getUserSession() { try { const r = localStorage.getItem(USER_SESSION_KEY); if (r) return JSON.parse(r); } catch (e) {} return null; }
function setUserSession(s) { try { localStorage.setItem(USER_SESSION_KEY, JSON.stringify(s)); } catch (e) {} }
function clearUserSession() { try { localStorage.removeItem(USER_SESSION_KEY); } catch (e) {} }
function syncUserLogin() { isLoggedIn = !!getUserSession(); }

// 上药GO 默认账户资料（未自定义时使用）
const SYGO_AVATAR = 'images/sygo-avatar.svg';
const SYGO_DEFAULT_NAME = '上药GO-331923';
function isPathAvatar(a) { return !!(a && (a.indexOf('/') > -1 || a.indexOf('http') === 0 || a.indexOf('data:') === 0)); }
function applyAvatar(el, avatar) {
  if (!el) return;
  if (isPathAvatar(avatar)) { el.innerHTML = '<img src="' + avatar + '" alt="头像">'; }
  else { el.textContent = avatar || '👤'; }
}
let loginTargetPage = null;
let loginPhone = '13800138000';
let swiperIndex = 0;

// ===== Swiper =====
function initSwiper() {
  setInterval(() => {
    swiperIndex = (swiperIndex + 1) % 3;
    document.getElementById('swiperTrack').style.transform = `translateX(-${swiperIndex * 100}%)`;
    document.querySelectorAll('.swiper-dot').forEach((d, i) => {
      d.classList.toggle('active', i === swiperIndex);
    });
  }, 1500);
}

// ===== Date Selector =====
function ymd(d) {
  const p = n => (n < 10 ? '0' : '') + n;
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}

function initDateSelector() {
  const container = document.getElementById('dateSelector');
  const weekdays = ['周日','周一','周二','周三','周四','周五','周六'];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const item = document.createElement('div');
    item.className = 'date-item' + (i === 0 ? ' selected' : '');
    item.innerHTML = `<span class="weekday">${i === 0 ? '今天' : weekdays[d.getDay()]}</span><span class="day">${d.getDate()}</span>`;
    item.dataset.date = ymd(d);
    item.onclick = function() {
      document.querySelectorAll('.date-item').forEach(el => el.classList.remove('selected'));
      this.classList.add('selected');
    };
    container.appendChild(item);
  }
}

// ===== Location =====
function showLocationModal() {
  document.getElementById('locationModal').classList.add('show');
}
function allowLocation() {
  const m = document.getElementById('locationModal'); if (m) m.classList.remove('show');
  const t = document.getElementById('locText'); if (t) t.textContent = '湖南省长沙市岳麓区';
  try { sessionStorage.setItem('userLocation', '湖南省长沙市岳麓区'); } catch(e) {}
}
function denyLocation() {
  const m = document.getElementById('locationModal'); if (m) m.classList.remove('show');
  const t = document.getElementById('locText'); if (t) t.textContent = '未获取定位 · 点击选择';
}

// ===== 手动定位：地图选点 =====
// ===== 省 / 市 / 区 三级联动数据 (含中心坐标, 用于地图定位) =====
// 省 / 市 / 区 三级联动数据：仅限湖南省内（授权定位与手动修改地址共用）
const REGION_DATA = {
  '湖南省': { center:[28.2282, 112.9388], cities: {
    '长沙市': { center:[28.2282, 112.9388], districts: {
      '芙蓉区':[28.1957, 112.9931], '天心区':[28.1852, 112.9713], '岳麓区':[28.2259, 112.9430],
      '开福区':[28.2446, 112.9823], '雨花区':[28.1593, 113.0273], '望城区':[28.3181, 112.8810],
      '长沙县':[28.2586, 113.1780], '宁乡市':[28.2767, 112.5510], '浏阳市':[28.1600, 113.6360]
    }},
    '株洲市': { center:[27.8294, 113.1341], districts: {
      '荷塘区':[27.8556, 113.1580], '芦淞区':[27.8220, 113.1360], '石峰区':[27.8701, 113.0930],
      '天元区':[27.8330, 113.0790], '渌口区':[27.7160, 113.1270], '醴陵市':[27.6618, 113.4950]
    }},
    '湘潭市': { center:[27.8294, 112.9447], districts: {
      '雨湖区':[27.8760, 112.9280], '岳塘区':[27.8520, 112.9540], '湘乡市':[27.7340, 112.5310], '韶山市':[27.9240, 112.5380]
    }},
    '衡阳市': { center:[26.8906, 112.5683], districts: {
      '雁峰区':[26.8800, 112.6060], '石鼓区':[26.9120, 112.6190], '珠晖区':[26.9010, 112.6420],
      '蒸湘区':[26.8960, 112.5830], '南岳区':[27.2340, 112.7440], '耒阳市':[26.4100, 112.8570], '常宁市':[26.4100, 112.3910]
    }},
    '邵阳市': { center:[27.2449, 111.4990], districts: {
      '双清区':[27.2460, 111.4800], '大祥区':[27.2250, 111.4680], '北塔区':[27.2630, 111.4480],
      '武冈市':[26.7280, 110.6310], '邵东市':[27.2610, 111.7290]
    }},
    '岳阳市': { center:[29.3550, 113.1320], districts: {
      '岳阳楼区':[29.3650, 113.1320], '云溪区':[29.4560, 113.2100], '君山区':[29.4290, 112.9790],
      '汨罗市':[28.8130, 113.0610], '临湘市':[29.4760, 113.4430]
    }},
    '常德市': { center:[29.0319, 111.3990], districts: {
      '武陵区':[29.0450, 111.3990], '鼎城区':[28.9990, 111.6740], '津市市':[29.6220, 111.8780]
    }},
    '张家界市': { center:[29.1170, 110.4790], districts: {
      '永定区':[29.1170, 110.4790], '武陵源区':[29.3270, 110.4880]
    }},
    '益阳市': { center:[28.5540, 112.3550], districts: {
      '资阳区':[28.6010, 112.3680], '赫山区':[28.5700, 112.3470], '沅江市':[28.8430, 112.3670]
    }},
    '郴州市': { center:[25.7700, 113.0110], districts: {
      '北湖区':[25.7780, 113.0110], '苏仙区':[25.7620, 113.0460], '资兴市':[25.9740, 113.2290]
    }},
    '永州市': { center:[26.4200, 111.6130], districts: {
      '零陵区':[26.2370, 111.6210], '冷水滩区':[26.4350, 111.5790], '祁阳市':[26.5790, 111.8560]
    }},
    '怀化市': { center:[27.5500, 110.0000], districts: {
      '鹤城区':[27.5500, 110.0000], '洪江市':[27.1650, 110.1740]
    }},
    '娄底市': { center:[27.7000, 111.9900], districts: {
      '娄星区':[27.7000, 111.9900], '冷水江市':[27.6900, 111.4310], '涟源市':[27.6900, 111.5600]
    }},
    '湘西土家族苗族自治州': { center:[28.3140, 109.7410], districts: {
      '吉首市':[28.3140, 109.7410], '泸溪县':[28.2670, 110.1070], '凤凰县':[27.9440, 109.5980]
    }}
  }}
};

// 各城市预设地名 (用于搜索定位)：仅限湖南省内
const MAP_POIS = {
  '长沙市': [
    { name:'五一广场', coord:[28.1957, 112.9388] },
    { name:'岳麓山', coord:[28.1680, 112.9460] },
    { name:'橘子洲', coord:[28.1870, 112.9570] },
    { name:'长沙火车站', coord:[28.1930, 113.0150] },
    { name:'梅溪湖', coord:[28.2080, 112.8690] },
    { name:'河西王府井', coord:[28.2259, 112.9430] }
  ]
};

let mapPickerMap = null;
let mapPickerMarker = null;
let currentPickerProvince = '湖南省';
let currentPickerCity = '长沙市';
let currentPickerDistrict = '岳麓区';
let selectedLocation = { province:'湖南省', city:'长沙市', district:'岳麓区', name:'', lat:28.2259, lng:112.9430 };

// ===== 省 / 市 / 区 三级联动渲染 =====
function renderRegionColumn(colEl, items, activeName, onPick) {
  colEl.innerHTML = '';
  items.forEach(name => {
    const opt = document.createElement('div');
    opt.className = 'region-opt' + (name === activeName ? ' active' : '');
    opt.textContent = name;
    opt.onclick = () => onPick(name);
    colEl.appendChild(opt);
  });
}

function renderProvinceCol() {
  const col = document.getElementById('regionProvinceCol');
  renderRegionColumn(col, Object.keys(REGION_DATA), currentPickerProvince, pickProvince);
  renderCityCol();
}

function renderCityCol() {
  const col = document.getElementById('regionCityCol');
  const cities = REGION_DATA[currentPickerProvince] ? Object.keys(REGION_DATA[currentPickerProvince].cities) : [];
  if (!cities.includes(currentPickerCity)) currentPickerCity = cities[0];
  renderRegionColumn(col, cities, currentPickerCity, pickCity);
  renderDistrictCol();
}

function renderDistrictCol() {
  const col = document.getElementById('regionDistrictCol');
  const city = REGION_DATA[currentPickerProvince] && REGION_DATA[currentPickerProvince].cities[currentPickerCity];
  const districts = city ? Object.keys(city.districts) : [];
  if (!districts.includes(currentPickerDistrict)) currentPickerDistrict = districts[0];
  renderRegionColumn(col, districts, currentPickerDistrict, pickDistrict);
}

function pickProvince(p) {
  currentPickerProvince = p;
  currentPickerCity = Object.keys(REGION_DATA[p].cities)[0];
  const city = REGION_DATA[p].cities[currentPickerCity];
  currentPickerDistrict = Object.keys(city.districts)[0];
  renderProvinceCol();
  applyRegionToMap();
}

function pickCity(c) {
  currentPickerCity = c;
  const city = REGION_DATA[currentPickerProvince].cities[c];
  currentPickerDistrict = Object.keys(city.districts)[0];
  renderCityCol();
  applyRegionToMap();
}

function pickDistrict(d) {
  currentPickerDistrict = d;
  renderDistrictCol();
  applyRegionToMap();
}

function applyRegionToMap() {
  const city = REGION_DATA[currentPickerProvince].cities[currentPickerCity];
  const coord = city.districts[currentPickerDistrict];
  document.getElementById('pickerCityName').textContent = currentPickerProvince + ' · ' + currentPickerCity + ' · ' + currentPickerDistrict;
  selectedLocation = { province:currentPickerProvince, city:currentPickerCity, district:currentPickerDistrict, name:'', lat:coord[0], lng:coord[1] };
  updateSelectedText();
  if (mapPickerMap) {
    mapPickerMap.setView(coord, 14);
    addOrMoveMarker(coord);
  }
  document.getElementById('mapSearchInput').value = '';
  document.getElementById('mapSearchResults').style.display = 'none';
}

function toggleCityList() {
  const panel = document.getElementById('cityPanel');
  const arrow = document.getElementById('cityArrow');
  const open = panel.style.display !== 'none';
  if (open) {
    panel.style.display = 'none';
    arrow.style.transform = 'rotate(0deg)';
  } else {
    panel.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
    renderProvinceCol();
  }
}

function showMapPicker() { location.href = 'map-picker.html'; }

function initMapPicker() {
  const container = document.getElementById('mapContainer');
  if (!window.L) {
    container.innerHTML = '<div style="padding:50px 20px;text-align:center;color:#999;font-size:14px;">地图组件加载失败<br>请检查网络后重试</div>';
    return;
  }
  const coord = REGION_DATA[currentPickerProvince].cities[currentPickerCity].districts[currentPickerDistrict];
  if (!mapPickerMap) {
    mapPickerMap = L.map('mapContainer').setView(coord, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 19
    }).addTo(mapPickerMap);
    mapPickerMap.on('click', function(e) {
      const ll = [e.latlng.lat, e.latlng.lng];
      addOrMoveMarker(ll);
      selectedLocation.lat = ll[0];
      selectedLocation.lng = ll[1];
      selectedLocation.name = '';
      updateSelectedText();
    });
  } else {
    mapPickerMap.invalidateSize();
  }
  mapPickerMap.setView(coord, 14);
  addOrMoveMarker(coord);
}

function addOrMoveMarker(coord) {
  if (!mapPickerMap) return;
  if (mapPickerMarker) {
    mapPickerMarker.setLatLng(coord);
  } else {
    mapPickerMarker = L.marker(coord, { draggable:true }).addTo(mapPickerMap);
    mapPickerMarker.on('dragend', function(e) {
      const p = e.target.getLatLng();
      selectedLocation.lat = p.lat;
      selectedLocation.lng = p.lng;
      selectedLocation.name = '';
      updateSelectedText();
    });
  }
}

function updateSelectedText() {
  const region = selectedLocation.province + '·' + selectedLocation.city + '·' + selectedLocation.district;
  const txt = selectedLocation.name ? region + ' ' + selectedLocation.name : region;
  document.getElementById('mapSelectedText').textContent = txt;
}

function doSearch() {
  const kw = (document.getElementById('mapSearchInput').value || '').trim();
  if (kw === '') { searchMapPlaces(''); return; }
  // 优先当前城市
  let match = (MAP_POIS[currentPickerCity] || []).filter(p => p.name.indexOf(kw) !== -1);
  let hitProvince = currentPickerProvince;
  let hitCity = currentPickerCity;
  // 当前城市无结果则跨城市搜索
  if (match.length === 0) {
    outer:
    for (const prov in REGION_DATA) {
      for (const c in REGION_DATA[prov].cities) {
        const found = (MAP_POIS[c] || []).filter(p => p.name.indexOf(kw) !== -1);
        if (found.length > 0) { match = found; hitProvince = prov; hitCity = c; break outer; }
      }
    }
  }
  if (match.length > 0 && mapPickerMap) {
    // 命中其它城市时，联动切换到该城市
    if (hitCity !== currentPickerCity) {
      currentPickerProvince = hitProvince;
      currentPickerCity = hitCity;
      currentPickerDistrict = Object.keys(REGION_DATA[hitProvince].cities[hitCity].districts)[0];
      document.getElementById('pickerCityName').textContent = currentPickerProvince + ' · ' + currentPickerCity + ' · ' + currentPickerDistrict;
      if (document.getElementById('cityPanel').style.display !== 'none') renderProvinceCol();
    }
    mapPickerMap.setView(match[0].coord, 15);
    addOrMoveMarker(match[0].coord);
    selectedLocation = { province:currentPickerProvince, city:currentPickerCity, district:currentPickerDistrict, name:'', lat:match[0].coord[0], lng:match[0].coord[1] };
    updateSelectedText();
  }
  // 下拉框展示命中城市的结果
  searchMapPlaces(kw, hitCity);
}

function searchMapPlaces(keyword, cityName) {
  const city = cityName || currentPickerCity;
  const box = document.getElementById('mapSearchResults');
  const kw = (keyword || '').trim();
  if (kw === '') {
    box.style.display = 'none';
    box.innerHTML = '';
    return;
  }
  const list = (MAP_POIS[city] || []).filter(p => p.name.indexOf(kw) !== -1);
  if (list.length === 0) {
    box.innerHTML = '<div class="map-search-empty">未找到相关地点</div>';
    box.style.display = 'block';
    return;
  }
  box.innerHTML = '';
  list.forEach(p => {
    const item = document.createElement('div');
    item.className = 'map-search-item';
    item.innerHTML = '<span>📍 ' + p.name + '</span><span style="color:#999;font-size:12px;">' + currentPickerProvince + '·' + city + '</span>';
    item.onclick = () => {
      selectedLocation.name = p.name;
      selectedLocation.lat = p.coord[0];
      selectedLocation.lng = p.coord[1];
      if (mapPickerMap) {
        mapPickerMap.setView(p.coord, 15);
        addOrMoveMarker(p.coord);
      }
      updateSelectedText();
      document.getElementById('mapSearchInput').value = p.name;
      box.style.display = 'none';
    };
    box.appendChild(item);
  });
  box.style.display = 'block';
}

function confirmLocation() {
  const region = selectedLocation.province + '·' + selectedLocation.city + '·' + selectedLocation.district;
  const addr = selectedLocation.name ? region + ' ' + selectedLocation.name : region;
  try { sessionStorage.setItem('userLocation', addr); } catch(e) {}
  showToast('已更新定位：' + addr);
  location.href = 'index.html';
}

// ===== 刷新定位 =====
function refreshLocation() {
  const btns = document.querySelectorAll('.loc-btn');
  btns.forEach(b => { b.disabled = true; b.style.opacity = '0.6'; });
  showToast('正在获取您的位置…');
  setTimeout(() => {
    document.getElementById('locText').textContent = '湖南省·长沙市岳麓区';
    selectedLocation = { province:'湖南省', city:'长沙市', district:'岳麓区', name:'岳麓区', lat:28.2259, lng:112.9430 };
    btns.forEach(b => { b.disabled = false; b.style.opacity = '1'; });
    showToast('已更新您的位置');
  }, 1000);
}

// ===== Navigation (MPA: 真实多页跳转) =====
const PAGE_FILE = {
  home:'index.html', search:'search.html', allDrugs:'all-drugs.html', allMerchants:'all-merchants.html',
  drugDetail:'drug-detail.html', merchantDetail:'merchant-detail.html', appointment:'appointment.html',
  myAppointments:'my-appointments.html', profile:'profile.html', about:'about.html',
  privacy:'privacy.html', agreement:'agreement.html', mapPicker:'map-picker.html', login:'login.html'
};
function getParam(name){ const p = new URLSearchParams(location.search); return p.get(name); }
function showPage(pageId){ const f = PAGE_FILE[pageId]; if (f) location.href = f; }
function switchTab(tab){ const map={home:'index.html',search:'search.html',academic:'academic.html',ai:'ai.html',myAppointments:'my-appointments.html',profile:'profile.html'}; location.href = map[tab] || 'index.html'; }
function goHome(){ location.href = 'index.html'; }
function goBack(){ if (history.length > 1) history.back(); else location.href = 'index.html'; }

// ===== Page Navigation =====
function goAllDrugs() { location.href = 'all-drugs.html'; }
function goAllMerchants() { location.href = 'all-merchants.html'; }

function filterDrugs(el, category) {
  el.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const items = document.querySelectorAll('#allDrugsPage .all-drug-item');
  let visibleCount = 0;
  items.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = '';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });
  const countEl = document.querySelector('#allDrugsPage .drug-count-num');
  if (countEl) countEl.textContent = visibleCount;
}

function filterMerchants(el, category) {
  el.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const items = document.querySelectorAll('#allMerchantsPage .all-merchant-item');
  items.forEach(item => {
    const itemCat = item.getAttribute('data-filter');
    if (category === 'all') {
      item.style.display = '';
    } else if (category === 'nearest' && parseFloat(item.getAttribute('data-distance')) <= 2) {
      item.style.display = '';
    } else if (category === 'mostDrugs' && parseInt(item.getAttribute('data-drugcount')) >= 4) {
      item.style.display = '';
    } else if (category === 'certified' && item.getAttribute('data-certified') === 'true') {
      item.style.display = '';
    } else if (category === '24h' && item.getAttribute('data-24h') === 'true') {
      item.style.display = '';
    } else if (category === 'all') {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
  // For "all", show everything; for specific filters, hide non-matching
  if (category === 'all') {
    items.forEach(item => item.style.display = '');
  }
}

/* ===== Home Featured Drugs: category TAB + dynamic grid ===== */
const CATEGORY_LABELS = {
  immunoglobulin: '免疫球蛋白',
  albumin: '人血白蛋白',
  factor: '凝血因子',
  vaccine: '疫苗制品'
};
const FEATURED_TAB_ORDER = ['immunoglobulin', 'albumin', 'factor', 'vaccine'];
let currentFeaturedCategory = 'all';

function getFeaturedCategoryList() {
  const present = [];
  FEATURED_TAB_ORDER.forEach(c => {
    if (drugsData.some(d => d.category === c)) present.push(c);
  });
  return present.map(c => ({ key: c, label: CATEGORY_LABELS[c] || c }));
}

function renderFeaturedTabs() {
  const box = document.getElementById('featuredTabs');
  if (!box) return;
  box.innerHTML = '';
  getFeaturedCategoryList().forEach(t => {
    const el = document.createElement('div');
    el.className = 'featured-tab' + (t.key === currentFeaturedCategory ? ' active' : '');
    el.textContent = t.label;
    el.onclick = () => switchFeaturedTab(t.key);
    box.appendChild(el);
  });
}

function switchFeaturedTab(category) {
  if (category === currentFeaturedCategory) return;
  currentFeaturedCategory = category;
  renderFeaturedTabs();
  renderFeaturedDrugs();
}

function renderFeaturedDrugs() {
  const grid = document.getElementById('featuredDrugGrid');
  if (!grid) return;
  const list = currentFeaturedCategory === 'all'
    ? drugsData
    : drugsData.filter(d => d.category === currentFeaturedCategory);
  // 每个 TAB 最多展示 4 个服务，保证首屏能同时看到服务与下方诊所
  const display = list.slice(0, 4);
  grid.innerHTML = '';
  display.forEach(d => {
    const card = document.createElement('div');
    card.className = 'drug-card';
    card.setAttribute('onclick', 'goDrugDetail(' + d.id + ')');
    const bg = d.img ? '#fff' : (d.emojiBg || 'var(--primary-light)');
    const imgHtml = d.img
      ? '<img src="' + d.img + '" alt="' + d.name + '">'
      : '<div style="font-size:34px;">' + (d.emoji || '💊') + '</div>';
    card.innerHTML =
      '<div class="drug-card-img" style="background:' + bg + ';">' + imgHtml + '</div>' +
      '<div class="drug-card-info">' +
        '<div class="drug-card-name">' + d.name + SERVICE_TITLE_SUFFIX + '</div>' +
        '<div class="drug-card-spec">' + d.spec + (d.spec2 ? ' · ' + d.spec2 : '') + '</div>' +
        '<div class="drug-card-bottom">' +
          '<div class="drug-card-price">' + (PLATFORM_SETTINGS.priceVisible ? ('<span class="yen">¥</span>' + (PRODUCT_PRICE_MAP[d.id] ? (PRODUCT_PRICE_MAP[d.id].min + ' - ' + PRODUCT_PRICE_MAP[d.id].suggested) : '--')) : '<span class="price-hidden">价格已隐藏</span>') + '</div>' +
          '<div class="drug-card-stock">' + d.stock + '</div>' +
        '</div>' +
      '</div>';
    grid.appendChild(card);
  });
}

function initFeaturedSection() {
  const list = getFeaturedCategoryList();
  if (!list.length) return;
  // 移除「全部」后，默认选中第一个真实分类，保证首屏有正确默认分类且展示对应药品
  if (!list.some(t => t.key === currentFeaturedCategory)) {
    currentFeaturedCategory = list[0].key;
  }
  renderFeaturedTabs();
  renderFeaturedDrugs();
}

function goDrugDetail(id) { location.href = 'drug-detail.html?id=' + id; }

// 服务详情渲染（在 drug-detail.html 加载时调用）
function renderDrugDetail(id) {
  currentDrugId = id;
  const drug = drugsData.find(d => d.id === id) || drugsData[0];
  const imgEl = document.querySelector('#drugDetailPage .drug-detail-img');
  if (imgEl) {
    if (drug.img) {
      imgEl.innerHTML = '<img src="' + drug.img + '" alt="' + drug.name + '">';
    } else {
      imgEl.innerHTML = '<span style="font-size:80px;">' + (drug.emoji || '💊') + '</span>';
      imgEl.style.background = drug.emojiBg || 'var(--primary-light)';
    }
  }
  const nEl = document.getElementById('drugDetailName'); if (nEl) nEl.innerHTML = escHtml(drug.name) + SERVICE_TITLE_SUFFIX;
  const sEl = document.getElementById('drugDetailSpec'); if (sEl) sEl.textContent = drug.spec;
  const s2El = document.getElementById('drugDetailSpec2'); if (s2El) s2El.textContent = drug.spec2;
  const priceEl = document.getElementById('drugDetailPrice');
  if (priceEl) {
    if (PLATFORM_SETTINGS.priceVisible && PRODUCT_PRICE_MAP[drug.id]) {
      const _pr = priceRangeOf(drug.id);
      priceEl.textContent = _pr.min + ' - ' + _pr.max;
    } else {
      priceEl.innerHTML = '<span class="price-hidden">价格已隐藏</span>';
    }
  }

  const introEl = document.getElementById('drugDetailIntro');
  if (introEl) {
    const section = (title, content) => '<div class="drug-detail-section"><div class="drug-detail-section-title">' + title + '</div><div class="drug-detail-section-body">' + (content || '—') + '</div></div>';
    introEl.innerHTML =
      section('适应症 / 功能主治', drug.indications) +
      section('用法用量', drug.usage) +
      section('禁忌', drug.contraindications) +
      section('注意事项', drug.precautions);
  }

  const nearbySection = document.querySelector('#drugDetailPage .nearby-merchant-section');
  if (nearbySection) {
    const availableMerchants = merchantsData.filter(m => drug.merchants && drug.merchants.includes(m.id))
      .slice().sort((a, b) => (a.distNum || 99) - (b.distNum || 99));
    let html = '<div class="drug-info-title">附近有货机构（按距离由近到远）</div>';
    availableMerchants.forEach(m => {
      const avatar = m.hero
        ? '<div class="nearby-merchant-avatar"><img src="' + m.hero + '" alt=""></div>'
        : '<div class="nearby-merchant-avatar">' + m.icon + '</div>';
      html += '<div class="nearby-merchant-item" onclick="goMerchantDetail(' + m.id + ')">'
        + avatar
        + '<div class="nearby-merchant-info">'
        + '<div class="nearby-merchant-name">' + m.name + (m.certified ? ' <span class="cert-badge">✓资质</span>' : '') + '</div>'
        + '<div class="nearby-merchant-addr">' + m.addr + '</div>'
        + '</div>'
        + '<div class="nearby-merchant-right">'
        + '<div class="nearby-merchant-dist">距您 ' + m.distance + '</div>'
        + '<div class="nearby-merchant-stock">有货</div>'
        + '</div></div>';
    });
    html += '<div class="loading-more">— 已显示全部诊所 —</div>';
    nearbySection.innerHTML = html;
  }

  renderDrugDetailFlow();
}

// 购药流程副标题（mock 文本，后续接真实接口替换）
const DRUG_DETAIL_SUBTITLE = '服务流程：提交预约单—联系诊所—预约服务';
// 所有服务标题统一后缀
const SERVICE_TITLE_SUFFIX = '<span class="svc-suffix">+ 取药服务预约</span>';
function renderDrugDetailFlow() {
  const el = document.getElementById('drugDetailSub');
  if (el) el.textContent = DRUG_DETAIL_SUBTITLE;
}

function goMerchantDetail(id) { location.href = 'merchant-detail.html?id=' + id; }

// 首页「附近诊所」按距离由近到远渲染（门头照 + 资质标签 + 距离）
function renderHomeMerchants() {
  const wrap = document.getElementById('homeMerchantList');
  if (!wrap) return;
  const list = merchantsData.slice().sort((a, b) => (a.distNum || 99) - (b.distNum || 99));
  wrap.innerHTML = list.map(m => {
    const hero = '<div class="merchant-card-img" style="background:' + (m.iconBg || 'var(--primary-light)') + ';">' + (m.icon || '🏥') + '</div>';
    return '<div class="merchant-card" onclick="goMerchantDetail(' + m.id + ')">'
      + '<div class="merchant-card-top">'
      + hero
      + '<div class="merchant-card-info">'
      + '<div class="merchant-card-name">' + m.name + (m.certified ? ' <span class="cert-badge">✓ 执业资质</span>' : '') + '</div>'
      + '<div class="merchant-card-addr">📍 ' + m.addr + '</div>'
      + '<div class="merchant-card-distance">距您 ' + m.distance + (m.drugCount ? ' · ' + m.drugCount + '款在售' : '') + '</div>'
      + '</div></div>'
      + '</div>';
  }).join('');
}

// 首页 banner 点击内链（示例跳转）
const BANNER_LINKS = ['all-drugs.html', 'appointment.html', 'all-merchants.html'];
function goBanner(idx) {
  const target = BANNER_LINKS[idx] || 'all-drugs.html';
  location.href = target;
}

// 查看更多-服务分类（渲染 .all-drug-item，复用 filterDrugs/sortDrugs）
function renderAllDrugs() {
  const wrap = document.getElementById('allDrugList');
  if (!wrap) return;
  const html = drugsData.map(d => {
    const carriers = merchantsData.filter(m => (d.merchants || []).includes(m.id));
    const minDist = carriers.length ? Math.min.apply(null, carriers.map(m => m.distNum || 99)) : 0;
    const stock = carriers.length;
    const bg = d.img ? '#fff' : (d.emojiBg || 'var(--primary-light)');
    const imgHtml = d.img
      ? '<img src="' + d.img + '" alt="' + d.name + '" style="width:100%;height:100%;object-fit:contain;">'
      : (d.emoji || '💊');
    const priceTxt = PLATFORM_SETTINGS.priceVisible && PRODUCT_PRICE_MAP[d.id]
      ? '<span class="yen">¥</span>' + PRODUCT_PRICE_MAP[d.id].min + ' - ' + PRODUCT_PRICE_MAP[d.id].suggested
      : '<span class="price-hidden">价格已隐藏</span>';
    return '<div class="all-drug-item" data-id="' + d.id + '" data-category="' + d.category + '" data-distance="' + minDist + '" data-stock="' + stock + '" onclick="goDrugDetail(' + d.id + ')">'
      + '<div class="all-drug-img" style="background:' + bg + ';display:flex;align-items:center;justify-content:center;font-size:28px;overflow:hidden;">' + imgHtml + '</div>'
      + '<div class="all-drug-info">'
      + '<div class="all-drug-name">' + d.name + SERVICE_TITLE_SUFFIX + '</div>'
      + '<div class="all-drug-meta">' + (d.spec || '') + (d.spec2 ? ' · ' + d.spec2 : '') + '</div>'
      + '<div class="all-drug-bottom"><span class="all-drug-price">' + priceTxt + '</span><span class="all-drug-stock">' + d.stock + '</span></div>'
      + '</div></div>';
  }).join('');
  wrap.innerHTML = html;
  const countEl = document.querySelector('#allDrugsPage .drug-count-num');
  if (countEl) countEl.textContent = drugsData.length;
}

// 诊所详情渲染（在 merchant-detail.html 加载时调用）
function renderMerchantDetail(id) {
  currentMerchantId = id;
  const merchant = merchantsData.find(m => m.id === id) || merchantsData[0];
  const hero = document.querySelector('#merchantDetailPage .merchant-detail-hero');
  if (hero) {
    const list = (merchant.heroList && merchant.heroList.length) ? merchant.heroList : (merchant.hero ? [merchant.hero] : []);
    if (list.length) {
      hero.innerHTML = '<div class="detail-hero-swiper">' + list.map(function (src, i) {
        return '<div class="detail-hero-slide"><img class="merchant-detail-hero-img" src="' + src + '" alt="诊所图片' + (i + 1) + '" onclick="openImagePreview(\'' + src + '\')"></div>';
      }).join('') + (list.length > 1 ? '<div class="detail-hero-dots">' + list.map(function (_, i) { return '<span class="detail-hero-dot' + (i === 0 ? ' active' : '') + '"></span>'; }).join('') + '</div>' : '') + '</div>';
    } else {
      hero.innerHTML = merchant.icon;
    }
  }

  const card = document.querySelector('#merchantDetailPage .merchant-detail-card');
  if (card) {
    const nameEl = card.querySelector('.merchant-detail-name');
    if (nameEl) nameEl.innerHTML = merchant.name + (merchant.certified ? ' <span class="cert-badge">✓ 执业资质</span>' : '');
    const rows = card.querySelectorAll('.merchant-detail-row');
    if (rows[0]) { const s = rows[0].querySelector('span'); if (s) s.textContent = merchant.addr; }
    if (rows[1]) { const a = rows[1].querySelector('a'); if (a) a.textContent = merchant.phone; }
    if (rows[2]) { const s = rows[2].querySelector('span'); if (s) s.textContent = '营业时间：' + merchant.hours; }
  }

  const drugSection = document.querySelector('#merchantDetailPage .nearby-merchant-section');
  if (drugSection) {
    const availableDrugs = drugsData.filter(d => merchant.drugs && merchant.drugs.includes(d.id));
    const catMap = { albumin: '白蛋白', factor: '凝血因子', immune: '免疫球蛋白', other: '其他' };
    const cats = [];
    availableDrugs.forEach(d => { const c = d.category || 'other'; if (cats.indexOf(c) < 0) cats.push(c); });
    let tabs = '<div class="md-service-tabs" id="mdServiceTabs">'
      + '<div class="md-service-tab active" data-cat="all" onclick="filterMerchantServices(\'all\')">全部</div>';
    cats.forEach(c => { tabs += '<div class="md-service-tab" data-cat="' + c + '" onclick="filterMerchantServices(\'' + c + '\')">' + (catMap[c] || c) + '</div>'; });
    tabs += '</div>';
    drugSection.innerHTML = '<div class="drug-info-title">可约服务</div>' + tabs + '<div id="mdServiceList"></div>';
    window.__mdMerchant = merchant; window.__mdCatMap = catMap;
    renderMerchantServiceList('all');
  }

  const certWrap = document.querySelector('#merchantDetailPage .cert-images');
  if (certWrap && merchant.certs && merchant.certs.length) {
    certWrap.innerHTML = merchant.certs.map(function (c) {
      return '<img class="cert-img" src="' + c + '" alt="资质证书" onclick="openImagePreview(\'' + c + '\')">';
    }).join('');
  }
}

function renderMerchantServiceList(cat) {
  const list = document.getElementById('mdServiceList'); if (!list) return;
  const merchant = window.__mdMerchant; if (!merchant) return;
  let drugs = drugsData.filter(d => merchant.drugs && merchant.drugs.includes(d.id));
  if (cat && cat !== 'all') drugs = drugs.filter(d => (d.category || 'other') === cat);
  let html = '';
  drugs.forEach(d => {
    const imgHtml = d.img
      ? '<div class="nearby-merchant-avatar"><img src="' + d.img + '" alt=""></div>'
      : '<div class="nearby-merchant-avatar" style="font-size:20px;">' + (d.emoji || '💊') + '</div>';
    const fixedPrice = (PLATFORM_SETTINGS.priceVisible && PRODUCT_PRICE_MAP[d.id]) ? getMerchantFixedPrice(d.id, merchant.id) : 0;
    const priceTxt = fixedPrice ? '¥' + fixedPrice + ' /份' : '';
    html += '<div class="nearby-merchant-item" onclick="goDrugDetail(' + d.id + ')">'
      + imgHtml
      + '<div class="nearby-merchant-info">'
      + '<div class="nearby-merchant-name">' + d.name + SERVICE_TITLE_SUFFIX + '</div>'
      + '<div class="nearby-merchant-addr">' + d.spec + ' · ' + d.spec2 + '</div>'
      + (priceTxt ? '<div class="nearby-merchant-price">' + priceTxt + '</div>' : '')
      + '</div>'
      + '<div class="nearby-merchant-right">'
      + '<div class="nearby-merchant-stock">有货</div>'
      + '<button class="btn-sm btn-sm-primary merchant-book-btn" onclick="event.stopPropagation(); bookDrugAtMerchant(' + d.id + ',' + merchant.id + ')">预约</button>'
      + '</div></div>';
  });
  list.innerHTML = html || '<div class="empty-tip">该分类暂无可约服务</div>';
  const tabs = document.getElementById('mdServiceTabs');
  if (tabs) tabs.querySelectorAll('.md-service-tab').forEach(t => t.classList.toggle('active', t.getAttribute('data-cat') === cat));
}
function filterMerchantServices(cat) { renderMerchantServiceList(cat); }

function goAppointment() {
  if (!isLoggedIn) { location.href = 'login.html?redirect=' + encodeURIComponent('appointment.html'); return; }
  location.href = 'appointment.html';
}
function goAppointmentForDrug() {
  if (!isLoggedIn) { location.href = 'login.html?redirect=' + encodeURIComponent('appointment.html?drug=' + currentDrugId); return; }
  location.href = 'appointment.html?drug=' + currentDrugId;
}

function goAppointmentWithMerchant() {
  if (!isLoggedIn) { location.href = 'login.html?redirect=' + encodeURIComponent('appointment.html'); return; }
  location.href = 'appointment.html';
}

function bookDrugAtMerchant(drugId, merchantId) {
  if (!isLoggedIn) { location.href = 'login.html?redirect=' + encodeURIComponent('appointment.html?drug=' + drugId + '&merchant=' + merchantId); return; }
  location.href = 'appointment.html?drug=' + drugId + '&merchant=' + merchantId;
}

function goMyAppointments() { location.href = 'my-appointments.html'; }

function goMerchantLogin() { location.href = 'merchant-login.html'; }

function goMerchantLogin() { location.href = 'merchant-login.html'; }

function getMerchantPasswordSet(id) { try { return localStorage.getItem('sygo_merchant_pwset_' + id) === '1'; } catch (e) {} return false; }
function setMerchantPasswordSet(id) { try { localStorage.setItem('sygo_merchant_pwset_' + id, '1'); } catch (e) {} }

function merchantAgreeChecked() { const el = document.getElementById('merchantAgree'); return el ? el.checked : false; }
function onMerchantAgreeChange() {
  const ok = merchantAgreeChecked();
  ['merchantPwdBtn', 'merchantCodeBtn'].forEach(id => { const b = document.getElementById(id); if (b) b.disabled = !ok; });
}
// 账号未设置密码时，仅允许验证码 / 微信验证登录
function refreshMerchantPwdTab() {
  const phone = document.getElementById('merchantLoginPhone');
  const phoneVal = phone ? phone.value.trim() : '';
  const acc = MERCHANT_ACCOUNTS.find(a => a.phone === phoneVal);
  const hint = document.getElementById('pwdHint');
  const pwdBtn = document.getElementById('merchantPwdBtn');
  if (acc && !getMerchantPasswordSet(acc.id)) {
    if (hint) hint.style.display = 'block';
    if (pwdBtn) pwdBtn.disabled = true;
    switchMerchantLoginTab('code');
  } else {
    if (hint) hint.style.display = 'none';
    if (pwdBtn) pwdBtn.disabled = false;
  }
}

let merchantPendingId = null;
function showMerchantSetPwd(id) {
  merchantPendingId = id;
  const modal = document.getElementById('merchantSetPwdModal');
  if (modal) modal.style.display = 'flex';
}
function closeMerchantSetPwd() {
  const modal = document.getElementById('merchantSetPwdModal');
  if (modal) modal.style.display = 'none';
  merchantPendingId = null;
}
function confirmMerchantSetPwd() {
  const p1 = document.getElementById('merchantNewPwd');
  const p2 = document.getElementById('merchantNewPwd2');
  const v1 = p1 ? p1.value : '';
  const v2 = p2 ? p2.value : '';
  if (!v1 || v1.length < 6) { showToast('密码至少6位'); return; }
  if (v1 !== v2) { showToast('两次输入的密码不一致'); return; }
  if (merchantPendingId != null) { setMerchantPassword(merchantPendingId, v1); setMerchantPasswordSet(merchantPendingId); }
  closeMerchantSetPwd();
  showToast('密码设置成功');
  setTimeout(() => { location.href = 'merchant.html'; }, 800);
}
function skipMerchantSetPwd() {
  closeMerchantSetPwd();
  showToast('已跳过，可稍后在「修改密码」中设置');
  setTimeout(() => { location.href = 'merchant.html'; }, 800);
}

function doMerchantLogin() {
  if (!merchantAgreeChecked()) { showToast('请先阅读并同意《用户协议》《隐私政策》'); return; }
  const lockRem = merchantLockRemaining();
  if (lockRem > 0) { showToast('账号已锁定，请 ' + Math.ceil(lockRem / 60000) + ' 分钟后再试'); return; }
  const phone = document.getElementById('merchantLoginPhone');
  const pwd = document.getElementById('merchantLoginPwd');
  const phoneVal = phone ? phone.value.trim() : '';
  if (!phoneVal || !/^1[3-9]\d{9}$/.test(phoneVal)) { showToast('请输入正确的诊所手机号'); return; }
  if (!pwd || !pwd.value) { showToast('请输入登录密码'); return; }
  const acc = MERCHANT_ACCOUNTS.find(a => a.phone === phoneVal);
  if (acc && !getMerchantPasswordSet(acc.id)) {
    showToast('该账号尚未设置密码，请使用验证码登录');
    switchMerchantLoginTab('code');
    return;
  }
  if (!acc || getMerchantPassword(acc.id) !== pwd.value) {
    const l = recordMerchantFail(phoneVal);
    if (l.lockUntil) showToast('密码错误次数过多，账号已锁定30分钟');
    else showToast('手机号或密码错误，还可尝试 ' + (5 - l.failCount) + ' 次');
    return;
  }
  resetMerchantFail();
  const m = merchantsData.find(x => x.id === acc.id);
  setMerchantSession({ id: acc.id, ids: acc.ids || [acc.id], clinicId: (acc.ids ? acc.ids[0] : acc.id), name: m ? m.name : '', phone: phoneVal });
  showToast('诊所登录成功');
  setTimeout(() => { location.href = 'merchant.html'; }, 1000);
}

function doMerchantCodeLogin() {
  if (!merchantAgreeChecked()) { showToast('请先阅读并同意《用户协议》《隐私政策》'); return; }
  const lockRem = merchantLockRemaining();
  if (lockRem > 0) { showToast('账号已锁定，请 ' + Math.ceil(lockRem / 60000) + ' 分钟后再试'); return; }
  const phone = document.getElementById('merchantLoginPhone');
  const code = document.getElementById('merchantLoginCode');
  const phoneVal = phone ? phone.value.trim() : '';
  if (!phoneVal || !/^1[3-9]\d{9}$/.test(phoneVal)) { showToast('请输入正确的诊所手机号'); return; }
  if (!code || !/^\d{4,6}$/.test(code.value.trim())) { showToast('请输入验证码'); return; }
  const acc = MERCHANT_ACCOUNTS.find(a => a.phone === phoneVal);
  if (!acc) { showToast('该手机号未注册诊所账号'); return; }
  // 验证码登录（原型中任意验证码通过）
  resetMerchantFail();
  const m = merchantsData.find(x => x.id === acc.id);
  setMerchantSession({ id: acc.id, ids: acc.ids || [acc.id], clinicId: (acc.ids ? acc.ids[0] : acc.id), name: m ? m.name : '', phone: phoneVal });
  // 首次登录（未设置密码）引导设置新密码，可跳过
  if (!getMerchantPasswordSet(acc.id)) { showMerchantSetPwd(acc.id); return; }
  showToast('诊所登录成功');
  setTimeout(() => { location.href = 'merchant.html'; }, 1000);
}

let merchantCodeTimer = null;
function sendMerchantCode() {
  const phone = document.getElementById('merchantLoginPhone');
  const phoneVal = phone ? phone.value.trim() : '';
  if (!phoneVal || !/^1[3-9]\d{9}$/.test(phoneVal)) { showToast('请输入正确的诊所手机号'); return; }
  if (merchantCodeTimer) return;
  let sec = 60;
  showToast('验证码已发送（演示：任意验证码即可）');
  const btn = document.getElementById('merchantSendCodeBtn');
  if (btn) { btn.disabled = true; btn.textContent = sec + 's'; }
  merchantCodeTimer = setInterval(() => {
    sec--;
    if (btn) btn.textContent = sec + 's';
    if (sec <= 0) { clearInterval(merchantCodeTimer); merchantCodeTimer = null; if (btn) { btn.disabled = false; btn.textContent = '获取验证码'; } }
  }, 1000);
}

function merchantWechatPhone() {
  // 微信快速验证手机号组件（原型中模拟自动填入账号手机号）
  const phone = document.getElementById('merchantLoginPhone');
  if (phone) phone.value = '13800138000';
  showToast('已通过微信获取手机号');
}

function switchMerchantLoginTab(type) {
  const panePwd = document.getElementById('panePwd');
  const paneCode = document.getElementById('paneCode');
  const tabPwd = document.getElementById('tabPwd');
  const tabCode = document.getElementById('tabCode');
  if (type === 'pwd') {
    if (panePwd) panePwd.style.display = 'block';
    if (paneCode) paneCode.style.display = 'none';
    if (tabPwd) tabPwd.classList.add('active');
    if (tabCode) tabCode.classList.remove('active');
  } else {
    if (paneCode) paneCode.style.display = 'block';
    if (panePwd) panePwd.style.display = 'none';
    if (tabCode) tabCode.classList.add('active');
    if (tabPwd) tabPwd.classList.remove('active');
  }
}

function goSearch() { location.href = 'search.html'; }

// ===== Search =====
function handleSearch() {
  const val = document.getElementById('searchInput').value.trim();
  const clearBtn = document.querySelector('.clear-btn');
  if (clearBtn) clearBtn.style.display = val ? 'block' : 'none';
  const res = document.getElementById('searchResults');
  const list = document.getElementById('searchResultList');
  if (val.length > 0) {
    if (res) res.style.display = 'none';
    if (list) list.style.display = 'block';
    renderSearchResults();
  } else {
    if (res) res.style.display = 'block';
    if (list) list.style.display = 'none';
    renderSearchHistory();
  }
}

// ===== 搜索历史（localStorage 持久化）=====
let searchTab = 'drug';
const SEARCH_HISTORY_KEY = 'sygo_search_history';
function getSearchHistory() { try { const r = localStorage.getItem(SEARCH_HISTORY_KEY); if (r) return JSON.parse(r); } catch (e) {} return []; }
function addSearchHistory(kw) {
  kw = (kw || '').trim(); if (!kw) return;
  let h = getSearchHistory().filter(x => x !== kw);
  h.unshift(kw); h = h.slice(0, 10);
  try { localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(h)); } catch (e) {}
  renderSearchHistory();
}
function clearSearchHistory() { try { localStorage.removeItem(SEARCH_HISTORY_KEY); } catch (e) {} renderSearchHistory(); }
function renderSearchHistory() {
  const box = document.getElementById('searchHistory'); if (!box) return;
  const h = getSearchHistory();
  if (!h.length) { box.innerHTML = '<span style="font-size:12px;color:var(--text-secondary);">暂无搜索历史</span>'; return; }
  box.innerHTML = h.map(k => '<span class="merchant-tag" onclick="searchFor(\'' + k.replace(/'/g, '') + '\')" style="cursor:pointer;">' + escHtml(k) + '</span>').join('');
}
function setSearchTab(t) {
  searchTab = t;
  document.querySelectorAll('.search-tab').forEach(el => el.classList.toggle('active', el.dataset.tab === t));
  if (document.getElementById('searchInput').value.trim()) renderSearchResults();
}
function renderSearchResults() {
  const content = document.getElementById('searchResultContent'); if (!content) return;
  const val = document.getElementById('searchInput').value.trim();
  const kw = val.toLowerCase();
  let html = '';
  if (searchTab === 'drug') {
    const matched = drugsData.filter(d => d.name.toLowerCase().includes(kw) || d.spec.toLowerCase().includes(kw) || d.spec2.toLowerCase().includes(kw));
    if (!matched.length) { html = '<div class="empty-tip">未找到相关服务</div>'; }
    else matched.forEach(d => {
      const imgHtml = d.img
        ? '<div style="width:60px;height:60px;border-radius:8px;background:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;border:1px solid var(--border);"><img src="' + d.img + '" style="width:100%;height:100%;object-fit:contain;padding:2px;"></div>'
        : '<div style="width:60px;height:60px;border-radius:8px;background:' + (d.emojiBg || 'var(--primary-light)') + ';display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:28px;">' + (d.emoji || '💊') + '</div>';
      html += '<div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="goDrugDetail(' + d.id + ')">'
        + imgHtml
        + '<div style="flex:1;"><div style="font-weight:600;">' + d.name + SERVICE_TITLE_SUFFIX + '</div>'
        + '<div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">' + d.spec + ' · ' + d.spec2 + '</div>'
        + '<div style="font-size:12px;color:var(--primary);margin-top:4px;">' + d.stock + (PLATFORM_SETTINGS.priceVisible && PRODUCT_PRICE_MAP[d.id] ? ' · ' + priceRangeOf(d.id).text : '') + '</div>'
        + '</div></div>';
    });
  } else {
    const matched = merchantsData.filter(m => m.name.toLowerCase().includes(kw) || m.addr.toLowerCase().includes(kw) || (m.tags || []).join(' ').toLowerCase().includes(kw));
    if (!matched.length) { html = '<div class="empty-tip">未找到相关诊所</div>'; }
    else matched.forEach(m => {
      const avatar = m.hero
        ? '<div style="width:48px;height:48px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;overflow:hidden;"><img src="' + m.hero + '" style="width:100%;height:100%;object-fit:cover;"></div>'
        : '<div style="width:48px;height:48px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:22px;background:' + m.iconBg + ';flex-shrink:0;">' + m.icon + '</div>';
      html += '<div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="goMerchantDetail(' + m.id + ')">'
        + avatar
        + '<div style="flex:1;min-width:0;"><div style="font-weight:600;">' + m.name + (m.certified ? ' <span class="cert-badge">✓资质</span>' : '') + '</div>'
        + '<div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">' + m.addr + '</div>'
        + '<div style="font-size:12px;color:var(--orange);margin-top:2px;">距您 ' + m.distance + (m.drugCount ? ' · ' + m.drugCount + '款在售' : '') + '</div>'
        + '</div></div>';
    });
  }
  content.innerHTML = html;
}

function searchFor(keyword) {
  const inp = document.getElementById('searchInput');
  if (inp) inp.value = keyword;
  addSearchHistory(keyword);
  const res = document.getElementById('searchResults'); if (res) res.style.display = 'none';
  const list = document.getElementById('searchResultList'); if (list) list.style.display = 'block';
  renderSearchResults();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  handleSearch();
}

// ===== Appointment =====
function selectTime(el) {
  if (el.classList.contains('disabled')) return;
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function changeQty(delta) {
  const el = document.getElementById('appointQty');
  if (!el) return;
  let v = parseInt(el.textContent, 10) || 1;
  v = Math.max(1, Math.min(99, v + delta));
  el.textContent = v;
}

function prefillAppointment() {
  const drugId = parseInt(getParam('drug')) || currentDrugId;
  const explicitMerchant = parseInt(getParam('merchant'));
  if (drugId) {
    currentDrugId = drugId;
    const d = drugsData.find(x => x.id === drugId);
    const de = document.getElementById('appointDrug');
    if (d && de) de.value = d.name + ' ' + d.spec2;
    // 以服务卡片形式展示预约服务（含封面 / 厂家 / 规格 / 价格）
    const cardWrap = document.getElementById('appointDrugCard');
    if (d && cardWrap) {
      const bg = d.img ? '#fff' : (d.emojiBg || 'var(--primary-light)');
      const imgHtml = d.img
        ? '<img src="' + d.img + '" alt="' + d.name + '">'
        : '<span style="font-size:34px;">' + (d.emoji || '💊') + '</span>';
      cardWrap.innerHTML = '<div class="appt-drug-card">'
        + '<div class="appt-drug-img" style="background:' + bg + ';">' + imgHtml + '</div>'
        + '<div class="appt-drug-info"><div class="appt-drug-name">' + d.name + SERVICE_TITLE_SUFFIX + '</div>'
        + '<div class="appt-drug-spec">' + (d.spec || '') + ' · ' + (d.spec2 || '') + '</div>'
        + '<div class="appt-drug-price" id="apptDrugPrice"></div>'
        + '</div></div>';
    }
  }
  // 默认选中第一个诊所（最近的有货诊所），确保进入页面即显示服务价格
  let merchantId = explicitMerchant;
  if (!merchantId) {
    const drug = drugsData.find(x => x.id === currentDrugId);
    const def = getDefaultMerchant(drug);
    merchantId = def ? def.id : currentMerchantId;
  }
  if (merchantId) {
    currentMerchantId = merchantId;
    const m = merchantsData.find(x => x.id === merchantId);
    const me = document.getElementById('appointMerchantText');
    if (m && me) me.textContent = m.name;
  }
  renderApptPrice(); // 渲染价格（此时 currentMerchantId 已确定）
  renderAppointmentTimeSlots();
  const phoneEl = document.getElementById('appointPhone');
  if (phoneEl) {
    phoneEl.value = loginPhone || '';
    validatePhone(phoneEl);
  }
  const qtyEl = document.getElementById('appointQty');
  if (qtyEl) qtyEl.textContent = '1';
}

// 预约页服务卡片价格：未选诊所时提示，选中诊所后显示该诊所固定到店价（单一价格，非区间）
function renderApptPrice() {
  const el = document.getElementById('apptDrugPrice');
  if (!el) return;
  const d = drugsData.find(x => x.id === currentDrugId);
  if (!d || !PLATFORM_SETTINGS.priceVisible || !PRODUCT_PRICE_MAP[d.id]) { el.innerHTML = ''; return; }
  const m = merchantsData.find(x => x.id === currentMerchantId);
  const hasStock = !!(m && d.merchants && d.merchants.includes(m.id));
  if (m && hasStock) {
    const price = getMerchantFixedPrice(d.id, m.id);
    el.innerHTML = '<span class="yen">¥</span>' + price + ' <span class="appt-price-unit">/份</span>';
  } else {
    el.innerHTML = '<span class="appt-price-hint">选择诊所后显示价格</span>';
  }
}

// 预约时段按所选诊所营业时间整点生成（24 小时营业则 0:00-23:00）
function renderAppointmentTimeSlots() {
  const wrap = document.querySelector('#appointmentPage .time-slots');
  if (!wrap) return;
  const merchant = merchantsData.find(x => x.id === currentMerchantId) || merchantsData[0];
  let slots = [];
  if (merchant.is24h || (merchant.hours || '').indexOf('24小时') >= 0) {
    for (let h = 0; h < 24; h++) slots.push(String(h).padStart(2, '0') + ':00');
  } else {
    const m = (merchant.hours || '').match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
    if (m) {
      let sh = parseInt(m[1], 10), eh = parseInt(m[3], 10);
      if (eh <= sh) eh += 24;
      for (let h = sh; h < eh; h++) slots.push(String(h % 24).padStart(2, '0') + ':00');
    } else {
      for (let h = 9; h <= 17; h++) slots.push(String(h).padStart(2, '0') + ':00');
    }
  }
  wrap.innerHTML = slots.map(s => '<div class="time-slot" onclick="selectTime(this)">' + s + '</div>').join('');
}

// 取预约页默认诊所：附近 30 公里内第一个有货诊所（距离由近到远）
function getDefaultMerchant(drug) {
  const inStockIds = (drug && drug.merchants) ? drug.merchants : [];
  const NEAR_KM = 30;
  const list = merchantsData
    .filter(m => (m.distNum != null ? m.distNum : 99) <= NEAR_KM && inStockIds.includes(m.id))
    .sort((a, b) => (a.distNum != null ? a.distNum : 99) - (b.distNum != null ? b.distNum : 99));
  return list[0] || null;
}

// ===== Merchant Picker =====
function showMerchantPicker() {
  const drug = drugsData.find(d => d.id === currentDrugId);
  const inStockIds = (drug && drug.merchants) ? drug.merchants : [];
  const NEAR_KM = 30;
  // 附近 30 公里内全部诊所：先 有货→缺货，再 距离由近到远
  const list = merchantsData
    .filter(m => (m.distNum != null ? m.distNum : 99) <= NEAR_KM)
    .map(m => ({ m: m, hasStock: inStockIds.includes(m.id) }))
    .sort((a, b) => {
      if (a.hasStock !== b.hasStock) return a.hasStock ? -1 : 1;
      return (a.m.distNum != null ? a.m.distNum : 99) - (b.m.distNum != null ? b.m.distNum : 99);
    });
  let html = '<div class="merchant-picker-hint">已显示附近 ' + NEAR_KM + ' 公里内全部诊所，有货门店可预约（有货优先、距离由近到远）</div>';
  list.forEach(({ m, hasStock }) => {
    const selected = (m.id === currentMerchantId);
    html += '<div class="merchant-pick-item' + (selected ? ' selected' : '') + (hasStock ? '' : ' disabled') + '"'
      + (hasStock ? ' onclick="selectMerchant(' + m.id + ')"' : '') + '>'
      + '<div class="merchant-pick-avatar" style="background:' + m.iconBg + ';">' + m.icon + '</div>'
      + '<div class="merchant-pick-info">'
      + '<div class="merchant-pick-name">' + m.name + '</div>'
      + '<div class="merchant-pick-addr">' + m.addr + '</div>'
      + '</div>'
      + '<div class="merchant-pick-right">'
      + '<div class="merchant-pick-dist">距您 ' + m.distance + '</div>'
      + '<div class="merchant-pick-stock ' + (hasStock ? 'in' : 'out') + '">' + (hasStock ? '有货' : '缺货') + '</div>'
      + '</div></div>';
  });
  document.getElementById('merchantPickerList').innerHTML = html;
  document.getElementById('merchantPicker').classList.add('show');
}

function selectMerchant(id) {
  const merchant = merchantsData.find(m => m.id === id);
  if (!merchant) return;
  const drug = drugsData.find(d => d.id === currentDrugId);
  if (drug && drug.merchants && !drug.merchants.includes(id)) {
    showToast('该门店暂无可预约服务');
    return;
  }
  currentMerchantId = id;
  const t = document.getElementById('appointMerchantText');
  if (t) t.textContent = merchant.name;
  renderAppointmentTimeSlots();
  renderApptPrice();
  closeMerchantPicker();
}

function closeMerchantPicker() {
  document.getElementById('merchantPicker').classList.remove('show');
}

function submitAppointment() {
  const name = document.getElementById('appointName').value.trim();
  const phone = document.getElementById('appointPhone').value.trim();
  const qtyEl = document.getElementById('appointQty');
  const qty = qtyEl ? (parseInt(qtyEl.textContent, 10) || 1) : 1;
  const selectedTime = document.querySelector('.time-slot.selected');

  let hasError = false;

  if (!name) {
    document.getElementById('appointName').classList.add('error');
    document.getElementById('nameError').classList.add('show');
    hasError = true;
  }

  if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
    document.getElementById('appointPhone').classList.add('error');
    document.getElementById('phoneError').classList.add('show');
    hasError = true;
  }

  if (!selectedTime) {
    alert('请选择预约时段');
    hasError = true;
  }

  if (hasError) return;

  const drug = drugsData.find(x => x.id === currentDrugId);
  const merchant = merchantsData.find(x => x.id === currentMerchantId);
  const dateItem = document.querySelector('.date-item.selected');
  const dateText = dateItem && dateItem.dataset.date ? dateItem.dataset.date : '';
  const timeText = selectedTime ? selectedTime.textContent.trim() : '';
  const time = (dateText + ' ' + timeText).trim() || '待定';

  const remarkEl = document.getElementById('appointRemark');
  const remark = remarkEl ? remarkEl.value.trim() : '';
  const orderNo = 'YY' + Date.now().toString().slice(-10);
  const appointment = {
    orderNo: orderNo,
    drugName: drug ? drug.name : document.getElementById('appointDrug').value,
    drugSpec: drug ? (drug.spec2 || '') : '',
    img: (drug && drug.img) ? drug.img : 'images/drug1.jpg',
    merchantName: merchant ? merchant.name : (document.getElementById('appointMerchantText') ? document.getElementById('appointMerchantText').textContent : ''),
    time: time,
    qty: qty,
    remark: remark,
    status: 'success',
    createdAt: Date.now()
  };
  let list = getMyAppointments();
  if (!list) { seedAppointments(); list = getMyAppointments() || []; }
  list.push(appointment);
  saveMyAppointments(list);

  document.getElementById('successDetail').innerHTML = `
    您的预约已提交成功！<br>预约单号：<span style="color:var(--primary);font-weight:600;">${orderNo}</span><br>服务数量：${qty} 份<br>请按时到店
  `;
  document.getElementById('successModal').classList.add('show');
}

function validateName(el) {
  if (el.value.trim()) {
    el.classList.remove('error');
    document.getElementById('nameError').classList.remove('show');
  }
}

function validatePhone(el) {
  const phone = el.value.trim();
  if (phone && /^1[3-9]\d{9}$/.test(phone)) {
    el.classList.remove('error');
    document.getElementById('phoneError').classList.remove('show');
  }
}

function closeSuccessModal() {
  const m = document.getElementById('successModal'); if (m) m.classList.remove('show');
  location.href = 'index.html';
}

// ===== My Appointments (dynamic list, no status lifecycle) =====
const APPOINTMENTS_KEY = 'sygo_appointments';
let currentOrderStart = '';
let currentOrderEnd = '';
let apptFilterMode = 'order'; // order=下单日期, appt=预约日期
let apPickerStart = '', apPickerEnd = '', apPickerTarget = 'start', apPickerMonth = new Date();

function setApptFilterMode(mode) {
  apptFilterMode = mode;
  document.querySelectorAll('.order-tab').forEach(el => el.classList.toggle('active', el.dataset.mode === mode));
  updateApptOrderTrigger();
  renderMyAppointments();
}

function getMyAppointments() {
  try {
    const raw = localStorage.getItem(APPOINTMENTS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveMyAppointments(list) {
  try { localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(list)); } catch (e) {}
}

function seedAppointments() {
  const now = Date.now();
  const DAY = 86400000;
  const seed = [
    { orderNo: 'YY20260721001', drugName: '静注人免疫球蛋白(pH4)', drugSpec: '2.5g/50ml', img: 'images/drug1.jpg', merchantName: '仁济诊所(浦东店)', merchantId: 1, time: ymd(new Date(now)) + ' 14:00', qty: 2, status: 'success', createdAt: now - 3600000 },
    { orderNo: 'YY20260720003', drugName: '人血白蛋白(安博灵)', drugSpec: '10g/50ml', img: 'images/drug3.jpg', merchantName: '国大诊所(徐汇店)', merchantId: 2, time: ymd(new Date(now - DAY)) + ' 10:00', qty: 1, status: 'success', createdAt: now - DAY },
    { orderNo: 'YY20260609005', drugName: '人血白蛋白(蜀阳)', drugSpec: '10g/50ml', img: 'images/drug5.jpg', merchantName: '益丰诊所(静安店)', merchantId: 3, time: ymd(new Date(now - 40 * DAY)) + ' 15:00', qty: 3, status: 'success', createdAt: now - 40 * DAY }
  ];
  saveMyAppointments(seed);
}

function escHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function formatDateTime(ts) {
  const d = new Date(ts);
  const p = n => (n < 10 ? '0' : '') + n;
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
}

function renderMyAppointments() {
  const listEl = document.getElementById('appointmentList');
  if (!listEl) return;
  let list = getMyAppointments();
  if (!list) { seedAppointments(); list = getMyAppointments(); }
  const p = n => (n < 10 ? '0' : '') + n;
  const dateKey = ts => { const d = new Date(ts || 0); return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };
  const filtered = (list || []).filter(a => {
    const ds = apptFilterMode === 'appt'
      ? (a.time ? a.time.slice(0, 10) : '')
      : dateKey(a.createdAt);
    if (currentOrderStart && ds < currentOrderStart) return false;
    if (currentOrderEnd && ds > currentOrderEnd) return false;
    return true;
  });
  if (!filtered.length) {
    listEl.innerHTML = '<div class="empty-tip">该时间段暂无预约记录</div>';
    return;
  }
  filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  listEl.innerHTML = filtered.map(a => `
    <div class="appointment-item" onclick="goMerchantDetail(${a.merchantId != null ? a.merchantId : 1})">
      <div class="appointment-item-header">
        <span class="appointment-order-no">单号：${escHtml(a.orderNo)}</span>
      </div>
      <div class="appointment-item-body">
        <div class="appointment-item-icon"><img src="${escHtml(a.img || 'images/drug1.jpg')}" alt=""></div>
        <div class="appointment-item-info">
          <div class="appointment-item-drug">${escHtml(a.drugName)}</div>
          <div class="appointment-item-merchant">${escHtml(a.merchantName)}</div>
          <div class="appointment-item-time">🕒 下单时间：${escHtml(formatDateTime(a.createdAt))}</div>
          <div class="appointment-item-time">📅 预约时间：${escHtml(a.time)}</div>
          <div class="appointment-item-qty">📦 数量：${escHtml(a.qty)} 份</div>
          ${a.remark ? `<div class="appointment-item-remark">📝 备注：${escHtml(a.remark)}</div>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// ---- my-appointments date-range picker (same mobile UI as merchant-orders) ----
function openApptDatePicker() {
  apPickerStart = currentOrderStart; apPickerEnd = currentOrderEnd;
  apPickerTarget = apPickerStart ? 'end' : 'start';
  const base = apPickerStart || apPickerEnd || ymd(new Date());
  const parts = base.split('-'); apPickerMonth = new Date(+parts[0], +parts[1] - 1, 1);
  const p = document.getElementById('apptDatePicker'); if (p) p.classList.add('show');
  renderApptDateGrid(); updateApptDateFields();
}
function closeApptDatePicker() {
  const p = document.getElementById('apptDatePicker'); if (p) p.classList.remove('show');
}
function setApptDateTarget(which) {
  apPickerTarget = which; updateApptDateFields();
  const d = which === 'start' ? apPickerStart : apPickerEnd;
  if (d) { const parts = d.split('-'); const nd = new Date(+parts[0], +parts[1] - 1, 1); if (nd.getFullYear() !== apPickerMonth.getFullYear() || nd.getMonth() !== apPickerMonth.getMonth()) { apPickerMonth = nd; renderApptDateGrid(); } }
}
function shiftApptMonth(delta) {
  apPickerMonth = new Date(apPickerMonth.getFullYear(), apPickerMonth.getMonth() + delta, 1);
  renderApptDateGrid();
}
function renderApptDateGrid() {
  const grid = document.getElementById('apptDateGrid'); if (!grid) return;
  const y = apPickerMonth.getFullYear(), mo = apPickerMonth.getMonth();
  const first = new Date(y, mo, 1); const startW = first.getDay();
  const daysInMonth = new Date(y, mo + 1, 0).getDate();
  const prevDays = new Date(y, mo, 0).getDate();
  const lbl = document.getElementById('apptDateMonthLabel'); if (lbl) lbl.textContent = y + '年' + (mo + 1) + '月';
  const today = ymd(new Date());
  let html = '';
  for (let i = startW - 1; i >= 0; i--) html += `<div class="m-date-day muted">${prevDays - i}</div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = y + '-' + mDatePad(mo + 1) + '-' + mDatePad(d);
    let cls = 'm-date-day';
    if (ds === today) cls += ' today';
    if (ds === apPickerStart || ds === apPickerEnd) cls += ' selected';
    else if (apPickerStart && apPickerEnd && ds > apPickerStart && ds < apPickerEnd) cls += ' in-range';
    html += `<div class="${cls}" data-d="${ds}" onclick="onApptDayTap('${ds}')">${d}</div>`;
  }
  const total = startW + daysInMonth; const trail = (7 - (total % 7)) % 7;
  for (let d = 1; d <= trail; d++) html += `<div class="m-date-day muted">${d}</div>`;
  grid.innerHTML = html;
}
function onApptDayTap(ds) {
  if (apPickerTarget === 'start' || !apPickerStart) { apPickerStart = ds; apPickerEnd = ''; apPickerTarget = 'end'; }
  else if (ds < apPickerStart) { apPickerStart = ds; }
  else { apPickerEnd = ds; apPickerTarget = 'start'; }
  renderApptDateGrid(); updateApptDateFields();
}
function updateApptDateFields() {
  const sf = document.getElementById('apptDateStartField'), ef = document.getElementById('apptDateEndField');
  const sv = document.getElementById('apptDateStartVal'), ev = document.getElementById('apptDateEndVal');
  if (sv) sv.textContent = apPickerStart ? apPickerStart.slice(5) : '请选择';
  if (ev) ev.textContent = apPickerEnd ? apPickerEnd.slice(5) : '请选择';
  if (sf) sf.classList.toggle('active', apPickerTarget === 'start');
  if (ef) ef.classList.toggle('active', apPickerTarget === 'end');
}
function confirmApptDateRange() {
  currentOrderStart = apPickerStart; currentOrderEnd = apPickerEnd;
  updateApptOrderTrigger(); closeApptDatePicker(); renderMyAppointments();
}
function resetApptOrderRange() {
  currentOrderStart = ''; currentOrderEnd = '';
  apPickerStart = ''; apPickerEnd = '';
  updateApptOrderTrigger(); renderMyAppointments();
}
function resetApptDateRange() {
  apPickerStart = ''; apPickerEnd = ''; apPickerTarget = 'start';
  renderApptDateGrid(); updateApptDateFields();
}
function updateApptOrderTrigger() {
  const t = document.getElementById('apptOrderTrigger'); if (!t) return;
  const prefix = apptFilterMode === 'appt' ? '预约 ' : '下单 ';
  if (currentOrderStart && currentOrderEnd) t.textContent = prefix + currentOrderStart.slice(5) + ' 至 ' + currentOrderEnd.slice(5);
  else if (currentOrderStart) t.textContent = prefix + currentOrderStart.slice(5) + ' 起';
  else if (currentOrderEnd) t.textContent = prefix + '至 ' + currentOrderEnd.slice(5);
  else t.textContent = '全部日期';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ===== QR Code =====
function showQR() {
  document.getElementById('qrModal').classList.add('show');
}
function closeQR() {
  document.getElementById('qrModal').classList.remove('show');
}

// ===== Navigation =====
function navigateTo() {
  alert('正在唤起第三方地图导航...');
}

function callMerchant() {
  window.location.href = 'tel:0215888XXXX';
}

let pendingAppointmentAction = null;
function guardAppointment(action) {
  pendingAppointmentAction = action;
  const m = document.getElementById('bookFirstModal');
  if (m) m.style.display = 'flex';
}
function closeBookFirstModal() {
  const m = document.getElementById('bookFirstModal');
  if (m) m.style.display = 'none';
  pendingAppointmentAction = null;
}
function confirmBookFirst() {
  const action = pendingAppointmentAction;
  closeBookFirstModal();
  if (action === 'nav') navigateTo();
  else if (action === 'call') callMerchant();
}

function openImagePreview(src) {
  const img = document.getElementById('imagePreviewImg');
  if (img) img.src = src;
  const m = document.getElementById('imagePreviewModal');
  if (m) m.classList.add('show');
}
function closeImagePreview() {
  const m = document.getElementById('imagePreviewModal');
  if (m) m.classList.remove('show');
}
function previewCert(index) {
  const m = merchantsData.find(x => x.id === currentMerchantId) || merchantsData[0];
  const src = (m.certs && m.certs[index - 1]) ? m.certs[index - 1] : 'images/cert-business.svg';
  openImagePreview(src);
}

// ===== Login =====
function doLogin() {
  const agree = document.getElementById('loginAgree');
  if (!agree || !agree.checked) {
    showToast('请先阅读并同意用户协议和隐私政策');
    return;
  }
  const btn = document.getElementById('loginBtn');
  if (btn && btn.disabled) return;
  if (btn) {
    btn.disabled = true;
    const label = btn.querySelector('.login-btn-text');
    if (label) label.textContent = '授权中...';
  }
  showToast('正在授权手机号...');
  setTimeout(function () {
    setUserSession({ phone: loginPhone, name: SYGO_DEFAULT_NAME });
    isLoggedIn = true;
    showToast('登录成功');
    const redirect = getParam('redirect') || sessionStorage.getItem('redirectAfterLogin') || 'index.html';
    try { sessionStorage.removeItem('redirectAfterLogin'); } catch (e) {}
    setTimeout(function () { location.href = redirect; }, 700);
  }, 700);
}

function onLoginAgreeChange() {
  const btn = document.getElementById('loginBtn');
  const agree = document.getElementById('loginAgree');
  if (btn && agree) btn.disabled = !agree.checked;
}

// ===== Profile =====
function renderProfile() {
  const s = getUserSession();
  const nameEl = document.querySelector('.profile-name');
  const phoneEl = document.querySelector('.profile-phone');
  const avatarEl = document.querySelector('.profile-avatar');
  const name = (s && s.name && s.name !== '微信用户') ? s.name : SYGO_DEFAULT_NAME;
  if (nameEl) nameEl.textContent = name;
  if (phoneEl) phoneEl.textContent = (s && s.phone) ? s.phone : '未登录';
  applyAvatar(avatarEl, (s && s.avatar) ? s.avatar : SYGO_AVATAR);
  renderSettings();
}
function renderSettings() {
  const s = getUserSession();
  const avatarEl = document.getElementById('settingsAvatar');
  const nameEl = document.getElementById('settingsName');
  applyAvatar(avatarEl, (s && s.avatar) ? s.avatar : SYGO_AVATAR);
  const name = (s && s.name && s.name !== '微信用户') ? s.name : SYGO_DEFAULT_NAME;
  if (nameEl) nameEl.textContent = name;
}
function showSettings() {
  renderSettings();
  const m = document.getElementById('settingsModal');
  if (m) m.classList.add('show');
}
function closeSettings() {
  const m = document.getElementById('settingsModal');
  if (m) m.classList.remove('show');
}
function changeAvatar() {
  const s = getUserSession() || { name: SYGO_DEFAULT_NAME, phone: '' };
  const cur = (s.avatar && !isPathAvatar(s.avatar)) ? s.avatar : '👤';
  const pick = prompt('设置头像（输入一个表情，如 👤 😊 🌟）：', cur);
  if (pick && pick.trim()) { s.avatar = pick.trim().slice(0, 2); setUserSession(s); renderProfile(); renderSettings(); }
}
function editName() {
  const s = getUserSession() || { phone: '' };
  const cur = (s.name && s.name !== '微信用户') ? s.name : SYGO_DEFAULT_NAME;
  const name = prompt('修改昵称：', cur);
  if (name && name.trim()) { s.name = name.trim(); setUserSession(s); renderProfile(); renderSettings(); }
}
function userLogout() {
  clearUserSession();
  isLoggedIn = false;
  showToast('已退出登录');
  closeSettings();
  setTimeout(() => { location.href = 'index.html'; }, 800);
}

// ===== About / Privacy =====
function showAbout() { location.href = 'about.html'; }
function showPrivacy() { location.href = 'privacy.html'; }
function showUserAgreement() { location.href = 'agreement.html'; }
function showServiceAgreement() { location.href = 'agreement.html'; }
function showAboutIntro() {
  const m = document.getElementById('aboutIntroModal');
  if (m) m.classList.add('show');
}
function closeAboutIntro() {
  const m = document.getElementById('aboutIntroModal');
  if (m) m.classList.remove('show');
}
function showOfficialAccount() {
  const m = document.getElementById('officialAccountModal');
  if (m) m.classList.add('show');
}
function closeOfficialAccount() {
  const m = document.getElementById('officialAccountModal');
  if (m) m.classList.remove('show');
}
function cancelSearch() { location.href = 'index.html'; }

// ===== Init (按页面分发) =====
function restoreLocation() {
  const t = document.getElementById('locText');
  if (!t) return;
  let addr = '';
  try { addr = sessionStorage.getItem('userLocation') || ''; } catch(e) {}
  t.textContent = addr || '湖南省长沙市岳麓区';
}
// ===== Merchant Portal (诊所端) =====
const PLATFORM_SETTINGS = { priceVisible: true }; // 平台是否展示诊所价格（诊所不可自行决定）

// 平台商品库价格策略：建议销售价 / 最低限价（按 drug id）
const PRODUCT_PRICE_MAP = {
  1: { suggested: 580, min: 520 }, 2: { suggested: 560, min: 500 },
  3: { suggested: 420, min: 380 }, 4: { suggested: 410, min: 370 },
  5: { suggested: 405, min: 365 }, 6: { suggested: 415, min: 375 },
  7: { suggested: 430, min: 390 }, 8: { suggested: 180, min: 150 },
  9: { suggested: 1200, min: 1000 }, 10: { suggested: 980, min: 850 },
  11: { suggested: 760, min: 680 }, 12: { suggested: 200, min: 170 },
  13: { suggested: 220, min: 190 }
};
// 价格区间展示：平台开关控制是否展示；展示时给出 最低-最高 区间（min 与 suggested）
function priceRangeOf(id) {
  const p = PRODUCT_PRICE_MAP[id];
  if (!p) return { min: 0, max: 0, text: '' };
  return { min: p.min, max: p.suggested, text: '¥' + p.min + ' - ¥' + p.suggested };
}
// 各诊所价格系数：预约页选中诊所后展示该诊所的「固定到店价」（在平台建议价基础上浮动）
const MERCHANT_PRICE_FACTOR = { 1: 1.00, 2: 0.95, 3: 0.98, 4: 1.03, 5: 0.92, 6: 1.06, 7: 0.97, 8: 1.02 };
// 预约页：选中诊所后展示该诊所的固定到店价（单一价格，非区间）
function getMerchantFixedPrice(drugId, merchantId) {
  const p = PRODUCT_PRICE_MAP[drugId];
  if (!p) return null;
  const factor = MERCHANT_PRICE_FACTOR[merchantId] != null ? MERCHANT_PRICE_FACTOR[merchantId] : 1;
  return Math.round(p.suggested * factor);
}
const MERCHANT_CATEGORY_LABELS = { immunoglobulin: '免疫球蛋白', albumin: '人血白蛋白', factor: '凝血因子', vaccine: '疫苗制品' };

// 平台为诊所创建的独立账号：手机号 + 初始密码（由平台设置）
const MERCHANT_ACCOUNTS = [
  { id: 1, phone: '13800138000', password: '123456', ids: [1, 2, 3] },
  { id: 2, phone: '13800138001', password: '123456', ids: [4, 5] },
  { id: 3, phone: '13800138002', password: '123456' },
  { id: 4, phone: '13800138003', password: '123456' },
  { id: 5, phone: '13800138004', password: '123456' },
  { id: 6, phone: '13800138005', password: '123456' },
  { id: 7, phone: '13800138006', password: '123456' },
  { id: 8, phone: '13800138007', password: '123456' }
];

const MERCHANT_LOCK_KEY = 'sygo_merchant_lock';
const MERCHANT_SESSION_KEY = 'sygo_merchant_session';

function getMerchantSession() { try { const r = localStorage.getItem(MERCHANT_SESSION_KEY); if (r) return JSON.parse(r); } catch (e) {} return null; }
function setMerchantSession(s) { try { localStorage.setItem(MERCHANT_SESSION_KEY, JSON.stringify(s)); } catch (e) {} }
function clearMerchantSession() { try { localStorage.removeItem(MERCHANT_SESSION_KEY); } catch (e) {} }
function requireMerchant() { const s = getMerchantSession(); if (!s) { location.href = 'merchant-login.html'; return null; } return s; }
function getMerchantPassword(id) { try { const r = localStorage.getItem('sygo_merchant_pw_' + id); if (r) return r; } catch (e) {} const a = MERCHANT_ACCOUNTS.find(x => x.id === id); return a ? a.password : ''; }
function setMerchantPassword(id, pw) { try { localStorage.setItem('sygo_merchant_pw_' + id, pw); } catch (e) {} }

// 登录失败锁定：连续5次失败锁定1小时
function getMerchantLock() { try { const r = localStorage.getItem(MERCHANT_LOCK_KEY); if (r) return JSON.parse(r); } catch (e) {} return { phone: '', failCount: 0, lockUntil: 0 }; }
function setMerchantLock(l) { try { localStorage.setItem(MERCHANT_LOCK_KEY, JSON.stringify(l)); } catch (e) {} }
function merchantLockRemaining() { const l = getMerchantLock(); if (!l.lockUntil) return 0; const rem = l.lockUntil - Date.now(); return rem > 0 ? rem : 0; }
function recordMerchantFail(phone) {
  let l = getMerchantLock();
  if (l.phone !== phone) l = { phone: phone, failCount: 0, lockUntil: 0 };
  l.failCount += 1;
  if (l.failCount >= 5) l.lockUntil = Date.now() + 1800000;
  setMerchantLock(l);
  return l;
}
function resetMerchantFail() { setMerchantLock({ phone: '', failCount: 0, lockUntil: 0 }); }

// ===== 导航 =====
function goMerchantHome() { location.href = 'merchant.html'; }
function goMerchantOrders() { location.href = 'merchant-orders.html'; }
function goMerchantStats() { location.href = 'merchant-stats.html'; }
function goMerchantProducts() { location.href = 'merchant-products.html'; }
function goMerchantStore() { location.href = 'merchant-store.html'; }
function goMerchantChangePassword() { location.href = 'merchant-change-password.html'; }
function merchantLogout() { clearMerchantSession(); resetMerchantFail(); location.href = 'profile.html'; }

// ===== 诊所在售商品（上下架 + 本店售价）=====
function getMerchantOnsale(id) { try { const r = localStorage.getItem('sygo_merchant_onsale_' + id); if (r) return JSON.parse(r); } catch (e) {} return null; }
function saveMerchantOnsale(id, list) { try { localStorage.setItem('sygo_merchant_onsale_' + id, JSON.stringify(list)); } catch (e) {} }
function seedMerchantOnsale(id) {
  const m = merchantsData.find(x => x.id === id); if (!m) return [];
  const list = (m.drugs || []).map(did => ({ drugId: did, storePrice: (PRODUCT_PRICE_MAP[did] || { suggested: 0 }).suggested }));
  saveMerchantOnsale(id, list); return list;
}
function getOnsaleForMerchant(id) { let list = getMerchantOnsale(id); if (!list) list = seedMerchantOnsale(id); return list || []; }
function merchantToggleOnsale(id, drugId) {
  const list = getOnsaleForMerchant(id);
  const idx = list.findIndex(x => x.drugId === drugId);
  if (idx >= 0) list.splice(idx, 1);
  else list.push({ drugId: drugId, storePrice: (PRODUCT_PRICE_MAP[drugId] || { suggested: 0 }).suggested });
  saveMerchantOnsale(id, list);
}
function setMerchantProductPrice(id, drugId, price) {
  const list = getOnsaleForMerchant(id);
  const item = list.find(x => x.drugId === drugId);
  if (!item) return { ok: false, msg: '该服务未上架' };
  const min = (PRODUCT_PRICE_MAP[drugId] || { min: 0 }).min;
  if (!(price >= min)) return { ok: false, msg: '售价不能低于平台最低限价 ¥' + min };
  item.storePrice = price; saveMerchantOnsale(id, list); return { ok: true };
}
function batchToggleMerchantProducts(id, drugIds, on) {
  let list = getOnsaleForMerchant(id);
  drugIds.forEach(did => {
    const idx = list.findIndex(x => x.drugId === did);
    if (on && idx < 0) list.push({ drugId: did, storePrice: (PRODUCT_PRICE_MAP[did] || { suggested: 0 }).suggested });
    if (!on && idx >= 0) list.splice(idx, 1);
  });
  saveMerchantOnsale(id, list);
}

// ===== 诊所预约订单 =====
const MERCHANT_ORDER_NAMES = ['张伟', '王芳', '李娜', '刘洋', '陈静', '杨光', '赵磊', '黄敏', '周强', '吴婷', '孙丽', '马超'];
function getMerchantOrders(id) { try { const r = localStorage.getItem('sygo_merchant_orders_' + id); if (r) return JSON.parse(r); } catch (e) {} return null; }
function saveMerchantOrders(id, list) { try { localStorage.setItem('sygo_merchant_orders_' + id, JSON.stringify(list)); } catch (e) {} }
function seedMerchantOrders(id) {
  const m = merchantsData.find(x => x.id === id); if (!m) return [];
  const now = Date.now(); const DAY = 86400000; const orders = [];
  for (let i = 0; i < 16; i++) {
    const dayOffset = Math.floor(i * 2.3) % 45;
    const appt = new Date(now - dayOffset * DAY); appt.setHours(9 + (i % 10), (i % 2) ? 0 : 30, 0, 0);
    const created = new Date(appt.getTime() - (i % 5 + 1) * 3600000 - (i % 3) * DAY);
    const drugId = m.drugs[i % m.drugs.length];
    const drug = drugsData.find(d => d.id === drugId);
    const dt = new Date(appt);
    const time = ymd(dt) + ' ' + String(dt.getHours()).padStart(2, '0') + ':' + String(dt.getMinutes()).padStart(2, '0');
    orders.push({
      orderNo: 'YY' + (now - i * 1000).toString().slice(-10),
      userName: MERCHANT_ORDER_NAMES[i % MERCHANT_ORDER_NAMES.length],
      phone: '139' + String(10000000 + (i * 137) % 90000000).padStart(8, '0'),
      drugName: drug ? drug.name : '服务', drugId: drugId, qty: 1 + (i % 3), time: time, createdAt: created.getTime(),
      img: drug ? (drug.img || '') : '', spec: drug ? (drug.spec || '') : '', spec2: drug ? (drug.spec2 || '') : '', remark: ''
    });
  }
  saveMerchantOrders(id, orders); return orders;
}
function getOrdersForMerchant(id) { let list = getMerchantOrders(id); if (!list) list = seedMerchantOrders(id); return list || []; }

// ===== 诊所首页仪表盘 =====
function renderMerchantHome() {
  const s = requireMerchant(); if (!s) return;
  const cid = (s.clinicId != null) ? s.clinicId : s.id;
  const m = merchantsData.find(x => x.id === cid);
  const nameEl = document.getElementById('merchantHomeName');
  if (nameEl) nameEl.textContent = m ? m.name : (s.name || '诊所');
  const orders = getOrdersForMerchant(cid);
  renderClinicSwitch();
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const dow = (now.getDay() + 6) % 7;
  const startOfWeek = startOfDay - dow * 86400000;
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  let day = 0, week = 0, month = 0;
  orders.forEach(o => { const t = o.createdAt || 0; if (t >= startOfDay) day++; if (t >= startOfWeek) week++; if (t >= startOfMonth) month++; });
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set('merchantStatDay', day); set('merchantStatWeek', week); set('merchantStatMonth', month); set('merchantStatTotal', orders.length);
}

// ===== 诊所中心：多诊所切换（登录后可在名下多个诊所间切换）=====
function renderClinicSwitch() {
  const s = requireMerchant(); if (!s) return;
  const bar = document.getElementById('clinicSwitchBar'); if (!bar) return;
  if (!s.ids || s.ids.length <= 1) { bar.style.display = 'none'; return; }
  bar.style.display = '';
  const cid = (s.clinicId != null) ? s.clinicId : s.ids[0];
  const m = merchantsData.find(x => x.id === cid);
  const isHome = document.body.dataset.page === 'merchant';
  if (isHome) {
    bar.className = 'merchant-clinic-switch inline';
    bar.innerHTML = '<span class="mcs-arrow">切换 ▾</span>';
  } else {
    bar.className = 'merchant-clinic-switch';
    bar.innerHTML = '<span class="mcs-label">当前诊所</span><span class="mcs-name">' + (m ? m.name : ('诊所' + cid)) + '</span><span class="mcs-arrow">▾</span>';
  }
  bar.onclick = openClinicSwitch;
  let modal = document.getElementById('clinicSwitchModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'clinicSwitchModal';
    modal.style.display = 'none';
    modal.innerHTML = '<div class="clinic-switch-sheet"><div class="clinic-switch-head"><span>选择诊所</span><span class="clinic-switch-close" onclick="closeClinicSwitch()">✕</span></div><div class="clinic-switch-list" id="clinicSwitchList"></div></div>';
    document.body.appendChild(modal);
  }
}
function openClinicSwitch() {
  const s = requireMerchant(); if (!s) return;
  const modal = document.getElementById('clinicSwitchModal'); if (!modal) return;
  const list = document.getElementById('clinicSwitchList'); if (!list) return;
  const cid = (s.clinicId != null) ? s.clinicId : s.ids[0];
  list.innerHTML = s.ids.map(id => {
    const m = merchantsData.find(x => x.id === id);
    const active = (id === cid) ? ' active' : '';
    const name = m ? m.name : ('诊所' + id);
    return '<div class="clinic-switch-item' + active + '" onclick="switchMerchantClinic(' + id + ')"><span>' + name + '</span>' + (id === cid ? '<span class="clinic-switch-check">✓</span>' : '') + '</div>';
  }).join('');
  modal.style.display = 'flex';
}
function closeClinicSwitch() { const modal = document.getElementById('clinicSwitchModal'); if (modal) modal.style.display = 'none'; }
function switchMerchantClinic(id) {
  const s = getMerchantSession(); if (!s) return;
  s.clinicId = id; setMerchantSession(s);
  closeClinicSwitch();
  renderClinicSwitch();
  const m = merchantsData.find(x => x.id === id);
  const page = document.body.dataset.page;
  if (page === 'merchant') renderMerchantHome();
  else if (page === 'merchant-orders') renderMerchantOrders();
  else if (page === 'merchant-stats') renderMerchantStats();
  else if (page === 'merchant-products') renderMerchantProducts();
  else if (page === 'merchant-store') renderMerchantStore();
  showToast('已切换到 ' + (m ? m.name : ('诊所' + id)));
}

// ===== 诊所预约订单列表（时间范围筛选）=====
let merchantOrderStart = '', merchantOrderEnd = '';
let merchantOrderKeyword = '';
function renderMerchantOrders() {
  const s = requireMerchant(); if (!s) return;
  renderClinicSwitch();
  const cid = (s.clinicId != null) ? s.clinicId : s.id;
  const listEl = document.getElementById('merchantOrderList'); if (!listEl) return;
  const orders = getOrdersForMerchant(cid);
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const dow = (now.getDay() + 6) % 7;
  const startOfWeek = startOfDay - dow * 86400000;
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  let day = 0, week = 0, month = 0;
  orders.forEach(o => { const t = o.createdAt || 0; if (t >= startOfDay) day++; if (t >= startOfWeek) week++; if (t >= startOfMonth) month++; });
  const setStat = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  setStat('moStatDay', day); setStat('moStatWeek', week); setStat('moStatMonth', month); setStat('moStatTotal', orders.length);
  const kw = merchantOrderKeyword.trim().toLowerCase();
  const filtered = orders.filter(o => {
    const ds = o.time.slice(0, 10);
    if (merchantOrderStart && ds < merchantOrderStart) return false;
    if (merchantOrderEnd && ds > merchantOrderEnd) return false;
    if (kw && !((o.userName || '') + ' ' + (o.phone || '') + ' ' + (o.orderNo || '') + ' ' + (o.drugName || '')).toLowerCase().includes(kw)) return false;
    return true;
  }).sort((a, b) => (b.time || '').localeCompare(a.time || ''));
  if (!filtered.length) { listEl.innerHTML = '<div class="empty-tip">' + (kw ? '未找到匹配的预约记录' : '该时间段暂无预约记录') + '</div>'; return; }
  listEl.innerHTML = filtered.map(o => `
    <div class="m-order-item">
      <div class="m-order-cover-wrap"><img class="m-order-cover" src="${escHtml(o.img || 'images/drug1.jpg')}" alt=""></div>
      <div class="m-order-top"><span class="m-order-no">单号：${escHtml(o.orderNo)}</span><span class="m-order-qty">${escHtml(o.qty)} 份</span></div>
      <div class="m-order-grid">
        <div class="m-order-cell"><span class="k">用户</span><b class="v">${escHtml(o.userName)}</b></div>
        <div class="m-order-cell"><span class="k">手机</span><b class="v">${escHtml(o.phone)}</b><a class="m-call-btn" href="tel:${escHtml(o.phone)}" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a></div>
        <div class="m-order-cell"><span class="k">预约时间</span><b class="v">${escHtml(o.time)}</b></div>
        <div class="m-order-cell"><span class="k">服务</span><b class="v">${escHtml(o.drugName)}</b></div>
        <div class="m-order-cell"><span class="k">厂家</span><b class="v">${escHtml(o.spec || '')}</b></div>
        <div class="m-order-cell"><span class="k">规格</span><b class="v">${escHtml(o.spec2 || '')}</b></div>
        ${(o.remark) ? `<div class="m-order-cell m-order-cell-wide"><span class="k">备注</span><b class="v">${escHtml(o.remark)}</b></div>` : ''}
      </div>
    </div>`).join('');
}
// 手机端底部日历区间选择器
let mPickerStart = '', mPickerEnd = '', mPickerTarget = 'start';
let mPickerMonth = new Date();
function mDatePad(n) { return (n < 10 ? '0' : '') + n; }
function openMerchantDatePicker() {
  mPickerStart = merchantOrderStart; mPickerEnd = merchantOrderEnd;
  mPickerTarget = mPickerStart ? 'end' : 'start';
  const base = mPickerStart || mPickerEnd || ymd(new Date());
  const parts = base.split('-'); mPickerMonth = new Date(+parts[0], +parts[1] - 1, 1);
  const p = document.getElementById('merchantDatePicker'); if (p) p.classList.add('show');
  renderMerchantDateGrid(); updateMerchantDateFields();
}
function closeMerchantDatePicker() {
  const p = document.getElementById('merchantDatePicker'); if (p) p.classList.remove('show');
}
function setMerchantDateTarget(which) {
  mPickerTarget = which; updateMerchantDateFields();
  const d = which === 'start' ? mPickerStart : mPickerEnd;
  if (d) { const parts = d.split('-'); const nd = new Date(+parts[0], +parts[1] - 1, 1); if (nd.getFullYear() !== mPickerMonth.getFullYear() || nd.getMonth() !== mPickerMonth.getMonth()) { mPickerMonth = nd; renderMerchantDateGrid(); } }
}
function shiftMerchantMonth(delta) {
  mPickerMonth = new Date(mPickerMonth.getFullYear(), mPickerMonth.getMonth() + delta, 1);
  renderMerchantDateGrid();
}
function renderMerchantDateGrid() {
  const grid = document.getElementById('mDateGrid'); if (!grid) return;
  const y = mPickerMonth.getFullYear(), mo = mPickerMonth.getMonth();
  const first = new Date(y, mo, 1); const startW = first.getDay();
  const daysInMonth = new Date(y, mo + 1, 0).getDate();
  const prevDays = new Date(y, mo, 0).getDate();
  const lbl = document.getElementById('mDateMonthLabel'); if (lbl) lbl.textContent = y + '年' + (mo + 1) + '月';
  const today = ymd(new Date());
  let html = '';
  for (let i = startW - 1; i >= 0; i--) html += `<div class="m-date-day muted">${prevDays - i}</div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = y + '-' + mDatePad(mo + 1) + '-' + mDatePad(d);
    let cls = 'm-date-day';
    if (ds === today) cls += ' today';
    if (ds === mPickerStart || ds === mPickerEnd) cls += ' selected';
    else if (mPickerStart && mPickerEnd && ds > mPickerStart && ds < mPickerEnd) cls += ' in-range';
    html += `<div class="${cls}" data-d="${ds}" onclick="onMerchantDayTap('${ds}')">${d}</div>`;
  }
  const total = startW + daysInMonth; const trail = (7 - (total % 7)) % 7;
  for (let d = 1; d <= trail; d++) html += `<div class="m-date-day muted">${d}</div>`;
  grid.innerHTML = html;
}
function onMerchantDayTap(ds) {
  if (mPickerTarget === 'start' || !mPickerStart) { mPickerStart = ds; mPickerEnd = ''; mPickerTarget = 'end'; }
  else if (ds < mPickerStart) { mPickerStart = ds; }
  else { mPickerEnd = ds; mPickerTarget = 'start'; }
  renderMerchantDateGrid(); updateMerchantDateFields();
}
function updateMerchantDateFields() {
  const sf = document.getElementById('mDateStartField'), ef = document.getElementById('mDateEndField');
  const sv = document.getElementById('mDateStartVal'), ev = document.getElementById('mDateEndVal');
  if (sv) sv.textContent = mPickerStart ? mPickerStart.slice(5) : '请选择';
  if (ev) ev.textContent = mPickerEnd ? mPickerEnd.slice(5) : '请选择';
  if (sf) sf.classList.toggle('active', mPickerTarget === 'start');
  if (ef) ef.classList.toggle('active', mPickerTarget === 'end');
}
function confirmMerchantDateRange() {
  merchantOrderStart = mPickerStart; merchantOrderEnd = mPickerEnd;
  updateMerchantOrderTrigger(); closeMerchantDatePicker(); renderMerchantOrders();
}
function resetMerchantOrderRange() {
  merchantOrderStart = ''; merchantOrderEnd = '';
  mPickerStart = ''; mPickerEnd = '';
  updateMerchantOrderTrigger(); renderMerchantOrders();
}
function resetMerchantDateRange() {
  mPickerStart = ''; mPickerEnd = ''; mPickerTarget = 'start';
  renderMerchantDateGrid(); updateMerchantDateFields();
}
function updateMerchantOrderTrigger() {
  const t = document.getElementById('merchantOrderTrigger'); if (!t) return;
  if (merchantOrderStart && merchantOrderEnd) t.textContent = merchantOrderStart.slice(5) + ' 至 ' + merchantOrderEnd.slice(5);
  else if (merchantOrderStart) t.textContent = merchantOrderStart.slice(5) + ' 起';
  else if (merchantOrderEnd) t.textContent = '至 ' + merchantOrderEnd.slice(5);
  else t.textContent = '全部日期';
}
function searchMerchantOrder() {
  const el = document.getElementById('merchantOrderSearch');
  merchantOrderKeyword = el ? el.value : '';
  renderMerchantOrders();
}

// ===== 诊所预约统计（周期 + 维度）=====
let merchantStatPeriod = 'day';
let merchantStatDim = 'order';
function renderMerchantStats() {
  const s = requireMerchant(); if (!s) return;
  renderClinicSwitch();
  const cid = (s.clinicId != null) ? s.clinicId : s.id;
  const wrap = document.getElementById('merchantStatBars'); if (!wrap) return;
  const orders = getOrdersForMerchant(cid);
  let rows = [];
  if (merchantStatDim === 'order') {
    if (merchantStatPeriod === 'day') {
      const buckets = []; const today = new Date(); today.setHours(0, 0, 0, 0);
      for (let i = 29; i >= 0; i--) { const d = new Date(today); d.setDate(today.getDate() - i); buckets.push({ label: (d.getMonth() + 1) + '/' + d.getDate(), key: ymd(d), count: 0 }); }
      orders.forEach(o => { const b = buckets.find(x => x.key === o.time.slice(0, 10)); if (b) b.count++; });
      rows = buckets.map(b => ({ label: b.label, count: b.count }));
    } else if (merchantStatPeriod === 'week') {
      const buckets = []; const now = new Date(); const dow = (now.getDay() + 6) % 7; const sow = new Date(now); sow.setHours(0, 0, 0, 0); sow.setDate(now.getDate() - dow);
      for (let i = 9; i >= 0; i--) { const ws = new Date(sow); ws.setDate(sow.getDate() - i * 7); const we = new Date(ws); we.setDate(ws.getDate() + 6); buckets.push({ label: (ws.getMonth() + 1) + '/' + ws.getDate(), start: ws.getTime(), end: we.getTime() + 86400000 - 1, count: 0 }); }
      orders.forEach(o => { const t = new Date(o.time.slice(0, 10)).getTime(); const b = buckets.find(x => t >= x.start && t <= x.end); if (b) b.count++; });
      rows = buckets.map(b => ({ label: b.label, count: b.count }));
    } else {
      const buckets = []; const now = new Date(); now.setDate(1); now.setHours(0, 0, 0, 0);
      for (let i = 11; i >= 0; i--) { const d = new Date(now.getFullYear(), now.getMonth() - i, 1); buckets.push({ label: (d.getMonth() + 1) + '月', start: d.getTime(), end: new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime() - 1, count: 0 }); }
      orders.forEach(o => { const t = new Date(o.time.slice(0, 10)).getTime(); const b = buckets.find(x => t >= x.start && t <= x.end); if (b) b.count++; });
      rows = buckets.map(b => ({ label: b.label, count: b.count }));
    }
  } else {
    const map = {};
    orders.forEach(o => { map[o.drugName] = (map[o.drugName] || 0) + (o.qty || 1); });
    rows = Object.keys(map).map(k => ({ label: k, count: map[k] })).sort((a, b) => b.count - a.count);
  }
  const max = Math.max(1, ...rows.map(r => r.count));
  wrap.innerHTML = rows.map(r => `
    <div class="m-stat-row">
      <div class="m-stat-label">${escHtml(r.label)}</div>
      <div class="m-stat-bar-wrap"><div class="m-stat-bar" style="width:${Math.round(r.count / max * 100)}%"></div></div>
      <div class="m-stat-count">${r.count}</div>
    </div>`).join('');
  document.querySelectorAll('.m-stat-period').forEach(el => el.classList.toggle('active', el.dataset.period === merchantStatPeriod));
  document.querySelectorAll('.m-stat-dim').forEach(el => el.classList.toggle('active', el.dataset.dim === merchantStatDim));
}
function setMerchantStatPeriod(p) { merchantStatPeriod = p; renderMerchantStats(); }
function setMerchantStatDim(d) { merchantStatDim = d; renderMerchantStats(); }

// ===== 诊所商品管理 =====
let merchantProductKeyword = '';
let merchantProductCategory = '';
let merchantProductOnsale = '';
let merchantProductSelected = [];
function renderMerchantCategoryTabs() {
  const wrap = document.getElementById('merchantCategoryTabs'); if (!wrap) return;
  let html = '<div class="m-prod-cat-tab active" data-cat="" onclick="setMerchantProductCategory(\'\')">全部</div>';
  Object.keys(MERCHANT_CATEGORY_LABELS).forEach(c => { html += `<div class="m-prod-cat-tab" data-cat="${c}" onclick="setMerchantProductCategory('${c}')">${MERCHANT_CATEGORY_LABELS[c]}</div>`; });
  wrap.innerHTML = html;
}
function renderMerchantProducts() {
  const s = requireMerchant(); if (!s) return;
  renderClinicSwitch();
  const cid = (s.clinicId != null) ? s.clinicId : s.id;
  const listEl = document.getElementById('merchantProductList'); if (!listEl) return;
  const onsale = getOnsaleForMerchant(cid);
  const onsaleMap = {}; onsale.forEach(x => onsaleMap[x.drugId] = x.storePrice);
  const kw = merchantProductKeyword.toLowerCase(); const cat = merchantProductCategory;
  const list = drugsData.filter(d => {
    if (kw && !(d.name.toLowerCase().includes(kw) || (d.spec || '').toLowerCase().includes(kw) || (d.spec2 || '').toLowerCase().includes(kw))) return false;
    if (cat && d.category !== cat) return false;
    if (merchantProductOnsale === 'on' && !(d.id in onsaleMap)) return false;
    if (merchantProductOnsale === 'off' && (d.id in onsaleMap)) return false;
    return true;
  });
  if (!list.length) { listEl.innerHTML = '<div class="empty-tip">未找到匹配服务</div>'; return; }
  listEl.innerHTML = list.map(d => {
    const on = d.id in onsaleMap; const price = onsaleMap[d.id];
    const min = (PRODUCT_PRICE_MAP[d.id] || { min: 0 }).min;
    const suggested = (PRODUCT_PRICE_MAP[d.id] || { suggested: 0 }).suggested;
    const sel = merchantProductSelected.includes(d.id);
    const priceDisplay = on
      ? `<span class="m-prod-plabel">售价</span><b class="m-prod-price-val">¥${price}</b>`
      : `<span class="m-prod-plabel">建议价</span><b class="m-prod-price-val muted">¥${suggested}</b>`;
    return `
      <div class="m-prod-row ${on ? 'on' : ''}">
        <label class="m-prod-check"><input type="checkbox" ${sel ? 'checked' : ''} onchange="toggleMerchantProductSelect(${d.id}, this.checked)"></label>
        <div class="m-prod-thumb"><span style="background:${escHtml(d.emojiBg || '#E8F0FE')}">${escHtml(d.emoji || '💊')}</span></div>
        <div class="m-prod-body">
          <div class="m-prod-title">${escHtml(d.name)}</div>
          <div class="m-prod-meta"><span class="m-prod-fac">${escHtml(d.spec || '')}</span><span class="m-prod-dot">·</span><span class="m-prod-spec">${escHtml(d.spec2 || '')}</span></div>
          <div class="m-prod-price-line">${priceDisplay}<span class="m-prod-limit">限¥${min}</span></div>
        </div>
        <div class="m-prod-action">
          <button class="m-prod-adjust" onclick="openMerchantPriceModal(${d.id})">调价</button>
          <button class="m-prod-toggle ${on ? 'on' : ''}" onclick="toggleMerchantProduct(${d.id})">${on ? '下架' : '上架'}</button>
        </div>
      </div>`;
  }).join('');
  updateMerchantBatchBar();
}
function toggleMerchantProduct(drugId) { const s = requireMerchant(); if (!s) return; const cid = (s.clinicId != null) ? s.clinicId : s.id; merchantToggleOnsale(cid, drugId); renderMerchantProducts(); }
let merchantPriceTarget = 0;
function openMerchantPriceModal(drugId) {
  const s = requireMerchant(); if (!s) return;
  const d = drugsData.find(x => x.id === drugId); if (!d) return;
  const cid = (s.clinicId != null) ? s.clinicId : s.id;
  const onsale = getOnsaleForMerchant(cid);
  const item = onsale.find(x => x.drugId === drugId);
  const on = !!item;
  const min = (PRODUCT_PRICE_MAP[drugId] || { min: 0 }).min;
  const cur = on ? item.storePrice : (PRODUCT_PRICE_MAP[drugId] || { suggested: 0 }).suggested;
  merchantPriceTarget = drugId;
  document.getElementById('mpmName').textContent = d.name + (on ? '' : '（未上架）');
  document.getElementById('mpmCurrent').textContent = '¥' + cur;
  document.getElementById('mpmMin').textContent = '¥' + min;
  const input = document.getElementById('mpmInput');
  input.value = cur; input.min = min;
  const ok = document.getElementById('mpmOk');
  const tip = document.getElementById('mpmTip');
  if (on) { ok.disabled = false; tip.textContent = '售价不能低于平台最低限价'; tip.className = 'm-price-modal-tip'; }
  else { ok.disabled = true; tip.textContent = '该商品尚未上架，请先上架后再调价'; tip.className = 'm-price-modal-tip warn'; }
  document.getElementById('merchantPriceMask').classList.add('show');
}
function closeMerchantPriceModal() { document.getElementById('merchantPriceMask').classList.remove('show'); }
function confirmMerchantPrice() {
  const s = requireMerchant(); if (!s) return;
  const drugId = merchantPriceTarget; if (!drugId) return;
  const cid = (s.clinicId != null) ? s.clinicId : s.id;
  if (!getOnsaleForMerchant(cid).find(x => x.drugId === drugId)) { showToast('请先上架该商品后再调价'); return; }
  const min = (PRODUCT_PRICE_MAP[drugId] || { min: 0 }).min;
  const val = parseFloat(document.getElementById('mpmInput').value);
  if (isNaN(val) || val < min) { showToast('售价不能低于平台最低限价 ¥' + min); return; }
  const r = setMerchantProductPrice(cid, drugId, val);
  if (!r.ok) showToast(r.msg); else showToast('价格已保存');
  closeMerchantPriceModal();
  renderMerchantProducts();
}
function toggleMerchantProductSelect(drugId, checked) {
  if (checked) { if (!merchantProductSelected.includes(drugId)) merchantProductSelected.push(drugId); }
  else merchantProductSelected = merchantProductSelected.filter(x => x !== drugId);
  updateMerchantBatchBar();
}
function updateMerchantBatchBar() {
  const bar = document.getElementById('merchantBatchBar'); if (!bar) return;
  const n = merchantProductSelected.length;
  bar.style.display = n > 0 ? 'flex' : 'none';
  const cnt = document.getElementById('merchantBatchCount'); if (cnt) cnt.textContent = n;
}
function merchantBatchOn() { const s = requireMerchant(); if (!s || !merchantProductSelected.length) return; const cid = (s.clinicId != null) ? s.clinicId : s.id; batchToggleMerchantProducts(cid, merchantProductSelected, true); merchantProductSelected = []; renderMerchantProducts(); showToast('已批量上架'); }
function merchantBatchOff() { const s = requireMerchant(); if (!s || !merchantProductSelected.length) return; const cid = (s.clinicId != null) ? s.clinicId : s.id; batchToggleMerchantProducts(cid, merchantProductSelected, false); merchantProductSelected = []; renderMerchantProducts(); showToast('已批量下架'); }
function searchMerchantProduct() { const el = document.getElementById('merchantProductSearch'); merchantProductKeyword = el ? el.value.trim() : ''; renderMerchantProducts(); }
function setMerchantProductCategory(cat) { merchantProductCategory = cat; document.querySelectorAll('.m-prod-cat-tab').forEach(el => el.classList.toggle('active', el.dataset.cat === cat)); renderMerchantProducts(); }
function setMerchantProductOnsaleFilter(v) { merchantProductOnsale = v; document.querySelectorAll('.m-prod-onsale-tab').forEach(el => el.classList.toggle('active', el.dataset.os === v)); renderMerchantProducts(); }

// ===== 诊所店铺管理（只读）=====
function renderMerchantStore() {
  const s = requireMerchant(); if (!s) return;
  renderClinicSwitch();
  const cid = (s.clinicId != null) ? s.clinicId : s.id;
  const m = merchantsData.find(x => x.id === cid); if (!m) return;
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set('storeName', m.name); set('storeAddr', m.addr); set('storePhone', m.phone);
  set('storeHours', m.hours); set('storeDistance', m.distance); set('storeTags', (m.tags || []).join('、'));
  const certWrap = document.getElementById('storeCertList');
  if (certWrap && m.certs) certWrap.innerHTML = m.certs.map((c, i) => `<img class="store-cert-thumb" src="${c}" onclick="openImagePreview('${c}')" alt="资质${i + 1}">`).join('');
}

// ===== 诊所修改密码 =====
function doChangeMerchantPassword() {
  const s = requireMerchant(); if (!s) return;
  const oldEl = document.getElementById('cpOld'); const newEl = document.getElementById('cpNew'); const confirmEl = document.getElementById('cpConfirm');
  const oldV = oldEl ? oldEl.value : ''; const newV = newEl ? newEl.value : ''; const confirmV = confirmEl ? confirmEl.value : '';
  if (!oldV) { showToast('请输入原密码'); return; }
  if (getMerchantPassword(s.id) !== oldV) { showToast('原密码错误'); return; }
  if (!newV || newV.length < 6) { showToast('新密码至少6位'); return; }
  if (newV !== confirmV) { showToast('两次输入的新密码不一致'); return; }
  setMerchantPassword(s.id, newV);
  showToast('密码修改成功');
  setTimeout(() => { location.href = 'merchant.html'; }, 1000);
}

// ===================== 学术园地 (Academic Garden) =====================
const ARTICLE_CATEGORIES = [
  { id:'c1', name:'临床医学', children:[
    { id:'c1-1', name:'血液科', children:[
      { id:'c1-1-1', name:'免疫球蛋白应用' },
      { id:'c1-1-2', name:'白蛋白应用' },
    ]},
    { id:'c1-2', name:'药学服务', children:[
      { id:'c1-2-1', name:'合理用药' },
      { id:'c1-2-2', name:'药物治疗管理' },
    ]},
  ]},
  { id:'c2', name:'药学进展', children:[
    { id:'c2-1', name:'生物制剂', children:[
      { id:'c2-1-1', name:'单抗类药物' },
      { id:'c2-1-2', name:'重组蛋白' },
    ]},
    { id:'c2-2', name:'临床药理', children:[
      { id:'c2-2-1', name:'药代动力学' },
      { id:'c2-2-2', name:'药物基因组学' },
    ]},
  ]},
  { id:'c3', name:'政策规范', children:[
    { id:'c3-1', name:'行业规范', children:[
      { id:'c3-1-1', name:'GSP规范' },
      { id:'c3-1-2', name:'处方管理' },
    ]},
    { id:'c3-2', name:'医保政策', children:[
      { id:'c3-2-1', name:'医保目录' },
      { id:'c3-2-2', name:'带量采购' },
    ]},
  ]},
];

const ARTICLES = [
  { id:'a1', title:'静注人免疫球蛋白在原发性免疫缺陷病中的应用专家共识', author:'中国药师协会', date:'2026-06-18', cat:'c1-1-1', emoji:'🩸', bg:'#FDEBEC', summary:'本文系统阐述了静注人免疫球蛋白(IVIG)在原发性免疫缺陷病(PID)中的适应证、给药方案与安全性管理，为临床合理用药提供循证依据。', attachments:[{name:'IVIG专家共识.pdf', file:'articles/a1.pdf'}] },
  { id:'a2', title:'人血白蛋白在肝硬化腹水治疗中的循证评价', author:'中华医学会肝病学分会', date:'2026-06-10', cat:'c1-1-2', emoji:'💉', bg:'#E8F0FE', summary:'综述人血白蛋白用于肝硬化腹水、自发性细菌性腹膜炎及肝肾综合征的循证证据，明确推荐剂量与疗程。', attachments:[{name:'人血白蛋白循证评价.pdf', file:'articles/a2.pdf'}] },
  { id:'a3', title:'慢病患者多重用药的风险识别与药物治疗管理', author:'王立明 主任药师', date:'2026-05-28', cat:'c1-2-1', emoji:'💊', bg:'#E6F7EE', summary:'针对老年慢病患者多重用药现状，提出用药风险筛查工具与药师主导的药物治疗管理(MTM)路径。', attachments:[{name:'多重用药管理.pdf', file:'articles/a3.pdf'}] },
  { id:'a4', title:'抗菌药物合理使用与耐药防控实践指南', author:'医院感染管理专业委员会', date:'2026-05-15', cat:'c1-2-2', emoji:'🧪', bg:'#FFF4E5', summary:'围绕抗菌药物分级管理、围手术期预防用药及耐药菌防控，给出基层医疗机构落地操作建议。', attachments:[{name:'抗菌药物合理使用.pdf', file:'articles/a4.pdf'}] },
  { id:'a5', title:'PD-1/PD-L1 单抗类药物的作用机制与临床研究进展', author:'肿瘤药学协作组', date:'2026-06-02', cat:'c2-1-1', emoji:'🧬', bg:'#F3E8FF', summary:'梳理免疫检查点抑制剂的作用机制、获批适应证及真实世界安全性数据，展望联合治疗方向。', attachments:[{name:'单抗类药物进展.pdf', file:'articles/a5.pdf'}] },
  { id:'a6', title:'重组人凝血因子Ⅷ在血友病A治疗中的应用', author:'血液病药学组', date:'2026-04-22', cat:'c2-1-2', emoji:'🔬', bg:'#E0F2FE', summary:'比较重组与血浆源凝血因子Ⅷ的药效与免疫原性，规范按需与预防替代治疗策略。', attachments:[{name:'凝血因子VIII应用.pdf', file:'articles/a6.pdf'}] },
  { id:'a7', title:'慢性肾病患者药代动力学特征与剂量调整', author:'临床药理学杂志', date:'2026-05-05', cat:'c2-2-1', emoji:'📈', bg:'#FEF3F2', summary:'阐述肾功能减退对药物清除的影响，建立基于估算肾小球滤过率的剂量调整框架与监护要点。', attachments:[{name:'CKD剂量调整.pdf', file:'articles/a7.pdf'}] },
  { id:'a8', title:'药物基因组学指导华法林个体化用药专家意见', author:'精准药学联盟', date:'2026-04-12', cat:'c2-2-2', emoji:'🧾', bg:'#ECFDF5', summary:'基于CYP2C9与VKORC1基因型制定华法林初始剂量算法，降低出血与血栓风险。', attachments:[{name:'华法林个体化用药.pdf', file:'articles/a8.pdf'}] },
  { id:'a9', title:'服务经营质量管理规范(GSP)现场检查要点解读', author:'服务监管科学研究会', date:'2026-03-30', cat:'c3-1-1', emoji:'📋', bg:'#F0F9FF', summary:'逐条解读服务经营质量管理规范对冷链、储存与追溯的要求，梳理零售药店合规自查清单。', attachments:[{name:'GSP检查要点.pdf', file:'articles/a9.pdf'}] },
  { id:'a10', title:'处方审核管理办法与常见不合理处方分析', author:'药事管理专业委员会', date:'2026-03-18', cat:'c3-1-2', emoji:'📝', bg:'#FFF7ED', summary:'结合处方审核规范，归纳配伍禁忌、超剂量等典型问题处方并给出干预模板。', attachments:[{name:'处方审核分析.pdf', file:'articles/a10.pdf'}] },
  { id:'a11', title:'新版国家医保服务目录调整趋势分析', author:'医保政策研究中心', date:'2026-02-25', cat:'c3-2-1', emoji:'🏥', bg:'#F5F3FF', summary:'分析近年医保目录谈判准入特征，解读创新药补短板惠民生的遴选逻辑。', attachments:[{name:'医保目录调整.pdf', file:'articles/a11.pdf'}] },
  { id:'a12', title:'服务集中带量采购对临床用药结构的影响', author:'卫生经济与政策组', date:'2026-02-10', cat:'c3-2-2', emoji:'📊', bg:'#ECFEFF', summary:'基于带量采购落地数据，评估中选服务替代、费用节约与供应保障情况。', attachments:[{name:'带量采购影响.pdf', file:'articles/a12.pdf'}] },
];

function escapeHTML(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function academicCatName(catId){
  for(const l1 of ARTICLE_CATEGORIES) for(const l2 of (l1.children||[])) for(const l3 of (l2.children||[])) if(l3.id===catId) return l3.name;
  return '';
}
function academicCatPathNames(id){
  for(const l1 of ARTICLE_CATEGORIES){
    if(l1.id===id) return [l1.name];
    for(const l2 of (l1.children||[])){
      if(l2.id===id) return [l1.name,l2.name];
      for(const l3 of (l2.children||[])) if(l3.id===id) return [l1.name,l2.name,l3.name];
    }
  }
  return [];
}
function academicCardHTML(a){
  return `<div class="academic-card" onclick="goAcademicDetail('${a.id}')">
    <div class="academic-card-title">${a.title}</div>
    <div class="academic-card-meta">
      <span class="academic-card-date">${a.date}</span>
      <span class="academic-card-cat">${academicCatName(a.cat)}</span>
      <span class="academic-card-author">${a.author}</span>
    </div>
  </div>`;
}

// ---- Article list (academic.html) ----
let academicCat = null;
function renderAcademicList(){
  const list = document.getElementById('academicList');
  if(!list) return;
  const data = (!academicCat) ? ARTICLES : ARTICLES.filter(a => a.cat.indexOf(academicCat) === 0);
  list.innerHTML = data.length ? data.map(academicCardHTML).join('') : '<div class="academic-empty">该分类下暂无文章</div>';
  updateAcademicCatChip();
}
function updateAcademicCatChip(){
  const chip = document.getElementById('academicCatChip');
  if(!chip) return;
  chip.textContent = academicCat ? academicCatPathNames(academicCat).join(' / ') : '全部分类';
  const clearBtn = document.getElementById('academicCatClear');
  if(clearBtn) clearBtn.style.display = academicCat ? 'inline-block' : 'none';
}
function goAcademicSearch(q){
  const s = (q != null ? q : (document.getElementById('academicSearchInput')?.value || '')).trim();
  location.href = 'academic-search.html?q=' + encodeURIComponent(s);
}

// ---- 3-level category cascade picker ----
let acSel = [null,null,null];
function academicCatToPath(id){
  if(!id) return [null,null,null];
  for(const l1 of ARTICLE_CATEGORIES){
    if(l1.id===id) return [l1.id,null,null];
    for(const l2 of (l1.children||[])){
      if(l2.id===id) return [l1.id,l2.id,null];
      for(const l3 of (l2.children||[])) if(l3.id===id) return [l1.id,l2.id,l3.id];
    }
  }
  return [null,null,null];
}
function openAcademicCategoryPicker(){
  acSel = academicCatToPath(academicCat);
  renderAcademicCatColumns();
  document.getElementById('academicCatSheet')?.classList.add('show');
}
function closeAcademicCategoryPicker(){ document.getElementById('academicCatSheet')?.classList.remove('show'); }
function renderAcademicCatColumns(){
  const c1 = document.getElementById('acCatCol1');
  const c2 = document.getElementById('acCatCol2');
  const c3 = document.getElementById('acCatCol3');
  if(c1) c1.innerHTML = ARTICLE_CATEGORIES.map(n=>`<div class="ac-cat-row${acSel[0]===n.id?' active':''}" onclick="acPick(1,'${n.id}')">${n.name}</div>`).join('');
  const l1 = ARTICLE_CATEGORIES.find(n=>n.id===acSel[0]);
  if(c2) c2.innerHTML = (l1&&l1.children) ? l1.children.map(n=>`<div class="ac-cat-row${acSel[1]===n.id?' active':''}" onclick="acPick(2,'${n.id}')">${n.name}</div>`).join('') : '';
  const l2 = (l1&&l1.children) ? l1.children.find(n=>n.id===acSel[1]) : null;
  if(c3) c3.innerHTML = (l2&&l2.children) ? l2.children.map(n=>`<div class="ac-cat-row${acSel[2]===n.id?' active':''}" onclick="acPick(3,'${n.id}')">${n.name}</div>`).join('') : '';
}
function acPick(level,id){
  if(level===1){ acSel[0]=id; acSel[1]=null; acSel[2]=null; }
  else if(level===2){ acSel[1]=id; acSel[2]=null; }
  else { acSel[2]=id; }
  renderAcademicCatColumns();
}
function confirmAcademicCategory(){
  academicCat = acSel[2] || acSel[1] || acSel[0] || null;
  closeAcademicCategoryPicker();
  renderAcademicList();
}
function resetAcademicCategory(){
  academicCat = null;
  closeAcademicCategoryPicker();
  renderAcademicList();
}

// ---- Article search results (academic-search.html) ----
function renderAcademicSearch(){
  const el = document.getElementById('academicSearchList');
  if(!el) return;
  const q = (getParam('q')||'').trim();
  const hint = document.getElementById('academicSearchHint');
  if(hint) hint.textContent = q ? ('搜索：“' + q + '”') : '全部文章';
  const inputEl = document.getElementById('academicSearchInput');
  if(inputEl) inputEl.value = q;
  const kw = q.toLowerCase();
  const data = ARTICLES.filter(a => a.title.toLowerCase().includes(kw) || a.summary.toLowerCase().includes(kw));
  if(!data.length){
    el.innerHTML = `<div class="academic-empty-box">
      <div class="academic-empty-icon">🔍</div>
      <div class="academic-empty-title">未找到相关文章</div>
      <div class="academic-empty-sub">没有与“${escapeHTML(q)}”匹配的结果</div>
      <button class="btn-primary" onclick="location.href='academic.html'">返回文章列表</button>
    </div>`;
    return;
  }
  el.innerHTML = `<div class="academic-search-count">找到 ${data.length} 篇相关文章</div>` + data.map(academicCardHTML).join('');
}

// ---- Article detail (academic-detail.html) ----
function goAcademicDetail(id){ location.href = 'academic-detail.html?id=' + encodeURIComponent(id); }
function renderAcademicDetail(){
  const el = document.getElementById('academicDetail');
  if(!el) return;
  const a = ARTICLES.find(x=>x.id === getParam('id')) || ARTICLES[0];
  if(!a){ el.innerHTML = '<div class="academic-empty">文章不存在</div>'; return; }
  const attachHTML = (a.attachments||[]).map(at=>`
    <div class="ac-attach">
      <div class="ac-attach-icon">📄</div>
      <div class="ac-attach-info">
        <div class="ac-attach-name">${at.name}</div>
        <div class="ac-attach-type">PDF 附件</div>
      </div>
      <div class="ac-attach-actions">
        <button class="ac-btn-preview" onclick="openArticlePreview('${at.file}','${escapeHTML(at.name)}')">预览</button>
        <a class="ac-btn-download" href="${at.file}" download="${escapeHTML(at.name)}">下载</a>
      </div>
    </div>`).join('');
  el.innerHTML = `
    <h1 class="ac-detail-title">${a.title}</h1>
    <div class="ac-detail-meta">
      <span>${a.author}</span><span class="ac-dot">·</span><span>${a.date}</span>
      <span class="ac-detail-cat">${academicCatName(a.cat)}</span>
    </div>
    <div class="ac-detail-summary">
      <div class="ac-detail-summary-label">摘要</div>
      <div class="ac-detail-summary-text">${a.summary}</div>
    </div>
    <div class="ac-detail-attach-title">文章附件（PDF）</div>
    <div class="ac-attach-list">${attachHTML || '<div class="academic-empty">暂无附件</div>'}</div>
  `;
}
function openArticlePreview(file, name){
  const m = document.getElementById('articlePreviewModal');
  const frame = document.getElementById('articlePreviewFrame');
  if(frame) frame.src = file;
  const dn = document.getElementById('articlePreviewDownload');
  if(dn){ dn.href = file; try{ dn.download = name || ''; }catch(e){} }
  const nm = document.getElementById('articlePreviewName');
  if(nm) nm.textContent = name || '';
  if(m) m.classList.add('show');
}
function closeArticlePreview(){
  const m = document.getElementById('articlePreviewModal');
  const frame = document.getElementById('articlePreviewFrame');
  if(frame) frame.src = 'about:blank';
  if(m) m.classList.remove('show');
}

// ============== AI 医疗智能体 ==============
let aiConvs = [];
let aiCurrentId = null;
let aiDeep = false;
let aiAttachedImage = null; // dataURL
let aiStreaming = false;

const AI_SUGGESTIONS = [
  '非小细胞肺癌 EGFR 罕见突变的靶向治疗',
  '三阴性乳腺癌的免疫治疗进展',
  'ANCA 相关性肾小球肾炎早期诊断的思路是什么，如何与其他疾病鉴别',
  '高血压合并糖尿病患者首选哪一类降压药？',
  '儿童急性淋巴细胞白血病的最新治疗方案',
  '肝硬化合并上消化道出血的急救处理'
];

const AI_STORE_KEY = 'shangyao_ai_convs_v1';

function loadAIConvs(){
  try {
    const raw = localStorage.getItem(AI_STORE_KEY);
    aiConvs = raw ? JSON.parse(raw) : [];
  } catch(e) { aiConvs = []; }
  if(!Array.isArray(aiConvs)) aiConvs = [];
}
function saveAIConvs(){
  try { localStorage.setItem(AI_STORE_KEY, JSON.stringify(aiConvs)); } catch(e) {}
}
function getCurrentConv(){
  return aiConvs.find(c => c.id === aiCurrentId) || null;
}
function newAIConversation(){
  if(aiStreaming){ showToast('正在生成回复，请稍候'); return; }
  const c = { id: 'aic' + Date.now(), title: '新对话', messages: [], createdAt: Date.now(), updatedAt: Date.now() };
  aiConvs.unshift(c);
  aiCurrentId = c.id;
  saveAIConvs();
  renderAI();
  closeAIHistory();
  const t = document.getElementById('aiTextInput');
  if(t) setTimeout(() => t.focus(), 50);
}
function switchAIConversation(id){
  if(aiStreaming){ showToast('正在生成回复，请稍候'); return; }
  aiCurrentId = id;
  saveAIConvs();
  renderAI();
  closeAIHistory();
}
function deleteAIConversation(id){
  if(!confirm('确定删除该对话？')) return;
  aiConvs = aiConvs.filter(c => c.id !== id);
  if(aiCurrentId === id) aiCurrentId = null;
  saveAIConvs();
  renderAI();
  renderAIHistory();
}
function clearAllAIHistory(){
  if(!aiConvs.length){ showToast('暂无历史对话'); return; }
  if(!confirm('确定清空全部历史对话？')) return;
  aiConvs = [];
  aiCurrentId = null;
  saveAIConvs();
  renderAI();
  renderAIHistory();
}

function renderAI(){
  // Suggestion list
  const sl = document.getElementById('aiSuggestList');
  if(sl) sl.innerHTML = AI_SUGGESTIONS.map(q => `<div class="ai-suggest-item" onclick="askAISuggest('${q.replace(/'/g,"\\'")}')">${q}<span class="ai-suggest-arrow">›</span></div>`).join('');

  const c = getCurrentConv();
  const welcome = document.getElementById('aiWelcome');
  const msgs = document.getElementById('aiMessages');
  if(!c || !c.messages.length){
    if(welcome) welcome.style.display = 'block';
    if(msgs) msgs.style.display = 'none';
    return;
  }
  if(welcome) welcome.style.display = 'none';
  if(msgs) msgs.style.display = 'block';
  msgs.innerHTML = c.messages.map(renderAIMessageHTML).join('');
  scrollAIMessagesToBottom();
}
function renderAIMessageHTML(m){
  const time = m.time ? `<div class="ai-msg-time">${m.time}</div>` : '';
  if(m.role === 'user'){
    const img = m.image ? `<div class="ai-msg-image"><img src="${m.image}" onclick="openImagePreview('${m.image}')" alt="图片"></div>` : '';
    const txt = m.text ? `<div class="ai-msg-bubble user">${escapeAIHTML(m.text)}</div>` : '';
    return `<div class="ai-msg ai-msg-user">${img}${txt}${time}</div>`;
  }
  // AI
  const txt = m.text ? `<div class="ai-msg-bubble ai">${m.text}</div>` : '';
  return `<div class="ai-msg ai-msg-ai">
    <div class="ai-msg-avatar">🤖</div>
    <div class="ai-msg-body">${txt}${time}</div>
  </div>`;
}
function escapeAIHTML(s){ return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function scrollAIMessagesToBottom(){
  const msgs = document.getElementById('aiMessages');
  if(!msgs) return;
  // Scroll the .app-container (since .ai-messages is inside the flex container)
  setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 30);
}
function formatAITime(ts){
  const d = new Date(ts || Date.now());
  const p = n => (n < 10 ? '0' + n : '' + n);
  return p(d.getHours()) + ':' + p(d.getMinutes());
}

function renderAIHistory(){
  const list = document.getElementById('aiDrawerList');
  if(!list) return;
  if(!aiConvs.length){
    list.innerHTML = '<div class="ai-drawer-empty">还没有历史对话<br>点击右上角"新建对话"开始</div>';
    return;
  }
  list.innerHTML = aiConvs.map(c => {
    const last = c.messages.length ? c.messages[c.messages.length - 1] : null;
    const preview = last ? (last.role === 'user' ? (last.text || '[图片]') : (last.text || '').slice(0, 40)) : '空对话';
    const isActive = c.id === aiCurrentId;
    return `<div class="ai-drawer-item ${isActive ? 'active' : ''}" onclick="switchAIConversation('${c.id}')">
      <div class="ai-drawer-item-title">${escapeAIHTML(c.title || '新对话')}</div>
      <div class="ai-drawer-item-preview">${escapeAIHTML(preview)}</div>
      <div class="ai-drawer-item-del" onclick="event.stopPropagation();deleteAIConversation('${c.id}')">×</div>
    </div>`;
  }).join('');
}
function openAIHistory(){
  renderAIHistory();
  const m = document.getElementById('aiDrawerMask');
  if(m) m.style.display = 'flex';
}
function closeAIHistory(){
  const m = document.getElementById('aiDrawerMask');
  if(m) m.style.display = 'none';
}

function toggleAIDeepSearch(){
  aiDeep = !aiDeep;
  const p = document.getElementById('aiDeepPill');
  if(p) p.classList.toggle('on', aiDeep);
  showToast(aiDeep ? '已开启深度检索' : '已关闭深度检索');
}

function onAIInputChange(){
  const t = document.getElementById('aiTextInput');
  if(!t) return;
  t.style.height = 'auto';
  t.style.height = Math.min(t.scrollHeight, 96) + 'px';
}
function onAIInputKeydown(e){
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    sendAIMessage();
  }
}

function onAIFileSelected(e){
  const f = e.target.files && e.target.files[0];
  if(!f) return;
  if(!/^image\//.test(f.type)){ showToast('仅支持图片文件'); e.target.value = ''; return; }
  if(f.size > 5 * 1024 * 1024){ showToast('图片大小不能超过 5MB'); e.target.value = ''; return; }
  const fr = new FileReader();
  fr.onload = ev => {
    aiAttachedImage = ev.target.result;
    const img = document.getElementById('aiImagePreviewImg');
    if(img) img.src = aiAttachedImage;
    const pv = document.getElementById('aiImagePreview');
    if(pv) pv.style.display = 'block';
  };
  fr.readAsDataURL(f);
  e.target.value = '';
}
function clearAIAttachedImage(){
  aiAttachedImage = null;
  const pv = document.getElementById('aiImagePreview');
  if(pv) pv.style.display = 'none';
  const img = document.getElementById('aiImagePreviewImg');
  if(img) img.src = '';
}

function askAISuggest(q){
  if(aiStreaming){ showToast('正在生成回复，请稍候'); return; }
  const t = document.getElementById('aiTextInput');
  if(t) t.value = q;
  sendAIMessage();
}

function sendAIMessage(){
  if(aiStreaming){ showToast('正在生成回复，请稍候'); return; }
  const t = document.getElementById('aiTextInput');
  const text = (t && t.value || '').trim();
  const image = aiAttachedImage;
  if(!text && !image){ showToast('请输入问题或选择图片'); return; }
  // ensure a current conversation
  let c = getCurrentConv();
  if(!c){
    c = { id: 'aic' + Date.now(), title: text ? text.slice(0, 24) : '图片对话', messages: [], createdAt: Date.now(), updatedAt: Date.now() };
    aiConvs.unshift(c);
    aiCurrentId = c.id;
  }
  const userMsg = { role: 'user', text, image, time: formatAITime() };
  c.messages.push(userMsg);
  c.updatedAt = Date.now();
  if(c.title === '新对话' && text){
    c.title = text.slice(0, 24);
  }
  // Optimistic render
  renderAI();
  if(t){ t.value = ''; t.style.height = 'auto'; }
  clearAIAttachedImage();
  // Simulate AI thinking + streaming reply
  streamAIReply(c, text, image);
}

function streamAIReply(conv, userText, userImage){
  aiStreaming = true;
  const msgs = document.getElementById('aiMessages');
  if(msgs) msgs.style.display = 'block';
  const welcome = document.getElementById('aiWelcome');
  if(welcome) welcome.style.display = 'none';

  // Typing indicator
  const typingId = '__typing__';
  const typingHTML = `<div class="ai-msg ai-msg-ai" id="${typingId}">
    <div class="ai-msg-avatar">🤖</div>
    <div class="ai-msg-body"><div class="ai-msg-bubble ai ai-typing"><span></span><span></span><span></span></div></div>
  </div>`;
  if(msgs) msgs.insertAdjacentHTML('beforeend', typingHTML);
  scrollAIMessagesToBottom();

  const replyText = composeAIReply(userText, userImage, conv);
  const replyMsg = { role: 'ai', text: '', time: formatAITime() };
  conv.messages.push(replyMsg);
  conv.updatedAt = Date.now();

  let i = 0;
  const speed = userImage ? 28 : 22; // chars per tick
  const tick = () => {
    if(i >= replyText.length){
      // remove typing indicator
      const t = document.getElementById(typingId);
      if(t) t.remove();
      // rewrite the streaming bubble to its final HTML
      renderAI();
      aiStreaming = false;
      saveAIConvs();
      return;
    }
    i = Math.min(i + speed, replyText.length);
    replyMsg.text = replyText.slice(0, i);
    // Update only the last AI bubble in DOM
    const last = msgs.querySelector('.ai-msg-ai:last-of-type .ai-msg-bubble');
    if(last && last.classList.contains('ai-typing')) last.remove();
    // Find or create the streaming bubble
    let bubble = msgs.querySelector('.ai-msg-stream');
    if(!bubble){
      const aiMsgs = msgs.querySelectorAll('.ai-msg-ai');
      const lastAi = aiMsgs[aiMsgs.length - 1];
      if(lastAi){
        const body = lastAi.querySelector('.ai-msg-body');
        if(body){
          body.insertAdjacentHTML('afterbegin', `<div class="ai-msg-bubble ai ai-msg-stream"></div>`);
          bubble = body.querySelector('.ai-msg-stream');
        }
      }
    }
    if(bubble) bubble.innerHTML = escapeAIHTML(replyMsg.text) + '<span class="ai-cursor">▍</span>';
    scrollAIMessagesToBottom();
    setTimeout(tick, 30);
  };
  setTimeout(tick, 600);
}

function composeAIReply(userText, userImage, conv){
  // Rule-based response: keyword + length-aware
  const t = (userText || '').trim();
  const hasImg = !!userImage;

  if(hasImg && !t){
    return '我已收到您上传的图片。提示：作为辅助诊疗系统，我无法对医学影像作直接诊断，但可以帮您解读报告中的关键术语、提示下一步需要关注的检查项目或与相关临床指南对应。请补充图片说明（检查类型/部位）或您想了解的问题，我会为您整理要点。';
  }
  if(hasImg && t){
    return '已收到您上传的图片和文字问题"' + t.slice(0, 40) + '"。作为辅助诊疗工具，我不能直接读图诊断，但会基于您描述的问题和图中的关键信息给出循证要点与可参考的检查/分诊建议。如能补充报告类型（如 CT、MRI、超声、生化报告等）以及您关注的症状，我可以给出更精准的回应。';
  }
  // pure text
  const lower = t.toLowerCase();
  if(/^(你好|您好|hi|hello|嗨)/i.test(t)){
    return '您好！我是循证医学智能体，可以帮您整理权威指南要点、解读诊疗思路、对比治疗方案。请告诉我您想了解的具体问题，例如某种疾病的最新治疗进展、药物选择或检查解读。';
  }
  if(/谢谢|感谢|thanks/i.test(t)){
    return '不客气！如有进一步问题，例如具体剂量、联合方案或随访节点，随时告诉我。';
  }
  if(aiDeep){
    return '【深度检索模式】基于您的问题"' + t + '"，我已检索近 5 年 Cochrane、PubMed 及主要中文核心期刊摘要。下面给出 5 条核心要点：\n\n1) 当前指南对您所述问题的Ⅰ类推荐与证据等级；\n2) 一线治疗方案及典型剂量/疗程；\n3) 替代方案与适用人群；\n4) 关键监测指标与不良反应管理；\n5) 与最新研究进展的衔接点。\n\n如需我把上述任一部分展开为完整循证摘要，请告诉我您优先关注的章节。';
  }
  if(/egfr|肺癌|非小细胞|突变/.test(t)){
    return '非小细胞肺癌（NSCLC）EGFR 突变治疗要点（参考 CSCO/NCCN 指南）：\n\n• 常见突变（19del、L858R）首选第三代 EGFR-TKI 奥希替尼；\n• 罕见突变（G719X、L861Q、S768I）阿法替尼为优先推荐；\n• Exon 20 插入突变可考虑 amivantamab、mobocertinib 或含铂化疗；\n• 耐药后建议再次活检 + NGS，明确 T790M/C797S/小细胞转化等机制，再选后续方案。\n\n具体用药需结合 PS 评分、合并症与药物可及性，最终方案请主管医师确认。';
  }
  if(/三阴|乳腺癌|tnbc|免疫/.test(t)){
    return '三阴性乳腺癌（TNBC）免疫治疗要点：\n\n• 早期高危 TNBC：新辅助化疗 + 帕博利珠单抗（KEYNOTE-522 方案），术后继续 pembro 辅助；\n• 转移性 PD-L1 CPS≥10 TNBC：化疗 + pembro 一线；\n• 转移性 gBRCA 突变：PARP 抑制剂（奥拉帕利/他拉唑帕利）；\n• 抗体偶联药：sacituzumab govitecan、datopotamab deruxtecan 用于后线。\n\n用药前需评估 PD-L1 表达、BRCA 状态、心功能与基线影像。';
  }
  if(/anca|肾小球|鉴别/.test(t)){
    return 'ANCA 相关性血管炎（AAV）肾损害早期诊断思路：\n\n1) 临床线索：血尿/蛋白尿/急进性肾功能下降 + 肺/耳鼻喉/皮肤多系统受累；\n2) 实验室：ANCA 检测（MPO/PR3）、尿沉渣、SCr/eGFR、补体（多正常）；\n3) 鉴别：抗 GBM 病、IgA 肾病、狼疮性肾炎、紫癜性肾炎、感染性心内膜炎肾损害、药物性；\n4) 必要时肾活检：寡免疫复合物新月体肾炎；\n5) 治疗：诱导期（糖皮质激素 + 环磷酰胺或利妥昔单抗），维持期（硫唑嘌呤/吗替麦考酚酯/利妥昔单抗）。\n\n建议联合肾内科与风湿免疫科共同管理。';
  }
  if(/高血压|糖尿病|降压/.test(t)){
    return '高血压合并糖尿病患者降压药选择：\n\n• 首选：ACEI 或 ARB（如缬沙坦、厄贝沙坦、培哚普利）——降压同时保护肾脏、减少蛋白尿；\n• 二线：CCB（氨氯地平）、小剂量噻嗪类；\n• 慎用：β受体阻滞剂（可能掩盖低血糖症状、影响糖脂代谢）；\n• 目标：一般<130/80 mmHg，老年/虚弱者适当放宽。\n\n用药前需查肾素-醛固酮、肾功能、电解质。';
  }
  if(/儿童|急性淋巴|白血病/.test(t)){
    return '儿童急性淋巴细胞白血病（ALL）最新治疗要点：\n\n• 危险分层：年龄、初诊 WBC、染色体/分子（NUTD15、Ph-like、IKZF1）、MRD；\n• 化疗：VDLP / CAM 等方案，按危险度调整强度；\n• 靶向：Ph+ ALL 加 TKI（伊马替尼/达沙替尼）；\n• 免疫：CD19/CD22 双靶（blinatumomab、inotuzumab）、CAR-T 用于难治复发；\n• 支持治疗：感染防控、肿瘤溶解综合征预防、营养心理。\n\n强烈建议在儿童血液病中心规范化疗与全程管理。';
  }
  if(/肝硬化|上消化|出血|急救/.test(t)){
    return '肝硬化合并上消化道出血急救流程：\n\n1) 评估气道、呼吸、循环，建立两条静脉通路；\n2) 液体复苏（晶体优先），目标 MAP≥65 mmHg；Hb 70-80 g/L 输血阈值；\n3) 早期（<12h）急诊内镜：食管胃底静脉曲张破裂首选内镜下套扎/组织胶；\n4) 药物：生长抑素/奥曲肽 + 特利加压素，急性期持续 3-5 天；\n5) 抗菌：头孢曲松 1g/d 预防 SBP；\n6) 难控制出血：TIPS 备选；\n7) 后续：非选择性 β 受体阻滞剂（普萘洛尔/卡维地洛）二级预防。\n\n需重症监护、内镜、介入、肝病中心多学科联动。';
  }
  // fallback
  if(t.length <= 4){
    return '您的问题"' + t + '"较为简短，能再多描述一些吗？例如：\n• 涉及的疾病/症状；\n• 关注的是诊断、治疗还是随访；\n• 患者的关键基线（年龄、合并症、用药）。\n\n提供越具体，我能给到越贴近指南的要点。';
  }
  return '我已记录您的问题"' + t.slice(0, 60) + '"。作为辅助诊疗智能体，我从循证医学角度整理如下要点：\n\n1) 关键定义/诊断标准（按权威指南：CSCO/NCCN/ESC 等）；\n2) 一线方案与替代方案的差异、适用人群；\n3) 需重点监测的指标与不良反应管理；\n4) 随访与生活方式建议。\n\n如需我对上述任一部分展开为循证摘要，或对比具体药物剂量、特殊人群（老年/妊娠/肝肾不全）调整方案，请直接告诉我章节或补充背景。';
}

document.addEventListener('DOMContentLoaded', () => {
  syncUserLogin();
  const page = document.body.dataset.page;
  if (page === 'home') {
    restoreLocation();
    initSwiper();
    initFeaturedSection();
    renderHomeMerchants();
    setTimeout(() => {
      if (!localStorage.getItem('locationPromptShown')) {
        showLocationModal();
        localStorage.setItem('locationPromptShown', 'true');
      }
    }, 1000);
  } else if (page === 'drug-detail') {
    renderDrugDetail(parseInt(getParam('id')) || 1);
  } else if (page === 'merchant-detail') {
    renderMerchantDetail(parseInt(getParam('id')) || 1);
  } else if (page === 'appointment') {
    initDateSelector();
    prefillAppointment();
  } else if (page === 'my-appointments') {
    renderMyAppointments();
    updateApptOrderTrigger();
  } else if (page === 'ai') {
    loadAIConvs();
    renderAI();
  } else if (page === 'map-picker') {
    setTimeout(() => initMapPicker(), 200);
  } else if (page === 'merchant') {
    renderMerchantHome();
  } else if (page === 'merchant-orders') {
    renderMerchantOrders();
  } else if (page === 'merchant-stats') {
    renderMerchantStats();
  } else if (page === 'merchant-products') {
    renderMerchantCategoryTabs();
    renderMerchantProducts();
  } else if (page === 'merchant-store') {
    renderMerchantStore();
  } else if (page === 'merchant-login') {
    refreshMerchantPwdTab();
    onMerchantAgreeChange();
  } else if (page === 'all-drugs') {
    renderAllDrugs();
  } else if (page === 'search') {
    renderSearchHistory();
  } else if (page === 'profile') {
    renderProfile();
  } else if (page === 'academic') {
    renderAcademicList();
  } else if (page === 'academic-detail') {
    renderAcademicDetail();
  } else if (page === 'academic-search') {
    renderAcademicSearch();
  }
});
