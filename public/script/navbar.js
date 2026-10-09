document.querySelector("header").innerHTML=`
    <nav class="navbar navbar-expand-sm navbar-dark sticky-top bg-success">
        <div class="container-fluid d-flex align-items-center">

            <a class="navbar-brand" href="/welcome.html">
                <img src="../img/high-resolution-color-logo.png" alt="logo" class="rounded" height="100">
            </a>
            <div class="input-group mx-3" style="max-width: 500px;">
                <span class="input-group-text bg-white">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="7"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </span>
                <input type="text" class="form-control" placeholder="search">
                <div id="search-dropdown"> </div>
            </div>
            <button class="btn btn-outline-light ms-auto">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </span>
            </button>

        </div>
    </nav>`