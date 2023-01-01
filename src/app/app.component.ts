import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JourneyService } from './services/journey.service';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'text-project';

  formulario: FormGroup;

  editorConfig: AngularEditorConfig = {
    editable: true,
    height: '200px',
  };

  constructor(private journeyService: JourneyService) {
    this.formulario = new FormGroup({
      id: new FormControl('DGO8YBRn4FASVwoC4GF4'),
      text: new FormControl(),
    });
  }

  ngOnInit() {
    this.journeyService.getJourney('DGO8YBRn4FASVwoC4GF4').subscribe((data) => {
      console.log(data);
      this.formulario.patchValue(data);
    });
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.journeyService.putJourney(
      this.formulario.value
    );
    console.log(response);
  }
}
