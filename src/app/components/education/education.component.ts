import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  cert1 = "/assets/cert1.pdf";
  cert2 = "/assets/cert2.pdf";
  cert3 = "/assets/cert3.pdf";
  cert4 = "/assets/cert4.pdf";

}
