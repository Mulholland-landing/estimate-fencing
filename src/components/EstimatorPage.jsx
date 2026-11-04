import imageVariants from '../data/images.json';
import React from 'react';

import { DS } from './design-system';

import { ResponsiveImage, ResponsivePhoto, MobileCarousel, useIsMobile, MobileTrust, LeadFields, submitLead, useModalFocus } from './mobile';

const registry={MB_ASSET_BASE:'/assets/',MulhollandBrandDesignSystem_0ab04f:DS};

const { Button, SectionTag, Eyebrow, EyebrowPill, Icon, LeadForm, CtaBar, FinancingStrip, TrustRow, StatCallout, OfferBox, FeatureItem, ProductTile, ProjectCard, TestimonialCard, ReviewPlatforms, FaqItem, SiteHeader, SiteFooter } = registry.MulhollandBrandDesignSystem_0ab04f;

const PH = (registry.MB_ASSET_BASE || '../../assets/') + 'photos/';

const lpH2 = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,30px)', lineHeight: 1.12, color: 'var(--mb-ink)', textWrap: 'balance' };

function Faq({ items, wide }) {
  if (wide) {
    return <section style={{ padding: '88px clamp(24px,5vw,72px) 96px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '32px 80px', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <Eyebrow>Questions, answered</Eyebrow>
          <h2 style={{ ...lpH2, fontSize: 'clamp(30px,3.8vw,44px)' }}>Frequently asked questions</h2>
          <span style={{ width: 72, height: 4, background: 'var(--mb-gold)', marginTop: 6 }}></span>
        </div>
        <div style={{ flex: '2 1 520px', borderTop: '1px solid var(--mb-blue-light)' }}>{items.map((f, i) => <FaqItem key={f.q} question={f.q} defaultOpen={i === 0} style={{ fontSize: 15 }}>{f.a}</FaqItem>)}</div>
      </div>
    </section>;
  }
  return <section style={{ padding: '56px 24px 64px', background: '#fff' }}>
    <Eyebrow align="center">Questions, answered</Eyebrow>
    <h2 style={{ ...lpH2, textAlign: 'center', marginTop: 10, marginBottom: 28 }}>Frequently asked questions</h2>
    <div style={{ maxWidth: 560, margin: '0 auto' }}>{items.map((f, i) => <FaqItem key={f.q} question={f.q} defaultOpen={i === 0}>{f.a}</FaqItem>)}</div>
  </section>;
}

const { Button: FBase, SectionTag: FTag, Eyebrow: FEyebrow, EyebrowPill: FPill, Icon: FIcon, TextField: FText, SelectField: FSelect, CtaBar: FCtaBar, TrustRow: FTrust, FinancingStrip: FFin, FeatureItem: FFeature, SiteHeader: FHeader, SiteFooter: FFooter } = registry.MulhollandBrandDesignSystem_0ab04f;

const FB = p => <FBase iconRight={p.icon ? undefined : 'arrow-right'} {...p} style={{ borderRadius: 999, ...p.style }} />;

const FENCE_STYLES = ['Wood-Look Aluminum Fencing', 'Glass Fencing', 'Solid Fencing', 'Laser-Cut Fencing', 'I’m Not Sure Yet'];

const STEPS = [
  ['Request Your Free On-Site Estimate', 'Tell us about your property, ZIP Code, and the fencing style you are considering.'],
  ['Meet With a Mulholland Project Specialist', 'We will review your space, discuss your design priorities, and help determine whether your preferred style is included in the current offer.'],
  ['Build a Fence That Fits Your Property', 'Once your project is confirmed, Mulholland Brand will coordinate custom fabrication and professional installation.'],
];

const FENCE_FAQ = [
  { q: 'Which fencing styles qualify for the up-to-60%-off offer?', a: 'The promotion applies to select fencing styles and available inventory. During your Free On-Site Estimate, a Mulholland project specialist can review your preferred style and confirm the current offer options for your project.' },
  { q: 'Can I get a wood-look fence through this promotion?', a: 'Mulholland Brand offers wood-look aluminum fencing, along with modern aluminum privacy and architectural styles. Availability under the current offer depends on the specific style and project requirements.' },
  { q: 'Is the fencing custom built for my property?', a: 'Yes. Mulholland Brand designs fencing around your property’s layout, style preferences, and project needs before fabrication and installation.' },
  { q: 'Do you install fencing on sloped properties?', a: 'Your on-site estimate is the right time to review slope, access, layout, and other property conditions. The Mulholland team will assess the project and recommend an appropriate fencing solution.' },
  { q: 'Do you offer financing?', a: 'Financing availability is advertised by Mulholland Brand. Ask your project specialist about current options, eligibility, and applicable terms.' },
  { q: 'How do I get started?', a: 'Complete the form or call (800) 562-5770. We will confirm your ZIP Code, discuss your fencing project, and help you schedule a Free On-Site Estimate.' },
];

function FenceForm({ navy }) {
  const [optIn, setOptIn] = React.useState(false);
  return <form className="quote-form" onSubmit={e => submitLead(e)} style={{ background: navy ? 'var(--mb-navy-site)' : 'var(--grad-blue-panel)', color: '#fff', boxShadow: 'var(--shadow-panel)', width: '100%', maxWidth: navy ? 500 : 420, borderRadius: navy ? 6 : 0, overflow: 'hidden' }}>
    <div style={{ background: navy ? '#002A4D' : 'var(--mb-blue)', color: 'var(--mb-yellow)', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 10.5, textAlign: 'center', padding: '7px 10px' }}>Up to 60% Off · Select Styles &amp; Available Inventory*</div>
    <div style={{ padding: '24px 26px 26px' }}>
      <>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: 1.15, textAlign: 'center' }}>Get Up to 60% Off on Premium Fencing</h3>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 11.5, textAlign: 'center', margin: '8px 0 16px' }}>Complete the form to request your Free On-Site Estimate.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <FText variant="boxed" name="full_name" label="Full Name" required /><FText variant="boxed" name="email" label="Email Address" type="email" required />
          <FText variant="boxed" name="phone" label="Phone Number" type="tel" required /><FText variant="boxed" name="zip_code" label="ZIP Code" required />
          <FSelect name="Interest" variant="boxed" label="Select a fencing style" options={FENCE_STYLES} />
          <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontFamily: 'var(--font-ui)', fontSize: 10, lineHeight: 1.4, cursor: 'pointer', margin: '4px 0' }}>
            <input name="sms_opt_in" type="checkbox" checked={optIn} onChange={() => setOptIn(!optIn)} style={{ accentColor: 'var(--mb-gold)', margin: '1px 0 0', width: 14, height: 14 }} />
            Text me updates about my quote (optional)
          </label>
          <label className="honeypot" aria-hidden="true">Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label><FB variant="accent" type="submit" fullWidth size="sm" style={{ fontSize: 10.5 }}>Request My Free Estimate</FB>
        </div>
      </>
    </div>
  </form>;
}

