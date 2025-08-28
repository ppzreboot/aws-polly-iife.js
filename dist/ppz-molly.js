var PPzPolly = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/bowser/es5.js
  var require_es5 = __commonJS({
    "node_modules/bowser/es5.js"(exports, module) {
      !(function(e2, t2) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define([], t2) : "object" == typeof exports ? exports.bowser = t2() : e2.bowser = t2();
      })(exports, (function() {
        return (function(e2) {
          var t2 = {};
          function r2(i2) {
            if (t2[i2]) return t2[i2].exports;
            var n2 = t2[i2] = { i: i2, l: false, exports: {} };
            return e2[i2].call(n2.exports, n2, n2.exports, r2), n2.l = true, n2.exports;
          }
          return r2.m = e2, r2.c = t2, r2.d = function(e3, t3, i2) {
            r2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: i2 });
          }, r2.r = function(e3) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
          }, r2.t = function(e3, t3) {
            if (1 & t3 && (e3 = r2(e3)), 8 & t3) return e3;
            if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule) return e3;
            var i2 = /* @__PURE__ */ Object.create(null);
            if (r2.r(i2), Object.defineProperty(i2, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3) for (var n2 in e3) r2.d(i2, n2, function(t4) {
              return e3[t4];
            }.bind(null, n2));
            return i2;
          }, r2.n = function(e3) {
            var t3 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return r2.d(t3, "a", t3), t3;
          }, r2.o = function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }, r2.p = "", r2(r2.s = 90);
        })({ 17: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var i2 = r2(18), n2 = (function() {
            function e3() {
            }
            return e3.getFirstMatch = function(e4, t3) {
              var r3 = t3.match(e4);
              return r3 && r3.length > 0 && r3[1] || "";
            }, e3.getSecondMatch = function(e4, t3) {
              var r3 = t3.match(e4);
              return r3 && r3.length > 1 && r3[2] || "";
            }, e3.matchAndReturnConst = function(e4, t3, r3) {
              if (e4.test(t3)) return r3;
            }, e3.getWindowsVersionName = function(e4) {
              switch (e4) {
                case "NT":
                  return "NT";
                case "XP":
                  return "XP";
                case "NT 5.0":
                  return "2000";
                case "NT 5.1":
                  return "XP";
                case "NT 5.2":
                  return "2003";
                case "NT 6.0":
                  return "Vista";
                case "NT 6.1":
                  return "7";
                case "NT 6.2":
                  return "8";
                case "NT 6.3":
                  return "8.1";
                case "NT 10.0":
                  return "10";
                default:
                  return;
              }
            }, e3.getMacOSVersionName = function(e4) {
              var t3 = e4.split(".").splice(0, 2).map((function(e5) {
                return parseInt(e5, 10) || 0;
              }));
              if (t3.push(0), 10 === t3[0]) switch (t3[1]) {
                case 5:
                  return "Leopard";
                case 6:
                  return "Snow Leopard";
                case 7:
                  return "Lion";
                case 8:
                  return "Mountain Lion";
                case 9:
                  return "Mavericks";
                case 10:
                  return "Yosemite";
                case 11:
                  return "El Capitan";
                case 12:
                  return "Sierra";
                case 13:
                  return "High Sierra";
                case 14:
                  return "Mojave";
                case 15:
                  return "Catalina";
                default:
                  return;
              }
            }, e3.getAndroidVersionName = function(e4) {
              var t3 = e4.split(".").splice(0, 2).map((function(e5) {
                return parseInt(e5, 10) || 0;
              }));
              if (t3.push(0), !(1 === t3[0] && t3[1] < 5)) return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
            }, e3.getVersionPrecision = function(e4) {
              return e4.split(".").length;
            }, e3.compareVersions = function(t3, r3, i3) {
              void 0 === i3 && (i3 = false);
              var n3 = e3.getVersionPrecision(t3), s2 = e3.getVersionPrecision(r3), a2 = Math.max(n3, s2), o2 = 0, u2 = e3.map([t3, r3], (function(t4) {
                var r4 = a2 - e3.getVersionPrecision(t4), i4 = t4 + new Array(r4 + 1).join(".0");
                return e3.map(i4.split("."), (function(e4) {
                  return new Array(20 - e4.length).join("0") + e4;
                })).reverse();
              }));
              for (i3 && (o2 = a2 - Math.min(n3, s2)), a2 -= 1; a2 >= o2; ) {
                if (u2[0][a2] > u2[1][a2]) return 1;
                if (u2[0][a2] === u2[1][a2]) {
                  if (a2 === o2) return 0;
                  a2 -= 1;
                } else if (u2[0][a2] < u2[1][a2]) return -1;
              }
            }, e3.map = function(e4, t3) {
              var r3, i3 = [];
              if (Array.prototype.map) return Array.prototype.map.call(e4, t3);
              for (r3 = 0; r3 < e4.length; r3 += 1) i3.push(t3(e4[r3]));
              return i3;
            }, e3.find = function(e4, t3) {
              var r3, i3;
              if (Array.prototype.find) return Array.prototype.find.call(e4, t3);
              for (r3 = 0, i3 = e4.length; r3 < i3; r3 += 1) {
                var n3 = e4[r3];
                if (t3(n3, r3)) return n3;
              }
            }, e3.assign = function(e4) {
              for (var t3, r3, i3 = e4, n3 = arguments.length, s2 = new Array(n3 > 1 ? n3 - 1 : 0), a2 = 1; a2 < n3; a2++) s2[a2 - 1] = arguments[a2];
              if (Object.assign) return Object.assign.apply(Object, [e4].concat(s2));
              var o2 = function() {
                var e5 = s2[t3];
                "object" == typeof e5 && null !== e5 && Object.keys(e5).forEach((function(t4) {
                  i3[t4] = e5[t4];
                }));
              };
              for (t3 = 0, r3 = s2.length; t3 < r3; t3 += 1) o2();
              return e4;
            }, e3.getBrowserAlias = function(e4) {
              return i2.BROWSER_ALIASES_MAP[e4];
            }, e3.getBrowserTypeByAlias = function(e4) {
              return i2.BROWSER_MAP[e4] || "";
            }, e3;
          })();
          t2.default = n2, e2.exports = t2.default;
        }, 18: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0;
          t2.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", "Pale Moon": "pale_moon", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
          t2.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", pale_moon: "Pale Moon", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
          t2.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv", bot: "bot" };
          t2.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
          t2.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
        }, 90: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var i2, n2 = (i2 = r2(91)) && i2.__esModule ? i2 : { default: i2 }, s2 = r2(18);
          function a2(e3, t3) {
            for (var r3 = 0; r3 < t3.length; r3++) {
              var i3 = t3[r3];
              i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(e3, i3.key, i3);
            }
          }
          var o2 = (function() {
            function e3() {
            }
            var t3, r3, i3;
            return e3.getParser = function(e4, t4) {
              if (void 0 === t4 && (t4 = false), "string" != typeof e4) throw new Error("UserAgent should be a string");
              return new n2.default(e4, t4);
            }, e3.parse = function(e4) {
              return new n2.default(e4).getResult();
            }, t3 = e3, i3 = [{ key: "BROWSER_MAP", get: function() {
              return s2.BROWSER_MAP;
            } }, { key: "ENGINE_MAP", get: function() {
              return s2.ENGINE_MAP;
            } }, { key: "OS_MAP", get: function() {
              return s2.OS_MAP;
            } }, { key: "PLATFORMS_MAP", get: function() {
              return s2.PLATFORMS_MAP;
            } }], (r3 = null) && a2(t3.prototype, r3), i3 && a2(t3, i3), e3;
          })();
          t2.default = o2, e2.exports = t2.default;
        }, 91: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var i2 = u2(r2(92)), n2 = u2(r2(93)), s2 = u2(r2(94)), a2 = u2(r2(95)), o2 = u2(r2(17));
          function u2(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          var d2 = (function() {
            function e3(e4, t4) {
              if (void 0 === t4 && (t4 = false), null == e4 || "" === e4) throw new Error("UserAgent parameter can't be empty");
              this._ua = e4, this.parsedResult = {}, true !== t4 && this.parse();
            }
            var t3 = e3.prototype;
            return t3.getUA = function() {
              return this._ua;
            }, t3.test = function(e4) {
              return e4.test(this._ua);
            }, t3.parseBrowser = function() {
              var e4 = this;
              this.parsedResult.browser = {};
              var t4 = o2.default.find(i2.default, (function(t5) {
                if ("function" == typeof t5.test) return t5.test(e4);
                if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                  return e4.test(t6);
                }));
                throw new Error("Browser's test function is not valid");
              }));
              return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
            }, t3.getBrowser = function() {
              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
            }, t3.getBrowserName = function(e4) {
              return e4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
            }, t3.getBrowserVersion = function() {
              return this.getBrowser().version;
            }, t3.getOS = function() {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }, t3.parseOS = function() {
              var e4 = this;
              this.parsedResult.os = {};
              var t4 = o2.default.find(n2.default, (function(t5) {
                if ("function" == typeof t5.test) return t5.test(e4);
                if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                  return e4.test(t6);
                }));
                throw new Error("Browser's test function is not valid");
              }));
              return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
            }, t3.getOSName = function(e4) {
              var t4 = this.getOS().name;
              return e4 ? String(t4).toLowerCase() || "" : t4 || "";
            }, t3.getOSVersion = function() {
              return this.getOS().version;
            }, t3.getPlatform = function() {
              return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
            }, t3.getPlatformType = function(e4) {
              void 0 === e4 && (e4 = false);
              var t4 = this.getPlatform().type;
              return e4 ? String(t4).toLowerCase() || "" : t4 || "";
            }, t3.parsePlatform = function() {
              var e4 = this;
              this.parsedResult.platform = {};
              var t4 = o2.default.find(s2.default, (function(t5) {
                if ("function" == typeof t5.test) return t5.test(e4);
                if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                  return e4.test(t6);
                }));
                throw new Error("Browser's test function is not valid");
              }));
              return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
            }, t3.getEngine = function() {
              return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
            }, t3.getEngineName = function(e4) {
              return e4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
            }, t3.parseEngine = function() {
              var e4 = this;
              this.parsedResult.engine = {};
              var t4 = o2.default.find(a2.default, (function(t5) {
                if ("function" == typeof t5.test) return t5.test(e4);
                if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                  return e4.test(t6);
                }));
                throw new Error("Browser's test function is not valid");
              }));
              return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
            }, t3.parse = function() {
              return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
            }, t3.getResult = function() {
              return o2.default.assign({}, this.parsedResult);
            }, t3.satisfies = function(e4) {
              var t4 = this, r3 = {}, i3 = 0, n3 = {}, s3 = 0;
              if (Object.keys(e4).forEach((function(t5) {
                var a4 = e4[t5];
                "string" == typeof a4 ? (n3[t5] = a4, s3 += 1) : "object" == typeof a4 && (r3[t5] = a4, i3 += 1);
              })), i3 > 0) {
                var a3 = Object.keys(r3), u3 = o2.default.find(a3, (function(e5) {
                  return t4.isOS(e5);
                }));
                if (u3) {
                  var d3 = this.satisfies(r3[u3]);
                  if (void 0 !== d3) return d3;
                }
                var c2 = o2.default.find(a3, (function(e5) {
                  return t4.isPlatform(e5);
                }));
                if (c2) {
                  var f2 = this.satisfies(r3[c2]);
                  if (void 0 !== f2) return f2;
                }
              }
              if (s3 > 0) {
                var l2 = Object.keys(n3), h2 = o2.default.find(l2, (function(e5) {
                  return t4.isBrowser(e5, true);
                }));
                if (void 0 !== h2) return this.compareVersion(n3[h2]);
              }
            }, t3.isBrowser = function(e4, t4) {
              void 0 === t4 && (t4 = false);
              var r3 = this.getBrowserName().toLowerCase(), i3 = e4.toLowerCase(), n3 = o2.default.getBrowserTypeByAlias(i3);
              return t4 && n3 && (i3 = n3.toLowerCase()), i3 === r3;
            }, t3.compareVersion = function(e4) {
              var t4 = [0], r3 = e4, i3 = false, n3 = this.getBrowserVersion();
              if ("string" == typeof n3) return ">" === e4[0] || "<" === e4[0] ? (r3 = e4.substr(1), "=" === e4[1] ? (i3 = true, r3 = e4.substr(2)) : t4 = [], ">" === e4[0] ? t4.push(1) : t4.push(-1)) : "=" === e4[0] ? r3 = e4.substr(1) : "~" === e4[0] && (i3 = true, r3 = e4.substr(1)), t4.indexOf(o2.default.compareVersions(n3, r3, i3)) > -1;
            }, t3.isOS = function(e4) {
              return this.getOSName(true) === String(e4).toLowerCase();
            }, t3.isPlatform = function(e4) {
              return this.getPlatformType(true) === String(e4).toLowerCase();
            }, t3.isEngine = function(e4) {
              return this.getEngineName(true) === String(e4).toLowerCase();
            }, t3.is = function(e4, t4) {
              return void 0 === t4 && (t4 = false), this.isBrowser(e4, t4) || this.isOS(e4) || this.isPlatform(e4);
            }, t3.some = function(e4) {
              var t4 = this;
              return void 0 === e4 && (e4 = []), e4.some((function(e5) {
                return t4.is(e5);
              }));
            }, e3;
          })();
          t2.default = d2, e2.exports = t2.default;
        }, 92: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 };
          var s2 = /version\/(\d+(\.?_?\d+)+)/i, a2 = [{ test: [/googlebot/i], describe: function(e3) {
            var t3 = { name: "Googlebot" }, r3 = n2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/opera/i], describe: function(e3) {
            var t3 = { name: "Opera" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/opr\/|opios/i], describe: function(e3) {
            var t3 = { name: "Opera" }, r3 = n2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/SamsungBrowser/i], describe: function(e3) {
            var t3 = { name: "Samsung Internet for Android" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/Whale/i], describe: function(e3) {
            var t3 = { name: "NAVER Whale Browser" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/PaleMoon/i], describe: function(e3) {
            var t3 = { name: "Pale Moon" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/MZBrowser/i], describe: function(e3) {
            var t3 = { name: "MZ Browser" }, r3 = n2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/focus/i], describe: function(e3) {
            var t3 = { name: "Focus" }, r3 = n2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/swing/i], describe: function(e3) {
            var t3 = { name: "Swing" }, r3 = n2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/coast/i], describe: function(e3) {
            var t3 = { name: "Opera Coast" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e3) {
            var t3 = { name: "Opera Touch" }, r3 = n2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/yabrowser/i], describe: function(e3) {
            var t3 = { name: "Yandex Browser" }, r3 = n2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/ucbrowser/i], describe: function(e3) {
            var t3 = { name: "UC Browser" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/Maxthon|mxios/i], describe: function(e3) {
            var t3 = { name: "Maxthon" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/epiphany/i], describe: function(e3) {
            var t3 = { name: "Epiphany" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/puffin/i], describe: function(e3) {
            var t3 = { name: "Puffin" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/sleipnir/i], describe: function(e3) {
            var t3 = { name: "Sleipnir" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/k-meleon/i], describe: function(e3) {
            var t3 = { name: "K-Meleon" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/micromessenger/i], describe: function(e3) {
            var t3 = { name: "WeChat" }, r3 = n2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/qqbrowser/i], describe: function(e3) {
            var t3 = { name: /qqbrowserlite/i.test(e3) ? "QQ Browser Lite" : "QQ Browser" }, r3 = n2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/msie|trident/i], describe: function(e3) {
            var t3 = { name: "Internet Explorer" }, r3 = n2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/\sedg\//i], describe: function(e3) {
            var t3 = { name: "Microsoft Edge" }, r3 = n2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/edg([ea]|ios)/i], describe: function(e3) {
            var t3 = { name: "Microsoft Edge" }, r3 = n2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/vivaldi/i], describe: function(e3) {
            var t3 = { name: "Vivaldi" }, r3 = n2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/seamonkey/i], describe: function(e3) {
            var t3 = { name: "SeaMonkey" }, r3 = n2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/sailfish/i], describe: function(e3) {
            var t3 = { name: "Sailfish" }, r3 = n2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/silk/i], describe: function(e3) {
            var t3 = { name: "Amazon Silk" }, r3 = n2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/phantom/i], describe: function(e3) {
            var t3 = { name: "PhantomJS" }, r3 = n2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/slimerjs/i], describe: function(e3) {
            var t3 = { name: "SlimerJS" }, r3 = n2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
            var t3 = { name: "BlackBerry" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
            var t3 = { name: "WebOS Browser" }, r3 = n2.default.getFirstMatch(s2, e3) || n2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/bada/i], describe: function(e3) {
            var t3 = { name: "Bada" }, r3 = n2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/tizen/i], describe: function(e3) {
            var t3 = { name: "Tizen" }, r3 = n2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/qupzilla/i], describe: function(e3) {
            var t3 = { name: "QupZilla" }, r3 = n2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e3) {
            var t3 = { name: "Firefox" }, r3 = n2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/electron/i], describe: function(e3) {
            var t3 = { name: "Electron" }, r3 = n2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/MiuiBrowser/i], describe: function(e3) {
            var t3 = { name: "Miui" }, r3 = n2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/chromium/i], describe: function(e3) {
            var t3 = { name: "Chromium" }, r3 = n2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/chrome|crios|crmo/i], describe: function(e3) {
            var t3 = { name: "Chrome" }, r3 = n2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/GSA/i], describe: function(e3) {
            var t3 = { name: "Google Search" }, r3 = n2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: function(e3) {
            var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
            return t3 && r3;
          }, describe: function(e3) {
            var t3 = { name: "Android Browser" }, r3 = n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/playstation 4/i], describe: function(e3) {
            var t3 = { name: "PlayStation 4" }, r3 = n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/safari|applewebkit/i], describe: function(e3) {
            var t3 = { name: "Safari" }, r3 = n2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/.*/i], describe: function(e3) {
            var t3 = -1 !== e3.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return { name: n2.default.getFirstMatch(t3, e3), version: n2.default.getSecondMatch(t3, e3) };
          } }];
          t2.default = a2, e2.exports = t2.default;
        }, 93: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, s2 = r2(18);
          var a2 = [{ test: [/Roku\/DVP/], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e3);
            return { name: s2.OS_MAP.Roku, version: t3 };
          } }, { test: [/windows phone/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.WindowsPhone, version: t3 };
          } }, { test: [/windows /i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e3), r3 = n2.default.getWindowsVersionName(t3);
            return { name: s2.OS_MAP.Windows, version: t3, versionName: r3 };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e3) {
            var t3 = { name: s2.OS_MAP.iOS }, r3 = n2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/macintosh/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e3).replace(/[_\s]/g, "."), r3 = n2.default.getMacOSVersionName(t3), i3 = { name: s2.OS_MAP.MacOS, version: t3 };
            return r3 && (i3.versionName = r3), i3;
          } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e3).replace(/[_\s]/g, ".");
            return { name: s2.OS_MAP.iOS, version: t3 };
          } }, { test: function(e3) {
            var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
            return t3 && r3;
          }, describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e3), r3 = n2.default.getAndroidVersionName(t3), i3 = { name: s2.OS_MAP.Android, version: t3 };
            return r3 && (i3.versionName = r3), i3;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e3), r3 = { name: s2.OS_MAP.WebOS };
            return t3 && t3.length && (r3.version = t3), r3;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e3) || n2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e3) || n2.default.getFirstMatch(/\bbb(\d+)/i, e3);
            return { name: s2.OS_MAP.BlackBerry, version: t3 };
          } }, { test: [/bada/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.Bada, version: t3 };
          } }, { test: [/tizen/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.Tizen, version: t3 };
          } }, { test: [/linux/i], describe: function() {
            return { name: s2.OS_MAP.Linux };
          } }, { test: [/CrOS/], describe: function() {
            return { name: s2.OS_MAP.ChromeOS };
          } }, { test: [/PlayStation 4/], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.PlayStation4, version: t3 };
          } }];
          t2.default = a2, e2.exports = t2.default;
        }, 94: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, s2 = r2(18);
          var a2 = [{ test: [/googlebot/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.bot, vendor: "Google" };
          } }, { test: [/huawei/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/(can-l01)/i, e3) && "Nova", r3 = { type: s2.PLATFORMS_MAP.mobile, vendor: "Huawei" };
            return t3 && (r3.model = t3), r3;
          } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Nexus" };
          } }, { test: [/ipad/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/kftt build/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
          } }, { test: [/silk/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon" };
          } }, { test: [/tablet(?! pc)/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet };
          } }, { test: function(e3) {
            var t3 = e3.test(/ipod|iphone/i), r3 = e3.test(/like (ipod|iphone)/i);
            return t3 && !r3;
          }, describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/(ipod|iphone)/i, e3);
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
          } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "Nexus" };
          } }, { test: [/Nokia/i], describe: function(e3) {
            var t3 = n2.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, e3), r3 = { type: s2.PLATFORMS_MAP.mobile, vendor: "Nokia" };
            return t3 && (r3.model = t3), r3;
          } }, { test: [/[^-]mobi/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile };
          } }, { test: function(e3) {
            return "blackberry" === e3.getBrowserName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
          } }, { test: function(e3) {
            return "bada" === e3.getBrowserName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile };
          } }, { test: function(e3) {
            return "windows phone" === e3.getBrowserName();
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
          } }, { test: function(e3) {
            var t3 = Number(String(e3.getOSVersion()).split(".")[0]);
            return "android" === e3.getOSName(true) && t3 >= 3;
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet };
          } }, { test: function(e3) {
            return "android" === e3.getOSName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile };
          } }, { test: function(e3) {
            return "macos" === e3.getOSName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.desktop, vendor: "Apple" };
          } }, { test: function(e3) {
            return "windows" === e3.getOSName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.desktop };
          } }, { test: function(e3) {
            return "linux" === e3.getOSName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.desktop };
          } }, { test: function(e3) {
            return "playstation 4" === e3.getOSName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.tv };
          } }, { test: function(e3) {
            return "roku" === e3.getOSName(true);
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.tv };
          } }];
          t2.default = a2, e2.exports = t2.default;
        }, 95: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, s2 = r2(18);
          var a2 = [{ test: function(e3) {
            return "microsoft edge" === e3.getBrowserName(true);
          }, describe: function(e3) {
            if (/\sedg\//i.test(e3)) return { name: s2.ENGINE_MAP.Blink };
            var t3 = n2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e3);
            return { name: s2.ENGINE_MAP.EdgeHTML, version: t3 };
          } }, { test: [/trident/i], describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.Trident }, r3 = n2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: function(e3) {
            return e3.test(/presto/i);
          }, describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.Presto }, r3 = n2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: function(e3) {
            var t3 = e3.test(/gecko/i), r3 = e3.test(/like gecko/i);
            return t3 && !r3;
          }, describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.Gecko }, r3 = n2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
            return { name: s2.ENGINE_MAP.Blink };
          } }, { test: [/(apple)?webkit/i], describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.WebKit }, r3 = n2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }];
          t2.default = a2, e2.exports = t2.default;
        } });
      }));
    }
  });

  // mod.ts
  var mod_exports = {};
  __export(mod_exports, {
    PollyClient: () => PollyClient,
    SynthesizeSpeechCommand: () => SynthesizeSpeechCommand
  });

  // node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
  var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    return {
      setHttpHandler(handler) {
        runtimeConfig.httpHandler = handler;
      },
      httpHandler() {
        return runtimeConfig.httpHandler;
      },
      updateHttpClientConfig(key, value) {
        runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
      },
      httpHandlerConfigs() {
        return runtimeConfig.httpHandler.httpHandlerConfigs();
      }
    };
  };
  var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
      httpHandler: httpHandlerExtensionConfiguration.httpHandler()
    };
  };

  // node_modules/@smithy/types/dist-es/auth/auth.js
  var HttpAuthLocation;
  (function(HttpAuthLocation2) {
    HttpAuthLocation2["HEADER"] = "header";
    HttpAuthLocation2["QUERY"] = "query";
  })(HttpAuthLocation || (HttpAuthLocation = {}));

  // node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
  var HttpApiKeyAuthLocation;
  (function(HttpApiKeyAuthLocation2) {
    HttpApiKeyAuthLocation2["HEADER"] = "header";
    HttpApiKeyAuthLocation2["QUERY"] = "query";
  })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

  // node_modules/@smithy/types/dist-es/endpoint.js
  var EndpointURLScheme;
  (function(EndpointURLScheme2) {
    EndpointURLScheme2["HTTP"] = "http";
    EndpointURLScheme2["HTTPS"] = "https";
  })(EndpointURLScheme || (EndpointURLScheme = {}));

  // node_modules/@smithy/types/dist-es/extensions/checksum.js
  var AlgorithmId;
  (function(AlgorithmId2) {
    AlgorithmId2["MD5"] = "md5";
    AlgorithmId2["CRC32"] = "crc32";
    AlgorithmId2["CRC32C"] = "crc32c";
    AlgorithmId2["SHA1"] = "sha1";
    AlgorithmId2["SHA256"] = "sha256";
  })(AlgorithmId || (AlgorithmId = {}));

  // node_modules/@smithy/types/dist-es/http.js
  var FieldPosition;
  (function(FieldPosition2) {
    FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
    FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
  })(FieldPosition || (FieldPosition = {}));

  // node_modules/@smithy/types/dist-es/middleware.js
  var SMITHY_CONTEXT_KEY = "__smithy_context";

  // node_modules/@smithy/types/dist-es/profile.js
  var IniSectionType;
  (function(IniSectionType2) {
    IniSectionType2["PROFILE"] = "profile";
    IniSectionType2["SSO_SESSION"] = "sso-session";
    IniSectionType2["SERVICES"] = "services";
  })(IniSectionType || (IniSectionType = {}));

  // node_modules/@smithy/types/dist-es/transfer.js
  var RequestHandlerProtocol;
  (function(RequestHandlerProtocol2) {
    RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
  })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

  // node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  var HttpRequest = class _HttpRequest {
    constructor(options) {
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
      this.username = options.username;
      this.password = options.password;
      this.fragment = options.fragment;
    }
    static clone(request) {
      const cloned = new _HttpRequest({
        ...request,
        headers: { ...request.headers }
      });
      if (cloned.query) {
        cloned.query = cloneQuery(cloned.query);
      }
      return cloned;
    }
    static isInstance(request) {
      if (!request) {
        return false;
      }
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      return _HttpRequest.clone(this);
    }
  };
  function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
  }

  // node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse = class {
    constructor(options) {
      this.statusCode = options.statusCode;
      this.reason = options.reason;
      this.headers = options.headers || {};
      this.body = options.body;
    }
    static isInstance(response) {
      if (!response)
        return false;
      const resp = response;
      return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
  };

  // node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
  function resolveHostHeaderConfig(input) {
    return input;
  }
  var hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!HttpRequest.isInstance(args.request))
      return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
      delete request.headers["host"];
      request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    } else if (!request.headers["host"]) {
      let host = request.hostname;
      if (request.port != null)
        host += `:${request.port}`;
      request.headers["host"] = host;
    }
    return next(args);
  };
  var hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true
  };
  var getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
  var loggerMiddleware = () => (next, context) => async (args) => {
    try {
      const response = await next(args);
      const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
      const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
      const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
      const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
      const { $metadata, ...outputWithoutMetadata } = response.output;
      logger2?.info?.({
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        output: outputFilterSensitiveLog(outputWithoutMetadata),
        metadata: $metadata
      });
      return response;
    } catch (error) {
      const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
      const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
      const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
      logger2?.error?.({
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        error,
        metadata: error.$metadata
      });
      throw error;
    }
  };
  var loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true
  };
  var getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
  var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
  var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
  var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
  var recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!HttpRequest.isInstance(request) || options.runtime !== "node") {
      return next(args);
    }
    const traceIdHeader = Object.keys(request.headers ?? {}).find((h2) => h2.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ?? TRACE_ID_HEADER_NAME;
    if (request.headers.hasOwnProperty(traceIdHeader)) {
      return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
      request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
      ...args,
      request
    });
  };
  var addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low"
  };
  var getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
  var getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

  // node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
  var normalizeProvider = (input) => {
    if (typeof input === "function")
      return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
  };

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
  var resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
    if (!authSchemePreference || authSchemePreference.length === 0) {
      return candidateAuthOptions;
    }
    const preferredAuthOptions = [];
    for (const preferredSchemeName of authSchemePreference) {
      for (const candidateAuthOption of candidateAuthOptions) {
        const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
        if (candidateAuthSchemeName === preferredSchemeName) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
    }
    for (const candidateAuthOption of candidateAuthOptions) {
      if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
    return preferredAuthOptions;
  };

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
  function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map2 = /* @__PURE__ */ new Map();
    for (const scheme of httpAuthSchemes) {
      map2.set(scheme.schemeId, scheme);
    }
    return map2;
  }
  var httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
    const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = getSmithyContext(context);
    const failureReasons = [];
    for (const option of resolvedOptions) {
      const scheme = authSchemes.get(option.schemeId);
      if (!scheme) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
        continue;
      }
      const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
      if (!identityProvider) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
        continue;
      }
      const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
      option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
      option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
      smithyContext.selectedHttpAuthScheme = {
        httpAuthOption: option,
        identity: await identityProvider(option.identityProperties),
        signer: scheme.signer
      };
      break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
      throw new Error(failureReasons.join("\n"));
    }
    return next(args);
  };

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
  var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  };
  var getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
        httpAuthSchemeParametersProvider,
        identityProviderConfigProvider
      }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
  var deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
      const parsed = await deserializer(response, options);
      return {
        response,
        output: parsed
      };
    } catch (error) {
      Object.defineProperty(error, "$response", {
        value: response
      });
      if (!("$metadata" in error)) {
        const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
        try {
          error.message += "\n  " + hint;
        } catch (e2) {
          if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
            console.warn(hint);
          } else {
            context.logger?.warn?.(hint);
          }
        }
        if (typeof error.$responseBodyText !== "undefined") {
          if (error.$response) {
            error.$response.body = error.$responseBodyText;
          }
        }
        try {
          if (HttpResponse.isInstance(response)) {
            const { headers = {} } = response;
            const headerEntries = Object.entries(headers);
            error.$metadata = {
              httpStatusCode: response.statusCode,
              requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
              extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
              cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
            };
          }
        } catch (e2) {
        }
      }
      throw error;
    }
  };
  var findHeader = (pattern, headers) => {
    return (headers.find(([k2]) => {
      return k2.match(pattern);
    }) || [void 0, void 0])[1];
  };

  // node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
  var serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpointConfig = options;
    const endpoint = context.endpointV2?.url && endpointConfig.urlParser ? async () => endpointConfig.urlParser(context.endpointV2.url) : endpointConfig.endpoint;
    if (!endpoint) {
      throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
      ...args,
      request
    });
  };

  // node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
  var deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true
  };
  var serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true
  };
  function getSerdePlugin(config, serializer, deserializer) {
    return {
      applyToStack: (commandStack) => {
        commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
        commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
      }
    };
  }

  // node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
  var defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
  };
  var defaultSuccessHandler = (httpResponse, signingProperties) => {
  };
  var httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!HttpRequest.isInstance(args.request)) {
      return next(args);
    }
    const smithyContext = getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
      throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
    const output = await next({
      ...args,
      request: await signer.sign(args.request, identity, signingProperties)
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
  };

  // node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
  var httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware"
  };
  var getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
    }
  });

  // node_modules/@smithy/core/dist-es/normalizeProvider.js
  var normalizeProvider2 = (input) => {
    if (typeof input === "function")
      return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
  };

  // node_modules/@smithy/util-base64/dist-es/constants.browser.js
  var alphabetByEncoding = {};
  var alphabetByValue = new Array(64);
  for (let i2 = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i2 + start <= limit; i2++) {
    const char = String.fromCharCode(i2 + start);
    alphabetByEncoding[char] = i2;
    alphabetByValue[i2] = char;
  }
  for (let i2 = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i2 + start <= limit; i2++) {
    const char = String.fromCharCode(i2 + start);
    const index = i2 + 26;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
  }
  for (let i2 = 0; i2 < 10; i2++) {
    alphabetByEncoding[i2.toString(10)] = i2 + 52;
    const char = i2.toString(10);
    const index = i2 + 52;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
  }
  alphabetByEncoding["+"] = 62;
  alphabetByValue[62] = "+";
  alphabetByEncoding["/"] = 63;
  alphabetByValue[63] = "/";
  var bitsPerLetter = 6;
  var bitsPerByte = 8;
  var maxLetterValue = 63;

  // node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
  var fromBase64 = (input) => {
    let totalByteLength = input.length / 4 * 3;
    if (input.slice(-2) === "==") {
      totalByteLength -= 2;
    } else if (input.slice(-1) === "=") {
      totalByteLength--;
    }
    const out = new ArrayBuffer(totalByteLength);
    const dataView = new DataView(out);
    for (let i2 = 0; i2 < input.length; i2 += 4) {
      let bits = 0;
      let bitLength = 0;
      for (let j2 = i2, limit = i2 + 3; j2 <= limit; j2++) {
        if (input[j2] !== "=") {
          if (!(input[j2] in alphabetByEncoding)) {
            throw new TypeError(`Invalid character ${input[j2]} in base64 string.`);
          }
          bits |= alphabetByEncoding[input[j2]] << (limit - j2) * bitsPerLetter;
          bitLength += bitsPerLetter;
        } else {
          bits >>= bitsPerLetter;
        }
      }
      const chunkOffset = i2 / 4 * 3;
      bits >>= bitLength % bitsPerByte;
      const byteLength = Math.floor(bitLength / bitsPerByte);
      for (let k2 = 0; k2 < byteLength; k2++) {
        const offset = (byteLength - k2 - 1) * bitsPerByte;
        dataView.setUint8(chunkOffset + k2, (bits & 255 << offset) >> offset);
      }
    }
    return new Uint8Array(out);
  };

  // node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf8 = (input) => new TextEncoder().encode(input);

  // node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
  var toUint8Array = (data) => {
    if (typeof data === "string") {
      return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  };

  // node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
  var toUtf8 = (input) => {
    if (typeof input === "string") {
      return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
      throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return new TextDecoder("utf-8").decode(input);
  };

  // node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
  function toBase64(_input) {
    let input;
    if (typeof _input === "string") {
      input = fromUtf8(_input);
    } else {
      input = _input;
    }
    const isArrayLike = typeof input === "object" && typeof input.length === "number";
    const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
    if (!isArrayLike && !isUint8Array) {
      throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    let str = "";
    for (let i2 = 0; i2 < input.length; i2 += 3) {
      let bits = 0;
      let bitLength = 0;
      for (let j2 = i2, limit = Math.min(i2 + 3, input.length); j2 < limit; j2++) {
        bits |= input[j2] << (limit - j2 - 1) * bitsPerByte;
        bitLength += bitsPerByte;
      }
      const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
      bits <<= bitClusterCount * bitsPerLetter - bitLength;
      for (let k2 = 1; k2 <= bitClusterCount; k2++) {
        const offset = (bitClusterCount - k2) * bitsPerLetter;
        str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
      }
      str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
  }

  // node_modules/@smithy/util-stream/dist-es/blob/transforms.js
  function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
      return toBase64(payload);
    }
    return toUtf8(payload);
  }
  function transformFromString(str, encoding) {
    if (encoding === "base64") {
      return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
    }
    return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
  }

  // node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
  var Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
      switch (typeof source) {
        case "string":
          return transformFromString(source, encoding);
        default:
          throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
      }
    }
    static mutate(source) {
      Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
      return source;
    }
    transformToString(encoding = "utf-8") {
      return transformToString(this, encoding);
    }
  };

  // node_modules/@smithy/util-stream/dist-es/stream-type-check.js
  var isReadableStream = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);

  // node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
  var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
  var hexEncode = (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`;

  // node_modules/@smithy/querystring-builder/dist-es/index.js
  function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
      const value = query[key];
      key = escapeUri(key);
      if (Array.isArray(value)) {
        for (let i2 = 0, iLen = value.length; i2 < iLen; i2++) {
          parts.push(`${key}=${escapeUri(value[i2])}`);
        }
      } else {
        let qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += `=${escapeUri(value)}`;
        }
        parts.push(qsEntry);
      }
    }
    return parts.join("&");
  }

  // node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
  function createRequest(url, requestOptions) {
    return new Request(url, requestOptions);
  }

  // node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
  function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
      if (timeoutInMs) {
        setTimeout(() => {
          const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
          timeoutError.name = "TimeoutError";
          reject(timeoutError);
        }, timeoutInMs);
      }
    });
  }

  // node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
  var keepAliveSupport = {
    supported: void 0
  };
  var FetchHttpHandler = class _FetchHttpHandler {
    static create(instanceOrOptions) {
      if (typeof instanceOrOptions?.handle === "function") {
        return instanceOrOptions;
      }
      return new _FetchHttpHandler(instanceOrOptions);
    }
    constructor(options) {
      if (typeof options === "function") {
        this.configProvider = options().then((opts) => opts || {});
      } else {
        this.config = options ?? {};
        this.configProvider = Promise.resolve(this.config);
      }
      if (keepAliveSupport.supported === void 0) {
        keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
      }
    }
    destroy() {
    }
    async handle(request, { abortSignal, requestTimeout: requestTimeout2 } = {}) {
      if (!this.config) {
        this.config = await this.configProvider;
      }
      const requestTimeoutInMs = requestTimeout2 ?? this.config.requestTimeout;
      const keepAlive = this.config.keepAlive === true;
      const credentials = this.config.credentials;
      if (abortSignal?.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        return Promise.reject(abortError);
      }
      let path = request.path;
      const queryString = buildQueryString(request.query || {});
      if (queryString) {
        path += `?${queryString}`;
      }
      if (request.fragment) {
        path += `#${request.fragment}`;
      }
      let auth = "";
      if (request.username != null || request.password != null) {
        const username = request.username ?? "";
        const password = request.password ?? "";
        auth = `${username}:${password}@`;
      }
      const { port, method } = request;
      const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
      const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
      const requestOptions = {
        body,
        headers: new Headers(request.headers),
        method,
        credentials
      };
      if (this.config?.cache) {
        requestOptions.cache = this.config.cache;
      }
      if (body) {
        requestOptions.duplex = "half";
      }
      if (typeof AbortController !== "undefined") {
        requestOptions.signal = abortSignal;
      }
      if (keepAliveSupport.supported) {
        requestOptions.keepalive = keepAlive;
      }
      if (typeof this.config.requestInit === "function") {
        Object.assign(requestOptions, this.config.requestInit(request));
      }
      let removeSignalEventListener = () => {
      };
      const fetchRequest = createRequest(url, requestOptions);
      const raceOfPromises = [
        fetch(fetchRequest).then((response) => {
          const fetchHeaders = response.headers;
          const transformedHeaders = {};
          for (const pair of fetchHeaders.entries()) {
            transformedHeaders[pair[0]] = pair[1];
          }
          const hasReadableStream = response.body != void 0;
          if (!hasReadableStream) {
            return response.blob().then((body2) => ({
              response: new HttpResponse({
                headers: transformedHeaders,
                reason: response.statusText,
                statusCode: response.status,
                body: body2
              })
            }));
          }
          return {
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: response.body
            })
          };
        }),
        requestTimeout(requestTimeoutInMs)
      ];
      if (abortSignal) {
        raceOfPromises.push(new Promise((resolve, reject) => {
          const onAbort = () => {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
          if (typeof abortSignal.addEventListener === "function") {
            const signal = abortSignal;
            signal.addEventListener("abort", onAbort, { once: true });
            removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
          } else {
            abortSignal.onabort = onAbort;
          }
        }));
      }
      return Promise.race(raceOfPromises).finally(removeSignalEventListener);
    }
    updateHttpClientConfig(key, value) {
      this.config = void 0;
      this.configProvider = this.configProvider.then((config) => {
        config[key] = value;
        return config;
      });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  };

  // node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
  var streamCollector = async (stream) => {
    if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
      if (Blob.prototype.arrayBuffer !== void 0) {
        return new Uint8Array(await stream.arrayBuffer());
      }
      return collectBlob(stream);
    }
    return collectStream(stream);
  };
  async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = fromBase64(base64);
    return new Uint8Array(arrayBuffer);
  }
  async function collectStream(stream) {
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    let length = 0;
    while (!isDone) {
      const { done, value } = await reader.read();
      if (value) {
        chunks.push(value);
        length += value.length;
      }
      isDone = done;
    }
    const collected = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
      collected.set(chunk, offset);
      offset += chunk.length;
    }
    return collected;
  }
  function readToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState !== 2) {
          return reject(new Error("Reader aborted too early"));
        }
        const result = reader.result ?? "";
        const commaIndex = result.indexOf(",");
        const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
        resolve(result.substring(dataOffset));
      };
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  // node_modules/@smithy/util-hex-encoding/dist-es/index.js
  var SHORT_TO_HEX = {};
  var HEX_TO_SHORT = {};
  for (let i2 = 0; i2 < 256; i2++) {
    let encodedByte = i2.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
      encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i2] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i2;
  }
  function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
      throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i2 = 0; i2 < encoded.length; i2 += 2) {
      const encodedByte = encoded.slice(i2, i2 + 2).toLowerCase();
      if (encodedByte in HEX_TO_SHORT) {
        out[i2 / 2] = HEX_TO_SHORT[encodedByte];
      } else {
        throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
      }
    }
    return out;
  }
  function toHex(bytes) {
    let out = "";
    for (let i2 = 0; i2 < bytes.byteLength; i2++) {
      out += SHORT_TO_HEX[bytes[i2]];
    }
    return out;
  }

  // node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
  var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
  var sdkStreamMixin = (stream) => {
    if (!isBlobInstance(stream) && !isReadableStream(stream)) {
      const name = stream?.__proto__?.constructor?.name || stream;
      throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      transformed = true;
      return await streamCollector(stream);
    };
    const blobToWebStream = (blob) => {
      if (typeof blob.stream !== "function") {
        throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
      }
      return blob.stream();
    };
    return Object.assign(stream, {
      transformToByteArray,
      transformToString: async (encoding) => {
        const buf = await transformToByteArray();
        if (encoding === "base64") {
          return toBase64(buf);
        } else if (encoding === "hex") {
          return toHex(buf);
        } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
          return toUtf8(buf);
        } else if (typeof TextDecoder === "function") {
          return new TextDecoder(encoding).decode(buf);
        } else {
          throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
        }
      },
      transformToWebStream: () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        if (isBlobInstance(stream)) {
          return blobToWebStream(stream);
        } else if (isReadableStream(stream)) {
          return stream;
        } else {
          throw new Error(`Cannot transform payload to web stream, got ${stream}`);
        }
      }
    });
  };
  var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;

  // node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
  var collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
      return Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
      return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return Uint8ArrayBlobAdapter.mutate(await fromContext);
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
  function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c2) {
      return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  // node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
  var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
  var expectLong = (value) => {
    if (value === null || value === void 0) {
      return void 0;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
      return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
  };
  var expectInt32 = (value) => expectSizedInt(value, 32);
  var expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== void 0 && castInt(expected, size) !== expected) {
      throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
  };
  var castInt = (value, size) => {
    switch (size) {
      case 32:
        return Int32Array.of(value)[0];
      case 16:
        return Int16Array.of(value)[0];
      case 8:
        return Int8Array.of(value)[0];
    }
  };
  var expectString = (value) => {
    if (value === null || value === void 0) {
      return void 0;
    }
    if (typeof value === "string") {
      return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
      logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
      return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
  };
  var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
  var parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
      throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
  };
  var strictParseInt32 = (value) => {
    if (typeof value === "string") {
      return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
  };
  var stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s2) => !s2.includes("stackTraceWarning")).join("\n");
  };
  var logger = {
    warn: console.warn
  };

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i2 = 0; i2 < 256; ++i2) {
    byteToHex.push((i2 + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i2 = 0; i2 < 16; ++i2) {
        buf[offset + i2] = rnds[i2];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
  var resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== void 0) {
      const labelValue = labelValueProvider();
      if (labelValue.length <= 0) {
        throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
      }
      resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
    } else {
      throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath2;
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
  function requestBuilder(input, context) {
    return new RequestBuilder(input, context);
  }
  var RequestBuilder = class {
    constructor(input, context) {
      this.input = input;
      this.context = context;
      this.query = {};
      this.method = "";
      this.headers = {};
      this.path = "";
      this.body = null;
      this.hostname = "";
      this.resolvePathStack = [];
    }
    async build() {
      const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
      this.path = basePath;
      for (const resolvePath of this.resolvePathStack) {
        resolvePath(this.path);
      }
      return new HttpRequest({
        protocol,
        hostname: this.hostname || hostname,
        port,
        method: this.method,
        path: this.path,
        query: this.query,
        body: this.body,
        headers: this.headers
      });
    }
    hn(hostname) {
      this.hostname = hostname;
      return this;
    }
    bp(uriLabel) {
      this.resolvePathStack.push((basePath) => {
        this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
      });
      return this;
    }
    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
      this.resolvePathStack.push((path) => {
        this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
      });
      return this;
    }
    h(headers) {
      this.headers = headers;
      return this;
    }
    q(query) {
      this.query = query;
      return this;
    }
    b(body) {
      this.body = body;
      return this;
    }
    m(method) {
      this.method = method;
      return this;
    }
  };

  // node_modules/@smithy/core/dist-es/setFeature.js
  function setFeature(context, feature, value) {
    if (!context.__smithy_context) {
      context.__smithy_context = {
        features: {}
      };
    } else if (!context.__smithy_context.features) {
      context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
  }

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
  var DefaultIdentityProviderConfig = class {
    constructor(config) {
      this.authSchemes = /* @__PURE__ */ new Map();
      for (const [key, value] of Object.entries(config)) {
        if (value !== void 0) {
          this.authSchemes.set(key, value);
        }
      }
    }
    getIdentityProvider(schemeId) {
      return this.authSchemes.get(schemeId);
    }
  };

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
  var createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
  var EXPIRATION_MS = 3e5;
  var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
  var doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
  var memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === void 0) {
      return void 0;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
      if (!pending) {
        pending = normalizedProvider(options);
      }
      try {
        resolved = await pending;
        hasResult = true;
        isConstant = false;
      } finally {
        pending = void 0;
      }
      return resolved;
    };
    if (isExpired === void 0) {
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        return resolved;
      };
    }
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      if (isConstant) {
        return resolved;
      }
      if (!requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired(resolved)) {
        await coalesceProvider(options);
        return resolved;
      }
      return resolved;
    };
  };

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
  var DEFAULT_UA_APP_ID = void 0;
  function isValidUserAgentAppId(appId) {
    if (appId === void 0) {
      return true;
    }
    return typeof appId === "string" && appId.length <= 50;
  }
  function resolveUserAgentConfig(input) {
    const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
    const { customUserAgent } = input;
    return Object.assign(input, {
      customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
      userAgentAppId: async () => {
        const appId = await normalizedAppIdProvider();
        if (!isValidUserAgentAppId(appId)) {
          const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
          if (typeof appId !== "string") {
            logger2?.warn("userAgentAppId must be a string or undefined.");
          } else if (appId.length > 50) {
            logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
          }
        }
        return appId;
      }
    });
  }

  // node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
  var EndpointCache = class {
    constructor({ size, params }) {
      this.data = /* @__PURE__ */ new Map();
      this.parameters = [];
      this.capacity = size ?? 50;
      if (params) {
        this.parameters = params;
      }
    }
    get(endpointParams, resolver) {
      const key = this.hash(endpointParams);
      if (key === false) {
        return resolver();
      }
      if (!this.data.has(key)) {
        if (this.data.size > this.capacity + 10) {
          const keys = this.data.keys();
          let i2 = 0;
          while (true) {
            const { value, done } = keys.next();
            this.data.delete(value);
            if (done || ++i2 > 10) {
              break;
            }
          }
        }
        this.data.set(key, resolver());
      }
      return this.data.get(key);
    }
    size() {
      return this.data.size;
    }
    hash(endpointParams) {
      let buffer = "";
      const { parameters } = this;
      if (parameters.length === 0) {
        return false;
      }
      for (const param of parameters) {
        const val = String(endpointParams[param] ?? "");
        if (val.includes("|;")) {
          return false;
        }
        buffer += val + "|;";
      }
      return buffer;
    }
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
  var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
  var isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");

  // node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
  var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
  var isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
      return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
      if (!isValidHostLabel(label)) {
        return false;
      }
    }
    return true;
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
  var customEndpointFunctions = {};

  // node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
  var debugId = "endpoints";

  // node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
  function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
      return input;
    }
    if ("ref" in input) {
      return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
      return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
  }

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
  var EndpointError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "EndpointError";
    }
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
  var booleanEquals = (value1, value2) => value1 === value2;

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
  var getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
      const squareBracketIndex = part.indexOf("[");
      if (squareBracketIndex !== -1) {
        if (part.indexOf("]") !== part.length - 1) {
          throw new EndpointError(`Path: '${path}' does not end with ']'`);
        }
        const arrayIndex = part.slice(squareBracketIndex + 1, -1);
        if (Number.isNaN(parseInt(arrayIndex))) {
          throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
        }
        if (squareBracketIndex !== 0) {
          pathList.push(part.slice(0, squareBracketIndex));
        }
        pathList.push(arrayIndex);
      } else {
        pathList.push(part);
      }
    }
    return pathList;
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
  var getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
      throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    } else if (Array.isArray(acc)) {
      return acc[parseInt(index)];
    }
    return acc[index];
  }, value);

  // node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
  var isSet = (value) => value != null;

  // node_modules/@smithy/util-endpoints/dist-es/lib/not.js
  var not = (value) => !value;

  // node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
  var DEFAULT_PORTS = {
    [EndpointURLScheme.HTTP]: 80,
    [EndpointURLScheme.HTTPS]: 443
  };
  var parseURL = (value) => {
    const whatwgURL = (() => {
      try {
        if (value instanceof URL) {
          return value;
        }
        if (typeof value === "object" && "hostname" in value) {
          const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
          const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
          url.search = Object.entries(query).map(([k2, v2]) => `${k2}=${v2}`).join("&");
          return url;
        }
        return new URL(value);
      } catch (error) {
        return null;
      }
    })();
    if (!whatwgURL) {
      console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
      return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
      return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(EndpointURLScheme).includes(scheme)) {
      return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
      scheme,
      authority,
      path: pathname,
      normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
      isIp
    };
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
  var stringEquals = (value1, value2) => value1 === value2;

  // node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
  var substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
      return null;
    }
    if (!reverse) {
      return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
  };

  // node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
  var uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`);

  // node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
  var endpointFunctions = {
    booleanEquals,
    getAttr,
    isSet,
    isValidHostLabel,
    not,
    parseURL,
    stringEquals,
    substring,
    uriEncode
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
  var evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
      ...options.endpointParams,
      ...options.referenceRecord
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
      const openingBraceIndex = template.indexOf("{", currentIndex);
      if (openingBraceIndex === -1) {
        evaluatedTemplateArr.push(template.slice(currentIndex));
        break;
      }
      evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
      const closingBraceIndex = template.indexOf("}", openingBraceIndex);
      if (closingBraceIndex === -1) {
        evaluatedTemplateArr.push(template.slice(openingBraceIndex));
        break;
      }
      if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
        evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
        currentIndex = closingBraceIndex + 2;
      }
      const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
      if (parameterName.includes("#")) {
        const [refName, attrName] = parameterName.split("#");
        evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
      } else {
        evaluatedTemplateArr.push(templateContext[parameterName]);
      }
      currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
  var getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
      ...options.endpointParams,
      ...options.referenceRecord
    };
    return referenceRecord[ref];
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
  var evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
      return evaluateTemplate(obj, options);
    } else if (obj["fn"]) {
      return callFunction(obj, options);
    } else if (obj["ref"]) {
      return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
  var callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
    const fnSegments = fn.split(".");
    if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
      return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
    }
    return endpointFunctions[fn](...evaluatedArgs);
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
  var evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
      throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(fnArgs, options);
    options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
    return {
      result: value === "" ? true : !!value,
      ...assign != null && { toAssign: { name: assign, value } }
    };
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
  var evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
      const { result, toAssign } = evaluateCondition(condition, {
        ...options,
        referenceRecord: {
          ...options.referenceRecord,
          ...conditionsReferenceRecord
        }
      });
      if (!result) {
        return { result };
      }
      if (toAssign) {
        conditionsReferenceRecord[toAssign.name] = toAssign.value;
        options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
      }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
  var getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
      const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
      if (typeof processedExpr !== "string") {
        throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
      }
      return processedExpr;
    })
  }), {});

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
  var getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
      return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
      case "string":
        return evaluateTemplate(property, options);
      case "object":
        if (property === null) {
          throw new EndpointError(`Unexpected endpoint property: ${property}`);
        }
        return getEndpointProperties(property, options);
      case "boolean":
        return property;
      default:
        throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
  var getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: getEndpointProperty(propertyVal, options)
  }), {});

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
  var getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
      try {
        return new URL(expression);
      } catch (error) {
        console.error(`Failed to construct URL with ${expression}`, error);
        throw error;
      }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
  var evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
      return;
    }
    const endpointRuleOptions = {
      ...options,
      referenceRecord: { ...options.referenceRecord, ...referenceRecord }
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
    return {
      ...headers != void 0 && {
        headers: getEndpointHeaders(headers, endpointRuleOptions)
      },
      ...properties != void 0 && {
        properties: getEndpointProperties(properties, endpointRuleOptions)
      },
      url: getEndpointUrl(url, endpointRuleOptions)
    };
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
  var evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
      return;
    }
    throw new EndpointError(evaluateExpression(error, "Error", {
      ...options,
      referenceRecord: { ...options.referenceRecord, ...referenceRecord }
    }));
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
  var evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
      return;
    }
    return evaluateRules(rules, {
      ...options,
      referenceRecord: { ...options.referenceRecord, ...referenceRecord }
    });
  };

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
  var evaluateRules = (rules, options) => {
    for (const rule of rules) {
      if (rule.type === "endpoint") {
        const endpointOrUndefined = evaluateEndpointRule(rule, options);
        if (endpointOrUndefined) {
          return endpointOrUndefined;
        }
      } else if (rule.type === "error") {
        evaluateErrorRule(rule, options);
      } else if (rule.type === "tree") {
        const endpointOrUndefined = evaluateTreeRule(rule, options);
        if (endpointOrUndefined) {
          return endpointOrUndefined;
        }
      } else {
        throw new EndpointError(`Unknown endpoint rule: ${rule}`);
      }
    }
    throw new EndpointError(`Rules evaluation failed`);
  };

  // node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
  var resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger: logger2 } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters).filter(([, v2]) => v2.default != null).map(([k2, v2]) => [k2, v2.default]);
    if (paramsWithDefault.length > 0) {
      for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
        endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
      }
    }
    const requiredParams = Object.entries(parameters).filter(([, v2]) => v2.required).map(([k2]) => k2);
    for (const requiredParam of requiredParams) {
      if (endpointParams[requiredParam] == null) {
        throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
      }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
    options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
  var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
      for (const label of value.split(".")) {
        if (!isVirtualHostableS3Bucket(label)) {
          return false;
        }
      }
      return true;
    }
    if (!isValidHostLabel(value)) {
      return false;
    }
    if (value.length < 3 || value.length > 63) {
      return false;
    }
    if (value !== value.toLowerCase()) {
      return false;
    }
    if (isIpAddress(value)) {
      return false;
    }
    return true;
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
  var ARN_DELIMITER = ":";
  var RESOURCE_DELIMITER = "/";
  var parseArn = (value) => {
    const segments = value.split(ARN_DELIMITER);
    if (segments.length < 6)
      return null;
    const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
    if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
      return null;
    const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
    return {
      partition: partition2,
      service,
      region,
      accountId,
      resourceId
    };
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
  var partitions_default = {
    partitions: [{
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-east-1",
        name: "aws",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
      regions: {
        "af-south-1": {
          description: "Africa (Cape Town)"
        },
        "ap-east-1": {
          description: "Asia Pacific (Hong Kong)"
        },
        "ap-east-2": {
          description: "Asia Pacific (Taipei)"
        },
        "ap-northeast-1": {
          description: "Asia Pacific (Tokyo)"
        },
        "ap-northeast-2": {
          description: "Asia Pacific (Seoul)"
        },
        "ap-northeast-3": {
          description: "Asia Pacific (Osaka)"
        },
        "ap-south-1": {
          description: "Asia Pacific (Mumbai)"
        },
        "ap-south-2": {
          description: "Asia Pacific (Hyderabad)"
        },
        "ap-southeast-1": {
          description: "Asia Pacific (Singapore)"
        },
        "ap-southeast-2": {
          description: "Asia Pacific (Sydney)"
        },
        "ap-southeast-3": {
          description: "Asia Pacific (Jakarta)"
        },
        "ap-southeast-4": {
          description: "Asia Pacific (Melbourne)"
        },
        "ap-southeast-5": {
          description: "Asia Pacific (Malaysia)"
        },
        "ap-southeast-7": {
          description: "Asia Pacific (Thailand)"
        },
        "aws-global": {
          description: "aws global region"
        },
        "ca-central-1": {
          description: "Canada (Central)"
        },
        "ca-west-1": {
          description: "Canada West (Calgary)"
        },
        "eu-central-1": {
          description: "Europe (Frankfurt)"
        },
        "eu-central-2": {
          description: "Europe (Zurich)"
        },
        "eu-north-1": {
          description: "Europe (Stockholm)"
        },
        "eu-south-1": {
          description: "Europe (Milan)"
        },
        "eu-south-2": {
          description: "Europe (Spain)"
        },
        "eu-west-1": {
          description: "Europe (Ireland)"
        },
        "eu-west-2": {
          description: "Europe (London)"
        },
        "eu-west-3": {
          description: "Europe (Paris)"
        },
        "il-central-1": {
          description: "Israel (Tel Aviv)"
        },
        "me-central-1": {
          description: "Middle East (UAE)"
        },
        "me-south-1": {
          description: "Middle East (Bahrain)"
        },
        "mx-central-1": {
          description: "Mexico (Central)"
        },
        "sa-east-1": {
          description: "South America (Sao Paulo)"
        },
        "us-east-1": {
          description: "US East (N. Virginia)"
        },
        "us-east-2": {
          description: "US East (Ohio)"
        },
        "us-west-1": {
          description: "US West (N. California)"
        },
        "us-west-2": {
          description: "US West (Oregon)"
        }
      }
    }, {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn",
        dualStackDnsSuffix: "api.amazonwebservices.com.cn",
        implicitGlobalRegion: "cn-northwest-1",
        name: "aws-cn",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: {
        "aws-cn-global": {
          description: "aws-cn global region"
        },
        "cn-north-1": {
          description: "China (Beijing)"
        },
        "cn-northwest-1": {
          description: "China (Ningxia)"
        }
      }
    }, {
      id: "aws-eusc",
      outputs: {
        dnsSuffix: "amazonaws.eu",
        dualStackDnsSuffix: "api.amazonwebservices.eu",
        implicitGlobalRegion: "eusc-de-east-1",
        name: "aws-eusc",
        supportsDualStack: false,
        supportsFIPS: true
      },
      regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
      regions: {
        "eusc-de-east-1": {
          description: "EU (Germany)"
        }
      }
    }, {
      id: "aws-iso",
      outputs: {
        dnsSuffix: "c2s.ic.gov",
        dualStackDnsSuffix: "api.aws.ic.gov",
        implicitGlobalRegion: "us-iso-east-1",
        name: "aws-iso",
        supportsDualStack: false,
        supportsFIPS: true
      },
      regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-global": {
          description: "aws-iso global region"
        },
        "us-iso-east-1": {
          description: "US ISO East"
        },
        "us-iso-west-1": {
          description: "US ISO WEST"
        }
      }
    }, {
      id: "aws-iso-b",
      outputs: {
        dnsSuffix: "sc2s.sgov.gov",
        dualStackDnsSuffix: "api.aws.scloud",
        implicitGlobalRegion: "us-isob-east-1",
        name: "aws-iso-b",
        supportsDualStack: false,
        supportsFIPS: true
      },
      regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-b-global": {
          description: "aws-iso-b global region"
        },
        "us-isob-east-1": {
          description: "US ISOB East (Ohio)"
        }
      }
    }, {
      id: "aws-iso-e",
      outputs: {
        dnsSuffix: "cloud.adc-e.uk",
        dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
        implicitGlobalRegion: "eu-isoe-west-1",
        name: "aws-iso-e",
        supportsDualStack: false,
        supportsFIPS: true
      },
      regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-e-global": {
          description: "aws-iso-e global region"
        },
        "eu-isoe-west-1": {
          description: "EU ISOE West"
        }
      }
    }, {
      id: "aws-iso-f",
      outputs: {
        dnsSuffix: "csp.hci.ic.gov",
        dualStackDnsSuffix: "api.aws.hci.ic.gov",
        implicitGlobalRegion: "us-isof-south-1",
        name: "aws-iso-f",
        supportsDualStack: false,
        supportsFIPS: true
      },
      regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-f-global": {
          description: "aws-iso-f global region"
        },
        "us-isof-east-1": {
          description: "US ISOF EAST"
        },
        "us-isof-south-1": {
          description: "US ISOF SOUTH"
        }
      }
    }, {
      id: "aws-us-gov",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-gov-west-1",
        name: "aws-us-gov",
        supportsDualStack: true,
        supportsFIPS: true
      },
      regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
      regions: {
        "aws-us-gov-global": {
          description: "aws-us-gov global region"
        },
        "us-gov-east-1": {
          description: "AWS GovCloud (US-East)"
        },
        "us-gov-west-1": {
          description: "AWS GovCloud (US-West)"
        }
      }
    }],
    version: "1.1"
  };

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
  var selectedPartitionsInfo = partitions_default;
  var selectedUserAgentPrefix = "";
  var partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition2 of partitions) {
      const { regions, outputs } = partition2;
      for (const [region, regionData] of Object.entries(regions)) {
        if (region === value) {
          return {
            ...outputs,
            ...regionData
          };
        }
      }
    }
    for (const partition2 of partitions) {
      const { regionRegex, outputs } = partition2;
      if (new RegExp(regionRegex).test(value)) {
        return {
          ...outputs
        };
      }
    }
    const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
    if (!DEFAULT_PARTITION) {
      throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    }
    return {
      ...DEFAULT_PARTITION.outputs
    };
  };
  var getUserAgentPrefix = () => selectedUserAgentPrefix;

  // node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
  var awsEndpointFunctions = {
    isVirtualHostableS3Bucket,
    parseArn,
    partition
  };
  customEndpointFunctions.aws = awsEndpointFunctions;

  // node_modules/@smithy/querystring-parser/dist-es/index.js
  function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
      for (const pair of querystring.split("&")) {
        let [key, value = null] = pair.split("=");
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    }
    return query;
  }

  // node_modules/@smithy/url-parser/dist-es/index.js
  var parseUrl = (url) => {
    if (typeof url === "string") {
      return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
      query = parseQueryString(search);
    }
    return {
      hostname,
      port: port ? parseInt(port) : void 0,
      protocol,
      path: pathname,
      query
    };
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
  function setCredentialFeature(credentials, feature, value) {
    if (!credentials.$source) {
      credentials.$source = {};
    }
    credentials.$source[feature] = value;
    return credentials;
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
  function setFeature2(context, feature, value) {
    if (!context.__aws_sdk_context) {
      context.__aws_sdk_context = {
        features: {}
      };
    } else if (!context.__aws_sdk_context.features) {
      context.__aws_sdk_context.features = {};
    }
    context.__aws_sdk_context.features[feature] = value;
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
  var getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
  var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
  var isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
  var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
      return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
  var throwSigningPropertyError = (name, property) => {
    if (!property) {
      throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
  };
  var validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingRegionSet = signingProperties?.signingRegionSet;
    const signingName = signingProperties?.signingName;
    return {
      config,
      signer,
      signingRegion,
      signingRegionSet,
      signingName
    };
  };
  var AwsSdkSigV4Signer = class {
    async sign(httpRequest, identity, signingProperties) {
      if (!HttpRequest.isInstance(httpRequest)) {
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
      }
      const validatedProps = await validateSigningProperties(signingProperties);
      const { config, signer } = validatedProps;
      let { signingRegion, signingName } = validatedProps;
      const handlerExecutionContext = signingProperties.context;
      if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
        const [first, second] = handlerExecutionContext.authSchemes;
        if (first?.name === "sigv4a" && second?.name === "sigv4") {
          signingRegion = second?.signingRegion ?? signingRegion;
          signingName = second?.signingName ?? signingName;
        }
      }
      const signedRequest = await signer.sign(httpRequest, {
        signingDate: getSkewCorrectedDate(config.systemClockOffset),
        signingRegion,
        signingService: signingName
      });
      return signedRequest;
    }
    errorHandler(signingProperties) {
      return (error) => {
        const serverTime = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          const initialSystemClockOffset = config.systemClockOffset;
          config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
          const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
          if (clockSkewCorrected && error.$metadata) {
            error.$metadata.clockSkewCorrected = true;
          }
        }
        throw error;
      };
    }
    successHandler(httpResponse, signingProperties) {
      const dateHeader = getDateHeader(httpResponse);
      if (dateHeader) {
        const config = throwSigningPropertyError("config", signingProperties.config);
        config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
      }
    }
  };

  // node_modules/@smithy/property-provider/dist-es/memoize.js
  var memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
      if (!pending) {
        pending = provider();
      }
      try {
        resolved = await pending;
        hasResult = true;
        isConstant = false;
      } finally {
        pending = void 0;
      }
      return resolved;
    };
    if (isExpired === void 0) {
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        return resolved;
      };
    }
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      if (isConstant) {
        return resolved;
      }
      if (requiresRefresh && !requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired(resolved)) {
        await coalesceProvider();
        return resolved;
      }
      return resolved;
    };
  };

  // node_modules/@smithy/signature-v4/dist-es/constants.js
  var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  var AUTH_HEADER = "authorization";
  var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
  var DATE_HEADER = "date";
  var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
  var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
  var SHA256_HEADER = "x-amz-content-sha256";
  var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
  var ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
  };
  var PROXY_HEADER_PATTERN = /^proxy-/;
  var SEC_HEADER_PATTERN = /^sec-/;
  var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  var MAX_CACHE_SIZE = 50;
  var KEY_TYPE_IDENTIFIER = "aws4_request";
  var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

  // node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
  var signingKeyCache = {};
  var cacheQueue = [];
  var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
  var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
      return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
      delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
      key = await hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
  };
  var hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(toUint8Array(data));
    return hash.digest();
  };

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
  var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
      if (headers[headerName] == void 0) {
        continue;
      }
      const canonicalHeaderName = headerName.toLowerCase();
      if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
        if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
          continue;
        }
      }
      canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
  };

  // node_modules/@smithy/is-array-buffer/dist-es/index.js
  var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

  // node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
  var getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
      if (headerName.toLowerCase() === SHA256_HEADER) {
        return headers[headerName];
      }
    }
    if (body == void 0) {
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
      const hashCtor = new hashConstructor();
      hashCtor.update(toUint8Array(body));
      return toHex(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
  };

  // node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
  var HeaderFormatter = class {
    format(headers) {
      const chunks = [];
      for (const headerName of Object.keys(headers)) {
        const bytes = fromUtf8(headerName);
        chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
      }
      const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
      let position = 0;
      for (const chunk of chunks) {
        out.set(chunk, position);
        position += chunk.byteLength;
      }
      return out;
    }
    formatHeaderValue(header) {
      switch (header.type) {
        case "boolean":
          return Uint8Array.from([header.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, header.value]);
        case "short":
          const shortView = new DataView(new ArrayBuffer(3));
          shortView.setUint8(0, 3);
          shortView.setInt16(1, header.value, false);
          return new Uint8Array(shortView.buffer);
        case "integer":
          const intView = new DataView(new ArrayBuffer(5));
          intView.setUint8(0, 4);
          intView.setInt32(1, header.value, false);
          return new Uint8Array(intView.buffer);
        case "long":
          const longBytes = new Uint8Array(9);
          longBytes[0] = 5;
          longBytes.set(header.value.bytes, 1);
          return longBytes;
        case "binary":
          const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
          binView.setUint8(0, 6);
          binView.setUint16(1, header.value.byteLength, false);
          const binBytes = new Uint8Array(binView.buffer);
          binBytes.set(header.value, 3);
          return binBytes;
        case "string":
          const utf8Bytes = fromUtf8(header.value);
          const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
          strView.setUint8(0, 7);
          strView.setUint16(1, utf8Bytes.byteLength, false);
          const strBytes = new Uint8Array(strView.buffer);
          strBytes.set(utf8Bytes, 3);
          return strBytes;
        case "timestamp":
          const tsBytes = new Uint8Array(9);
          tsBytes[0] = 8;
          tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
          return tsBytes;
        case "uuid":
          if (!UUID_PATTERN.test(header.value)) {
            throw new Error(`Invalid UUID received: ${header.value}`);
          }
          const uuidBytes = new Uint8Array(17);
          uuidBytes[0] = 9;
          uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
          return uuidBytes;
      }
    }
  };
  var HEADER_VALUE_TYPE;
  (function(HEADER_VALUE_TYPE2) {
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
  })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
  var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  var Int64 = class _Int64 {
    constructor(bytes) {
      this.bytes = bytes;
      if (bytes.byteLength !== 8) {
        throw new Error("Int64 buffers must be exactly 8 bytes");
      }
    }
    static fromNumber(number) {
      if (number > 9223372036854776e3 || number < -9223372036854776e3) {
        throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
      }
      const bytes = new Uint8Array(8);
      for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
        bytes[i2] = remaining;
      }
      if (number < 0) {
        negate(bytes);
      }
      return new _Int64(bytes);
    }
    valueOf() {
      const bytes = this.bytes.slice(0);
      const negative = bytes[0] & 128;
      if (negative) {
        negate(bytes);
      }
      return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
  function negate(bytes) {
    for (let i2 = 0; i2 < 8; i2++) {
      bytes[i2] ^= 255;
    }
    for (let i2 = 7; i2 > -1; i2--) {
      bytes[i2]++;
      if (bytes[i2] !== 0)
        break;
    }
  }

  // node_modules/@smithy/signature-v4/dist-es/headerUtil.js
  var hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  // node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
  var moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = HttpRequest.clone(request);
    for (const name of Object.keys(headers)) {
      const lname = name.toLowerCase();
      if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
        query[name] = headers[name];
        delete headers[name];
      }
    }
    return {
      ...request,
      headers,
      query
    };
  };

  // node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
  var prepareRequest = (request) => {
    request = HttpRequest.clone(request);
    for (const headerName of Object.keys(request.headers)) {
      if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
        delete request.headers[headerName];
      }
    }
    return request;
  };

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
  var getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query)) {
      if (key.toLowerCase() === SIGNATURE_HEADER) {
        continue;
      }
      const encodedKey = escapeUri(key);
      keys.push(encodedKey);
      const value = query[key];
      if (typeof value === "string") {
        serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
      } else if (Array.isArray(value)) {
        serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
      }
    }
    return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
  };

  // node_modules/@smithy/signature-v4/dist-es/utilDate.js
  var iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
  var toDate = (time) => {
    if (typeof time === "number") {
      return new Date(time * 1e3);
    }
    if (typeof time === "string") {
      if (Number(time)) {
        return new Date(Number(time) * 1e3);
      }
      return new Date(time);
    }
    return time;
  };

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
  var SignatureV4Base = class {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      this.service = service;
      this.sha256 = sha256;
      this.uriEscapePath = uriEscapePath;
      this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
      this.regionProvider = normalizeProvider(region);
      this.credentialProvider = normalizeProvider(credentials);
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
      const sortedHeaders = Object.keys(canonicalHeaders).sort();
      return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
      const hash = new this.sha256();
      hash.update(toUint8Array(canonicalRequest));
      const hashedRequest = await hash.digest();
      return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
      if (this.uriEscapePath) {
        const normalizedPathSegments = [];
        for (const pathSegment of path.split("/")) {
          if (pathSegment?.length === 0)
            continue;
          if (pathSegment === ".")
            continue;
          if (pathSegment === "..") {
            normalizedPathSegments.pop();
          } else {
            normalizedPathSegments.push(pathSegment);
          }
        }
        const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
        const doubleEncoded = escapeUri(normalizedPath);
        return doubleEncoded.replace(/%2F/g, "/");
      }
      return path;
    }
    validateResolvedCredentials(credentials) {
      if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
        throw new Error("Resolved credential object is not valid");
      }
    }
    formatDate(now) {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }
    getCanonicalHeaderList(headers) {
      return Object.keys(headers).sort().join(";");
    }
  };

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
  var SignatureV4 = class extends SignatureV4Base {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      super({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath
      });
      this.headerFormatter = new HeaderFormatter();
    }
    async presign(originalRequest, options = {}) {
      const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
      const credentials = await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const { longDate, shortDate } = this.formatDate(signingDate);
      if (expiresIn > MAX_PRESIGNED_TTL) {
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      }
      const scope = createScope(shortDate, region, signingService ?? this.service);
      const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
      if (credentials.sessionToken) {
        request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
      }
      request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
      request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
      request.query[AMZ_DATE_QUERY_PARAM] = longDate;
      request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
      const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
      request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
      return request;
    }
    async sign(toSign, options) {
      if (typeof toSign === "string") {
        return this.signString(toSign, options);
      } else if (toSign.headers && toSign.payload) {
        return this.signEvent(toSign, options);
      } else if (toSign.message) {
        return this.signMessage(toSign, options);
      } else {
        return this.signRequest(toSign, options);
      }
    }
    async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
      const region = signingRegion ?? await this.regionProvider();
      const { shortDate, longDate } = this.formatDate(signingDate);
      const scope = createScope(shortDate, region, signingService ?? this.service);
      const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
      const hash = new this.sha256();
      hash.update(headers);
      const hashedHeaders = toHex(await hash.digest());
      const stringToSign = [
        EVENT_ALGORITHM_IDENTIFIER,
        longDate,
        scope,
        priorSignature,
        hashedHeaders,
        hashedPayload
      ].join("\n");
      return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
      const promise = this.signEvent({
        headers: this.headerFormatter.format(signableMessage.message.headers),
        payload: signableMessage.message.body
      }, {
        signingDate,
        signingRegion,
        signingService,
        priorSignature: signableMessage.priorSignature
      });
      return promise.then((signature) => {
        return { message: signableMessage.message, signature };
      });
    }
    async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
      const credentials = await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const { shortDate } = this.formatDate(signingDate);
      const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
      hash.update(toUint8Array(stringToSign));
      return toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
      const credentials = await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const request = prepareRequest(requestToSign);
      const { longDate, shortDate } = this.formatDate(signingDate);
      const scope = createScope(shortDate, region, signingService ?? this.service);
      request.headers[AMZ_DATE_HEADER] = longDate;
      if (credentials.sessionToken) {
        request.headers[TOKEN_HEADER] = credentials.sessionToken;
      }
      const payloadHash = await getPayloadHash(request, this.sha256);
      if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
        request.headers[SHA256_HEADER] = payloadHash;
      }
      const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
      request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
      return request;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
      const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
      const hash = new this.sha256(await keyPromise);
      hash.update(toUint8Array(stringToSign));
      return toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
      return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
  var resolveAwsSdkSigV4Config = (config) => {
    let inputCredentials = config.credentials;
    let isUserSupplied = !!config.credentials;
    let resolvedCredentials = void 0;
    Object.defineProperty(config, "credentials", {
      set(credentials) {
        if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
          isUserSupplied = true;
        }
        inputCredentials = credentials;
        const memoizedProvider = normalizeCredentialProvider(config, {
          credentials: inputCredentials,
          credentialDefaultProvider: config.credentialDefaultProvider
        });
        const boundProvider = bindCallerConfig(config, memoizedProvider);
        if (isUserSupplied && !boundProvider.attributed) {
          resolvedCredentials = async (options) => boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e"));
          resolvedCredentials.memoized = boundProvider.memoized;
          resolvedCredentials.configBound = boundProvider.configBound;
          resolvedCredentials.attributed = true;
        } else {
          resolvedCredentials = boundProvider;
        }
      },
      get() {
        return resolvedCredentials;
      },
      enumerable: true,
      configurable: true
    });
    config.credentials = inputCredentials;
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
    let signer;
    if (config.signer) {
      signer = normalizeProvider2(config.signer);
    } else if (config.regionInfoProvider) {
      signer = () => normalizeProvider2(config.region)().then(async (region) => [
        await config.regionInfoProvider(region, {
          useFipsEndpoint: await config.useFipsEndpoint(),
          useDualstackEndpoint: await config.useDualstackEndpoint()
        }) || {},
        region
      ]).then(([regionInfo, region]) => {
        const { signingRegion, signingService } = regionInfo;
        config.signingRegion = config.signingRegion || signingRegion || region;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = {
          ...config,
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        };
        const SignerCtor = config.signerConstructor || SignatureV4;
        return new SignerCtor(params);
      });
    } else {
      signer = async (authScheme) => {
        authScheme = Object.assign({}, {
          name: "sigv4",
          signingName: config.signingName || config.defaultSigningName,
          signingRegion: await normalizeProvider2(config.region)(),
          properties: {}
        }, authScheme);
        const signingRegion = authScheme.signingRegion;
        const signingService = authScheme.signingName;
        config.signingRegion = config.signingRegion || signingRegion;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = {
          ...config,
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        };
        const SignerCtor = config.signerConstructor || SignatureV4;
        return new SignerCtor(params);
      };
    }
    const resolvedConfig = Object.assign(config, {
      systemClockOffset,
      signingEscapePath,
      signer
    });
    return resolvedConfig;
  };
  function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
    let credentialsProvider;
    if (credentials) {
      if (!credentials?.memoized) {
        credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
      } else {
        credentialsProvider = credentials;
      }
    } else {
      if (credentialDefaultProvider) {
        credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config, {
          parentClientConfig: config
        })));
      } else {
        credentialsProvider = async () => {
          throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
        };
      }
    }
    credentialsProvider.memoized = true;
    return credentialsProvider;
  }
  function bindCallerConfig(config, credentialsProvider) {
    if (credentialsProvider.configBound) {
      return credentialsProvider;
    }
    const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
    fn.memoized = credentialsProvider.memoized;
    fn.configBound = true;
    return fn;
  }

  // node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
  var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
  var calculateBodyLength = (body) => {
    if (typeof body === "string") {
      if (TEXT_ENCODER) {
        return TEXT_ENCODER.encode(body).byteLength;
      }
      let len = body.length;
      for (let i2 = len - 1; i2 >= 0; i2--) {
        const code = body.charCodeAt(i2);
        if (code > 127 && code <= 2047)
          len++;
        else if (code > 2047 && code <= 65535)
          len += 2;
        if (code >= 56320 && code <= 57343)
          i2--;
      }
      return len;
    } else if (typeof body.byteLength === "number") {
      return body.byteLength;
    } else if (typeof body.size === "number") {
      return body.size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
  };

  // node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
  var getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
      _aliases.push(name);
    }
    if (aliases) {
      for (const alias of aliases) {
        _aliases.push(alias);
      }
    }
    return _aliases;
  };
  var getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
  };
  var constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = /* @__PURE__ */ new Set();
    const sort = (entries) => entries.sort((a2, b2) => stepWeights[b2.step] - stepWeights[a2.step] || priorityWeights[b2.priority || "normal"] - priorityWeights[a2.priority || "normal"]);
    const removeByName = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        const aliases = getAllAliases(entry.name, entry.aliases);
        if (aliases.includes(toRemove)) {
          isRemoved = true;
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const removeByReference = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        if (entry.middleware === toRemove) {
          isRemoved = true;
          for (const alias of getAllAliases(entry.name, entry.aliases)) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const cloneTo = (toStack) => {
      absoluteEntries.forEach((entry) => {
        toStack.add(entry.middleware, { ...entry });
      });
      relativeEntries.forEach((entry) => {
        toStack.addRelativeTo(entry.middleware, { ...entry });
      });
      toStack.identifyOnResolve?.(stack.identifyOnResolve());
      return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
      const expandedMiddlewareList = [];
      from.before.forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      expandedMiddlewareList.push(from);
      from.after.reverse().forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
      const normalizedAbsoluteEntries = [];
      const normalizedRelativeEntries = [];
      const normalizedEntriesNameMap = {};
      absoluteEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedAbsoluteEntries.push(normalizedEntry);
      });
      relativeEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedRelativeEntries.push(normalizedEntry);
      });
      normalizedRelativeEntries.forEach((entry) => {
        if (entry.toMiddleware) {
          const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
          if (toMiddleware === void 0) {
            if (debug) {
              return;
            }
            throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
          }
          if (entry.relation === "after") {
            toMiddleware.after.push(entry);
          }
          if (entry.relation === "before") {
            toMiddleware.before.push(entry);
          }
        }
      });
      const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
        wholeList.push(...expandedMiddlewareList);
        return wholeList;
      }, []);
      return mainChain;
    };
    const stack = {
      add: (middleware, options = {}) => {
        const { name, override, aliases: _aliases } = options;
        const entry = {
          step: "initialize",
          priority: "normal",
          middleware,
          ...options
        };
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = absoluteEntries[toOverrideIndex];
              if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
              }
              absoluteEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        absoluteEntries.push(entry);
      },
      addRelativeTo: (middleware, options) => {
        const { name, override, aliases: _aliases } = options;
        const entry = {
          middleware,
          ...options
        };
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = relativeEntries[toOverrideIndex];
              if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
              }
              relativeEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        relativeEntries.push(entry);
      },
      clone: () => cloneTo(constructStack()),
      use: (plugin) => {
        plugin.applyToStack(stack);
      },
      remove: (toRemove) => {
        if (typeof toRemove === "string")
          return removeByName(toRemove);
        else
          return removeByReference(toRemove);
      },
      removeByTag: (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const { tags, name, aliases: _aliases } = entry;
          if (tags && tags.includes(toRemove)) {
            const aliases = getAllAliases(name, _aliases);
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            isRemoved = true;
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      },
      concat: (from) => {
        const cloned = cloneTo(constructStack());
        cloned.use(from);
        cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
        return cloned;
      },
      applyToStack: cloneTo,
      identify: () => {
        return getMiddlewareList(true).map((mw) => {
          const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
          return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
        });
      },
      identifyOnResolve(toggle) {
        if (typeof toggle === "boolean")
          identifyOnResolve = toggle;
        return identifyOnResolve;
      },
      resolve: (handler, context) => {
        for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
          handler = middleware(handler, context);
        }
        if (identifyOnResolve) {
          console.log(stack.identify());
        }
        return handler;
      }
    };
    return stack;
  };
  var stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
  };
  var priorityWeights = {
    high: 3,
    normal: 2,
    low: 1
  };

  // node_modules/@smithy/smithy-client/dist-es/client.js
  var Client = class {
    constructor(config) {
      this.config = config;
      this.middlewareStack = constructStack();
    }
    send(command, optionsOrCb, cb) {
      const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
      const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
      const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
      let handler;
      if (useHandlerCache) {
        if (!this.handlers) {
          this.handlers = /* @__PURE__ */ new WeakMap();
        }
        const handlers = this.handlers;
        if (handlers.has(command.constructor)) {
          handler = handlers.get(command.constructor);
        } else {
          handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
          handlers.set(command.constructor, handler);
        }
      } else {
        delete this.handlers;
        handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
      }
      if (callback) {
        handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
        });
      } else {
        return handler(command).then((result) => result.output);
      }
    }
    destroy() {
      this.config?.requestHandler?.destroy?.();
      delete this.handlers;
    }
  };

  // node_modules/@smithy/smithy-client/dist-es/command.js
  var Command = class {
    constructor() {
      this.middlewareStack = constructStack();
    }
    static classBuilder() {
      return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
      for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
        this.middlewareStack.use(mw);
      }
      const stack = clientStack.concat(this.middlewareStack);
      const { logger: logger2 } = configuration;
      const handlerExecutionContext = {
        logger: logger2,
        clientName,
        commandName,
        inputFilterSensitiveLog,
        outputFilterSensitiveLog,
        [SMITHY_CONTEXT_KEY]: {
          commandInstance: this,
          ...smithyContext
        },
        ...additionalContext
      };
      const { requestHandler } = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
  };
  var ClassBuilder = class {
    constructor() {
      this._init = () => {
      };
      this._ep = {};
      this._middlewareFn = () => [];
      this._commandName = "";
      this._clientName = "";
      this._additionalContext = {};
      this._smithyContext = {};
      this._inputFilterSensitiveLog = (_) => _;
      this._outputFilterSensitiveLog = (_) => _;
      this._serializer = null;
      this._deserializer = null;
    }
    init(cb) {
      this._init = cb;
    }
    ep(endpointParameterInstructions) {
      this._ep = endpointParameterInstructions;
      return this;
    }
    m(middlewareSupplier) {
      this._middlewareFn = middlewareSupplier;
      return this;
    }
    s(service, operation, smithyContext = {}) {
      this._smithyContext = {
        service,
        operation,
        ...smithyContext
      };
      return this;
    }
    c(additionalContext = {}) {
      this._additionalContext = additionalContext;
      return this;
    }
    n(clientName, commandName) {
      this._clientName = clientName;
      this._commandName = commandName;
      return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
      this._inputFilterSensitiveLog = inputFilter;
      this._outputFilterSensitiveLog = outputFilter;
      return this;
    }
    ser(serializer) {
      this._serializer = serializer;
      return this;
    }
    de(deserializer) {
      this._deserializer = deserializer;
      return this;
    }
    sc(operation) {
      this._operationSchema = operation;
      this._smithyContext.operationSchema = operation;
      return this;
    }
    build() {
      const closure = this;
      let CommandRef;
      return CommandRef = class extends Command {
        static getEndpointParameterInstructions() {
          return closure._ep;
        }
        constructor(...[input]) {
          super();
          this.serialize = closure._serializer;
          this.deserialize = closure._deserializer;
          this.input = input ?? {};
          closure._init(this);
          this.schema = closure._operationSchema;
        }
        resolveMiddleware(stack, configuration, options) {
          return this.resolveMiddlewareWithContext(stack, configuration, options, {
            CommandCtor: CommandRef,
            middlewareFn: closure._middlewareFn,
            clientName: closure._clientName,
            commandName: closure._commandName,
            inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
            outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
            smithyContext: closure._smithyContext,
            additionalContext: closure._additionalContext
          });
        }
      };
    }
  };

  // node_modules/@smithy/smithy-client/dist-es/exceptions.js
  var ServiceException = class _ServiceException extends Error {
    constructor(options) {
      super(options.message);
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
      this.name = options.name;
      this.$fault = options.$fault;
      this.$metadata = options.$metadata;
    }
    static isInstance(value) {
      if (!value)
        return false;
      const candidate = value;
      return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
    }
    static [Symbol.hasInstance](instance) {
      if (!instance)
        return false;
      const candidate = instance;
      if (this === _ServiceException) {
        return _ServiceException.isInstance(instance);
      }
      if (_ServiceException.isInstance(instance)) {
        if (candidate.name && this.name) {
          return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
        }
        return this.prototype.isPrototypeOf(instance);
      }
      return false;
    }
  };
  var decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions).filter(([, v2]) => v2 !== void 0).forEach(([k2, v2]) => {
      if (exception[k2] == void 0 || exception[k2] === "") {
        exception[k2] = v2;
      }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
  };

  // node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
  var throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
    const response = new exceptionCtor({
      name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
      $fault: "client",
      $metadata
    });
    throw decorateServiceException(response, parsedBody);
  };
  var withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
      throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
  };
  var deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  });

  // node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
  var loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
      case "standard":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "in-region":
        return {
          retryMode: "standard",
          connectionTimeout: 1100
        };
      case "cross-region":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "mobile":
        return {
          retryMode: "standard",
          connectionTimeout: 3e4
        };
      default:
        return {};
    }
  };

  // node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
  var getChecksumConfiguration2 = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in AlgorithmId) {
      const algorithmId = AlgorithmId[id];
      if (runtimeConfig[algorithmId] === void 0) {
        continue;
      }
      checksumAlgorithms.push({
        algorithmId: () => algorithmId,
        checksumConstructor: () => runtimeConfig[algorithmId]
      });
    }
    return {
      addChecksumAlgorithm(algo) {
        checksumAlgorithms.push(algo);
      },
      checksumAlgorithms() {
        return checksumAlgorithms;
      }
    };
  };
  var resolveChecksumRuntimeConfig2 = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
      runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
  };

  // node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
  var getRetryConfiguration = (runtimeConfig) => {
    return {
      setRetryStrategy(retryStrategy) {
        runtimeConfig.retryStrategy = retryStrategy;
      },
      retryStrategy() {
        return runtimeConfig.retryStrategy;
      }
    };
  };
  var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
  };

  // node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
  var getDefaultExtensionConfiguration = (runtimeConfig) => {
    return Object.assign(getChecksumConfiguration2(runtimeConfig), getRetryConfiguration(runtimeConfig));
  };
  var resolveDefaultRuntimeConfig = (config) => {
    return Object.assign(resolveChecksumRuntimeConfig2(config), resolveRetryRuntimeConfig(config));
  };

  // node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
  var NoOpLogger = class {
    trace() {
    }
    debug() {
    }
    info() {
    }
    warn() {
    }
    error() {
    }
  };

  // node_modules/@smithy/smithy-client/dist-es/object-mapping.js
  function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
      target = {};
      instructions = arg0;
    } else {
      target = arg0;
      if (typeof arg1 === "function") {
        filter = arg1;
        instructions = arg2;
        return mapWithFilter(target, filter, instructions);
      } else {
        instructions = arg1;
      }
    }
    for (const key of Object.keys(instructions)) {
      if (!Array.isArray(instructions[key])) {
        target[key] = instructions[key];
        continue;
      }
      applyInstruction(target, null, instructions, key);
    }
    return target;
  }
  var take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
      applyInstruction(out, source, instructions, key);
    }
    return out;
  };
  var mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
      if (Array.isArray(value)) {
        _instructions[key] = value;
      } else {
        if (typeof value === "function") {
          _instructions[key] = [filter, value()];
        } else {
          _instructions[key] = [filter, value];
        }
      }
      return _instructions;
    }, {}));
  };
  var applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
      let instruction = instructions[targetKey];
      if (typeof instruction === "function") {
        instruction = [, instruction];
      }
      const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
      if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
        target[targetKey] = valueFn(source[sourceKey]);
      }
      return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
      let _value;
      const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
      const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
      if (defaultFilterPassed) {
        target[targetKey] = _value;
      } else if (customFilterPassed) {
        target[targetKey] = value();
      }
    } else {
      const defaultFilterPassed = filter === void 0 && value != null;
      const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
      if (defaultFilterPassed || customFilterPassed) {
        target[targetKey] = value;
      }
    }
  };
  var nonNullish = (_) => _ != null;
  var pass = (_) => _;

  // node_modules/@smithy/smithy-client/dist-es/serde-json.js
  var _json = (obj) => {
    if (obj == null) {
      return {};
    }
    if (Array.isArray(obj)) {
      return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
      const target = {};
      for (const key of Object.keys(obj)) {
        if (obj[key] == null) {
          continue;
        }
        target[key] = _json(obj[key]);
      }
      return target;
    }
    return obj;
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
  var collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
  var parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      try {
        return JSON.parse(encoded);
      } catch (e2) {
        if (e2?.name === "SyntaxError") {
          Object.defineProperty(e2, "$responseBodyText", {
            value: encoded
          });
        }
        throw e2;
      }
    }
    return {};
  });
  var parseJsonErrorBody = async (errorBody, context) => {
    const value = await parseJsonBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
  };
  var loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
      let cleanValue = rawValue;
      if (typeof cleanValue === "number") {
        cleanValue = cleanValue.toString();
      }
      if (cleanValue.indexOf(",") >= 0) {
        cleanValue = cleanValue.split(",")[0];
      }
      if (cleanValue.indexOf(":") >= 0) {
        cleanValue = cleanValue.split(":")[0];
      }
      if (cleanValue.indexOf("#") >= 0) {
        cleanValue = cleanValue.split("#")[1];
      }
      return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== void 0) {
      return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data && typeof data === "object") {
      const codeKey = findKey(data, "code");
      if (codeKey && data[codeKey] !== void 0) {
        return sanitizeErrorCode(data[codeKey]);
      }
      if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
      }
    }
  };

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
  var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
  async function checkFeatures(context, config, args) {
    const request = args.request;
    if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
      setFeature2(context, "PROTOCOL_RPC_V2_CBOR", "M");
    }
    if (typeof config.retryStrategy === "function") {
      const retryStrategy = await config.retryStrategy();
      if (typeof retryStrategy.acquireInitialRetryToken === "function") {
        if (retryStrategy.constructor?.name?.includes("Adaptive")) {
          setFeature2(context, "RETRY_MODE_ADAPTIVE", "F");
        } else {
          setFeature2(context, "RETRY_MODE_STANDARD", "E");
        }
      } else {
        setFeature2(context, "RETRY_MODE_LEGACY", "D");
      }
    }
    if (typeof config.accountIdEndpointMode === "function") {
      const endpointV2 = context.endpointV2;
      if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
        setFeature2(context, "ACCOUNT_ID_ENDPOINT", "O");
      }
      switch (await config.accountIdEndpointMode?.()) {
        case "disabled":
          setFeature2(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
          break;
        case "preferred":
          setFeature2(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
          break;
        case "required":
          setFeature2(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
          break;
      }
    }
    const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (identity?.$source) {
      const credentials = identity;
      if (credentials.accountId) {
        setFeature2(context, "RESOLVED_ACCOUNT_ID", "T");
      }
      for (const [key, value] of Object.entries(credentials.$source ?? {})) {
        setFeature2(context, key, value);
      }
    }
  }

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
  var USER_AGENT = "user-agent";
  var X_AMZ_USER_AGENT = "x-amz-user-agent";
  var SPACE = " ";
  var UA_NAME_SEPARATOR = "/";
  var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
  var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
  var UA_ESCAPE_CHAR = "-";

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
  var BYTE_LIMIT = 1024;
  function encodeFeatures(features) {
    let buffer = "";
    for (const key in features) {
      const val = features[key];
      if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
        if (buffer.length) {
          buffer += "," + val;
        } else {
          buffer += val;
        }
        continue;
      }
      break;
    }
    return buffer;
  }

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
  var userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) {
      return next(args);
    }
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    await checkFeatures(context, options, args);
    const awsContext = context;
    defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const appId = await options.userAgentAppId();
    if (appId) {
      defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
    }
    const prefix = getUserAgentPrefix();
    const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
    const normalUAValue = [
      ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
      ...customUserAgent
    ].join(SPACE);
    if (options.runtime !== "browser") {
      if (normalUAValue) {
        headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
      }
      headers[USER_AGENT] = sdkUserAgentValue;
    } else {
      headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
      ...args,
      request
    });
  };
  var escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
      uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
      switch (index) {
        case 0:
          return item;
        case 1:
          return `${acc}/${item}`;
        default:
          return `${acc}#${item}`;
      }
    }, "");
  };
  var getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true
  };
  var getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/types.js
  var SelectorType;
  (function(SelectorType2) {
    SelectorType2["ENV"] = "env";
    SelectorType2["CONFIG"] = "shared config entry";
  })(SelectorType || (SelectorType = {}));

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
  var DEFAULT_USE_DUALSTACK_ENDPOINT = false;

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
  var DEFAULT_USE_FIPS_ENDPOINT = false;

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
  var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
  var getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
  var resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
      throw new Error("Region is missing");
    }
    return Object.assign(input, {
      region: async () => {
        if (typeof region === "string") {
          return getRealRegion(region);
        }
        const providedRegion = await region();
        return getRealRegion(providedRegion);
      },
      useFipsEndpoint: async () => {
        const providedRegion = typeof region === "string" ? region : await region();
        if (isFipsRegion(providedRegion)) {
          return true;
        }
        return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
      }
    });
  };

  // node_modules/@smithy/middleware-content-length/dist-es/index.js
  var CONTENT_LENGTH_HEADER = "content-length";
  function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
      const request = args.request;
      if (HttpRequest.isInstance(request)) {
        const { body, headers } = request;
        if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
          try {
            const length = bodyLengthChecker(body);
            request.headers = {
              ...request.headers,
              [CONTENT_LENGTH_HEADER]: String(length)
            };
          } catch (error) {
          }
        }
      }
      return next({
        ...args,
        request
      });
    };
  }
  var contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true
  };
  var getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
  var resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
      endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
      if (endpointParams.ForcePathStyle === true) {
        throw new Error("Path-style addressing cannot be used with ARN buckets");
      }
    } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
      endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
      endpointParams.disableMultiRegionAccessPoints = true;
      endpointParams.DisableMRAP = true;
    }
    return endpointParams;
  };
  var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
  var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
  var DOTS_PATTERN = /\.\./;
  var isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
  var isArnBucketName = (bucketName) => {
    const [arn, partition2, service, , , bucket] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = Boolean(isArn && partition2 && service && bucket);
    if (isArn && !isValidArn) {
      throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return isValidArn;
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
  var createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
      const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
      if (typeof configValue === "function") {
        return configValue();
      }
      return configValue;
    };
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
      return async () => {
        const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
        const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
        return configValue;
      };
    }
    if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
      return async () => {
        const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
        const configValue = credentials?.accountId ?? credentials?.AccountId;
        return configValue;
      };
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
      return async () => {
        if (config.isCustomEndpoint === false) {
          return void 0;
        }
        const endpoint = await configProvider();
        if (endpoint && typeof endpoint === "object") {
          if ("url" in endpoint) {
            return endpoint.url.href;
          }
          if ("hostname" in endpoint) {
            const { protocol, hostname, port, path } = endpoint;
            return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
          }
        }
        return endpoint;
      };
    }
    return configProvider;
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
  var getEndpointFromConfig = async (serviceId) => void 0;

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
  var toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
      if ("url" in endpoint) {
        return parseUrl(endpoint.url);
      }
      return endpoint;
    }
    return parseUrl(endpoint);
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
  var getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    if (!clientConfig.isCustomEndpoint) {
      let endpointFromConfig;
      if (clientConfig.serviceConfiguredEndpoint) {
        endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
      } else {
        endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
      }
      if (endpointFromConfig) {
        clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        clientConfig.isCustomEndpoint = true;
      }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
      throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
  };
  var resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
      switch (instruction.type) {
        case "staticContextParams":
          endpointParams[name] = instruction.value;
          break;
        case "contextParams":
          endpointParams[name] = commandInput[instruction.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
          break;
        case "operationContextParams":
          endpointParams[name] = instruction.get(commandInput);
          break;
        default:
          throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
      }
    }
    if (Object.keys(instructions).length === 0) {
      Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
      await resolveParamsForS3(endpointParams);
    }
    return endpointParams;
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
  var endpointMiddleware = ({ config, instructions }) => {
    return (next, context) => async (args) => {
      if (config.isCustomEndpoint) {
        setFeature(context, "ENDPOINT_OVERRIDE", "N");
      }
      const endpoint = await getEndpointFromInstructions(args.input, {
        getEndpointParameterInstructions() {
          return instructions;
        }
      }, { ...config }, context);
      context.endpointV2 = endpoint;
      context.authSchemes = endpoint.properties?.authSchemes;
      const authScheme = context.authSchemes?.[0];
      if (authScheme) {
        context["signing_region"] = authScheme.signingRegion;
        context["signing_service"] = authScheme.signingName;
        const smithyContext = getSmithyContext(context);
        const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
        if (httpAuthOption) {
          httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
            signing_region: authScheme.signingRegion,
            signingRegion: authScheme.signingRegion,
            signing_service: authScheme.signingName,
            signingName: authScheme.signingName,
            signingRegionSet: authScheme.signingRegionSet
          }, authScheme.properties);
        }
      }
      return next({
        ...args
      });
    };
  };

  // node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
  var endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: serializerMiddlewareOption.name
  };
  var getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(endpointMiddleware({
        config,
        instructions
      }), endpointMiddlewareOptions);
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
  var resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
    const isCustomEndpoint = !!endpoint;
    const resolvedConfig = Object.assign(input, {
      endpoint: customEndpointProvider,
      tls,
      isCustomEndpoint,
      useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
      useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false)
    });
    let configuredEndpointPromise = void 0;
    resolvedConfig.serviceConfiguredEndpoint = async () => {
      if (input.serviceId && !configuredEndpointPromise) {
        configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
      }
      return configuredEndpointPromise;
    };
    return resolvedConfig;
  };

  // node_modules/@smithy/util-retry/dist-es/config.js
  var RETRY_MODES;
  (function(RETRY_MODES2) {
    RETRY_MODES2["STANDARD"] = "standard";
    RETRY_MODES2["ADAPTIVE"] = "adaptive";
  })(RETRY_MODES || (RETRY_MODES = {}));
  var DEFAULT_MAX_ATTEMPTS = 3;
  var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

  // node_modules/@smithy/service-error-classification/dist-es/constants.js
  var THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException"
  ];
  var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
  var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
  var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];

  // node_modules/@smithy/service-error-classification/dist-es/index.js
  var isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
  var isBrowserNetworkError = (error) => {
    const errorMessages = /* @__PURE__ */ new Set([
      "Failed to fetch",
      "NetworkError when attempting to fetch resource",
      "The Internet connection appears to be offline",
      "Load failed",
      "Network request failed"
    ]);
    const isValid = error && error instanceof TypeError;
    if (!isValid) {
      return false;
    }
    return errorMessages.has(error.message);
  };
  var isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
  var isTransientError = (error, depth = 0) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1);
  var isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== void 0) {
      const statusCode = error.$metadata.httpStatusCode;
      if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
        return true;
      }
      return false;
    }
    return false;
  };

  // node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
  var DefaultRateLimiter = class _DefaultRateLimiter {
    constructor(options) {
      this.currentCapacity = 0;
      this.enabled = false;
      this.lastMaxRate = 0;
      this.measuredTxRate = 0;
      this.requestCount = 0;
      this.lastTimestamp = 0;
      this.timeWindow = 0;
      this.beta = options?.beta ?? 0.7;
      this.minCapacity = options?.minCapacity ?? 1;
      this.minFillRate = options?.minFillRate ?? 0.5;
      this.scaleConstant = options?.scaleConstant ?? 0.4;
      this.smooth = options?.smooth ?? 0.8;
      const currentTimeInSeconds = this.getCurrentTimeInSeconds();
      this.lastThrottleTime = currentTimeInSeconds;
      this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
      this.fillRate = this.minFillRate;
      this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1e3;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
      if (!this.enabled) {
        return;
      }
      this.refillTokenBucket();
      if (amount > this.currentCapacity) {
        const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
        await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
      }
      this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
      const timestamp = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
        return;
      }
      const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
      this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
      this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
      let calculatedRate;
      this.updateMeasuredRate();
      if (isThrottlingError(response)) {
        const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = rateToUse;
        this.calculateTimeWindow();
        this.lastThrottleTime = this.getCurrentTimeInSeconds();
        calculatedRate = this.cubicThrottle(rateToUse);
        this.enableTokenBucket();
      } else {
        this.calculateTimeWindow();
        calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
      }
      const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
      return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
      return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
      this.refillTokenBucket();
      this.fillRate = Math.max(newRate, this.minFillRate);
      this.maxCapacity = Math.max(newRate, this.minCapacity);
      this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
      const t2 = this.getCurrentTimeInSeconds();
      const timeBucket = Math.floor(t2 * 2) / 2;
      this.requestCount++;
      if (timeBucket > this.lastTxRateBucket) {
        const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
        this.requestCount = 0;
        this.lastTxRateBucket = timeBucket;
      }
    }
    getPrecise(num) {
      return parseFloat(num.toFixed(8));
    }
  };
  DefaultRateLimiter.setTimeoutFn = setTimeout;

  // node_modules/@smithy/util-retry/dist-es/constants.js
  var DEFAULT_RETRY_DELAY_BASE = 100;
  var MAXIMUM_RETRY_DELAY = 20 * 1e3;
  var THROTTLING_RETRY_DELAY_BASE = 500;
  var INITIAL_RETRY_TOKENS = 500;
  var RETRY_COST = 5;
  var TIMEOUT_RETRY_COST = 10;
  var NO_RETRY_INCREMENT = 1;
  var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
  var REQUEST_HEADER = "amz-sdk-request";

  // node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
  var getDefaultRetryBackoffStrategy = () => {
    let delayBase = DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
      return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
      delayBase = delay;
    };
    return {
      computeNextBackoffDelay,
      setDelayBase
    };
  };

  // node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
  var createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
    const getRetryCost = () => retryCost;
    return {
      getRetryCount,
      getRetryDelay,
      getRetryCost
    };
  };

  // node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
  var StandardRetryStrategy = class {
    constructor(maxAttempts) {
      this.maxAttempts = maxAttempts;
      this.mode = RETRY_MODES.STANDARD;
      this.capacity = INITIAL_RETRY_TOKENS;
      this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
      this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
    }
    async acquireInitialRetryToken(retryTokenScope) {
      return createDefaultRetryToken({
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0
      });
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
      const maxAttempts = await this.getMaxAttempts();
      if (this.shouldRetry(token, errorInfo, maxAttempts)) {
        const errorType = errorInfo.errorType;
        this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
        const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
        const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
        const capacityCost = this.getCapacityCost(errorType);
        this.capacity -= capacityCost;
        return createDefaultRetryToken({
          retryDelay,
          retryCount: token.getRetryCount() + 1,
          retryCost: capacityCost
        });
      }
      throw new Error("No retry token available");
    }
    recordSuccess(token) {
      this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
    }
    getCapacity() {
      return this.capacity;
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (error) {
        console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
        return DEFAULT_MAX_ATTEMPTS;
      }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
      const attempts = tokenToRenew.getRetryCount() + 1;
      return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
    }
    getCapacityCost(errorType) {
      return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
    }
    isRetryableError(errorType) {
      return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
  };

  // node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
  var AdaptiveRetryStrategy = class {
    constructor(maxAttemptsProvider, options) {
      this.maxAttemptsProvider = maxAttemptsProvider;
      this.mode = RETRY_MODES.ADAPTIVE;
      const { rateLimiter } = options ?? {};
      this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
      this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
      await this.rateLimiter.getSendToken();
      return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
      this.rateLimiter.updateClientSendingRate(errorInfo);
      return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
      this.rateLimiter.updateClientSendingRate({});
      this.standardRetryStrategy.recordSuccess(token);
    }
  };

  // node_modules/@smithy/middleware-retry/dist-es/util.js
  var asSdkError = (error) => {
    if (error instanceof Error)
      return error;
    if (error instanceof Object)
      return Object.assign(new Error(), error);
    if (typeof error === "string")
      return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
  };

  // node_modules/@smithy/middleware-retry/dist-es/configurations.js
  var resolveRetryConfig = (input) => {
    const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
    const maxAttempts = normalizeProvider(_maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
    return Object.assign(input, {
      maxAttempts,
      retryStrategy: async () => {
        if (retryStrategy) {
          return retryStrategy;
        }
        const retryMode = await normalizeProvider(_retryMode)();
        if (retryMode === RETRY_MODES.ADAPTIVE) {
          return new AdaptiveRetryStrategy(maxAttempts);
        }
        return new StandardRetryStrategy(maxAttempts);
      }
    });
  };

  // node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
  var isStreamingPayload = (request) => request?.body instanceof ReadableStream;

  // node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
  var retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
      retryStrategy = retryStrategy;
      let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
      let lastError = new Error();
      let attempts = 0;
      let totalRetryDelay = 0;
      const { request } = args;
      const isRequest = HttpRequest.isInstance(request);
      if (isRequest) {
        request.headers[INVOCATION_ID_HEADER] = v4_default();
      }
      while (true) {
        try {
          if (isRequest) {
            request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
          }
          const { response, output } = await next(args);
          retryStrategy.recordSuccess(retryToken);
          output.$metadata.attempts = attempts + 1;
          output.$metadata.totalRetryDelay = totalRetryDelay;
          return { response, output };
        } catch (e2) {
          const retryErrorInfo = getRetryErrorInfo(e2);
          lastError = asSdkError(e2);
          if (isRequest && isStreamingPayload(request)) {
            (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
            throw lastError;
          }
          try {
            retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
          } catch (refreshError) {
            if (!lastError.$metadata) {
              lastError.$metadata = {};
            }
            lastError.$metadata.attempts = attempts + 1;
            lastError.$metadata.totalRetryDelay = totalRetryDelay;
            throw lastError;
          }
          attempts = retryToken.getRetryCount();
          const delay = retryToken.getRetryDelay();
          totalRetryDelay += delay;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    } else {
      retryStrategy = retryStrategy;
      if (retryStrategy?.mode)
        context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
      return retryStrategy.retry(next, args);
    }
  };
  var isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
  var getRetryErrorInfo = (error) => {
    const errorInfo = {
      error,
      errorType: getRetryErrorType(error)
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
      errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
  };
  var getRetryErrorType = (error) => {
    if (isThrottlingError(error))
      return "THROTTLING";
    if (isTransientError(error))
      return "TRANSIENT";
    if (isServerError(error))
      return "SERVER_ERROR";
    return "CLIENT_ERROR";
  };
  var retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true
  };
  var getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    }
  });
  var getRetryAfterHint = (response) => {
    if (!HttpResponse.isInstance(response))
      return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
      return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
      return new Date(retryAfterSeconds * 1e3);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
  };

  // node_modules/@aws-sdk/client-polly/dist-es/auth/httpAuthSchemeProvider.js
  var defaultPollyHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
      operation: getSmithyContext(context).operation,
      region: await normalizeProvider(config.region)() || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  };
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "polly",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  var defaultPollyHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      }
    }
    return options;
  };
  var resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = resolveAwsSdkSigV4Config(config);
    return Object.assign(config_0, {
      authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
    });
  };

  // node_modules/@aws-sdk/client-polly/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
      useDualstackEndpoint: options.useDualstackEndpoint ?? false,
      useFipsEndpoint: options.useFipsEndpoint ?? false,
      defaultSigningName: "polly"
    });
  };
  var commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };

  // node_modules/@aws-sdk/client-polly/package.json
  var package_default = {
    name: "@aws-sdk/client-polly",
    description: "AWS SDK for JavaScript Polly Client for Node.js, Browser and React Native",
    version: "3.876.0",
    scripts: {
      build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
      "build:cjs": "node ../../scripts/compilation/inline client-polly",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
      "build:types": "tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo polly"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha256-browser": "5.2.0",
      "@aws-crypto/sha256-js": "5.2.0",
      "@aws-sdk/core": "3.876.0",
      "@aws-sdk/credential-provider-node": "3.876.0",
      "@aws-sdk/middleware-host-header": "3.873.0",
      "@aws-sdk/middleware-logger": "3.876.0",
      "@aws-sdk/middleware-recursion-detection": "3.873.0",
      "@aws-sdk/middleware-user-agent": "3.876.0",
      "@aws-sdk/region-config-resolver": "3.873.0",
      "@aws-sdk/types": "3.862.0",
      "@aws-sdk/util-endpoints": "3.873.0",
      "@aws-sdk/util-user-agent-browser": "3.873.0",
      "@aws-sdk/util-user-agent-node": "3.876.0",
      "@smithy/config-resolver": "^4.1.5",
      "@smithy/core": "^3.8.0",
      "@smithy/fetch-http-handler": "^5.1.1",
      "@smithy/hash-node": "^4.0.5",
      "@smithy/invalid-dependency": "^4.0.5",
      "@smithy/middleware-content-length": "^4.0.5",
      "@smithy/middleware-endpoint": "^4.1.18",
      "@smithy/middleware-retry": "^4.1.19",
      "@smithy/middleware-serde": "^4.0.9",
      "@smithy/middleware-stack": "^4.0.5",
      "@smithy/node-config-provider": "^4.1.4",
      "@smithy/node-http-handler": "^4.1.1",
      "@smithy/protocol-http": "^5.1.3",
      "@smithy/smithy-client": "^4.4.10",
      "@smithy/types": "^4.3.2",
      "@smithy/url-parser": "^4.0.5",
      "@smithy/util-base64": "^4.0.0",
      "@smithy/util-body-length-browser": "^4.0.0",
      "@smithy/util-body-length-node": "^4.0.0",
      "@smithy/util-defaults-mode-browser": "^4.0.26",
      "@smithy/util-defaults-mode-node": "^4.0.26",
      "@smithy/util-endpoints": "^3.0.7",
      "@smithy/util-middleware": "^4.0.5",
      "@smithy/util-retry": "^4.0.7",
      "@smithy/util-stream": "^4.2.4",
      "@smithy/util-utf8": "^4.0.0",
      tslib: "^2.6.2"
    },
    devDependencies: {
      "@tsconfig/node18": "18.2.4",
      "@types/node": "^18.19.69",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      rimraf: "3.0.2",
      typescript: "~5.8.3"
    },
    engines: {
      node: ">=18.0.0"
    },
    typesVersions: {
      "<4.0": {
        "dist-types/*": [
          "dist-types/ts3.4/*"
        ]
      }
    },
    files: [
      "dist-*/**"
    ],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-polly",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-polly"
    }
  };

  // node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf82 = (input) => new TextEncoder().encode(input);

  // node_modules/@aws-crypto/util/build/module/convertToBuffer.js
  var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : fromUtf82;
  function convertToBuffer(data) {
    if (data instanceof Uint8Array)
      return data;
    if (typeof data === "string") {
      return fromUtf83(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }

  // node_modules/@aws-crypto/util/build/module/isEmptyData.js
  function isEmptyData(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }

  // node_modules/@aws-crypto/sha256-browser/build/module/constants.js
  var SHA_256_HASH = { name: "SHA-256" };
  var SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: SHA_256_HASH
  };
  var EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
  ]);

  // node_modules/@aws-sdk/util-locate-window/dist-es/index.js
  var fallbackWindow = {};
  function locateWindow() {
    if (typeof window !== "undefined") {
      return window;
    } else if (typeof self !== "undefined") {
      return self;
    }
    return fallbackWindow;
  }

  // node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
  var Sha256 = (
    /** @class */
    (function() {
      function Sha2564(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
      }
      Sha2564.prototype.update = function(data) {
        if (isEmptyData(data)) {
          return;
        }
        var update = convertToBuffer(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha2564.prototype.digest = function() {
        var _this = this;
        if (this.key) {
          return this.key.then(function(key) {
            return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
              return new Uint8Array(data);
            });
          });
        }
        if (isEmptyData(this.toHash)) {
          return Promise.resolve(EMPTY_DATA_SHA_256);
        }
        return Promise.resolve().then(function() {
          return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
        }).then(function(data) {
          return Promise.resolve(new Uint8Array(data));
        });
      };
      Sha2564.prototype.reset = function() {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      };
      return Sha2564;
    })()
  );

  // node_modules/tslib/tslib.es6.mjs
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t2[0] & 1) throw t2[1];
      return t2[1];
    }, trys: [], ops: [] }, f2, y, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
      return this;
    }), g2;
    function verb(n2) {
      return function(v2) {
        return step([n2, v2]);
      };
    }
    function step(op) {
      if (f2) throw new TypeError("Generator is already executing.");
      while (g2 && (g2 = 0, op[0] && (_ = 0)), _) try {
        if (f2 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
        if (y = 0, t2) op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y = 0;
      } finally {
        f2 = t2 = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  // node_modules/@aws-crypto/sha256-js/build/module/constants.js
  var BLOCK_SIZE = 64;
  var DIGEST_LENGTH = 32;
  var KEY = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var INIT = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

  // node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
  var RawSha256 = (
    /** @class */
    (function() {
      function RawSha2562() {
        this.state = Int32Array.from(INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
      }
      RawSha2562.prototype.update = function(data) {
        if (this.finished) {
          throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
          this.buffer[this.bufferLength++] = data[position++];
          byteLength--;
          if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
          }
        }
      };
      RawSha2562.prototype.digest = function() {
        if (!this.finished) {
          var bitsHashed = this.bytesHashed * 8;
          var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
          var undecoratedLength = this.bufferLength;
          bufferView.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i2 = this.bufferLength; i2 < BLOCK_SIZE; i2++) {
              bufferView.setUint8(i2, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
          }
          for (var i2 = this.bufferLength; i2 < BLOCK_SIZE - 8; i2++) {
            bufferView.setUint8(i2, 0);
          }
          bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
          bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
          this.hashBuffer();
          this.finished = true;
        }
        var out = new Uint8Array(DIGEST_LENGTH);
        for (var i2 = 0; i2 < 8; i2++) {
          out[i2 * 4] = this.state[i2] >>> 24 & 255;
          out[i2 * 4 + 1] = this.state[i2] >>> 16 & 255;
          out[i2 * 4 + 2] = this.state[i2] >>> 8 & 255;
          out[i2 * 4 + 3] = this.state[i2] >>> 0 & 255;
        }
        return out;
      };
      RawSha2562.prototype.hashBuffer = function() {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
          if (i2 < 16) {
            this.temp[i2] = (buffer[i2 * 4] & 255) << 24 | (buffer[i2 * 4 + 1] & 255) << 16 | (buffer[i2 * 4 + 2] & 255) << 8 | buffer[i2 * 4 + 3] & 255;
          } else {
            var u2 = this.temp[i2 - 2];
            var t1_1 = (u2 >>> 17 | u2 << 15) ^ (u2 >>> 19 | u2 << 13) ^ u2 >>> 10;
            u2 = this.temp[i2 - 15];
            var t2_1 = (u2 >>> 7 | u2 << 25) ^ (u2 >>> 18 | u2 << 14) ^ u2 >>> 3;
            this.temp[i2] = (t1_1 + this.temp[i2 - 7] | 0) + (t2_1 + this.temp[i2 - 16] | 0);
          }
          var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i2] + this.temp[i2] | 0) | 0) | 0;
          var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
          state7 = state6;
          state6 = state5;
          state5 = state4;
          state4 = state3 + t1 | 0;
          state3 = state2;
          state2 = state1;
          state1 = state0;
          state0 = t1 + t2 | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
      };
      return RawSha2562;
    })()
  );

  // node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
  var Sha2562 = (
    /** @class */
    (function() {
      function Sha2564(secret) {
        this.secret = secret;
        this.hash = new RawSha256();
        this.reset();
      }
      Sha2564.prototype.update = function(toHash) {
        if (isEmptyData(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update(convertToBuffer(toHash));
        } catch (e2) {
          this.error = e2;
        }
      };
      Sha2564.prototype.digestSync = function() {
        if (this.error) {
          throw this.error;
        }
        if (this.outer) {
          if (!this.outer.finished) {
            this.outer.update(this.hash.digest());
          }
          return this.outer.digest();
        }
        return this.hash.digest();
      };
      Sha2564.prototype.digest = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      };
      Sha2564.prototype.reset = function() {
        this.hash = new RawSha256();
        if (this.secret) {
          this.outer = new RawSha256();
          var inner = bufferFromSecret(this.secret);
          var outer = new Uint8Array(BLOCK_SIZE);
          outer.set(inner);
          for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
            inner[i2] ^= 54;
            outer[i2] ^= 92;
          }
          this.hash.update(inner);
          this.outer.update(outer);
          for (var i2 = 0; i2 < inner.byteLength; i2++) {
            inner[i2] = 0;
          }
        }
      };
      return Sha2564;
    })()
  );
  function bufferFromSecret(secret) {
    var input = convertToBuffer(secret);
    if (input.byteLength > BLOCK_SIZE) {
      var bufferHash = new RawSha256();
      bufferHash.update(input);
      input = bufferHash.digest();
    }
    var buffer = new Uint8Array(BLOCK_SIZE);
    buffer.set(input);
    return buffer;
  }

  // node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
  var subtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
  ];
  function supportsWebCrypto(window2) {
    if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
      var subtle = window2.crypto.subtle;
      return supportsSubtleCrypto(subtle);
    }
    return false;
  }
  function supportsSecureRandom(window2) {
    if (typeof window2 === "object" && typeof window2.crypto === "object") {
      var getRandomValues2 = window2.crypto.getRandomValues;
      return typeof getRandomValues2 === "function";
    }
    return false;
  }
  function supportsSubtleCrypto(subtle) {
    return subtle && subtleCryptoMethods.every(function(methodName) {
      return typeof subtle[methodName] === "function";
    });
  }

  // node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
  var Sha2563 = (
    /** @class */
    (function() {
      function Sha2564(secret) {
        if (supportsWebCrypto(locateWindow())) {
          this.hash = new Sha256(secret);
        } else {
          this.hash = new Sha2562(secret);
        }
      }
      Sha2564.prototype.update = function(data, encoding) {
        this.hash.update(convertToBuffer(data));
      };
      Sha2564.prototype.digest = function() {
        return this.hash.digest();
      };
      Sha2564.prototype.reset = function() {
        this.hash.reset();
      };
      return Sha2564;
    })()
  );

  // node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
  var import_bowser = __toESM(require_es5());
  var createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => async (config) => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
    const sections = [
      ["aws-sdk-js", clientVersion],
      ["ua", "2.1"],
      [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
      ["lang/js"],
      ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
    ];
    if (serviceId) {
      sections.push([`api/${serviceId}`, clientVersion]);
    }
    const appId = await config?.userAgentAppId?.();
    if (appId) {
      sections.push([`app/${appId}`]);
    }
    return sections;
  };

  // node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
  var invalidProvider = (message) => () => Promise.reject(message);

  // node_modules/@aws-sdk/client-polly/dist-es/endpoint/ruleset.js
  var s = "required";
  var t = "fn";
  var u = "argv";
  var v = "ref";
  var a = true;
  var b = "isSet";
  var c = "booleanEquals";
  var d = "error";
  var e = "endpoint";
  var f = "tree";
  var g = "PartitionResult";
  var h = { [s]: false, "type": "String" };
  var i = { [s]: true, "default": false, "type": "Boolean" };
  var j = { [v]: "Endpoint" };
  var k = { [t]: c, [u]: [{ [v]: "UseFIPS" }, true] };
  var l = { [t]: c, [u]: [{ [v]: "UseDualStack" }, true] };
  var m = {};
  var n = { [t]: "getAttr", [u]: [{ [v]: g }, "supportsFIPS"] };
  var o = { [t]: c, [u]: [true, { [t]: "getAttr", [u]: [{ [v]: g }, "supportsDualStack"] }] };
  var p = [k];
  var q = [l];
  var r = [{ [v]: "Region" }];
  var _data = { version: "1.0", parameters: { Region: h, UseDualStack: i, UseFIPS: i, Endpoint: h }, rules: [{ conditions: [{ [t]: b, [u]: [j] }], rules: [{ conditions: p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: j, properties: m, headers: m }, type: e }], type: f }, { conditions: [{ [t]: b, [u]: r }], rules: [{ conditions: [{ [t]: "aws.partition", [u]: r, assign: g }], rules: [{ conditions: [k, l], rules: [{ conditions: [{ [t]: c, [u]: [a, n] }, o], rules: [{ endpoint: { url: "https://polly-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: p, rules: [{ conditions: [{ [t]: c, [u]: [n, a] }], rules: [{ endpoint: { url: "https://polly-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: q, rules: [{ conditions: [o], rules: [{ endpoint: { url: "https://polly.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://polly.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
  var ruleSet = _data;

  // node_modules/@aws-sdk/client-polly/dist-es/endpoint/endpointResolver.js
  var cache = new EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
  });
  var defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
      endpointParams,
      logger: context.logger
    }));
  };
  customEndpointFunctions.aws = awsEndpointFunctions;

  // node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.shared.js
  var getRuntimeConfig = (config) => {
    return {
      apiVersion: "2016-06-10",
      base64Decoder: config?.base64Decoder ?? fromBase64,
      base64Encoder: config?.base64Encoder ?? toBase64,
      disableHostPrefix: config?.disableHostPrefix ?? false,
      endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
      extensions: config?.extensions ?? [],
      httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultPollyHttpAuthSchemeProvider,
      httpAuthSchemes: config?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
          signer: new AwsSdkSigV4Signer()
        }
      ],
      logger: config?.logger ?? new NoOpLogger(),
      sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin,
      serviceId: config?.serviceId ?? "Polly",
      urlParser: config?.urlParser ?? parseUrl,
      utf8Decoder: config?.utf8Decoder ?? fromUtf8,
      utf8Encoder: config?.utf8Encoder ?? toUtf8
    };
  };

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
  var import_bowser2 = __toESM(require_es5());

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
  var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
  var resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
      case "auto":
        return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
      case "mobile":
      case "in-region":
      case "cross-region":
      case "standard":
      case "legacy":
        return Promise.resolve(mode?.toLocaleLowerCase());
      case void 0:
        return Promise.resolve("legacy");
      default:
        throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
  });
  var isMobileBrowser = () => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser2.default.parse(window.navigator.userAgent) : void 0;
    const platform = parsedUA?.platform?.type;
    return platform === "tablet" || platform === "mobile";
  };

  // node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.browser.js
  var getRuntimeConfig2 = (config) => {
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig(config);
    return {
      ...clientSharedValues,
      ...config,
      runtime: "browser",
      defaultsMode,
      bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
      credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
      defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
      maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
      region: config?.region ?? invalidProvider("Region is missing"),
      requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
      retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
      sha256: config?.sha256 ?? Sha2563,
      streamCollector: config?.streamCollector ?? streamCollector,
      useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
      useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
    };
  };

  // node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
  var getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    return {
      setRegion(region) {
        runtimeConfig.region = region;
      },
      region() {
        return runtimeConfig.region;
      }
    };
  };
  var resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
      region: awsRegionExtensionConfiguration.region()
    };
  };

  // node_modules/@aws-sdk/client-polly/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
      setHttpAuthScheme(httpAuthScheme) {
        const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
        if (index === -1) {
          _httpAuthSchemes.push(httpAuthScheme);
        } else {
          _httpAuthSchemes.splice(index, 1, httpAuthScheme);
        }
      },
      httpAuthSchemes() {
        return _httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
        _httpAuthSchemeProvider = httpAuthSchemeProvider;
      },
      httpAuthSchemeProvider() {
        return _httpAuthSchemeProvider;
      },
      setCredentials(credentials) {
        _credentials = credentials;
      },
      credentials() {
        return _credentials;
      }
    };
  };
  var resolveHttpAuthRuntimeConfig = (config) => {
    return {
      httpAuthSchemes: config.httpAuthSchemes(),
      httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
      credentials: config.credentials()
    };
  };

  // node_modules/@aws-sdk/client-polly/dist-es/runtimeExtensions.js
  var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
  };

  // node_modules/@aws-sdk/client-polly/dist-es/PollyClient.js
  var PollyClient = class extends Client {
    config;
    constructor(...[configuration]) {
      const _config_0 = getRuntimeConfig2(configuration || {});
      super(_config_0);
      this.initConfig = _config_0;
      const _config_1 = resolveClientEndpointParameters(_config_0);
      const _config_2 = resolveUserAgentConfig(_config_1);
      const _config_3 = resolveRetryConfig(_config_2);
      const _config_4 = resolveRegionConfig(_config_3);
      const _config_5 = resolveHostHeaderConfig(_config_4);
      const _config_6 = resolveEndpointConfig(_config_5);
      const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
      const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
      this.config = _config_8;
      this.middlewareStack.use(getUserAgentPlugin(this.config));
      this.middlewareStack.use(getRetryPlugin(this.config));
      this.middlewareStack.use(getContentLengthPlugin(this.config));
      this.middlewareStack.use(getHostHeaderPlugin(this.config));
      this.middlewareStack.use(getLoggerPlugin(this.config));
      this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultPollyHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        })
      }));
      this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };

  // node_modules/@aws-sdk/client-polly/dist-es/models/PollyServiceException.js
  var PollyServiceException = class _PollyServiceException extends ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, _PollyServiceException.prototype);
    }
  };

  // node_modules/@aws-sdk/client-polly/dist-es/models/models_0.js
  var LexiconNotFoundException = class _LexiconNotFoundException extends PollyServiceException {
    name = "LexiconNotFoundException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "LexiconNotFoundException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _LexiconNotFoundException.prototype);
    }
  };
  var ServiceFailureException = class _ServiceFailureException extends PollyServiceException {
    name = "ServiceFailureException";
    $fault = "server";
    constructor(opts) {
      super({
        name: "ServiceFailureException",
        $fault: "server",
        ...opts
      });
      Object.setPrototypeOf(this, _ServiceFailureException.prototype);
    }
  };
  var InvalidNextTokenException = class _InvalidNextTokenException extends PollyServiceException {
    name = "InvalidNextTokenException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidNextTokenException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidNextTokenException.prototype);
    }
  };
  var EngineNotSupportedException = class _EngineNotSupportedException extends PollyServiceException {
    name = "EngineNotSupportedException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "EngineNotSupportedException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _EngineNotSupportedException.prototype);
    }
  };
  var InvalidTaskIdException = class _InvalidTaskIdException extends PollyServiceException {
    name = "InvalidTaskIdException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidTaskIdException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidTaskIdException.prototype);
    }
  };
  var SynthesisTaskNotFoundException = class _SynthesisTaskNotFoundException extends PollyServiceException {
    name = "SynthesisTaskNotFoundException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "SynthesisTaskNotFoundException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _SynthesisTaskNotFoundException.prototype);
    }
  };
  var InvalidLexiconException = class _InvalidLexiconException extends PollyServiceException {
    name = "InvalidLexiconException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidLexiconException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidLexiconException.prototype);
    }
  };
  var InvalidS3BucketException = class _InvalidS3BucketException extends PollyServiceException {
    name = "InvalidS3BucketException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidS3BucketException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidS3BucketException.prototype);
    }
  };
  var InvalidS3KeyException = class _InvalidS3KeyException extends PollyServiceException {
    name = "InvalidS3KeyException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidS3KeyException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidS3KeyException.prototype);
    }
  };
  var InvalidSampleRateException = class _InvalidSampleRateException extends PollyServiceException {
    name = "InvalidSampleRateException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidSampleRateException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidSampleRateException.prototype);
    }
  };
  var InvalidSnsTopicArnException = class _InvalidSnsTopicArnException extends PollyServiceException {
    name = "InvalidSnsTopicArnException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidSnsTopicArnException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidSnsTopicArnException.prototype);
    }
  };
  var InvalidSsmlException = class _InvalidSsmlException extends PollyServiceException {
    name = "InvalidSsmlException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidSsmlException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _InvalidSsmlException.prototype);
    }
  };
  var LanguageNotSupportedException = class _LanguageNotSupportedException extends PollyServiceException {
    name = "LanguageNotSupportedException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "LanguageNotSupportedException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _LanguageNotSupportedException.prototype);
    }
  };
  var LexiconSizeExceededException = class _LexiconSizeExceededException extends PollyServiceException {
    name = "LexiconSizeExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "LexiconSizeExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _LexiconSizeExceededException.prototype);
    }
  };
  var MarksNotSupportedForFormatException = class _MarksNotSupportedForFormatException extends PollyServiceException {
    name = "MarksNotSupportedForFormatException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "MarksNotSupportedForFormatException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _MarksNotSupportedForFormatException.prototype);
    }
  };
  var MaxLexemeLengthExceededException = class _MaxLexemeLengthExceededException extends PollyServiceException {
    name = "MaxLexemeLengthExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "MaxLexemeLengthExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _MaxLexemeLengthExceededException.prototype);
    }
  };
  var MaxLexiconsNumberExceededException = class _MaxLexiconsNumberExceededException extends PollyServiceException {
    name = "MaxLexiconsNumberExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "MaxLexiconsNumberExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _MaxLexiconsNumberExceededException.prototype);
    }
  };
  var UnsupportedPlsAlphabetException = class _UnsupportedPlsAlphabetException extends PollyServiceException {
    name = "UnsupportedPlsAlphabetException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "UnsupportedPlsAlphabetException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _UnsupportedPlsAlphabetException.prototype);
    }
  };
  var UnsupportedPlsLanguageException = class _UnsupportedPlsLanguageException extends PollyServiceException {
    name = "UnsupportedPlsLanguageException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "UnsupportedPlsLanguageException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _UnsupportedPlsLanguageException.prototype);
    }
  };
  var SsmlMarksNotSupportedForTextTypeException = class _SsmlMarksNotSupportedForTextTypeException extends PollyServiceException {
    name = "SsmlMarksNotSupportedForTextTypeException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "SsmlMarksNotSupportedForTextTypeException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _SsmlMarksNotSupportedForTextTypeException.prototype);
    }
  };
  var TextLengthExceededException = class _TextLengthExceededException extends PollyServiceException {
    name = "TextLengthExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "TextLengthExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, _TextLengthExceededException.prototype);
    }
  };
  var SynthesizeSpeechOutputFilterSensitiveLog = (obj) => ({
    ...obj
  });

  // node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js
  var se_SynthesizeSpeechCommand = async (input, context) => {
    const b2 = requestBuilder(input, context);
    const headers = {
      "content-type": "application/json"
    };
    b2.bp("/v1/speech");
    let body;
    body = JSON.stringify(take(input, {
      Engine: [],
      LanguageCode: [],
      LexiconNames: (_) => _json(_),
      OutputFormat: [],
      SampleRate: [],
      SpeechMarkTypes: (_) => _json(_),
      Text: [],
      TextType: [],
      VoiceId: []
    }));
    b2.m("POST").h(headers).b(body);
    return b2.build();
  };
  var de_SynthesizeSpeechCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
      return de_CommandError(output, context);
    }
    const contents = map({
      $metadata: deserializeMetadata2(output),
      [_CT]: [, output.headers[_ct]],
      [_RC]: [() => void 0 !== output.headers[_xar], () => strictParseInt32(output.headers[_xar])]
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.AudioStream = data;
    return contents;
  };
  var de_CommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseJsonErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "LexiconNotFoundException":
      case "com.amazonaws.polly#LexiconNotFoundException":
        throw await de_LexiconNotFoundExceptionRes(parsedOutput, context);
      case "ServiceFailureException":
      case "com.amazonaws.polly#ServiceFailureException":
        throw await de_ServiceFailureExceptionRes(parsedOutput, context);
      case "InvalidNextTokenException":
      case "com.amazonaws.polly#InvalidNextTokenException":
        throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
      case "InvalidTaskIdException":
      case "com.amazonaws.polly#InvalidTaskIdException":
        throw await de_InvalidTaskIdExceptionRes(parsedOutput, context);
      case "SynthesisTaskNotFoundException":
      case "com.amazonaws.polly#SynthesisTaskNotFoundException":
        throw await de_SynthesisTaskNotFoundExceptionRes(parsedOutput, context);
      case "InvalidLexiconException":
      case "com.amazonaws.polly#InvalidLexiconException":
        throw await de_InvalidLexiconExceptionRes(parsedOutput, context);
      case "LexiconSizeExceededException":
      case "com.amazonaws.polly#LexiconSizeExceededException":
        throw await de_LexiconSizeExceededExceptionRes(parsedOutput, context);
      case "MaxLexemeLengthExceededException":
      case "com.amazonaws.polly#MaxLexemeLengthExceededException":
        throw await de_MaxLexemeLengthExceededExceptionRes(parsedOutput, context);
      case "MaxLexiconsNumberExceededException":
      case "com.amazonaws.polly#MaxLexiconsNumberExceededException":
        throw await de_MaxLexiconsNumberExceededExceptionRes(parsedOutput, context);
      case "UnsupportedPlsAlphabetException":
      case "com.amazonaws.polly#UnsupportedPlsAlphabetException":
        throw await de_UnsupportedPlsAlphabetExceptionRes(parsedOutput, context);
      case "UnsupportedPlsLanguageException":
      case "com.amazonaws.polly#UnsupportedPlsLanguageException":
        throw await de_UnsupportedPlsLanguageExceptionRes(parsedOutput, context);
      case "EngineNotSupportedException":
      case "com.amazonaws.polly#EngineNotSupportedException":
        throw await de_EngineNotSupportedExceptionRes(parsedOutput, context);
      case "InvalidS3BucketException":
      case "com.amazonaws.polly#InvalidS3BucketException":
        throw await de_InvalidS3BucketExceptionRes(parsedOutput, context);
      case "InvalidS3KeyException":
      case "com.amazonaws.polly#InvalidS3KeyException":
        throw await de_InvalidS3KeyExceptionRes(parsedOutput, context);
      case "InvalidSampleRateException":
      case "com.amazonaws.polly#InvalidSampleRateException":
        throw await de_InvalidSampleRateExceptionRes(parsedOutput, context);
      case "InvalidSnsTopicArnException":
      case "com.amazonaws.polly#InvalidSnsTopicArnException":
        throw await de_InvalidSnsTopicArnExceptionRes(parsedOutput, context);
      case "InvalidSsmlException":
      case "com.amazonaws.polly#InvalidSsmlException":
        throw await de_InvalidSsmlExceptionRes(parsedOutput, context);
      case "LanguageNotSupportedException":
      case "com.amazonaws.polly#LanguageNotSupportedException":
        throw await de_LanguageNotSupportedExceptionRes(parsedOutput, context);
      case "MarksNotSupportedForFormatException":
      case "com.amazonaws.polly#MarksNotSupportedForFormatException":
        throw await de_MarksNotSupportedForFormatExceptionRes(parsedOutput, context);
      case "SsmlMarksNotSupportedForTextTypeException":
      case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
        throw await de_SsmlMarksNotSupportedForTextTypeExceptionRes(parsedOutput, context);
      case "TextLengthExceededException":
      case "com.amazonaws.polly#TextLengthExceededException":
        throw await de_TextLengthExceededExceptionRes(parsedOutput, context);
      default:
        const parsedBody = parsedOutput.body;
        return throwDefaultError2({
          output,
          parsedBody,
          errorCode
        });
    }
  };
  var throwDefaultError2 = withBaseException(PollyServiceException);
  var de_EngineNotSupportedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new EngineNotSupportedException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidLexiconExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidLexiconException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidNextTokenExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidNextTokenException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidS3BucketExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidS3BucketException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidS3KeyExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidS3KeyException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidSampleRateExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidSampleRateException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidSnsTopicArnExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidSnsTopicArnException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidSsmlExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidSsmlException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_InvalidTaskIdExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new InvalidTaskIdException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_LanguageNotSupportedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new LanguageNotSupportedException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_LexiconNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new LexiconNotFoundException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_LexiconSizeExceededExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new LexiconSizeExceededException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_MarksNotSupportedForFormatExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new MarksNotSupportedForFormatException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_MaxLexemeLengthExceededExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new MaxLexemeLengthExceededException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_MaxLexiconsNumberExceededExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new MaxLexiconsNumberExceededException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_ServiceFailureExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new ServiceFailureException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_SsmlMarksNotSupportedForTextTypeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new SsmlMarksNotSupportedForTextTypeException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_SynthesisTaskNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new SynthesisTaskNotFoundException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_TextLengthExceededExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new TextLengthExceededException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_UnsupportedPlsAlphabetExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedPlsAlphabetException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var de_UnsupportedPlsLanguageExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
      message: expectString
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedPlsLanguageException({
      $metadata: deserializeMetadata2(parsedOutput),
      ...contents
    });
    return decorateServiceException(exception, parsedOutput.body);
  };
  var deserializeMetadata2 = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  });
  var _CT = "ContentType";
  var _RC = "RequestCharacters";
  var _ct = "content-type";
  var _xar = "x-amzn-requestcharacters";

  // node_modules/@aws-sdk/client-polly/dist-es/commands/SynthesizeSpeechCommand.js
  var SynthesizeSpeechCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config, o2) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
    ];
  }).s("Parrot_v1", "SynthesizeSpeech", {}).n("PollyClient", "SynthesizeSpeechCommand").f(void 0, SynthesizeSpeechOutputFilterSensitiveLog).ser(se_SynthesizeSpeechCommand).de(de_SynthesizeSpeechCommand).build() {
  };
  return __toCommonJS(mod_exports);
})();
