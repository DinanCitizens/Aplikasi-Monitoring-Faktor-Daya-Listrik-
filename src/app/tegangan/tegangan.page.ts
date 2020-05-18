import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tegangan',
  templateUrl: './tegangan.page.html',
  styleUrls: ['./tegangan.page.scss'],
})
export class TeganganPage implements OnInit {

price: any = '';

  constructor(
  private route: ActivatedRoute
  ) { 
  this.price = this.route.snapshot.params['price'];
  }

  ngOnInit() {
  }

}
