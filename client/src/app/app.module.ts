import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatSelectModule, MatSidenavModule, MatSnackBarModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AnimalComponent } from "./animal/animal.component";
import { NewAnimalFormComponent } from "./animal/new-animal-form/new-animal-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./communication.service";
import { HomeComponent } from "./home/home.component";
import { ProprietaireComponent } from './proprietaire/proprietaire.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    HomeComponent,
    NewAnimalFormComponent,
    ProprietaireComponent,
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
      FormsModule,
      MatExpansionModule,
      MatDialogModule,
      MatSelectModule,
      MatStepperModule,
      MatTabsModule,
      MatTableModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSnackBarModule
    ]
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
  entryComponents: [NewAnimalFormComponent]
})
export class AppModule { }
