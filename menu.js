        var a = document.getElementById("pro1");
        var b = document.getElementById("pro2");
        var c = document.getElementById("pro3");
        var e = document.getElementById("pro4");
        var f = document.getElementById("pro5");
        var g = document.getElementById("pro6");
        var h = document.getElementById("pro7");
        var i = document.getElementById("pro8");
        var j = document.getElementById("pro9");
        
        var d = 0;

        a.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="150">
                    <img src="images/cap.jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-warning">
                        <div class="mt-2">
                        <h4>Cappuccino</h4>
                            <span><b>Rs:150</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        b.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="180">
                    <img src="images/es.jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-info">
                        <div class="mt-2">
                        <h4>Espresso</h4>
                            <span><b>Rs:180</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        c.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="70">
                    <img src="images/black.jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-danger">
                        <div class="mt-2">
                        <h4>Black Coffee</h4>
                            <span><b>Rs:70</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        e.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="250">
                    <img src="images/waf.jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-danger">
                        <div class="mt-2">
                        <h4>Waffle</h4>
                            <span><b>Rs:250</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        f.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="100">
                    <img src="images/brownie.jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-danger">
                        <div class="mt-2">
                        <h4>Brownie</h4>
                            <span><b>Rs:100</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        g.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="200">
                    <img src="images/hot.jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-danger">
                        <div class="mt-2">
                        <h4>Hot Chocolate</h4>
                            <span><b>Rs:200</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        h.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="120">
                    <img src="images/cheese.jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-danger">
                        <div class="mt-2">
                        <h4>CheeseCake</h4>
                            <span><b>Rs:120</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        i.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="110">
                    <img src="images/cupcake.avif" class="card-img-top" alt="Product Image"> 
                    <div class="card-body bg-danger">
                        <div class="mt-2">
                        <h4>CupCake</h4>
                            <span><b>Rs:110</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        j.addEventListener('click', () => {
            d++;
            document.getElementById('span').innerText = d;
            document.getElementById('offcan').innerHTML += `
                <div class="card" style="width: 250px;margin-left:70px;" data-price="160">
                    <img src="images/latte.webp" class="card-img-top" alt="Product Image">
                    <div class="card-body bg-danger">
                        <div class="mt-2">
                        <h4>Lattee</h4>
                            <span><b>Rs:160</b></span>
                            <input type="number" class="quantity" value="1" min="1">
                        </div>
                    </div>
                    <span class="btn btn-primary m-3" type="button" id="remove" onclick="clos(event)">Remove</span>
                </div>`;
            attachQuantityListeners();
            updateTotal();
        });

        function clos(event) {
            event.target.parentNode.remove();
            d--;
            document.getElementById('span').innerText = d;
            updateTotal();
        }

        function attachQuantityListeners() {
            document.querySelectorAll('.quantity').forEach(function (input) {
                input.removeEventListener('input', updateTotal);  // Remove existing listeners to prevent duplicates
                input.addEventListener('input', updateTotal);
            });
        }

        function updateTotal() {
            let total = 0;
            document.querySelectorAll('.card').forEach(function (item) {
                const price = parseFloat(item.getAttribute('data-price'));
                const quantity = parseInt(item.querySelector('.quantity').value);
                total += price * quantity;
            });
            document.getElementById('total-price').textContent = total.toFixed(2);
        }

        document.addEventListener('DOMContentLoaded', function () {
            attachQuantityListeners();
            updateTotal();
        });