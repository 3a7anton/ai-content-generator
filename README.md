# AI Content Generator Dashboard

This is a code bundle for AI Content Generator Dashboard. The original project is available at https://www.figma.com/design/97GIAOSpOVZda1zfbKNlNR/AI-Content-Generator-Dashboard.

## Technologies Used

This project is built with modern web technologies:

- **Frontend Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite 6.3.5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: 
  - [Radix UI primitives](https://www.radix-ui.com/) for accessible UI components
  - [lucide-react](https://lucide.dev/) for icons
- **Forms**: [react-hook-form](https://react-hook-form.com/) for form handling
- **Charts**: [recharts](https://recharts.org/) for data visualization
- **Additional Libraries**:
  - [sonner](https://sonner.emilkowal.dev/) for toast notifications
  - [embla-carousel-react](https://www.embla-carousel.com/) for carousel components
  - [next-themes](https://github.com/pacocoursey/next-themes) for dark mode theming
  - [input-otp](https://github.com/guilhermerodz/input-otp) for OTP input components
  - [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) for resizable layouts

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Building for Production

Run `npm run build` to create a production build. The output will be in the `build` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── figma/           # Image fallback utility
│   ├── ui/              # Reusable UI components
│   └── ...              # Main application components
├── guidelines/          # Project guidelines
├── styles/              # Global styles
├── App.tsx              # Main application component
├── main.tsx             # Entry point
└── index.css            # Global CSS
```

## Features

- AI content generation interface
- Generation history tracking
- Credit system overview
- Responsive design for all device sizes
- Dark/light mode support