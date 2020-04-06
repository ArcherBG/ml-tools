import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageCleanerComponent } from './image-cleaner/image-cleaner.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCleanerComponent,
    UrlFormComponent,
    GalleryComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
