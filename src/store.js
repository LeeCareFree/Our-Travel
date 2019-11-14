import { Container } from 'unstated';
export { Subscribe } from 'unstated';

export const users = [
  {
    name: '李元潮',
    img: '/profile3.jpg',
    location: 'San Francisco',
    bio:
      '心要野，哈哈哈！',
    following: 6666,
    followers: 666,
    photos: 94,
    days: 32,
    trips: ['杭州', '苏州', '南京', '广州']
  },
  {
    name: '孙龙',
    img: '/profile1.jpg',
    location: 'Boston',
    bio:
      '有趣的人生，一半爱恨情仇，一半山川湖海。',
    following: 6666,
    followers: 666,
    photos: 32,
    days: 5,
    trips: ['杭州', '苏州', '南京', '广州']
  },
  {
    name: '陈裕权',
    img: '/profile2.jpg',
    location: 'Seattle',
    bio:
      '有趣的人生，一半爱恨情仇，一半山川湖海。',
    following: 6666,
    followers: 666,
    photos: 45,
    days: 12,
    trips: ['杭州', '苏州', '南京', '广州']
  },
  {
    name: '罗金泽',
    img: '/profile4.jpg',
    location: 'Kentucky',
    bio:
      '有趣的人生，一半爱恨情仇，一半山川湖海。',
    following: 6666,
    followers: 666,
    photos: 45,
    days: 12,
    trips: ['杭州', '苏州', '南京', '广州']
  }
];
export const places = [
  {
    name: '杭州',
    stars: 4,
    rating: 8.9,
    img: '/杭州.jpg',
    description:
      '“水光潋滟晴方好，山色空蒙雨亦奇”\n西湖是这样的西湖\n环湖骑行的惬意 苏堤赏月的浪漫\n秋天梧桐叶落的北山街\n你都值得去经历',
    location: '杭州'
  },
  {
    name: '苏州',
    stars: 5,
    rating: 9.6,
    img: '/苏州.jpg',
    description:
      '"上有天堂\n下有苏杭"\n是桂花零落宁静四处飘香的姑苏\n是红枫可爱映衬亭台回廊的姑苏\n是大闸蟹肥美无虞就瓣瓣菊花黄酒的姑苏。',
    location: '苏州'
  },
  {
    name: '南京',
    stars: 3,
    rating: 7.4,
    img: '/南京.jpg',
    description:
      '"六朝金粉地\n最忆是金陵"\n秦淮河畔，灯火辉煌，缠绵的歌声飘荡\n水光潋滟秦淮柳，桨声灯影画中游\n朱雀桥边野草花，乌衣巷口夕阳斜。',
    location: '南京'
  },
  {
    name: '上海',
    stars: 3,
    rating: 8.6,
    img: '/上海.jpg',
    description:
        '到外滩感受复古“夜上海”气息\n到沪上之巅“西佘山”俯瞰上海\n到上海迪士尼看城堡烟花\n实现你的童话梦\n到东方明珠电视塔打卡最出名的上海标志',
    location: '上海'
  },
  {
    name: '青海',
    stars: 3,
    rating: 8.4,
    img: '/青海.jpg',
    description:
        '西北偏北\n净化心灵的青海湖"\n中国的“天空之境”茶卡盐湖\n千沟万壑的高原\n长江、黄河、澜沧江的泉源\n                  古老的人文汗青、文明陈迹。',
    location: '青海'
  },
  {
    name: '敦煌',
    stars: 4,
    rating: 8.4,
    img: '/敦煌.jpg',
    description:
        '去一次画中的敦煌朝圣之旅\n荒芜大漠中的奇迹\n圆你行走江湖的侠客梦\n静谧的月牙泉，心中的白月光。',
    location: '敦煌'
  },
  {
    name: '厦门',
    stars: 5,
    rating: 9.4,
    img: '/厦门.jpg',
    description:
        '钟鼓索道 山海交界看浪漫日落\n必去的沙尾坡 海边的童话镇 浪漫的文艺村落\n通往星辰大海的灯塔\n海滨慢生活 你一定喜欢的城市。',
    location: '厦门'
  },
  {
    name: '北京',
    stars: 5,
    rating: 9.8,
    img: '/北京.jpg',
    description:
        '与祖国心脏的亲密接触\n胡同里的露台咖啡\n看鼓楼日落的小酒馆\n赏长城上的绝美秋色\n文化里故宫随性游',
    location: '北京'
  },
  {
    name: '桂林',
    stars: 5,
    rating: 9.8,
    img: '/桂林.jpg',
    description:
        '桂林山水甲天下\n看人民币上的阳朔漓江景区\n打卡太阳西下的象鼻山\n去遇龙河乘竹筏漂流\n十里画廊风景如诗如画\n看月光下的日月双塔',
    location: '桂林'
  },
  {
    name: '成都',
    stars: 5,
    rating: 9.8,
    img: '/成都.jpg',
    description:
        '感受武侯祠的三国情怀\n与国宝大熊猫近距离接触\n锦里古色古香商业街\n藏在闹市里的秘境大慈寺\n夜晚小酒馆三两好友\n成都-带不走的只有你',
    location: '成都'
  },
  {
    name: '重庆',
    stars: 5,
    rating: 9.8,
    img: '/重庆.jpg',
    description:
        '山城的山\n体验李子坝站轻轨穿楼\n坐一下空中汽车长江索道\n洪崖洞的夜景-现实版的千与千寻\n来一场火锅的盛宴',
    location: '重庆'
  },
  {
    name: '白银',
    stars: 5,
    rating: 9.8,
    img: '/白银.jpg',
    description:
        '此白银非彼白银\n黄河石林-不得不去的地方\n千沟万壑的高原-粗旷豪放的美\n黄河孕育的城市\n铜城白银+淳朴的生活',
    location: '白银'
  },
  {
    name: '南阳',
    stars: 5,
    rating: 9.8,
    img: '/南阳.jpg',
    description:
        '诸葛亮故里\n汉碑亭、新野\n伏牛山以南-汉水以北\n古丝绸之路的源头\n悠久的赊店古城、紫荆关古镇',
    location: '南阳'
  },
  {
    name: '沙坡头',
    stars: 5,
    rating: 9.8,
    img: '/沙坡头.jpg',
    description:
        '享受蓝天、白云、星空、沙漠、黄河、草原、湖泊\n荒漠中有绿洲 绿洲中有荒漠\n这是沙漠中的人间烟火\n寻找被遗忘的美好\n有酒有肉有朋友',
    location: '沙坡头'
  },
  {
    name: '大理',
    stars: 5,
    rating: 9.8,
    img: '/大理.jpg',
    description:
        '冬天在洱海边看海鸥\n三月去大理大学赏樱花\n十一月去大理古城看遍地银杏\n十月在喜洲古镇观麦田金黄\n去大冰的小屋喝酒听民谣\n故事配酒你得拥有',
    location: '大理'
  },
  {
    name: '丽江',
    stars: 5,
    rating: 9.8,
    img: '/丽江.jpg',
    description:
        '北有故宫，南有木府\n大研古镇、束河古镇、白沙古镇流连忘返\n和丽江的蓝天白月、雪山美景邂逅\n晒晒太阳发发呆，实在惬意',
    location: '丽江'
  },{
    name: '贵阳',
    stars: 5,
    rating: 9.8,
    img: '/贵阳.jpg',
    description:
        '爽爽贵阳 南方的避暑圣地\n夜郎花溪谷 石头世界的奇异幻想\n依山就势的青岩古镇\n布满青苔的小巷子\n天河潭 随处可见的小瀑布 有山有水有溶洞',
    location: '贵阳'
  }
];
export const photo = [
  {
    name:'苏州博物馆',
    img:'/苏州博物馆.jpg',
    city:'苏州',
    stars: 5,
  },
    {
  name:'平江路',
  img:'/平江路.jpg',
  city:'苏州',
  stars: 5,
},
  {
    name:'拙政园',
    img:'/拙政园.jpg',
    city:'苏州',
    stars: 5,
  },
  {
    name:'乌衣巷',
    img:'/乌衣巷.jpg',
    city:'南京',
    stars: 5,
  },
  {
    name:'总统府',
    img:'/总统府.jpg',
    city:'南京',
    stars: 5,
  },
  {
    name:'江南贡院',
    img:'/江南贡院.jpg',
    city:'南京',
    stars: 5,
  },
  {
    name:'老东门',
    img:'/老东门.jpg',
    city:'南京',
    stars: 5,
  }
];
export const schedule = [{
  date:'monday',
  plan:'☆大理-->洱海-->悬崖浅滩-->海东水站-->喜洲古镇-->风车山-->海西公路-->大理酒吧'
},{
  date:'tuesday',
  plan:'☆丽江-->大研古城-->束河古镇-->玉龙雪山-->蓝月谷-->拉市海-->丽江花海-->大石桥'
},{
  date:'wednesday',
  plan:'☆贵阳-->黔灵山-->花溪公园-->花溪大学城-->天河潭-->青岩古镇'
},{
  date:'thursday',
  plan:'☆安顺-->-->黄果树大瀑布-->天星桥-->陡坡塘'
},{
  date:'friday',
  plan:'☆重庆-->解放碑-->洪崖洞-->长江索道-->南滨路景区-->磁器口古镇-->益华里夜景公园-->八一好吃街'
},{
  date:'saturday',
  plan:'☆成都-->杜甫草堂-->武侯祠-->锦里-->春熙路-->青羊宫-->人民公园-->宽窄巷子-->奎星楼街'
},{
  date:'sunday',
  plan:'☆桂林-->象鼻山-->东西巷-->解放桥-->漓江竹筏-->十里画廊-->西街-->龙脊梯田'
}];

class _State extends Container {
  state = {
    indexedUser: 0
  };
  // selectedNav(){
  //   return users[this.state.indexedUser].name;
  // }
  selectedUser() {
    return users[this.state.indexedUser];
  }
  addFollower() {
    users[this.state.indexedUser].followers++;
    this.setState(() => {});
  }
  removeFollower() {
    users[this.state.indexedUser].followers--;
    this.setState(() => {});
  }
  changeUser(i) {
    this.setState({ indexedUser: i });
  }
}
export const State = new _State();
