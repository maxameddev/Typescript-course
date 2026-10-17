// 1
let productName: string = "Laptop";
let price: number = 499;
let discountAvailable: boolean = true;

// productName = 100;
// price = "499";
// discountAvailable = "yes";

productName = "Phone";
price = 299;
discountAvailable = false;

// 2
function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

// 3
function printLength(x: unknown) {
  if (typeof x === "string") {
    console.log(x.length);
  }
}

printLength("Hello");
printLength(123);
