# 실습과제 #2 : 영화 데이터를 자바스크립트로
- 이름 / 학번 : 박현빈 / 26
- 사이트 주소 : https://binbin-ai.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-25)
## 구현 항목 체크
- [O] 1. Part A: data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로계산한 A1~A5 다섯 줄이 콘솔에 찍힘.
- [O] 2. Part B 함수 7개: movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search, formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과.
- [O] 3. Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로 C1, C2, 상위 5편 표, C4가 콘솔에 찍힘.
- [O] 4. 출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 pre id="out"에 Part B 요약 3줄(textContent 한 번).
- [O] 5. 코드 품질: 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본 그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름.
- [O] 6. 제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI기록, 어느 파일에도 API 키 없음.
## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기)
| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | '1,234,567' | '1,234,567' |
| 2 | average(movies).toFixed(1) | '7.7' | '7.7' |
| 3 | best(movies).title | '너의 이름은' | '너의 이름은' |
| 4 | sortBy(movies, "rating", true)[0].title | '너의 이름은' | '너의 이름은' |
| 5 | filterByRating(movies, 8).length | 5 | 5 |
| 6 | search(movies, " 인터 ").length | 1 | 1 |
| 7 | yearsSince("2014-11-06") | 12 | 12 |
| 8 | sortBy(movies, "rating", true)[1].title 이후 movies[1].title | sortBy(movies, "rating", true)[1].title=>'인터스텔라' movies[1].title=>'어벤져스: 엔드게임' | sortBy(movies, "rating", true)[1].title=>'인터스텔라' movies[1].title=>'어벤져스: 엔드게임' | // 원본 리스트와 순위 정렬 리스트의 1등이 같아 1번 인덱스로 시연
## 어려웠던 점 3가지와 해결
- PartA 배열이 PartB 배열과 같이 리스트 내부 객체 리터럴 형식인 줄 알고 과제를 진행했으나, 요구사항을 보고 아니라는것을 깨달은 후 수정함
- JS 문법이나 규칙이 다른 프로그래밍 언어와 다른것들이 많아서 해당 문법 사용법을 검색하여 과제 진행
- 자가 테스트 6번의 코드가 원하는 반환값이 개수여야하는데 객체를 반환하여서 빈 리스트를 생성하고 해당 키워드가 포함되는 제목이 존재하는 객체를 리스트에 추가시켜 해당 리스트를 반환하게끔 함 => 결과적으로 호출시 .lenght의 값으로 리스트의 길이가 반환되므로 합당 
## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)
- 검색어 : js 스위치문 사용법
- 검색어 : typeof 어케써
- 검색어 : 자바 스크립트 함수 반환값 두개일수있나
- 검색어 : 자바스크립트 파이썬 f 스트링 같은거 어케함
## 생성형 AI 사용 내역 (없으면 "없음")
- 질문 요지 : js에서 스위치문을 사용하는 방법을 몰라서 질문
- 답변 요약 : 스위치문 사용법을 알려줌
- 채택 여부 : Y
- 질문 요지 : typeof 사용법을 까먹어서 질문
- 답변 요약 : typeof 사용법을 알려줌
- 채택 여부 : Y
- 질문 요지 : js에서 함수 반환값이 2개 이상일 수 있는지 궁금하여 질문
- 답변 요약 : 구조 분해 할당 방법을 알려줌
- 채택 여부 : Y
- 질문 요지 : js에서 문자열 내부에 변수를 넣는 방법을 까먹어 질문
- 답변 요약 : `${}` 방법을 알려줌
- 채택 여부 : Y