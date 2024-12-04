const data = [{
                name : "Dandelions",
                src : "./assets/song/Dandelions(PagalNew.Com.Se).mp3",
                image : "./assets/img/a6c65ab3a34710849e126359a707b37d.jpg",
                bgImage : "./assets/img/wallpaperflare.com_wallpaper (1).jpg"
            },
            {
                name : "Losing Interest",
                src : "./assets/song/Shiloh_Dynasty_Itssvd_-_Losing_Interest(impuremusic.com).mp3",
                image : "./assets/img/wallpaperflare.com_wallpaper (5).jpg",
                bgImage : "./assets/img/wallpaperflare.com_wallpaper (3).jpg"
            },
            {
                name : "",
                src : "",
                image : "./assets/img/wallpaperflare.com_wallpaper (7).jpg",
                bgImage : "./assets/img/wallpaperflare.com_wallpaper (2).jpg"
            }
]

const container = document.querySelector('.container');
const coverImage = document.getElementById('cover-image');

container.style.backgroundImage = `url('${data[0].bgImage}')`;
coverImage.src = `${data[0].image}`;