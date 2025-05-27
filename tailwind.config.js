/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
          blackAs: "#0D0D0D",
          greyAs: "#F3F3F3",
          greyLigthAs: "#CCCCCC",
          greyMedium:"#666666",
          azulAs: '#00D2F6',
          whiteAs: "#FFFFFF"
        },
        fontFamily: {
          sans: ["Ubuntu Mono", "sans-serif"],  
          especial: ["Roboto", "sans-serif"],      
        },
        boxShadow: {
          azulShadow: "0px 0px 20px 0px rgba(0, 210, 246, 0.5)",
          azulMedioShadow: "10px 10px 200px 150px rgba(0, 210, 246, 0.5)",
          MedioShadow: "10px 10px 200px 150px  rgba(204, 204, 204, 0.5) "
        }
    }
  },
  plugins: [],
}

