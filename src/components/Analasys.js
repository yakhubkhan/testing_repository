import React from 'react'

const Analasys = () => {
    return (
       <>
       <div
        class="offcanvas offcanvas-start w-25"
        tabindex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div class="offcanvas-body px-0">
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu"
          >
            <li class="nav-item">
              <a href="#" class="nav-link text-truncate">
                <i class="fs-5 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">Analasys-1</span>
              </a>
            </li>
            {/* <li>
                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link text-truncate">
                    <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Review-2</span> </a>
            </li> */}
            <ul class="dropdown show">
              <a
                class="nav-link dropdown-toggle  text-truncate"
                href="#"
                id="dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fs-5 bi-bootstrap"></i>
                <span class="ms-1 d-none d-sm-inline">Analasys_2</span>
              </a>

              <li class="dropdown-menu" aria-labelledby="dropdown">
                <a class="dropdown-item" href="">
                Analasys_2-1
                </a>

                <a class="dropdown-item" href="">
                Analasys_3-2
                </a>
              </li>
            </ul>

            <li>
              <a href="#" class="nav-link text-truncate">
                <i class="fs-5 bi-table"></i>
                <span class="ms-1 d-none d-sm-inline">Analasys-3</span>
              </a>
            </li>
            <ul class="dropdown show">
              <a
                class="nav-link dropdown-toggle  text-truncate"
                href="#"
                id="dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fs-5 bi-bootstrap"></i>
                <span class="ms-1 d-none d-sm-inline">Analasys_4</span>
              </a>

              <li class="dropdown-menu" aria-labelledby="dropdown">
                <a class="dropdown-item" href="">
                Analasys_4-1
                </a>

                <a class="dropdown-item" href="">
                Analasys_4-2
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col min-vh-100 py-3">
            {/* <!-- toggler --> */}
            <button
              class="btn float-end"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              role="button"
            >
              <i
                class="bi bi-arrow-right-square-fill fs-3"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
              ></i>
            </button>
          </div>
        </div>
      </div>
       </>
    )
}

export default Analasys
