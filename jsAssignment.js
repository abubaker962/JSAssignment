const products = []; //Array to store the products
let flag = 0;

function addProduct() {
    document.getElementById("productFormDiv").style.display = "block";
    var productName = document.getElementById("productName").value;
    var productCostPerUnit = document.getElementById("unitCost").value;
    var noOfProducts = document.getElementById("productCount").value;
    if (productName && productCostPerUnit && noOfProducts) {
        flag = 1;
        const product = {
            productName: productName,
            productCostPerUnit: productCostPerUnit,
            noOfProducts: noOfProducts
        };
        products.push(product);
        document.getElementById("calculateTotalButton").style.display = "inline";
        showSuccessMsg();
        emptyForm();
        document.getElementById("clearButton").style.display = "block";
    } else if (flag) {
        alert("Please complete the enteries to add Product");
    }

}

function checkPositiveInteger(evt) {
    if (!((evt.keyCode > 95 && evt.keyCode < 106) || (evt.keyCode > 47 && evt.keyCode < 58) || evt.keyCode == 8)) {
        return false;
    }
}

function showSuccessMsg() {
    var successMsg = document.getElementById("successMsg");
    successMsg.innerHTML = "Product Added Successfully!";
    successMsg.style.display = "block";
    setTimeout(function () {
        successMsg.style.display = "none";
    }, 1000);
}

function emptyForm() {
    document.getElementById("productName").value = "";
    document.getElementById("unitCost").value = "";
    document.getElementById("productCount").value = "";
}

function calculateTotal() {
    var totalCost = 0;
    products.forEach(element => {
        totalCost += Number(element.productCostPerUnit * element.noOfProducts);
    });
    var totalBillElement = document.getElementById("totalBill");
    totalBillElement.style.display = "block";
    totalBillElement.innerHTML = "Total Cost: " + totalCost;
}

function clearPage() {
    document.getElementById("productFormDiv").style.display = "none";
    document.getElementById("calculateTotalButton").style.display = "none";
    document.getElementById("clearButton").style.display = "none";
    document.getElementById("totalBill").style.display = "none";
    products.length = 0;
    flag = 0;
}
