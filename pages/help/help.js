// pages/tmp/add_member.js
Page({
  data: {
    array: ['医生', '护士', '消防员', '厨师', '救生员', '司机', '一般体力劳动者', '其他'],
    idcard_cates: ['身份证', '签证', '护照', '军人证', '港澳通行证'],
    name: "",
    id_number: 0,
    place: "",
    email: "",
    sex: "0",
    money: 0,
    job: "",
    txtlist: [
      "2022年1月14日，钟先生，捐助700元",
      "2022年1月21日，明女士，捐助1500",
      "2022年1月25日，洪先生，捐助1000",
      "2022年1月29日，陈先生，捐助1800",
      "2022年2月1日，李先生，捐助1000元",
      "2022年2月6日，王先生，捐助500元",
      "2022年2月12日，张女士，捐助100元",
      "2022年2月15日，罗先生，捐助800元",
      "2022年2月19日，贺先生，捐助500元",
      "2022年2月20日，林女士，捐助600元",
      "2022年2月22日，雷先生，捐助900元",
      "2022年2月26日，马先生，捐助1200"
    ]
  },
  formSubmit(e) {
    console.log(e);
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  changeSex: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
