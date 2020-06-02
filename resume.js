var skill_a=document.getElementById('skills_a');
var skill_body=document.getElementById('skills');

skill_a.addEventListener('click',function(event)
{
    event.preventDefault();

     var interval=setInterval(function()
     {
        var cordinates=skill_body.getBoundingClientRect();
        if(cordinates.top<=0)
         {
             clearInterval(interval);
         }
         window.scrollBy(0,30);
         
     },10);
});

var work_a=document.getElementById('work_a');
var work_body=document.getElementById('work-exprience');

work_a.addEventListener('click',function(event)
{
    event.preventDefault();

     var interval=setInterval(function()
     {
        var cordinates=work_body.getBoundingClientRect();
        if(cordinates.top<=0)
         {
             clearInterval(interval);
         }
         window.scrollBy(0,30);
         
     },10);
});

var contact_a=document.getElementById('contact_a');
var contact_body=document.getElementById('#contact');

contact_a.addEventListener('click',function(event)
{
    event.preventDefault();

     var interval=setInterval(function()
     {
        var cordinates=contact_body.getBoundingClientRect();
        if(cordinates.top<=0)
         {
             clearInterval(interval);
         }
         window.scrollBy(0,30);
         
     },10);
});
// --------------------------------skills---------------------

var progressbar=document.querySelectorAll(".level .zero");
var skillsc=document.getElementById('skills');
initial();
window.addEventListener('scroll',checkscroll);

function initial()
{
    for(let bar of progressbar)
    {
           bar.style.width="0%";
    }
}
// function fillbars()
// {
//       for(let lang of progressbar)
//       {
//           let bar_width=lang.getAttribute('bar-width');
//           let start=0;

//           let move=setInterval(function()
//           {
//              if(start>bar_width)
//              {
//                  clearInterval(move);
//                  return;
//              }
//              start++;
//              lang.style.width=start+'%';
//           },10);
//       }
// }
function fillbars(bar)
{ 
   let bar_width=bar.getAttribute('bar-width');
   let start=0;

   let move=setInterval(function()
   {
                if(start>bar_width)
                 {
                     clearInterval(move);
                     return;
                 }
                 start++;
                 bar.style.width=start+'%';

   },10)
}

// function checkscroll()
// {
//       var cordinates=skillsc.getBoundingClientRect();

//       if(!done && cordinates.top<window.innerHeight)
//       {
//           done=true;
//           fillbars();
//       }
//       if(cordinates.top>window.innerHeight)
//       {
//           initial();
//           done=false;
//       }
// }
function checkscroll()
{
    for(let bar of progressbar)
    {
        let cord=bar.getBoundingClientRect();
        if(bar.getAttribute('done')=='false'  && cord.top<window.innerHeight)
        {
            console.log("hi");
            bar.setAttribute('done',"true");
            fillbars(bar);
        }
        else if(cord.top>window.innerHeight)
        {
            bar.setAttribute('done',"false");

        }

    }
    
    
}
