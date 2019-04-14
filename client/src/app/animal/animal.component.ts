import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { Animal } from "../../../../common/tables/Animal";
import { CommunicationService } from "../communication.service";
import { MatDialog } from "@angular/material";
import { NewAnimalFormComponent } from "./new-animal-form/new-animal-form.component";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styleUrls: ["./animal.component.css"]
})
export class AnimalComponent {
  protected animals: Animal[] = [];
  protected searchInput: FormControl;
  protected submitted: boolean;

  public constructor (private readonly dialog: MatDialog, private readonly communicationService: CommunicationService) {
    this.searchInput = new FormControl("", [Validators.required]);
    this.submitted = false;
  }

  protected submit(): void {
    if (this.searchInput.invalid) {
      return;
    }
    this.submitted = true;
    this.communicationService.getAnimalsFromName(this.searchInput.value).subscribe((animals: Animal[]) => {
      this.animals = animals;
      this.animals.forEach((animal: Animal) => {
        animal.dateNaissance = new Date(animal.dateNaissance);
        animal.dateInscription = new Date(animal.dateInscription);
      });
      console.log(animals);
    });
  }
  protected openModal(): void {
    this.dialog.open(NewAnimalFormComponent);
  }
}
