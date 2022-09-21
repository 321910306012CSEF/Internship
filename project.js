//Navigation bar//
const menu = document.querySelector('.menu')
const navigation_bar = document.querySelector('.navigation_bar')

menu.addEventListener('click',()=>{
    navigation_bar.classList.toggle('change')
    menu.classList.toggle('change')
})

//Section 2 - video//
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = ()=>{
    if(video.paused){
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.opacity='0.7'
    }else{
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity='0.3'
    }
}

btn.addEventListener('click',()=>{
    playPause()
})

video.addEventListener('timeupdate',()=>{
    const barwidth = video.currentTime/video.duration
    bar.style.width = `${barwidth*100}%` 
    if(video.ended){
        btn.className='far fa-play-circle'
        video.style.opacity = 0.3
    }
})

