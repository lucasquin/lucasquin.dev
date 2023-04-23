import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  image: string = "url('./../assets/images/banner-home.jpg')";
  type: string = 'lucasquin website';
  title: string = 'lucasquin website';
  subtitle: string = 'Seja bem-vindo(a) ao meu site pessoal de programação!';
  readingTime: string = '2 minutos';
  views: number = 1;
  publishDate: string = '22/04/2023';
}
