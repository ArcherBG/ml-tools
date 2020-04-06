import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-cleaner',
  templateUrl: './image-cleaner.component.html',
  styleUrls: ['./image-cleaner.component.css']
})
export class ImageCleanerComponent implements OnInit {
  query = `urls=Array.from(document.querySelectorAll('.rg_i')).map(el=> el.hasAttribute('data-src') ?
    \t\tel.getAttribute('data-src') :
    \t\tel.getAttribute('data-iurl'));
    \twindow.open('data:text/csv;charset=utf-8,' + escape(urls.join('\\n')));`;

  constructor() { }

  ngOnInit(): void {
  }

  async onCopy() {
    await navigator.clipboard.writeText(this.query);
  }
}
