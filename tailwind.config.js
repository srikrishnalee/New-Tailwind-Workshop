module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors:{
        'bookmark-purple':"#800080",
        'bookmark-red':"#FA5959",
        'bookmark-blue':"#242A45",
        'bookmark-grey':"#9194A2",
        'bookmark-white':"#f7f7f7",
      }
    },
    fontFamily:{
      poppins:["Poppins,sans-serif"]
    },
    container: {
      center: true,
      padding:'4rem',
      screens:{
        lg:"1124px",
        x1:"1124px",
        "2xl":"1124px",
      },
    },
  },
  plugins: [],
}