const GALLERY = [
  ['house-modern-slat-fence.jpg', 'Hi-Tech Horizontal Slat Fencing', 2, 2],
  ['woodlook-fence-1-restored.png', 'Wood-Like Aluminum Fencing', 1, 1],
  ['gate-profile24-palm.jpg', 'Profile 24 Walk Gate', 1, 2],
  ['gate-woodlook-double.jpg', 'Wood-Like Double Gate', 1, 1],
  ['backyard-privacy-slats-restored.png', 'Backyard Privacy Slats', 2, 1],
  ['gate-row-2-restored.png', 'Solid Series Perimeter Fence', 1, 1],
  ['woodlook-walk-gate-restored.png', 'Wood-Look Walk Gate', 1, 1],
  ['gate-row-3-restored.png', 'Horizontal Slat Wall Topper', 2, 1],
  ['gate-hitech-garden.jpg', 'Hi-Tech Privacy Fencing', 1, 1],
  ['woodlook-fence-2-restored.png', 'Wood-Like Fence & Gate', 1, 1],
];

function GalleryTile({ img, title, c, r, onOpen }) {
  const [h, setH] = React.useState(false);
  return <button className="gallery-tile" type="button" onClick={onOpen} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ gridColumn: 'span ' + c, gridRow: 'span ' + r, position: 'relative', overflow: 'hidden', border: 0, padding: 0, cursor: 'zoom-in', background: 'var(--mb-navy)' }}>
    <ResponsiveImage sizes={r > c ? '(max-width: 767px) 50vw, 1200px' : `(max-width: 999px) 50vw, ${c > 1 ? 50 : 25}vw`} src={PH + img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.06)' : 'none', transition: 'transform 700ms var(--ease-out)' }} />
    <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(12,20,36,.75) 0%, rgba(12,20,36,0) 45%)', opacity: h ? 1 : .7, transition: 'opacity var(--dur-med)' }} />
    <span style={{ position: 'absolute', left: 20, right: 20, bottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, color: '#fff', textAlign: 'left' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: c > 1 ? 18 : 15, lineHeight: 1.2 }}>{title}</span>
      <span style={{ width: 34, height: 34, flex: 'none', borderRadius: '50%', background: 'var(--mb-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: h ? 1 : 0, transform: h ? 'none' : 'scale(.7)', transition: 'all var(--dur-med) var(--ease-out)' }}><FIcon name="maximize-2" size={15} color="var(--mb-navy)" stroke={1.25} /></span>
    </span>
  </button>;
}

function ProductGallery({ light }) {
  const [open, setOpen] = React.useState(-1);
  const [cols, setCols] = React.useState(4);
  React.useEffect(() => {
    const f = () => { const w = document.documentElement.clientWidth; setCols(w < 1000 ? 2 : 4); };
    f(); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f);
  }, []);
  React.useEffect(() => {
    if (open < 0) return;
    const k = e => { if (e.key === 'Escape') setOpen(-1); if (e.key === 'ArrowRight') setOpen(i => (i + 1) % GALLERY.length); if (e.key === 'ArrowLeft') setOpen(i => (i - 1 + GALLERY.length) % GALLERY.length); };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [open]);
  const navBtn = (icon, fn, side) => <button type="button" onClick={e => { e.stopPropagation(); fn(); }} style={{ position: 'absolute', top: '50%', [side]: 24, marginTop: -26, width: 52, height: 52, borderRadius: '50%', border: '1px solid rgba(255,255,255,.4)', background: 'rgba(255,255,255,.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FIcon name={icon} size={22} color="#fff" stroke={1.25} /></button>;
  return <section style={{ background: light ? '#fff' : 'var(--mb-navy)' }}>
    {light ? <div style={{ maxWidth: 1760, margin: '0 auto', padding: '8px clamp(24px,5vw,96px) 18px', display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--text-muted)' }}><FIcon name="images" size={16} color="var(--mb-blue)" /><span><strong style={{ color: 'var(--mb-ink)', fontWeight: 700 }}>Recent installations</strong> · Real fences on real SoCal homes</span></div> : <div style={{ padding: light ? '24px clamp(24px,4vw,56px) 36px' : '64px clamp(24px,4vw,56px) 36px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
      <div>
        <FEyebrow color={light ? 'var(--mb-blue)' : 'var(--mb-yellow)'}>Recent installations</FEyebrow>
        <h2 style={{ ...lpH2, color: light ? 'var(--mb-ink)' : '#fff', fontSize: 'clamp(28px,3.6vw,40px)', marginTop: 10 }}>Real Fences. <span style={{ color: light ? 'var(--mb-blue)' : 'var(--mb-yellow)' }}>Real SoCal Homes.</span></h2>
      </div>
      <FB variant={light ? 'primary' : 'outline-light'} href="#quote" iconRight="arrow-right" style={light ? { background: 'var(--mb-navy-site)', borderColor: 'var(--mb-navy-site)' } : undefined}>Request My Free On-Site Estimate</FB>
    </div>}
    <div className="project-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(' + cols + ', minmax(0,1fr))', gridAutoRows: cols === 1 ? '280px' : 'clamp(220px,22vw,320px)', gridAutoFlow: 'dense', gap: 6 }}>
      {GALLERY.map(([img, t, c, r], i) => <GalleryTile key={img} img={img} title={t} c={Math.min(c, cols)} r={cols === 1 ? 1 : r} onOpen={() => setOpen(i)} />)}
    </div>
    {open >= 0 && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Project photos" onClick={() => setOpen(-1)} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(8,14,26,.94)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 96px' }}>
      <ResponsiveImage sizes="(max-width: 767px) 100vw, calc(100vw - 192px)" src={PH + GALLERY[open][0]} alt={GALLERY[open][1]} onClick={e => e.stopPropagation()} style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 160px)', objectFit: 'contain', boxShadow: 'var(--shadow-panel)' }} />
      <div style={{ marginTop: 18, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18 }}>{GALLERY[open][1]} <span style={{ fontWeight: 300, opacity: .6, fontSize: 14, marginLeft: 10 }}>{open + 1} / {GALLERY.length}</span></div>
      {navBtn('chevron-left', () => setOpen((open - 1 + GALLERY.length) % GALLERY.length), 'left')}
      {navBtn('chevron-right', () => setOpen((open + 1) % GALLERY.length), 'right')}
      <button type="button" onClick={() => setOpen(-1)} style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 0, cursor: 'pointer' }}><FIcon name="x" size={28} color="#fff" stroke={1.25} /></button>
    </div>}
  </section>;
}

const { Button: BBase, Icon: BIcon, Logo: BLogo, SiteFooter: BFooter } = registry.MulhollandBrandDesignSystem_0ab04f;

const BB = p => <BBase iconRight={p.icon ? undefined : 'arrow-right'} {...p} style={{ borderRadius: 999, ...p.style }} />;

const SITE = (registry.MB_ASSET_BASE || '../../assets/') + 'site/';

const NAVY = 'var(--mb-navy-site)';

const bH2 = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--mb-ink)', textWrap: 'balance' };

