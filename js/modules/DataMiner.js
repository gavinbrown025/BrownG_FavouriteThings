let errorCodes = {
    404: "Not Found! Oh noes! Check your URL",
    500: "Ya sorry can't help you... the server is just borked",
    403: "You shall not pass! Unless you have creds. Then sure go ahead.",
    503: "Service is unavailable! The servers are all having a coffee break."
 }


async function fetchData(sourceURL) {
    // ask for a resource, and then do something with it when it resolves
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Who the Hell is Will Robinson? ${response.status}: ${errorCodes[response.status]}`);
        }
        return response;
    });

    // fetch uses the Promise API, so it'll return with the resource or return false - either way, it resolves the promise
    let dataset = await resource.json();

    for (let object in dataset[0]){
        dataset[0][object].media = dataset[0][object].media.split(",");
    }
    return dataset[0];
}

async function postData(sourceURL) {
    // use fetch or Axios to post to a database here

    return "You are using the postData API endpoint";
}


export{ fetchData };