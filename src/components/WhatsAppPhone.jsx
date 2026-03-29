'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { getAssetSrc } from '../lib/getAssetSrc'
import logoImg from '../assets/logo.jpeg'

const LOGO = getAssetSrc(logoImg)

const MSGS = [
  { dir: 'out', text: 'Merhaba.' },
  { dir: 'in', text: "Merhaba! HepsiClinic'e hoş geldiniz,\nsize nasıl yardımcı olabiliriz?" },
  { dir: 'out', text: 'Kliniğim için danışmanlık\nhizmetlerinizden yararlanmak istiyorum.' },
  { dir: 'in', text: 'Tabii, size en uygun çözümü\nsunabilmemiz için kliniğinizin\nalanını öğrenebilir miyim?' },
  { dir: 'out', text: 'Dermatoloji Kliniğiyiz.' },
  { dir: 'in', text: 'Harika! Hangi alanlarda\ndestek almak istiyorsunuz?' },
  { dir: 'out', text: 'Klinik içi eğitimler ve\notomasyon sistemleri.' },
  { dir: 'in', text: 'Bu konuda size özel analiz ve\nyol haritası oluşturabiliriz.\nUygun bir görüşme planlayalım mı?' },
  { dir: 'out', text: 'Evet, planlayalım.' },
  { dir: 'in', text: 'Memnuniyetle. Size en kısa sürede\ndanışman ekibimiz dönüş sağlayacak.' },
]

const TIMES = ['10:21', '10:21', '10:22', '10:22', '10:23', '10:23', '10:24', '10:24', '10:25', '10:25']

function TicksSVG({ blue }) {
  const col = blue ? '#53bdeb' : '#8696a0'
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
      <path d="M11.071.643L4.5 7.214 1.929 4.643.5 6.071l4 4 8-8-1.429-1.428z" fill={col} />
      <path d="M15.071.643L8.5 7.214 7.429 6.143 6 7.571l2.5 2.5 8-8-1.429-1.428z" fill={col} />
    </svg>
  )
}

export default function WhatsAppPhone() {
  const [messages, setMessages] = useState([])
  const [typingSide, setTypingSide] = useState(null) // 'in' | 'out' | null
  const chatRef = useRef(null)
  const cancelRef = useRef(false)
  const keyCounter = useRef(0)

  const scrollDown = useCallback(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    cancelRef.current = false

    const sleep = (ms) => new Promise((resolve) => {
      const timer = setTimeout(resolve, ms)
      const check = setInterval(() => {
        if (cancelRef.current) {
          clearTimeout(timer)
          clearInterval(check)
          resolve()
        }
      }, 100)
    })

    async function runConversation() {
      while (!cancelRef.current) {
        setMessages([])
        await sleep(800)

        for (let i = 0; i < MSGS.length; i++) {
          if (cancelRef.current) return
          const msg = MSGS[i]
          const typLen = Math.max(1200, msg.text.length * 55)

          setTypingSide(msg.dir)
          scrollDown()
          await sleep(typLen)
          if (cancelRef.current) return

          setTypingSide(null)
          await sleep(120)
          if (cancelRef.current) return

          const key = keyCounter.current++
          setMessages((prev) => [...prev, { ...msg, idx: i, key, visible: false }])
          scrollDown()
          await sleep(50)

          setMessages((prev) =>
            prev.map((m) => (m.key === key ? { ...m, visible: true } : m))
          )
          scrollDown()

          const pause = i < MSGS.length - 1 ? 900 : 2000
          await sleep(pause)
        }

        await sleep(4000)
      }
    }

    runConversation()
    return () => { cancelRef.current = true }
  }, [scrollDown])

  useEffect(() => {
    scrollDown()
  }, [messages, typingSide, scrollDown])

  return (
    <div className="wa-phone">
      <div className="wa-dynamic-island">
        <div className="wa-di-camera" />
      </div>

      <div className="wa-screen">
        {/* Status Bar */}
        <div className="wa-status-bar">
          <span className="wa-status-time">10:23</span>
          <div className="wa-status-icons">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
              <rect x="0" y="8" width="3" height="4" rx="0.5" opacity=".4" />
              <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" opacity=".6" />
              <rect x="9" y="3" width="3" height="9" rx="0.5" opacity=".8" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
              <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              <path d="M4.5 6.8A4.8 4.8 0 018 5.5c1.3 0 2.5.5 3.5 1.3l1.3-1.5A7 7 0 018 3.5a7 7 0 00-4.8 1.8L4.5 6.8z" opacity=".6" />
              <path d="M1.3 4A9.5 9.5 0 018 1.5 9.5 9.5 0 0114.7 4L16 2.5A11.5 11.5 0 008 0 11.5 11.5 0 000 2.5L1.3 4z" opacity=".35" />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="white">
              <rect x="0" y="1" width="22" height="10" rx="2.5" stroke="white" strokeWidth="1" fill="none" />
              <rect x="23" y="3.5" width="2" height="5" rx="1" />
              <rect x="1.5" y="2.5" width="17" height="7" rx="1.5" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="wa-header">
          <span className="wa-header-back">‹</span>
          <div className="wa-header-avatar">
            <img src={LOGO} alt="HC" />
          </div>
          <div className="wa-header-info">
            <div className="wa-header-name">HepsiClinic</div>
            <div className="wa-header-status online">çevrimiçi</div>
          </div>
          <div className="wa-header-actions">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.37 1.18 2 2 0 012.36.02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
        </div>

        {/* Chat */}
        <div className="wa-chat-bg" ref={chatRef}>
          <div className="wa-chat-scroll">
            <div className="wa-date-chip"><span>Bugün</span></div>

            {messages.map((msg) => (
              <div key={msg.key} className={`wa-msg-row ${msg.dir}${msg.visible ? ' visible' : ''}`}>
                {msg.dir === 'in' && (
                  <div className="wa-msg-avatar"><img src={LOGO} alt="" /></div>
                )}
                <div className={`wa-bubble ${msg.dir}`}>
                  <span className="wa-bubble-text" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                  <div className="wa-bubble-meta">
                    <span className="wa-bubble-time">{TIMES[msg.idx]}</span>
                    {msg.dir === 'out' && (
                      <div className="wa-ticks"><TicksSVG blue /></div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicators */}
            {typingSide === 'in' && (
              <div className="wa-typing-row">
                <div className="wa-msg-avatar"><img src={LOGO} alt="" /></div>
                <div className="wa-typing-bubble">
                  <div className="wa-dot" /><div className="wa-dot" /><div className="wa-dot" />
                </div>
              </div>
            )}
            {typingSide === 'out' && (
              <div className="wa-typing-row right">
                <div className="wa-typing-bubble">
                  <div className="wa-dot" /><div className="wa-dot" /><div className="wa-dot" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input bar */}
        <div className="wa-input-bar">
          <div className="wa-input-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
          <div className="wa-input-field">Bir mesaj yazın</div>
          <div className="wa-mic-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