const bBody = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', textWrap: 'pretty' };

const bKick = { fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mb-blue)' };

const BWrap = ({ children, style }) => <div style={{ maxWidth: 1760, margin: '0 auto', padding: '0 clamp(24px,5vw,96px)', ...style }}>{children}</div>;

const Kicker = ({ children, color }) => <div className="mb-kicker" style={{ ...bKick, color: color || bKick.color, display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 28, height: 2, background: 'var(--mb-gold)', flex: 'none' }}></span>{children}</div>;

function BHeader() {
  return <header className="site-header" style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255,255,255,.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-hairline)' }}>
    <BWrap style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
      <BLogo height={42} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <a href="tel:8005625770" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: NAVY, textDecoration: 'none', whiteSpace: 'nowrap' }}><BIcon name="phone" size={16} stroke={1.5} />(800) 562-5770</a>
        <BB href="#quote-b" size="md" style={{ background: NAVY, borderColor: NAVY, padding: '0 24px', height: 44, fontSize: 14 }}><span className="b-cta-full">Get a Quote</span><span className="b-cta-short">Quote</span></BB>
      </div>
    </BWrap>
  </header>;
}

function StatsBand() {
  const stats = [['30+', 'Years in business'], ['60,000+', 'Projects built'], ['4.5★', 'Google & Yelp'], ['850+', 'Reviews'], ['USA', 'Made in our LA factory']];
  const words = ['homeowners', 'architects', 'builders', 'developers', 'HOAs'];
  const [w, setW] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setW(n => (n + 1) % words.length), 2200); return () => clearInterval(t); }, []);
  return <section style={{ position: 'relative', overflow: 'hidden', color: '#fff', padding: 'clamp(48px,5vw,72px) 0 clamp(44px,5vw,64px)', background: 'repeating-linear-gradient(180deg, rgba(255,255,255,.035) 0px, rgba(255,255,255,.035) 9px, rgba(0,0,0,.16) 9px, rgba(0,0,0,.16) 12px), linear-gradient(90deg, #161C27 0%, #1C2331 50%, #161C27 100%)' }}>
    <h2 style={{ margin: '0 0 clamp(28px,3.5vw,44px)', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(26px,2.8vw,38px)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>Trusted by <span key={w} style={{ fontWeight: 700, color: 'var(--mb-yellow)', display: 'inline-block', animation: 'bWordIn 500ms var(--ease-out)' }}>{words[w]}</span></h2>
    <div style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)', maskImage: 'linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)' }}>
      <BWrap style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '28px 40px' }}>
        {stats.map(([n, l]) => <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(214,220,230,.78)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,3.2vw,42px)', lineHeight: 1, letterSpacing: '-0.02em' }}>{n}</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: .8 }}>{l}</span>
        </div>)}
      </BWrap>
    </div>
  </section>;
}

