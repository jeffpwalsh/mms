
import {gl_timeStamp, gl_timeStampBTN} from './config.js'

// // Global variable declaration
let productBrand = [];
let productPrice = [];
let productRating = [];

// Fetch data from dummy API/JSON file
export async function getData() {
	const response = await fetch("https://dummyjson.com/products");
	const data = await response.json();
	console.log(data);

	//Map through Object (RestAPI)
	const brand = data.products.map((x) => x.brand);
	const price = data.products.map((x) => x.price);
	const rating = data.products.map((x) => x.rating);

	// Assign mapped object proporties to array + shorten to 10 results pre array
	productBrand = brand.slice(0, 9);
	productPrice = price.slice(0, 9);
	productRating = rating.slice(0, 9);

	//Shorten data arrays


	// Log Tests
	console.log(brand);
	console.log(price);
	console.log(rating);


	//Save STATE to local storage
	localStorage.setItem("product brands", JSON.stringify(productBrand));
	localStorage.setItem("product price", JSON.stringify(productPrice));
	localStorage.setItem("product rating", JSON.stringify(productRating));
  localStorage.setItem("last data fetch", gl_timeStamp);
  gl_timeStampBTN.innerHTML = `last fetch ${gl_timeStamp}`;

}

export {
	productBrand,
	productPrice,
	productRating,
  gl_timeStamp
};