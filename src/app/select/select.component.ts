import { Component, OnInit } from '@angular/core';
import { Values } from '../dropdown.interface';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  public values: Array<Values> = [
    { id: 1, name: "Sergio", available: true },
    { id: 2, name: "Juan", available: false },
    { id: 3, name: "Maria", available: true },
    { id: 4, name: "Lucia", available: false }
  ]

  ngOnInit(): void {
  }

}
