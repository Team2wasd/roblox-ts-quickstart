// https://github.com/ddavness/roblox-http-queue

import { HttpRequest, HttpQueue } from "@rbxts/http-queue";
// Create a request and send it:

const request = new HttpRequest("https://some.website.com/", "GET", undefined, {
	auth: "im very cool",
	cool: true,
});

// Actual Request URL is https://some.website.com/?auth=im%20very%20cool&cool=true

// The :Send() method returns a Promise that resolves to a response!
request
	.Send()
	.then((response) => {
		print(response.Body);
	})
	.catch((err) => {
		print("ERROR!", err as unknown);
	});

// Do some work while we wait for the response to arrive

// If you want to yield the script until the response arrives
const response = request.AwaitSend();
