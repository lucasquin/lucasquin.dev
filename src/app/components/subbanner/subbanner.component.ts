import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subbanner',
  templateUrl: './subbanner.component.html',
  styleUrls: ['./subbanner.component.css'],
})
export class SubBannerComponent {
  @Input() publishDate: string = '';
  @Input() views: number = 0;
  @Input() readingTime: string = '';
}
