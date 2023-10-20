import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../../phone.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.css']
})
export class PhoneItemComponent implements OnInit {
@Input() phone!: Phone;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(id : string) {
    this.router.navigate(['details/' + id]);
    window.scrollTo(0, 0);
  }
}
