import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegionService } from '../service/region.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newUserEvent = new EventEmitter<string>();
  simpleForm: FormGroup;
  regions: [];

  constructor(private formBuilder: FormBuilder, private regionService: RegionService) {
    this.getRegion();
    this.simpleForm = formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      region: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  get m(){
    return this.simpleForm.controls;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getRegion() {
    this.regionService.getRegions().subscribe(
      data => {
        this.regions = data;
      },
      err => {
        return console.error(err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getValues(val: any): void{
    this.newUserEvent.emit(val);
  }

}
