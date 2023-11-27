// 获取回到顶部按钮元素
var scrollToTopBtn = document.getElementById('scrollToTop')

// 监听窗口滚动事件
window.addEventListener('scroll', function () {
  // 获取当前滚动距离
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // console.log('scrollTop', scrollTop) // 判断是否滚动距离超过600

  if (scrollTop > 600) {
    // 显示回到顶部按钮
    scrollToTopBtn.style.display = 'flex'
  } else {
    // 隐藏回到顶部按钮
    scrollToTopBtn.style.display = 'none'
  }
})

// 监听回到顶部按钮点击事件
scrollToTopBtn.addEventListener('click', function () {
  // 平滑回到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
