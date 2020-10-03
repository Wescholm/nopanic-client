import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements AfterViewInit {

  constructor(public authService: AuthService) { }

  ngAfterViewInit(): void {
    this.setProfileGradient();
  }

  profileToggle() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.add('down');
  }

  getUserInfo() {
    console.log(this.authService.loggedUser)
  }

  logout() {
    this.authService.logout().subscribe(() => location.reload())
  }

  setProfileGradient(): void {
    const colorStr = localStorage.getItem("pg");
    const avatar = document.getElementById('avatar');
    if (colorStr && avatar) {
      const colorArr = colorStr.split('&');
      const [firstColor, secondColor, defaultColor] = colorArr;
      avatar.style.backgroundColor = defaultColor;
      avatar.style.backgroundImage = `linear-gradient(315deg, ${firstColor} 0%, ${secondColor} 74%)`;
    }
  }
}
