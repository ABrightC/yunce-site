export interface PersonalMilestone {
  id: string;
  title: string;
  description: string;
  date?: string;
  milestoneImage?: string;
}

export interface Game {
  id: string;
  title: string;
  platform: string;
  developer: string;
  genre: string[];
  coverUrl?: string;
  playTime: number; // hours
  price: number; // CNY
  purchaseDate: string; // ISO date, e.g. "2025-11-02"
  personalMilestones: PersonalMilestone[];
}

export const GAMES: Game[] = [
// ================= 射击游戏 (Shooters) =================
{
  id: "g-fps-001",
  title: "和平精英",
  platform: "Mobile",
  developer: "Tencent",
  genre: ["FPS", "大逃杀"],
  coverUrl: "https://picsum.photos/seed/peacekeeper/900/600",
  playTime: 500, // 请根据实际情况修改
  price: 0,
  purchaseDate: "2019-05-08",
  personalMilestones: [
    {
      id: "m-peq-1",
      title: "登顶超级皇冠",
      description: "在移动端的百人战场中杀出重围，成功达成皇冠段位。"
    }
  ]
},
{
  id: "g-fps-002",
  title: "穿越火线：枪战王者 (CFM)",
  platform: "Mobile",
  developer: "Tencent",
  genre: ["FPS", "竞技"],
  coverUrl: "https://picsum.photos/seed/cfm/900/600",
  playTime: 300,
  price: 0,
  purchaseDate: "2015-12-01",
  personalMilestones: [
    {
      id: "m-cfm-1",
      title: "加冕枪皇",
      description: "无数次爆破与团队竞技的洗礼，最终荣膺枪皇称号。"
    }
  ]
},
{
  id: "g-fps-003",
  title: "Apex Legends",
  platform: "PC/Console",
  developer: "Respawn Entertainment",
  genre: ["FPS", "大逃杀", "竞技"],
  coverUrl: "https://picsum.photos/seed/apex/900/600",
  playTime: 600,
  price: 0,
  purchaseDate: "2019-02-04",
  personalMilestones: [
    {
      id: "m-apex-1",
      title: "双修大师",
      description: "键鼠精通400小时，手柄辅助跟枪200小时，完美驾驭两种截然不同的高机动操作体系。"
    }
  ]
},
{
  id: "g-fps-004",
  title: "Call of Duty: Warzone 2",
  platform: "PC/Console",
  developer: "Infinity Ward",
  genre: ["FPS", "大逃杀"],
  coverUrl: "https://picsum.photos/seed/codwz2/900/600",
  playTime: 300,
  price: 0,
  purchaseDate: "2022-11-16",
  personalMilestones: [
    {
      id: "m-wz2-1",
      title: "全天候特战队员",
      description: "键鼠奋战200小时，手柄磨砺100小时，在马兹拉的战火中游刃有余。"
    }
  ]
},
{
  id: "g-fps-005",
  title: "堡垒之夜 (Fortnite)",
  platform: "PC/Console",
  developer: "Epic Games",
  genre: ["TPS", "大逃杀"],
  coverUrl: "https://picsum.photos/seed/fortnite/900/600",
  playTime: 400,
  price: 0,
  purchaseDate: "2018-01-01",
  personalMilestones: [
    {
      id: "m-fn-1",
      title: "无板模式专家",
      description: "专注无建造模式（Zero Build），键鼠200小时与手柄200小时的极致纯粹枪法对决。"
    }
  ]
},
{
  id: "g-fps-006",
  title: "PUBG: Battlegrounds",
  platform: "PC",
  developer: "Krafton",
  genre: ["FPS", "大逃杀", "战术竞技"],
  coverUrl: "https://picsum.photos/seed/pubg/900/600",
  playTime: 400,
  price: 98,
  purchaseDate: "2017-12-21",
  personalMilestones: [
    {
      id: "m-pubg-1",
      title: "400小时的绝地求生",
      description: "从跳伞落地到最终缩圈，这400小时充满了战术博弈与极限拉扯。"
    }
  ]
},
{
  id: "g-fps-007",
  title: "CS:GO",
  platform: "PC",
  developer: "Valve",
  genre: ["FPS", "战术竞技"],
  coverUrl: "https://picsum.photos/seed/csgo/900/600",
  playTime: 100,
  price: 0,
  purchaseDate: "2016-01-01",
  personalMilestones: [
    {
      id: "m-csgo-1",
      title: "硬核枪法奠基",
      description: "100小时的急停、压枪与道具投掷训练，打下了扎实的传统FPS基础。"
    }
  ]
},
{
  id: "g-fps-008",
  title: "Valorant",
  platform: "PC",
  developer: "Riot Games",
  genre: ["FPS", "英雄战术射击"],
  coverUrl: "https://picsum.photos/seed/valorant/900/600",
  playTime: 100,
  price: 0,
  purchaseDate: "2020-06-02",
  personalMilestones: [
    {
      id: "m-val-1",
      title: "技能与枪法的交织",
      description: "投入100小时，熟悉各特务技能组合与精准定点爆头线。"
    }
  ]
},

// ================= 动作游戏 (Action) =================
{
  id: "g-act-001",
  title: "永劫无间",
  platform: "PC",
  developer: "24 Entertainment",
  genre: ["动作", "大逃杀", "近战竞技"],
  coverUrl: "https://picsum.photos/seed/naraka/900/600",
  playTime: 300,
  price: 98,
  purchaseDate: "2021-08-12",
  personalMilestones: [
    {
      id: "m-naraka-1",
      title: "不朽修罗",
      description: "于刀光剑影、一闪与振刀的极致博弈中，成功登顶修罗段位。"
    }
  ]
},
{
  id: "g-act-002",
  title: "怪物猎人 (系列)",
  platform: "PC/Console",
  developer: "Capcom",
  genre: ["动作", "共斗", "RPG"],
  coverUrl: "https://picsum.photos/seed/mhw/900/600",
  playTime: 200,
  price: 398,
  purchaseDate: "2018-01-26",
  personalMilestones: [
    {
      id: "m-mh-1",
      title: "资深猎人档案",
      description: "200小时的狩猎生涯，无数次在巨兽的咆哮中完成见切与部位破坏。"
    }
  ]
},
{
  id: "g-act-003",
  title: "艾尔登法环",
  platform: "PC/Console",
  developer: "FromSoftware",
  genre: ["动作", "RPG", "魂类", "开放世界"],
  coverUrl: "https://picsum.photos/seed/eldenring/900/600",
  playTime: 100,
  price: 298,
  purchaseDate: "2022-02-25",
  personalMilestones: [
    {
      id: "m-er-1",
      title: "交界地的100小时",
      description: "在受难与成长中探索黄金树的秘密，一步步走向神坛。"
    }
  ]
},
{
  id: "g-act-004",
  title: "赛博朋克 2077",
  platform: "PC/Console",
  developer: "CD Projekt RED",
  genre: ["动作", "RPG", "开放世界"],
  coverUrl: "https://picsum.photos/seed/cp2077/900/600",
  playTime: 100,
  price: 298,
  purchaseDate: "2020-12-10",
  personalMilestones: [
    {
      id: "m-cp-1",
      title: "夜之城传奇",
      description: "化身V，在100小时的霓虹雨夜中，寻找生存的意义与灵魂的救赎。"
    }
  ]
},
{
  id: "g-act-005",
  title: "Hades (系列)",
  platform: "PC/Console",
  developer: "Supergiant Games",
  genre: ["动作", "Roguelike"],
  coverUrl: "https://picsum.photos/seed/hades/900/600",
  playTime: 50,
  price: 80,
  purchaseDate: "2020-09-17",
  personalMilestones: [
    {
      id: "m-hades-1",
      title: "杀出冥界",
      description: "50小时的血色轮迴，在一次次死亡中构筑最强恩赐组合。"
    }
  ]
},

// ================= MMO 角色扮演 =================
{
  id: "g-mmo-001",
  title: "剑网3",
  platform: "PC",
  developer: "西山居",
  genre: ["MMORPG", "武侠", "社交"],
  coverUrl: "https://picsum.photos/seed/jx3/900/600",
  playTime: 1000,
  price: 500,
  purchaseDate: "2015-01-01",
  personalMilestones: [
    {
      id: "m-jx3-1",
      title: "大唐江湖游历",
      description: "执剑走天涯，体验了深度的门派剧情与大型团队秘境。"
    }
  ]
},
{
  id: "g-mmo-002",
  title: "逆水寒",
  platform: "PC",
  developer: "网易游戏",
  genre: ["MMORPG", "武侠"],
  coverUrl: "https://picsum.photos/seed/nsh/900/600",
  playTime: 500,
  price: 300,
  purchaseDate: "2018-06-29",
  personalMilestones: [
    {
      id: "m-nsh-1",
      title: "会呼吸的江湖",
      description: "在北宋汴京的繁华街头，感受细腻的武侠世界互动体验。"
    }
  ]
},
{
  id: "g-mmo-003",
  title: "逆水寒手游",
  platform: "Mobile/PC",
  developer: "网易游戏",
  genre: ["MMORPG", "武侠", "开放世界"],
  coverUrl: "https://picsum.photos/seed/nshm/900/600",
  playTime: 300,
  price: 150,
  purchaseDate: "2023-06-30",
  personalMilestones: [
    {
      id: "m-nshm-1",
      title: "殊途同归",
      description: "在移动端体验宏大武侠开放世界，探索自由武学与江湖奇遇。"
    }
  ]
},
{
  id: "g-mmo-004",
  title: "天涯明月刀",
  platform: "PC",
  developer: "腾讯北极光工作室",
  genre: ["MMORPG", "武侠"],
  coverUrl: "https://picsum.photos/seed/wuxia/900/600",
  playTime: 400,
  price: 200,
  purchaseDate: "2015-05-28",
  personalMilestones: [
    {
      id: "m-tymyd-1",
      title: "千人千面",
      description: "体验顶级的武侠动作设计与深度的身份玩法系统。"
    }
  ]
},
{
  id: "g-mmo-005",
  title: "最终幻想14 (FF14)",
  platform: "PC/Console",
  developer: "Square Enix",
  genre: ["MMORPG", "奇幻", "剧情"],
  coverUrl: "https://picsum.photos/seed/ff14/900/600",
  playTime: 800,
  price: 600,
  purchaseDate: "2017-01-01",
  personalMilestones: [
    {
      id: "m-ff14-1",
      title: "光之战士",
      description: "穿越艾欧泽亚的大地，见证了史诗般的沉浸式主线剧情。"
    }
  ]
},

// ================= 泛品类与其他深度体验 =================
{
  id: "g-other-001",
  title: "二次元游戏合集",
  platform: "Mobile/PC",
  developer: "Various",
  genre: ["二游", "RPG", "策略"],
  coverUrl: "https://picsum.photos/seed/gacha/900/600",
  playTime: 1200,
  price: 2000,
  purchaseDate: "长期体验",
  personalMilestones: [
    {
      id: "m-gacha-1",
      title: "资深游戏测评家",
      description: "对于几乎每一个上线的二次元游戏，都会进行为期至少一个月的深度体验与机制解构。"
    }
  ]
},
{
  id: "g-other-002",
  title: "王者荣耀",
  platform: "Mobile",
  developer: "天美工作室 (TiMi)",
  genre: ["MOBA", "竞技"],
  coverUrl: "https://picsum.photos/seed/honor/900/600",
  playTime: 600,
  price: 0,
  purchaseDate: "2016-01-01",
  personalMilestones: [
    {
      id: "m-moba-1",
      title: "王者荣耀 10星",
      description: "在峡谷的微操与大局观博弈中，成功打上最强王者10星。"
    }
  ]
},
{
  id: "g-other-003",
  title: "全平台主机游戏",
  platform: "PlayStation/Xbox/Switch",
  developer: "Various",
  genre: ["动作", "冒险", "RPG", "全品类"],
  coverUrl: "https://picsum.photos/seed/consoles/900/600",
  playTime: 2000,
  price: 5000,
  purchaseDate: "长期体验",
  personalMilestones: [
    {
      id: "m-console-1",
      title: "无界限玩家",
      description: "跨越平台壁垒，享受客厅大屏幕带来的纯粹沉浸式游戏体验。"
    }
  ]
},
{
  id: "g-other-004",
  title: "Galgame / 日系AVG",
  platform: "PC",
  developer: "Various",
  genre: ["视觉小说", "AVG", "剧情"],
  coverUrl: "https://picsum.photos/seed/visualnovel/900/600",
  playTime: 1500,
  price: 0,
  purchaseDate: "高中时期",
  personalMilestones: [
    {
      id: "m-gal-1",
      title: "阅尽千帆",
      description: "高中期间疯狂补课，通关了数十款经典的日系Galgame作品。"
    },
    {
      id: "m-gal-2",
      title: "汉化组测试专员",
      description: "从受众转为贡献者，加入汉化组负责测试工作，字斟句酌地打磨每一句对白。"
    }
  ]
},
{
  id: "g-other-005",
  title: "英雄无敌3：死亡阴影",
  platform: "PC",
  developer: "New World Computing",
  genre: ["SLG", "回合制策略"],
  coverUrl: "https://picsum.photos/seed/homm3/900/600",
  playTime: 400,
  price: 50,
  purchaseDate: "初中时期",
  personalMilestones: [
    {
      id: "m-homm-1",
      title: "战役征服者",
      description: "初中时期通关了游戏自带的所有高难度战役与官方地图。"
    },
    {
      id: "m-homm-2",
      title: "关卡设计师的觉醒",
      description: "通关后并不满足，开始使用自带的地图编辑器，亲手设计关卡和地图，这是对游戏设计的最初启蒙。"
    }
  ]
}
];

