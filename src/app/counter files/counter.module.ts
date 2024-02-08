import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from "@angular/common";
import { CounterCustomInputComponent } from "./counter-custom-input/counter-custom-input.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterInputComponent } from "./counter-input/counter-input.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '', component: CounterComponent
    },
]
@NgModule({
    declarations: [
        CounterComponent,
        CounterInputComponent,
        CounterOutputComponent,
        CounterCustomInputComponent
    ],

    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],

})

export class CounterModule {

}