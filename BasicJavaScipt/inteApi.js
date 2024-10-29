const squares = document.querySelectorAll("div");

const obserber =new IntersectionObserver(
    (squares)=>{
        
    squares.forEach((square)=>{
        if(square.isIntersecting){
            square.target.classList.add("visible");
        }
        else{
            square.target.classList.remove("visible");

        }
    });

});

squares.forEach((square)=> obserber.observe(square));
