'use client'

import { getAssetSrc } from '../lib/getAssetSrc'
import socialMedia1 from '../assets/socialMedia/IMG_0474.jpeg'

export default function InstagramPhone() {
  const postImage = getAssetSrc(socialMedia1)

  return (
    <div className="ig-phone">
      {/* Physical buttons */}
      <div className="ig-btn-mute" />
      <div className="ig-btn-vol-u" />
      <div className="ig-btn-vol-d" />
      <div className="ig-btn-power" />

      <div className="ig-screen">
        <div className="ig-screen-glare" />

        {/* Dynamic Island */}
        <div className="ig-dynamic-island">
          <div className="ig-di-dot small" />
          <div className="ig-di-dot" />
        </div>

        {/* Status bar */}
        <div className="ig-status-bar">
          <span className="ig-sb-time">9:41</span>
          <div className="ig-sb-icons">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
              <rect x="0" y="6.5" width="2.5" height="4.5" rx="0.8" fill="#1a1a1a"/>
              <rect x="4" y="4.5" width="2.5" height="6.5" rx="0.8" fill="#1a1a1a"/>
              <rect x="8" y="2" width="2.5" height="9" rx="0.8" fill="#1a1a1a"/>
              <rect x="12" y="0" width="2.5" height="11" rx="0.8" fill="#1a1a1a"/>
              <circle cx="16.5" cy="9" r="1" fill="#1a1a1a"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <circle cx="8" cy="10.5" r="1.6" fill="#1a1a1a"/>
              <path d="M4.8 7.4C5.9 6.2 6.9 5.7 8 5.7C9.1 5.7 10.1 6.2 11.2 7.4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 4.5C3.8 2.5 5.8 1.5 8 1.5C10.2 1.5 12.2 2.5 14 4.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
              <rect x="0.5" y="1" width="22" height="11" rx="3.2" stroke="#1a1a1a" strokeWidth="1.2"/>
              <rect x="22.8" y="4.2" width="2.2" height="4.6" rx="1" fill="#1a1a1a" opacity="0.35"/>
              <rect x="1.5" y="2" width="18.5" height="9" rx="2.2" fill="#1a1a1a"/>
            </svg>
          </div>
        </div>

        {/* Instagram App */}
        <div className="ig-app-container">
          {/* Top header */}
          <div className="ig-top-bar">
            <div className="ig-wordmark-text">Instagram</div>
            <div className="ig-top-icons-bar">
              <svg className="ig-icon-btn" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 017.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3A5.5 5.5 0 0122 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg className="ig-icon-btn" viewBox="0 0 24 24" fill="none">
                <path d="M22 3L11 14M22 3l-7 19-4-9-9-4 19-7z" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Stories */}
          <div className="ig-stories">
            <div className="ig-story-cell">
              <div className="ig-story-ring add">
                <div className="ig-story-inner">
                  <div className="ig-story-avatar" style={{background:'linear-gradient(135deg,#667eea,#764ba2)'}}>K</div>
                </div>
                <div className="ig-story-add-icon" />
              </div>
              <span className="ig-story-name you">Hikayeni</span>
            </div>
            <div className="ig-story-cell">
              <div className="ig-story-ring">
                <div className="ig-story-inner">
                  <div className="ig-story-avatar" style={{background:'linear-gradient(135deg,#405de6,#c13584,#fd1d1d)'}}>K</div>
                </div>
              </div>
              <span className="ig-story-name">klinik_demo</span>
            </div>
            <div className="ig-story-cell">
              <div className="ig-story-ring">
                <div className="ig-story-inner">
                  <div className="ig-story-avatar" style={{background:'linear-gradient(135deg,#11998e,#38ef7d)'}}>H</div>
                </div>
              </div>
              <span className="ig-story-name">hepsiclinic</span>
            </div>
            <div className="ig-story-cell">
              <div className="ig-story-ring">
                <div className="ig-story-inner">
                  <div className="ig-story-avatar" style={{background:'linear-gradient(135deg,#f7971e,#ffd200)'}}>A</div>
                </div>
              </div>
              <span className="ig-story-name">ai_services</span>
            </div>
          </div>

          <div className="ig-feed-sep" />

          {/* Post */}
          <div className="ig-post-container">
            {/* Post header */}
            <div className="ig-post-header">
              <div className="ig-post-avatar-ring">
                <div className="ig-post-avatar-inner">
                  <div className="ig-post-avatar-letter">K</div>
                </div>
              </div>
              <div className="ig-post-user-block">
                <div className="ig-post-username">
                  klinik_demo
                  <span className="ig-post-verified">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                </div>
                <div className="ig-post-location">İstanbul, Turkey</div>
              </div>
              <div className="ig-post-more">
                <span /><span /><span />
              </div>
            </div>

            {/* Post image */}
            <div className="ig-post-img-wrap">
              <img className="ig-post-img" src={postImage} alt="Clinic post" />
            </div>

            {/* Actions */}
            <div className="ig-post-actions-area">
              <div className="ig-post-actions-bar">
                <div className="ig-action-btn">
                  <svg width="26" height="24" viewBox="0 0 24 22" fill="none">
                    <path d="M12 20.35l-1.45-1.32C5.4 14.36 2 11.28 2 7.5A5.5 5.5 0 017.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2A5.5 5.5 0 0122 7.5c0 3.78-3.4 6.86-8.55 11.54L12 20.35z" stroke="#262626" strokeWidth="1.8" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ig-action-btn">
                  <svg width="26" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 14.5a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v9.5z" stroke="#262626" strokeWidth="1.8" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ig-action-btn">
                  <svg width="26" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M22 2L15 22l-4-9-9-4 19-7z" stroke="#262626" strokeWidth="1.8" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ig-action-btn ig-action-save">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                    <path d="M19 22.5L11 17.5L3 22.5V3a2 2 0 012-2h12a2 2 0 012 2v19.5z" stroke="#262626" strokeWidth="1.8" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="ig-post-likes">4.592 beğenme</div>
              <div className="ig-post-caption">
                <span className="ig-caption-user">klinik_demo</span>{' '}Kliniğinizde başarıyı birlikte inşa ediyoruz! 🏥✨{' '}<span className="ig-caption-hashtag">#hepsiclinic</span>{' '}<span className="ig-caption-hashtag">#klinik</span>{' '}<span className="ig-caption-hashtag">#sağlık</span>
              </div>
              <div className="ig-post-view-comments">63 yorumun tümünü gör</div>
              <div className="ig-post-add-comment">
                <div className="ig-comment-av" />
                <span className="ig-add-comment-text">Yorum ekle...</span>
                <span className="ig-heart-emoji">🤍</span>
              </div>
              <div className="ig-post-timestamp">2 saat önce</div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="ig-bottom-nav">
            <div className="ig-nav-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" fill="#0a0a0a" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M9 21V12h6v9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="ig-nav-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="10.5" cy="10.5" r="7.5" stroke="#262626" strokeWidth="1.8"/>
                <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="ig-nav-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#262626" strokeWidth="1.8"/>
                <line x1="12" y1="7" x2="12" y2="17" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="7" y1="12" x2="17" y2="12" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="ig-nav-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#262626" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="3" stroke="#262626" strokeWidth="1.8"/>
                <line x1="12" y1="3" x2="12" y2="9" stroke="#262626" strokeWidth="1.8"/>
                <line x1="12" y1="15" x2="12" y2="21" stroke="#262626" strokeWidth="1.8"/>
                <line x1="3" y1="12" x2="9" y2="12" stroke="#262626" strokeWidth="1.8"/>
                <line x1="15" y1="12" x2="21" y2="12" stroke="#262626" strokeWidth="1.8"/>
              </svg>
            </div>
            <div className="ig-nav-btn">
              <div className="ig-nav-profile-avatar" />
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="ig-home-indicator" />
      </div>
    </div>
  )
}
