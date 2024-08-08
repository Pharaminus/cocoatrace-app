
const BarreMenuRecherche = (params) => {
    
    return(
        <div class="topbar">
            <div class="toggle">
                <i class='bx bx-menu' id="btn"></i>
            </div>
            <div class="search_wrapper">
                <label>
                    <span>
                        <i class='bx bx-search'></i>
                    </span>
                    <input type="search" placeholder="Search..." />
                </label>
            </div>
            <div class="user_wrapper">
                <img src="img/user.jpg" alt="" />
            </div>
        </div>
    );
}

export default BarreMenuRecherche;