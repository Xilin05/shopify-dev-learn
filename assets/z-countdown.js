!(function () {
  'use strict'
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n]
      ;(i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
    }
  }
  console.log('this.endTime'),
    new ((function () {
      function t() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t),
          (this.container = document.querySelector('.z-countdown')),
          (this.endTime = new Date(this.container.dataset.endTime).getTime()),
          console.log('this.endTime', this.endTime),
          (this.timer = null),
          (this.distance = null),
          (this.daysEle = document.querySelector('.z-days')),
          (this.hoursEle = document.querySelector('.z-hours')),
          (this.minutesEle = document.querySelector('.z-minutes')),
          (this.secondsEle = document.querySelector('.z-seconds')),
          this.init()
      }
      var n, i, o
      return (
        (n = t),
        (i = [
          {
            key: 'init',
            value: function () {
              var e = this
              this.updateCountdown(),
                (this.timer = setInterval(function () {
                  e.updateCountdown()
                }, 1e3))
            }
          },
          {
            key: 'updateCountdown',
            value: function () {
              var e = new Date().getTime()
              ;(this.distance = this.endTime - e), this.start()
            }
          },
          {
            key: 'start',
            value: function () {
              var e = this
              this.updateCounter(),
                (this.timer = setInterval(function () {
                  e.updateCounter()
                }, 1e3))
            }
          },
          {
            key: 'stop',
            value: function () {
              clearInterval(this.timer), (this.timer = null)
            }
          },
          {
            key: 'updateCounter',
            value: function () {
              var e = this.distance
              if (e <= 0)
                return this.stop(), void (this.container.style.display = 'none')
              var t = Math.floor(e / 864e5),
                n = Math.floor((e % 864e5) / 36e5),
                i = Math.floor((e % 36e5) / 6e4),
                o = Math.floor((e % 6e4) / 1e3)
              ;(this.daysEle.innerHTML = t < 10 ? '0' + t : t),
                (this.hoursEle.innerHTML = n < 10 ? '0' + n : n),
                (this.minutesEle.innerHTML = i < 10 ? '0' + i : i),
                (this.secondsEle.innerHTML = o < 10 ? '0' + o : o)
            }
          }
        ]) && e(n.prototype, i),
        o && e(n, o),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        t
      )
    })())()
})()
