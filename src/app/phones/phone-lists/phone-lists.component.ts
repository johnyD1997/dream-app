import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { Phone } from '../phone.model';

@Component({
  selector: 'app-phone-lists',
  templateUrl: './phone-lists.component.html',
  styleUrls: ['./phone-lists.component.css']
})
export class PhoneListsComponent implements OnInit {

  phones: any = [];

  constructor(private phonesService: PhonesService) { }

  ngOnInit(): void {
    this.phonesService.getPhones().subscribe((data) => {
      this.phones = data;
    });
  }

}
