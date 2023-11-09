import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(private rickAMortySvc: RickAndMortyService) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any){
    this.params.pag +=1;

    this.rickAMortySvc.getCharacters(this.params).subscribe({
      next: (res: any) =>{
        this.characters.push(...res.results);

        if(event) event.target.complete();
      },
      error: (error: any) => {
        if(event) event.target.complete();
      }
    })
  }

  searchCharacters(event:any){
    this.params.pag =1;
    this.params.name = event.target.value.toLowerCase();
    this.rickAMortySvc.getCharacters(this.params).subscribe({
      next: (res: any) =>{
        this.characters = res.results;
        
      },
      error: (error: any) => {
      }
    })
  }

}
