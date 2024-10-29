const takeOrder=(customer,callback)=>{
    console.log(`take order for ${customer}`);
    callback(customer);
};



const processOrder=(customer,callback)=>{
    console.log(`prepocessing order for ${customer}`);

   setTimeout (() => {
     console.log(`cooking complete`);
     console.log(`order processed for ${customer}`);
     callback(customer);
   }, 3000);
};

const completeOrder =(customer)=>{
    console.log(`completed order for ${customer}`);
};



takeOrder("customer 1",(customer)=> {
    processOrder(customer,(customer)=>{
        completeOrder(customer);
    });
});


console.log('hello ! ')



async function myMeeting(params) {
    try{
        const meetingDetails=await meeting;
        const calendar=await addTo(meetingDetails);
        console.log(calendar);
    }catch{
        console.log(`something wrong happedned`);
    }
    
}
myMeeting();