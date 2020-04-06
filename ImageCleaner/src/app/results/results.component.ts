import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  urls: Array<string>;

  constructor(private UrlService: UrlService) { }

  ngOnInit(): void {
    this.urls = this.UrlService.getList()
  }

  onSave() {
    window.open('data:text/csv;charset=utf-8,' + escape(this.urls.join('\n')))
  }
}
