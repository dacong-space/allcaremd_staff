import { useEffect } from 'react'

function PerformanceMonitor() {
  useEffect(() => {
    // 监控页面加载性能
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0]
        
        if (navigation) {
          const metrics = {
            // 页面加载时间
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            // DOM 内容加载时间
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            // 首次内容绘制时间
            firstContentfulPaint: 0,
            // 最大内容绘制时间
            largestContentfulPaint: 0,
          }

          // 获取 FCP 和 LCP
          const paintEntries = performance.getEntriesByType('paint')
          paintEntries.forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              metrics.firstContentfulPaint = entry.startTime
            }
          })

          // 监控 LCP
          if ('PerformanceObserver' in window) {
            const lcpObserver = new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries()
              const lastEntry = entries[entries.length - 1]
              metrics.largestContentfulPaint = lastEntry.startTime
            })
            
            try {
              lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
            } catch (e) {
              // LCP 不支持时的降级处理
            }
          }

          // 在开发环境下输出性能指标
          if (process.env.NODE_ENV === 'development') {
            console.group('🚀 页面性能指标')
            console.log('页面加载时间:', metrics.loadTime.toFixed(2), 'ms')
            console.log('DOM内容加载时间:', metrics.domContentLoaded.toFixed(2), 'ms')
            console.log('首次内容绘制时间:', metrics.firstContentfulPaint.toFixed(2), 'ms')
            console.log('最大内容绘制时间:', metrics.largestContentfulPaint.toFixed(2), 'ms')
            console.groupEnd()
          }

          // 性能警告
          if (metrics.loadTime > 3000) {
            console.warn('⚠️ 页面加载时间过长:', metrics.loadTime.toFixed(2), 'ms')
          }
          if (metrics.firstContentfulPaint > 2000) {
            console.warn('⚠️ 首次内容绘制时间过长:', metrics.firstContentfulPaint.toFixed(2), 'ms')
          }
        }
      }
    }

    // 页面加载完成后测量性能
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    // 监控内存使用情况（仅在支持的浏览器中）
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = performance.memory
        if (process.env.NODE_ENV === 'development') {
          console.group('💾 内存使用情况')
          console.log('已使用内存:', (memory.usedJSHeapSize / 1024 / 1024).toFixed(2), 'MB')
          console.log('总内存限制:', (memory.totalJSHeapSize / 1024 / 1024).toFixed(2), 'MB')
          console.log('内存限制:', (memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2), 'MB')
          console.groupEnd()
        }
      }
    }

    // 定期监控内存（仅在开发环境）
    let memoryInterval
    if (process.env.NODE_ENV === 'development') {
      memoryInterval = setInterval(monitorMemory, 30000) // 每30秒检查一次
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
      if (memoryInterval) {
        clearInterval(memoryInterval)
      }
    }
  }, [])

  // 这个组件不渲染任何内容
  return null
}

export default PerformanceMonitor
