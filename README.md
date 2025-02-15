# Gadget-Galaxy

Gadget-Galaxy is an online marketplace where users can buy and sell a wide variety of products. It operates as a classified ads platform, allowing individuals and businesses to post listings for items such as electronics, vehicles, real estate, jobs, and household goods.

## Features

### Buy & Sell
- Follows a simple peer-to-peer (P2P) model.
- Enables direct communication between buyers and sellers without intermediaries.

### User Profiles
- Allows users to create, edit, and personalize profiles.
- Users can manage their products as needed.

### Community Interaction
- Users can contact sellers via phone calls or chat messages.
- Individual buyers & sellers do not have a rating system.
- Verified businesses can receive reviews & feedback.

## Getting Started

### Prerequisites
Ensure you have the following installed:

- Node.js (>= 14)
- npm (>= 6) or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Bidyut-Sikder/bikroyFrontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd gadget-galaxy
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server
Start the Vite development server:
```sh
npm run dev
```

The application will be available at `http://localhost:5173/` by default.

### Building for Production
To create an optimized production build:
```sh
npm run build
```
The output will be in the `dist/` directory.

### Preview the Production Build
To preview the production build locally:
```sh
npm run preview
```

### Deploying to GitHub Pages
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to GitHub Pages:
   ```sh
   npm run deploy
   ```

## Project Structure
```
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Application pages
│   ├── skeleton/       # Images and static files
│   ├── styles/       # Tailwind CSS styles     
│   ├── store/        # Zustand state management
│   ├── utility/        # Utility functions
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Application entry point
├── public/           # Static assets
├── package.json      # Project dependencies and scripts
├── vite.config.ts    # Vite configuration
```

## Scripts
- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build
- `npm run start` - Alias for `vite`
- `npm run css` - Watches Tailwind CSS changes and compiles
- `npm run lint` - Runs ESLint for code linting
- `npm run deploy` - Deploys the app to GitHub Pages

## Technologies Used
- **React** (Frontend Library)
- **Vite** (Build Tool)
- **Tailwind CSS** (Utility-First CSS Framework)
- **Zustand** (State Management)
- **Axios** (HTTP Requests)
- **Recharts** (Data Visualization)
- **Framer Motion & Lottie React** (Animations)
- **React Hook Form** (Form Handling)
- **SweetAlert2 & React Hot Toast** (Alerts & Notifications)

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.



