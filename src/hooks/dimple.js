// const Dimple = (dimpleQuery,simpleValue)=>{

// let DimpleUrl = new URL(window?.location?.href);

// DimpleUrl.searchParams.set(dimpleQuery, simpleValue);

// if(!simpleValue && 0 !== simpleValue){
// DimpleUrl.searchParams.delete(dimpleQuery);
// }
// // console.log(DimpleUrl.search); ==> bu ?home=hey ni qaytaradi yani ==> ?dimpleQuery=simpleValue
// // console.log(DimpleUrl.searchParams.get(dimpleQuery));  ==> bu dimpleQueryni valuesini olib beradi yani simpleValueni chunki DimpleUrl.searchParams.set(dimpleQuery, simpleValue) shunaqa set bulgan
// };

// export default Dimple;



// const { REACT_APP_BASE_URL } = process.env;


// const useHttps = ()=>{
//     const request= async({
//         baseUrl = REACT_APP_BASE_URL,
//         url = '',
//         method = 'GET',
//         headers = {},
//         body = null,
      
//     })=>{
//         if(body && method?.toLowerCase() === 'post'){
//             body = JSON.stringify(body);
//       headers['Content-Type'] = 'application/json';
//         }
//         const res = await fetch(`${baseUrl}${url}`, {
//             method,
//             headers,
//           });
//           const response = await res.json();
//     if (!response?.success) {
//       throw new Error(
//         response?.message || 'Oops! Something went wrong with refresh token!'
//       );
//     }
//     return response;

//     }
// }






// =========================================================================




// DimpleUrl.searchParams.set('home','hey')} ======> console.log(DimpleUrl) ===>

// URL {origin: 'http://localhost:3000', protocol: 'http:', username: '', password: '', host: 'localhost:3000', …}
// hash: ""
// host: "localhost:3000"
// hostname: "localhost"
// href: "http://localhost:3000/home?home=hey"
// origin: "http://localhost:3000"
// password: ""
// pathname: "/home"
// port: "3000"
// protocol: "http:"
// search: "?home=hey"
// searchParams: URLSearchParams {}
// username: ""
// [[Prototype]]: URL

