import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../phones.service';
import { PhoneDetails } from '../phone-details.model';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phoneDetails!: PhoneDetails;
  
  constructor(private activatesRoute: ActivatedRoute, private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.activatesRoute.paramMap.subscribe(params => {
      this.phoneService.getDetails(params.get('id')!).subscribe((data) => {
        this.phoneDetails = JSON.parse(JSON.stringify(data));
        console.log(this.phoneDetails);
      });
    })
  }

}
