gsap.from(".btn", {rotation: 90, 
  x: 800, duration: 1.2, opacity: 0});

  const btn = document.querySelector('.btn')

  btn.addEventListener('click', () =>{
    axios.get('/api/nice-things').then((res) => {
      console.log(res.data)
    })
  })