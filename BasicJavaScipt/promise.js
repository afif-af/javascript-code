const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "trch",
            location: "fjk",
            time: "10:00 PM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled"));
    }
});

const addTo = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled at ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};

meeting
    .then(addTo)
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message);
    });

console.log(`Hello`);












const promise1 = Promise.resolve(`promise 1 resolved`);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
});

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});
