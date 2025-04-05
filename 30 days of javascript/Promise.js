/*let pro = new Promise((res,rej) => 
{
    if(false)
    {
        return res();
    }
    else
    {
        return rej();
    }
})
pro.then(() =>
{
    console.log('resolve hogya');
}).catch(() =>{
    console.log('reject hogya');
});
const aa = new Promise((res,rej) =>{
      let a =   Math.floor(Math.random() * 10);
      if(a>5)
      {
        return res("Number is greater than 5");
      }
      else
      {
        return rej('Number is small');
      }
});
aa.then(function(data){
    console.log(data);
}).catch(function(data)
{
    console.log(data);
})*/


