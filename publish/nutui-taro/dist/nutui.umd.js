(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@nutui/icons-vue-taro"), require("@tarojs/taro")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@nutui/icons-vue-taro", "@tarojs/taro"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.nutui = {}, global.Vue, global.iconsVueTaro, global.Taro));
})(this, function(exports2, vue, iconsVueTaro, Taro) {
  "use strict";var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

  class BaseLang {
  }
  let Lang$1 = class Lang extends BaseLang {
    constructor() {
      super(...arguments);
      __publicField(this, "save", "保存");
      __publicField(this, "confirm", "确认");
      __publicField(this, "cancel", "取消");
      __publicField(this, "done", "完成");
      __publicField(this, "noData", "暂无数据");
      __publicField(this, "placeholder", "请输入");
      __publicField(this, "select", "请选择");
      __publicField(this, "video", {
        errorTip: "视频加载失败",
        clickRetry: "点击重试"
      });
      __publicField(this, "fixednav", {
        activeText: "收起导航",
        unActiveText: "快速导航"
      });
      __publicField(this, "pagination", {
        prev: "上一页",
        next: "下一页"
      });
      __publicField(this, "calendaritem", {
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        end: "结束",
        start: "开始",
        title: "日期选择",
        monthTitle: (year, month) => `${year}年${month}月`,
        today: "今天"
      });
      __publicField(this, "shortpassword", {
        title: "请输入密码",
        desc: "您使用了虚拟资产，请进行验证",
        tips: "忘记密码"
      });
      __publicField(this, "uploader", {
        ready: "准备完成",
        readyUpload: "准备上传",
        waitingUpload: "等待上传",
        uploading: "上传中",
        success: "上传成功",
        error: "上传失败"
      });
      __publicField(this, "countdown", {
        day: "天",
        hour: "时",
        minute: "分",
        second: "秒"
      });
      __publicField(this, "address", {
        selectRegion: "请选择所在地区",
        deliveryTo: "配送至",
        chooseAnotherAddress: "选择其他地址"
      });
      __publicField(this, "signature", {
        reSign: "重签",
        unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
      });
      __publicField(this, "ecard", {
        chooseText: "请选择电子卡面值",
        otherValueText: "其他面值",
        placeholder: "请输入1-5000整数"
      });
      __publicField(this, "timeselect", {
        pickupTime: "取件时间"
      });
      __publicField(this, "sku", {
        buyNow: "立即购买",
        buyNumber: "购买数量",
        addToCart: "加入购物车"
      });
      __publicField(this, "skuheader", {
        skuId: "商品编号"
      });
      __publicField(this, "addresslist", {
        addAddress: "新建地址",
        default: "默认"
      });
      __publicField(this, "comment", {
        complaintsText: "我要投诉",
        additionalReview: (day) => `购买${day}天后追评`,
        additionalImages: (length) => `${length}张追评图片`
      });
      __publicField(this, "infiniteloading", {
        loading: "加载中...",
        pullTxt: "松开刷新",
        loadMoreTxt: "哎呀，这里是底部了啦"
      });
      __publicField(this, "datepicker", {
        year: "年",
        month: "月",
        day: "日",
        hour: "时",
        min: "分",
        seconds: "秒"
      });
      __publicField(this, "audiooperate", {
        back: "倒退",
        start: "开始",
        pause: "暂停",
        forward: "快进",
        mute: "静音"
      });
      __publicField(this, "pullrefresh", {
        pulling: "下拉刷新",
        loosing: "释放刷新",
        loading: "加载中...",
        complete: "刷新成功"
      });
    }
  };
  class Lang extends BaseLang {
    constructor() {
      super(...arguments);
      __publicField(this, "save", "Save");
      __publicField(this, "confirm", "Confirm");
      __publicField(this, "cancel", "Cancel");
      __publicField(this, "done", "Done");
      __publicField(this, "noData", "No Data");
      __publicField(this, "placeholder", "Placeholder");
      __publicField(this, "select", "Select");
      __publicField(this, "video", {
        errorTip: "Error Tip",
        clickRetry: "Click Retry"
      });
      __publicField(this, "fixednav", {
        activeText: "Close Nav",
        unActiveText: "Open Nav"
      });
      __publicField(this, "pagination", {
        prev: "Previous",
        next: "Next"
      });
      __publicField(this, "calendaritem", {
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        end: "End",
        start: "Start",
        title: "Calendar",
        monthTitle: (year, month) => `${year}/${month}`,
        today: "Today"
      });
      __publicField(this, "shortpassword", {
        title: "Please input a password",
        desc: "Verify",
        tips: "Forget password"
      });
      __publicField(this, "uploader", {
        ready: "Ready",
        readyUpload: "Ready to upload",
        waitingUpload: "Waiting for upload",
        uploading: "Uploading",
        success: "Upload successful",
        error: "Upload failed"
      });
      __publicField(this, "countdown", {
        day: " Day ",
        hour: " Hour ",
        minute: " Minute ",
        second: " Second "
      });
      __publicField(this, "address", {
        selectRegion: "Select Region",
        deliveryTo: "Delivery To",
        chooseAnotherAddress: "Choose Another Address"
      });
      __publicField(this, "signature", {
        reSign: "Re Sign",
        unSupportTpl: `Sorry, the current browser doesn't support canvas, so we can't use this control!`
      });
      __publicField(this, "ecard", {
        chooseText: "Select",
        otherValueText: "Other Value",
        placeholder: "Placeholder"
      });
      __publicField(this, "timeselect", {
        pickupTime: "Pickup Time"
      });
      __publicField(this, "sku", {
        buyNow: "Buy Now",
        buyNumber: "Buy Number",
        addToCart: "Add to Cart"
      });
      __publicField(this, "skuheader", {
        skuId: "Sku Number"
      });
      __publicField(this, "addresslist", {
        addAddress: "Add New Address",
        default: "default"
      });
      __publicField(this, "comment", {
        complaintsText: "I have a complaint",
        additionalReview: (day) => `Review after ${day} days of purchase`,
        additionalImages: (length) => `There are ${length} follow-up comments`
      });
      __publicField(this, "infiniteloading", {
        loading: "Loading...",
        pullTxt: "Loose to refresh",
        loadMoreTxt: "Oops, this is the bottom"
      });
      __publicField(this, "datepicker", {
        year: "Year",
        month: "Month",
        day: "Day",
        hour: "Hour",
        min: "Minute",
        seconds: "Second"
      });
      __publicField(this, "audiooperate", {
        back: "Back",
        start: "Start",
        pause: "Pause",
        forward: "Forward",
        mute: "Mute"
      });
      __publicField(this, "pullrefresh", {
        pulling: "Pull to refresh...",
        loosing: "Loose to refresh...",
        loading: "Loading...",
        complete: "Refresh successfully"
      });
    }
  }
  const funInterceptor = (interceptor, {
    args = [],
    done,
    canceled
  }) => {
    if (interceptor) {
      const returnVal = interceptor.apply(null, args);
      if (isPromise(returnVal)) {
        returnVal.then((value) => {
          if (value) {
            done(value);
          } else if (canceled) {
            canceled();
          }
        }).catch(() => {
        });
      } else if (returnVal) {
        done();
      } else if (canceled) {
        canceled();
      }
    } else {
      done();
    }
  };
  const TypeOfFun = (value) => {
    if (null === value) {
      return "null";
    }
    const type = typeof value;
    if ("undefined" === type || "string" === type) {
      return type;
    }
    const typeString = toString.call(value);
    switch (typeString) {
      case "[object Array]":
        return "array";
      case "[object Date]":
        return "date";
      case "[object Boolean]":
        return "boolean";
      case "[object Number]":
        return "number";
      case "[object Function]":
        return "function";
      case "[object RegExp]":
        return "regexp";
      case "[object Object]":
        if (void 0 !== value.nodeType) {
          if (3 == value.nodeType) {
            return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
          } else {
            return "element";
          }
        } else {
          return "object";
        }
      default:
        return "unknow";
    }
  };
  const isArray = Array.isArray;
  const isDate$1 = (val) => val instanceof Date;
  const isFunction = (val) => typeof val === "function";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const getPropByPath = (obj, keyPath) => {
    try {
      return keyPath.split(".").reduce((prev, curr) => prev[curr], obj);
    } catch (error) {
      return "";
    }
  };
  const floatData = (format, dataOp, mapOps) => {
    let mergeFormat = Object.assign({}, format);
    let mergeMapOps = Object.assign({}, mapOps);
    if (Object.keys(dataOp).length > 0) {
      Object.keys(mergeFormat).forEach((keys) => {
        if (Object.prototype.hasOwnProperty.call(mergeMapOps, keys)) {
          const tof = TypeOfFun(mergeMapOps[keys]);
          if (tof == "function") {
            mergeFormat[keys] = mergeMapOps[keys](dataOp);
          }
          if (tof == "string") {
            mergeFormat[keys] = dataOp[mergeMapOps[keys]];
          }
        } else {
          if (dataOp[keys])
            mergeFormat[keys] = dataOp[keys];
        }
      });
      return mergeFormat;
    }
    return format;
  };
  const deepMerge = (target, newObj) => {
    Object.keys(newObj).forEach((key) => {
      let targetValue = target[key];
      let newObjValue = newObj[key];
      if (isObject(targetValue) && isObject(newObjValue)) {
        deepMerge(targetValue, newObjValue);
      } else {
        target[key] = newObjValue;
      }
    });
    return target;
  };
  function myFixed(num, digit = 2) {
    if (Object.is(parseFloat(num), NaN)) {
      return console.log(`传入的值：${num}不是一个数字`);
    }
    num = parseFloat(num);
    return (Math.round((num + Number.EPSILON) * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
  }
  function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      event.stopPropagation();
    }
  }
  const padZero = (num, length = 2) => {
    num += "";
    while (num.length < length) {
      num = "0" + num;
    }
    return num.toString();
  };
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  const langs = vue.reactive({
    "zh-CN": new Lang$1(),
    "en-US": new Lang()
  });
  class Locale {
    static languages() {
      return langs[this.currentLang.value];
    }
    static use(lang, newLanguages) {
      if (newLanguages) {
        langs[lang] = new newLanguages();
      }
      this.currentLang.value = lang;
    }
    static merge(lang, newLanguages) {
      if (newLanguages) {
        if (langs[lang]) {
          deepMerge(langs[lang], newLanguages);
        } else {
          this.use(lang, newLanguages);
        }
      }
    }
  }
  __publicField(Locale, "currentLang", vue.ref("zh-CN"));
  const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
  function createComponent(name) {
    const componentName2 = "nut-" + name;
    return {
      componentName: componentName2,
      create: function(_component) {
        _component.name = "Nut" + camelize("-" + name);
        _component.install = (vue2) => {
          vue2.component(_component.name, _component);
        };
        return vue.defineComponent(_component);
      }
    };
  }
  const renderIcon = (icon, props) => {
    if (icon)
      return vue.h(icon, props);
    return "";
  };
  const { componentName: componentName$p, create: create$1J } = createComponent("button");
  const _sfc_main$1K = create$1J({
    components: { Loading: iconsVueTaro.Loading },
    props: {
      color: String,
      shape: {
        type: String,
        default: "round"
      },
      plain: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "default"
      },
      formType: {
        type: String,
        default: "button"
      },
      size: {
        type: String,
        default: "normal"
      },
      block: {
        type: Boolean,
        default: false
      }
    },
    emits: ["click"],
    setup(props, { emit }) {
      const { type, size, shape, disabled, loading, color, plain, block } = vue.toRefs(props);
      const handleClick = (event) => {
        if (!loading.value && !disabled.value) {
          emit("click", event);
        }
      };
      const classes = vue.computed(() => {
        const prefixCls = componentName$p;
        return {
          [prefixCls]: true,
          [`${prefixCls}--${type.value}`]: type.value,
          [`${prefixCls}--${size.value}`]: size.value,
          [`${prefixCls}--${shape.value}`]: shape.value,
          [`${prefixCls}--plain`]: plain.value,
          [`${prefixCls}--block`]: block.value,
          [`${prefixCls}--disabled`]: disabled.value,
          [`${prefixCls}--loading`]: loading.value
        };
      });
      const getStyle = vue.computed(() => {
        var _a;
        const style = {};
        if (color == null ? void 0 : color.value) {
          if (plain.value) {
            style.color = color.value;
            style.background = "#fff";
            if (!((_a = color.value) == null ? void 0 : _a.includes("gradient"))) {
              style.borderColor = color.value;
            }
          } else {
            style.color = "#fff";
            style.background = color.value;
          }
        }
        return style;
      });
      return {
        handleClick,
        classes,
        getStyle,
        Taro
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1$1j = ["type", "formType"];
  const _hoisted_2$11 = { class: "nut-button__wrap" };
  function _sfc_render$1A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Loading = vue.resolveComponent("Loading");
    return vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.getStyle),
      type: _ctx.Taro.getEnv() === _ctx.Taro.ENV_TYPE.WEB ? _ctx.formType : void 0,
      formType: _ctx.formType === "button" ? void 0 : _ctx.formType,
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      vue.createElementVNode("view", _hoisted_2$11, [
        _ctx.loading ? (vue.openBlock(), vue.createBlock(_component_Loading, {
          key: 0,
          class: "nut-icon-loading"
        })) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.$slots.icon && !_ctx.loading ? vue.renderSlot(_ctx.$slots, "icon", { key: 1 }) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: vue.normalizeClass({ "nut-button__text": _ctx.$slots.icon || _ctx.loading })
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)) : vue.createCommentVNode("", true)
      ])
    ], 14, _hoisted_1$1j);
  }
  const Button = /* @__PURE__ */ _export_sfc(_sfc_main$1K, [["render", _sfc_render$1A]]);
  const pxCheck = (value) => {
    if (value !== void 0) {
      return isNaN(Number(value)) ? String(value) : `${value}px`;
    }
  };
  const { componentName: componentName$o, create: create$1I } = createComponent("cell");
  const _sfc_main$1J = create$1I({
    components: { Right: iconsVueTaro.Right },
    props: {
      title: { type: String, default: "" },
      subTitle: { type: String, default: "" },
      desc: { type: String, default: "" },
      descTextAlign: { type: String, default: "right" },
      isLink: { type: Boolean, default: false },
      to: { type: String, default: "" },
      replace: { type: Boolean, default: false },
      roundRadius: { type: [String, Number], default: "" },
      url: { type: String, default: "" },
      center: { type: Boolean, default: false },
      size: { type: String, default: "" }
      // large
    },
    emits: ["click"],
    setup(props, { emit }) {
      const classes = vue.computed(() => {
        const prefixCls = componentName$o;
        return {
          [prefixCls]: true,
          [`${prefixCls}--clickable`]: props.isLink || props.to,
          [`${prefixCls}--center`]: props.center,
          [`${prefixCls}--large`]: props.size == "large"
        };
      });
      const baseStyle = vue.computed(() => {
        return {
          borderRadius: pxCheck(props.roundRadius)
        };
      });
      const descStyle = vue.computed(() => {
        return {
          textAlign: props.descTextAlign
        };
      });
      const handleClick = (event) => {
        emit("click", event);
      };
      return {
        handleClick,
        classes,
        baseStyle,
        descStyle
      };
    }
  });
  const _hoisted_1$1i = {
    key: 0,
    class: "nut-cell__icon"
  };
  const _hoisted_2$10 = {
    key: 1,
    class: "nut-cell__title"
  };
  const _hoisted_3$O = { class: "title" };
  const _hoisted_4$H = { class: "nut-cell__title-desc" };
  function _sfc_render$1z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Right = vue.resolveComponent("Right");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.baseStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$1i, [
          vue.renderSlot(_ctx.$slots, "icon")
        ])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.title || _ctx.subTitle || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$10, [
          _ctx.subTitle ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.renderSlot(_ctx.$slots, "title", {}, () => [
              vue.createElementVNode("view", _hoisted_3$O, vue.toDisplayString(_ctx.title), 1)
            ]),
            vue.createTextVNode(),
            vue.createElementVNode("view", _hoisted_4$H, vue.toDisplayString(_ctx.subTitle), 1)
          ], 64)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
          ])
        ])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.desc || _ctx.$slots.desc ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: vue.normalizeClass(["nut-cell__value", { "nut-cell__value--alone": !_ctx.title && !_ctx.subTitle && !_ctx.$slots.title }]),
          style: vue.normalizeStyle(_ctx.descStyle)
        }, [
          vue.renderSlot(_ctx.$slots, "desc", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.desc), 1)
          ])
        ], 6)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.renderSlot(_ctx.$slots, "link", {}, () => [
          _ctx.isLink || _ctx.to ? (vue.openBlock(), vue.createBlock(_component_Right, {
            key: 0,
            class: "nut-cell__link"
          })) : vue.createCommentVNode("", true)
        ])
      ])
    ], 6);
  }
  const Cell = /* @__PURE__ */ _export_sfc(_sfc_main$1J, [["render", _sfc_render$1z]]);
  const { create: create$1H } = createComponent("cell-group");
  const _sfc_main$1I = create$1H({
    props: {
      title: { type: String, default: "" },
      desc: { type: String, default: "" }
    }
  });
  const _hoisted_1$1h = { class: "nut-cell-group" };
  const _hoisted_2$$ = {
    key: 1,
    class: "nut-cell-group__title"
  };
  const _hoisted_3$N = {
    key: 3,
    class: "nut-cell-group__desc"
  };
  const _hoisted_4$G = { class: "nut-cell-group__wrap" };
  function _sfc_render$1y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$1h, [
      _ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }) : _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$$, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.$slots.desc ? vue.renderSlot(_ctx.$slots, "desc", { key: 2 }) : _ctx.desc ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$N, vue.toDisplayString(_ctx.desc), 1)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_4$G, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]);
  }
  const CellGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1I, [["render", _sfc_render$1y]]);
  const { componentName: componentName$n, create: create$1G } = createComponent("overlay");
  const _sfc_main$1H = create$1G({
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: [Number, String],
        default: 2e3
      },
      duration: {
        type: [Number, String],
        default: 0.3
      },
      overlayClass: {
        type: String,
        default: ""
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      overlayStyle: {
        type: Object
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      }
    },
    emits: ["click", "update:visible"],
    setup(props, { emit }) {
      const classes = vue.computed(() => {
        const prefixCls = componentName$n;
        return {
          [prefixCls]: true,
          [props.overlayClass]: true
        };
      });
      const style = vue.computed(() => {
        return __spreadValues({
          transitionDuration: `${props.duration}s`,
          zIndex: props.zIndex
        }, props.overlayStyle);
      });
      const onClick = (e) => {
        emit("click", e);
        if (props.closeOnClickOverlay) {
          emit("update:visible", false);
        }
      };
      return { classes, style, onClick };
    }
  });
  const _hoisted_1$1g = ["catch-move"];
  function _sfc_render$1x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, { name: "overlay-fade" }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("view", {
          class: vue.normalizeClass(_ctx.classes),
          style: vue.normalizeStyle(_ctx.style),
          "catch-move": _ctx.lockScroll,
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 14, _hoisted_1$1g), [
          [vue.vShow, _ctx.visible]
        ])
      ]),
      _: 3
    });
  }
  const Overlay = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["render", _sfc_render$1x]]);
  const popupProps = {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 2e3
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: "center"
    },
    transition: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    popClass: {
      type: String,
      default: ""
    },
    closeable: {
      type: Boolean,
      default: false
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
    },
    closeIcon: {
      type: String,
      default: "close"
    },
    destroyOnClose: {
      type: Boolean,
      default: true
    },
    teleport: {
      type: [String, Element],
      default: "body"
    },
    overlay: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    teleportDisable: {
      type: Boolean,
      default: false
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: false
    },
    overlayClass: {
      type: String,
      default: ""
    },
    overlayStyle: {
      type: Object,
      default: () => ({})
    }
  };
  const { componentName: componentName$m, create: create$1F } = createComponent("popup");
  const initIndex = 2e3;
  let _zIndex = initIndex;
  const _sfc_main$1G = create$1F({
    components: {
      NutOverlay: Overlay,
      Close: iconsVueTaro.Close
    },
    props: popupProps,
    emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
    setup(props, { emit }) {
      const state = vue.reactive({
        zIndex: props.zIndex,
        showSlot: true,
        closed: props.closeable
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName$m;
        return {
          [prefixCls]: true,
          ["round"]: props.round,
          [`nut-popup--${props.position}`]: true,
          [`nut-popup--${props.position}--safebottom`]: props.position === "bottom" && props.safeAreaInsetBottom,
          [props.popClass]: true
        };
      });
      const popStyle = vue.computed(() => {
        return __spreadValues({
          zIndex: state.zIndex,
          transitionDuration: `${props.duration}s`
        }, props.style);
      });
      const transitionName = vue.computed(() => {
        return props.transition ? props.transition : `nut-popup-slide-${props.position}`;
      });
      const open = () => {
        if (props.zIndex !== initIndex) {
          _zIndex = Number(props.zIndex);
        }
        emit("update:visible", true);
        state.zIndex = ++_zIndex;
        if (props.destroyOnClose) {
          state.showSlot = true;
        }
        emit("open");
      };
      const close = () => {
        emit("update:visible", false);
        emit("close");
        if (props.destroyOnClose) {
          setTimeout(() => {
            state.showSlot = false;
          }, +props.duration * 1e3);
        }
      };
      const onClick = (e) => {
        emit("clickPop", e);
      };
      const onClickCloseIcon = (e) => {
        e.stopPropagation();
        emit("clickCloseIcon", e);
        emit("update:visible", false);
      };
      const onClickOverlay = (e) => {
        emit("clickOverlay", e);
        if (props.closeOnClickOverlay) {
          emit("update:visible", false);
        }
      };
      const onOpened = (el) => {
        emit("opened", el);
      };
      const onClosed = (el) => {
        emit("closed", el);
      };
      vue.watch(
        () => props.visible,
        () => {
          props.visible ? open() : close();
        }
      );
      vue.watchEffect(() => {
        state.closed = props.closeable;
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        popStyle,
        transitionName,
        classes,
        onClick,
        onClickCloseIcon,
        onClickOverlay,
        onOpened,
        onClosed
      });
    }
  });
  function _sfc_render$1w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_overlay = vue.resolveComponent("nut-overlay");
    const _component_Close = vue.resolveComponent("Close");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_nut_overlay, vue.mergeProps({
        key: 0,
        visible: _ctx.visible,
        "close-on-click-overlay": _ctx.closeOnClickOverlay,
        "z-index": _ctx.zIndex,
        "lock-scroll": _ctx.lockScroll,
        duration: _ctx.duration,
        "overlay-class": _ctx.overlayClass,
        "overlay-style": _ctx.overlayStyle
      }, _ctx.$attrs, { onClick: _ctx.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createVNode(vue.Transition, {
        name: _ctx.transitionName,
        onAfterEnter: _ctx.onOpened,
        onAfterLeave: _ctx.onClosed
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("view", {
            class: vue.normalizeClass(_ctx.classes),
            style: vue.normalizeStyle(_ctx.popStyle),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClick && _ctx.onClick(...args))
          }, [
            _ctx.showSlot ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            _ctx.closed ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: vue.normalizeClass(["nut-popup__close-icon", "nut-popup__close-icon--" + _ctx.closeIconPosition]),
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickCloseIcon && _ctx.onClickCloseIcon(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "close-icon", {}, () => [
                vue.createVNode(_component_Close, { height: "12px" })
              ])
            ], 2)) : vue.createCommentVNode("", true)
          ], 6), [
            [vue.vShow, _ctx.visible]
          ])
        ]),
        _: 3
      }, 8, ["name", "onAfterEnter", "onAfterLeave"])
    ]);
  }
  const Popup = /* @__PURE__ */ _export_sfc(_sfc_main$1G, [["render", _sfc_render$1w]]);
  const component$2 = (tag) => {
    return {
      props: {
        theme: { type: String, default: "" },
        themeVars: { type: Object, default: {} },
        tag: { type: String, default: tag }
      },
      setup(props, { slots }) {
        const hexToRgb = (color) => {
          const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
          if (!reg.test(color))
            return "";
          color = color.toLowerCase();
          if (color.length === 4) {
            color = "#" + color.slice(1).split("").map((char) => char + char).join("");
          }
          const colors = [];
          for (let i = 1; i < 7; i += 2) {
            colors.push(parseInt("0x" + color.slice(i, i + 2)));
          }
          return colors.join(",");
        };
        const kebabCase = (str) => {
          str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
          return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + "-" + p2.toLowerCase());
        };
        const mapThemeVarsToCSSVars = (themeVars) => {
          if (!themeVars)
            return;
          const cssVars = {};
          const primaryColor = themeVars == null ? void 0 : themeVars.primaryColor;
          if (primaryColor) {
            const primaryColorRgb = hexToRgb(primaryColor);
            cssVars["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
            cssVars["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
            cssVars["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
          }
          Object.keys(themeVars).forEach((key) => {
            cssVars[`--nut-${kebabCase(key)}`] = themeVars[key];
          });
          return cssVars;
        };
        const themeStyle = vue.computed(() => mapThemeVarsToCSSVars(props.themeVars));
        return () => {
          var _a;
          return vue.h(
            props.tag,
            {
              class: `nut-theme-${props.theme}`,
              style: themeStyle.value
            },
            (_a = slots.default) == null ? void 0 : _a.call(slots)
          );
        };
      }
    };
  };
  const { create: create$1E } = createComponent("config-provider");
  const _sfc_main$1F = create$1E(component$2("view"));
  const { create: create$1D } = createComponent("layout");
  const _sfc_main$1E = create$1D({});
  const LAYOUT_KEY = Symbol("nut-layout");
  const { create: create$1C } = createComponent("col");
  const _sfc_main$1D = create$1C({
    props: {
      span: {
        type: [String, Number],
        default: "24"
      },
      offset: {
        type: [String, Number],
        default: "0"
      }
    },
    emits: [],
    setup(props) {
      const prefixCls = "nut-col";
      const gutter = vue.inject(LAYOUT_KEY);
      const classes = vue.computed(() => {
        return {
          [prefixCls]: true,
          [prefixCls + "-gutter"]: gutter,
          ["nut-col-" + props.span]: true,
          ["nut-col-offset-" + props.offset]: true
        };
      });
      const style = vue.computed(() => {
        return {
          paddingLeft: gutter / 2 + "px",
          paddingRight: gutter / 2 + "px"
        };
      });
      return {
        classes,
        style
      };
    }
  });
  function _sfc_render$1v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const Col = /* @__PURE__ */ _export_sfc(_sfc_main$1D, [["render", _sfc_render$1v]]);
  const { create: create$1B } = createComponent("row");
  const _sfc_main$1C = create$1B({
    props: {
      type: {
        type: String,
        default: ""
      },
      gutter: {
        type: [String, Number],
        default: ""
      },
      justify: {
        type: String,
        default: "start"
      },
      align: {
        type: String,
        default: "flex-start"
      },
      flexWrap: {
        type: String,
        default: "nowrap"
      }
    },
    setup(props) {
      const prefixCls = "nut-row";
      vue.provide(LAYOUT_KEY, props.gutter);
      const getClass = (prefix, type) => {
        return prefix ? type ? `nut-row-${prefix}-${type}` : "" : `nut-row-${type}`;
      };
      const classes = vue.computed(() => {
        return [
          prefixCls,
          getClass("", props.type),
          getClass("justify", props.justify),
          getClass("align", props.align),
          getClass("flex", props.flexWrap)
        ];
      });
      return {
        classes
      };
    }
  });
  function _sfc_render$1u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const Row = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["render", _sfc_render$1u]]);
  function isWindow(val) {
    return val === window;
  }
  const useTaroRectById = (id) => {
    return new Promise((resolve, reject) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        const t = document ? document.querySelector(`#${id}`) : "";
        if (t) {
          resolve(t == null ? void 0 : t.getBoundingClientRect());
        }
        reject();
      } else {
        const query = Taro.createSelectorQuery();
        query.select(`#${id}`).boundingClientRect().exec(function(rect) {
          if (rect[0]) {
            resolve(rect[0]);
          } else {
            reject();
          }
        });
      }
    });
  };
  const useTaroRect = (elementRef) => {
    let element = vue.unref(elementRef);
    return new Promise((resolve, reject) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (element && element.$el) {
          element = element.$el;
        }
        if (isWindow(element)) {
          const width = element.innerWidth;
          const height = element.innerHeight;
          resolve({
            top: 0,
            left: 0,
            right: width,
            bottom: height,
            width,
            height
          });
        }
        if (element && element.getBoundingClientRect) {
          resolve(element.getBoundingClientRect());
        }
        reject();
      } else {
        const query = Taro.createSelectorQuery();
        const id = element == null ? void 0 : element.id;
        if (id) {
          query.select(`#${id}`).boundingClientRect().exec(function(rect) {
            if (rect[0]) {
              resolve(rect[0]);
            } else {
              reject();
            }
          });
        } else {
          reject();
        }
      }
    });
  };
  const { create: create$1A } = createComponent("sticky");
  const _sfc_main$1B = create$1A({
    props: {
      top: {
        type: [Number, String],
        default: 0
      },
      zIndex: {
        type: [Number, String],
        default: 99
      },
      scrollTop: {
        type: [Number, String],
        defualt: -1
      }
    },
    emits: ["change"],
    setup(props, { emit }) {
      const refRandomId = Math.random().toString(36).slice(-8);
      const rootRef = vue.ref();
      const state = vue.reactive({
        fixed: false,
        height: 0,
        width: 0
      });
      const rootStyle = vue.computed(() => {
        if (state.fixed)
          return { height: `${state.height}px` };
        return {};
      });
      const stickyStyle = vue.computed(() => {
        if (!state.fixed)
          return {};
        return {
          top: `${props.top}px`,
          height: `${state.height}px`,
          width: `${state.width}px`,
          position: state.fixed ? "fixed" : void 0,
          zIndex: Number(props.zIndex)
        };
      });
      const handleScroll = () => {
        useTaroRect(rootRef).then(
          (rootRect) => {
            state.height = rootRect.height;
            state.width = rootRect.width;
            state.fixed = Number(props.top) >= rootRect.top;
          },
          () => {
          }
        );
      };
      vue.watch(
        () => state.fixed,
        (val) => {
          emit("change", val);
        }
      );
      if (props.scrollTop !== -1) {
        Taro.usePageScroll(handleScroll);
      } else {
        vue.watch(() => props.scrollTop, handleScroll);
      }
      vue.onMounted(handleScroll);
      return { rootRef, rootStyle, stickyStyle, refRandomId };
    }
  });
  const _hoisted_1$1f = ["id"];
  function _sfc_render$1t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "rootRef-" + _ctx.refRandomId,
      ref: "rootRef",
      class: "nut-sticky",
      style: vue.normalizeStyle(_ctx.rootStyle)
    }, [
      vue.createElementVNode("view", {
        class: "nut-sticky__box",
        style: vue.normalizeStyle(_ctx.stickyStyle)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 4)
    ], 12, _hoisted_1$1f);
  }
  const Sticky = /* @__PURE__ */ _export_sfc(_sfc_main$1B, [["render", _sfc_render$1t]]);
  const { create: create$1z } = createComponent("divider");
  const _sfc_main$1A = create$1z({
    props: {
      contentPosition: {
        type: String,
        default: "center"
      },
      dashed: {
        type: Boolean,
        default: false
      },
      hairline: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: "horizontal"
      }
    },
    setup(props, context) {
      const classes = vue.computed(() => {
        const prefixCls = "nut-divider";
        if (props.direction === "horizontal") {
          return {
            [prefixCls]: true,
            [`${prefixCls}-center`]: context.slots.default,
            [`${prefixCls}-left`]: props.contentPosition === "left",
            [`${prefixCls}-right`]: props.contentPosition === "right",
            [`${prefixCls}-dashed`]: props.dashed,
            [`${prefixCls}-hairline`]: props.hairline
          };
        } else {
          return {
            [prefixCls]: true,
            [`${prefixCls}-vertical`]: props.direction === "vertical"
          };
        }
      });
      return { classes };
    }
  });
  function _sfc_render$1s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      _ctx.direction === "horizontal" ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true)
    ], 2);
  }
  const Divider = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["render", _sfc_render$1s]]);
  function flattenVNodes(children, childName) {
    const result = [];
    const traverse = (children2) => {
      if (!Array.isArray(children2))
        return;
      children2.forEach((child) => {
        var _a;
        if (!vue.isVNode(child))
          return;
        if (childName) {
          if (child.type && child.type.name === childName) {
            result.push(child);
            return;
          }
        } else {
          result.push(child);
        }
        if ((_a = child.component) == null ? void 0 : _a.subTree) {
          traverse(child.component.subTree.children);
        }
        if (child.children) {
          traverse(child.children);
        }
      });
    };
    traverse(children);
    return result;
  }
  function sortChildren(parent, internalChildren, childName) {
    const vnodes = flattenVNodes(parent.subTree.children, childName);
    internalChildren.sort((a, b) => {
      return vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode);
    });
  }
  function useProvide(key, childName) {
    const internalChildren = vue.shallowReactive([]);
    const parent = vue.getCurrentInstance();
    const add = (child) => {
      if (!child.proxy)
        return;
      internalChildren.push(vue.markRaw(child));
      sortChildren(parent, internalChildren, childName);
    };
    const remove = (child) => {
      internalChildren.splice(internalChildren.indexOf(vue.markRaw(child)), 1);
    };
    const extend = Object.assign;
    return (value) => {
      vue.provide(
        key,
        extend(
          {
            add,
            remove,
            internalChildren
          },
          value
        )
      );
      return {
        internalChildren
      };
    };
  }
  const { componentName: componentName$l } = createComponent("grid");
  const GRID_KEY = Symbol("grid");
  const gridProps = {
    // 列数
    columnNum: {
      type: [Number, String],
      default: 4
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: true
    },
    // 格子之间间隔距离
    gutter: {
      type: [Number, String],
      default: 0
    },
    // 是否内容居中
    center: {
      type: Boolean,
      default: true
    },
    // 是否固定正方形
    square: {
      type: Boolean,
      default: false
    },
    // 内容与文字翻转
    reverse: {
      type: Boolean,
      default: false
    },
    // 内容排列方向
    direction: {
      type: String
    },
    // 是否开启点击反馈
    clickable: {
      type: Boolean,
      default: false
    }
  };
  const component$1 = {
    props: gridProps,
    setup(props, { slots }) {
      useProvide(GRID_KEY, `NutGridItem`)({ props });
      const rootClass = vue.computed(() => {
        const prefixCls = componentName$l;
        return {
          [prefixCls]: true,
          [`${prefixCls}--border`]: props.border && !props.gutter
        };
      });
      const rootStyle = vue.computed(() => {
        const style = {};
        if (props.gutter) {
          style.paddingLeft = pxCheck(props.gutter);
        }
        return style;
      });
      return () => {
        var _a;
        return vue.h(
          "view",
          {
            class: rootClass.value,
            style: rootStyle.value
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
    }
  };
  const { create: create$1y } = createComponent("grid");
  const _sfc_main$1z = create$1y(component$1);
  function useInject(key) {
    const parent = vue.inject(key, null);
    if (parent) {
      const instance = vue.getCurrentInstance();
      const { add, remove, internalChildren } = parent;
      add(instance);
      vue.onUnmounted(() => remove(instance));
      const index = vue.computed(() => internalChildren.indexOf(instance));
      return {
        parent,
        index
      };
    }
    return {
      parent: null,
      index: vue.ref(-1)
    };
  }
  const { create: create$1x, componentName: componentName$k } = createComponent("grid-item");
  const _sfc_main$1y = create$1x({
    props: {
      text: {
        type: String
      }
      // router
      // to: {
      //   type: [String, Object]
      // },
      // url: {
      //   type: String,
      //   default: ''
      // },
      // replace: {
      //   type: Boolean,
      //   default: false
      // }
    },
    emits: ["click"],
    setup(props, { emit }) {
      const Parent = useInject(GRID_KEY);
      if (!Parent.parent)
        return {};
      const index = Parent.index;
      const parent = Parent.parent.props;
      const rootClass = vue.computed(() => {
        const prefixCls = componentName$k;
        return {
          [prefixCls]: true
        };
      });
      const rootStyle = vue.computed(() => {
        const style = {
          flexBasis: `${100 / +parent.columnNum}%`
        };
        if (parent.square) {
          style.paddingTop = `${100 / +parent.columnNum}%`;
        } else if (parent.gutter) {
          style.paddingRight = pxCheck(parent.gutter);
          if (index.value >= +parent.columnNum) {
            style.marginTop = pxCheck(parent.gutter);
          }
        }
        return style;
      });
      const contentClass = vue.computed(() => {
        const prefixCls = `${componentName$k}__content`;
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}--border`]: parent.border,
          [`${prefixCls}--surround`]: parent.border && parent.gutter,
          [`${prefixCls}--center`]: parent.center,
          [`${prefixCls}--square`]: parent.square,
          [`${prefixCls}--reverse`]: parent.reverse,
          [`${prefixCls}--${parent.direction}`]: !!parent.direction,
          [`${prefixCls}--clickable`]: parent.clickable
        };
      });
      const handleClick = (event) => {
        emit("click", event);
      };
      return {
        rootClass,
        rootStyle,
        contentClass,
        handleClick
      };
    }
  });
  const _hoisted_1$1e = { class: "nut-grid-item__text" };
  function _sfc_render$1r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.rootClass),
      style: vue.normalizeStyle(_ctx.rootStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.contentClass)
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_1$1e, [
          _ctx.text ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createTextVNode(vue.toDisplayString(_ctx.text), 1)
          ], 64)) : vue.renderSlot(_ctx.$slots, "text", { key: 1 })
        ])
      ], 2)
    ], 6);
  }
  const GridItem = /* @__PURE__ */ _export_sfc(_sfc_main$1y, [["render", _sfc_render$1r]]);
  const { create: create$1w, componentName: componentName$j } = createComponent("space");
  const _sfc_main$1x = create$1w({
    props: {
      align: String,
      direction: {
        type: String,
        default: "horizontal"
      },
      justify: String,
      wrap: Boolean,
      gutter: [Number, String, Array],
      fill: Boolean
    },
    setup(props, { slots }) {
      const getMargin = (gutter) => {
        if (typeof gutter === "number") {
          return gutter + "px";
        }
        return gutter;
      };
      const getMarginStyle = (isLast) => {
        const style = {};
        if (!props.gutter)
          return style;
        const marginRight = `${getMargin(Array.isArray(props.gutter) ? props.gutter[0] : props.gutter)}`;
        const marginBottom = `${getMargin(Array.isArray(props.gutter) ? props.gutter[1] : props.gutter)}`;
        if (isLast) {
          return props.wrap ? { marginBottom } : {};
        }
        if (props.direction === "horizontal") {
          style.marginRight = marginRight;
        }
        if (props.direction === "vertical" || props.wrap) {
          style.marginBottom = marginBottom;
        }
        return style;
      };
      const filterEmpty = (children = []) => {
        const nodes = [];
        children.forEach((child) => {
          if (Array.isArray(child)) {
            nodes.push(...child);
          } else if (child.type === vue.Fragment) {
            nodes.push(...filterEmpty(child.children));
          } else {
            nodes.push(child);
          }
        });
        return nodes.filter(
          (c) => {
            var _a;
            return !(c && (c.type === vue.Comment || c.type === vue.Fragment && ((_a = c.children) == null ? void 0 : _a.length) === 0 || c.type === vue.Text && c.children.trim() === ""));
          }
        );
      };
      const { direction, wrap, fill, justify, align } = props;
      return () => {
        var _a;
        const children = filterEmpty((_a = slots.default) == null ? void 0 : _a.call(slots));
        const renderChildren = () => {
          return children.map((child, i) => {
            return vue.h(
              "view",
              {
                class: `${componentName$j}-item`,
                style: getMarginStyle(i === children.length - 1)
              },
              child
            );
          });
        };
        return vue.h(
          "view",
          {
            class: [
              componentName$j,
              direction && `${componentName$j}-${direction}`,
              align && `${componentName$j}-align-${align}`,
              justify && `${componentName$j}-justify-${justify}`,
              wrap && `${componentName$j}-wrap`,
              fill && `${componentName$j}-fill`
            ]
          },
          renderChildren()
        );
      };
    }
  });
  const { componentName: componentName$i, create: create$1v } = createComponent("navbar");
  const _sfc_main$1w = create$1v({
    components: { Left: iconsVueTaro.Left },
    props: {
      leftShow: { type: Boolean, default: false },
      //左侧  是否显示返回icon
      title: { type: String, default: "" },
      //中间  文字标题
      titleIcon: { type: Boolean, default: false },
      //中间
      leftText: { type: String, default: "" },
      //左侧文字
      desc: { type: String, default: "" },
      //右侧   按钮文字
      fixed: {
        type: Boolean,
        default: false
      },
      safeAreaInsetTop: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      placeholder: {
        // 生成一个等高的占位元素
        type: Boolean,
        default: true
      },
      zIndex: {
        type: [Number, String],
        default: 10
      }
    },
    emits: [
      "clickBack",
      "clickTitle",
      "clickIcon",
      "clickRight",
      // will be deprecated
      "onClickBack",
      "onClickTitle",
      "onClickIcon",
      "onClickRight"
    ],
    setup(props, { emit }) {
      const { border, fixed, safeAreaInsetTop, placeholder } = vue.toRefs(props);
      const refRandomId = Math.random().toString(36).slice(-8);
      const navHeight = vue.ref("auto");
      const navbarRef = vue.ref(null);
      const classes = vue.computed(() => {
        const prefixCls = componentName$i;
        return {
          [prefixCls]: true,
          [`${prefixCls}--border`]: border.value,
          [`${prefixCls}--fixed`]: fixed.value,
          [`${prefixCls}--safe-area-inset-top`]: safeAreaInsetTop.value
        };
      });
      const rootStyle = vue.computed(() => {
        if (fixed.value && placeholder.value) {
          return {
            height: navHeight.value
          };
        }
        return {};
      });
      const getNavHeight = () => {
        useTaroRect(navbarRef).then(
          (rect) => {
            navHeight.value = `${rect.height}px`;
          },
          () => {
          }
        );
      };
      vue.onMounted(() => {
        if (fixed.value && placeholder.value) {
          setTimeout(() => {
            getNavHeight();
          }, 100);
        }
      });
      const handleLeft = () => {
        emit("clickBack");
        emit("onClickBack");
      };
      const handleCenter = () => {
        emit("clickTitle");
        emit("onClickTitle");
      };
      const handleCenterIcon = () => {
        emit("clickIcon");
        emit("onClickIcon");
      };
      const handleRight = () => {
        emit("clickRight");
        emit("onClickRight");
      };
      return {
        refRandomId,
        navbarRef,
        rootStyle,
        classes,
        navHeight,
        handleLeft,
        handleCenter,
        handleCenterIcon,
        handleRight
      };
    }
  });
  const _hoisted_1$1d = ["id"];
  const _hoisted_2$_ = {
    key: 1,
    class: "nut-navbar__text"
  };
  const _hoisted_3$M = { class: "nut-navbar__title" };
  const _hoisted_4$F = {
    key: 0,
    class: "nut-navbar__text"
  };
  function _sfc_render$1q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Left = vue.resolveComponent("Left");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-navbar--placeholder",
      style: vue.normalizeStyle(_ctx.rootStyle)
    }, [
      vue.createElementVNode("view", {
        id: "navbarRef-" + _ctx.refRandomId,
        ref: "navbarRef",
        class: vue.normalizeClass(_ctx.classes),
        style: vue.normalizeStyle({ zIndex: _ctx.zIndex })
      }, [
        vue.createElementVNode("view", {
          class: "nut-navbar__left",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleLeft && _ctx.handleLeft(...args))
        }, [
          _ctx.leftShow ? vue.renderSlot(_ctx.$slots, "left-show", { key: 0 }, () => [
            vue.createVNode(_component_Left, {
              height: "12px",
              color: "#979797"
            })
          ]) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          _ctx.leftText ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$_, vue.toDisplayString(_ctx.leftText), 1)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "left")
        ]),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_3$M, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "title",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleCenter && _ctx.handleCenter(...args))
          }, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          _ctx.titleIcon ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "icon",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleCenterIcon && _ctx.handleCenterIcon(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "title-icon", {
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleCenterIcon && _ctx.handleCenterIcon(...args))
            })
          ])) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "content")
        ]),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: "nut-navbar__right",
          onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleRight && _ctx.handleRight(...args))
        }, [
          _ctx.desc ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$F, vue.toDisplayString(_ctx.desc), 1)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "right")
        ])
      ], 14, _hoisted_1$1d)
    ], 4);
  }
  const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["render", _sfc_render$1q]]);
  const useLocale = (name = "") => {
    return (keyPath, ...args) => {
      name = name.toLocaleLowerCase();
      const languages = Locale.languages();
      let text = keyPath;
      if (name && name.startsWith("nut")) {
        text = `${name.slice(3)}.${keyPath}`;
      }
      const res = getPropByPath(languages, text) || getPropByPath(languages, keyPath);
      return isFunction(res) ? res(...args) : res;
    };
  };
  const { create: create$1u } = createComponent("fixed-nav");
  const cN$m = "NutFixedNav";
  const _sfc_main$1v = create$1u({
    components: {
      NutOverlay: Overlay,
      Left: iconsVueTaro.Left
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      overlay: {
        type: Boolean,
        default: true
      },
      navList: {
        default: () => [],
        type: Array
      },
      activeColor: {
        default: "",
        type: String
      },
      activeText: {
        default: "",
        type: String
      },
      unActiveText: {
        default: "",
        type: String
      },
      position: {
        default: () => {
          return {
            top: "auto",
            bottom: "auto"
          };
        },
        type: Object
      },
      type: {
        default: "right",
        type: String
      }
    },
    emits: ["update:visible", "selected"],
    setup(props, { emit }) {
      const translate = useLocale(cN$m);
      const classes = vue.computed(() => {
        const prefixCls = "nut-fixed-nav";
        return {
          [prefixCls]: true,
          active: props.visible,
          [props.type]: true
        };
      });
      const current = vue.ref(-1);
      const updateValue = (value = !props.visible) => {
        emit("update:visible", value);
      };
      const selected = (item, event) => {
        emit("selected", {
          item,
          event
        });
        current.value = item.id;
      };
      return { classes, updateValue, selected, translate, current };
    }
  });
  const _hoisted_1$1c = { class: "nut-fixed-nav__list" };
  const _hoisted_2$Z = ["onClick"];
  const _hoisted_3$L = ["src"];
  const _hoisted_4$E = { class: "span" };
  const _hoisted_5$r = {
    key: 0,
    class: "b"
  };
  const _hoisted_6$l = { class: "text" };
  function _sfc_render$1p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_overlay = vue.resolveComponent("nut-overlay");
    const _component_Left = vue.resolveComponent("Left");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.position)
    }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_nut_overlay, {
        key: 0,
        visible: _ctx.visible,
        "z-index": 200,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.updateValue(false))
      }, null, 8, ["visible"])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "list", {}, () => [
        vue.createElementVNode("view", _hoisted_1$1c, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.navList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item.id || index,
              class: vue.normalizeClass(["nut-fixed-nav__list-item", { active: item.id == _ctx.current }]),
              onClick: ($event) => _ctx.selected(item, $event)
            }, [
              vue.createElementVNode("img", {
                src: item.icon
              }, null, 8, _hoisted_3$L),
              vue.createTextVNode(),
              vue.createElementVNode("view", _hoisted_4$E, vue.toDisplayString(item.text), 1),
              vue.createTextVNode(),
              item.num ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$r, vue.toDisplayString(item.num), 1)) : vue.createCommentVNode("", true)
            ], 10, _hoisted_2$Z);
          }), 128))
        ])
      ]),
      vue.createTextVNode(),
      vue.createElementVNode("div", {
        class: "nut-fixed-nav__btn",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.updateValue())
      }, [
        vue.renderSlot(_ctx.$slots, "btn", {}, () => [
          vue.createVNode(_component_Left, { color: "#fff" }),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_6$l, vue.toDisplayString(_ctx.visible ? _ctx.activeText || _ctx.translate("activeText") : _ctx.unActiveText || _ctx.translate("unActiveText")), 1)
        ])
      ])
    ], 6);
  }
  const FixedNav = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["render", _sfc_render$1p]]);
  const useChildren = (key) => {
    const publicChildren = vue.reactive([]);
    const internalChildren = vue.reactive([]);
    const linkChildren = (value) => {
      const link = (child) => {
        if (child.proxy) {
          internalChildren.push(child);
          publicChildren.push(child.proxy);
        }
      };
      const unlink = (child) => {
        if (child.proxy) {
          let internalIndex = internalChildren.indexOf(child);
          if (internalIndex > -1) {
            internalChildren.splice(internalIndex, 1);
          }
          let publicIndex = publicChildren.indexOf(child.proxy);
          if (internalIndex > -1) {
            publicChildren.splice(publicIndex, 1);
          }
        }
      };
      vue.provide(key, __spreadValues({
        unlink,
        link,
        children: publicChildren,
        internalChildren
      }, value));
    };
    return {
      children: publicChildren,
      linkChildren
    };
  };
  const useParent = (key) => {
    const parent = vue.inject(key, null);
    if (parent) {
      const instance = vue.getCurrentInstance();
      const { link, unlink } = parent;
      link(instance);
      vue.onUnmounted(() => {
        unlink(instance);
      });
    }
    return { parent };
  };
  const MENU_KEY = Symbol("nut-menu");
  const { componentName: componentName$h, create: create$1t } = createComponent("menu");
  const _sfc_main$1u = create$1t({
    components: {
      RectUp: iconsVueTaro.RectUp,
      RectDown: iconsVueTaro.RectDown
    },
    props: {
      activeColor: {
        type: String,
        default: ""
      },
      overlay: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 0.3
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: "down"
      },
      scrollFixed: {
        type: [Boolean, String, Number],
        default: false
      },
      titleClass: {
        type: String,
        default: ""
      }
    },
    setup(props) {
      const barRef = vue.ref();
      const refRandomId = Math.random().toString(36).slice(-8);
      const offset = vue.ref(0);
      const isScrollFixed = vue.ref(false);
      const { children, linkChildren } = useChildren(MENU_KEY);
      const opened = vue.computed(() => children.some((item) => item.state.showWrapper));
      const classes = vue.computed(() => {
        const prefixCls = componentName$h;
        return {
          [prefixCls]: true,
          "scroll-fixed": isScrollFixed.value
        };
      });
      const updateOffset = (children2) => {
        if (barRef.value) {
          setTimeout(() => {
            useTaroRect(barRef).then(
              (rect) => {
                if (props.direction === "down") {
                  offset.value = rect.bottom;
                } else {
                  offset.value = Taro.getSystemInfoSync().windowHeight - rect.top;
                }
                children2.toggle();
              },
              () => {
              }
            );
          }, 100);
        }
      };
      linkChildren({ props, offset });
      const toggleItem = (active) => {
        children.forEach((item, index) => {
          if (index === active) {
            updateOffset(item);
          } else if (item.state.showPopup) {
            item.toggle(false, { immediate: true });
          }
        });
      };
      const onScroll = (res) => {
        const { scrollFixed } = props;
        const scrollTop = res.scrollTop;
        isScrollFixed.value = scrollTop > (typeof scrollFixed === "boolean" ? 30 : Number(scrollFixed));
      };
      const getClasses = (showPopup) => {
        let str = "";
        const { titleClass } = props;
        if (showPopup) {
          str += "active";
        }
        if (titleClass) {
          str += ` ${titleClass}`;
        }
        return str;
      };
      Taro.usePageScroll((res) => {
        const { scrollFixed } = props;
        if (scrollFixed) {
          onScroll(res);
        }
      });
      return {
        toggleItem,
        children,
        opened,
        classes,
        barRef,
        refRandomId,
        getClasses
      };
    }
  });
  const _hoisted_1$1b = ["id"];
  const _hoisted_2$Y = ["onClick"];
  const _hoisted_3$K = { class: "nut-menu__title-text" };
  const _hoisted_4$D = { class: "nut-menu__title-icon" };
  function _sfc_render$1o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_RectUp = vue.resolveComponent("RectUp");
    const _component_RectDown = vue.resolveComponent("RectDown");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("view", {
        id: "nut-menu__bar" + _ctx.refRandomId,
        ref: "barRef",
        class: vue.normalizeClass(["nut-menu__bar", { opened: _ctx.opened }])
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.children, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: vue.normalizeClass(["nut-menu__item", { disabled: item.disabled, active: item.state.showPopup }]),
            style: vue.normalizeStyle({ color: item.state.showPopup ? _ctx.activeColor : "" }),
            onClick: ($event) => !item.disabled && _ctx.toggleItem(index)
          }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["nut-menu__title", _ctx.getClasses(item.state.showPopup)])
            }, [
              vue.createElementVNode("view", _hoisted_3$K, vue.toDisplayString(item.renderTitle()), 1),
              vue.createTextVNode(),
              vue.createElementVNode("span", _hoisted_4$D, [
                vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                  _ctx.direction === "up" ? (vue.openBlock(), vue.createBlock(_component_RectUp, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_RectDown, { key: 1 }))
                ])
              ])
            ], 2)
          ], 14, _hoisted_2$Y);
        }), 128))
      ], 10, _hoisted_1$1b),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["render", _sfc_render$1o]]);
  const _sfc_main$1t = /* @__PURE__ */ vue.defineComponent({
    __name: "index.taro",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.unref(Taro).getEnv() === vue.unref(Taro).ENV_TYPE.WEB ? (vue.openBlock(), vue.createElementBlock("taro-scroll-view-core", vue.normalizeProps(vue.mergeProps({ key: 0 }, _ctx.$attrs)), [
          vue.renderSlot(_ctx.$slots, "default")
        ], 16)) : (vue.openBlock(), vue.createElementBlock("scroll-view", vue.normalizeProps(vue.mergeProps({ key: 1 }, _ctx.$attrs)), [
          vue.renderSlot(_ctx.$slots, "default")
        ], 16));
      };
    }
  });
  const { create: create$1s } = createComponent("menu-item");
  const _sfc_main$1s = create$1s({
    props: {
      title: String,
      options: {
        type: Array,
        default: []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      modelValue: null,
      cols: {
        type: Number,
        default: 1
      },
      activeTitleClass: String,
      inactiveTitleClass: String
    },
    components: {
      Check: iconsVueTaro.Check,
      NutPopup: Popup,
      NutScrollView: _sfc_main$1t
    },
    emits: ["update:modelValue", "change"],
    setup(props, { emit }) {
      const state = vue.reactive({
        showPopup: false,
        showWrapper: false
      });
      const { parent } = useParent(MENU_KEY);
      const style = vue.computed(() => {
        return parent.props.direction === "down" ? { top: parent.offset.value + "px" } : { bottom: parent.offset.value + "px" };
      });
      const placeholderElementStyle = vue.computed(() => {
        const heightStyle = { height: parent.offset.value + "px" };
        if (parent.props.direction === "down") {
          return __spreadProps(__spreadValues({}, heightStyle), { top: "0px" });
        } else {
          return __spreadProps(__spreadValues({}, heightStyle), { bottom: "0px" });
        }
      });
      const toggle = (show = !state.showPopup) => {
        if (show === state.showPopup) {
          return;
        }
        state.showPopup = show;
        if (show) {
          state.showWrapper = true;
        }
      };
      const renderTitle = () => {
        var _a;
        if (props.title) {
          return props.title;
        }
        const match = (_a = props.options) == null ? void 0 : _a.find((option) => option.value === props.modelValue);
        return match ? match.text : "";
      };
      const onClick = (option) => {
        state.showPopup = false;
        if (option.value !== props.modelValue) {
          emit("update:modelValue", option.value);
          emit("change", option.value);
        }
      };
      const handleClose = () => {
        state.showWrapper = false;
      };
      const handleClickOutside = () => {
        state.showPopup = false;
      };
      return {
        style,
        placeholderElementStyle,
        renderTitle,
        state,
        parent,
        toggle,
        onClick,
        handleClose,
        handleClickOutside
      };
    }
  });
  const _hoisted_1$1a = ["catch-move"];
  const _hoisted_2$X = { class: "nut-menu-item__content" };
  const _hoisted_3$J = ["onClick"];
  function _sfc_render$1n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Check = vue.resolveComponent("Check");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-menu-item",
      style: vue.normalizeStyle(_ctx.style)
    }, [
      vue.withDirectives(vue.createElementVNode("view", {
        class: "nut-menu-item-placeholder-element",
        style: vue.normalizeStyle(_ctx.placeholderElementStyle),
        "catch-move": _ctx.parent.props.lockScroll,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickOutside && _ctx.handleClickOutside(...args))
      }, null, 12, _hoisted_1$1a), [
        [vue.vShow, _ctx.state.showPopup]
      ]),
      vue.createTextVNode(),
      vue.createVNode(_component_nut_popup, vue.mergeProps(_ctx.$attrs, {
        visible: _ctx.state.showPopup,
        "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.state.showPopup = $event),
        style: { position: "absolute" },
        "overlay-style": { position: "absolute" },
        position: _ctx.parent.props.direction === "down" ? "top" : "bottom",
        duration: _ctx.parent.props.duration,
        "destroy-on-close": false,
        overlay: _ctx.parent.props.overlay,
        "lock-scroll": _ctx.parent.props.lockScroll,
        "close-on-click-overlay": _ctx.parent.props.closeOnClickOverlay,
        "catch-move": _ctx.parent.props.lockScroll,
        onClosed: _ctx.handleClose
      }), {
        default: vue.withCtx(() => [
          vue.createVNode(_component_nut_scroll_view, { "scroll-y": true }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", _hoisted_2$X, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (option, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass(["nut-menu-item__option", [{ active: option.value === _ctx.modelValue }]]),
                    style: vue.normalizeStyle({ "flex-basis": 100 / _ctx.cols + "%" }),
                    onClick: ($event) => _ctx.onClick(option)
                  }, [
                    option.value === _ctx.modelValue ? (vue.openBlock(), vue.createElementBlock("span", {
                      key: 0,
                      class: vue.normalizeClass(["nut-menu-item__span", [option.value === _ctx.modelValue ? _ctx.activeTitleClass : _ctx.inactiveTitleClass]])
                    }, [
                      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                        vue.createVNode(_component_Check, vue.mergeProps(_ctx.$attrs, {
                          color: _ctx.parent.props.activeColor
                        }), null, 16, ["color"])
                      ])
                    ], 2)) : vue.createCommentVNode("", true),
                    vue.createTextVNode(),
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass([option.value === _ctx.modelValue ? _ctx.activeTitleClass : _ctx.inactiveTitleClass]),
                      style: vue.normalizeStyle({ color: option.value === _ctx.modelValue ? _ctx.parent.props.activeColor : "" })
                    }, vue.toDisplayString(option.text), 7)
                  ], 14, _hoisted_3$J);
                }), 128)),
                vue.createTextVNode(),
                vue.renderSlot(_ctx.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "catch-move", "onClosed"])
    ], 4)), [
      [vue.vShow, _ctx.state.showWrapper]
    ]);
  }
  const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["render", _sfc_render$1n]]);
  const TABBAR_KEY = Symbol("nut-tabbar");
  const { create: create$1r } = createComponent("tabbar");
  const _sfc_main$1r = create$1r({
    props: {
      modelValue: {
        type: [Number, String],
        default: 0
      },
      bottom: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "base"
      },
      size: {
        type: String,
        default: "20px"
      },
      unactiveColor: {
        type: String,
        default: ""
      },
      activeColor: {
        type: String,
        default: ""
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: Boolean,
        default: false
      }
    },
    emits: ["tabSwitch", "update:modelValue"],
    setup(props, { emit }) {
      const refRandomId = Math.random().toString(36).slice(-8);
      const { bottom, placeholder } = vue.toRefs(props);
      const height = vue.ref("auto");
      const mdValue = vue.reactive({
        val: props.modelValue,
        children: []
      });
      const nutTabbarRef = vue.ref(null);
      function changeIndex(index, active) {
        emit("update:modelValue", active);
        parentData.modelValue = active;
        emit("tabSwitch", parentData.children[index], active);
      }
      const parentData = vue.reactive({
        children: mdValue.children,
        size: props.size,
        modelValue: mdValue.val,
        unactiveColor: props.unactiveColor,
        activeColor: props.activeColor,
        changeIndex
      });
      vue.provide(TABBAR_KEY, parentData);
      vue.watch(
        () => props.modelValue,
        (value) => {
          parentData.modelValue = value;
        }
      );
      vue.onMounted(() => {
        if (bottom.value && placeholder.value) {
          Taro.nextTick(() => {
            useTaroRect(nutTabbarRef).then(
              (rect) => {
                height.value = `${rect.height}px`;
              },
              () => {
              }
            );
          });
        }
      });
      return {
        refRandomId,
        changeIndex,
        nutTabbarRef,
        height
      };
    }
  });
  const _hoisted_1$19 = ["id"];
  function _sfc_render$1m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass({ "nut-tabbar__placeholder": _ctx.bottom && _ctx.placeholder }),
      style: vue.normalizeStyle({ height: _ctx.height })
    }, [
      vue.createElementVNode("view", {
        id: `nut-tabbar-${_ctx.refRandomId}`,
        ref: "nutTabbarRef",
        class: vue.normalizeClass(["nut-tabbar", { "nut-tabbar-bottom": _ctx.bottom, "nut-tabbar-safebottom": _ctx.safeAreaInsetBottom }])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$19)
    ], 6);
  }
  const Tabbar = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["render", _sfc_render$1m]]);
  const { create: create$1q } = createComponent("badge");
  const _sfc_main$1q = create$1q({
    props: {
      value: {
        type: [String, Number]
      },
      max: {
        type: Number,
        default: 1e4
      },
      dot: {
        type: Boolean,
        default: false
      },
      bubble: {
        type: Boolean,
        default: false
      },
      hidden: {
        type: Boolean,
        default: false
      },
      top: {
        type: String,
        default: "0"
      },
      right: {
        type: String,
        default: "0"
      },
      zIndex: {
        type: Number,
        default: 9
      },
      color: {
        type: String,
        default: ""
      }
    },
    setup(props) {
      const state = vue.reactive({});
      const stl = vue.computed(() => {
        return {
          top: `${props.top}px`,
          right: `${props.right}px`,
          zIndex: props.zIndex,
          background: props.color
        };
      });
      const content = vue.computed(() => {
        if (props.dot)
          return;
        const value = props.value;
        const max = props.max;
        if (typeof value === "number" && typeof max === "number") {
          return max < value ? `${max}+` : value;
        }
        return value;
      });
      return {
        state,
        stl,
        content
      };
    }
  });
  const _hoisted_1$18 = { class: "nut-badge" };
  const _hoisted_2$W = ["textContent"];
  function _sfc_render$1l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$18, [
      vue.withDirectives(vue.createElementVNode("view", {
        class: "nut-badge__icon",
        style: vue.normalizeStyle(_ctx.stl)
      }, [
        vue.renderSlot(_ctx.$slots, "icon")
      ], 4), [
        [vue.vShow, !_ctx.hidden && !_ctx.dot && _ctx.$slots.icon]
      ]),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createTextVNode(),
      vue.withDirectives(vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": _ctx.dot, "nut-badge__content--bubble": !_ctx.dot && _ctx.bubble }]),
        style: vue.normalizeStyle(_ctx.stl),
        textContent: vue.toDisplayString(_ctx.content)
      }, null, 14, _hoisted_2$W), [
        [vue.vShow, !_ctx.hidden && (_ctx.content || _ctx.dot)]
      ])
    ]);
  }
  const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["render", _sfc_render$1l]]);
  const { create: create$1p } = createComponent("tabbar-item");
  const _sfc_main$1p = create$1p({
    components: {
      NutBadge: Badge
    },
    props: {
      tabTitle: {
        // 标签页的标题
        type: String,
        default: ""
      },
      name: {
        type: String
      },
      icon: {
        // 标签页显示的icon
        type: Object
      },
      href: {
        // 标签页的跳转链接
        type: String,
        default: ""
      }
    },
    setup(props, { slots }) {
      const isHaveSlot = (slot) => {
        return slots[slot];
      };
      const parent = vue.inject(TABBAR_KEY);
      const state = vue.reactive({
        unactiveColor: parent.unactiveColor,
        // 未选中的颜色
        activeColor: parent.activeColor,
        // 选中的颜色
        active: parent.modelValue,
        // 是否选中
        index: 0
      });
      const relation = (child) => {
        var _a;
        if (child.proxy) {
          parent.children.push(child.proxy);
          const index = parent.children.indexOf(child.proxy);
          state.index = (_a = props.name) != null ? _a : index;
        }
      };
      relation(vue.getCurrentInstance());
      const active = vue.computed(() => state.index === parent.modelValue);
      function change() {
        var _a;
        let key = (_a = props.name) != null ? _a : state.index;
        let indexValue = null;
        if (props.name) {
          indexValue = parent.children.findIndex((item) => {
            return item.name == key;
          });
        }
        parent.changeIndex(indexValue != null ? indexValue : key, state.index);
      }
      return {
        state,
        active,
        isHaveSlot,
        renderIcon,
        change
      };
    }
  });
  const _hoisted_1$17 = { class: "nut-tabbar-item_icon-box" };
  const _hoisted_2$V = {
    key: 0,
    class: "nut-tabbar-item_icon-box_icon"
  };
  const _hoisted_3$I = { key: 1 };
  const _hoisted_4$C = { key: 0 };
  function _sfc_render$1k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_badge = vue.resolveComponent("nut-badge");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !_ctx.active }]),
      style: vue.normalizeStyle({
        color: _ctx.active ? _ctx.state.activeColor : _ctx.state.unactiveColor
      }),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.change())
    }, [
      vue.createVNode(_component_nut_badge, vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", _hoisted_1$17, [
            _ctx.isHaveSlot("icon") ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$V, [
              vue.renderSlot(_ctx.$slots, "icon", { active: _ctx.active })
            ])) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            _ctx.icon && !_ctx.isHaveSlot("icon") ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$I, [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(_ctx.icon)), { class: "nut-popover-item-img" }))
            ])) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            vue.createElementVNode("view", {
              class: vue.normalizeClass([
                "nut-tabbar-item_icon-box_nav-word",
                { "nut-tabbar-item_icon-box_big-word": !_ctx.icon && !_ctx.isHaveSlot("icon") }
              ])
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                _ctx.tabTitle ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$C, vue.toDisplayString(_ctx.tabTitle), 1)) : vue.createCommentVNode("", true)
              ])
            ], 2)
          ])
        ]),
        _: 3
      }, 16)
    ], 6);
  }
  const TabbarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["render", _sfc_render$1k]]);
  const { create: create$1o } = createComponent("elevator");
  const _sfc_main$1o = create$1o({
    components: {
      NutScrollView: _sfc_main$1t
    },
    props: {
      height: {
        type: [Number, String],
        default: "200px"
      },
      acceptKey: {
        type: [String],
        default: "title"
      },
      indexList: {
        type: Array,
        default: () => {
          return [];
        }
      },
      isSticky: {
        type: [Boolean],
        default: false
      },
      spaceHeight: {
        type: [Number],
        default: 23
      },
      titleHeight: {
        type: [Number],
        default: 35
      }
    },
    emits: ["clickItem", "clickIndex", "change"],
    setup(props, { emit, expose }) {
      const spaceHeight = 23;
      const listview = vue.ref();
      const state = vue.reactive({
        anchorIndex: 0,
        codeIndex: 0,
        listHeight: [],
        listGroup: [],
        touchState: {
          y1: 0,
          y2: 0
        },
        scrollStart: false,
        currentIndex: 0,
        query: Taro.createSelectorQuery(),
        scrollTop: 0,
        currentData: {},
        currentKey: "",
        scrollY: 0
      });
      const clientHeight2 = vue.computed(() => {
        return listview.value.clientHeight;
      });
      const fixedStyle = vue.computed(() => {
        return {
          height: `${state.listHeight[state.listGroup.length - 1]}px`
        };
      });
      const getData = (el) => {
        if (!el.dataset.index) {
          return "0";
        }
        return el.dataset.index;
      };
      const setListGroup = (el) => {
        vue.nextTick(() => {
          if (!state.listGroup.includes(el) && el != null) {
            state.listGroup.push(el);
          }
        });
      };
      const calculateHeight = () => {
        state.listHeight = [];
        let height = 0;
        state.listHeight.push(height);
        for (let i = 0; i < state.listGroup.length; i++) {
          state.query.selectAll(`.elevator__item__${i}`).boundingClientRect();
          state.query.exec((res) => {
            height += Math.floor(res[i][0].height);
            state.listHeight.push(height);
          });
        }
      };
      const scrollTo = (index) => {
        if (!index && index !== 0) {
          return;
        }
        if (index < 0)
          index = 0;
        if (index > state.listHeight.length - 2)
          index = state.listHeight.length - 2;
        state.codeIndex = index;
        state.scrollTop = state.listHeight[index];
      };
      const touchStart = (e) => {
        state.scrollStart = true;
        let index = getData(e.target);
        let firstTouch = e.touches[0];
        state.touchState.y1 = firstTouch.pageY;
        state.anchorIndex = +index;
        state.codeIndex = +index;
        scrollTo(+index);
      };
      const touchMove = (e) => {
        let firstTouch = e.touches[0];
        state.touchState.y2 = firstTouch.pageY;
        let delta = (state.touchState.y2 - state.touchState.y1) / spaceHeight | 0;
        state.codeIndex = state.anchorIndex + delta;
        scrollTo(state.currentIndex);
      };
      const touchEnd = () => {
        state.scrollStart = false;
      };
      const handleClickItem = (key, item) => {
        emit("clickItem", key, item);
        state.currentData = item;
        state.currentKey = key;
      };
      const handleClickIndex = (key) => {
        emit("clickIndex", key);
      };
      const listViewScroll = (e) => {
        let target = e.target;
        let scrollTop = target.scrollTop;
        const listHeight = state.listHeight;
        state.scrollY = Math.floor(scrollTop);
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i];
          let height2 = listHeight[i + 1];
          if (state.scrollY >= height1 && state.scrollY < height2) {
            state.currentIndex = i;
            return;
          }
        }
      };
      expose({
        scrollTo
      });
      vue.watch(
        () => state.listGroup.length,
        () => {
          Taro.nextTick(calculateHeight);
        }
      );
      vue.watch(
        () => state.currentIndex,
        (newVal) => {
          emit("change", newVal);
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        clientHeight: clientHeight2,
        fixedStyle,
        setListGroup,
        listview,
        touchStart,
        touchMove,
        touchEnd,
        handleClickItem,
        handleClickIndex,
        listViewScroll
      });
    }
  });
  const _hoisted_1$16 = { class: "nut-elevator" };
  const _hoisted_2$U = { class: "nut-elevator__list__item__code" };
  const _hoisted_3$H = ["onClick"];
  const _hoisted_4$B = ["innerHTML"];
  const _hoisted_5$q = { class: "nut-elevator__list__fixed" };
  const _hoisted_6$k = { class: "nut-elevator__list__fixed-title" };
  const _hoisted_7$i = { class: "nut-elevator__bars__inner" };
  const _hoisted_8$c = ["data-index", "onClick"];
  function _sfc_render$1j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$16, [
      vue.createVNode(_component_nut_scroll_view, {
        ref: "listview",
        class: "nut-elevator__list nut-elevator__list--mini",
        "scroll-top": _ctx.scrollTop,
        "scroll-y": true,
        "scroll-with-animation": true,
        "scroll-anchoring": true,
        style: vue.normalizeStyle({ height: isNaN(+_ctx.height) ? _ctx.height : `${_ctx.height}px` }),
        onScroll: _ctx.listViewScroll
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.indexList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item[_ctx.acceptKey],
              ref_for: true,
              ref: _ctx.setListGroup,
              class: vue.normalizeClass(["nut-elevator__list__item", `elevator__item__${index}`])
            }, [
              vue.createElementVNode("view", _hoisted_2$U, vue.toDisplayString(item[_ctx.acceptKey]), 1),
              vue.createTextVNode(),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.list, (subitem) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: subitem["id"],
                  class: vue.normalizeClass(["nut-elevator__list__item__name", {
                    "nut-elevator__list__item__name--highcolor": _ctx.currentData.id === subitem.id && _ctx.currentKey === item[_ctx.acceptKey]
                  }]),
                  onClick: ($event) => _ctx.handleClickItem(item[_ctx.acceptKey], subitem)
                }, [
                  !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    innerHTML: subitem.name
                  }, null, 8, _hoisted_4$B)) : vue.renderSlot(_ctx.$slots, "default", {
                    key: 1,
                    item: subitem
                  })
                ], 10, _hoisted_3$H);
              }), 128))
            ], 2);
          }), 128))
        ]),
        _: 3
      }, 8, ["scroll-top", "style", "onScroll"]),
      vue.createTextVNode(),
      vue.withDirectives(vue.createElementVNode("view", _hoisted_5$q, [
        vue.createElementVNode("view", _hoisted_6$k, vue.toDisplayString(_ctx.indexList[_ctx.currentIndex][_ctx.acceptKey]), 1)
      ], 512), [
        [vue.vShow, _ctx.scrollY > 2 && _ctx.isSticky]
      ]),
      vue.createTextVNode(),
      _ctx.indexList.length > 0 ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-elevator__code--current"
      }, vue.toDisplayString(_ctx.indexList[_ctx.codeIndex][_ctx.acceptKey]), 513)), [
        [vue.vShow, _ctx.scrollStart]
      ]) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: "nut-elevator__bars",
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.touchStart && _ctx.touchStart(...args)),
        onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.touchMove && _ctx.touchMove(...args), ["stop", "prevent"])),
        onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.touchEnd && _ctx.touchEnd(...args))
      }, [
        vue.createElementVNode("view", _hoisted_7$i, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.indexList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item[_ctx.acceptKey],
              class: vue.normalizeClass(["nut-elevator__bars__inner__item", { active: item[_ctx.acceptKey] === _ctx.indexList[_ctx.currentIndex][_ctx.acceptKey] }]),
              "data-index": index,
              onClick: ($event) => _ctx.handleClickIndex(item[_ctx.acceptKey])
            }, vue.toDisplayString(item[_ctx.acceptKey]), 11, _hoisted_8$c);
          }), 128))
        ])
      ], 32)
    ]);
  }
  const Elevator = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["render", _sfc_render$1j]]);
  const { create: create$1n } = createComponent("pagination");
  const cN$l = "NutPagination";
  const _sfc_main$1n = create$1n({
    props: {
      modelValue: {
        type: Number,
        default: 1
      },
      mode: {
        type: String,
        default: "multi"
      },
      prevText: {
        type: String,
        default: ""
      },
      nextText: {
        type: String,
        default: ""
      },
      pageCount: {
        type: [String, Number],
        default: ""
      },
      totalItems: {
        type: [String, Number],
        default: "0"
      },
      itemsPerPage: {
        type: [String, Number],
        default: "10"
      },
      showPageSize: {
        type: [String, Number],
        default: "5"
      },
      forceEllipses: {
        type: Boolean,
        default: false
      }
    },
    components: {},
    emits: ["change", "update:modelValue"],
    setup(props, { emit }) {
      const translate = useLocale(cN$l);
      const { modelValue, mode, showPageSize, forceEllipses } = vue.toRefs(props);
      const countRef = vue.computed(() => {
        const { pageCount, totalItems, itemsPerPage } = vue.toRefs(props);
        const num = +pageCount.value || Math.ceil(+totalItems.value / +itemsPerPage.value);
        return Math.max(1, num);
      });
      const select = (curPage, isSelect) => {
        if (curPage > countRef.value || curPage < 1)
          return;
        if (curPage != modelValue.value)
          emit("update:modelValue", curPage);
        if (isSelect)
          emit("change", curPage);
      };
      const setPage = (number, text, active = false) => {
        return { number, text, active };
      };
      const pages = vue.computed(() => {
        if (mode.value == "simple")
          return;
        let items = [];
        const pageCount = countRef.value;
        const pageSize = +showPageSize.value;
        let startPage = 1;
        let endPage = pageCount;
        const partialShow = pageCount > pageSize;
        if (partialShow) {
          startPage = Math.max(modelValue.value - Math.floor(pageSize / 2), 1);
          endPage = startPage + +pageSize - 1;
          if (endPage > pageCount) {
            endPage = pageCount;
            startPage = endPage - +pageSize + 1;
          }
        }
        for (var i = startPage; i <= endPage; i++) {
          const page = setPage(i, i, modelValue.value == i);
          items.push(page);
        }
        if (partialShow && pageSize > 0 && forceEllipses.value) {
          if (startPage > 1) {
            const prevPage = setPage(startPage - 1, "...");
            items.unshift(prevPage);
          }
          if (endPage < pageCount) {
            const nextPage = setPage(endPage + 1, "...");
            items.push(nextPage);
          }
        }
        return items;
      });
      vue.watchEffect(() => {
        select(modelValue.value, false);
      });
      return {
        modelValue,
        select,
        countRef,
        mode,
        pages,
        forceEllipses,
        translate
      };
    }
  });
  const _hoisted_1$15 = { class: "nut-pagination" };
  const _hoisted_2$T = {
    key: 0,
    class: "nut-pagination-contain"
  };
  const _hoisted_3$G = ["onClick"];
  const _hoisted_4$A = {
    key: 1,
    class: "nut-pagination-contain"
  };
  const _hoisted_5$p = { class: "nut-pagination-simple" };
  function _sfc_render$1i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$15, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-pagination-prev", _ctx.mode == "multi" ? "" : "simple-border", _ctx.modelValue == 1 ? "disabled" : ""]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.select(_ctx.modelValue - 1, true))
      }, [
        vue.renderSlot(_ctx.$slots, "prev-text", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.prevText || _ctx.translate("prev")), 1)
        ])
      ], 2),
      vue.createTextVNode(),
      _ctx.mode == "multi" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$T, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pages, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index + "pagination",
            class: vue.normalizeClass(["nut-pagination-item", item.active ? "active" : ""]),
            onClick: ($event) => _ctx.select(item.number, true)
          }, [
            vue.renderSlot(_ctx.$slots, "page", { item }, () => [
              vue.createTextVNode(vue.toDisplayString(item.text), 1)
            ])
          ], 10, _hoisted_3$G);
        }), 128))
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.mode == "simple" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$A, [
        vue.createElementVNode("view", _hoisted_5$p, vue.toDisplayString(_ctx.modelValue) + "/" + vue.toDisplayString(_ctx.countRef), 1)
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-pagination-next", _ctx.modelValue >= _ctx.countRef ? "disabled" : ""]),
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.select(_ctx.modelValue + 1, true))
      }, [
        vue.renderSlot(_ctx.$slots, "next-text", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.nextText || _ctx.translate("next")), 1)
        ])
      ], 2)
    ]);
  }
  const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["render", _sfc_render$1i]]);
  const _window = window;
  function requestAniFrame() {
    if (typeof _window !== "undefined") {
      return _window.requestAnimationFrame || _window.webkitRequestAnimationFrame || function(callback) {
        _window.setTimeout(callback, 1e3 / 60);
      };
    } else {
      return function(callback) {
        setTimeout(callback, 1e3 / 60);
      };
    }
  }
  const requestAniFrame$1 = requestAniFrame();
  const MIN_DISTANCE = 10;
  function getDirection(x, y) {
    if (x > y && x > MIN_DISTANCE) {
      return "horizontal";
    }
    if (y > x && y > MIN_DISTANCE) {
      return "vertical";
    }
    return "";
  }
  function useTouch() {
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    const moveX = vue.ref(0);
    const moveY = vue.ref(0);
    const deltaX = vue.ref(0);
    const deltaY = vue.ref(0);
    const offsetX = vue.ref(0);
    const offsetY = vue.ref(0);
    const direction = vue.ref("");
    const isVertical = () => direction.value === "vertical";
    const isHorizontal = () => direction.value === "horizontal";
    const reset = () => {
      deltaX.value = 0;
      deltaY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      direction.value = "";
    };
    const start = (event) => {
      reset();
      startX.value = event.touches[0].clientX;
      startY.value = event.touches[0].clientY;
    };
    const move = (event) => {
      const touch = event.touches[0];
      deltaX.value = touch.clientX - startX.value;
      deltaY.value = touch.clientY - startY.value;
      moveX.value = touch.clientX;
      moveY.value = touch.clientY;
      offsetX.value = Math.abs(deltaX.value);
      offsetY.value = Math.abs(deltaY.value);
      if (!direction.value) {
        direction.value = getDirection(offsetX.value, offsetY.value);
      }
    };
    return {
      move,
      start,
      reset,
      startX,
      startY,
      moveX,
      moveY,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      direction,
      isVertical,
      isHorizontal
    };
  }
  const useTabContentTouch = (props, tabMethods, taro, useTaroRect2) => {
    const tabsContentRef = vue.ref();
    const tabsContentRefRect = vue.ref({ width: 0, height: 0 });
    const initTaroWidth = () => __async(this, null, function* () {
      var _a, _b;
      if (taro && taro.getEnv() !== taro.ENV_TYPE.WEB) {
        useTaroRect2(tabsContentRef).then(
          (rect) => {
            tabsContentRefRect.value.width = rect.width || 0;
            tabsContentRefRect.value.height = rect.height || 0;
          },
          () => {
          }
        );
      } else {
        tabsContentRefRect.value.width = ((_a = tabsContentRef.value) == null ? void 0 : _a.clientWidth) || 0;
        tabsContentRefRect.value.height = ((_b = tabsContentRef.value) == null ? void 0 : _b.clientHeight) || 0;
      }
    });
    vue.onMounted(() => {
      setTimeout(() => {
        initTaroWidth();
      }, 100);
    });
    const touchState = vue.reactive({
      offset: 0,
      moving: false
    });
    const touch = useTouch();
    let position = "";
    const setoffset = (deltaX, deltaY) => {
      var _a;
      let offset = deltaX;
      if (props.direction == "horizontal") {
        position = deltaX > 0 ? "right" : "left";
        offset = Math.abs(offset) / tabsContentRefRect.value.width * 100;
      } else {
        position = deltaY > 0 ? "bottom" : "top";
        offset = deltaY;
        offset = Math.abs(offset) / ((_a = tabsContentRefRect.value) == null ? void 0 : _a.height) * 100;
      }
      if (offset > 85) {
        offset = 85;
      }
      switch (position) {
        case "left":
        case "top":
          if (tabMethods.isEnd()) {
            offset = 0;
            touchState.moving = false;
          }
          break;
        case "right":
        case "bottom":
          offset = -offset;
          if (tabMethods.isBegin()) {
            offset = 0;
            touchState.moving = false;
          }
          break;
      }
      touchState.offset = offset;
    };
    const touchMethods = {
      onTouchStart(event) {
        if (!props.swipeable)
          return;
        touch.start(event);
      },
      onTouchMove(event) {
        if (!props.swipeable)
          return;
        touch.move(event);
        touchState.moving = true;
        setoffset(touch.deltaX.value, touch.deltaY.value);
        if (props.direction == "horizontal" && touch.isHorizontal()) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (props.direction == "vertical" && touch.isVertical()) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      onTouchEnd() {
        if (touchState.moving) {
          touchState.moving = false;
          switch (position) {
            case "left":
            case "top":
              if (touchState.offset > 35) {
                tabMethods.next();
              }
              break;
            case "right":
            case "bottom":
              if (touchState.offset < -35) {
                tabMethods.prev();
              }
              break;
          }
        }
      }
    };
    return { touchMethods, touchState, tabsContentRef };
  };
  class Title {
    constructor() {
      __publicField(this, "title", "");
      __publicField(this, "titleSlot");
      __publicField(this, "paneKey", "");
      __publicField(this, "disabled", false);
    }
  }
  const { create: create$1m } = createComponent("tabs");
  const _sfc_main$1m = create$1m({
    components: {
      JoySmile: iconsVueTaro.JoySmile,
      NutScrollView: _sfc_main$1t
    },
    props: {
      modelValue: {
        type: [String, Number],
        default: 0
      },
      color: {
        type: String,
        default: ""
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      size: {
        type: String,
        default: "normal"
      },
      type: {
        type: String,
        default: "line"
      },
      titleScroll: {
        type: Boolean,
        default: false
      },
      ellipsis: {
        type: Boolean,
        default: true
      },
      swipeable: {
        type: Boolean,
        default: false
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: ""
      },
      animatedTime: {
        type: [Number, String],
        default: 300
      },
      titleGutter: {
        type: [Number, String],
        default: 0
      },
      sticky: {
        type: Boolean,
        default: false
      },
      top: {
        type: Number,
        default: 0
      },
      align: {
        type: String,
        default: "center"
      }
    },
    emits: ["update:modelValue", "click", "change"],
    setup(props, { emit, slots }) {
      const refRandomId = Math.random().toString(36).slice(-8);
      const container = vue.ref(null);
      vue.provide("tabsOpiton", {
        activeKey: vue.computed(() => props.modelValue || "0"),
        autoHeight: vue.computed(() => props.autoHeight),
        animatedTime: vue.computed(() => props.animatedTime)
      });
      const titles = vue.ref([]);
      const renderTitles = (vnodes) => {
        vnodes.forEach((vnode, index) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i;
          let type = vnode.type;
          type = type.name || type;
          if (type == "NutTabPane") {
            let title = new Title();
            if (((_a = vnode.props) == null ? void 0 : _a.title) || ((_b = vnode.props) == null ? void 0 : _b["pane-key"]) || ((_c = vnode.props) == null ? void 0 : _c["paneKey"])) {
              let paneKeyType = TypeOfFun((_d = vnode.props) == null ? void 0 : _d["pane-key"]);
              let paneIndex = paneKeyType == "number" || paneKeyType == "string" ? String((_e = vnode.props) == null ? void 0 : _e["pane-key"]) : null;
              let camelPaneKeyType = TypeOfFun((_f = vnode.props) == null ? void 0 : _f["paneKey"]);
              let camelPaneIndex = camelPaneKeyType == "number" || camelPaneKeyType == "string" ? String((_g = vnode.props) == null ? void 0 : _g["paneKey"]) : null;
              title.title = (_h = vnode.props) == null ? void 0 : _h.title;
              title.paneKey = paneIndex || camelPaneIndex || String(index);
              title.disabled = (_i = vnode.props) == null ? void 0 : _i.disabled;
            }
            titles.value.push(title);
          } else {
            if (vnode.children == " ") {
              return;
            }
            renderTitles(vnode.children);
          }
        });
      };
      const currentIndex = vue.ref(props.modelValue || 0);
      const findTabsIndex = (value) => {
        let index = titles.value.findIndex((item) => item.paneKey == value);
        if (titles.value.length == 0)
          ;
        else if (index == -1)
          ;
        else {
          currentIndex.value = index;
        }
      };
      const getScrollX = vue.computed(() => {
        return props.titleScroll && props.direction === "horizontal";
      });
      const getScrollY = vue.computed(() => {
        return props.titleScroll && props.direction === "vertical";
      });
      const titleRef = vue.ref([]);
      const scrollLeft = vue.ref(0);
      const scrollTop = vue.ref(0);
      const scrollWithAnimation = vue.ref(false);
      const getRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
            resolve(rect[0]);
          });
        });
      };
      const getAllRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().selectAll(selector).boundingClientRect().exec((rect = []) => resolve(rect[0]));
        });
      };
      const navRectRef = vue.ref();
      const titleRectRef = vue.ref([]);
      const canShowLabel = vue.ref(false);
      const scrollIntoView = () => {
        requestAniFrame$1(() => {
          Promise.all([
            getRect(`#nut-tabs__titles_${refRandomId}`),
            getAllRect(`#nut-tabs__titles_${refRandomId} .nut-tabs__titles-item`)
          ]).then(([navRect, titleRects]) => {
            var _a, _b, _c, _d;
            navRectRef.value = navRect;
            titleRectRef.value = titleRects;
            if (navRectRef.value) {
              if (props.direction === "vertical") {
                const titlesTotalHeight = titleRects.reduce((prev, curr) => prev + (curr == null ? void 0 : curr.height), 0);
                if (titlesTotalHeight > ((_a = navRectRef.value) == null ? void 0 : _a.height)) {
                  canShowLabel.value = true;
                } else {
                  canShowLabel.value = false;
                }
              } else {
                const titlesTotalWidth = titleRects.reduce((prev, curr) => prev + (curr == null ? void 0 : curr.width), 0);
                if (titlesTotalWidth > ((_b = navRectRef.value) == null ? void 0 : _b.width)) {
                  canShowLabel.value = true;
                } else {
                  canShowLabel.value = false;
                }
              }
            }
            const titleRect = titleRectRef.value[currentIndex.value];
            let to = 0;
            if (props.direction === "vertical") {
              const DEFAULT_PADDING = 11;
              const top = titleRects.slice(0, currentIndex.value).reduce((prev, curr) => prev + (curr == null ? void 0 : curr.height) + 0, DEFAULT_PADDING);
              to = top - (((_c = navRectRef.value) == null ? void 0 : _c.height) - (titleRect == null ? void 0 : titleRect.height)) / 2;
            } else {
              const DEFAULT_PADDING = 31;
              const left = titleRects.slice(0, currentIndex.value).reduce((prev, curr) => prev + (curr == null ? void 0 : curr.width) + 20, DEFAULT_PADDING);
              to = left - (((_d = navRectRef.value) == null ? void 0 : _d.width) - (titleRect == null ? void 0 : titleRect.width)) / 2;
            }
            vue.nextTick(() => {
              scrollWithAnimation.value = true;
            });
            scrollDirection(to, props.direction);
          });
        });
      };
      const scrollDirection = (to, direction) => {
        let count = 0;
        const from = direction === "horizontal" ? scrollLeft.value : scrollTop.value;
        const frames = 1;
        function animate() {
          if (direction === "horizontal") {
            scrollLeft.value += (to - from) / frames;
          } else {
            scrollTop.value += (to - from) / frames;
          }
          if (++count < frames) {
            requestAniFrame$1(animate);
          }
        }
        animate();
      };
      const init = (vnodes = ((_a) => (_a = slots.default) == null ? void 0 : _a.call(slots))()) => {
        titles.value = [];
        vnodes = vnodes == null ? void 0 : vnodes.filter((item) => typeof item.children !== "string");
        if (vnodes && vnodes.length) {
          renderTitles(vnodes);
        }
        findTabsIndex(props.modelValue);
        setTimeout(() => {
          scrollIntoView();
        }, 500);
      };
      vue.watch(
        () => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots);
        },
        (vnodes) => {
          init(vnodes);
        }
      );
      vue.watch(
        () => props.modelValue,
        (value) => {
          findTabsIndex(value);
          scrollIntoView();
        }
      );
      vue.onMounted(init);
      vue.onActivated(init);
      const tabMethods = {
        isBegin: () => {
          return currentIndex.value == 0;
        },
        isEnd: () => {
          return currentIndex.value == titles.value.length - 1;
        },
        next: () => {
          currentIndex.value += 1;
          tabMethods.updateValue(titles.value[currentIndex.value]);
        },
        prev: () => {
          currentIndex.value -= 1;
          tabMethods.updateValue(titles.value[currentIndex.value]);
        },
        updateValue: (item) => {
          emit("update:modelValue", item.paneKey);
          emit("change", item);
        },
        tabChange: (item, index) => {
          emit("click", item);
          if (item.disabled || currentIndex.value == index) {
            return;
          }
          currentIndex.value = index;
          tabMethods.updateValue(item);
        },
        setTabItemRef: (el, index) => {
          titleRef.value[index] = el;
        }
      };
      const { tabsContentRef, touchState, touchMethods } = useTabContentTouch(props, tabMethods, Taro, useTaroRect);
      const contentStyle = vue.computed(() => {
        let offsetPercent = currentIndex.value * 100;
        if (touchState.moving) {
          offsetPercent += touchState.offset;
        }
        let style = {
          transform: props.direction == "horizontal" ? `translate3d(-${offsetPercent}%, 0, 0)` : `translate3d( 0,-${offsetPercent}%, 0)`,
          transitionDuration: touchState.moving ? void 0 : `${props.animatedTime}ms`
        };
        if (props.animatedTime == 0) {
          style = {};
        }
        return style;
      });
      const tabsNavStyle = vue.computed(() => {
        return {
          background: props.background
        };
      });
      const tabsActiveStyle = vue.computed(() => {
        return {
          color: props.type == "smile" ? props.color : "",
          background: props.type == "line" ? props.color : ""
        };
      });
      const titleStyle = vue.computed(() => {
        if (!props.titleGutter)
          return {};
        const px = pxCheck(props.titleGutter);
        if (props.direction === "vertical") {
          return { marginTop: px, marginBottom: px };
        }
        return { marginLeft: px, marginRight: px };
      });
      return __spreadValues(__spreadValues({
        titles,
        tabsContentRef,
        contentStyle,
        tabsNavStyle,
        titleStyle,
        tabsActiveStyle,
        container,
        scrollLeft,
        scrollTop,
        getScrollX,
        getScrollY,
        scrollWithAnimation,
        canShowLabel,
        refRandomId
      }, tabMethods), touchMethods);
    }
  });
  const _hoisted_1$14 = ["onClick"];
  const _hoisted_2$S = {
    key: 0,
    class: "nut-tabs__titles-placeholder"
  };
  const _hoisted_3$F = ["id"];
  function _sfc_render$1h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_JoySmile = vue.resolveComponent("JoySmile");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "container",
      class: vue.normalizeClass(["nut-tabs", [_ctx.direction]])
    }, [
      vue.createVNode(_component_nut_scroll_view, {
        id: `nut-tabs__titles_${_ctx.refRandomId}`,
        "scroll-x": _ctx.getScrollX,
        "scroll-y": _ctx.getScrollY,
        "scroll-with-animation": _ctx.scrollWithAnimation,
        "scroll-left": _ctx.scrollLeft,
        "scroll-top": _ctx.scrollTop,
        "enable-flex": true,
        class: vue.normalizeClass(["nut-tabs__titles", { [_ctx.type]: _ctx.type, scrollable: _ctx.titleScroll, [_ctx.size]: _ctx.size }]),
        style: vue.normalizeStyle(_ctx.tabsNavStyle)
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["nut-tabs__list", { "nut-tabs__titles-left": _ctx.align === "left" }])
          }, [
            _ctx.$slots.titles ? vue.renderSlot(_ctx.$slots, "titles", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.titles, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.paneKey,
                  class: vue.normalizeClass(["nut-tabs__titles-item taro", {
                    "nut-tabs__titles-item-left": _ctx.align === "left",
                    active: item.paneKey == _ctx.modelValue,
                    disabled: item.disabled
                  }]),
                  style: vue.normalizeStyle(_ctx.titleStyle),
                  onClick: ($event) => _ctx.tabChange(item, index)
                }, [
                  _ctx.type == "line" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "nut-tabs__titles-item__line",
                    style: vue.normalizeStyle(_ctx.tabsActiveStyle)
                  }, null, 4)) : vue.createCommentVNode("", true),
                  vue.createTextVNode(),
                  _ctx.type == "smile" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "nut-tabs__titles-item__smile",
                    style: vue.normalizeStyle(_ctx.tabsActiveStyle)
                  }, [
                    vue.createVNode(_component_JoySmile, { color: _ctx.color }, null, 8, ["color"])
                  ], 4)) : vue.createCommentVNode("", true),
                  vue.createTextVNode(),
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(["nut-tabs__titles-item__text", { ellipsis: _ctx.ellipsis }])
                  }, vue.toDisplayString(item.title), 3)
                ], 14, _hoisted_1$14);
              }), 128)),
              vue.createTextVNode(),
              _ctx.canShowLabel && _ctx.titleScroll ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$S)) : vue.createCommentVNode("", true)
            ], 64))
          ], 2)
        ]),
        _: 3
      }, 8, ["id", "scroll-x", "scroll-y", "scroll-with-animation", "scroll-left", "scroll-top", "class", "style"]),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        id: "tabsContentRef-" + _ctx.refRandomId,
        ref: "tabsContentRef",
        class: "nut-tabs__content",
        style: vue.normalizeStyle(_ctx.contentStyle),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
        onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
        onTouchcancel: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 44, _hoisted_3$F)
    ], 2);
  }
  const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["render", _sfc_render$1h]]);
  const { create: create$1l } = createComponent("tab-pane");
  const _sfc_main$1l = create$1l({
    props: {
      title: {
        type: [String, Number],
        default: ""
      },
      paneKey: {
        type: [String, Number],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["click"],
    setup(props) {
      const parentOption = vue.inject("tabsOpiton");
      const paneStyle = vue.computed(() => {
        return {
          display: parentOption.animatedTime.value == 0 && props.paneKey != parentOption.activeKey.value ? "none" : void 0
        };
      });
      return __spreadProps(__spreadValues({}, parentOption), {
        paneStyle
      });
    }
  });
  function _sfc_render$1g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["nut-tab-pane", { inactive: _ctx.paneKey != _ctx.activeKey && _ctx.autoHeight }]),
      style: vue.normalizeStyle(_ctx.paneStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const TabPane = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["render", _sfc_render$1g]]);
  const { create: create$1k } = createComponent("indicator");
  const _sfc_main$1k = create$1k({
    props: {
      size: {
        type: Number,
        default: 3
      },
      current: {
        type: Number,
        default: 1
      },
      block: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: "center"
      },
      fillZero: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const classes = vue.computed(() => {
        const prefixCls = "nut-indicator";
        return {
          [prefixCls]: true,
          [`${prefixCls}--block`]: props.block,
          [`${prefixCls}--align__${props.align}`]: props.block && props.align
        };
      });
      return { classes, padZero };
    }
  });
  const _hoisted_1$13 = {
    key: 0,
    class: "nut-indicator--number"
  };
  const _hoisted_2$R = {
    key: 1,
    class: "nut-indicator--dot"
  };
  function _sfc_render$1f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.size, (item) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: item }, [
          item === _ctx.current ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$13, vue.toDisplayString(_ctx.fillZero && _ctx.padZero(item) || item), 1)) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$R))
        ], 64);
      }), 128))
    ], 2);
  }
  const Indicator = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["render", _sfc_render$1f]]);
  const { create: create$1j } = createComponent("side-navbar");
  const _sfc_main$1j = create$1j({
    props: {
      offset: {
        type: [String, Number],
        default: 15
      }
    },
    setup: (props) => {
      const list = vue.ref(null);
      const state = vue.reactive({
        count: 1
      });
      const setPaddingLeft = (nodeList, level = 1) => {
        var _a;
        for (let i = 0; i < nodeList.length; i++) {
          let item = nodeList[i];
          if ((_a = item == null ? void 0 : item.children) == null ? void 0 : _a[0]) {
            item.children[0].style.paddingLeft = +props.offset * level + "px";
            if (!item.className.includes("nut-side-navbar-item")) {
              setPaddingLeft(Array.from(item.children[1].children), ++state.count);
            }
          }
        }
        state.count--;
      };
      const handleSlots = () => {
        let childNodes = list.value.childNodes;
        if (childNodes == null ? void 0 : childNodes.length) {
          childNodes = Array.from(childNodes).filter((item) => item.nodeType !== 3).map((item) => {
            return item;
          });
          setPaddingLeft(childNodes);
        }
      };
      vue.onMounted(() => {
        handleSlots();
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        list
      });
    }
  });
  const _hoisted_1$12 = { class: "nut-side-navbar" };
  const _hoisted_2$Q = { class: "nut-side-navbar__content" };
  const _hoisted_3$E = {
    ref: "list",
    class: "nut-side-navbar__content__list"
  };
  function _sfc_render$1e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$12, [
      vue.createElementVNode("view", _hoisted_2$Q, [
        vue.createElementVNode("view", _hoisted_3$E, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 512)
      ])
    ]);
  }
  const SideNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["render", _sfc_render$1e]]);
  const { create: create$1i } = createComponent("side-navbar-item");
  const _sfc_main$1i = create$1i({
    props: {
      title: {
        type: String,
        default: ""
      },
      ikey: {
        type: String,
        default: ""
      }
    },
    emits: ["click"],
    setup: (props, { emit }) => {
      const handleClick = () => {
        emit("click");
      };
      return {
        handleClick
      };
    }
  });
  const _hoisted_1$11 = ["ikey"];
  const _hoisted_2$P = { class: "nut-side-navbar-item__title" };
  function _sfc_render$1d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-side-navbar-item",
      ikey: _ctx.ikey,
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
    }, [
      vue.createElementVNode("span", _hoisted_2$P, vue.toDisplayString(_ctx.title), 1)
    ], 8, _hoisted_1$11);
  }
  const SideNavbarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["render", _sfc_render$1d]]);
  const { create: create$1h } = createComponent("sub-side-navbar");
  const _sfc_main$1h = create$1h({
    props: {
      title: {
        type: String,
        default: ""
      },
      ikey: {
        type: [String, Number],
        default: ""
      },
      open: {
        type: Boolean,
        default: true
      }
    },
    components: { ArrowDown2: iconsVueTaro.ArrowDown2, ArrowUp2: iconsVueTaro.ArrowUp2 },
    emits: ["titleClick"],
    setup: (props, { emit }) => {
      const state = vue.reactive({
        direction: ""
      });
      const style = vue.computed(() => {
        return {
          height: !state.direction ? "auto" : "0px"
        };
      });
      const handleClick = () => {
        emit("titleClick");
        state.direction = !state.direction ? "up" : "";
      };
      vue.onMounted(() => {
        state.direction = props.open ? "" : "up";
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        style,
        handleClick
      });
    }
  });
  const _hoisted_1$10 = ["ikey"];
  const _hoisted_2$O = { class: "nut-sub-side-navbar__title__text" };
  const _hoisted_3$D = { class: "nut-sub-side-navbar__title__icon" };
  function _sfc_render$1c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ArrowDown2 = vue.resolveComponent("ArrowDown2");
    const _component_ArrowUp2 = vue.resolveComponent("ArrowUp2");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-sub-side-navbar",
      ikey: _ctx.ikey
    }, [
      vue.createElementVNode("view", {
        class: "nut-sub-side-navbar__title",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
      }, [
        vue.createElementVNode("span", _hoisted_2$O, vue.toDisplayString(_ctx.title), 1),
        vue.createTextVNode(),
        vue.createElementVNode("span", _hoisted_3$D, [
          !_ctx.direction ? (vue.openBlock(), vue.createBlock(_component_ArrowDown2, {
            key: 0,
            size: "12px"
          })) : (vue.openBlock(), vue.createBlock(_component_ArrowUp2, {
            key: 1,
            size: "12px"
          }))
        ])
      ]),
      vue.createTextVNode(),
      vue.withDirectives(vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-sub-side-navbar__list", !_ctx.direction ? "nutFadeIn" : "nutFadeOut"]),
        style: vue.normalizeStyle(_ctx.style)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6), [
        [vue.vShow, !_ctx.direction]
      ])
    ], 8, _hoisted_1$10);
  }
  const SubSideNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["render", _sfc_render$1c]]);
  const { componentName: componentName$g, create: create$1g } = createComponent("range");
  const _sfc_main$1g = create$1g({
    props: {
      range: {
        type: Boolean,
        default: false
      },
      disabled: Boolean,
      activeColor: String,
      inactiveColor: String,
      buttonColor: String,
      vertical: {
        type: Boolean,
        default: false
      },
      marks: {
        type: Object,
        default: {}
      },
      hiddenRange: {
        type: Boolean,
        default: false
      },
      hiddenTag: {
        type: Boolean,
        default: false
      },
      min: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 100
      },
      step: {
        type: [Number, String],
        default: 1
      },
      modelValue: {
        type: [Number, Array],
        default: 0
      }
    },
    emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
    setup(props, { emit }) {
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.ref({
        width: 0,
        height: 0
      });
      const buttonIndex = vue.ref(0);
      let startValue;
      let currentValue;
      const root = vue.ref();
      const dragStatus = vue.ref();
      const touch = useTouch();
      const marksList = vue.computed(() => {
        const { marks, max, min } = props;
        const marksKeys = Object.keys(marks);
        const list = marksKeys.map(parseFloat).sort((a, b) => a - b).filter((point) => point >= +min && point <= +max);
        return list;
      });
      const scope = vue.computed(() => Number(props.max) - Number(props.min));
      const classes = vue.computed(() => {
        const prefixCls = componentName$g;
        return {
          [prefixCls]: true,
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-vertical`]: props.vertical,
          [`${prefixCls}-show-number`]: !props.hiddenRange
        };
      });
      const containerClasses = vue.computed(() => {
        const prefixCls = "nut-range-container";
        return {
          [prefixCls]: true,
          [`${prefixCls}-vertical`]: props.vertical
        };
      });
      const wrapperStyle = vue.computed(() => {
        return {
          background: props.inactiveColor
        };
      });
      const buttonStyle = vue.computed(() => {
        return {
          borderColor: props.buttonColor
        };
      });
      const isRange = (val) => !!props.range && Array.isArray(val);
      const calcMainAxis = () => {
        const { modelValue, min } = props;
        if (isRange(modelValue)) {
          return `${(modelValue[1] - modelValue[0]) * 100 / scope.value}%`;
        }
        return `${(modelValue - Number(min)) * 100 / scope.value}%`;
      };
      const calcOffset = () => {
        const { modelValue, min } = props;
        if (isRange(modelValue)) {
          return `${(modelValue[0] - Number(min)) * 100 / scope.value}%`;
        }
        return `0%`;
      };
      const barStyle = vue.computed(() => {
        if (props.vertical) {
          return {
            height: calcMainAxis(),
            top: calcOffset(),
            background: props.activeColor,
            transition: dragStatus.value ? "none" : void 0
          };
        } else {
          return {
            width: calcMainAxis(),
            left: calcOffset(),
            background: props.activeColor,
            transition: dragStatus.value ? "none" : void 0
          };
        }
      });
      const markClassName = (mark) => {
        const classPrefix = "nut-range-mark";
        const { modelValue, max, min } = props;
        let lowerBound = Number(min);
        let upperBound = Number(max);
        if (props.range) {
          const [left, right] = modelValue;
          lowerBound = left;
          upperBound = right;
        } else {
          upperBound = modelValue;
        }
        let isActive = mark <= +upperBound && mark >= lowerBound;
        return {
          [`${classPrefix}-text`]: true,
          [`${classPrefix}-text-active`]: isActive
        };
      };
      const marksStyle = (mark) => {
        const { min, vertical } = props;
        let style = {
          left: `${(mark - Number(min)) / scope.value * 100}%`
        };
        if (vertical) {
          style = {
            top: `${(mark - Number(min)) / scope.value * 100}%`
          };
        }
        return style;
      };
      const tickStyle = (mark) => {
        const { modelValue, max, min } = props;
        let lowerBound = Number(min);
        let upperBound = Number(max);
        if (props.range) {
          const [left, right] = modelValue;
          lowerBound = left;
          upperBound = right;
        }
        let isActive = mark <= upperBound && mark >= lowerBound;
        let style = {
          background: !isActive ? props.inactiveColor : props.activeColor
        };
        return style;
      };
      const format = (value) => {
        const { min, max, step } = props;
        value = Math.max(+min, Math.min(value, +max));
        return Math.round(value / +step) * +step;
      };
      const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
      const handleOverlap = (value) => {
        if (value[0] > value[1]) {
          return value.slice(0).reverse();
        }
        return value;
      };
      const updateValue = (value, end) => {
        if (isRange(value)) {
          value = handleOverlap(value).map(format);
        } else {
          value = format(value);
        }
        if (!isSameValue(value, props.modelValue)) {
          emit("update:modelValue", value);
        }
        if (end && !isSameValue(value, startValue)) {
          emit("change", value);
        }
      };
      const onClick = (event) => __async(this, null, function* () {
        if (props.disabled) {
          return;
        }
        const { min, modelValue } = props;
        useTaroRect(root).then(
          (rect) => {
            state.value.width = rect.width;
            state.value.height = rect.height;
            let clientX, clientY;
            if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
              clientX = event.clientX;
              clientY = event.clientY;
            } else {
              clientX = event.touches[0].clientX;
              clientY = event.touches[0].clientY;
            }
            let delta = clientX - rect.left;
            let total = rect.width;
            if (props.vertical) {
              delta = clientY - rect.top;
              total = rect.height;
            }
            const value = Number(min) + delta / total * scope.value;
            if (isRange(modelValue)) {
              const [left, right] = modelValue;
              const middle = (left + right) / 2;
              if (value <= middle) {
                updateValue([value, right], true);
              } else {
                updateValue([left, value], true);
              }
            } else {
              updateValue(value, true);
            }
          },
          () => {
          }
        );
      });
      const onTouchStart = (event) => {
        if (props.disabled) {
          return;
        }
        touch.start(event);
        currentValue = props.modelValue;
        if (isRange(currentValue)) {
          startValue = currentValue.map(format);
        } else {
          startValue = format(currentValue);
        }
        dragStatus.value = "start";
        preventDefault(event, true);
      };
      const init = () => {
        useTaroRect(root).then(
          (rect) => {
            state.value.width = rect == null ? void 0 : rect.width;
            state.value.height = rect == null ? void 0 : rect.height;
          },
          () => {
          }
        );
      };
      const onTouchMove = (event) => {
        if (props.disabled) {
          return;
        }
        preventDefault(event, true);
        if (dragStatus.value === "start") {
          emit("dragStart");
        }
        touch.move(event);
        dragStatus.value = "draging";
        let delta = touch.deltaX.value;
        let total = state.value.width;
        let diff = delta / total * scope.value;
        if (props.vertical) {
          delta = touch.deltaY.value;
          total = state.value.height;
          diff = delta / total * scope.value;
        }
        if (isRange(startValue)) {
          currentValue[buttonIndex.value] = startValue[buttonIndex.value] + diff;
        } else {
          currentValue = startValue + diff;
        }
        updateValue(currentValue);
      };
      const onTouchEnd = (event) => {
        if (props.disabled) {
          return;
        }
        if (dragStatus.value === "draging") {
          updateValue(currentValue, true);
          emit("dragEnd");
        }
        dragStatus.value = "";
        preventDefault(event, true);
      };
      const curValue = (idx) => {
        const value = Array.isArray(props.modelValue) && typeof idx === "number" ? props.modelValue[idx] : Number(props.modelValue);
        return value;
      };
      vue.onMounted(() => {
        Taro.nextTick(() => {
          init();
        });
        Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
          Taro.nextTick(() => {
            init();
          });
        });
      });
      return __spreadProps(__spreadValues({
        root,
        classes,
        wrapperStyle,
        buttonStyle,
        onClick,
        onTouchStart,
        onTouchMove,
        onTouchEnd
      }, vue.toRefs(props)), {
        barStyle,
        curValue,
        buttonIndex,
        containerClasses,
        markClassName,
        marksStyle,
        marksList,
        tickStyle,
        refRandomId
      });
    }
  });
  const _hoisted_1$$ = {
    key: 0,
    class: "nut-range-min"
  };
  const _hoisted_2$N = ["id"];
  const _hoisted_3$C = { class: "nut-range-mark" };
  const _hoisted_4$z = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"];
  const _hoisted_5$o = {
    key: 0,
    class: "number"
  };
  const _hoisted_6$j = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"];
  const _hoisted_7$h = {
    key: 0,
    class: "number"
  };
  const _hoisted_8$b = {
    key: 1,
    class: "nut-range-max"
  };
  function _sfc_render$1b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.containerClasses)
    }, [
      !_ctx.hiddenRange ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$$, vue.toDisplayString(+_ctx.min), 1)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        id: "root-" + _ctx.refRandomId,
        ref: "root",
        style: vue.normalizeStyle(_ctx.wrapperStyle),
        class: vue.normalizeClass(_ctx.classes),
        onClick: _cache[9] || (_cache[9] = vue.withModifiers((...args) => _ctx.onClick && _ctx.onClick(...args), ["stop"]))
      }, [
        vue.createElementVNode("view", _hoisted_3$C, [
          _ctx.marksList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.marksList, (marks) => {
            return vue.openBlock(), vue.createElementBlock("span", {
              key: marks,
              class: vue.normalizeClass(_ctx.markClassName(marks)),
              style: vue.normalizeStyle(_ctx.marksStyle(marks))
            }, [
              vue.createTextVNode(vue.toDisplayString(marks) + " ", 1),
              vue.createElementVNode("span", {
                class: "nut-range-tick",
                style: vue.normalizeStyle(_ctx.tickStyle(marks))
              }, null, 4)
            ], 6);
          }), 128)) : vue.createCommentVNode("", true)
        ]),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: "nut-range-bar",
          style: vue.normalizeStyle(_ctx.barStyle)
        }, [
          _ctx.range ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList([0, 1], (index) => {
            return vue.createElementVNode("view", {
              key: index,
              role: "slider",
              class: vue.normalizeClass({
                "nut-range-button-wrapper-left": index == 0,
                "nut-range-button-wrapper-right": index == 1
              }),
              "catch-move": true,
              tabindex: _ctx.disabled ? -1 : 0,
              "aria-valuemin": +_ctx.min,
              "aria-valuenow": _ctx.curValue(index),
              "aria-valuemax": +_ctx.max,
              "aria-orientation": "horizontal",
              onTouchstart: (e) => {
                if (typeof index === "number") {
                  _ctx.buttonIndex = index;
                }
                _ctx.onTouchStart(e);
              },
              onTouchmove: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
              onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
              onTouchcancel: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
              onClick: _cache[3] || (_cache[3] = (e) => e.stopPropagation())
            }, [
              _ctx.$slots.button ? vue.renderSlot(_ctx.$slots, "button", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "nut-range-button",
                style: vue.normalizeStyle(_ctx.buttonStyle)
              }, [
                !_ctx.hiddenTag ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$o, vue.toDisplayString(_ctx.curValue(index)), 1)) : vue.createCommentVNode("", true)
              ], 4))
            ], 42, _hoisted_4$z);
          }), 64)) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            role: "slider",
            class: "nut-range-button-wrapper",
            tabindex: _ctx.disabled ? -1 : 0,
            "aria-valuemin": +_ctx.min,
            "aria-valuenow": _ctx.curValue(),
            "aria-valuemax": +_ctx.max,
            "aria-orientation": "horizontal",
            "catch-move": true,
            onTouchstart: _cache[4] || (_cache[4] = (e) => {
              _ctx.onTouchStart(e);
            }),
            onTouchmove: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
            onTouchend: _cache[6] || (_cache[6] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
            onTouchcancel: _cache[7] || (_cache[7] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
            onClick: _cache[8] || (_cache[8] = (e) => e.stopPropagation())
          }, [
            _ctx.$slots.button ? vue.renderSlot(_ctx.$slots, "button", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "nut-range-button",
              style: vue.normalizeStyle(_ctx.buttonStyle)
            }, [
              !_ctx.hiddenTag ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$h, vue.toDisplayString(_ctx.curValue()), 1)) : vue.createCommentVNode("", true)
            ], 4))
          ], 40, _hoisted_6$j))
        ], 4)
      ], 14, _hoisted_2$N),
      vue.createTextVNode(),
      !_ctx.hiddenRange ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$b, vue.toDisplayString(+_ctx.max), 1)) : vue.createCommentVNode("", true)
    ], 2);
  }
  const Range = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["render", _sfc_render$1b]]);
  const { create: create$1f } = createComponent("searchbar");
  const cN$k = "NutSearchbar";
  const _sfc_main$1f = create$1f({
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      inputType: {
        type: String,
        default: "text"
      },
      shape: {
        type: String,
        default: "round"
      },
      maxLength: {
        type: [String, Number],
        default: "9999"
      },
      placeholder: {
        type: String,
        default: ""
      },
      clearable: {
        type: Boolean,
        default: true
      },
      clearIcon: {
        type: Object,
        default: () => iconsVueTaro.CircleClose
      },
      background: {
        type: String,
        default: ""
      },
      inputBackground: {
        type: String,
        default: ""
      },
      focusStyle: {
        type: Object,
        default: () => ({})
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      inputAlign: {
        type: String,
        default: "left"
      },
      confirmType: {
        type: String,
        default: "done"
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      }
    },
    emits: [
      "change",
      "update:modelValue",
      "blur",
      "focus",
      "clear",
      "search",
      "clickInput",
      "clickLeftIcon",
      "clickRightIcon"
    ],
    setup(props, { emit }) {
      const translate = useLocale(cN$k);
      const state = vue.reactive({
        active: false
      });
      const searchbarStyle = vue.computed(() => {
        return {
          background: props.background
        };
      });
      const inputSearchbarStyle = vue.computed(() => {
        return {
          background: props.inputBackground
        };
      });
      const valueChange = (event) => {
        const input = event.target;
        let val = input.value;
        if (props.maxLength && val.length > Number(props.maxLength)) {
          val = val.slice(0, Number(props.maxLength));
        }
        emit("update:modelValue", val, event);
        emit("change", val, event);
      };
      const focusCss = vue.ref({});
      const valueFocus = (event) => {
        const input = event.target;
        let value = input.value;
        state.active = true;
        focusCss.value = props.focusStyle;
        emit("focus", value, event);
      };
      const valueBlur = (event) => {
        setTimeout(() => {
          state.active = false;
        }, 0);
        const input = event.target;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        focusCss.value = {};
        emit("blur", value, event);
      };
      const handleClear = (event) => {
        emit("update:modelValue", "", event);
        emit("change", "", event);
        emit("clear", "");
      };
      const handleSubmit = () => {
        emit("search", props.modelValue);
      };
      const clickInput = (event) => {
        emit("clickInput", event);
      };
      const leftIconClick = (event) => {
        emit("clickLeftIcon", props.modelValue, event);
      };
      const rightIconClick = (event) => {
        emit("clickRightIcon", props.modelValue, event);
      };
      const styleSearchbar = vue.computed(() => {
        const style = {
          textAlign: props.inputAlign
        };
        return style;
      });
      const inputsearch = vue.ref(null);
      vue.onMounted(() => {
        if (props.autofocus) {
          inputsearch.value.focus();
        }
      });
      return __spreadProps(__spreadValues({
        renderIcon,
        inputsearch
      }, vue.toRefs(state)), {
        valueChange,
        valueFocus,
        valueBlur,
        handleClear,
        handleSubmit,
        searchbarStyle,
        inputSearchbarStyle,
        focusCss,
        translate,
        clickInput,
        leftIconClick,
        rightIconClick,
        styleSearchbar
      });
    }
  });
  const _hoisted_1$_ = {
    key: 0,
    class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
  };
  const _hoisted_2$M = {
    key: 0,
    class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon"
  };
  const _hoisted_3$B = ["type", "maxlength", "placeholder", "value", "confirm-type", "disabled", "readonly", "cursor-spacing"];
  const _hoisted_4$y = {
    key: 1,
    class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
  };
  const _hoisted_5$n = {
    key: 1,
    class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
  };
  function _sfc_render$1a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["nut-searchbar", { "safe-area-inset-bottom": _ctx.safeAreaInsetBottom }]),
      style: vue.normalizeStyle(_ctx.searchbarStyle)
    }, [
      _ctx.$slots.leftout ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$_, [
        vue.renderSlot(_ctx.$slots, "leftout")
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([`nut-searchbar__search-input`, _ctx.shape]),
        style: vue.normalizeStyle(__spreadValues(__spreadValues({}, _ctx.inputSearchbarStyle), _ctx.focusCss))
      }, [
        _ctx.$slots.leftin ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$M, [
          vue.renderSlot(_ctx.$slots, "leftin")
        ])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-searchbar__input-inner", _ctx.$slots.rightin && "nut-searchbar__input-inner-absolute"])
        }, [
          vue.createElementVNode("form", {
            class: "nut-searchbar__input-form",
            action: "#",
            onsubmit: "return false",
            onSubmit: _cache[5] || (_cache[5] = vue.withModifiers((...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args), ["prevent"]))
          }, [
            vue.createElementVNode("input", {
              ref: "inputsearch",
              class: vue.normalizeClass(["nut-searchbar__input-bar", _ctx.clearable && "nut-searchbar__input-bar_clear"]),
              type: _ctx.inputType,
              maxlength: _ctx.maxLength,
              placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
              value: _ctx.modelValue,
              "confirm-type": _ctx.confirmType,
              disabled: _ctx.disabled,
              readonly: _ctx.readonly,
              style: vue.normalizeStyle(_ctx.styleSearchbar),
              "cursor-spacing": _ctx.cursorSpacing,
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickInput && _ctx.clickInput(...args)),
              onInput: _cache[1] || (_cache[1] = (...args) => _ctx.valueChange && _ctx.valueChange(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.valueFocus && _ctx.valueFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.valueBlur && _ctx.valueBlur(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args))
            }, null, 46, _hoisted_3$B)
          ], 32)
        ], 2),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-searchbar__input-inner-icon", _ctx.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
        }, [
          _ctx.clearable ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-searchbar__search-icon nut-searchbar__input-clear",
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
          }, [
            _ctx.$slots["clear-icon"] ? vue.renderSlot(_ctx.$slots, "clear-icon", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(_ctx.clearIcon)), { key: 1 }))
          ], 512)), [
            [vue.vShow, String(_ctx.modelValue).length > 0]
          ]) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          _ctx.$slots.rightin ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$y, [
            vue.renderSlot(_ctx.$slots, "rightin")
          ])) : vue.createCommentVNode("", true)
        ], 2)
      ], 6),
      vue.createTextVNode(),
      _ctx.$slots.rightout ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$n, [
        vue.renderSlot(_ctx.$slots, "rightout")
      ])) : vue.createCommentVNode("", true)
    ], 6);
  }
  const Searchbar = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["render", _sfc_render$1a]]);
  const formatTree = (tree, parent, config) => tree.map((node) => {
    const { value: valueKey = "value", text: textKey = "text", children: childrenKey = "children" } = config;
    const _a = node, { [valueKey]: value, [textKey]: text, [childrenKey]: children } = _a, others = __objRest(_a, [__restKey(valueKey), __restKey(textKey), __restKey(childrenKey)]);
    const newNode = __spreadProps(__spreadValues({
      loading: false
    }, others), {
      level: parent ? (parent && parent.level || 0) + 1 : 0,
      value,
      text,
      children,
      _parent: parent
    });
    if (newNode.children && newNode.children.length) {
      newNode.children = formatTree(newNode.children, newNode, config);
    }
    return newNode;
  });
  const eachTree = (tree, cb) => {
    let i = 0;
    let node;
    while (node = tree[i++]) {
      if (cb(node) === true) {
        break;
      }
      if (node.children && node.children.length) {
        eachTree(node.children, cb);
      }
    }
  };
  const defaultConvertConfig = {
    topId: null,
    idKey: "id",
    pidKey: "pid",
    sortKey: ""
  };
  const convertListToOptions = (list, options) => {
    const mergedOptions = __spreadValues(__spreadValues({}, defaultConvertConfig), options || {});
    const { topId, idKey, pidKey, sortKey } = mergedOptions;
    let result = [];
    let map = {};
    list.forEach((node) => {
      node = __spreadValues({}, node);
      const { [idKey]: id, [pidKey]: pid } = node;
      const children = map[pid] = map[pid] || [];
      if (!result.length && pid === topId) {
        result = children;
      }
      children.push(node);
      node.children = map[id] || (map[id] = []);
    });
    if (sortKey) {
      Object.keys(map).forEach((i) => {
        if (map[i].length > 1) {
          map[i].sort((a, b) => a[sortKey] - b[sortKey]);
        }
      });
    }
    map = null;
    return result;
  };
  class Tree {
    constructor(nodes, config) {
      __publicField(this, "nodes");
      __publicField(this, "config");
      this.config = __spreadValues({
        value: "value",
        text: "text",
        children: "children"
      }, config || {});
      this.nodes = formatTree(nodes, null, this.config);
    }
    updateChildren(nodes, parent) {
      if (!parent) {
        this.nodes = formatTree(nodes, null, this.config);
      } else {
        parent.children = formatTree(nodes, parent, this.config);
      }
    }
    // for test
    getNodeByValue(value) {
      let foundNode;
      eachTree(this.nodes, (node) => {
        if (node.value === value) {
          foundNode = node;
          return true;
        }
      });
      return foundNode;
    }
    getPathNodesByValue(value) {
      if (!value.length) {
        return [];
      }
      const pathNodes = [];
      let currentNodes = this.nodes;
      while (currentNodes && currentNodes.length) {
        const foundNode = currentNodes.find((node) => node.value === value[node.level]);
        if (!foundNode) {
          break;
        }
        pathNodes.push(foundNode);
        currentNodes = foundNode.children;
      }
      return pathNodes;
    }
    isLeaf(node, lazy) {
      const { leaf, children } = node;
      const hasChildren = Array.isArray(children) && Boolean(children.length);
      return leaf || !hasChildren && !lazy;
    }
    hasChildren(node, lazy) {
      const isLeaf = this.isLeaf(node, lazy);
      if (isLeaf) {
        return false;
      }
      const { children } = node;
      return Array.isArray(children) && Boolean(children.length);
    }
  }
  const { create: create$1e } = createComponent("cascader-item");
  const _sfc_main$1e = create$1e({
    components: {
      Loading: iconsVueTaro.Loading,
      Checklist: iconsVueTaro.Checklist,
      NutTabs: Tabs,
      NutTabPane: TabPane,
      NutScrollView: _sfc_main$1t
    },
    props: {
      visible: Boolean,
      modelValue: Array,
      options: {
        type: Array,
        default: () => []
      },
      lazy: Boolean,
      lazyLoad: Function,
      valueKey: {
        type: String,
        default: "value"
      },
      textKey: {
        type: String,
        default: "text"
      },
      childrenKey: {
        type: String,
        default: "children"
      },
      convertConfig: Object
    },
    emits: ["update:modelValue", "change", "pathChange"],
    setup(props, { emit }) {
      const translate = useLocale();
      const configs = vue.computed(() => ({
        lazy: props.lazy,
        lazyLoad: props.lazyLoad,
        valueKey: props.valueKey,
        textKey: props.textKey,
        childrenKey: props.childrenKey,
        convertConfig: props.convertConfig
      }));
      const tabsCursor = vue.ref(0);
      const initLoading = vue.ref(false);
      const innerValue = vue.ref(props.modelValue);
      const tree = vue.ref(new Tree([], {}));
      const panes = vue.ref([]);
      const isLazy = vue.computed(() => configs.value.lazy && Boolean(configs.value.lazyLoad));
      const lazyLoadMap = /* @__PURE__ */ new Map();
      let currentProcessNode;
      const init = () => __async(this, null, function* () {
        lazyLoadMap.clear();
        panes.value = [];
        tabsCursor.value = 0;
        initLoading.value = false;
        currentProcessNode = null;
        let { options } = props;
        if (configs.value.convertConfig) {
          options = convertListToOptions(options, configs.value.convertConfig);
        }
        tree.value = new Tree(options, {
          value: configs.value.valueKey,
          text: configs.value.textKey,
          children: configs.value.childrenKey
        });
        if (isLazy.value && !tree.value.nodes.length) {
          yield invokeLazyLoad({
            root: true,
            loading: true,
            text: "",
            value: ""
          });
        }
        panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
        syncValue();
      });
      const syncValue = () => __async(this, null, function* () {
        const currentValue = innerValue.value;
        if (currentValue === void 0 || !tree.value.nodes.length) {
          return;
        }
        if (currentValue.length === 0) {
          tabsCursor.value = 0;
          panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
          return;
        }
        let needToSync = currentValue;
        if (isLazy.value && Array.isArray(currentValue) && currentValue.length) {
          needToSync = [];
          let parent = tree.value.nodes.find((node) => node.value === currentValue[0]);
          if (parent) {
            needToSync = [parent.value];
            initLoading.value = true;
            const last = yield currentValue.slice(1).reduce((p, value) => __async(this, null, function* () {
              var _a2;
              const parent2 = yield p;
              yield invokeLazyLoad(parent2);
              const node = (_a2 = parent2 == null ? void 0 : parent2.children) == null ? void 0 : _a2.find((item) => item.value === value);
              if (node) {
                needToSync.push(value);
              }
              return Promise.resolve(node);
            }), Promise.resolve(parent));
            yield invokeLazyLoad(last);
            initLoading.value = false;
          }
        }
        if (needToSync.length && currentValue === props.modelValue) {
          const pathNodes = tree.value.getPathNodesByValue(needToSync);
          pathNodes.map((node, index) => {
            tabsCursor.value = index;
            methods.handleNode(node, true);
          });
        }
      });
      const invokeLazyLoad = (node) => __async(this, null, function* () {
        if (!node) {
          return;
        }
        if (!configs.value.lazyLoad) {
          node.leaf = true;
          return;
        }
        if (tree.value.isLeaf(node, isLazy.value) || tree.value.hasChildren(node, isLazy.value)) {
          return;
        }
        node.loading = true;
        const parent = node.root ? null : node;
        let lazyLoadPromise = lazyLoadMap.get(node);
        if (!lazyLoadPromise) {
          lazyLoadPromise = new Promise((resolve) => {
            var _a2, _b;
            (_b = (_a2 = configs.value).lazyLoad) == null ? void 0 : _b.call(_a2, node, resolve);
          });
          lazyLoadMap.set(node, lazyLoadPromise);
        }
        const nodes = yield lazyLoadPromise;
        if (Array.isArray(nodes) && nodes.length > 0) {
          tree.value.updateChildren(nodes, parent);
        } else {
          node.leaf = true;
        }
        node.loading = false;
        lazyLoadMap.delete(node);
      });
      const emitChange = (pathNodes) => {
        const emitValue = pathNodes.map((node) => node.value);
        innerValue.value = emitValue;
        emit("change", emitValue, pathNodes);
        emit("update:modelValue", emitValue, pathNodes);
      };
      const methods = {
        // 选中一个节点，静默模式不触发事件
        handleNode(node, silent) {
          return __async(this, null, function* () {
            const { disabled, loading } = node;
            if (!silent && disabled || !panes.value[tabsCursor.value]) {
              return;
            }
            if (tree.value.isLeaf(node, isLazy.value)) {
              node.leaf = true;
              panes.value[tabsCursor.value].selectedNode = node;
              panes.value = panes.value.slice(0, node.level + 1);
              if (!silent) {
                const pathNodes = panes.value.map((pane) => pane.selectedNode);
                emitChange(pathNodes);
                emit("pathChange", pathNodes);
              }
              return;
            }
            if (tree.value.hasChildren(node, isLazy.value)) {
              const level = node.level + 1;
              panes.value[tabsCursor.value].selectedNode = node;
              panes.value = panes.value.slice(0, level);
              panes.value.push({
                nodes: node.children || [],
                selectedNode: null
              });
              tabsCursor.value = level;
              if (!silent) {
                const pathNodes = panes.value.map((pane) => pane.selectedNode);
                emit("pathChange", pathNodes);
              }
              return;
            }
            currentProcessNode = node;
            if (loading) {
              return;
            }
            yield invokeLazyLoad(node);
            if (currentProcessNode === node) {
              panes.value[tabsCursor.value].selectedNode = node;
              methods.handleNode(node, silent);
            }
          });
        },
        handleTabClick(tab) {
          currentProcessNode = null;
          tabsCursor.value = Number(tab.paneKey);
        },
        formatTabTitle(pane) {
          return pane.selectedNode ? pane.selectedNode.text : translate("select");
        },
        isSelected(pane, node) {
          var _a2;
          return ((_a2 = pane == null ? void 0 : pane.selectedNode) == null ? void 0 : _a2.value) === node.value;
        }
      };
      vue.watch(
        [configs, () => props.options],
        () => {
          init();
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props.modelValue,
        (value) => {
          if (value !== innerValue.value) {
            innerValue.value = value;
            syncValue();
          }
        }
      );
      vue.watch(
        () => props.visible,
        (val) => {
          if (val && Array.isArray(innerValue.value) && innerValue.value.length > 0) {
            syncValue();
          }
        }
      );
      return __spreadValues({ panes, initLoading, tabsCursor }, methods);
    }
  });
  const _hoisted_1$Z = {
    role: "menu",
    class: "nut-cascader-pane"
  };
  const _hoisted_2$L = ["aria-checked", "aria-disabled", "onClick"];
  const _hoisted_3$A = { class: "nut-cascader-item__title" };
  const _hoisted_4$x = /* @__PURE__ */ vue.createElementVNode("view", { class: "nut-cascader-pane" }, null, -1);
  function _sfc_render$19(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Loading = vue.resolveComponent("Loading");
    const _component_Checklist = vue.resolveComponent("Checklist");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_nut_tab_pane = vue.resolveComponent("nut-tab-pane");
    const _component_nut_tabs = vue.resolveComponent("nut-tabs");
    return vue.openBlock(), vue.createBlock(_component_nut_tabs, {
      modelValue: _ctx.tabsCursor,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tabsCursor = $event),
      class: "nut-cascader",
      "title-scroll": "",
      onClick: _ctx.handleTabClick
    }, {
      default: vue.withCtx(() => [
        !_ctx.initLoading && _ctx.panes.length ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.panes, (pane, index) => {
          return vue.openBlock(), vue.createBlock(_component_nut_tab_pane, {
            key: index,
            title: _ctx.formatTabTitle(pane)
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", _hoisted_1$Z, [
                vue.createVNode(_component_nut_scroll_view, {
                  "scroll-y": true,
                  style: { "height": "100%" }
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(pane.nodes, (node) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: node.value,
                        class: vue.normalizeClass(["nut-cascader-item", { active: _ctx.isSelected(pane, node), disabled: node.disabled }]),
                        "aria-checked": _ctx.isSelected(pane, node),
                        "aria-disabled": node.disabled || void 0,
                        role: "menuitemradio",
                        onClick: ($event) => _ctx.handleNode(node, false)
                      }, [
                        vue.createElementVNode("view", _hoisted_3$A, vue.toDisplayString(node.text), 1),
                        vue.createTextVNode(),
                        node.loading ? (vue.openBlock(), vue.createBlock(_component_Loading, {
                          key: 0,
                          class: "nut-cascader-item__icon-loading",
                          name: "loading"
                        })) : (vue.openBlock(), vue.createBlock(_component_Checklist, {
                          key: 1,
                          class: "nut-cascader-item__icon-check",
                          name: "checklist"
                        }))
                      ], 10, _hoisted_2$L);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ])
            ]),
            _: 2
          }, 1032, ["title"]);
        }), 128)) : (vue.openBlock(), vue.createBlock(_component_nut_tab_pane, {
          key: 1,
          title: "Loading..."
        }, {
          default: vue.withCtx(() => [
            _hoisted_4$x
          ]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["modelValue", "onClick"]);
  }
  const NutCascaderItem = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["render", _sfc_render$19]]);
  const { create: create$1d } = createComponent("cascader");
  const _sfc_main$1d = create$1d({
    components: {
      NutCascaderItem,
      NutPopup: Popup
    },
    props: __spreadProps(__spreadValues({}, popupProps), {
      modelValue: Array,
      visible: Boolean,
      title: String,
      options: {
        type: Array,
        default: () => []
      },
      lazy: Boolean,
      lazyLoad: Function,
      valueKey: {
        type: String,
        default: "value"
      },
      textKey: {
        type: String,
        default: "text"
      },
      childrenKey: {
        type: String,
        default: "children"
      },
      poppable: {
        type: Boolean,
        default: true
      },
      convertConfig: Object
    }),
    emits: ["update:modelValue", "change", "pathChange", "update:visible"],
    setup(props, { emit }) {
      const innerValue = vue.ref(props.modelValue);
      const innerVisible = vue.computed({
        get() {
          return props.visible;
        },
        set(value) {
          emit("update:visible", value);
        }
      });
      const onChange = (value, pathNodes) => {
        innerValue.value = value;
        innerVisible.value = false;
        emit("change", value, pathNodes);
        emit("update:modelValue", value);
      };
      const onPathChange = (pathNodes) => {
        emit("pathChange", pathNodes);
      };
      vue.watch(
        () => props.modelValue,
        (value) => {
          if (value !== innerValue.value) {
            innerValue.value = value;
          }
        }
      );
      return {
        onChange,
        onPathChange,
        innerValue,
        innerVisible
      };
    }
  });
  const _hoisted_1$Y = ["innerHTML"];
  function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_cascader_item = vue.resolveComponent("nut-cascader-item");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return _ctx.poppable ? (vue.openBlock(), vue.createBlock(_component_nut_popup, {
      key: 0,
      visible: _ctx.innerVisible,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.innerVisible = $event),
      position: "bottom",
      "pop-class": "nut-cascader__popup",
      round: "",
      closeable: _ctx.closeable,
      "close-icon": _ctx.closeIcon,
      "destroy-on-close": false,
      "close-icon-position": _ctx.closeIconPosition,
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      "z-index": _ctx.zIndex
    }, {
      default: vue.withCtx(() => [
        _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-cascader__bar",
          innerHTML: _ctx.title
        }, null, 8, _hoisted_1$Y)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.createVNode(_component_nut_cascader_item, {
          "model-value": _ctx.innerValue,
          options: _ctx.options,
          lazy: _ctx.lazy,
          "lazy-load": _ctx.lazyLoad,
          "value-key": _ctx.valueKey,
          "text-key": _ctx.textKey,
          "children-key": _ctx.childrenKey,
          "convert-config": _ctx.convertConfig,
          visible: _ctx.innerVisible,
          onChange: _ctx.onChange,
          onPathChange: _ctx.onPathChange
        }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"])
      ]),
      _: 1
    }, 8, ["visible", "closeable", "close-icon", "close-icon-position", "lock-scroll", "catch-move", "z-index"])) : (vue.openBlock(), vue.createBlock(_component_nut_cascader_item, {
      key: 1,
      "model-value": _ctx.innerValue,
      options: _ctx.options,
      lazy: _ctx.lazy,
      "lazy-load": _ctx.lazyLoad,
      "value-key": _ctx.valueKey,
      "text-key": _ctx.textKey,
      "children-key": _ctx.childrenKey,
      "convert-config": _ctx.convertConfig,
      visible: _ctx.innerVisible,
      onChange: _ctx.onChange,
      onPathChange: _ctx.onPathChange
    }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"]));
  }
  const Cascader = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$18]]);
  const Utils = {
    /**
     * 是否为闫年
     * @return {Boolse} true|false
     */
    isLeapYear: function(y) {
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
    },
    /**
     * 返回星期数
     * @return {String}
     */
    getWhatDay: function(year, month, day) {
      const date = /* @__PURE__ */ new Date(year + "/" + month + "/" + day);
      const index = date.getDay();
      const dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      return dayNames[index];
    },
    /**
     * 返回星期数
     * @return {Number}
     */
    getMonthPreDay: function(year, month) {
      const date = /* @__PURE__ */ new Date(year + "/" + month + "/01");
      let day = date.getDay();
      if (day == 0) {
        day = 7;
      }
      return day;
    },
    /**
     * 返回月份天数
     * @return {Number}
     */
    getMonthDays: function(year, month) {
      if (/^0/.test(month)) {
        month = month.split("")[1];
      }
      return [0, 31, this.isLeapYear(Number(year)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
    /**
     * 补齐数字位数
     * @return {string}
     */
    getNumTwoBit: function(n) {
      n = Number(n);
      return (n > 9 ? "" : "0") + n;
    },
    /**
     * 日期对象转成字符串
     * @return {string}
     */
    date2Str: function(date, split) {
      split = split || "-";
      const y = date.getFullYear();
      const m = this.getNumTwoBit(date.getMonth() + 1);
      const d = this.getNumTwoBit(date.getDate());
      return [y, m, d].join(split);
    },
    /**
     * 返回日期格式字符串
     * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
     * @return {string} '2014-12-31'
     */
    getDay: function(i) {
      i = i || 0;
      let date = /* @__PURE__ */ new Date();
      const diff = i * (1e3 * 60 * 60 * 24);
      date = new Date(date.getTime() + diff);
      return this.date2Str(date);
    },
    /**
     * 时间比较
     * @return {Boolean}
     */
    compareDate: function(date1, date2) {
      const startTime = new Date(date1.replace("-", "/").replace("-", "/"));
      const endTime = new Date(date2.replace("-", "/").replace("-", "/"));
      if (startTime >= endTime) {
        return false;
      }
      return true;
    },
    /**
     * 时间是否相等
     * @return {Boolean}
     */
    isEqual: function(date1, date2) {
      const startTime = new Date(date1).getTime();
      const endTime = new Date(date2).getTime();
      if (startTime == endTime) {
        return true;
      }
      return false;
    },
    getMonthWeek: function(year, month, date, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
      let w = dateNow.getDay();
      let d = dateNow.getDate();
      let remainder = 6 - w;
      if (firstDayOfWeek !== 0) {
        w = w == 0 ? 7 : w;
        remainder = 7 - w;
      }
      return Math.ceil((d + remainder) / 7);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearWeek: function(year, month, date, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
      const dateFirst = new Date(Number(year), 0, 1);
      const dataNumber = Math.round((dateNow.valueOf() - dateFirst.valueOf()) / 864e5);
      return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7);
    },
    getWeekDate: function(year, month, date, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
      const nowTime = dateNow.getTime();
      let day = dateNow.getDay();
      if (firstDayOfWeek === 0) {
        const oneDayTime = 24 * 60 * 60 * 1e3;
        const SundayTime = nowTime - day * oneDayTime;
        const SaturdayTime = nowTime + (6 - day) * oneDayTime;
        const sunday = this.date2Str(new Date(SundayTime));
        const saturday = this.date2Str(new Date(SaturdayTime));
        return [sunday, saturday];
      } else {
        day = day == 0 ? 7 : day;
        const oneDayTime = 24 * 60 * 60 * 1e3;
        const MondayTime = nowTime - (day - 1) * oneDayTime;
        const SundayTime = nowTime + (7 - day) * oneDayTime;
        const monday = this.date2Str(new Date(MondayTime));
        const sunday = this.date2Str(new Date(SundayTime));
        return [monday, sunday];
      }
    },
    formatResultDate: function(date) {
      let days = [...date.split("-")];
      days[2] = Utils.getNumTwoBit(Number(days[2]));
      days[3] = `${days[0]}-${days[1]}-${days[2]}`;
      days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
      return days;
    }
  };
  const { create: create$1c } = createComponent("calendar-item");
  const cN$j = "NutCalendarItem";
  const TARO_ENV = Taro.getEnv();
  const _sfc_main$1c = create$1c({
    components: {
      NutScrollView: _sfc_main$1t
    },
    props: {
      type: {
        type: String,
        default: "one"
      },
      isAutoBackFill: {
        type: Boolean,
        default: false
      },
      toDateAnimation: {
        type: Boolean,
        default: true
      },
      poppable: {
        type: Boolean,
        default: true
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      showSubTitle: {
        type: Boolean,
        default: true
      },
      showToday: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      startText: {
        type: String,
        default: ""
      },
      endText: {
        type: String,
        default: ""
      },
      defaultValue: {
        type: [String, Array],
        default: ""
      },
      startDate: {
        type: String,
        default: Utils.getDay(0)
      },
      endDate: {
        type: String,
        default: Utils.getDay(365)
      },
      firstDayOfWeek: {
        type: Number,
        default: 0
      },
      disabledDate: Function
    },
    emits: ["choose", "update", "close", "select"],
    setup(props, { emit, slots, expose }) {
      const translate = useLocale(cN$j);
      const weekdays = translate("weekdays").map((day, index) => ({
        day,
        weekend: index === 0 || index === 6
      }));
      const weeks = vue.ref([...weekdays.slice(props.firstDayOfWeek, 7), ...weekdays.slice(0, props.firstDayOfWeek)]);
      const scalePx = vue.ref(2);
      const months = vue.ref(null);
      const viewHeight = vue.ref(0);
      const compConthsData = vue.computed(() => {
        return state.monthsData.slice(state.defaultRange[0], state.defaultRange[1]);
      });
      const scrollWithAnimation = vue.ref(false);
      const showTopBtn = vue.computed(() => {
        return slots.btn;
      });
      const topInfo = vue.computed(() => {
        return slots["top-info"];
      });
      const bottomInfo = vue.computed(() => {
        return slots["bottom-info"];
      });
      const state = vue.reactive({
        yearMonthTitle: "",
        defaultRange: [],
        containerHeight: "100%",
        currDate: "",
        propStartDate: "",
        propEndDate: "",
        unLoadPrev: false,
        touchParams: {
          startY: 0,
          endY: 0,
          startTime: 0,
          endTime: 0,
          lastY: 0,
          lastTime: 0
        },
        transformY: 0,
        translateY: 0,
        scrollDistance: 0,
        defaultData: [],
        chooseData: [],
        monthsData: [],
        dayPrefix: "nut-calendar__day",
        startData: "",
        endData: "",
        isRange: props.type === "range",
        timer: 0,
        currentIndex: 0,
        avgHeight: 0,
        scrollTop: 0,
        monthsNum: 0
      });
      const splitDate = (date) => {
        return date.split("-");
      };
      const isStart = (currDate) => {
        return Utils.isEqual(state.currDate[0], currDate);
      };
      const isEnd = (currDate) => {
        return Utils.isEqual(state.currDate[1], currDate);
      };
      const isMultiple = (currDate) => {
        var _a, _b;
        if (((_a = state.currDate) == null ? void 0 : _a.length) > 0) {
          return (_b = state.currDate) == null ? void 0 : _b.some((item) => {
            return Utils.isEqual(item, currDate);
          });
        } else {
          return false;
        }
      };
      const getCurrDate = (day, month) => {
        return month.curData[0] + "-" + month.curData[1] + "-" + Utils.getNumTwoBit(+day.day);
      };
      const getClass = (day, month, index) => {
        const res = [];
        if (typeof index === "number" && ((index + 1 + props.firstDayOfWeek) % 7 === 0 || (index + props.firstDayOfWeek) % 7 === 0)) {
          res.push("weekend");
        }
        const currDate = getCurrDate(day, month);
        const { type } = props;
        if (day.type == "curr") {
          if (Utils.isEqual(state.currDate, currDate) || (type == "range" || type == "week") && (isStart(currDate) || isEnd(currDate)) || type == "multiple" && isMultiple(currDate)) {
            res.push(`${state.dayPrefix}--active`);
          } else if (state.propStartDate && Utils.compareDate(currDate, state.propStartDate) || state.propEndDate && Utils.compareDate(state.propEndDate, currDate) || props.disabledDate && props.disabledDate(currDate)) {
            res.push(`${state.dayPrefix}--disabled`);
          } else if ((type == "range" || type == "week") && Array.isArray(state.currDate) && Object.values(state.currDate).length == 2 && Utils.compareDate(state.currDate[0], currDate) && Utils.compareDate(currDate, state.currDate[1])) {
            res.push(`${state.dayPrefix}--choose`);
          }
        } else {
          res.push(`${state.dayPrefix}--disabled`);
        }
        return res;
      };
      const confirm = () => {
        const { type } = props;
        if (type == "range" && state.chooseData.length == 2 || type != "range") {
          let selectData = state.chooseData.slice(0);
          if (type == "week") {
            selectData = {
              weekDate: [handleWeekDate(state.chooseData[0]), handleWeekDate(state.chooseData[1])]
            };
          }
          emit("choose", selectData);
          if (props.poppable) {
            emit("update");
          }
        }
      };
      const chooseDay = (day, month, isFirst = false) => {
        var _a, _b;
        if (!getClass(day, month).includes(`${state.dayPrefix}--disabled`)) {
          const { type } = props;
          let [y, m] = month.curData;
          let days = [...month.curData];
          days[2] = Utils.getNumTwoBit(Number(day.day));
          days[3] = `${days[0]}-${days[1]}-${days[2]}`;
          days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
          if (type == "multiple") {
            if (((_a = state.currDate) == null ? void 0 : _a.length) > 0) {
              let hasIndex = void 0;
              (_b = state.currDate) == null ? void 0 : _b.forEach((item, index) => {
                if (item == days[3]) {
                  hasIndex = index;
                }
              });
              if (isFirst) {
                state.chooseData.push([...days]);
              } else {
                if (hasIndex !== void 0) {
                  state.currDate.splice(hasIndex, 1);
                  state.chooseData.splice(hasIndex, 1);
                } else {
                  state.currDate.push(days[3]);
                  state.chooseData.push([...days]);
                }
              }
            } else {
              state.currDate = [days[3]];
              state.chooseData = [[...days]];
            }
          } else if (type == "range") {
            let curDataLength = Object.values(state.currDate).length;
            if (curDataLength == 2 || curDataLength == 0) {
              state.currDate = [days[3]];
            } else {
              if (Utils.compareDate(state.currDate[0], days[3])) {
                Array.isArray(state.currDate) && state.currDate.push(days[3]);
              } else {
                Array.isArray(state.currDate) && state.currDate.unshift(days[3]);
              }
            }
            if (state.chooseData.length == 2 || !state.chooseData.length) {
              state.chooseData = [[...days]];
            } else {
              if (Utils.compareDate(state.chooseData[0][3], days[3])) {
                state.chooseData = [...state.chooseData, [...days]];
              } else {
                state.chooseData = [[...days], ...state.chooseData];
              }
            }
          } else if (type == "week") {
            let weekArr = Utils.getWeekDate(y, m, day.day, props.firstDayOfWeek);
            if (state.propStartDate && Utils.compareDate(weekArr[0], state.propStartDate)) {
              weekArr.splice(0, 1, state.propStartDate);
            }
            if (state.propEndDate && Utils.compareDate(state.propEndDate, weekArr[1])) {
              weekArr.splice(1, 1, state.propEndDate);
            }
            state.currDate = weekArr;
            state.chooseData = [Utils.formatResultDate(weekArr[0]), Utils.formatResultDate(weekArr[1])];
          } else {
            state.currDate = days[3];
            state.chooseData = [...days];
          }
          if (!isFirst) {
            let selectData = state.chooseData;
            if (type == "week") {
              selectData = {
                weekDate: [
                  handleWeekDate(state.chooseData[0]),
                  handleWeekDate(state.chooseData[1])
                ]
              };
            }
            emit("select", selectData);
            if (props.isAutoBackFill || !props.poppable) {
              confirm();
            }
          }
        }
      };
      const handleWeekDate = (weekDate) => {
        let [y, m, d] = weekDate;
        let obj = {
          date: weekDate,
          monthWeekNum: Utils.getMonthWeek(y, m, d, props.firstDayOfWeek),
          yearWeekNum: Utils.getYearWeek(y, m, d, props.firstDayOfWeek)
        };
        return obj;
      };
      const getCurrData = (type) => {
        const monthData = type == "prev" ? state.monthsData[0] : state.monthsData[state.monthsData.length - 1];
        let year = parseInt(monthData.curData[0]);
        let month = parseInt(monthData.curData[1].toString().replace(/^0/, ""));
        switch (type) {
          case "prev":
            month == 1 && (year -= 1);
            month = month == 1 ? 12 : --month;
            break;
          case "next":
            month == 12 && (year += 1);
            month = month == 12 ? 1 : ++month;
            break;
        }
        return [year + "", Utils.getNumTwoBit(month), Utils.getMonthDays(String(year), String(month)) + ""];
      };
      const getDaysStatus = (days, type, dateInfo) => {
        let { year, month } = dateInfo;
        if (type == "prev" && days >= 7) {
          days -= 7;
        }
        return Array.from(Array(days), (v, k) => {
          return {
            day: String(k + 1),
            type,
            year,
            month
          };
        });
      };
      const getPreDaysStatus = (days, type, dateInfo, preCurrMonthDays) => {
        days = days - props.firstDayOfWeek;
        let { year, month } = dateInfo;
        if (type == "prev" && days >= 7) {
          days -= 7;
        }
        let months2 = Array.from(Array(preCurrMonthDays), (v, k) => {
          return {
            day: String(k + 1),
            type,
            year,
            month
          };
        });
        return months2.slice(preCurrMonthDays - days);
      };
      const getMonth = (curData, type) => {
        const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1]);
        let preMonth = Number(curData[1]) - 1;
        let preYear = Number(curData[0]);
        if (preMonth <= 0) {
          preMonth = 12;
          preYear += 1;
        }
        const currMonthDays = Utils.getMonthDays(String(curData[0]), String(curData[1]));
        const preCurrMonthDays = Utils.getMonthDays(preYear + "", preMonth + "");
        const title = {
          year: curData[0],
          month: curData[1]
        };
        const monthInfo = {
          curData,
          title: translate("monthTitle", title.year, title.month),
          monthData: [
            ...getPreDaysStatus(
              preMonthDays,
              "prev",
              { month: String(preMonth), year: String(preYear) },
              preCurrMonthDays
            ),
            ...getDaysStatus(currMonthDays, "curr", title)
          ],
          cssHeight: 0,
          cssScrollHeight: 0
        };
        let titleHeight, itemHeight;
        if (TARO_ENV === Taro.ENV_TYPE.WEB) {
          titleHeight = 46 * scalePx.value + 16 * scalePx.value * 2;
          itemHeight = 128 * scalePx.value;
        } else {
          titleHeight = Math.floor(46 * scalePx.value) + Math.floor(16 * scalePx.value) * 2;
          itemHeight = Math.floor(128 * scalePx.value);
        }
        monthInfo.cssHeight = titleHeight + (monthInfo.monthData.length > 35 ? itemHeight * 6 : itemHeight * 5);
        let cssScrollHeight = 0;
        if (state.monthsData.length > 0) {
          cssScrollHeight = state.monthsData[state.monthsData.length - 1].cssScrollHeight + state.monthsData[state.monthsData.length - 1].cssHeight;
        }
        monthInfo.cssScrollHeight = cssScrollHeight;
        if (type == "next") {
          if (!state.endData || !Utils.compareDate(
            `${state.endData[0]}-${state.endData[1]}-${Utils.getMonthDays(state.endData[0], state.endData[1])}`,
            `${curData[0]}-${curData[1]}-${curData[2]}`
          )) {
            state.monthsData.push(monthInfo);
          }
        } else {
          if (!state.startData || !Utils.compareDate(
            `${curData[0]}-${curData[1]}-${curData[2]}`,
            `${state.startData[0]}-${state.startData[1]}-01`
          )) {
            state.monthsData.unshift(monthInfo);
          } else {
            state.unLoadPrev = true;
          }
        }
      };
      const initData = () => {
        let propStartDate = props.startDate ? props.startDate : Utils.getDay(0);
        let propEndDate = props.endDate ? props.endDate : Utils.getDay(365);
        state.propStartDate = propStartDate;
        state.propEndDate = propEndDate;
        state.startData = splitDate(propStartDate);
        state.endData = splitDate(propEndDate);
        if (props.defaultValue || Array.isArray(props.defaultValue) && props.defaultValue.length > 0) {
          state.currDate = props.type !== "one" ? [...props.defaultValue] : props.defaultValue;
        }
        const startDate = {
          year: Number(state.startData[0]),
          month: Number(state.startData[1])
        };
        const endDate = {
          year: Number(state.endData[0]),
          month: Number(state.endData[1])
        };
        let monthsNum = endDate.month - startDate.month;
        if (endDate.year - startDate.year > 0) {
          monthsNum = monthsNum + 12 * (endDate.year - startDate.year);
        }
        if (monthsNum <= 0) {
          monthsNum = 1;
        }
        getMonth(state.startData, "next");
        let i = 1;
        do {
          getMonth(getCurrData("next"), "next");
        } while (i++ < monthsNum);
        state.monthsNum = monthsNum;
        if (props.type == "range" && Array.isArray(state.currDate)) {
          if (state.currDate.length > 0) {
            if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
              state.currDate.splice(0, 1, propStartDate);
            }
            if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
              state.currDate.splice(1, 1, propEndDate);
            }
            state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
          }
        } else if (props.type == "multiple" && Array.isArray(state.currDate)) {
          if (state.currDate.length > 0) {
            let defaultArr = [];
            let obj = {};
            state.currDate.forEach((item) => {
              if (propStartDate && !Utils.compareDate(item, propStartDate) && propEndDate && !Utils.compareDate(propEndDate, item)) {
                if (!Object.hasOwnProperty.call(obj, item)) {
                  defaultArr.push(item);
                  obj[item] = item;
                }
              }
            });
            state.currDate = [...defaultArr];
            state.defaultData = [...splitDate(defaultArr[0])];
          }
        } else if (props.type == "week" && Array.isArray(state.currDate)) {
          if (state.currDate.length > 0) {
            let [y, m, d] = splitDate(state.currDate[0]);
            let weekArr = Utils.getWeekDate(y, m, d, props.firstDayOfWeek);
            state.currDate = weekArr;
            if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
              state.currDate.splice(0, 1, propStartDate);
            }
            if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
              state.currDate.splice(1, 1, propEndDate);
            }
            state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
          }
        } else {
          if (state.currDate) {
            if (propStartDate && Utils.compareDate(state.currDate, propStartDate)) {
              state.currDate = propStartDate;
            } else if (propEndDate && !Utils.compareDate(state.currDate, propEndDate)) {
              state.currDate = propEndDate;
            }
            state.defaultData = [...splitDate(state.currDate)];
          }
        }
        let current = 0;
        let lastCurrent = 0;
        if (state.defaultData.length > 0) {
          state.monthsData.forEach((item, index) => {
            if (item.title == translate("monthTitle", state.defaultData[0], state.defaultData[1])) {
              current = index;
            }
            if (props.type == "range" || props.type == "week") {
              if (item.title == translate("monthTitle", state.defaultData[3], state.defaultData[4])) {
                lastCurrent = index;
              }
            }
          });
        }
        setDefaultRange(monthsNum, current);
        state.currentIndex = current;
        state.yearMonthTitle = state.monthsData[state.currentIndex].title;
        if (state.defaultData.length > 0) {
          if (state.isRange) {
            chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
            chooseDay({ day: state.defaultData[5], type: "curr" }, state.monthsData[lastCurrent], true);
          } else if (props.type == "week") {
            chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
          } else if (props.type == "multiple") {
            [...state.currDate].forEach((item) => {
              let dateArr = splitDate(item);
              let current2 = state.currentIndex;
              state.monthsData.forEach((item2, index) => {
                if (item2.title == translate("monthTitle", dateArr[0], dateArr[1])) {
                  current2 = index;
                }
              });
              chooseDay({ day: dateArr[2], type: "curr" }, state.monthsData[current2], true);
            });
          } else {
            chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
          }
        }
        let lastItem = state.monthsData[state.monthsData.length - 1];
        let containerHeight = lastItem.cssHeight + lastItem.cssScrollHeight;
        state.containerHeight = `${containerHeight}px`;
        state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
        state.avgHeight = Math.floor(containerHeight / (monthsNum + 1));
        if (months == null ? void 0 : months.value) {
          viewHeight.value = months.value.clientHeight;
        }
      };
      const scrollToDate = (date) => {
        if (Utils.compareDate(date, state.propStartDate)) {
          date = state.propStartDate;
        } else if (!Utils.compareDate(date, state.propEndDate)) {
          date = state.propEndDate;
        }
        let dateArr = splitDate(date);
        state.monthsData.forEach((item, index) => {
          if (item.title == translate("monthTitle", dateArr[0], dateArr[1])) {
            state.scrollTop += 1;
            scrollWithAnimation.value = props.toDateAnimation;
            requestAniFrame$1(() => {
              setTimeout(() => {
                state.scrollTop = state.monthsData[index].cssScrollHeight;
                setTimeout(() => {
                  scrollWithAnimation.value = false;
                }, 200);
              }, 10);
            });
          }
        });
      };
      const initPosition = () => {
        state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
      };
      expose({
        scrollToDate,
        initPosition
      });
      const setDefaultRange = (monthsNum, current) => {
        if (monthsNum >= 3) {
          if (current > 0 && current < monthsNum) {
            state.defaultRange = [current - 1, current + 3];
          } else if (current == 0) {
            state.defaultRange = [current, current + 4];
          } else if (current == monthsNum) {
            state.defaultRange = [current - 2, current + 2];
          }
        } else {
          state.defaultRange = [0, monthsNum + 2];
        }
        let defaultScrollTop = state.monthsData[state.defaultRange[0]].cssScrollHeight;
        state.translateY = defaultScrollTop;
      };
      const isActive = (day, month) => {
        return (props.type == "range" || props.type == "week") && day.type == "curr" && getClass(day, month).includes("nut-calendar__day--active");
      };
      const isStartTip = (day, month) => {
        return isActive(day, month) && isStart(getCurrDate(day, month));
      };
      const isEndTip = (day, month) => {
        if (state.currDate.length >= 2 && isEnd(getCurrDate(day, month))) {
          return isActive(day, month);
        }
        return false;
      };
      const rangeTip = () => {
        if (state.currDate.length >= 2) {
          return Utils.isEqual(state.currDate[0], state.currDate[1]);
        }
      };
      const isCurrDay = (dateInfo) => {
        const date = `${dateInfo.year}-${dateInfo.month}-${Number(dateInfo.day) < 10 ? "0" + dateInfo.day : dateInfo.day}`;
        return Utils.isEqual(date, Utils.date2Str(/* @__PURE__ */ new Date()));
      };
      const mothsViewScroll = (e) => {
        if (state.monthsData.length <= 1) {
          return;
        }
        const currentScrollTop = e.target.scrollTop;
        let current = Math.floor(currentScrollTop / state.avgHeight);
        if (current == 0) {
          if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
            current += 1;
          }
        } else if (current > 0 && current < state.monthsNum - 1) {
          if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
            current += 1;
          }
          if (currentScrollTop < state.monthsData[current].cssScrollHeight) {
            current -= 1;
          }
        }
        if (state.currentIndex !== current) {
          state.currentIndex = current;
          setDefaultRange(state.monthsNum, current);
        }
        state.yearMonthTitle = state.monthsData[current].title;
      };
      const resetRender = () => {
        state.chooseData.splice(0);
        state.monthsData.splice(0);
        initData();
      };
      vue.onMounted(() => {
        Taro.getSystemInfo({
          success(res) {
            let scale = 2;
            let toFixed = 3;
            if (TARO_ENV === Taro.ENV_TYPE.WEB) {
              toFixed = 5;
              let fontSize = document.documentElement.style.fontSize;
              scale = Number((Number.parseInt(fontSize) / 40).toFixed(toFixed));
            } else {
              let screenWidth = res.screenWidth;
              scale = Number((screenWidth / 750).toFixed(toFixed));
            }
            scalePx.value = scale;
            initData();
          }
        });
      });
      vue.watch(
        () => props.defaultValue,
        (val) => {
          if (val) {
            if (props.poppable) {
              resetRender();
            }
          }
        }
      );
      return __spreadProps(__spreadValues(__spreadValues({
        weeks,
        compConthsData,
        showTopBtn,
        topInfo,
        bottomInfo,
        rangeTip,
        mothsViewScroll,
        getClass,
        isStartTip,
        isEndTip,
        chooseDay,
        isCurrDay,
        confirm,
        months
      }, vue.toRefs(state)), vue.toRefs(props)), {
        translate,
        scrollWithAnimation
      });
    }
  });
  const _hoisted_1$X = { class: "nut-calendar__header" };
  const _hoisted_2$K = {
    key: 0,
    class: "nut-calendar__header-title"
  };
  const _hoisted_3$z = {
    key: 1,
    class: "nut-calendar__header-slot"
  };
  const _hoisted_4$w = {
    key: 2,
    class: "nut-calendar__header-subtitle"
  };
  const _hoisted_5$m = { class: "nut-calendar__weekdays" };
  const _hoisted_6$i = { class: "nut-calendar__month-title" };
  const _hoisted_7$g = { class: "nut-calendar__days" };
  const _hoisted_8$a = ["onClick"];
  const _hoisted_9$9 = { class: "nut-calendar__day-value" };
  const _hoisted_10$5 = {
    key: 0,
    class: "nut-calendar__day-tips nut-calendar__day-tips--top"
  };
  const _hoisted_11$4 = {
    key: 1,
    class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
  };
  const _hoisted_12$4 = {
    key: 2,
    class: "nut-calendar__day-tips--curr"
  };
  const _hoisted_13$3 = {
    key: 4,
    class: "nut-calendar__day-tip"
  };
  const _hoisted_14$3 = {
    key: 0,
    class: "nut-calendar__footer"
  };
  function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["nut-calendar", {
        "nut-calendar--nopop": !_ctx.poppable,
        "nut-calendar--nofooter": _ctx.isAutoBackFill
      }])
    }, [
      vue.createElementVNode("view", _hoisted_1$X, [
        _ctx.showTitle ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$K, vue.toDisplayString(_ctx.title || _ctx.translate("title")), 1)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.showTopBtn ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$z, [
          vue.renderSlot(_ctx.$slots, "btn")
        ])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.showSubTitle ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$w, vue.toDisplayString(_ctx.yearMonthTitle), 1)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_5$m, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.weeks, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass(["nut-calendar__weekday", { weekend: item.weekend }])
            }, vue.toDisplayString(item.day), 3);
          }), 128))
        ])
      ]),
      vue.createTextVNode(),
      vue.createVNode(_component_nut_scroll_view, {
        ref: "months",
        "scroll-top": _ctx.scrollTop,
        "scroll-y": true,
        class: "nut-calendar__content",
        "scroll-with-animation": _ctx.scrollWithAnimation,
        onScroll: _ctx.mothsViewScroll
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "nut-calendar__panel",
            style: vue.normalizeStyle({ height: _ctx.containerHeight })
          }, [
            vue.createElementVNode("view", {
              class: "nut-calendar__body",
              style: vue.normalizeStyle({ transform: `translateY(${_ctx.translateY}px)` })
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.compConthsData, (month, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "nut-calendar__month"
                }, [
                  vue.createElementVNode("view", _hoisted_6$i, vue.toDisplayString(month.title), 1),
                  vue.createTextVNode(),
                  vue.createElementVNode("view", _hoisted_7$g, [
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["nut-calendar__days-item", _ctx.type === "range" ? "nut-calendar__days-item--range" : ""])
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(month.monthData, (day, i) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: i,
                          class: vue.normalizeClass(["nut-calendar__day", _ctx.getClass(day, month, i)]),
                          onClick: ($event) => _ctx.chooseDay(day, month)
                        }, [
                          vue.createElementVNode("view", _hoisted_9$9, [
                            vue.renderSlot(_ctx.$slots, "day", {
                              date: day.type == "curr" ? day : ""
                            }, () => [
                              vue.createTextVNode(vue.toDisplayString(day.type == "curr" ? day.day : ""), 1)
                            ])
                          ]),
                          vue.createTextVNode(),
                          _ctx.topInfo ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_10$5, [
                            vue.renderSlot(_ctx.$slots, "top-info", {
                              date: day.type == "curr" ? day : ""
                            })
                          ])) : vue.createCommentVNode("", true),
                          vue.createTextVNode(),
                          _ctx.bottomInfo ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_11$4, [
                            vue.renderSlot(_ctx.$slots, "bottom-info", {
                              date: day.type == "curr" ? day : ""
                            })
                          ])) : vue.createCommentVNode("", true),
                          vue.createTextVNode(),
                          !_ctx.bottomInfo && _ctx.showToday && _ctx.isCurrDay(day) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_12$4, vue.toDisplayString(_ctx.translate("today")), 1)) : vue.createCommentVNode("", true),
                          vue.createTextVNode(),
                          _ctx.isStartTip(day, month) ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 3,
                            class: vue.normalizeClass(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": _ctx.rangeTip() }])
                          }, vue.toDisplayString(_ctx.startText || _ctx.translate("start")), 3)) : vue.createCommentVNode("", true),
                          vue.createTextVNode(),
                          _ctx.isEndTip(day, month) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_13$3, vue.toDisplayString(_ctx.endText || _ctx.translate("end")), 1)) : vue.createCommentVNode("", true)
                        ], 10, _hoisted_8$a);
                      }), 128))
                    ], 2)
                  ])
                ]);
              }), 128))
            ], 4)
          ], 4)
        ]),
        _: 3
      }, 8, ["scroll-top", "scroll-with-animation", "onScroll"]),
      vue.createTextVNode(),
      _ctx.poppable && !_ctx.isAutoBackFill ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_14$3, [
        vue.renderSlot(_ctx.$slots, "footer-info", { date: _ctx.chooseData }, () => [
          vue.createElementVNode("view", {
            class: "nut-calendar__confirm",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.confirm && _ctx.confirm(...args))
          }, vue.toDisplayString(_ctx.confirmText || _ctx.translate("confirm")), 1)
        ])
      ])) : vue.createCommentVNode("", true)
    ], 2);
  }
  const NutCalendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$17]]);
  const { create: create$1b } = createComponent("calendar");
  const _sfc_main$1b = create$1b({
    components: {
      NutCalendarItem,
      NutPopup: Popup
    },
    props: {
      type: {
        type: String,
        default: "one"
      },
      isAutoBackFill: {
        type: Boolean,
        default: false
      },
      toDateAnimation: {
        type: Boolean,
        default: true
      },
      poppable: {
        type: Boolean,
        default: true
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      showSubTitle: {
        type: Boolean,
        default: true
      },
      visible: {
        type: Boolean,
        default: false
      },
      showToday: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      startText: {
        type: String,
        default: ""
      },
      endText: {
        type: String,
        default: ""
      },
      defaultValue: {
        type: [String, Array]
      },
      startDate: {
        type: String,
        default: Utils.getDay(0)
      },
      endDate: {
        type: String,
        default: Utils.getDay(365)
      },
      firstDayOfWeek: {
        type: Number,
        default: 0,
        validator: (val) => val >= 0 && val <= 6
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      disabledDate: Function
    },
    emits: ["choose", "close", "update:visible", "select"],
    setup(props, { emit, slots, expose }) {
      const showTopBtn = vue.computed(() => {
        return slots.btn;
      });
      const topInfo = vue.computed(() => {
        return slots["top-info"];
      });
      const dayInfo = vue.computed(() => {
        return slots.day;
      });
      const bottomInfo = vue.computed(() => {
        return slots["bottom-info"];
      });
      const footerInfo = vue.computed(() => {
        return slots["footer-info"];
      });
      const calendarRef = vue.ref(null);
      const scrollToDate = (date) => {
        var _a;
        (_a = calendarRef.value) == null ? void 0 : _a.scrollToDate(date);
      };
      const initPosition = () => {
        var _a;
        (_a = calendarRef.value) == null ? void 0 : _a.initPosition();
      };
      expose({
        scrollToDate,
        initPosition
      });
      const update = () => {
        emit("update:visible", false);
      };
      const close = () => {
        emit("close");
        emit("update:visible", false);
      };
      const choose = (param) => {
        close();
        emit("choose", param);
      };
      const closePopup = () => {
        close();
      };
      const select = (param) => {
        emit("select", param);
      };
      return {
        closePopup,
        update,
        close,
        select,
        choose,
        calendarRef,
        showTopBtn,
        topInfo,
        dayInfo,
        bottomInfo,
        footerInfo
      };
    }
  });
  function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_calendar_item = vue.resolveComponent("nut-calendar-item");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return _ctx.poppable ? (vue.openBlock(), vue.createBlock(_component_nut_popup, vue.mergeProps({
      key: 0,
      visible: _ctx.visible,
      position: "bottom",
      round: "",
      closeable: ""
    }, _ctx.$attrs, {
      style: { height: "85vh" },
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      onClickOverlay: _ctx.closePopup,
      onClickCloseIcon: _ctx.closePopup
    }), {
      default: vue.withCtx(() => [
        vue.createVNode(_component_nut_calendar_item, {
          ref: "calendarRef",
          type: _ctx.type,
          "is-auto-back-fill": _ctx.isAutoBackFill,
          poppable: _ctx.poppable,
          title: _ctx.title,
          "default-value": _ctx.defaultValue,
          "start-date": _ctx.startDate,
          "end-date": _ctx.endDate,
          "confirm-text": _ctx.confirmText,
          "start-text": _ctx.startText,
          "end-text": _ctx.endText,
          "show-today": _ctx.showToday,
          "show-title": _ctx.showTitle,
          "show-sub-title": _ctx.showSubTitle,
          "to-date-animation": _ctx.toDateAnimation,
          "first-day-of-week": _ctx.firstDayOfWeek,
          "disabled-date": _ctx.disabledDate,
          onUpdate: _ctx.update,
          onClose: _ctx.close,
          onChoose: _ctx.choose,
          onSelect: _ctx.select
        }, vue.createSlots({ _: 2 }, [
          _ctx.showTopBtn ? {
            name: "btn",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "btn")
            ]),
            key: "0"
          } : void 0,
          _ctx.dayInfo ? {
            name: "day",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "day", {
                date: date.date
              })
            ]),
            key: "1"
          } : void 0,
          _ctx.topInfo ? {
            name: "top-info",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "top-info", {
                date: date.date
              })
            ]),
            key: "2"
          } : void 0,
          _ctx.bottomInfo ? {
            name: "bottom-info",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "bottom-info", {
                date: date.date
              })
            ]),
            key: "3"
          } : void 0,
          _ctx.footerInfo ? {
            name: "footer-info",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "footer-info", {
                date: date.date
              })
            ]),
            key: "4"
          } : void 0
        ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
      ]),
      _: 3
    }, 16, ["visible", "lock-scroll", "catch-move", "onClickOverlay", "onClickCloseIcon"])) : (vue.openBlock(), vue.createBlock(_component_nut_calendar_item, {
      key: 1,
      ref: "calendarRef",
      type: _ctx.type,
      "is-auto-back-fill": _ctx.isAutoBackFill,
      poppable: _ctx.poppable,
      title: _ctx.title,
      "confirm-text": _ctx.confirmText,
      "start-text": _ctx.startText,
      "end-text": _ctx.endText,
      "default-value": _ctx.defaultValue,
      "start-date": _ctx.startDate,
      "end-date": _ctx.endDate,
      "show-title": _ctx.showTitle,
      "show-sub-title": _ctx.showSubTitle,
      "to-date-animation": _ctx.toDateAnimation,
      "show-today": _ctx.showToday,
      "first-day-of-week": _ctx.firstDayOfWeek,
      "disabled-date": _ctx.disabledDate,
      onClose: _ctx.close,
      onChoose: _ctx.choose,
      onSelect: _ctx.select
    }, vue.createSlots({ _: 2 }, [
      _ctx.showTopBtn ? {
        name: "btn",
        fn: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "btn")
        ]),
        key: "0"
      } : void 0,
      _ctx.dayInfo ? {
        name: "day",
        fn: vue.withCtx((date) => [
          vue.renderSlot(_ctx.$slots, "day", {
            date: date.date
          })
        ]),
        key: "1"
      } : void 0,
      _ctx.topInfo ? {
        name: "top-info",
        fn: vue.withCtx((date) => [
          vue.renderSlot(_ctx.$slots, "top-info", {
            date: date.date
          })
        ]),
        key: "2"
      } : void 0,
      _ctx.bottomInfo ? {
        name: "bottom-info",
        fn: vue.withCtx((date) => [
          vue.renderSlot(_ctx.$slots, "bottom-info", {
            date: date.date
          })
        ]),
        key: "3"
      } : void 0
    ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onClose", "onChoose", "onSelect"]));
  }
  const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["render", _sfc_render$16]]);
  const CHECKBOX_KEY = Symbol("nut-checkbox");
  const { create: create$1a, componentName: componentName$f } = createComponent("checkbox");
  const _sfc_main$1a = create$1a({
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      textPosition: {
        type: String,
        default: "right"
      },
      iconSize: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: "round"
        // button
      }
    },
    emits: ["change", "update:modelValue"],
    setup(props, { emit, slots }) {
      const parent = vue.inject(CHECKBOX_KEY, null);
      const state = vue.reactive({
        partialSelect: props.indeterminate
      });
      const hasParent = vue.computed(() => !!parent);
      const pValue = vue.computed(() => {
        if (hasParent.value) {
          return parent.value.value.includes(props.label);
        } else {
          return props.modelValue;
        }
      });
      const pDisabled = vue.computed(() => {
        return hasParent.value ? parent.disabled.value ? parent.disabled.value : props.disabled : props.disabled;
      });
      const checked = vue.computed(() => !!props.modelValue);
      const color = vue.computed(() => {
        return !pDisabled.value ? state.partialSelect ? "nut-checkbox__icon--indeterminate" : !pValue.value ? "nut-checkbox__icon--unchecked" : "nut-checkbox__icon" : "nut-checkbox__icon--disable";
      });
      let updateType = "";
      const emitChange = (value, label) => {
        updateType = "click";
        emit("update:modelValue", value);
        emit("change", value, label);
      };
      vue.watch(
        () => props.modelValue,
        (v) => {
          if (updateType == "click") {
            updateType = "";
          } else {
            emit("change", v);
          }
        }
      );
      const renderIcon2 = () => {
        const { iconSize } = props;
        const iconNodeMap = {
          CheckNormal: slots.icon ? slots.icon : iconsVueTaro.CheckNormal,
          Checked: slots.checkedIcon ? slots.checkedIcon : iconsVueTaro.Checked,
          CheckDisabled: slots.indeterminate ? slots.indeterminate : iconsVueTaro.CheckDisabled
        };
        const iconNode = state.partialSelect ? iconNodeMap.CheckDisabled : !pValue.value ? iconNodeMap.CheckNormal : iconNodeMap.Checked;
        const size = pxCheck(iconSize);
        return vue.h(iconNode, {
          width: size,
          height: size,
          size,
          class: color.value
        });
      };
      const renderLabel = () => {
        var _a;
        return vue.h(
          "view",
          {
            class: `${componentName$f}__label ${pDisabled.value ? `${componentName$f}__label--disabled` : ""}`
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
      const renderButton = () => {
        var _a;
        return vue.h(
          "view",
          {
            class: `${componentName$f}__button ${pValue.value && `${componentName$f}__button--active`} ${pDisabled.value ? `${componentName$f}__button--disabled` : ""}`
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
      const handleClick = () => {
        var _a, _b;
        if (pDisabled.value)
          return;
        if (checked.value && state.partialSelect) {
          state.partialSelect = false;
          emitChange(checked.value, (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children);
          return;
        }
        emitChange(!checked.value, (_b = slots.default) == null ? void 0 : _b.call(slots)[0].children);
        if (hasParent.value) {
          const value = parent.value.value;
          const max = parent.max.value;
          const { label } = props;
          const index = value.indexOf(label);
          if (index > -1) {
            value.splice(index, 1);
          } else if (index <= -1 && (value.length < max || !max)) {
            value.push(label);
          }
          parent.updateValue(value);
        }
      };
      vue.onMounted(() => {
        hasParent.value && parent.link(vue.getCurrentInstance());
      });
      vue.onBeforeUnmount(() => {
        hasParent.value && parent.unlink(vue.getCurrentInstance());
      });
      vue.watch(
        () => props.indeterminate,
        (newVal) => {
          state.partialSelect = newVal;
        }
      );
      return () => {
        return vue.h(
          "view",
          {
            class: `${componentName$f} ${componentName$f}--${props.shape} ${props.textPosition === "left" ? `${componentName$f}--reverse` : ""}`,
            onClick: handleClick
          },
          [props.shape == "button" ? renderButton() : [renderIcon2(), renderLabel()]]
        );
      };
    }
  });
  const { create: create$19, componentName: componentName$e } = createComponent("checkbox-group");
  const _sfc_main$19 = create$19({
    props: {
      modelValue: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: 0
      }
    },
    emits: ["change", "update:modelValue"],
    setup(props, { slots, emit, expose }) {
      const state = vue.reactive({
        children: []
      });
      const link = (child) => {
        child.proxy && state.children.push(child.proxy);
      };
      const unlink = (child) => {
        child.proxy && (state.children = state.children.filter((p) => p !== child.proxy));
      };
      const updateValue = (value) => {
        emit("update:modelValue", value);
        emit("change", value);
      };
      const toggleAll = (checked) => {
        const values = [];
        if (checked) {
          state.children.forEach((item) => {
            if (!(item == null ? void 0 : item.disabled)) {
              values.push(item == null ? void 0 : item.label);
            }
          });
        }
        emit("update:modelValue", values);
      };
      const toggleReverse = () => {
        const value = state.children.filter((item) => {
          if (item == null ? void 0 : item.disabled) {
            return false;
          } else {
            return !props.modelValue.includes(item.label);
          }
        }).map((item) => item.label);
        emit("update:modelValue", value);
      };
      vue.provide(CHECKBOX_KEY, {
        value: vue.computed(() => props.modelValue),
        disabled: vue.computed(() => props.disabled),
        max: vue.computed(() => props.max),
        updateValue,
        link,
        unlink
      });
      vue.watch(
        () => props.modelValue,
        (value) => {
          emit("change", value);
        }
      );
      expose({ toggleAll, toggleReverse });
      return () => {
        var _a;
        return vue.h(
          "view",
          {
            class: componentName$e
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
    }
  });
  const DEFAULT_FILED_NAMES = {
    text: "text",
    value: "value",
    children: "children"
  };
  const usePicker = (props, emit) => {
    const state = vue.reactive({
      formattedColumns: props.columns
    });
    const columnFieldNames = vue.computed(() => {
      return __spreadValues(__spreadValues({}, DEFAULT_FILED_NAMES), props.fieldNames);
    });
    const defaultValues = vue.ref([]);
    const defaultIndexes = vue.computed(() => {
      const fields = columnFieldNames.value;
      return columnsList.value.map((column, index) => {
        const targetIndex = column.findIndex((item) => item[fields.value] === defaultValues.value[index]);
        return targetIndex === -1 ? 0 : targetIndex;
      });
    });
    const pickerColumn = vue.ref([]);
    const swipeRef = (el) => {
      if (el && pickerColumn.value.length < columnsList.value.length) {
        pickerColumn.value.push(el);
      }
    };
    const selectedOptions = vue.computed(() => {
      const fields = columnFieldNames.value;
      return columnsList.value.map((column, index) => {
        return column.find((item) => item[fields.value] === defaultValues.value[index]) || column[0];
      });
    });
    const columnsType = vue.computed(() => {
      const firstColumn = state.formattedColumns[0];
      const fields = columnFieldNames.value;
      if (firstColumn) {
        if (Array.isArray(firstColumn)) {
          return "multiple";
        }
        if (fields.children in firstColumn) {
          return "cascade";
        }
      }
      return "single";
    });
    const columnsList = vue.computed(() => {
      let result = [];
      switch (columnsType.value) {
        case "multiple":
          result = state.formattedColumns;
          break;
        case "cascade":
          result = formatCascade(
            state.formattedColumns,
            defaultValues.value ? defaultValues.value : []
          );
          break;
        default:
          result = [state.formattedColumns];
          break;
      }
      return result;
    });
    const formatCascade = (columns, defaultValues2) => {
      const formatted = [];
      const fields = columnFieldNames.value;
      let cursor = {
        text: "",
        value: "",
        [fields.children]: columns
      };
      let columnIndex = 0;
      while (cursor && cursor[fields.children]) {
        const options = cursor[fields.children];
        const value = defaultValues2[columnIndex];
        let index = options.findIndex((columnItem) => columnItem[fields.value] === value);
        if (index === -1)
          index = 0;
        cursor = cursor[fields.children][index];
        columnIndex++;
        formatted.push(options);
      }
      return formatted;
    };
    const cancel = () => {
      emit("cancel", {
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
    };
    const changeHandler = (columnIndex, option) => {
      var _a;
      const fields = columnFieldNames.value;
      if (option && Object.keys(option).length) {
        defaultValues.value = defaultValues.value ? defaultValues.value : [];
        if (columnsType.value === "cascade") {
          defaultValues.value[columnIndex] = (_a = option[fields.value]) != null ? _a : "";
          let index = columnIndex;
          let cursor = option;
          while (cursor && cursor[fields.children] && cursor[fields.children][0]) {
            defaultValues.value[index + 1] = cursor[fields.children][0][fields.value];
            index++;
            cursor = cursor[fields.children][0];
          }
          if (cursor && cursor[fields.children] && cursor[fields.children].length === 0) {
            defaultValues.value = defaultValues.value.slice(0, index + 1);
          }
        } else {
          defaultValues.value[columnIndex] = Object.prototype.hasOwnProperty.call(option, fields.value) ? option[fields.value] : "";
        }
        emit("change", {
          columnIndex,
          selectedValue: defaultValues.value,
          selectedOptions: selectedOptions.value
        });
      }
    };
    const confirm = () => {
      const fields = columnFieldNames.value;
      if (defaultValues.value && !defaultValues.value.length) {
        columnsList.value.forEach((columns) => {
          defaultValues.value.push(columns[0][fields.value]);
        });
      }
      emit("confirm", {
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
    };
    const isSameValue = (valA, valB) => JSON.stringify(valA) === JSON.stringify(valB);
    vue.watch(
      () => props.modelValue,
      (newValues) => {
        if (!isSameValue(newValues, defaultValues.value)) {
          defaultValues.value = newValues;
        }
      },
      { deep: true, immediate: true }
    );
    vue.watch(
      defaultValues,
      (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          emit("update:modelValue", newValues);
        }
      },
      { deep: true }
    );
    vue.watch(
      () => props.columns,
      (val) => {
        state.formattedColumns = val;
      }
    );
    return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
      columnsType,
      columnsList,
      columnFieldNames,
      cancel,
      changeHandler,
      confirm,
      defaultValues,
      defaultIndexes,
      pickerColumn,
      swipeRef,
      selectedOptions,
      isSameValue
    });
  };
  const { create: create$18 } = createComponent("picker-column");
  const _sfc_main$18 = create$18({
    props: {
      // 当前选中项
      value: [String, Number],
      columnsType: String,
      column: {
        type: Array,
        default: () => []
      },
      // 是否开启3D效果
      threeDimensional: {
        type: Boolean,
        default: true
      },
      swipeDuration: {
        type: [Number, String],
        default: 1e3
      },
      visibleOptionNum: {
        type: [Number, String],
        default: 7
      },
      optionHeight: {
        type: [Number, String],
        default: 36
      },
      fieldNames: {
        type: Object,
        default: () => ({})
      },
      // 特殊环境判断
      taro: {
        type: Boolean,
        defualt: false
      }
    },
    emits: ["click", "change"],
    setup(props, { emit }) {
      const touch = useTouch();
      const state = vue.reactive({
        touchParams: {
          startY: 0,
          endY: 0,
          startTime: 0,
          endTime: 0,
          lastY: 0,
          lastTime: 0
        },
        currIndex: 1,
        transformY: 0,
        scrollDistance: 0,
        rotation: 20
      });
      const roller = vue.ref(null);
      const moving = vue.ref(false);
      const touchDeg = vue.ref(0);
      const touchTime = vue.ref(0);
      const DEFAULT_DURATION = 200;
      const INERTIA_TIME = 300;
      const INERTIA_DISTANCE = 15;
      const touchRollerStyle = vue.computed(() => {
        return {
          transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
          transform: `rotate3d(1, 0, 0, ${touchDeg.value})`,
          top: `calc(50% - ${+props.optionHeight / 2}px)`
        };
      });
      const touchTileStyle = vue.computed(() => {
        const { optionHeight } = props;
        return {
          transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
          transform: `translate3d(0, ${state.scrollDistance}px, 0)`,
          top: `calc(50% - ${+optionHeight / 2}px)`,
          height: `${optionHeight}px`
        };
      });
      const setRollerStyle = (index) => {
        return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`;
      };
      const maskStyles = vue.computed(() => {
        return {
          backgroundSize: `100% ${(+props.visibleOptionNum - 1) * +props.optionHeight / 2}px`
        };
      });
      const onTouchStart = (event) => {
        touch.start(event);
        if (moving.value && !props.taro) {
          const dom = roller.value;
          const { transform } = window.getComputedStyle(dom);
          if (props.threeDimensional) {
            const circle = Math.floor(parseInt(touchDeg.value) / 360);
            const cos = +transform.split(", ")[5];
            const sin = +transform.split(", ")[6] < 0 ? 180 : 0;
            const endDeg = circle * 360 + Math.acos(cos) / Math.PI * 180 + sin;
            state.scrollDistance = -Math.abs((endDeg / state.rotation - 1) * +props.optionHeight);
          } else {
            state.scrollDistance = +transform.slice(7, transform.length - 1).split(", ")[5];
          }
        }
        preventDefault(event, true);
        state.touchParams.startY = touch.deltaY.value;
        state.touchParams.startTime = Date.now();
        state.transformY = state.scrollDistance;
      };
      const onTouchMove = (event) => {
        touch.move(event);
        if (touch.isVertical()) {
          moving.value = true;
          preventDefault(event, true);
        }
        state.touchParams.lastY = touch.deltaY.value;
        let move = state.touchParams.lastY - state.touchParams.startY;
        setMove(move);
      };
      const onTouchEnd = () => {
        state.touchParams.lastY = touch.deltaY.value;
        state.touchParams.lastTime = Date.now();
        let move = state.touchParams.lastY - state.touchParams.startY;
        let moveTime = state.touchParams.lastTime - state.touchParams.startTime;
        if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
          const distance = momentum(move, moveTime);
          setMove(distance, "end", +props.swipeDuration);
          return;
        } else {
          setMove(move, "end");
        }
        setTimeout(() => {
          touch.reset();
          moving.value = false;
        }, 0);
      };
      const momentum = (distance, duration) => {
        const speed = Math.abs(distance / duration);
        distance = speed / 3e-3 * (distance < 0 ? -1 : 1);
        return distance;
      };
      const isHidden = (index) => {
        if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
          return true;
        } else {
          return false;
        }
      };
      const setTransform = (translateY = 0, type, time = DEFAULT_DURATION, deg) => {
        if (type === "end") {
          touchTime.value = time;
        } else {
          touchTime.value = 0;
        }
        touchDeg.value = deg;
        state.scrollDistance = translateY;
      };
      const setMove = (move, type, time) => {
        const { optionHeight } = props;
        let updateMove = move + state.transformY;
        if (type === "end") {
          if (updateMove > 0) {
            updateMove = 0;
          }
          if (updateMove < -(props.column.length - 1) * +optionHeight) {
            updateMove = -(props.column.length - 1) * +optionHeight;
          }
          let endMove = Math.round(updateMove / +optionHeight) * +optionHeight;
          let deg = `${(Math.abs(Math.round(endMove / +optionHeight)) + 1) * state.rotation}deg`;
          setTransform(endMove, type, time, deg);
          state.currIndex = Math.abs(Math.round(endMove / +optionHeight)) + 1;
        } else {
          let deg = 0;
          let currentDeg = (-updateMove / +optionHeight + 1) * state.rotation;
          const maxDeg = (props.column.length + 1) * state.rotation;
          const minDeg = 0;
          deg = clamp(currentDeg, minDeg, maxDeg);
          if (minDeg < deg && deg < maxDeg) {
            setTransform(updateMove, null, void 0, deg + "deg");
            state.currIndex = Math.abs(Math.round(updateMove / +optionHeight)) + 1;
          }
        }
      };
      const setChooseValue = () => {
        emit("change", props.column[state.currIndex - 1]);
      };
      const modifyStatus = (type) => {
        const { column } = props;
        let index = column.findIndex((columnItem) => columnItem[props.fieldNames.value] === props.value);
        state.currIndex = index === -1 ? 1 : index + 1;
        let move = index === -1 ? 0 : index * +props.optionHeight;
        type && setChooseValue();
        setMove(-move);
      };
      const stopMomentum = () => {
        moving.value = false;
        touchTime.value = 0;
        setChooseValue();
      };
      vue.watch(
        () => props.column,
        () => {
          if (props.column && props.column.length > 0) {
            state.transformY = 0;
            modifyStatus(false);
          }
        },
        {
          deep: true
        }
      );
      vue.watch(
        () => props.value,
        () => {
          state.transformY = 0;
          modifyStatus(false);
        },
        {
          deep: true
        }
      );
      vue.onMounted(() => {
        modifyStatus(true);
      });
      return __spreadProps(__spreadValues(__spreadValues({}, vue.toRefs(state)), vue.toRefs(props)), {
        setRollerStyle,
        isHidden,
        roller,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        touchRollerStyle,
        touchTileStyle,
        setMove,
        stopMomentum,
        pxCheck,
        maskStyles
      });
    }
  });
  function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-picker__list",
      onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
      onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
      onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
    }, [
      vue.createElementVNode("view", {
        ref: "roller",
        class: "nut-picker-roller",
        style: vue.normalizeStyle(_ctx.threeDimensional ? _ctx.touchRollerStyle : _ctx.touchTileStyle),
        onTransitionend: _cache[0] || (_cache[0] = (...args) => _ctx.stopMomentum && _ctx.stopMomentum(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.column, (item, index) => {
          var _a;
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: (_a = item[_ctx.fieldNames.value]) != null ? _a : index
          }, [
            item && item[_ctx.fieldNames.text] && _ctx.threeDimensional ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: vue.normalizeClass(["nut-picker-roller-item", { "nut-picker-roller-item-hidden": _ctx.isHidden(index + 1) }]),
              style: vue.normalizeStyle(_ctx.setRollerStyle(index + 1))
            }, vue.toDisplayString(item[_ctx.fieldNames.text]), 7)) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            item && item[_ctx.fieldNames.text] && !_ctx.threeDimensional ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "nut-picker-roller-item-tile",
              style: vue.normalizeStyle({ height: _ctx.pxCheck(_ctx.optionHeight), lineHeight: _ctx.pxCheck(_ctx.optionHeight) })
            }, vue.toDisplayString(item[_ctx.fieldNames.text]), 5)) : vue.createCommentVNode("", true)
          ], 64);
        }), 128))
      ], 36),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: "nut-picker-roller-mask",
        style: vue.normalizeStyle(_ctx.maskStyles)
      }, null, 4)
    ], 32);
  }
  const NutPickerColumn = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$15]]);
  const baseProps = {
    modelValue: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    threeDimensional: {
      type: Boolean,
      default: false
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({})
    }
  };
  const { create: create$17 } = createComponent("picker");
  const cN$i = "NutPicker";
  const _sfc_main$17 = create$17({
    components: {
      NutPickerColumn
    },
    props: baseProps,
    emits: ["cancel", "change", "confirm", "update:modelValue"],
    setup(props, { emit }) {
      const translate = useLocale(cN$i);
      const {
        changeHandler,
        confirm,
        defaultValues,
        defaultIndexes,
        columnsList,
        columnsType,
        columnFieldNames,
        cancel
      } = usePicker(props, emit);
      const state = vue.reactive({
        show: false,
        picking: false,
        ENV: Taro.getEnv(),
        ENV_TYPE: Taro.ENV_TYPE
      });
      const pickerColumn = vue.ref([]);
      const swipeRef = (el) => {
        if (el && pickerColumn.value.length < columnsList.value.length) {
          pickerColumn.value.push(el);
        }
      };
      const confirmHandler = () => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          pickerColumn.value.length > 0 && pickerColumn.value.forEach((column) => {
            column.stopMomentum();
          });
          confirm();
        } else {
          if (state.picking) {
            setTimeout(() => {
              confirm();
            }, 0);
          } else {
            confirm();
          }
        }
      };
      const pickerViewStyles = vue.computed(() => {
        const styles = {};
        styles.height = `${+props.visibleOptionNum * +props.optionHeight}px`;
        styles["--lineHeight"] = `${+props.optionHeight}px`;
        return styles;
      });
      const tileChange = (data) => {
        var _a, _b;
        const prevDefaultValue = defaultIndexes.value;
        let changeIndex = 0;
        for (let i = 0; i < ((_a = data.detail.value) == null ? void 0 : _a.length); i++) {
          if (prevDefaultValue[i] !== ((_b = data.detail.value) == null ? void 0 : _b[i])) {
            changeIndex = i;
            break;
          }
        }
        changeHandler(changeIndex, columnsList.value[changeIndex][data.detail.value[changeIndex]]);
      };
      const handlePickstart = () => {
        state.picking = true;
      };
      const handlePickend = () => {
        state.picking = false;
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        columnsType,
        columnsList,
        columnFieldNames,
        cancel,
        changeHandler,
        confirmHandler,
        defaultValues,
        pickerColumn,
        swipeRef,
        defaultIndexes,
        tileChange,
        handlePickstart,
        translate,
        handlePickend,
        pickerViewStyles,
        pxCheck
      });
    }
  });
  const _hoisted_1$W = { class: "nut-picker" };
  const _hoisted_2$J = {
    key: 0,
    class: "nut-picker__bar"
  };
  const _hoisted_3$y = { class: "nut-picker__title" };
  const _hoisted_4$v = ["indicator-style", "value"];
  const _hoisted_5$l = ["filed-names"];
  function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_picker_column = vue.resolveComponent("nut-picker-column");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$W, [
      _ctx.showToolbar ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$J, [
        vue.createElementVNode("view", {
          class: "nut-picker__cancel nut-picker__left nut-picker__button",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.cancel && _ctx.cancel(...args))
        }, vue.toDisplayString(_ctx.cancelText || _ctx.translate("cancel")), 1),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_3$y, vue.toDisplayString(_ctx.title), 1),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: "nut-picker__confirm nut-picker__right nut-picker__button",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.confirmHandler && _ctx.confirmHandler(...args))
        }, vue.toDisplayString(_ctx.okText || _ctx.translate("confirm")), 1)
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "top"),
      vue.createTextVNode(),
      _ctx.ENV != _ctx.ENV_TYPE.WEB ? (vue.openBlock(), vue.createElementBlock("picker-view", vue.mergeProps({
        key: 1,
        "indicator-style": `height:${_ctx.optionHeight}px`,
        value: _ctx.defaultIndexes,
        style: _ctx.pickerViewStyles
      }, _ctx.$attrs, {
        "immediate-change": true,
        onChange: _cache[2] || (_cache[2] = (...args) => _ctx.tileChange && _ctx.tileChange(...args)),
        onPickstart: _cache[3] || (_cache[3] = (...args) => _ctx.handlePickstart && _ctx.handlePickstart(...args)),
        onPickend: _cache[4] || (_cache[4] = (...args) => _ctx.handlePickend && _ctx.handlePickend(...args))
      }), [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columnsList, (column, columnIndex) => {
          return vue.openBlock(), vue.createElementBlock("picker-view-column", {
            key: columnIndex,
            "filed-names": _ctx.columnFieldNames
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(column, (item, index) => {
              var _a;
              return vue.openBlock(), vue.createElementBlock("view", {
                key: (_a = item[_ctx.columnFieldNames.value]) != null ? _a : index,
                class: "nut-picker-roller-item-tarotile",
                style: vue.normalizeStyle({
                  lineHeight: _ctx.pxCheck(_ctx.optionHeight)
                })
              }, vue.toDisplayString(item[_ctx.columnFieldNames.text]), 5);
            }), 128))
          ], 8, _hoisted_5$l);
        }), 128))
      ], 16, _hoisted_4$v)) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "nut-picker__column",
        style: vue.normalizeStyle(_ctx.pickerViewStyles)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columnsList, (column, columnIndex) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: columnIndex,
            class: "nut-picker__columnitem"
          }, [
            vue.createVNode(_component_nut_picker_column, {
              ref_for: true,
              ref: _ctx.swipeRef,
              column,
              "columns-type": _ctx.columnsType,
              "field-names": _ctx.columnFieldNames,
              value: _ctx.defaultValues[columnIndex],
              "three-dimensional": false,
              "swipe-duration": _ctx.swipeDuration,
              "visible-option-num": _ctx.visibleOptionNum,
              "option-height": _ctx.optionHeight,
              taro: "",
              onChange: (option) => {
                _ctx.changeHandler(columnIndex, option);
              }
            }, null, 8, ["column", "columns-type", "field-names", "value", "swipe-duration", "visible-option-num", "option-height", "onChange"])
          ]);
        }), 128))
      ], 4)),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const Picker = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$14]]);
  const { create: create$16 } = createComponent("date-picker");
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  function isDate(val) {
    return isDate$1(val) && !isNaN(val.getTime());
  }
  const zhCNType = {
    day: "日",
    year: "年",
    month: "月",
    hour: "时",
    minute: "分",
    seconds: "秒"
  };
  const _sfc_main$16 = create$16({
    components: {
      NutPicker: Picker
    },
    props: {
      modelValue: null,
      title: {
        type: String,
        default: ""
      },
      okText: {
        type: String,
        default: ""
      },
      cancelText: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "date"
      },
      isShowChinese: {
        type: Boolean,
        default: false
      },
      minuteStep: {
        type: Number,
        default: 1
      },
      minDate: {
        type: Date,
        default: () => new Date(currentYear - 10, 0, 1),
        validator: isDate
      },
      maxDate: {
        type: Date,
        default: () => new Date(currentYear + 10, 11, 31),
        validator: isDate
      },
      formatter: {
        type: Function,
        default: null
      },
      // 是否开启3D效果
      threeDimensional: {
        type: Boolean,
        default: true
      },
      // 惯性滚动 时长
      swipeDuration: {
        type: [Number, String],
        default: 1e3
      },
      filter: Function,
      showToolbar: {
        type: Boolean,
        default: true
      },
      visibleOptionNum: {
        type: [Number, String],
        default: 7
      },
      optionHeight: {
        type: [Number, String],
        default: 36
      }
    },
    emits: ["click", "cancel", "change", "confirm", "update:modelValue"],
    setup(props, { emit }) {
      const state = vue.reactive({
        currentDate: /* @__PURE__ */ new Date(),
        title: props.title,
        selectedValue: []
      });
      const formatValue = (value) => {
        if (!isDate(value)) {
          value = props.minDate;
        }
        let timestmp = Math.max(value.getTime(), props.minDate.getTime());
        timestmp = Math.min(timestmp, props.maxDate.getTime());
        return new Date(timestmp);
      };
      function getMonthEndDay(year, month) {
        return 32 - new Date(year, month - 1, 32).getDate();
      }
      const getBoundary = (type, value) => {
        const boundary = type == "min" ? props.minDate : props.maxDate;
        const year = boundary.getFullYear();
        let month = 1;
        let date = 1;
        let hour = 0;
        let minute = 0;
        if (type === "max") {
          month = 12;
          date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
          hour = 23;
          minute = 59;
        }
        const seconds = minute;
        if (value.getFullYear() === year) {
          month = boundary.getMonth() + 1;
          if (value.getMonth() + 1 === month) {
            date = boundary.getDate();
            if (value.getDate() === date) {
              hour = boundary.getHours();
              if (value.getHours() === hour) {
                minute = boundary.getMinutes();
              }
            }
          }
        }
        return {
          [`${type}Year`]: year,
          [`${type}Month`]: month,
          [`${type}Date`]: date,
          [`${type}Hour`]: hour,
          [`${type}Minute`]: minute,
          [`${type}Seconds`]: seconds
        };
      };
      const ranges = vue.computed(() => {
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } = getBoundary("max", state.currentDate);
        const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } = getBoundary("min", state.currentDate);
        let result = [
          {
            type: "year",
            range: [minYear, maxYear]
          },
          {
            type: "month",
            range: [minMonth, maxMonth]
          },
          {
            type: "day",
            range: [minDate, maxDate]
          },
          {
            type: "hour",
            range: [minHour, maxHour]
          },
          {
            type: "minute",
            range: [minMinute, maxMinute]
          },
          {
            type: "seconds",
            range: [minSeconds, maxSeconds]
          }
        ];
        return generateList(result);
      });
      const columns = vue.computed(() => {
        const val = ranges.value.map((res, columnIndex) => {
          return generateValue(res.range[0], res.range[1], getDateIndex(res.type), res.type, columnIndex);
        });
        return val;
      });
      const changeHandler = ({
        columnIndex,
        selectedValue,
        selectedOptions
      }) => {
        if (["date", "datetime", "datehour", "month-day", "year-month"].includes(props.type)) {
          let formatDate = [];
          selectedValue.forEach((item) => {
            formatDate.push(item);
          });
          if (props.type == "month-day" && formatDate.length < 3) {
            formatDate.unshift(new Date(state.currentDate || props.minDate || props.maxDate).getFullYear());
          }
          if (props.type == "year-month" && formatDate.length < 3) {
            formatDate.push(new Date(state.currentDate || props.minDate || props.maxDate).getDate());
          }
          const year = Number(formatDate[0]);
          const month = Number(formatDate[1]) - 1;
          const day = Math.min(Number(formatDate[2]), getMonthEndDay(Number(formatDate[0]), Number(formatDate[1])));
          let date = null;
          if (props.type === "date" || props.type === "month-day" || props.type === "year-month") {
            date = new Date(year, month, day);
          } else if (props.type === "datetime") {
            date = new Date(year, month, day, Number(formatDate[3]), Number(formatDate[4]));
          } else if (props.type === "datehour") {
            date = new Date(year, month, day, Number(formatDate[3]));
          }
          state.currentDate = formatValue(date);
        }
        emit("change", { columnIndex, selectedValue, selectedOptions });
      };
      const formatterOption = (type, value) => {
        const { formatter, isShowChinese } = props;
        let fOption = null;
        if (formatter) {
          fOption = formatter(type, { text: padZero(value, 2), value: padZero(value, 2) });
        } else {
          const padMin = padZero(value, 2);
          const fatter = isShowChinese ? zhCNType[type] : "";
          fOption = { text: padMin + fatter, value: padMin };
        }
        return fOption;
      };
      const generateValue = (min, max, val, type, columnIndex) => {
        const arr = [];
        let index = 0;
        while (min <= max) {
          arr.push(formatterOption(type, min));
          if (type === "minute") {
            min += props.minuteStep;
          } else {
            min++;
          }
          if (min <= +val) {
            index++;
          }
        }
        state.selectedValue[columnIndex] = arr[index].value;
        return props.filter ? props.filter(type, arr) : arr;
      };
      const getDateIndex = (type) => {
        if (type === "year") {
          return state.currentDate.getFullYear();
        } else if (type === "month") {
          return state.currentDate.getMonth() + 1;
        } else if (type === "day") {
          return state.currentDate.getDate();
        } else if (type === "hour") {
          return state.currentDate.getHours();
        } else if (type === "minute") {
          return state.currentDate.getMinutes();
        } else if (type === "seconds") {
          return state.currentDate.getSeconds();
        }
        return 0;
      };
      const closeHandler = (val) => {
        emit("cancel", val);
      };
      const confirm = (val) => {
        emit("confirm", val);
      };
      const generateList = (list) => {
        switch (props.type) {
          case "date":
            list = list.slice(0, 3);
            break;
          case "datetime":
            list = list.slice(0, 5);
            break;
          case "time":
            list = list.slice(3, 6);
            break;
          case "year-month":
            list = list.slice(0, 2);
            break;
          case "month-day":
            list = list.slice(1, 3);
            break;
          case "datehour":
            list = list.slice(0, 4);
            break;
          case "hour-minute":
            list = list.slice(3, 5);
            break;
        }
        return list;
      };
      const getSelectedValue = (time) => {
        const res = [
          time.getFullYear(),
          time.getMonth() + 1,
          time.getDate(),
          time.getHours(),
          time.getMinutes(),
          time.getSeconds()
        ];
        return generateList(res.map((i) => String(i)));
      };
      vue.onBeforeMount(() => {
        state.currentDate = formatValue(props.modelValue);
      });
      vue.watch(
        () => props.modelValue,
        (value) => {
          const newValues = formatValue(value);
          const isSameValue = JSON.stringify(newValues) === JSON.stringify(state.currentDate);
          if (!isSameValue) {
            state.currentDate = newValues;
            state.selectedValue = getSelectedValue(newValues);
          }
        }
      );
      vue.watch(
        () => state.currentDate,
        (newValues) => {
          const isSameValue = JSON.stringify(newValues) === JSON.stringify(props.modelValue);
          if (!isSameValue) {
            emit("update:modelValue", newValues);
          }
        }
      );
      vue.watch(
        () => props.title,
        (val) => {
          state.title = val;
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        changeHandler,
        closeHandler,
        confirm,
        columns
      });
    }
  });
  function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_picker = vue.resolveComponent("nut-picker");
    return vue.openBlock(), vue.createBlock(_component_nut_picker, {
      modelValue: _ctx.selectedValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectedValue = $event),
      "ok-text": _ctx.okText,
      "cancel-text": _ctx.cancelText,
      columns: _ctx.columns,
      title: _ctx.title,
      "three-dimensional": _ctx.threeDimensional,
      "swipe-duration": _ctx.swipeDuration,
      "show-toolbar": _ctx.showToolbar,
      "visible-option-num": _ctx.visibleOptionNum,
      "option-height": _ctx.optionHeight,
      onCancel: _ctx.closeHandler,
      onChange: _ctx.changeHandler,
      onConfirm: _ctx.confirm
    }, {
      top: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "top")
      ]),
      default: vue.withCtx(() => [
        vue.createTextVNode(),
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
  }
  const DatePicker = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$13]]);
  const { componentName: componentName$d, create: create$15 } = createComponent("input-number");
  const _sfc_main$15 = create$15({
    components: { Minus: iconsVueTaro.Minus, Plus: iconsVueTaro.Plus },
    props: {
      modelValue: {
        type: [Number, String],
        default: 0
      },
      inputWidth: {
        type: [Number, String],
        default: ""
      },
      buttonSize: {
        type: [Number, String],
        default: ""
      },
      min: {
        type: [Number, String],
        default: 1
      },
      max: {
        type: [Number, String],
        default: 9999
      },
      step: {
        type: [Number, String],
        default: 1
      },
      decimalPlaces: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
    setup(props, { emit }) {
      const classes = vue.computed(() => {
        const prefixCls = componentName$d;
        return {
          [prefixCls]: true,
          [`${prefixCls}--disabled`]: props.disabled
        };
      });
      const fixedDecimalPlaces = (v) => {
        return Number(v).toFixed(Number(props.decimalPlaces));
      };
      const change = (event) => {
        const input = event.target;
        emit("update:modelValue", input.value, event);
      };
      const emitChange = (value, event) => {
        let output_value = fixedDecimalPlaces(value);
        emit("update:modelValue", output_value, event);
        if (Number(props.modelValue) !== Number(output_value))
          emit("change", output_value, event);
      };
      const addAllow = (value = Number(props.modelValue)) => {
        return value < Number(props.max) && !props.disabled;
      };
      const reduceAllow = (value = Number(props.modelValue)) => {
        return value > Number(props.min) && !props.disabled;
      };
      const reduce = (event) => {
        if (props.disabled)
          return;
        emit("reduce", event);
        let output_value = Number(props.modelValue) - Number(props.step);
        if (reduceAllow() && output_value >= Number(props.min)) {
          emitChange(output_value, event);
        } else {
          emitChange(Number(props.min), event);
          emit("overlimit", event, "reduce");
        }
      };
      const add = (event) => {
        if (props.disabled)
          return;
        emit("add", event);
        let output_value = Number(props.modelValue) + Number(props.step);
        if (addAllow() && output_value <= Number(props.max)) {
          emitChange(output_value, event);
        } else {
          emitChange(Number(props.max), event);
          emit("overlimit", event, "add");
        }
      };
      const focus = (event) => {
        if (props.disabled)
          return;
        if (props.readonly) {
          blur(event);
          return;
        }
        emit("focus", event);
      };
      const blur = (event) => {
        if (props.disabled)
          return;
        if (props.readonly)
          return;
        const input = event.target;
        let value = Number(input.value);
        if (value < Number(props.min)) {
          value = Number(props.min);
        } else if (value > Number(props.max)) {
          value = Number(props.max);
        }
        emitChange(value, event);
        emit("blur", event);
      };
      const format = (val) => {
        let value = Number(val);
        if (value < Number(props.min)) {
          value = Number(props.min);
        } else if (value > Number(props.max)) {
          value = Number(props.max);
        }
        return value;
      };
      vue.watch(
        () => [props.max, props.min],
        () => {
          if (Number(props.min) > Number(props.max)) {
            console.warn("[NutUI] <InputNumber>", "props.max < props.min");
          }
          const value = format(props.modelValue);
          if (value !== Number(props.modelValue)) {
            emitChange(value, {});
          }
        }
      );
      return {
        classes,
        change,
        blur,
        focus,
        add,
        addAllow,
        reduce,
        reduceAllow,
        pxCheck
      };
    }
  });
  const _hoisted_1$V = {
    key: 0,
    class: "nut-input-number__text--readonly"
  };
  const _hoisted_2$I = ["min", "max", "disabled", "readonly", "value"];
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Minus = vue.resolveComponent("Minus");
    const _component_Plus = vue.resolveComponent("Plus");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !_ctx.reduceAllow() }]),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.reduce && _ctx.reduce(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "left-icon", {}, () => [
          vue.createVNode(_component_Minus, {
            size: _ctx.pxCheck(_ctx.buttonSize)
          }, null, 8, ["size"])
        ])
      ], 2),
      vue.createTextVNode(),
      _ctx.readonly ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$V, vue.toDisplayString(_ctx.modelValue), 1)) : (vue.openBlock(), vue.createElementBlock("input", {
        key: 1,
        class: "nut-input-number__text--input",
        type: "number",
        min: _ctx.min,
        max: _ctx.max,
        style: vue.normalizeStyle({ width: _ctx.pxCheck(_ctx.inputWidth), height: _ctx.pxCheck(_ctx.buttonSize) }),
        disabled: _ctx.disabled,
        readonly: _ctx.readonly,
        value: _ctx.modelValue,
        onInput: _cache[1] || (_cache[1] = (...args) => _ctx.change && _ctx.change(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.blur && _ctx.blur(...args)),
        onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.focus && _ctx.focus(...args))
      }, null, 44, _hoisted_2$I)),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !_ctx.addAllow() }]),
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.add && _ctx.add(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "right-icon", {}, () => [
          vue.createVNode(_component_Plus, {
            size: _ctx.pxCheck(_ctx.buttonSize)
          }, null, 8, ["size"])
        ])
      ], 2)
    ], 2);
  }
  const InputNumber = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$12]]);
  function trimExtraChar(value, char, regExp) {
    const index = value.indexOf(char);
    if (index === -1) {
      return value;
    }
    if (char === "-" && index !== 0) {
      return value.slice(0, index);
    }
    return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
  }
  function formatNumber(value, allowDot = true, allowMinus = true) {
    if (allowDot) {
      value = trimExtraChar(value, ".", /\./g);
    } else {
      value = value.split(".")[0];
    }
    if (allowMinus) {
      value = trimExtraChar(value, "-", /-/g);
    } else {
      value = value.replace(/-/, "");
    }
    const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
    return value.replace(regExp, "");
  }
  const { componentName: componentName$c, create: create$14 } = createComponent("input");
  const _sfc_main$14 = create$14({
    inheritAttrs: false,
    props: {
      type: {
        type: String,
        default: "text"
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: String,
        default: ""
      },
      inputAlign: {
        type: String,
        default: "left"
      },
      required: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: Boolean,
        default: false
      },
      maxLength: {
        type: [String, Number],
        default: ""
      },
      clearable: {
        type: Boolean,
        default: false
      },
      clearSize: {
        type: [String, Number],
        default: "14"
      },
      border: {
        type: Boolean,
        default: true
      },
      formatTrigger: {
        type: String,
        default: "onChange"
      },
      formatter: {
        type: Function,
        default: null
      },
      showWordLimit: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      confirmType: {
        type: String,
        default: "done"
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      alwaysSystem: {
        type: Boolean,
        default: false
      },
      showClearIcon: {
        type: Boolean,
        default: false
      },
      class: {
        type: String,
        default: ""
      }
    },
    components: { MaskClose: iconsVueTaro.MaskClose },
    emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
    setup(props, { emit }) {
      const active = vue.ref(false);
      const inputRef = vue.ref();
      const getModelValue = () => {
        var _a;
        return String((_a = props.modelValue) != null ? _a : "");
      };
      const renderInput = (type) => {
        let inputType = { type };
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (type === "number") {
            inputType = {
              type: "tel",
              inputmode: "numeric"
            };
          }
          if (type === "digit") {
            inputType = {
              type: "text",
              inputmode: "decimal"
            };
          }
        }
        return vue.h("input", inputType);
      };
      const state = vue.reactive({
        focused: false,
        validateFailed: false,
        // 校验失败
        validateMessage: ""
        // 校验信息
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName$c;
        return {
          [prefixCls]: true,
          [`${prefixCls}--disabled`]: props.disabled,
          [`${prefixCls}--required`]: props.required,
          [`${prefixCls}--error`]: props.error,
          [`${prefixCls}--border`]: props.border,
          [props.class]: !!props.class
        };
      });
      const styles = vue.computed(() => {
        return {
          textAlign: props.inputAlign
        };
      });
      const onInput = (event) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (!event.target.composing) {
            _onInput(event);
          }
        } else {
          _onInput(event);
        }
      };
      const _onInput = (event) => {
        const input = event.target;
        let value = input.value;
        updateValue(value);
      };
      const updateValue = (value, trigger = "onChange") => {
        emit("update:modelValue", value);
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        if (["number", "digit"].includes(props.type)) {
          const isDigit = props.type === "digit";
          value = formatNumber(value, isDigit, isDigit);
        }
        if (props.formatter && trigger === props.formatTrigger) {
          value = props.formatter(value);
        }
        if (value !== props.modelValue) {
          emit("update:modelValue", value);
        }
      };
      const onFocus = (event) => {
        if (props.disabled || props.readonly) {
          return;
        }
        active.value = true;
        emit("focus", event);
      };
      const onBlur = (event) => {
        if (props.disabled || props.readonly) {
          return;
        }
        setTimeout(() => {
          active.value = false;
        }, 200);
        const input = event.target;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        updateValue(getModelValue(), "onBlur");
        emit("blur", event);
      };
      const clear = (event) => {
        event.stopPropagation();
        if (props.disabled)
          return;
        emit("update:modelValue", "", event);
        emit("clear", "", event);
      };
      const resetValidation = () => {
        if (state.validateFailed) {
          state.validateFailed = false;
          state.validateMessage = "";
        }
      };
      const onClickInput = (event) => {
        if (props.disabled) {
          return;
        }
        emit("clickInput", event);
      };
      const onClick = (event) => {
        emit("click", event);
      };
      const startComposing = ({ target }) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          target.composing = true;
        }
      };
      const endComposing = ({ target }) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (target.composing) {
            target.composing = false;
            target.dispatchEvent(new Event("input"));
          }
        }
      };
      const onKeyup = (e) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB && e.key === "Enter") {
          emit("confirm", e);
        }
      };
      const onConfirm = (e) => {
        emit("confirm", e);
      };
      vue.watch(
        () => props.modelValue,
        () => {
          updateValue(getModelValue());
          resetValidation();
        }
      );
      vue.onMounted(() => {
        if (props.autofocus) {
          inputRef.value.focus();
        }
        updateValue(getModelValue(), props.formatTrigger);
      });
      return {
        renderInput,
        inputRef,
        active,
        classes,
        styles,
        onInput,
        onFocus,
        onBlur,
        clear,
        startComposing,
        endComposing,
        onClick,
        onClickInput,
        onConfirm,
        onKeyup,
        getModelValue
      };
    }
  });
  const _hoisted_1$U = { class: "nut-input-value" };
  const _hoisted_2$H = { class: "nut-input-inner" };
  const _hoisted_3$x = {
    key: 0,
    class: "nut-input-left-box"
  };
  const _hoisted_4$u = { class: "nut-input-box" };
  const _hoisted_5$k = {
    key: 1,
    class: "nut-input-word-limit"
  };
  const _hoisted_6$h = { class: "nut-input-word-num" };
  const _hoisted_7$f = { class: "nut-input-right-box" };
  function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_MaskClose = vue.resolveComponent("MaskClose");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, [
      vue.createElementVNode("view", _hoisted_1$U, [
        vue.createElementVNode("view", _hoisted_2$H, [
          _ctx.$slots.left ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$x, [
            vue.renderSlot(_ctx.$slots, "left")
          ])) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_4$u, [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderInput(_ctx.type)), vue.mergeProps(_ctx.$attrs, {
              ref: "inputRef",
              class: "input-text",
              style: _ctx.styles,
              maxlength: _ctx.maxLength ? _ctx.maxLength : void 0,
              placeholder: _ctx.placeholder,
              disabled: _ctx.disabled,
              readonly: _ctx.readonly,
              value: _ctx.modelValue,
              "format-trigger": _ctx.formatTrigger,
              autofocus: _ctx.autofocus ? true : void 0,
              enterkeyhint: _ctx.confirmType,
              "adjust-position": _ctx.adjustPosition,
              "always-system": _ctx.alwaysSystem,
              onInput: _ctx.onInput,
              onFocus: _ctx.onFocus,
              onBlur: _ctx.onBlur,
              onClick: _ctx.onClickInput,
              onChange: _ctx.endComposing,
              onCompositionend: _ctx.endComposing,
              onCompositionstart: _ctx.startComposing,
              onConfirm: _ctx.onConfirm,
              onKeyup: _ctx.onKeyup
            }), null, 16, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint", "adjust-position", "always-system", "onInput", "onFocus", "onBlur", "onClick", "onChange", "onCompositionend", "onCompositionstart", "onConfirm", "onKeyup"])),
            vue.createTextVNode(),
            _ctx.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "nut-input-disabled-mask",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickInput && _ctx.onClickInput(...args))
            })) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            _ctx.showWordLimit && _ctx.maxLength ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$k, [
              vue.createElementVNode("span", _hoisted_6$h, vue.toDisplayString(_ctx.getModelValue() ? _ctx.getModelValue().length : 0), 1),
              vue.createTextVNode("/" + vue.toDisplayString(_ctx.maxLength), 1)
            ])) : vue.createCommentVNode("", true)
          ]),
          vue.createTextVNode(),
          _ctx.clearable && !_ctx.readonly ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "nut-input-clear-box",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.clear && _ctx.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clear", {}, () => [
              vue.createVNode(_component_MaskClose, {
                class: "nut-input-clear",
                size: _ctx.clearSize,
                width: _ctx.clearSize,
                height: _ctx.clearSize
              }, null, 8, ["size", "width", "height"])
            ])
          ], 512)), [
            [vue.vShow, (_ctx.active || _ctx.showClearIcon) && _ctx.getModelValue().length > 0]
          ]) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_7$f, [
            vue.renderSlot(_ctx.$slots, "right")
          ])
        ])
      ])
    ], 2);
  }
  const Input = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$11]]);
  const RADIO_KEY = Symbol("nut-radio");
  const { componentName: componentName$b, create: create$13 } = createComponent("radio");
  const _sfc_main$13 = create$13({
    components: {
      CheckNormal: iconsVueTaro.CheckNormal,
      CheckChecked: iconsVueTaro.CheckChecked
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: "round"
      },
      label: {
        type: [String, Number, Boolean],
        default: ""
      },
      iconSize: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "normal"
      }
    },
    setup(props, { slots }) {
      const { size } = vue.toRefs(props);
      let parent = vue.inject(RADIO_KEY, null);
      const isCurValue = vue.computed(() => {
        return parent.label.value === props.label;
      });
      const color = vue.computed(() => {
        return !props.disabled ? isCurValue.value ? "nut-radio__icon" : "nut-radio__icon--unchecked" : "nut-radio__icon--disable";
      });
      const renderIcon2 = () => {
        const { iconSize } = props;
        const iconNodeMap = {
          CheckNormal: slots.icon ? slots.icon : iconsVueTaro.CheckNormal,
          Checked: slots.checkedIcon ? slots.checkedIcon : iconsVueTaro.CheckChecked
        };
        const iconNode = !isCurValue.value ? iconNodeMap.CheckNormal : iconNodeMap.Checked;
        const size2 = pxCheck(iconSize);
        return vue.h(iconNode, {
          width: size2,
          height: size2,
          size: size2,
          class: color.value
        });
      };
      const renderLabel = () => {
        var _a;
        return vue.h(
          "view",
          {
            class: `${componentName$b}__label ${props.disabled ? `${componentName$b}__label--disabled` : ""}`
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
      const renderButton = () => {
        var _a;
        return vue.h(
          "view",
          {
            class: `${componentName$b}__button ${isCurValue.value && `${componentName$b}__button--active`} ${componentName$b}__button--${size.value} ${props.disabled ? `${componentName$b}__button--disabled` : ""}`
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
      const handleClick = () => {
        if (isCurValue.value || props.disabled)
          return;
        parent.updateValue(props.label);
      };
      const reverseState = vue.computed(() => parent.position.value === "left");
      return () => {
        return vue.h(
          "view",
          {
            class: `${componentName$b} ${componentName$b}--${props.shape} ${reverseState.value ? `${componentName$b}--reverse` : ""}`,
            onClick: handleClick
          },
          [props.shape == "button" ? renderButton() : [renderIcon2(), renderLabel()]]
        );
      };
    }
  });
  const { componentName: componentName$a, create: create$12 } = createComponent("radio-group");
  const _sfc_main$12 = create$12({
    props: {
      modelValue: {
        type: [Number, String, Boolean],
        default: ""
      },
      direction: {
        type: String,
        default: "vertical"
      },
      textPosition: {
        type: String,
        default: "right"
      }
    },
    emits: ["change", "update:modelValue"],
    setup(props, { emit, slots }) {
      const updateValue = (value) => emit("update:modelValue", value);
      vue.provide(RADIO_KEY, {
        label: vue.readonly(vue.computed(() => props.modelValue)),
        position: vue.readonly(vue.computed(() => props.textPosition)),
        updateValue
      });
      vue.watch(
        () => props.modelValue,
        (value) => emit("change", value)
      );
      return () => {
        var _a;
        return vue.h(
          "view",
          {
            class: `${componentName$a} ${componentName$a}--${props.direction}`
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
    }
  });
  const { create: create$11 } = createComponent("rate");
  const _sfc_main$11 = create$11({
    props: {
      count: {
        type: [String, Number],
        default: 5
      },
      modelValue: {
        type: [String, Number],
        default: 0
      },
      customIcon: {
        type: Object,
        default: () => {
          return iconsVueTaro.StarFillN;
        }
      },
      size: {
        type: [String, Number],
        default: void 0
      },
      activeColor: {
        type: String,
        default: ""
      },
      voidColor: {
        type: String,
        default: ""
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      allowHalf: {
        type: Boolean,
        default: false
      },
      spacing: {
        type: [String, Number],
        default: void 0
      }
    },
    components: { StarFillN: iconsVueTaro.StarFillN },
    emits: ["update:modelValue", "change"],
    setup(props, { emit, slots }) {
      const rateRefs = vue.ref([]);
      const updateVal = (value) => {
        emit("update:modelValue", value);
        emit("change", value);
      };
      const onClick = (e, index) => {
        if (props.disabled || props.readonly)
          return;
        let value = 0;
        if (index === 1 && props.modelValue === index) {
          value = 0;
        } else {
          value = index;
          if (props.allowHalf && e == 2) {
            value -= 0.5;
          }
        }
        updateVal(value);
      };
      const refRandomId = Math.random().toString(36).slice(-8);
      return {
        onClick,
        pxCheck,
        rateRefs,
        refRandomId,
        renderIcon,
        slots
      };
    }
  });
  const _hoisted_1$T = { class: "nut-rate" };
  const _hoisted_2$G = ["id"];
  const _hoisted_3$w = { class: "nut-rate-item__icon--full" };
  const _hoisted_4$t = {
    key: 0,
    class: "nut-rate-item__icon--half"
  };
  const _hoisted_5$j = {
    key: 1,
    class: "nut-rate-item__icon--half"
  };
  function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$T, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Number(_ctx.count), (n) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          id: "rateRefs-" + _ctx.refRandomId + n,
          key: n,
          ref_for: true,
          ref: "rateRefs",
          class: "nut-rate-item",
          style: vue.normalizeStyle(n < Number(_ctx.count) ? { marginRight: _ctx.pxCheck(_ctx.spacing) } : {})
        }, [
          vue.createElementVNode("view", _hoisted_3$w, [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(
              _ctx.renderIcon(_ctx.customIcon, {
                width: _ctx.size,
                height: _ctx.size,
                size: _ctx.size,
                color: n <= Number(_ctx.modelValue) ? _ctx.activeColor : _ctx.voidColor
              })
            ), {
              class: vue.normalizeClass(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": _ctx.disabled || n > Number(_ctx.modelValue) }]),
              onClick: ($event) => _ctx.onClick(1, n)
            }, null, 8, ["class", "onClick"]))
          ]),
          vue.createTextVNode(),
          _ctx.allowHalf && Number(_ctx.modelValue) + 1 > n ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$t, [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(
              _ctx.renderIcon(_ctx.customIcon, {
                width: _ctx.size,
                height: _ctx.size,
                size: _ctx.size,
                color: n <= Number(_ctx.modelValue) + 1 ? _ctx.activeColor : _ctx.voidColor
              })
            ), {
              class: "nut-rate-item__icon",
              onClick: ($event) => _ctx.onClick(2, n)
            }, null, 8, ["onClick"]))
          ])) : _ctx.allowHalf && Number(_ctx.modelValue) + 1 < n ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$j, [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(_ctx.customIcon, { width: _ctx.size, height: _ctx.size, size: _ctx.size, color: _ctx.voidColor })), {
              class: "nut-rate-item__icon nut-rate-item__icon--disabled",
              onClick: ($event) => _ctx.onClick(2, n)
            }, null, 8, ["onClick"]))
          ])) : vue.createCommentVNode("", true)
        ], 12, _hoisted_2$G);
      }), 128))
    ]);
  }
  const Rate = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$10]]);
  const { create: create$10 } = createComponent("short-password");
  const cN$h = "NutShortPassword";
  const _sfc_main$10 = create$10({
    components: {
      NutPopup: Popup,
      Tips: iconsVueTaro.Tips
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      desc: {
        type: String,
        default: ""
      },
      tips: {
        type: String,
        default: ""
      },
      visible: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: String,
        default: ""
      },
      errorMsg: {
        type: String,
        default: ""
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      length: {
        type: [String, Number],
        //4～6
        default: 6
      },
      lockScroll: {
        type: Boolean,
        default: true
      }
    },
    emits: ["update:modelValue", "update:visible", "complete", "tips", "close", "focus"],
    setup(props, { emit }) {
      const translate = useLocale(cN$h);
      const realInput = vue.ref(props.modelValue);
      const comLen = vue.computed(() => range(Number(props.length)));
      const show = vue.ref(props.visible);
      function focus(event) {
        event.stopPropagation();
        emit("focus");
      }
      vue.watch(
        () => props.visible,
        (value) => {
          show.value = value;
        }
      );
      vue.watch(
        () => props.modelValue,
        (value) => {
          realInput.value = value;
          if (String(value).length === comLen.value) {
            emit("complete", value);
          }
        }
      );
      function close() {
        emit("update:visible", false);
        emit("close");
      }
      function range(val) {
        return Math.min(Math.max(4, val), 6);
      }
      function onTips() {
        emit("tips");
      }
      vue.onMounted(() => {
        Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
        });
      });
      return {
        comLen,
        realInput,
        range,
        close,
        onTips,
        focus,
        show,
        translate
      };
    }
  });
  const _hoisted_1$S = { class: "nut-short-password" };
  const _hoisted_2$F = { class: "nut-short-password-title" };
  const _hoisted_3$v = { class: "nut-short-password-subtitle" };
  const _hoisted_4$s = { class: "nut-short-password-wrapper" };
  const _hoisted_5$i = {
    key: 0,
    class: "nut-short-password__item-icon"
  };
  const _hoisted_6$g = { class: "nut-short-password__message" };
  const _hoisted_7$e = { class: "nut-short-password--error" };
  function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tips = vue.resolveComponent("tips");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$S, [
      vue.createVNode(_component_nut_popup, {
        visible: _ctx.show,
        "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.show = $event),
        style: {
          padding: "30px 24px 20px 24px",
          borderRadius: "12px",
          textAlign: "center",
          top: "45%"
        },
        closeable: true,
        "close-on-click-overlay": _ctx.closeOnClickOverlay,
        "lock-scroll": _ctx.lockScroll,
        "catch-move": _ctx.lockScroll,
        onClickCloseIcon: _ctx.close,
        onClickOverlay: _ctx.close
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", _hoisted_2$F, vue.toDisplayString(_ctx.title || _ctx.translate("title")), 1),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_3$v, vue.toDisplayString(_ctx.desc || _ctx.translate("desc")), 1),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_4$s, [
            vue.createElementVNode("view", {
              class: "nut-short-password__list",
              onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.focus && _ctx.focus(...args))
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(new Array(_ctx.comLen), (sublen, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "nut-short-password__item"
                }, [
                  String(_ctx.realInput).length > index ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$i)) : vue.createCommentVNode("", true)
                ]);
              }), 128))
            ], 32)
          ]),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_6$g, [
            vue.createElementVNode("view", _hoisted_7$e, vue.toDisplayString(_ctx.errorMsg), 1),
            vue.createTextVNode(),
            _ctx.tips || _ctx.translate("tips") ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "nut-short-password--forget",
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onTips && _ctx.onTips(...args))
            }, [
              vue.createVNode(_component_tips, {
                class: "icon",
                size: "11px"
              }),
              vue.createTextVNode(),
              vue.createElementVNode("view", null, vue.toDisplayString(_ctx.tips || _ctx.translate("tips")), 1)
            ])) : vue.createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "catch-move", "onClickCloseIcon", "onClickOverlay"])
    ]);
  }
  const ShortPassword = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$$]]);
  const { create: create$$ } = createComponent("textarea");
  const cN$g = "NutTextarea";
  const _sfc_main$$ = create$$({
    inheritAttrs: false,
    props: {
      modelValue: {
        type: String,
        default: ""
      },
      textAlign: {
        type: String,
        default: ""
      },
      limitShow: {
        type: Boolean,
        default: false
      },
      maxLength: {
        type: [String, Number],
        default: ""
      },
      rows: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: String,
        default: ""
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue", "change", "blur", "focus"],
    setup(props, { emit }) {
      const translate = useLocale(cN$g);
      const classes = vue.computed(() => {
        const prefixCls = "nut-textarea";
        return {
          [prefixCls]: true,
          [`${prefixCls}--disabled`]: props.disabled
        };
      });
      const styles = vue.computed(() => {
        const styleObj = {
          textAlign: props.textAlign
        };
        if (props.autosize) {
          styleObj["height"] = heightSet.value;
        }
        return styleObj;
      });
      const copyTxtStyle = vue.ref({
        "word-break": "break-all",
        width: "0"
      });
      const emitChange = (value, event) => {
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.substring(0, Number(props.maxLength));
        }
        emit("update:modelValue", value, event);
        emit("change", value, event);
      };
      const change = (event) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (!composing.value) {
            _onInput(event);
          }
        } else {
          _onInput(event);
        }
      };
      const _onInput = (event) => {
        let { value } = event.detail;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        emitChange(value, event);
      };
      const focus = (event) => {
        if (props.disabled)
          return;
        if (props.readonly)
          return;
        emit("focus", event);
      };
      const blur = (event) => {
        if (props.disabled)
          return;
        if (props.readonly)
          return;
        const input = event.target;
        let value = input.value;
        emitChange(value, event);
        emit("blur", event);
      };
      const textareaRef = vue.ref(null);
      const textareaHeight = vue.ref(20);
      const heightSet = vue.ref("auto");
      const getContentHeight = () => {
        heightSet.value = "auto";
        let height = textareaHeight.value;
        if (typeof props.autosize === "object") {
          const { maxHeight, minHeight } = props.autosize;
          if (maxHeight !== void 0) {
            height = Math.min(height, maxHeight);
          }
          if (minHeight !== void 0) {
            height = Math.max(height, minHeight);
          }
        }
        if (height) {
          heightSet.value = height + "px";
        }
      };
      vue.watch(
        () => props.modelValue,
        () => {
          if (props.autosize) {
            setTimeout(() => {
              copyHeight();
            }, 100);
          }
        }
      );
      const copyHeight = () => {
        const query = Taro.createSelectorQuery();
        query.select(".nut-textarea__cpoyText").boundingClientRect();
        query.exec((res) => {
          if (res[0]) {
            if (props.modelValue == "") {
              textareaHeight.value = 20;
            } else {
              textareaHeight.value = res[0]["height"] || 20;
            }
            vue.nextTick(getContentHeight);
          }
        });
      };
      const getRefHeight = () => {
        const query = Taro.createSelectorQuery();
        query.selectAll(".nut-textarea__textarea").boundingClientRect();
        let uid = textareaRef.value ? textareaRef.value.uid : "0";
        query.exec((res) => {
          if (res[0] && textareaRef.value) {
            let _item = Array.from(res[0]).filter((item) => item.id == uid);
            if (_item[0]) {
              if (Taro.getEnv() !== Taro.ENV_TYPE.WEAPP) {
                textareaHeight.value = _item[0]["height"] || 20;
              }
              copyTxtStyle.value.width = _item[0]["width"] + "px";
            }
            vue.nextTick(getContentHeight);
          }
        });
      };
      const getRefWidth = () => {
        const query = Taro.createSelectorQuery();
        query.select(".nut-textarea__textarea").boundingClientRect();
        query.exec((res) => {
          if (res[0] && textareaRef.value) {
            copyTxtStyle.value.width = res[0]["width"] + "px";
          }
        });
      };
      const env = Taro.getEnv();
      vue.onMounted(() => {
        if (props.autosize) {
          Taro.nextTick(() => {
            setTimeout(() => {
              if (Taro.getEnv() === "ALIPAY" || Taro.getEnv() === "WEB") {
                getRefWidth();
                copyHeight();
              } else {
                getRefHeight();
              }
            }, 300);
          });
        }
      });
      const composing = vue.ref(false);
      const startComposing = () => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          composing.value = true;
        }
      };
      const endComposing = ({ target }) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (composing.value) {
            composing.value = false;
            target.dispatchEvent(new Event("input"));
          }
        }
      };
      return {
        env,
        textareaRef,
        classes,
        styles,
        change,
        focus,
        blur,
        translate,
        copyTxtStyle,
        startComposing,
        endComposing
      };
    }
  });
  const _hoisted_1$R = ["rows", "disabled", "value", "maxlength", "placeholder", "auto-focus"];
  const _hoisted_2$E = {
    key: 0,
    class: "nut-textarea__limit"
  };
  function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("textarea", vue.mergeProps({ ref: "textareaRef" }, _ctx.$attrs, {
        class: ["nut-textarea__textarea", _ctx.env == "ALIPAY" && "nut-textarea__ali"],
        style: _ctx.styles,
        rows: _ctx.rows,
        disabled: _ctx.disabled || _ctx.readonly,
        value: _ctx.modelValue,
        "show-count": false,
        maxlength: _ctx.maxLength ? _ctx.maxLength : -1,
        placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
        "auto-focus": _ctx.autofocus,
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.blur && _ctx.blur(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.focus && _ctx.focus(...args)),
        onChange: _cache[3] || (_cache[3] = (...args) => _ctx.endComposing && _ctx.endComposing(...args)),
        onCompositionend: _cache[4] || (_cache[4] = (...args) => _ctx.endComposing && _ctx.endComposing(...args)),
        onCompositionstart: _cache[5] || (_cache[5] = (...args) => _ctx.startComposing && _ctx.startComposing(...args))
      }), null, 16, _hoisted_1$R),
      vue.createTextVNode(),
      _ctx.limitShow ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$E, vue.toDisplayString(_ctx.modelValue ? _ctx.modelValue.length : 0) + "/" + vue.toDisplayString(_ctx.maxLength), 1)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.autosize ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "nut-textarea__cpoyText",
        style: vue.normalizeStyle(_ctx.copyTxtStyle)
      }, vue.toDisplayString(_ctx.modelValue), 5)) : vue.createCommentVNode("", true)
    ], 2);
  }
  const Textarea = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$_]]);
  class UploadOptions {
    constructor() {
      __publicField(this, "url", "");
      __publicField(this, "name", "file");
      __publicField(this, "fileType", "image");
      __publicField(this, "formData");
      __publicField(this, "sourceFile");
      __publicField(this, "method", "post");
      __publicField(this, "xhrState", 200);
      __publicField(this, "timeout", 30 * 1e3);
      __publicField(this, "headers", {});
      __publicField(this, "withCredentials", false);
      __publicField(this, "onStart");
      __publicField(this, "taroFilePath");
      __publicField(this, "onProgress");
      __publicField(this, "onSuccess");
      __publicField(this, "onFailure");
      __publicField(this, "beforeXhrUpload");
    }
  }
  let Uploader$1 = class Uploader {
    constructor(options) {
      __publicField(this, "options");
      this.options = options;
    }
    upload() {
      var _a;
      const options = this.options;
      const xhr = new XMLHttpRequest();
      xhr.timeout = options.timeout;
      if (xhr.upload) {
        xhr.upload.addEventListener(
          "progress",
          (e) => {
            var _a2;
            (_a2 = options.onProgress) == null ? void 0 : _a2.call(options, e, options);
          },
          false
        );
        xhr.onreadystatechange = () => {
          var _a2, _b;
          if (xhr.readyState === 4) {
            if (xhr.status == options.xhrState) {
              (_a2 = options.onSuccess) == null ? void 0 : _a2.call(options, xhr.responseText, options);
            } else {
              (_b = options.onFailure) == null ? void 0 : _b.call(options, xhr.responseText, options);
            }
          }
        };
        xhr.withCredentials = options.withCredentials;
        xhr.open(options.method, options.url, true);
        for (const [key, value] of Object.entries(options.headers)) {
          xhr.setRequestHeader(key, value);
        }
        (_a = options.onStart) == null ? void 0 : _a.call(options, options);
        if (options.beforeXhrUpload) {
          options.beforeXhrUpload(xhr, options);
        } else {
          xhr.send(options.formData);
        }
      } else {
        console.warn("浏览器不支持 XMLHttpRequest");
      }
    }
  };
  class UploaderTaro extends Uploader$1 {
    constructor(options) {
      super(options);
    }
    uploadTaro(uploadFile, env) {
      var _a;
      const options = this.options;
      if (env === "WEB") {
        this.upload();
      } else {
        if (options.beforeXhrUpload) {
          options.beforeXhrUpload(uploadFile, options);
        } else {
          const uploadTask = uploadFile({
            url: options.url,
            filePath: options.taroFilePath,
            fileType: options.fileType,
            header: __spreadValues({
              "Content-Type": "multipart/form-data"
            }, options.headers),
            //
            formData: options.formData,
            name: options.name,
            success(response) {
              var _a2, _b;
              if (options.xhrState == response.statusCode) {
                (_a2 = options.onSuccess) == null ? void 0 : _a2.call(options, response, options);
              } else {
                (_b = options.onFailure) == null ? void 0 : _b.call(options, response, options);
              }
            },
            fail(e) {
              var _a2;
              (_a2 = options.onFailure) == null ? void 0 : _a2.call(options, e, options);
            }
          });
          (_a = options.onStart) == null ? void 0 : _a.call(options, options);
          uploadTask.progress((res) => {
            var _a2;
            (_a2 = options.onProgress) == null ? void 0 : _a2.call(options, res, options);
          });
        }
      }
    }
  }
  class FileItem {
    constructor() {
      __publicField(this, "status", "ready");
      __publicField(this, "message", "");
      __publicField(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
      __publicField(this, "name");
      __publicField(this, "url");
      __publicField(this, "type");
      __publicField(this, "path");
      __publicField(this, "percentage", 0);
      __publicField(this, "formData", {});
    }
  }
  const { create: create$_ } = createComponent("progress");
  const _sfc_main$_ = create$_({
    components: { Checked: iconsVueTaro.Checked },
    props: {
      percentage: {
        type: [Number, String],
        default: 0,
        required: true
      },
      size: {
        type: String,
        default: "base"
      },
      status: {
        type: String,
        default: "text"
      },
      strokeWidth: {
        type: [Number, String],
        default: ""
      },
      textInside: {
        type: Boolean,
        default: false
      },
      showText: {
        type: Boolean,
        default: true
      },
      strokeColor: {
        type: String,
        default: ""
      },
      textColor: {
        type: String,
        default: ""
      },
      textBackground: {
        type: String,
        default: ""
      },
      isShowPercentage: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const slotDefault = !!vue.useSlots().default;
      const height = vue.computed(() => {
        if (props.strokeWidth) {
          return props.strokeWidth + "px";
        }
        return void 0;
      });
      const percentage = vue.computed(() => {
        return Number(props.percentage) >= 100 ? 100 : Number(props.percentage);
      });
      const bgStyle = vue.computed(() => {
        return {
          width: percentage.value + "%",
          background: props.strokeColor || ""
        };
      });
      const textStyle = vue.computed(() => {
        return {
          color: props.textColor || ""
        };
      });
      return {
        height,
        percentage,
        bgStyle,
        textStyle,
        slotDefault
      };
    }
  });
  const _hoisted_1$Q = { class: "nut-progress" };
  function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Checked = vue.resolveComponent("Checked");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$Q, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(["nut-progress-outer", [_ctx.showText && !_ctx.textInside ? "nut-progress-outer-part" : "", _ctx.size ? "nut-progress-" + _ctx.size : ""]]),
        style: vue.normalizeStyle({ height: _ctx.height })
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["nut-progress-inner", _ctx.status === "active" ? "nut-active" : ""]),
          style: vue.normalizeStyle(_ctx.bgStyle)
        }, null, 6),
        vue.createTextVNode(),
        _ctx.showText && _ctx.textInside && !_ctx.slotDefault ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "nut-progress-text nut-progress-insidetext",
          style: vue.normalizeStyle({
            lineHeight: _ctx.height,
            left: `${_ctx.percentage}%`,
            transform: `translate(-${+_ctx.percentage}%,-50%)`,
            background: _ctx.textBackground || _ctx.strokeColor
          })
        }, [
          vue.createElementVNode("span", {
            style: vue.normalizeStyle(_ctx.textStyle)
          }, vue.toDisplayString(_ctx.percentage) + vue.toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)
        ], 4)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.showText && _ctx.textInside && _ctx.slotDefault ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "nut-progress-slot",
          style: vue.normalizeStyle({
            position: `absolute`,
            top: `50%`,
            left: `${_ctx.percentage}%`,
            transform: `translate(-${+_ctx.percentage}%,-50%)`
          })
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 4)) : vue.createCommentVNode("", true)
      ], 6),
      vue.createTextVNode(),
      _ctx.showText && !_ctx.textInside ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "nut-progress-text",
        style: vue.normalizeStyle({ lineHeight: _ctx.height })
      }, [
        _ctx.status === "text" || _ctx.status === "active" ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          style: vue.normalizeStyle(_ctx.textStyle)
        }, vue.toDisplayString(_ctx.percentage) + vue.toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)) : _ctx.status === "icon" ? vue.renderSlot(_ctx.$slots, "icon-name", { key: 1 }, () => [
          vue.createVNode(_component_Checked, {
            width: "15px",
            height: "15px",
            color: "#439422"
          })
        ]) : vue.createCommentVNode("", true)
      ], 4)) : vue.createCommentVNode("", true)
    ]);
  }
  const Progress = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$Z]]);
  const { create: create$Z } = createComponent("uploader");
  const cN$f = "NutUploader";
  const _sfc_main$Z = create$Z({
    components: {
      NutProgress: Progress,
      NutButton: Button,
      Photograph: iconsVueTaro.Photograph,
      Failure: iconsVueTaro.Failure,
      Loading: iconsVueTaro.Loading,
      Del: iconsVueTaro.Del,
      Link: iconsVueTaro.Link
    },
    props: {
      name: { type: String, default: "file" },
      url: { type: String, default: "" },
      sizeType: {
        type: Array,
        default: () => ["original", "compressed"]
      },
      sourceType: {
        type: Array,
        default: () => ["album", "camera"]
      },
      mediaType: {
        type: Array,
        default: () => ["image", "video", "mix"]
      },
      camera: {
        type: String,
        default: "back"
      },
      timeout: { type: [Number, String], default: 1e3 * 30 },
      // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
      fileList: { type: Array, default: () => [] },
      isPreview: { type: Boolean, default: true },
      // picture、list
      listType: { type: String, default: "picture" },
      isDeletable: { type: Boolean, default: true },
      method: { type: String, default: "post" },
      capture: { type: Boolean, default: false },
      maximize: { type: [Number, String], default: Number.MAX_VALUE },
      maximum: { type: [Number, String], default: 9 },
      clearInput: { type: Boolean, default: true },
      accept: { type: String, default: "*" },
      headers: { type: Object, default: {} },
      data: { type: Object, default: {} },
      xhrState: { type: [Number, String], default: 200 },
      multiple: { type: Boolean, default: true },
      disabled: { type: Boolean, default: false },
      autoUpload: { type: Boolean, default: true },
      maxDuration: { type: Number, default: 10 },
      beforeXhrUpload: {
        type: Function,
        default: null
      },
      beforeDelete: {
        type: Function,
        default: () => {
          return true;
        }
      },
      onChange: { type: Function },
      mode: {
        type: String,
        default: "aspectFit"
      }
    },
    emits: [
      "start",
      "progress",
      "oversize",
      "success",
      "failure",
      "change",
      "delete",
      "update:fileList",
      "fileItemClick"
    ],
    setup(props, { emit }) {
      const translate = useLocale(cN$f);
      const fileList = vue.ref(props.fileList);
      const uploadQueue = vue.ref([]);
      vue.watch(
        () => props.fileList,
        () => {
          fileList.value = props.fileList;
        }
      );
      const chooseImage = () => {
        if (props.disabled) {
          return;
        }
        if (Taro.getEnv() == "WEB") {
          let el = document.getElementById("taroChooseImage");
          if (el) {
            el == null ? void 0 : el.setAttribute("accept", props.accept);
          } else {
            const obj = document.createElement("input");
            obj.setAttribute("type", "file");
            obj.setAttribute("id", "taroChooseImage");
            obj.setAttribute("accept", props.accept);
            obj.setAttribute("style", "position: fixed; top: -4000px; left: -3000px; z-index: -300;");
            document.body.appendChild(obj);
          }
        }
        if (Taro.getEnv() == "WEAPP") {
          Taro.chooseMedia({
            /** 最多可以选择的文件个数 */
            count: props.multiple ? Number(props.maximum) - fileList.value.length : 1,
            /** 文件类型 */
            mediaType: props.mediaType,
            /** 图片和视频选择的来源 */
            sourceType: props.sourceType,
            /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 */
            maxDuration: props.maxDuration,
            /** 仅对 mediaType 为 image 时有效，是否压缩所选文件 */
            sizeType: props.sizeType,
            /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 */
            camera: props.camera,
            /** 接口调用失败的回调函数 */
            fail: (res) => {
              emit("failure", res);
            },
            /** 接口调用成功的回调函数 */
            success: onChangeMedia
          });
        } else {
          Taro.chooseImage({
            // 选择数量
            count: props.multiple ? Number(props.maximum) - fileList.value.length : 1,
            // 可以指定是原图还是压缩图，默认二者都有
            sizeType: props.sizeType,
            sourceType: props.sourceType,
            success: onChangeImage,
            fail: (res) => {
              emit("failure", res);
            }
          });
        }
      };
      const onChangeMedia = (res) => {
        const { tempFiles } = res;
        const _files = filterFiles(tempFiles);
        readFile(_files);
        emit("change", {
          fileList: fileList.value
        });
      };
      const onChangeImage = (res) => {
        const { tempFiles } = res;
        const _files = filterFiles(tempFiles);
        readFile(_files);
        emit("change", {
          fileList: fileList.value
        });
      };
      const fileItemClick = (fileItem) => {
        emit("fileItemClick", { fileItem });
      };
      const executeUpload = (fileItem, index) => {
        const uploadOption = new UploadOptions();
        uploadOption.name = props.name;
        uploadOption.url = props.url;
        uploadOption.fileType = fileItem.type;
        uploadOption.formData = fileItem.formData;
        uploadOption.timeout = props.timeout * 1;
        uploadOption.method = props.method;
        uploadOption.xhrState = props.xhrState;
        uploadOption.method = props.method;
        uploadOption.headers = props.headers;
        uploadOption.taroFilePath = fileItem.path;
        uploadOption.beforeXhrUpload = props.beforeXhrUpload;
        uploadOption.onStart = (option) => {
          fileItem.status = "ready";
          fileItem.message = translate("readyUpload");
          clearUploadQueue(index);
          emit("start", option);
        };
        uploadOption.onProgress = (event, option) => {
          fileItem.status = "uploading";
          fileItem.message = translate("uploading");
          fileItem.percentage = event.progress;
          emit("progress", { event, option, percentage: fileItem.percentage });
        };
        uploadOption.onSuccess = (data, option) => {
          fileItem.status = "success";
          fileItem.message = translate("success");
          emit("success", {
            data,
            responseText: data,
            option,
            fileItem
          });
          emit("update:fileList", fileList.value);
        };
        uploadOption.onFailure = (data, option) => {
          fileItem.status = "error";
          fileItem.message = translate("error");
          emit("failure", {
            data,
            responseText: data,
            option,
            fileItem
          });
        };
        let task = new UploaderTaro(uploadOption);
        if (props.autoUpload) {
          task.uploadTaro(Taro.uploadFile, Taro.getEnv());
        } else {
          uploadQueue.value.push(
            new Promise((resolve) => {
              resolve(task);
            })
          );
        }
      };
      const clearUploadQueue = (index = -1) => {
        if (index > -1) {
          uploadQueue.value.splice(index, 1);
        } else {
          uploadQueue.value = [];
          fileList.value = [];
          emit("update:fileList", fileList.value);
        }
      };
      const submit = () => {
        Promise.all(uploadQueue.value).then((res) => {
          res.forEach((i) => i.uploadTaro(Taro.uploadFile, Taro.getEnv()));
        });
      };
      const readFile = (files) => {
        files.forEach((file, index) => {
          var _a, _b;
          let fileType = file.type;
          let filepath = file.tempFilePath || file.path;
          const fileItem = vue.reactive(new FileItem());
          fileItem.message = translate("ready");
          if (file.fileType) {
            fileType = file.fileType;
          } else {
            const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i;
            if (!fileType && (imgReg.test(filepath) || filepath.includes("data:image"))) {
              fileType = "image";
            }
          }
          fileItem.path = filepath;
          fileItem.name = filepath;
          fileItem.status = "ready";
          fileItem.message = translate("waitingUpload");
          fileItem.type = fileType;
          if (Taro.getEnv() == "WEB") {
            const formData = new FormData();
            for (const [key, value] of Object.entries(props.data)) {
              formData.append(key, value);
            }
            formData.append(props.name, file.originalFileObj);
            fileItem.name = (_a = file.originalFileObj) == null ? void 0 : _a.name;
            fileItem.type = (_b = file.originalFileObj) == null ? void 0 : _b.type;
            fileItem.formData = formData;
          } else {
            fileItem.formData = props.data;
          }
          if (props.isPreview) {
            fileItem.url = fileType == "video" ? file.thumbTempFilePath : filepath;
          }
          fileList.value.push(fileItem);
          executeUpload(fileItem, index);
        });
      };
      const filterFiles = (files) => {
        const maximum = props.maximum * 1;
        const maximize = props.maximize * 1;
        const oversizes = new Array();
        files = files.filter((file) => {
          if (file.size > maximize) {
            oversizes.push(file);
            return false;
          } else {
            return true;
          }
        });
        if (oversizes.length) {
          emit("oversize", oversizes);
        }
        let currentFileLength = files.length + fileList.value.length;
        if (currentFileLength > maximum) {
          files.splice(files.length - (currentFileLength - maximum));
        }
        return files;
      };
      const deleted = (file, index) => {
        fileList.value.splice(index, 1);
        emit("delete", {
          file,
          fileList: fileList.value,
          index
        });
      };
      const onDelete = (file, index) => {
        clearUploadQueue(index);
        funInterceptor(props.beforeDelete, {
          args: [file, fileList.value],
          done: () => deleted(file, index)
        });
      };
      return {
        onDelete,
        fileList,
        chooseImage,
        fileItemClick,
        clearUploadQueue,
        submit
      };
    }
  });
  const _hoisted_1$P = { class: "nut-uploader" };
  const _hoisted_2$D = {
    key: 0,
    class: "nut-uploader__slot"
  };
  const _hoisted_3$u = {
    key: 0,
    class: "nut-uploader__preview-img"
  };
  const _hoisted_4$r = {
    key: 0,
    class: "nut-uploader__preview__progress"
  };
  const _hoisted_5$h = { class: "nut-uploader__preview__progress__msg" };
  const _hoisted_6$f = ["onClick"];
  const _hoisted_7$d = ["mode", "src", "onClick"];
  const _hoisted_8$9 = {
    key: 3,
    class: "nut-uploader__preview-img__file"
  };
  const _hoisted_9$8 = ["onClick"];
  const _hoisted_10$4 = { class: "file__name_tips" };
  const _hoisted_11$3 = { class: "tips" };
  const _hoisted_12$3 = {
    key: 1,
    class: "nut-uploader__preview-list"
  };
  const _hoisted_13$2 = ["onClick"];
  const _hoisted_14$2 = { class: "file__name_tips" };
  function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_Failure = vue.resolveComponent("Failure");
    const _component_Loading = vue.resolveComponent("Loading");
    const _component_Link = vue.resolveComponent("Link");
    const _component_Del = vue.resolveComponent("Del");
    const _component_nut_progress = vue.resolveComponent("nut-progress");
    const _component_Photograph = vue.resolveComponent("Photograph");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$P, [
      _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$D, [
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createTextVNode(),
        Number(_ctx.maximum) - _ctx.fileList.length ? (vue.openBlock(), vue.createBlock(_component_nut_button, {
          key: 0,
          class: "nut-uploader__input",
          onClick: _ctx.chooseImage
        }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.fileList, (item, index) => {
        var _a, _b;
        return vue.openBlock(), vue.createElementBlock("view", {
          key: item.uid,
          class: vue.normalizeClass(["nut-uploader__preview", [_ctx.listType]])
        }, [
          _ctx.listType == "picture" && !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$u, [
            item.status != "success" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$r, [
              item.status != "ready" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                item.status == "error" ? (vue.openBlock(), vue.createBlock(_component_Failure, {
                  key: 0,
                  color: "#fff"
                })) : (vue.openBlock(), vue.createBlock(_component_Loading, {
                  key: 1,
                  name: "loading",
                  color: "#fff"
                }))
              ], 64)) : vue.createCommentVNode("", true),
              vue.createTextVNode(),
              vue.createElementVNode("view", _hoisted_5$h, vue.toDisplayString(item.message), 1)
            ])) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            _ctx.isDeletable ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "close",
              onClick: ($event) => _ctx.onDelete(item, index)
            }, [
              vue.renderSlot(_ctx.$slots, "delete-icon", {}, () => [
                vue.createVNode(_component_Failure)
              ])
            ], 8, _hoisted_6$f)) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.includes("image")) || ((_b = item == null ? void 0 : item.type) == null ? void 0 : _b.includes("video"))) && item.url ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 2,
              class: "nut-uploader__preview-img__c",
              mode: _ctx.mode,
              src: item.url,
              onClick: ($event) => _ctx.fileItemClick(item)
            }, null, 8, _hoisted_7$d)) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$9, [
              vue.createElementVNode("view", {
                class: "nut-uploader__preview-img__file__name",
                onClick: ($event) => _ctx.fileItemClick(item)
              }, [
                vue.createElementVNode("view", _hoisted_10$4, vue.toDisplayString(item.name), 1)
              ], 8, _hoisted_9$8)
            ])),
            vue.createTextVNode(),
            vue.createElementVNode("view", _hoisted_11$3, vue.toDisplayString(item.name), 1)
          ])) : _ctx.listType == "list" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_12$3, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["nut-uploader__preview-img__file__name", [item.status]]),
              onClick: ($event) => _ctx.fileItemClick(item)
            }, [
              vue.createVNode(_component_Link, { class: "nut-uploader__preview-img__file__link" }),
              vue.createTextVNode(),
              vue.createElementVNode("view", _hoisted_14$2, vue.toDisplayString(item.name), 1),
              vue.createTextVNode(),
              _ctx.isDeletable ? (vue.openBlock(), vue.createBlock(_component_Del, {
                key: 0,
                color: "#808080",
                class: "nut-uploader__preview-img__file__del",
                onClick: ($event) => _ctx.onDelete(item, index)
              }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
            ], 10, _hoisted_13$2),
            vue.createTextVNode(),
            item.status == "uploading" ? (vue.openBlock(), vue.createBlock(_component_nut_progress, {
              key: 0,
              size: "small",
              percentage: item.percentage,
              "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
              "show-text": false
            }, null, 8, ["percentage"])) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ], 2);
      }), 128)),
      vue.createTextVNode(),
      _ctx.listType == "picture" && !_ctx.$slots.default && Number(_ctx.maximum) - _ctx.fileList.length ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["nut-uploader__upload", [_ctx.listType]])
      }, [
        vue.renderSlot(_ctx.$slots, "upload-icon", {}, () => [
          vue.createVNode(_component_Photograph, { color: "#808080" })
        ]),
        vue.createTextVNode(),
        vue.createVNode(_component_nut_button, {
          class: vue.normalizeClass(["nut-uploader__input", { disabled: _ctx.disabled }]),
          onClick: _ctx.chooseImage
        }, null, 8, ["class", "onClick"])
      ], 2)) : vue.createCommentVNode("", true)
    ]);
  }
  const Uploader = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Y]]);
  const { create: create$Y } = createComponent("number-keyboard");
  const cN$e = "NutNumberKeyboard";
  const _sfc_main$Y = create$Y({
    components: {
      NutPopup: Popup
    },
    props: {
      confirmText: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      visible: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "default"
      },
      customKey: {
        type: Array,
        default: () => []
      },
      modelValue: {
        type: String,
        default: ""
      },
      maxlength: {
        type: [Number, String],
        default: 6
      },
      randomKeys: {
        type: Boolean,
        default: false
      },
      overlay: {
        type: Boolean,
        default: false
      },
      popClass: {
        type: String,
        default: ""
      },
      lockScroll: {
        type: Boolean,
        default: true
      }
    },
    emits: ["input", "delete", "close", "update:modelValue", "update:visible"],
    setup(props, { emit }) {
      const translate = useLocale(cN$e);
      const clickKeyIndex = vue.ref(void 0);
      const show = vue.ref(props.visible);
      const root = vue.ref();
      function defaultKey() {
        const { customKey } = props;
        let object = {
          id: "lock",
          type: "lock"
        };
        let customKeys = Array.isArray(customKey) ? customKey : [customKey];
        if (customKeys.length === 1) {
          object = {
            id: customKeys[0],
            type: "custom"
          };
        }
        return [...getBasicKeys(), object, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
      }
      function getBasicKeys() {
        const keys = [];
        for (let i = 1; i <= 9; i++) {
          keys.push({ id: i, type: "number" });
        }
        if (props.randomKeys) {
          return keys.sort(() => Math.random() > 0.5 ? 1 : -1);
        }
        return keys;
      }
      function genCustomKeys() {
        const keys = getBasicKeys();
        const { customKey } = props;
        let customKeys = Array.isArray(customKey) ? customKey : [customKey];
        if (customKeys.length > 2) {
          customKeys = [customKeys[0], customKeys[1]];
        }
        if (customKeys.length == 2 && props.title && props.type != "rightColumn") {
          customKeys = [customKeys[0]];
        }
        if (customKeys.length === 1) {
          if (props.title && props.type != "rightColumn") {
            keys.push({ id: customKeys[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" });
          } else {
            keys.push({ id: 0, type: "number" }, { id: customKeys[0], type: "custom" });
          }
        } else if (customKeys.length === 2) {
          keys.push(
            { id: customKeys[0], type: "custom" },
            { id: 0, type: "number" },
            { id: customKeys[1], type: "custom" }
          );
        }
        return keys;
      }
      const keysList = vue.computed(() => {
        if (props.type == "rightColumn" || props.title != "") {
          return genCustomKeys();
        }
        return defaultKey();
      });
      vue.watch(
        () => props.visible,
        (value) => {
          show.value = value;
        }
      );
      function onTouchstart(item, event) {
        event.stopPropagation();
        clickKeyIndex.value = item.id;
        if (item.type == "number" || item.type == "custom") {
          emit("input", item.id);
          if (props.modelValue.length < Number(props.maxlength)) {
            emit("update:modelValue", props.modelValue + item.id);
          }
        }
        if (item.type == "lock") {
          closeBoard();
        }
        if (item.type == "delete") {
          emit("delete");
          emit("update:modelValue", props.modelValue.slice(0, props.modelValue.length - 1));
        }
      }
      function onTouchMove(event) {
        event.stopPropagation();
      }
      function onTouchEnd() {
        clickKeyIndex.value = void 0;
      }
      function closeBoard() {
        emit("update:visible", false);
        emit("close");
      }
      return {
        clickKeyIndex,
        defaultKey,
        closeBoard,
        onTouchEnd,
        onTouchMove,
        onTouchstart,
        keysList,
        genCustomKeys,
        getBasicKeys,
        root,
        show,
        translate
      };
    }
  });
  const _hoisted_1$O = {
    ref: "root",
    class: "nut-number-keyboard"
  };
  const _hoisted_2$C = {
    key: 0,
    class: "nut-number-keyboard__header"
  };
  const _hoisted_3$t = { class: "nut-number-keyboard__title" };
  const _hoisted_4$q = { class: "nut-number-keyboard__body" };
  const _hoisted_5$g = { class: "nut-number-keyboard__keys" };
  const _hoisted_6$e = ["onTouchstart"];
  const _hoisted_7$c = {
    key: 1,
    src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
  };
  const _hoisted_8$8 = {
    key: 2,
    src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
  };
  const _hoisted_9$7 = {
    key: 0,
    class: "nut-number-keyboard__sidebar"
  };
  const _hoisted_10$3 = { class: "nut-key__wrapper" };
  const _hoisted_11$2 = /* @__PURE__ */ vue.createElementVNode("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1);
  const _hoisted_12$2 = [
    _hoisted_11$2
  ];
  function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.show,
      "onUpdate:visible": _cache[7] || (_cache[7] = ($event) => _ctx.show = $event),
      position: "bottom",
      "pop-class": _ctx.popClass,
      overlay: _ctx.overlay,
      "overlay-class": "nut-number-keyboard-overlay",
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      onClickOverlay: _cache[8] || (_cache[8] = ($event) => _ctx.closeBoard())
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$O, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$C, [
            vue.createElementVNode("h3", _hoisted_3$t, vue.toDisplayString(_ctx.title), 1),
            vue.createTextVNode(),
            _ctx.type == "default" ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.closeBoard())
            }, vue.toDisplayString(_ctx.translate("done")), 1)) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.createElementVNode("div", _hoisted_4$q, [
            vue.createElementVNode("div", _hoisted_5$g, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.keysList, (item) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: "key" + item.id,
                  class: vue.normalizeClass([
                    "nut-key__wrapper",
                    {
                      "nut-key__wrapper--wider": item.id == 0 && _ctx.type == "rightColumn" && Array.isArray(_ctx.customKey) && _ctx.customKey.length == 1
                    }
                  ])
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([
                      "nut-key",
                      { "nut-key--active": item.id == _ctx.clickKeyIndex },
                      { "nut-key--lock": item.type == "lock" },
                      { "nut-key--delete": item.type == "delete" }
                    ]),
                    onTouchstart: (event) => _ctx.onTouchstart(item, event),
                    onTouchmove: _cache[1] || (_cache[1] = (event) => _ctx.onTouchMove(event)),
                    onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
                  }, [
                    item.type == "number" || item.type == "custom" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createTextVNode(vue.toDisplayString(item.id), 1)
                    ], 64)) : vue.createCommentVNode("", true),
                    vue.createTextVNode(),
                    item.type == "lock" ? (vue.openBlock(), vue.createElementBlock("img", _hoisted_7$c)) : vue.createCommentVNode("", true),
                    vue.createTextVNode(),
                    item.type == "delete" ? (vue.openBlock(), vue.createElementBlock("img", _hoisted_8$8)) : vue.createCommentVNode("", true)
                  ], 42, _hoisted_6$e)
                ], 2);
              }), 128))
            ]),
            vue.createTextVNode(),
            _ctx.type == "rightColumn" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$7, [
              vue.createElementVNode("div", _hoisted_10$3, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["nut-key", { active: _ctx.clickKeyIndex == "delete" }]),
                  onTouchstart: _cache[3] || (_cache[3] = (event) => _ctx.onTouchstart({ id: "delete", type: "delete" }, event)),
                  onTouchmove: _cache[4] || (_cache[4] = (event) => _ctx.onTouchMove(event)),
                  onTouchend: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
                }, _hoisted_12$2, 34)
              ]),
              vue.createTextVNode(),
              vue.createElementVNode("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: _cache[6] || (_cache[6] = ($event) => _ctx.closeBoard())
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["nut-key", "nut-key--finish ", { activeFinsh: _ctx.clickKeyIndex == "finish" }])
                }, vue.toDisplayString(_ctx.confirmText || _ctx.translate("done")), 3)
              ])
            ])) : vue.createCommentVNode("", true)
          ])
        ], 512)
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "overlay", "lock-scroll", "catch-move"]);
  }
  const NumberKeyboard = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$X]]);
  const FORM_KEY = Symbol("nut-form");
  const component = (components) => {
    return {
      props: {
        modelValue: {
          type: Object,
          default: () => ({})
        },
        rules: {
          type: Object,
          default: () => ({})
        },
        labelPosition: {
          type: String,
          default: "left"
        },
        starPosition: {
          type: String,
          default: "left"
        }
      },
      components,
      emits: ["validate"],
      setup(props, { emit }) {
        const { children, linkChildren } = useChildren(FORM_KEY);
        linkChildren({ props });
        const formErrorTip = vue.computed(() => vue.reactive({}));
        vue.provide("formErrorTip", formErrorTip);
        const clearErrorTips = () => {
          Object.keys(formErrorTip.value).forEach((item) => {
            formErrorTip.value[item] = "";
          });
        };
        const reset = () => {
          clearErrorTips();
        };
        vue.watch(
          () => props.modelValue,
          () => {
            clearErrorTips();
          },
          { immediate: true }
        );
        const getTaskFromChildren = () => {
          const task = [];
          children.forEach((item) => {
            task.push({
              prop: item == null ? void 0 : item["prop"],
              rules: (item == null ? void 0 : item["rules"]) || []
            });
          });
          return task;
        };
        const tipMessage = (errorMsg) => {
          if (errorMsg.message) {
            emit("validate", errorMsg);
          }
          formErrorTip.value[errorMsg.prop] = errorMsg.message;
        };
        const checkRule = (item) => __async(this, null, function* () {
          const { rules, prop } = item;
          const _Promise = (errorMsg) => {
            return new Promise((resolve, reject) => {
              try {
                tipMessage(errorMsg);
                resolve(errorMsg);
              } catch (error) {
                reject(error);
              }
            });
          };
          if (!prop) {
            console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
          }
          const value = getPropByPath(props.modelValue, prop || "");
          tipMessage({ prop, message: "" });
          const formRules = props.rules || {};
          const _rules = [...(formRules == null ? void 0 : formRules[prop]) || [], ...rules];
          while (_rules.length) {
            const rule = _rules.shift();
            const _a = rule, { validator } = _a, ruleWithoutValidator = __objRest(_a, ["validator"]);
            const { required, regex, message } = ruleWithoutValidator;
            const errorMsg = { prop, message: message || "" };
            if (required) {
              if (!value && value !== 0) {
                return _Promise(errorMsg);
              }
            }
            if (regex && !regex.test(String(value))) {
              return _Promise(errorMsg);
            }
            if (validator) {
              const result = validator(value, ruleWithoutValidator);
              if (isPromise(result)) {
                try {
                  const value2 = yield result;
                  if (value2 === false) {
                    return _Promise(errorMsg);
                  }
                } catch (error) {
                  const validateErrorMsg = { prop, message: error };
                  return _Promise(validateErrorMsg);
                }
              } else {
                if (!result) {
                  return _Promise(errorMsg);
                }
              }
            }
          }
          return Promise.resolve(true);
        });
        const validate = (customProp = "") => {
          return new Promise((resolve, reject) => {
            try {
              const task = getTaskFromChildren();
              const errors = task.map((item) => {
                if (customProp && customProp !== item.prop) {
                  return Promise.resolve(true);
                }
                return checkRule(item);
              });
              Promise.all(errors).then((errorRes) => {
                errorRes = errorRes.filter((item) => item !== true);
                const res = { valid: true, errors: [] };
                if (errorRes.length) {
                  res.valid = false;
                  res.errors = errorRes;
                }
                resolve(res);
              });
            } catch (error) {
              reject(error);
            }
          });
        };
        const submit = () => {
          validate();
          return false;
        };
        return { validate, reset, submit, formErrorTip };
      }
    };
  };
  const { create: create$X } = createComponent("form");
  const _sfc_main$X = create$X(
    component({
      NutCellGroup: CellGroup
    })
  );
  function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_cell_group = vue.resolveComponent("nut-cell-group");
    return vue.openBlock(), vue.createElementBlock("form", {
      class: "nut-form",
      action: "#",
      onSubmit: vue.withModifiers(() => false, ["prevent"])
    }, [
      vue.createVNode(_component_nut_cell_group, null, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })
    ], 32);
  }
  const Form = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$W]]);
  const { create: create$W } = createComponent("form-item");
  const _sfc_main$W = create$W({
    inheritAttrs: false,
    props: {
      prop: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      rules: {
        type: Array,
        default: () => []
      },
      required: {
        type: Boolean,
        default: false
      },
      showErrorMessage: {
        type: Boolean,
        default: true
      },
      showErrorLine: {
        type: Boolean,
        default: true
      },
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      labelAlign: {
        type: String,
        default: ""
      },
      errorMessageAlign: {
        type: String,
        default: ""
      },
      bodyAlign: {
        type: String,
        default: ""
      },
      labelPosition: {
        type: String,
        default: ""
      },
      starPosition: {
        type: String,
        default: ""
      }
    },
    components: {
      NutCell: Cell
    },
    setup(props, { slots }) {
      const { parent: parentObj } = useParent(FORM_KEY);
      const isRequired = vue.computed(() => {
        var _a;
        const rules = (_a = parentObj.props) == null ? void 0 : _a.rules;
        let formRequired = false;
        for (const key in rules) {
          if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
            formRequired = rules[key].some((rule) => rule.required);
          }
        }
        return props.required || props.rules.some((rule) => rule.required) || formRequired;
      });
      const labelPositionClass = vue.computed(() => {
        const labelPosition = parentObj.props.labelPosition;
        const position = props.labelPosition ? props.labelPosition : labelPosition;
        return position !== "left" ? `nut-form-item__${position}` : "";
      });
      const starPositionClass = vue.computed(() => {
        const starPosition = parentObj.props.starPosition;
        const position = props.starPosition ? props.starPosition : starPosition;
        return position !== "left" ? `nut-form-item__star-${position}` : "";
      });
      const parent = vue.inject("formErrorTip");
      const labelStyle = vue.computed(() => {
        return {
          width: pxCheck(props.labelWidth),
          textAlign: props.labelAlign
        };
      });
      const bodyStyle = vue.computed(() => {
        return {
          textAlign: props.bodyAlign
        };
      });
      const errorMessageStyle = vue.computed(() => {
        return {
          textAlign: props.errorMessageAlign
        };
      });
      const getSlots = (name) => slots[name];
      return {
        parent,
        labelStyle,
        bodyStyle,
        errorMessageStyle,
        getSlots,
        isRequired,
        labelPositionClass,
        starPositionClass
      };
    }
  });
  const _hoisted_1$N = { class: "nut-cell__value nut-form-item__body" };
  function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_cell = vue.resolveComponent("nut-cell");
    return vue.openBlock(), vue.createBlock(_component_nut_cell, {
      class: vue.normalizeClass(["nut-form-item", [{ error: _ctx.parent[_ctx.prop], line: _ctx.showErrorLine }, _ctx.$attrs.class, _ctx.labelPositionClass]]),
      style: vue.normalizeStyle(_ctx.$attrs.style)
    }, {
      default: vue.withCtx(() => [
        _ctx.label || _ctx.getSlots("label") ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["nut-cell__title nut-form-item__label", { required: _ctx.isRequired, [_ctx.starPositionClass]: _ctx.starPositionClass }]),
          style: vue.normalizeStyle(_ctx.labelStyle)
        }, [
          vue.renderSlot(_ctx.$slots, "label", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_1$N, [
          vue.createElementVNode("view", {
            class: "nut-form-item__body__slots",
            style: vue.normalizeStyle(_ctx.bodyStyle)
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 4),
          vue.createTextVNode(),
          _ctx.parent[_ctx.prop] && _ctx.showErrorMessage ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: vue.normalizeStyle(_ctx.errorMessageStyle)
          }, vue.toDisplayString(_ctx.parent[_ctx.prop]), 5)) : vue.createCommentVNode("", true)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]);
  }
  const FormItem = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$V]]);
  const SWIPE_KEY = Symbol("nut-swipe");
  const { create: create$V } = createComponent("swipe");
  const _sfc_main$V = create$V({
    props: {
      name: {
        type: String,
        default: ""
      },
      touchMoveStopPropagation: {
        type: Boolean,
        default: false
      },
      touchMovePreventDefault: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["open", "close", "click"],
    setup(props, { emit }) {
      const refRandomId = Math.random().toString(36).slice(-8);
      const leftRef = vue.ref();
      const leftRefWidth = vue.ref(0);
      const rightRef = vue.ref();
      const rightRefWidth = vue.ref(0);
      const lockClick = vue.ref(false);
      const initWidth = () => {
        useTaroRect(leftRef).then(
          (rect) => {
            leftRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
          },
          () => {
          }
        );
        useTaroRect(rightRef).then(
          (rect) => {
            rightRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
          },
          () => {
          }
        );
      };
      const parent = vue.inject(SWIPE_KEY, null);
      vue.watch(
        () => {
          var _a;
          return (_a = parent == null ? void 0 : parent.name) == null ? void 0 : _a.value;
        },
        (name) => {
          if (props.name !== name && parent && parent.lock) {
            close();
          }
        }
      );
      vue.onMounted(() => {
        setTimeout(() => {
          initWidth();
        }, 100);
      });
      const opened = vue.ref(false);
      let position = "";
      let oldPosition = "";
      const state = vue.reactive({
        offset: 0,
        moving: false
      });
      const open = (p = "") => {
        parent && parent.update(props.name);
        opened.value = true;
        if (p) {
          state.offset = p === "left" ? -rightRefWidth.value : leftRefWidth.value;
        }
        emit("open", {
          name: props.name,
          position: position || p
        });
      };
      const close = () => {
        state.offset = 0;
        if (opened.value) {
          opened.value = false;
          emit("close", {
            name: props.name,
            position
          });
        }
      };
      const onClick = (e, position2, lock) => {
        if (lock) {
          e.stopPropagation();
        } else {
          close();
        }
        emit("click", position2);
      };
      const touchStyle = vue.computed(() => {
        return {
          transform: `translate3d(${state.offset}px, 0, 0)`
        };
      });
      const setoffset = (deltaX) => {
        position = deltaX > 0 ? "right" : "left";
        let offset = deltaX;
        switch (position) {
          case "left":
            if (opened.value && oldPosition === position) {
              offset = -rightRefWidth.value;
            } else {
              offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX;
            }
            break;
          case "right":
            if (opened.value && oldPosition === position) {
              offset = leftRefWidth.value;
            } else {
              offset = Math.abs(deltaX) > leftRefWidth.value ? leftRefWidth.value : deltaX;
            }
            break;
        }
        state.offset = offset;
      };
      const touch = useTouch();
      const touchMethods = {
        onTouchStart(event) {
          if (props.disabled)
            return;
          touch.start(event);
        },
        onTouchMove(event) {
          if (props.disabled)
            return;
          touch.move(event);
          if (touch.isHorizontal()) {
            lockClick.value = true;
            state.moving = true;
            setoffset(touch.deltaX.value);
            if (props.touchMovePreventDefault) {
              event.preventDefault();
            }
            if (props.touchMoveStopPropagation) {
              event.stopPropagation();
            }
          }
        },
        onTouchEnd() {
          if (state.moving) {
            state.moving = false;
            oldPosition = position;
            switch (position) {
              case "left":
                if (Math.abs(state.offset) <= rightRefWidth.value / 2) {
                  close();
                } else {
                  state.offset = -rightRefWidth.value;
                  open();
                }
                break;
              case "right":
                if (Math.abs(state.offset) <= leftRefWidth.value / 2) {
                  close();
                } else {
                  state.offset = leftRefWidth.value;
                  open();
                }
                break;
            }
            setTimeout(() => {
              lockClick.value = false;
            }, 0);
          }
        }
      };
      return __spreadProps(__spreadValues({
        touchStyle
      }, touchMethods), {
        leftRef,
        rightRef,
        refRandomId,
        open,
        close,
        onClick,
        lockClick
      });
    }
  });
  const _hoisted_1$M = ["id"];
  const _hoisted_2$B = ["id"];
  function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-swipe",
      style: vue.normalizeStyle(_ctx.touchStyle),
      onTouchstart: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
      onTouchmove: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
      onTouchend: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
      onTouchcancel: _cache[6] || (_cache[6] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
    }, [
      vue.createElementVNode("view", {
        id: "leftRef-" + _ctx.refRandomId,
        ref: "leftRef",
        class: "nut-swipe__left",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onClick($event, "left", true))
      }, [
        vue.renderSlot(_ctx.$slots, "left")
      ], 8, _hoisted_1$M),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: "nut-swipe__content",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onClick($event, "content", _ctx.lockClick))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        id: "rightRef-" + _ctx.refRandomId,
        ref: "rightRef",
        class: "nut-swipe__right",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.onClick($event, "right", true))
      }, [
        vue.renderSlot(_ctx.$slots, "right")
      ], 8, _hoisted_2$B)
    ], 36);
  }
  const Swipe = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$U]]);
  const { create: create$U } = createComponent("swipe-group");
  const _sfc_main$U = create$U({
    props: {
      lock: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const swipeGroupRef = vue.ref(null);
      const name = vue.ref("");
      const update = (n) => {
        name.value = n;
      };
      vue.provide(SWIPE_KEY, {
        update,
        lock: props.lock,
        name
      });
      return { swipeGroupRef };
    }
  });
  const _hoisted_1$L = {
    ref: "swipeGroupRef",
    class: "nut-swipe-group"
  };
  function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$L, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 512);
  }
  const SwipeGroup = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$T]]);
  const { create: create$T } = createComponent("action-sheet");
  const _sfc_main$T = create$T({
    components: {
      NutPopup: Popup,
      Loading: iconsVueTaro.Loading
    },
    props: __spreadProps(__spreadValues({}, popupProps), {
      cancelTxt: {
        type: String,
        default: ""
      },
      optionTag: {
        type: String,
        default: "name"
      },
      optionSubTag: {
        type: String,
        default: "subname"
      },
      chooseTagValue: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#ee0a24"
      },
      description: {
        type: String,
        default: ""
      },
      menuItems: {
        type: Array,
        default: () => []
      },
      closeAbled: {
        type: Boolean,
        default: true
      }
    }),
    emits: ["cancel", "close", "choose", "update:visible"],
    setup(props, { emit }) {
      const slotDefault = !!vue.useSlots().default;
      const isHighlight = (item) => {
        return props.chooseTagValue && props.chooseTagValue === item[props.optionTag] ? props.color : "";
      };
      const cancelActionSheet = () => {
        emit("cancel");
        emit("update:visible", false);
      };
      const chooseItem = (item, index) => {
        if (!item.disable && !item.loading) {
          emit("choose", item, index);
          emit("update:visible", false);
        }
      };
      const close = (e) => {
        if (props.closeAbled) {
          emit("close", e);
          emit("update:visible", false);
        }
      };
      return {
        slotDefault,
        isHighlight,
        cancelActionSheet,
        chooseItem,
        close
      };
    }
  });
  const _hoisted_1$K = { class: "nut-action-sheet" };
  const _hoisted_2$A = {
    key: 0,
    class: "nut-action-sheet__title"
  };
  const _hoisted_3$s = { key: 1 };
  const _hoisted_4$p = {
    key: 0,
    class: "nut-action-sheet__item nut-action-sheet__desc"
  };
  const _hoisted_5$f = {
    key: 1,
    class: "nut-action-sheet__menu"
  };
  const _hoisted_6$d = ["onClick"];
  const _hoisted_7$b = { key: 1 };
  const _hoisted_8$7 = { class: "nut-action-sheet__subdesc" };
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Loading = vue.resolveComponent("Loading");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.visible,
      position: "bottom",
      round: "",
      "close-on-click-overlay": _ctx.closeAbled,
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      "z-index": _ctx.zIndex,
      onClickOverlay: _ctx.close
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$K, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$A, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createTextVNode(),
          !_ctx.slotDefault ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$s, [
            _ctx.description ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$p, vue.toDisplayString(_ctx.description), 1)) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            _ctx.menuItems.length ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$f, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.menuItems, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(["nut-action-sheet__item", {
                    "nut-action-sheet__item--disabled": item.disable,
                    "nut-action-sheet__item--loading": item.loading
                  }]),
                  style: vue.normalizeStyle({ color: _ctx.isHighlight(item) || item.color }),
                  onClick: ($event) => _ctx.chooseItem(item, index)
                }, [
                  item.loading ? (vue.openBlock(), vue.createBlock(_component_Loading, { key: 0 })) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$b, vue.toDisplayString(item[_ctx.optionTag]), 1)),
                  vue.createTextVNode(),
                  vue.createElementVNode("view", _hoisted_8$7, vue.toDisplayString(item[_ctx.optionSubTag]), 1)
                ], 14, _hoisted_6$d);
              }), 128))
            ])) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            _ctx.cancelTxt ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "nut-action-sheet__cancel",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.cancelActionSheet && _ctx.cancelActionSheet(...args))
            }, vue.toDisplayString(_ctx.cancelTxt), 1)) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ])
      ]),
      _: 3
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "catch-move", "z-index", "onClickOverlay"]);
  }
  const ActionSheet = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$S]]);
  const { componentName: componentName$9, create: create$S } = createComponent("backtop");
  const _sfc_main$S = create$S({
    components: {
      Top: iconsVueTaro.Top,
      NutScrollView: _sfc_main$1t
    },
    props: {
      height: {
        type: String,
        default: "100vh"
      },
      bottom: {
        type: Number,
        default: 20
      },
      right: {
        type: Number,
        default: 10
      },
      zIndex: {
        type: Number,
        default: 10
      },
      distance: {
        type: Number,
        default: 200
      }
    },
    emits: ["click"],
    setup(props, { emit }) {
      const state = vue.reactive({
        backTop: false,
        scrollTop: 1
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName$9;
        return {
          [prefixCls]: true,
          show: state.backTop
        };
      });
      const style = vue.computed(() => {
        return {
          right: `${props.right}px`,
          bottom: `${props.bottom}px`,
          zIndex: props.zIndex
        };
      });
      const scroll = (e) => {
        state.scrollTop = 2;
        state.backTop = e.detail.scrollTop >= props.distance;
      };
      const click = (e) => {
        state.scrollTop = 1;
        emit("click", e);
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        classes,
        style,
        scroll,
        click
      });
    }
  });
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_Top = vue.resolveComponent("Top");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_nut_scroll_view, {
        "scroll-y": true,
        style: vue.normalizeStyle({ height: _ctx.height }),
        "scroll-top": _ctx.scrollTop,
        "scroll-with-animation": "true",
        onScroll: _ctx.scroll
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content")
        ]),
        _: 3
      }, 8, ["style", "scroll-top", "onScroll"]),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.classes),
        style: vue.normalizeStyle(_ctx.style),
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.click && _ctx.click(...args), ["stop"]))
      }, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_Top, {
            width: "19px",
            height: "19px",
            class: "nut-backtop-main"
          })
        ])
      ], 6)
    ]);
  }
  const Backtop = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$R]]);
  const { create: create$R } = createComponent("drag");
  const _sfc_main$R = create$R({
    props: {
      attract: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: "all"
      },
      boundary: {
        type: Object,
        default: () => {
          return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          };
        }
      }
    },
    setup(props) {
      const myDrag = vue.ref();
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.reactive({
        keepAlive: false,
        elWidth: 0,
        elHeight: 0,
        screenWidth: 0,
        screenHeight: 0,
        startTop: 0,
        startLeft: 0,
        initTop: 0,
        initLeft: 0,
        nx: 0,
        ny: 0,
        xPum: 0,
        yPum: 0,
        top: 0,
        left: 0,
        position: { x: 0, y: 0 },
        boundary: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      });
      const domElem = Taro.getSystemInfoSync();
      function getInfo() {
        useTaroRect(myDrag).then(
          (rec) => {
            state.elWidth = rec.width;
            state.elHeight = rec.height;
            state.initTop = rec.top;
            state.initLeft = rec.left;
            state.screenWidth = domElem.screenWidth;
            state.screenHeight = domElem.screenHeight;
          },
          () => {
          }
        );
      }
      function goLeft() {
        if (state.boundary.left) {
          if (+state.left.split("px")[0] > state.boundary.left) {
            state.left = +state.left.split("px")[0] - 10 + "px";
            requestAniFrame$1(() => {
              goLeft();
            });
          } else {
            state.left = `${state.boundary.left}px`;
          }
        } else {
          if (+state.left.split("px")[0] > 10) {
            state.left = +state.left.split("px")[0] - 10 + "px";
            requestAniFrame$1(() => {
              goLeft();
            });
          } else {
            state.left = "0px";
          }
        }
      }
      function goRight(rightLocation) {
        if (rightLocation - parseInt(state.left.split("px")[0]) > 10) {
          state.left = parseInt(state.left.split("px")[0]) + 10 + "px";
          requestAniFrame$1(() => {
            goRight(rightLocation);
          });
        } else {
          state.left = rightLocation + "px";
        }
      }
      function touchMove(e) {
        e.preventDefault();
        if (e.touches.length === 1) {
          const touch = e.touches[0];
          state.nx = touch.clientX - state.position.x;
          state.ny = touch.clientY - state.position.y;
          state.xPum = state.startLeft + state.nx;
          state.yPum = state.startTop + state.ny;
          const rightLocation = state.screenWidth - state.elWidth - state.boundary.right;
          if (Math.abs(state.xPum + state.initLeft) > rightLocation) {
            state.xPum = rightLocation - state.initLeft;
          } else if (state.xPum + state.initLeft <= state.boundary.left) {
            state.xPum = state.boundary.left - state.initLeft;
          }
          if (state.yPum + state.initTop < state.boundary.top) {
            state.yPum = state.boundary.top - state.initTop;
          } else if (state.yPum + state.initTop > state.screenHeight - state.elHeight - state.boundary.bottom) {
            state.yPum = state.screenHeight - state.elHeight - state.boundary.bottom - state.initTop;
          }
          if (props.direction != "y") {
            state.left = state.xPum;
          }
          if (props.direction != "x") {
            state.top = state.yPum;
          }
        }
      }
      function touchEnd(e) {
        const touch = e.changedTouches[0];
        let currX = touch.clientX;
        const rightLocation = state.screenWidth - state.elWidth - state.boundary.right;
        if (currX > rightLocation) {
          currX = rightLocation;
        } else if (currX < state.boundary.left) {
          currX = state.boundary.left;
        } else {
          currX = currX < state.screenWidth / 2 ? state.boundary.left : rightLocation;
        }
        if (props.direction != "y" && props.attract) {
          if (currX < state.screenWidth / 2) {
            requestAniFrame$1(() => {
              goLeft();
            });
          } else {
            requestAniFrame$1(() => {
              goRight(rightLocation);
            });
          }
        }
        if (props.direction !== "x") {
          state.top = state.yPum;
        }
      }
      function touchStart(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        const query = Taro.createSelectorQuery();
        let id = (_a = e == null ? void 0 : e.mpEvent) == null ? void 0 : _a.currentTarget.id;
        let offsetTop = (_b = e == null ? void 0 : e.currentTarget) == null ? void 0 : _b.offsetTop;
        let offsetLeft = (_c = e == null ? void 0 : e.currentTarget) == null ? void 0 : _c.offsetLeft;
        const touches = e.touches[0];
        const mobileTop = (_f = (_e = (_d = e.touches[0]) == null ? void 0 : _d.target) == null ? void 0 : _e.parentNode) == null ? void 0 : _f.style.top;
        const mobileLeft = (_i = (_h = (_g = e.touches[0]) == null ? void 0 : _g.target) == null ? void 0 : _h.parentNode) == null ? void 0 : _i.style.left;
        query.selectAll(".myDrag").boundingClientRect((rec) => {
          rec.forEach((element) => {
            if (id && id == element.id) {
              state.startTop = element.top - offsetTop;
              state.startLeft = element.left - offsetLeft;
            } else if (mobileTop) {
              state.startTop = Number(mobileTop.slice(0, -2));
              state.startLeft = Number(mobileLeft.slice(0, -2));
            }
          });
        }).exec();
        state.position.x = touches.clientX;
        state.position.y = touches.clientY;
      }
      vue.onMounted(() => {
        setTimeout(() => {
          getInfo();
        }, 200);
        Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
        });
        state.boundary = props.boundary;
      });
      vue.onActivated(() => {
        if (state.keepAlive) {
          state.keepAlive = false;
        }
      });
      vue.onDeactivated(() => {
        state.keepAlive = true;
        myDrag.value.removeEventListener("touchstart", touchStart);
        myDrag.value.removeEventListener("touchmove", touchMove);
        myDrag.value.removeEventListener("touchend", touchEnd);
      });
      return {
        myDrag,
        touchStart,
        touchMove,
        touchEnd,
        state,
        refRandomId
      };
    }
  });
  const _hoisted_1$J = ["id"];
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "myDrag" + _ctx.refRandomId,
      ref: "myDrag",
      class: "nut-taro-drag myDrag",
      catchtouchmove: "true",
      style: vue.normalizeStyle({
        transform: ` translate(${_ctx.state.left + "px"}, ${_ctx.state.top + "px"})`,
        top: _ctx.state.top + "px",
        left: _ctx.state.left + "px"
      }),
      onTouchstart: _cache[0] || (_cache[0] = ($event) => _ctx.touchStart($event)),
      onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.touchMove($event), ["prevent"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 44, _hoisted_1$J);
  }
  const Drag = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$Q]]);
  const { create: create$Q } = createComponent("dialog");
  const cN$d = "NutDialog";
  const _sfc_main$Q = create$Q({
    inheritAttrs: false,
    components: {
      NutPopup: Popup,
      NutButton: Button
    },
    props: __spreadProps(__spreadValues({}, popupProps), {
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: [String, Object],
        default: ""
      },
      noFooter: {
        type: Boolean,
        default: false
      },
      noOkBtn: {
        type: Boolean,
        default: false
      },
      noCancelBtn: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      okText: {
        type: String,
        default: ""
      },
      cancelAutoClose: {
        type: Boolean,
        default: true
      },
      okAutoClose: {
        type: Boolean,
        default: true
      },
      textAlign: {
        type: String,
        default: "center"
      },
      closeOnPopstate: {
        type: Boolean,
        default: false
      },
      footerDirection: {
        type: String,
        default: "horizontal"
        //vertical
      },
      customClass: {
        type: String,
        default: ""
      },
      popStyle: {
        type: Object
      },
      beforeClose: {
        type: Function
      }
    }),
    emits: ["update", "update:visible", "ok", "cancel", "opened", "closed"],
    setup(props, { emit }) {
      const translate = useLocale(cN$d);
      const showPopup = vue.ref(props.visible);
      vue.onMounted(() => {
        if (props.closeOnPopstate) {
          window.addEventListener("popstate", function() {
            closed("page");
          });
        }
      });
      vue.watch(
        () => props.visible,
        (value) => {
          showPopup.value = value;
          if (value) {
            emit("opened");
          }
        }
      );
      const update = (val) => {
        emit("update", val);
        emit("update:visible", val);
      };
      const closed = (action) => {
        if (props.beforeClose) {
          const result = props.beforeClose(action);
          if (isPromise(result)) {
            result.then((bool) => {
              if (bool) {
                update(false);
                emit("closed");
              }
            });
          }
        } else {
          update(false);
          emit("closed");
        }
      };
      const onCancel = () => {
        emit("cancel");
        if (props.cancelAutoClose) {
          closed("cancel");
        }
      };
      const onOk = () => {
        emit("ok");
        if (props.okAutoClose) {
          closed("ok");
        }
      };
      const onClickOverlay = () => {
        if (props.closeOnClickOverlay) {
          closed("");
        }
      };
      const contentStyle = vue.computed(() => {
        return {
          textAlign: props.textAlign
        };
      });
      return {
        closed,
        onCancel,
        onOk,
        showPopup,
        onClickOverlay,
        contentStyle,
        translate
      };
    }
  });
  const _hoisted_1$I = {
    key: 0,
    class: "nut-dialog__header"
  };
  const _hoisted_2$z = ["innerHTML"];
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPopup,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.showPopup = $event),
      teleport: _ctx.teleport,
      "close-on-click-overlay": false,
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      "pop-class": _ctx.popClass,
      "overlay-class": _ctx.overlayClass,
      "overlay-style": _ctx.overlayStyle,
      style: vue.normalizeStyle(_ctx.popStyle),
      round: "",
      "z-index": _ctx.zIndex,
      onClickOverlay: _ctx.onClickOverlay,
      onClickCloseIcon: _ctx.closed
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-dialog", _ctx.customClass])
        }, [
          _ctx.$slots.header || _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$I, [
            _ctx.$slots.header ? vue.renderSlot(_ctx.$slots, "header", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
            ], 64))
          ])) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.createElementVNode("view", {
            class: "nut-dialog__content",
            style: vue.normalizeStyle(_ctx.contentStyle)
          }, [
            _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : typeof _ctx.content === "string" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_2$z)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.content), { key: 2 }))
          ], 4),
          vue.createTextVNode(),
          !_ctx.noFooter ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: vue.normalizeClass(["nut-dialog__footer", { [_ctx.footerDirection]: _ctx.footerDirection }])
          }, [
            _ctx.$slots.footer ? vue.renderSlot(_ctx.$slots, "footer", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              !_ctx.noCancelBtn ? (vue.openBlock(), vue.createBlock(_component_nut_button, {
                key: 0,
                size: "small",
                plain: "",
                type: "primary",
                class: "nut-dialog__footer-cancel",
                onClick: _ctx.onCancel
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.cancelText || _ctx.translate("cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : vue.createCommentVNode("", true),
              vue.createTextVNode(),
              !_ctx.noOkBtn ? (vue.openBlock(), vue.createBlock(_component_nut_button, {
                key: 1,
                size: "small",
                type: "primary",
                class: "nut-dialog__footer-ok",
                onClick: _ctx.onOk
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.okText || _ctx.translate("confirm")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : vue.createCommentVNode("", true)
            ], 64))
          ], 2)) : vue.createCommentVNode("", true)
        ], 2)
      ]),
      _: 3
    }, 8, ["visible", "teleport", "lock-scroll", "catch-move", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
  }
  const Dialog = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$P]]);
  const { create: create$P } = createComponent("notify");
  const _sfc_main$P = create$P({
    components: {
      NutPopup: Popup
    },
    props: {
      id: String,
      color: { type: String, default: "" },
      msg: { type: String, default: "" },
      duration: { type: Number, default: 3e3 },
      className: {
        type: String,
        default: ""
      },
      background: { type: String, default: "" },
      type: {
        type: String,
        default: "danger"
      },
      visible: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: "top"
      },
      onClose: Function,
      onClick: Function,
      unmount: Function
    },
    emits: ["update:visible"],
    setup(props, { emit }) {
      const clickCover = () => {
        props.onClick && props.onClick();
      };
      let timer = null;
      const clearTimer = () => {
        timer && clearTimeout(timer);
        timer = null;
      };
      const hide = () => {
        emit("update:visible", false);
      };
      const isShowPopup = vue.ref(false);
      vue.watch(
        () => props.visible,
        (newVal) => {
          isShowPopup.value = props.visible;
          const DURATION = props.duration;
          if (newVal && DURATION) {
            timer = setTimeout(() => {
              hide();
            }, DURATION);
          }
        },
        { immediate: true }
      );
      vue.onUnmounted(() => {
        clearTimer();
      });
      return { clickCover, isShowPopup };
    }
  });
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.isShowPopup,
      "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.isShowPopup = $event),
      position: _ctx.position,
      overlay: false
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["nut-notify", `nut-notify--${_ctx.type}`, _ctx.className]),
          style: vue.normalizeStyle({ color: _ctx.color, background: _ctx.background }),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
        }, [
          _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createTextVNode(vue.toDisplayString(_ctx.msg), 1)
          ], 64))
        ], 6)
      ]),
      _: 3
    }, 8, ["visible", "position"]);
  }
  const Notify = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$O]]);
  const { componentName: componentName$8, create: create$O } = createComponent("switch");
  const _sfc_main$O = create$O({
    components: { Loading1: iconsVueTaro.Loading1 },
    props: {
      modelValue: {
        type: [String, Number, Boolean],
        default: false
      },
      disable: {
        type: Boolean,
        default: false
      },
      activeColor: {
        type: String,
        default: ""
      },
      inactiveColor: {
        type: String,
        default: ""
      },
      activeText: {
        type: String,
        default: ""
      },
      inactiveText: {
        type: String,
        default: ""
      },
      activeValue: {
        type: [String, Number, Boolean],
        default: true
      },
      inactiveValue: {
        type: [String, Number, Boolean],
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    emits: ["change", "update:modelValue", "update:loading"],
    setup(props, { emit }) {
      const isActive = vue.computed(() => props.modelValue === props.activeValue);
      const classes = vue.computed(() => {
        const prefixCls = componentName$8;
        return {
          [prefixCls]: true,
          [isActive.value ? "nut-switch-open" : "nut-switch-close"]: true,
          [`${prefixCls}-disable`]: props.disable,
          [`${prefixCls}-base`]: true
        };
      });
      const style = vue.computed(() => {
        return {
          backgroundColor: isActive.value ? props.activeColor : props.inactiveColor
        };
      });
      let updateType = "";
      const onClick = (event) => {
        if (props.disable || props.loading)
          return;
        const value = isActive.value ? props.inactiveValue : props.activeValue;
        updateType = "click";
        emit("update:modelValue", value);
        emit("change", value, event);
      };
      vue.watch(
        () => props.modelValue,
        (v) => {
          if (updateType == "click") {
            updateType = "";
          } else {
            emit("change", v);
          }
        }
      );
      return {
        classes,
        style,
        isActive,
        onClick
      };
    }
  });
  const _hoisted_1$H = { class: "nut-switch-button" };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Loading1 = vue.resolveComponent("Loading1");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, [
      vue.createElementVNode("view", _hoisted_1$H, [
        _ctx.loading ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
          vue.createVNode(_component_Loading1, {
            name: "loading1",
            color: _ctx.activeColor
          }, null, 8, ["color"])
        ]) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.activeText ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.withDirectives(vue.createElementVNode("view", { class: "nut-switch-label open" }, vue.toDisplayString(_ctx.activeText), 513), [
            [vue.vShow, _ctx.isActive]
          ]),
          vue.createTextVNode(),
          vue.withDirectives(vue.createElementVNode("view", { class: "nut-switch-label close" }, vue.toDisplayString(_ctx.inactiveText), 513), [
            [vue.vShow, !_ctx.isActive]
          ])
        ], 64)) : vue.createCommentVNode("", true)
      ])
    ], 6);
  }
  const Switch = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N]]);
  const { create: create$N } = createComponent("toast");
  const _sfc_main$N = create$N({
    components: {},
    props: {
      id: String,
      msg: String,
      duration: {
        type: Number,
        default: 2e3
      },
      center: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "text"
      },
      customClass: String,
      bottom: {
        type: String,
        default: "30px"
      },
      size: {
        type: [String, Number],
        default: "base"
      },
      icon: {
        type: Object,
        default: () => {
        }
      },
      textAlignCenter: {
        type: Boolean,
        default: true
      },
      loadingRotate: {
        type: Boolean,
        default: true
      },
      bgColor: {
        type: String,
        default: ""
      },
      onClose: Function,
      unmount: Function,
      cover: {
        type: Boolean,
        default: false
      },
      coverColor: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:visible", "closed"],
    setup(props, { emit }) {
      let timer;
      const clearTimer = () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      };
      const hide = () => {
        emit("update:visible", false);
        emit("closed");
      };
      const show = () => {
        clearTimer();
        if (props.duration) {
          timer = setTimeout(() => {
            hide();
          }, props.duration);
        }
      };
      const clickCover = () => {
        if (props.closeOnClickOverlay) {
          hide();
        }
      };
      vue.watch(
        () => props.visible,
        (val) => {
          if (val) {
            show();
          }
        }
      );
      const hasIcon = vue.computed(() => {
        if (props.type !== "text") {
          return true;
        } else {
          return !!props.icon;
        }
      });
      const iconName = vue.computed(() => {
        if (props.icon) {
          return props.icon;
        } else {
          return {
            success: iconsVueTaro.Success,
            fail: iconsVueTaro.Failure,
            warn: iconsVueTaro.Tips,
            loading: iconsVueTaro.Loading
          }[props.type];
        }
      });
      const toastBodyClass = vue.computed(() => {
        return [
          "nut-toast",
          { "nut-toast-center": props.center },
          { "nut-toast-has-icon": hasIcon.value },
          { "nut-toast-cover": props.cover },
          { "nut-toast-loading": props.type === "loading" },
          props.customClass,
          "nut-toast-" + props.size
        ];
      });
      const onAfterLeave = () => {
        if (props.visible) {
          clearTimer();
          hide();
        }
      };
      return {
        clickCover,
        hasIcon,
        iconName,
        toastBodyClass,
        onAfterLeave,
        renderIcon
      };
    }
  });
  const _hoisted_1$G = {
    key: 0,
    class: "nut-toast-icon-wrapper"
  };
  const _hoisted_2$y = {
    key: 1,
    class: "nut-toast-title"
  };
  const _hoisted_3$r = ["innerHTML"];
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: "toast-fade",
      onAfterLeave: _ctx.onAfterLeave
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("view", {
          class: vue.normalizeClass(_ctx.toastBodyClass),
          style: vue.normalizeStyle({
            bottom: _ctx.center ? "auto" : _ctx.bottom,
            "background-color": _ctx.coverColor
          }),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
        }, [
          _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "nut-toast-inner",
            style: vue.normalizeStyle({
              "text-align": _ctx.textAlignCenter ? "center" : "left",
              "background-color": _ctx.bgColor
            })
          }, [
            _ctx.hasIcon ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$G, [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(_ctx.iconName)), { color: "#ffffff" }))
            ])) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            _ctx.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$y, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            vue.createElementVNode("view", {
              class: "nut-toast-text",
              innerHTML: _ctx.msg
            }, null, 8, _hoisted_3$r)
          ], 4))
        ], 6), [
          [vue.vShow, _ctx.visible]
        ])
      ]),
      _: 3
    }, 8, ["onAfterLeave"]);
  }
  const Toast = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M]]);
  const AVATAR_KEY = Symbol("nut-avatar");
  const { create: create$M } = createComponent("avatar");
  const _sfc_main$M = create$M({
    props: {
      size: {
        type: [String, Number],
        default: "normal"
      },
      shape: {
        type: String,
        default: "round"
      },
      bgColor: {
        type: String,
        default: "#eee"
      },
      color: {
        type: String,
        default: "#666"
      }
    },
    setup(props) {
      const { size, shape, bgColor, color } = vue.toRefs(props);
      const sizeValue = ["large", "normal", "small"];
      const avatarGroup = vue.inject(AVATAR_KEY, null);
      const avatarRef = vue.ref(null);
      const classes = vue.computed(() => {
        var _a, _b;
        const prefixCls = "nut-avatar";
        return {
          [prefixCls]: true,
          [`nut-avatar-${size.value || ((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.size) || "normal"}`]: true,
          [`nut-avatar-${shape.value || ((_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.shape) || "round"}`]: true
        };
      });
      const styles = vue.computed(() => {
        var _a, _b;
        return {
          width: size.value in sizeValue ? "" : `${size.value}px`,
          height: size.value in sizeValue ? "" : `${size.value}px`,
          backgroundColor: `${bgColor.value}`,
          color: `${color.value}`,
          marginLeft: ((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.span) ? `${(_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.span}px` : ""
        };
      });
      return {
        classes,
        styles,
        avatarRef
      };
    }
  });
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "avatarRef",
      style: vue.normalizeStyle(_ctx.styles),
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L]]);
  const { create: create$L } = createComponent("avatar-group");
  const _sfc_main$L = create$L({
    components: {
      NutAvatar: Avatar
    },
    props: {
      maxContent: {
        type: String,
        default: ""
      },
      maxCount: {
        type: [Number, String],
        default: ""
      },
      maxBgColor: {
        type: String,
        default: "#eee"
      },
      maxColor: {
        type: String,
        default: "#666"
      },
      size: {
        type: [String, Number],
        default: "normal"
      },
      shape: {
        type: String,
        default: "round"
      },
      span: {
        type: [String, Number],
        default: "-8"
      },
      zIndex: {
        type: String,
        default: "left"
      }
    },
    setup(props) {
      const avatarGroupRef = vue.ref(null);
      const foldCount = vue.ref(99);
      const observer = vue.ref();
      const styles = vue.computed(() => {
        return {
          marginLeft: -1 * Number(props.span) + "px"
        };
      });
      const foldAvatar = (element) => {
        let count = 0;
        const children = element.children;
        if (props.zIndex === "right") {
          for (let i = 0; i < Number(props.maxCount); i++) {
            const child = children[i];
            child.style.zIndex = `${99 - i}`;
          }
        }
        for (let i = Number(props.maxCount); i < children.length; i++) {
          const child = children[i];
          let className;
          if (Taro.getEnv() === "WEB") {
            className = child.className;
          } else {
            className = child.props.class;
          }
          if (className.includes("avater-fold")) {
            continue;
          }
          child.style.display = "none";
          count++;
        }
        foldCount.value = count;
      };
      const watchDefaultSlot = (element) => {
        const config = { attributes: false, childList: true, subtree: true };
        const callback = function(mutations) {
          let sig = false;
          for (let mutation of mutations) {
            if (mutation.type === "childList") {
              sig = true;
              break;
            }
          }
          if (sig)
            foldAvatar(element);
        };
        const observer2 = new MutationObserver(callback);
        observer2.observe(element, config);
        return observer2;
      };
      vue.onMounted(() => {
        if (props.maxCount) {
          vue.nextTick(() => {
            let element = vue.unref(avatarGroupRef);
            if (Taro.getEnv() === "WEB") {
              if (element && element.$el) {
                element = element.$el;
              }
            }
            foldAvatar(element);
            observer.value = watchDefaultSlot(element);
          });
        }
      });
      vue.onUnmounted(() => {
        var _a;
        (_a = observer.value) == null ? void 0 : _a.disconnect();
      });
      vue.provide(AVATAR_KEY, {
        props,
        avatarGroupRef
      });
      return {
        styles,
        foldCount,
        avatarGroupRef
      };
    }
  });
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_avatar = vue.resolveComponent("nut-avatar");
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "avatarGroupRef",
      class: "nut-avatar-group",
      style: vue.normalizeStyle(_ctx.styles)
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createTextVNode(),
      _ctx.foldCount > 0 ? (vue.openBlock(), vue.createBlock(_component_nut_avatar, {
        key: 0,
        class: "avater-fold",
        color: _ctx.maxColor,
        "bg-color": _ctx.maxBgColor,
        size: _ctx.size,
        shape: _ctx.shape,
        style: vue.normalizeStyle({ magrinLeft: `${_ctx.span}px` })
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString(_ctx.maxContent || _ctx.foldCount), 1)
        ]),
        _: 1
      }, 8, ["color", "bg-color", "size", "shape", "style"])) : vue.createCommentVNode("", true)
    ], 4);
  }
  const AvatarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K]]);
  var CompareResult = /* @__PURE__ */ ((CompareResult2) => {
    CompareResult2[CompareResult2["eq"] = 1] = "eq";
    CompareResult2[CompareResult2["lt"] = 2] = "lt";
    CompareResult2[CompareResult2["gt"] = 3] = "gt";
    return CompareResult2;
  })(CompareResult || {});
  function binarySearch(list, value, compareFunc) {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;
    while (start <= end) {
      tempIndex = Math.floor((start + end) / 2);
      const midValue = list[tempIndex];
      const compareRes = compareFunc(midValue, value);
      if (compareRes === 1) {
        return tempIndex;
      }
      if (compareRes === 2) {
        start = tempIndex + 1;
      } else if (compareRes === 3) {
        end = tempIndex - 1;
      }
    }
    return tempIndex;
  }
  const { create: create$K } = createComponent("list");
  const clientHeight = Taro.getSystemInfoSync().windowHeight || 667;
  const _sfc_main$K = create$K({
    components: {
      NutScrollView: _sfc_main$1t
    },
    props: {
      height: {
        type: [Number],
        default: 50
      },
      listData: {
        type: Array,
        default: () => {
          return [];
        }
      },
      bufferSize: {
        type: Number,
        default: 5
      },
      containerHeight: {
        type: [Number],
        default: clientHeight
      },
      estimateRowHeight: {
        type: Number,
        default: 80
      },
      margin: {
        type: Number,
        default: 10
      }
    },
    emits: ["scrollUp", "scrollDown", "scrollBottom"],
    setup(props, { emit }) {
      const list = vue.ref(null);
      const phantom = vue.ref(null);
      const actualContent = vue.ref(null);
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.reactive({
        start: 0,
        originStartIndex: 0,
        scrollTop: 0,
        list: props.listData.slice(),
        cachePositions: [],
        phantomHeight: props.estimateRowHeight * props.listData.length
      });
      const getContainerHeight = vue.computed(() => {
        return Math.min(props.containerHeight, clientHeight);
      });
      const visibleCount = vue.computed(() => {
        return Math.ceil(getContainerHeight.value / props.estimateRowHeight);
      });
      const end = vue.computed(() => {
        return Math.min(state.originStartIndex + visibleCount.value + props.bufferSize, state.list.length);
      });
      const visibleData = vue.computed(() => {
        return state.list.slice(state.start, end.value);
      });
      const getTransform = () => {
        if (actualContent.value) {
          return `translate3d(0, ${state.start >= 1 ? state.cachePositions[state.start - 1].bottom : 0}px, 0)`;
        }
      };
      const initCachedPosition = () => {
        state.cachePositions = [];
        for (let i = 0; i < state.list.length; ++i) {
          state.cachePositions[i] = {
            index: i,
            height: props.estimateRowHeight,
            top: i * props.estimateRowHeight,
            bottom: (i + 1) * (props.estimateRowHeight + props.margin),
            dValue: 0
          };
        }
      };
      const updateCachedPosition = () => {
        let nodes = actualContent.value.childNodes;
        nodes = Array.from(nodes).filter((node) => node.nodeType === 1);
        const start = nodes[0];
        nodes.forEach((node, index) => __async(this, null, function* () {
          if (!node)
            return;
          useTaroRect(node).then(
            (rect) => {
              if (rect && rect.height) {
                const { height: height2 } = rect;
                const oldHeight = state.cachePositions[index + state.start] ? state.cachePositions[index + state.start].height : props.height;
                const dValue = oldHeight - height2;
                if (dValue && state.cachePositions[index + state.start]) {
                  state.cachePositions[index + state.start].bottom -= dValue;
                  state.cachePositions[index + state.start].height = height2;
                  state.cachePositions[index + state.start].dValue = dValue;
                }
              }
            },
            () => {
            }
          );
        }));
        let startIndex = 0;
        if (start) {
          startIndex = state.start;
        }
        const cachedPositionsLen = state.cachePositions.length;
        let cumulativeDiffHeight = state.cachePositions[startIndex].dValue;
        state.cachePositions[startIndex].dValue = 0;
        for (let i = startIndex + 1; i < cachedPositionsLen; ++i) {
          const item = state.cachePositions[i];
          state.cachePositions[i].top = state.cachePositions[i - 1].bottom;
          state.cachePositions[i].bottom = state.cachePositions[i].bottom - cumulativeDiffHeight;
          if (item.dValue !== 0) {
            cumulativeDiffHeight += item.dValue;
            item.dValue = 0;
          }
        }
        const height = state.cachePositions[cachedPositionsLen - 1].bottom;
        state.phantomHeight = height;
      };
      const getStartIndex = (scrollTop = 0) => {
        let idx = binarySearch(
          state.cachePositions,
          scrollTop,
          (currentValue, targetValue) => {
            const currentCompareValue = currentValue.bottom;
            if (currentCompareValue === targetValue) {
              return CompareResult.eq;
            }
            if (currentCompareValue < targetValue) {
              return CompareResult.lt;
            }
            return CompareResult.gt;
          }
        );
        const targetItem = state.cachePositions[idx];
        if (targetItem.bottom < scrollTop) {
          idx += 1;
        }
        return idx;
      };
      const resetAllVirtualParam = () => {
        state.originStartIndex = 0;
        state.start = 0;
        state.scrollTop = 0;
        list.value.scrollTop = 0;
        initCachedPosition();
        state.phantomHeight = props.estimateRowHeight * state.list.length;
      };
      const handleScrollEvent = (e) => __async(this, null, function* () {
        const scrollTop = Math.max(e.detail ? e.detail.scrollTop : e.target.scrollTop, 0.1);
        const { originStartIndex } = state;
        const currentIndex = getStartIndex(scrollTop);
        if (currentIndex !== originStartIndex) {
          state.originStartIndex = currentIndex;
          state.start = Math.max(state.originStartIndex - props.bufferSize, 0);
          if (end.value >= state.list.length - 1) {
            emit("scrollBottom");
          }
        }
        emit(scrollTop > state.scrollTop ? "scrollUp" : "scrollDown", scrollTop);
        state.scrollTop = scrollTop;
      });
      initCachedPosition();
      vue.watch(
        () => props.listData,
        (val) => {
          state.list = val.slice();
          if (state.list.length === val.length) {
            setTimeout(() => {
              initCachedPosition();
              updateCachedPosition();
            }, 200);
          } else {
            resetAllVirtualParam();
            return;
          }
        }
      );
      vue.watch(
        () => state.start,
        () => {
          if (actualContent.value && state.list.length > 0) {
            Taro.nextTick(() => {
              setTimeout(() => {
                updateCachedPosition();
              }, 200);
            });
          }
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        list,
        phantom,
        actualContent,
        getTransform,
        visibleData,
        refRandomId,
        getContainerHeight,
        handleScrollEvent
      });
    }
  });
  const _hoisted_1$F = ["id"];
  const _hoisted_2$x = ["id"];
  const _hoisted_3$q = ["id"];
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createBlock(_component_nut_scroll_view, {
      id: "list" + _ctx.refRandomId,
      ref: "list",
      class: "nut-list",
      "scroll-y": true,
      style: vue.normalizeStyle({ height: `${_ctx.getContainerHeight}px` }),
      "scroll-top": "0",
      onScroll: _ctx.handleScrollEvent
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          id: "phantom" + _ctx.refRandomId,
          ref: "phantom",
          class: "nut-list-phantom",
          style: vue.normalizeStyle({ height: _ctx.phantomHeight + "px" })
        }, null, 12, _hoisted_1$F),
        vue.createTextVNode(),
        vue.createElementVNode("div", {
          id: "actualContent" + _ctx.refRandomId,
          ref: "actualContent",
          class: "nut-list-container",
          style: vue.normalizeStyle({ transform: _ctx.getTransform() })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.visibleData, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              id: "list-item-" + Number(index + _ctx.start),
              key: item,
              class: "nut-list-item"
            }, [
              vue.renderSlot(_ctx.$slots, "default", {
                item,
                index: index + _ctx.start
              })
            ], 8, _hoisted_3$q);
          }), 128))
        ], 12, _hoisted_2$x)
      ]),
      _: 3
    }, 8, ["id", "style", "onScroll"]);
  }
  const List = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J]]);
  const { create: create$J } = createComponent("circle-progress");
  const _sfc_main$J = create$J({
    props: {
      progress: {
        type: [Number, String],
        default: 0
      },
      strokeWidth: {
        type: [Number, String],
        default: 5
      },
      radius: {
        type: [Number, String],
        default: 50
      },
      strokeLinecap: {
        type: String,
        default: "round"
      },
      color: {
        type: [String, Object],
        default: "#FF673E"
      },
      pathColor: {
        type: String,
        default: "#d9d9d9"
      },
      clockwise: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const isIos = Taro.getSystemInfoSync().platform === "ios";
      const currentRate = vue.ref(props.progress);
      const refRandomId = Math.random().toString(36).slice(-8);
      const isObject2 = (val) => val !== null && typeof val === "object";
      const transColor = (color) => {
        return color && color.replace("#", "%23");
      };
      const stop = () => {
        if (!isObject2(props.color)) {
          return [];
        }
        let color = props.color;
        const colorArr = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b));
        let stopArr = [];
        colorArr.map((item) => {
          let obj = {
            key: "",
            value: ""
          };
          obj.key = item;
          obj.value = color[item];
          stopArr.push(obj);
        });
        return stopArr;
      };
      const style = vue.computed(() => {
        let { strokeWidth } = props;
        let stopArr = stop();
        let stopDom = [];
        if (stopArr) {
          stopArr.map((item) => {
            let obj = "";
            obj = `%3Cstop offset='${item.key}' stop-color='${transColor(item.value)}'/%3E`;
            stopDom.push(obj);
          });
        }
        let perimeter = 283;
        let progress = +currentRate.value;
        let offset = perimeter * Number(format(parseFloat(progress.toFixed(1)))) / 100;
        const isWise = props.clockwise ? 1 : 0;
        const color = isObject2(props.color) ? `url(%23${refRandomId})` : transColor(props.color);
        let d = `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
        const pa = `%3Cdefs%3E%3ClinearGradient id='${refRandomId}' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E${stopDom}%3C/linearGradient%3E%3C/defs%3E`;
        const path = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke='${transColor(
          props.pathColor
        )}' fill='none'/%3E`;
        const path1 = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke-dasharray='${offset},${perimeter}' stroke-linecap='round' stroke='${color}' fill='none'/%3E`;
        return {
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100'  xmlns='http://www.w3.org/2000/svg'%3E${pa}${path}${path1}%3C/svg%3E")`,
          width: "100%",
          height: "100%",
          transition: `${isIos ? "" : "background-image .3s ease 0s, "}stroke .3s ease 0s`
        };
      });
      const format = (progress) => Math.min(Math.max(+progress, 0), 100);
      vue.watch(
        () => props.progress,
        (value) => {
          currentRate.value = Math.min(Math.max(+value, 0), 100);
        }
      );
      return {
        style,
        currentRate,
        refRandomId,
        stop
      };
    }
  });
  const _hoisted_1$E = { class: "nut-circle-progress__text" };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-circle-progress",
      style: vue.normalizeStyle({ height: Number(_ctx.radius) * 2 + "px", width: Number(_ctx.radius) * 2 + "px" })
    }, [
      vue.createElementVNode("div", {
        style: vue.normalizeStyle(_ctx.style)
      }, null, 4),
      vue.createTextVNode(),
      vue.createElementVNode("div", _hoisted_1$E, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("span", null, vue.toDisplayString(_ctx.progress) + "%", 1)
        ])
      ])
    ], 4);
  }
  const CircleProgress = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I]]);
  const { create: create$I } = createComponent("noticebar");
  const _sfc_main$I = create$I({
    props: {
      // 滚动方向  across 横向 vertical 纵向
      direction: {
        type: String,
        default: "across"
      },
      list: {
        type: Array,
        default: () => []
      },
      standTime: {
        type: Number,
        default: 1e3
      },
      complexAm: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number,
        default: 40
      },
      text: {
        type: String,
        default: ""
      },
      closeMode: {
        type: Boolean,
        default: false
      },
      wrapable: {
        type: Boolean,
        default: false
      },
      leftIcon: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: ""
      },
      background: {
        type: String,
        default: ""
      },
      delay: {
        type: [String, Number],
        default: 1
      },
      scrollable: {
        type: Boolean,
        default: null
      },
      speed: {
        type: Number,
        default: 50
      }
    },
    components: {
      ScrollItem: function(props) {
        props.item.props.style = props.style;
        return vue.h(props.item);
      },
      Notice: iconsVueTaro.Notice,
      CircleClose: iconsVueTaro.CircleClose
    },
    emits: ["click", "close", "acrossEnd"],
    setup(props, { emit, slots }) {
      const wrap = vue.ref(null);
      const content = vue.ref(null);
      const state = vue.reactive({
        wrapWidth: 0,
        firstRound: true,
        duration: 0,
        offsetWidth: 0,
        showNoticebar: true,
        animationClass: "",
        animate: false,
        scrollList: [],
        distance: 0,
        timer: null,
        keepAlive: false,
        isCanScroll: null,
        showNotica: true,
        id: Math.round(Math.random() * 1e5)
      });
      const isEllipsis = vue.computed(() => {
        if (state.isCanScroll == null) {
          return false;
        } else {
          return !state.isCanScroll && !props.wrapable;
        }
      });
      const wrapContentClass = vue.computed(() => {
        return {
          "nut-noticebar__page-wrap-content": true,
          "nut-ellipsis": isEllipsis.value,
          [`content${state.id}`]: true,
          [state.animationClass]: true
        };
      });
      const barStyle = vue.computed(() => {
        let style = {};
        props.color && (style.color = props.color);
        props.background && (style.background = props.background);
        if (props.direction == "vertical") {
          style.height = `${props.height}px`;
        }
        return style;
      });
      const contentStyle = vue.computed(() => {
        return {
          animationDelay: (state.firstRound ? props.delay : 0) + "s",
          animationDuration: state.duration + "s",
          transform: `translateX(${state.firstRound ? 0 : state.wrapWidth + "px"})`
        };
      });
      const horseLampStyle = vue.computed(() => {
        let styles = {};
        if (props.complexAm) {
          styles = {
            transform: `translateY(${state.distance}px)`
          };
        } else {
          if (state.animate) {
            styles = {
              transition: `all ${~~(props.height / props.speed / 4)}s`,
              "margin-top": `-${props.height}px`
            };
          }
        }
        return styles;
      });
      vue.watch(
        () => props.text,
        () => {
          initScrollWrap();
        }
      );
      vue.watch(
        () => props.list,
        (value) => {
          state.scrollList = [].concat(value);
        }
      );
      const getRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
            resolve(rect[0]);
          });
        });
      };
      const initScrollWrap = () => {
        if (state.showNoticebar == false) {
          return;
        }
        setTimeout(() => {
          if (!wrap.value || !content.value) {
            return;
          }
          let wrapWidth = 0;
          let offsetWidth = 0;
          getRect(`.wrap${state.id}`).then((rect) => {
            if ((rect == null ? void 0 : rect.width) > 0)
              wrapWidth = rect.width;
            getRect(`.content${state.id}`).then((rect2) => {
              if ((rect2 == null ? void 0 : rect2.width) > 0)
                offsetWidth = rect2.width;
              state.isCanScroll = props.scrollable == null ? offsetWidth > wrapWidth : props.scrollable;
              if (state.isCanScroll) {
                state.wrapWidth = wrapWidth;
                state.offsetWidth = offsetWidth;
                state.duration = offsetWidth / props.speed;
                state.animationClass = "play";
              } else {
                state.animationClass = "";
              }
            });
          });
        }, 100);
      };
      const handleClick = (event) => {
        emit("click", event);
      };
      const onClickIcon = (event) => {
        if (props.closeMode) {
          state.showNoticebar = !props.closeMode;
        }
        emit("close", event);
      };
      const onAnimationEnd = (event) => {
        state.firstRound = false;
        emit("acrossEnd", event);
        setTimeout(() => {
          state.duration = (state.offsetWidth + state.wrapWidth) / props.speed;
          state.animationClass = "play-infinite";
        }, 0);
      };
      const startRollEasy = () => {
        showhorseLamp();
        state.timer = setInterval(showhorseLamp, ~~(props.height / props.speed / 4) * 1e3 + props.standTime);
      };
      const showhorseLamp = () => {
        state.animate = true;
        setTimeout(
          () => {
            state.scrollList.push(state.scrollList[0]);
            state.scrollList.shift();
            state.animate = false;
          },
          ~~(props.height / props.speed / 4) * 1e3
        );
      };
      const startRoll = () => {
        state.timer = setInterval(
          () => {
            let chunk = 100;
            for (let i = 0; i < chunk; i++) {
              scroll(i, i < chunk - 1 ? false : true);
            }
          },
          props.standTime + 100 * props.speed
        );
      };
      const scroll = (n, last) => {
        setTimeout(() => {
          state.distance -= props.height / 100;
          if (last) {
            state.scrollList.push(state.scrollList[0]);
            state.scrollList.shift();
            state.distance = 0;
          }
        }, n * props.speed);
      };
      const go = (item) => {
        emit("click", item);
      };
      const handleClickIcon = () => {
        if (props.closeMode) {
          state.showNoticebar = !props.closeMode;
        }
        emit("close", state.scrollList[0]);
      };
      vue.onMounted(() => {
        if (props.direction == "vertical") {
          if (slots.default) {
            updateSlotChild();
            watchSlots();
          } else {
            state.scrollList = [].concat(props.list);
          }
          setTimeout(() => {
            props.complexAm ? startRoll() : startRollEasy();
          }, props.standTime);
        } else {
          initScrollWrap();
        }
      });
      const updateSlotChild = () => {
        if (slots.default)
          state.scrollList = [].concat(slots.default()[0].children);
      };
      const watchSlots = () => {
        setTimeout(() => {
          var observer = new MutationObserver(() => {
            state.showNotica = false;
            setTimeout(() => {
              state.showNotica = true;
            });
            updateSlotChild();
          });
          const ele = document.getElementsByClassName("nut-noticebar-custom-item")[0];
          if (ele) {
            observer.observe(ele, {
              childList: true,
              subtree: true
            });
          }
        }, 100);
      };
      vue.onActivated(() => {
        if (state.keepAlive) {
          state.keepAlive = false;
        }
      });
      vue.onDeactivated(() => {
        state.keepAlive = true;
        clearInterval(state.timer);
      });
      vue.onUnmounted(() => {
        clearInterval(state.timer);
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        isEllipsis,
        barStyle,
        contentStyle,
        horseLampStyle,
        wrap,
        content,
        handleClick,
        onClickIcon,
        onAnimationEnd,
        go,
        handleClickIcon,
        slots,
        pxCheck,
        wrapContentClass,
        renderIcon
      });
    }
  });
  const _hoisted_1$D = { class: "nut-noticebar" };
  const _hoisted_2$w = { class: "nut-noticebar__page-lefticon" };
  const _hoisted_3$p = { class: "showNotica" };
  const _hoisted_4$o = { class: "nut-noticebar-custom-item" };
  const _hoisted_5$e = ["onClick"];
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Notice = vue.resolveComponent("Notice");
    const _component_CircleClose = vue.resolveComponent("CircleClose");
    const _component_ScrollItem = vue.resolveComponent("ScrollItem");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$D, [
      _ctx.direction == "across" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["nut-noticebar__page", {
          "nut-noticebar__page--withicon": _ctx.closeMode,
          "nut-noticebar__page--close": _ctx.closeMode,
          "nut-noticebar__page--wrapable": _ctx.wrapable
        }]),
        style: vue.normalizeStyle(_ctx.barStyle),
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.createElementVNode("view", _hoisted_2$w, [
          vue.renderSlot(_ctx.$slots, "left-icon", {}, () => [
            _ctx.leftIcon ? (vue.openBlock(), vue.createBlock(_component_Notice, {
              key: 0,
              size: "16px"
            })) : vue.createCommentVNode("", true)
          ])
        ]),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          ref: "wrap",
          class: vue.normalizeClass(`nut-noticebar__page-wrap wrap${_ctx.id}`)
        }, [
          vue.createElementVNode("view", {
            ref: "content",
            class: vue.normalizeClass(_ctx.wrapContentClass),
            style: vue.normalizeStyle(_ctx.contentStyle),
            onAnimationend: _cache[0] || (_cache[0] = (...args) => _ctx.onAnimationEnd && _ctx.onAnimationEnd(...args)),
            onWebkitAnimationEnd: _cache[1] || (_cache[1] = (...args) => _ctx.onAnimationEnd && _ctx.onAnimationEnd(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.text), 1)
            ])
          ], 38)
        ], 2),
        vue.createTextVNode(),
        _ctx.closeMode || _ctx.$slots["right-icon"] ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-noticebar__page-righticon",
          onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.onClickIcon && _ctx.onClickIcon(...args), ["stop"]))
        }, [
          vue.renderSlot(_ctx.$slots, "right-icon", {}, () => [
            vue.createVNode(_component_CircleClose)
          ])
        ])) : vue.createCommentVNode("", true)
      ], 6)), [
        [vue.vShow, _ctx.showNoticebar]
      ]) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.scrollList.length > 0 && _ctx.direction == "vertical" && _ctx.showNoticebar ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "nut-noticebar__vertical",
        style: vue.normalizeStyle(_ctx.barStyle)
      }, [
        _ctx.slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("view", {
            class: "nut-noticebar__vertical-list",
            style: vue.normalizeStyle(_ctx.horseLampStyle)
          }, [
            vue.createElementVNode("view", _hoisted_3$p, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.scrollList, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_ScrollItem, {
                  key: index,
                  style: vue.normalizeStyle({ height: _ctx.height + "px", "line-height": _ctx.height + "px" }),
                  item
                }, null, 8, ["style", "item"]);
              }), 128))
            ])
          ], 4),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_4$o, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 64)) : (vue.openBlock(), vue.createElementBlock("ul", {
          key: 1,
          class: "nut-noticebar__vertical-list",
          style: vue.normalizeStyle(_ctx.horseLampStyle)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.scrollList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("li", {
              key: index,
              class: "nut-noticebar__vertical-item",
              style: vue.normalizeStyle({ height: _ctx.pxCheck(_ctx.height), lineHeight: _ctx.pxCheck(_ctx.height) }),
              onClick: ($event) => _ctx.go(item)
            }, vue.toDisplayString(item), 13, _hoisted_5$e);
          }), 128))
        ], 4)),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: "go",
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleClickIcon())
        }, [
          vue.renderSlot(_ctx.$slots, "right-icon", {}, () => [
            _ctx.closeMode ? (vue.openBlock(), vue.createBlock(_component_CircleClose, {
              key: 0,
              color: _ctx.color,
              size: "11px"
            }, null, 8, ["color"])) : vue.createCommentVNode("", true)
          ])
        ])
      ], 4)) : vue.createCommentVNode("", true)
    ]);
  }
  const Noticebar = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H]]);
  const { create: create$H } = createComponent("empty");
  const cN$c = "NutEmpty";
  const defaultStatus = {
    empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
    error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
    network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
  };
  const _sfc_main$H = create$H({
    props: {
      image: {
        type: String,
        default: "empty"
      },
      imageSize: {
        type: [Number, String],
        default: ""
      },
      description: {
        type: String,
        default: ""
      }
    },
    setup(props) {
      const translate = useLocale(cN$c);
      const style = vue.computed(() => {
        if (props.imageSize) {
          return {
            width: pxCheck(props.imageSize),
            height: pxCheck(props.imageSize)
          };
        }
        return {};
      });
      const src = vue.computed(() => {
        if (props.image.startsWith("https://") || props.image.startsWith("http://") || props.image.startsWith("//")) {
          return props.image;
        } else {
          return defaultStatus[props.image];
        }
      });
      return { src, style, translate };
    }
  });
  const _hoisted_1$C = { class: "nut-empty" };
  const _hoisted_2$v = ["src"];
  const _hoisted_3$o = { class: "nut-empty__description" };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$C, [
      vue.createElementVNode("view", {
        class: "nut-empty__box",
        style: vue.normalizeStyle(_ctx.style)
      }, [
        vue.renderSlot(_ctx.$slots, "image", {}, () => [
          _ctx.src ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 0,
            class: "nut-empty__box--img",
            src: _ctx.src
          }, null, 8, _hoisted_2$v)) : vue.createCommentVNode("", true)
        ])
      ], 4),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "description", {}, () => [
        vue.createElementVNode("view", _hoisted_3$o, vue.toDisplayString(_ctx.description || _ctx.translate("noData")), 1)
      ]),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const Empty = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G]]);
  const STEPS_KEY = Symbol("nut-steps");
  const { create: create$G, componentName: componentName$7 } = createComponent("steps");
  const _sfc_main$G = create$G({
    props: {
      direction: {
        type: String,
        default: "horizontal"
      },
      current: {
        type: [String, Number],
        default: "0"
      },
      progressDot: {
        type: Boolean,
        default: false
      }
    },
    emits: ["clickStep"],
    setup(props, { emit, slots }) {
      const state = vue.reactive({
        children: []
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName$7;
        return {
          [prefixCls]: true,
          [`${prefixCls}-${props.direction}`]: true,
          [`${prefixCls}-dot`]: !!props.progressDot
        };
      });
      const relation = (child) => {
        child && state.children.push(child);
      };
      const onEmit = (index) => {
        emit("clickStep", index);
      };
      vue.provide(STEPS_KEY, {
        relation,
        state,
        props,
        onEmit
      });
      return () => {
        var _a;
        return vue.h(
          "view",
          {
            class: classes.value
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
    }
  });
  const { create: create$F, componentName: componentName$6 } = createComponent("step");
  const _sfc_main$F = create$F({
    props: {
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      }
    },
    emits: ["clickStep"],
    setup() {
      const { proxy } = vue.getCurrentInstance();
      const parent = vue.inject(STEPS_KEY);
      parent["relation"](proxy);
      const state = vue.reactive({
        dot: parent.props.progressDot
      });
      const index = vue.computed(() => parent.state.children.indexOf(proxy) + 1);
      const getCurrentStatus = () => {
        const activeIndex = index.value;
        if (activeIndex < +parent.props.current)
          return "finish";
        return activeIndex === +parent.props.current ? "process" : "wait";
      };
      const status = vue.computed(() => {
        return getCurrentStatus();
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName$6;
        return {
          [prefixCls]: true,
          [`${prefixCls}-${status.value}`]: true
        };
      });
      const handleClickStep = () => {
        parent["onEmit"](index.value);
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        index,
        classes,
        handleClickStep
      });
    }
  });
  const _hoisted_1$B = { class: "nut-step-head" };
  const _hoisted_2$u = /* @__PURE__ */ vue.createElementVNode("view", { class: "nut-step-line" }, null, -1);
  const _hoisted_3$n = { class: "nut-step-icon-inner" };
  const _hoisted_4$n = {
    key: 1,
    class: "nut-step-inner"
  };
  const _hoisted_5$d = { class: "nut-step-main" };
  const _hoisted_6$c = { class: "nut-step-title" };
  const _hoisted_7$a = { key: 0 };
  const _hoisted_8$6 = {
    key: 0,
    class: "nut-step-content"
  };
  const _hoisted_9$6 = ["innerHTML"];
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickStep && _ctx.handleClickStep(...args))
    }, [
      vue.createElementVNode("view", _hoisted_1$B, [
        _hoisted_2$u,
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-step-icon", [!_ctx.dot ? "is-icon" : ""]])
        }, [
          vue.createElementVNode("view", _hoisted_3$n, [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.dot ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [], 64)) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$n, vue.toDisplayString(_ctx.index), 1))
            ])
          ])
        ], 2)
      ]),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_5$d, [
        vue.createElementVNode("view", _hoisted_6$c, [
          !_ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$a, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "title")
        ]),
        vue.createTextVNode(),
        _ctx.content || _ctx.$slots.content ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$6, [
          !_ctx.$slots.content ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            innerHTML: _ctx.content
          }, null, 8, _hoisted_9$6)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "content")
        ])) : vue.createCommentVNode("", true)
      ])
    ], 2);
  }
  const Step = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F]]);
  const SWIPER_KEY = Symbol("nut-swiper");
  const { create: create$E, componentName: componentName$5 } = createComponent("swiper");
  const _sfc_main$E = create$E({
    props: {
      width: {
        type: [Number, String]
      },
      height: {
        type: [Number, String]
      },
      direction: {
        type: String,
        default: "horizontal"
        //horizontal and vertical
      },
      paginationVisible: {
        type: Boolean,
        default: false
      },
      paginationColor: {
        type: String,
        default: "#fff"
      },
      loop: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 500
      },
      autoPlay: {
        type: [Number, String],
        default: 0
      },
      initPage: {
        type: [Number, String],
        default: 0
      },
      touchable: {
        type: Boolean,
        default: true
      },
      isPreventDefault: {
        type: Boolean,
        default: true
      },
      isStopPropagation: {
        type: Boolean,
        default: true
      },
      paginationUnselectedColor: {
        type: String,
        default: "#ddd"
      }
    },
    emits: ["change"],
    setup(props, { emit, slots, expose }) {
      const container = vue.ref();
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.reactive({
        active: 0,
        num: 0,
        rect: null,
        width: 0,
        height: 0,
        moving: false,
        offset: 0,
        touchTime: 0,
        autoplayTimer: null,
        children: [],
        childrenVNode: [],
        style: {}
      });
      const touch = useTouch();
      const isVertical = vue.computed(() => props.direction === "vertical");
      const classesInner = vue.computed(() => {
        const prefixCls = componentName$5;
        return {
          [`${prefixCls}-inner`]: true,
          [`${prefixCls}-vertical`]: isVertical.value
        };
      });
      const classesPagination = vue.computed(() => {
        const prefixCls = componentName$5;
        return {
          [`${prefixCls}-pagination`]: true,
          [`${prefixCls}-pagination-vertical`]: isVertical.value
        };
      });
      const delTa = vue.computed(() => {
        return isVertical.value ? touch.deltaY.value : touch.deltaX.value;
      });
      const isCorrectDirection = vue.computed(() => {
        return touch.direction.value === props.direction;
      });
      const childCount = vue.computed(() => state.children.length);
      const size = vue.computed(() => state[isVertical.value ? "height" : "width"]);
      const trackSize = vue.computed(() => childCount.value * size.value);
      const minOffset = vue.computed(() => {
        if (state.rect) {
          const base = isVertical.value ? state.rect.height : state.rect.width;
          return base - size.value * childCount.value;
        }
        return 0;
      });
      const activePagination = vue.computed(() => (state.active + childCount.value) % childCount.value);
      const getStyle = () => {
        let offset = 0;
        offset = state.offset;
        state.style = {
          transitionDuration: `${state.moving ? 0 : props.duration}ms`,
          transform: `translate${isVertical.value ? "Y" : "X"}(${offset}px)`,
          [isVertical.value ? "height" : "width"]: `${size.value * childCount.value}px`,
          [isVertical.value ? "width" : "height"]: `${isVertical.value ? state.width : state.height}px`
        };
      };
      const relation = (child) => {
        var _a;
        let children = [];
        const childrenVNodeLen = state.childrenVNode.length;
        let slot = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots);
        slot = slot.filter((item) => item.children && Array.isArray(item.children));
        slot.forEach((item) => {
          children = children.concat(item.children);
        });
        if (!childrenVNodeLen) {
          state.childrenVNode = children.slice();
          child.proxy && state.children.push(child.proxy);
        } else {
          if (childrenVNodeLen > children.length) {
            state.children = state.children.filter((item) => child.proxy !== item);
          } else if (childrenVNodeLen < children.length) {
            for (let i = 0; i < childrenVNodeLen; i++) {
              if (children[i].key !== state.childrenVNode[i].key) {
                child.proxy && state.children.splice(i, 0, child.proxy);
                child.vnode && state.childrenVNode.splice(i, 0, child.vnode);
                break;
              }
            }
            if (childrenVNodeLen !== children.length) {
              child.proxy && state.children.push(child.proxy);
              child.vnode && state.childrenVNode.push(child.vnode);
            }
          } else {
            state.childrenVNode = children.slice();
            child.proxy && state.children.push(child.proxy);
          }
        }
      };
      const getOffset = (active, offset = 0) => {
        let currentPosition = active * size.value;
        if (!props.loop) {
          currentPosition = Math.min(currentPosition, -minOffset.value);
        }
        let targetOffset = offset - currentPosition;
        if (!props.loop) {
          targetOffset = clamp(targetOffset, minOffset.value, 0);
        }
        return targetOffset;
      };
      const getActive = (pace) => {
        const { active } = state;
        if (pace) {
          if (props.loop) {
            return clamp(active + pace, -1, childCount.value);
          }
          return clamp(active + pace, 0, childCount.value - 1);
        }
        return active;
      };
      const move = ({ pace = 0, offset = 0, isEmit = false }) => {
        if (childCount.value <= 1)
          return;
        const { active } = state;
        const targetActive = getActive(pace);
        const targetOffset = getOffset(targetActive, offset);
        if (props.loop) {
          if (state.children[0] && targetOffset !== minOffset.value) {
            const rightBound = targetOffset < minOffset.value;
            state.children[0].setOffset(rightBound ? trackSize.value : 0);
          }
          if (state.children[childCount.value - 1] && targetOffset !== 0) {
            const leftBound = targetOffset > 0;
            state.children[childCount.value - 1].setOffset(leftBound ? -trackSize.value : 0);
          }
        }
        state.active = targetActive;
        state.offset = targetOffset;
        if (isEmit && active !== state.active) {
          emit("change", activePagination.value);
        }
        getStyle();
      };
      const resettPosition = () => {
        state.moving = true;
        if (state.active <= -1) {
          move({ pace: childCount.value });
        }
        if (state.active >= childCount.value) {
          move({ pace: -childCount.value });
        }
      };
      const stopAutoPlay = () => {
        if (state.autoplayTimer) {
          clearTimeout(state.autoplayTimer);
        }
      };
      const jump = (pace) => {
        resettPosition();
        touch.reset();
        requestAniFrame$1(() => {
          requestAniFrame$1(() => {
            state.moving = false;
            move({
              pace,
              isEmit: true
            });
          });
        });
      };
      const prev = () => {
        jump(-1);
      };
      const next = () => {
        jump(1);
      };
      const to = (index) => {
        resettPosition();
        touch.reset();
        requestAniFrame$1(() => {
          state.moving = false;
          let targetIndex;
          if (props.loop && childCount.value === index) {
            targetIndex = state.active === 0 ? 0 : index;
          } else {
            targetIndex = index % childCount.value;
          }
          move({
            pace: targetIndex - state.active,
            isEmit: true
          });
        });
      };
      const autoplay = () => {
        if (Number(props.autoPlay) <= 0 || childCount.value <= 1)
          return;
        stopAutoPlay();
        state.autoplayTimer = setTimeout(() => {
          next();
          autoplay();
        }, Number(props.autoPlay));
      };
      const init = (..._0) => __async(this, [..._0], function* (active = +props.initPage) {
        if (!container.value)
          return;
        stopAutoPlay();
        useTaroRect(container).then(
          (rect) => {
            state.rect = rect;
            active = Math.min(childCount.value - 1, active);
            state.width = props.width ? +props.width : rect == null ? void 0 : rect.width;
            state.height = props.height ? +props.height : rect == null ? void 0 : rect.height;
            state.active = active;
            state.offset = getOffset(state.active);
            state.moving = true;
            getStyle();
            autoplay();
          },
          () => {
          }
        );
      });
      const onTouchStart = (e) => {
        if (props.isStopPropagation)
          e.stopPropagation();
        if (!props.touchable)
          return;
        touch.start(e);
        state.touchTime = Date.now();
        stopAutoPlay();
        resettPosition();
      };
      const onTouchMove = (e) => {
        if (props.touchable && state.moving) {
          touch.move(e);
          if (isCorrectDirection.value) {
            move({
              offset: delTa.value
            });
          }
        }
      };
      const onTouchEnd = () => {
        if (!props.touchable || !state.moving)
          return;
        const speed = delTa.value / (Date.now() - state.touchTime);
        const isShouldMove = Math.abs(speed) > 0.3 || Math.abs(delTa.value) > +(size.value / 2).toFixed(2);
        if (isShouldMove && isCorrectDirection.value) {
          let pace = 0;
          const offset = isVertical.value ? touch.offsetY.value : touch.offsetX.value;
          if (props.loop) {
            pace = offset > 0 ? delTa.value > 0 ? -1 : 1 : 0;
          } else {
            pace = -Math[delTa.value > 0 ? "ceil" : "floor"](delTa.value / size.value);
          }
          move({
            pace,
            isEmit: true
          });
        } else if (delTa.value) {
          move({ pace: 0 });
        }
        state.moving = false;
        getStyle();
        autoplay();
      };
      vue.provide(SWIPER_KEY, {
        props,
        size,
        relation
      });
      expose({
        prev,
        next,
        to
      });
      vue.onDeactivated(() => {
        stopAutoPlay();
      });
      vue.onBeforeUnmount(() => {
        stopAutoPlay();
      });
      vue.watch(
        () => props.initPage,
        (val) => {
          Taro.nextTick(() => {
            init(+val);
          });
          Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
            init(+val);
          });
        }
      );
      vue.watch(
        () => props.height,
        () => {
          Taro.nextTick(() => {
            init();
          });
          Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
            init();
          });
        }
      );
      vue.watch(
        () => state.children.length,
        () => {
          Taro.nextTick(() => {
            init();
          });
          Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
            Taro.nextTick(() => {
              init();
            });
          });
        }
      );
      vue.watch(
        () => props.autoPlay,
        (val) => {
          Number(val) > 0 ? autoplay() : stopAutoPlay();
        }
      );
      return {
        state,
        refRandomId,
        classesPagination,
        classesInner,
        container,
        activePagination,
        onTouchStart,
        onTouchMove,
        onTouchEnd
      };
    }
  });
  const _hoisted_1$A = ["id", "catch-move"];
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "container-" + _ctx.refRandomId,
      ref: "container",
      class: "nut-swiper",
      "catch-move": _ctx.isPreventDefault,
      onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
      onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
      onTouchcancel: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.classesInner),
        style: vue.normalizeStyle(_ctx.state.style)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "page"),
      vue.createTextVNode(),
      _ctx.paginationVisible && !_ctx.$slots.page ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(_ctx.classesPagination)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.state.children.length, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("i", {
            key: index,
            style: vue.normalizeStyle({
              backgroundColor: _ctx.activePagination === index ? _ctx.paginationColor : _ctx.paginationUnselectedColor
            }),
            class: vue.normalizeClass({ active: _ctx.activePagination === index })
          }, null, 6);
        }), 128))
      ], 2)) : vue.createCommentVNode("", true)
    ], 40, _hoisted_1$A);
  }
  const Swiper = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E]]);
  function useExpose(apis) {
    const instance = vue.getCurrentInstance();
    if (instance) {
      Object.assign(instance.proxy, apis);
    }
  }
  const { create: create$D } = createComponent("swiper-item");
  const _sfc_main$D = create$D({
    setup() {
      const parent = vue.inject(SWIPER_KEY);
      parent["relation"](vue.getCurrentInstance());
      const state = vue.reactive({
        offset: 0
      });
      const style = vue.computed(() => {
        const style2 = {};
        const direction = parent == null ? void 0 : parent.props.direction;
        if (parent == null ? void 0 : parent.size.value) {
          style2[direction === "horizontal" ? "width" : "height"] = `${parent == null ? void 0 : parent.size.value}px`;
        }
        if (state.offset) {
          style2["transform"] = `translate${direction === "horizontal" ? "X" : "Y"}(${state.offset}px)`;
        }
        return style2;
      });
      const setOffset = (offset) => {
        state.offset = offset;
      };
      vue.onUnmounted(() => {
        parent["relation"](vue.getCurrentInstance(), "unmount");
      });
      useExpose({ setOffset });
      return {
        style
      };
    }
  });
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-swiper-item",
      style: vue.normalizeStyle(_ctx.style)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 4);
  }
  const SwiperItem = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D]]);
  const { componentName: componentName$4, create: create$C } = createComponent("price");
  const _sfc_main$C = create$C({
    props: {
      price: {
        type: [Number, String],
        default: 0
      },
      needSymbol: {
        type: Boolean,
        default: true
      },
      symbol: {
        type: String,
        default: "&yen;"
      },
      decimalDigits: {
        type: Number,
        default: 2
      },
      thousands: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: "before"
      },
      size: {
        type: String,
        default: "normal"
      },
      strikeThrough: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const classes = vue.computed(() => {
        return {
          [componentName$4]: true,
          [`${componentName$4}--strike`]: props.strikeThrough
        };
      });
      const replaceSpecialChar = (url) => {
        url = url.replace(/&quot;/g, '"');
        url = url.replace(/&amp;/g, "&");
        url = url.replace(/&lt;/g, "<");
        url = url.replace(/&gt;/g, ">");
        url = url.replace(/&nbsp;/g, " ");
        url = url.replace(/&yen;/g, "￥");
        return url;
      };
      const showSymbol = vue.computed(() => {
        const symbol = props.needSymbol ? replaceSpecialChar(props.symbol) : "";
        return symbol;
      });
      const checkPoint = (price) => {
        return String(price).indexOf(".") > 0;
      };
      const formatThousands = (num) => {
        if (Number(num) == 0) {
          num = 0;
        }
        if (checkPoint(num)) {
          num = Number(num).toFixed(props.decimalDigits);
          num = typeof num.split(".") === "string" ? num.split(".") : num.split(".")[0];
        } else {
          num = num.toString();
        }
        if (props.thousands) {
          return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
        } else {
          return num;
        }
      };
      const formatDecimal = (decimalNum) => {
        if (Number(decimalNum) == 0) {
          decimalNum = 0;
        }
        if (checkPoint(decimalNum)) {
          decimalNum = Number(decimalNum).toFixed(props.decimalDigits);
          decimalNum = typeof decimalNum.split(".") === "string" ? 0 : decimalNum.split(".")[1] ? decimalNum.split(".")[1] : 0;
        } else {
          decimalNum = 0;
        }
        const result = "0." + decimalNum;
        const resultFixed = Number(result).toFixed(props.decimalDigits);
        return String(resultFixed).substring(2, resultFixed.length);
      };
      return {
        classes,
        showSymbol,
        checkPoint,
        formatThousands,
        formatDecimal
      };
    }
  });
  const _hoisted_1$z = ["innerHTML"];
  const _hoisted_2$t = ["innerHTML"];
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      _ctx.needSymbol && _ctx.position === "before" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
        innerHTML: _ctx.showSymbol
      }, null, 10, _hoisted_1$z)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(`nut-price--${_ctx.size}`)
      }, vue.toDisplayString(_ctx.formatThousands(_ctx.price)), 3),
      vue.createTextVNode(),
      _ctx.decimalDigits != 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(`nut-price--decimal-${_ctx.size}`)
      }, ".", 2)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(`nut-price--decimal-${_ctx.size}`)
      }, vue.toDisplayString(_ctx.formatDecimal(_ctx.price)), 3),
      vue.createTextVNode(),
      _ctx.needSymbol && _ctx.position === "after" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: vue.normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
        innerHTML: _ctx.showSymbol
      }, null, 10, _hoisted_2$t)) : vue.createCommentVNode("", true)
    ], 2);
  }
  const Price = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C]]);
  const { create: create$B } = createComponent("image-preview");
  const _sfc_main$B = create$B({
    props: {
      show: {
        type: Boolean,
        default: false
      },
      images: {
        type: Array,
        default: () => []
      },
      contentClose: {
        type: Boolean,
        default: true
      },
      initNo: {
        type: Number,
        default: 0
      },
      paginationVisible: {
        type: Boolean,
        default: false
      },
      paginationColor: {
        type: String,
        default: "#fff"
      },
      autoplay: {
        type: [Number, String],
        default: 3e3
      },
      showIndex: {
        type: Boolean,
        default: true
      },
      closeable: {
        type: Boolean,
        default: false
      },
      closeIconPosition: {
        type: String,
        default: "top-right"
        // top-right  top-left
      },
      beforeClose: Function,
      isLoop: {
        type: Boolean,
        default: true
      }
    },
    emits: ["close", "change", "longPress"],
    components: {
      NutPopup: Popup,
      NutSwiper: Swiper,
      NutSwiperItem: SwiperItem,
      CircleClose: iconsVueTaro.CircleClose
    },
    setup(props, { emit }) {
      const state = vue.reactive({
        showPop: false,
        active: 0,
        options: {
          muted: true,
          controls: true
        },
        eleImg: null,
        store: {
          scale: 1,
          moveable: false,
          originScale: 1,
          oriDistance: 1
        },
        lastTouchEndTime: 0,
        // 用来辅助监听双击
        ENV: Taro.getEnv(),
        ENV_TYPE: Taro.ENV_TYPE
      });
      const styles = vue.computed(() => {
        let style = {};
        if (props.closeIconPosition == "top-right") {
          style.right = "10px";
        } else {
          style.left = "10px";
        }
        return style;
      });
      const setActive = (active) => {
        if (active !== state.active) {
          state.active = active;
          emit("change", state.active);
        }
      };
      const closeOnImg = () => {
        if (props.contentClose) {
          onClose();
        }
      };
      const onClose = () => {
        funInterceptor(props.beforeClose, {
          args: [state.active],
          done: () => closeDone()
        });
      };
      const closeDone = () => {
        state.showPop = false;
        state.store.scale = 1;
        scaleNow();
        emit("close");
      };
      const getDistance = (first, second) => {
        return Math.hypot(Math.abs(second.x - first.x), Math.abs(second.y - first.y));
      };
      const scaleNow = () => {
        if (state.eleImg != null) {
          state.eleImg.style.transform = "scale(" + state.store.scale + ")";
        }
      };
      const onTouchStart = (event) => {
        const curTouchTime = (/* @__PURE__ */ new Date()).getTime();
        const touches = event.touches;
        const events = touches[0];
        const events2 = touches[1];
        const store = state.store;
        if (curTouchTime - state.lastTouchEndTime < 300) {
          if (store.scale > 1) {
            store.scale = 1;
          } else if (store.scale == 1) {
            store.scale = 2;
          }
          scaleNow();
        }
        store.moveable = true;
        if (events2) {
          store.oriDistance = getDistance(
            {
              x: events.pageX,
              y: events.pageY
            },
            {
              x: events2.pageX,
              y: events2.pageY
            }
          );
        }
        store.originScale = store.scale || 1;
      };
      const onTouchMove = (event) => {
        if (!state.store.moveable) {
          return;
        }
        const store = state.store;
        const touches = event.touches;
        const events = touches[0];
        const events2 = touches[1];
        if (events2) {
          const curDistance = getDistance(
            {
              x: events.pageX,
              y: events.pageY
            },
            {
              x: events2.pageX,
              y: events2.pageY
            }
          );
          const curScale = curDistance / store.oriDistance;
          store.scale = store.originScale * curScale;
          state.store.scale = Math.min(state.store.scale, 3);
          scaleNow();
        }
      };
      const onTouchEnd = () => {
        state.lastTouchEndTime = (/* @__PURE__ */ new Date()).getTime();
        const store = state.store;
        store.moveable = false;
        if (store.scale < 1.1 && store.scale > 1 || store.scale < 1) {
          store.scale = 1;
          scaleNow();
        }
      };
      const longPress = (image) => {
        emit("longPress", image);
      };
      const init = () => {
        state.eleImg = document.querySelector(".nut-image-preview");
        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
        document.addEventListener("touchcancel", onTouchEnd);
      };
      vue.watch(
        () => props.show,
        (val) => {
          state.showPop = val;
          if (val) {
            setActive(props.initNo);
            init();
          }
        }
      );
      vue.watch(
        () => props.initNo,
        (val) => {
          if (val != state.active)
            setActive(val);
        }
      );
      vue.onMounted(() => {
        setActive(props.initNo);
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        setActive,
        onClose,
        closeOnImg,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        getDistance,
        scaleNow,
        longPress,
        styles
      });
    }
  });
  const _hoisted_1$y = ["src", "on:longPress", "on:longTap"];
  const _hoisted_2$s = {
    key: 0,
    class: "nut-image-preview-index"
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_swiper_item = vue.resolveComponent("nut-swiper-item");
    const _component_nut_swiper = vue.resolveComponent("nut-swiper");
    const _component_CircleClose = vue.resolveComponent("CircleClose");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPop,
      "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => _ctx.showPop = $event),
      "pop-class": "nut-image-preview-custom-pop"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: "nut-image-preview",
          onTouchstartCapture: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args))
        }, [
          _ctx.showPop ? (vue.openBlock(), vue.createBlock(_component_nut_swiper, {
            key: 0,
            "auto-play": _ctx.autoplay,
            class: "nut-image-preview-swiper",
            loop: _ctx.isLoop,
            "is-prevent-default": false,
            direction: "horizontal",
            "init-page": _ctx.initNo,
            "pagination-visible": _ctx.paginationVisible,
            "pagination-color": _ctx.paginationColor,
            onChange: _ctx.setActive
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.images, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_nut_swiper_item, { key: index }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("img", {
                      src: item.src,
                      mode: "aspectFit",
                      class: "nut-image-preview-img",
                      "on:longPress": ($event) => _ctx.longPress(item),
                      "on:longTap": ($event) => _ctx.longPress(item),
                      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.closeOnImg && _ctx.closeOnImg(...args), ["stop"]))
                    }, null, 40, _hoisted_1$y)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : vue.createCommentVNode("", true)
        ], 32),
        vue.createTextVNode(),
        _ctx.showIndex ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$s, vue.toDisplayString(_ctx.active + 1) + " / " + vue.toDisplayString(_ctx.images.length), 1)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.closeable ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "nut-image-preview-close-icon",
          style: vue.normalizeStyle(_ctx.styles),
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClose && _ctx.onClose(...args))
        }, [
          vue.createVNode(_component_CircleClose, { color: "#ffffff" })
        ], 4)) : vue.createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["visible"]);
  }
  const ImagePreview = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B]]);
  function useExtend(apis) {
    const instance = vue.getCurrentInstance();
    if (instance) {
      Object.assign(instance.proxy, apis);
    }
  }
  const { create: create$A } = createComponent("countup");
  const _sfc_main$A = create$A({
    props: {
      initNum: {
        type: Number,
        default: 0
      },
      endNum: {
        type: Number,
        default: 0
      },
      speed: {
        type: Number,
        default: 1
      },
      toFixed: {
        type: Number,
        default: 0
      },
      during: {
        type: Number,
        default: 1e3
      },
      startFlag: {
        type: Boolean,
        default: true
      },
      // 数字滚动
      numWidth: {
        type: Number,
        default: 20
      },
      numHeight: {
        type: Number,
        default: 20
      },
      scrolling: {
        type: Boolean,
        default: false
      },
      // 自定义图片
      customBgImg: {
        type: String,
        default: ""
      },
      customSpacNum: {
        type: Number,
        default: 0
      },
      customChangeNum: {
        type: Number,
        default: 1
      },
      // 抽奖
      type: {
        type: String,
        default: ""
      },
      machineNum: {
        type: Number,
        default: 3
      },
      machinePrizeNum: {
        type: Number,
        default: 0
      },
      machinePrizeLevel: {
        type: Number,
        default: 0
      },
      machineTrunMore: {
        type: Number,
        default: 0
      }
    },
    components: {},
    emits: ["click", "scrollEnd"],
    setup(props, { emit }) {
      const data = vue.reactive({
        valFlag: false,
        current: 0,
        sortFlag: "add",
        initDigit1: 0,
        initDigit2: 0,
        to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
        timer: null,
        totalCount: 0,
        //正整数
        pointNum: 0,
        //小数位
        numberVal: 0,
        //数字
        num_total_len: 0,
        //数字长度
        relNum: 0,
        //去除小数点
        customNumber: 1,
        prizeLevelTrun: 0,
        prizeY: [],
        prizeYPrev: [],
        // machineTransition: 'none',
        finshMachine: 0,
        notPrize: [],
        typeMachine: ""
      });
      const { startFlag, scrolling, customBgImg, type } = vue.reactive(props);
      vue.watch(
        () => props.customChangeNum,
        () => {
          clearIntervalTime();
          countGo(0);
        }
      );
      vue.watch(
        () => props.machinePrizeLevel,
        (count) => {
          data.prizeLevelTrun = count;
        }
      );
      vue.watch(
        () => props.initNum,
        (count) => {
          data.current = count;
          data.valFlag = false;
          valChange();
        }
      );
      vue.watch(
        () => props.endNum,
        () => {
          data.current = props.initNum;
          data.valFlag = false;
          valChange();
        }
      );
      const valChange = () => {
        if (data.valFlag) {
          return false;
        }
        if (startFlag) {
          if (scrolling || customBgImg) {
            if (type != "machine") {
              countGo();
            }
          } else {
            countChange();
            setTimeout(() => {
              data.valFlag = true;
            }, 300);
          }
        }
      };
      const clearIntervalTime = () => {
        clearInterval(Number(data.timer));
        data.timer = null;
      };
      const calculation = (num1, num2, type2) => {
        const num1Digits = (num1.toString().split(".")[1] || "").length;
        const num2Digits = (num2.toString().split(".")[1] || "").length;
        const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
        if (type2 == "-") {
          const n = Number((num1 * baseNum - num2 * baseNum).toFixed(0));
          return n / baseNum;
        } else {
          const m = Number((num1 * baseNum + num2 * baseNum).toFixed(0));
          return m / baseNum;
        }
      };
      const topNumber = (index) => {
        let { num_total_len, pointNum, initDigit1, initDigit2, sortFlag } = data;
        let idx1 = sortFlag == "add" || sortFlag == "equal" ? String(initDigit2)[index - (num_total_len - pointNum)] : 10 - Number(String(initDigit2)[index - (num_total_len - pointNum)]);
        let idx2 = sortFlag == "add" || sortFlag == "equal" ? String(initDigit1)[index] : 10 - Number(String(initDigit1)[index]);
        let num = index > num_total_len - pointNum - 1 ? -idx1 * 100 + "%" : index <= String(initDigit1).length - 1 ? -idx2 * 100 + "%" : 0;
        if (num == "-1000%") {
          num = 0;
        }
        return num;
      };
      const turnNumber = (index) => {
        let { num_total_len, pointNum, initDigit1, initDigit2 } = data;
        let idx1 = String(initDigit2)[index - (num_total_len - pointNum)];
        let num = index > num_total_len - pointNum - 1 ? idx1 ? idx1 : 0 : index <= String(initDigit1).length - 1 ? String(initDigit1)[index] : 0;
        return num;
      };
      const countChange = () => {
        let { endNum, initNum, speed, toFixed } = props;
        let countTimer = setInterval(() => {
          if (initNum > endNum) {
            if (data.current <= endNum || data.current <= speed) {
              data.current = Number(endNum.toFixed(toFixed));
              clearInterval(countTimer);
              emit("scrollEnd");
              data.valFlag = false;
            } else {
              data.current = Number((parseFloat(String(data.current)) - parseFloat(String(speed))).toFixed(toFixed));
            }
          } else {
            if (data.current >= endNum) {
              data.current = Number(endNum.toFixed(toFixed));
              clearInterval(countTimer);
              emit("scrollEnd");
              data.valFlag = false;
            } else {
              data.current = Number((parseFloat(String(data.current)) + parseFloat(String(speed))).toFixed(toFixed));
            }
          }
        }, props.during);
      };
      const countGo = (flag) => {
        let { initNum, endNum, toFixed, customBgImg: customBgImg2 } = props;
        if (customBgImg2) {
          initNum = props.customChangeNum;
        }
        let startNumber1, startNumber2, endNumber1, endNumber2;
        if (initNum != 0) {
          if (toFixed != 0) {
            initNum = Number(initNum.toFixed(toFixed));
          }
          if (String(initNum).indexOf(".") > -1) {
            startNumber1 = String(initNum).split(".")[0].length;
            startNumber2 = String(initNum).split(".")[1].length;
          } else {
            startNumber1 = String(initNum).length;
            startNumber2 = 0;
          }
        } else {
          startNumber1 = 1;
          startNumber2 = 0;
        }
        if (endNum != 0) {
          if (toFixed != 0) {
            endNum = Number(endNum.toFixed(toFixed));
          }
          if (String(endNum).indexOf(".") > -1) {
            endNumber1 = String(endNum).split(".")[0].length;
            endNumber2 = String(endNum).split(".")[1].length;
          } else {
            endNumber1 = String(endNum).length;
            endNumber2 = 0;
          }
        } else {
          endNumber1 = 1;
          endNumber2 = 0;
        }
        let len1 = startNumber1 >= endNumber1 ? startNumber1 : endNumber1;
        let len2 = startNumber2 >= endNumber2 ? startNumber2 : endNumber2;
        data.num_total_len = len1 + len2;
        data.pointNum = len2;
        if (initNum > endNum) {
          data.sortFlag = "reduce";
          data.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
          data.totalCount = calculation(initNum, endNum, "-");
          data.numberVal = Number(String(initNum));
        } else if (initNum < endNum) {
          data.sortFlag = "add";
          data.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
          data.totalCount = calculation(endNum, initNum, "-");
          data.numberVal = Number(String(endNum));
        } else {
          data.sortFlag = "equal";
        }
        var unit = 1;
        for (let i = 0; i < data.pointNum; i++) {
          unit *= 10;
        }
        var rel_big = data.numberVal * unit;
        data.relNum = rel_big;
        if (toFixed != 0) {
          data.pointNum = String(data.numberVal).split(".")[1] ? String(data.numberVal).split(".")[1].length : 0;
          data.num_total_len = String(rel_big).length;
        }
        if (String(initNum).indexOf(".") > -1) {
          let n = String(initNum).split(".");
          data.initDigit1 = Number(n[0]);
          data.initDigit2 = Number(n[1]);
        } else {
          data.initDigit1 = initNum;
          data.initDigit2 = 0;
        }
        if (scrolling && !customBgImg2) {
          vue.nextTick(() => {
            if (data.sortFlag == "equal") {
              return false;
            }
            let refsDom = document.getElementsByClassName("nut-countup__number-item");
            let element = refsDom[data.num_total_len - 1];
            runTurn(element);
          });
        } else {
          if (flag !== 0) {
            imgNumberScroll();
          }
        }
      };
      const runTurn = (el) => {
        clearIntervalTime();
        var m = 1;
        if (data.pointNum != 0) {
          m = 1 / Math.pow(10, data.pointNum);
        }
        data.timer = setInterval(() => {
          runStep(el);
          data.totalCount = calculation(data.totalCount, m, "-");
          if (data.totalCount <= 0) {
            clearIntervalTime();
            emit("scrollEnd");
            data.valFlag = false;
          }
        }, props.during);
      };
      const runStep = (el) => {
        let currentTurn = el.style.all;
        let turningNum;
        if (data.sortFlag == "add") {
          turningNum = parseInt(String(currentTurn)) + 1;
        } else {
          turningNum = parseInt(String(currentTurn)) - 1 >= 0 ? parseInt(String(currentTurn)) - 1 : 9;
        }
        el.style.all = String(turningNum);
        if (el.style.transition == "none" || turningNum == 1 || !el.style.transition) {
          el.style.transition = `all linear ${props.during}ms`;
        }
        if (turningNum == 10 || data.sortFlag == "reduce" && turningNum == 0) {
          var timeOut = null;
          el.style.top = `-${data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100}%`;
          el.style.all = "0";
          timeOut = setTimeout(() => {
            timeOut && clearTimeout(timeOut);
            el.style.transition = "none";
            el.style.top = "0";
            if (turningNum == 10) {
              if (el.previousSibling) {
                runStep(el.previousSibling);
              }
            }
          }, 0.975 * props.during);
        } else {
          el.style.top = `-${data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100}%`;
        }
        if (el.style.top == "-100%" && data.sortFlag == "reduce") {
          runStep(el.previousSibling);
        }
      };
      const imgNumberScroll = () => {
        vue.nextTick(() => {
          let f = document.getElementsByClassName("nut-countup__numberimg")[0];
          f.addEventListener("webkitTransitionEnd", () => {
            emit("scrollEnd");
            data.valFlag = false;
          });
        });
      };
      const generateRandom = () => {
        data.notPrize = [];
        while (data.notPrize.length < 3) {
          var rand = Math.floor(Math.random() * props.machinePrizeNum + 1);
          if (data.notPrize.indexOf(rand) == -1) {
            data.notPrize.push(rand);
          }
        }
      };
      const machineLuck = () => {
        const machineTrunMoreNum = props.machineTrunMore < 0 ? 0 : props.machineTrunMore;
        let distance = props.numHeight * props.machinePrizeNum;
        if (data.prizeLevelTrun < 0) {
          generateRandom();
        }
        for (let i = 0; i < props.machineNum; i++) {
          setTimeout(() => {
            let turn = distance * (i + 1 + parseFloat(String(machineTrunMoreNum)));
            if (data.prizeYPrev.length != 0) {
              data.prizeY[i] = data.prizeYPrev[i];
            }
            let local = data.prizeYPrev[i] ? data.prizeYPrev[i] : 0;
            let newLocation = turn + local + (props.machinePrizeNum - data.prizeLevelTrun + 1) * props.numHeight + (distance - local);
            if (data.prizeLevelTrun < 0) {
              newLocation += props.numHeight * data.notPrize[i];
            }
            scrollTime(
              i,
              // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
              newLocation,
              local
            );
          }, 500 * i);
        }
      };
      useExtend({ machineLuck });
      const scrollTime = (index, total, num) => {
        let t = setInterval(() => {
          if (num <= total) {
            num += 10;
            data.prizeY[index] = parseFloat(String(num));
          } else {
            clearInterval(t);
            t = null;
            data.finshMachine += 1;
            data.prizeY[index] = total;
            if (data.finshMachine == props.machineNum) {
              let distance = props.numHeight * props.machinePrizeNum;
              data.prizeYPrev = [];
              let prevAry = JSON.parse(JSON.stringify(data.prizeY));
              prevAry.forEach((item) => {
                let n = item;
                while (n > distance) {
                  n -= distance;
                }
                data.prizeYPrev.push(n);
              });
              setTimeout(() => {
                data.finshMachine = 0;
                if (data.prizeLevelTrun < 0) {
                  emit("scrollEnd", false);
                  data.valFlag = false;
                } else {
                  emit("scrollEnd", true);
                  data.valFlag = false;
                }
              }, 130);
            }
          }
        }, 30);
      };
      vue.onMounted(() => {
        data.current = props.initNum;
        vue.nextTick(() => {
          valChange();
        });
      });
      vue.onUnmounted(() => {
        clearIntervalTime();
        data.timer = null;
      });
      return __spreadProps(__spreadValues(__spreadValues({}, vue.toRefs(data)), vue.toRefs(vue.reactive(props))), {
        topNumber,
        turnNumber
      });
    }
  });
  const _hoisted_1$x = { class: "nut-countup" };
  const _hoisted_2$r = ["turn-number"];
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$x, [
      _ctx.customBgImg != "" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        _ctx.type == "machine" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-countup__machine",
          style: vue.normalizeStyle({ height: _ctx.numHeight + "px" })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.machineNum, (val, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: "mImg" + index,
              class: "nut-countup__machine-item",
              style: vue.normalizeStyle({
                width: _ctx.numWidth + "px",
                height: _ctx.numHeight + "px",
                background: "url(" + _ctx.customBgImg + ") ",
                backgroundPosition: "0 " + _ctx.prizeY[index] + "px"
              })
            }, null, 4);
          }), 128))
        ], 4)) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "nut-countup__numberimg",
          style: vue.normalizeStyle({ height: _ctx.numHeight + "px" })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.num_total_len, (val, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: "cImg" + index,
              class: "nut-countup__numberimg__item",
              style: vue.normalizeStyle({
                width: _ctx.numWidth + "px",
                height: _ctx.numHeight + "px",
                left: _ctx.numWidth * (index > _ctx.num_total_len - _ctx.pointNum - 1 ? index == _ctx.num_total_len - _ctx.pointNum ? index * 1.5 : index * 1.3 : index) + "px",
                backgroundImage: "url(" + _ctx.customBgImg + ")",
                backgroundPosition: "0 " + -(+String(_ctx.relNum)[index] * _ctx.numHeight + _ctx.customSpacNum * +String(_ctx.relNum)[index]) + "px",
                transition: "all linear " + _ctx.during / 10 + "ms"
              })
            }, null, 4);
          }), 128)),
          vue.createTextVNode(),
          _ctx.pointNum > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-countup-pointstyl",
            style: vue.normalizeStyle({
              width: _ctx.numWidth / 2 + "px",
              bottom: 0,
              left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) * 1.1 + "px",
              fontSize: "30px"
            })
          }, ".", 4)) : vue.createCommentVNode("", true)
        ], 4))
      ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        _ctx.scrolling ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-countup__number",
          style: vue.normalizeStyle({
            width: _ctx.numWidth * _ctx.num_total_len + _ctx.numWidth / 3 + "px",
            height: _ctx.numHeight + "px",
            lineHeight: _ctx.numHeight + "px"
          })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.num_total_len, (val, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              ref_for: true,
              ref: "nut-countup__number-item",
              key: val,
              class: "nut-countup__number-item",
              style: vue.normalizeStyle({
                all: _ctx.turnNumber(index),
                top: _ctx.topNumber(index),
                left: _ctx.numWidth * (index > _ctx.num_total_len - _ctx.pointNum - 1 ? index * 1.1 : index) + "px"
              }),
              "turn-number": _ctx.turnNumber(index)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.to0_10, (item, idx) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: "dote" + idx,
                  class: "nut-countup__number-item__span",
                  style: vue.normalizeStyle({
                    width: _ctx.numWidth + "px",
                    height: _ctx.numHeight + "px",
                    lineHeight: _ctx.numHeight + "px"
                  })
                }, vue.toDisplayString(item), 5);
              }), 128))
            ], 12, _hoisted_2$r);
          }), 128)),
          vue.createTextVNode(),
          _ctx.pointNum > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-countup-pointstyl",
            style: vue.normalizeStyle({
              width: _ctx.numWidth / 3 + "px",
              height: _ctx.numHeight + "px",
              lineHeight: _ctx.numHeight + "px",
              top: 0,
              left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) + "px"
            })
          }, ".", 4)) : vue.createCommentVNode("", true)
        ], 4)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.current), 1)
        ], 64))
      ], 64))
    ]);
  }
  const Countup = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A]]);
  const getTimeStamp = (timeStr) => {
    if (!timeStr)
      return Date.now();
    let t = timeStr;
    t = +t > 0 ? +t : t.toString().replace(/-/g, "/");
    return new Date(t).getTime();
  };
  const { create: create$z } = createComponent("countdown");
  const cN$b = "NutCountdown";
  const _sfc_main$z = create$z({
    props: {
      modelValue: {
        type: Object,
        default: () => {
          return {};
        }
      },
      paused: {
        default: false,
        type: Boolean
      },
      startTime: {
        // 可以是服务器当前时间
        type: [Number, String],
        validator(v) {
          const dateStr = new Date(v).toString().toLowerCase();
          return dateStr !== "invalid date";
        }
      },
      endTime: {
        type: [Number, String],
        validator(v) {
          const dateStr = new Date(v).toString().toLowerCase();
          return dateStr !== "invalid date";
        }
      },
      // 是否开启毫秒
      millisecond: {
        default: false,
        type: Boolean
      },
      // 时间格式化
      format: {
        type: String,
        default: "HH:mm:ss"
      },
      autoStart: {
        type: Boolean,
        default: true
      },
      // 倒计时时长，单位毫秒
      time: {
        type: [Number, String],
        default: 0
      }
    },
    emits: [
      "input",
      "update:modelValue",
      "end",
      "restart",
      "paused",
      // will be deprecated
      "onEnd",
      "onRestart",
      "onPaused"
    ],
    setup(props, { emit, slots }) {
      const translate = useLocale(cN$b);
      const state = vue.reactive({
        restTime: 0,
        // 倒计时剩余时间时间
        timer: null,
        counting: !props.paused && props.autoStart,
        // 是否处于倒计时中
        handleEndTime: Date.now(),
        // 最终截止时间
        diffTime: 0
        // 设置了 startTime 时，与 date.now() 的差异
      });
      const renderTime = vue.computed(() => {
        return formatRemainTime(state.restTime);
      });
      const initTime = () => {
        state.handleEndTime = props.endTime;
        state.diffTime = Date.now() - getTimeStamp(props.startTime);
        if (!state.counting)
          state.counting = true;
        tick();
      };
      const tick = () => {
        if (window !== void 0) {
          state.timer = requestAnimationFrame(() => {
            if (state.counting) {
              const currentTime = Date.now() - state.diffTime;
              const remainTime = Math.max(state.handleEndTime - currentTime, 0);
              state.restTime = remainTime;
              if (!remainTime) {
                state.counting = false;
                pause();
                emit("end");
                emit("onEnd");
              }
              if (remainTime > 0) {
                tick();
              }
            }
          });
        }
      };
      const formatRemainTime = (t, type) => {
        const ts = t;
        let rest = {
          d: 0,
          h: 0,
          m: 0,
          s: 0,
          ms: 0
        };
        const SECOND = 1e3;
        const MINUTE = 60 * SECOND;
        const HOUR = 60 * MINUTE;
        const DAY = 24 * HOUR;
        if (ts > 0) {
          rest.d = ts >= SECOND ? Math.floor(ts / DAY) : 0;
          rest.h = Math.floor(ts % DAY / HOUR);
          rest.m = Math.floor(ts % HOUR / MINUTE);
          rest.s = Math.floor(ts % MINUTE / SECOND);
          rest.ms = Math.floor(ts % SECOND);
        }
        return type == "custom" ? rest : parseFormat(__spreadValues({}, rest));
      };
      const parseFormat = (time) => {
        let { d, h, m, s, ms } = time;
        let format = props.format;
        if (format.includes("DD")) {
          format = format.replace("DD", padZero(d));
        } else {
          h += Number(d) * 24;
        }
        if (format.includes("HH")) {
          format = format.replace("HH", padZero(h));
        } else {
          m += Number(h) * 60;
        }
        if (format.includes("mm")) {
          format = format.replace("mm", padZero(m));
        } else {
          s += Number(m) * 60;
        }
        if (format.includes("ss")) {
          format = format.replace("ss", padZero(s));
        } else {
          ms += Number(s) * 1e3;
        }
        if (format.includes("S")) {
          const msC = padZero(ms, 3).toString();
          if (format.includes("SSS")) {
            format = format.replace("SSS", msC);
          } else if (format.includes("SS")) {
            format = format.replace("SS", msC.slice(0, 2));
          } else if (format.includes("S")) {
            format = format.replace("S", msC.slice(0, 1));
          }
        }
        return format;
      };
      const start = () => {
        if (!state.counting && !props.autoStart) {
          state.counting = true;
          state.handleEndTime = Date.now() + Number(state.restTime);
          tick();
          emit("restart", state.restTime);
          emit("onRestart", state.restTime);
        }
      };
      const pause = () => {
        cancelAnimationFrame(state.timer);
        state.counting = false;
        emit("paused", state.restTime);
        emit("onPaused", state.restTime);
      };
      const reset = () => {
        if (!props.autoStart) {
          pause();
          state.restTime = props.time;
        }
      };
      vue.onBeforeMount(() => {
        if (props.autoStart) {
          initTime();
        } else {
          state.restTime = props.time;
        }
      });
      vue.watch(
        () => state.restTime,
        (value) => {
          let tranTime = formatRemainTime(value, "custom");
          emit("update:modelValue", tranTime);
          emit("input", tranTime);
        }
      );
      vue.watch(
        () => props.paused,
        (v, ov) => {
          if (!ov) {
            if (state.counting) {
              pause();
            }
          } else {
            if (!state.counting) {
              state.counting = true;
              state.handleEndTime = Date.now() + Number(state.restTime);
              tick();
            }
            emit("restart", state.restTime);
            emit("onRestart", state.restTime);
          }
        }
      );
      vue.watch(
        () => props.endTime,
        () => {
          initTime();
        }
      );
      vue.watch(
        () => props.startTime,
        () => {
          initTime();
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(props)), {
        slots,
        start,
        pause,
        renderTime,
        translate,
        reset
      });
    }
  });
  const _hoisted_1$w = { class: "nut-countdown" };
  const _hoisted_2$q = ["innerHTML"];
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$w, [
      _ctx.slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "nut-countdown__content",
        innerHTML: _ctx.renderTime
      }, null, 8, _hoisted_2$q))
    ]);
  }
  const Countdown = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
  const { create: create$y } = createComponent("tag");
  const _sfc_main$y = create$y({
    props: {
      color: {
        type: String,
        default: ""
      },
      textColor: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "default"
      },
      plain: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      mark: {
        type: Boolean,
        default: false
      },
      closeable: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Close: iconsVueTaro.Close
    },
    emits: ["close", "click"],
    setup(props, { emit }) {
      const classes = vue.computed(() => {
        const prefixCls = "nut-tag";
        return {
          [prefixCls]: true,
          [`${prefixCls}--${props.type}`]: props.type,
          [`${prefixCls}--plain`]: props.plain,
          [`${prefixCls}--round`]: props.round,
          [`${prefixCls}--mark`]: props.mark
        };
      });
      const style = vue.computed(() => {
        const style2 = {};
        if (props.textColor) {
          style2.color = props.textColor;
        } else if (props.color && props.plain) {
          style2.color = props.color;
        }
        if (props.plain) {
          style2.background = "#fff";
          style2["border-color"] = props.color;
        } else if (props.color) {
          style2.background = props.color;
        }
        return style2;
      });
      const onClose = (event) => {
        event.stopPropagation();
        emit("close", event);
      };
      const onClick = (event) => {
        emit("click", event);
      };
      return {
        classes,
        style,
        onClose,
        onClick
      };
    }
  });
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Close = vue.resolveComponent("Close");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.style),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createTextVNode(),
      _ctx.closeable ? (vue.openBlock(), vue.createBlock(_component_Close, {
        key: 0,
        class: "nut-tag--close",
        size: "11",
        onClick: _ctx.onClose
      }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
    ], 6);
  }
  const Tag = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
  const { create: create$x } = createComponent("popover");
  const _sfc_main$x = create$x({
    inheritAttrs: false,
    components: {
      NutPopup: Popup
    },
    props: {
      visible: { type: Boolean, default: false },
      list: { type: Array, default: [] },
      theme: { type: String, default: "light" },
      location: { type: String, default: "bottom" },
      offset: { type: Array, default: [0, 12] },
      arrowOffset: { type: Number, default: 0 },
      customClass: { type: String, default: "" },
      showArrow: { type: Boolean, default: true },
      duration: { type: [Number, String], default: 0.2 },
      overlay: { type: Boolean, default: false },
      overlayClass: { type: String, default: "" },
      overlayStyle: { type: Object },
      closeOnClickOverlay: { type: Boolean, default: true },
      closeOnClickAction: { type: Boolean, default: true },
      closeOnClickOutside: { type: Boolean, default: true },
      targetId: { type: String, default: "" },
      bgColor: { type: String, default: "" }
    },
    emits: ["update", "update:visible", "close", "choose", "open"],
    setup(props, { emit }) {
      const popoverRef = vue.ref();
      const popoverContentRef = vue.ref();
      const popoverContentRefCopy = vue.ref();
      const popoverbox = vue.ref();
      const showPopup = vue.ref(props.visible);
      const popoverstyles = vue.ref({});
      let rootRect = vue.ref();
      let conentRootRect;
      const popoverArrow = vue.computed(() => {
        const prefixCls = "nut-popover-arrow";
        const loca = props.location;
        const direction = loca.split("-")[0];
        return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}--${loca}`;
      });
      const popoverArrowStyle = vue.computed(() => {
        const styles = {};
        const { bgColor, arrowOffset, location } = props;
        const direction = location.split("-")[0];
        const skew = location.split("-")[1];
        const base = 16;
        if (bgColor) {
          styles[`border${upperCaseFirst(direction)}Color`] = bgColor;
        }
        if (props.arrowOffset != 0) {
          if (["bottom", "top"].includes(direction)) {
            if (!skew) {
              styles.left = `calc(50% + ${arrowOffset}px)`;
            }
            if (skew == "start") {
              styles.left = `${base + arrowOffset}px`;
            }
            if (skew == "end") {
              styles.right = `${base - arrowOffset}px`;
            }
          }
          if (["left", "right"].includes(direction)) {
            if (!skew) {
              styles.top = `calc(50% - ${arrowOffset}px)`;
            }
            if (skew == "start") {
              styles.top = `${base - arrowOffset}px`;
            }
            if (skew == "end") {
              styles.bottom = `${base + arrowOffset}px`;
            }
          }
        }
        return styles;
      });
      const upperCaseFirst = (str) => {
        str = str.toLowerCase();
        str = str.replace(/\b\w+\b/g, (word) => word.substring(0, 1).toUpperCase() + word.substring(1));
        return str;
      };
      const getRootPosition = () => {
        if (!rootRect.value || !conentRootRect)
          return {};
        const conentWidth = conentRootRect.width;
        const conentHeight = conentRootRect.height;
        const { width, height, left, top } = rootRect.value;
        const { location, offset } = props;
        const direction = location.split("-")[0];
        const skew = location.split("-")[1];
        let cross = 0;
        let parallel = 0;
        if (isArray(offset) && offset.length == 2) {
          cross += Number(offset[1]);
          parallel += Number(offset[0]);
        }
        if (width) {
          if (["bottom", "top"].includes(direction)) {
            const h = direction == "bottom" ? height + cross : -(conentHeight + cross);
            popoverstyles.value.top = `${top + h}px`;
            if (!skew) {
              popoverstyles.value.left = `${-(conentWidth - width) / 2 + left + parallel}px`;
            }
            if (skew == "start") {
              popoverstyles.value.left = `${left + parallel}px`;
            }
            if (skew == "end") {
              popoverstyles.value.left = `${rootRect.value.right + parallel}px`;
            }
          }
          if (["left", "right"].includes(direction)) {
            const contentW = direction == "left" ? -(conentWidth + cross) : width + cross;
            popoverstyles.value.left = `${left + contentW}px`;
            if (!skew) {
              popoverstyles.value.top = `${top - conentHeight / 2 + height / 2 - 4 + parallel}px`;
            }
            if (skew == "start") {
              popoverstyles.value.top = `${top + parallel}px`;
            }
            if (skew == "end") {
              popoverstyles.value.top = `${top + height + parallel}px`;
            }
          }
        }
      };
      const customStyle = vue.computed(() => {
        const styles = {};
        if (props.bgColor) {
          styles.background = props.bgColor;
        }
        return styles;
      });
      const getContentWidth = () => __async(this, null, function* () {
        const solve = (rect) => {
          if (!(rootRect.value && rect.top == rootRect.value.top && rect.width == rootRect.value.width)) {
            setTimeout(() => {
              getContentWidth();
            }, 100);
          }
          rootRect.value = rect;
          getRootPosition();
        };
        if (props.targetId) {
          useTaroRectById(props.targetId).then(
            (rect) => {
              solve(rect);
            },
            () => {
            }
          );
        } else {
          useTaroRect(popoverRef).then(
            (rect) => {
              solve(rect);
            },
            () => {
            }
          );
        }
      });
      const getPopoverContentW = (type = 1) => __async(this, null, function* () {
        const el = type == 1 ? popoverContentRef : popoverContentRefCopy;
        useTaroRect(el).then(
          (rect) => {
            conentRootRect = {
              height: rect.height || 0,
              width: rect.width || 0
            };
            getRootPosition();
          },
          () => {
          }
        );
      });
      vue.watch(
        () => props.visible,
        (value) => {
          showPopup.value = value;
          if (value) {
            getContentWidth();
            setTimeout(() => {
              getPopoverContentW();
            }, 300);
          }
        }
      );
      vue.watch(
        () => props.location,
        () => {
          getRootPosition();
        }
      );
      const update = (val) => {
        emit("update", val);
        emit("update:visible", val);
      };
      const openPopover = () => {
        update(!props.visible);
        emit("open");
      };
      const closePopover = () => {
        emit("update:visible", false);
        emit("close");
      };
      const chooseItem = (item, index) => {
        emit("choose", item, index);
        if (props.closeOnClickAction) {
          closePopover();
        }
      };
      const clickAway = () => {
        props.closeOnClickOutside && closePopover();
      };
      vue.onMounted(() => {
        setTimeout(() => {
          getContentWidth();
          getPopoverContentW(0);
        }, 600);
      });
      const refRandomId = Math.random().toString(36).slice(-8);
      return {
        showPopup,
        openPopover,
        popoverArrow,
        closePopover,
        chooseItem,
        popoverRef,
        popoverContentRef,
        popoverContentRefCopy,
        refRandomId,
        clickAway,
        popoverArrowStyle,
        customStyle,
        getRootPosition,
        renderIcon,
        popoverbox,
        popoverstyles
      };
    }
  });
  const _hoisted_1$v = ["id"];
  const _hoisted_2$p = ["id"];
  const _hoisted_3$m = ["onClick"];
  const _hoisted_4$m = { class: "nut-popover-menu-item-name" };
  const _hoisted_5$c = {
    class: /* @__PURE__ */ vue.normalizeClass(`nut-popover-content nut-popover-content-copy`)
  };
  const _hoisted_6$b = ["id"];
  const _hoisted_7$9 = { class: "nut-popover-menu-item-name" };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      !_ctx.targetId ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        id: "popoverRef" + _ctx.refRandomId,
        ref: "popoverRef",
        class: "nut-popover-wrapper",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.openPopover && _ctx.openPopover(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "reference")
      ], 8, _hoisted_1$v)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        ref: "popoverbox",
        class: vue.normalizeClass(["nut-popover", `nut-popover--${_ctx.theme}`, `${_ctx.customClass}`]),
        style: vue.normalizeStyle(_ctx.popoverstyles)
      }, [
        vue.createVNode(_component_nut_popup, {
          visible: _ctx.showPopup,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.showPopup = $event),
          "pop-class": `nut-popover-content nut-popover-content--${_ctx.location}`,
          style: vue.normalizeStyle(_ctx.customStyle),
          position: "",
          transition: "nut-popover",
          overlay: _ctx.overlay,
          duration: _ctx.duration,
          "overlay-style": _ctx.overlayStyle,
          "overlay-class": _ctx.overlayClass,
          "close-on-click-overlay": _ctx.closeOnClickOverlay
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              id: "popoverContentRef" + _ctx.refRandomId,
              ref: "popoverContentRef",
              class: "nut-popover-content-group"
            }, [
              _ctx.showArrow ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: vue.normalizeClass(_ctx.popoverArrow),
                style: vue.normalizeStyle(_ctx.popoverArrowStyle)
              }, null, 6)) : vue.createCommentVNode("", true),
              vue.createTextVNode(),
              vue.renderSlot(_ctx.$slots, "content"),
              vue.createTextVNode(),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass([
                    item.className,
                    item.disabled && "nut-popover-menu-disabled",
                    "nut-popover-menu-item",
                    "nut-popover-menu-taroitem"
                  ]),
                  onClick: vue.withModifiers(($event) => _ctx.chooseItem(item, index), ["stop"])
                }, [
                  item.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(item.icon)), {
                    key: 0,
                    class: "nut-popover-item-img"
                  })) : vue.createCommentVNode("", true),
                  vue.createTextVNode(),
                  vue.createElementVNode("view", _hoisted_4$m, vue.toDisplayString(item.name), 1)
                ], 10, _hoisted_3$m);
              }), 128))
            ], 8, _hoisted_2$p)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"]),
        vue.createTextVNode(),
        _ctx.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-popover-content-bg",
          onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.clickAway && _ctx.clickAway(...args)),
          onClick: _cache[3] || (_cache[3] = (...args) => _ctx.clickAway && _ctx.clickAway(...args))
        }, null, 32)) : vue.createCommentVNode("", true)
      ], 6),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_5$c, [
        vue.createElementVNode("view", {
          id: "popoverContentRefCopy" + _ctx.refRandomId,
          ref: "popoverContentRefCopy",
          class: "nut-popover-content-group"
        }, [
          _ctx.showArrow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(_ctx.popoverArrow),
            style: vue.normalizeStyle(_ctx.popoverArrowStyle)
          }, null, 6)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "content"),
          vue.createTextVNode(),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass([
                item.className,
                item.disabled && "nut-popover-menu-disabled",
                "nut-popover-menu-item",
                "nut-popover-menu-taroitem"
              ])
            }, [
              item.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(item.icon)), {
                key: 0,
                class: "nut-popover-item-img"
              })) : vue.createCommentVNode("", true),
              vue.createTextVNode(),
              vue.createElementVNode("view", _hoisted_7$9, vue.toDisplayString(item.name), 1)
            ], 2);
          }), 128))
        ], 8, _hoisted_6$b)
      ])
    ], 64);
  }
  const Popover = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
  const { create: create$w } = createComponent("skeleton");
  const _sfc_main$w = create$w({
    components: {
      NutAvatar: Avatar
    },
    props: {
      //每行宽度
      width: {
        type: String,
        default: "100px"
      },
      //每行高度
      height: {
        type: String,
        default: "15px"
      },
      //是否显示动画
      animated: {
        type: Boolean,
        default: false
      },
      //头像
      avatar: {
        type: Boolean,
        default: false
      },
      //头像形状：正方形/圆形
      avatarShape: {
        type: String,
        default: "round"
      },
      //头像大小
      avatarSize: {
        type: String,
        default: "50px"
      },
      //是否显示骨架屏
      loading: {
        type: Boolean,
        default: true
      },
      //标题/段落 圆角风格
      round: {
        type: Boolean,
        default: false
      },
      //显示段落行数
      row: {
        type: String,
        default: "1"
      },
      //是否显示段落标题
      title: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const { avatarShape, round, avatarSize } = vue.toRefs(props);
      const avatarClass = vue.computed(() => {
        const prefixCls = "avatarClass";
        return {
          [prefixCls]: true,
          [`${prefixCls}--${avatarShape.value}`]: avatarShape.value
        };
      });
      const getBlockClass = (prefixCls) => {
        return {
          [prefixCls]: true,
          [`${prefixCls}--round`]: round.value
        };
      };
      const getStyle = () => {
        if (avatarSize.value) {
          return {
            width: avatarSize.value,
            height: avatarSize.value
          };
        }
        return {
          width: "50px",
          height: "50px"
        };
      };
      return {
        avatarShape,
        avatarClass,
        getBlockClass,
        getStyle
      };
    }
  });
  const _hoisted_1$u = { key: 0 };
  const _hoisted_2$o = {
    key: 1,
    class: "nut-skeleton"
  };
  const _hoisted_3$l = {
    key: 0,
    class: "nut-skeleton-animation"
  };
  const _hoisted_4$l = { class: "nut-skeleton-content" };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_avatar = vue.resolveComponent("nut-avatar");
    return !_ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$u, [
      vue.renderSlot(_ctx.$slots, "default")
    ])) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$o, [
      _ctx.animated ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$l)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_4$l, [
        _ctx.avatar ? (vue.openBlock(), vue.createBlock(_component_nut_avatar, {
          key: 0,
          class: vue.normalizeClass(_ctx.avatarClass),
          shape: _ctx.avatarShape,
          style: vue.normalizeStyle(_ctx.getStyle())
        }, null, 8, ["class", "shape", "style"])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: "nut-skeleton-content__line",
          style: vue.normalizeStyle({ width: _ctx.width })
        }, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(_ctx.getBlockClass("nut-skeleton-blockTitle")),
            style: vue.normalizeStyle({ height: _ctx.height })
          }, null, 6)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Number(_ctx.row), (_) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: _,
              class: vue.normalizeClass(_ctx.getBlockClass("nut-skeleton-blockLine")),
              style: vue.normalizeStyle({ height: _ctx.height })
            }, null, 6);
          }), 128))
        ], 4)
      ])
    ]));
  }
  const Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
  const COLLAPSE_KEY = Symbol("nut-collapse");
  const { create: create$v } = createComponent("collapse");
  const _sfc_main$v = create$v({
    props: {
      modelValue: {
        type: [String, Number, Array],
        default: ""
      },
      accordion: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue", "change"],
    setup(props, { emit }) {
      const nutCollapseRef = vue.ref(null);
      const innerValue = vue.ref(props.modelValue || (props.accordion ? "" : []));
      vue.watch(
        () => props.modelValue,
        (val) => {
          innerValue.value = val;
        }
      );
      const changeVal = (val, name, status = true) => {
        innerValue.value = val;
        emit("update:modelValue", val);
        emit("change", val, name, status);
      };
      const updateVal = (name) => {
        if (props.accordion) {
          if (innerValue.value === name) {
            changeVal("", name, false);
          } else {
            changeVal(name, name, true);
          }
        } else {
          if (Array.isArray(innerValue.value)) {
            if (innerValue.value.includes(name)) {
              const newValue = innerValue.value.filter((v) => v !== name);
              changeVal(newValue, name, false);
            } else {
              const newValue = innerValue.value.concat([name]);
              changeVal(newValue, name, true);
            }
          } else {
            console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
          }
        }
      };
      const isExpanded = (name) => {
        if (props.accordion) {
          return innerValue.value === name;
        } else if (Array.isArray(innerValue.value)) {
          return innerValue.value.includes(name);
        }
        return false;
      };
      vue.provide(COLLAPSE_KEY, {
        updateVal,
        isExpanded
      });
      return { nutCollapseRef };
    }
  });
  const _hoisted_1$t = {
    ref: "nutCollapseRef",
    class: "nut-collapse"
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$t, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 512);
  }
  const Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
  const { create: create$u } = createComponent("collapse-item");
  const _sfc_main$u = create$u({
    props: {
      title: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [Number, String],
        default: -1,
        required: true
      },
      border: {
        type: Boolean,
        default: true
      },
      icon: {
        type: Object,
        default: () => iconsVueTaro.DownArrow
      },
      rotate: {
        type: [String, Number],
        default: 180
      }
    },
    setup(props, { slots }) {
      const wrapperRef = vue.ref(null);
      const refRandomId = Math.random().toString(36).slice(-8);
      const target = `#nut-collapse__item-${refRandomId}`;
      const currentHeight = vue.ref("auto");
      const inAnimation = vue.ref(false);
      const timeoutId = vue.ref("");
      const parent = vue.inject(COLLAPSE_KEY);
      const classes = vue.computed(() => {
        const prefixCls = "nut-collapse-item";
        return {
          [prefixCls]: true,
          [prefixCls + "__border"]: props.border
        };
      });
      vue.onMounted(() => {
        setTimeout(() => {
          getRect(target).then((res) => {
            if (res == null ? void 0 : res.height) {
              currentHeight.value = `${res.height}px`;
            }
          });
        }, 100);
      });
      vue.watch(
        () => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots);
        },
        () => {
          setTimeout(() => {
            getRect(target).then((res) => {
              if (res == null ? void 0 : res.height) {
                currentHeight.value = `${res.height}px`;
              }
            });
          }, 200);
        }
      );
      const getRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
            resolve(rect[0]);
          });
        });
      };
      const expanded = vue.computed(() => {
        if (parent) {
          return parent.isExpanded(props.name);
        }
        return false;
      });
      const wrapperHeight = vue.ref(expanded.value ? "auto" : "0px");
      const handleClick = () => {
        if (!inAnimation.value) {
          parent && parent.updateVal(props.name);
        }
      };
      const toggle = (open) => {
        if (timeoutId.value) {
          clearTimeout(timeoutId.value);
          timeoutId.value = "";
        }
        const start = open ? "0px" : currentHeight.value;
        const end = open ? currentHeight.value : "0px";
        inAnimation.value = true;
        wrapperHeight.value = start;
        setTimeout(() => {
          wrapperHeight.value = end;
          inAnimation.value = false;
          if (open) {
            timeoutId.value = setTimeout(() => {
              wrapperHeight.value = "auto";
            }, 300);
          }
        }, 100);
      };
      vue.watch(expanded, toggle);
      return {
        refRandomId,
        classes,
        renderIcon,
        wrapperRef,
        handleClick,
        wrapperHeight,
        expanded
      };
    }
  });
  const _hoisted_1$s = { class: "nut-collapse-item__title-main" };
  const _hoisted_2$n = { class: "nut-collapse-item__title-main-value" };
  const _hoisted_3$k = ["innerHTML"];
  const _hoisted_4$k = {
    key: 2,
    class: "nut-collapse-item__title-label"
  };
  const _hoisted_5$b = {
    key: 0,
    class: "nut-collapse-item__title-sub"
  };
  const _hoisted_6$a = ["innerHTML"];
  const _hoisted_7$8 = {
    key: 0,
    class: "nut-collapse__item-extraWrapper"
  };
  const _hoisted_8$5 = { class: "nut-collapse__item-extraWrapper__extraRender" };
  const _hoisted_9$5 = ["id"];
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": _ctx.disabled }]),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.createElementVNode("view", _hoisted_1$s, [
          vue.createElementVNode("view", _hoisted_2$n, [
            _ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: _ctx.title
            }, null, 8, _hoisted_3$k)),
            vue.createTextVNode(),
            _ctx.label ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$k, vue.toDisplayString(_ctx.label), 1)) : vue.createCommentVNode("", true)
          ])
        ]),
        vue.createTextVNode(),
        _ctx.$slots.value ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$b, [
          vue.renderSlot(_ctx.$slots, "value")
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: _ctx.value
        }, null, 8, _hoisted_6$a)),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": _ctx.expanded }]),
          style: vue.normalizeStyle({ transform: "rotate(" + (_ctx.expanded ? _ctx.rotate : 0) + "deg)" })
        }, [
          _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(_ctx.icon)), { key: 1 }))
        ], 6)
      ], 2),
      vue.createTextVNode(),
      _ctx.$slots.extra ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$8, [
        vue.createElementVNode("div", _hoisted_8$5, [
          vue.renderSlot(_ctx.$slots, "extra")
        ])
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        ref: "wrapperRef",
        class: "nut-collapse__item-wrapper",
        style: vue.normalizeStyle({
          willChange: "height",
          height: _ctx.wrapperHeight
        })
      }, [
        vue.createElementVNode("view", {
          id: `nut-collapse__item-${_ctx.refRandomId}`,
          class: "nut-collapse__item-wrapper__content"
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 8, _hoisted_9$5)
      ], 4)
    ], 2);
  }
  const CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
  const RenderColumn = vue.defineComponent({
    props: {
      slots: {
        type: Array,
        default: () => []
      },
      record: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      return () => vue.h(`view`, {}, props.slots[0] ? props.slots[0](props.record) : props.slots[1](props.record));
    }
  });
  const { create: create$t } = createComponent("table");
  const cN$a = "NutTable";
  const _sfc_main$t = create$t({
    components: {
      RenderColumn,
      DownArrow: iconsVueTaro.DownArrow
    },
    props: {
      bordered: {
        type: Boolean,
        default: true
      },
      columns: {
        type: Array,
        default: () => []
      },
      data: {
        type: Object,
        default: () => ({})
      },
      summary: {
        type: Function,
        default: null
      },
      striped: {
        type: Boolean,
        default: false
      }
    },
    emits: ["sorter"],
    setup(props, { emit }) {
      const translate = useLocale(cN$a);
      const state = vue.reactive({
        curData: props.data
      });
      const cellClasses = (item) => {
        return {
          "nut-table__main__head__tr--border": props.bordered,
          [`nut-table__main__head__tr--align${item.align ? item.align : ""}`]: true
        };
      };
      const stylehead = (item) => {
        return item.stylehead ? item.stylehead : "";
      };
      const stylecolumn = (item) => {
        return item.stylecolumn ? item.stylecolumn : "";
      };
      const getColumnItem = (value) => {
        return props.columns.filter((item) => item.key === value)[0];
      };
      const getColumnItemStyle = (value) => {
        const style = props.columns.filter((item) => item.key === value);
        return style[0].stylecolumn ? style[0].stylecolumn : "";
      };
      const handleSorterClick = (item) => {
        if (item.sorter) {
          emit("sorter", item);
          state.curData = typeof item.sorter === "function" ? state.curData.sort(item.sorter) : item.sorter === "default" ? state.curData.sort() : state.curData;
        }
      };
      const sortDataItem = () => {
        return props.columns.map((columns) => {
          return [columns.key, columns.render];
        });
      };
      vue.watch(
        () => props.data,
        (val) => {
          state.curData = val.slice();
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        cellClasses,
        getColumnItem,
        getColumnItemStyle,
        handleSorterClick,
        sortDataItem,
        translate,
        stylehead,
        stylecolumn
      });
    }
  });
  const _hoisted_1$r = { class: "nut-table" };
  const _hoisted_2$m = { class: "nut-table__main__head" };
  const _hoisted_3$j = { class: "nut-table__main__head__tr" };
  const _hoisted_4$j = ["onClick"];
  const _hoisted_5$a = { class: "nut-table__main__body" };
  const _hoisted_6$9 = { key: 1 };
  const _hoisted_7$7 = {
    key: 0,
    class: "nut-table__nodata"
  };
  const _hoisted_8$4 = {
    key: 0,
    class: "nut-table__nodata__text"
  };
  const _hoisted_9$4 = {
    key: 1,
    class: "nut-table__summary"
  };
  const _hoisted_10$2 = ["innerHTML"];
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DownArrow = vue.resolveComponent("DownArrow");
    const _component_RenderColumn = vue.resolveComponent("RenderColumn");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$r, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-table__main", { "nut-table__main--striped": _ctx.striped }])
      }, [
        vue.createElementVNode("view", _hoisted_2$m, [
          vue.createElementVNode("view", _hoisted_3$j, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columns, (item) => {
              return vue.openBlock(), vue.createElementBlock("span", {
                key: item.key,
                class: vue.normalizeClass(["nut-table__main__head__tr__th", _ctx.cellClasses(item)]),
                style: vue.normalizeStyle(item.stylehead),
                onClick: ($event) => _ctx.handleSorterClick(item)
              }, [
                vue.createTextVNode(vue.toDisplayString(item.title) + " ", 1),
                vue.renderSlot(_ctx.$slots, "icon"),
                vue.createTextVNode(),
                !_ctx.$slots.icon && item.sorter ? (vue.openBlock(), vue.createBlock(_component_DownArrow, {
                  key: 0,
                  size: "12px"
                })) : vue.createCommentVNode("", true)
              ], 14, _hoisted_4$j);
            }), 128))
          ])
        ]),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_5$a, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.curData, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item,
              class: "nut-table__main__body__tr"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.sortDataItem(), ([value, render]) => {
                return vue.openBlock(), vue.createElementBlock("span", {
                  key: value,
                  class: vue.normalizeClass(["nut-table__main__body__tr__td", _ctx.cellClasses(_ctx.getColumnItem(value))]),
                  style: vue.normalizeStyle(_ctx.getColumnItemStyle(value))
                }, [
                  typeof item[value] === "function" || typeof render === "function" ? (vue.openBlock(), vue.createBlock(_component_RenderColumn, {
                    key: 0,
                    slots: [render, item[value]],
                    record: item
                  }, null, 8, ["slots", "record"])) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_6$9, vue.toDisplayString(item[value]), 1))
                ], 6);
              }), 128))
            ]);
          }), 128))
        ])
      ], 2),
      vue.createTextVNode(),
      !_ctx.curData.length ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$7, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["nut-table__nodata", { "nut-table__nodata--border": _ctx.bordered }])
        }, [
          vue.renderSlot(_ctx.$slots, "nodata"),
          vue.createTextVNode(),
          !_ctx.$slots.nodata ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$4, vue.toDisplayString(_ctx.translate("noData")), 1)) : vue.createCommentVNode("", true)
        ], 2)
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.summary ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_9$4, [
        vue.createElementVNode("span", {
          class: "nut-table__summary__text",
          innerHTML: _ctx.summary().value
        }, null, 8, _hoisted_10$2)
      ])) : vue.createCommentVNode("", true)
    ]);
  }
  const Table = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
  const { create: create$s } = createComponent("animate");
  const _sfc_main$s = create$s({
    props: {
      type: {
        type: String,
        default: ""
      },
      show: {
        type: Boolean,
        defualt: false
      },
      action: {
        type: String,
        default: ""
      },
      loop: {
        type: Boolean,
        default: false
      },
      duration: {
        type: [String, Number],
        defualt: 500
      }
    },
    emits: ["click", "animate"],
    setup(props, { emit }) {
      const animated = vue.ref(props.action === "initial" || props.show === true || props.loop);
      const classes = vue.computed(() => {
        const prefixCls = "nut-animate";
        return {
          "nut-animate__container": true,
          [`${prefixCls}-${props.type}`]: animated.value,
          loop: props.loop
        };
      });
      const animate = () => {
        animated.value = false;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            animated.value = true;
          });
        });
      };
      const handleClick = (event) => {
        if (props.action === "click") {
          animate();
          emit("click", event);
          emit("animate");
        }
      };
      vue.watch(
        () => props.show,
        (val) => {
          if (val) {
            animate();
            emit("animate");
          }
        }
      );
      return { classes, handleClick };
    }
  });
  const _hoisted_1$q = { class: "nut-animate" };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$q, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.classes),
        style: vue.normalizeStyle({
          animationDuration: _ctx.duration ? `${_ctx.duration}ms` : void 0
        }),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6)
    ]);
  }
  const Animate = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
  const { create: create$r } = createComponent("ellipsis");
  const _sfc_main$r = create$r({
    props: {
      content: {
        type: String,
        default: ""
      },
      direction: {
        type: String,
        default: "end"
      },
      rows: {
        type: [Number, String],
        default: 1
      },
      expandText: {
        type: String,
        default: ""
      },
      collapseText: {
        type: String,
        default: ""
      },
      symbol: {
        type: String,
        default: "..."
      },
      lineHeight: {
        type: [Number, String],
        default: "20"
      }
    },
    emits: ["click", "change"],
    setup(props, { emit }) {
      const rootContain = vue.ref(null);
      const symbolContain = vue.ref(null);
      let contantCopy = vue.ref(props.content);
      let maxHeight = 0;
      let lineHeight = 0;
      let originHeight = 0;
      const ellipsis = vue.reactive({});
      const refRandomId = Math.random().toString(36).slice(-8);
      const rootId = vue.ref("root" + refRandomId);
      let widthRef = vue.ref("auto");
      const state = vue.reactive({
        exceeded: false,
        //是否超出
        expanded: false
        //是否折叠
      });
      let widthBase = [14, 10, 7, 8.4, 10];
      let symbolTextWidth = widthBase[0] * 0.7921;
      const chineseReg = /^[\u4e00-\u9fa5]+$/;
      const digitReg = /^[0-9]+$/;
      const letterUpperReg = /^[A-Z]+$/;
      const letterLowerReg = /^[a-z]+$/;
      const symbolText = vue.computed(() => {
        if (props.direction == "end" || props.direction == "middle") {
          return `${props.symbol}${props.expandText}`;
        }
        return `${props.symbol}${props.expandText}${props.symbol}`;
      });
      vue.onMounted(() => {
        setTimeout(() => {
          getSymbolInfo();
          getReference();
        }, 100);
      });
      const getSymbolInfo = () => {
        useTaroRect(symbolContain).then(
          (refe) => {
            symbolTextWidth = refe.width ? Math.ceil(refe.width) : Math.ceil(widthBase[0] * 0.7921);
          },
          () => {
          }
        );
      };
      const getReference = () => __async(this, null, function* () {
        const query = Taro.createSelectorQuery();
        query.select(`#${rootId.value}`) && query.select(`#${rootId.value}`).fields(
          {
            computedStyle: ["width", "height", "lineHeight", "paddingTop", "paddingBottom", "fontSize"]
          },
          (res) => {
            lineHeight = pxToNumber(res.lineHeight === "normal" ? props.lineHeight : res.lineHeight);
            maxHeight = Math.floor(
              lineHeight * (Number(props.rows) + 0.5) + pxToNumber(res.paddingTop) + pxToNumber(res.paddingBottom)
            );
            originHeight = pxToNumber(res.height);
            widthRef.value = res.width;
            const bsize = pxToNumber(res.fontSize);
            widthBase = [bsize, bsize * 0.72, bsize * 0.53, bsize * 0.4, bsize * 0.75];
            calcEllipse();
          }
        ).exec();
      });
      const calcEllipse = () => {
        useTaroRect(rootContain).then(
          (refe) => {
            if (refe.height <= maxHeight) {
              state.exceeded = false;
            } else {
              const rowNum = Math.floor(props.content.length / (originHeight / lineHeight - 1));
              if (props.direction === "middle") {
                const end = props.content.length;
                ellipsis.leading = tailorContent(0, rowNum * (Number(props.rows) + 0.5), "end");
                ellipsis.tailing = tailorContent(
                  props.content.length - rowNum * (Number(props.rows) + 0.5),
                  end,
                  "start"
                );
              } else if (props.direction === "end") {
                const end = rowNum * (Number(props.rows) + 0.5);
                ellipsis.leading = tailorContent(0, end);
              } else {
                const start = props.content.length - rowNum * (Number(props.rows) + 0.5) - 5;
                ellipsis.tailing = tailorContent(start, props.content.length);
              }
              assignContent();
              setTimeout(() => {
                verifyEllipsis();
              }, 100);
            }
          },
          () => {
          }
        );
      };
      const verifyEllipsis = () => __async(this, null, function* () {
        useTaroRect(rootContain).then(
          (refe) => {
            var _a, _b;
            if (refe && refe.height && refe.height > maxHeight) {
              if (props.direction == "end") {
                ellipsis.leading = (_a = ellipsis.leading) == null ? void 0 : _a.slice(0, ellipsis.leading.length - 1);
              } else {
                ellipsis.tailing = (_b = ellipsis.tailing) == null ? void 0 : _b.slice(1, ellipsis.tailing.length);
              }
              assignContent();
              setTimeout(() => {
                verifyEllipsis();
              }, 100);
            }
          },
          () => {
          }
        );
      });
      const assignContent = () => {
        contantCopy.value = `${ellipsis.leading || ""}${ellipsis.leading ? props.symbol : ""}${props.expandText || ""}${ellipsis.tailing ? props.symbol : ""}${ellipsis.tailing || ""}`;
      };
      const tailorContent = (left, right, type = "") => {
        const threeDotWidth = symbolTextWidth;
        const direc = props.direction === "middle" && type ? type : props.direction;
        state.exceeded = true;
        let widthPart = -1;
        let start = left;
        let end = right;
        let cutoff = 0;
        let marking = 0;
        if (direc === "end") {
          marking = start;
          cutoff = end;
        } else {
          marking = end;
          cutoff = start;
        }
        let contentWidth = pxToNumber(widthRef.value) * Number(props.rows) - threeDotWidth;
        let contentPartWidth = props.direction === "middle" ? contentWidth / 2 : contentWidth;
        while (widthPart < contentPartWidth) {
          const zi = props.content[marking];
          if (chineseReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[0]);
          } else if (letterUpperReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[1]);
          } else if (letterLowerReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[2]);
          } else if (digitReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[3]);
          } else {
            widthPart = Number(widthPart + widthBase[4]);
          }
          cutoff = marking;
          direc === "end" ? marking++ : marking--;
        }
        if (direc === "end") {
          return props.content.slice(0, cutoff);
        } else {
          return props.content.slice(cutoff, end);
        }
      };
      const pxToNumber = (value) => {
        if (!value)
          return 0;
        const match = value.match(/^\d*(\.\d*)?/);
        return match ? Number(match[0]) : 0;
      };
      const clickHandle = (type) => {
        if (type == 1) {
          state.expanded = true;
          emit("change", "expand");
        } else {
          state.expanded = false;
          emit("change", "collapse");
        }
      };
      const handleClick = () => {
        emit("click");
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        rootId,
        rootContain,
        symbolContain,
        ellipsis,
        contantCopy,
        symbolText,
        clickHandle,
        handleClick,
        refRandomId,
        widthRef
      });
    }
  });
  const _hoisted_1$p = ["id"];
  const _hoisted_2$l = {
    key: 0,
    class: "nut-ellipsis__wordbreak"
  };
  const _hoisted_3$i = {
    key: 1,
    class: "nut-ellipsis__wordbreak"
  };
  const _hoisted_4$i = { key: 2 };
  const _hoisted_5$9 = ["id"];
  const _hoisted_6$8 = ["id"];
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        id: _ctx.rootId,
        class: "nut-ellipsis ell",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        !_ctx.exceeded ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$l, vue.toDisplayString(_ctx.content), 1)) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.exceeded && !_ctx.expanded ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$i, [
          vue.createTextVNode(vue.toDisplayString(_ctx.ellipsis.leading) + vue.toDisplayString(_ctx.ellipsis.leading && _ctx.symbol), 1),
          _ctx.expandText ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-ellipsis__text",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.clickHandle(1), ["stop"]))
          }, vue.toDisplayString(_ctx.expandText), 1)) : vue.createCommentVNode("", true),
          vue.createTextVNode(vue.toDisplayString(_ctx.ellipsis.tailing && _ctx.symbol) + vue.toDisplayString(_ctx.ellipsis.tailing), 1)
        ])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.exceeded && _ctx.expanded ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$i, [
          vue.createTextVNode(vue.toDisplayString(_ctx.content) + " ", 1),
          _ctx.expandText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: "nut-ellipsis__text",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.clickHandle(2), ["stop"]))
          }, vue.toDisplayString(_ctx.collapseText), 1)) : vue.createCommentVNode("", true)
        ])) : vue.createCommentVNode("", true)
      ], 8, _hoisted_1$p),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        id: "rootContain" + _ctx.refRandomId,
        ref: "rootContain",
        class: "nut-ellipsis__copy",
        style: vue.normalizeStyle({ width: _ctx.widthRef })
      }, [
        vue.createElementVNode("view", null, vue.toDisplayString(_ctx.contantCopy), 1)
      ], 12, _hoisted_5$9),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        id: "symbolContain" + _ctx.refRandomId,
        ref: "symbolContain",
        class: "nut-ellipsis__copy",
        style: { "display": "inline" }
      }, vue.toDisplayString(_ctx.symbolText), 9, _hoisted_6$8)
    ]);
  }
  const Ellipsis = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
  const { componentName: componentName$3, create: create$q } = createComponent("watermark");
  const _sfc_main$q = create$q({
    props: {
      name: {
        type: String,
        default: ""
      },
      gapY: {
        type: Number,
        default: 48
      },
      gapX: {
        type: Number,
        default: 24
      },
      zIndex: {
        type: Number,
        default: 2e3
      },
      width: {
        type: Number,
        default: 120
      },
      height: {
        type: Number,
        default: 64
      },
      rotate: {
        type: Number,
        default: -22
      },
      image: {
        type: String,
        default: ""
      },
      imageWidth: {
        type: Number,
        default: 120
      },
      imageHeight: {
        type: Number,
        default: 64
      },
      content: {
        type: [String, Array],
        default: ""
      },
      fontColor: {
        type: String,
        default: "rgba(0,0,0,.15)"
      },
      fontStyle: {
        type: String,
        default: "normal"
      },
      fontFamily: {
        type: String,
        default: "PingFang SC"
      },
      fontWeight: {
        type: String,
        default: "normal"
      },
      fontSize: {
        type: [String, Number],
        default: 14
      },
      fullPage: {
        type: Boolean,
        default: ""
      }
    },
    emits: ["click"],
    setup(props) {
      const state = vue.reactive({
        base64Url: ""
      });
      const {
        zIndex,
        gapX,
        gapY,
        width,
        height,
        rotate,
        image,
        imageWidth,
        imageHeight,
        content,
        fontStyle,
        fontWeight,
        fontColor,
        fontSize,
        fontFamily
      } = props;
      const init = () => __async(this, null, function* () {
        let ratio = 1;
        Taro.getSystemInfo({
          success(res) {
            ratio = res.pixelRatio;
          }
        });
        const canvasWidth = `${(gapX + width) * ratio}`;
        const canvasHeight = `${(gapY + height) * ratio}`;
        const markWidth = width * ratio;
        const markHeight = height * ratio;
        const canvas = Taro.createOffscreenCanvas({
          type: "2d",
          width: Number(canvasWidth),
          height: Number(canvasHeight)
        });
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (image) {
            const img = canvas.createImage();
            dealWithImage(ctx, img, ratio, ctx.canvas, markWidth, markHeight);
          } else if (content) {
            dealWithText(ctx, ratio, ctx.canvas, markWidth, markHeight);
          }
        } else {
          throw new Error("当前环境不支持Canvas");
        }
      });
      const initH5 = () => {
        const canvas = document.createElement("canvas");
        const ratio = window.devicePixelRatio;
        const ctx = canvas.getContext("2d");
        const canvasWidth = `${(gapX + width) * ratio}px`;
        const canvasHeight = `${(gapY + height) * ratio}px`;
        const markWidth = width * ratio;
        const markHeight = height * ratio;
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        if (ctx) {
          if (image) {
            const img = new Image();
            dealWithImage(ctx, img, ratio, canvas, markWidth, markHeight);
          } else if (content) {
            dealWithText(ctx, ratio, canvas, markWidth, markHeight);
          }
        } else {
          throw new Error("当前环境不支持Canvas");
        }
      };
      const dealWithImage = (ctx, img, ratio, canvas, markWidth, markHeight) => {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = image;
        img.onload = () => {
          ctx.drawImage(
            img,
            -imageWidth * ratio / 2,
            -imageHeight * ratio / 2,
            imageWidth * ratio,
            imageHeight * ratio
          );
          ctx.restore();
          state.base64Url = canvas.toDataURL();
        };
      };
      const dealWithText = (ctx, ratio, canvas, markWidth, markHeight) => {
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        const markSize = Number(fontSize) * ratio;
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        if (Array.isArray(content)) {
          content.map((item, index) => {
            ctx.fillText(item, 0, (index - 1) * markSize);
          });
        } else {
          ctx.fillText(content, 0, 0);
        }
        ctx.restore();
        state.base64Url = canvas.toDataURL();
      };
      if (Taro.getEnv() === "WEB") {
        initH5();
      } else {
        init();
      }
      vue.watch(
        () => [
          zIndex,
          gapX,
          gapY,
          width,
          height,
          rotate,
          image,
          imageWidth,
          imageHeight,
          content,
          fontStyle,
          fontWeight,
          fontColor,
          fontSize,
          fontFamily
        ],
        () => {
          init();
        }
      );
      const classes = vue.computed(() => {
        const prefixCls = componentName$3;
        return {
          [prefixCls]: true,
          [`${prefixCls}-full-page`]: props.fullPage
        };
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), { classes });
    }
  });
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle({
        zIndex: _ctx.zIndex,
        backgroundSize: `${_ctx.gapX + _ctx.width}px`,
        backgroundImage: `url('${_ctx.base64Url}')`
      })
    }, null, 6);
  }
  const Watermark = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
  const { create: create$p } = createComponent("trend-arrow");
  const _sfc_main$p = create$p({
    components: { TriangleUp: iconsVueTaro.TriangleUp, TriangleDown: iconsVueTaro.TriangleDown },
    props: {
      rate: {
        type: Number,
        default: 0
      },
      digits: {
        type: Number,
        default: 2
      },
      showSign: {
        type: Boolean,
        default: false
      },
      showZero: {
        type: Boolean,
        default: false
      },
      arrowLeft: {
        type: Boolean,
        default: false
      },
      syncTextColor: {
        type: Boolean,
        default: true
      },
      textColor: {
        type: String,
        default: "#333"
      },
      riseColor: {
        type: String,
        default: "#fa2c19"
      },
      dropColor: {
        type: String,
        default: "#64b578"
      }
    },
    setup(props) {
      const state = vue.reactive({
        rateTrend: props.rate > 0 ? true : false
      });
      const calcRate = vue.computed(() => {
        const { rate, digits, showSign, showZero } = props;
        state.rateTrend = rate > 0 ? true : false;
        const absRate = Math.abs(rate);
        if (!showZero && rate === 0) {
          return "--";
        }
        let resultRate = `${showSign && rate !== 0 ? state.rateTrend ? "+" : "-" : ""}${myFixed(
          Number(absRate),
          digits
        )}%`;
        return resultRate;
      });
      const calcStyle = vue.computed(() => {
        const { dropColor, riseColor, syncTextColor, textColor, rate } = props;
        let style = {
          color: rate === 0 ? textColor : syncTextColor ? state.rateTrend ? riseColor : dropColor : textColor
        };
        return style;
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), { calcRate, calcStyle });
    }
  });
  const _hoisted_1$o = { class: "nut-trend-arrow" };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TriangleUp = vue.resolveComponent("TriangleUp");
    const _component_TriangleDown = vue.resolveComponent("TriangleDown");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$o, [
      !_ctx.arrowLeft ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
        style: vue.normalizeStyle(_ctx.calcStyle)
      }, vue.toDisplayString(_ctx.calcRate), 5)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      Number(_ctx.rate) !== 0 && _ctx.rateTrend ? vue.renderSlot(_ctx.$slots, "up-icon", { key: 1 }, () => [
        vue.createVNode(_component_TriangleUp, { color: _ctx.riseColor }, null, 8, ["color"])
      ]) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      Number(_ctx.rate) !== 0 && !_ctx.rateTrend ? vue.renderSlot(_ctx.$slots, "down-icon", { key: 2 }, () => [
        vue.createVNode(_component_TriangleDown, { color: _ctx.dropColor }, null, 8, ["color"])
      ]) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.arrowLeft ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 3,
        class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
        style: vue.normalizeStyle(_ctx.calcStyle)
      }, vue.toDisplayString(_ctx.calcRate), 5)) : vue.createCommentVNode("", true)
    ]);
  }
  const TrendArrow = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
  const { create: create$o } = createComponent("tour");
  const _sfc_main$o = create$o({
    components: {
      NutPopover: Popover,
      Close: iconsVueTaro.Close
    },
    props: {
      modelValue: { type: Boolean, default: false },
      type: {
        type: String,
        default: "step"
      },
      steps: {
        type: Array,
        default: () => []
      },
      location: {
        type: String,
        default: "bottom"
      },
      current: {
        type: Number,
        default: 0
      },
      nextStepTxt: {
        type: String,
        default: "下一步"
      },
      prevStepTxt: {
        type: String,
        default: "上一步"
      },
      completeTxt: {
        type: String,
        default: "完成"
      },
      mask: {
        type: Boolean,
        default: true
      },
      offset: {
        type: Array,
        default: [8, 10]
      },
      bgColor: {
        type: String,
        default: ""
      },
      theme: {
        type: String,
        default: "light"
      },
      maskWidth: {
        type: [Number, String],
        default: ""
      },
      maskHeight: {
        type: [Number, String],
        default: ""
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      showPrevStep: {
        type: Boolean,
        default: true
      },
      showTitleBar: {
        type: Boolean,
        default: true
      }
    },
    emits: ["update:modelValue", "change", "close"],
    setup(props, { emit }) {
      const state = vue.reactive({
        showTour: props.modelValue,
        active: 0
      });
      const showPopup = vue.ref([false]);
      let maskRect = [];
      let maskStyles = vue.ref([]);
      const classes = vue.computed(() => {
        const prefixCls = "nut-tour";
        return `${prefixCls}`;
      });
      const maskStyle = (index) => {
        const { offset, maskWidth, maskHeight } = props;
        if (!maskRect[index])
          return {};
        const { width, height, left, top } = maskRect[index];
        const center = [left + width / 2, top + height / 2];
        const w = Number(maskWidth ? maskWidth : width);
        const h = Number(maskHeight ? maskHeight : height);
        const styles = {
          width: `${w + +offset[1] * 2}px`,
          height: `${h + +offset[0] * 2}px`,
          top: `${center[1] - h / 2 - +offset[0]}px`,
          left: `${center[0] - w / 2 - +offset[1]}px`
        };
        maskStyles.value[index] = styles;
      };
      const changeStep = (type) => {
        const current = state.active;
        let next = current;
        if (type == "next") {
          next = current + 1;
        } else {
          next = current - 1;
        }
        showPopup.value[current] = false;
        setTimeout(() => {
          showPopup.value[next] = true;
          state.active = next;
        }, 300);
        emit("change", state.active);
      };
      const getRootPosition = () => {
        props.steps.forEach((item, i) => __async(this, null, function* () {
          useTaroRectById(item.target).then(
            (rect) => {
              maskRect[i] = rect;
              maskStyle(i);
            },
            () => {
            }
          );
        }));
      };
      const close = () => {
        state.showTour = false;
        showPopup.value[state.active] = false;
        emit("close", state.active);
        emit("update:modelValue", false);
      };
      const handleClickMask = () => {
        props.closeOnClickOverlay && close();
      };
      vue.onMounted(() => {
        setTimeout(() => {
          getRootPosition();
        }, 500);
      });
      vue.watch(
        () => props.modelValue,
        (val) => {
          if (val) {
            state.active = 0;
            getRootPosition();
          }
          state.showTour = val;
          showPopup.value[state.active] = val;
        }
      );
      const refRandomId = Math.random().toString(36).slice(-8);
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        classes,
        maskStyle,
        changeStep,
        showPopup,
        close,
        handleClickMask,
        maskStyles,
        refRandomId
      });
    }
  });
  const _hoisted_1$n = ["id"];
  const _hoisted_2$k = {
    key: 0,
    class: "nut-tour-content"
  };
  const _hoisted_3$h = {
    key: 0,
    class: "nut-tour-content-top"
  };
  const _hoisted_4$h = { class: "nut-tour-content-inner" };
  const _hoisted_5$8 = { class: "nut-tour-content-bottom" };
  const _hoisted_6$7 = { class: "nut-tour-content-bottom-init" };
  const _hoisted_7$6 = { class: "nut-tour-content-bottom-operate" };
  const _hoisted_8$3 = {
    key: 1,
    class: "nut-tour-content nut-tour-content-tile"
  };
  const _hoisted_9$3 = { class: "nut-tour-content-inner" };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Close = vue.resolveComponent("Close");
    const _component_nut_popover = vue.resolveComponent("nut-popover");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      _ctx.showTour ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-tour-masked",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickMask && _ctx.handleClickMask(...args))
      })) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.steps, (step, i) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: i,
          style: { "height": "0" }
        }, [
          _ctx.showTour ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            id: `nut-tour-popid${i}${_ctx.refRandomId}`,
            class: vue.normalizeClass(["nut-tour-mask", [_ctx.mask ? _ctx.showPopup[i] ? "" : "nut-tour-mask-hidden" : "nut-tour-mask-none"]]),
            style: vue.normalizeStyle(_ctx.maskStyles[i])
          }, null, 14, _hoisted_1$n)) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.createVNode(_component_nut_popover, {
            visible: _ctx.showPopup[i],
            "onUpdate:visible": ($event) => _ctx.showPopup[i] = $event,
            location: step.location || _ctx.location,
            "target-id": `nut-tour-popid${i}${_ctx.refRandomId}`,
            "bg-color": _ctx.bgColor,
            theme: _ctx.theme,
            "close-on-click-outside": false,
            offset: step.popoverOffset || [0, 12],
            "arrow-offset": step.arrowOffset || 0,
            duration: 0.2
          }, {
            content: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                _ctx.type == "step" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$k, [
                  _ctx.showTitleBar ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$h, [
                    vue.createElementVNode("view", {
                      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.close && _ctx.close(...args))
                    }, [
                      vue.createVNode(_component_Close, {
                        class: "nut-tour-content-top-close",
                        size: "10px"
                      })
                    ])
                  ])) : vue.createCommentVNode("", true),
                  vue.createTextVNode(),
                  vue.createElementVNode("view", _hoisted_4$h, vue.toDisplayString(step.content), 1),
                  vue.createTextVNode(),
                  vue.createElementVNode("view", _hoisted_5$8, [
                    vue.createElementVNode("view", _hoisted_6$7, vue.toDisplayString(_ctx.active + 1) + "/" + vue.toDisplayString(_ctx.steps.length), 1),
                    vue.createTextVNode(),
                    vue.createElementVNode("view", _hoisted_7$6, [
                      vue.renderSlot(_ctx.$slots, "prev-step", {}, () => [
                        _ctx.active != 0 && _ctx.showPrevStep ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "nut-tour-content-bottom-operate-btn",
                          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.changeStep("prev"))
                        }, vue.toDisplayString(_ctx.prevStepTxt), 1)) : vue.createCommentVNode("", true)
                      ]),
                      vue.createTextVNode(),
                      _ctx.steps.length - 1 == _ctx.active ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.close && _ctx.close(...args))
                      }, vue.toDisplayString(_ctx.completeTxt), 1)) : vue.createCommentVNode("", true),
                      vue.createTextVNode(),
                      vue.renderSlot(_ctx.$slots, "next-step", {}, () => [
                        _ctx.steps.length - 1 != _ctx.active ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "nut-tour-content-bottom-operate-btn active",
                          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.changeStep("next"))
                        }, vue.toDisplayString(_ctx.nextStepTxt), 1)) : vue.createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])) : vue.createCommentVNode("", true),
                vue.createTextVNode(),
                _ctx.type == "tile" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$3, [
                  vue.createElementVNode("view", _hoisted_9$3, vue.toDisplayString(step.content), 1)
                ])) : vue.createCommentVNode("", true)
              ])
            ]),
            _: 2
          }, 1032, ["visible", "onUpdate:visible", "location", "target-id", "bg-color", "theme", "offset", "arrow-offset"])
        ]);
      }), 128))
    ], 2);
  }
  const Tour = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
  const cN$9 = "NutAddress";
  const { create: create$n } = createComponent("address");
  const _sfc_main$n = create$n({
    components: {
      NutPopup: Popup,
      NutElevator: Elevator,
      Location: iconsVueTaro.Location,
      Location2: iconsVueTaro.Location2,
      Check: iconsVueTaro.Check,
      Close: iconsVueTaro.Close,
      Left: iconsVueTaro.Left,
      NutScrollView: _sfc_main$1t
    },
    inheritAttrs: false,
    props: __spreadProps(__spreadValues({}, popupProps), {
      modelValue: {
        type: Array,
        default: () => []
      },
      visible: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "custom"
      },
      customAddressTitle: {
        type: String,
        default: ""
      },
      province: {
        type: Array,
        default: () => []
      },
      city: {
        type: Array,
        default: () => []
      },
      // 市
      country: {
        type: Array,
        default: () => []
      },
      // 县
      town: {
        type: Array,
        default: () => []
      },
      // 镇
      isShowCustomAddress: {
        type: Boolean,
        default: true
      },
      // 是否显示‘选择其他地区’按钮 type=‘exist’ 生效
      existAddress: {
        type: Array,
        default: () => []
      },
      // 现存地址列表
      existAddressTitle: {
        type: String,
        default: ""
      },
      customAndExistTitle: {
        type: String,
        default: ""
      },
      height: {
        type: [String, Number],
        default: "200"
      },
      columnsPlaceholder: {
        type: [String, Array],
        default: ""
      }
    }),
    emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
    setup(props, { emit }) {
      const translate = useLocale(cN$9);
      const tabItemRef = vue.reactive({
        province: vue.ref(null),
        city: vue.ref(null),
        country: vue.ref(null),
        town: vue.ref(null)
      });
      const showPopup = vue.ref(props.visible);
      const privateType = vue.ref(props.type);
      const tabIndex = vue.ref(0);
      const prevTabIndex = vue.ref(0);
      const tabName = vue.ref(["province", "city", "country", "town"]);
      const scrollDis = vue.ref([0, 0, 0, 0]);
      const scrollTop = vue.ref(0);
      const regionData = vue.reactive([]);
      const regionList = vue.computed(() => {
        switch (tabIndex.value) {
          case 0:
            return props.province;
          case 1:
            return props.city;
          case 2:
            return props.country;
          default:
            return props.town;
        }
      });
      const transformData = (data) => {
        if (!Array.isArray(data))
          throw new TypeError("params muse be array.");
        if (!data.length)
          return [];
        data.forEach((item) => {
          if (!item.title) {
            console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
            return;
          }
        });
        const newData = [];
        data = data.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        data.forEach((item) => {
          const index = newData.findIndex((value) => value.title === item.title);
          if (index <= -1) {
            newData.push({
              title: item.title,
              list: [].concat(item)
            });
          } else {
            newData[index].list.push(item);
          }
        });
        return newData;
      };
      let selectedRegion = vue.ref([]);
      let selectedExistAddress = vue.reactive({});
      const closeWay = vue.ref("self");
      const lineDistance = vue.ref(20);
      const initCustomSelected = () => {
        regionData[0] = props.province || [];
        regionData[1] = props.city || [];
        regionData[2] = props.country || [];
        regionData[3] = props.town || [];
        const defaultValue = props.modelValue;
        const num = defaultValue.length;
        if (num > 0) {
          tabIndex.value = num - 1;
          if (regionList.value.length == 0) {
            tabIndex.value = 0;
            return;
          }
          for (let index = 0; index < num; index++) {
            let arr = regionData[index];
            selectedRegion.value[index] = arr.filter((item) => item.id == defaultValue[index])[0];
          }
          scrollTo();
        }
      };
      const getTabName = (item, index) => {
        if (item && item.name)
          return item.name;
        if (tabIndex.value < index && item) {
          return item.name;
        } else {
          return props.columnsPlaceholder[index] || translate("select");
        }
      };
      const handClose = (type = "self") => {
        closeWay.value = type == "cross" ? "cross" : "self";
        showPopup.value = false;
      };
      const clickOverlay = () => {
        closeWay.value = "mask";
      };
      const nextAreaList = (item) => {
        var _a;
        const tab = tabIndex.value;
        prevTabIndex.value = tabIndex.value;
        const callBackParams = {
          custom: tabName.value[tab]
        };
        selectedRegion.value[tab] = item;
        selectedRegion.value.splice(tab + 1, selectedRegion.value.length - (tab + 1));
        callBackParams.value = item;
        if (((_a = regionData[tab + 1]) == null ? void 0 : _a.length) > 0) {
          tabIndex.value = tab + 1;
          callBackParams.next = tabName.value[tabIndex.value];
          scrollTo();
        } else {
          handClose();
          emit("update:modelValue");
        }
        emit("change", callBackParams);
      };
      const changeRegionTab = (item, index) => {
        prevTabIndex.value = tabIndex.value;
        if (getTabName(item, index)) {
          tabIndex.value = index;
          scrollTo();
        }
      };
      const scrollChange = (e) => {
        scrollDis.value[tabIndex.value] = e.detail.scrollTop;
      };
      const scrollTo = () => {
        setTimeout(() => {
          scrollTop.value = scrollDis.value[tabIndex.value];
        });
      };
      const selectedExist = (item) => {
        const copyExistAdd = props.existAddress;
        let prevExistAdd = {};
        copyExistAdd.forEach((list) => {
          if (list && list.selectedAddress)
            prevExistAdd = list;
          list.selectedAddress = false;
        });
        item.selectedAddress = true;
        selectedExistAddress = item;
        emit("selected", prevExistAdd, item, copyExistAdd);
        handClose();
      };
      const initAddress = () => {
        selectedRegion.value = [];
        tabIndex.value = 0;
        scrollTo();
      };
      const close = () => {
        const data = {
          addressIdStr: "",
          addressStr: "",
          province: selectedRegion.value[0],
          city: selectedRegion.value[1],
          country: selectedRegion.value[2],
          town: selectedRegion.value[3]
        };
        const callBackParams = {
          data: {},
          type: privateType.value
        };
        if (["custom", "custom2"].includes(privateType.value)) {
          [0, 1, 2, 3].forEach((i) => {
            const item = selectedRegion.value[i];
            data.addressIdStr += `${i ? "_" : ""}${item && item.id || 0}`;
            data.addressStr += item && item.name || "";
          });
          callBackParams.data = data;
        } else {
          callBackParams.data = selectedExistAddress;
        }
        initAddress();
        if (closeWay.value == "self") {
          emit("close", callBackParams);
        } else {
          emit("closeMask", { closeWay });
        }
        emit("update:visible", false);
      };
      const switchModule = () => {
        const type = privateType.value;
        privateType.value = type == "exist" ? "custom" : "exist";
        initAddress();
        emit("switchModule", { type: privateType.value });
      };
      const handleElevatorItem = (key, item) => {
        nextAreaList(item);
      };
      vue.watch(
        () => props.visible,
        (value) => {
          showPopup.value = value;
        }
      );
      vue.watch(
        () => showPopup.value,
        (value) => {
          if (value) {
            initCustomSelected();
          }
        }
      );
      return __spreadProps(__spreadValues(__spreadValues({
        showPopup,
        privateType,
        tabIndex,
        tabName,
        regionList,
        selectedRegion,
        selectedExistAddress,
        switchModule,
        closeWay,
        close,
        getTabName,
        nextAreaList,
        lineDistance,
        changeRegionTab,
        selectedExist,
        clickOverlay,
        handClose,
        handleElevatorItem
      }, vue.toRefs(props)), vue.toRefs(tabItemRef)), {
        translate,
        transformData,
        scrollTop,
        scrollChange
      });
    }
  });
  const _hoisted_1$m = { class: "nut-address" };
  const _hoisted_2$j = { class: "nut-address__header" };
  const _hoisted_3$g = { class: "nut-address__header__title" };
  const _hoisted_4$g = {
    key: 0,
    class: "nut-address__custom"
  };
  const _hoisted_5$7 = {
    ref: "tabRegion",
    class: "nut-address__region"
  };
  const _hoisted_6$6 = ["onClick"];
  const _hoisted_7$5 = {
    key: 0,
    class: "active nut-address__region-item"
  };
  const _hoisted_8$2 = /* @__PURE__ */ vue.createElementVNode("view", { class: "nut-address__region-line--mini active" }, null, -1);
  const _hoisted_9$2 = {
    key: 0,
    class: "nut-address__detail"
  };
  const _hoisted_10$1 = { class: "nut-address__detail-list" };
  const _hoisted_11$1 = ["onClick"];
  const _hoisted_12$1 = {
    key: 1,
    class: "nut-address__elevator-group"
  };
  const _hoisted_13$1 = {
    key: 1,
    class: "nut-address__exist"
  };
  const _hoisted_14$1 = { class: "nut-address__exist-group" };
  const _hoisted_15 = { class: "nut-address__exist-group-list" };
  const _hoisted_16 = ["onClick"];
  const _hoisted_17 = { class: "nut-address__exist-item-info" };
  const _hoisted_18 = {
    key: 0,
    class: "nut-address__exist-item-info-top"
  };
  const _hoisted_19 = { class: "nut-address__exist-item-info-name" };
  const _hoisted_20 = { class: "nut-address__exist-item-info-phone" };
  const _hoisted_21 = { class: "nut-address__exist-item-info-bottom" };
  const _hoisted_22 = { class: "nut-address__exist-choose-btn" };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Left = vue.resolveComponent("Left");
    const _component_Close = vue.resolveComponent("Close");
    const _component_Check = vue.resolveComponent("Check");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_nut_elevator = vue.resolveComponent("nut-elevator");
    const _component_Location2 = vue.resolveComponent("Location2");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPopup,
      "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => _ctx.showPopup = $event),
      position: "bottom",
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      round: _ctx.round,
      "z-index": _ctx.zIndex,
      onClose: _ctx.close,
      onClickOverlay: _ctx.clickOverlay,
      onOpen: _cache[4] || (_cache[4] = ($event) => _ctx.closeWay = "self")
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$m, [
          vue.createElementVNode("view", _hoisted_2$j, [
            vue.createElementVNode("view", {
              class: "nut-address__header-back",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.switchModule && _ctx.switchModule(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "back-icon", {}, () => [
                vue.withDirectives(vue.createVNode(_component_Left, { size: "14px" }, null, 512), [
                  [vue.vShow, _ctx.type == "exist" && _ctx.privateType == "custom"]
                ])
              ])
            ]),
            vue.createTextVNode(),
            vue.createElementVNode("view", _hoisted_3$g, vue.toDisplayString(_ctx.privateType == "custom" ? _ctx.customAddressTitle || _ctx.translate("selectRegion") : _ctx.existAddressTitle || _ctx.translate("deliveryTo")), 1),
            vue.createTextVNode(),
            vue.createElementVNode("view", {
              class: "nut-address__header-close",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handClose("cross"))
            }, [
              vue.renderSlot(_ctx.$slots, "close-icon", {}, () => [
                vue.createVNode(_component_Close, {
                  color: "#cccccc",
                  size: "14px"
                })
              ])
            ])
          ]),
          vue.createTextVNode(),
          ["custom", "custom2"].includes(_ctx.privateType) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$g, [
            vue.createElementVNode("view", _hoisted_5$7, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.selectedRegion, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(["nut-address__region-item", index == _ctx.tabIndex ? "active" : ""]),
                  onClick: ($event) => _ctx.changeRegionTab(item, index)
                }, [
                  vue.createElementVNode("view", null, vue.toDisplayString(_ctx.getTabName(item, index)), 1),
                  vue.createTextVNode(),
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass({ "nut-address__region-line--mini": true, active: index == _ctx.tabIndex })
                  }, null, 2)
                ], 10, _hoisted_6$6);
              }), 128)),
              vue.createTextVNode(),
              _ctx.tabIndex == _ctx.selectedRegion.length ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$5, [
                vue.createElementVNode("view", null, vue.toDisplayString(_ctx.getTabName(null, _ctx.selectedRegion.length)), 1),
                vue.createTextVNode(),
                _hoisted_8$2
              ])) : vue.createCommentVNode("", true)
            ], 512),
            vue.createTextVNode(),
            _ctx.privateType == "custom" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_9$2, [
              vue.createElementVNode("div", _hoisted_10$1, [
                vue.createVNode(_component_nut_scroll_view, {
                  "scroll-y": true,
                  style: { height: "100%" },
                  "scroll-top": _ctx.scrollTop,
                  onScroll: _ctx.scrollChange
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.regionList, (item, index) => {
                      var _a, _b;
                      return vue.openBlock(), vue.createElementBlock("div", {
                        key: index,
                        class: vue.normalizeClass(["nut-address__detail-item", ((_a = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _a.id) == item.id ? "active" : ""]),
                        onClick: ($event) => _ctx.nextAreaList(item)
                      }, [
                        vue.createElementVNode("div", null, [
                          ((_b = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _b.id) == item.id ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
                            vue.createVNode(_component_Check, {
                              class: "nut-address-select-icon",
                              width: "13px"
                            })
                          ]) : vue.createCommentVNode("", true),
                          vue.createTextVNode(vue.toDisplayString(item.name), 1)
                        ])
                      ], 10, _hoisted_11$1);
                    }), 128))
                  ]),
                  _: 3
                }, 8, ["scroll-top", "onScroll"])
              ])
            ])) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_12$1, [
              vue.createVNode(_component_nut_elevator, {
                height: _ctx.height,
                "index-list": _ctx.transformData(_ctx.regionList),
                onClickItem: _ctx.handleElevatorItem
              }, null, 8, ["height", "index-list", "onClickItem"])
            ]))
          ])) : _ctx.privateType == "exist" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_13$1, [
            vue.createElementVNode("div", _hoisted_14$1, [
              vue.createElementVNode("ul", _hoisted_15, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.existAddress, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("li", {
                    key: index,
                    class: vue.normalizeClass(["nut-address__exist-group-item", [item.selectedAddress ? "active" : ""]]),
                    onClick: ($event) => _ctx.selectedExist(item)
                  }, [
                    !item.selectedAddress ? vue.renderSlot(_ctx.$slots, "unselected-icon", { key: 0 }, () => [
                      vue.createVNode(_component_Location2, {
                        class: "nut-address-select-icon",
                        width: "13px"
                      })
                    ]) : vue.createCommentVNode("", true),
                    vue.createTextVNode(),
                    item.selectedAddress ? vue.renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
                      vue.createVNode(_component_Check, {
                        class: "nut-address-select-icon",
                        width: "13px"
                      })
                    ]) : vue.createCommentVNode("", true),
                    vue.createTextVNode(),
                    vue.createElementVNode("div", _hoisted_17, [
                      item.name && item.phone ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_18, [
                        vue.createElementVNode("div", _hoisted_19, vue.toDisplayString(item.name), 1),
                        vue.createTextVNode(),
                        vue.createElementVNode("div", _hoisted_20, vue.toDisplayString(item.phone), 1)
                      ])) : vue.createCommentVNode("", true),
                      vue.createTextVNode(),
                      vue.createElementVNode("div", _hoisted_21, [
                        vue.createElementVNode("view", null, vue.toDisplayString(item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail), 1)
                      ])
                    ])
                  ], 10, _hoisted_16);
                }), 128))
              ])
            ]),
            vue.createTextVNode(),
            _ctx.isShowCustomAddress ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "nut-address__exist-choose",
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.switchModule && _ctx.switchModule(...args))
            }, [
              vue.createElementVNode("div", _hoisted_22, vue.toDisplayString(_ctx.customAndExistTitle || _ctx.translate("chooseAnotherAddress")), 1)
            ])) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            !_ctx.isShowCustomAddress ? vue.renderSlot(_ctx.$slots, "bottom", { key: 1 }) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ])
      ]),
      _: 3
    }, 8, ["visible", "lock-scroll", "catch-move", "round", "z-index", "onClose", "onClickOverlay"]);
  }
  const Address = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
  const { componentName: componentName$2, create: create$m } = createComponent("barrage");
  const _sfc_main$m = create$m({
    props: {
      danmu: {
        type: Array,
        default: () => []
      },
      frequency: {
        type: Number,
        default: 500
      },
      speeds: {
        type: Number,
        default: 5e3
      },
      rows: {
        type: Number,
        default: 3
      },
      top: {
        type: Number,
        default: 10
      },
      loop: {
        type: Boolean,
        default: true
      }
    },
    emits: ["click"],
    setup(props) {
      const classTime = (/* @__PURE__ */ new Date()).getTime();
      const slotDefault = !!vue.useSlots().default;
      const timeId = vue.ref((/* @__PURE__ */ new Date()).getTime());
      const danmuList = vue.ref(props.danmu);
      const danmuListSlots = vue.ref([]);
      const rows = vue.ref(props.rows);
      const top = vue.ref(props.top);
      const speeds = props.speeds;
      const classes = vue.computed(() => {
        const prefixCls = componentName$2;
        return {
          [prefixCls]: true,
          ["nut-barrage--dmBody" + timeId.value]: true
        };
      });
      vue.onMounted(() => {
        var _a;
        if (slotDefault) {
          const list = document.getElementsByClassName("nut-barrage__slotBody" + classTime)[0].getElementsByClassName("nut-barrage__item");
          let childrens = ((_a = list == null ? void 0 : list[0]) == null ? void 0 : _a.children) || [];
          danmuList.value = childrens;
        }
        runStep();
      });
      vue.watch(
        () => props.danmu,
        (newValue) => {
          danmuList.value = [...newValue];
        }
      );
      const add = (word) => {
        danmuList.value = [...danmuList.value, word];
        runStep();
      };
      const getNode = (index) => {
        const query = Taro.createSelectorQuery();
        setTimeout(() => {
          let width = 100;
          query.select(".nut-barrage--dmBody" + timeId.value).boundingClientRect((rec) => {
            width = (rec == null ? void 0 : rec.width) || 300;
          });
          query.select(".nut-barrage__item" + index).boundingClientRect((recs) => {
            let height = recs == null ? void 0 : recs.height;
            let nodeTop = index % rows.value * (height + top.value) + 20 + "px";
            styleInfo(index, nodeTop, width);
          }).exec();
        }, 500);
      };
      const runStep = () => {
        danmuList.value.forEach((item, index) => {
          getNode(index);
        });
      };
      let styleList = vue.reactive([]);
      const styleInfo = (index, nodeTop, width) => {
        var _a;
        let timeIndex = index - rows.value > 0 ? index - rows.value : 0;
        let list = styleList;
        let time = list[timeIndex] ? Number(list[timeIndex]["--time"]) : 0;
        let obj = {
          top: nodeTop,
          "--time": `${props.frequency * index + time}`,
          animationDuration: `${speeds}ms`,
          animationIterationCount: `${props.loop ? "infinite" : 1}`,
          animationDelay: `${props.frequency * index + time}ms`,
          "--move-distance": `-${width}px`
        };
        if (slotDefault && ((_a = danmuList.value[index]) == null ? void 0 : _a.el)) {
          let orginalSty = danmuList.value[index].el.style;
          danmuList.value[index].el.style = Object.assign(orginalSty, obj);
        } else {
          styleList.push(obj);
        }
      };
      return { classTime, classes, danmuList, add, styleList, danmuListSlots };
    }
  });
  const _hoisted_1$l = { ref: "dmContainer" };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("div", _hoisted_1$l, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["nut-barrage__slotBody" + _ctx.classTime])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.danmuList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: "danmu" + index,
              class: vue.normalizeClass(["nut-barrage__item", "nut-barrage__item" + index, "move"]),
              style: vue.normalizeStyle(_ctx.styleList[index])
            }, vue.toDisplayString(item.length > 8 ? item.substr(0, 8) + "..." : item), 7);
          }), 128))
        ], 2)
      ], 512)
    ], 2);
  }
  const Barrage = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
  const { create: create$l } = createComponent("signature");
  const cN$8 = "NutSignature";
  const _sfc_main$l = create$l({
    props: {
      customClass: {
        type: String,
        default: ""
      },
      lineWidth: {
        type: Number,
        default: 2
      },
      strokeStyle: {
        type: String,
        default: "#000"
      },
      type: {
        type: String,
        default: "png"
      },
      unSupportTpl: {
        type: String,
        default: ""
      }
    },
    components: {
      NutButton: Button
    },
    emits: ["start", "end", "signing", "confirm", "clear"],
    setup(props, { emit }) {
      const translate = useLocale(cN$8);
      const classes = vue.computed(() => {
        const prefixCls = "nut-signature";
        return {
          [prefixCls]: true,
          [`${props.customClass}`]: props.customClass
        };
      });
      const spcanvas = vue.ref(null);
      const canvasSetId = "spcanvas" + (/* @__PURE__ */ new Date()).getTime();
      const state = vue.reactive({
        canvas: null,
        canvasHeight: 0,
        canvasWidth: 0,
        ctx: null
      });
      const startEventHandler = (event) => {
        event.preventDefault();
        if (!state.ctx) {
          return false;
        }
        emit("start");
        state.ctx.beginPath();
        state.ctx.lineWidth = props.lineWidth;
        state.ctx.strokeStyle = props.strokeStyle;
      };
      const isDraw = vue.ref(false);
      const moveEventHandler = (event) => {
        event.preventDefault();
        if (!state.ctx) {
          return false;
        }
        let evt = event.changedTouches[0];
        isDraw.value = true;
        emit("signing", evt);
        let mouseX = evt.x || evt.clientX;
        let mouseY = evt.y || evt.clientY;
        if (Taro.getEnv() === "WEB") {
          const canvas = document.getElementById(canvasSetId);
          const coverPos = canvas == null ? void 0 : canvas.getBoundingClientRect();
          if (coverPos) {
            mouseX = evt.clientX - coverPos.left;
            mouseY = evt.clientY - coverPos.top;
          }
        }
        Taro.nextTick(() => {
          var _a, _b;
          state.ctx.lineCap = "round";
          state.ctx.lineJoin = "round";
          (_a = state.ctx) == null ? void 0 : _a.lineTo(mouseX, mouseY);
          (_b = state.ctx) == null ? void 0 : _b.stroke();
        });
      };
      const endEventHandler = (event) => {
        event.preventDefault();
        emit("end");
      };
      const leaveEventHandler = (event) => {
        event.preventDefault();
      };
      const clear = () => {
        state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
        state.ctx.closePath();
        emit("clear");
        isDraw.value = false;
      };
      const confirm = () => {
        onSave();
      };
      const onSave = () => {
        if (!state.canvas) {
          return;
        }
        Taro.createSelectorQuery().select("#" + canvasSetId).fields({
          node: true,
          size: true
        }).exec((res) => __async(this, null, function* () {
          Taro.canvasToTempFilePath({
            canvas: res[0].node,
            canvasId: canvasSetId,
            fileType: props.type,
            success: function(result) {
              const _canvas = !isDraw.value ? "请绘制签名" : state.canvas;
              const _filePath = !isDraw.value ? "" : result.tempFilePath;
              emit("confirm", _canvas, _filePath);
            },
            fail: function(result) {
              emit("confirm", result);
            }
          });
        }));
      };
      vue.onMounted(() => {
        Taro.nextTick(() => {
          setTimeout(() => {
            if (Taro.getEnv() === "WEAPP" || Taro.getEnv() === "JD") {
              Taro.createSelectorQuery().select("#" + canvasSetId).fields(
                {
                  node: true,
                  size: true
                },
                function(res) {
                  const canvas = res.node;
                  canvasSetting(canvas, res.width, res.height);
                }
              ).exec();
            } else {
              const canvasDom = document.getElementById(canvasSetId);
              let canvas = canvasDom;
              if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
                canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
              }
              canvasSetting(canvas, canvasDom == null ? void 0 : canvasDom.offsetWidth, canvasDom == null ? void 0 : canvasDom.offsetHeight);
            }
          }, 1e3);
        });
      });
      const canvasSetting = (canvasDom, width, height) => {
        const canvas = canvasDom;
        const dpr = Taro.getSystemInfoSync().pixelRatio;
        const ctx = canvas.getContext("2d");
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        state.canvas = canvas;
        ctx.scale(dpr, dpr);
        state.ctx = ctx;
        state.canvasWidth = width * dpr;
        state.canvasHeight = height * dpr;
      };
      return {
        taroEnv: Taro.getEnv(),
        canvasSetId,
        spcanvas,
        confirm,
        clear,
        classes,
        startEventHandler,
        moveEventHandler,
        endEventHandler,
        leaveEventHandler,
        translate
      };
    }
  });
  const _hoisted_1$k = {
    class: /* @__PURE__ */ vue.normalizeClass(["nut-signature-inner", "spcanvas_WEAPP"])
  };
  const _hoisted_2$i = ["id", "canvasId"];
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("div", _hoisted_1$k, [
        vue.createElementVNode("canvas", {
          id: _ctx.canvasSetId,
          ref: "spcanvas",
          class: "spcanvas",
          canvasId: _ctx.canvasSetId,
          type: "2d",
          "disable-scroll": "true",
          onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.startEventHandler && _ctx.startEventHandler(...args)),
          onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.moveEventHandler && _ctx.moveEventHandler(...args)),
          onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.endEventHandler && _ctx.endEventHandler(...args)),
          onTouchleave: _cache[3] || (_cache[3] = (...args) => _ctx.leaveEventHandler && _ctx.leaveEventHandler(...args))
        }, null, 40, _hoisted_2$i)
      ]),
      vue.createTextVNode(),
      vue.createVNode(_component_nut_button, {
        class: "nut-signature-btn",
        type: "default",
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.clear())
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString(_ctx.translate("reSign")), 1)
        ]),
        _: 1
      }),
      vue.createTextVNode(),
      vue.createVNode(_component_nut_button, {
        class: "nut-signature-btn",
        type: "primary",
        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.confirm())
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString(_ctx.translate("confirm")), 1)
        ]),
        _: 1
      })
    ], 2);
  }
  const Signature = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
  const { create: create$k } = createComponent("time-select");
  const cN$7 = "NutTimeSelect";
  const _sfc_main$k = create$k({
    components: {
      NutPopup: Popup
    },
    props: {
      visible: {
        type: Boolean,
        defalut: false
      },
      height: {
        type: [String],
        default: "20%"
      },
      title: {
        type: String,
        default: ""
      },
      currentKey: {
        type: [Number, String],
        default: 0
      },
      currentTime: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lockScroll: {
        type: [Boolean],
        default: true
      }
    },
    emits: ["update:visible", "select"],
    setup: (props, { emit }) => {
      const translate = useLocale(cN$7);
      const popStyle = vue.computed(() => {
        return {
          width: "100%",
          height: props.height
        };
      });
      const currentKey = vue.computed(() => props.currentKey);
      const currentTime = vue.computed(() => props.currentTime);
      const close = () => {
        emit("update:visible", false);
        emit("select", currentTime.value);
      };
      vue.provide("currentKey", currentKey);
      vue.provide("currentTime", currentTime);
      return {
        popStyle,
        close,
        translate
      };
    }
  });
  const _hoisted_1$j = { class: "nut-time-select" };
  const _hoisted_2$h = { class: "nut-time-select__title" };
  const _hoisted_3$f = { class: "nut-time-select__title__fixed" };
  const _hoisted_4$f = { key: 0 };
  const _hoisted_5$6 = { class: "nut-time-select__content" };
  const _hoisted_6$5 = { class: "nut-time-select__content__pannel" };
  const _hoisted_7$4 = { class: "nut-time-select__content__detail" };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      position: "bottom",
      closeable: "",
      round: "",
      visible: _ctx.visible,
      style: vue.normalizeStyle(_ctx.popStyle),
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      onClickOverlay: _ctx.close,
      onClickCloseIcon: _ctx.close
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$j, [
          vue.createElementVNode("view", _hoisted_2$h, [
            vue.createElementVNode("view", _hoisted_3$f, [
              !_ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$f, vue.toDisplayString(_ctx.title || _ctx.translate("pickupTime")), 1)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 })
            ])
          ]),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_5$6, [
            vue.createElementVNode("view", _hoisted_6$5, [
              vue.renderSlot(_ctx.$slots, "pannel")
            ]),
            vue.createTextVNode(),
            vue.createElementVNode("view", _hoisted_7$4, [
              vue.renderSlot(_ctx.$slots, "detail")
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["visible", "style", "lock-scroll", "catch-move", "onClickOverlay", "onClickCloseIcon"]);
  }
  const TimeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
  const { componentName: componentName$1, create: create$j } = createComponent("time-pannel");
  const _sfc_main$j = create$j({
    name: "timepannel",
    props: {
      name: {
        type: String,
        default: ""
      },
      pannelKey: {
        type: [Number, String],
        default: 0
      }
    },
    emits: ["change"],
    setup: (props, context) => {
      const currentKey = vue.inject("currentKey");
      const state = vue.reactive({
        currentKey
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName$1;
        return {
          [prefixCls]: true,
          "nut-time-pannel--curr": state.currentKey == props.pannelKey
        };
      });
      const handlePannel = (pannelKey) => {
        context.emit("change", pannelKey);
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        classes,
        handlePannel
      });
    }
  });
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handlePannel(_ctx.pannelKey))
    }, vue.toDisplayString(_ctx.name), 3);
  }
  const TimePannel = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
  const { create: create$i } = createComponent("time-detail");
  const _sfc_main$i = create$i({
    name: "timedetail",
    props: {
      times: {
        type: Array,
        default: () => []
      }
    },
    emits: ["select"],
    setup: (props, { emit }) => {
      const currentKey = vue.inject("currentKey");
      const currentTime = vue.inject("currentTime");
      const state = vue.reactive({
        currentKey,
        currentTime
      });
      const getClass = (item) => {
        let find = state.currentTime.find((item2) => item2.key == state.currentKey);
        if (find) {
          return {
            "nut-time-detail__detail__list__item": true,
            "nut-time-detail__detail__list__item--curr": find.list.filter((value) => value === item).length > 0
          };
        }
      };
      const renderData = vue.computed(() => {
        return props.times.find((time) => time.key == state.currentKey)["list"];
      });
      const handleTime = (time) => {
        emit("select", time);
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        getClass,
        renderData,
        handleTime
      });
    }
  });
  const _hoisted_1$i = { class: "nut-time-detail" };
  const _hoisted_2$g = { class: "nut-time-detail__detail nut-time-detail__detail--moring" };
  const _hoisted_3$e = { class: "nut-time-detail__detail__list" };
  const _hoisted_4$e = ["onClick"];
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$i, [
      vue.createElementVNode("view", _hoisted_2$g, [
        vue.createElementVNode("view", _hoisted_3$e, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.renderData, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item,
              class: vue.normalizeClass(_ctx.getClass(item)),
              onClick: ($event) => _ctx.handleTime(item)
            }, vue.toDisplayString(item), 11, _hoisted_4$e);
          }), 128))
        ])
      ])
    ]);
  }
  const TimeDetail = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
  const { create: create$h } = createComponent("sku-header");
  const cN$6 = "NutSkuHeader";
  const _sfc_main$h = create$h({
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
    components: {
      NutPrice: Price
    },
    setup(props, { slots }) {
      const translate = useLocale(cN$6);
      const getSlots = (name) => slots[name];
      return {
        getSlots,
        translate
      };
    }
  });
  const _hoisted_1$h = { class: "nut-sku-header" };
  const _hoisted_2$f = ["src"];
  const _hoisted_3$d = { class: "nut-sku-header-right" };
  const _hoisted_4$d = {
    key: 3,
    class: "nut-sku-header-right-extra"
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_price = vue.resolveComponent("nut-price");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$h, [
      vue.createElementVNode("img", {
        class: "nut-sku-header-img",
        src: _ctx.goods.imagePath
      }, null, 8, _hoisted_2$f),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_3$d, [
        _ctx.getSlots("sku-header-price") ? vue.renderSlot(_ctx.$slots, "sku-header-price", { key: 0 }) : (vue.openBlock(), vue.createBlock(_component_nut_price, {
          key: 1,
          price: _ctx.goods.price,
          "need-symbol": true,
          thousands: false
        }, null, 8, ["price"])),
        vue.createTextVNode(),
        _ctx.getSlots("sku-header-extra") ? vue.renderSlot(_ctx.$slots, "sku-header-extra", { key: 2 }) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        _ctx.goods.skuId && !_ctx.getSlots("sku-header-extra") ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$d, vue.toDisplayString(_ctx.translate("skuId")) + " : " + vue.toDisplayString(_ctx.goods.skuId), 1)) : vue.createCommentVNode("", true)
      ])
    ]);
  }
  const SkuHeader = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
  const { create: create$g } = createComponent("sku-select");
  const _sfc_main$g = create$g({
    props: {
      sku: {
        type: Array,
        default: () => []
      }
    },
    emits: ["selectSku"],
    setup(props, { emit }) {
      const skuInfo = vue.ref([]);
      vue.watch(
        () => props.sku,
        (value) => {
          skuInfo.value = [].slice.call(value);
        },
        { deep: true }
      );
      vue.onMounted(() => {
        if (props.sku.length > 0) {
          skuInfo.value = [].slice.call(props.sku);
        }
      });
      const changeSaleChild = (attrItem, index, parentItem, parentIndex) => {
        if (attrItem.checkFlag || attrItem.disable) {
          return;
        }
        emit("selectSku", {
          sku: attrItem,
          skuIndex: index,
          parentSku: parentItem,
          parentIndex
        });
      };
      return {
        skuInfo,
        changeSaleChild
      };
    }
  });
  const _hoisted_1$g = { class: "nut-sku-select" };
  const _hoisted_2$e = { class: "nut-sku-select-item-title" };
  const _hoisted_3$c = { class: "nut-sku-select-item-skus" };
  const _hoisted_4$c = ["onClick"];
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$g, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.skuInfo, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: item.id,
          class: "nut-sku-select-item"
        }, [
          vue.createElementVNode("view", _hoisted_2$e, vue.toDisplayString(item.name), 1),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_3$c, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.list, (itemAttr, itemAttrIndex) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: itemAttr.name,
                class: vue.normalizeClass(["nut-sku-select-item-skus-sku", [{ active: !itemAttr.disable && itemAttr.active }, { disable: itemAttr.disable }]]),
                onClick: ($event) => _ctx.changeSaleChild(itemAttr, itemAttrIndex, item, index)
              }, vue.toDisplayString(itemAttr.name), 11, _hoisted_4$c);
            }), 128))
          ])
        ]);
      }), 128))
    ]);
  }
  const SkuSelect = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
  const { create: create$f } = createComponent("sku-stepper");
  const _sfc_main$f = create$f({
    props: {
      // 购买数量最大值
      stepperMax: {
        type: [Number, String],
        default: 99999
      },
      stepperMin: {
        type: [Number, String],
        default: 1
      },
      // stepper 前文案提示
      stepperExtraText: {
        type: [Function, Boolean],
        default: false
      },
      // 数量选择左侧文案
      stepperTitle: {
        type: String,
        default: "购买数量"
      }
    },
    emits: ["click", "changeSku", "changeStepper", "clickBtnOptions", "overLimit", "reduce", "add"],
    components: {
      NutInputNumber: InputNumber
    },
    setup(props, { emit }) {
      const goodsCount = vue.ref(props.stepperMin);
      vue.onMounted(() => {
        goodsCount.value = props.stepperMin;
      });
      const getExtraText = () => {
        const { stepperExtraText } = props;
        if (stepperExtraText && TypeOfFun(stepperExtraText) == "function") {
          return stepperExtraText();
        } else {
          return "";
        }
      };
      const add = (value) => {
        emit("add", value);
      };
      const reduce = (value) => {
        emit("reduce", value);
      };
      const overlimit = (e, action) => {
        emit("overLimit", {
          action,
          value: parseInt(goodsCount.value + "")
        });
      };
      const changeStepper = (value) => {
        goodsCount.value = value;
        emit("changeStepper", value);
      };
      return {
        goodsCount,
        add,
        reduce,
        overlimit,
        getExtraText,
        changeStepper
      };
    }
  });
  const _hoisted_1$f = { class: "nut-sku-stepper" };
  const _hoisted_2$d = { class: "nut-sku-stepper-title" };
  const _hoisted_3$b = ["innerHTML"];
  const _hoisted_4$b = { class: "nut-sku-stepper-count" };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_input_number = vue.resolveComponent("nut-input-number");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$f, [
      vue.createElementVNode("view", _hoisted_2$d, vue.toDisplayString(_ctx.stepperTitle), 1),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: "nut-sku-stepper-limit",
        innerHTML: _ctx.getExtraText()
      }, null, 8, _hoisted_3$b),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_4$b, [
        vue.createVNode(_component_nut_input_number, {
          modelValue: _ctx.goodsCount,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.goodsCount = $event),
          min: _ctx.stepperMin,
          max: _ctx.stepperMax,
          onAdd: _ctx.add,
          onReduce: _ctx.reduce,
          onOverlimit: _ctx.overlimit,
          onChange: _ctx.changeStepper
        }, null, 8, ["modelValue", "min", "max", "onAdd", "onReduce", "onOverlimit", "onChange"])
      ])
    ]);
  }
  const SkuStepper = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
  const { create: create$e } = createComponent("sku-operate");
  const _sfc_main$e = create$e({
    props: {
      // 底部按钮配置  confirm cart  buy
      btnOptions: {
        type: Array,
        default: () => ["confirm"]
      },
      btnExtraText: {
        type: String,
        default: ""
      },
      // 立即购买文案
      buyText: {
        type: String,
        default: "立即购买"
      },
      // 加入购物车文案
      addCartText: {
        type: String,
        default: "加入购物车"
      },
      confirmText: {
        type: String,
        default: "确定"
      }
    },
    emits: ["click", "changeSku", "changeBuyCount", "clickBtnOperate"],
    setup(props, { emit, slots }) {
      const getBtnDesc = (type) => {
        let mapD = {
          confirm: props.confirmText,
          cart: props.addCartText,
          buy: props.buyText
        };
        return mapD[type];
      };
      const getSlots = (name) => slots[name];
      const clickBtnOperate = (btn) => {
        emit("clickBtnOperate", btn);
      };
      return {
        getBtnDesc,
        clickBtnOperate,
        getSlots
      };
    }
  });
  const _hoisted_1$e = {
    key: 0,
    class: "nut-sku-operate"
  };
  const _hoisted_2$c = {
    key: 0,
    class: "nut-sku-operate-desc"
  };
  const _hoisted_3$a = {
    key: 1,
    class: "nut-sku-operate-btn"
  };
  const _hoisted_4$a = ["onClick"];
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.btnOptions.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$e, [
      _ctx.btnExtraText ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$c, vue.toDisplayString(_ctx.btnExtraText), 1)) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "operate-btn"),
      vue.createTextVNode(),
      !_ctx.getSlots("operate-btn") ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$a, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.btnOptions, (btn, i) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: i,
            class: vue.normalizeClass([`nut-sku-operate-btn-${btn}`, "nut-sku-operate-btn-item"]),
            onClick: ($event) => _ctx.clickBtnOperate(btn)
          }, vue.toDisplayString(_ctx.getBtnDesc(btn)), 11, _hoisted_4$a);
        }), 128))
      ])) : vue.createCommentVNode("", true)
    ])) : vue.createCommentVNode("", true);
  }
  const SkuOperate = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
  const { create: create$d } = createComponent("sku");
  const cN$5 = "NutSku";
  const _sfc_main$d = create$d({
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      sku: {
        type: Array,
        default: []
      },
      goods: {
        type: Object,
        default: {}
      },
      // stepper 最大值
      stepperMax: {
        type: [Number, String],
        default: 99999
      },
      // stepper 最小值
      stepperMin: {
        type: [Number, String],
        default: 1
      },
      // 底部按钮配置  confirm cart  buy
      btnOptions: {
        type: Array,
        default: () => ["confirm"]
      },
      // 数量选择左侧文案
      stepperTitle: {
        type: String,
        default: ""
      },
      // stepper 前面文案
      stepperExtraText: {
        type: [Function, Boolean],
        default: false
      },
      btnExtraText: {
        type: String,
        default: ""
      },
      // 立即购买文案
      buyText: {
        type: String,
        default: ""
      },
      // 加入购物车文案
      addCartText: {
        type: String,
        default: ""
      },
      // 确定文案
      confirmText: {
        type: String,
        default: ""
      },
      lockScroll: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:visible",
      "selectSku",
      "changeStepper",
      "clickBtnOperate",
      "clickCloseIcon",
      "clickOverlay",
      "close",
      "reduce",
      "add",
      "overLimit"
    ],
    components: {
      SkuHeader,
      SkuSelect,
      SkuStepper,
      SkuOperate,
      NutPopup: Popup,
      NutScrollView: _sfc_main$1t
    },
    setup(props, { emit, slots }) {
      const translate = useLocale(cN$5);
      const showPopup = vue.ref(props.visible);
      const goodsCount = vue.ref(props.stepperMin);
      vue.watch(
        () => props.visible,
        (value) => {
          showPopup.value = value;
        }
      );
      vue.watch(
        () => showPopup.value,
        (value) => {
          if (value == false) {
            close();
          }
        }
      );
      const getSlots = (name) => slots[name];
      const selectSku = (skus) => {
        emit("selectSku", skus);
      };
      const changeStepper = (value) => {
        goodsCount.value = value;
        emit("changeStepper", value);
      };
      const add = (value) => {
        emit("add", value);
      };
      const reduce = (value) => {
        emit("reduce", value);
      };
      const stepperOverLimit = (count) => {
        emit("overLimit", count);
      };
      const clickBtnOperate = (btn) => {
        emit("clickBtnOperate", {
          type: btn,
          value: goodsCount.value
        });
      };
      const closePopup = (type) => {
        if (type == "icon") {
          emit("clickCloseIcon");
        }
        if (type == "overlay") {
          emit("clickOverlay");
        }
        if (type == "close") {
          emit("close");
        }
        showPopup.value = false;
      };
      const close = () => {
        emit("update:visible", false);
      };
      return {
        showPopup,
        closePopup,
        selectSku,
        changeStepper,
        stepperOverLimit,
        clickBtnOperate,
        add,
        reduce,
        getSlots,
        translate
      };
    }
  });
  const _hoisted_1$d = { class: "nut-sku" };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_sku_header = vue.resolveComponent("sku-header");
    const _component_SkuSelect = vue.resolveComponent("SkuSelect");
    const _component_sku_stepper = vue.resolveComponent("sku-stepper");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_sku_operate = vue.resolveComponent("sku-operate");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPopup,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.showPopup = $event),
      position: "bottom",
      closeable: "",
      round: "",
      style: { "height": "75%" },
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      onClickCloseIcon: _cache[1] || (_cache[1] = ($event) => _ctx.closePopup("icon")),
      onClickOverlay: _cache[2] || (_cache[2] = ($event) => _ctx.closePopup("overlay")),
      onClose: _cache[3] || (_cache[3] = ($event) => _ctx.closePopup("close"))
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$d, [
          vue.renderSlot(_ctx.$slots, "sku-header"),
          vue.createTextVNode(),
          !_ctx.getSlots("sku-header") ? (vue.openBlock(), vue.createBlock(_component_sku_header, {
            key: 0,
            goods: _ctx.goods
          }, vue.createSlots({ _: 2 }, [
            _ctx.getSlots("sku-header-price") ? {
              name: "sku-header-price",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "sku-header-price")
              ]),
              key: "0"
            } : void 0,
            _ctx.getSlots("sku-header-extra") ? {
              name: "sku-header-extra",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "sku-header-extra")
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["goods"])) : vue.createCommentVNode("", true),
          vue.createTextVNode(),
          vue.createVNode(_component_nut_scroll_view, {
            class: "nut-sku-content",
            "scroll-y": true
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "sku-select-top"),
              vue.createTextVNode(),
              vue.renderSlot(_ctx.$slots, "sku-select"),
              vue.createTextVNode(),
              !_ctx.getSlots("sku-select") ? (vue.openBlock(), vue.createBlock(_component_SkuSelect, {
                key: 0,
                sku: _ctx.sku,
                onSelectSku: _ctx.selectSku
              }, null, 8, ["sku", "onSelectSku"])) : vue.createCommentVNode("", true),
              vue.createTextVNode(),
              vue.renderSlot(_ctx.$slots, "sku-stepper"),
              vue.createTextVNode(),
              !_ctx.getSlots("sku-stepper") ? (vue.openBlock(), vue.createBlock(_component_sku_stepper, {
                key: 1,
                goods: _ctx.goods,
                "stepper-title": _ctx.stepperTitle || _ctx.translate("buyNumber"),
                "stepper-max": _ctx.stepperMax,
                "stepper-min": _ctx.stepperMin,
                "stepper-extra-text": _ctx.stepperExtraText,
                onAdd: _ctx.add,
                onReduce: _ctx.reduce,
                onChangeStepper: _ctx.changeStepper,
                onOverLimit: _ctx.stepperOverLimit
              }, null, 8, ["goods", "stepper-title", "stepper-max", "stepper-min", "stepper-extra-text", "onAdd", "onReduce", "onChangeStepper", "onOverLimit"])) : vue.createCommentVNode("", true),
              vue.createTextVNode(),
              vue.renderSlot(_ctx.$slots, "sku-stepper-bottom")
            ]),
            _: 3
          }),
          vue.createTextVNode(),
          vue.createVNode(_component_sku_operate, {
            "btn-extra-text": _ctx.btnExtraText,
            "btn-options": _ctx.btnOptions,
            "buy-text": _ctx.buyText || _ctx.translate("buyNow"),
            "add-cart-text": _ctx.addCartText || _ctx.translate("addToCart"),
            "confirm-text": _ctx.confirmText || _ctx.translate("confirm"),
            onClickBtnOperate: _ctx.clickBtnOperate
          }, vue.createSlots({ _: 2 }, [
            _ctx.getSlots("sku-operate") ? {
              name: "operate-btn",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "sku-operate")
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
        ])
      ]),
      _: 3
    }, 8, ["visible", "lock-scroll", "catch-move"]);
  }
  const Sku = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
  const { create: create$c } = createComponent("card");
  const _sfc_main$c = create$c({
    components: {
      NutPrice: Price,
      NutTag: Tag
    },
    props: {
      imgUrl: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      price: {
        type: String,
        default: ""
      },
      vipPrice: {
        type: String,
        default: ""
      },
      shopDesc: {
        type: String,
        default: ""
      },
      delivery: {
        type: String,
        default: ""
      },
      shopName: {
        type: String,
        default: ""
      },
      isNeedPrice: {
        type: Boolean,
        default: true
      }
    }
  });
  const _hoisted_1$c = { class: "nut-card" };
  const _hoisted_2$b = { class: "nut-card__left" };
  const _hoisted_3$9 = ["src"];
  const _hoisted_4$9 = { class: "nut-card__right" };
  const _hoisted_5$5 = { class: "nut-card__right__title" };
  const _hoisted_6$4 = {
    key: 0,
    class: "nut-card__right__price"
  };
  const _hoisted_7$3 = { class: "nut-card__right__other" };
  const _hoisted_8$1 = { class: "nut-card__right__shop" };
  const _hoisted_9$1 = { class: "nut-card__right__shop__name" };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_price = vue.resolveComponent("nut-price");
    const _component_nut_tag = vue.resolveComponent("nut-tag");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$c, [
      vue.createElementVNode("div", _hoisted_2$b, [
        vue.createElementVNode("img", {
          src: _ctx.imgUrl,
          alt: ""
        }, null, 8, _hoisted_3$9)
      ]),
      vue.createTextVNode(),
      vue.createElementVNode("div", _hoisted_4$9, [
        vue.createElementVNode("div", _hoisted_5$5, vue.toDisplayString(_ctx.title), 1),
        vue.createTextVNode(),
        vue.renderSlot(_ctx.$slots, "prolist"),
        vue.createTextVNode(),
        _ctx.isNeedPrice ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$4, [
          vue.renderSlot(_ctx.$slots, "price", {}, () => [
            vue.createVNode(_component_nut_price, { price: _ctx.price }, null, 8, ["price"])
          ]),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "origin", {}, () => [
            vue.createVNode(_component_nut_price, {
              class: "nut-card__right__price__origin",
              price: _ctx.vipPrice
            }, null, 8, ["price"])
          ])
        ])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.createElementVNode("div", _hoisted_7$3, [
          vue.renderSlot(_ctx.$slots, "shop-tag", {}, () => [
            vue.createVNode(_component_nut_tag, { type: "danger" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.shopDesc), 1)
              ]),
              _: 1
            }),
            vue.createTextVNode(),
            vue.createVNode(_component_nut_tag, { plain: "" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.delivery), 1)
              ]),
              _: 1
            })
          ])
        ]),
        vue.createTextVNode(),
        vue.createElementVNode("div", _hoisted_8$1, [
          vue.createElementVNode("div", _hoisted_9$1, vue.toDisplayString(_ctx.shopName), 1),
          vue.createTextVNode(),
          vue.renderSlot(_ctx.$slots, "footer")
        ])
      ])
    ]);
  }
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
  const { create: create$b } = createComponent("ecard");
  const cN$4 = "NutEcard";
  const _sfc_main$b = create$b({
    components: {
      NutInputNumber: InputNumber
    },
    props: {
      chooseText: {
        type: String,
        default: ""
      },
      otherValueText: {
        type: String,
        default: ""
      },
      dataList: {
        type: Array,
        default: () => []
      },
      cardAmountMin: {
        type: Number,
        default: 1
      },
      cardAmountMax: {
        type: Number,
        default: 9999
      },
      cardBuyMin: {
        type: Number,
        default: 1
      },
      cardBuyMax: {
        type: Number,
        default: 9999
      },
      modelValue: {
        type: [Number, String],
        default: 0
      },
      placeholder: {
        type: String,
        default: ""
      },
      suffix: {
        type: String,
        default: "¥"
      }
    },
    emits: ["inputChange", "changeStep", "inputClick", "change", "update:modelValue"],
    setup(props, { emit }) {
      const translate = useLocale(cN$4);
      const currentIndex = vue.ref(null);
      const currentValue = vue.ref(null);
      const inputValue = vue.ref();
      const stepValue = vue.ref(props.cardAmountMin);
      const money = vue.ref(props.modelValue);
      const handleClick = (item, index) => {
        currentIndex.value = index;
        inputValue.value = "";
        stepValue.value = props.cardAmountMin;
        currentValue.value = item.price;
        emit("change", item);
      };
      const change = (event) => {
        let input = event.target;
        let val = input.value.replace(/[^\d]/g, "");
        inputValue.value = val;
        currentValue.value = val;
        if (Number(val) > props.cardAmountMax) {
          inputValue.value = props.cardAmountMax;
          currentValue.value = props.cardAmountMax;
        }
        if (Number(val) < props.cardAmountMin) {
          inputValue.value = props.cardAmountMin;
          currentValue.value = props.cardAmountMin;
        }
        emit("inputChange", Number(inputValue.value));
      };
      const inputClick = () => {
        currentIndex.value = "input";
        stepValue.value = props.cardAmountMin;
        emit("update:modelValue", 0);
        emit("inputClick");
      };
      const changeStep = (value) => {
        stepValue.value = value;
        emit("changeStep", stepValue.value, currentValue.value);
      };
      vue.watch(
        () => props.modelValue,
        (value) => {
          money.value = value;
        }
      );
      return {
        handleClick,
        changeStep,
        change,
        inputClick,
        stepValue,
        currentIndex,
        inputValue,
        money,
        translate
      };
    }
  });
  const _hoisted_1$b = { class: "nut-ecard" };
  const _hoisted_2$a = { class: "nut-ecard__title" };
  const _hoisted_3$8 = { class: "nut-ecard__list" };
  const _hoisted_4$8 = ["onClick"];
  const _hoisted_5$4 = { class: "nut-ecard__list__input--con" };
  const _hoisted_6$3 = ["placeholder"];
  const _hoisted_7$2 = { class: "nut-ecard__list__step" };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_input_number = vue.resolveComponent("nut-input-number");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$b, [
      vue.createElementVNode("view", _hoisted_2$a, vue.toDisplayString(_ctx.chooseText || _ctx.translate("chooseText")), 1),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_3$8, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: vue.normalizeClass(["nut-ecard__list__item", _ctx.currentIndex == index ? "active" : ""]),
            onClick: ($event) => _ctx.handleClick(item, index)
          }, vue.toDisplayString(item.price), 11, _hoisted_4$8);
        }), 128)),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-ecard__list__input", _ctx.currentIndex == "input" ? "active" : ""]),
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.inputClick && _ctx.inputClick(...args))
        }, [
          vue.createElementVNode("view", null, vue.toDisplayString(_ctx.otherValueText || _ctx.translate("otherValueText")), 1),
          vue.createTextVNode(),
          vue.createElementVNode("view", _hoisted_5$4, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
              type: "text",
              class: "nut-ecard-input",
              placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
              onInput: _cache[1] || (_cache[1] = (...args) => _ctx.change && _ctx.change(...args))
            }, null, 40, _hoisted_6$3), [
              [vue.vModelText, _ctx.inputValue]
            ]),
            vue.createTextVNode(" " + vue.toDisplayString(_ctx.suffix), 1)
          ])
        ], 2),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_7$2, [
          vue.createElementVNode("view", null, vue.toDisplayString(_ctx.suffix) + vue.toDisplayString(_ctx.money), 1),
          vue.createTextVNode(),
          vue.createVNode(_component_nut_input_number, {
            modelValue: _ctx.stepValue,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.stepValue = $event),
            min: _ctx.cardBuyMin,
            max: _ctx.cardBuyMax,
            onChange: _ctx.changeStep
          }, null, 8, ["modelValue", "min", "max", "onChange"])
        ])
      ])
    ]);
  }
  const Ecard = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
  const { create: create$a } = createComponent("address-list-item");
  const cN$3 = "NutAddressList";
  const _sfc_main$a = create$a({
    components: { Del: iconsVueTaro.Del, Edit: iconsVueTaro.Edit },
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    emits: ["delIcon", "editIcon", "clickItem"],
    setup(props, { emit }) {
      const translate = useLocale(cN$3);
      const delClick = (event) => {
        emit("delIcon", event, props.item);
        event.stopPropagation();
      };
      const editClick = (event) => {
        emit("editIcon", event, props.item);
        event.stopPropagation();
      };
      const contentsClick = (event) => {
        emit("clickItem", event, props.item);
        event.stopPropagation();
      };
      return {
        delClick,
        editClick,
        contentsClick,
        translate
      };
    }
  });
  const _hoisted_1$a = { class: "nut-address-list-item__info" };
  const _hoisted_2$9 = { class: "nut-address-list-item__info-contact" };
  const _hoisted_3$7 = { class: "nut-address-list-item__info-contact-name" };
  const _hoisted_4$7 = { class: "nut-address-list-item__info-contact-tel" };
  const _hoisted_5$3 = {
    key: 0,
    class: "nut-address-list-item__info-contact-default"
  };
  const _hoisted_6$2 = { class: "nut-address-list-item__info-handle" };
  const _hoisted_7$1 = { class: "nut-address-list-item__addr" };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Del = vue.resolveComponent("Del");
    const _component_Edit = vue.resolveComponent("Edit");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: "nut-address-list-item",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.contentsClick && _ctx.contentsClick(...args))
    }, [
      vue.createElementVNode("div", _hoisted_1$a, [
        vue.createElementVNode("div", _hoisted_2$9, [
          vue.renderSlot(_ctx.$slots, "content-top", {}, () => [
            vue.createElementVNode("div", _hoisted_3$7, vue.toDisplayString(_ctx.item.addressName), 1),
            vue.createTextVNode(),
            vue.createElementVNode("div", _hoisted_4$7, vue.toDisplayString(_ctx.item.phone), 1),
            vue.createTextVNode(),
            _ctx.item.defaultAddress ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$3, vue.toDisplayString(_ctx.translate("default")), 1)) : vue.createCommentVNode("", true)
          ])
        ]),
        vue.createTextVNode(),
        vue.createElementVNode("div", _hoisted_6$2, [
          vue.renderSlot(_ctx.$slots, "content-icon", {}, () => [
            vue.createVNode(_component_Del, {
              name: "del",
              class: "nut-address-list-item__info-handle-del",
              onClick: _ctx.delClick
            }, null, 8, ["onClick"]),
            vue.createTextVNode(),
            vue.createVNode(_component_Edit, {
              name: "edit",
              class: "nut-address-list-item__info-handle-edit",
              onClick: _ctx.editClick
            }, null, 8, ["onClick"])
          ])
        ])
      ]),
      vue.createTextVNode(),
      vue.createElementVNode("div", _hoisted_7$1, [
        vue.renderSlot(_ctx.$slots, "content-addr", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.item.fullAddress), 1)
        ])
      ])
    ]);
  }
  const ItemContents = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
  const { create: create$9 } = createComponent("address-list-general");
  const _sfc_main$9 = create$9({
    props: {
      item: {
        type: Object,
        default: {}
      },
      longPress: {
        type: Boolean,
        default: false
      },
      swipeEdition: {
        type: Boolean,
        default: false
      }
    },
    emits: ["delIcon", "editIcon", "clickItem", "longDown", "longCopy", "longSet", "longDel", "swipeDel"],
    components: {
      ItemContents,
      NutButton: Button,
      NutSwipe: Swipe
    },
    setup(props, { emit }) {
      const renderCompontent = () => {
        return vue.h(ItemContents, {
          item: props.item,
          onDelIcon(event) {
            delClick(event);
          },
          onEditIcon(event) {
            editClick(event);
          },
          onClickItem(event) {
            clickItem(event);
          }
        });
      };
      let loop = null;
      const moveRef = vue.ref(false);
      const showMaskRef = vue.ref(false);
      const delClick = (event) => {
        emit("delIcon", event, props.item);
        event.stopPropagation();
      };
      const editClick = (event) => {
        emit("editIcon", event, props.item);
        event.stopPropagation();
      };
      const clickItem = (event) => {
        if (moveRef.value)
          return;
        emit("clickItem", event, props.item);
        event.stopPropagation();
      };
      const delLongClick = (event) => {
        emit("longDel", event, props.item);
        event.stopPropagation();
      };
      const holdingFunc = (event) => {
        loop = 0;
        showMaskRef.value = true;
        emit("longDown", event, props.item);
      };
      const holddownstart = (event) => {
        loop = setTimeout(() => {
          holdingFunc(event);
        }, 300);
      };
      const holddownmove = () => {
        clearTimeout(loop);
      };
      const holddownend = () => {
        clearTimeout(loop);
      };
      const hideMaskClick = () => {
        showMaskRef.value = false;
      };
      const copyCLick = (event) => {
        emit("longCopy", event, props.item);
        event.stopPropagation();
      };
      const setDefault = (event) => {
        emit("longSet", event, props.item);
        event.stopPropagation();
      };
      const maskClick = (event) => {
        if (loop != 0) {
          showMaskRef.value = false;
        }
        event.stopPropagation();
        event.preventDefault();
      };
      const swipeDelClick = (event) => {
        emit("swipeDel", event, props.item);
        event.stopPropagation();
      };
      const swipestart = () => {
        moveRef.value = false;
      };
      const swipemove = () => {
        moveRef.value = true;
      };
      return {
        renderCompontent,
        showMaskRef,
        clickItem,
        editClick,
        delClick,
        delLongClick,
        holddownstart,
        holddownmove,
        holddownend,
        copyCLick,
        hideMaskClick,
        setDefault,
        maskClick,
        swipeDelClick,
        swipestart,
        swipemove
      };
    }
  });
  const _hoisted_1$9 = {
    key: 0,
    class: "nut-address-list-general"
  };
  const _hoisted_2$8 = { class: "nut-address-list-swipe" };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_nut_swipe = vue.resolveComponent("nut-swipe");
    return !_ctx.swipeEdition ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderCompontent()), {
        onTouchstart: _ctx.holddownstart,
        onTouchend: _ctx.holddownend,
        onTouchmove: _ctx.holddownmove
      }, {
        "content-top": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content-info")
        ]),
        "content-icon": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content-icons")
        ]),
        "content-addr": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content-addrs")
        ]),
        _: 3
      }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
      vue.createTextVNode(),
      _ctx.longPress && _ctx.showMaskRef ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "nut-address-list-general__mask",
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.maskClick && _ctx.maskClick(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "longpress-all", {}, () => [
          vue.createElementVNode("div", {
            class: "nut-address-list-general__mask-copy",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.copyCLick && _ctx.copyCLick(...args))
          }, " 复制地址 "),
          vue.createTextVNode(),
          vue.createElementVNode("div", {
            class: "nut-address-list-general__mask-set",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.setDefault && _ctx.setDefault(...args))
          }, " 设置默认 "),
          vue.createTextVNode(),
          vue.createElementVNode("div", {
            class: "nut-address-list-general__mask-del",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.delLongClick && _ctx.delLongClick(...args))
          }, " 删除地址 ")
        ])
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.showMaskRef ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        class: "nut-address-list__mask-bottom",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.hideMaskClick && _ctx.hideMaskClick(...args))
      })) : vue.createCommentVNode("", true)
    ])) : (vue.openBlock(), vue.createBlock(_component_nut_swipe, { key: 1 }, {
      right: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "swipe-right-btn", {}, () => [
          vue.createVNode(_component_nut_button, {
            shape: "square",
            style: { "height": "100%" },
            type: "danger",
            onClick: _ctx.swipeDelClick
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("删除")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_2$8, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderCompontent()), {
            onTouchmove: _ctx.swipemove,
            onTouchstart: _ctx.swipestart
          }, {
            "content-top": vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content-info")
            ]),
            "content-icon": vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content-icons")
            ]),
            "content-addr": vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content-addrs")
            ]),
            _: 3
          }, 40, ["onTouchmove", "onTouchstart"]))
        ]),
        vue.createTextVNode()
      ]),
      _: 3
    }));
  }
  const GeneralShell = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
  const { create: create$8 } = createComponent("address-list");
  const cN$2 = "NutAddressList";
  const _sfc_main$8 = create$8({
    props: {
      data: {
        type: Array,
        default: []
      },
      longPress: {
        type: Boolean,
        default: false
      },
      swipeEdition: {
        type: Boolean,
        default: false
      },
      showBottomButton: {
        type: Boolean,
        default: true
      },
      dataOptions: {
        type: Object,
        default: {}
      }
    },
    components: {
      GeneralShell,
      NutButton: Button
    },
    emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
    setup(props, { emit }) {
      const translate = useLocale(cN$2);
      const dataArray = vue.ref([]);
      const dataInfo = vue.reactive({
        id: 2,
        addressName: "姓名",
        phone: "123****4567",
        defaultAddress: false,
        fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
      });
      const trowelData = () => {
        if (Object.keys(props.dataOptions).length > 0) {
          dataArray.value = props.data.map((item) => {
            return floatData(dataInfo, item, props.dataOptions);
          });
        }
      };
      vue.watch(
        () => props.data,
        () => trowelData(),
        { deep: true }
      );
      const clickDelIcon = (event, item) => {
        emit("delIcon", event, item);
        event.stopPropagation();
      };
      const clickEditIcon = (event, item) => {
        emit("editIcon", event, item);
        event.stopPropagation();
      };
      const clickContentItem = (event, item) => {
        emit("clickItem", event, item);
        event.stopPropagation();
      };
      const clickLongCopy = (event, item) => {
        emit("longCopy", event, item);
        event.stopPropagation();
      };
      const clickLongSet = (event, item) => {
        emit("longSet", event, item);
        event.stopPropagation();
      };
      const clickLongDel = (event, item) => {
        emit("longDel", event, item);
        event.stopPropagation();
      };
      const clickSwipeDel = (event, item) => {
        emit("swipeDel", event, item);
        event.stopPropagation();
      };
      const addAddress = (event) => {
        emit("add", event);
        event.stopPropagation();
      };
      vue.onMounted(() => {
        trowelData();
      });
      return {
        clickDelIcon,
        clickEditIcon,
        clickContentItem,
        clickLongCopy,
        clickLongSet,
        clickLongDel,
        clickSwipeDel,
        addAddress,
        dataArray,
        translate
      };
    }
  });
  const _hoisted_1$8 = { class: "nut-address-list" };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_general_shell = vue.resolveComponent("general-shell");
    const _component_nut_button = vue.resolveComponent("nut-button");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$8, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataArray, (item, index) => {
        return vue.openBlock(), vue.createBlock(_component_general_shell, {
          key: index,
          item,
          "long-press": _ctx.longPress,
          "swipe-edition": _ctx.swipeEdition,
          onDelIcon: _ctx.clickDelIcon,
          onEditIcon: _ctx.clickEditIcon,
          onClickItem: _ctx.clickContentItem,
          onSwipeDel: _ctx.clickSwipeDel,
          onLongCopy: _ctx.clickLongCopy,
          onLongSet: _ctx.clickLongSet,
          onLongDel: _ctx.clickLongDel
        }, vue.createSlots({
          "content-info": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "item-infos", { item })
          ]),
          "content-icons": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "item-icon", { item })
          ]),
          "content-addrs": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "item-addr", { item })
          ]),
          _: 2
        }, [
          _ctx.longPress ? {
            name: "longpress-all",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "longpress-btns", { item })
            ]),
            key: "0"
          } : void 0,
          _ctx.swipeEdition ? {
            name: "swipe-right-btn",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "swipe-right", { item })
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]);
      }), 128)),
      vue.createTextVNode(),
      _ctx.showBottomButton ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "nut-address-list__bottom",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.addAddress && _ctx.addAddress(...args))
      }, [
        vue.createVNode(_component_nut_button, {
          block: "",
          type: "danger"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(_ctx.translate("addAddress")), 1)
          ]),
          _: 1
        })
      ])) : vue.createCommentVNode("", true)
    ]);
  }
  const AddressList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
  const { create: create$7 } = createComponent("category");
  const _sfc_main$7 = create$7({
    props: {
      //分类模式
      type: {
        type: String,
        default: "classify"
      },
      //左侧导航栏
      category: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { emit }) {
      const checkIndex = vue.ref(0);
      const categoryLeft = vue.ref(false);
      const getChildList = (index) => {
        checkIndex.value = index;
        emit("change", index);
      };
      return {
        getChildList,
        checkIndex,
        categoryLeft
      };
    }
  });
  const _hoisted_1$7 = { class: "nut-category" };
  const _hoisted_2$7 = { class: "nut-category__cateList" };
  const _hoisted_3$6 = { key: 0 };
  const _hoisted_4$6 = ["onClick"];
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$7, [
      vue.createElementVNode("div", _hoisted_2$7, [
        _ctx.type == "classify" || _ctx.type == "text" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$6, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.category, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              class: "nut-category__cateListLeft"
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass([_ctx.checkIndex == index ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
                onClick: ($event) => _ctx.getChildList(index)
              }, vue.toDisplayString(item.catName), 11, _hoisted_4$6)
            ]);
          }), 128))
        ])) : vue.createCommentVNode("", true),
        vue.createTextVNode(),
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]);
  }
  const Category = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
  const { create: create$6 } = createComponent("category-pane");
  const _sfc_main$6 = create$6({
    props: {
      //分类模式
      type: {
        type: String,
        default: "classify"
      },
      //右侧导航数据
      categoryChild: {
        type: Array,
        default: () => []
      },
      //模式传入自定义数据
      customCategory: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { emit }) {
      const onChange = (sku) => {
        emit("onChange", sku);
      };
      return {
        onChange
      };
    }
  });
  const _hoisted_1$6 = { class: "nut-category-pane" };
  const _hoisted_2$6 = {
    key: 0,
    class: "nut-category-pane__cateListRight"
  };
  const _hoisted_3$5 = { class: "nut-category-pane__childTitle" };
  const _hoisted_4$5 = {
    key: 0,
    class: "nut-category-pane__childItemList"
  };
  const _hoisted_5$2 = ["onClick"];
  const _hoisted_6$1 = ["src"];
  const _hoisted_7 = { class: "nut-category-pane__skuImg" };
  const _hoisted_8 = {
    key: 1,
    class: "nut-category-pane__cateListRight"
  };
  const _hoisted_9 = { class: "nut-category-pane__childTitle" };
  const _hoisted_10 = {
    key: 0,
    class: "nut-category-pane__childItemList"
  };
  const _hoisted_11 = ["onClick"];
  const _hoisted_12 = { class: "nut-category-pane__skuName" };
  const _hoisted_13 = {
    key: 2,
    class: "nut-category-pane__selfItemList"
  };
  const _hoisted_14 = ["onClick"];
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$6, [
      _ctx.type == "classify" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$6, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.categoryChild, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("div", { key: index }, [
            vue.createElementVNode("div", _hoisted_3$5, vue.toDisplayString(item == null ? void 0 : item.catName), 1),
            vue.createTextVNode(),
            (item == null ? void 0 : item.catType) == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$5, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.childCateList, (sku, key) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key,
                  class: "nut-category-pane__childItem",
                  onClick: ($event) => _ctx.onChange(sku)
                }, [
                  vue.createElementVNode("img", {
                    class: "nut-category-pane__childImg",
                    src: sku.backImg
                  }, null, 8, _hoisted_6$1),
                  vue.createTextVNode(),
                  vue.createElementVNode("div", _hoisted_7, vue.toDisplayString(sku == null ? void 0 : sku.catName), 1)
                ], 8, _hoisted_5$2);
              }), 128))
            ])) : vue.createCommentVNode("", true)
          ]);
        }), 128))
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.type == "text" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.categoryChild, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("div", { key: index }, [
            vue.createElementVNode("div", _hoisted_9, vue.toDisplayString(item == null ? void 0 : item.catName), 1),
            vue.createTextVNode(),
            (item == null ? void 0 : item.catType) == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.childCateList, (sku, key) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key,
                  class: "nut-category-pane__childItem",
                  onClick: ($event) => _ctx.onChange(sku)
                }, [
                  vue.createElementVNode("div", _hoisted_12, vue.toDisplayString(sku == null ? void 0 : sku.catName), 1)
                ], 8, _hoisted_11);
              }), 128))
            ])) : vue.createCommentVNode("", true)
          ]);
        }), 128))
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.type == "custom" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_13, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.customCategory, (sku, key) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key,
            class: "nut-category-pane__skuName",
            onClick: ($event) => _ctx.onChange(sku)
          }, vue.toDisplayString(sku == null ? void 0 : sku.catName), 9, _hoisted_14);
        }), 128))
      ])) : vue.createCommentVNode("", true)
    ]);
  }
  const CategoryPane = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
  const { create: create$5 } = createComponent("comment-header");
  const _sfc_main$5 = create$5({
    components: {
      NutRate: Rate
    },
    props: {
      type: {
        type: String,
        default: "default"
        // default，complex
      },
      info: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["handleClick"],
    setup(props, { emit }) {
      const handleClick = () => {
        emit("handleClick");
      };
      return { handleClick };
    }
  });
  const _hoisted_1$5 = { class: "nut-comment-header__user" };
  const _hoisted_2$5 = { class: "nut-comment-header__user-avter" };
  const _hoisted_3$4 = ["src"];
  const _hoisted_4$4 = { class: "nut-comment-header__user-score" };
  const _hoisted_5$1 = {
    key: 0,
    class: "nut-comment-header__time"
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_rate = vue.resolveComponent("nut-rate");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      _ctx.info ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-comment-header",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.createElementVNode("view", _hoisted_1$5, [
          vue.createElementVNode("view", _hoisted_2$5, [
            _ctx.info.avatar ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              src: _ctx.info.avatar
            }, null, 8, _hoisted_3$4)) : vue.createCommentVNode("", true)
          ]),
          vue.createTextVNode(),
          _ctx.type == "default" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}`])
          }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}-name`])
            }, [
              vue.createElementVNode("span", null, vue.toDisplayString(_ctx.info.nickName), 1),
              vue.createTextVNode(),
              vue.renderSlot(_ctx.$slots, "labels")
            ], 2),
            vue.createTextVNode(),
            vue.createElementVNode("view", _hoisted_4$4, [
              vue.createVNode(_component_nut_rate, {
                modelValue: _ctx.info.score,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.info.score = $event),
                size: "12",
                spacing: "5",
                readonly: "",
                onChange: _ctx.handleClick
              }, null, 8, ["modelValue", "onChange"])
            ])
          ], 2)) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}`])
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}-name`])
            }, vue.toDisplayString(_ctx.info.nickName), 3),
            vue.createTextVNode(),
            vue.renderSlot(_ctx.$slots, "labels")
          ], 2))
        ]),
        vue.createTextVNode(),
        _ctx.info.time ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$1, vue.toDisplayString(_ctx.info.time), 1)) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      _ctx.type == "complex" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass([`nut-comment-header__${_ctx.type}-score`])
      }, [
        vue.createVNode(_component_nut_rate, {
          modelValue: _ctx.info.score,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.info.score = $event),
          size: "12",
          spacing: "3",
          readonly: ""
        }, null, 8, ["modelValue"]),
        vue.createTextVNode(),
        vue.createElementVNode("i", {
          class: vue.normalizeClass([`nut-comment-header__${_ctx.type}-score-i`])
        }, null, 2),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: vue.normalizeClass([`nut-comment-header__${_ctx.type}-score-size`])
        }, vue.toDisplayString(_ctx.info.size), 3)
      ], 2)) : vue.createCommentVNode("", true)
    ]);
  }
  const CommentHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
  const { create: create$4 } = createComponent("comment-images");
  const _sfc_main$4 = create$4({
    props: {
      type: {
        type: String,
        default: "one"
        // one multi
      },
      videos: {
        type: Array,
        default: () => []
      },
      images: {
        type: Array,
        default: () => []
      }
    },
    components: { Right: iconsVueTaro.Right },
    emits: ["click", "clickImages"],
    setup(props, { emit }) {
      const isShowImage = vue.ref(false);
      const initIndex2 = vue.ref(1);
      const totalImages = vue.ref([]);
      vue.watch(
        () => [props.videos, props.images],
        (value) => {
          if (value[0].length > 0) {
            value[0].forEach((el) => {
              el.type = "video";
            });
          }
          totalImages.value = value[0].concat(value[1]);
        },
        { deep: true }
      );
      vue.onMounted(() => {
        if (props.videos.length > 0) {
          props.videos.forEach((el) => {
            el.type = "video";
          });
        }
        totalImages.value = props.videos.concat(props.images);
      });
      const showImages = (type, index) => {
        const { videos, images } = props;
        const i = type == "img" ? index - videos.length : index;
        emit("clickImages", {
          type,
          index: i,
          value: type == "img" ? images[i] : videos[i]
        });
      };
      return { isShowImage, initIndex: initIndex2, showImages, totalImages };
    }
  });
  const _hoisted_1$4 = ["onClick"];
  const _hoisted_2$4 = ["src"];
  const _hoisted_3$3 = /* @__PURE__ */ vue.createElementVNode("view", { class: "nut-comment-images__play" }, null, -1);
  const _hoisted_4$3 = ["onClick"];
  const _hoisted_5 = ["src"];
  const _hoisted_6 = {
    key: 0,
    class: "nut-comment-images__mask"
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Right = vue.resolveComponent("Right");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(`nut-comment-images nut-comment-images--${_ctx.type}`)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.videos, (itV, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: itV.id,
          class: "nut-comment-images__item nut-comment-images__item--video",
          onClick: ($event) => _ctx.showImages("video", index)
        }, [
          vue.createElementVNode("img", {
            src: itV.mainUrl
          }, null, 8, _hoisted_2$4),
          vue.createTextVNode(),
          _hoisted_3$3
        ], 8, _hoisted_1$4);
      }), 128)),
      vue.createTextVNode(),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.images, (itI, index) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
          key: itI.id
        }, [
          _ctx.type == "multi" && _ctx.videos.length + index < 9 || _ctx.type != "multi" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-comment-images__item nut-comment-images__item--imgbox",
            onClick: ($event) => _ctx.showImages("img", index + _ctx.videos.length)
          }, [
            vue.createElementVNode("img", {
              src: itI.smallImgUrl ? itI.smallImgUrl : itI.imgUrl
            }, null, 8, _hoisted_5),
            vue.createTextVNode(),
            _ctx.type == "multi" && _ctx.totalImages.length > 9 && _ctx.videos.length + index > 7 ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_6, [
              vue.createElementVNode("span", null, "共 " + vue.toDisplayString(_ctx.totalImages.length) + " 张", 1),
              vue.createTextVNode(),
              vue.createVNode(_component_Right, { size: "12px" })
            ])) : vue.createCommentVNode("", true)
          ], 8, _hoisted_4$3)) : vue.createCommentVNode("", true)
        ], 64);
      }), 128))
    ], 2);
  }
  const CommentImages = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
  const { create: create$3 } = createComponent("comment-bottom");
  const cN$1 = "NutComment";
  const _sfc_main$3 = create$3({
    props: {
      type: {
        type: String,
        default: "base"
        // simple，base，complex
      },
      info: {
        type: Object,
        default: () => ({})
      },
      operation: {
        type: Array,
        default: ["replay", "like", "more"]
      }
    },
    components: { Fabulous: iconsVueTaro.Fabulous, Comment: iconsVueTaro.Comment, MoreX: iconsVueTaro.MoreX },
    emits: ["clickOperate", "handleClick"],
    setup(props, { emit }) {
      const translate = useLocale(cN$1);
      const showPopver = vue.ref(false);
      const mergeOp = vue.ref([]);
      vue.onMounted(() => {
        const deOp = ["replay", "like", "more"];
        if (props.operation) {
          props.operation.forEach((name) => {
            if (deOp.includes(name)) {
              mergeOp.value.push(name);
            }
          });
        }
      });
      const operate = (type) => {
        if (type == "more") {
          showPopver.value = !showPopver.value;
        }
        emit("clickOperate", type);
      };
      const handleClick = () => {
        emit("handleClick");
      };
      return { showPopver, operate, mergeOp, handleClick, translate };
    }
  });
  const _hoisted_1$3 = { class: "nut-comment-bottom" };
  const _hoisted_2$3 = {
    key: 0,
    style: { "display": "inline" }
  };
  const _hoisted_3$2 = { class: "nut-comment-bottom__cpx" };
  const _hoisted_4$2 = ["onClick"];
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Fabulous = vue.resolveComponent("Fabulous");
    const _component_Comment = vue.resolveComponent("Comment");
    const _component_MoreX = vue.resolveComponent("MoreX");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$3, [
      vue.createElementVNode("view", {
        class: "nut-comment-bottom__lable",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        _ctx.type != "complex" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$3, vue.toDisplayString(_ctx.info.size), 1)) : vue.createCommentVNode("", true)
      ]),
      vue.createTextVNode(),
      vue.createElementVNode("view", _hoisted_3$2, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.mergeOp, (name, i) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: i,
            class: vue.normalizeClass(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${name}`]),
            onClick: ($event) => _ctx.operate(name)
          }, [
            name != "more" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.createElementVNode("span", null, vue.toDisplayString(_ctx.info[name]), 1),
              vue.createTextVNode(),
              name == "like" ? (vue.openBlock(), vue.createBlock(_component_Fabulous, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_Comment, { key: 1 }))
            ], 64)) : vue.createCommentVNode("", true),
            vue.createTextVNode(),
            name == "more" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createVNode(_component_MoreX),
              vue.createTextVNode(),
              _ctx.showPopver ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "nut-comment-bottom__cpx-item-popover",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.operate("popover"))
              }, vue.toDisplayString(_ctx.translate("complaintsText")), 1)) : vue.createCommentVNode("", true)
            ], 64)) : vue.createCommentVNode("", true)
          ], 10, _hoisted_4$2);
        }), 128))
      ])
    ]);
  }
  const CommentBottom = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
  const { create: create$2 } = createComponent("comment");
  const cN = "NutComment";
  const _sfc_main$2 = create$2({
    props: {
      headerType: {
        type: String,
        default: "default"
        //头部展示风格 default，complex
      },
      imagesRows: {
        type: String,
        default: "one"
        // 'one'  'multi'
      },
      ellipsis: {
        type: [String, Number, Boolean],
        default: false
      },
      videos: {
        type: Array,
        default: () => []
      },
      images: {
        type: Array,
        default: () => []
      },
      info: {
        type: Object,
        default: () => ({})
      },
      follow: {
        type: Object,
        default: () => ({})
      },
      labels: {
        type: Function,
        default: () => ""
      },
      operation: {
        type: Array,
        default: ["replay", "like", "more"]
      }
    },
    components: {
      CommentHeader,
      CommentImages,
      CommentBottom,
      Right: iconsVueTaro.Right
    },
    emits: ["click", "clickImages", "clickOperate"],
    setup(props, { emit }) {
      const translate = useLocale(cN);
      const conEllipsis = vue.computed(() => {
        if (props.ellipsis)
          return props.ellipsis;
        return props.headerType == "complex" ? 6 : 2;
      });
      const clickOperate = (t) => {
        emit("clickOperate", t);
      };
      const handleClick = () => {
        emit("click", props.info);
      };
      const clickImages = (value) => {
        emit("clickImages", value);
      };
      return { conEllipsis, clickOperate, handleClick, clickImages, translate };
    }
  });
  const _hoisted_1$2 = {
    key: 0,
    class: "nut-comment"
  };
  const _hoisted_2$2 = ["innerHTML"];
  const _hoisted_3$1 = { class: "nut-comment__follow-title" };
  const _hoisted_4$1 = { class: "nut-comment__follow-com" };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_comment_header = vue.resolveComponent("comment-header");
    const _component_comment_images = vue.resolveComponent("comment-images");
    const _component_Right = vue.resolveComponent("Right");
    const _component_comment_bottom = vue.resolveComponent("comment-bottom");
    return _ctx.info && Object.keys(_ctx.info) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$2, [
      vue.createVNode(_component_comment_header, {
        type: _ctx.headerType,
        info: _ctx.info,
        labels: _ctx.labels,
        onHandleClick: _ctx.handleClick
      }, {
        labels: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "comment-labels")
        ]),
        _: 3
      }, 8, ["type", "info", "labels", "onHandleClick"]),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "feature"),
      vue.createTextVNode(),
      vue.createElementVNode("view", {
        class: "nut-comment__main",
        style: vue.normalizeStyle(`-webkit-line-clamp:${_ctx.conEllipsis}`),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
        innerHTML: _ctx.info.content
      }, null, 12, _hoisted_2$2),
      vue.createTextVNode(),
      vue.createVNode(_component_comment_images, {
        images: _ctx.images,
        videos: _ctx.videos,
        type: _ctx.imagesRows,
        onClickImages: _ctx.clickImages
      }, null, 8, ["images", "videos", "type", "onClickImages"]),
      vue.createTextVNode(),
      _ctx.follow && _ctx.follow.days > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-comment__follow",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.createElementVNode("view", _hoisted_3$1, vue.toDisplayString(_ctx.translate("additionalReview", _ctx.follow.days)), 1),
        vue.createTextVNode(),
        vue.createElementVNode("view", _hoisted_4$1, vue.toDisplayString(_ctx.follow.content), 1),
        vue.createTextVNode(),
        _ctx.follow.images && _ctx.follow.images.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-comment__follow-img",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.clickImages(_ctx.follow.images))
        }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.translate("additionalImages", _ctx.follow.images.length)) + " ", 1),
          vue.createVNode(_component_Right, { size: "12px" })
        ])) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true),
      vue.createTextVNode(),
      vue.createVNode(_component_comment_bottom, {
        type: _ctx.headerType,
        info: _ctx.info,
        operation: _ctx.operation,
        onClickOperate: _ctx.clickOperate,
        onHandleClick: _ctx.handleClick
      }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "comment-shop-reply")
    ])) : vue.createCommentVNode("", true);
  }
  const Comment = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
  const { componentName, create: create$1 } = createComponent("invoice");
  const _sfc_main$1 = create$1({
    components: {
      NutForm: Form,
      NutFormItem: FormItem,
      NutRadio: _sfc_main$13,
      NutRadioGroup: _sfc_main$12,
      NutButton: Button
    },
    props: {
      data: {
        type: Array,
        default: () => []
      },
      formValue: {
        type: Object,
        default: {}
      },
      submit: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "submit",
      "scrollBottom",
      // will be deprecated
      "onSubmit"
    ],
    setup(props, { emit }) {
      const formRef = vue.ref();
      const list = vue.ref([]);
      const state = vue.reactive({
        // list: []
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName;
        return {
          [prefixCls]: true
        };
      });
      vue.onMounted(() => {
        init();
      });
      const init = () => {
        list.value = props.data;
      };
      const submitFun = () => {
        formRef.value.validate().then(({ valid, errors }) => {
          emit("submit", valid, errors);
          emit("onSubmit", valid, errors);
        });
      };
      vue.watch(
        () => props.data,
        () => init(),
        { deep: true }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        classes,
        formRef,
        list,
        submitFun
      });
    }
  });
  const _hoisted_1$1 = ["onUpdate:modelValue", "placeholder"];
  const _hoisted_2$1 = {
    key: 0,
    class: "nut-invoice__submit"
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_radio = vue.resolveComponent("nut-radio");
    const _component_nut_radio_group = vue.resolveComponent("nut-radio-group");
    const _component_nut_form_item = vue.resolveComponent("nut-form-item");
    const _component_nut_form = vue.resolveComponent("nut-form");
    const _component_nut_button = vue.resolveComponent("nut-button");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createVNode(_component_nut_form, {
        ref: "formRef",
        "model-value": _ctx.formValue
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_nut_form_item, {
              key: index,
              label: item.label,
              required: item.required,
              rules: item.rules,
              prop: item.formItemProp
            }, {
              default: vue.withCtx(() => [
                item.type === "radio" ? (vue.openBlock(), vue.createBlock(_component_nut_radio_group, {
                  key: 0,
                  modelValue: _ctx.formValue[item.formItemProp],
                  "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.radioLabel, (radioItem, radioIndex) => {
                      return vue.openBlock(), vue.createBlock(_component_nut_radio, {
                        key: radioIndex,
                        shape: "button",
                        label: radioItem.label
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(radioItem.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"])) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                  key: 1,
                  "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event,
                  class: "nut-input-text",
                  placeholder: item.placeholder,
                  type: "text"
                }, null, 8, _hoisted_1$1)), [
                  [vue.vModelText, _ctx.formValue[item.formItemProp]]
                ])
              ]),
              _: 2
            }, 1032, ["label", "required", "rules", "prop"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["model-value"]),
      vue.createTextVNode(),
      _ctx.submit ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, [
        vue.createVNode(_component_nut_button, {
          type: "primary",
          block: "",
          onClick: _ctx.submitFun
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("提交审批")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])) : vue.createCommentVNode("", true)
    ], 2);
  }
  const Invoice = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
  const compareVersion = (v1Old, v2Old) => {
    let v1 = v1Old.split(".");
    let v2 = v2Old.split(".");
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
      v1.push("0");
    }
    while (v2.length < len) {
      v2.push("0");
    }
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i]);
      const num2 = parseInt(v2[i]);
      if (num1 > num2) {
        return 1;
      } else if (num1 < num2) {
        return -1;
      }
    }
    return 0;
  };
  const isWeapp = () => {
    return process.env.TARO_ENV === "weapp";
  };
  function _easyCanvasContextBase(systemInfo, lowCallback, highCallback, targetVersion = "1.9.90") {
    if (isWeapp() && compareVersion(systemInfo.SDKVersion, targetVersion) >= 0) {
      highCallback();
    } else {
      lowCallback();
    }
  }
  function easySetFillStyle(systemInfo, canvasContext, color) {
    _easyCanvasContextBase(
      systemInfo,
      () => {
        canvasContext.setFillStyle(color);
      },
      () => {
        if (typeof color === "string") {
          canvasContext.fillStyle = color;
        }
      }
    );
  }
  const { create } = createComponent("avatar-cropper");
  const _sfc_main = create({
    components: {
      NutButton: Button,
      IconFont: iconsVueTaro.IconFont
    },
    props: {
      maxZoom: {
        type: Number,
        default: 3
      },
      space: {
        type: Number,
        default: 10
      },
      toolbarPosition: {
        type: String,
        default: "bottom"
      },
      editText: {
        type: String,
        default: "编辑"
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      confirmText: {
        type: String,
        default: "确定"
      },
      sizeType: {
        type: Array,
        default: () => ["original", "compressed"]
      },
      sourceType: {
        type: Array,
        default: () => ["album", "camera"]
      }
    },
    emits: ["confirm", "cancel"],
    setup(props, { emit, expose }) {
      const state = vue.reactive({
        visible: false,
        defScale: 1,
        scale: 1,
        angle: 0,
        moveX: 0,
        moveY: 0,
        moving: false,
        zooming: false,
        displayWidth: 0,
        displayHeight: 0,
        cropperWidth: 0,
        cropperHeight: 0
      });
      const canvasAll = vue.reactive({
        canvasId: `canvas-${Date.now()}`,
        cropperCanvas: null,
        cropperCanvasContext: null
      });
      const drawImage = vue.ref({
        src: "",
        // 规定要使用的图像
        x: 0,
        // 在画布上x的坐标位置
        y: 0,
        // 在画布上y的坐标位置
        width: 0,
        // 要使用的图像的宽度
        height: 0
        // 要使用的图像的高度
      });
      const touch = useTouch();
      const systemInfo = Taro.getSystemInfoSync();
      const showAlipayCanvas2D = vue.computed(() => {
        return Taro.getEnv() === "ALIPAY" && parseInt(Taro.SDKVersion.replace(/\./g, "")) >= 270;
      });
      const showPixelRatio = Taro.getEnv() === "WEB" || showAlipayCanvas2D.value;
      const pixelRatio = showPixelRatio ? systemInfo.pixelRatio : 1;
      state.displayWidth = systemInfo.windowWidth * pixelRatio;
      state.displayHeight = systemInfo.windowHeight * pixelRatio;
      state.cropperWidth = state.cropperHeight = state.displayWidth - props.space * pixelRatio * 2;
      Taro.useReady(() => {
        if (showAlipayCanvas2D.value) {
          const { canvasId } = canvasAll;
          Taro.createSelectorQuery().select(`#${canvasId}`).node(({ node: canvas }) => {
            canvas.width = state.displayWidth;
            canvas.height = state.displayHeight;
            canvasAll.cropperCanvas = canvas;
          }).exec();
        }
      });
      vue.onMounted(() => {
        const { canvasId } = canvasAll;
        canvasAll.cropperCanvasContext = Taro.createCanvasContext(canvasId);
      });
      const isAngle = vue.computed(() => {
        return state.angle === 90 || state.angle === 270;
      });
      const highlightStyle = vue.computed(() => {
        const { cropperWidth } = state;
        const width = cropperWidth / pixelRatio + "px";
        const height = width;
        return {
          width,
          height
        };
      });
      const canvasStyle = vue.computed(() => {
        const { displayWidth, displayHeight } = state;
        return {
          width: `${displayWidth / pixelRatio}px`,
          height: `${displayHeight / pixelRatio}px`
        };
      });
      const cutCanvasStyle = vue.computed(() => {
        const { displayWidth, displayHeight, cropperWidth } = state;
        return {
          top: `${(displayHeight / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
          left: `${(displayWidth / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
          width: `${cropperWidth / pixelRatio}px`,
          height: `${cropperWidth / pixelRatio}px`
        };
      });
      const maxMoveX = vue.computed(() => {
        const { displayWidth, scale, cropperWidth } = state;
        const { height } = drawImage.value;
        if (isAngle.value) {
          return Math.max(0, (height * scale - cropperWidth) / 2);
        }
        return Math.max(0, (displayWidth * scale - cropperWidth) / 2);
      });
      const maxMoveY = vue.computed(() => {
        const { displayWidth, scale, cropperWidth } = state;
        const { height } = drawImage.value;
        if (isAngle.value) {
          return Math.max(0, (displayWidth * scale - cropperWidth) / 2);
        }
        return Math.max(0, (height * scale - cropperWidth) / 2);
      });
      const dataURLToImage = (dataURL) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.src = dataURL;
        });
      };
      const dataURLToCanvasImage = (canvas, dataURL) => {
        return new Promise((resolve) => {
          const img = new canvas.createImage();
          img.onload = () => resolve(img);
          img.src = dataURL;
        });
      };
      const canvas2dDraw = (ctx) => {
        if (!ctx)
          return;
        const { src, width, height, x, y } = drawImage.value;
        const { moveX, moveY, scale, angle, displayWidth, displayHeight, cropperWidth } = state;
        ctx.clearRect(0, 0, displayWidth, displayHeight);
        ctx.fillStyle = "#666";
        ctx.fillRect(0, 0, displayWidth, displayHeight);
        ctx.fillStyle = "#000";
        ctx.fillRect(props.space * pixelRatio, (displayHeight - cropperWidth) / 2, cropperWidth, cropperWidth);
        ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY);
        ctx.rotate(Math.PI / 180 * angle);
        ctx.scale(scale, scale);
        ctx.drawImage(src, x, y, width, height);
      };
      const webDraw = () => {
        const { displayWidth, displayHeight } = state;
        const canvasDom = document.getElementById(canvasAll.canvasId);
        let canvas = canvasDom;
        if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
          canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
          canvas.width = displayWidth;
          canvas.height = displayHeight;
        }
        const ctx = canvas.getContext("2d");
        canvas2dDraw(ctx);
      };
      const alipayDraw = () => {
        const { cropperCanvas } = canvasAll;
        let ctx = cropperCanvas.getContext("2d");
        ctx && ctx.resetTransform();
        canvas2dDraw(ctx);
      };
      const draw = () => {
        if (Taro.getEnv() === "WEB") {
          webDraw();
          return;
        }
        if (showAlipayCanvas2D.value) {
          alipayDraw();
          return;
        }
        const { src, width, height, x, y } = drawImage.value;
        const { moveX, moveY, scale, angle, displayWidth, displayHeight, cropperWidth } = state;
        const { cropperCanvasContext } = canvasAll;
        let ctx = cropperCanvasContext;
        if (!ctx)
          return;
        ctx.clearRect(0, 0, displayWidth, displayHeight);
        easySetFillStyle(systemInfo, ctx, "#666");
        ctx.fillRect(0, 0, displayWidth, displayHeight);
        ctx.stroke();
        ctx.fill();
        easySetFillStyle(systemInfo, ctx, "#000");
        ctx.fillRect(props.space, (displayHeight - cropperWidth) / 2, cropperWidth, cropperWidth);
        ctx.stroke();
        ctx.fill();
        ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY);
        ctx.rotate(Math.PI / 180 * angle);
        ctx.scale(scale, scale);
        ctx.drawImage(src, x, y, width, height);
        ctx.draw();
      };
      const setDrawImg = (image) => __async(this, null, function* () {
        const { displayWidth, cropperWidth } = state;
        let drawImg = __spreadValues({}, drawImage.value);
        const { width: imgWidth, height: imgHeight } = image;
        drawImg.src = image.path;
        if (Taro.getEnv() === "WEB") {
          drawImg.src = yield dataURLToImage(image.path);
        }
        if (showAlipayCanvas2D.value) {
          drawImg.src = yield dataURLToCanvasImage(canvasAll.cropperCanvas, image.path);
        }
        const isPortrait = imgHeight > imgWidth;
        const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth;
        drawImg.width = displayWidth;
        drawImg.height = isPortrait ? displayWidth / rate : displayWidth * rate;
        drawImg.x = -drawImg.width / 2;
        drawImg.y = -drawImg.height / 2;
        drawImage.value = drawImg;
        state.defScale = cropperWidth / (isPortrait ? drawImg.width : drawImg.height);
        resetScale();
        draw();
      });
      const chooseImage = () => {
        Taro.chooseImage({
          count: 1,
          // 可以指定是原图还是压缩图，默认二者都有
          sizeType: props.sizeType,
          sourceType: props.sourceType,
          success: (res) => {
            const { tempFiles } = res;
            !!tempFiles.length && imageChange(tempFiles[0]);
          }
        });
      };
      const imageChange = (file) => __async(this, null, function* () {
        Taro.getImageInfo({
          src: file.path
        }).then((res) => {
          state.visible = true;
          setDrawImg(res);
        });
      });
      const resetScale = () => {
        setScale(state.defScale);
        state.moveX = 0;
        state.moveY = 0;
        state.angle = 0;
      };
      const setScale = (scale) => {
        scale = clamp(scale, 0.3, +props.maxZoom + 1);
        if (scale !== state.scale) {
          state.scale = scale;
        }
      };
      const getDistance = (touches) => Math.sqrt(__pow(touches[0].clientX - touches[1].clientX, 2) + __pow(touches[0].clientY - touches[1].clientY, 2));
      let startMoveX;
      let startMoveY;
      let startScale;
      let startDistance;
      let fingerNum;
      const onTouchStart = (event) => {
        const { touches } = event;
        const { offsetX } = touch;
        touch.start(event);
        fingerNum = touches.length;
        startMoveX = state.moveX;
        startMoveY = state.moveY;
        state.moving = fingerNum === 1;
        state.zooming = fingerNum === 2 && !offsetX.value;
        if (state.zooming) {
          startScale = state.scale;
          startDistance = getDistance(event.touches);
        }
      };
      const onTouchMove = (event) => {
        const { touches } = event;
        touch.move(event);
        if (state.moving || state.zooming) {
          preventDefault(event, true);
        }
        if (state.moving) {
          const { deltaX, deltaY } = touch;
          const moveX = deltaX.value * state.scale + startMoveX;
          const moveY = deltaY.value * state.scale + startMoveY;
          state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
          state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
        }
        if (state.zooming && touches.length === 2) {
          const distance = getDistance(touches);
          const scale = startScale * distance / startDistance;
          setScale(scale);
        }
      };
      const onTouchEnd = (event) => {
        let stopPropagation = false;
        if (state.moving || state.zooming) {
          stopPropagation = !(state.moving && startMoveX === state.moveX && startMoveY === state.moveY);
          if (!event.touches.length) {
            if (state.zooming) {
              state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
              state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
              state.zooming = false;
            }
            state.moving = false;
            startMoveX = 0;
            startMoveY = 0;
            startScale = state.defScale;
            if (state.scale < state.defScale) {
              resetScale();
            }
            if (state.scale > props.maxZoom) {
              state.scale = +props.maxZoom;
            }
          }
        }
        preventDefault(event, stopPropagation);
        touch.reset();
      };
      const reset = () => {
        state.angle = 0;
      };
      const rotate = () => {
        if (state.angle === 270) {
          state.angle = 0;
          return;
        }
        state.angle += 90;
      };
      const cancel = (isEmit = true) => {
        state.visible = false;
        resetScale();
        isEmit && emit("cancel");
      };
      const confirmWEB = () => {
        const { cropperWidth, displayHeight } = state;
        const canvasDom = document.getElementById(canvasAll.canvasId);
        let canvas = canvasDom;
        if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
          canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
        }
        const width = cropperWidth;
        const height = cropperWidth;
        const croppedCanvas = document.createElement("canvas");
        const croppedCtx = croppedCanvas.getContext("2d");
        croppedCanvas.width = width;
        croppedCanvas.height = height;
        canvas && croppedCtx.drawImage(
          canvas,
          props.space * pixelRatio,
          (displayHeight - cropperWidth) / 2,
          width,
          height,
          0,
          0,
          width,
          height
        );
        const imageDataURL = croppedCanvas.toDataURL("image/png");
        emit("confirm", imageDataURL);
        cancel(false);
      };
      const confirmALIPAY = () => {
        const { cropperWidth, displayHeight } = state;
        const { cropperCanvas } = canvasAll;
        Taro.canvasToTempFilePath({
          canvas: cropperCanvas,
          x: props.space,
          y: (displayHeight - cropperWidth) / 2,
          width: cropperWidth,
          height: cropperWidth,
          destWidth: cropperWidth,
          destHeight: cropperWidth,
          success: (res) => __async(this, null, function* () {
            let filePath = res.tempFilePath;
            emit("confirm", filePath);
            cancel(false);
            return;
          })
        });
      };
      const confirm = () => {
        if (Taro.getEnv() === "WEB") {
          confirmWEB();
          return;
        }
        if (showAlipayCanvas2D.value) {
          confirmALIPAY();
          return;
        }
        const { cropperWidth, displayHeight } = state;
        const { canvasId } = canvasAll;
        Taro.canvasToTempFilePath({
          canvasId,
          x: props.space,
          y: (displayHeight - cropperWidth) / 2,
          width: cropperWidth,
          height: cropperWidth,
          destWidth: cropperWidth * systemInfo.pixelRatio,
          destHeight: cropperWidth * systemInfo.pixelRatio,
          success: (res) => __async(this, null, function* () {
            let filePath = res.tempFilePath;
            emit("confirm", filePath);
            cancel(false);
            return;
          })
        });
      };
      vue.watch(
        () => state.scale,
        () => {
          draw();
        }
      );
      vue.watch(
        () => state.angle,
        () => {
          if (Math.abs(state.moveX) > maxMoveX.value) {
            state.moveX = maxMoveX.value;
          }
          if (Math.abs(state.moveY) > maxMoveY.value) {
            state.moveY = maxMoveY.value;
          }
          draw();
        }
      );
      vue.watch(
        () => state.moveX,
        () => {
          draw();
        }
      );
      vue.watch(
        () => state.moveY,
        () => {
          draw();
        }
      );
      expose({
        cancel,
        reset,
        rotate,
        confirm
      });
      return __spreadProps(__spreadValues(__spreadValues({}, vue.toRefs(state)), vue.toRefs(canvasAll)), {
        showAlipayCanvas2D,
        highlightStyle,
        canvasStyle,
        cutCanvasStyle,
        chooseImage,
        reset,
        rotate,
        cancel,
        confirm,
        onTouchStart,
        onTouchMove,
        onTouchEnd
      });
    }
  });
  const _hoisted_1 = { class: "nut-avatar-cropper taro" };
  const _hoisted_2 = { class: "nut-cropper-popup" };
  const _hoisted_3 = ["id", "canvas-id", "type"];
  const _hoisted_4 = {
    key: 1,
    class: "flex-sb"
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_IconFont = vue.resolveComponent("IconFont");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: "nut-avatar-cropper__edit-text",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.chooseImage && _ctx.chooseImage(...args), ["stop"]))
        }, vue.toDisplayString(_ctx.editText), 1)
      ]),
      vue.createTextVNode(),
      vue.withDirectives(vue.createElementVNode("view", _hoisted_2, [
        vue.createElementVNode("canvas", {
          id: _ctx.canvasId,
          "canvas-id": _ctx.canvasId,
          type: _ctx.showAlipayCanvas2D ? "2d" : void 0,
          style: vue.normalizeStyle(_ctx.canvasStyle),
          class: "nut-cropper-popup__canvas"
        }, null, 12, _hoisted_3),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: "nut-cropper-popup__highlight",
          onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
          onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
          onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
          onTouchcancel: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
        }, [
          vue.createElementVNode("view", {
            class: "highlight",
            style: vue.normalizeStyle(_ctx.highlightStyle)
          }, null, 4)
        ], 32),
        vue.createTextVNode(),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-cropper-popup__toolbar", [_ctx.toolbarPosition]])
        }, [
          _ctx.$slots.toolbar ? vue.renderSlot(_ctx.$slots, "toolbar", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_4, [
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.cancel())
            }, [
              vue.createVNode(_component_nut_button, { type: "danger" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.cancelText), 1)
                ]),
                _: 1
              })
            ]),
            vue.createTextVNode(),
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[6] || (_cache[6] = (...args) => _ctx.reset && _ctx.reset(...args))
            }, [
              vue.createVNode(_component_IconFont, {
                name: "refresh2",
                color: "#fff"
              })
            ]),
            vue.createTextVNode(),
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[7] || (_cache[7] = (...args) => _ctx.rotate && _ctx.rotate(...args))
            }, [
              vue.createVNode(_component_IconFont, {
                name: "retweet",
                color: "#fff"
              })
            ]),
            vue.createTextVNode(),
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[8] || (_cache[8] = (...args) => _ctx.confirm && _ctx.confirm(...args))
            }, [
              vue.createVNode(_component_nut_button, { type: "success" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.confirmText), 1)
                ]),
                _: 1
              })
            ])
          ]))
        ], 2)
      ], 512), [
        [vue.vShow, _ctx.visible]
      ])
    ], 64);
  }
  const AvatarCropper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  function install(app) {
    const packages = [Button, Cell, CellGroup, Overlay, Popup, _sfc_main$1F, _sfc_main$1E, Col, Row, Sticky, Divider, _sfc_main$1z, GridItem, _sfc_main$1x, Navbar, FixedNav, Menu, MenuItem, Tabbar, TabbarItem, Elevator, Pagination, Tabs, TabPane, Indicator, SideNavbar, SideNavbarItem, SubSideNavbar, Range, Searchbar, Cascader, Calendar, _sfc_main$1a, _sfc_main$19, DatePicker, InputNumber, Input, _sfc_main$13, _sfc_main$12, Rate, Picker, ShortPassword, Textarea, Uploader, NumberKeyboard, Form, FormItem, Swipe, SwipeGroup, ActionSheet, Backtop, Drag, Dialog, Notify, Switch, Toast, Avatar, AvatarGroup, List, Progress, CircleProgress, Noticebar, Empty, _sfc_main$G, Step, Swiper, SwiperItem, Price, ImagePreview, Countup, Countdown, Badge, Tag, Popover, Skeleton, Collapse, CollapseItem, Table, Animate, Ellipsis, Watermark, TrendArrow, Tour, Address, Barrage, Signature, TimeSelect, TimePannel, TimeDetail, Sku, Card, Ecard, AddressList, Category, CategoryPane, Comment, Invoice, AvatarCropper];
    packages.forEach((item) => {
      if (item.install) {
        app.use(item);
      } else if (item.name) {
        app.component(item.name, item);
      }
    });
  }
  const version = "4.2.6";
  const nutui_taro_vue_build = { install, version, Locale };
  exports2.ActionSheet = ActionSheet;
  exports2.Address = Address;
  exports2.AddressList = AddressList;
  exports2.Animate = Animate;
  exports2.Avatar = Avatar;
  exports2.AvatarCropper = AvatarCropper;
  exports2.AvatarGroup = AvatarGroup;
  exports2.Backtop = Backtop;
  exports2.Badge = Badge;
  exports2.Barrage = Barrage;
  exports2.Button = Button;
  exports2.Calendar = Calendar;
  exports2.Card = Card;
  exports2.Cascader = Cascader;
  exports2.Category = Category;
  exports2.CategoryPane = CategoryPane;
  exports2.Cell = Cell;
  exports2.CellGroup = CellGroup;
  exports2.Checkbox = _sfc_main$1a;
  exports2.CheckboxGroup = _sfc_main$19;
  exports2.CircleProgress = CircleProgress;
  exports2.Col = Col;
  exports2.Collapse = Collapse;
  exports2.CollapseItem = CollapseItem;
  exports2.Comment = Comment;
  exports2.ConfigProvider = _sfc_main$1F;
  exports2.Countdown = Countdown;
  exports2.Countup = Countup;
  exports2.DatePicker = DatePicker;
  exports2.Dialog = Dialog;
  exports2.Divider = Divider;
  exports2.Drag = Drag;
  exports2.Ecard = Ecard;
  exports2.Elevator = Elevator;
  exports2.Ellipsis = Ellipsis;
  exports2.Empty = Empty;
  exports2.FixedNav = FixedNav;
  exports2.Form = Form;
  exports2.FormItem = FormItem;
  exports2.Grid = _sfc_main$1z;
  exports2.GridItem = GridItem;
  exports2.ImagePreview = ImagePreview;
  exports2.Indicator = Indicator;
  exports2.Input = Input;
  exports2.InputNumber = InputNumber;
  exports2.Invoice = Invoice;
  exports2.Layout = _sfc_main$1E;
  exports2.List = List;
  exports2.Locale = Locale;
  exports2.Menu = Menu;
  exports2.MenuItem = MenuItem;
  exports2.Navbar = Navbar;
  exports2.Noticebar = Noticebar;
  exports2.Notify = Notify;
  exports2.NumberKeyboard = NumberKeyboard;
  exports2.Overlay = Overlay;
  exports2.Pagination = Pagination;
  exports2.Picker = Picker;
  exports2.Popover = Popover;
  exports2.Popup = Popup;
  exports2.Price = Price;
  exports2.Progress = Progress;
  exports2.Radio = _sfc_main$13;
  exports2.RadioGroup = _sfc_main$12;
  exports2.Range = Range;
  exports2.Rate = Rate;
  exports2.Row = Row;
  exports2.Searchbar = Searchbar;
  exports2.ShortPassword = ShortPassword;
  exports2.SideNavbar = SideNavbar;
  exports2.SideNavbarItem = SideNavbarItem;
  exports2.Signature = Signature;
  exports2.Skeleton = Skeleton;
  exports2.Sku = Sku;
  exports2.Space = _sfc_main$1x;
  exports2.Step = Step;
  exports2.Steps = _sfc_main$G;
  exports2.Sticky = Sticky;
  exports2.SubSideNavbar = SubSideNavbar;
  exports2.Swipe = Swipe;
  exports2.SwipeGroup = SwipeGroup;
  exports2.Swiper = Swiper;
  exports2.SwiperItem = SwiperItem;
  exports2.Switch = Switch;
  exports2.TabPane = TabPane;
  exports2.Tabbar = Tabbar;
  exports2.TabbarItem = TabbarItem;
  exports2.Table = Table;
  exports2.Tabs = Tabs;
  exports2.Tag = Tag;
  exports2.Textarea = Textarea;
  exports2.TimeDetail = TimeDetail;
  exports2.TimePannel = TimePannel;
  exports2.TimeSelect = TimeSelect;
  exports2.Toast = Toast;
  exports2.Tour = Tour;
  exports2.TrendArrow = TrendArrow;
  exports2.Uploader = Uploader;
  exports2.Watermark = Watermark;
  exports2.default = nutui_taro_vue_build;
  exports2.install = install;
  exports2.version = version;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
