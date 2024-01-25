import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <Style>
      .navbar-brand{ font-weight: 700; flex-grow: 1;font-size: 30px;}
      .nav-item{font-size: 17px; margin-inline: 15px; }
      .active{text-decoration: underline; font-weight: 500;}</Style>
    <nav
      class="navbar navbar-expand-md navbar-light   "
      style="background-color: #e3f2fd;height: 90px;"
    >
      <div class="container-fluid container">
        <a class="navbar-brand" href="#">Voitures-Cars</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="/Voitures" routerLinkActive="active" ariaCurrentWhenActive="page" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/Voiture/3" routerLinkActive="active" ariaCurrentWhenActive="page" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  `,
  styles: ``,
})
export class HeaderComponent {}