function Perimeter({ photos = true }) {
  const imgs = ['homeowner-1.CzkRp749_1SkpUp.webp', 'homeowner-2.CNR39tVD_1LhwtL.webp', 'homeowner-3.BaKwTfL0_Z1osoBo.webp'];
  if (!photos) return <section style={{ padding: 'clamp(48px,6vw,80px) 0 clamp(24px,3vw,40px)', background: '#fff' }}>
    <BWrap style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '20px clamp(40px,6vw,96px)', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Kicker>Privacy. Security. Curb Appeal.</Kicker>
        <h2 style={bH2}>A Better Perimeter Starts With the Right Fence</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
        <p style={{ ...bBody, fontSize: 19, fontWeight: 500, color: NAVY }}>Your fence should not feel like an afterthought. It should make your property feel more private, secure, and complete.</p>
      </div>
    </BWrap>
  </section>;
  return <section style={{ padding: 'clamp(72px,9vw,128px) 0' }}>
    <BWrap style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gridTemplateRows: 'minmax(0,1fr) minmax(0,1fr)', gap: 10, height: 'clamp(380px,40vw,520px)', width: '100%' }}>
        <img src={SITE + imgs[0]} alt="" style={{ gridRow: 'span 2', width: '100%', height: '100%', minHeight: 0, objectFit: 'cover', borderRadius: 6 }} />
        <img src={SITE + imgs[1]} alt="" style={{ width: '100%', height: '100%', minHeight: 0, objectFit: 'cover', borderRadius: 6 }} />
        <img src={SITE + imgs[2]} alt="" style={{ width: '100%', height: '100%', minHeight: 0, objectFit: 'cover', borderRadius: 6 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
        <Kicker>Privacy. Security. Curb Appeal.</Kicker>
        <h2 style={bH2}>A Better Perimeter Starts With the Right Fence</h2>
        <p style={{ ...bBody, fontSize: 19, fontWeight: 500, color: NAVY }}>Your fence should not feel like an afterthought. It should make your property feel more private, secure, and complete.</p>
        <p style={bBody}>Mulholland Brand creates custom aluminum fencing for Southern California homes that need a modern exterior solution, not a standard, one-size-fits-all panel. Our team will review your space, your preferred style, and the design details that matter before recommending the right fencing system for your property.</p>
        <BB href="#quote-b" size="lg" style={{ background: NAVY, borderColor: NAVY, marginTop: 6 }}>Get My Free On-Site Estimate</BB>
      </div>
    </BWrap>
  </section>;
}

function MaterialCompare({ photos = true }) {
  const cols = [
    ['Wood Decays', 'wood-new.DalD19lI_1rLVJc.webp', 'wood-weathered.BBD80oWc_23q87V.webp', ['Re-stain or re-seal', 'Repaint', 'Replace rotted or warped members', 'Replace the unit'], false],
    ['Iron Rusts', 'iron-new.BTtjktLk_ZAQe6E.webp', 'iron-weathered.owVicitI_Z28GfWs.webp', ['Repaint', 'Sand and treat rust', 'Re-weld corroded joints', 'Replace the unit'], false],
    ['Aluminum Withstands', 'alu-new.DqPFZsfW_2uqJ9V.webp', 'alu-weathered.CIVjziou_C2oBz.webp', ['It can’t rust', 'Colour is baked in', 'Durability for decades', 'It won’t burn'], true],
  ];
  const [aged, setAged] = React.useState(false);
  return <section style={{ padding: photos ? 'clamp(72px,9vw,120px) 0' : 'clamp(56px,7vw,96px) 0 clamp(40px,5vw,64px)', background: '#fff' }}>
    <BWrap>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '24px 72px', alignItems: 'end', marginBottom: 44 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Kicker>Built to last</Kicker>
          <h2 style={bH2}>Why Homeowners Choose Aluminum Fencing</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p style={bBody}>Wood and steel can require recurring attention over time. Premium aluminum provides a clean, modern alternative for homeowners seeking privacy and architectural style with less ongoing upkeep.</p>
          <p style={bBody}>With Mulholland Brand, your fencing project is designed, fabricated, and installed by one local team. That means a more coordinated process from initial estimate through final installation.</p>
        </div>
      </div>
      {photos && <div style={{ display: 'inline-flex', padding: 4, borderRadius: 999, background: 'var(--mb-tint)', border: '1px solid var(--border-hairline)', marginBottom: 24 }}>
        {[['New', false], ['Weathered', true]].map(([l, v]) => <button key={l} type="button" onClick={() => setAged(v)} style={{ border: 0, cursor: 'pointer', padding: '10px 22px', borderRadius: 999, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13.5, background: aged === v ? NAVY : 'transparent', color: aged === v ? '#fff' : NAVY, transition: 'background var(--dur-med)' }}>{l}</button>)}
      </div>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 20 }}>
        {cols.map(([t, nw, wt, items, win]) => <div key={t} style={{ borderRadius: 6, overflow: 'hidden', background: win ? NAVY : 'var(--mb-tint)', color: win ? '#fff' : 'var(--mb-ink)', display: 'flex', flexDirection: 'column' }}>
          {photos && <div style={{ position: 'relative', aspectRatio: '4 / 3' }}>
            <img src={SITE + nw} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <img src={SITE + wt} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: aged ? 1 : 0, transition: 'opacity 600ms var(--ease-out)' }} />
            <span style={{ position: 'absolute', top: 14, left: 14, padding: '5px 12px', borderRadius: 999, background: 'rgba(0,0,0,.55)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{aged ? 'Weathered' : 'New'}</span>
          </div>}
          <div style={{ padding: '26px 26px 30px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>{t}</span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(x => <li key={x} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--font-ui)', fontSize: 14.5, fontWeight: 500 }}><BIcon name={win ? 'check' : 'refresh-cw'} size={16} stroke={1.5} color={win ? 'var(--mb-yellow)' : 'var(--mb-gray-400)'} />{x}</li>)}
            </ul>
          </div>
        </div>)}
      </div>
      {!photos && <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(28px,3.5vw,44px)' }}><BB href="#quote-b" size="lg" style={{ background: NAVY, borderColor: NAVY }}>Get My Free On-Site Estimate</BB></div>}
    </BWrap>
  </section>;
}

function HowItWorks({ tight }) {
  const imgs = ['consult-1.Cq0RkNVt_Z2iWgO2.webp', 'design-1.DEREC25w_ZLJHeP.webp', 'install-1.BStnZaSj_ZVoeAu.webp'];
  return <section style={{ background: 'var(--mb-tint)', padding: 'clamp(72px,9vw,120px) 0' }}>
    <BWrap>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', textAlign: 'center', marginBottom: 52 }}>
        <Kicker>How it works</Kicker>
        <h2 style={bH2}>How Your Fencing Project Works</h2>
      </div>
      <MobileCarousel label="project steps" auto>
        {STEPS.map(([t, d], k) => <li key={t} style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
          <ResponsivePhoto src={SITE + imgs[k]} alt={t} style={{aspectRatio:'16 / 10'}} />
          <div style={{ padding: '26px 28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 12, letterSpacing: '0.2em', color: 'var(--mb-gold)' }}>STEP {k + 1}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, lineHeight: 1.2, color: NAVY }}>{t}</span>
            <p style={{ ...bBody, fontSize: 15 }}>{d}</p>
          </div>
        </li>)}
      </MobileCarousel>
    </BWrap>
  </section>;
}

function Reviews() {
  const R = [['Brad M.', 'La Crescenta-Montrose, CA', 'yelp', 'Their sales, project management and construction teams were top professionals. We have a black frame with wood finished panels, that are straight and true, and we consistently get compliments from the neighbors. Best money we’ve spent in a long time!'],
    ['Mark H.', 'Rancho Bernardo, San Diego, CA', 'yelp', 'Mulholland did our gate and small fence sections. Only took about 6 weeks to custom make the pieces and install took just a couple of hours. The installation crew was excellent.'],
    ['Lewis F.', 'Santa Monica, CA', 'yelp', 'The color choices were excellent and the powder coating is a very nice feature.. No more painting necessary of wrought iron that was so maintenace intensive on the last.']];
  return <section style={{ padding: 'clamp(72px,9vw,120px) 0', background: '#fff' }}>
    <BWrap>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 44 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Kicker>What customers say</Kicker>
          <h2 style={bH2}>Reviewed by the People Who Live With It</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, color: NAVY, lineHeight: 1 }}>4.5</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ color: 'var(--mb-star)', fontSize: 18, letterSpacing: 2 }}>★★★★★</span><span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-muted)' }}>Google &amp; Yelp · 850+ reviews</span></div>
        </div>
      </div>
      <MobileCarousel label="testimonials" auto>
        {R.map(([n, loc, src, q]) => <figure key={n} style={{ margin: 0, padding: '30px 30px 28px', borderRadius: 6, border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ color: 'var(--mb-star)', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
          <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 16.5, lineHeight: 1.6, color: 'var(--mb-ink)', flex: 1 }}>“{q}”</blockquote>
          <figcaption style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: NAVY }}>{n}</span><span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-muted)' }}>{loc}</span></span>
            <img src={SITE + 'brand-' + src + '.svg'} alt={src} style={{ height: 20 }} />
          </figcaption>
        </figure>)}
      </MobileCarousel>
    </BWrap>
  </section>;
}

