# Authority LinkedIn Consulting

A professional landing page for LinkedIn Authority consulting services with integrated Google Sheets form submission.

## Features

✅ **Fully Responsive Design** - Works on desktop, tablet, and mobile devices
✅ **Interactive Components** - Animated cards, expandable FAQs, smooth scrolling
✅ **Google Sheets Integration** - Form submissions automatically saved to Google Sheets
✅ **Modern UI** - Clean, professional design with smooth transitions
✅ **Fast & Lightweight** - Single HTML file, no dependencies

## Sections

- **Hero Section** - Eye-catching headline with value proposition
- **Social Proof** - Trust badges and success metrics
- **Services** - Four pillars of LinkedIn authority
- **Free Audit Section** - Special offer with "Coming Soon" badge
- **Timeline** - 90-day transformation blueprint
- **Lead Form** - Name, Email, Phone collection
- **3-Step Process** - Discovery, Design, Deploy framework
- **Testimonials** - Client success stories and reviews
- **FAQ Section** - Interactive accordion with 10 questions
- **Footer** - Links and social connections

## How It Works

1. Users fill the form (Name, Email, Phone)
2. Form submits to Google Apps Script
3. Data automatically saves to Google Sheets
4. Timestamp (IST) recorded for each submission

## Deployment

Deployed on **Vercel** for fast, reliable hosting.

**Live Site:** https://authority-linkedin.vercel.app

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Google Apps Script
- **Database:** Google Sheets
- **Hosting:** Vercel

## Form Submission Flow
User fills form
↓
JavaScript sends data to AppScript
↓
AppScript processes & validates
↓
Data saves to Google Sheets
↓
Success message shown to user


## Files

- `index.html` - Complete landing page (HTML + CSS + JavaScript)
- `Code.gs` - Google Apps Script for form handling

## Setup Instructions

### 1. Deploy Google Apps Script

1. Go to `script.google.com`
2. Create new project
3. Paste `Code.gs` code
4. Deploy as Web App
5. Copy deployment URL

### 2. Update HTML

1. In `index.html`, find: `const SCRIPT_URL`
2. Replace with your deployment URL

### 3. Deploy on Vercel

1. Push code to GitHub
2. Connect Vercel to your GitHub repo
3. Deploy automatically

## Google Sheets Setup

Create a new Google Sheet named `Authority Lead Responses`:
- The script automatically creates a "Responses" tab
- Headers: Timestamp, Name, Email, Phone
- Data appends automatically on form submission

## Customization

You can customize:
- Brand colors (update CSS variables)
- Content and copy
- Pricing information
- Company details
- Social media links

## Browser Compatibility

✅ Chrome, Firefox, Safari, Edge (all modern versions)
✅ Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **Page Load Time:** < 1 second
- **Form Submission:** Instant with no-cors
- **Mobile Optimized:** Full responsive design

## License

MIT License - Feel free to use and modify

## Support

For issues or questions, contact the repository owner.

---

**Created with ❤️ for LinkedIn Authority Consulting**
