# Tranzyte Landing Page - React

A modern, animated landing page for Tranzyte School of Transport & Logistics Excellence, built with React and Framer Motion.

## 🎯 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and scroll effects
- **CSS Modules** - Component-scoped styling

## 📁 Project Structure

```
tranzyte-react/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Header.css
│   │   ├── RoadBackground.jsx  # Animated background
│   │   ├── RoadBackground.css
│   │   ├── Footer.jsx       # Footer component
│   │   └── Footer.css
│   ├── sections/            # Page sections
│   │   ├── Home.jsx         # Hero section
│   │   ├── Home.css
│   │   ├── About.jsx        # Features/Why Choose section
│   │   ├── About.css
│   │   ├── Courses.jsx      # Course listings
│   │   ├── Courses.css
│   │   ├── WhoWeServe.jsx   # Target audience
│   │   ├── WhoWeServe.css
│   │   ├── Enroll.jsx       # CTA section
│   │   └── Enroll.css
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd tranzyte-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 🎨 Design Features

- **Animated Road Background**: Kinetic background with moving lane markers
- **Scroll Animations**: Framer Motion animations triggered on scroll
- **Responsive Design**: Works on all device sizes
- **Component Architecture**: Clean, maintainable React components
- **Color Scheme**: Deep Blue (#0A2463) + Safety Orange (#FF8C00)

## 📦 Key Components

### Header
- Sticky navigation
- Custom logo recreation
- Smooth scroll links

### RoadBackground
- Animated lane markers
- 3D perspective effect
- Continuous loop animation

### Sections
- **Home**: Hero with CTAs
- **About**: 6 feature cards with icons
- **Courses**: 15 flagship courses
- **WhoWeServe**: 8 target audience personas
- **Enroll**: Final CTA section

## 🔧 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --deep-blue: #0A2463;
  --safety-orange: #FF8C00;
  --white: #FFFFFF;
  --light-bg: #F8F9FA;
}
```

### Content
Each section component has its data at the top of the file for easy editing.

### Animations
Adjust Framer Motion properties in individual components:
```jsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## 🌟 Future Enhancements

Since you're interested in **web3**, here are some ideas:

1. **Wallet Connection**: Add MetaMask/WalletConnect integration
2. **NFT Certificates**: Mint course completion certificates as NFTs
3. **On-chain Credentials**: Store certifications on blockchain
4. **Token Gating**: Exclusive courses for token holders
5. **DAO Governance**: Let community vote on new courses

### For Mobile Development:
Consider using **React Native** to reuse these components for a mobile app!

### For Backend Integration:
Connect to your **Spring Boot** API:
```jsx
// Example API call in a component
const enrollStudent = async (courseId) => {
  const response = await fetch('http://your-api.com/api/enroll', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courseId })
  });
  return response.json();
};
```

## 📝 License

Created for Tranzyte - School of Transport & Logistics Excellence, Nigeria
