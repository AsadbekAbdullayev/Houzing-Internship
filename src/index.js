import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css'; 
import 'antd/dist/antd.css';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
 
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Root />
      </BrowserRouter>
      </QueryClientProvider>

  </React.StrictMode>
);



// 1
    // var str = 'AABSSAH'
    // NATIJA : A3BS2H

//  const countDublicate = (value) =>{
//  var  data = value.split('')
//  var newData = []
//  data.map((items,index)=>data.indexOf(items) == index &&  newData.push(items))
//  var Result = []

// for (var i = 0; i < newData.length; i++) {
//     Result.push(newData[i])
//         var count = 0;
//         for (var j = 0; j < data.length; j++) {
//             if(data[j] == newData[i]){
//             count++
//             }
//         }
//     if(count !== 1){
//         Result.push(count)
//     }
//             count = 0;          
// }
//   console.log(Result.join(''))
//  }

// countDublicate('AAAAAAB')


// ================================================================================



// 2
    // var str = '#Asad##bek#'
    // // NAtija: (Asad)(bek)
  

// const Replace = (value)=>{


//      var str = value
//      var newStr = []
//      var count = 1;
// for (var i = 0; i < str.length; i++) {
// if(str[i]== '#'){
//  if(count%2 == 1){
//     newStr.push('(')
//  }if(count%2 == 0)
//  {
//     newStr.push(')')
//  }
// count++
// }else{
//     newStr.push(str[i])
//  }
// }
// console.log(newStr.join(''))
// }

// Replace('#dkdk#lll#')

// ================================================================================


// 3
     
     // var str1 = 100
     // var str2 = 200
     // Natija: 100dan 200gacha bolgan random sonlar chiqishi kk

// console.log(Math.ceil(Math.random()*100 +100))