import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public menuAberto: boolean = false; // true: Icone do hamburguer fica "X"

  openMenu(){
    this.menuAberto = !this.menuAberto;
  }

  ngOnInit(): void {
  }

}
