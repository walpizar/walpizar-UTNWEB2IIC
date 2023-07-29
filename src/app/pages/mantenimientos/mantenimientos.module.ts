import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MantenimientosComponent } from './mantenimientos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material.module';
import { AdminProductosComponent } from './productos/admin-productos/admin-productos.component';

@NgModule({
  declarations: [
    MantenimientosComponent,
    ClientesComponent,
    ProductosComponent,
    AdminProductosComponent,
  ],
  imports: [CommonModule, MantenimientosRoutingModule, MaterialModule],
})
export class MantenimientosModule {}