function FinalQuote() {
  return <section id="quote-b2" style={{ position: 'relative', background: 'var(--mb-navy-site)', color: '#fff', padding: 'clamp(72px,9vw,128px) 0' }}>
<ResponsivePhoto src={SITE + "craft-1.SE-ikNJG_1l86za.webp"} style={{position:"absolute",inset:0}} /><div style={{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(0,26,48,.95) 0%, rgba(0,40,72,.85) 50%, rgba(0,59,105,.7) 100%)"}} />
    <BWrap style={{ position:"relative", display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'flex-start' }}>
        <Kicker color="var(--mb-yellow)">Limited-time offer</Kicker>
        <h2 style={{ ...bH2, color: '#fff', fontSize: 'clamp(34px,4.4vw,56px)' }}><span style={{ color: 'var(--mb-yellow)' }}>Save Up to 60%</span> on Select Premium Aluminum Fencing Styles</h2>
        <p style={{ ...bBody, color: 'rgba(255,255,255,.88)', fontSize: 17 }}>Bring more privacy, security, and architectural style to your property with a fencing system built by Mulholland Brand. Request your Free On-Site Estimate to review your options and confirm availability for the current promotion.</p>
        <p style={{ ...bBody, color: 'rgba(255,255,255,.88)' }}>Mulholland Brand designs, fabricates, and installs premium aluminum fencing for properties across Southern California.</p>
        <a href="tel:8005625770" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 18, color: '#fff', textDecoration: 'none' }}><BIcon name="phone" size={20} stroke={1.5} color="var(--mb-yellow)" />Prefer to call? (800) 562-5770</a>
        <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontSize: 12, opacity: .75 }}>Up to 60% off applies to select fencing styles and available inventory. Restrictions may apply.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><FenceForm navy /></div>
    </BWrap>
  </section>;
}

const EST_COLORS = [['Matte Black', '#1d1f22'], ['Dark Bronze', '#4a3b2e'], ['Charcoal', '#4b5058'], ['Silver', '#b9bdc2'], ['White', '#f2f2ee'], ['Oak', '#b98a55'], ['Walnut', '#6b4630'], ['Cedar', '#a0583a']];

const fmt = n => '$' + (Math.round(n / 50) * 50).toLocaleString('en-US');

function Counter({ value, set, min = 0, max = 4 }) {
  const b = (ic, fn, dis) => <button type="button" disabled={dis} onClick={fn} style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-hairline)', background: '#fff', cursor: dis ? 'default' : 'pointer', opacity: dis ? .35 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BIcon name={ic} size={18} stroke={1.75} color={NAVY} /></button>;
  return <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>{b('minus', () => set(value - 1), value <= min)}<span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, minWidth: 24, textAlign: 'center', color: NAVY }}>{value}</span>{b('plus', () => set(value + 1), value >= max)}</div>;
}

const S8 = [['Hi-Tech', 'hi-tech'], ['Profile 24', 'profile-24'], ['Glass Series', 'glass-series'], ['Solid Series', 'solid-series'], ['Wood-Like', 'wood-like'], ['Laser-Cut', 'laser-cut'], ['Classic 48', 'classic-48'], ['Tongue & Groove', 'tongue-groove']];

const mk = (hashes, skip) => S8.filter(([, sl]) => sl !== skip).map(([n, sl], i) => [n, SITE + sl + '.' + hashes[i] + '.webp']);

const FENCE_PH = ['gate-hitech-garden.jpg', 'gate-row-1.jpg', 'house-modern-slat-fence.jpg', 'gate-profile24-palm.jpg', 'woodlook-fence-1.jpg', 'gate-row-3.jpg', 'gate-row-2.jpg', 'woodlook-fence-2.jpg'];

const PRODUCTS = [
  ['fencing', 'Fencing', 'fencing.DgCiwRll_1moT7C.webp', S8.map(([n], i) => [n, PH + FENCE_PH[i]]), 'linear', 115],
  ['toppers', 'Wall Toppers', 'hi-tech.Omd96RhE_1hW0LQ.webp', mk(['Omd96RhE', 'SFBfeFch', 'W3rhLPi1', 'DYMYha2h', 'BclqmiM1', 'CJcioTSz', 'Bl2iA24K', 'Xwok2oS_']), 'linear', 70],
  ['railings', 'Railings', 'railings.BbGbgxjX_2dq6j6.webp', mk(['Xt7iuW8p', 'D5UXI6Cm', 'D3YUj0Yo', 'ByRA-o9f', 'BGFIrR7H', 'CMruO6Qy', 'CMgvfGGT', 'Cn7jxo_B']), 'linear', 140],
  ['walk', 'Walk Gates', 'walk-gate.cXgE5a0w_Z163qsa.webp', mk(['_DDQYcbZ', 'CxY2GlSS', 'DDO2MzIk', 'CTeSxQV8', 'CCSRxqHr', 'Cqfe79L_', 'DEsPBQC4', 'DLxR-_mC']), 'count', 1800],
  ['drive', 'Driveway Gates', 'driveway-gate.DBHknbAL_1qfCvF.webp', mk(['CScz2mwP', 'DMOFV0bX', 'C0yP9PC7', 'BgxVsbkM', 'XAQV07Lh', 'B09Ek2jJ', 'Ak1tsbBB', 'C6ANPxPV']), 'drive', 420],
  ['pergolas', 'Pergolas', 'pergolas.Cn1HMLTg_2w1WBC.webp', [['Classic', 'classic.DmK0W3_s'], ['Floating', 'floating.DH1D6JPP'], ['Prestige', 'prestige.uS178Lvj'], ['Car-Port', 'car-port.gUtM8cnk'], ['Hi-Tech Frameless', 'high-tech-frameless.CwXxMlEB'], ['Canopy / Overhang', 'canopy-overhang.COyAkPcc'], ['Glass', 'glass.CesvJUiq'], ['Wood-Like', 'wood-like.DhrCg5tm'], ['Laser-Cut', 'laser-cut.DELZVcpR']].map(([n, f]) => [n, SITE + f + '.webp']), 'area', 95],
  ['garage', 'Garage Doors', 'garage-doors.DPA7rod2_vToFk.webp', mk(['BJjoAXYb', 'r-UaiT-c', 'Co8yZkMU', 'DhRV5cc_', 'CNYC3ArO', 'CysIXRdv', 'Bt_y1Rej'], 'classic-48'), 'garage', 6500],
  ['enclosure', 'Equipment Enclosures', 'equipment-enclosure.CPeNoIz2_ZW6S1F.webp', mk(['CjeC7rSo', 'NjQMvrDn', 'CEbPS8BN', 'B7y1RJyy', 'D8ufHRAA', 'BOUZFOyL', 'bSvfMRf_'], 'classic-48'), 'linear', 125],
];
// The export embeds only some product style photos. Retain the product photo for unavailable style assets.
for (const product of PRODUCTS) product[3] = product[3].map(([name, image]) => [name, imageVariants[image] ? image : SITE + product[2]]);


