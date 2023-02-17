const convert = async (have,want,amount)=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aba9e5520emshbb04915bb2a567ep19dd16jsn6dd01f7fcdd9',
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
};
// let from= have.value;
// let to= want.value;
// let amount=await money.value;
fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`, options)
	.then(response => response.json())
	.then((response)=>{
     console.log(response)
     let new_amount=document.getElementById('new')
     new_amount.innerText=`${amount} ${have} In ${want} :  ${response.new_amount}`;
    })
	.catch(err => console.error(err));
}
con=document.getElementById("con");
console.log(con)
con.addEventListener("click",(e)=>{
  let new_amount=document.getElementById('new')
  new_amount.innerText=`Loading Please Wait..`;
  console.log(have.value)
  console.log(want.value)
  console.log(money.value)
  convert(have.value,want.value,money.value);
})