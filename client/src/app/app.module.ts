import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AnimalComponent } from "./animal/animal.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./communication.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, [
      MatGridListModule,
      MatSidenavModule,
      MatCardModule,
      MatListModule,
      MatDividerModule,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule
    ]
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
