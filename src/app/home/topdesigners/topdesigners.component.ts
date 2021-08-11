import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topdesigners',
  templateUrl: './topdesigners.component.html',
  styleUrls: ['./topdesigners.component.scss']
})
export class TopdesignersComponent implements OnInit {
  public Categories=["Ethinicwear", "Formalwear", "Westernwear", "Indowestern"];
  constructor() { }

  ngOnInit(): void {
  }

}
