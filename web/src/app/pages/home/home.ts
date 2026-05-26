import { Component } from '@angular/core';
import { MovieRow } from "../../features/home/components/movie-row/movie-row";
import { HeroBanner } from "../../features/home/components/hero-banner/hero-banner";
import { MovieCard } from "../../shared/components/movie-card/movie-card";

@Component({
  selector: 'app-home',
  imports: [MovieRow, HeroBanner, MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}
