Page({
  data: {
    txtlist: [
      "2022年1月4日，赵先生：想要走得远，就结伴同行。加油！我们一直都在。",
      "2022年1月11日，明女士：我很感激当我处于困境之时，那些伸出援助之手的人，现在我也要帮助别人。",
      "2022年1月11日，郑先生：在有生之年，为世人，为社会伸出援助之手，是一个公民应该拥有的，与生俱来的责任感，并为之全力以赴，鞠躬尽瘁。",
      "2022年1月20日，陈先生：相知无远近，万里尚为邻。",
      "2022年2月1日，吴先生：爱心——人类友谊的传递，给人一种欢乐;爱心——四通八达的输络网，给人一种温暖。",
      "2022年2月5日，王先生：慈善是架天平，证明人格重量。",
      "2022年2月13日，周女士：青山一道，同担风雨。",
      "2022年2月16日，钱先生：只要人人都献出一点爱，这世界将变成完美的人间。",
      "2022年2月18日，贺女士：阳光雨露雪中炭;真爱慈善人间情。",
      "2022年2月21日，林女士：爱心有福共享，接力一键钟情。",
      "2022年2月22日，孙先生：太阳绝不为它所做的善事后悔，也从不指望任何报酬。",
      "2022年2月26日，冯先生：心连心，献爱心;手牵手，伸援手。",
    ],
    userInfo: ''
  },
  onShow() {
    let userInfo = wx.getStorageSync('userInfo')
    this.setData({
      userInfo
    })
  },
  login() {
    wx.getUserProfile({
      desc: '必须授权才能使用',
      success: res => {
        let userInfo = res.userInfo
        wx.setStorageSync('userInfo', userInfo)
        this.setData({
          userInfo
        })
      }
    })
  },
  nologin() {
    this.setData({
      userInfo: ''
    })
    wx.setStorageSync('userInfo', null)
  },
  to_us(){
    wx.navigateTo({
      url: '../../pages/jianjie/jianjie',
    })
  }
});
