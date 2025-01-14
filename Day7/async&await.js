//Async & Await는 꼭 함께 사용해야 한다.
//await를 사용하기 위해서는 async 함수 안에 감싸줘야 한다. => await는 promise instance가 반환되는 부분에서 사용해야 한다.

const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  })
}
 const b = () => console.log(2);

 const wrap = async () => {
  await a()
  b()
 }
 wrap();

 //반복문에서 사용하는 방법
 const title = ['겨울왕국', '아바타', '신과 함께'];

 const wrap2 = async() => {
  for(const title of titles) {
    const movies = await getMovies(title)
    console.log(title, movies)
  }
 }
 wrap2();