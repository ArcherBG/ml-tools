import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {
  urlForm;

  constructor(private UrlService: UrlService, private FormBuilder: FormBuilder) {
    this.urlForm = this.FormBuilder.group({
      urls: '',
    });
   }

  ngOnInit(): void {
  }

  addToList(text: string) {
    // Split and clean urls
    let urls = text.split(new RegExp(`( |\n|,|'|")`));
    console.log("UrlFormComponent -> addToList -> urls", urls)
    urls = urls.filter(url => url.includes('.')); // Search for at least 2 domains eg. google.com

    urls.forEach((url) => this.UrlService.addToList(url));
  }

  onSubmit(formData) {
    console.log("UrlFormComponent -> onSubmit -> formData", formData)
    this.addToList(formData.urls);
  }

}
