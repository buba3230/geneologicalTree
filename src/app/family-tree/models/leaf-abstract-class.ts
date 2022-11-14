import { EventEmitter } from "@angular/core";
import { Family } from "./family.model";


export abstract class LeafClass {
    family: Family;
    child: Family;
    abstract onLeafSelected: EventEmitter<Family>;

    abstract _leafSelected(_leaf: Family);
}