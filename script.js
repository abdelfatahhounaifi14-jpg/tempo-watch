
const productsContainer = document.getElementById("products-container");

function displayProducts() {
    if (!productsContainer) return;

    const products = JSON.parse(
        localStorage.getItem("tempoProducts") || "[]"
    );

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        productsContainer.innerHTML = "<p>لا توجد منتجات حالياً.</p>";
        return;
    }

    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";

        const image = document.createElement("img");
        image.className = "product-image";
        image.src = product.image || "";
        image.alt = product.name || "ساعة";

        const name = document.createElement("h3");
        name.textContent = product.name || "ساعة";

        const price = document.createElement("strong");
        price.textContent = (product.price || 0) + " درهم";

        const description = document.createElement("p");
        description.textContent = product.description || "";

        card.append(image, name, description, price);
        productsContainer.appendChild(card);
    });
}

displayProducts();
