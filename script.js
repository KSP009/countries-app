document.getElementById("submit").addEventListener("click", myFunction);

function myFunction() {
  let inp=document.getElementById('countries').value;
  let firstletter=inp.slice(0,1);
  inp=inp.slice(1);
  firstletter=firstletter.toUpperCase();
  inp=`${firstletter}${inp}`;
//   ------------------------------------------------------------------------------------------------------------------------------
//   https://restcountries.eu/rest/v2/all
let apiUrl=`https://restcountries.eu/rest/v2/all`;
async function fetchData() {
    try{
        let response = await fetch(apiUrl);
        if(response.status===200){
            let data= await response.json();
            // console.log(data);
            let imgcontainer= document.getElementById('imgcontainer');
            let container1=document.getElementById('container1');
            let container2=document.getElementById('container2');
            let container3=document.getElementById('container3');
            let container4=document.getElementById('container4');
            let container5=document.getElementById('container5');
            let container6=document.getElementById('container6');
            let container7=document.getElementById('container7');
            let container8=document.getElementById('container8');
            let container9=document.getElementById('container9');
            let container10=document.getElementById('container10');
            let container11=document.getElementById('container11');

            data.forEach(function(country,i){
                if(country.name===inp){
                    // console.log(country.capital);
                    imgcontainer.innerHTML=`<img src=${country.flag} height="250px" width="340px"/>`
                    container1.innerHTML=`<p>Name : ${country.name}</p>`;
                    container1.style.margin ='5px';
                    container2.innerHTML=`<p>Capital : ${country.capital}</p>`;
                    container2.style.margin ='5px';
                    container10.innerHTML=`<p>Official-Language : ${country.languages[0].name}</p>`;
                    container10.style.margin ='5px';
                    container11.innerHTML=`<p>Official-currency : ${country.currencies[0].name}</p>`;
                    container11.style.margin ='5px';
                    container3.innerHTML=`<p>Area : ${country.area}</p>`;
                    container3.style.margin ='5px';
                    container4.innerHTML=`<p>Native Name : ${country.nativeName}</p>`;
                    container4.style.margin ='5px';
                    container5.innerHTML=`<p>Population : ${country.population}</p>`;
                    container5.style.margin ='5px';
                    container6.innerHTML=`<p>Region : ${country.region}</p>`;
                    container6.style.margin ='5px';
                    container7.innerHTML=`<p>Sub-Region : ${country.subregion}</p>`;
                    container7.style.margin ='5px';
                    container8.innerHTML=`<p>Top-Level-Domain : ${country.topLevelDomain}</p>`;
                    container8.style.margin ='5px';
                    // container9.innerHTML=`<p>Numeric-Code : ${country.numericcode}</p>`;
                    
                }
            })
        }else{
            throw new Error('error occupied');
        }
    }catch(err){
        console.log(err.message);
    }
}
fetchData();
}