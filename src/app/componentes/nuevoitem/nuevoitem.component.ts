import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../modelos/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-nuevoitem',
  templateUrl: './nuevoitem.component.html',
  styleUrls: ['./nuevoitem.component.css']
})
export class NuevoitemComponent implements OnInit {

  id:number=0;
  titulo: string= '';
  precio: number= 0;
  cantidad: number= 0;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item = new Item();
    item.id = this.id;
    item.titulo = this.titulo;
    item.precio = this.precio;
    item.cantidad = this.cantidad;
    item.completo = false;
    this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/'])
    });
  }

}
