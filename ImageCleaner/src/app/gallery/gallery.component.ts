import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: Array<string>;
  constructor(private UrlService: UrlService) { }

  ngOnInit(): void {
    this.items = this.UrlService.getList();
  }

  async onCopyUrl(item: string) {
    await navigator.clipboard.writeText(item);
  }

  onDelete(item: string) {
    this.UrlService.removeFromList(item);
  }
}
