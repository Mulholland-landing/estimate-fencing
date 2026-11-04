import { Phone,ArrowRight,ArrowLeft,Check,X,ChevronLeft,ChevronRight,ChevronDown,MapPin,ShieldCheck,Factory,Star,BadgePercent,Images,Maximize2,Circle,Ruler,Plus,Minus,Zap,Clock,Wrench,Truck,Flame,Hammer,Sun,Shield,Award,CheckCircle,DollarSign,Menu,CircleCheck } from 'lucide-react';
const iconMap={"phone":Phone,"arrow-right":ArrowRight,"arrow-left":ArrowLeft,"check":Check,"x":X,"chevron-left":ChevronLeft,"chevron-right":ChevronRight,"chevron-down":ChevronDown,"map-pin":MapPin,"shield-check":ShieldCheck,"factory":Factory,"star":Star,"badge-percent":BadgePercent,"images":Images,"maximize-2":Maximize2,"circle":Circle,"ruler":Ruler,"plus":Plus,"minus":Minus,"zap":Zap,"clock":Clock,"wrench":Wrench,"truck":Truck,"flame":Flame,"hammer":Hammer,"sun":Sun,"shield":Shield,"award":Award,"check-circle":CheckCircle,"dollar-sign":DollarSign,"menu":Menu,"circle-check":CircleCheck};
import React from 'react';
const registry={MB_ASSET_BASE:'/assets/'};
(() => {

const __ds_ns = (registry.MulhollandBrandDesignSystem_0ab04f = registry.MulhollandBrandDesignSystem_0ab04f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ProductTile.jsx
try { (() => {
function ProductTile({
  image,
  icon,
  label,
  href,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const base = typeof window !== 'undefined' && registry.MB_ASSET_BASE || 'assets/';
  const iconSrc = icon && (icon.indexOf('/') >= 0 ? icon : base + 'icons/products/' + icon + '.png');
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      position: 'relative',
      textDecoration: 'none',
      cursor: 'pointer',
      paddingBottom: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 2',
      overflow: 'hidden',
      background: 'var(--mb-gray-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '24%',
      right: '24%',
      bottom: 0,
      background: '#fff',
      boxShadow: h ? 'var(--shadow-card)' : 'none',
      transition: 'box-shadow var(--dur-med)'
    }
  }, iconSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      height: 24,
      opacity: .8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: h ? 'var(--mb-blue-deep)' : 'var(--mb-blue)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: 1.15,
      textAlign: 'center',
      padding: '5px 8px',
      transition: 'background var(--dur-fast)'
    }
  }, label)));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  image,
  location,
  title,
  height = 240,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      position: 'relative',
      margin: 0,
      height,
      overflow: 'hidden',
      background: 'var(--mb-gray-200)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '40px 12px 12px',
      background: 'var(--grad-caption)',
      color: '#fff'
    }
  }, location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 8,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: 3,
      opacity: .9
    }
  }, location), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 13
    }
  }, title)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewPlatforms.jsx
try { (() => {
const DEFAULT = [{
  name: 'Google',
  rating: '5.0'
}, {
  name: 'yelp',
  rating: '4.9'
}, {
  name: 'houzz',
  rating: '5.0'
}, {
  name: 'facebook',
  rating: '4.9'
}];
function ReviewPlatforms({
  items = DEFAULT,
  color = '#fff',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      gap: 48,
      flexWrap: 'wrap',
      color,
      ...style
    }
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: p.name === 'Google' ? 500 : 800,
      fontSize: 17,
      letterSpacing: '-0.01em'
    }
  }, p.name), p.rating && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 16
    }
  }, p.rating))));
}
Object.assign(__ds_scope, { ReviewPlatforms });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewPlatforms.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = 'var(--mb-blue)',
  align,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 9.5,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color,
      textAlign: align,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowPill.jsx
