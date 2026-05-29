import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-movie-row',
  imports: [ButtonModule, CarouselModule, TagModule],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.css',
})
export class MovieRow {
  title = input.required<string>();

}
