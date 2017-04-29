import { Injectable } from '@angular/core';

@Injectable()
export class resposta{
    public resposta: string;
    setResposta(_resposta){
        console.log("Resposta Global");
        this.resposta = _resposta;
    }
}