try { (() => {
function EyebrowPill({
  children,
  tone = 'light',
  style
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      padding: '5px 14px',
      borderRadius: 999,
      border: '1px solid ' + (light ? 'rgba(255,255,255,.8)' : 'var(--mb-blue)'),
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 9.5,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: light ? '#fff' : 'var(--mb-blue)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 4,
      background: 'var(--mb-gold)'
    }
  }), children);
}
Object.assign(__ds_scope, { EyebrowPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({name, size=18, color='currentColor', title, style, stroke=1.75}) {
const C=iconMap[name] || iconMap['circle']; return React.createElement(C,{size,color,strokeWidth:stroke,style,'aria-label':title,'aria-hidden':title ? undefined : true});
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  children,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--mb-blue-light)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 0',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--mb-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 20,
      background: 'var(--mb-tint)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'minus' : 'plus',
    size: 11,
    color: "var(--mb-gray-600)"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 36px 18px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 12.5,
      lineHeight: 1.65,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  title,
  quote,
  name,
  location,
  project,
  tone = 'onBlue',
  style
}) {
  const blue = tone === 'onBlue';
  const fg = blue ? '#fff' : 'var(--mb-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: fg,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: 'var(--mb-star)',
      fontSize: 15,
      lineHeight: 1
    }
  }, "\u2605"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 15,
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 10.5,
      lineHeight: 1.6,
      flex: 1
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid ' + (blue ? 'rgba(255,255,255,.4)' : 'var(--mb-gray-400)'),
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 11,
      color: blue ? '#fff' : 'var(--mb-blue)'
    }
  }, name), location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 8.5,
      color: blue ? '#fff' : 'var(--mb-blue)',
      marginTop: 1
    }
  }, location), project && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "badge-check",
    size: 20,
    color: blue ? 'var(--mb-gold)' : 'var(--mb-blue)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 8.5,
      lineHeight: 1.35
    }
  }, "Verified Project: ", project))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    bg: 'var(--mb-blue)',
    hover: 'var(--mb-blue-deep)',
    fg: '#fff',
    bd: 'var(--mb-blue)'
  },
  accent: {
    bg: 'var(--mb-gold)',
    hover: '#F0C64A',
    fg: 'var(--mb-navy)',
    bd: 'var(--mb-gold)'
  },
  'outline-gold': {
    bg: 'transparent',
    hover: 'rgba(228,183,61,.14)',
    fg: '#fff',
    bd: 'var(--mb-gold)'
  },
  white: {
    bg: '#fff',
    hover: 'var(--mb-tint)',
    fg: 'var(--mb-blue)',
    bd: '#fff'
  },
  'outline-light': {
    bg: 'transparent',
    hover: 'rgba(255,255,255,.12)',
    fg: '#fff',
    bd: 'rgba(255,255,255,.75)'
  },
  'outline-blue': {
    bg: '#fff',
    hover: 'var(--mb-tint)',
    fg: 'var(--mb-ink)',
    bd: 'var(--mb-blue)'
  },
  navy: {
    bg: 'var(--mb-navy)',
    hover: '#1B2A42',
    fg: '#fff',
    bd: 'var(--mb-navy)'
  }
};
const SIZES = {
  sm: {
    height: 34,
    padding: '0 14px',
    fontSize: 11,
    gap: 6,
    icon: 13
  },
  md: {
    height: 42,
    padding: '0 20px',
    fontSize: 12.5,
    gap: 8,
    icon: 15
  },
  lg: {
    height: 54,
    padding: '0 30px',
    fontSize: 14,
    gap: 10,
    icon: 17
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  uppercase,
  tracked,
  fullWidth,
  disabled,
  href,
  onClick,
  type = 'button',
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const upper = uppercase ?? variant === 'accent';
  const css = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    boxSizing: 'border-box',
    fontFamily: 'var(--font-ui)',
    fontSize: s.fontSize,
    fontWeight: upper ? 800 : 700,
    letterSpacing: tracked ? '0.28em' : upper ? '0.08em' : '0.01em',
    textTransform: upper ? 'uppercase' : 'none',
    color: v.fg,
    background: hover && !disabled ? v.hover : v.bg,
    border: '1px solid ' + v.bd,
    borderRadius: 'var(--radius-button)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast)',
    transform: press && !disabled ? 'translateY(1px)' : 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const FILES = {
  primary: 'mulholland-logo-out-of-the-ordinary.png',
  white: 'mulholland-logo-aluminum-tech-white.png',
  'white-outline': 'mulholland-logo-aluminum-tech-white-outline.png',
  mark: 'mb-road-mark-blue.png',
  'mark-white': 'mb-road-mark-white.png'
};
function Logo({
  variant = 'primary',
  height = 36,
  src,
  style,
  alt = 'Mulholland Brand'
}) {
  const base = typeof window !== 'undefined' && registry.MB_ASSET_BASE || 'assets/';
  return /*#__PURE__*/React.createElement("img", {
    src: src || base + 'logo/' + FILES[variant],
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTag.jsx
try { (() => {
function SectionTag({
  accent,
  children,
  icon,
  variant = 'solid',
  accentColor,
  iconColor,
  style
}) {
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: solid ? '9px 22px' : 0,
      background: solid ? 'var(--mb-blue)' : 'transparent',
      fontFamily: 'var(--font-ui)',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: solid ? '#fff' : 'var(--mb-ink)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: iconColor || (solid ? '#fff' : 'var(--mb-blue)')
  }), /*#__PURE__*/React.createElement("span", null, accent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: accentColor || (solid ? 'var(--mb-yellow)' : 'var(--mb-blue)')
    }
  }, accent, " "), children));
}
Object.assign(__ds_scope, { SectionTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTag.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
function SelectField({
  label,
  placeholder = 'Select an option',
  options = [],
  value,
  onChange,
  name,
  variant = 'labeled',
  style
}) {
  const boxed = variant === 'boxed';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label && !boxed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 13
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    onChange: onChange,
    defaultValue: value === undefined ? '' : undefined,
    "aria-label": label,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      height: 'var(--field-h)',
      width: '100%',
      boxSizing: 'border-box',
      padding: '0 36px 0 14px',
      borderRadius: 0,
      border: '1px solid var(--border-field)',
      background: '#fff',
      color: 'var(--mb-ink)',
      fontFamily: 'var(--font-ui)',
      fontSize: boxed ? 12 : 13,
      fontWeight: boxed ? 700 : 400,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, boxed ? label || placeholder : placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    color: "var(--mb-ink)",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      marginTop: -7.5,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  variant = 'labeled',
  required,
  error,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const boxed = variant === 'boxed';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label && !boxed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 13,
      color: 'inherit'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    name: name,
    autoComplete: ({full_name:"name", email:"email", phone:"tel", zip_code:"postal-code"})[name],
    inputMode: name === "zip_code" ? "numeric" : undefined,
    pattern: name === "zip_code" ? "[0-9]{5}(-[0-9]{4})?" : undefined,
    maxLength: name === "zip_code" ? 10 : 180,
    type: type,
    required: required,
    value: value,
    onChange: onChange,
    placeholder: boxed ? placeholder || label : placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-label": label,
    style: {
      height: 'var(--field-h)',
      boxSizing: 'border-box',
      width: '100%',
      padding: '0 14px',
      borderRadius: 0,
      outline: 'none',
      background: '#fff',
      color: 'var(--mb-ink)',
      border: '1px solid ' + (error ? 'var(--mb-danger)' : focus ? 'var(--mb-blue)' : 'var(--border-field)'),
      boxShadow: focus ? '0 0 0 3px rgba(44,101,176,.18)' : 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: boxed ? 12 : 13,
      fontWeight: boxed ? 700 : 400
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      color: 'var(--mb-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/LeadForm.jsx
try { (() => {
const PRODUCTS = ['Driveway Gates', 'Walk Gates', 'Fencing', 'Wall Toppers', 'Railings', 'Pergolas', 'Garage Doors', 'Equipment Enclosures', 'Building Cladding', 'Security Bars'];
const TIMELINES = ['As soon as possible', '1–3 months', '3–6 months', 'Just researching'];
function LeadForm({
  variant = 'hero',
  title,
  banner,
  submitLabel,
  products = PRODUCTS,
  onSubmit,
  style
}) {
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit(e);
  };
  const hero = variant === 'hero';
  const done = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 0',
      textAlign: 'center',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 22,
      marginBottom: 8
    }
  }, "We'll be in touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.5
    }
  }, "Thanks \u2014 someone from our team will reach out shortly to set up your consultation."));
  if (hero) return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'var(--grad-blue-panel)',
      color: '#fff',
      boxShadow: 'var(--shadow-panel)',
      width: '100%',
      maxWidth: 300,
      boxSizing: 'border-box',
      ...style
    }
  }, banner && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mb-blue)',
      color: 'var(--mb-yellow)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: 'center',
      padding: '7px 10px'
    }
  }, banner), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px 30px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 1.15,
      textAlign: 'center'
    }
  }, title || 'Ready To Get Started On Your Project?'), sent ? done : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    variant: "boxed",
    label: "Name",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    variant: "boxed",
    label: "Email",
    type: "email"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    variant: "boxed",
    label: "Phone",
    type: "tel"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    variant: "boxed",
    label: "Zip Code"
  }), /*#__PURE__*/React.createElement(__ds_scope.SelectField, {
    variant: "boxed",
    label: "Product Interest",
    options: products
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    type: "submit",
    fullWidth: true,
    size: "sm",
    style: {
      marginTop: 6,
      fontSize: 10.5
    }
  }, submitLabel || 'Schedule Your Free Consultation'))));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      color: 'inherit',
      width: '100%',
      maxWidth: 420,
      ...style
    }
  }, sent ? done : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: '14px 12px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Full Name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Phone Number",
    placeholder: "(310) 555-0123",
    type: "tel"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Email Address",
    placeholder: "jane@email.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "ZIP Code",
    placeholder: "90210"
  }), /*#__PURE__*/React.createElement(__ds_scope.SelectField, {
    label: "What are you interested in?",
    options: products,
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.SelectField, {
    label: "Project Timeline",
    placeholder: "Select a timeline",
    options: TIMELINES,
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: variant === 'full-gold' ? 'accent' : 'primary',
    type: "submit",
    fullWidth: true,
    uppercase: false
  }, submitLabel || /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: variant === 'full-gold' ? 'inherit' : 'var(--mb-yellow)'
    }
  }, "Request Free"), " On-Site Estimate")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 10.5,
      opacity: .85
    }
  }, "No obligation. We respect your privacy and never share your information."))));
}
Object.assign(__ds_scope, { LeadForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LeadForm.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CtaBar.jsx
try { (() => {
function CtaBar({
  label = 'Request Free On-Site Estimate',
  phone = '(800) 562-5770',
  href = '#quote',
  inset = false,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-blue-bar)',
      padding: inset ? '18px 24px' : '22px 24px',
      display: 'flex',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '9px 30px',
      borderRadius: 999,
      background: h ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.13)',
      border: '1px solid rgba(255,255,255,.18)',
      textDecoration: 'none',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12.5,
      color: '#fff',
      transition: 'background var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--mb-yellow)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 13
  }), "Or Call Now: ", phone)));
}
Object.assign(__ds_scope, { CtaBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CtaBar.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureItem.jsx
try { (() => {
function FeatureItem({
  icon,
  title,
  children,
  layout = 'inline',
  titleColor,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const fg = dark ? '#fff' : 'var(--mb-ink)';
  const ic = layout === 'inline' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--mb-blue)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "#fff"
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: dark ? '#fff' : 'var(--mb-blue)'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: layout === 'inline' ? 'row' : 'column',
      gap: layout === 'inline' ? 12 : 10,
      ...style
    }
  }, icon && ic, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: layout === 'inline' ? 15 : 16,
      lineHeight: 1.15,
      color: titleColor || fg,
      marginBottom: 5
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 11.5,
      lineHeight: 1.55,
      color: dark ? 'rgba(255,255,255,.85)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FinancingStrip.jsx
try { (() => {
const CARDS = ['paypal', 'amex', 'discover', 'mastercard', 'visa'];
function FinancingStrip({
  tone = 'blue',
  note = 'Flexible Payment Options for Your Project',
  style
}) {
  const base = typeof window !== 'undefined' && registry.MB_ASSET_BASE || 'assets/';
  const blue = tone === 'blue';
  const fg = blue ? '#fff' : 'var(--mb-navy)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: blue ? 'var(--mb-blue)' : 'var(--mb-gray-100)',
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid ' + (blue ? 'rgba(255,255,255,.6)' : 'var(--mb-blue)'),
      borderBottom: '1px solid ' + (blue ? 'rgba(255,255,255,.6)' : 'var(--mb-blue)'),
      padding: '4px 0',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: blue ? 'var(--mb-yellow)' : 'var(--mb-blue)',
      fontSize: 18
    }
  }, "0%"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: blue ? 'var(--mb-yellow)' : 'var(--mb-blue)'
    }
  }, "FINANCING"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: fg
    }
  }, "AVAILABLE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, CARDS.map(c => /*#__PURE__*/React.createElement("img", {
    key: c,
    src: base + 'payment/' + c + '.png',
    alt: c,
    style: {
      width: 26,
      height: 18,
      borderRadius: 2,
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 11,
      color: fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  }), note));
}
Object.assign(__ds_scope, { FinancingStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FinancingStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/OfferBox.jsx
try { (() => {
function OfferBox({
  highlight = 'Up to 30% OFF',
  text = 'Select Glass Products',
  note = 'Available in Black, White & Clear Glass',
  prefix,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      border: '1px solid rgba(255,255,255,.7)',
      padding: '10px 16px',
      color: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      lineHeight: 1.2
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, prefix, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: 'var(--mb-yellow)'
    }
  }, highlight), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, text)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontStyle: 'italic',
      fontSize: 9.5,
      textAlign: 'center',
      marginTop: 4
    }
  }, note));
}
Object.assign(__ds_scope, { OfferBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/OfferBox.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCallout.jsx
try { (() => {
function StatCallout({
  value = '30+',
  caption = 'Years Designing, Manufacturing & Installing',
  sub = 'Across Southern California',
  color = '#fff',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 200,
      fontSize: 44,
      lineHeight: 1,
      color: 'var(--mb-gold)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 10,
      marginTop: 8,
      lineHeight: 1.4
    }
  }, caption, sub && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), sub)));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCallout.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustRow.jsx
try { (() => {
const DEFAULT = [{
  icon: 'shield-check',
  label: '30+ Years Experience'
}, {
  icon: 'factory',
  label: 'Made in Our LA Factory'
}, {
  icon: 'droplet',
  label: 'Rust-Proof Aluminum'
}, {
  icon: 'landmark',
  label: '0% Financing Available'
}];
function TrustRow({
  items = DEFAULT,
  iconColor = 'var(--mb-gold)',
  color = '#fff',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      minWidth: 64,
      maxWidth: 90
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 24,
    color: iconColor
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 10,
      color,
      textAlign: 'center',
      lineHeight: 1.3
    }
  }, it.label))));
}
Object.assign(__ds_scope, { TrustRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  blurb = 'Since 1994 we have been designing, fabricating, and installing our USA-made products to the glowing satisfaction of our customers.',
  year = 2026,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#fff',
      padding: '40px 24px 48px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 610,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap',
      paddingBottom: 22,
      borderBottom: '1px solid var(--mb-blue-light)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: '1 1 260px',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 11,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap',
      paddingTop: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 8.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Mulholland Brand. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "30+ Years \xB7 Made in Our LA Factory \xB7 Rust-Proof Aluminum"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  phone = '(800) 562-5770',
  ctaLabel = 'Free Estimate',
  ctaHref = '#quote',
  ctaBlock = false,
  ctaVariant = 'primary',
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--header-h)',
      background: '#F7F8FA',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      paddingLeft: 'max(24px, calc((100% - 1040px) / 2))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: ctaBlock ? 44 : 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: ctaBlock ? 20 : 0,
      paddingRight: ctaBlock ? 0 : 'max(24px, calc((100% - 1040px) / 2))'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/[^0-9]/g, ''),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: ctaBlock ? 8 : 6,
      height: 26,
      whiteSpace: 'nowrap',
      flex: 'none',
      padding: '0 14px',
      border: ctaBlock ? 'none' : '1px solid var(--mb-blue)',
      background: '#fff',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: ctaBlock ? 15 : 11.5,
      color: 'var(--mb-ink)',
      textDecoration: 'none',
      background: ctaBlock ? 'transparent' : '#fff'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: ctaBlock ? 16 : 12,
    color: "var(--mb-blue)"
  }), phone), ctaBlock ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant,
    href: ctaHref,
    onClick: onCta,
    icon: "arrow-right",
    uppercase: true,
    tracked: true,
    style: {
      height: '100%',
      padding: '0 48px',
      fontSize: 13.5,
      letterSpacing: '0.14em'
    }
  }, ctaLabel) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant,
    href: ctaHref,
    onClick: onCta,
    uppercase: true,
    size: "sm",
    style: {
      height: 26,
      padding: '0 38px',
      fontSize: 10,
      letterSpacing: '0.16em'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ReviewPlatforms = __ds_scope.ReviewPlatforms;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.EyebrowPill = __ds_scope.EyebrowPill;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionTag = __ds_scope.SectionTag;

__ds_ns.LeadForm = __ds_scope.LeadForm;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.CtaBar = __ds_scope.CtaBar;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.FinancingStrip = __ds_scope.FinancingStrip;

__ds_ns.OfferBox = __ds_scope.OfferBox;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.TrustRow = __ds_scope.TrustRow;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();

export const DS = registry.MulhollandBrandDesignSystem_0ab04f;
