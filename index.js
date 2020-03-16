let btnToggle = document.getElementById("menu-toggle");
let navToggle = document.getElementById("top-bar");

btnToggle.addEventListener("click", () =>{
    if(navToggle.classList.contains('active')){
        navToggle.classList.remove('active')
    }
    else if(!navToggle.classList.contains('active')){
        navToggle.classList.add('active')
    }
})


$('ul li').click(function(){
    $(this).siblings().removeClass('active');
$(this).toggleClass('active')
})




// phải để tag script ở dưới cùng trong file index.html
//  để cho html render xong thì ms có thể getElementById đc