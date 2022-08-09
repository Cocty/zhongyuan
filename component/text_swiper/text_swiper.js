// component/text_swiper/text_swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textList: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemtap(e) {
      const {item} = e.currentTarget.dataset
      // console.log(item);
     wx.showModal({
       content: item,
       showCancel: true,
       title: '详情'
     })
    },
  },
});