const HEIGHTS = { fencing: [[4, .8], [5, .9], [6, 1], [7, 1.15], [8, 1.3]], toppers: [[1, .7], [2, 1], [3, 1.3]], railings: [['36 in', 1], ['42 in', 1.12]], enclosure: [[4, .9], [5, 1], [6, 1.12]] };

const STAGE = { fencing: 'fencing.sFAk4Xsf_2dI09l.webp', toppers: 'hi-tech.Omd96RhE_1hW0LQ.webp', railings: 'railings.CoW2uoQW_1QO74v.webp', walk: 'walk-gate.cXgE5a0w_Z163qsa.webp', drive: 'driveway-gate.DBHknbAL_1qfCvF.webp', pergolas: 'pergolas.DeEVRv-D_gQs7y.webp', garage: 'garage-doors.DPA7rod2_vToFk.webp', enclosure: 'equipment-enclosure.CZwo0psM_TSPx0.webp' };

const v4Label = { fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' };

function v4Calc(s) {
  const [id, pname, , styles, kind, rate] = PRODUCTS[s.p];
  const style = styles[Math.min(s.style, styles.length - 1)];
  const hs = HEIGHTS[id], hIdx = hs ? Math.min(s.h, hs.length - 1) : 0;
  let base = 0, size = '', extra = 0;
  if (kind === 'linear') { base = s.len * rate * hs[hIdx][1]; size = s.len + ' ft · ' + hs[hIdx][0] + (typeof hs[hIdx][0] === 'number' ? ' ft high' : ''); }
  if (kind === 'count') { base = s.qty * rate * [.9, 1, 1.15][s.w]; size = s.qty + ' × ' + ['3', '4', '5'][s.w] + ' ft wide'; }
  if (kind === 'drive') { base = s.dw * rate * (s.slide ? 1.25 : 1); size = s.dw + ' ft ' + (s.slide ? 'sliding' : 'swing') + (s.auto ? ' · automated' : ''); extra = s.auto ? 3200 : 0; }
  if (kind === 'area') { base = s.area * rate; size = s.area + ' sq ft'; }
  if (kind === 'garage') { base = s.qty * rate * (s.gsize ? 1.6 : 1); size = s.qty + ' × ' + (s.gsize ? 'double' : 'single') + (s.auto ? ' · opener' : ''); extra = s.auto ? 900 * s.qty : 0; }
  const wood = /Wood/.test(style[0]);
  const colors = wood ? EST_COLORS : EST_COLORS.slice(0, 5);
  const color = colors[Math.min(s.color, colors.length - 1)];
  const t = base + extra;
  return { id, pname, styles, kind, style, hs, hIdx, size, colors, color, wood, lo: t * .88, hi: t * 1.12 };
}

function V4Seg({ items, value, onChange }) {
  return <div style={{ display: 'flex', padding: 4, borderRadius: 999, background: 'var(--mb-tint)', gap: 4 }}>
    {items.map((t, k) => <button key={t} type="button" onClick={() => onChange(k)} style={{ flex: 1, height: 40, border: 0, borderRadius: 999, cursor: 'pointer', background: value === k ? NAVY : 'transparent', color: value === k ? '#fff' : NAVY, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, transition: 'background var(--dur-fast)' }}>{t}</button>)}
  </div>;
}

function V4Range({ label, value, unit, min, max, step, onChange }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><span style={v4Label}>{label}</span><span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: NAVY, lineHeight: 1 }}>{value}<span style={{ fontSize: 15, fontWeight: 600, marginLeft: 5 }}>{unit}</span></span></div>
    <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(+e.target.value)} style={{ width: '100%', accentColor: 'var(--mb-navy-site)', height: 24, margin: 0 }} />
  </div>;
}

const v4Row = (label, ctrl) => <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><span style={v4Label}>{label}</span>{ctrl}</div>;

const v4Check = (checked, on, text) => <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14.5, color: NAVY }}><input type="checkbox" checked={checked} onChange={e => on(e.target.checked)} style={{ width: 19, height: 19, accentColor: 'var(--mb-navy-site)', margin: 0 }} />{text}</label>;

function V5Card({ img, name, on, onClick, tall }) {
  const [h, setH] = React.useState(false);
  return <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'flex', flexDirection: 'column', padding: 0, border: '1px solid ' + (on ? NAVY : 'var(--border-hairline)'), borderRadius: 12, overflow: 'hidden', background: '#fff', cursor: 'pointer', textAlign: 'left', boxShadow: on ? '0 0 0 2px var(--mb-navy-site)' : h ? 'var(--shadow-card)' : 'none', transform: h && !on ? 'translateY(-2px)' : 'none', transition: 'all var(--dur-fast) var(--ease-out)' }}>
    <span style={{ position: 'relative', display: 'block', aspectRatio: tall ? '4 / 3' : '16 / 10', background: 'var(--mb-tint)' }}>
      <ResponsiveImage src={img} alt="" sizes="(max-width: 767px) 100vw, 25vw" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />
      {on && <span style={{ position: 'absolute', top: 10, right: 10, width: 26, height: 26, borderRadius: '50%', background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BIcon name="check" size={15} stroke={2.5} color="#fff" /></span>}
    </span>
    <span style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: NAVY }}>{name}<BIcon name="arrow-right" size={16} stroke={1.75} color={NAVY} style={{ opacity: h || on ? 1 : 0, transition: 'opacity var(--dur-fast)' }} /></span>
  </button>;
}

