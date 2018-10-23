'use strict';
/** @type {!Array} */
var _0xc04d = ["use strict", "mad_core", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd", "animationend", "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "$window", "ANIMATIONEND", "animation", "prefixed", "TRANSITIONEND", "transition", "SUPPORT", "csstransitions", "cssanimations", "direction", "body", "rtl", "touch", "XHRLEVEL2", "FormData", "event", "ISTOUCH", "touchstart", "click", "refresh", "setUp", "length", ".counter", "counters", "[data-bg]", "bg", "navMain", 
"navMobile", "wrapper", "header", "elements", "top", "offset", "scroll", "counted", "hasClass", "scrollTop", "addClass", "countTo", "fn", "defaults", "from", "data", "to", "speed", "refresh-interval", "decimals", "extend", "refreshInterval", "ceil", "interval", "onUpdate", "function", "call", "removeData", "onComplete", "formatter", "html", "each", "toFixed", "countToOptions", "", "replace", ".count-number", ".timer", "on", "isotope-options", "isotope", "[data-isotope-options]", "background-image", 
"url(", ")", "css", "madCustomSelect", "ul", "children", "select", "find", ".select-title", "[data-filter]", "option", '<li data-filter="', "filter", "eq", '">', "text", "</li>", "append", "<li>", "hide", "slideToggle", "active", "toggleClass", "li", "slideUp", "val", "el", "init", "DEFAULTS", "prototype", "window", "options", "stickyWrap", ".sticky-header", "goTop", "appendTo", '<button class="go-to-top" id="go-to-top"></button>', "sticky", "stickySet", "clone-fixed", "clone", "before", "-", "outerHeight", 
"#header", "px", ".sticky-header.clone-fixed", "currentTarget", "stickyInit", "scrollHandler", "gotoTop", "clickHandler", "stickyAction", "slideDown", "removeClass", "go-top-visible", "fb-visible", ".fb-link", "preventDefault", "animate", "html, body", "Temp", "object", "userAgent", "toLowerCase", "indexOf", "gecko", "webkit", "safari", "opera", "documentElement", "test", "ie ie", "MSIE", "split", "appVersion", "firefox/2", " ff2", "firefox/3.5", " ff3 ff3_5", "firefox/3", " ff3", "gecko/", " ", 
"jQuery1", "jQuery2", "konqueror", "chrome", " chrome", "iron", " iron", "applewebkit/", "mozilla/", "j2me", "mobile", "iphone", "ipod", "mac", "darwin", "webtv", "win", "freebsd", "x11", "linux", "js", "join", "className", "google.com/reader/view", "URL", "excluded", "mail.google.com", "push", "disconnect", "mousewheel", "keydown", "keyboardSupport", "innerHeight", "scrollHeight", "CSS", "compatMode", "offsetHeight", "height", "style", "auto", "observe", "div", "createElement", "clear", "both", 
"appendChild", "innerHTML", ".iu { visibility: hidden }", "head", "getElementsByTagName", "www.facebook.com", "home_stream", "getElementById", "webkitTransform", "translateZ(0)", "fixedBackground", "backgroundAttachment", "accelerationMax", "accelerationDelta", "min", "start", "animationTime", "pulseAlgorithm", "x", "lastX", "y", "lastY", "splice", "scrollBy", "scrollLeft", "frameRate", "target", "defaultPrevented", "embed", "src", "wheelDeltaX", "wheelDeltaY", "wheelDelta", "touchpadSupport", "abs", 
"stepSize", "ctrlKey", "altKey", "metaKey", "shiftKey", "keyCode", "spacebar", "nodeName", "isContentEditable", "button", "clientHeight", "arrowScroll", "up", "down", "pageup", "pagedown", "home", "end", "left", "right", "uniqueID", "overflow-y", "getPropertyValue", "parentNode", "addEventListener", "removeEventListener", "shift", "floor", "requestAnimationFrame", "webkitRequestAnimationFrame", "setTimeout", "MutationObserver", "WebKitMutationObserver", "pulseScale", "exp", "pulseNormalize", "mousedown", 
"load", "ip-container", "header.ip-header", "querySelector", "ip-loader-circle", "animations", "loading", "add", "random", "setProgress", "remove", "loaded", "layout-switch", "setProgressFn", "scrollTo", "stickyTableHeaders", "$el", "id", "$document", "destroyed", "teardown", "proxy", "bind", "$clonedHeader", "$originalHeader", "isSticky", "hasBeenSticky", "leftOffset", "topOffset", "padding", "thead:first", "clonedHeader.", "trigger", "tableFloatingHeader", "display", "none", "tableFloatingHeaderOriginal", 
"after", "$printStyle", '<style type="text/css" media="print">', ".tableFloatingHeader{display:none !important;}", ".tableFloatingHeaderOriginal{position:static !important;}", "</style>", "setOptions", "updateWidth", "toggleHeaders", "destroy", "unbind", "position", "static", "plugin_", "visibility", "visible", "scroll.", "$scrollableArea", "isWindowScrolling", "setPositionValues", "resize.", ".", "off", "fixedOffset", "fixed", "marginTop", "td,th", "resetWidth", "width", "$originalHeaderCells", 
"th,td", "$clonedHeaderCells", "getWidth", "setWidth", "box-sizing", "border-box", "getBoundingClientRect", "th", "border-collapse", "collapse", "getComputedStyle", "padding-left", "padding-right", "border-width", "outerWidth", "min-width", "max-width", "scrollableArea", "updateOptions", "string", "apply"];
(function($) {
  _0xc04d[0];
  $[_0xc04d[1]] = $[_0xc04d[1]] || {};
  $[_0xc04d[1]] = {
    setUp : function(options) {
      var update = this;
      var animEndEventNames = {
        "WebkitAnimation" : _0xc04d[2],
        "OAnimation" : _0xc04d[3],
        "msAnimation" : _0xc04d[4],
        "animation" : _0xc04d[5]
      };
      var transEndEventNames = {
        "WebkitTransition" : _0xc04d[6],
        "MozTransition" : _0xc04d[7],
        "OTransition" : _0xc04d[8],
        "msTransition" : _0xc04d[9],
        "transition" : _0xc04d[7]
      };
      update[_0xc04d[10]] = $(window);
      update[_0xc04d[11]] = animEndEventNames[Modernizr[_0xc04d[13]](_0xc04d[12])];
      update[_0xc04d[14]] = transEndEventNames[Modernizr[_0xc04d[13]](_0xc04d[15])];
      update[_0xc04d[16]] = {
        animations : Modernizr[_0xc04d[17]] && Modernizr[_0xc04d[18]],
        ANIMATIONSUPPORTED : Modernizr[_0xc04d[18]],
        TRANSITIONSUPPORTED : Modernizr[_0xc04d[17]],
        ISRTL : getComputedStyle(document[_0xc04d[20]])[_0xc04d[19]] === _0xc04d[21],
        ISTOUCH : Modernizr[_0xc04d[22]]
      };
      /** @type {boolean} */
      update[_0xc04d[23]] = !!window[_0xc04d[24]];
      update[_0xc04d[25]] = update[_0xc04d[16]][_0xc04d[26]] ? _0xc04d[27] : _0xc04d[28];
      update[_0xc04d[29]]();
    },
    DOMLoaded : function(cb) {
      var servicesConnectors = this;
      servicesConnectors[_0xc04d[30]](cb);
      if ($(_0xc04d[32])[_0xc04d[31]]) {
        servicesConnectors[_0xc04d[33]]();
      }
      if ($(_0xc04d[34])[_0xc04d[31]]) {
        servicesConnectors[_0xc04d[35]]();
      }
    },
    elements : {
      ".main-navigation, .topbar:not(.no-mobile-advanced)" : _0xc04d[36],
      "#mobile-advanced" : _0xc04d[37],
      "#wrapper" : _0xc04d[38],
      "#header" : _0xc04d[39]
    },
    $ : function(selector) {
      return $(selector);
    },
    refresh : function() {
      var query;
      for (query in this[_0xc04d[40]]) {
        this[this[_0xc04d[40]][query]] = this.$(query);
      }
    },
    counters : function() {
      var $realtime = $(_0xc04d[32]);
      $realtime[_0xc04d[68]](function() {
        var $realtime = $(this);
        /** @type {number} */
        var _0x7287xa = $realtime[_0xc04d[42]]()[_0xc04d[41]] - 3000;
        $(window)[_0xc04d[75]](_0xc04d[43], function() {
          if ($realtime[_0xc04d[45]](_0xc04d[44])) {
            return false;
          }
          if ($(this)[_0xc04d[46]]() >= _0x7287xa) {
            $realtime[_0xc04d[47]](_0xc04d[44]);
            (function($) {
              /**
               * @param {?} isSlidingUp
               * @param {?} $cont
               * @return {?}
               */
              function handleSlide(isSlidingUp, $cont) {
                return isSlidingUp[_0xc04d[69]]($cont[_0xc04d[56]]);
              }
              /**
               * @param {number} e
               * @return {?}
               */
              $[_0xc04d[49]][_0xc04d[48]] = function(e) {
                e = e || {};
                return $(this)[_0xc04d[68]](function() {
                  /**
                   * @return {undefined}
                   */
                  function callback() {
                    str = str + curr;
                    reconnectTryTimes++;
                    callIf(str);
                    if (typeof data[_0xc04d[61]] == _0xc04d[62]) {
                      data[_0xc04d[61]][_0xc04d[63]](readReq, str);
                    }
                    if (reconnectTryTimes >= maxReconnectTryTimes) {
                      views[_0xc04d[64]](_0xc04d[48]);
                      clearInterval(timers[_0xc04d[60]]);
                      str = data[_0xc04d[53]];
                      if (typeof data[_0xc04d[65]] == _0xc04d[62]) {
                        data[_0xc04d[65]][_0xc04d[63]](readReq, str);
                      }
                    }
                  }
                  /**
                   * @param {?} callback
                   * @return {undefined}
                   */
                  function callIf(callback) {
                    var req = data[_0xc04d[66]][_0xc04d[63]](readReq, callback, data);
                    views[_0xc04d[67]](req);
                  }
                  var data = $[_0xc04d[57]]({}, $[_0xc04d[49]][_0xc04d[48]][_0xc04d[50]], {
                    from : $(this)[_0xc04d[52]](_0xc04d[51]),
                    to : $(this)[_0xc04d[52]](_0xc04d[53]),
                    speed : $(this)[_0xc04d[52]](_0xc04d[54]),
                    refreshInterval : $(this)[_0xc04d[52]](_0xc04d[55]),
                    decimals : $(this)[_0xc04d[52]](_0xc04d[56])
                  }, e);
                  var maxReconnectTryTimes = Math[_0xc04d[59]](data[_0xc04d[54]] / data[_0xc04d[58]]);
                  /** @type {number} */
                  var curr = (data[_0xc04d[53]] - data[_0xc04d[51]]) / maxReconnectTryTimes;
                  var readReq = this;
                  var views = $(this);
                  /** @type {number} */
                  var reconnectTryTimes = 0;
                  var str = data[_0xc04d[51]];
                  var timers = views[_0xc04d[52]](_0xc04d[48]) || {};
                  views[_0xc04d[52]](_0xc04d[48], timers);
                  if (timers[_0xc04d[60]]) {
                    clearInterval(timers[_0xc04d[60]]);
                  }
                  /** @type {number} */
                  timers[_0xc04d[60]] = setInterval(callback, data[_0xc04d[58]]);
                  callIf(str);
                });
              };
              $[_0xc04d[49]][_0xc04d[48]][_0xc04d[50]] = {
                from : 0,
                to : 0,
                speed : 1000,
                refreshInterval : 100,
                decimals : 0,
                formatter : handleSlide,
                onUpdate : null,
                onComplete : null
              };
            })(jQuery);
            jQuery(function(extend) {
              /**
               * @param {number} data
               * @return {undefined}
               */
              function MockSave(data) {
                var target = extend(this);
                data = extend[_0xc04d[57]]({}, data || {}, target[_0xc04d[52]](_0xc04d[70]) || {});
                target[_0xc04d[48]](data);
              }
              extend(_0xc04d[73])[_0xc04d[52]](_0xc04d[70], {
                formatter : function(data, series) {
                  return data[_0xc04d[69]](series[_0xc04d[56]])[_0xc04d[72]](/\B(?=(?:\d{3})+(?!\d))/g, _0xc04d[71]);
                }
              });
              extend(_0xc04d[74])[_0xc04d[68]](MockSave);
            });
          }
        });
      });
    },
    isotope : function() {
      var _0x7287x18 = this;
      $(_0xc04d[78])[_0xc04d[68]](function() {
        var $T = $(this);
        var val = $T[_0xc04d[52]](_0xc04d[76]);
        $T[_0xc04d[77]](val);
      });
    },
    bg : function(data) {
      data = data ? data : $(_0xc04d[34]);
      data[_0xc04d[68]](function() {
        var $realtime = $(this);
        var _0x7287x1a = $realtime[_0xc04d[52]](_0xc04d[35]);
        if (_0x7287x1a) {
          $realtime[_0xc04d[82]](_0xc04d[79], _0xc04d[80] + _0x7287x1a + _0xc04d[81]);
        }
      });
    }
  };
  $(function() {
    $[_0xc04d[1]].DOMLoaded();
  });
})(jQuery);
$[_0xc04d[49]][_0xc04d[83]] = function() {
  return this[_0xc04d[68]](function() {
    var _0x7287x1b = $(this)[_0xc04d[85]](_0xc04d[84]);
    var obj = $(this)[_0xc04d[87]](_0xc04d[86]);
    var load_layers_mapping = $(this)[_0xc04d[87]](_0xc04d[88]);
    if ($(this)[_0xc04d[87]](_0xc04d[89])[_0xc04d[31]]) {
      /** @type {number} */
      var rowTop = 0;
      var clientBottom = obj[_0xc04d[85]](_0xc04d[90])[_0xc04d[31]];
      for (; rowTop < clientBottom; rowTop++) {
        _0x7287x1b[_0xc04d[97]](_0xc04d[91] + obj[_0xc04d[85]](_0xc04d[90])[_0xc04d[93]](rowTop)[_0xc04d[52]](_0xc04d[92]) + _0xc04d[94] + obj[_0xc04d[85]](_0xc04d[90])[_0xc04d[93]](rowTop)[_0xc04d[95]]() + _0xc04d[96]);
      }
    } else {
      /** @type {number} */
      rowTop = 0;
      clientBottom = obj[_0xc04d[85]](_0xc04d[90])[_0xc04d[31]];
      for (; rowTop < clientBottom; rowTop++) {
        _0x7287x1b[_0xc04d[97]](_0xc04d[98] + obj[_0xc04d[85]](_0xc04d[90])[_0xc04d[93]](rowTop)[_0xc04d[95]]() + _0xc04d[96]);
      }
    }
    obj[_0xc04d[99]]();
    load_layers_mapping[_0xc04d[75]](_0xc04d[28], function() {
      _0x7287x1b[_0xc04d[100]](400);
      $(this)[_0xc04d[102]](_0xc04d[101]);
    });
    _0x7287x1b[_0xc04d[75]](_0xc04d[28], _0xc04d[103], function() {
      var req = $(this)[_0xc04d[95]]();
      load_layers_mapping[_0xc04d[95]](req);
      _0x7287x1b[_0xc04d[104]](400);
      obj[_0xc04d[105]](req);
      load_layers_mapping[_0xc04d[102]](_0xc04d[101]);
      return false;
    });
  });
}, function($, elem) {
  /**
   * @param {?} element
   * @param {?} options
   * @return {undefined}
   */
  function QorTabRadio(element, options) {
    this[_0xc04d[106]] = $(element);
    this[_0xc04d[107]](options);
  }
  QorTabRadio[_0xc04d[108]] = {
    sticky : true
  };
  QorTabRadio[_0xc04d[109]] = {
    init : function(data) {
      var values = this;
      values[_0xc04d[110]] = $(elem);
      values[_0xc04d[111]] = $[_0xc04d[57]]({}, QorTabRadio.DEFAULTS, data);
      values[_0xc04d[112]] = $(_0xc04d[113]);
      values[_0xc04d[114]] = $(_0xc04d[116])[_0xc04d[115]](values[_0xc04d[106]]);
      if (values[_0xc04d[111]][_0xc04d[117]]) {
        values[_0xc04d[117]][_0xc04d[118]][_0xc04d[63]](values, values[_0xc04d[110]]);
        values[_0xc04d[112]][_0xc04d[121]]($(_0xc04d[113])[_0xc04d[120]]()[_0xc04d[47]](_0xc04d[119]));
        $(_0xc04d[126])[_0xc04d[82]](_0xc04d[41], _0xc04d[122] + $(_0xc04d[124])[_0xc04d[123]]() + _0xc04d[125]);
      }
      values[_0xc04d[110]][_0xc04d[75]](_0xc04d[43], function(canCreateDiscussions) {
        if (values[_0xc04d[111]][_0xc04d[117]]) {
          values[_0xc04d[117]][_0xc04d[128]][_0xc04d[63]](values, canCreateDiscussions[_0xc04d[127]]);
        }
        values[_0xc04d[130]][_0xc04d[129]][_0xc04d[63]](values, canCreateDiscussions[_0xc04d[127]]);
      });
      values[_0xc04d[130]][_0xc04d[131]](values);
    },
    sticky : {
      stickySet : function() {
        var which = this[_0xc04d[112]];
        var dx_start;
        if (which[_0xc04d[31]]) {
          dx_start = which[_0xc04d[123]]();
          $[_0xc04d[52]](which, _0xc04d[52], {
            offset : dx_start,
            height : which[_0xc04d[123]](true)
          });
        }
      },
      stickyInit : function(mmCoreSplitViewBlock) {
        var document = this;
        var artistTrack;
        if (document[_0xc04d[112]][_0xc04d[31]]) {
          artistTrack = $[_0xc04d[52]](document[_0xc04d[112]], _0xc04d[52]);
          document[_0xc04d[117]][_0xc04d[132]](artistTrack, mmCoreSplitViewBlock, document);
        }
      },
      stickyAction : function(match, context, originDir) {
        var createdDay = $(context)[_0xc04d[46]]();
        if (createdDay > match[_0xc04d[42]]) {
          if (!originDir[_0xc04d[112]][_0xc04d[45]](_0xc04d[117])) {
            originDir[_0xc04d[112]][_0xc04d[47]](_0xc04d[117]);
            $(_0xc04d[126])[_0xc04d[47]](_0xc04d[133]);
          }
        } else {
          if (originDir[_0xc04d[112]][_0xc04d[45]](_0xc04d[117])) {
            originDir[_0xc04d[112]][_0xc04d[134]](_0xc04d[117]);
            $(_0xc04d[126])[_0xc04d[134]](_0xc04d[133]);
          }
        }
      }
    },
    gotoTop : {
      scrollHandler : function(e) {
        if ($(e)[_0xc04d[46]]() > 200) {
          this[_0xc04d[114]][_0xc04d[47]](_0xc04d[135]);
        } else {
          this[_0xc04d[114]][_0xc04d[134]](_0xc04d[135]);
        }
        $(_0xc04d[137])[_0xc04d[47]](_0xc04d[136]);
      },
      clickHandler : function(event) {
        event[_0xc04d[114]][_0xc04d[75]](_0xc04d[28], function(canCreateDiscussions) {
          canCreateDiscussions[_0xc04d[138]]();
          $(_0xc04d[140])[_0xc04d[139]]({
            scrollTop : 0
          }, 800);
        });
      }
    }
  };
  /**
   * @param {!Function} option
   * @return {?}
   */
  $[_0xc04d[49]][_0xc04d[141]] = function(option) {
    return this[_0xc04d[68]](function() {
      var relativeUrlImg = $(this);
      var _0x7287x12 = relativeUrlImg[_0xc04d[52]](_0xc04d[141]);
      var options = typeof option == _0xc04d[142] && option;
      if (!_0x7287x12) {
        relativeUrlImg[_0xc04d[52]](_0xc04d[141], new QorTabRadio(this, options));
      }
    });
  };
}(jQuery, window);
(function(klass) {
  klass[_0xc04d[57]]({
    browserSelector : function() {
      var dom_implemented = navigator[_0xc04d[143]];
      var container = dom_implemented[_0xc04d[144]]();
      /**
       * @param {?} data
       * @return {?}
       */
      var isNumber = function(data) {
        return container[_0xc04d[145]](data) > -1;
      };
      var index = _0xc04d[146];
      var groupNamePrefix = _0xc04d[147];
      var dupeNameCount = _0xc04d[148];
      var elapsed = _0xc04d[149];
      var el = document[_0xc04d[150]];
      /** @type {!Array} */
      var _0x7287x31 = [!/opera|webtv/i[_0xc04d[151]](container) && /msie\s(\d)/[_0xc04d[151]](container) ? _0xc04d[152] + parseFloat(navigator[_0xc04d[155]][_0xc04d[154]](_0xc04d[153])[1]) : isNumber(_0xc04d[156]) ? index + _0xc04d[157] : isNumber(_0xc04d[158]) ? index + _0xc04d[159] : isNumber(_0xc04d[160]) ? index + _0xc04d[161] : isNumber(_0xc04d[162]) ? index : isNumber(_0xc04d[149]) ? elapsed + (/version\/(\d+)/[_0xc04d[151]](container) ? _0xc04d[163] + elapsed + RegExp[_0xc04d[164]] : /opera(\s|\/)(\d+)/[_0xc04d[151]](container) ? 
      _0xc04d[163] + elapsed + RegExp[_0xc04d[165]] : _0xc04d[71]) : isNumber(_0xc04d[166]) ? _0xc04d[166] : isNumber(_0xc04d[167]) ? groupNamePrefix + _0xc04d[168] : isNumber(_0xc04d[169]) ? groupNamePrefix + _0xc04d[170] : isNumber(_0xc04d[171]) ? groupNamePrefix + _0xc04d[163] + dupeNameCount + (/version\/(\d+)/[_0xc04d[151]](container) ? _0xc04d[163] + dupeNameCount + RegExp[_0xc04d[164]] : _0xc04d[71]) : isNumber(_0xc04d[172]) ? index : _0xc04d[71], isNumber(_0xc04d[173]) ? _0xc04d[174] : isNumber(_0xc04d[175]) ? 
      _0xc04d[175] : isNumber(_0xc04d[176]) ? _0xc04d[176] : isNumber(_0xc04d[177]) ? _0xc04d[177] : isNumber(_0xc04d[178]) ? _0xc04d[177] : isNumber(_0xc04d[179]) ? _0xc04d[179] : isNumber(_0xc04d[180]) ? _0xc04d[180] : isNumber(_0xc04d[181]) ? _0xc04d[181] : isNumber(_0xc04d[182]) || isNumber(_0xc04d[183]) ? _0xc04d[183] : _0xc04d[71], _0xc04d[184]];
      c = _0x7287x31[_0xc04d[185]](_0xc04d[163]);
      el[_0xc04d[186]] += _0xc04d[163] + c;
    },
    smoothScroll : function() {
      /**
       * @return {undefined}
       */
      function fn() {
        /** @type {boolean} */
        var checkPassed = false;
        if (document[_0xc04d[188]][_0xc04d[145]](_0xc04d[187]) > -1) {
          /** @type {boolean} */
          checkPassed = true;
        }
        if (options[_0xc04d[189]]) {
          var nextIdLookup = options[_0xc04d[189]][_0xc04d[154]](/[,\n] ?/);
          nextIdLookup[_0xc04d[191]](_0xc04d[190]);
          var indexLookupKey = nextIdLookup[_0xc04d[31]];
          for (; indexLookupKey--;) {
            if (document[_0xc04d[188]][_0xc04d[145]](nextIdLookup[indexLookupKey]) > -1) {
              if (expected) {
                expected[_0xc04d[192]]();
              }
              register(_0xc04d[193], init);
              /** @type {boolean} */
              checkPassed = true;
              /** @type {boolean} */
              _0x7287x34 = true;
              break;
            }
          }
        }
        if (checkPassed) {
          register(_0xc04d[194], complete);
        }
        if (options[_0xc04d[195]] && !checkPassed) {
          add(_0xc04d[194], complete);
        }
      }
      /**
       * @return {undefined}
       */
      function load() {
        if (!document[_0xc04d[20]]) {
          return;
        }
        var value = document[_0xc04d[20]];
        var fdc = document[_0xc04d[150]];
        var z = window[_0xc04d[196]];
        var x = value[_0xc04d[197]];
        attributes = document[_0xc04d[199]][_0xc04d[145]](_0xc04d[198]) >= 0 ? fdc : value;
        event = value;
        fn();
        /** @type {boolean} */
        _0x7287x37 = true;
        if (top != self) {
          /** @type {boolean} */
          subtreeId = true;
        } else {
          if (x > z && (value[_0xc04d[200]] <= z || fdc[_0xc04d[200]] <= z)) {
            /** @type {boolean} */
            var _0x7287x44 = false;
            /**
             * @return {undefined}
             */
            var c = function() {
              if (!_0x7287x44 && fdc[_0xc04d[197]] != document[_0xc04d[201]]) {
                /** @type {boolean} */
                _0x7287x44 = true;
                setTimeout(function() {
                  fdc[_0xc04d[202]][_0xc04d[201]] = document[_0xc04d[201]] + _0xc04d[125];
                  /** @type {boolean} */
                  _0x7287x44 = false;
                }, 500);
              }
            };
            fdc[_0xc04d[202]][_0xc04d[201]] = _0xc04d[203];
            setTimeout(c, 10);
            var observerConfig = {
              attributes : true,
              childList : true,
              characterData : false
            };
            expected = new RegExp(c);
            expected[_0xc04d[204]](value, observerConfig);
            if (attributes[_0xc04d[200]] <= z) {
              var data = document[_0xc04d[206]](_0xc04d[205]);
              data[_0xc04d[202]][_0xc04d[207]] = _0xc04d[208];
              value[_0xc04d[209]](data);
            }
          }
        }
        if (document[_0xc04d[188]][_0xc04d[145]](_0xc04d[190]) > -1) {
          var artistTrack = document[_0xc04d[206]](_0xc04d[202]);
          artistTrack[_0xc04d[210]] = _0xc04d[211];
          (document[_0xc04d[213]](_0xc04d[212])[0] || fdc)[_0xc04d[209]](artistTrack);
        } else {
          if (document[_0xc04d[188]][_0xc04d[145]](_0xc04d[214]) > -1) {
            var _0x7287x48 = document[_0xc04d[216]](_0xc04d[215]);
            if (_0x7287x48) {
              _0x7287x48[_0xc04d[202]][_0xc04d[217]] = _0xc04d[218];
            }
          }
        }
        if (!options[_0xc04d[219]] && !_0x7287x34) {
          value[_0xc04d[202]][_0xc04d[220]] = _0xc04d[43];
          fdc[_0xc04d[202]][_0xc04d[220]] = _0xc04d[43];
        }
      }
      /**
       * @param {?} type
       * @param {number} position
       * @param {number} value
       * @param {number} i
       * @return {undefined}
       */
      function animate(type, position, value, i) {
        if (!i) {
          /** @type {number} */
          i = 1000;
        }
        step(position, value);
        if (options[_0xc04d[221]] != 1) {
          /** @type {number} */
          var numSteps = +new Date;
          /** @type {number} */
          var i = numSteps - j;
          if (i < options[_0xc04d[222]]) {
            /** @type {number} */
            var height = (1 + 30 / i) / 2;
            if (height > 1) {
              height = Math[_0xc04d[223]](height, options[_0xc04d[221]]);
              /** @type {number} */
              position = position * height;
              /** @type {number} */
              value = value * height;
            }
          }
          /** @type {number} */
          j = +new Date;
        }
        PL$120[_0xc04d[191]]({
          x : position,
          y : value,
          lastX : position < 0 ? 0.99 : -0.99,
          lastY : value < 0 ? 0.99 : -0.99,
          start : +new Date
        });
        if (_0x7287x44) {
          return;
        }
        /** @type {boolean} */
        var is_t = type === document[_0xc04d[20]];
        /**
         * @param {?} text
         * @return {undefined}
         */
        var finish = function(text) {
          /** @type {number} */
          var raw = +new Date;
          /** @type {number} */
          var entry_x = 0;
          /** @type {number} */
          var selectorText = 0;
          /** @type {number} */
          var PL$24 = 0;
          for (; PL$24 < PL$120[_0xc04d[31]]; PL$24++) {
            var step = PL$120[PL$24];
            /** @type {number} */
            var elapsed = raw - step[_0xc04d[224]];
            /** @type {boolean} */
            var finished = elapsed >= options[_0xc04d[225]];
            /** @type {number} */
            var i = finished ? 1 : elapsed / options[_0xc04d[225]];
            if (options[_0xc04d[226]]) {
              i = indexOf(i);
            }
            /** @type {number} */
            var mainBlockWidth = step[_0xc04d[227]] * i - step[_0xc04d[228]] >> 0;
            /** @type {number} */
            var elementName = step[_0xc04d[229]] * i - step[_0xc04d[230]] >> 0;
            /** @type {number} */
            entry_x = entry_x + mainBlockWidth;
            /** @type {number} */
            selectorText = selectorText + elementName;
            step[_0xc04d[228]] += mainBlockWidth;
            step[_0xc04d[230]] += elementName;
            if (finished) {
              PL$120[_0xc04d[231]](PL$24, 1);
              PL$24--;
            }
          }
          if (is_t) {
            window[_0xc04d[232]](entry_x, selectorText);
          } else {
            if (entry_x) {
              type[_0xc04d[233]] += entry_x;
            }
            if (selectorText) {
              type[_0xc04d[46]] += selectorText;
            }
          }
          if (!position && !value) {
            /** @type {!Array} */
            PL$120 = [];
          }
          if (PL$120[_0xc04d[31]]) {
            log(finish, type, i / options[_0xc04d[234]] + 1);
          } else {
            /** @type {boolean} */
            _0x7287x44 = false;
          }
        };
        log(finish, type, 0);
        /** @type {boolean} */
        _0x7287x44 = true;
      }
      /**
       * @param {?} data
       * @return {?}
       */
      function init(data) {
        if (!_0x7287x37) {
          load();
        }
        var name = data[_0xc04d[235]];
        var key = create(name);
        if (!key || data[_0xc04d[236]] || get(event, _0xc04d[237]) || get(name, _0xc04d[237]) && /\.pdf/i[_0xc04d[151]](name[_0xc04d[238]])) {
          return true;
        }
        var number = data[_0xc04d[239]] || 0;
        var value = data[_0xc04d[240]] || 0;
        if (!number && !value) {
          value = data[_0xc04d[241]] || 0;
        }
        if (!options[_0xc04d[242]] && after(value)) {
          return true;
        }
        if (Math[_0xc04d[243]](number) > 1.2) {
          /** @type {number} */
          number = number * (options[_0xc04d[244]] / 120);
        }
        if (Math[_0xc04d[243]](value) > 1.2) {
          /** @type {number} */
          value = value * (options[_0xc04d[244]] / 120);
        }
        animate(key, -number, -value);
        data[_0xc04d[138]]();
      }
      /**
       * @param {?} data
       * @return {?}
       */
      function complete(data) {
        var easing = data[_0xc04d[235]];
        var _0x7287x64 = data[_0xc04d[245]] || data[_0xc04d[246]] || data[_0xc04d[247]] || data[_0xc04d[248]] && data[_0xc04d[249]] !== key[_0xc04d[250]];
        if (/input|textarea|select|embed/i[_0xc04d[151]](easing[_0xc04d[251]]) || easing[_0xc04d[252]] || data[_0xc04d[236]] || _0x7287x64) {
          return true;
        }
        if (get(easing, _0xc04d[253]) && data[_0xc04d[249]] === key[_0xc04d[250]]) {
          return true;
        }
        var yError;
        /** @type {number} */
        var newPos = 0;
        /** @type {number} */
        var value = 0;
        var node = create(event);
        var size = node[_0xc04d[254]];
        if (node == document[_0xc04d[20]]) {
          size = window[_0xc04d[196]];
        }
        switch(data[_0xc04d[249]]) {
          case key[_0xc04d[256]]:
            /** @type {number} */
            value = -options[_0xc04d[255]];
            break;
          case key[_0xc04d[257]]:
            value = options[_0xc04d[255]];
            break;
          case key[_0xc04d[250]]:
            /** @type {number} */
            yError = data[_0xc04d[248]] ? 1 : -1;
            /** @type {number} */
            value = -yError * size * 0.9;
            break;
          case key[_0xc04d[258]]:
            /** @type {number} */
            value = -size * 0.9;
            break;
          case key[_0xc04d[259]]:
            /** @type {number} */
            value = size * 0.9;
            break;
          case key[_0xc04d[260]]:
            /** @type {number} */
            value = -node[_0xc04d[46]];
            break;
          case key[_0xc04d[261]]:
            /** @type {number} */
            var max = node[_0xc04d[197]] - node[_0xc04d[46]] - size;
            /** @type {number} */
            value = max > 0 ? max + 10 : 0;
            break;
          case key[_0xc04d[262]]:
            /** @type {number} */
            newPos = -options[_0xc04d[255]];
            break;
          case key[_0xc04d[263]]:
            newPos = options[_0xc04d[255]];
            break;
          default:
            return true;
        }
        animate(node, newPos, value);
        data[_0xc04d[138]]();
      }
      /**
       * @param {?} data
       * @return {undefined}
       */
      function animateScroll(data) {
        event = data[_0xc04d[235]];
      }
      /**
       * @param {!Array} gameSrc
       * @param {(Array|HTMLCollection|Node|NodeList|Window|string)} screen
       * @return {?}
       */
      function startWithDiv(gameSrc, screen) {
        var prevpage = gameSrc[_0xc04d[31]];
        for (; prevpage--;) {
          /** @type {(Array|HTMLCollection|Node|NodeList|Window|string)} */
          curTerminal[$(gameSrc[prevpage])] = screen;
        }
        return screen;
      }
      /**
       * @param {(Array|Document|DocumentFragment|Element|HTMLCollection|NodeList|string)} body
       * @return {?}
       */
      function create(body) {
        /** @type {!Array} */
        var gameSrc = [];
        var id = attributes[_0xc04d[197]];
        do {
          var screen = curTerminal[$(body)];
          if (screen) {
            return startWithDiv(gameSrc, screen);
          }
          gameSrc[_0xc04d[191]](body);
          if (id === body[_0xc04d[197]]) {
            if (!subtreeId || attributes[_0xc04d[254]] + 10 < id) {
              return startWithDiv(gameSrc, document[_0xc04d[20]]);
            }
          } else {
            if (body[_0xc04d[254]] + 10 < body[_0xc04d[197]]) {
              overflow = getComputedStyle(body, _0xc04d[71])[_0xc04d[266]](_0xc04d[265]);
              if (overflow === _0xc04d[43] || overflow === _0xc04d[203]) {
                return startWithDiv(gameSrc, body);
              }
            }
          }
        } while (body = body[_0xc04d[267]]);
      }
      /**
       * @param {?} params
       * @param {!Function} callback
       * @param {string} false_callback
       * @return {undefined}
       */
      function add(params, callback, false_callback) {
        window[_0xc04d[268]](params, callback, false_callback || false);
      }
      /**
       * @param {?} params
       * @param {!Function} name
       * @param {string} render_function
       * @return {undefined}
       */
      function register(params, name, render_function) {
        window[_0xc04d[269]](params, name, render_function || false);
      }
      /**
       * @param {?} type
       * @param {?} time
       * @return {?}
       */
      function get(type, time) {
        return (type[_0xc04d[251]] || _0xc04d[71])[_0xc04d[144]]() === time[_0xc04d[144]]();
      }
      /**
       * @param {number} name
       * @param {number} value
       * @return {undefined}
       */
      function step(name, value) {
        /** @type {number} */
        name = name > 0 ? 1 : -1;
        /** @type {number} */
        value = value > 0 ? 1 : -1;
        if (item[_0xc04d[227]] !== name || item[_0xc04d[229]] !== value) {
          /** @type {number} */
          item[_0xc04d[227]] = name;
          /** @type {number} */
          item[_0xc04d[229]] = value;
          /** @type {!Array} */
          PL$120 = [];
          /** @type {number} */
          j = 0;
        }
      }
      /**
       * @param {?} value
       * @return {?}
       */
      function after(value) {
        if (!value) {
          return;
        }
        value = Math[_0xc04d[243]](value);
        dtp[_0xc04d[191]](value);
        dtp[_0xc04d[270]]();
        clearTimeout(_takingTooLongTimeout);
        /** @type {boolean} */
        var inputWin = dtp[0] == dtp[1] && dtp[1] == dtp[2];
        var winRef = expect(dtp[0], 120) && expect(dtp[1], 120) && expect(dtp[2], 120);
        return !(inputWin || winRef);
      }
      /**
       * @param {number} value
       * @param {number} number
       * @return {?}
       */
      function expect(value, number) {
        return Math[_0xc04d[271]](value / number) == value / number;
      }
      /**
       * @param {number} rows
       * @return {?}
       */
      function $indexOf(rows) {
        var indentSize;
        var alphaS;
        var alphaT;
        /** @type {number} */
        rows = rows * options[_0xc04d[277]];
        if (rows < 1) {
          /** @type {number} */
          indentSize = rows - (1 - Math[_0xc04d[278]](-rows));
        } else {
          alphaS = Math[_0xc04d[278]](-1);
          /** @type {number} */
          rows = rows - 1;
          /** @type {number} */
          alphaT = 1 - Math[_0xc04d[278]](-rows);
          indentSize = alphaS + alphaT * (1 - alphaS);
        }
        return indentSize * options[_0xc04d[279]];
      }
      /**
       * @param {number} result
       * @return {?}
       */
      function indexOf(result) {
        if (result >= 1) {
          return 1;
        }
        if (result <= 0) {
          return 0;
        }
        if (options[_0xc04d[279]] == 1) {
          options[_0xc04d[279]] /= $indexOf(1);
        }
        return $indexOf(result);
      }
      var defaultOptions = {
        frameRate : 150,
        animationTime : 700,
        stepSize : 80,
        pulseAlgorithm : true,
        pulseScale : 8,
        pulseNormalize : 1,
        accelerationDelta : 20,
        accelerationMax : 1,
        keyboardSupport : true,
        arrowScroll : 50,
        touchpadSupport : true,
        fixedBackground : true,
        excluded : _0xc04d[71]
      };
      var options = defaultOptions;
      /** @type {boolean} */
      var _0x7287x34 = false;
      /** @type {boolean} */
      var subtreeId = false;
      var item = {
        x : 0,
        y : 0
      };
      /** @type {boolean} */
      var _0x7287x37 = false;
      var attributes = document[_0xc04d[150]];
      var event;
      var expected;
      /** @type {!Array} */
      var dtp = [120, 120, 120];
      var key = {
        left : 37,
        up : 38,
        right : 39,
        down : 40,
        spacebar : 32,
        pageup : 33,
        pagedown : 34,
        end : 35,
        home : 36
      };
      /** @type {!Array} */
      var PL$120 = [];
      /** @type {boolean} */
      var _0x7287x44 = false;
      /** @type {number} */
      var j = +new Date;
      var curTerminal = {};
      setInterval(function() {
        curTerminal = {};
      }, 10 * 1000);
      var $ = function() {
        /** @type {number} */
        var dcReplicas = 0;
        return function(replicasByDc) {
          return replicasByDc[_0xc04d[264]] || (replicasByDc[_0xc04d[264]] = dcReplicas++);
        };
      }();
      var _takingTooLongTimeout;
      var log = function() {
        return window[_0xc04d[272]] || window[_0xc04d[273]] || function(axsPath, canCreateDiscussions, when) {
          window[_0xc04d[274]](axsPath, when || 1000 / 60);
        };
      }();
      var RegExp = window[_0xc04d[275]] || window[_0xc04d[276]];
      add(_0xc04d[280], animateScroll);
      add(_0xc04d[193], init);
      add(_0xc04d[281], load);
    }
  });
})(jQuery);
(function() {
  /**
   * @return {undefined}
   */
  function async() {
    /**
     * @return {undefined}
     */
    var updateNeed = function() {
      if (support[_0xc04d[286]]) {
        this[_0xc04d[269]](E, updateNeed);
      }
      apply();
    };
    window[_0xc04d[268]](_0xc04d[43], selectorText);
    classie[_0xc04d[288]](F, _0xc04d[287]);
    if (support[_0xc04d[286]]) {
      F[_0xc04d[268]](E, updateNeed);
    } else {
      updateNeed();
    }
  }
  /**
   * @return {undefined}
   */
  function apply() {
    /**
     * @param {?} animation
     * @return {undefined}
     */
    var update = function(animation) {
      /** @type {number} */
      var from = 0;
      /** @type {number} */
      var chat_retry = setInterval(function() {
        from = Math[_0xc04d[223]](from + Math[_0xc04d[289]]() * 0.1, 1);
        animation[_0xc04d[290]](from);
        if (from === 1) {
          classie[_0xc04d[291]](F, _0xc04d[287]);
          classie[_0xc04d[288]](F, _0xc04d[292]);
          clearInterval(chat_retry);
          /**
           * @param {?} fnMatch0
           * @return {undefined}
           */
          var $ = function(fnMatch0) {
            if (support[_0xc04d[286]]) {
              if (fnMatch0[_0xc04d[235]] !== tplB) {
                return;
              }
              this[_0xc04d[269]](E, $);
            }
            classie[_0xc04d[288]](document[_0xc04d[20]], _0xc04d[293]);
            window[_0xc04d[269]](_0xc04d[43], selectorText);
          };
          if (support[_0xc04d[286]]) {
            tplB[_0xc04d[268]](E, $);
          } else {
            $();
          }
        }
      }, 80);
    };
    loader[_0xc04d[294]](update);
  }
  /**
   * @return {undefined}
   */
  function selectorText() {
    window[_0xc04d[295]](0, 0);
  }
  var support = {
    animations : Modernizr[_0xc04d[18]]
  };
  var F = document[_0xc04d[216]](_0xc04d[282]);
  var tplB = F[_0xc04d[284]](_0xc04d[283]);
  var loader = new PathLoader(document[_0xc04d[216]](_0xc04d[285]));
  var animEndEventNames = {
    "WebkitAnimation" : _0xc04d[2],
    "OAnimation" : _0xc04d[3],
    "msAnimation" : _0xc04d[4],
    "animation" : _0xc04d[5]
  };
  var E = animEndEventNames[Modernizr[_0xc04d[13]](_0xc04d[12])];
  async();
})();
(function($, window, canCreateDiscussions) {
  /**
   * @param {?} value
   * @param {?} node
   * @return {undefined}
   */
  function Error(value, node) {
    var base = this;
    base[_0xc04d[297]] = $(value);
    base[_0xc04d[106]] = value;
    /** @type {number} */
    base[_0xc04d[298]] = _0x7287x97++;
    base[_0xc04d[10]] = $(window);
    base[_0xc04d[299]] = $(document);
    base[_0xc04d[297]][_0xc04d[303]](_0xc04d[300], $[_0xc04d[302]](base[_0xc04d[301]], base));
    /** @type {null} */
    base[_0xc04d[304]] = null;
    /** @type {null} */
    base[_0xc04d[305]] = null;
    /** @type {boolean} */
    base[_0xc04d[306]] = false;
    /** @type {boolean} */
    base[_0xc04d[307]] = false;
    /** @type {null} */
    base[_0xc04d[308]] = null;
    /** @type {null} */
    base[_0xc04d[309]] = null;
    /**
     * @return {undefined}
     */
    base[_0xc04d[107]] = function() {
      base[_0xc04d[297]][_0xc04d[68]](function() {
        var obj = $(this);
        obj[_0xc04d[82]](_0xc04d[310], 0);
        base[_0xc04d[305]] = $(_0xc04d[311], this);
        base[_0xc04d[304]] = base[_0xc04d[305]][_0xc04d[120]]();
        obj[_0xc04d[313]](_0xc04d[312] + name, [base[_0xc04d[304]]]);
        base[_0xc04d[304]][_0xc04d[47]](_0xc04d[314]);
        base[_0xc04d[304]][_0xc04d[82]](_0xc04d[315], _0xc04d[316]);
        base[_0xc04d[305]][_0xc04d[47]](_0xc04d[317]);
        base[_0xc04d[305]][_0xc04d[318]](base.$clonedHeader);
        base[_0xc04d[319]] = $(_0xc04d[320] + _0xc04d[321] + _0xc04d[322] + _0xc04d[323]);
        $(_0xc04d[212])[_0xc04d[97]](base.$printStyle);
      });
      base[_0xc04d[324]](node);
      base[_0xc04d[325]]();
      base[_0xc04d[326]]();
      base[_0xc04d[303]]();
    };
    /**
     * @return {undefined}
     */
    base[_0xc04d[327]] = function() {
      base[_0xc04d[297]][_0xc04d[328]](_0xc04d[300], base[_0xc04d[301]]);
      base[_0xc04d[301]]();
    };
    /**
     * @return {undefined}
     */
    base[_0xc04d[301]] = function() {
      if (base[_0xc04d[306]]) {
        base[_0xc04d[305]][_0xc04d[82]](_0xc04d[329], _0xc04d[330]);
      }
      $[_0xc04d[64]](base[_0xc04d[106]], _0xc04d[331] + name);
      base[_0xc04d[328]]();
      base[_0xc04d[304]][_0xc04d[291]]();
      base[_0xc04d[305]][_0xc04d[134]](_0xc04d[317]);
      base[_0xc04d[305]][_0xc04d[82]](_0xc04d[332], _0xc04d[333]);
      base[_0xc04d[319]][_0xc04d[291]]();
      /** @type {null} */
      base[_0xc04d[106]] = null;
      /** @type {null} */
      base[_0xc04d[297]] = null;
    };
    /**
     * @return {undefined}
     */
    base[_0xc04d[303]] = function() {
      base[_0xc04d[335]][_0xc04d[75]](_0xc04d[334] + name, base[_0xc04d[326]]);
      if (!base[_0xc04d[336]]) {
        base[_0xc04d[10]][_0xc04d[75]](_0xc04d[334] + name + base[_0xc04d[298]], base[_0xc04d[337]]);
        base[_0xc04d[10]][_0xc04d[75]](_0xc04d[338] + name + base[_0xc04d[298]], base[_0xc04d[326]]);
      }
      base[_0xc04d[335]][_0xc04d[75]](_0xc04d[338] + name, base[_0xc04d[326]]);
      base[_0xc04d[335]][_0xc04d[75]](_0xc04d[338] + name, base[_0xc04d[325]]);
    };
    /**
     * @return {undefined}
     */
    base[_0xc04d[328]] = function() {
      base[_0xc04d[335]][_0xc04d[340]](_0xc04d[339] + name, base[_0xc04d[326]]);
      if (!base[_0xc04d[336]]) {
        base[_0xc04d[10]][_0xc04d[340]](_0xc04d[339] + name + base[_0xc04d[298]], base[_0xc04d[337]]);
        base[_0xc04d[10]][_0xc04d[340]](_0xc04d[339] + name + base[_0xc04d[298]], base[_0xc04d[326]]);
      }
      base[_0xc04d[335]][_0xc04d[340]](_0xc04d[339] + name, base[_0xc04d[325]]);
    };
    /**
     * @return {undefined}
     */
    base[_0xc04d[326]] = function() {
      if (base[_0xc04d[297]]) {
        base[_0xc04d[297]][_0xc04d[68]](function() {
          var $realtime = $(this);
          var undefined;
          var value = base[_0xc04d[336]] ? isNaN(base[_0xc04d[111]][_0xc04d[341]]) ? base[_0xc04d[111]][_0xc04d[341]][_0xc04d[123]]() : base[_0xc04d[111]][_0xc04d[341]] : base[_0xc04d[335]][_0xc04d[42]]()[_0xc04d[41]] + (!isNaN(base[_0xc04d[111]][_0xc04d[341]]) ? base[_0xc04d[111]][_0xc04d[341]] : 0);
          var range = $realtime[_0xc04d[42]]();
          var val = base[_0xc04d[335]][_0xc04d[46]]() + value;
          var padding = base[_0xc04d[335]][_0xc04d[233]]();
          /** @type {boolean} */
          var reverseIsSingle = base[_0xc04d[336]] ? val > range[_0xc04d[41]] : value > range[_0xc04d[41]];
          /** @type {boolean} */
          var reverseValue = (base[_0xc04d[336]] ? val : 0) < range[_0xc04d[41]] + $realtime[_0xc04d[201]]() - base[_0xc04d[304]][_0xc04d[201]]() - (base[_0xc04d[336]] ? 0 : value);
          if (reverseIsSingle && reverseValue) {
            undefined = range[_0xc04d[262]] - padding + base[_0xc04d[111]][_0xc04d[308]];
            base[_0xc04d[305]][_0xc04d[82]]({
              "position" : _0xc04d[342],
              "margin-top" : base[_0xc04d[111]][_0xc04d[343]],
              "left" : undefined,
              "z-index" : 3
            });
            base[_0xc04d[308]] = undefined;
            base[_0xc04d[309]] = value;
            base[_0xc04d[304]][_0xc04d[82]](_0xc04d[315], _0xc04d[71]);
            if (!base[_0xc04d[306]]) {
              /** @type {boolean} */
              base[_0xc04d[306]] = true;
              base[_0xc04d[325]]();
            }
            base[_0xc04d[337]]();
          } else {
            if (base[_0xc04d[306]]) {
              base[_0xc04d[305]][_0xc04d[82]](_0xc04d[329], _0xc04d[330]);
              base[_0xc04d[304]][_0xc04d[82]](_0xc04d[315], _0xc04d[316]);
              /** @type {boolean} */
              base[_0xc04d[306]] = false;
              base[_0xc04d[345]]($(_0xc04d[344], base.$clonedHeader), $(_0xc04d[344], base.$originalHeader));
            }
          }
        });
      }
    };
    /**
     * @return {undefined}
     */
    base[_0xc04d[337]] = function() {
      var value = base[_0xc04d[10]][_0xc04d[46]]();
      var _0x7287xa0 = base[_0xc04d[10]][_0xc04d[233]]();
      if (!base[_0xc04d[306]] || value < 0 || value + base[_0xc04d[10]][_0xc04d[201]]() > base[_0xc04d[299]][_0xc04d[201]]() || _0x7287xa0 < 0 || _0x7287xa0 + base[_0xc04d[10]][_0xc04d[346]]() > base[_0xc04d[299]][_0xc04d[346]]()) {
        return;
      }
      base[_0xc04d[305]][_0xc04d[82]]({
        "top" : base[_0xc04d[309]] - (base[_0xc04d[336]] ? 0 : value),
        "left" : base[_0xc04d[308]] - (base[_0xc04d[336]] ? 0 : _0x7287xa0)
      });
    };
    /**
     * @return {undefined}
     */
    base[_0xc04d[325]] = function() {
      if (!base[_0xc04d[306]]) {
        return;
      }
      if (!base[_0xc04d[347]]) {
        base[_0xc04d[347]] = $(_0xc04d[348], base.$originalHeader);
      }
      if (!base[_0xc04d[349]]) {
        base[_0xc04d[349]] = $(_0xc04d[348], base.$clonedHeader);
      }
      var i = base[_0xc04d[350]](base.$clonedHeaderCells);
      base[_0xc04d[351]](i, base.$clonedHeaderCells, base.$originalHeaderCells);
      base[_0xc04d[305]][_0xc04d[82]](_0xc04d[346], base[_0xc04d[304]][_0xc04d[346]]());
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    base[_0xc04d[350]] = function(canCreateDiscussions) {
      /** @type {!Array} */
      var structuredTypes = [];
      canCreateDiscussions[_0xc04d[68]](function(newTypeName) {
        var newType;
        var $realtime = $(this);
        if ($realtime[_0xc04d[82]](_0xc04d[352]) === _0xc04d[353]) {
          newType = $realtime[0][_0xc04d[354]]()[_0xc04d[346]];
        } else {
          var $realtime = $(_0xc04d[355], base.$originalHeader);
          if ($realtime[_0xc04d[82]](_0xc04d[356]) === _0xc04d[357]) {
            if (window[_0xc04d[358]]) {
              /** @type {number} */
              newType = parseFloat(window[_0xc04d[358]](this, null)[_0xc04d[346]]);
            } else {
              /** @type {number} */
              var elapsedTimeBeforeLoad = parseFloat($realtime[_0xc04d[82]](_0xc04d[359]));
              /** @type {number} */
              var waitTime = parseFloat($realtime[_0xc04d[82]](_0xc04d[360]));
              /** @type {number} */
              var dfY1 = parseFloat($realtime[_0xc04d[82]](_0xc04d[361]));
              /** @type {number} */
              newType = $realtime[_0xc04d[362]]() - elapsedTimeBeforeLoad - waitTime - dfY1;
            }
          } else {
            newType = $realtime[_0xc04d[346]]();
          }
        }
        structuredTypes[newTypeName] = newType;
      });
      return structuredTypes;
    };
    /**
     * @param {!NodeList} res
     * @param {?} canCreateDiscussions
     * @param {?} rowOptions
     * @return {undefined}
     */
    base[_0xc04d[351]] = function(res, canCreateDiscussions, rowOptions) {
      canCreateDiscussions[_0xc04d[68]](function(row) {
        var width = res[row];
        rowOptions[_0xc04d[93]](row)[_0xc04d[82]]({
          "min-width" : width,
          "max-width" : width
        });
      });
    };
    /**
     * @param {?} canCreateDiscussions
     * @param {?} DeviceMatchers
     * @return {undefined}
     */
    base[_0xc04d[345]] = function(canCreateDiscussions, DeviceMatchers) {
      canCreateDiscussions[_0xc04d[68]](function(agentService) {
        var $realtime = $(this);
        DeviceMatchers[_0xc04d[93]](agentService)[_0xc04d[82]]({
          "min-width" : $realtime[_0xc04d[82]](_0xc04d[363]),
          "max-width" : $realtime[_0xc04d[82]](_0xc04d[364])
        });
      });
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    base[_0xc04d[324]] = function(value) {
      base[_0xc04d[111]] = $[_0xc04d[57]]({}, defaults, value);
      base[_0xc04d[335]] = $(base[_0xc04d[111]][_0xc04d[365]]);
      /** @type {boolean} */
      base[_0xc04d[336]] = base[_0xc04d[335]][0] === window;
    };
    /**
     * @param {?} i
     * @return {undefined}
     */
    base[_0xc04d[366]] = function(i) {
      base[_0xc04d[324]](i);
      base[_0xc04d[328]]();
      base[_0xc04d[303]]();
      base[_0xc04d[325]]();
      base[_0xc04d[326]]();
    };
    base[_0xc04d[107]]();
  }
  _0xc04d[0];
  var name = _0xc04d[296];
  /** @type {number} */
  var _0x7287x97 = 0;
  var defaults = {
    fixedOffset : 0,
    leftOffset : 0,
    marginTop : 0,
    scrollableArea : window
  };
  /**
   * @param {boolean} filePath
   * @return {?}
   */
  $[_0xc04d[49]][name] = function(filePath) {
    return this[_0xc04d[68]](function() {
      var pluginPaths = $[_0xc04d[52]](this, _0xc04d[331] + name);
      if (pluginPaths) {
        if (typeof filePath === _0xc04d[367]) {
          pluginPaths[filePath][_0xc04d[368]](pluginPaths);
        } else {
          pluginPaths[_0xc04d[366]](filePath);
        }
      } else {
        if (filePath !== _0xc04d[327]) {
          $[_0xc04d[52]](this, _0xc04d[331] + name, new Error(this, filePath));
        }
      }
    });
  };
})(jQuery, window);
