var FwBootstrap = function(e) {
  var t = {};
  function s(n) {
    if (t[n])
      return t[n].exports;
    var i = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(i.exports, i, i.exports, s),
      i.l = !0,
      i.exports
  }
  return s.m = e,
    s.c = t,
    s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }
    ,
    s.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    }
    ,
    s.t = function(e, t) {
      if (1 & t && (e = s(e)),
      8 & t)
        return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (s.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }),
      2 & t && "string" != typeof e)
        for (var i in e)
          s.d(n, i, function(t) {
            return e[t]
          }
            .bind(null, i));
      return n
    }
    ,
    s.n = function(e) {
      var t = e && e.__esModule ? function() {
            return e.default
          }
          : function() {
            return e
          }
      ;
      return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "https://euc-widget.freshworks.com/widgetBase/",
    s(s.s = 0)
}([function(e, t, s) {
  e.exports = s(2)
}
  , function(e, t) {
    e.exports = "https://euc-widget.freshworks.com/widgetBase/static/media/frame.d7ae132c.css"
  }
  , function(e, t, s) {
    "use strict";
    s.r(t);
    var n = ["FrustrationTracking", "Predictive"]
      , i = {
      boot: "queueComplete",
      open: "openWidget",
      close: "closeWidget",
      destroy: "destroyWidget",
      identify: "identifyFormFields",
      prefill: "prefillFormFields",
      clear: "clearFormFields",
      hide: "hideWidget",
      hideLauncher: "hideLauncher",
      showLauncher: "showLauncher",
      show: "showWidget",
      setLabels: "setLabels",
      updateSettings: "updateSettings",
      updatePreviewSettings: "updatePreviewSettings",
      updateTicketForms: "updateTicketForms",
      reloadComponents: "reloadComponents",
      authenticate: "authenticate",
      authenticateCallback: "authenticateCallback",
      logout: "logout",
      hideFormFields: "hideFormFields",
      disable: null,
      disableFormFields: "disableFormFields",
      hideChoices: "hideChoices"
    }
      , o = {
      id: 1,
      product_id: 1,
      account_id: 1,
      name: "Help widget",
      settings: {
        message: "",
        button_text: "Help",
        contact_form: {
          form_type: 2,
          form_title: "",
          form_button_text: "Send",
          form_submit_message: "Thank you for your feedback.",
          attach_file: !0,
          screenshot: !0,
          captcha: !1
        },
        appearance: {
          position: 1,
          offset_from_right: 30,
          offset_from_left: 30,
          offset_from_bottom: 30,
          theme_color: "#2392ec",
          button_color: "#16193e"
        },
        components: {
          contact_form: !0,
          solution_articles: !0
        },
        predictive_support: {
          welcome_message: "",
          message: "We noticed you’re stuck. Tell us what you were trying to accomplish, and our support team will reach out to you as soon as possible.",
          success_message: "Thanks. We'll be in touch!",
          domain_list: ["freshpo.com"]
        },
        hide_launcher_bydefault: !0
      },
      active: !0,
      updated_at: "2018-10-01T14:16:05+05:30",
      account_url: "https://localhost.freshdesk-dev.com",
      recaptcha_enterprise: !1,
      languages: {
        primary: "en",
        supported: ["ca", "cs", "da", "de", "es-LA", "es", "et", "fi", "fr", "hu", "id", "it", "ja-JP", "ko", "nb-NO", "nl", "pl", "pt-BR", "pt-PT", "ru-RU", "sv-SE", "sk", "sl", "tr", "vi", "zh-CN", "uk", "th", "ro", "zh-TW", "lv-LV", "bs", "bg", "hr", "el", "ms", "lt", "sr"]
      }
    };
    function r() {
      return window.fwSettings && window.fwSettings.preview
    }
    function a(e, t) {
      return e.indexOf(t) >= 0
    }
    var d = {
      init: function() {
        var e = window.fwSettings.widget_id;
        if (e)
          if (this.origin = window.location.origin,
            r()) {
            var t = o;
            t.id = e,
              this.initWidget(t, !0)
          } else {
            var s = "".concat("https://euc-widget.freshworks.com", "/widgets/").concat(e, ".json?randomId=").concat(Math.random());
            this.fetchSettings(s, this.initWidget.bind(this))
          }
      },
      fetchSettings: function(e, t) {
        var s = new XMLHttpRequest;
        s.onreadystatechange = function() {
          4 === s.readyState && 200 === s.status && t(function(e) {
            try {
              return JSON.parse(e)
            } catch (t) {
              return e
            }
          }(s.response))
        }
          ,
          s.open("get", e),
          s.responseType = "json",
          s.send()
      },
      showWidget: function(e) {
        var t = !1
          , s = e.meta
          , n = e.settings
          , i = e.components;
        return (i || n.components) && ["contact_form", "solution_articles", "frustration_tracking", "predictive_support"].forEach(function(e) {
          var o = s && s.data_version && i ? i[e] && i[e].enabled : n.components[e];
          t = t || Boolean(o)
        }),
          t
      },
      initWidget: function(e) {
        var t, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null != (t = e) && 0 !== Object.keys(t).length && e && this.showWidget(e)) {
          if (this.options = e,
            window.fwSettings.originUrl = this.origin,
          !s && !/.*(freshdesk.com|freshpo.com)$/.test(e.account_url))
            return;
          window.fwSettings.options = e,
            this.messageHandler = this.handleMessage.bind(this),
            this.createMountPoint(),
            this.loadIFrame(),
            this.loadJS()
        }
      },
      createMountPoint: function() {
        var e = document.createElement("div");
        e.id = "freshworks-container",
          e.style.width = "0px",
          e.style.height = "0px",
          e.style.bottom = "0px",
          e.style.right = "0px",
          e.style.zIndex = Number.MAX_SAFE_INTEGER,
          e.setAttribute("data-html2canvas-ignore", !0),
          document.body.appendChild(e);
        var t = s(1)
          , n = document.createElement("link");
        n.id = "freshworks-frame",
          n.rel = "stylesheet",
          n.href = t,
          document.head.appendChild(n)
      },
      loadIFrame: function() {
        var e = document.createElement("iframe");
        e.setAttribute("title", "FreshworksWidget"),
          e.setAttribute("id", "freshworks-frame"),
          e.setAttribute("data-html2canvas-ignore", !0),
          e.style.display = "none",
          e.onload = function() {
            var t = document.createElement("link");
            t.setAttribute("rel", "preconnect"),
              t.setAttribute("href", "https://euc-widget.freshworks.com/widgetBase"),
              e.contentDocument.head.appendChild(t)
          }
          ,
          document.body.appendChild(e),
          this._frame = e;
        var t = e.contentDocument || e.document;
        t.open();
        var s = '<script src="'.concat("https://euc-widget.freshworks.com/widgetBase", '/widget.js" async defer><\/script>');
        t.write(s),
          t.close(),
          this.bindMessageHandler()
      },
      loadJS: function() {
        if (this.isFrustrationTrackingEnabled()) {
          var e = this.frustrationTrackingData();
          if (e && !window.FM && !r()) {
            var t = document.createElement("script");
            t.src = "".concat("https://cdn.freshmarketer.com", "/").concat(e.org_id, "/").concat(e.project_id, ".js"),
              t.async = !0,
              document.body.appendChild(t)
          }
        }
      },
      helpWidgetMethods: function(e, t, s) {
        if (e && d[e] && a(Object.keys(i), e))
          return d[e](t, s)
      },
      widgetRenderComplete: function() {
        if (document.body.contains(this._frame)) {
          var e = window.FreshworksWidget && window.FreshworksWidget.q || [];
          window.FreshworksWidget = this.helpWidgetMethods,
            e.forEach(function(e) {
              window.FreshworksWidget.apply(null, e)
            }),
            this.postMessage(i.boot)
        }
      },
      bindMessageHandler: function() {
        this.postMessageHandlerBound || (this.postMessageHandlerBound = !0,
          window.addEventListener ? window.addEventListener("message", this.messageHandler, !0) : window.attachEvent("message", this.messageHandler, !0))
      },
      unbindMessageHandler: function() {
        this.postMessageHandlerBound && (this.postMessageHandlerBound = !1,
          window.removeEventListener ? window.removeEventListener("message", this.messageHandler, !0) : window.detachEvent("message", this.messageHandler, !0))
      },
      handleMessage: function(e) {
        var t = e.data
          , s = t.eventName
          , n = t.data;
        (s || "function" == typeof this[s]) && this[s](n)
      },
      postMessage: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._frame.contentWindow.postMessage({
          eventName: e,
          data: t
        }, a(this.origin, "file://") ? null : this.origin)
      },
      boot: function() {
        this.bindMessageHandler(),
          this._frame.contentWindow.Widget.mount(this.origin),
          this.postMessage(i.boot)
      },
      isFrustrationTrackingEnabled: function() {
        var e = this.options
          , t = e.meta
          , s = e.settings
          , n = e.components;
        return t && t.data_version && n ? n.frustration_tracking && Boolean(n.frustration_tracking.enabled) : Boolean(s.components.predictive_support)
      },
      frustrationTrackingData: function() {
        var e = this.options
          , t = e.meta
          , s = e.settings
          , n = e.freshmarketer;
        return t && t.data_version ? n : s.freshmarketer
      },
      open: function(e, t) {
        var s = (e || {}).widgetType;
        if (e && s && a(n, s)) {
          if (!this.isFrustrationTrackingEnabled() && !r())
            return;
          this._frame.contentWindow.Widget.el || this._frame.contentWindow.Widget.mount(this.origin, e.widgetType)
        }
        this.postMessage(i.open, {
          cardType: e,
          data: t
        })
      },
      close: function() {
        this.postMessage(i.close)
      },
      prefill: function(e, t) {
        this.postMessage(i.prefill, {
          formName: e,
          formFields: t
        })
      },
      identify: function(e, t) {
        this.postMessage(i.identify, {
          formName: e,
          formFields: t
        })
      },
      disable: function(e, t) {
        this.postMessage(i.disableFormFields, {
          formName: e,
          formFields: t
        })
      },
      clear: function(e) {
        this.postMessage(i.clear, {
          formName: e
        })
      },
      hide: function(e, t) {
        e ? t ? this.postMessage(i.hideFormFields, {
          formName: e,
          formFields: t
        }) : "launcher" === e && this.postMessage(i.hideLauncher) : this.postMessage(i.hide)
      },
      show: function(e) {
        "launcher" === e ? this.postMessage(i.showLauncher) : this.postMessage(i.show)
      },
      hideChoices: function(e, t) {
        this.postMessage(i.hideChoices, {
          formName: e,
          formFieldsAndChoices: t
        })
      },
      setLabels: function(e) {
        this.postMessage(i.setLabels, e)
      },
      updateSettings: function(e) {
        this.postMessage(i.updateSettings, e)
      },
      updatePreviewSettings: function(e) {
        this.postMessage(i.updatePreviewSettings, e)
      },
      updateTicketForms: function(e) {
        this.postMessage(i.updateTicketForms, e)
      },
      reloadComponents: function() {
        this.postMessage(i.reloadComponents)
      },
      destroy: function() {
        this._frame.contentWindow.Widget.unmount(),
          this.unbindMessageHandler()
      },
      authenticate: function(e) {
        var t = e.callback
          , s = e.token
          , n = t && "function" == typeof t
          , o = "function" == typeof this.authenticateCallback
          , r = n || o;
        n && (this.authenticateCallback = t),
          this.postMessage(i.authenticate, {
            token: s,
            hasCallback: r
          })
      },
      logout: function() {
        this.postMessage(i.logout)
      }
    };
    d.init()
  }
]);
