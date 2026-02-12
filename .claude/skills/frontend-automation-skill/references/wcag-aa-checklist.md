# WCAG 2.1 Level AA Compliance Checklist

This checklist covers the key accessibility requirements your front-end should meet.

## Perceivable

### 1.1 Text Alternatives
- ✅ All images have descriptive alt text
- ✅ Icons have labels or aria-labels
- ✅ Complex graphics have long descriptions
- ✅ Background images have text alternatives

### 1.3 Adaptable
- ✅ Semantic HTML used (headings, lists, landmarks)
- ✅ Heading hierarchy logical (no skipped levels)
- ✅ Reading order makes sense when CSS disabled
- ✅ Instructions don't rely on shape/position/size alone

### 1.4 Distinguishable
- ✅ Text contrast ratio ≥ 4.5:1 (normal text)
- ✅ Text contrast ratio ≥ 3:1 (large text, UI components)
- ✅ No info conveyed by color alone
- ✅ Text can be resized to 200% without loss
- ✅ Reflow works at 320px width and vertical scrolling
- ✅ No audio plays automatically > 3 seconds

## Operable

### 2.1 Keyboard Accessible
- ✅ All functionality available via keyboard
- ✅ No keyboard trap (can always escape focus)
- ✅ Focus indicator visible on all interactive elements
- ✅ Focus order is logical (tab through page makes sense)

### 2.4 Navigable
- ✅ Page purpose clear from title
- ✅ Navigation consistent across pages
- ✅ Link text describes purpose (not "click here")
- ✅ Focus visible (not removed with CSS)
- ✅ Multiple ways to find content (search, site map, navigation)
- ✅ Skip navigation link available (for keyboard users)

### 2.5 Input Modalities
- ✅ All gestures have alternatives (not just swipe)
- ✅ Device motion not required for functionality
- ✅ Touch targets ≥ 44x44 CSS pixels

## Understandable

### 3.1 Readable
- ✅ Page language declared (`<html lang="en">`)
- ✅ Language changes marked with `lang` attribute
- ✅ No text abbreviations without explanation
- ✅ Unusual words explained or defined

### 3.2 Predictable
- ✅ Navigation consistent across pages
- ✅ Components behave consistently
- ✅ Changes don't happen without user action
- ✅ Focus change doesn't trigger unexpected action

### 3.3 Input Assistance
- ✅ Error messages are clear and specific
- ✅ Labels associated with form fields (`<label for="id">`)
- ✅ Required fields marked clearly
- ✅ Suggestions provided for errors
- ✅ Confirmation requested for important actions

## Robust

### 4.1 Compatible
- ✅ No duplicate IDs on page
- ✅ Proper HTML nesting (no div inside button, etc.)
- ✅ ARIA used correctly (not to fix HTML structure)
- ✅ Aria-labels don't duplicate visible text unnecessarily
- ✅ Status messages have proper `role="status"` or `aria-live`

---

## Quick Testing Checklist

Run these manual tests on your application:

### Keyboard Navigation
1. [ ] Tab through entire page - focus visible everywhere
2. [ ] Skip to main content link works
3. [ ] No keyboard traps - can escape any element
4. [ ] Modal dialogs can be closed with Escape key

### Screen Reader (use NVDA, JAWS, or VoiceOver)
1. [ ] Page title announced
2. [ ] Landmark regions announced (main, nav, footer)
3. [ ] Headings in logical order
4. [ ] Form labels announced with inputs
5. [ ] Button purposes clear
6. [ ] Alerts/notifications announced

### Visual
1. [ ] Zoom to 200% - no text cut off, layout intact
2. [ ] High contrast mode works
3. [ ] Focus indicators visible everywhere
4. [ ] No color-only instructions ("click the green button")

### Mobile/Touch
1. [ ] Touch targets ≥ 44x44 pixels
2. [ ] Gestures have alternatives
3. [ ] Zoom still works (not disabled)

---

## Common Issues and Fixes

| Issue | Fix | Severity |
|-------|-----|----------|
| Missing alt text | Add descriptive alt="" to images | Critical |
| Low contrast text | Increase contrast ratio to ≥4.5:1 | Critical |
| Keyboard inaccessible button | Use `<button>` or add keyboard handlers to `<div>` | Critical |
| No focus indicator | Add outline or highlight with CSS | Critical |
| Form label missing | Link label with `<label for="id">` | Critical |
| Heading skips levels | Use proper h1→h2→h3 hierarchy | Serious |
| No error messages | Show specific error text, not just red border | Serious |
| Color-only instruction | Add text alternative or icon | Serious |
| Heading is not semantic | Use `<h1>-<h6>`, not styled `<div>` | Moderate |
| Image lacks long description | Add detailed description for complex diagrams | Moderate |

---

## Tools for Testing

### Automated Scanning
- **Axe DevTools** - Browser extension, runs on pages
- **WAVE** - WebAIM tool, visual feedback
- **Lighthouse** - Built into Chrome DevTools

### Manual Testing
- **Screen readers**: NVDA (free), JAWS, VoiceOver (Mac)
- **Keyboard testing**: Tab, Shift+Tab, Enter, Escape
- **Zoom testing**: Browser zoom to 200%
- **Color contrast**: WebAIM Contrast Checker

### Testing Checklist Template

Save this for regular audits:

```markdown
## Accessibility Audit - [Date]

### Automated Checks (Axe)
- [ ] 0 violations
- [ ] Violations documented if any

### Keyboard Navigation
- [ ] All buttons accessible via Tab
- [ ] All links accessible via Tab
- [ ] No keyboard traps
- [ ] Focus visible throughout

### Screen Reader
- [ ] Page title announced
- [ ] Navigation landmarks clear
- [ ] Form labels associated
- [ ] Buttons have purpose

### Visual
- [ ] Contrast ratio ≥ 4.5:1
- [ ] Readable at 200% zoom
- [ ] Focus indicator visible
- [ ] Touch targets ≥ 44px

### Status
- [ ] WCAG 2.1 Level AA: PASS / FAIL
- [ ] Issues found: ___
```

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM Articles](https://webaim.org/)
- [Accessible Components Library](https://www.radix-ui.com/)
- [Next.js Accessibility](https://nextjs.org/docs/accessibility)
