import { Component, Input, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-phone-lists',
  templateUrl: './phone-lists.component.html',
  styleUrls: ['./phone-lists.component.css']
})
export class PhoneListsComponent implements OnInit {

  phones: any = [];
  @Input() searchValue: string = '';

  constructor(private phonesService: PhonesService) { }

  ngOnInit(): void {
    this.phonesService.getPhones().subscribe((data) => {
      this.phones = data;
    });
  }

}
