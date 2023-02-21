module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "200px",
      },

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1368px",
        // => @media (min-width: 1536px) { ... }
      },

      height: {
        100: "800px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

/**
 * preflight giúp bỏ đi style cố định của tailwind
 */
