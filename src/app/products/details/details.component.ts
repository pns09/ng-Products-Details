import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  prodcode: any;
  proc: any;

  count = 0;
  active: Boolean = false;

  constructor(private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _prodservice: ProductService) { }

  ngOnInit() {
    this.prodcode = this._activatedroute.params.subscribe((data) => {
      this.proc = this._prodservice.getproducts().filter(function (prod) {
        return data.id === prod.productCode;
      });

    });
  }
  back() {
    this._router.navigate(['/products']);
  }

  star() {
    if (this.active) {
      this.count--;
    } else {
      this.count++;
    }
    this.active = !this.active;
  }
}
