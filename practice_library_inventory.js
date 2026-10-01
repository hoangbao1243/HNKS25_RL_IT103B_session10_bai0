let books = [
    {bookCode:"B01", title:"Lap Trinh C", category:"CNTT", price:100000, totalCopies:5, availableCopies:2, shelfLocation:"A1"},
    {bookCode:"B02", title:"JavaScript", category:"CNTT", price:150000, totalCopies:3, availableCopies:3, shelfLocation:"A2"},
    {bookCode:"B03", title:"HTML CSS", category:"CNTT", price:120000, totalCopies:4, availableCopies:1, shelfLocation:"A3"}
];

books.push({
    bookCode:"B04", title:"C++", category:"CNTT",
    price:180000, totalCopies:2, availableCopies:2, shelfLocation:"A4"
});

let b = books.find(x => x.bookCode == "B01");
if (b && b.availableCopies > 0) b.availableCopies--;

let i = books.findIndex(x => x.bookCode == "B03");
if (i != -1) books.splice(i, 1);

let total = 0, money = 0;
for (let i = 0; i < books.length; i++) {
    total += books[i].totalCopies;
    money += books[i].totalCopies * books[i].price;
}

console.table(books);
console.log("Tong so sach:", total);
console.log("Tong gia tri:", money, "VND");