
const BarreScore = (params) => {
    
    return(
        <div class="card-boxes">
            <div class="box">
                <div class="right_side">
                    <div class="numbers">9.99</div>
                    <div class="box_topic">Nombre Producteurs</div>
                </div>
                <i class='bx bx-user'></i>
            </div>
            <div class="box">
                <div class="right_side">
                    <div class="numbers">15.9</div>
                    <div class="box_topic">Nombre Parcelles</div>
                </div>
                <i class='bx bxs-leaf'></i>
            </div>
            <div class="box">
                <div class="right_side">
                    <div class="numbers">30.20</div>
                    <div class="box_topic">Nombre Sacs</div>
                </div>
                <i class='bx bx-package'></i>
            </div>
            <div class="box">
                <div class="right_side">
                    <div class="numbers">50.9</div>
                    <div class="box_topic">Nombre Acheteurs</div>
                </div>
                <i class='bx bxs-cart-add'></i>
            </div>
        </div>
    );
}

export default BarreScore;