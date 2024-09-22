var PDFPROKTModuleInit = (() => {
  var e =
    "undefined" != typeof document && document.currentScript
      ? document.currentScript.src
      : void 0;
  return (
    "undefined" != typeof __filename && (e = e || __filename),
    function (r = {}) {
      var t,
        n,
        o = r;
      o.ready = new Promise((e, r) => {
        (t = e), (n = r);
      });
      var a,
        i,
        s,
        l = Object.assign({}, o),
        u = "./this.program",
        d = "object" == typeof window,
        c = "function" == typeof importScripts,
        f =
          "object" == typeof process &&
          "object" == typeof process.versions &&
          "string" == typeof process.versions.node,
        p = "";
      if (f) {
        var h = require("fs"),
          m = require("path");
        (p = c ? m.dirname(p) + "/" : __dirname + "/"),
          (a = (e, r) => (
            (e = V(e) ? new URL(e) : m.normalize(e)),
            h.readFileSync(e, r ? void 0 : "utf8")
          )),
          (s = (e) => {
            var r = a(e, !0);
            return r.buffer || (r = new Uint8Array(r)), r;
          }),
          (i = (e, r, t, n = !0) => {
            (e = V(e) ? new URL(e) : m.normalize(e)),
              h.readFile(e, n ? void 0 : "utf8", (e, o) => {
                e ? t(e) : r(n ? o.buffer : o);
              });
          }),
          !o.thisProgram &&
            process.argv.length > 1 &&
            (u = process.argv[1].replace(/\\/g, "/")),
          process.argv.slice(2),
          (e, r) => {
            throw ((process.exitCode = e), r);
          },
          (o.inspect = () => "[Emscripten Module object]");
      } else
        (d || c) &&
          (c
            ? (p = self.location.href)
            : "undefined" != typeof document &&
              document.currentScript &&
              (p = document.currentScript.src),
          e && (p = e),
          (p =
            0 !== p.indexOf("blob:")
              ? p.substr(0, p.replace(/[?#].*/, "").lastIndexOf("/") + 1)
              : ""),
          (a = (e) => {
            var r = new XMLHttpRequest();
            return r.open("GET", e, !1), r.send(null), r.responseText;
          }),
          c &&
            (s = (e) => {
              var r = new XMLHttpRequest();
              return (
                r.open("GET", e, !1),
                (r.responseType = "arraybuffer"),
                r.send(null),
                new Uint8Array(r.response)
              );
            }),
          (i = (e, r, t) => {
            var n = new XMLHttpRequest();
            n.open("GET", e, !0),
              (n.responseType = "arraybuffer"),
              (n.onload = () => {
                200 == n.status || (0 == n.status && n.response)
                  ? r(n.response)
                  : t();
              }),
              (n.onerror = t),
              n.send(null);
          }));
      var v,
        y = o.print || console.log.bind(console),
        g = o.printErr || console.error.bind(console);
      Object.assign(o, l),
        (l = null),
        o.arguments && o.arguments,
        o.thisProgram && (u = o.thisProgram),
        o.quit && o.quit,
        o.wasmBinary && (v = o.wasmBinary);
      var w;
      o.noExitRuntime;
      "object" != typeof WebAssembly && W("no native wasm support detected");
      var E,
        b,
        _,
        $,
        k,
        C,
        P,
        D,
        F = !1;

      function S(e, r) {
        e || W(r);
      }

      function T() {
        var e = w.buffer;
        (o.HEAP8 = E = new Int8Array(e)),
          (o.HEAP16 = _ = new Int16Array(e)),
          (o.HEAPU8 = b = new Uint8Array(e)),
          (o.HEAPU16 = $ = new Uint16Array(e)),
          (o.HEAP32 = k = new Int32Array(e)),
          (o.HEAPU32 = C = new Uint32Array(e)),
          (o.HEAPF32 = P = new Float32Array(e)),
          (o.HEAPF64 = D = new Float64Array(e));
      }

      var M = [],
        A = [],
        j = [],
        O = !1;
      var R = 0,
        z = null,
        x = null;

      function N(e) {
        R++, o.monitorRunDependencies && o.monitorRunDependencies(R);
      }

      function U(e) {
        if (
          (R--,
          o.monitorRunDependencies && o.monitorRunDependencies(R),
          0 == R && (null !== z && (clearInterval(z), (z = null)), x))
        ) {
          var r = x;
          (x = null), r();
        }
      }

      function W(e) {
        o.onAbort && o.onAbort(e),
          g((e = "Aborted(" + e + ")")),
          (F = !0),
          1,
          (e += ". Build with -sASSERTIONS for more info."),
          O && pt();
        var r = new WebAssembly.RuntimeError(e);
        throw (n(r), r);
      }

      var I, L, H, B;

      function Y(e) {
        return e.startsWith("data:application/octet-stream;base64,");
      }

      function V(e) {
        return e.startsWith("file://");
      }

      function q(e) {
        if (e == I && v) return new Uint8Array(v);
        if (s) return s(e);
        throw "both async and sync fetching of the wasm failed";
      }

      function X(e, r, t) {
        return (function (e) {
          if (!v && (d || c)) {
            if ("function" == typeof fetch && !V(e))
              return fetch(e, { credentials: "same-origin" })
                .then((r) => {
                  if (!r.ok)
                    throw "failed to load wasm binary file at '" + e + "'";
                  return r.arrayBuffer();
                })
                .catch(() => q(e));
            if (i)
              return new Promise((r, t) => {
                i(e, (e) => r(new Uint8Array(e)), t);
              });
          }
          return Promise.resolve().then(() => q(e));
        })(e)
          .then((e) => WebAssembly.instantiate(e, r))
          .then((e) => e)
          .then(t, (e) => {
            g(`failed to asynchronously prepare wasm: ${e}`), W(e);
          });
      }

      Y((I = "pdfprokt.wasm.wasm")) ||
        ((L = I), (I = o.locateFile ? o.locateFile(L, p) : p + L));
      var G = (e) => {
          for (; e.length > 0; ) e.shift()(o);
        },
        J = {
          isAbs: (e) => "/" === e.charAt(0),
          splitPath: (e) =>
            /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
              .exec(e)
              .slice(1),
          normalizeArray: (e, r) => {
            for (var t = 0, n = e.length - 1; n >= 0; n--) {
              var o = e[n];
              "." === o
                ? e.splice(n, 1)
                : ".." === o
                ? (e.splice(n, 1), t++)
                : t && (e.splice(n, 1), t--);
            }
            if (r) for (; t; t--) e.unshift("..");
            return e;
          },
          normalize: (e) => {
            var r = J.isAbs(e),
              t = "/" === e.substr(-1);
            return (
              (e = J.normalizeArray(
                e.split("/").filter((e) => !!e),
                !r
              ).join("/")) ||
                r ||
                (e = "."),
              e && t && (e += "/"),
              (r ? "/" : "") + e
            );
          },
          dirname: (e) => {
            var r = J.splitPath(e),
              t = r[0],
              n = r[1];
            return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : ".";
          },
          basename: (e) => {
            if ("/" === e) return "/";
            var r = (e = (e = J.normalize(e)).replace(/\/$/, "")).lastIndexOf(
              "/"
            );
            return -1 === r ? e : e.substr(r + 1);
          },
          join: function () {
            var e = Array.prototype.slice.call(arguments);
            return J.normalize(e.join("/"));
          },
          join2: (e, r) => J.normalize(e + "/" + r),
        },
        K = (e) =>
          (K = (() => {
            if (
              "object" == typeof crypto &&
              "function" == typeof crypto.getRandomValues
            )
              return (e) => crypto.getRandomValues(e);
            if (f)
              try {
                var e = require("crypto");
                if (e.randomFillSync) return (r) => e.randomFillSync(r);
                var r = e.randomBytes;
                return (e) => (e.set(r(e.byteLength)), e);
              } catch (e) {}
            W("initRandomDevice");
          })())(e),
        Z = {
          resolve: function () {
            for (
              var e = "", r = !1, t = arguments.length - 1;
              t >= -1 && !r;
              t--
            ) {
              var n = t >= 0 ? arguments[t] : ce.cwd();
              if ("string" != typeof n)
                throw new TypeError(
                  "Arguments to path.resolve must be strings"
                );
              if (!n) return "";
              (e = n + "/" + e), (r = J.isAbs(n));
            }
            return (
              (r ? "/" : "") +
                (e = J.normalizeArray(
                  e.split("/").filter((e) => !!e),
                  !r
                ).join("/")) || "."
            );
          },
          relative: (e, r) => {
            function t(e) {
              for (var r = 0; r < e.length && "" === e[r]; r++);
              for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
              return r > t ? [] : e.slice(r, t - r + 1);
            }

            (e = Z.resolve(e).substr(1)), (r = Z.resolve(r).substr(1));
            for (
              var n = t(e.split("/")),
                o = t(r.split("/")),
                a = Math.min(n.length, o.length),
                i = a,
                s = 0;
              s < a;
              s++
            )
              if (n[s] !== o[s]) {
                i = s;
                break;
              }
            var l = [];
            for (s = i; s < n.length; s++) l.push("..");
            return (l = l.concat(o.slice(i))).join("/");
          },
        },
        Q =
          "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0,
        ee = (e, r, t) => {
          for (var n = r + t, o = r; e[o] && !(o >= n); ) ++o;
          if (o - r > 16 && e.buffer && Q) return Q.decode(e.subarray(r, o));
          for (var a = ""; r < o; ) {
            var i = e[r++];
            if (128 & i) {
              var s = 63 & e[r++];
              if (192 != (224 & i)) {
                var l = 63 & e[r++];
                if (
                  (i =
                    224 == (240 & i)
                      ? ((15 & i) << 12) | (s << 6) | l
                      : ((7 & i) << 18) |
                        (s << 12) |
                        (l << 6) |
                        (63 & e[r++])) < 65536
                )
                  a += String.fromCharCode(i);
                else {
                  var u = i - 65536;
                  a += String.fromCharCode(
                    55296 | (u >> 10),
                    56320 | (1023 & u)
                  );
                }
              } else a += String.fromCharCode(((31 & i) << 6) | s);
            } else a += String.fromCharCode(i);
          }
          return a;
        },
        re = [],
        te = (e) => {
          for (var r = 0, t = 0; t < e.length; ++t) {
            var n = e.charCodeAt(t);
            n <= 127
              ? r++
              : n <= 2047
              ? (r += 2)
              : n >= 55296 && n <= 57343
              ? ((r += 4), ++t)
              : (r += 3);
          }
          return r;
        },
        ne = (e, r, t, n) => {
          if (!(n > 0)) return 0;
          for (var o = t, a = t + n - 1, i = 0; i < e.length; ++i) {
            var s = e.charCodeAt(i);
            if (s >= 55296 && s <= 57343)
              s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++i));
            if (s <= 127) {
              if (t >= a) break;
              r[t++] = s;
            } else if (s <= 2047) {
              if (t + 1 >= a) break;
              (r[t++] = 192 | (s >> 6)), (r[t++] = 128 | (63 & s));
            } else if (s <= 65535) {
              if (t + 2 >= a) break;
              (r[t++] = 224 | (s >> 12)),
                (r[t++] = 128 | ((s >> 6) & 63)),
                (r[t++] = 128 | (63 & s));
            } else {
              if (t + 3 >= a) break;
              (r[t++] = 240 | (s >> 18)),
                (r[t++] = 128 | ((s >> 12) & 63)),
                (r[t++] = 128 | ((s >> 6) & 63)),
                (r[t++] = 128 | (63 & s));
            }
          }
          return (r[t] = 0), t - o;
        };

      function oe(e, r, t) {
        var n = t > 0 ? t : te(e) + 1,
          o = new Array(n),
          a = ne(e, o, 0, o.length);
        return r && (o.length = a), o;
      }

      var ae = {
          ttys: [],
          init() {},
          shutdown() {},
          register(e, r) {
            (ae.ttys[e] = { input: [], output: [], ops: r }),
              ce.registerDevice(e, ae.stream_ops);
          },
          stream_ops: {
            open(e) {
              var r = ae.ttys[e.node.rdev];
              if (!r) throw new ce.ErrnoError(43);
              (e.tty = r), (e.seekable = !1);
            },
            close(e) {
              e.tty.ops.fsync(e.tty);
            },
            fsync(e) {
              e.tty.ops.fsync(e.tty);
            },
            read(e, r, t, n, o) {
              if (!e.tty || !e.tty.ops.get_char) throw new ce.ErrnoError(60);
              for (var a = 0, i = 0; i < n; i++) {
                var s;
                try {
                  s = e.tty.ops.get_char(e.tty);
                } catch (e) {
                  throw new ce.ErrnoError(29);
                }
                if (void 0 === s && 0 === a) throw new ce.ErrnoError(6);
                if (null == s) break;
                a++, (r[t + i] = s);
              }
              return a && (e.node.timestamp = Date.now()), a;
            },
            write(e, r, t, n, o) {
              if (!e.tty || !e.tty.ops.put_char) throw new ce.ErrnoError(60);
              try {
                for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a]);
              } catch (e) {
                throw new ce.ErrnoError(29);
              }
              return n && (e.node.timestamp = Date.now()), a;
            },
          },
          default_tty_ops: {
            get_char: (e) =>
              (() => {
                if (!re.length) {
                  var e = null;
                  if (f) {
                    var r = Buffer.alloc(256),
                      t = 0,
                      n = process.stdin.fd;
                    try {
                      t = h.readSync(n, r);
                    } catch (e) {
                      if (!e.toString().includes("EOF")) throw e;
                      t = 0;
                    }
                    e = t > 0 ? r.slice(0, t).toString("utf-8") : null;
                  } else
                    "undefined" != typeof window &&
                    "function" == typeof window.prompt
                      ? null !== (e = window.prompt("Input: ")) && (e += "\n")
                      : "function" == typeof readline &&
                        null !== (e = readline()) &&
                        (e += "\n");
                  if (!e) return null;
                  re = oe(e, !0);
                }
                return re.shift();
              })(),
            put_char(e, r) {
              null === r || 10 === r
                ? (y(ee(e.output, 0)), (e.output = []))
                : 0 != r && e.output.push(r);
            },
            fsync(e) {
              e.output &&
                e.output.length > 0 &&
                (y(ee(e.output, 0)), (e.output = []));
            },
            ioctl_tcgets: (e) => ({
              c_iflag: 25856,
              c_oflag: 5,
              c_cflag: 191,
              c_lflag: 35387,
              c_cc: [
                3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ],
            }),
            ioctl_tcsets: (e, r, t) => 0,
            ioctl_tiocgwinsz: (e) => [24, 80],
          },
          default_tty1_ops: {
            put_char(e, r) {
              null === r || 10 === r
                ? (g(ee(e.output, 0)), (e.output = []))
                : 0 != r && e.output.push(r);
            },
            fsync(e) {
              e.output &&
                e.output.length > 0 &&
                (g(ee(e.output, 0)), (e.output = []));
            },
          },
        },
        ie = (e) => {
          e = ((e, r) => Math.ceil(e / r) * r)(e, 65536);
          var r = ft(65536, e);
          return r ? ((e, r) => (b.fill(0, e, e + r), e))(r, e) : 0;
        },
        se = {
          ops_table: null,
          mount: (e) => se.createNode(null, "/", 16895, 0),
          createNode(e, r, t, n) {
            if (ce.isBlkdev(t) || ce.isFIFO(t)) throw new ce.ErrnoError(63);
            se.ops_table ||
              (se.ops_table = {
                dir: {
                  node: {
                    getattr: se.node_ops.getattr,
                    setattr: se.node_ops.setattr,
                    lookup: se.node_ops.lookup,
                    mknod: se.node_ops.mknod,
                    rename: se.node_ops.rename,
                    unlink: se.node_ops.unlink,
                    rmdir: se.node_ops.rmdir,
                    readdir: se.node_ops.readdir,
                    symlink: se.node_ops.symlink,
                  },
                  stream: { llseek: se.stream_ops.llseek },
                },
                file: {
                  node: {
                    getattr: se.node_ops.getattr,
                    setattr: se.node_ops.setattr,
                  },
                  stream: {
                    llseek: se.stream_ops.llseek,
                    read: se.stream_ops.read,
                    write: se.stream_ops.write,
                    allocate: se.stream_ops.allocate,
                    mmap: se.stream_ops.mmap,
                    msync: se.stream_ops.msync,
                  },
                },
                link: {
                  node: {
                    getattr: se.node_ops.getattr,
                    setattr: se.node_ops.setattr,
                    readlink: se.node_ops.readlink,
                  },
                  stream: {},
                },
                chrdev: {
                  node: {
                    getattr: se.node_ops.getattr,
                    setattr: se.node_ops.setattr,
                  },
                  stream: ce.chrdev_stream_ops,
                },
              });
            var o = ce.createNode(e, r, t, n);
            return (
              ce.isDir(o.mode)
                ? ((o.node_ops = se.ops_table.dir.node),
                  (o.stream_ops = se.ops_table.dir.stream),
                  (o.contents = {}))
                : ce.isFile(o.mode)
                ? ((o.node_ops = se.ops_table.file.node),
                  (o.stream_ops = se.ops_table.file.stream),
                  (o.usedBytes = 0),
                  (o.contents = null))
                : ce.isLink(o.mode)
                ? ((o.node_ops = se.ops_table.link.node),
                  (o.stream_ops = se.ops_table.link.stream))
                : ce.isChrdev(o.mode) &&
                  ((o.node_ops = se.ops_table.chrdev.node),
                  (o.stream_ops = se.ops_table.chrdev.stream)),
              (o.timestamp = Date.now()),
              e && ((e.contents[r] = o), (e.timestamp = o.timestamp)),
              o
            );
          },
          getFileDataAsTypedArray: (e) =>
            e.contents
              ? e.contents.subarray
                ? e.contents.subarray(0, e.usedBytes)
                : new Uint8Array(e.contents)
              : new Uint8Array(0),
          expandFileStorage(e, r) {
            var t = e.contents ? e.contents.length : 0;
            if (!(t >= r)) {
              (r = Math.max(r, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)),
                0 != t && (r = Math.max(r, 256));
              var n = e.contents;
              (e.contents = new Uint8Array(r)),
                e.usedBytes > 0 &&
                  e.contents.set(n.subarray(0, e.usedBytes), 0);
            }
          },
          resizeFileStorage(e, r) {
            if (e.usedBytes != r)
              if (0 == r) (e.contents = null), (e.usedBytes = 0);
              else {
                var t = e.contents;
                (e.contents = new Uint8Array(r)),
                  t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))),
                  (e.usedBytes = r);
              }
          },
          node_ops: {
            getattr(e) {
              var r = {};
              return (
                (r.dev = ce.isChrdev(e.mode) ? e.id : 1),
                (r.ino = e.id),
                (r.mode = e.mode),
                (r.nlink = 1),
                (r.uid = 0),
                (r.gid = 0),
                (r.rdev = e.rdev),
                ce.isDir(e.mode)
                  ? (r.size = 4096)
                  : ce.isFile(e.mode)
                  ? (r.size = e.usedBytes)
                  : ce.isLink(e.mode)
                  ? (r.size = e.link.length)
                  : (r.size = 0),
                (r.atime = new Date(e.timestamp)),
                (r.mtime = new Date(e.timestamp)),
                (r.ctime = new Date(e.timestamp)),
                (r.blksize = 4096),
                (r.blocks = Math.ceil(r.size / r.blksize)),
                r
              );
            },
            setattr(e, r) {
              void 0 !== r.mode && (e.mode = r.mode),
                void 0 !== r.timestamp && (e.timestamp = r.timestamp),
                void 0 !== r.size && se.resizeFileStorage(e, r.size);
            },
            lookup(e, r) {
              throw ce.genericErrors[44];
            },
            mknod: (e, r, t, n) => se.createNode(e, r, t, n),
            rename(e, r, t) {
              if (ce.isDir(e.mode)) {
                var n;
                try {
                  n = ce.lookupNode(r, t);
                } catch (e) {}
                if (n) for (var o in n.contents) throw new ce.ErrnoError(55);
              }
              delete e.parent.contents[e.name],
                (e.parent.timestamp = Date.now()),
                (e.name = t),
                (r.contents[t] = e),
                (r.timestamp = e.parent.timestamp),
                (e.parent = r);
            },
            unlink(e, r) {
              delete e.contents[r], (e.timestamp = Date.now());
            },
            rmdir(e, r) {
              var t = ce.lookupNode(e, r);
              for (var n in t.contents) throw new ce.ErrnoError(55);
              delete e.contents[r], (e.timestamp = Date.now());
            },
            readdir(e) {
              var r = [".", ".."];
              for (var t in e.contents)
                e.contents.hasOwnProperty(t) && r.push(t);
              return r;
            },
            symlink(e, r, t) {
              var n = se.createNode(e, r, 41471, 0);
              return (n.link = t), n;
            },
            readlink(e) {
              if (!ce.isLink(e.mode)) throw new ce.ErrnoError(28);
              return e.link;
            },
          },
          stream_ops: {
            read(e, r, t, n, o) {
              var a = e.node.contents;
              if (o >= e.node.usedBytes) return 0;
              var i = Math.min(e.node.usedBytes - o, n);
              if (i > 8 && a.subarray) r.set(a.subarray(o, o + i), t);
              else for (var s = 0; s < i; s++) r[t + s] = a[o + s];
              return i;
            },
            write(e, r, t, n, o, a) {
              if ((r.buffer === E.buffer && (a = !1), !n)) return 0;
              var i = e.node;
              if (
                ((i.timestamp = Date.now()),
                r.subarray && (!i.contents || i.contents.subarray))
              ) {
                if (a)
                  return (
                    (i.contents = r.subarray(t, t + n)), (i.usedBytes = n), n
                  );
                if (0 === i.usedBytes && 0 === o)
                  return (i.contents = r.slice(t, t + n)), (i.usedBytes = n), n;
                if (o + n <= i.usedBytes)
                  return i.contents.set(r.subarray(t, t + n), o), n;
              }
              if (
                (se.expandFileStorage(i, o + n),
                i.contents.subarray && r.subarray)
              )
                i.contents.set(r.subarray(t, t + n), o);
              else for (var s = 0; s < n; s++) i.contents[o + s] = r[t + s];
              return (i.usedBytes = Math.max(i.usedBytes, o + n)), n;
            },
            llseek(e, r, t) {
              var n = r;
              if (
                (1 === t
                  ? (n += e.position)
                  : 2 === t &&
                    ce.isFile(e.node.mode) &&
                    (n += e.node.usedBytes),
                n < 0)
              )
                throw new ce.ErrnoError(28);
              return n;
            },
            allocate(e, r, t) {
              se.expandFileStorage(e.node, r + t),
                (e.node.usedBytes = Math.max(e.node.usedBytes, r + t));
            },
            mmap(e, r, t, n, o) {
              if (!ce.isFile(e.node.mode)) throw new ce.ErrnoError(43);
              var a,
                i,
                s = e.node.contents;
              if (2 & o || s.buffer !== E.buffer) {
                if (
                  ((t > 0 || t + r < s.length) &&
                    (s = s.subarray
                      ? s.subarray(t, t + r)
                      : Array.prototype.slice.call(s, t, t + r)),
                  (i = !0),
                  !(a = ie(r)))
                )
                  throw new ce.ErrnoError(48);
                E.set(s, a);
              } else (i = !1), (a = s.byteOffset);
              return { ptr: a, allocated: i };
            },
            msync: (e, r, t, n, o) => (
              se.stream_ops.write(e, r, 0, n, t, !1), 0
            ),
          },
        },
        le = o.preloadPlugins || [],
        ue = (e, r) => {
          var t = 0;
          return e && (t |= 365), r && (t |= 146), t;
        },
        de = {
          DIR_MODE: 16895,
          FILE_MODE: 33279,
          reader: null,
          mount(e) {
            S(c), de.reader || (de.reader = new FileReaderSync());
            var r = de.createNode(null, "/", de.DIR_MODE, 0),
              t = {};

            function n(e) {
              for (var n = e.split("/"), o = r, a = 0; a < n.length - 1; a++) {
                var i = n.slice(0, a + 1).join("/");
                t[i] || (t[i] = de.createNode(o, n[a], de.DIR_MODE, 0)),
                  (o = t[i]);
              }
              return o;
            }

            function o(e) {
              var r = e.split("/");
              return r[r.length - 1];
            }

            return (
              Array.prototype.forEach.call(e.opts.files || [], function (e) {
                de.createNode(
                  n(e.name),
                  o(e.name),
                  de.FILE_MODE,
                  0,
                  e,
                  e.lastModifiedDate
                );
              }),
              (e.opts.blobs || []).forEach(function (e) {
                de.createNode(n(e.name), o(e.name), de.FILE_MODE, 0, e.data);
              }),
              (e.opts.packages || []).forEach(function (e) {
                e.metadata.files.forEach(function (r) {
                  var t = r.filename.substr(1);
                  de.createNode(
                    n(t),
                    o(t),
                    de.FILE_MODE,
                    0,
                    e.blob.slice(r.start, r.end)
                  );
                });
              }),
              r
            );
          },
          createNode(e, r, t, n, o, a) {
            var i = ce.createNode(e, r, t);
            return (
              (i.mode = t),
              (i.node_ops = de.node_ops),
              (i.stream_ops = de.stream_ops),
              (i.timestamp = (a || new Date()).getTime()),
              S(de.FILE_MODE !== de.DIR_MODE),
              t === de.FILE_MODE
                ? ((i.size = o.size), (i.contents = o))
                : ((i.size = 4096), (i.contents = {})),
              e && (e.contents[r] = i),
              i
            );
          },
          node_ops: {
            getattr: (e) => ({
              dev: 1,
              ino: e.id,
              mode: e.mode,
              nlink: 1,
              uid: 0,
              gid: 0,
              rdev: 0,
              size: e.size,
              atime: new Date(e.timestamp),
              mtime: new Date(e.timestamp),
              ctime: new Date(e.timestamp),
              blksize: 4096,
              blocks: Math.ceil(e.size / 4096),
            }),
            setattr(e, r) {
              void 0 !== r.mode && (e.mode = r.mode),
                void 0 !== r.timestamp && (e.timestamp = r.timestamp);
            },
            lookup(e, r) {
              throw new ce.ErrnoError(44);
            },
            mknod(e, r, t, n) {
              throw new ce.ErrnoError(63);
            },
            rename(e, r, t) {
              throw new ce.ErrnoError(63);
            },
            unlink(e, r) {
              throw new ce.ErrnoError(63);
            },
            rmdir(e, r) {
              throw new ce.ErrnoError(63);
            },
            readdir(e) {
              var r = [".", ".."];
              for (var t in e.contents)
                e.contents.hasOwnProperty(t) && r.push(t);
              return r;
            },
            symlink(e, r, t) {
              throw new ce.ErrnoError(63);
            },
          },
          stream_ops: {
            read(e, r, t, n, o) {
              if (o >= e.node.size) return 0;
              var a = e.node.contents.slice(o, o + n),
                i = de.reader.readAsArrayBuffer(a);
              return r.set(new Uint8Array(i), t), a.size;
            },
            write(e, r, t, n, o) {
              throw new ce.ErrnoError(29);
            },
            llseek(e, r, t) {
              var n = r;
              if (
                (1 === t
                  ? (n += e.position)
                  : 2 === t && ce.isFile(e.node.mode) && (n += e.node.size),
                n < 0)
              )
                throw new ce.ErrnoError(28);
              return n;
            },
          },
        },
        ce = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: "/",
          initialized: !1,
          ignorePermissions: !0,
          ErrnoError: null,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          lookupPath(e, r = {}) {
            if (!(e = Z.resolve(e))) return { path: "", node: null };
            if (
              (r = Object.assign(
                {
                  follow_mount: !0,
                  recurse_count: 0,
                },
                r
              )).recurse_count > 8
            )
              throw new ce.ErrnoError(32);
            for (
              var t = e.split("/").filter((e) => !!e),
                n = ce.root,
                o = "/",
                a = 0;
              a < t.length;
              a++
            ) {
              var i = a === t.length - 1;
              if (i && r.parent) break;
              if (
                ((n = ce.lookupNode(n, t[a])),
                (o = J.join2(o, t[a])),
                ce.isMountpoint(n) &&
                  (!i || (i && r.follow_mount)) &&
                  (n = n.mounted.root),
                !i || r.follow)
              )
                for (var s = 0; ce.isLink(n.mode); ) {
                  var l = ce.readlink(o);
                  if (
                    ((o = Z.resolve(J.dirname(o), l)),
                    (n = ce.lookupPath(o, {
                      recurse_count: r.recurse_count + 1,
                    }).node),
                    s++ > 40)
                  )
                    throw new ce.ErrnoError(32);
                }
            }
            return { path: o, node: n };
          },
          getPath(e) {
            for (var r; ; ) {
              if (ce.isRoot(e)) {
                var t = e.mount.mountpoint;
                return r ? ("/" !== t[t.length - 1] ? `${t}/${r}` : t + r) : t;
              }
              (r = r ? `${e.name}/${r}` : e.name), (e = e.parent);
            }
          },
          hashName(e, r) {
            for (var t = 0, n = 0; n < r.length; n++)
              t = ((t << 5) - t + r.charCodeAt(n)) | 0;
            return ((e + t) >>> 0) % ce.nameTable.length;
          },
          hashAddNode(e) {
            var r = ce.hashName(e.parent.id, e.name);
            (e.name_next = ce.nameTable[r]), (ce.nameTable[r] = e);
          },
          hashRemoveNode(e) {
            var r = ce.hashName(e.parent.id, e.name);
            if (ce.nameTable[r] === e) ce.nameTable[r] = e.name_next;
            else
              for (var t = ce.nameTable[r]; t; ) {
                if (t.name_next === e) {
                  t.name_next = e.name_next;
                  break;
                }
                t = t.name_next;
              }
          },
          lookupNode(e, r) {
            var t = ce.mayLookup(e);
            if (t) throw new ce.ErrnoError(t, e);
            for (
              var n = ce.hashName(e.id, r), o = ce.nameTable[n];
              o;
              o = o.name_next
            ) {
              var a = o.name;
              if (o.parent.id === e.id && a === r) return o;
            }
            return ce.lookup(e, r);
          },
          createNode(e, r, t, n) {
            var o = new ce.FSNode(e, r, t, n);
            return ce.hashAddNode(o), o;
          },
          destroyNode(e) {
            ce.hashRemoveNode(e);
          },
          isRoot: (e) => e === e.parent,
          isMountpoint: (e) => !!e.mounted,
          isFile: (e) => 32768 == (61440 & e),
          isDir: (e) => 16384 == (61440 & e),
          isLink: (e) => 40960 == (61440 & e),
          isChrdev: (e) => 8192 == (61440 & e),
          isBlkdev: (e) => 24576 == (61440 & e),
          isFIFO: (e) => 4096 == (61440 & e),
          isSocket: (e) => 49152 == (49152 & e),
          flagsToPermissionString(e) {
            var r = ["r", "w", "rw"][3 & e];
            return 512 & e && (r += "w"), r;
          },
          nodePermissions: (e, r) =>
            ce.ignorePermissions ||
            ((!r.includes("r") || 292 & e.mode) &&
              (!r.includes("w") || 146 & e.mode) &&
              (!r.includes("x") || 73 & e.mode))
              ? 0
              : 2,
          mayLookup(e) {
            var r = ce.nodePermissions(e, "x");
            return r || (e.node_ops.lookup ? 0 : 2);
          },
          mayCreate(e, r) {
            try {
              ce.lookupNode(e, r);
              return 20;
            } catch (e) {}
            return ce.nodePermissions(e, "wx");
          },
          mayDelete(e, r, t) {
            var n;
            try {
              n = ce.lookupNode(e, r);
            } catch (e) {
              return e.errno;
            }
            var o = ce.nodePermissions(e, "wx");
            if (o) return o;
            if (t) {
              if (!ce.isDir(n.mode)) return 54;
              if (ce.isRoot(n) || ce.getPath(n) === ce.cwd()) return 10;
            } else if (ce.isDir(n.mode)) return 31;
            return 0;
          },
          mayOpen: (e, r) =>
            e
              ? ce.isLink(e.mode)
                ? 32
                : ce.isDir(e.mode) &&
                  ("r" !== ce.flagsToPermissionString(r) || 512 & r)
                ? 31
                : ce.nodePermissions(e, ce.flagsToPermissionString(r))
              : 44,
          MAX_OPEN_FDS: 4096,
          nextfd() {
            for (var e = 0; e <= ce.MAX_OPEN_FDS; e++)
              if (!ce.streams[e]) return e;
            throw new ce.ErrnoError(33);
          },
          getStreamChecked(e) {
            var r = ce.getStream(e);
            if (!r) throw new ce.ErrnoError(8);
            return r;
          },
          getStream: (e) => ce.streams[e],
          createStream: (e, r = -1) => (
            ce.FSStream ||
              ((ce.FSStream = function () {
                this.shared = {};
              }),
              (ce.FSStream.prototype = {}),
              Object.defineProperties(ce.FSStream.prototype, {
                object: {
                  get() {
                    return this.node;
                  },
                  set(e) {
                    this.node = e;
                  },
                },
                isRead: {
                  get() {
                    return 1 != (2097155 & this.flags);
                  },
                },
                isWrite: {
                  get() {
                    return 0 != (2097155 & this.flags);
                  },
                },
                isAppend: {
                  get() {
                    return 1024 & this.flags;
                  },
                },
                flags: {
                  get() {
                    return this.shared.flags;
                  },
                  set(e) {
                    this.shared.flags = e;
                  },
                },
                position: {
                  get() {
                    return this.shared.position;
                  },
                  set(e) {
                    this.shared.position = e;
                  },
                },
              })),
            (e = Object.assign(new ce.FSStream(), e)),
            -1 == r && (r = ce.nextfd()),
            (e.fd = r),
            (ce.streams[r] = e),
            e
          ),
          closeStream(e) {
            ce.streams[e] = null;
          },
          chrdev_stream_ops: {
            open(e) {
              var r = ce.getDevice(e.node.rdev);
              (e.stream_ops = r.stream_ops),
                e.stream_ops.open && e.stream_ops.open(e);
            },
            llseek() {
              throw new ce.ErrnoError(70);
            },
          },
          major: (e) => e >> 8,
          minor: (e) => 255 & e,
          makedev: (e, r) => (e << 8) | r,
          registerDevice(e, r) {
            ce.devices[e] = { stream_ops: r };
          },
          getDevice: (e) => ce.devices[e],
          getMounts(e) {
            for (var r = [], t = [e]; t.length; ) {
              var n = t.pop();
              r.push(n), t.push.apply(t, n.mounts);
            }
            return r;
          },
          syncfs(e, r) {
            "function" == typeof e && ((r = e), (e = !1)),
              ce.syncFSRequests++,
              ce.syncFSRequests > 1 &&
                g(
                  `warning: ${ce.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`
                );
            var t = ce.getMounts(ce.root.mount),
              n = 0;

            function o(e) {
              return ce.syncFSRequests--, r(e);
            }

            function a(e) {
              if (e) return a.errored ? void 0 : ((a.errored = !0), o(e));
              ++n >= t.length && o(null);
            }

            t.forEach((r) => {
              if (!r.type.syncfs) return a(null);
              r.type.syncfs(r, e, a);
            });
          },
          mount(e, r, t) {
            var n,
              o = "/" === t,
              a = !t;
            if (o && ce.root) throw new ce.ErrnoError(10);
            if (!o && !a) {
              var i = ce.lookupPath(t, { follow_mount: !1 });
              if (((t = i.path), (n = i.node), ce.isMountpoint(n)))
                throw new ce.ErrnoError(10);
              if (!ce.isDir(n.mode)) throw new ce.ErrnoError(54);
            }
            var s = { type: e, opts: r, mountpoint: t, mounts: [] },
              l = e.mount(s);
            return (
              (l.mount = s),
              (s.root = l),
              o
                ? (ce.root = l)
                : n && ((n.mounted = s), n.mount && n.mount.mounts.push(s)),
              l
            );
          },
          unmount(e) {
            var r = ce.lookupPath(e, { follow_mount: !1 });
            if (!ce.isMountpoint(r.node)) throw new ce.ErrnoError(28);
            var t = r.node,
              n = t.mounted,
              o = ce.getMounts(n);
            Object.keys(ce.nameTable).forEach((e) => {
              for (var r = ce.nameTable[e]; r; ) {
                var t = r.name_next;
                o.includes(r.mount) && ce.destroyNode(r), (r = t);
              }
            }),
              (t.mounted = null);
            var a = t.mount.mounts.indexOf(n);
            t.mount.mounts.splice(a, 1);
          },
          lookup: (e, r) => e.node_ops.lookup(e, r),
          mknod(e, r, t) {
            var n = ce.lookupPath(e, { parent: !0 }).node,
              o = J.basename(e);
            if (!o || "." === o || ".." === o) throw new ce.ErrnoError(28);
            var a = ce.mayCreate(n, o);
            if (a) throw new ce.ErrnoError(a);
            if (!n.node_ops.mknod) throw new ce.ErrnoError(63);
            return n.node_ops.mknod(n, o, r, t);
          },
          create: (e, r) => (
            (r = void 0 !== r ? r : 438),
            (r &= 4095),
            (r |= 32768),
            ce.mknod(e, r, 0)
          ),
          mkdir: (e, r) => (
            (r = void 0 !== r ? r : 511),
            (r &= 1023),
            (r |= 16384),
            ce.mknod(e, r, 0)
          ),
          mkdirTree(e, r) {
            for (var t = e.split("/"), n = "", o = 0; o < t.length; ++o)
              if (t[o]) {
                n += "/" + t[o];
                try {
                  ce.mkdir(n, r);
                } catch (e) {
                  if (20 != e.errno) throw e;
                }
              }
          },
          mkdev: (e, r, t) => (
            void 0 === t && ((t = r), (r = 438)), (r |= 8192), ce.mknod(e, r, t)
          ),
          symlink(e, r) {
            if (!Z.resolve(e)) throw new ce.ErrnoError(44);
            var t = ce.lookupPath(r, { parent: !0 }).node;
            if (!t) throw new ce.ErrnoError(44);
            var n = J.basename(r),
              o = ce.mayCreate(t, n);
            if (o) throw new ce.ErrnoError(o);
            if (!t.node_ops.symlink) throw new ce.ErrnoError(63);
            return t.node_ops.symlink(t, n, e);
          },
          rename(e, r) {
            var t,
              n,
              o = J.dirname(e),
              a = J.dirname(r),
              i = J.basename(e),
              s = J.basename(r);
            if (
              ((t = ce.lookupPath(e, { parent: !0 }).node),
              (n = ce.lookupPath(r, { parent: !0 }).node),
              !t || !n)
            )
              throw new ce.ErrnoError(44);
            if (t.mount !== n.mount) throw new ce.ErrnoError(75);
            var l,
              u = ce.lookupNode(t, i),
              d = Z.relative(e, a);
            if ("." !== d.charAt(0)) throw new ce.ErrnoError(28);
            if ("." !== (d = Z.relative(r, o)).charAt(0))
              throw new ce.ErrnoError(55);
            try {
              l = ce.lookupNode(n, s);
            } catch (e) {}
            if (u !== l) {
              var c = ce.isDir(u.mode),
                f = ce.mayDelete(t, i, c);
              if (f) throw new ce.ErrnoError(f);
              if ((f = l ? ce.mayDelete(n, s, c) : ce.mayCreate(n, s)))
                throw new ce.ErrnoError(f);
              if (!t.node_ops.rename) throw new ce.ErrnoError(63);
              if (ce.isMountpoint(u) || (l && ce.isMountpoint(l)))
                throw new ce.ErrnoError(10);
              if (n !== t && (f = ce.nodePermissions(t, "w")))
                throw new ce.ErrnoError(f);
              ce.hashRemoveNode(u);
              try {
                t.node_ops.rename(u, n, s);
              } catch (e) {
                throw e;
              } finally {
                ce.hashAddNode(u);
              }
            }
          },
          rmdir(e) {
            var r = ce.lookupPath(e, { parent: !0 }).node,
              t = J.basename(e),
              n = ce.lookupNode(r, t),
              o = ce.mayDelete(r, t, !0);
            if (o) throw new ce.ErrnoError(o);
            if (!r.node_ops.rmdir) throw new ce.ErrnoError(63);
            if (ce.isMountpoint(n)) throw new ce.ErrnoError(10);
            r.node_ops.rmdir(r, t), ce.destroyNode(n);
          },
          readdir(e) {
            var r = ce.lookupPath(e, { follow: !0 }).node;
            if (!r.node_ops.readdir) throw new ce.ErrnoError(54);
            return r.node_ops.readdir(r);
          },
          unlink(e) {
            var r = ce.lookupPath(e, { parent: !0 }).node;
            if (!r) throw new ce.ErrnoError(44);
            var t = J.basename(e),
              n = ce.lookupNode(r, t),
              o = ce.mayDelete(r, t, !1);
            if (o) throw new ce.ErrnoError(o);
            if (!r.node_ops.unlink) throw new ce.ErrnoError(63);
            if (ce.isMountpoint(n)) throw new ce.ErrnoError(10);
            r.node_ops.unlink(r, t), ce.destroyNode(n);
          },
          readlink(e) {
            var r = ce.lookupPath(e).node;
            if (!r) throw new ce.ErrnoError(44);
            if (!r.node_ops.readlink) throw new ce.ErrnoError(28);
            return Z.resolve(ce.getPath(r.parent), r.node_ops.readlink(r));
          },
          stat(e, r) {
            var t = ce.lookupPath(e, { follow: !r }).node;
            if (!t) throw new ce.ErrnoError(44);
            if (!t.node_ops.getattr) throw new ce.ErrnoError(63);
            return t.node_ops.getattr(t);
          },
          lstat: (e) => ce.stat(e, !0),
          chmod(e, r, t) {
            var n;
            "string" == typeof e
              ? (n = ce.lookupPath(e, { follow: !t }).node)
              : (n = e);
            if (!n.node_ops.setattr) throw new ce.ErrnoError(63);
            n.node_ops.setattr(n, {
              mode: (4095 & r) | (-4096 & n.mode),
              timestamp: Date.now(),
            });
          },
          lchmod(e, r) {
            ce.chmod(e, r, !0);
          },
          fchmod(e, r) {
            var t = ce.getStreamChecked(e);
            ce.chmod(t.node, r);
          },
          chown(e, r, t, n) {
            var o;
            "string" == typeof e
              ? (o = ce.lookupPath(e, { follow: !n }).node)
              : (o = e);
            if (!o.node_ops.setattr) throw new ce.ErrnoError(63);
            o.node_ops.setattr(o, { timestamp: Date.now() });
          },
          lchown(e, r, t) {
            ce.chown(e, r, t, !0);
          },
          fchown(e, r, t) {
            var n = ce.getStreamChecked(e);
            ce.chown(n.node, r, t);
          },
          truncate(e, r) {
            if (r < 0) throw new ce.ErrnoError(28);
            var t;
            "string" == typeof e
              ? (t = ce.lookupPath(e, { follow: !0 }).node)
              : (t = e);
            if (!t.node_ops.setattr) throw new ce.ErrnoError(63);
            if (ce.isDir(t.mode)) throw new ce.ErrnoError(31);
            if (!ce.isFile(t.mode)) throw new ce.ErrnoError(28);
            var n = ce.nodePermissions(t, "w");
            if (n) throw new ce.ErrnoError(n);
            t.node_ops.setattr(t, { size: r, timestamp: Date.now() });
          },
          ftruncate(e, r) {
            var t = ce.getStreamChecked(e);
            if (0 == (2097155 & t.flags)) throw new ce.ErrnoError(28);
            ce.truncate(t.node, r);
          },
          utime(e, r, t) {
            var n = ce.lookupPath(e, { follow: !0 }).node;
            n.node_ops.setattr(n, { timestamp: Math.max(r, t) });
          },
          open(e, r, t) {
            if ("" === e) throw new ce.ErrnoError(44);
            var n;
            if (
              ((t = void 0 === t ? 438 : t),
              (t =
                64 &
                (r =
                  "string" == typeof r
                    ? ((e) => {
                        var r = {
                          r: 0,
                          "r+": 2,
                          w: 577,
                          "w+": 578,
                          a: 1089,
                          "a+": 1090,
                        }[e];
                        if (void 0 === r)
                          throw new Error(`Unknown file open mode: ${e}`);
                        return r;
                      })(r)
                    : r)
                  ? (4095 & t) | 32768
                  : 0),
              "object" == typeof e)
            )
              n = e;
            else {
              e = J.normalize(e);
              try {
                n = ce.lookupPath(e, { follow: !(131072 & r) }).node;
              } catch (e) {}
            }
            var a = !1;
            if (64 & r)
              if (n) {
                if (128 & r) throw new ce.ErrnoError(20);
              } else (n = ce.mknod(e, t, 0)), (a = !0);
            if (!n) throw new ce.ErrnoError(44);
            if (
              (ce.isChrdev(n.mode) && (r &= -513),
              65536 & r && !ce.isDir(n.mode))
            )
              throw new ce.ErrnoError(54);
            if (!a) {
              var i = ce.mayOpen(n, r);
              if (i) throw new ce.ErrnoError(i);
            }
            512 & r && !a && ce.truncate(n, 0), (r &= -131713);
            var s = ce.createStream({
              node: n,
              path: ce.getPath(n),
              flags: r,
              seekable: !0,
              position: 0,
              stream_ops: n.stream_ops,
              ungotten: [],
              error: !1,
            });
            return (
              s.stream_ops.open && s.stream_ops.open(s),
              !o.logReadFiles ||
                1 & r ||
                (ce.readFiles || (ce.readFiles = {}),
                e in ce.readFiles || (ce.readFiles[e] = 1)),
              s
            );
          },
          close(e) {
            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
            e.getdents && (e.getdents = null);
            try {
              e.stream_ops.close && e.stream_ops.close(e);
            } catch (e) {
              throw e;
            } finally {
              ce.closeStream(e.fd);
            }
            e.fd = null;
          },
          isClosed: (e) => null === e.fd,
          llseek(e, r, t) {
            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
            if (!e.seekable || !e.stream_ops.llseek)
              throw new ce.ErrnoError(70);
            if (0 != t && 1 != t && 2 != t) throw new ce.ErrnoError(28);
            return (
              (e.position = e.stream_ops.llseek(e, r, t)),
              (e.ungotten = []),
              e.position
            );
          },
          read(e, r, t, n, o) {
            if (n < 0 || o < 0) throw new ce.ErrnoError(28);
            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
            if (1 == (2097155 & e.flags)) throw new ce.ErrnoError(8);
            if (ce.isDir(e.node.mode)) throw new ce.ErrnoError(31);
            if (!e.stream_ops.read) throw new ce.ErrnoError(28);
            var a = void 0 !== o;
            if (a) {
              if (!e.seekable) throw new ce.ErrnoError(70);
            } else o = e.position;
            var i = e.stream_ops.read(e, r, t, n, o);
            return a || (e.position += i), i;
          },
          write(e, r, t, n, o, a) {
            if (n < 0 || o < 0) throw new ce.ErrnoError(28);
            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
            if (0 == (2097155 & e.flags)) throw new ce.ErrnoError(8);
            if (ce.isDir(e.node.mode)) throw new ce.ErrnoError(31);
            if (!e.stream_ops.write) throw new ce.ErrnoError(28);
            e.seekable && 1024 & e.flags && ce.llseek(e, 0, 2);
            var i = void 0 !== o;
            if (i) {
              if (!e.seekable) throw new ce.ErrnoError(70);
            } else o = e.position;
            var s = e.stream_ops.write(e, r, t, n, o, a);
            return i || (e.position += s), s;
          },
          allocate(e, r, t) {
            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
            if (r < 0 || t <= 0) throw new ce.ErrnoError(28);
            if (0 == (2097155 & e.flags)) throw new ce.ErrnoError(8);
            if (!ce.isFile(e.node.mode) && !ce.isDir(e.node.mode))
              throw new ce.ErrnoError(43);
            if (!e.stream_ops.allocate) throw new ce.ErrnoError(138);
            e.stream_ops.allocate(e, r, t);
          },
          mmap(e, r, t, n, o) {
            if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags))
              throw new ce.ErrnoError(2);
            if (1 == (2097155 & e.flags)) throw new ce.ErrnoError(2);
            if (!e.stream_ops.mmap) throw new ce.ErrnoError(43);
            return e.stream_ops.mmap(e, r, t, n, o);
          },
          msync: (e, r, t, n, o) =>
            e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0,
          munmap: (e) => 0,
          ioctl(e, r, t) {
            if (!e.stream_ops.ioctl) throw new ce.ErrnoError(59);
            return e.stream_ops.ioctl(e, r, t);
          },
          readFile(e, r = {}) {
            if (
              ((r.flags = r.flags || 0),
              (r.encoding = r.encoding || "binary"),
              "utf8" !== r.encoding && "binary" !== r.encoding)
            )
              throw new Error(`Invalid encoding type "${r.encoding}"`);
            var t,
              n = ce.open(e, r.flags),
              o = ce.stat(e).size,
              a = new Uint8Array(o);
            return (
              ce.read(n, a, 0, o, 0),
              "utf8" === r.encoding
                ? (t = ee(a, 0))
                : "binary" === r.encoding && (t = a),
              ce.close(n),
              t
            );
          },
          writeFile(e, r, t = {}) {
            t.flags = t.flags || 577;
            var n = ce.open(e, t.flags, t.mode);
            if ("string" == typeof r) {
              var o = new Uint8Array(te(r) + 1),
                a = ne(r, o, 0, o.length);
              ce.write(n, o, 0, a, void 0, t.canOwn);
            } else {
              if (!ArrayBuffer.isView(r))
                throw new Error("Unsupported data type");
              ce.write(n, r, 0, r.byteLength, void 0, t.canOwn);
            }
            ce.close(n);
          },
          cwd: () => ce.currentPath,
          chdir(e) {
            var r = ce.lookupPath(e, { follow: !0 });
            if (null === r.node) throw new ce.ErrnoError(44);
            if (!ce.isDir(r.node.mode)) throw new ce.ErrnoError(54);
            var t = ce.nodePermissions(r.node, "x");
            if (t) throw new ce.ErrnoError(t);
            ce.currentPath = r.path;
          },
          createDefaultDirectories() {
            ce.mkdir("/tmp"), ce.mkdir("/home"), ce.mkdir("/home/web_user");
          },
          createDefaultDevices() {
            ce.mkdir("/dev"),
              ce.registerDevice(ce.makedev(1, 3), {
                read: () => 0,
                write: (e, r, t, n, o) => n,
              }),
              ce.mkdev("/dev/null", ce.makedev(1, 3)),
              ae.register(ce.makedev(5, 0), ae.default_tty_ops),
              ae.register(ce.makedev(6, 0), ae.default_tty1_ops),
              ce.mkdev("/dev/tty", ce.makedev(5, 0)),
              ce.mkdev("/dev/tty1", ce.makedev(6, 0));
            var e = new Uint8Array(1024),
              r = 0,
              t = () => (0 === r && (r = K(e).byteLength), e[--r]);
            ce.createDevice("/dev", "random", t),
              ce.createDevice("/dev", "urandom", t),
              ce.mkdir("/dev/shm"),
              ce.mkdir("/dev/shm/tmp");
          },
          createSpecialDirectories() {
            ce.mkdir("/proc");
            var e = ce.mkdir("/proc/self");
            ce.mkdir("/proc/self/fd"),
              ce.mount(
                {
                  mount() {
                    var r = ce.createNode(e, "fd", 16895, 73);
                    return (
                      (r.node_ops = {
                        lookup(e, r) {
                          var t = +r,
                            n = ce.getStreamChecked(t),
                            o = {
                              parent: null,
                              mount: { mountpoint: "fake" },
                              node_ops: { readlink: () => n.path },
                            };
                          return (o.parent = o), o;
                        },
                      }),
                      r
                    );
                  },
                },
                {},
                "/proc/self/fd"
              );
          },
          createStandardStreams() {
            o.stdin
              ? ce.createDevice("/dev", "stdin", o.stdin)
              : ce.symlink("/dev/tty", "/dev/stdin"),
              o.stdout
                ? ce.createDevice("/dev", "stdout", null, o.stdout)
                : ce.symlink("/dev/tty", "/dev/stdout"),
              o.stderr
                ? ce.createDevice("/dev", "stderr", null, o.stderr)
                : ce.symlink("/dev/tty1", "/dev/stderr");
            ce.open("/dev/stdin", 0),
              ce.open("/dev/stdout", 1),
              ce.open("/dev/stderr", 1);
          },
          ensureErrnoError() {
            ce.ErrnoError ||
              ((ce.ErrnoError = function (e, r) {
                (this.name = "ErrnoError"),
                  (this.node = r),
                  (this.setErrno = function (e) {
                    this.errno = e;
                  }),
                  this.setErrno(e),
                  (this.message = "FS error");
              }),
              (ce.ErrnoError.prototype = new Error()),
              (ce.ErrnoError.prototype.constructor = ce.ErrnoError),
              [44].forEach((e) => {
                (ce.genericErrors[e] = new ce.ErrnoError(e)),
                  (ce.genericErrors[e].stack = "<generic error, no stack>");
              }));
          },
          staticInit() {
            ce.ensureErrnoError(),
              (ce.nameTable = new Array(4096)),
              ce.mount(se, {}, "/"),
              ce.createDefaultDirectories(),
              ce.createDefaultDevices(),
              ce.createSpecialDirectories(),
              (ce.filesystems = {
                MEMFS: se,
                WORKERFS: de,
              });
          },
          init(e, r, t) {
            (ce.init.initialized = !0),
              ce.ensureErrnoError(),
              (o.stdin = e || o.stdin),
              (o.stdout = r || o.stdout),
              (o.stderr = t || o.stderr),
              ce.createStandardStreams();
          },
          quit() {
            ce.init.initialized = !1;
            for (var e = 0; e < ce.streams.length; e++) {
              var r = ce.streams[e];
              r && ce.close(r);
            }
          },
          findObject(e, r) {
            var t = ce.analyzePath(e, r);
            return t.exists ? t.object : null;
          },
          analyzePath(e, r) {
            try {
              e = (n = ce.lookupPath(e, { follow: !r })).path;
            } catch (e) {}
            var t = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null,
            };
            try {
              var n = ce.lookupPath(e, { parent: !0 });
              (t.parentExists = !0),
                (t.parentPath = n.path),
                (t.parentObject = n.node),
                (t.name = J.basename(e)),
                (n = ce.lookupPath(e, { follow: !r })),
                (t.exists = !0),
                (t.path = n.path),
                (t.object = n.node),
                (t.name = n.node.name),
                (t.isRoot = "/" === n.path);
            } catch (e) {
              t.error = e.errno;
            }
            return t;
          },
          createPath(e, r, t, n) {
            e = "string" == typeof e ? e : ce.getPath(e);
            for (var o = r.split("/").reverse(); o.length; ) {
              var a = o.pop();
              if (a) {
                var i = J.join2(e, a);
                try {
                  ce.mkdir(i);
                } catch (e) {}
                e = i;
              }
            }
            return i;
          },
          createFile(e, r, t, n, o) {
            var a = J.join2("string" == typeof e ? e : ce.getPath(e), r),
              i = ue(n, o);
            return ce.create(a, i);
          },
          createDataFile(e, r, t, n, o, a) {
            var i = r;
            e &&
              ((e = "string" == typeof e ? e : ce.getPath(e)),
              (i = r ? J.join2(e, r) : e));
            var s = ue(n, o),
              l = ce.create(i, s);
            if (t) {
              if ("string" == typeof t) {
                for (
                  var u = new Array(t.length), d = 0, c = t.length;
                  d < c;
                  ++d
                )
                  u[d] = t.charCodeAt(d);
                t = u;
              }
              ce.chmod(l, 146 | s);
              var f = ce.open(l, 577);
              ce.write(f, t, 0, t.length, 0, a), ce.close(f), ce.chmod(l, s);
            }
            return l;
          },
          createDevice(e, r, t, n) {
            var o = J.join2("string" == typeof e ? e : ce.getPath(e), r),
              a = ue(!!t, !!n);
            ce.createDevice.major || (ce.createDevice.major = 64);
            var i = ce.makedev(ce.createDevice.major++, 0);
            return (
              ce.registerDevice(i, {
                open(e) {
                  e.seekable = !1;
                },
                close(e) {
                  n && n.buffer && n.buffer.length && n(10);
                },
                read(e, r, n, o, a) {
                  for (var i = 0, s = 0; s < o; s++) {
                    var l;
                    try {
                      l = t();
                    } catch (e) {
                      throw new ce.ErrnoError(29);
                    }
                    if (void 0 === l && 0 === i) throw new ce.ErrnoError(6);
                    if (null == l) break;
                    i++, (r[n + s] = l);
                  }
                  return i && (e.node.timestamp = Date.now()), i;
                },
                write(e, r, t, o, a) {
                  for (var i = 0; i < o; i++)
                    try {
                      n(r[t + i]);
                    } catch (e) {
                      throw new ce.ErrnoError(29);
                    }
                  return o && (e.node.timestamp = Date.now()), i;
                },
              }),
              ce.mkdev(o, a, i)
            );
          },
          forceLoadFile(e) {
            if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
            if ("undefined" != typeof XMLHttpRequest)
              throw new Error(
                "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
              );
            if (!a)
              throw new Error("Cannot load without read() or XMLHttpRequest.");
            try {
              (e.contents = oe(a(e.url), !0)),
                (e.usedBytes = e.contents.length);
            } catch (e) {
              throw new ce.ErrnoError(29);
            }
          },
          createLazyFile(e, r, t, n, o) {
            function a() {
              (this.lengthKnown = !1), (this.chunks = []);
            }

            if (
              ((a.prototype.get = function (e) {
                if (!(e > this.length - 1 || e < 0)) {
                  var r = e % this.chunkSize,
                    t = (e / this.chunkSize) | 0;
                  return this.getter(t)[r];
                }
              }),
              (a.prototype.setDataGetter = function (e) {
                this.getter = e;
              }),
              (a.prototype.cacheLength = function () {
                var e = new XMLHttpRequest();
                if (
                  (e.open("HEAD", t, !1),
                  e.send(null),
                  !((e.status >= 200 && e.status < 300) || 304 === e.status))
                )
                  throw new Error(
                    "Couldn't load " + t + ". Status: " + e.status
                  );
                var r,
                  n = Number(e.getResponseHeader("Content-length")),
                  o =
                    (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r,
                  a =
                    (r = e.getResponseHeader("Content-Encoding")) &&
                    "gzip" === r,
                  i = 1048576;
                o || (i = n);
                var s = this;
                s.setDataGetter((e) => {
                  var r = e * i,
                    o = (e + 1) * i - 1;
                  if (
                    ((o = Math.min(o, n - 1)),
                    void 0 === s.chunks[e] &&
                      (s.chunks[e] = ((e, r) => {
                        if (e > r)
                          throw new Error(
                            "invalid range (" +
                              e +
                              ", " +
                              r +
                              ") or no bytes requested!"
                          );
                        if (r > n - 1)
                          throw new Error(
                            "only " + n + " bytes available! programmer error!"
                          );
                        var o = new XMLHttpRequest();
                        if (
                          (o.open("GET", t, !1),
                          n !== i &&
                            o.setRequestHeader("Range", "bytes=" + e + "-" + r),
                          (o.responseType = "arraybuffer"),
                          o.overrideMimeType &&
                            o.overrideMimeType(
                              "text/plain; charset=x-user-defined"
                            ),
                          o.send(null),
                          !(
                            (o.status >= 200 && o.status < 300) ||
                            304 === o.status
                          ))
                        )
                          throw new Error(
                            "Couldn't load " + t + ". Status: " + o.status
                          );
                        return void 0 !== o.response
                          ? new Uint8Array(o.response || [])
                          : oe(o.responseText || "", !0);
                      })(r, o)),
                    void 0 === s.chunks[e])
                  )
                    throw new Error("doXHR failed!");
                  return s.chunks[e];
                }),
                  (!a && n) ||
                    ((i = n = 1),
                    (n = this.getter(0).length),
                    (i = n),
                    y(
                      "LazyFiles on gzip forces download of the whole file when length is accessed"
                    )),
                  (this._length = n),
                  (this._chunkSize = i),
                  (this.lengthKnown = !0);
              }),
              "undefined" != typeof XMLHttpRequest)
            ) {
              if (!c)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
              var i = new a();
              Object.defineProperties(i, {
                length: {
                  get: function () {
                    return this.lengthKnown || this.cacheLength(), this._length;
                  },
                },
                chunkSize: {
                  get: function () {
                    return (
                      this.lengthKnown || this.cacheLength(), this._chunkSize
                    );
                  },
                },
              });
              var s = { isDevice: !1, contents: i };
            } else s = { isDevice: !1, url: t };
            var l = ce.createFile(e, r, s, n, o);
            s.contents
              ? (l.contents = s.contents)
              : s.url && ((l.contents = null), (l.url = s.url)),
              Object.defineProperties(l, {
                usedBytes: {
                  get: function () {
                    return this.contents.length;
                  },
                },
              });
            var u = {};

            function d(e, r, t, n, o) {
              var a = e.node.contents;
              if (o >= a.length) return 0;
              var i = Math.min(a.length - o, n);
              if (a.slice) for (var s = 0; s < i; s++) r[t + s] = a[o + s];
              else for (s = 0; s < i; s++) r[t + s] = a.get(o + s);
              return i;
            }

            return (
              Object.keys(l.stream_ops).forEach((e) => {
                var r = l.stream_ops[e];
                u[e] = function () {
                  return ce.forceLoadFile(l), r.apply(null, arguments);
                };
              }),
              (u.read = (e, r, t, n, o) => (
                ce.forceLoadFile(l), d(e, r, t, n, o)
              )),
              (u.mmap = (e, r, t, n, o) => {
                ce.forceLoadFile(l);
                var a = ie(r);
                if (!a) throw new ce.ErrnoError(48);
                return d(e, E, a, r, t), { ptr: a, allocated: !0 };
              }),
              (l.stream_ops = u),
              l
            );
          },
        },
        fe = (e, r) => (e ? ee(b, e, r) : ""),
        pe = {
          DEFAULT_POLLMASK: 5,
          calculateAt(e, r, t) {
            if (J.isAbs(r)) return r;
            var n;
            -100 === e ? (n = ce.cwd()) : (n = pe.getStreamFromFD(e).path);
            if (0 == r.length) {
              if (!t) throw new ce.ErrnoError(44);
              return n;
            }
            return J.join2(n, r);
          },
          doStat(e, r, t) {
            try {
              var n = e(r);
            } catch (e) {
              if (
                e &&
                e.node &&
                J.normalize(r) !== J.normalize(ce.getPath(e.node))
              )
                return -54;
              throw e;
            }
            (k[t >> 2] = n.dev),
              (k[(t + 4) >> 2] = n.mode),
              (C[(t + 8) >> 2] = n.nlink),
              (k[(t + 12) >> 2] = n.uid),
              (k[(t + 16) >> 2] = n.gid),
              (k[(t + 20) >> 2] = n.rdev),
              (B = [
                n.size >>> 0,
                ((H = n.size),
                +Math.abs(H) >= 1
                  ? H > 0
                    ? +Math.floor(H / 4294967296) >>> 0
                    : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (k[(t + 24) >> 2] = B[0]),
              (k[(t + 28) >> 2] = B[1]),
              (k[(t + 32) >> 2] = 4096),
              (k[(t + 36) >> 2] = n.blocks);
            var o = n.atime.getTime(),
              a = n.mtime.getTime(),
              i = n.ctime.getTime();
            return (
              (B = [
                Math.floor(o / 1e3) >>> 0,
                ((H = Math.floor(o / 1e3)),
                +Math.abs(H) >= 1
                  ? H > 0
                    ? +Math.floor(H / 4294967296) >>> 0
                    : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (k[(t + 40) >> 2] = B[0]),
              (k[(t + 44) >> 2] = B[1]),
              (C[(t + 48) >> 2] = (o % 1e3) * 1e3),
              (B = [
                Math.floor(a / 1e3) >>> 0,
                ((H = Math.floor(a / 1e3)),
                +Math.abs(H) >= 1
                  ? H > 0
                    ? +Math.floor(H / 4294967296) >>> 0
                    : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (k[(t + 56) >> 2] = B[0]),
              (k[(t + 60) >> 2] = B[1]),
              (C[(t + 64) >> 2] = (a % 1e3) * 1e3),
              (B = [
                Math.floor(i / 1e3) >>> 0,
                ((H = Math.floor(i / 1e3)),
                +Math.abs(H) >= 1
                  ? H > 0
                    ? +Math.floor(H / 4294967296) >>> 0
                    : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (k[(t + 72) >> 2] = B[0]),
              (k[(t + 76) >> 2] = B[1]),
              (C[(t + 80) >> 2] = (i % 1e3) * 1e3),
              (B = [
                n.ino >>> 0,
                ((H = n.ino),
                +Math.abs(H) >= 1
                  ? H > 0
                    ? +Math.floor(H / 4294967296) >>> 0
                    : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (k[(t + 88) >> 2] = B[0]),
              (k[(t + 92) >> 2] = B[1]),
              0
            );
          },
          doMsync(e, r, t, n, o) {
            if (!ce.isFile(r.node.mode)) throw new ce.ErrnoError(43);
            if (2 & n) return 0;
            var a = b.slice(e, e + t);
            ce.msync(r, a, o, t, n);
          },
          varargs: void 0,
          get() {
            var e = k[+pe.varargs >> 2];
            return (pe.varargs += 4), e;
          },
          getp: () => pe.get(),
          getStr: (e) => fe(e),
          getStreamFromFD: (e) => ce.getStreamChecked(e),
        };
      var he = (e, r) =>
        (r + 2097152) >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * r : NaN;
      var me = (e, r, t) => ne(e, b, r, t);
      var ve = (e) => {
        if (void 0 === e) return "_unknown";
        var r = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
        return r >= 48 && r <= 57 ? `_${e}` : e;
      };

      function ye(e, r) {
        return {
          [(e = ve(e))]: function () {
            return r.apply(this, arguments);
          },
        }[e];
      }

      function ge() {
        (this.allocated = [void 0]), (this.freelist = []);
      }

      var we,
        Ee,
        be,
        _e,
        $e,
        ke = new ge(),
        Ce = (e) => {
          throw new we(e);
        },
        Pe = () => {
          for (var e = 0, r = ke.reserved; r < ke.allocated.length; ++r)
            void 0 !== ke.allocated[r] && ++e;
          return e;
        },
        De = (e) => (
          e || Ce("Cannot use deleted val. handle = " + e), ke.get(e).value
        ),
        Fe = (e) => {
          switch (e) {
            case void 0:
              return 1;
            case null:
              return 2;
            case !0:
              return 3;
            case !1:
              return 4;
            default:
              return ke.allocate({ refcount: 1, value: e });
          }
        },
        Se = (e, r) => {
          var t = ye(r, function (e) {
            (this.name = r), (this.message = e);
            var t = new Error(e).stack;
            void 0 !== t &&
              (this.stack =
                this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""));
          });
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.toString = function () {
              return void 0 === this.message
                ? this.name
                : `${this.name}: ${this.message}`;
            }),
            t
          );
        },
        Te = (e) => {
          for (var r = "", t = e; b[t]; ) r += be[b[t++]];
          return r;
        },
        Me = () => Object.keys(ze).length,
        Ae = () => {
          var e = [];
          for (var r in ze) ze.hasOwnProperty(r) && e.push(ze[r]);
          return e;
        },
        je = [],
        Oe = () => {
          for (; je.length; ) {
            var e = je.pop();
            (e.$$.deleteScheduled = !1), e.delete();
          }
        },
        Re = (e) => {
          (_e = e), je.length && _e && _e(Oe);
        },
        ze = {},
        xe = (e, r) => {
          for (void 0 === r && Ce("ptr should not be undefined"); e.baseClass; )
            (r = e.upcast(r)), (e = e.baseClass);
          return r;
        },
        Ne = (e, r, t) => {
          (r = xe(e, r)),
            ze.hasOwnProperty(r)
              ? Ce(`Tried to register registered instance: ${r}`)
              : (ze[r] = t);
        },
        Ue = {},
        We = (e) => {
          var r = ct(e),
            t = Te(r);
          return ut(r), t;
        },
        Ie = (e, r) => {
          var t = Ue[e];
          return void 0 === t && Ce(r + " has unknown type " + We(e)), t;
        },
        Le = (e) => {},
        He = !1,
        Be = (e) => {
          (e.count.value -= 1),
            0 === e.count.value &&
              ((e) => {
                e.smartPtr
                  ? e.smartPtrType.rawDestructor(e.smartPtr)
                  : e.ptrType.registeredClass.rawDestructor(e.ptr);
              })(e);
        },
        Ye = (e, r, t) => {
          if (r === t) return e;
          if (void 0 === t.baseClass) return null;
          var n = Ye(e, r, t.baseClass);
          return null === n ? null : t.downcast(n);
        },
        Ve = {},
        qe = (e) => {
          throw new $e(e);
        },
        Xe = (e, r) => (
          (r.ptrType && r.ptr) ||
            qe("makeClassHandle requires ptr and ptrType"),
          !!r.smartPtrType !== !!r.smartPtr &&
            qe("Both smartPtrType and smartPtr must be specified"),
          (r.count = { value: 1 }),
          Je(Object.create(e, { $$: { value: r } }))
        );

      function Ge(e) {
        var r = this.getPointee(e);
        if (!r) return this.destructor(e), null;
        var t = ((e, r) => ((r = xe(e, r)), ze[r]))(this.registeredClass, r);
        if (void 0 !== t) {
          if (0 === t.$$.count.value)
            return (t.$$.ptr = r), (t.$$.smartPtr = e), t.clone();
          var n = t.clone();
          return this.destructor(e), n;
        }

        function o() {
          return this.isSmartPointer
            ? Xe(this.registeredClass.instancePrototype, {
                ptrType: this.pointeeType,
                ptr: r,
                smartPtrType: this,
                smartPtr: e,
              })
            : Xe(this.registeredClass.instancePrototype, {
                ptrType: this,
                ptr: e,
              });
        }

        var a,
          i = this.registeredClass.getActualType(r),
          s = Ve[i];
        if (!s) return o.call(this);
        a = this.isConst ? s.constPointerType : s.pointerType;
        var l = Ye(r, this.registeredClass, a.registeredClass);
        return null === l
          ? o.call(this)
          : this.isSmartPointer
          ? Xe(a.registeredClass.instancePrototype, {
              ptrType: a,
              ptr: l,
              smartPtrType: this,
              smartPtr: e,
            })
          : Xe(a.registeredClass.instancePrototype, { ptrType: a, ptr: l });
      }

      var Je = (e) =>
          "undefined" == typeof FinalizationRegistry
            ? ((Je = (e) => e), e)
            : ((He = new FinalizationRegistry((e) => {
                Be(e.$$);
              })),
              (Je = (e) => {
                var r = e.$$;
                if (!!r.smartPtr) {
                  var t = { $$: r };
                  He.register(e, t, e);
                }
                return e;
              }),
              (Le = (e) => He.unregister(e)),
              Je(e)),
        Ke = {},
        Ze = (e) => {
          for (; e.length; ) {
            var r = e.pop();
            e.pop()(r);
          }
        };

      function Qe(e) {
        return this.fromWireType(k[e >> 2]);
      }

      var er = {},
        rr = {},
        tr = (e, r, t) => {
          function n(r) {
            var n = t(r);
            n.length !== e.length && qe("Mismatched type converter count");
            for (var o = 0; o < e.length; ++o) nr(e[o], n[o]);
          }

          e.forEach(function (e) {
            rr[e] = r;
          });
          var o = new Array(r.length),
            a = [],
            i = 0;
          r.forEach((e, r) => {
            Ue.hasOwnProperty(e)
              ? (o[r] = Ue[e])
              : (a.push(e),
                er.hasOwnProperty(e) || (er[e] = []),
                er[e].push(() => {
                  (o[r] = Ue[e]), ++i === a.length && n(o);
                }));
          }),
            0 === a.length && n(o);
        };

      function nr(e, r, t = {}) {
        if (!("argPackAdvance" in r))
          throw new TypeError(
            "registerType registeredInstance requires argPackAdvance"
          );
        return (function (e, r, t = {}) {
          var n = r.name;
          if (
            (e || Ce(`type "${n}" must have a positive integer typeid pointer`),
            Ue.hasOwnProperty(e))
          ) {
            if (t.ignoreDuplicateRegistrations) return;
            Ce(`Cannot register type '${n}' twice`);
          }
          if (((Ue[e] = r), delete rr[e], er.hasOwnProperty(e))) {
            var o = er[e];
            delete er[e], o.forEach((e) => e());
          }
        })(e, r, t);
      }

      var or = 8,
        ar = (e) => {
          Ce(e.$$.ptrType.registeredClass.name + " instance already deleted");
        };

      function ir() {}

      var sr = (e, r, t) => {
          if (void 0 === e[r].overloadTable) {
            var n = e[r];
            (e[r] = function () {
              return (
                e[r].overloadTable.hasOwnProperty(arguments.length) ||
                  Ce(
                    `Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`
                  ),
                e[r].overloadTable[arguments.length].apply(this, arguments)
              );
            }),
              (e[r].overloadTable = []),
              (e[r].overloadTable[n.argCount] = n);
          }
        },
        lr = (e, r, t) => {
          o.hasOwnProperty(e)
            ? ((void 0 === t ||
                (void 0 !== o[e].overloadTable &&
                  void 0 !== o[e].overloadTable[t])) &&
                Ce(`Cannot register public name '${e}' twice`),
              sr(o, e, e),
              o.hasOwnProperty(t) &&
                Ce(
                  `Cannot register multiple overloads of a function with the same number of arguments (${t})!`
                ),
              (o[e].overloadTable[t] = r))
            : ((o[e] = r), void 0 !== t && (o[e].numArguments = t));
        };

      function ur(e, r, t, n, o, a, i, s) {
        (this.name = e),
          (this.constructor = r),
          (this.instancePrototype = t),
          (this.rawDestructor = n),
          (this.baseClass = o),
          (this.getActualType = a),
          (this.upcast = i),
          (this.downcast = s),
          (this.pureVirtualFunctions = []);
      }

      var dr = (e, r, t) => {
        for (; r !== t; )
          r.upcast ||
            Ce(
              `Expected null or instance of ${t.name}, got an instance of ${r.name}`
            ),
            (e = r.upcast(e)),
            (r = r.baseClass);
        return e;
      };

      function cr(e, r) {
        if (null === r)
          return this.isReference && Ce(`null is not a valid ${this.name}`), 0;
        r.$$ || Ce(`Cannot pass "${Dr(r)}" as a ${this.name}`),
          r.$$.ptr ||
            Ce(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var t = r.$$.ptrType.registeredClass;
        return dr(r.$$.ptr, t, this.registeredClass);
      }

      function fr(e, r) {
        var t;
        if (null === r)
          return (
            this.isReference && Ce(`null is not a valid ${this.name}`),
            this.isSmartPointer
              ? ((t = this.rawConstructor()),
                null !== e && e.push(this.rawDestructor, t),
                t)
              : 0
          );
        r.$$ || Ce(`Cannot pass "${Dr(r)}" as a ${this.name}`),
          r.$$.ptr ||
            Ce(`Cannot pass deleted object as a pointer of type ${this.name}`),
          !this.isConst &&
            r.$$.ptrType.isConst &&
            Ce(
              `Cannot convert argument of type ${
                r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name
              } to parameter type ${this.name}`
            );
        var n = r.$$.ptrType.registeredClass;
        if (((t = dr(r.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
          switch (
            (void 0 === r.$$.smartPtr &&
              Ce("Passing raw pointer to smart pointer is illegal"),
            this.sharingPolicy)
          ) {
            case 0:
              r.$$.smartPtrType === this
                ? (t = r.$$.smartPtr)
                : Ce(
                    `Cannot convert argument of type ${
                      r.$$.smartPtrType
                        ? r.$$.smartPtrType.name
                        : r.$$.ptrType.name
                    } to parameter type ${this.name}`
                  );
              break;
            case 1:
              t = r.$$.smartPtr;
              break;
            case 2:
              if (r.$$.smartPtrType === this) t = r.$$.smartPtr;
              else {
                var o = r.clone();
                (t = this.rawShare(
                  t,
                  Fe(() => o.delete())
                )),
                  null !== e && e.push(this.rawDestructor, t);
              }
              break;
            default:
              Ce("Unsupporting sharing policy");
          }
        return t;
      }

      function pr(e, r) {
        if (null === r)
          return this.isReference && Ce(`null is not a valid ${this.name}`), 0;
        r.$$ || Ce(`Cannot pass "${Dr(r)}" as a ${this.name}`),
          r.$$.ptr ||
            Ce(`Cannot pass deleted object as a pointer of type ${this.name}`),
          r.$$.ptrType.isConst &&
            Ce(
              `Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`
            );
        var t = r.$$.ptrType.registeredClass;
        return dr(r.$$.ptr, t, this.registeredClass);
      }

      function hr(e) {
        return this.fromWireType(C[e >> 2]);
      }

      function mr(e, r, t, n, o, a, i, s, l, u, d) {
        (this.name = e),
          (this.registeredClass = r),
          (this.isReference = t),
          (this.isConst = n),
          (this.isSmartPointer = o),
          (this.pointeeType = a),
          (this.sharingPolicy = i),
          (this.rawGetPointee = s),
          (this.rawConstructor = l),
          (this.rawShare = u),
          (this.rawDestructor = d),
          o || void 0 !== r.baseClass
            ? (this.toWireType = fr)
            : n
            ? ((this.toWireType = cr), (this.destructorFunction = null))
            : ((this.toWireType = pr), (this.destructorFunction = null));
      }

      var vr,
        yr,
        gr = (e, r, t) => {
          o.hasOwnProperty(e) || qe("Replacing nonexistant public symbol"),
            void 0 !== o[e].overloadTable && void 0 !== t
              ? (o[e].overloadTable[t] = r)
              : ((o[e] = r), (o[e].argCount = t));
        },
        wr = (e) => vr.get(e),
        Er = (e, r, t) =>
          e.includes("j")
            ? ((e, r, t) => {
                var n = o["dynCall_" + e];
                return t && t.length
                  ? n.apply(null, [r].concat(t))
                  : n.call(null, r);
              })(e, r, t)
            : wr(r).apply(null, t),
        br = (e, r) => {
          var t,
            n,
            o,
            a = (e = Te(e)).includes("j")
              ? ((t = e),
                (n = r),
                (o = []),
                function () {
                  return (
                    (o.length = 0), Object.assign(o, arguments), Er(t, n, o)
                  );
                })
              : wr(r);
          return (
            "function" != typeof a &&
              Ce(`unknown function pointer with signature ${e}: ${r}`),
            a
          );
        },
        _r = (e, r) => {
          var t = [],
            n = {};
          throw (
            (r.forEach(function e(r) {
              n[r] ||
                Ue[r] ||
                (rr[r] ? rr[r].forEach(e) : (t.push(r), (n[r] = !0)));
            }),
            new yr(`${e}: ` + t.map(We).join([", "])))
          );
        };

      function $r(e, r, t, n, o, a) {
        var i = r.length;
        i < 2 &&
          Ce(
            "argTypes array size mismatch! Must at least get return value and 'this' types!"
          );
        for (
          var s = null !== r[1] && null !== t, l = !1, u = 1;
          u < r.length;
          ++u
        )
          if (null !== r[u] && void 0 === r[u].destructorFunction) {
            l = !0;
            break;
          }
        var d = "void" !== r[0].name,
          c = i - 2,
          f = new Array(c),
          p = [],
          h = [];
        return function () {
          var t;
          arguments.length !== c &&
            Ce(
              `function ${e} called with ${arguments.length} arguments, expected ${c}`
            ),
            (h.length = 0),
            (p.length = s ? 2 : 1),
            (p[0] = o),
            s && ((t = r[1].toWireType(h, this)), (p[1] = t));
          for (var a = 0; a < c; ++a)
            (f[a] = r[a + 2].toWireType(h, arguments[a])), p.push(f[a]);
          var i = n.apply(null, p);

          function u(e) {
            if (l) Ze(h);
            else
              for (var n = s ? 1 : 2; n < r.length; n++) {
                var o = 1 === n ? t : f[n - 2];
                null !== r[n].destructorFunction && r[n].destructorFunction(o);
              }
            if (d) return r[0].fromWireType(e);
          }

          return u(i);
        };
      }

      var kr = (e, r) => {
          for (var t = [], n = 0; n < e; n++) t.push(C[(r + 4 * n) >> 2]);
          return t;
        },
        Cr = (e, r, t) => (
          e instanceof Object || Ce(`${t} with invalid "this": ${e}`),
          e instanceof r.registeredClass.constructor ||
            Ce(`${t} incompatible with "this" of type ${e.constructor.name}`),
          e.$$.ptr ||
            Ce(`cannot call emscripten binding method ${t} on deleted object`),
          dr(e.$$.ptr, e.$$.ptrType.registeredClass, r.registeredClass)
        ),
        Pr = (e) => {
          e >= ke.reserved && 0 == --ke.get(e).refcount && ke.free(e);
        },
        Dr = (e) => {
          if (null === e) return "null";
          var r = typeof e;
          return "object" === r || "array" === r || "function" === r
            ? e.toString()
            : "" + e;
        },
        Fr = (e, r) => {
          switch (r) {
            case 4:
              return function (e) {
                return this.fromWireType(P[e >> 2]);
              };
            case 8:
              return function (e) {
                return this.fromWireType(D[e >> 3]);
              };
            default:
              throw new TypeError(`invalid float width (${r}): ${e}`);
          }
        },
        Sr = (e, r, t) => {
          switch (r) {
            case 1:
              return t ? (e) => E[e >> 0] : (e) => b[e >> 0];
            case 2:
              return t ? (e) => _[e >> 1] : (e) => $[e >> 1];
            case 4:
              return t ? (e) => k[e >> 2] : (e) => C[e >> 2];
            default:
              throw new TypeError(`invalid integer width (${r}): ${e}`);
          }
        },
        Tr =
          "undefined" != typeof TextDecoder
            ? new TextDecoder("utf-16le")
            : void 0,
        Mr = (e, r) => {
          for (var t = e, n = t >> 1, o = n + r / 2; !(n >= o) && $[n]; ) ++n;
          if ((t = n << 1) - e > 32 && Tr) return Tr.decode(b.subarray(e, t));
          for (var a = "", i = 0; !(i >= r / 2); ++i) {
            var s = _[(e + 2 * i) >> 1];
            if (0 == s) break;
            a += String.fromCharCode(s);
          }
          return a;
        },
        Ar = (e, r, t) => {
          if ((void 0 === t && (t = 2147483647), t < 2)) return 0;
          for (
            var n = r, o = (t -= 2) < 2 * e.length ? t / 2 : e.length, a = 0;
            a < o;
            ++a
          ) {
            var i = e.charCodeAt(a);
            (_[r >> 1] = i), (r += 2);
          }
          return (_[r >> 1] = 0), r - n;
        },
        jr = (e) => 2 * e.length,
        Or = (e, r) => {
          for (var t = 0, n = ""; !(t >= r / 4); ) {
            var o = k[(e + 4 * t) >> 2];
            if (0 == o) break;
            if ((++t, o >= 65536)) {
              var a = o - 65536;
              n += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
            } else n += String.fromCharCode(o);
          }
          return n;
        },
        Rr = (e, r, t) => {
          if ((void 0 === t && (t = 2147483647), t < 4)) return 0;
          for (var n = r, o = n + t - 4, a = 0; a < e.length; ++a) {
            var i = e.charCodeAt(a);
            if (i >= 55296 && i <= 57343)
              i = (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++a));
            if (((k[r >> 2] = i), (r += 4) + 4 > o)) break;
          }
          return (k[r >> 2] = 0), r - n;
        },
        zr = (e) => {
          for (var r = 0, t = 0; t < e.length; ++t) {
            var n = e.charCodeAt(t);
            n >= 55296 && n <= 57343 && ++t, (r += 4);
          }
          return r;
        },
        xr = (e, r) => {
          for (var t = new Array(e), n = 0; n < e; ++n)
            t[n] = Ie(C[(r + 4 * n) >> 2], "parameter " + n);
          return t;
        },
        Nr = {},
        Ur = (e) => {
          var r = Nr[e];
          return void 0 === r ? Te(e) : r;
        },
        Wr = [],
        Ir = () => {
          if ("object" == typeof globalThis) return globalThis;

          function e(e) {
            e.$$$embind_global$$$ = e;
            var r =
              "object" == typeof $$$embind_global$$$ &&
              e.$$$embind_global$$$ == e;
            return r || delete e.$$$embind_global$$$, r;
          }

          if ("object" == typeof $$$embind_global$$$)
            return $$$embind_global$$$;
          if (
            ("object" == typeof global && e(global)
              ? ($$$embind_global$$$ = global)
              : "object" == typeof self &&
                e(self) &&
                ($$$embind_global$$$ = self),
            "object" == typeof $$$embind_global$$$)
          )
            return $$$embind_global$$$;
          throw Error("unable to get global object.");
        },
        Lr = {};
      var Hr = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0),
        Br = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
        Yr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        Vr = (e) =>
          (Hr(e.getFullYear()) ? Br : Yr)[e.getMonth()] + e.getDate() - 1;
      var qr;
      qr = () => performance.now();
      var Xr = (e) => {
          var r = (e - w.buffer.byteLength + 65535) / 65536;
          try {
            return w.grow(r), T(), 1;
          } catch (e) {}
        },
        Gr = {},
        Jr = () => {
          if (!Jr.strings) {
            var e = {
              USER: "web_user",
              LOGNAME: "web_user",
              PATH: "/",
              PWD: "/",
              HOME: "/home/web_user",
              LANG:
                (
                  ("object" == typeof navigator &&
                    navigator.languages &&
                    navigator.languages[0]) ||
                  "C"
                ).replace("-", "_") + ".UTF-8",
              _: u || "./this.program",
            };
            for (var r in Gr) void 0 === Gr[r] ? delete e[r] : (e[r] = Gr[r]);
            var t = [];
            for (var r in e) t.push(`${r}=${e[r]}`);
            Jr.strings = t;
          }
          return Jr.strings;
        };
      var Kr = (e, r) => {
          for (var t = 0, n = 0; n <= r; t += e[n++]);
          return t;
        },
        Zr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Qr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        et = (e, r) => {
          for (var t = new Date(e.getTime()); r > 0; ) {
            var n = Hr(t.getFullYear()),
              o = t.getMonth(),
              a = (n ? Zr : Qr)[o];
            if (!(r > a - t.getDate())) return t.setDate(t.getDate() + r), t;
            (r -= a - t.getDate() + 1),
              t.setDate(1),
              o < 11
                ? t.setMonth(o + 1)
                : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
          }
          return t;
        },
        rt = (e) => parseInt(e),
        tt = function (e, r, t, n) {
          e || (e = this),
            (this.parent = e),
            (this.mount = e.mount),
            (this.mounted = null),
            (this.id = ce.nextInode++),
            (this.name = r),
            (this.mode = t),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = n);
        },
        nt = 365,
        ot = 146;
      Object.defineProperties(tt.prototype, {
        read: {
          get: function () {
            return (this.mode & nt) === nt;
          },
          set: function (e) {
            e ? (this.mode |= nt) : (this.mode &= -366);
          },
        },
        write: {
          get: function () {
            return (this.mode & ot) === ot;
          },
          set: function (e) {
            e ? (this.mode |= ot) : (this.mode &= -147);
          },
        },
        isFolder: {
          get: function () {
            return ce.isDir(this.mode);
          },
        },
        isDevice: {
          get: function () {
            return ce.isChrdev(this.mode);
          },
        },
      }),
        (ce.FSNode = tt),
        (ce.createPreloadedFile = (e, r, t, n, o, a, s, l, u, d) => {
          var c = r ? Z.resolve(J.join2(e, r)) : e;

          function f(t) {
            function i(t) {
              d && d(),
                l ||
                  ((e, r, t, n, o, a) => {
                    ce.createDataFile(e, r, t, n, o, a);
                  })(e, r, t, n, o, u),
                a && a(),
                U();
            }

            ((e, r, t, n) => {
              "undefined" != typeof Browser && Browser.init();
              var o = !1;
              return (
                le.forEach((a) => {
                  o || (a.canHandle(r) && (a.handle(e, r, t, n), (o = !0)));
                }),
                o
              );
            })(t, c, i, () => {
              s && s(), U();
            }) || i(t);
          }

          N(),
            "string" == typeof t
              ? ((e, r, t, n) => {
                  var o = n ? "" : `al ${e}`;
                  i(
                    e,
                    (t) => {
                      S(t, `Loading data file "${e}" failed (no arrayBuffer).`),
                        r(new Uint8Array(t)),
                        o && U();
                    },
                    (r) => {
                      if (!t) throw `Loading data file "${e}" failed.`;
                      t();
                    }
                  ),
                    o && N();
                })(t, (e) => f(e), s)
              : f(t);
        }),
        ce.staticInit(),
        (o.FS_createPath = ce.createPath),
        (o.FS_createDataFile = ce.createDataFile),
        (o.FS_createPreloadedFile = ce.createPreloadedFile),
        (o.FS_unlink = ce.unlink),
        (o.FS_createLazyFile = ce.createLazyFile),
        (o.FS_createDevice = ce.createDevice),
        Object.assign(ge.prototype, {
          get(e) {
            return this.allocated[e];
          },
          has(e) {
            return void 0 !== this.allocated[e];
          },
          allocate(e) {
            var r = this.freelist.pop() || this.allocated.length;
            return (this.allocated[r] = e), r;
          },
          free(e) {
            (this.allocated[e] = void 0), this.freelist.push(e);
          },
        }),
        (we = o.BindingError =
          class extends Error {
            constructor(e) {
              super(e), (this.name = "BindingError");
            }
          }),
        ke.allocated.push(
          { value: void 0 },
          { value: null },
          { value: !0 },
          { value: !1 }
        ),
        (ke.reserved = ke.allocated.length),
        (o.count_emval_handles = Pe),
        (Ee = o.PureVirtualError = Se(Error, "PureVirtualError")),
        (() => {
          for (var e = new Array(256), r = 0; r < 256; ++r)
            e[r] = String.fromCharCode(r);
          be = e;
        })(),
        (o.getInheritedInstanceCount = Me),
        (o.getLiveInheritedInstances = Ae),
        (o.flushPendingDeletes = Oe),
        (o.setDelayFunction = Re),
        ($e = o.InternalError =
          class extends Error {
            constructor(e) {
              super(e), (this.name = "InternalError");
            }
          }),
        Object.assign(ir.prototype, {
          isAliasOf(e) {
            if (!(this instanceof ir)) return !1;
            if (!(e instanceof ir)) return !1;
            var r = this.$$.ptrType.registeredClass,
              t = this.$$.ptr;
            e.$$ = e.$$;
            for (
              var n = e.$$.ptrType.registeredClass, o = e.$$.ptr;
              r.baseClass;

            )
              (t = r.upcast(t)), (r = r.baseClass);
            for (; n.baseClass; ) (o = n.upcast(o)), (n = n.baseClass);
            return r === n && t === o;
          },
          clone() {
            if ((this.$$.ptr || ar(this), this.$$.preservePointerOnDelete))
              return (this.$$.count.value += 1), this;
            var e,
              r = Je(
                Object.create(Object.getPrototypeOf(this), {
                  $$: {
                    value:
                      ((e = this.$$),
                      {
                        count: e.count,
                        deleteScheduled: e.deleteScheduled,
                        preservePointerOnDelete: e.preservePointerOnDelete,
                        ptr: e.ptr,
                        ptrType: e.ptrType,
                        smartPtr: e.smartPtr,
                        smartPtrType: e.smartPtrType,
                      }),
                  },
                })
              );
            return (r.$$.count.value += 1), (r.$$.deleteScheduled = !1), r;
          },
          delete() {
            this.$$.ptr || ar(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                Ce("Object already scheduled for deletion"),
              Le(this),
              Be(this.$$),
              this.$$.preservePointerOnDelete ||
                ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
          },
          isDeleted() {
            return !this.$$.ptr;
          },
          deleteLater() {
            return (
              this.$$.ptr || ar(this),
              this.$$.deleteScheduled &&
                !this.$$.preservePointerOnDelete &&
                Ce("Object already scheduled for deletion"),
              je.push(this),
              1 === je.length && _e && _e(Oe),
              (this.$$.deleteScheduled = !0),
              this
            );
          },
        }),
        Object.assign(mr.prototype, {
          getPointee(e) {
            return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
          },
          destructor(e) {
            this.rawDestructor && this.rawDestructor(e);
          },
          argPackAdvance: or,
          readValueFromPointer: hr,
          deleteObject(e) {
            null !== e && e.delete();
          },
          fromWireType: Ge,
        }),
        (yr = o.UnboundTypeError = Se(Error, "UnboundTypeError"));
      var at,
        it = {
          W: function (e, r, t, n, o) {
            try {
              for (
                var a = 0,
                  i = r ? k[r >> 2] : 0,
                  s = r ? k[(r + 4) >> 2] : 0,
                  l = t ? k[t >> 2] : 0,
                  u = t ? k[(t + 4) >> 2] : 0,
                  d = n ? k[n >> 2] : 0,
                  c = n ? k[(n + 4) >> 2] : 0,
                  f = 0,
                  p = 0,
                  h = 0,
                  m = 0,
                  v = 0,
                  y = 0,
                  g =
                    (r ? k[r >> 2] : 0) |
                    (t ? k[t >> 2] : 0) |
                    (n ? k[n >> 2] : 0),
                  w =
                    (r ? k[(r + 4) >> 2] : 0) |
                    (t ? k[(t + 4) >> 2] : 0) |
                    (n ? k[(n + 4) >> 2] : 0),
                  E = function (e, r, t, n) {
                    return e < 32 ? r & n : t & n;
                  },
                  b = 0;
                b < e;
                b++
              ) {
                var _ = 1 << b % 32;
                if (E(b, g, w, _)) {
                  var $ = pe.getStreamFromFD(b),
                    C = pe.DEFAULT_POLLMASK;
                  if ($.stream_ops.poll) {
                    var P = -1;
                    if (o)
                      P =
                        1e3 *
                        ((r ? k[o >> 2] : 0) + (r ? k[(o + 8) >> 2] : 0) / 1e6);
                    C = $.stream_ops.poll($, P);
                  }
                  1 & C && E(b, i, s, _) && (b < 32 ? (f |= _) : (p |= _), a++),
                    4 & C &&
                      E(b, l, u, _) &&
                      (b < 32 ? (h |= _) : (m |= _), a++),
                    2 & C &&
                      E(b, d, c, _) &&
                      (b < 32 ? (v |= _) : (y |= _), a++);
                }
              }
              return (
                r && ((k[r >> 2] = f), (k[(r + 4) >> 2] = p)),
                t && ((k[t >> 2] = h), (k[(t + 4) >> 2] = m)),
                n && ((k[n >> 2] = v), (k[(n + 4) >> 2] = y)),
                a
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          ia: function (e, r) {
            try {
              return (e = pe.getStr(e)), ce.chmod(e, r), 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          ma: function (e, r, t, n) {
            try {
              if (((r = pe.getStr(r)), (r = pe.calculateAt(e, r)), -8 & t))
                return -28;
              var o = ce.lookupPath(r, { follow: !0 }).node;
              if (!o) return -44;
              var a = "";
              return (
                4 & t && (a += "r"),
                2 & t && (a += "w"),
                1 & t && (a += "x"),
                a && ce.nodePermissions(o, a) ? -2 : 0
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          ja: function (e, r) {
            try {
              return ce.fchmod(e, r), 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          B: function (e, r, t) {
            pe.varargs = t;
            try {
              var n = pe.getStreamFromFD(e);
              switch (r) {
                case 0:
                  if ((o = pe.get()) < 0) return -28;
                  for (; ce.streams[o]; ) o++;
                  return ce.createStream(n, o).fd;
                case 1:
                case 2:
                case 6:
                case 7:
                  return 0;
                case 3:
                  return n.flags;
                case 4:
                  var o = pe.get();
                  return (n.flags |= o), 0;
                case 5:
                  o = pe.getp();
                  return (_[(o + 0) >> 1] = 2), 0;
                case 16:
                case 8:
                default:
                  return -28;
                case 9:
                  return (a = 28), (k[dt() >> 2] = a), -1;
              }
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
            var a;
          },
          fa: function (e, r) {
            try {
              var t = pe.getStreamFromFD(e);
              return pe.doStat(ce.stat, t.path, r);
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          R: function (e, r, t) {
            var n = he(r, t);
            try {
              return isNaN(n) ? 61 : (ce.ftruncate(e, n), 0);
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          Z: function (e, r, t) {
            try {
              var n = pe.getStreamFromFD(e);
              n.getdents || (n.getdents = ce.readdir(n.path));
              for (
                var o = 280,
                  a = 0,
                  i = ce.llseek(n, 0, 1),
                  s = Math.floor(i / o);
                s < n.getdents.length && a + o <= t;

              ) {
                var l,
                  u,
                  d = n.getdents[s];
                if ("." === d) (l = n.node.id), (u = 4);
                else if (".." === d) {
                  (l = ce.lookupPath(n.path, { parent: !0 }).node.id), (u = 4);
                } else {
                  var c = ce.lookupNode(n.node, d);
                  (l = c.id),
                    (u = ce.isChrdev(c.mode)
                      ? 2
                      : ce.isDir(c.mode)
                      ? 4
                      : ce.isLink(c.mode)
                      ? 10
                      : 8);
                }
                (B = [
                  l >>> 0,
                  ((H = l),
                  +Math.abs(H) >= 1
                    ? H > 0
                      ? +Math.floor(H / 4294967296) >>> 0
                      : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (k[(r + a) >> 2] = B[0]),
                  (k[(r + a + 4) >> 2] = B[1]),
                  (B = [
                    ((s + 1) * o) >>> 0,
                    ((H = (s + 1) * o),
                    +Math.abs(H) >= 1
                      ? H > 0
                        ? +Math.floor(H / 4294967296) >>> 0
                        : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (k[(r + a + 8) >> 2] = B[0]),
                  (k[(r + a + 12) >> 2] = B[1]),
                  (_[(r + a + 16) >> 1] = 280),
                  (E[(r + a + 18) >> 0] = u),
                  me(d, r + a + 19, 256),
                  (a += o),
                  (s += 1);
              }
              return ce.llseek(n, s * o, 0), a;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          ha: function (e, r, t) {
            pe.varargs = t;
            try {
              var n = pe.getStreamFromFD(e);
              switch (r) {
                case 21509:
                case 21510:
                case 21511:
                case 21512:
                case 21524:
                case 21515:
                  return n.tty ? 0 : -59;
                case 21505:
                  if (!n.tty) return -59;
                  if (n.tty.ops.ioctl_tcgets) {
                    var o = n.tty.ops.ioctl_tcgets(n),
                      a = pe.getp();
                    (k[a >> 2] = o.c_iflag || 0),
                      (k[(a + 4) >> 2] = o.c_oflag || 0),
                      (k[(a + 8) >> 2] = o.c_cflag || 0),
                      (k[(a + 12) >> 2] = o.c_lflag || 0);
                    for (var i = 0; i < 32; i++)
                      E[(a + i + 17) >> 0] = o.c_cc[i] || 0;
                    return 0;
                  }
                  return 0;
                case 21506:
                case 21507:
                case 21508:
                  if (!n.tty) return -59;
                  if (n.tty.ops.ioctl_tcsets) {
                    a = pe.getp();
                    var s = k[a >> 2],
                      l = k[(a + 4) >> 2],
                      u = k[(a + 8) >> 2],
                      d = k[(a + 12) >> 2],
                      c = [];
                    for (i = 0; i < 32; i++) c.push(E[(a + i + 17) >> 0]);
                    return n.tty.ops.ioctl_tcsets(n.tty, r, {
                      c_iflag: s,
                      c_oflag: l,
                      c_cflag: u,
                      c_lflag: d,
                      c_cc: c,
                    });
                  }
                  return 0;
                case 21519:
                  if (!n.tty) return -59;
                  a = pe.getp();
                  return (k[a >> 2] = 0), 0;
                case 21520:
                  return n.tty ? -28 : -59;
                case 21531:
                  a = pe.getp();
                  return ce.ioctl(n, r, a);
                case 21523:
                  if (!n.tty) return -59;
                  if (n.tty.ops.ioctl_tiocgwinsz) {
                    var f = n.tty.ops.ioctl_tiocgwinsz(n.tty);
                    a = pe.getp();
                    (_[a >> 1] = f[0]), (_[(a + 2) >> 1] = f[1]);
                  }
                  return 0;
                default:
                  return -28;
              }
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          da: function (e, r) {
            try {
              return (e = pe.getStr(e)), pe.doStat(ce.lstat, e, r);
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          _: function (e, r, t) {
            try {
              return (
                (r = pe.getStr(r)),
                (r = pe.calculateAt(e, r)),
                "/" === (r = J.normalize(r))[r.length - 1] &&
                  (r = r.substr(0, r.length - 1)),
                ce.mkdir(r, t, 0),
                0
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          ca: function (e, r, t, n) {
            try {
              r = pe.getStr(r);
              var o = 256 & n,
                a = 4096 & n;
              return (
                (n &= -6401),
                (r = pe.calculateAt(e, r, a)),
                pe.doStat(o ? ce.lstat : ce.stat, r, t)
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          t: function (e, r, t, n) {
            pe.varargs = n;
            try {
              (r = pe.getStr(r)), (r = pe.calculateAt(e, r));
              var o = n ? pe.get() : 0;
              return ce.open(r, t, o).fd;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          X: function (e, r, t, n) {
            try {
              return (
                (r = pe.getStr(r)),
                (n = pe.getStr(n)),
                (r = pe.calculateAt(e, r)),
                (n = pe.calculateAt(t, n)),
                ce.rename(r, n),
                0
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          x: function (e) {
            try {
              return (e = pe.getStr(e)), ce.rmdir(e), 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          ea: function (e, r) {
            try {
              return (e = pe.getStr(e)), pe.doStat(ce.stat, e, r);
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          y: function (e, r, t) {
            try {
              return (
                (r = pe.getStr(r)),
                (r = pe.calculateAt(e, r)),
                0 === t
                  ? ce.unlink(r)
                  : 512 === t
                  ? ce.rmdir(r)
                  : W("Invalid flags passed to unlinkat"),
                0
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          ta: (e, r, t) => {
            (e = Te(e)), (r = Ie(r, "wrapper")), (t = De(t));
            var n = [].slice,
              o = r.registeredClass,
              a = o.instancePrototype,
              i = o.baseClass.instancePrototype,
              s = o.baseClass.constructor,
              l = ye(e, function () {
                o.baseClass.pureVirtualFunctions.forEach(
                  function (e) {
                    if (this[e] === i[e])
                      throw new Ee(
                        `Pure virtual function ${e} must be implemented in JavaScript`
                      );
                  }.bind(this)
                ),
                  Object.defineProperty(this, "__parent", { value: a }),
                  this.__construct.apply(this, n.call(arguments));
              });
            return (
              (a.__construct = function () {
                this === a && Ce("Pass correct 'this' to __construct");
                var e = s.implement.apply(
                  void 0,
                  [this].concat(n.call(arguments))
                );
                Le(e);
                var r = e.$$;
                e.notifyOnDestruction(),
                  (r.preservePointerOnDelete = !0),
                  Object.defineProperties(this, { $$: { value: r } }),
                  Je(this),
                  Ne(o, r.ptr, this);
              }),
              (a.__destruct = function () {
                var e, r;
                this === a && Ce("Pass correct 'this' to __destruct"),
                  Le(this),
                  (e = o),
                  (r = this.$$.ptr),
                  (r = xe(e, r)),
                  ze.hasOwnProperty(r)
                    ? delete ze[r]
                    : Ce(`Tried to unregister unregistered instance: ${r}`);
              }),
              (l.prototype = Object.create(a)),
              Object.assign(l.prototype, t),
              Fe(l)
            );
          },
          G: (e) => {
            var r = Ke[e];
            delete Ke[e];
            var t = r.rawConstructor,
              n = r.rawDestructor,
              o = r.fields,
              a = o
                .map((e) => e.getterReturnType)
                .concat(o.map((e) => e.setterArgumentType));
            tr([e], a, (e) => {
              var a = {};
              return (
                o.forEach((r, t) => {
                  var n = r.fieldName,
                    i = e[t],
                    s = r.getter,
                    l = r.getterContext,
                    u = e[t + o.length],
                    d = r.setter,
                    c = r.setterContext;
                  a[n] = {
                    read: (e) => i.fromWireType(s(l, e)),
                    write: (e, r) => {
                      var t = [];
                      d(c, e, u.toWireType(t, r)), Ze(t);
                    },
                  };
                }),
                [
                  {
                    name: r.name,
                    fromWireType: (e) => {
                      var r = {};
                      for (var t in a) r[t] = a[t].read(e);
                      return n(e), r;
                    },
                    toWireType: (e, r) => {
                      for (var o in a)
                        if (!(o in r))
                          throw new TypeError(`Missing field: "${o}"`);
                      var i = t();
                      for (o in a) a[o].write(i, r[o]);
                      return null !== e && e.push(n, i), i;
                    },
                    argPackAdvance: or,
                    readValueFromPointer: Qe,
                    destructorFunction: n,
                  },
                ]
              );
            });
          },
          S: (e, r, t, n, o) => {},
          oa: (e, r, t, n) => {
            nr(e, {
              name: (r = Te(r)),
              fromWireType: function (e) {
                return !!e;
              },
              toWireType: function (e, r) {
                return r ? t : n;
              },
              argPackAdvance: or,
              readValueFromPointer: function (e) {
                return this.fromWireType(b[e]);
              },
              destructorFunction: null,
            });
          },
          l: (e, r, t, n, o, a, i, s, l, u, d, c, f) => {
            (d = Te(d)),
              (a = br(o, a)),
              s && (s = br(i, s)),
              u && (u = br(l, u)),
              (f = br(c, f));
            var p = ve(d);
            lr(p, function () {
              _r(`Cannot construct ${d} due to unbound types`, [n]);
            }),
              tr([e, r, t], n ? [n] : [], function (r) {
                var t, o;
                (r = r[0]),
                  (o = n
                    ? (t = r.registeredClass).instancePrototype
                    : ir.prototype);
                var i = ye(p, function () {
                    if (Object.getPrototypeOf(this) !== l)
                      throw new we("Use 'new' to construct " + d);
                    if (void 0 === c.constructor_body)
                      throw new we(d + " has no accessible constructor");
                    var e = c.constructor_body[arguments.length];
                    if (void 0 === e)
                      throw new we(
                        `Tried to invoke ctor of ${d} with invalid number of parameters (${
                          arguments.length
                        }) - expected (${Object.keys(
                          c.constructor_body
                        ).toString()}) parameters instead!`
                      );
                    return e.apply(this, arguments);
                  }),
                  l = Object.create(o, { constructor: { value: i } });
                i.prototype = l;
                var c = new ur(d, i, l, f, t, a, s, u);
                c.baseClass &&
                  (void 0 === c.baseClass.__derivedClasses &&
                    (c.baseClass.__derivedClasses = []),
                  c.baseClass.__derivedClasses.push(c));
                var h = new mr(d, c, !0, !1, !1),
                  m = new mr(d + "*", c, !1, !1, !1),
                  v = new mr(d + " const*", c, !1, !0, !1);
                return (
                  (Ve[e] = { pointerType: m, constPointerType: v }),
                  gr(p, i),
                  [h, m, v]
                );
              });
          },
          F: (e, r, t, n, o, a, i, s) => {
            var l = kr(t, n);
            (r = Te(r)),
              (a = br(o, a)),
              tr([], [e], function (e) {
                var n = `${(e = e[0]).name}.${r}`;

                function o() {
                  _r(`Cannot call ${n} due to unbound types`, l);
                }

                r.startsWith("@@") && (r = Symbol[r.substring(2)]);
                var s = e.registeredClass.constructor;
                return (
                  void 0 === s[r]
                    ? ((o.argCount = t - 1), (s[r] = o))
                    : (sr(s, r, n), (s[r].overloadTable[t - 1] = o)),
                  tr([], l, function (o) {
                    var l = [o[0], null].concat(o.slice(1)),
                      u = $r(n, l, null, a, i);
                    if (
                      (void 0 === s[r].overloadTable
                        ? ((u.argCount = t - 1), (s[r] = u))
                        : (s[r].overloadTable[t - 1] = u),
                      e.registeredClass.__derivedClasses)
                    )
                      for (const t of e.registeredClass.__derivedClasses)
                        t.constructor.hasOwnProperty(r) ||
                          (t.constructor[r] = u);
                    return [];
                  }),
                  []
                );
              });
          },
          I: (e, r, t, n, o, a) => {
            var i = kr(r, t);
            (o = br(n, o)),
              tr([], [e], function (e) {
                var t = `constructor ${(e = e[0]).name}`;
                if (
                  (void 0 === e.registeredClass.constructor_body &&
                    (e.registeredClass.constructor_body = []),
                  void 0 !== e.registeredClass.constructor_body[r - 1])
                )
                  throw new we(
                    `Cannot register multiple constructors with identical number of parameters (${
                      r - 1
                    }) for class '${
                      e.name
                    }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                  );
                return (
                  (e.registeredClass.constructor_body[r - 1] = () => {
                    _r(`Cannot construct ${e.name} due to unbound types`, i);
                  }),
                  tr(
                    [],
                    i,
                    (n) => (
                      n.splice(1, 0, null),
                      (e.registeredClass.constructor_body[r - 1] = $r(
                        t,
                        n,
                        null,
                        o,
                        a
                      )),
                      []
                    )
                  ),
                  []
                );
              });
          },
          d: (e, r, t, n, o, a, i, s, l) => {
            var u = kr(t, n);
            (r = Te(r)),
              (a = br(o, a)),
              tr([], [e], function (e) {
                var n = `${(e = e[0]).name}.${r}`;

                function o() {
                  _r(`Cannot call ${n} due to unbound types`, u);
                }

                r.startsWith("@@") && (r = Symbol[r.substring(2)]),
                  s && e.registeredClass.pureVirtualFunctions.push(r);
                var l = e.registeredClass.instancePrototype,
                  d = l[r];
                return (
                  void 0 === d ||
                  (void 0 === d.overloadTable &&
                    d.className !== e.name &&
                    d.argCount === t - 2)
                    ? ((o.argCount = t - 2), (o.className = e.name), (l[r] = o))
                    : (sr(l, r, n), (l[r].overloadTable[t - 2] = o)),
                  tr([], u, function (o) {
                    var s = $r(n, o, e, a, i);
                    return (
                      void 0 === l[r].overloadTable
                        ? ((s.argCount = t - 2), (l[r] = s))
                        : (l[r].overloadTable[t - 2] = s),
                      []
                    );
                  }),
                  []
                );
              });
          },
          w: (e, r, t, n, o, a, i, s, l, u) => {
            (r = Te(r)),
              (o = br(n, o)),
              tr([], [e], function (e) {
                var n = `${(e = e[0]).name}.${r}`,
                  d = {
                    get() {
                      _r(`Cannot access ${n} due to unbound types`, [t, i]);
                    },
                    enumerable: !0,
                    configurable: !0,
                  };
                return (
                  (d.set = l
                    ? () =>
                        _r(`Cannot access ${n} due to unbound types`, [t, i])
                    : (e) => Ce(n + " is a read-only property")),
                  Object.defineProperty(
                    e.registeredClass.instancePrototype,
                    r,
                    d
                  ),
                  tr([], l ? [t, i] : [t], function (t) {
                    var i = t[0],
                      d = {
                        get() {
                          var r = Cr(this, e, n + " getter");
                          return i.fromWireType(o(a, r));
                        },
                        enumerable: !0,
                      };
                    if (l) {
                      l = br(s, l);
                      var c = t[1];
                      d.set = function (r) {
                        var t = Cr(this, e, n + " setter"),
                          o = [];
                        l(u, t, c.toWireType(o, r)), Ze(o);
                      };
                    }
                    return (
                      Object.defineProperty(
                        e.registeredClass.instancePrototype,
                        r,
                        d
                      ),
                      []
                    );
                  }),
                  []
                );
              });
          },
          na: (e, r) => {
            nr(e, {
              name: (r = Te(r)),
              fromWireType: (e) => {
                var r = De(e);
                return Pr(e), r;
              },
              toWireType: (e, r) => Fe(r),
              argPackAdvance: or,
              readValueFromPointer: Qe,
              destructorFunction: null,
            });
          },
          C: (e, r, t) => {
            nr(e, {
              name: (r = Te(r)),
              fromWireType: (e) => e,
              toWireType: (e, r) => r,
              argPackAdvance: or,
              readValueFromPointer: Fr(r, t),
              destructorFunction: null,
            });
          },
          c: (e, r, t, n, o, a, i) => {
            var s = kr(r, t);
            (e = Te(e)),
              (o = br(n, o)),
              lr(
                e,
                function () {
                  _r(`Cannot call ${e} due to unbound types`, s);
                },
                r - 1
              ),
              tr([], s, function (t) {
                var n = [t[0], null].concat(t.slice(1));
                return gr(e, $r(e, n, null, o, a), r - 1), [];
              });
          },
          g: (e, r, t, n, o) => {
            (r = Te(r)), -1 === o && (o = 4294967295);
            var a = (e) => e;
            if (0 === n) {
              var i = 32 - 8 * t;
              a = (e) => (e << i) >>> i;
            }
            var s = r.includes("unsigned");
            nr(e, {
              name: r,
              fromWireType: a,
              toWireType: s
                ? function (e, r) {
                    return this.name, r >>> 0;
                  }
                : function (e, r) {
                    return this.name, r;
                  },
              argPackAdvance: or,
              readValueFromPointer: Sr(r, t, 0 !== n),
              destructorFunction: null,
            });
          },
          e: (e, r, t) => {
            var n = [
              Int8Array,
              Uint8Array,
              Int16Array,
              Uint16Array,
              Int32Array,
              Uint32Array,
              Float32Array,
              Float64Array,
            ][r];

            function o(e) {
              var r = C[e >> 2],
                t = C[(e + 4) >> 2];
              return new n(E.buffer, t, r);
            }

            nr(
              e,
              {
                name: (t = Te(t)),
                fromWireType: o,
                argPackAdvance: or,
                readValueFromPointer: o,
              },
              { ignoreDuplicateRegistrations: !0 }
            );
          },
          Y: (e, r, t, n, o, a, i, s, l, u, d, c) => {
            (t = Te(t)),
              (a = br(o, a)),
              (s = br(i, s)),
              (u = br(l, u)),
              (c = br(d, c)),
              tr([e], [r], function (e) {
                return (
                  (e = e[0]),
                  [new mr(t, e.registeredClass, !1, !1, !0, e, n, a, s, u, c)]
                );
              });
          },
          D: (e, r) => {
            var t = "std::string" === (r = Te(r));
            nr(e, {
              name: r,
              fromWireType(e) {
                var r,
                  n = C[e >> 2],
                  o = e + 4;
                if (t)
                  for (var a = o, i = 0; i <= n; ++i) {
                    var s = o + i;
                    if (i == n || 0 == b[s]) {
                      var l = fe(a, s - a);
                      void 0 === r
                        ? (r = l)
                        : ((r += String.fromCharCode(0)), (r += l)),
                        (a = s + 1);
                    }
                  }
                else {
                  var u = new Array(n);
                  for (i = 0; i < n; ++i) u[i] = String.fromCharCode(b[o + i]);
                  r = u.join("");
                }
                return ut(e), r;
              },
              toWireType(e, r) {
                var n;
                r instanceof ArrayBuffer && (r = new Uint8Array(r));
                var o = "string" == typeof r;
                o ||
                  r instanceof Uint8Array ||
                  r instanceof Uint8ClampedArray ||
                  r instanceof Int8Array ||
                  Ce("Cannot pass non-string to std::string"),
                  (n = t && o ? te(r) : r.length);
                var a = lt(4 + n + 1),
                  i = a + 4;
                if (((C[a >> 2] = n), t && o)) me(r, i, n + 1);
                else if (o)
                  for (var s = 0; s < n; ++s) {
                    var l = r.charCodeAt(s);
                    l > 255 &&
                      (ut(i),
                      Ce(
                        "String has UTF-16 code units that do not fit in 8 bits"
                      )),
                      (b[i + s] = l);
                  }
                else for (s = 0; s < n; ++s) b[i + s] = r[s];
                return null !== e && e.push(ut, a), a;
              },
              argPackAdvance: or,
              readValueFromPointer: hr,
              destructorFunction(e) {
                ut(e);
              },
            });
          },
          u: (e, r, t) => {
            var n, o, a, i, s;
            (t = Te(t)),
              2 === r
                ? ((n = Mr), (o = Ar), (i = jr), (a = () => $), (s = 1))
                : 4 === r &&
                  ((n = Or), (o = Rr), (i = zr), (a = () => C), (s = 2)),
              nr(e, {
                name: t,
                fromWireType: (e) => {
                  for (
                    var t, o = C[e >> 2], i = a(), l = e + 4, u = 0;
                    u <= o;
                    ++u
                  ) {
                    var d = e + 4 + u * r;
                    if (u == o || 0 == i[d >> s]) {
                      var c = n(l, d - l);
                      void 0 === t
                        ? (t = c)
                        : ((t += String.fromCharCode(0)), (t += c)),
                        (l = d + r);
                    }
                  }
                  return ut(e), t;
                },
                toWireType: (e, n) => {
                  "string" != typeof n &&
                    Ce(`Cannot pass non-string to C++ string type ${t}`);
                  var a = i(n),
                    l = lt(4 + a + r);
                  return (
                    (C[l >> 2] = a >> s),
                    o(n, l + 4, a + r),
                    null !== e && e.push(ut, l),
                    l
                  );
                },
                argPackAdvance: or,
                readValueFromPointer: Qe,
                destructorFunction(e) {
                  ut(e);
                },
              });
          },
          ua: (e, r, t, n, o, a) => {
            Ke[e] = {
              name: Te(r),
              rawConstructor: br(t, n),
              rawDestructor: br(o, a),
              fields: [],
            };
          },
          H: (e, r, t, n, o, a, i, s, l, u) => {
            Ke[e].fields.push({
              fieldName: Te(r),
              getterReturnType: t,
              getter: br(n, o),
              getterContext: a,
              setterArgumentType: i,
              setter: br(s, l),
              setterContext: u,
            });
          },
          pa: (e, r) => {
            nr(e, {
              isVoid: !0,
              name: (r = Te(r)),
              argPackAdvance: 0,
              fromWireType: () => {},
              toWireType: (e, r) => {},
            });
          },
          qa: (e) => {
            do {
              var r = C[e >> 2],
                t = C[(e += 4) >> 2],
                n = C[(e += 4) >> 2];
              e += 4;
              var o = fe(r);
              ce.createPath("/", J.dirname(o), !0, !0),
                ce.createDataFile(o, null, E.subarray(n, n + t), !0, !0, !0);
            } while (C[e >> 2]);
          },
          la: () => true,
          o: (e, r, t) => {
            (e = De(e)), (r = Ie(r, "emval::as"));
            var n = [],
              o = Fe(n);
            return (C[t >> 2] = o), r.toWireType(n, e);
          },
          O: (e, r, t, n) => {
            e = De(e);
            for (var o = xr(r, t), a = new Array(r), i = 0; i < r; ++i) {
              var s = o[i];
              (a[i] = s.readValueFromPointer(n)), (n += s.argPackAdvance);
            }
            var l = e.apply(void 0, a);
            return Fe(l);
          },
          j: (e, r, t, n, o) =>
            (e = Wr[e])(
              (r = De(r)),
              (t = Ur(t)),
              ((e) => {
                var r = [];
                return (C[e >> 2] = Fe(r)), r;
              })(n),
              o
            ),
          E: (e, r, t, n) => {
            (e = Wr[e])((r = De(r)), (t = Ur(t)), null, n);
          },
          b: Pr,
          r: (e) => (0 === e ? Fe(Ir()) : ((e = Ur(e)), Fe(Ir()[e]))),
          h: (e, r) => {
            var t = xr(e, r),
              n = t[0],
              o =
                n.name +
                "_$" +
                t
                  .slice(1)
                  .map(function (e) {
                    return e.name;
                  })
                  .join("_") +
                "$",
              a = Lr[o];
            if (void 0 !== a) return a;
            var i,
              s,
              l = new Array(e - 1);
            return (
              (i = (r, o, a, i) => {
                for (var s = 0, u = 0; u < e - 1; ++u)
                  (l[u] = t[u + 1].readValueFromPointer(i + s)),
                    (s += t[u + 1].argPackAdvance);
                var d = r[o].apply(r, l);
                for (u = 0; u < e - 1; ++u)
                  t[u + 1].deleteObject && t[u + 1].deleteObject(l[u]);
                if (!n.isVoid) return n.toWireType(a, d);
              }),
              (s = Wr.length),
              Wr.push(i),
              (a = s),
              (Lr[o] = a),
              a
            );
          },
          ra: (e) => ((e = Ur(e)), Fe(o[e])),
          q: (e, r) => ((e = De(e)), (r = De(r)), Fe(e[r])),
          i: (e) => {
            e > 4 && (ke.get(e).refcount += 1);
          },
          p: (e) => Fe(Ur(e)),
          f: (e) => {
            var r = De(e);
            Ze(r), Pr(e);
          },
          k: (e, r) => {
            var t = (e = Ie(e, "_emval_take_value")).readValueFromPointer(r);
            return Fe(t);
          },
          v: (e) => ((e = De(e)), Fe(typeof e)),
          L: function (e, r, t) {
            var n = he(e, r),
              o = new Date(1e3 * n);
            (k[t >> 2] = o.getUTCSeconds()),
              (k[(t + 4) >> 2] = o.getUTCMinutes()),
              (k[(t + 8) >> 2] = o.getUTCHours()),
              (k[(t + 12) >> 2] = o.getUTCDate()),
              (k[(t + 16) >> 2] = o.getUTCMonth()),
              (k[(t + 20) >> 2] = o.getUTCFullYear() - 1900),
              (k[(t + 24) >> 2] = o.getUTCDay());
            var a = Date.UTC(o.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
              i = ((o.getTime() - a) / 864e5) | 0;
            k[(t + 28) >> 2] = i;
          },
          M: function (e, r, t) {
            var n = he(e, r),
              o = new Date(1e3 * n);
            (k[t >> 2] = o.getSeconds()),
              (k[(t + 4) >> 2] = o.getMinutes()),
              (k[(t + 8) >> 2] = o.getHours()),
              (k[(t + 12) >> 2] = o.getDate()),
              (k[(t + 16) >> 2] = o.getMonth()),
              (k[(t + 20) >> 2] = o.getFullYear() - 1900),
              (k[(t + 24) >> 2] = o.getDay());
            var a = 0 | Vr(o);
            (k[(t + 28) >> 2] = a),
              (k[(t + 36) >> 2] = -60 * o.getTimezoneOffset());
            var i = new Date(o.getFullYear(), 0, 1),
              s = new Date(o.getFullYear(), 6, 1).getTimezoneOffset(),
              l = i.getTimezoneOffset(),
              u = 0 | (s != l && o.getTimezoneOffset() == Math.min(l, s));
            k[(t + 32) >> 2] = u;
          },
          N: function (e) {
            var r = (() => {
              var r = new Date(
                  k[(e + 20) >> 2] + 1900,
                  k[(e + 16) >> 2],
                  k[(e + 12) >> 2],
                  k[(e + 8) >> 2],
                  k[(e + 4) >> 2],
                  k[e >> 2],
                  0
                ),
                t = k[(e + 32) >> 2],
                n = r.getTimezoneOffset(),
                o = new Date(r.getFullYear(), 0, 1),
                a = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
                i = o.getTimezoneOffset(),
                s = Math.min(i, a);
              if (t < 0) k[(e + 32) >> 2] = Number(a != i && s == n);
              else if (t > 0 != (s == n)) {
                var l = Math.max(i, a),
                  u = t > 0 ? s : l;
                r.setTime(r.getTime() + 6e4 * (u - n));
              }
              k[(e + 24) >> 2] = r.getDay();
              var d = 0 | Vr(r);
              return (
                (k[(e + 28) >> 2] = d),
                (k[e >> 2] = r.getSeconds()),
                (k[(e + 4) >> 2] = r.getMinutes()),
                (k[(e + 8) >> 2] = r.getHours()),
                (k[(e + 12) >> 2] = r.getDate()),
                (k[(e + 16) >> 2] = r.getMonth()),
                (k[(e + 20) >> 2] = r.getYear()),
                r.getTime() / 1e3
              );
            })();
            return (
              ht(
                ((H = r),
                +Math.abs(H) >= 1
                  ? H > 0
                    ? +Math.floor(H / 4294967296) >>> 0
                    : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                  : 0)
              ),
              r >>> 0
            );
          },
          J: function (e, r, t, n, o, a, i, s) {
            var l = he(o, a);
            try {
              if (isNaN(l)) return 61;
              var u = pe.getStreamFromFD(n),
                d = ce.mmap(u, e, l, r, t),
                c = d.ptr;
              return (k[i >> 2] = d.allocated), (C[s >> 2] = c), 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          K: function (e, r, t, n, o, a, i) {
            var s = he(a, i);
            try {
              if (isNaN(s)) return 61;
              var l = pe.getStreamFromFD(o);
              2 & t && pe.doMsync(e, l, r, n, s), ce.munmap(l);
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return -e.errno;
            }
          },
          P: function (e) {
            var r = (() => {
              var r = Date.UTC(
                  k[(e + 20) >> 2] + 1900,
                  k[(e + 16) >> 2],
                  k[(e + 12) >> 2],
                  k[(e + 8) >> 2],
                  k[(e + 4) >> 2],
                  k[e >> 2],
                  0
                ),
                t = new Date(r);
              k[(e + 24) >> 2] = t.getUTCDay();
              var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                o = ((t.getTime() - n) / 864e5) | 0;
              return (k[(e + 28) >> 2] = o), t.getTime() / 1e3;
            })();
            return (
              ht(
                ((H = r),
                +Math.abs(H) >= 1
                  ? H > 0
                    ? +Math.floor(H / 4294967296) >>> 0
                    : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                  : 0)
              ),
              r >>> 0
            );
          },
          a: () => {
            W("");
          },
          m: () => Date.now(),
          ka: qr,
          ga: (e, r, t) => b.copyWithin(e, r, r + t),
          U: (e) => {
            var r = b.length,
              t = 2147483648;
            if ((e >>>= 0) > t) return !1;
            for (var n, o, a = 1; a <= 4; a *= 2) {
              var i = r * (1 + 0.2 / a);
              i = Math.min(i, e + 100663296);
              var s = Math.min(
                t,
                (n = Math.max(e, i)) + (((o = 65536) - (n % o)) % o)
              );
              if (Xr(s)) return !0;
            }
            return !1;
          },
          $: (e, r) => {
            var t = 0;
            return (
              Jr().forEach((n, o) => {
                var a = r + t;
                (C[(e + 4 * o) >> 2] = a),
                  ((e, r) => {
                    for (var t = 0; t < e.length; ++t)
                      E[r++ >> 0] = e.charCodeAt(t);
                    E[r >> 0] = 0;
                  })(n, a),
                  (t += n.length + 1);
              }),
              0
            );
          },
          aa: (e, r) => {
            var t = Jr();
            C[e >> 2] = t.length;
            var n = 0;
            return t.forEach((e) => (n += e.length + 1)), (C[r >> 2] = n), 0;
          },
          n: function (e) {
            try {
              var r = pe.getStreamFromFD(e);
              return ce.close(r), 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return e.errno;
            }
          },
          V: function (e, r) {
            try {
              var t = pe.getStreamFromFD(e),
                n = t.tty
                  ? 2
                  : ce.isDir(t.mode)
                  ? 3
                  : ce.isLink(t.mode)
                  ? 7
                  : 4;
              return (
                (E[r >> 0] = n),
                (_[(r + 2) >> 1] = 0),
                (B = [
                  0,
                  ((H = 0),
                  +Math.abs(H) >= 1
                    ? H > 0
                      ? +Math.floor(H / 4294967296) >>> 0
                      : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (k[(r + 8) >> 2] = B[0]),
                (k[(r + 12) >> 2] = B[1]),
                (B = [
                  0,
                  ((H = 0),
                  +Math.abs(H) >= 1
                    ? H > 0
                      ? +Math.floor(H / 4294967296) >>> 0
                      : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (k[(r + 16) >> 2] = B[0]),
                (k[(r + 20) >> 2] = B[1]),
                0
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return e.errno;
            }
          },
          A: function (e, r, t, n) {
            try {
              var o = ((e, r, t, n) => {
                for (var o = 0, a = 0; a < t; a++) {
                  var i = C[r >> 2],
                    s = C[(r + 4) >> 2];
                  r += 8;
                  var l = ce.read(e, E, i, s, n);
                  if (l < 0) return -1;
                  if (((o += l), l < s)) break;
                  void 0 !== n && (n += l);
                }
                return o;
              })(pe.getStreamFromFD(e), r, t);
              return (C[n >> 2] = o), 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return e.errno;
            }
          },
          Q: function (e, r, t, n, o) {
            var a = he(r, t);
            try {
              if (isNaN(a)) return 61;
              var i = pe.getStreamFromFD(e);
              return (
                ce.llseek(i, a, n),
                (B = [
                  i.position >>> 0,
                  ((H = i.position),
                  +Math.abs(H) >= 1
                    ? H > 0
                      ? +Math.floor(H / 4294967296) >>> 0
                      : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (k[o >> 2] = B[0]),
                (k[(o + 4) >> 2] = B[1]),
                i.getdents && 0 === a && 0 === n && (i.getdents = null),
                0
              );
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return e.errno;
            }
          },
          ba: function (e) {
            try {
              var r = pe.getStreamFromFD(e);
              return r.stream_ops && r.stream_ops.fsync
                ? r.stream_ops.fsync(r)
                : 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return e.errno;
            }
          },
          z: function (e, r, t, n) {
            try {
              var o = ((e, r, t, n) => {
                for (var o = 0, a = 0; a < t; a++) {
                  var i = C[r >> 2],
                    s = C[(r + 4) >> 2];
                  r += 8;
                  var l = ce.write(e, E, i, s, n);
                  if (l < 0) return -1;
                  (o += l), void 0 !== n && (n += l);
                }
                return o;
              })(pe.getStreamFromFD(e), r, t);
              return (C[n >> 2] = o), 0;
            } catch (e) {
              if (void 0 === ce || "ErrnoError" !== e.name) throw e;
              return e.errno;
            }
          },
          T: (e, r) => (K(b.subarray(e, e + r)), 0),
          s: (e, r, t, n) => {
            var o = C[(n + 40) >> 2],
              a = {
                tm_sec: k[n >> 2],
                tm_min: k[(n + 4) >> 2],
                tm_hour: k[(n + 8) >> 2],
                tm_mday: k[(n + 12) >> 2],
                tm_mon: k[(n + 16) >> 2],
                tm_year: k[(n + 20) >> 2],
                tm_wday: k[(n + 24) >> 2],
                tm_yday: k[(n + 28) >> 2],
                tm_isdst: k[(n + 32) >> 2],
                tm_gmtoff: k[(n + 36) >> 2],
                tm_zone: o ? fe(o) : "",
              },
              i = fe(t),
              s = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y",
              };
            for (var l in s) i = i.replace(new RegExp(l, "g"), s[l]);
            var u = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              d = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];

            function c(e, r, t) {
              for (
                var n = "number" == typeof e ? e.toString() : e || "";
                n.length < r;

              )
                n = t[0] + n;
              return n;
            }

            function f(e, r) {
              return c(e, r, "0");
            }

            function p(e, r) {
              function t(e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0;
              }

              var n;
              return (
                0 === (n = t(e.getFullYear() - r.getFullYear())) &&
                  0 === (n = t(e.getMonth() - r.getMonth())) &&
                  (n = t(e.getDate() - r.getDate())),
                n
              );
            }

            function h(e) {
              switch (e.getDay()) {
                case 0:
                  return new Date(e.getFullYear() - 1, 11, 29);
                case 1:
                  return e;
                case 2:
                  return new Date(e.getFullYear(), 0, 3);
                case 3:
                  return new Date(e.getFullYear(), 0, 2);
                case 4:
                  return new Date(e.getFullYear(), 0, 1);
                case 5:
                  return new Date(e.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(e.getFullYear() - 1, 11, 30);
              }
            }

            function m(e) {
              var r = et(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                t = new Date(r.getFullYear(), 0, 4),
                n = new Date(r.getFullYear() + 1, 0, 4),
                o = h(t),
                a = h(n);
              return p(o, r) <= 0
                ? p(a, r) <= 0
                  ? r.getFullYear() + 1
                  : r.getFullYear()
                : r.getFullYear() - 1;
            }

            var v = {
              "%a": (e) => u[e.tm_wday].substring(0, 3),
              "%A": (e) => u[e.tm_wday],
              "%b": (e) => d[e.tm_mon].substring(0, 3),
              "%B": (e) => d[e.tm_mon],
              "%C": (e) => f(((e.tm_year + 1900) / 100) | 0, 2),
              "%d": (e) => f(e.tm_mday, 2),
              "%e": (e) => c(e.tm_mday, 2, " "),
              "%g": (e) => m(e).toString().substring(2),
              "%G": (e) => m(e),
              "%H": (e) => f(e.tm_hour, 2),
              "%I": (e) => {
                var r = e.tm_hour;
                return 0 == r ? (r = 12) : r > 12 && (r -= 12), f(r, 2);
              },
              "%j": (e) =>
                f(
                  e.tm_mday + Kr(Hr(e.tm_year + 1900) ? Zr : Qr, e.tm_mon - 1),
                  3
                ),
              "%m": (e) => f(e.tm_mon + 1, 2),
              "%M": (e) => f(e.tm_min, 2),
              "%n": () => "\n",
              "%p": (e) => (e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"),
              "%S": (e) => f(e.tm_sec, 2),
              "%t": () => "\t",
              "%u": (e) => e.tm_wday || 7,
              "%U": (e) => {
                var r = e.tm_yday + 7 - e.tm_wday;
                return f(Math.floor(r / 7), 2);
              },
              "%V": (e) => {
                var r = Math.floor((e.tm_yday + 7 - ((e.tm_wday + 6) % 7)) / 7);
                if (((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && r++, r)) {
                  if (53 == r) {
                    var t = (e.tm_wday + 371 - e.tm_yday) % 7;
                    4 == t || (3 == t && Hr(e.tm_year)) || (r = 1);
                  }
                } else {
                  r = 52;
                  var n = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                  (4 == n || (5 == n && Hr((e.tm_year % 400) - 1))) && r++;
                }
                return f(r, 2);
              },
              "%w": (e) => e.tm_wday,
              "%W": (e) => {
                var r = e.tm_yday + 7 - ((e.tm_wday + 6) % 7);
                return f(Math.floor(r / 7), 2);
              },
              "%y": (e) => (e.tm_year + 1900).toString().substring(2),
              "%Y": (e) => e.tm_year + 1900,
              "%z": (e) => {
                var r = e.tm_gmtoff,
                  t = r >= 0;
                return (
                  (r = ((r = Math.abs(r) / 60) / 60) * 100 + (r % 60)),
                  (t ? "+" : "-") + String("0000" + r).slice(-4)
                );
              },
              "%Z": (e) => e.tm_zone,
              "%%": () => "%",
            };
            for (var l in ((i = i.replace(/%%/g, "\0\0")), v))
              i.includes(l) && (i = i.replace(new RegExp(l, "g"), v[l](a)));
            var y,
              g,
              w = oe((i = i.replace(/\0\0/g, "%")), !1);
            return w.length > r
              ? 0
              : ((y = w), (g = e), E.set(y, g), w.length - 1);
          },
          sa: (e, r, t) => {
            for (
              var n = fe(r),
                o = "\\!@#$^&*()+=-[]/{}|:<>?,.",
                a = 0,
                i = o.length;
              a < i;
              ++a
            )
              n = n.replace(new RegExp("\\" + o[a], "g"), "\\" + o[a]);
            var s = {
              "%A": "%a",
              "%B": "%b",
              "%c": "%a %b %d %H:%M:%S %Y",
              "%D": "%m\\/%d\\/%y",
              "%e": "%d",
              "%F": "%Y-%m-%d",
              "%h": "%b",
              "%R": "%H\\:%M",
              "%r": "%I\\:%M\\:%S\\s%p",
              "%T": "%H\\:%M\\:%S",
              "%x": "%m\\/%d\\/(?:%y|%Y)",
              "%X": "%H\\:%M\\:%S",
            };
            for (var l in s) n = n.replace(l, s[l]);
            var u = {
              "%a": "(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)",
              "%b": "(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)",
              "%C": "\\d\\d",
              "%d": "0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31",
              "%H": "\\d(?!\\d)|[0,1]\\d|20|21|22|23",
              "%I": "\\d(?!\\d)|0\\d|10|11|12",
              "%j": "00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d",
              "%m": "0[1-9]|[1-9](?!\\d)|10|11|12",
              "%M": "0\\d|\\d(?!\\d)|[1-5]\\d",
              "%n": "\\s",
              "%p": "AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.",
              "%S": "0\\d|\\d(?!\\d)|[1-5]\\d|60",
              "%U": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
              "%W": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
              "%w": "[0-6]",
              "%y": "\\d\\d",
              "%Y": "\\d\\d\\d\\d",
              "%%": "%",
              "%t": "\\s",
            };
            for (var d in u) n = n.replace(d, "(" + d + u[d] + ")");
            var c = [];
            for (a = n.indexOf("%"); a >= 0; a = n.indexOf("%"))
              c.push(n[a + 1]),
                (n = n.replace(new RegExp("\\%" + n[a + 1], "g"), ""));
            var f = new RegExp("^" + n, "i").exec(fe(e));
            if (f) {
              var p,
                h = (function () {
                  function e(e, r, t) {
                    return "number" != typeof e || isNaN(e)
                      ? r
                      : e >= r
                      ? e <= t
                        ? e
                        : t
                      : r;
                  }

                  return {
                    year: e(k[(t + 20) >> 2] + 1900, 1970, 9999),
                    month: e(k[(t + 16) >> 2], 0, 11),
                    day: e(k[(t + 12) >> 2], 1, 31),
                    hour: e(k[(t + 8) >> 2], 0, 23),
                    min: e(k[(t + 4) >> 2], 0, 59),
                    sec: e(k[t >> 2], 0, 59),
                  };
                })(),
                m = (e) => {
                  var r = c.indexOf(e);
                  if (r >= 0) return f[r + 1];
                };
              if (
                ((p = m("S")) && (h.sec = rt(p)),
                (p = m("M")) && (h.min = rt(p)),
                (p = m("H")))
              )
                h.hour = rt(p);
              else if ((p = m("I"))) {
                var v = rt(p);
                (p = m("p")) && (v += "P" === p.toUpperCase()[0] ? 12 : 0),
                  (h.hour = v);
              }
              if ((p = m("Y"))) h.year = rt(p);
              else if ((p = m("y"))) {
                var y = rt(p);
                (p = m("C")) ? (y += 100 * rt(p)) : (y += y < 69 ? 2e3 : 1900),
                  (h.year = y);
              }
              if (
                ((p = m("m"))
                  ? (h.month = rt(p) - 1)
                  : (p = m("b")) &&
                    (h.month =
                      {
                        JAN: 0,
                        FEB: 1,
                        MAR: 2,
                        APR: 3,
                        MAY: 4,
                        JUN: 5,
                        JUL: 6,
                        AUG: 7,
                        SEP: 8,
                        OCT: 9,
                        NOV: 10,
                        DEC: 11,
                      }[p.substring(0, 3).toUpperCase()] || 0),
                (p = m("d")))
              )
                h.day = rt(p);
              else if ((p = m("j")))
                for (var g = rt(p), w = Hr(h.year), E = 0; E < 12; ++E) {
                  var b = Kr(w ? Zr : Qr, E - 1);
                  g <= b + (w ? Zr : Qr)[E] && (h.day = g - b);
                }
              else if ((p = m("a"))) {
                var _ = p.substring(0, 3).toUpperCase();
                if ((p = m("U"))) {
                  var $ = {
                      SUN: 0,
                      MON: 1,
                      TUE: 2,
                      WED: 3,
                      THU: 4,
                      FRI: 5,
                      SAT: 6,
                    }[_],
                    C = rt(p);
                  (D =
                    0 === (P = new Date(h.year, 0, 1)).getDay()
                      ? et(P, $ + 7 * (C - 1))
                      : et(P, 7 - P.getDay() + $ + 7 * (C - 1))),
                    (h.day = D.getDate()),
                    (h.month = D.getMonth());
                } else if ((p = m("W"))) {
                  var P, D;
                  ($ = {
                    MON: 0,
                    TUE: 1,
                    WED: 2,
                    THU: 3,
                    FRI: 4,
                    SAT: 5,
                    SUN: 6,
                  }[_]),
                    (C = rt(p));
                  (D =
                    1 === (P = new Date(h.year, 0, 1)).getDay()
                      ? et(P, $ + 7 * (C - 1))
                      : et(P, 7 - P.getDay() + 1 + $ + 7 * (C - 1))),
                    (h.day = D.getDate()),
                    (h.month = D.getMonth());
                }
              }
              var F = new Date(h.year, h.month, h.day, h.hour, h.min, h.sec, 0);
              return (
                (k[t >> 2] = F.getSeconds()),
                (k[(t + 4) >> 2] = F.getMinutes()),
                (k[(t + 8) >> 2] = F.getHours()),
                (k[(t + 12) >> 2] = F.getDate()),
                (k[(t + 16) >> 2] = F.getMonth()),
                (k[(t + 20) >> 2] = F.getFullYear() - 1900),
                (k[(t + 24) >> 2] = F.getDay()),
                (k[(t + 28) >> 2] =
                  Kr(Hr(F.getFullYear()) ? Zr : Qr, F.getMonth() - 1) +
                  F.getDate() -
                  1),
                (k[(t + 32) >> 2] = 0),
                e + oe(f[0]).length - 1
              );
            }
            return 0;
          },
        },
        st = (function () {
          var e,
            r,
            t,
            a,
            i = { a: it };

          function s(e, r) {
            var t;
            return (
              (st = e.exports),
              (w = st.va),
              T(),
              (vr = st.Ca),
              (t = st.wa),
              A.unshift(t),
              U(),
              st
            );
          }

          if ((N(), o.instantiateWasm))
            try {
              return o.instantiateWasm(i, s);
            } catch (e) {
              g(`Module.instantiateWasm callback failed with error: ${e}`),
                n(e);
            }
          return (
            ((e = v),
            (r = I),
            (t = i),
            (a = function (e) {
              s(e.instance);
            }),
            e ||
            "function" != typeof WebAssembly.instantiateStreaming ||
            Y(r) ||
            V(r) ||
            f ||
            "function" != typeof fetch
              ? X(r, t, a)
              : fetch(r, { credentials: "same-origin" }).then((e) =>
                  WebAssembly.instantiateStreaming(e, t).then(a, function (e) {
                    return (
                      g(`wasm streaming compile failed: ${e}`),
                      g("falling back to ArrayBuffer instantiation"),
                      X(r, t, a)
                    );
                  })
                )).catch(n),
            {}
          );
        })(),
        lt = (e) => (lt = st.xa)(e),
        ut = (e) => (ut = st.ya)(e),
        dt = () => (dt = st.za)(),
        ct = (e) => (ct = st.Aa)(e),
        ft =
          ((o.__embind_initialize_bindings = () =>
            (o.__embind_initialize_bindings = st.Ba)()),
          (e, r) => (ft = st.Da)(e, r)),
        pt = () => (pt = st.Ea)(),
        ht = (e) => (ht = st.Fa)(e);
      (o.dynCall_jiji = (e, r, t, n, a) =>
        (o.dynCall_jiji = st.Ga)(e, r, t, n, a)),
        (o.dynCall_ji = (e, r) => (o.dynCall_ji = st.Ha)(e, r)),
        (o.dynCall_viij = (e, r, t, n, a) =>
          (o.dynCall_viij = st.Ia)(e, r, t, n, a)),
        (o.dynCall_iij = (e, r, t, n) => (o.dynCall_iij = st.Ja)(e, r, t, n)),
        (o.dynCall_iiji = (e, r, t, n, a) =>
          (o.dynCall_iiji = st.Ka)(e, r, t, n, a)),
        (o.dynCall_jji = (e, r, t, n) => (o.dynCall_jji = st.La)(e, r, t, n)),
        (o.dynCall_iji = (e, r, t, n) => (o.dynCall_iji = st.Ma)(e, r, t, n)),
        (o.dynCall_viijj = (e, r, t, n, a, i, s) =>
          (o.dynCall_viijj = st.Na)(e, r, t, n, a, i, s)),
        (o.dynCall_iiij = (e, r, t, n, a) =>
          (o.dynCall_iiij = st.Oa)(e, r, t, n, a)),
        (o.dynCall_vij = (e, r, t, n) => (o.dynCall_vij = st.Pa)(e, r, t, n)),
        (o.dynCall_viiiji = (e, r, t, n, a, i, s) =>
          (o.dynCall_viiiji = st.Qa)(e, r, t, n, a, i, s)),
        (o.dynCall_viijii = (e, r, t, n, a, i, s) =>
          (o.dynCall_viijii = st.Ra)(e, r, t, n, a, i, s)),
        (o.dynCall_jij = (e, r, t, n) => (o.dynCall_jij = st.Sa)(e, r, t, n)),
        (o.dynCall_iiiij = (e, r, t, n, a, i) =>
          (o.dynCall_iiiij = st.Ta)(e, r, t, n, a, i)),
        (o.dynCall_iiiiij = (e, r, t, n, a, i, s) =>
          (o.dynCall_iiiiij = st.Ua)(e, r, t, n, a, i, s)),
        (o.dynCall_iiiiijj = (e, r, t, n, a, i, s, l, u) =>
          (o.dynCall_iiiiijj = st.Va)(e, r, t, n, a, i, s, l, u)),
        (o.dynCall_iiiiiijj = (e, r, t, n, a, i, s, l, u, d) =>
          (o.dynCall_iiiiiijj = st.Wa)(e, r, t, n, a, i, s, l, u, d)),
        (o.___emscripten_embedded_file_data = 160796);

      function mt() {
        function e() {
          at ||
            ((at = !0),
            (o.calledRun = !0),
            F ||
              ((O = !0),
              o.noFSInit || ce.init.initialized || ce.init(),
              (ce.ignorePermissions = !1),
              ae.init(),
              G(A),
              t(o),
              o.onRuntimeInitialized && o.onRuntimeInitialized(),
              (function () {
                if (o.postRun)
                  for (
                    "function" == typeof o.postRun && (o.postRun = [o.postRun]);
                    o.postRun.length;

                  )
                    (e = o.postRun.shift()), j.unshift(e);
                var e;
                G(j);
              })()));
        }

        R > 0 ||
          (!(function () {
            if (o.preRun)
              for (
                "function" == typeof o.preRun && (o.preRun = [o.preRun]);
                o.preRun.length;

              )
                (e = o.preRun.shift()), M.unshift(e);
            var e;
            G(M);
          })(),
          R > 0 ||
            (o.setStatus
              ? (o.setStatus("Running..."),
                setTimeout(function () {
                  setTimeout(function () {
                    o.setStatus("");
                  }, 1),
                    e();
                }, 1))
              : e()));
      }

      if (
        ((o.addRunDependency = N),
        (o.removeRunDependency = U),
        (o.FS_createPath = ce.createPath),
        (o.FS_createLazyFile = ce.createLazyFile),
        (o.FS_createDevice = ce.createDevice),
        (o.FS_createPreloadedFile = ce.createPreloadedFile),
        (o.FS = ce),
        (o.FS_createDataFile = ce.createDataFile),
        (o.FS_unlink = ce.unlink),
        (x = function e() {
          at || mt(), at || (x = e);
        }),
        o.preInit)
      )
        for (
          "function" == typeof o.preInit && (o.preInit = [o.preInit]);
          o.preInit.length > 0;

        )
          o.preInit.pop()();
      return mt(), r.ready;
    }
  );
})();
"object" == typeof exports && "object" == typeof module
  ? (module.exports = PDFPROKTModuleInit)
  : "function" == typeof define &&
    define.amd &&
    define([], () => PDFPROKTModuleInit);