function EstimatorModal({ open, onClose, initP }) {
  useModalFocus(open, onClose);
  const [step, setStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const [s, setS] = React.useState({ p: 0, style: 0, len: 120, h: 2, qty: 1, w: 1, dw: 16, slide: 0, auto: true, area: 200, gsize: 1, color: 0 });
  const up = (k, v) => setS(o => ({ ...o, [k]: v }));
  const c = v4Calc(s);
  React.useEffect(() => { if (open) { setSent(false); if (initP != null) { const p = initP; setS(o => ({ ...o, p, style: 0, h: PRODUCTS[p][0] === 'fencing' ? 2 : 1, len: PRODUCTS[p][0] === 'enclosure' ? 30 : PRODUCTS[p][0] === 'railings' ? 40 : 120 })); setStep(1); } else setStep(0); } }, [open]);
  if (!open) return null;
  const next = () => setStep(n => Math.min(4, n + 1));
  const pick = p => { setS(o => ({ ...o, p, style: 0, h: PRODUCTS[p][0] === 'fencing' ? 2 : 1, len: PRODUCTS[p][0] === 'enclosure' ? 30 : PRODUCTS[p][0] === 'railings' ? 40 : 120 })); next(); };
  const titles = ['What are you looking to install?', 'Choose your ' + c.pname.toLowerCase().replace(/s$/, '') + ' style', 'How big is your project?', 'Pick your finish', sent ? 'Your estimate is on its way' : 'Here is your estimate'];
  const subs = ['Select one product. You can add more at your on-site visit.', 'All styles are custom-made in our Canoga Park factory.', 'Approximate measurements are fine. We confirm on site.', 'Powder-coated in 20+ colors and wood-look finishes.', sent ? 'A Mulholland Brand advisor will call you within one business day.' : 'Enter your details to save it and book your Free On-Site Estimate.'];

  const sizeCtrls = () => {
    if (c.kind === 'linear') return <><V4Range label="Length" value={s.len} unit="ft" min={c.id === 'enclosure' ? 10 : 20} max={c.id === 'enclosure' ? 100 : 400} step={5} onChange={v => up('len', v)} />{v4Row('Height', <V4Seg items={c.hs.map(([h]) => typeof h === 'number' ? h + ' ft' : h)} value={c.hIdx} onChange={v => up('h', v)} />)}</>;
    if (c.kind === 'count') return <><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={v4Label}>Number of gates</span><Counter value={s.qty} set={v => up('qty', v)} min={1} /></div>{v4Row('Gate width', <V4Seg items={['3 ft', '4 ft', '5 ft']} value={s.w} onChange={v => up('w', v)} />)}</>;
    if (c.kind === 'drive') return <><V4Range label="Opening width" value={s.dw} unit="ft" min={10} max={30} step={1} onChange={v => up('dw', v)} />{v4Row('Gate type', <V4Seg items={['Swing', 'Sliding']} value={s.slide} onChange={v => up('slide', v)} />)}{v4Check(s.auto, v => up('auto', v), 'Add automation (motor, remotes, keypad)')}</>;
    if (c.kind === 'area') return <V4Range label="Covered area" value={s.area} unit="sq ft" min={80} max={800} step={10} onChange={v => up('area', v)} />;
    return <><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={v4Label}>Number of doors</span><Counter value={s.qty} set={v => up('qty', v)} min={1} max={3} /></div>{v4Row('Door size', <V4Seg items={['Single', 'Double']} value={s.gsize} onChange={v => up('gsize', v)} />)}{v4Check(s.auto, v => up('auto', v), 'Include opener')}</>;
  };

  const body = [
    <MobileCarousel key="products" label="products">{PRODUCTS.map((p, k) => <V5Card key={p[0]} img={SITE + STAGE[p[0]]} name={p[1]} on={s.p === k} onClick={() => pick(k)} />)}</MobileCarousel>,
    <MobileCarousel key={c.id} label="styles">{c.styles.map(([n, img], k) => <V5Card key={n} img={img} name={n} tall on={c.style[0] === n} onClick={() => { up('style', k); next(); }} />)}</MobileCarousel>,
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 40, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>{sizeCtrls()}</div>
      <ResponsivePhoto src={c.style[1]} alt={c.style[0]} style={{borderRadius:12,aspectRatio:'4 / 3'}} />
    </div>,
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22 }}>{c.colors.map(([n, col], k) => <button key={n} type="button" onClick={() => up('color', k)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: 0, border: 0, background: 'none', cursor: 'pointer', width: 96 }}><span style={{ width: 72, height: 72, borderRadius: '50%', background: k > 4 ? 'repeating-linear-gradient(90deg,' + col + ' 0 8px, rgba(0,0,0,.1) 8px 9px)' : col, border: '1px solid rgba(0,0,0,.12)', boxShadow: c.color[0] === n ? '0 0 0 3px #fff, 0 0 0 5px var(--mb-navy-site)' : 'none' }}></span><span style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: c.color[0] === n ? 700 : 500, color: NAVY }}>{n}</span></button>)}</div>,
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 32, alignItems: 'start' }}>
      <div style={{ borderRadius: 12, background: NAVY, color: '#fff', overflow: 'hidden' }}>
        <ResponsivePhoto src={SITE + STAGE[c.id]} alt={c.pname} style={{aspectRatio:'16 / 9'}} />
        <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, opacity: .8 }}>Estimated installed price</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,3.4vw,46px)', lineHeight: 1, letterSpacing: '-0.02em' }}>{fmt(c.lo)} – {fmt(c.hi)}</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 14, opacity: .9 }}>{c.pname} · {c.style[0]} · {c.size} · {c.color[0]}</span>
          {c.id === 'fencing' && <span style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '7px 14px', borderRadius: 999, background: 'var(--mb-yellow)', color: NAVY, fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 12.5 }}><BIcon name="badge-percent" size={15} stroke={1.75} />Up to 60% off select styles</span>}
        </div>
      </div>
      {sent
        ? <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}><span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--mb-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BIcon name="check" size={28} stroke={2.25} color={NAVY} /></span><BB href="tel:8005625770" icon="phone" size="lg" style={{ background: NAVY, borderColor: NAVY }}>Call (800) 562-5770</BB></div>
        : <form onSubmit={e => submitLead(e, `${c.pname} · ${c.style[0]} · ${c.size} · ${c.color[0]} (${fmt(c.lo)} - ${fmt(c.hi)})`)} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <LeadFields />
            <BB type="submit" size="lg" style={{ background: NAVY, borderColor: NAVY, height: 56, justifyContent: 'center', marginTop: 6 }}>Save My Estimate</BB>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-muted)' }}>Range is an estimate. Final price is confirmed at your Free On-Site Estimate.</span>
          </form>}
    </div>,
  ];

  return <div data-estimator role="dialog" aria-modal="true" aria-labelledby="estimator-heading" style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#fff', display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 'none', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px,4vw,48px)', height: 72, display: 'flex', alignItems: 'center', gap: 24 }}>
        <BLogo height={36} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--mb-tint)', overflow: 'hidden' }}><div style={{ width: ((step + 1) / 5 * 100) + '%', height: '100%', background: 'var(--mb-blue)', borderRadius: 3, transition: 'width 400ms var(--ease-out)' }}></div></div>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Step {step + 1} of 5</span>
        </div>
        <button type="button" onClick={onClose} aria-label="Close" style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-hairline)', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BIcon name="x" size={20} stroke={1.75} color={NAVY} /></button>
      </div>
    </div>
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(32px,6vh,72px) clamp(20px,4vw,48px) 48px', display: 'flex', flexDirection: 'column', gap: 'clamp(24px,4vh,40px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {step > 0 && <button type="button" onClick={() => setStep(step - 1)} style={{ alignSelf: 'flex-start', background: 'none', border: 0, padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, color: 'var(--text-muted)' }}><BIcon name="arrow-left" size={15} stroke={1.75} />Back</button>}
          <h2 id="estimator-heading" tabIndex={-1} style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--mb-ink)' }}>{titles[step]}</h2>
          <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: 18, color: 'var(--text-body)' }}>{subs[step]}</p>
        </div>
        {body[step]}
        {(step === 2 || step === 3) && <BB size="lg" onClick={next} style={{ alignSelf: 'flex-start', background: NAVY, borderColor: NAVY, height: 56, padding: '0 34px', fontSize: 16 }}>{step === 3 ? 'See My Estimate' : 'Continue'}</BB>}
      </div>
    </div>
  </div>;
}

