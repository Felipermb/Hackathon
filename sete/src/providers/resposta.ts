import { Injectable } from '@angular/core';

@Injectable()
export class resposta{
    public resposta: string;
    constructor(_resposta){
        this.resposta = _resposta;
    }
}