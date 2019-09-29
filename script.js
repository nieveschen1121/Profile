var resume = {
  profile: {
    name: "陳亭秀",
    application: "課程行銷",
    introduction: "HI，我是亭秀，從事行銷、業務兩年，具備開發市場、廣告投放、SEO 優化能力，過去曾擁有創立新廠提升公司 25 % 總業績、獨立爭取 320 萬專案訂單、一年以上臉書粉專經營等經驗，「It's kind of fun to do the impossible」是我的生活態度，我喜歡大膽挑戰、謹慎執行，樂於解決問題、多元學習。曾困擾於跨領域學習資源取得不易、目睹教育現場的無奈，於是更認同 Hahow 理念，期許能參與行銷團隊，在其中貢獻所有自身的經驗、技能與資源，為更理想的教育環境盡一己之力。",
    mobile: "+886912345678",
    email: "testtesttest@gmail.com"
  },
  experiences: [
    [
      {
        organization: "萬泰水塔高雄廠",
        position: "創廠人、經理", 
        duration: {
          beginYYYY: 2018, 
          beginMM: 7,
          endYYYY: 2019, 
          endMM: 6
        }, 
        description: "工廠選址、廠商簽約、人員訓練、財務管理、業務拜訪、客訴處理、數據分析、廣告投放、粉專經營", 
        items: [
          { description: "僅用 8 萬的起始成本創廠，營業兩月後打平收支開始獲利" }, 
          { description: "獨立洽談 320 萬的專案訂單成功" },
          { description: "提升公司總營業額 25%" },
          { description: "培育 4 位新人，穩定公司制度" },
        ]
      },
    ],
    [
      {
        organization: "萬泰水塔股份有限公司",
        position: "行銷業務人員", 
        duration: {
          beginYYYY: 2017, 
          beginMM: 9,
          endYYYY: 2018, 
          endMM: 6
        }, 
        description: "廣告投放、SEO、電話及EDM行銷、業務拜訪、粉專經營、客服諮詢、物流安排、商務差旅", 
        items: [
          { description: "擴大經營電子商務吸收 B2C 市場、維繫原本的 B2B 客群" }, 
          { description: "獨創立 Facebook 粉專、GMB 提高品牌曝光率" },
          { description: "學習 SEO 優化網頁讓水塔關鍵字排名保持在第一頁" },
          { description: "2017 年至吉隆坡、亞庇拜訪外銷客戶、市場調查 - 2018 年至福島洽談機械手臂之運用、方形蓄水容器合作" },
        ]
      },
    ],
    [
      {
        organization: "人才天下有限公司(兼職)",
        position: "舞台引導、貴賓接待", 
        duration: {
          beginYYYY: 2019, 
          beginMM: "",
          endYYYY: "", 
          endMM: ""
        }, 
        description: "", 
        items: [
          { description: "SEMICON Taiwan 國際半導體展-舞台引導、貴賓接待" }, 
        ]
      },
      {
        organization: "品漾創意行銷公司(兼職)",
        position: "主持人、活動人員", 
        duration: {
          beginYYYY: 2017, 
          beginMM: "",
          endYYYY: 2019, 
          endMM: ""
        }, 
        description: "", 
        items: [
          { description: "交通部觀光局台灣好行祈福之旅-活動主持人" }, 
          { description: "高雄市、台南市交通局記者會-活動組" },
          { description: "嘉義市新港鄉公所農產節-活動組" },
        ]
      },
      {
        organization: "騰風國際整合行銷有限公司(兼職)",
        position: "活動人員", 
        duration: {
          beginYYYY: 2016, 
          beginMM: "",
          endYYYY: 2017, 
          endMM: ""
        }, 
        description: "", 
        items: [
          { description: "高雄市觀光局冬季國際旅展-活動主持、行銷組" },
          { description: "華科事業群、日月光測試廠旺年會-活動組、公關組" },
        ]
      },
    ],
    [
      {
        organization: "文藻外語大學",
        position: "主修西文 副修英文 選修印尼", 
        duration: {
          beginYYYY: 2011, 
          beginMM: 9,
          endYYYY: 2017, 
          endMM: 6
        }, 
        description: "", 
        items: [
          { description: "2016 年師長推薦至印尼雅加達參加東南亞協會台商研習團" }, 
          { description: "2014 年代表學校至印尼 Petra 大學進行全球學生交流計畫" },
          { description: "文藻外語大學西文科第四十六屆畢業公演–舞台總監" },
          { description: "文藻外語大學小提琴社第九屆活動、第十屆社長" },
        ]
      }
    ],
  ], 
  skills: {
    language: [
      {
        name: "中文",
        level: 3
      },
      {
        name: "台語",
        level: 3
      },
      {
        name: "英文",
        level: 2
      },
      {
        name: "西班牙文",
        level: 2
      },
      {
        name: "印尼文",
        level: 1
      },
      {
        name: "日文",
        level: 1
      },
    ],
    computer: [
      { name: "MS Office" },
      { name: "MS Power BI" },
      { name: "Adobe Illustrator" },
      { name: "Adobe Photoshop" },
    ],
  },
  certificates: [
    { name: "BULATS 國際職場英語檢定 B1" },
    { name: "BULATS 國際職場西語檢定 B1" },
    { name: "資策會 SEO 網路行銷曝光實務" },
  ]
}
var levelLookup = {
  "1": "基礎", 
  "2": "中等",
  "3": "流利"
};

var vm = new Vue({
  el: "#app", 
  data: resume,
  methods: {
    ToTop: function (e) {
      $("html, body").animate({scrollTop: 0}, 300);
    }
	}
});