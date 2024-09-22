(self.webpackChunkPDFPROKt = self.webpackChunkPDFPROKt || []).push([
  [5014],
  {
    39818: () => {
      Intl.PluralRules &&
        "function" == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            categories: {
              cardinal: ["one", "other"],
              ordinal: ["one", "two", "few", "other"],
            },
            fn: function (e, l) {
              var a = String(e).split("."),
                t = !a[1],
                n = Number(a[0]) == e,
                o = n && a[0].slice(-1),
                r = n && a[0].slice(-2);
              return l
                ? 1 == o && 11 != r
                  ? "one"
                  : 2 == o && 12 != r
                  ? "two"
                  : 3 == o && 13 != r
                  ? "few"
                  : "other"
                : 1 == e && t
                ? "one"
                : "other";
            },
          },
          locale: "en",
        });
    },
  },
]);
