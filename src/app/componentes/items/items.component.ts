import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

import { Item } from '../../modelos/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = this.itemService.getItems(); 
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal();
    })
    //this.getTotal(); 
  }

  deleteItem(item: Item) {
    //this.items = this.items.filter( x => x.id != item.id );
    console.log(item);
    this.itemService.deleteItem(item).subscribe(i => { this.ngOnInit() });
    //this.getTotal();
    //this.ngOnInit();
  }

  toggleItem(item: Item) {
    console.log(item);
    this.itemService.toggleItem(item).subscribe();
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
          .filter( x => !x.completo)
          .map( x => x.precio * x.cantidad)
          .reduce((acumulador, x ) => acumulador += x , 0);
  }
}
