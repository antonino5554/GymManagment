//importa le funzionalità necessarie ad Angular
import { NgModule } from '@angular/core'; //permette di definire un modulo
import { CommonModule } from '@angular/common'; //permette di usare funzioni base di Angular
import { FormsModule } from '@angular/forms'; //permette di gestire i moduli HTML

import { IonicModule } from '@ionic/angular'; //permette di usare componenti grafici Ionic

//permette di usare le regole di navigazione definite nell'altro file
import { CreaAllenamentoPageRoutingModule } from './crea-allenamento-routing.module';

//permette di usare la pagina all'interno del modulo
import { CreaAllenamentoPage } from './crea-allenamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaAllenamentoPageRoutingModule
  ],
  declarations: [CreaAllenamentoPage] //informa Angular che quets pagina fa parte del modulo
})
//definisce un modulo riutilizzabile
export class CreaAllenamentoPageModule {}