function HeroV5({ onStart, links }) {
  return <section className="hero-v5" style={{ background: '#fff' }}>
    <BWrap style={{ maxWidth: 1400, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center', padding: 'clamp(36px,6vh,72px) clamp(24px,5vw,96px) clamp(36px,5vh,56px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(18px,3vh,28px)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, background: 'var(--mb-tint)', fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, color: 'var(--mb-ink)' }}><BIcon name="map-pin" size={16} stroke={1.75} color={NAVY} />Los Angeles · Ventura · Orange · San Diego</span>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,4.6vw,76px)', lineHeight: 1.02, letterSpacing: '-0.035em', color: 'var(--mb-ink)', textWrap: 'balance' }}>Get Your Gate, Fence &amp; Pergola Estimate in <span style={{ color: 'var(--mb-blue)' }}>60 Seconds</span></h1>
        <div className="mobile-offer">Up to 60%* <small>off select fencing styles</small></div><p className="hero-description" style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(17px,1.35vw,21px)', lineHeight: 1.6, color: 'var(--text-body)', maxWidth: '34em', textWrap: 'pretty' }}>Instant pricing, no waiting. Mulholland Brand designs, fabricates and installs custom aluminum in our own Los Angeles factory for homes across Southern California.</p>
        <p className="mobile-subtitle">Custom aluminum, made in LA.<br />Instant pricing. Free on-site estimate.</p><MobileTrust /><div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
          <BB size="lg" onClick={onStart} style={{ background: NAVY, borderColor: NAVY, height: 62, padding: '0 36px', fontSize: 18, boxShadow: 'var(--shadow-card)' }}>Start My Estimate</BB>
          <a className="hero-call" href="tel:8005625770" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 16, color: NAVY, textDecoration: 'none' }}><BIcon name="phone" size={17} stroke={1.75} /><span className="desktop-call-prefix">or </span>Call (800) 562-5770</a>
        </div>
        <div className="desktop-trust" style={{ alignSelf: 'stretch', borderTop: '1px solid var(--border-hairline)', paddingTop: 'clamp(16px,2.4vh,24px)', display: 'flex', flexWrap: 'nowrap', gap: 'clamp(14px,1.8vw,32px)' }}>
          {[['shield-check', 'CAL FIRE tested'], ['factory', 'Made in our LA factory'], ['star', '4.5★ · 850+ reviews']].map(([ic, t]) => <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 'clamp(13px,1.05vw,15.5px)', color: 'var(--mb-ink)', whiteSpace: 'nowrap' }}><BIcon name={ic} size={18} stroke={1.75} color={ic === 'star' ? 'var(--mb-star)' : 'var(--mb-blue)'} />{t}</span>)}
        </div>
      </div>
      <figure style={{ margin: 0, position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4 / 3', boxShadow: '0 30px 60px -20px rgba(0,30,60,.35)' }}>
        <ResponsiveImage eager src={SITE + 'hero-dusk-fence.png'} alt="Black horizontal-slat aluminum fence on a stone wall at dusk" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '60px 32px 28px', background: 'linear-gradient(0deg, rgba(0,20,40,.85), rgba(0,20,40,0))', color: '#fff', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(18px,1.6vw,24px)' }}>Custom Design &amp; Professional Installation</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 15, opacity: .85 }}>Fabricated in Canoga Park, CA</span>
        </figcaption>
      </figure>
    </BWrap>
    <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, padding: '0 24px clamp(32px,5vh,56px)' }}>
      {(links || [['Why Us', '#why'], ['Our Work', '#work'], ['How It Works', '#how'], ['Reviews', '#reviews'], ['FAQ', '#faq']]).map(([t, h]) => <a key={t} href={h} style={{ padding: '11px 22px', borderRadius: 999, background: 'var(--mb-tint)', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 15, color: 'var(--mb-ink)', textDecoration: 'none' }}>{t}</a>)}
    </nav>
  </section>;
}

function TopBarV5({ onStart }) {
  return <div className="offer-topbar" style={{ background: '#0B1A2C', color: '#fff' }}>
    <BWrap style={{ maxWidth: 1400, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', padding: '10px clamp(24px,5vw,96px)' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontFamily: 'var(--font-ui)', fontSize: 14.5 }}><strong style={{ fontWeight: 800 }}>Premier Fencing at Up to 60% Off</strong><span style={{ opacity: .7 }}>Limited supply on select styles · First come, first served</span></span>
      <button type="button" onClick={onStart} style={{ height: 34, padding: '0 16px', borderRadius: 6, border: 0, background: 'var(--mb-yellow)', color: NAVY, fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 13, cursor: 'pointer' }}>Check My Price</button>
    </BWrap>
  </div>;
}

function EstimatorPageV5() {
  const [open, setOpen] = React.useState(false);
  const start = () => setOpen(true);
  const intercept = e => {
    const a = e.target.closest('a[href^="#quote"], a[href^="#estimate"]');
    if (!a || a.closest('[role="dialog"]')) return;
    e.preventDefault(); e.stopPropagation(); start();
  };
  return <div onClickCapture={intercept}>
    <TopBarV5 onStart={start} />
    <BHeader />
    <HeroV5 onStart={start} />
    <div className="desktop-stats"><StatsBand /></div>
    <div id="why"><Perimeter photos={false} /></div>
    <div id="work"><ProductGallery light /></div>
    <MaterialCompare photos={false} />
    <div id="how"><HowItWorks tight /></div>
    <div id="reviews"><Reviews /></div>
    <div id="faq"><Faq wide items={FENCE_FAQ} /></div>
    <FinalQuote />
    <BFooter />
    <EstimatorModal open={open} onClose={() => setOpen(false)} />
  </div>;
}

export default EstimatorPageV5;
