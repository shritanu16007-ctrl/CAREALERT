# CareAlert — AI-Powered Rural Health Triage

## Problem Statement 
In rural India, access to specialized healthcare is highly limited. Nurses on the ground often lack the immediate expertise to prioritize patients and identify critical conditions, causing dangerous delays in getting high-risk patients to the right doctors.

## What it does
- **Nurse Intake Form**: Ground-level nurses fill out a quick, mobile-friendly form capturing patient vitals, symptoms, and duration.
- **AI Triage**: The system queries Gemini AI instantly to analyze the symptoms, providing a likely condition, required specialist, and actionable recommendation, alongside assigning a priority risk level.
- **Auto-Allocation**: Uses OpenStreetMap GPS logic to automatically pair the patient with the nearest hospital/clinic.
- **Doctor Dashboard**: Physicians monitor an auto-refreshing dashboard outlining all patients ordered gracefully by risk, allowing instant action to be taken via "Call Patient" or "Schedule Visit" queues.

## How we built it
- **Frontend Core**: HTML, CSS, JavaScript (Vanilla, Zero Heavy JS Frameworks needed!)
- **Styling**: Tailwind CSS for gorgeous, responsive, mobile-first designs.
- **APIs**: Gemini API for intelligent medical triage, Leaflet.js and Overpass API for geolocation.
- **Storage**: `localStorage` (via custom `data.js` abstraction) mimicking real-time database capabilities locally.
- **Deployment Strategy**: Vercel for fast edge delivery.
- **AI Coding Integration**: Built alongside Google Antigravity.

## Challenges we faced
Structuring prompt constraints for the Gemini API model to ensure it always outputted clean JSON was initially tricky, requiring strict system directives. Navigating OpenStreetMap Overpass queries and building out a seamless translation UI purely relying on DOM-tree traversing instead of heavy internationalization wrappers were fascinating UI/UX challenges solved.

## What makes it innovative
- **Tamil Language Support (தமிழ்)**: Built specifically for rural nurses, enabling single-click toggle translating the entire app dynamically into native Tamil!
- **Offline-First Thinking**: Uses lightweight `localStorage` mappings so it handles intermittent connectivity and can sync easily when back online without crashing forms.
- **Zero Backend**: Radically simple architecture—operating purely via intelligent edge-based API interactions without a bulky backend server, minimizing server costs and failure points.

## How to run locally
1. Clone the repository to your local machine.
2. Ensure you have the folder containing `index.html`, `doctor.html`, and `data.js`.
3. You do not need any build steps! Simply open `index.html` natively in any modern web browser or serve it with a local static server like `npx serve .` or Live Server.

## Screenshots 
[Add screenshots here]

## Built with Google Antigravity at [Hackathon Name]
