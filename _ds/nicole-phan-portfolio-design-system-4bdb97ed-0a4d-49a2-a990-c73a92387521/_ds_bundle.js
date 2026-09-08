/* @ds-bundle: {"format":4,"namespace":"NicolePhanPortfolioDesignSystem_4bdb97","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"StatusChip","sourcePath":"components/core/StatusChip.jsx"},{"name":"ThinkingTag","sourcePath":"components/core/ThinkingTag.jsx"},{"name":"CaseStudySection","sourcePath":"components/layout/CaseStudySection.jsx"},{"name":"ProjectCard","sourcePath":"components/layout/ProjectCard.jsx"},{"name":"SiteNav","sourcePath":"components/layout/SiteNav.jsx"},{"name":"AnnotatedEvidence","sourcePath":"components/reasoning/AnnotatedEvidence.jsx"},{"name":"DecisionCard","sourcePath":"components/reasoning/DecisionCard.jsx"},{"name":"OutcomeMetric","sourcePath":"components/reasoning/OutcomeMetric.jsx"},{"name":"ReasoningTrace","sourcePath":"components/reasoning/ReasoningTrace.jsx"},{"name":"SurfaceRootProblem","sourcePath":"components/reasoning/SurfaceRootProblem.jsx"},{"name":"SystemFlow","sourcePath":"components/reasoning/SystemFlow.jsx"},{"name":"TradeOffState","sourcePath":"components/reasoning/TradeOffState.jsx"},{"name":"UnknownCheck","sourcePath":"components/reasoning/UnknownCheck.jsx"}],"sourceHashes":{"components/core/Button.jsx":"731dd31acad3","components/core/GlassCard.jsx":"cefd7fe033e2","components/core/StatusChip.jsx":"496f247799a8","components/core/ThinkingTag.jsx":"cfb418638a0f","components/layout/CaseStudySection.jsx":"d2e0ba369b49","components/layout/ProjectCard.jsx":"f14d38c5dd12","components/layout/SiteNav.jsx":"87f70d95adc2","components/reasoning/AnnotatedEvidence.jsx":"10dc2b58366f","components/reasoning/DecisionCard.jsx":"7cad73195387","components/reasoning/OutcomeMetric.jsx":"86e6ef6e7873","components/reasoning/ReasoningTrace.jsx":"a5f67517b362","components/reasoning/SurfaceRootProblem.jsx":"2dedb972b401","components/reasoning/SystemFlow.jsx":"f4a2505cc560","components/reasoning/TradeOffState.jsx":"5f57ba3315df","components/reasoning/UnknownCheck.jsx":"a51db18cf2e3","ui_kits/portfolio/AboutScreen.jsx":"c9be2fc20540","ui_kits/portfolio/HomeScreen.jsx":"0d0cc8116171","ui_kits/portfolio/RumiCaseStudy.jsx":"267d0a208a69"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NicolePhanPortfolioDesignSystem_4bdb97 = window.NicolePhanPortfolioDesignSystem_4bdb97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-body-sm)'
  },
  md: {
    padding: '12px 20px',
    fontSize: 'var(--text-body-sm)'
  },
  lg: {
    padding: '14px 24px',
    fontSize: 'var(--text-body)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  signalDot = false,
  href,
  iconRight,
  style,
  children,
  ...rest
}) {
  const variants = {
    primary: {
      background: 'var(--surface-ink)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--surface-ink)'
    },
    secondary: {
      background: 'var(--glass-bg)',
      color: 'var(--text-primary)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      boxShadow: 'var(--shadow-card)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    link: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: 'none',
      padding: 0,
      minHeight: 0,
      textDecoration: 'underline',
      textDecorationColor: 'var(--border-default)',
      textUnderlineOffset: '4px'
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      minHeight: 44,
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '-.005em',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-default)',
      ...SIZES[size],
      ...variants[variant],
      ...style
    }
  }), signalDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--accent)',
      boxShadow: '0 0 0 3px var(--accent-glow)',
      flex: '0 0 auto'
    }
  }), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7,
      fontFamily: 'var(--font-mono)'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: 'var(--space-5)',
  md: 'var(--space-6)',
  lg: 'var(--space-8)'
};
const RAD = {
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)'
};
function GlassCard({
  padding = 'md',
  radius = 'lg',
  active = false,
  tone = 'glass',
  style,
  children,
  ...rest
}) {
  const tones = {
    glass: {
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      boxShadow: 'var(--shadow-glass)'
    },
    solid: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-card)'
    },
    ink: {
      background: 'var(--surface-ink)',
      border: '1px solid var(--border-inverse)',
      color: 'var(--text-inverse)',
      boxShadow: 'var(--shadow-lift)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: RAD[radius] || radius,
      padding: PAD[padding] || padding,
      transition: 'border-color var(--dur-mid) var(--ease-out), box-shadow var(--dur-mid) var(--ease-out)',
      ...tones[tone],
      ...(active ? {
        borderColor: 'var(--border-active)'
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  shipped: {
    background: 'rgba(255,255,255,.56)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-default)',
    dot: 'var(--text-secondary)'
  },
  signal: {
    background: 'var(--accent-soft)',
    color: 'var(--signal-deep)',
    border: '1px solid var(--border-active)',
    dot: 'var(--accent)'
  },
  neutral: {
    background: 'transparent',
    color: 'var(--text-meta)',
    border: '1px solid var(--border-default)',
    dot: 'var(--text-meta)'
  }
};
function StatusChip({
  children,
  tone = 'shipped',
  dot = true,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.shipped;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      background: t.background,
      color: t.color,
      border: t.border,
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: t.dot,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/core/ThinkingTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ThinkingTag({
  label,
  index,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: active ? 'var(--signal-deep)' : 'var(--text-meta)',
      ...style
    }
  }), active && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: 'var(--accent)',
      boxShadow: '0 0 0 4px var(--accent-glow)',
      flex: '0 0 auto'
    }
  }), index ? label + ' / ' + index : label);
}
Object.assign(__ds_scope, { ThinkingTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThinkingTag.jsx", error: String((e && e.message) || e) }); }

// components/layout/CaseStudySection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseStudySection({
  number,
  label,
  title,
  lede,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(150px,1fr) minmax(0,3fr)',
      gap: 'var(--space-10)',
      paddingBlock: 'var(--space-20)',
      borderTop: '1px solid var(--border-default)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: label,
    index: number
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semi)',
      lineHeight: 'var(--leading-h2)',
      letterSpacing: 'var(--tracking-h2)',
      maxWidth: '26ch'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '58ch'
    }
  }, lede), children));
}
Object.assign(__ds_scope, { CaseStudySection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CaseStudySection.jsx", error: String((e && e.message) || e) }); }

// components/layout/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  number,
  title,
  transformation,
  tags = [],
  status,
  year,
  tone = 'glass',
  href,
  artefact,
  onClick,
  style,
  ...rest
}) {
  const dark = tone === 'ink';
  const surface = dark ? {
    background: 'var(--surface-ink)',
    border: '1px solid var(--border-inverse)',
    color: 'var(--text-inverse)',
    boxShadow: 'var(--shadow-lift)'
  } : {
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    backdropFilter: 'blur(var(--blur-glass))',
    WebkitBackdropFilter: 'blur(var(--blur-glass))',
    boxShadow: 'var(--shadow-glass)'
  };
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      padding: 'var(--space-8)',
      borderRadius: 'var(--radius-lg)',
      textDecoration: 'none',
      cursor: href || onClick ? 'pointer' : 'default',
      transition: 'var(--transition-default)',
      ...surface,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--accent)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: dark ? 'rgba(247,247,244,.5)' : 'var(--text-meta)'
    }
  }, year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-semi)',
      lineHeight: 'var(--leading-h3)',
      letterSpacing: 'var(--tracking-h3)',
      maxWidth: '24ch',
      color: 'inherit'
    }
  }, title), transformation && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-body)',
      color: dark ? 'rgba(247,247,244,.68)' : 'var(--text-secondary)',
      maxWidth: '42ch'
    }
  }, transformation), artefact && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4px 0'
    }
  }, artefact), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      marginTop: 'auto',
      paddingTop: 'var(--space-4)',
      borderTop: dark ? '1px solid var(--border-inverse)' : '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: dark ? 'rgba(247,247,244,.6)' : 'var(--text-meta)'
    }
  }, tags.join(' \u00b7 ')), status && /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    tone: status === 'IN DISCOVERY' ? 'signal' : 'shipped',
    style: dark && status !== 'IN DISCOVERY' ? {
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(247,247,244,.8)',
      border: '1px solid var(--border-inverse)'
    } : undefined
  }, status)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteNav({
  mark = 'NP',
  items = [],
  active,
  onNavigate,
  contactLabel = 'CONTACT',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      padding: 'var(--space-5) var(--page-pad)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-body-sm)',
      letterSpacing: 'var(--tracking-mono)',
      fontWeight: 'var(--weight-medium)'
    }
  }, mark), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate && onNavigate(it.id),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 0',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-meta)',
        letterSpacing: 'var(--tracking-mono)',
        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderBottom: isActive ? '1px solid var(--accent)' : '1px solid transparent',
        transition: 'var(--transition-default)'
      }
    }, it.label, it.external ? ' \u2197' : '');
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    signalDot: true,
    onClick: () => onNavigate && onNavigate('contact'),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)'
    }
  }, contactLabel)));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteNav.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/AnnotatedEvidence.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AnnotatedEvidence({
  claim,
  annotations = [],
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "CLAIM"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.25,
      letterSpacing: 'var(--tracking-h3)',
      maxWidth: '34ch'
    }
  }, claim)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "EVIDENCE"
  }), /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    padding: "sm",
    radius: "md",
    style: {
      overflow: 'hidden'
    }
  }, children)), annotations.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)'
    }
  }, annotations.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      borderTop: '1px solid var(--border-default)',
      paddingTop: 'var(--space-3)',
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--signal-deep)'
    }
  }, a.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, a.note)))));
}
Object.assign(__ds_scope, { AnnotatedEvidence });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/AnnotatedEvidence.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/DecisionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Row({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: label
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-body)'
    }
  }, children));
}
function DecisionCard({
  index,
  decision,
  why,
  tradeOff,
  evidence,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, _extends({
    padding: "lg",
    active: true
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "DECISION",
    index: index,
    active: true
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-semi)',
      lineHeight: 'var(--leading-h3)',
      letterSpacing: 'var(--tracking-h3)',
      maxWidth: '30ch'
    }
  }, decision), why && /*#__PURE__*/React.createElement(Row, {
    label: "WHY"
  }, why), tradeOff && /*#__PURE__*/React.createElement(Row, {
    label: "TRADE-OFF"
  }, tradeOff), evidence && /*#__PURE__*/React.createElement(Row, {
    label: "EVIDENCE"
  }, evidence));
}
Object.assign(__ds_scope, { DecisionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/DecisionCard.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/OutcomeMetric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OutcomeMetric({
  index,
  metric,
  context,
  tone = 'plain',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "OUTCOME",
    index: index,
    active: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semi)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-h2)',
      color: tone === 'signal' ? 'var(--signal-deep)' : 'var(--text-primary)'
    }
  }, metric), context && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-meta)',
      lineHeight: 1.5
    }
  }, context));
}
Object.assign(__ds_scope, { OutcomeMetric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/OutcomeMetric.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/ReasoningTrace.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Node({
  label,
  note,
  active,
  inverse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: active ? 'var(--accent)' : inverse ? 'rgba(247,247,244,.45)' : 'var(--text-meta)',
      boxShadow: active ? '0 0 0 5px var(--accent-glow)' : 'none',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      whiteSpace: 'nowrap',
      color: active ? 'var(--signal-deep)' : inverse ? 'rgba(247,247,244,.75)' : 'var(--text-primary)'
    }
  }, label)), note && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 22,
      fontSize: 'var(--text-body-sm)',
      color: inverse ? 'rgba(247,247,244,.6)' : 'var(--text-secondary)'
    }
  }, note));
}
function ReasoningTrace({
  steps = [],
  converge,
  decision,
  result,
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  if (converge) {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        ...style
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, converge.map((s, i) => /*#__PURE__*/React.createElement(Node, {
      key: i,
      label: s.label,
      note: s.note,
      active: s.active,
      inverse: inverse
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--border-default)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 1,
        background: 'var(--border-default)'
      }
    }), decision && /*#__PURE__*/React.createElement(Node, {
      label: decision,
      active: true,
      inverse: inverse
    }), result && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 1,
        background: 'var(--border-default)'
      }
    }), /*#__PURE__*/React.createElement(Node, {
      label: result,
      inverse: inverse
    })));
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }), steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement(Node, {
    label: s.label,
    note: s.note,
    active: s.active,
    inverse: inverse
  }), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 'var(--space-5)',
      background: inverse ? 'var(--border-inverse)' : 'var(--border-default)',
      marginLeft: 3
    }
  }))));
}
Object.assign(__ds_scope, { ReasoningTrace });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/ReasoningTrace.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/SurfaceRootProblem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SurfaceRootProblem({
  surface,
  root,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 'var(--space-6)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "WHAT IT LOOKED LIKE"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.3,
      letterSpacing: '-.02em',
      color: 'var(--text-meta)'
    }
  }, surface)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--accent)',
      boxShadow: '0 0 0 5px var(--accent-glow)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--border-default)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "WHAT WAS ACTUALLY HAPPENING",
    active: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.3,
      letterSpacing: '-.02em',
      color: 'var(--text-primary)'
    }
  }, root)));
}
Object.assign(__ds_scope, { SurfaceRootProblem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/SurfaceRootProblem.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/SystemFlow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SystemFlow({
  stages = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }), stages.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: s.active ? 'var(--signal-deep)' : 'var(--text-primary)',
      minWidth: 140,
      flex: '0 0 auto'
    }
  }, s.label), s.items && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, s.items.join(' \u00b7 ')), s.value && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-body-sm)',
      color: s.active ? 'var(--signal-deep)' : 'var(--text-primary)'
    }
  }, s.value)), i < stages.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--border-default)',
      margin: '8px 0 8px 3px'
    }
  }))));
}
Object.assign(__ds_scope, { SystemFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/SystemFlow.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/TradeOffState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TradeOffState({
  index,
  statement,
  context,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, _extends({
    padding: "md",
    active: true
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "TRADE-OFF",
    index: index,
    active: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.25,
      letterSpacing: '-.02em',
      maxWidth: '24ch'
    }
  }, statement), context && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, context), action && /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    tone: "signal",
    dot: false
  }, action));
}
Object.assign(__ds_scope, { TradeOffState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/TradeOffState.jsx", error: String((e && e.message) || e) }); }

// components/reasoning/UnknownCheck.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function UnknownCheck({
  index,
  statement,
  chip = 'NEEDS HUMAN CHECK',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, _extends({
    padding: "md"
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ThinkingTag, {
    label: "UNKNOWN",
    index: index,
    active: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.25,
      letterSpacing: '-.02em',
      maxWidth: '24ch',
      color: 'var(--text-primary)'
    }
  }, statement), chip && /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    tone: "signal",
    dot: false
  }, chip));
}
Object.assign(__ds_scope, { UnknownCheck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reasoning/UnknownCheck.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
const {
  GlassCard,
  ThinkingTag,
  Button,
  ReasoningTrace,
  CaseStudySection
} = window.NicolePhanPortfolioDesignSystem_4bdb97;
function AboutScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad) var(--space-30)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: 'var(--space-16)',
      paddingBlock: 'var(--space-20)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "ABOUT"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-semi)',
      lineHeight: 'var(--leading-h1)',
      letterSpacing: 'var(--tracking-h1)',
      maxWidth: '22ch'
    }
  }, "Business analysis, product and digital delivery."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, "I work across customer, business, operational, data and technology signals \u2014 understanding how they relate, making decisions, and turning them into practical digital systems."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    signalDot: true
  }, "Email"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "\u2197"
  }, "Resume"))), /*#__PURE__*/React.createElement(GlassCard, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "HOW I WORK"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ReasoningTrace, {
    steps: [{
      label: 'COMPLEXITY',
      note: 'Signals from customers, operations and systems'
    }, {
      label: 'STRUCTURE',
      note: 'Name the constraints, write down what is known'
    }, {
      label: 'DECISION',
      note: 'Choose, and record the trade-off',
      active: true
    }, {
      label: 'WORKING SYSTEM',
      note: 'Ship it, then watch what it changes'
    }]
  })))), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "01",
    label: "PRINCIPLES"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, [['Reasoning before decoration', 'Every visual should communicate a relationship, a decision or a piece of evidence.'], ['Calm complexity', 'Show complexity, but always preserve hierarchy.'], ['Show judgement', 'Prioritise decisions and trade-offs over feature lists.'], ['Evidence over claims', 'Support major claims with artefacts, data, process or defensible outcomes.']].map(([t, d], i) => /*#__PURE__*/React.createElement(GlassCard, {
    key: t,
    padding: "md",
    tone: i === 2 ? 'glass' : 'solid',
    active: i === 2
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: '0' + (i + 1)
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 8px',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-semi)',
      letterSpacing: 'var(--tracking-h3)',
      lineHeight: 'var(--leading-h3)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, d))))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  GlassCard,
  Button,
  StatusChip,
  ThinkingTag,
  ReasoningTrace,
  ProjectCard,
  OutcomeMetric,
  TradeOffState,
  UnknownCheck
} = window.NicolePhanPortfolioDesignSystem_4bdb97;
const PROJECTS = [{
  id: 'rumi',
  number: '01',
  title: 'Rumi',
  transformation: 'AI-assisted enquiry handling',
  tags: ['AI', 'Product', 'Workflow Automation'],
  status: 'SHIPPED',
  year: '2026',
  tone: 'ink'
}, {
  id: 'website',
  number: '02',
  title: 'Website Redesign',
  transformation: 'Rebuilding the customer journey from discovery to enquiry',
  tags: ['Customer Experience', 'Web Product', 'Digital Delivery'],
  status: 'SHIPPED',
  year: '2025'
}, {
  id: 'portal',
  number: '03',
  title: 'Tenant Portal Redesign',
  transformation: 'Improving tenant self-service within StarRez PortalX',
  tags: ['Service Design', 'SaaS Platform', 'Customer Experience'],
  status: 'SHIPPED',
  year: '2025'
}, {
  id: 'hub',
  number: '04',
  title: 'Operational Hub',
  transformation: 'Designing a connected operating system for property operations',
  tags: ['Product Discovery', 'Systems Thinking', 'Operations'],
  status: 'IN DISCOVERY',
  year: '2026'
}];
function HeroEvidence() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(UnknownCheck, {
    index: "01",
    statement: "Female-only requirement could not be confirmed."
  }), /*#__PURE__*/React.createElement(TradeOffState, {
    index: "02",
    statement: "$60 above weekly budget but strongest room fit.",
    action: "AI EXPLAINS THE COMPROMISE"
  }), /*#__PURE__*/React.createElement(GlassCard, {
    padding: "md",
    tone: "solid",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(OutcomeMetric, {
    index: "03",
    metric: "5\u20137 min \u2192 <1 min",
    context: /*#__PURE__*/React.createElement(React.Fragment, null, "manual analysis", /*#__PURE__*/React.createElement("br", null), "with Rumi")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-meta)',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", null, "41 candidates"), /*#__PURE__*/React.createElement("span", null, "15 after rules"), /*#__PURE__*/React.createElement("span", null, "6 viable"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signal-deep)'
    }
  }, "3 AI picks"))));
}
function HomeScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad) var(--space-30)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)',
      gap: 'var(--space-16)',
      alignItems: 'center',
      paddingBlock: 'var(--space-24) var(--space-30)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "BUSINESS ANALYSIS \xD7 PRODUCT \xD7 DIGITAL SYSTEMS"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-hero)',
      fontWeight: 'var(--weight-semi)',
      lineHeight: 'var(--leading-hero)',
      letterSpacing: 'var(--tracking-hero)'
    }
  }, "I make sense of", /*#__PURE__*/React.createElement("br", null), "messy problems."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "I connect customer needs, business realities and technology to turn ambiguity into practical digital products and systems."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "LinkedIn"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Email"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "\u2197"
  }, "Resume"))), /*#__PURE__*/React.createElement(HeroEvidence, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)',
      paddingBlock: 'var(--space-16)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semi)',
      letterSpacing: 'var(--tracking-h2)',
      lineHeight: 'var(--leading-h2)'
    }
  }, "Selected work"), /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "FOUR PROJECTS"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.id
  }, p, {
    onClick: () => p.id === 'rumi' && onOpen('rumi'),
    artefact: p.id === 'rumi' ? /*#__PURE__*/React.createElement(ReasoningTrace, {
      tone: "inverse",
      steps: [{
        label: 'GUIDED ENQUIRY'
      }, {
        label: 'PROCESSING BOTTLENECK'
      }, {
        label: 'RUMI',
        active: true
      }]
    }) : p.id === 'hub' ? /*#__PURE__*/React.createElement(ReasoningTrace, {
      steps: [{
        label: 'CURRENT STATE'
      }, {
        label: 'OPERATING MODEL',
        active: true
      }, {
        label: 'ROADMAP'
      }]
    }) : null,
    style: p.id === 'rumi' ? {
      cursor: 'pointer'
    } : undefined
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-meta)'
    }
  }, "01 \u2014 RUMI IS OPEN IN THIS PROTOTYPE")), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(150px,1fr) minmax(0,3fr)',
      gap: 'var(--space-10)',
      paddingBlock: 'var(--space-20)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "HOW I WORK"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-semi)',
      letterSpacing: 'var(--tracking-h3)',
      lineHeight: 'var(--leading-h3)',
      maxWidth: '22ch'
    }
  }, "Structure the problem before automating it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      maxWidth: '44ch'
    }
  }, "Rules where the business already knows the answer. AI where judgement, synthesis and explanation add value.")), /*#__PURE__*/React.createElement(ReasoningTrace, {
    converge: [{
      label: 'CUSTOMER SIGNAL'
    }, {
      label: 'BUSINESS CONSTRAINT'
    }, {
      label: 'OPERATIONAL REALITY'
    }],
    decision: "DECISION",
    result: "WORKING SYSTEM"
  }))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-10)',
      paddingBlock: 'var(--space-20)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "CONTACT"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semi)',
      letterSpacing: 'var(--tracking-h2)',
      lineHeight: 'var(--leading-h2)',
      maxWidth: '20ch'
    }
  }, "Happy to talk through a messy problem.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    signalDot: true
  }, "Email"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "\u2197"
  }, "LinkedIn"))));
}
Object.assign(window, {
  HomeScreen,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/RumiCaseStudy.jsx
try { (() => {
const {
  GlassCard,
  Button,
  StatusChip,
  ThinkingTag,
  ReasoningTrace,
  SystemFlow,
  DecisionCard,
  SurfaceRootProblem,
  OutcomeMetric,
  AnnotatedEvidence,
  CaseStudySection,
  UnknownCheck
} = window.NicolePhanPortfolioDesignSystem_4bdb97;
function Artefact({
  label,
  height = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius-md)',
      background: 'repeating-linear-gradient(135deg,rgba(20,25,28,.045) 0 10px,transparent 10px 20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-meta)'
    }
  }, label);
}
function RumiCaseStudy({
  onBack
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad) var(--space-30)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      paddingBlock: 'var(--space-16) var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: onBack,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--text-secondary)'
    }
  }, "\u2190 BACK TO WORK"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "01 / RUMI"
  }), /*#__PURE__*/React.createElement(StatusChip, null, "SHIPPED"), /*#__PURE__*/React.createElement(StatusChip, {
    tone: "neutral",
    dot: false
  }, "LIVE SYSTEM")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-semi)',
      lineHeight: 'var(--leading-h1)',
      letterSpacing: 'var(--tracking-h1)',
      maxWidth: '24ch'
    }
  }, "AI-assisted enquiry handling"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(OutcomeMetric, {
    index: "01",
    metric: "41 \u2192 3",
    context: /*#__PURE__*/React.createElement(React.Fragment, null, "room candidates", /*#__PURE__*/React.createElement("br", null), "to AI picks")
  })), /*#__PURE__*/React.createElement(GlassCard, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(OutcomeMetric, {
    index: "02",
    metric: "5\u20137 min \u2192 <1 min",
    context: /*#__PURE__*/React.createElement(React.Fragment, null, "manual analysis", /*#__PURE__*/React.createElement("br", null), "with Rumi")
  })), /*#__PURE__*/React.createElement(GlassCard, {
    padding: "md",
    active: true
  }, /*#__PURE__*/React.createElement(OutcomeMetric, {
    index: "03",
    metric: "Human decision",
    context: /*#__PURE__*/React.createElement(React.Fragment, null, "accountability stays", /*#__PURE__*/React.createElement("br", null), "with the team"),
    tone: "signal"
  })))), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "01",
    label: "SITUATION",
    title: "Traffic was healthy. Meaningful enquiry was not.",
    lede: "The website brought volume. What arrived was rarely enough to answer well, so every enquiry became a manual investigation."
  }, /*#__PURE__*/React.createElement(ReasoningTrace, {
    steps: [{
      label: 'HIGH WEBSITE TRAFFIC'
    }, {
      label: 'LOW MEANINGFUL ENQUIRY'
    }, {
      label: 'GUIDED ENQUIRY'
    }, {
      label: 'BETTER STRUCTURED INFORMATION'
    }, {
      label: 'NEW PROCESSING BOTTLENECK',
      active: true
    }, {
      label: 'RUMI'
    }]
  })), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "02",
    label: "PROBLEM"
  }, /*#__PURE__*/React.createElement(SurfaceRootProblem, {
    surface: "\u201CWe need more enquiries.\u201D",
    root: "\u201CProspects did not understand which accommodation suited them.\u201D"
  })), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "03",
    label: "DISCOVERY",
    title: "What the team was actually doing by hand"
  }, /*#__PURE__*/React.createElement(AnnotatedEvidence, {
    claim: "Location meant something different for students and working professionals.",
    annotations: [{
      label: 'STUDENT',
      note: 'Campus commute'
    }, {
      label: 'PROFESSIONAL',
      note: 'Suburb proximity'
    }]
  }, /*#__PURE__*/React.createElement(Artefact, {
    label: "CROPPED ARTEFACT \u2014 LOCATION RANKING"
  }))), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "04",
    label: "DECISIONS & TRADE-OFFS"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(DecisionCard, {
    index: "01",
    decision: "Structure the problem before automating it.",
    why: "An unstructured process automates its own confusion.",
    tradeOff: "Slower start, but the logic became reviewable."
  }), /*#__PURE__*/React.createElement(DecisionCard, {
    index: "02",
    decision: "Rules first. AI where judgement adds value.",
    why: "Known business constraints should not depend on probabilistic interpretation.",
    tradeOff: "More logic to define and maintain, but greater consistency and explainability."
  }))), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "05",
    label: "SOLUTION",
    title: "Matching architecture",
    lede: "Feasibility narrows the field on business rules. Fit ranks what is left. The model reasons and explains; the human decides."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
      gap: 'var(--grid-gap)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(SystemFlow, {
    stages: [{
      label: '41 ROOM CANDIDATES'
    }, {
      label: 'FEASIBILITY',
      items: ['Lease', 'Category', 'Occupancy', 'Availability'],
      value: '41 → 15'
    }, {
      label: 'FIT',
      items: ['Location', 'Price', 'Room fit', 'Special requirements'],
      value: '15 → 6'
    }, {
      label: 'RANK'
    }, {
      label: 'LLM REASONING',
      value: '6 → 3',
      active: true
    }, {
      label: 'HUMAN DECISION'
    }, {
      label: 'CUSTOMER-READY RESPONSE'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(UnknownCheck, {
    index: "01",
    statement: "Female-only requirement could not be confirmed."
  }), /*#__PURE__*/React.createElement(GlassCard, {
    padding: "md",
    tone: "ink"
  }, /*#__PURE__*/React.createElement(ThinkingTag, {
    label: "PRINCIPLE",
    style: {
      color: 'rgba(247,247,244,.55)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.3,
      letterSpacing: '-.02em'
    }
  }, "Automate the analysis, not the accountability."))))), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "06",
    label: "MAKING IT REAL",
    title: "Where the human stayed in the loop",
    lede: "Every unknown surfaces as a decision point. Every recommendation carries the reason it was made, in language the team can send on."
  }, /*#__PURE__*/React.createElement(Artefact, {
    label: "SANITISED WORKFLOW \u2014 REVIEW AND SEND",
    height: 220
  })), /*#__PURE__*/React.createElement(CaseStudySection, {
    number: "07",
    label: "REFLECTION",
    lede: "The hardest part was not the model. It was agreeing what the business already knew, writing it down as rules, and being honest about what remained a judgement call."
  }));
}
Object.assign(window, {
  RumiCaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/RumiCaseStudy.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.ThinkingTag = __ds_scope.ThinkingTag;

__ds_ns.CaseStudySection = __ds_scope.CaseStudySection;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.AnnotatedEvidence = __ds_scope.AnnotatedEvidence;

__ds_ns.DecisionCard = __ds_scope.DecisionCard;

__ds_ns.OutcomeMetric = __ds_scope.OutcomeMetric;

__ds_ns.ReasoningTrace = __ds_scope.ReasoningTrace;

__ds_ns.SurfaceRootProblem = __ds_scope.SurfaceRootProblem;

__ds_ns.SystemFlow = __ds_scope.SystemFlow;

__ds_ns.TradeOffState = __ds_scope.TradeOffState;

__ds_ns.UnknownCheck = __ds_scope.UnknownCheck;

})();
