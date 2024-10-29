const circle = document.getElementById('circle');

const obserber =new IntersectionObserver(
    (items)=>{
    items.forEach((item)=>{
        if(item.isIntersecting){
            console.log(`${item.target} is visible `);
        }
        else{
            console.log(`${item.target} is not visible`)

        }
    });
    },
    {
        threshold:0.5,
    }
);

obserber.observe(circle);
