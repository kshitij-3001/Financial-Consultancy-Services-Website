import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { routes } from './app.routes';          // Import your routes
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HHMConsultancyServices';
}
