//  @type {import('tailwindcss').Config}
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//         fontFamily: {
//              'custom': [ 'Sevillana', 'cursive']
            
//           },
//       extend: {},
//     },
//     plugins: [],
//   }
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
         'poppins': ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [],
  };