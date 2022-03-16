import {v4 as uuidv4} from "uuid"

function chillHop() {
    return [
        {
            name : "Lose Her Way",
            cover : "https://chillhop.com/wp-content/uploads/2022/03/2ac741e8e52e0008d1fb9cbfcdacd2cf9eaef2db-300x300.jpg",
            artist : "C Y G N",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=31589",
            colors: ["#92CCEA","#30A137"],
            id : uuidv4(),
            active: true,
        },
         {
            name : "Tidings",
            cover : "https://i.scdn.co/image/ab67616d0000b2737929837f31024f8d53167e66",
            artist : "Anbuu",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=28971",
            colors: ["#FBE5D8","#4C3253"],
            id : uuidv4(),
            active: fasle,
        },
         {
            name : "Ending",
            cover : "https://i.scdn.co/image/ab67616d0000b273eaed420428f4881b7c6db265",
            artist : "sadtoi, Relyae",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=28969",
            colors: ["#354785","#EFE8BD"],
            id : uuidv4(),
            active: false,
        }
    ]
}