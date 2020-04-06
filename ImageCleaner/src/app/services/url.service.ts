import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  items = [];

  addToList(url: string) {
    this.items.push(url);
  }

  getList() {
    return this.items;
  }

  removeFromList(item: string) {
    const index = this.items.findIndex((url) => url === item);
    this.items.splice(index, 1);
  }

  clearList() {
    this.items = [];
    return this.items;
  }
}
