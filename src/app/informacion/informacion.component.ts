import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit, OnDestroy {

  msj: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.msj = params['msj'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
