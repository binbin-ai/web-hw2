// ===== Part A =====
let maxA = 0;

// A1
const A1 = (list) => {
    let sumA = 0;
    for(let i = 0; i < list.length; i++){
        sumA += list[i];
    }

    return sumA / list.length;
}

console.log(`A1 평균 평점: ${A1(ratings)}`);

// A2
const A2 = (ratings) => {
    for(let i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[maxA]){
            maxA = i;
        }
    }
    return [titles[maxA], ratings[maxA]];
}

const [t, r] = A2(ratings)

console.log(`A2 최고 평점: ${t} ${r}`);

// A3
const A3 = (list, min) => {
    let cntA = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i] >= 8){
            cntA++;
        }
    }
    return cntA;
}

console.log(`A3 8점 이상: ${A3(ratings, 8)}편`);

// A4
const A4 = (list) => {
    cntA = [0, 0, 0, 0];
    for(let i = 0; i < list.length; i++){
        const decade = list[i] - (list[i] % 10);
        switch (decade){
            case 2020:
                cntA[0]++;
                break;
            case 2010:
                cntA[1]++;
                break;
            case 2000:
                cntA[2]++;
                break;
            default:
                cntA[3]++;
                break;
        }
    }
    return cntA;
}

const [twenty, ten, zero, before] = A4(years)

console.log(`A4 2020년대 ${twenty}편, 2010년대 ${ten}편, 2000년대 ${zero}편, 그 이전 ${before}편`)

// A5
const A5 = (list) => {
    let bigA = "";
    for(let i = 0; i < list.length; i++){
        if(list[i] >= 1000000){
            bigA += titles[i] + " "; 
        }
    }
    if(bigA === ""){
        bigA = "없음";
    }
    return bigA;
}

console.log(`A5 관객 100만 이상: ${A5(audiences)}`)


// ===== Part B =====

// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
    let sum = 0;
    for(const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
// console.log("평균:", average(movies));

// best : 영화 배열 ⇒ 최고 평점 영화 제목
const best = (list) => {
    let top = list[0]
    for(const i of list) {
        if(i.rating > top.rating) {
            top = i;
        }
        else if(i.rating === top.rating){
            top = top;
        }
    }
    return top;
}
// console.log("최고:", best(movies).title);

// filterByRating : 영화 배열, 기준 평점 ⇒ 평점 8점이상 개수 반환
const filterByRating = (list, min) => {
    return list.filter(movie => movie.rating >= min);
}
// console.log("8점 이상:", filterByRating(movies, 8) + "편");

// sortBy : 배열, 키 이름, 참이면 내림차순 ⇒ 새 배열
const sortBy = (list, key, desc) => {
    const sign = desc ? -1 : 1;
    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]) * sign;
        }
        return (a[key] - b[key]) * sign;
    });
};
// console.log(sortBy(movies, "audience", true)[0])

// search : 배열, 문자열 ⇒ 새 배열
const search = (list, keyword) => {
    let list_dic = [];
    keyword = keyword.trim().toLowerCase()
    for(const m of list){
        if(m.title.toLowerCase().includes(keyword)){
            list_dic.push({...m})
        }
    }
    return list_dic;
}

// for(let i = 0; i < search(movies, "파파").length; i++){
//     console.log(search(movies, "파파")[i].title)
// }

// formatNumber : 숫자나 숫자 문자열 ⇒ 1000단위 구분기호
const formatNumber = (n) => {
    return Number(n).toLocaleString("ko-KR")
}
// console.log(formatNumber(1234567))

// yearsSince : "2014-11-06" ⇒ 올해까지 몇 년(숫자)
const yearsSince = (dateStr) => {
    let now_year = 2026;
    let last_year = dateStr.slice(0, 4);
    last_year = parseInt(last_year);
    return now_year - last_year
}
// console.log(`개봉한 지 ${yearsSince(best(movies).date)}년`);

document.getElementById("out").textContent = `전체 10편, 평균 평점 ${average(movies).toFixed(1)}점\n최고 평점 ${best(movies).title} (${best(movies).rating}점, 개봉한 지 ${yearsSince(best(movies).date)}년)\n관객 1위 ${sortBy(movies, "audience", true)[0].title} (누적 ${formatNumber(sortBy(movies, "audience", true)[0].audience)})`


// ===== Part C =====

// results 키에 해당하는 벨류 반환하는 함수
const getList = (data) => {
    return data.results;
}

// 선택한 키 값의 평균구하는 함수
const averageBy = (list, key) => {
    sum = 0;
    switch (key){
        case "id":
            for(let m of list) sum += m.id;
            break;
        case "popularity":
            for(let m of list) sum += m.popularity;
            break;
        case "vote_average":
            for(let m of list) sum += m.vote_average;
            break;
        case "vote_count":
            for(let m of list) sum += m.vote_count;
            break;
        default:
            console.log("존재하지 않는 키 값 입니다.")
            return null;
    }
    return sum / list.length;

}

console.log(`C1 page ${TMDB.page}, total_pages ${TMDB.total_pages}, total_results ${TMDB.total_results}, 이번 응답 ${getList(TMDB).length}편`)
console.log(`C2 상영작 평균 평점: ${averageBy(getList(TMDB), "vote_average").toFixed(1)}`)
console.log(`C4 'Hunger' 검색: ${search(getList(TMDB), "Hunger").length}편`)
console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title","release_date", "vote_average"]);

