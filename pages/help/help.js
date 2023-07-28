// pages/tmp/add_member.js
Page({
  data: {
    array: ['医生', '护士', '消防员', '厨师', '救生员', '司机', '一般体力劳动者', '其他'],
    idcard_cates: ['身份证', '签证', '护照', '军人证', '港澳通行证'],
    name: "",
    card_type: "",
    id_number: 0,
    place: "",
    email: "",
    sex: "0",
    money: 0,
    job: "",
    txtlist: [
    ]
  },
  formSubmit: function (e) {
    const formData = e.detail.value; // 获取表单数据
    // 验证姓名
    const name = formData.name.trim();
    if (name === '') {
      wx.showToast({
        title: '请输入您的真实姓名',
        icon: 'none'
      });
      return;
    } else if (!/^[\u4e00-\u9fa5]{2,4}$/.test(name)) {
      wx.showToast({
        title: '请输入2-4个中文字符作为您的真实姓名',
        icon: 'none'
      });
      return;
    }

    //验证邮箱
    if (formData.email.trim() === '') {
      wx.showToast({
        title: '请输入您的邮箱地址',
        icon: 'none'
      });
      return;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      wx.showToast({
        title: '请输入正确格式的邮箱地址',
        icon: 'none'
      });
      return;
    }
    // 验证捐款金额
    const money = parseFloat(formData.money);
    if (isNaN(money) || money <= 0) {
      wx.showToast({
        title: '请输入有效的捐款金额',
        icon: 'none'
      });
      return;
    }
    // 构建请求参数
    const requestData = {
      card_type: e.detail.value.card_type,
      email: e.detail.value.email,
      id_number: e.detail.value.id_number,
      job: e.detail.value.job,
      money: e.detail.value.money,
      name: e.detail.value.name,
      place: e.detail.value.place,
      sex: e.detail.value.sex
    };
    // console.log(requestData);
    wx.request({
      url: 'http://localhost:3000/api/submitForm', // 服务器接口地址
      method: 'POST',
      data: requestData,
      success: function (res) {
        console.log(res.data); // 请求成功的处理逻辑
      },
      fail: function (err) {
        console.error(err); // 请求失败的处理逻辑
      }
    });
    // 提交成功，显示提示信息并清空表单
    wx.showToast({
      title: '提交成功',
      icon: 'success' 
    });

    // 延迟一定时间后再进行页面跳转
    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/help/help' // 替换为你要重新加载的页面路径
      });
    }, 2000); // 延迟时间，单位毫秒

  },
  bindPickerChange: function (e) {
    const id = e.target.id;
    const index = e.detail.value;

    if (id === 'idcardPicker') {
      const selectedValue = this.data.idcard_cates[index];
      this.setData({
        card_type: selectedValue
      });
    } else if (id === 'jobPicker') {
      const selectedValue = this.data.array[index];
      this.setData({
        job: selectedValue
      });
    }
  },
  changeSex: function (e) {
    console.log('性别选择:', e.detail.value)
  },
  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在页面加载完成后获取数据库数据
    const that = this;
    wx.request({
      url: 'http://localhost:3000/api/getData', // 请求获取数据的接口地址
      success: function (res) {
        const data = res.data; // 获取到的数据库数据
        that.setData({
          txtlist: data // 将数据赋值给txtlist属性
        });
      },
      fail: function (err) {
        console.error(err); // 请求失败的处理逻辑
      }
    });
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
