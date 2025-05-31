import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'

function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  image,
  type = 'website',
  noIndex = false 
}) {
  const location = useLocation()
  
  useEffect(() => {
    // 构建完整的页面标题
    const fullTitle = title 
      ? `${title} - ${siteConfig.site.title}`
      : siteConfig.site.title

    // 构建完整的描述
    const fullDescription = description || siteConfig.company.description

    // 构建关键词
    const allKeywords = [...siteConfig.seo.keywords, ...keywords].join(', ')

    // 构建完整的URL
    const fullUrl = `${siteConfig.site.url}${location.pathname}`

    // 更新页面标题
    document.title = fullTitle

    // 更新或创建meta标签的函数
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }

    // 更新基本meta标签
    updateMetaTag('description', fullDescription)
    updateMetaTag('keywords', allKeywords)
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow')

    // 更新Open Graph标签
    updateMetaTag('og:title', fullTitle, true)
    updateMetaTag('og:description', fullDescription, true)
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:site_name', siteConfig.company.name, true)

    // 如果提供了图片，更新og:image
    if (image) {
      updateMetaTag('og:image', image, true)
    }

    // 更新Twitter标签
    updateMetaTag('twitter:title', fullTitle, true)
    updateMetaTag('twitter:description', fullDescription, true)
    updateMetaTag('twitter:url', fullUrl, true)

    // 如果提供了图片，更新twitter:image
    if (image) {
      updateMetaTag('twitter:image', image, true)
    }

    // 更新canonical链接
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // 添加结构化数据（JSON-LD）
    const addStructuredData = () => {
      // 移除现有的结构化数据
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.remove()
      }

      // 创建新的结构化数据
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.company.name,
        "description": siteConfig.company.description,
        "url": siteConfig.site.url,
        "logo": `${siteConfig.site.url}/images/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "availableLanguage": ["Chinese", "English"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Maryland",
          "addressCountry": "US"
        },
        "sameAs": [
          siteConfig.contact.website
        ]
      }

      // 如果是首页，添加网站信息
      if (location.pathname === '/') {
        structuredData["@type"] = "WebSite"
        structuredData.potentialAction = {
          "@type": "SearchAction",
          "target": `${siteConfig.site.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    addStructuredData()

  }, [title, description, keywords, image, type, noIndex, location.pathname])

  return null
}

export default SEOHead
