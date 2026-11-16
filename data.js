// PartA 배열
const titles = ["너의 이름은", "어벤져스: 엔드게임", "인터스텔라", "매트릭스", "파파로티", "극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"];

const years = [2016, 2019, 2014, 1999, 2013, 2026, 2026, 2026, 2026, 2026];

const ratings = [8.4, 8.2, 8.4, 8.2, 7, 7.4, 7.2, 8, 7, 7.6];

const audiences = [0, 0, 0, 0, 0, 2248126, 3374510, 104874, 1999477, 77153];

// PartB 배열
const movies = [
    {
        title: "너의 이름은", year: 2016, date: "2016-07-01",
        rating: 8.4, audience: 0, poster: "/2DJCufz3Oa703PbLjNX1pM6MCG2.jpg",
        type: "mine", rank: null
    },
    {
        title: "어벤져스: 엔드게임", year: 2019, date: "2019-04-24",
        rating: 8.2, audience: 0, poster: "/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg",
        type: "mine", rank: null
    },
    {
        title: "인터스텔라", year: 2014, date: "2014-11-04",
        rating: 8.4, audience: 0, poster: "/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg",
        type: "mine", rank: null
    },
    {
        title: "매트릭스", year: 1999, date: "1999-03-31",
        rating: 8.2, audience: 0, poster: "/fxBxoXFAYKWde6lKzXxSusn18Av.jpg",
        type: "mine", rank: null
    },
    {
        title: "파파로티", year: 2013, date: "2013-03-14",
        rating: 7, audience: 0, poster: "/AJ3Lzeh6EvdJcf3dHxi7b0x0OY.jpg",
        type: "mine", rank: null
    },
    // 여기서부터 박스오피스
    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30",
        rating: 7.4, audience: 2248126, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
        type: "boxoffice", rank: 1
    },
    {
        title: "암살자(들)", year: 2026, date: "2026-09-23",
        rating: 7.2, audience: 3374510, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg",
        type: "boxoffice", rank: 2
    },
    {
        title: "실낙원", year: 2026, date: "2026-10-21",
        rating: 8, audience: 104874, poster: "/wkm9BQLok7U2KihcCspCa663Qse.jpg",
        type: "boxoffice", rank: 3
    },
    {
        title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23",
        rating: 7, audience: 1999477, poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg",
        type: "boxoffice", rank: 4
    },
    {
        title: "클레이페이스", year: 2026, date: "2026-10-21",
        rating: 7.6, audience: 77153, poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg",
        type: "boxoffice", rank: 5
    }
];

